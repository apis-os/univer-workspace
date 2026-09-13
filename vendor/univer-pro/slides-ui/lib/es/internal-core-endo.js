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
import { fc, pc } from "./slides-ui-open-slide-image-crop-operation.js";
import { Cl, Sl, Tc, bl, cl, gl, ul, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB307, vl, yl } from "./slides-ui-plugin-config-key.js";
import { nu, ru } from "./slides-ui-slide-page-background-object.js";
import { wf } from "./slides-ui-slide-canvas-object-provider-registry.js";
import { Ef, Tf } from "./slides-ui-slide-object-adaptor-registry.js";
import { Cf } from "./slides-ui-object-adaptor.js";
import { DE, EE, Of, Og, PC, QE, RE, RT, ST, UE, XE, ZE, aE, dE, eD, fE, iE, kf, lE, mw, oE, qE, rE, vE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614832, wE, zE, zT } from "./slides-ui-slides-uiplugin.js";
import { tu } from "./slides-ui-slide-image-object.js";
import { Lf } from "./slides-ui-slide-hit-test.js";
import { Pf } from "./slides-ui-drawing-okey.js";
import { Zf } from "./slides-ui-thumbnail-renderable-drawing.js";
import { jp } from "./slides-ui-object-provider.js";
import { HE, gm } from "./slides-ui-slide-render.js";
import { Am } from "./slides-ui-slide-drawing-state.js";
import { Bh } from "./slides-ui-islide-embed-runtime.js";
import { Uh } from "./slides-ui-ieditor-uiservice.js";
import { Kh, qh } from "./slides-ui-islide-embed-focus-owner.js";
import { sg } from "./slides-ui-slide-playback.js";
import { ag } from "./slides-ui-islide-playback.js";
import { jy } from "./slides-ui-slide-sidebar.js";
import { Cy, dy, hy, py, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB286 } from "./slides-ui-slide-shape-ribbon-tab.js";
import { Hy } from "./slides-ui-slide-uicontroller.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614829 } from "./slides-ui-islide-ruler-state.js";
import { Sb } from "./slides-ui-slide-insert.js";
import { Om } from "./slides-ui-islide-drawing-state.js";
import { TT } from "./slides-ui-islide-alignment-guide.js";
import { Mm, Nm, jm } from "./slides-ui-islide-embed-floating-active.js";
import { sE } from "./slides-ui-islide-transformer-visibility.js";
import { VE } from "./slides-ui-slide-canvas-pop-manager.js";
import { tD } from "./slides-ui-slide-object.js";
function mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468635) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468635 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468635) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468635 > 0;
}
function hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468638) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468637 == "number") return mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468637) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468637 : null;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468637 != "string") return null;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB208 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468637.trim();
  if (!var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB208) return null;
  if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB208.endsWith("%")) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461697 = Number.parseFloat(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB208.slice(0, -1));
    return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461697) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468638 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461697 / 100 : null;
  }
  if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB208.endsWith("px")) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698 = Number.parseFloat(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB208.slice(0, -2));
    return mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461698 : null;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468639 = Number.parseFloat(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB208);
  return mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468639) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468639 : null;
}
function gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468645) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646 = hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468644);
  return mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646) ? Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646) : mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468645) ? Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468645) : Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468644 * 95 / 100);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F4(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468651) {
  return mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468651 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468651.width) && mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468651 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468651.height) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468651.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468651.height : pc;
}
function vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468655) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D487 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468653),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D488 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468654);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D487 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D488 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468655 ? {
    width: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D488 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468655),
    height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D488
  } : {
    width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D487,
    height: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D487 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468655)
  };
}
function yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468661) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468662 = hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660);
  return mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468662) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468662 : mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660) ? Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468661) : Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660);
}
function bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D491 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668.width) ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D492 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668.height) ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468670 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F4(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669.height) return vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669.width ? gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667.width, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D491) : yc(undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667.width, 95 / 100), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669.height ? gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667.height, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D492) : yc(undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667.height, 95 / 100), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468670);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468671 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667.width,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667.height;
  return vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468671 * fc, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468672 * fc, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468670);
}
function wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468701, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468702) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468703 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468701),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB196 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468703.documentStyle ?? {},
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB197 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB196.renderConfig
    };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468702.horizontalAlign !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468704;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB197.horizontalAlign = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468702.horizontalAlign;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468704 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468703.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468704.paragraphs;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468705;
      ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468705 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.paragraphStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468705.horizontalAlign) === undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.paragraphStyle = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.paragraphStyle,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468702.horizontalAlign
      });
    }
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468702.verticalAlign !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB197.verticalAlign = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468702.verticalAlign), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468703.documentStyle = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB196,
    renderConfig: Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB197).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB197 : undefined
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468703;
}
function Tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711.body,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468713 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712.paragraphs,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468714 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712.dataStream;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468714) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A128 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468714.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468714[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140] === "\x0d" && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A128.push(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140);
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932 = new Set((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468713 ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.paragraphId).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701));
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712.paragraphs = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A128.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704;
    return {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468713 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468713[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703]),
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702,
      paragraphId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468713 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468713[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704.paragraphId) ?? createParagraphId(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932)
    };
  });
}
function El(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468722;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468723 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468721 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468719.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468721.renderConfig,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468724 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468719);
  Tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468724);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725 = wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468724, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720.horizontalAlign ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468723 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468723.horizontalAlign)
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB200 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725.documentStyle ?? {},
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A150 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720.isHorizontal !== false,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB200.renderConfig,
      wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720.wrapStrategy ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468722 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB200.renderConfig) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468722.wrapStrategy) ?? WrapStrategy.WRAP
    };
  return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201.horizontalAlign, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A150 ? (delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201.centerAngle, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201.vertexAngle) : (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201.centerAngle = VERTICAL_ROTATE_ANGLE, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201.vertexAngle = VERTICAL_ROTATE_ANGLE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725.documentStyle = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB200,
    documentFlavor: DocumentFlavor.UNSPECIFIED,
    autoHyphenation: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB200.autoHyphenation ?? BooleanNumber.FALSE,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    pageSize: {
      width: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A150 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720.rect["width"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720.rect["height"],
      height: resolveShapeTextDocumentPageHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A150 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720.rect["height"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468720.rect["width"])
    },
    renderConfig: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725;
}
function Ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468738) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468738 === false ? {
    pageWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737.height,
    alignmentExtent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737.width,
    renderHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737.height
  } : {
    pageWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737.width,
    alignmentExtent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737.height,
    renderHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737.height
  };
}
function kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468743) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468743 === false ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468742 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468741;
}
function Al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468749) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468749) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708 = resolveShapeTextDocumentRenderLayout({
      contentHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.actualHeight,
      opticalVerticalOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.opticalVerticalOffset,
      verticalAlign: VerticalAlign.TOP,
      verticalOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.contentVerticalOffset ?? 0,
      viewportHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.minHeight
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747.rect(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.clipTop, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.clipHeight), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747.clip();
  }
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB210 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.contentVerticalOffset ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.opticalVerticalOffset;
  var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB210 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.isHorizontal ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747.translateWithPrecision(0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB210) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747.translateWithPrecision(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB210, 0)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.documents["draw"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747.restore();
}
function jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468753) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468754;
  let {
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468755,
      size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468756,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468757,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468758,
      isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468759
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468753,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB210 = {
      left: 0,
      top: 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468756.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468756.height
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468760 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468754 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468755.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468754.renderConfig,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468757 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468760 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468760.verticalAlign),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468762 = isShapeTextOpticalVerticalAlignEnabled(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468753.shapeTextOpticalVerticalAlign ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468760 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468760.shapeTextOpticalVerticalAlign)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468763 = El(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468755, {
      rect: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB210,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468762 ? VerticalAlign.TOP : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468758,
      isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468759,
      wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468753.wrapStrategy
    });
  return Ml({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468753,
    documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468763,
    verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761,
    shapeTextOpticalVerticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468762
  });
}
function Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468775) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468776;
  let {
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468777,
      localeService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468778,
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779 = "editor-ui-document-renderer"
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468775,
    {
      size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468780,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468781,
      isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468782
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468775,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783 = Ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468782),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212 = {
      left: 0,
      top: 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468780.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468780.height
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468776 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468777.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468776.renderConfig,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468781 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784.verticalAlign),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468786 = isShapeTextOpticalVerticalAlignEnabled(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468775.shapeTextOpticalVerticalAlign ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784.shapeTextOpticalVerticalAlign)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468787 = new DocumentDataModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468777),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468788 = new DocumentViewModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468787),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468789 = DocumentSkeleton.create(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468788, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468778);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468789.calculate();
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468790 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468789.getActualSize().actualHeight,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468791 = resolveShapeTextDocumentRenderLayout({
      contentHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468790,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468786 ? VerticalAlign.TOP : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468785,
      viewportHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.alignmentExtent
    });
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468787.updateDocumentStyle({
    pageSize: {
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.pageWidth,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468791.contentHeight
    }
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468787.updateDocumentDataMargin({
    t: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468791.marginTop
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468789.calculate();
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468792 = new Documents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468789, {
      pageMarginLeft: 0,
      pageMarginTop: 0,
      onTextFillImageLoaded: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468775.onTextFillImageLoaded
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468793 = kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468791.contentHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.renderHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468782);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468792.resize(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468793);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D507 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468786 ? getShapeTextOpticalVerticalOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.alignmentExtent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468785) : 0;
  return {
    documents: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468792,
    skeleton: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468789,
    docViewModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468788,
    docModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468787,
    width: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212.width,
    minHeight: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB212.height,
    actualHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468790,
    contentHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468793,
    marginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468791.marginTop,
    contentVerticalOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468791.contentVerticalOffset,
    opticalVerticalOffset: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D507,
    isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468782 !== false,
    dispose: () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468792.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468789.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468788.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468787.dispose();
    }
  };
}
function Nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468813) {
  try {
    return JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468813);
  } catch {
    return String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468813);
  }
}
function Pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468815) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468816 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468815;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468816.getCurrentLocale == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468816.getCurrentLocale() : "";
}
function Fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468821) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468823 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468820.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822.renderConfig;
  return Nl({
    key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.key,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.text,
    documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468820,
    textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.textStyle,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.left,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.top,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.width,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.height,
    horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.horizontalAlign ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468823 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468823.horizontalAlign),
    verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.verticalAlign ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468823 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468823.verticalAlign),
    isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.isHorizontal,
    wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.wrapStrategy,
    clip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.clip,
    sourceTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.sourceTop,
    viewportHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.viewportHeight,
    shapeTextOpticalVerticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819.shapeTextOpticalVerticalAlign ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468823 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468823.shapeTextOpticalVerticalAlign),
    locale: Pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468821)
  });
}
function Il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468834 = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468835) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829.translateWithPrecision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468832), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468833 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468835 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829.rect(0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468830.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468835), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829.clip()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468834 !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829.translateWithPrecision(0, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468834), Al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468833 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468835 === undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468829.restore();
}
function Ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468844) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468845;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468843.clip !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468843.clip;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468846 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468845 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468844.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468845.renderConfig;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468843.wrapStrategy ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468846 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468846.wrapStrategy)) !== WrapStrategy.OVERFLOW;
}
function Rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468855) {
  return !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852.resources) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852.signature !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468853 ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852.left = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468854.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852.top = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468854.top, Il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852.resources, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468854.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468854.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468854.sourceTop, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468854.viewportHeight), true);
}
function zl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468862;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468862 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861.resources) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468862.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861.signature = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861.resources = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861.left = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861.top = undefined);
}
function Bl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468868) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468869;
  let {
    key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468870,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871,
    documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468873,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468874,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468875,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876,
    localeService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468877,
    horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468878,
    verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468879,
    isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468880
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468877 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468875 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872 === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871 === undefined) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468881 = normalizeSlideDocumentDataStream(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872 ?? plainTextToSlideDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871 ?? "", {
      id: "slide-doc-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468870,
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866.textStyle
    })),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468882 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468869 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468881.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468869.renderConfig,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468883 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468878 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468882 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468882.horizontalAlign),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468884 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468879 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468882 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468882.verticalAlign),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468885 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867 ? Fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468877) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468886 = Ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468881);
  if (Rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468886)) return true;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867.resources && zl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468887 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468868({
    id: "slide-text-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468870,
    documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468881,
    size: {
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468875,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876
    },
    localeService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468877,
    horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468883,
    verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468884,
    isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468880,
    wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866.wrapStrategy,
    shapeTextOpticalVerticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866.shapeTextOpticalVerticalAlign ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468882 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468882.shapeTextOpticalVerticalAlign),
    onTextFillImageLoaded: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866.onTextFillImageLoaded
  });
  return Il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468886, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866.sourceTop, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468866.viewportHeight), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867.signature = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867.resources = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867.left = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468867.top = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468874) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468887.dispose(), true;
}
function Vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468913) {
  return Bl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468913, jl);
}
function Hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468919) {
  return Bl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468919, Ml);
}
function Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468925 = {}) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D509 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468923) ? Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468923) : 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D510 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468924) ? Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468924) : 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D511 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468925.horizontalInset ?? 12,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D512 = Math.min(Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D511) ? Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D511) : 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D509 / 2),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D513 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468925.verticalInset ?? 6,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D514 = Math.min(Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D513) ? Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D513) : 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D510 / 2);
  return {
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D512,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D514,
    width: Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D509 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D512 * 2),
    height: Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D510 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D514 * 2)
  };
}
function Wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468929) {
  "@babel/helpers - typeof";

  return Wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711;
  }, Wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468929);
}
function Gl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468932) {
  if (Wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468933 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468933 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468934 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468933.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468932 || "default");
    if (Wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468934) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468934;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468932 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931);
}
function Kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468939) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468940 = Gl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468939, "string");
  return Wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468940) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468940 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468940 + "";
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468945) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468944 = Kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468944)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468943 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468944, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468945,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468943[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468944] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468943;
}
function ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468949, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468951) {
  return {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468949.fontFamily ? {
      ff: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468949.fontFamily
    } : {}),
    fs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468950,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468951 ? {
      cl: {
        rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468951
      }
    } : {}),
    bl: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468949.fontWeight ?? 400) >= 600 ? BooleanNumber.TRUE : BooleanNumber.FALSE
  };
}
var Jl = class extends Rect {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714) {
      super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714,
        fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.fillColor ?? "transparent",
        stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.strokeColor ?? "gray.300",
        strokeWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.strokeWidth ?? 1,
        evented: true
      }), X(this, "_placeholderProps", undefined), X(this, "_isEditing", false), this._placeholderProps = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714;
    }
    setEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717) {
      this._isEditing = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717, this.makeDirty(true);
    }
    _drawOutline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721) {
      if (this._placeholderProps["hasExplicitStyle"]) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.setLineDash([]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.rect(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = this._placeholderProps["fillColor"];
        this._placeholderProps["hasExplicitFill"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.fill()), this._placeholderProps["hasExplicitStroke"] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.strokeStyle = this.stroke || "gray.300", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.lineWidth = this.strokeWidth || 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.stroke()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.restore();
        return;
      }
      this._placeholderProps["hasUserContent"] || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.setLineDash([4, 3]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.strokeStyle = this.stroke || "gray.300", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.lineWidth = this.strokeWidth || 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.rect(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.restore());
    }
    _drawCenteredText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.fontSize) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.fontSize ?? 18,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.topOffset) ?? 0,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728 = Ul(this.width, this.height, {
          horizontalInset: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.maxWidthPadding) === undefined ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.maxWidthPadding / 2
        }),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A41 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.useDocumentModel) ?? false,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45 = -this.width / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728.left,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB46 = -this.height / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728.top + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729 = this._placeholderProps["localeService"],
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.value || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.textKey && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.textKey) : "");
      if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725.save(), this._applyReadableTextFlip(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725);
        try {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.documentData && Vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725, {
            key: this.oKey + "-placeholder-rich-text",
            text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47,
            documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.documentData,
            left: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45,
            top: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB46,
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728.width,
            height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728.height,
            localeService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729
          })) return;
          if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A41) {
            let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141 * 1.8, Math.min(this.height, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141 * 2.2)),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.color);
            Vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725, {
              key: this.oKey + "-placeholder-text",
              text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47,
              left: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45,
              top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 / 2,
              width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728.width,
              height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
              localeService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729,
              textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619,
              horizontalAlign: HorizontalAlign.CENTER,
              verticalAlign: VerticalAlign.MIDDLE
            });
          }
        } finally {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725.restore();
        }
      }
    }
    _applyReadableTextFlip(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735) {
      this.getEffectiveFlipState().flipX && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735.scale(-1, 1);
    }
    render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738) {
      if (!this.visible) return this.makeDirty(false), this;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739 = this.getRealBound(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.width,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.height,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.left,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.top;
      if (this.isRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738)) {
        let {
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340,
          bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341,
          right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738.viewBound;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 + this.strokeWidth + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741 + this.strokeWidth + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743) return this;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744 = this.transform["getMatrix"](),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB52 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741 / 2;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB52), this._draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.restore(), this.makeDirty(false), this;
    }
    getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754 = this.getRealBound(),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.width / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.height / 2,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755 = this.transform["getMatrix"](),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756 = new Transform([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 = this.getParent();
      return (this.isInGroup && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757.classType) === RENDER_CLASS_TYPE.GROUP ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757.ancestorTransform["multiply"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756).invert().applyPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753);
    }
    isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764 = this.getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 = this.width / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146 = this.height / 2;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.x >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.x <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 + this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.y >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.y <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146 + this.strokeWidth / 2;
    }
    _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769 ?? this.width,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770 ?? this.height;
      this._drawOutline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772);
    }
  },
  Yl = class e extends Jl {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780) {
      super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780);
    }
    resolveIconKeyByCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784 = this._resolveIconLayout();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 = this.getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783);
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.count; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54++) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = Math.floor(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.maxPerRow),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 % var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.maxPerRow,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.startX + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 * 52,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.startY + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 * 54;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785.x >= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 - 21 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785.x <= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 + 21 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785.y >= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 - 21 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785.y <= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 + 21) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786;
          return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.icons[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786.key) ?? null;
        }
      }
      return null;
    }
    _resolveIconLayout() {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = (this._placeholderProps["icons"] ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343.enabled !== false);
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.length === 0) return null;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D149 = Math.max(1, Math.floor((this.width - 20) / 52)),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150 = Math.min(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.length, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D149 * 2),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150 === 4 ? 2 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D149,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152 = Math.ceil(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153 = Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151) * 42 + (Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151) - 1) * 10,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152 * 42 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152 - 1) * 12;
      return {
        icons: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15,
        count: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150,
        maxPerRow: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151,
        totalHeight: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154,
        startX: -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153 / 2 + 42 / 2,
        startY: -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154 / 2 + 42 / 2
      };
    }
    _drawIconCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59 = this._placeholderProps["iconBoxBackgroundColor"] ?? "gray.50",
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60 = this._placeholderProps["iconBoxStrokeColor"] ?? "gray.300",
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61 = this._placeholderProps["iconColor"] ?? "gray.600";
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.fillStyle = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.strokeStyle = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.lineWidth = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.rect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792 - 42 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 - 42 / 2, 42, 42), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.fillStyle = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795 && this._drawIconImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793)) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.restore();
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.font = yl, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.textAlign = "center", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.textBaseline = "middle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 + 1, 34), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.restore();
    }
    _resolveIconLabel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.label) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.label;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 = this._placeholderProps["localeService"];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.labelKey && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.labelKey) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.key;
    }
    _resolveIconComponentName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805) {
      return SLIDE_PLACEHOLDER_ICON_COMPONENT_NAME_BY_KEY[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.key];
    }
    _drawIconImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812 = this._getOrCreateIconImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812.complete || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812.naturalWidth === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812.naturalHeight === 0 ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810 - 10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811 - 10, 20, 20), true);
    }
    _getOrCreateIconImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820;
      if (e._iconImageCache["has"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65)) return e._iconImageCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65) ?? null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 = e._iconSvgByName[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 || typeof document > "u" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.includes(".")) return e._iconImageCache["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65, null), null;
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66 = ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ', 'fill="none" stroke="' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820 + '" stroke-width="2" ', 'stroke-linecap="round" stroke-linejoin="round">', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821, "</svg>"].join(""),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822 = document.createElement("img");
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822.onload = () => this.makeDirty(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66), e._iconImageCache["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822;
    }
    _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830) {
      super._draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831 = this._placeholderProps,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832 = this._resolveIconLayout();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832) {
        !this._isEditing && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.text && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.text["value"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.text["textKey"]) && this._drawCenteredText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.text, {
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.textColor ?? "gray.700",
          useDocumentModel: true
        });
        return;
      }
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832.count; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55++) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = Math.floor(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832.maxPerRow),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 % var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832.maxPerRow,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832.icons[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55],
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832.startX + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 * 52,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832.startY + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 * 54;
        this._drawIconCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5, this._resolveIconLabel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671).slice(0, 1), this._resolveIconComponentName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671));
      }
      !this._isEditing && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.text && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.text["value"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.text["textKey"]) && this._drawCenteredText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.text, {
        topOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832.totalHeight / 2 + 20,
        fontSize: 14,
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.textColor ?? "gray.600",
        useDocumentModel: true
      });
    }
  };
X(Yl, "_iconSvgByName", {
  AddImageIcon: '<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m7 17 4-4 3 3 2-2 3 3"/>',
  TableIcon: "<rect\x20x=\x224\x22\x20y=\x225\x22\x20width=\x2216\x22\x20height=\x2214\x22\x20rx=\x222\x22/><path\x20d=\x22M4\x2010h16M4\x2015h16M10\x205v14M15\x205v14\x22/>",
  ChartIcon: '<path d="M5 19V5"/><path d="M5 19h15"/><path d="M9 16V9"/><path d="M13 16V6"/><path d="M17 16v-4"/>',
  RelationshipIcon: "<circle\x20cx=\x227\x22\x20cy=\x227\x22\x20r=\x223\x22/><circle\x20cx=\x2217\x22\x20cy=\x227\x22\x20r=\x223\x22/><circle\x20cx=\x2212\x22\x20cy=\x2217\x22\x20r=\x223\x22/><path\x20d=\x22m9.5\x208.5\x205\x200M8.5\x209.5\x2011\x2014M15.5\x209.5\x2013\x2014\x22/>",
  RecordIcon: '<rect x="5" y="4" width="14" height="16" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>'
}), X(Yl, "_iconImageCache", new Map());
var Xl = class extends Jl {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840);
  }
  _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846) {
    if (super._draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846), this._isEditing) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 = this._placeholderProps["text"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847.value && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847.textKey) return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D161 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847.fontSize ?? Math.min(18, Math.max(14, this.height * 0.11));
    this._drawCenteredText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847,
      fontSize: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D161
    }, {
      color: this._placeholderProps["textColor"] ?? "gray.700",
      useDocumentModel: true
    });
  }
};
function Ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468957) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D521 = Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468957 * 1000000000000) / 1000000000000;
  return Object.is(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D521, -0) ? 0 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D521;
}
function eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468976, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468977 === SlidePresentationBackgroundGraphicFitEnum.Stretch || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974 <= 0) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D163 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978.left) ?? 0) / 100 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D164 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978.top) ?? 0) / 100 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D165 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978.right) ?? 0) / 100 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D166 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468978.bottom) ?? 0) / 100 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974;
    return {
      left: Ql(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D163),
      top: Ql(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D164),
      width: Ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D163 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D165),
      height: Ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D164 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D166)
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468979 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468975 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468975 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468980 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468976 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468976 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D531 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468977 === SlidePresentationBackgroundGraphicFitEnum.Contain ? Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468979, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468980) : Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468979, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468980),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D532 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468979 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D531,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D533 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468980 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D531;
  return {
    left: Ql((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468973 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D532) / 2),
    top: Ql((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468974 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D533) / 2),
    width: Ql(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D532),
    height: Ql(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D533)
  };
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468989, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468990) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468990(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468989);
  };
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468996) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468997 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468997 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468996 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468996 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468995) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468996,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468999;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468996);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D537 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D537 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D537--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468999 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D537]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468997 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468999(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468997 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468999(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468999(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468995)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468997 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468998;
}
X(ru, "_imageNativeCache", new Map()), X(ru, "_imageLoadingCache", new Map()), ru = nu = Q([Z(2, IImageIoService)], ru);
function gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469048) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049 = resolveThemeDefaultShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469048);
  return {
    isHorizontal: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047.isHorizontal) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049.isHorizontal,
    isRichText: false,
    text: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047.text) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049.text,
    fontFamily: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047.fontFamily) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049.fontFamily,
    fontSize: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047.fontSize) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049.fontSize,
    color: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049.color,
    bold: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047.bold) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049.bold,
    italic: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047.italic) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049.italic,
    underline: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469047.underline) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469049.underline
  };
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469053) {
  return {
    ff: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469053.fontFamily ?? "Arial",
    fs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469053.fontSize ?? 16,
    cl: {
      rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469053.color ?? "#111827"
    },
    bl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469053.bold ? BooleanNumber.TRUE : BooleanNumber.FALSE,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469053.italic ? {
      it: BooleanNumber.TRUE
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469053.underline === undefined ? {} : {
      ul: {
        s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469053.underline ? BooleanNumber.TRUE : BooleanNumber.FALSE
      }
    })
  };
}
function vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469057) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469058 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469055.createShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469056);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469058) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469055.shaderSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469058, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469057), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469055.compileShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469058), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469055.getShaderParameter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469058, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469055.COMPILE_STATUS)) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469055.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469058);
      return;
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469058;
  }
}
function yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469064, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469065, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469066, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469068) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.createTexture();
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.activeTexture(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE0 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469064), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.bindTexture(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_2D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.texParameteri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_2D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_WRAP_S, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.CLAMP_TO_EDGE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.texParameteri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_2D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_WRAP_T, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.CLAMP_TO_EDGE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.texParameteri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_2D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_MIN_FILTER, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.LINEAR), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.texParameteri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_2D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_MAG_FILTER, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.LINEAR), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469068 instanceof HTMLCanvasElement ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.texImage2D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_2D, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.UNSIGNED_BYTE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469068) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.texImage2D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.TEXTURE_2D, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469065, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469066, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469063.UNSIGNED_BYTE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469068), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069;
}
function bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469079) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469077.getUniformLocation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469079) ?? undefined;
}
function xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469083) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469084 = document.createElement("canvas");
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469084.width = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469083.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469084.height = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469083.height;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469084.getContext("webgl", {
    alpha: true,
    antialias: false,
    depth: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: true,
    stencil: false
  });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469085 ? {
    canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469084,
    gl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469085
  } : undefined;
}
function Su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469090) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469091;
  (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469091 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469090.getExtension("WEBGL_lose_context")) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469091.loseContext(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469089.width = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469089.height = 0;
}
function Cu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469096 = vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.VERTEX_SHADER, "\x0aattribute\x20vec2\x20a_position;\x0aattribute\x20vec2\x20a_uv;\x0avarying\x20vec2\x20v_uv;\x0a\x0avoid\x20main()\x20{\x0a\x20\x20\x20\x20v_uv\x20=\x20a_uv;\x0a\x20\x20\x20\x20gl_Position\x20=\x20vec4(a_position,\x200.0,\x201.0);\x0a}\x0a"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469097 = vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.FRAGMENT_SHADER, "\nprecision mediump float;\n\nuniform sampler2D u_front;\nuniform sampler2D u_sdf;\nuniform vec2 u_texel;\nuniform float u_distanceRange;\nuniform float u_bevelRadius;\nuniform float u_bevelDepth;\nuniform float u_bevelProfile;\nuniform float u_contourWidth;\nuniform vec4 u_contourColor;\nuniform vec3 u_light;\nuniform vec4 u_material;\nuniform float u_sheen;\nuniform vec2 u_extrusionOffsetUv;\nuniform vec4 u_extrusionColor;\nuniform float u_extrusionInheritsFront;\nuniform float u_extrusionOpacity;\nuniform float u_extrusionLightFactor;\nuniform float u_extrusionSteps;\nuniform float u_renderExtrusion;\n\nvarying vec2 v_uv;\n\nfloat signedDistanceAt(vec2 uv) {\n if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {\n return -u_distanceRange;\n }\n return (texture2D(u_sdf, uv).r * 2.0 - 1.0) * u_distanceRange;\n}\n\nfloat bevelHeightAt(vec2 uv) {\n if (u_bevelRadius < 0.01) {\n return step(0.0, signedDistanceAt(uv));\n }\n float t = clamp(signedDistanceAt(uv) / u_bevelRadius, 0.0, 1.0);\n if (u_bevelProfile < 0.5) {\n return t;\n }\n if (u_bevelProfile < 1.5) {\n return sqrt(max(0.0, 1.0 - (1.0 - t) * (1.0 - t)));\n }\n if (u_bevelProfile < 2.5) {\n return t * t * (3.0 - 2.0 * t);\n }\n if (u_bevelProfile > 3.5) {\n return t * t * (2.0 - t);\n }\n return clamp(t + sin(t * 9.42477796) * 0.12 * (1.0 - t), 0.0, 1.0);\n}\n\nvec3 applyBevelProfileBands(vec3 color, float signedDistance) {\n if (u_bevelProfile < 3.5 || u_bevelRadius < 1.0) {\n return color;\n }\n float outerRim = 1.0 - smoothstep(0.0, 1.15, signedDistance);\n float innerRim = 1.0 - smoothstep(0.0, 0.9, abs(signedDistance - u_bevelRadius));\n float highlight = 1.0 - smoothstep(0.0, 1.25, abs(signedDistance - u_bevelRadius * 0.68));\n float rimDarkening = max(outerRim * 0.58, innerRim * 0.34);\n return clamp(color * (1.0 - rimDarkening) + vec3(highlight * 0.12), 0.0, 1.0);\n}\n\nvec3 shadeSurface(vec3 color, vec3 normal, float lightFactor, vec2 position) {\n float diffuse = max(0.0, dot(normal, u_light));\n vec3 halfVector = normalize(u_light + vec3(0.0, 0.0, 1.0));\n float specular = pow(max(0.0, dot(normal, halfVector)), u_material.w) * u_material.z;\n float broadSheen = dot(normalize(u_light.xy), position - vec2(0.5)) * u_sheen;\n float lighting = clamp((u_material.x + diffuse * u_material.y + broadSheen) * lightFactor, 0.18, 1.5);\n return clamp(color * lighting + vec3(specular), 0.0, 1.0);\n}\n\nbool renderExtrusionSurface() {\n if (u_renderExtrusion < 0.5 || dot(u_extrusionOffsetUv, u_extrusionOffsetUv) < 0.00000001) {\n return false;\n }\n float stepSize = 1.0 / max(1.0, u_extrusionSteps);\n vec2 hitUv = vec2(0.0);\n float hitDistance = -u_distanceRange;\n float hitDepth = 0.0;\n bool hit = false;\n for (int index = 1; index <= 96; index++) {\n if (float(index) > u_extrusionSteps) {\n break;\n }\n float depth = float(index) * stepSize;\n vec2 sourceUv = v_uv - u_extrusionOffsetUv * depth;\n float distance = signedDistanceAt(sourceUv);\n if (distance >= 0.0) {\n hit = true;\n hitUv = sourceUv;\n hitDistance = distance;\n hitDepth = depth;\n break;\n }\n }\n if (!hit) {\n return false;\n }\n\n float left = signedDistanceAt(hitUv - vec2(u_texel.x, 0.0));\n float right = signedDistanceAt(hitUv + vec2(u_texel.x, 0.0));\n float top = signedDistanceAt(hitUv - vec2(0.0, u_texel.y));\n float bottom = signedDistanceAt(hitUv + vec2(0.0, u_texel.y));\n vec2 inward = normalize(vec2(right - left, bottom - top) + vec2(0.00001));\n vec2 sweep = normalize(u_extrusionOffsetUv);\n float facing = dot(-inward, sweep);\n vec3 normal = normalize(vec3(-inward, 0.32 + abs(facing) * 0.18));\n float depthShade = mix(1.04, 0.82, hitDepth);\n vec4 extrusionSource = u_extrusionInheritsFront > 0.5\n ? texture2D(u_front, hitUv)\n : u_extrusionColor;\n vec3 color = shadeSurface(\n extrusionSource.rgb,\n normal,\n u_extrusionLightFactor * depthShade,\n hitUv\n );\n float edgeAlpha = smoothstep(-0.5, 1.0, hitDistance);\n gl_FragColor = vec4(color, extrusionSource.a * u_extrusionOpacity * edgeAlpha);\n return true;\n}\n\nvoid main() {\n float signedDistance = signedDistanceAt(v_uv);\n if (signedDistance < -0.5) {\n if (u_contourWidth > 0.0 && -signedDistance <= u_contourWidth + 1.0) {\n float contourAlpha = 1.0 - smoothstep(max(0.0, u_contourWidth - 1.0), u_contourWidth + 1.0, -signedDistance);\n gl_FragColor = vec4(u_contourColor.rgb, u_contourColor.a * contourAlpha);\n return;\n }\n if (renderExtrusionSurface()) {\n return;\n }\n gl_FragColor = vec4(0.0);\n return;\n }\n\n vec4 front = texture2D(u_front, v_uv);\n float leftHeight = bevelHeightAt(v_uv - vec2(u_texel.x, 0.0));\n float rightHeight = bevelHeightAt(v_uv + vec2(u_texel.x, 0.0));\n float topHeight = bevelHeightAt(v_uv - vec2(0.0, u_texel.y));\n float bottomHeight = bevelHeightAt(v_uv + vec2(0.0, u_texel.y));\n vec3 normal = normalize(vec3(\n (leftHeight - rightHeight) * u_bevelDepth,\n (topHeight - bottomHeight) * u_bevelDepth,\n 1.0\n ));\n vec3 color = applyBevelProfileBands(shadeSurface(front.rgb, normal, 1.0, v_uv), signedDistance);\n gl_FragColor = vec4(color, front.a);\n}\n");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469096 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469097) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469096 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469096), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469097 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469097);
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469098 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.createProgram();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469098) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469096), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469097);
    return;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.attachShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469096), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.attachShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469097), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.linkProgram(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469098), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.getProgramParameter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.LINK_STATUS)) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.deleteProgram(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469098), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469096), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469095.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469097);
    return;
  }
  return {
    program: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469098,
    vertexShader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469096,
    fragmentShader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469097
  };
}
function wu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469104) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.createBuffer();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469105) return;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.bindBuffer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.ARRAY_BUFFER, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469105), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.bufferData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.ARRAY_BUFFER, new Float32Array([-1, 1, 0, 0, 1, 1, 1, 0, -1, -1, 0, 1, 1, -1, 1, 1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.STATIC_DRAW);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.getAttribLocation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469104, "a_position"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.getAttribLocation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469104, "a_uv");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.enableVertexAttribArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469106), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.vertexAttribPointer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469106, 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.FLOAT, false, 16, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.enableVertexAttribArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469107), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.vertexAttribPointer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469107, 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469103.FLOAT, false, 16, 8), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469105;
}
function Tu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469113) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469114 = xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469113);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469114) return;
  let {
      canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469115,
      gl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469114,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469117 = Cu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469117) {
    Su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116);
    return;
  }
  let {
    program: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469118,
    vertexShader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469119,
    fragmentShader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469120
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469117;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.useProgram(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469118);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469121 = wu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469118);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.pixelStorei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.pixelStorei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.UNPACK_ALIGNMENT, 1);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469122 = yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469113.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469113.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.RGBA, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469113.front),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469123 = yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116, 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469113.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469113.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.LUMINANCE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469113.signedDistance);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469121 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469122 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469123 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.getError() !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.NO_ERROR) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469121 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.deleteBuffer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469121), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469122 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.deleteTexture(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469122), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469123 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.deleteTexture(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469123), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.deleteProgram(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469118), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469119), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469120), Su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116);
    return;
  }
  return {
    canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469115,
    gl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469116,
    program: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469118,
    vertexShader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469119,
    fragmentShader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469120,
    buffer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469121,
    frontTexture: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469122,
    distanceTexture: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469123
  };
}
function Eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136) {
  let {
    gl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137,
    program: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469135;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform1i(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_front") ?? null, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform1i(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_sdf") ?? null, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform2f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_texel") ?? null, 1 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136.width, 1 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_distanceRange") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136.distanceRange), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_bevelRadius") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136.bevelRadius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_bevelDepth") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136.bevelDepth), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_bevelProfile") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136.bevelProfile), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_contourWidth") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136.contourWidth), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137.uniform4fv(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469138, "u_contourColor") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136.contourColor), Du(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136), Ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469136);
}
function Du(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469144) {
  let {
      gl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469145,
      program: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469146
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469143,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A130 = [Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469144.lightAngle), Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469144.lightAngle), 0.78],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D551 = Math.hypot(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A130);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469145.uniform3f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469146, "u_light") ?? null, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A130[0] / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D551, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A130[1] / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D551, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A130[2] / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D551), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469145.uniform4f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469146, "u_material") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469144.material["ambient"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469144.material["diffuse"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469144.material["specular"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469144.material["shininess"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469145.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469146, "u_sheen") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469144.material["sheen"]);
}
function Ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152) {
  let {
    gl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153,
    program: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469154
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469151;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153.uniform2f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469154, "u_extrusionOffsetUv") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.extrusionOffset[0] / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.extrusionOffset[1] / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153.uniform4fv(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469154, "u_extrusionColor") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.extrusionColor), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469154, "u_extrusionInheritsFront") ?? null, +!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.extrusionInheritsFront), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469154, "u_extrusionOpacity") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.extrusionOpacity), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469154, "u_extrusionLightFactor") ?? null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.extrusionLightFactor), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469154, "u_extrusionSteps") ?? null, Math.max(1, Math.min(96, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.extrusionSteps))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153.uniform1f(bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469154, "u_renderExtrusion") ?? null, +!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469152.renderExtrusion);
}
function ku(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469159) {
  let {
    canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160,
    gl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161,
    program: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469162,
    vertexShader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469163,
    fragmentShader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469164,
    buffer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469165,
    frontTexture: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469166,
    distanceTexture: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469167
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469159;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161.deleteTexture(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469166), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161.deleteTexture(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469167), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161.deleteBuffer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469165), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161.deleteProgram(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469162), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469163), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161.deleteShader(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469164), Su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469161);
}
function Au(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469177) {
  if (typeof document > "u" || typeof WebGLRenderingContext > "u") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469178 = Tu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469177);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469178) return;
  let {
    canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469179,
    gl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469178;
  return Eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469177), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.viewport(0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469177.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469177.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.clearColor(0, 0, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.clear(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.COLOR_BUFFER_BIT), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.drawArrays(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.TRIANGLE_STRIP, 0, 4), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469180.finish(), {
    canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469179,
    includesExtrusion: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469177.renderExtrusion,
    dispose: () => ku(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469178)
  };
}
const ju = 0x56bc75e2d63100000;
function Mu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469187) {
  let {
      distance: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469188,
      sites: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189,
      boundaries: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469190
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469187,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553 = 0;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[0] = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469190[0] = -0x56bc75e2d63100000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469190[1] = ju;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 = 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469186; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 += 1) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553]] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553]) / (2 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 - 2 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553]);
    for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469190[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553] && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553 > 0;) --var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553]] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553]) / (2 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 - 2 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553]);
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553 += 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553] = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469190[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553] = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469190[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553 + 1] = ju;
  }
  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D218 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D218 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469186; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D218 += 1) {
    for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469190[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553 + 1] < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D218;) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553 += 1;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D218 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469188[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D218] = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469185[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469189[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D553]];
  }
}
function Nu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D555 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D555 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D555 === 0) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = new Float32Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199);
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.fill(ju), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23;
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D556 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132 = new Float64Array(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D556),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB214 = {
      distance: new Float64Array(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D556),
      sites: new Int32Array(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D556),
      boundaries: new Float64Array(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D556 + 1)
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A133 = new Float32Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A134 = new Float32Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219 += 1) {
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 += 1) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219] ? 0 : ju;
    Mu(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB214);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 += 1) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A133[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219] = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB214.distance[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14];
  }
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220 += 1) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 += 1) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15] = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A133[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15];
    Mu(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB214);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 += 1) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A134[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16] = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB214.distance[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16];
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A134;
}
function Pu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469206 = 128) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469204 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469205,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A138 = new Uint8Array(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D559),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139 = new Uint8Array(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D559);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D221 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D221 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D559; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D221 += 1) {
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469203[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D221] > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469206;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A138[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D221] = +!!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D221] = +!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469207 = Nu(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469205),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469208 = Nu(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469205),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A140 = new Float32Array(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D559);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D222 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D222 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D559; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D222 += 1) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A140[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D222] = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A138[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D222] ? Math.sqrt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469208[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D222]) - 0.5 : 0.5 - Math.sqrt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469207[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D222]);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A140;
}
function Fu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469216) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D561 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469216),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144 = new Uint8Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469215.length);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469215.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223 += 1) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61 = Math.max(-1, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469215[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223] / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D561));
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223] = Math.round((var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61 * 0.5 + 0.5) * 255);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144;
}
function Iu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469219) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469219) {
    case ShapeBevelPresetEnum.Slope:
      return 4;
    case ShapeBevelPresetEnum.Circle:
    case ShapeBevelPresetEnum.SoftRound:
    case ShapeBevelPresetEnum.Convex:
      return 1;
    case ShapeBevelPresetEnum.RelaxedInset:
      return 2;
    case ShapeBevelPresetEnum.Cross:
    case ShapeBevelPresetEnum.Divot:
    case ShapeBevelPresetEnum.Riblet:
    case ShapeBevelPresetEnum.ArtDeco:
      return 3;
    default:
      return 0;
  }
}
function Lu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469221) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469221) {
    case ShapeMaterialPresetEnum.Metal:
    case ShapeMaterialPresetEnum.LegacyMetal:
      return {
        ambient: 0.82,
        diffuse: 0.28,
        specular: 0.18,
        shininess: 42,
        sheen: 0.06
      };
    case ShapeMaterialPresetEnum.SoftMetal:
      return {
        ambient: 0.56,
        diffuse: 0.46,
        specular: 0.48,
        shininess: 24,
        sheen: 0.1
      };
    case ShapeMaterialPresetEnum.Plastic:
    case ShapeMaterialPresetEnum.LegacyPlastic:
    case ShapeMaterialPresetEnum.Clear:
      return {
        ambient: 0.58,
        diffuse: 0.52,
        specular: 0.62,
        shininess: 34,
        sheen: 0.1
      };
    case ShapeMaterialPresetEnum.DarkEdge:
      return {
        ambient: 0.42,
        diffuse: 0.62,
        specular: 0.2,
        shininess: 18,
        sheen: -0.06
      };
    case ShapeMaterialPresetEnum.SoftEdge:
      return {
        ambient: 0.62,
        diffuse: 0.42,
        specular: 0.2,
        shininess: 12,
        sheen: 0.04
      };
    case ShapeMaterialPresetEnum.TranslucentPowder:
    case ShapeMaterialPresetEnum.Powder:
      return {
        ambient: 0.82,
        diffuse: 0.22,
        specular: 0.06,
        shininess: 8,
        sheen: 0.02
      };
    case ShapeMaterialPresetEnum.Flat:
      return {
        ambient: 0.74,
        diffuse: 0.28,
        specular: 0,
        shininess: 1,
        sheen: 0
      };
    case ShapeMaterialPresetEnum.WarmMatte:
    case ShapeMaterialPresetEnum.Matte:
      return {
        ambient: 0.7,
        diffuse: 0.46,
        specular: 0.12,
        shininess: 10,
        sheen: 0.03
      };
    case ShapeMaterialPresetEnum.LegacyMatte:
      return {
        ambient: 0.6,
        diffuse: 0.48,
        specular: 0.16,
        shininess: 12,
        sheen: 0.22
      };
    default:
      return {
        ambient: 0.7,
        diffuse: 0.46,
        specular: 0.12,
        shininess: 10,
        sheen: 0.03
      };
  }
}
function Ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.canvas && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.canvas["width"] = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.canvas["height"] = 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.signature = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.canvas = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.left = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.top = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.width = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469223.height = undefined);
}
function zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469227) {
  if (typeof document > "u") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469228 = document.createElement("canvas");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469228.width = Math.max(1, Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469225 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469227)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469228.height = Math.max(1, Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469226 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469227)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469228;
}
function Bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469234) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D563 = typeof window > "u" ? 1 : Math.min(2, Math.max(window.devicePixelRatio || 1, 1));
  return Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D563, Math.max(1, Math.sqrt(4000000 / Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469233 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469234))));
}
function Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469237) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469238 = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469237);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469238) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469238[1].length === 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469238[1].split("").map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 => "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364).join("") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469238[1];
    return {
      red: Number.parseInt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73.slice(0, 2), 16),
      green: Number.parseInt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73.slice(2, 4), 16),
      blue: Number.parseInt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73.slice(4, 6), 16),
      alpha: 255
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469239 = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469237);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469239 ? {
    red: Math.max(0, Math.min(255, Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469239[1]))),
    green: Math.max(0, Math.min(255, Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469239[2]))),
    blue: Math.max(0, Math.min(255, Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469239[3]))),
    alpha: Math.round(Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469239[4] === undefined ? 1 : Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469239[4]))) * 255)
  } : {
    red: 128,
    green: 128,
    blue: 128,
    alpha: 255
  };
}
function Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469243) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A146 = new Uint8ClampedArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469243.length / 4);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D224 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D224 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A146.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D224 += 1) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A146[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D224] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D224 * 4 + 3];
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A146;
}
function Uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469245) {
  try {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469246;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469245.getContext("2d", {
      willReadFrequently: true
    })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469246.getImageData(0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469245.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469245.height);
  } catch {
    return;
  }
}
function Wu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469249) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469249.red / 255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469249.green / 255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469249.blue / 255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469249.alpha / 255];
}
function Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469253) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469252 <= 0) return +(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469251 >= 0);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565 = Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469251 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469252));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469253 === 1 ? Math.sqrt(Math.max(0, 1 - (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565) * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565))) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469253 === 2 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565 * (3 - 2 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469253 === 3 ? Math.max(0, Math.min(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565 + Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565 * Math.PI * 3) * 0.12 * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565))) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469253 === 4 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565 * (2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565) : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D565;
}
function Ku(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469260) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469260 !== 4 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259 < 1) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469257;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D567 = Math.max(0, Math.min(1, 1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469258 / 1.15)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D568 = Math.max(0, Math.min(1, 1 - Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469258 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259) / 0.9)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D569 = Math.max(0, Math.min(1, 1 - Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469258 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259 * 0.68) / 1.25)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D570 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D567 * 0.58, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D568 * 0.34);
  return Math.min(255, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469257 * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D570) + 255 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D569 * 0.12));
}
function qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469270) {
  return Ku(Math.min(255, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469265 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469266 + 255 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469267)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469270);
}
function Ju(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469288) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469289 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469277.createImageData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469290 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469278.data,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469289.data,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D575 = Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469287),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D576 = Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469287),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D577 = 0.78,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D578 = Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D575, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D576, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D577),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D579 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D575 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D578,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D580 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D576 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D578,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D581 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D577 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D578,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D582 = Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D579, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D580, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D581 + 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D583 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D579 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D582,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D584 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D580 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D582,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D585 = (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D581 + 1) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D582;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 += 1) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 * 4,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469279[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 < -0.5) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469285 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 < 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469285 + 1) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469285 + 1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3));
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469286.red, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 1] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469286.green, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 2] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469286.blue, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 3] = Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469286.alpha * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D);
      }
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469290[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 3],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469279[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 - +(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 > 0)],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469279[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 + +(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 + 1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280)],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469279[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 - (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280 : 0)],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469279[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 + 1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280 : 0)],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = (Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284) - Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284)) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = (Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284) - Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284)) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469283,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19, 1),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = 1 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D579 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D580 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D581),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 = Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D583 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D584 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D585) ** var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469288.shininess * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469288.specular,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D579 * (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 / Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469280) - 0.5) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D580 * (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 / Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469281) - 0.5)) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469288.sheen,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = Math.max(0.18, Math.min(1.5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469288.ambient + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469288.diffuse + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17] = qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469290[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 1] = qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469290[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 1], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 2] = qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469290[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 2], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469284), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469291[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 + 3] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469277.putImageData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469289, 0, 0);
}
function Yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469310) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469307.createImageData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469310),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.data,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D597 = 0.9;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D226 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D226 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469308.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D226 += 1) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D63 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469308[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D226]);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D63 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D597) continue;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D226 * 4;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469312[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64] = 16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469312[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 + 1] = 16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469312[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 + 2] = 16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469312[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 + 3] = Math.round(255 * Math.max(0, Math.min(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D597 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D63)));
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469307.putImageData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311, 0, 0);
}
function Xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469320) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469319.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469319.height, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.getContext("2d");
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469319, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322.globalCompositeOperation = "source-in", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322.fillRect(0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321;
}
function Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469328) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469329 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469327.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469327.height, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469330 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469329 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469329.getContext("2d");
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469329 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469330)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469330.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469327, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469330.globalCompositeOperation = "destination-in", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469330.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469328, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469329;
}
function Qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469338) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.height, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339.getContext("2d");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341 = Uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342 = Uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469336);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.createImageData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.height),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D599 = Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469337),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D600 = Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469337);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.height; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.width; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 += 1) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.width + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 * 4;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 + 3] === 0) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342.data[(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 - +(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 > 0)) * 4 + 3],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342.data[(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 + +(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 + 1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.width)) * 4 + 3],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342.data[(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 - (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.width : 0)) * 4 + 3],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342.data[(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 + 1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.height ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469335.width : 0)) * 4 + 3],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 = Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 > 0 ? (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D599 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D600) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 : 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = Math.max(0.35, Math.min(1.25, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469338 * (0.78 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 + 1) * 0.16)));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28] = Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 + 1] = Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 + 1] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 + 2] = Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 + 2] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 + 3] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 + 3];
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.putImageData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339;
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D603 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.topRight["x"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.topLeft["x"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353.width,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D604 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.topRight["y"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.topLeft["y"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353.width,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D605 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.bottomLeft["x"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.topLeft["x"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353.height,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D606 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.bottomLeft["y"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.topLeft["y"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353.height;
  return {
    a: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D603,
    b: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D604,
    c: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D605,
    d: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D606,
    e: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.topLeft["x"] - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D603 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353.left - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D605 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353.top,
    f: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354.topLeft["y"] - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D604 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353.left - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D606 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353.top
  };
}
function ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.a * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.d - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.b * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.c;
  if (!(Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D611) < 1e-8)) return {
    a: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.d / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D611,
    b: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.b / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D611,
    c: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.c / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D611,
    d: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.a / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D611,
    e: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.c * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.f - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.d * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.e) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D611,
    f: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.b * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.e - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.a * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469357.f) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D611
  };
}
function td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360) {
  return {
    a: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.a * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.a + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.c * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.b,
    b: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.b * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.a + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.d * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.b,
    c: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.a * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.c + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.c * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.d,
    d: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.b * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.c + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.d * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.d,
    e: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.a * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.e + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.c * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.f + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.e,
    f: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.b * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.e + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.d * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469360.f + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469359.f
  };
}
function nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469365) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469366 = ed(fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469363, projectShape3DRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469364)));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469366) return td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469366, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469363, projectShape3DRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469365)));
}
function rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469373) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D613 = Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.y);
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D613 === 0) return;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A152 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.x) > 0.01 && Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.y) > 0.01,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.width * (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A152 ? 1.05 : 0.72),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB212 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.width / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.x / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D613 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D614,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB213 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.height / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.y / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D613 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D614,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D615 = Math.max(0, 1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469373);
  return {
    a: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D615,
    b: 0,
    c: 0,
    d: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D615,
    e: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB212 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469373,
    f: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB213 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469373
  };
}
function id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469380 = Uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469380) return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469378,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.height / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469381 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.width,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469382 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.height,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D619 = -1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D620 = -1;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.height; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.width; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 += 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469380.data[(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.width + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66) * 4 + 3] <= 128 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469381 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469381, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469382 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469382, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D619 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D619, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D620 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D620, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228));
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D619 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469381 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D620 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469382 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469378,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377.height / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379
  } : {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469378.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469381 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469378.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469382 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379,
    width: (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D619 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469381 + 1) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379,
    height: (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D620 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469382 + 1) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469379
  };
}
function ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469389.setTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.a, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.b, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.c, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.d, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.a * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.c * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.e - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.left) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.b * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.d * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469390.f - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.top) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392);
}
function od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469400) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A154 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469400,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB216 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A154 ? "#101010" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469399.extrusionColor,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A154 ? Xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469400 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469398, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB216) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469399.extrusionInheritsFill ? Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469398) : Xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469398, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB216);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401) return {
    rawSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401,
    source: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A154 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401 : Qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469399.lightAngle, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469399.lightFactor) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401,
    isWireframe: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A154
  };
}
function sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469408, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469410, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469412) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469413;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A156 = !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469410.scene3d && isShape3DProjectiveScene(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469410.scene3d)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D623 = Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469409.projection["x"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469409.projection["y"]) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469408,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A157 = (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469413 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469410.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469413.extrusionHeight) ?? 0) > Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469410.textRect["width"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469410.textRect["height"]) * 4,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469414 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A157 ? id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469408) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469410.textRect,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469409.layerCount;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469412 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415 = Math.min(8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A157 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415 = Math.min(512, Math.max(256, Math.ceil(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D623 * 4))) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A156 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415 = Math.min(128, Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415, Math.ceil(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D623 / 1.2)))), {
    layerCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415,
    usesDeepPerspectiveSampling: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A157,
    usesProjectiveLayers: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A156,
    glyphBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469414
  };
}
function cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469431) {
  let {
    layerCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469432,
    usesDeepPerspectiveSampling: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469433,
    usesProjectiveLayers: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469434,
    glyphBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469435
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469431;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469432; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092 > 0; --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469436;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469432,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469433 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469433 ? rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428.projection, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469434 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429.scene3d ? nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429.textRect, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429.scene3d, Math.max(0, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469436 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469436.extrusionHeight) ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68) : undefined;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 ? (ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469426, 0, 0)) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425.setTransform(1, 0, 0, 1, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428.projection["x"] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428.projection["y"] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427));
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425.setTransform(1, 0, 0, 1, 0, 0);
}
function ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469451) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469449.globalCompositeOperation = "source-atop", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469449.globalAlpha = 1;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D625 = Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469451.lightAngle),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D626 = Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469451.lightAngle),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D627 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450.width * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D625) + Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450.height * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D626),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469452 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469449.createLinearGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450.width / 2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D625 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D627 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450.height / 2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D626 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D627 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450.width / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D625 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D627 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450.height / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D626 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D627 / 2);
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462093, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469451.materialGradientStops) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469452.addColorStop(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462093, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469449.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469449.fillRect(0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469450.height);
}
function ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469464) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461.layerCount === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461.projection["x"] === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461.projection["y"] === 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459.height, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465.getContext("2d");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469467 = od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469464);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469467) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465.width = 0;
    return;
  }
  let {
    rawSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469468,
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469469,
    isWireframe: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469470
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469467;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466.clearRect(0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466.globalCompositeOperation = "source-over", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466.globalAlpha = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461.extrusionOpacity, cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469463, sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469470)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469470 || ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469461), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466.globalCompositeOperation = "destination-out", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466.globalAlpha = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469466.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469457.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469469 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469468 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469469.width = 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469468 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469468.width = 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465.width = 0;
}
function dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469490 = false) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469493;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469494 = Uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469494) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469495 = Uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469486);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469495) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469496 = Pu(Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469495.data), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.height),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469497 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.height, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469498 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469497 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469497.getContext("2d");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469497 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469498) return;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469489 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469489.material) === ShapeMaterialPresetEnum.LegacyWireframe) return Yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469496, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.height), {
    canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469497,
    includesExtrusion: false
  };
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D631 = Math.max(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.bevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491.width) ?? 0, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469492 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.bevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469492.height) ?? 0) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469487,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.bevel ? Math.max(1, Math.min(8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.bevel["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469487 / Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D631) * 4)) : 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D633 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.contourWidth * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469487,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D634 = Math.max(4, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D631 + 2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D633 + 2),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469499 = Iu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469489 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469493 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469489.topBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469493.preset),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469500 = Lu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469489 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469489.material),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469501 = Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.contourColor),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469502 = Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.extrusionColor),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D635 = Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.projection["x"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.projection["y"]) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469487,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469503 = Au({
      front: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485,
      signedDistance: Fu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469496, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D634),
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.height,
      distanceRange: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D634,
      bevelRadius: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D631,
      bevelDepth: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D632,
      bevelProfile: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469499,
      contourWidth: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D633,
      contourColor: Wu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469501),
      lightAngle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.lightAngle,
      material: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469500,
      extrusionOffset: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.projection["x"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.projection["y"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469487],
      extrusionColor: Wu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469502),
      extrusionInheritsFront: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.extrusionInheritsFill,
      extrusionOpacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.extrusionOpacity,
      extrusionLightFactor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.lightFactor,
      extrusionSteps: Math.max(8, Math.ceil(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D635)),
      renderExtrusion: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469490 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D635 > 0.5
    });
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469503) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469498.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469503.canvas, 0, 0);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469503.includesExtrusion;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469503.dispose(), {
      canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469497,
      includesExtrusion: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095
    };
  }
  return Ju(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469496, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469485.height, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D631, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469499, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469488.lightAngle, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469500), {
    canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469497,
    includesExtrusion: false
  };
}
function fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469527) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469528 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469525),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469529 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469528 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469528.getContext("2d");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469528 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469529) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469530 = new UniverRenderingContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469529);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469530.setTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469525, 0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469525, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469530.translateWithPrecision(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469526.left, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469526.top), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469527(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469530)) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469528.width = 0;
    return;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469528;
}
function pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469544) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469545 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469544),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469546 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469545 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469545.getContext("2d");
  !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469545 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469546 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469546.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469540, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469546.globalCompositeOperation = "destination-out", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469546.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469541, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469539.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469545, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469545.width = 0);
}
function md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469557) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469558;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D641 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469556.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469556.left),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D642 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469556.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469556.top),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559 = fd(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D641, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.drawFront);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469560 = fd(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D641, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.drawMask);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469560) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559.width = 0;
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469561 = resolveShape3DGlyphRenderPlan(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.scene3d, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.shape3d, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.baseColor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.textRect);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469561) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469560.width = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469562 = zu(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D641, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469557),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469563 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469562 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469562.getContext("2d");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469562 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469563) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469560.width = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A160 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469558.material) === ShapeMaterialPresetEnum.LegacyWireframe,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A161 = !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A160 && !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.scene3d && isShape3DProjectiveScene(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.scene3d)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564 = dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469560, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555.shape3d, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A161);
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A160 || pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469560, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D641, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469557), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564.includesExtrusion || ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469560, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469556, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A160 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564.canvas : undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469563.drawImage((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564.canvas) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469559.width = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469560.width = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469564.canvas["width"] = 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469562;
}
function hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469575, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578 = gd(getShape3DBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.textRect, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.scene3d, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.shape3d) ?? {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.textRect["left"],
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.textRect["top"],
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.textRect["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.textRect["width"],
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.textRect["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.textRect["height"]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.shape3d),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D645 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578.left,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D646 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578.top,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469579 = Bu(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D645, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D646),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469580 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.signature) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.signature ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.canvas : undefined;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469580) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577 && Ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469580 = md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469579), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469580) return false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.signature = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469576.signature, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.canvas = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.left = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.top = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.width = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.height = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D646);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469575.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469580, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578.left, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.top) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469578.top, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.width) ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D645, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577.height) ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D646), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469577 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469580.width = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469580.height = 0), true;
}
function gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469594, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469596;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D649 = Math.max(resolveShapeBevelExtent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469589 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.topBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469589.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469590 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.topBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469590.width), resolveShapeBevelExtent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469591 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.topBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469591.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469592 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.topBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469592.height), resolveShapeBevelExtent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469593 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.bottomBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469593.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469594 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.bottomBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469594.width), resolveShapeBevelExtent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469595 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.bottomBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469595.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469596 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.bottomBevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469596.height)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D650 = Math.max(12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D649 + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469588.contourWidth) ?? 0) + 4);
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469587.left - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D650,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469587.top - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D650,
    right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469587.right + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D650,
    bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469587.bottom + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D650
  };
}
function fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469607) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469609;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469610 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469607),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A148 = [(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469608 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469610.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469608.textStyle, ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469609 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469610.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469609 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469609.textRuns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469609.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096.ts)) ?? [])].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097 !== undefined);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A148) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.cl = {
    rgb: "#FFFFFF"
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.textFill = {
    type: "solid",
    color: "#FFFFFF",
    opacity: 1
  }, delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.outerShadow, delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.glow, delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.textOutline;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469610;
}
const vd = 0.5;
function yd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469617) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469616 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469616;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469618 = resolveShapeTextBodyBehavior({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469617.shapeData,
    shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469615
  });
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469617.shapeData["isTextBox"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469618.autoFitType === ShapeTextAutoFitType.SpAutoFit) return VerticalAlign.MIDDLE;
}
function bd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469623) {
  return shouldAutoFitShapeTextEditorNoWrap({
    shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469623
  });
}
function xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469628) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469625.scene3d || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469625.shape3d) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469627 === ShapeTextAutoFitType.SpAutoFit && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469626.replace(/\r?\n$/, "").includes("\x0a") ? ShapeTextWrapType.None : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469628;
}
function Sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469634) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469635;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469633.text ?? "",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469636 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469633.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469635.doc;
  return measureDocumentNoWrapTextWidth(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469636 ? createShapeFormulaDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469634) : plainTextToSlideDocumentData(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB218, {
    id: "shape-text-no-wrap-measure",
    textStyle: fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469633)),
    horizontalAlign: HorizontalAlign.CENTER,
    verticalAlign: VerticalAlign.MIDDLE
  }));
}
function Cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469642) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469642.length !== 0) return Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469642.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099 => Sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099)));
}
function wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469645) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469647;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469648 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469645,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469649 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469646 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469648.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469646.ha;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469649 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469649 !== HorizontalAlign.UNSPECIFIED) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469649;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934 = new Set((((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469648.dataModel) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469647.doc) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469647.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469647.paragraphs) ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.paragraphStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101.horizontalAlign;
  }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104 !== HorizontalAlign.UNSPECIFIED));
  if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934.size > 1) return HorizontalAlign.CENTER;
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469650] = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469650 === undefined ? "isRichText" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469645 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469645.isRichText === false ? HorizontalAlign.CENTER : undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469650;
}
function Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469658) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469658
  };
  return ["fill", "stroke"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105 => {
    if (Object.prototype["hasOwnProperty"].call(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106 && Object.defineProperty(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106);
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216;
}
function Ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D653 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.topRight["x"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.topLeft["x"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469662,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D654 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.topRight["y"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.topLeft["y"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469662,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D655 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.bottomLeft["x"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.topLeft["x"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469663,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D656 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.bottomLeft["y"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.topLeft["y"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469663;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469661.transform(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D653, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D654, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D655, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.topLeft["x"] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D653 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469662 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D655 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469663 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469664.topLeft["y"] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D654 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469662 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D656 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469663 / 2);
}
function Dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469669) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469671;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A150 = (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469669.shapeText) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469670.text) ?? "").split(/\r?\n/).filter(Boolean);
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469671 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469669.shapeText) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469671.textWrap) !== ShapeTextWrapType.Square || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A150.length === 0 || !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A150.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109 => /^[A-Za-z0-9][A-Za-z0-9'&+./:-]*$/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109)) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469669 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469669,
    shapeText: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469669.shapeText,
      textWrap: ShapeTextWrapType.None
    }
  };
}
function Od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469677) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469677) return {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469675,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469676
  };
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D661 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469677 * Math.PI / 180,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D662 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D661),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D663 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D661);
  return {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469675 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D662 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469676 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D663,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469675 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D663 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469676 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D662
  };
}
function kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469681) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469681.presentationShapeOrder["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111 = resolveSmartArtPresentationShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111.scene3d;
  }).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 !== undefined);
}
function Ad(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469686) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469683 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469683.data) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469684 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469683.width === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469685 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469683.height === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469686 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469683 : undefined;
}
function jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469694) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469691 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469692,
    type: PageElementTypeEnum.Shape,
    transform: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469693
    },
    shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469694,
    visible: true,
    selectable: true
  };
}
function Md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469701, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469704) {
  if (isShape3DProjectiveScene(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469704) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469704 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469703.shapeType === ShapeTypeEnum.Rect && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.rotation && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.flipX && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.flipY) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115 = projectShape3DRect({
      left: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469700 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.left,
      top: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469701 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.height
    }, {
      left: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469700 / 2,
      top: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469701 / 2,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469700,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469701
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469704);
    Ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115);
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469699.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469700 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.width / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469701 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469702.height / 2);
}
function Nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469711, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469712) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469712 ? Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469711) <= vd : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469711 <= vd;
}
var Pd = class e extends Shape {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117), X(this, "_shapeModel", undefined), X(this, "_localeService", undefined), X(this, "_smartArtImagePlaceholderColors", undefined), X(this, "_element", undefined), X(this, "_isEditing", false), X(this, "_selectedSmartArtPresentationShapeId", null), X(this, "_editingSmartArtPresentationShapeId", null), X(this, "_documentTextRenderCache", {}), X(this, "_shapeText3DRenderCache", {}), X(this, "_smartArtTextObjects", new Map()), X(this, "_smartArtTextRenderStates", new Map()), X(this, "_formulaAnimation", new FormulaShapeAnimationController(() => this.makeDirty(true), () => this._applyNoWrapAutoFitSize())), X(this, "_fillImage", undefined), X(this, "_smartArtFillImages", new Map()), X(this, "_formulaPresentation", undefined), X(this, "isDrawingObject", true), this._shapeModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117.shapeModel, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117.localeService, this._smartArtImagePlaceholderColors = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117.smartArtImagePlaceholderColors, this._element = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117.element, this._formulaPresentation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117.formulaPresentation, this._formulaAnimation["setPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117.formulaPresentation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117.animateFormulaPresentation !== false), this._applyNoWrapAutoFitSize();
  }
  updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120) {
    zl(this._documentTextRenderCache), Ru(this._shapeText3DRenderCache), this._disposeSmartArtTextObjects(), this._element = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121 = this._shapeModel["getShapeData"]();
    this._shapeModel["setShapeData"](Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.shapeData), false), this._applyNoWrapAutoFitSize(), this.makeDirty(true);
  }
  getElement() {
    return this._element;
  }
  getShapeModel() {
    return this._shapeModel;
  }
  getTransformerState() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124 = super.getState(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125 = this._element["shapeData"].scene3d;
    if (!isShape3DProjectiveScene(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36 = {
        left: -this.width / 2,
        top: -this.height / 2,
        width: this.width,
        height: this.height
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126 = getShape3DBounds(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125, undefined, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124,
      left: this.left + this.width / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.left,
      top: this.top + this.height / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.left,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.top
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124;
  }
  resolveHyperLinkAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462133 = this._resolveDocumentTextOffsetAt(this.getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130), this.width, this.height),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462134 = normalizeShapeTextData(this._shapeModel["getShapeTextData"]()),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = normalizeShapeTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462134 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462134.dataModel)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131.doc) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131.customRanges;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462133 === undefined || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.rangeType === CustomRangeType.HYPERLINK && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462133 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.endIndex >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462133),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136.properties) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132.url;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137 == "string" ? {
      linkId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136.rangeId,
      url: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136.startIndex,
      endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136.endIndex
    } : null;
  }
  measureTextBoxNaturalCrossSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150 = this._shapeModel["getShapeTextData"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148.doc,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151 ? createShapeFormulaDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151, this._formulaPresentation) : undefined;
    if (!this._localeService || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152 || this._element["shapeData"].isTextBox !== true) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153 = this.getTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A43 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150.isHorizontal !== false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154 = jl({
        id: this.oKey + "-resize-measure",
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152,
        size: {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.height
        },
        localeService: this._localeService,
        horizontalAlign: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149.ha,
        verticalAlign: VerticalAlign.TOP,
        isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A43,
        wrapStrategy: WrapStrategy.WRAP
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.actualHeight;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.dispose(), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A43 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155 + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.height) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155 + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.width);
  }
  isLineShape() {
    return this._shapeModel["isLineShape"]();
  }
  getTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167) {
    return this._shapeModel["isLineShape"]() ? {
      left: 0,
      top: 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167
    } : (this._shapeModel["updateContext"]({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167
    }), this._shapeModel["getShapeTextRect"]({
      left: 0,
      top: 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167
    }));
  }
  setEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170) {
    this._isEditing !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170 && (this._isEditing = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170, this.makeDirty(true));
  }
  setFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172) {
    this._fillImage = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172, this.makeDirty(true);
  }
  setSmartArtFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175 ? this._smartArtFillImages["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175) : this._smartArtFillImages["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174), this.makeDirty(true);
  }
  setFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179 = true) {
    this._formulaAnimation["setPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179), this._formulaPresentation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178, zl(this._documentTextRenderCache), Ru(this._shapeText3DRenderCache), this._applyNoWrapAutoFitSize(), this.makeDirty(true);
  }
  _applyNoWrapAutoFitSize() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182;
    if (typeof this._shapeModel["getShapeTextData"] != "function") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183 = this._shapeModel["getShapeTextData"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183 || !bd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184 = this.getTextRect(this.width, this.height),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A45 = this._element["shapeData"].formulaBinding != null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A45 ? Cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183, this._formulaAnimation["getAutoFitPresentations"]()) : Sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185 === undefined || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186 = resolveShapeTextEditorFlowAxis({
        shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186 === "width" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184.width : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184.height,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185 + 2 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187;
    if (!Nd(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A45)) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186 === "width") {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188;
        this._translateHorizontalAutoFit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229), this.resize(this.width + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229, this.height), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188 = this.getScene()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188.getTransformer()) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188.debounceRefreshControls();
        return;
      }
      this._translateVerticalAutoFit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229), this.resize(this.width, this.height + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182 = this.getScene()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182.getTransformer()) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182.debounceRefreshControls();
    }
  }
  _translateHorizontalAutoFit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198 = wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198 !== undefined && [HorizontalAlign.CENTER, HorizontalAlign.JUSTIFIED, HorizontalAlign.BOTH, HorizontalAlign.DISTRIBUTED].includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198) ? this.translate(this.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197 / 2, this.top) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198 === HorizontalAlign.RIGHT && this.translate(this.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197, this.top);
  }
  _translateVerticalAutoFit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205 = yd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204.va, this._element) ?? VerticalAlign.TOP;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205 === VerticalAlign.MIDDLE ? this.translate(this.left, this.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203 / 2) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205 === VerticalAlign.BOTTOM && this.translate(this.left, this.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203);
  }
  _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212 ?? this.width,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213 ?? this.height;
    this._shapeModel["updateContext"]({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215
    });
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB38 = {
      left: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 / 2,
      top: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 / 2,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215
    };
    if (this._renderShapePath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB38), isSmartArtShapeData(this._element["shapeData"])) {
      this._drawSmartArtImagePlaceholders(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215), this._drawSmartArtShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215), this._drawSmartArtSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215);
      return;
    }
    this._drawProjectedShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215) || this._drawShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215);
  }
  _drawProjectedShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462226 = this._element["shapeData"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462227 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462226.shapeText) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225.scene3d) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462226.scene3d;
    if (!isShape3DProjectiveScene(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462227) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462227 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462226.shapeType !== ShapeTypeEnum.Rect) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40 = {
        left: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223 / 2,
        top: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224 / 2,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462228 = projectShape3DRect(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462227);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222.save(), Ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462228), this._drawShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222.restore(), true;
  }
  _drawSmartArtImagePlaceholders(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462238) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462239 = this._element["shapeData"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240 = this._smartArtImagePlaceholderColors;
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240 || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462239))) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462239.smartArt["presentationShapeOrder"]) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462241;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462239.smartArt["presentationShapes"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367];
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.role) !== SmartArtPresentationShapeRoleEnum.Image || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462241 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.shapeData["fill"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462241.fillImageSource) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = resolveSmartArtPresentationTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462239.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462238);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.height <= 0) continue;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = Math.max(12, Math.min(28, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.height) * 0.42)),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 / 2;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.width / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462238 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.height / 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.transform["rotation"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.rotate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.transform["rotation"] * Math.PI / 180), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240.background, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240.border, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineWidth = Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 / 18), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.fillRect(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.strokeRect(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34);
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.18;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.moveTo(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineTo(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.02), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.06, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.arc(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.18, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.18, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.08, 0, Math.PI * 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.stroke();
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * 0.22;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240.accent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.arc(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 0.55, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 0.55, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37, 0, Math.PI * 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240.background, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineWidth = Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 / 14), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.beginPath();
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 0.55,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 1.18,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 0.02;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 0.48, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 0.48), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 0.48, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * 0.48), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236.restore();
    }
  }
  _drawSmartArtShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251 = this._element["shapeData"];
    if (!isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251)) return;
    this._disposeStaleSmartArtTextObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.smartArt);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252 = kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.smartArt);
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.smartArt["presentationShapeOrder"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.smartArt["presentationShapes"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = Ad(this._smartArtTextRenderStates["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.element["shapeData"]) ?? Fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 && Dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.transform) ?? resolveSmartArtPresentationTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.shapeText) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.shapeType === ShapeTypeEnum.SmartArt || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.height <= 0) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = jd(this._element["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = this._resolveSmartArtTextObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.setEditing(this._editingSmartArtPresentationShapeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248.save(), this._applyReadableTextFlip(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248), Md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.role === SmartArtPresentationShapeRoleEnum.Text && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.rotation && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248.rotate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.rotation * Math.PI / 180), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101._drawShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248.restore();
    }
  }
  _disposeStaleSmartArtTextObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258) {
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258.presentationShapeOrder);
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370] of this._smartArtTextObjects) var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.dispose(), this._smartArtTextObjects["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369), this._smartArtTextRenderStates["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369));
  }
  _resolveSmartArtTextObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462266) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462267 = this._smartArtTextObjects["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462267 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462267.updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462267 = new e(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261.id, {
      left: 0,
      top: 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262.height,
      shapeModel: new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261.shapeData["shapeType"] ?? ShapeTypeEnum.Rect, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261.shapeData),
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261,
      localeService: this._localeService,
      animateFormulaPresentation: false
    }), this._smartArtTextObjects["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462267)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263 || this._smartArtTextRenderStates["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260, {
      data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462266,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462267;
  }
  setSelectedSmartArtPresentationShapeId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462276) {
    this._selectedSmartArtPresentationShapeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462276 && (this._selectedSmartArtPresentationShapeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462276, this.makeDirty(true));
  }
  setEditingSmartArtPresentationShapeId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278) {
    this._editingSmartArtPresentationShapeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278 && (this._editingSmartArtPresentationShapeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278, this.makeDirty(true));
  }
  resolveSmartArtPresentationShapeAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462280) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281 = this._element["shapeData"];
    if (!isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282 = this.getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462280),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB42 = {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282.x + this.width / 2,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282.y + this.height / 2
      };
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.smartArt["presentationShapeOrder"].length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69--) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.smartArt["presentationShapeOrder"][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.smartArt["presentationShapes"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 ? resolveSmartArtPresentationTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.transform, this.width, this.height) : undefined;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.role === SmartArtPresentationShapeRoleEnum.Background || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.role === SmartArtPresentationShapeRoleEnum.Decoration || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.height <= 0) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = Od(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB42.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.width / 2, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB42.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.height / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.transform["rotation"] ?? 0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = resolveSmartArtPresentationShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.shapeType ?? ShapeTypeEnum.Rect, this._element["id"] + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 + ":hit-test", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.isLineShape() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.isHitLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.height) : Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.x) <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.width / 2 && Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.y) <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.height / 2) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.role === SmartArtPresentationShapeRoleEnum.Text ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283 = this._smartArtTextObjects["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283._resolveDocumentTextOffsetAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.height) : undefined;
        return {
          presentationShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102,
          nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.dataNodeIds[0] : resolveSmartArtPresentationNodeIdAtTextOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.dataNodeIds[0]
        };
      }
    }
    return null;
  }
  _resolveDocumentTextOffsetAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290) {
    let {
      resources: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293
    } = this._documentTextRenderCache;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293 === undefined) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291.skeleton["findNodeByCoord"](new Vector2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462288.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462289 / 2 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462288.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290 / 2 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293), PageLayoutType.VERTICAL, 0, 0);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291.skeleton["findPositionByGlyph"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294.node, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294.segmentPage);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291.skeleton["findCharIndexByPosition"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295,
      isBack: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294.ratioX < 0.5
    }) ?? undefined;
  }
  _drawSmartArtSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307 = this._element["shapeData"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308 = this._selectedSmartArtPresentationShapeId;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308 || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307.smartArt["presentationShapes"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310 = resolveSmartArtPresentationTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307.smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.width / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.height / 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309.transform["rotation"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.rotate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309.transform["rotation"] * Math.PI / 180);
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.width / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.height / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.width / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.height / 2;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.strokeStyle = "#666", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.lineWidth = 1.25, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.setLineDash([]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.strokeRect(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.fillStyle = "#fff";
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372] of [[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232], [0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D233, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D233, 0], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D233, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D234], [0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D234], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D234], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231, 0]]) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.arc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372, 4, 0, Math.PI * 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.stroke();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304.restore();
  }
  _drawShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320) {
    drawFormulaShapeAnimationLayers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462318, this._formulaAnimation, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375) => {
      this._drawShapeTextLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375);
    });
  }
  _drawShapeTextLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331;
    if (this._isEditing) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332 = this._shapeModel["getShapeTextData"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333 = normalizeShapeTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332.dataModel),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.doc ? createShapeFormulaDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.doc, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327) : undefined,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462334 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462329 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462334.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462329.dataStream) ?? ("text" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332.text ?? "" : ""),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335 = createShapeTextPlaceholderDocumentData({
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462334,
        isTextBox: this._element["shapeData"].isTextBox === true,
        placeholder: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330 = this._localeService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330.t("shape-editor-ui.textEditor.placeholder")) ?? "",
        showPlaceholder: this._element["shapeData"].formulaBinding == null,
        text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74.replace(/[\r\n]/g, "")
      }) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462334,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331.dataStream) ?? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335 ? resolveShapeTextDocumentAlignment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335, {
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.ha
      }).horizontalAlign : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.ha,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338 = yd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.va, this._element),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A47 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332.isHorizontal !== false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339 = resolveShapeTextEditorBehaviorShapeData(this._element["shapeData"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340 = resolveShapeTextBodyBehavior(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341 = resolveShapeTextEditorWrapStrategy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342 = shouldClipShapeTextDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343 = xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340.autoFitType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340.textWrap),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344 = this.getTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = resolveShapeTextNoWrapLayout({
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335,
          horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337,
          horizontalAnchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340.horizontalAnchor,
          isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A47,
          textRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344,
          textWrap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343,
          widthBuffer: 2
        }),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337 === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.textRect["width"] > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344.width ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.textRect,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344.left - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.textRect["width"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344.width) / 2
        } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.textRect,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.measureAsNoWrap ? WrapStrategy.WRAP : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 = prepareShapeTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335, {
          bodyBehavior: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340,
          textRect: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13,
          horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337,
          verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338,
          isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A47,
          wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.save(), this._applyReadableTextFlip(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462325 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326 / 2);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = this._renderPreparedShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324, {
        key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328 === "current" ? this.oKey + "-shape-text" : this.oKey + "-shape-text-previous",
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336,
        left: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.left,
        top: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.top,
        width: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.width,
        height: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.height,
        localeService: this._localeService,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338,
        isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A47,
        wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380,
        clip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342,
        onTextFillImageLoaded: () => {
          Ru(this._shapeText3DRenderCache), this.makeDirty(true);
        }
      }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.restore(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382) return;
    }
    if (!("isRichText" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332.isRichText !== false || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345 = gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346 = HorizontalAlign.CENTER,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347 = VerticalAlign.MIDDLE,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348 = plainTextToSlideDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336, {
        id: this.oKey + "-shape-text",
        textStyle: fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345),
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349 = resolveShapeTextNoWrapLayout({
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346,
        horizontalAnchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340.horizontalAnchor,
        isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A47,
        textRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344,
        textWrap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343,
        widthBuffer: 2
      }).textRect,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350 = prepareShapeTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, {
        bodyBehavior: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340,
        textRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347,
        isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A47,
        wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.save(), this._applyReadableTextFlip(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462325 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326 / 2), this._renderPreparedShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324, {
      key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328 === "current" ? this.oKey + "-shape-text" : this.oKey + "-shape-text-previous",
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349.height,
      localeService: this._localeService,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347,
      isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A47,
      wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341,
      clip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342,
      onTextFillImageLoaded: () => {
        Ru(this._shapeText3DRenderCache), this.makeDirty(true);
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.restore();
  }
  _renderPreparedShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462383 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382 === "current" ? this._documentTextRenderCache : undefined;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381.scene3d && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381.shape3d) return Hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462383);
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76 = JSON.stringify({
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.documentData,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.text,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.top,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.height,
        clip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.clip,
        scene3d: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381.scene3d,
        shape3d: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381.shape3d
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462384 = fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.documentData);
    return hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378, {
      signature: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76,
      scene3d: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381.scene3d,
      shape3d: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381.shape3d,
      baseColor: "color" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381.color : undefined,
      textRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380,
      drawFront: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 => Hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379,
        clip: false
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462383),
      drawMask: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 => Hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379,
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462384,
        clip: false
      })
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382 === "current" ? this._shapeText3DRenderCache : undefined);
  }
  _applyReadableTextFlip(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392) {
    this.getEffectiveFlipState().flipX && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392.scale(-1, 1);
  }
  _renderShapePath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462395) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44 = {
        renderMode: ShapeRenderModeEnum.Path,
        oKey: this.oKey,
        angle: this.angle,
        image: this._fillImage,
        smartArtImages: this._smartArtFillImages
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462396 = this._shapeModel["getDrawingEffectBounds"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462395);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462396) {
      this._releaseRenderCache(), this._shapeModel["render"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462395, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44);
      return;
    }
    this._renderWithCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 => {
      this._shapeModel["render"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462395, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44);
    });
  }
  render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401) {
    if (!this.visible) return this.makeDirty(false), this;
    let {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462405
      } = this,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406 = this.getRealBound();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462405 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406.top, this.isRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401)) {
      let {
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401.viewBound;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402 + this.strokeWidth < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404 - this.strokeWidth || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403 + this.strokeWidth < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462405 - this.strokeWidth) return this;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462407 = this.transform["getMatrix"](),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402 / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB79 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403 / 2;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400.save(), this._shapeModel["isRenderLinePointsMode"] === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400.transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462407[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462407[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462407[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462407[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB79), this._draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400.restore(), this.makeDirty(false), this;
  }
  getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416) {
    let {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462418,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462419,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462420
      } = this.getRealBound(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462421 = this.transform["getMatrix"](),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB82 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462419 / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462418 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462420 / 2,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462422 = new Transform([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462421[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462421[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462421[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462421[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB82, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423 = this.getParent();
    return (this.isInGroup && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423.classType) === RENDER_CLASS_TYPE.GROUP ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423.ancestorTransform["multiply"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462422) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462422).invert().applyPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416);
  }
  dispose() {
    this._formulaAnimation["dispose"](), zl(this._documentTextRenderCache), Ru(this._shapeText3DRenderCache), this._disposeSmartArtTextObjects(), super.dispose();
  }
  _disposeSmartArtTextObjects() {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 of this._smartArtTextObjects["values"]()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.dispose();
    this._smartArtTextObjects["clear"](), this._smartArtTextRenderStates["clear"]();
  }
  isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433 = this.getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432);
    if (this._shapeModel["isLineShape"]()) return this._shapeModel["isHitLine"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433.y, this.width, this.height);
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D239 = this.width / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D240 = this.height / 2;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433.x >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D239 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433.x <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D239 + this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433.y >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D240 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433.y <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D240 + this.strokeWidth / 2;
  }
  static createShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462436) {
    return new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462436.shapeData["shapeType"] ?? ShapeTypeEnum.Rect, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462436.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462436.shapeData);
  }
};
function Fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469716, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469717, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469718) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469719 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469715.viewport;
  return resolveSmartArtPresentationShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469716, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469719 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469719.width > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469719.height > 0 ? Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469717 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469719.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469718 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469719.height) : 1);
}
const Id = "#7f8ea3",
  Ld = "#c7d2e3",
  Rd = "#ffffff",
  zd = "#1a73e8",
  Bd = "#5f6368",
  Vd = "#ffffff",
  Hd = 0.5;
var Ud = class e extends Rect {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439,
      fill: Rd,
      stroke: Id,
      strokeWidth: 1,
      evented: true
    }), X(this, "isDrawingObject", true), X(this, "_table", undefined), X(this, "_imageIoService", undefined), X(this, "_localeService", undefined), X(this, "_tableThemes", undefined), X(this, "_tableThemePalette", undefined), X(this, "_themeService", undefined), X(this, "_textRenderCaches", new Map()), X(this, "_editingCell", null), X(this, "_previewTable", null), X(this, "_selection", null), X(this, "_cellHover", null), X(this, "_controlHover", null), X(this, "_controlState", null), this._table = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439.table, this._imageIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439.imageIoService, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439.localeService, this._tableThemes = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439.tableThemes, this._tableThemePalette = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439.tableThemePalette, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439.themeService;
  }
  getConnectionSites() {
    return [{
      x: 0.5,
      y: 0,
      idx: 0,
      ang: 270
    }, {
      x: 1,
      y: 0.5,
      idx: 1,
      ang: 0
    }, {
      x: 0.5,
      y: 1,
      idx: 2,
      ang: 90
    }, {
      x: 0,
      y: 0.5,
      idx: 3,
      ang: 180
    }];
  }
  render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443) {
    if (!this.visible) return this.makeDirty(false), this;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444 = this.getRealBound(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.width,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.height,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.left,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.top,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D243 = this._hasActiveStructuralControlState() ? 24 : 0;
    if (this.isRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443)) {
      let {
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443.viewBound;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445 + this.strokeWidth + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D243 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D243 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446 + this.strokeWidth + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D243 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D243) return this;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462449 = this.transform["getMatrix"](),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB86 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445 / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB87 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446 / 2;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442.transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462449[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462449[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462449[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462449[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB86, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB87), this._draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442.restore(), this.makeDirty(false), this;
  }
  dispose() {
    this._textRenderCaches["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 => zl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396)), this._textRenderCaches["clear"](), super.dispose();
  }
  setEditingCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462458) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462458 && this._disposeTextRenderCachesForCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462458), this._editingCell = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462458, this.makeDirty(true);
  }
  setPreviewTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460) {
    this._previewTable = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460, this.makeDirty(true);
  }
  setTableSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462) {
    this._selection = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462 ? {
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462.kind,
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397
      })),
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462.active ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462.active
      } : undefined
    } : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462 || (this._cellHover = null, this._controlHover = null, this._controlState = null), this.makeDirty(true);
  }
  setTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462466;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462467 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462465 = this._cellHover) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462465.row) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462468 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462466 = this._cellHover) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462466.column) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462469 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464.row) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462470 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464.column) ?? null;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462467 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462469 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462468 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462470 ? false : (this._cellHover = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464 ? {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464.column
    } : null, this.makeDirty(true), true);
  }
  setTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462481;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462482 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478.kind) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462483 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478.row) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462484 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478.column) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462485 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462479 = this._controlHover) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462479.kind) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462486 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462480 = this._controlHover) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462480.row) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462487 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462481 = this._controlHover) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462481.column) ?? null;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462482 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462485 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462483 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462486 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462484 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462487 ? false : (this._controlHover = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462482 == null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462483 == null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462484 == null ? null : {
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478.kind,
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462483,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462484
    }, this.makeDirty(true), true);
  }
  setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462498) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462499 = Wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462498);
    return Gd(this._controlState, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462499) ? false : (this._controlState = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462499, this.makeDirty(true), true);
  }
  getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462502) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462503 = this.getRealBound(),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462503.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462503.width / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB91 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462503.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462503.height / 2,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462504 = this.transform["getMatrix"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462505 = new Transform([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462504[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462504[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462504[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462504[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB91]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462506 = this.getParent();
    return (this.isInGroup && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462506 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462506.classType) === RENDER_CLASS_TYPE.GROUP ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462506.ancestorTransform["multiply"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462505) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462505).invert().applyPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462502);
  }
  isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462512) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 = this.getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462512),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D245 = this.width / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D246 = this.height / 2;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513.x >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D245 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513.x <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D245 + this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513.y >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D246 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513.y <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D246 + this.strokeWidth / 2) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462514 = this._getRenderTable();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462514 || !this._hasActiveTableChrome()) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46 = {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513.x + this.width / 2,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513.y + this.height / 2
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462515 = this._buildStructuralTriggers(this._resolveRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462514), this.width, this.height, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462514, this.width), ef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462514, this.height)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516 = hitTestSlideTableTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462515, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.x, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.y);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.kind === "row-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.kind === "column-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.kind === "row-insert-dot" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.kind === "column-insert-dot") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462515.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398 => this._isPointInStructuralTriggerEnvelope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.x, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.y)) ? true : !!hitTestSlideTableControl(buildSlideTableControls(this._resolveRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462514), this.width, this.height).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.kind === "table-handle"), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.x, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.y);
  }
  getCellTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462524 = this.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525 = this.height) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526 = this._resolveCellForText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462523);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526 ? {
      ...this._resolveCellTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526.cell, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526.model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525),
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526.cell["row"],
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526.cell["column"]
    } : null;
  }
  _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462535) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462534 ?? this.width,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462535 ?? this.height,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538 = this._getRenderTable(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540 = ef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538 ? this._resolveRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538) : null;
    this._drawTableEffects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532.rect(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532.clip(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541 ? this._drawCellFills(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537) : this._drawRowFills(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537), this._drawCellTexts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541 ? this._drawCellBorders(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540) : this._drawGrid(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537), this._drawCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537), this._drawSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532.restore(), this._drawStructuralHeaders(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540), this._drawInsertDots(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540), this._drawInsertGuide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540), this._drawReorderGuide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540), this._drawTableHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537);
  }
  _drawTableEffects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555 = this._getRenderTable()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555.effects,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462557 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556.outerShadow,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558 = resolveDrawingEffectMasks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556.glow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462557 ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462557,
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462557.color ?? "rgba(0, 0, 0, 1)"
      } : undefined);
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.blurRadius * 2 + Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.offsetX);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.translate(-var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.rect(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.shadowColor = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.shadowBlur = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.blurRadius, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.shadowOffsetX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.offsetX + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.shadowOffsetY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.offsetY, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.restore();
    }
  }
  _drawRowFills(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462568, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462569) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D249 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462569 / 2;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462567.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 = uf(this._table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566.rect(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462568 / 2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462568, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566.fill(), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D249 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401;
    });
  }
  _drawGrid(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462575, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462578) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462577 / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D252 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462578 / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462577 / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462578 / 2;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.setLineDash([]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.strokeStyle = Ld, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.lineWidth = 1;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462579 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462575.slice(0, -1).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462579 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462579, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D252), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462579, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D254);
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D252;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462576.slice(0, -1).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580);
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574.stroke(), this._drawTableOutline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462574, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462578);
  }
  _drawTableOutline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462592) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462588.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462588.strokeStyle = Id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462588.lineWidth = 1.5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462588.rect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462592), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462588.stroke();
  }
  _drawCellFills(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462601) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462602 = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462600 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462599.width, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462603 = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462601 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462599.height, 1);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462599.cells["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.hidden) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462600 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.bounds["left"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462602,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462601 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.bounds["top"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462603,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.bounds["width"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462602,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462603,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 = this._resolvePictureFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.style["fill"]);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 && df(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.style["fill"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.style["fill"] ? ff(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.style["fill"], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73) : uf(this._table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.row);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598.rect(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598.fill());
    }), this._drawMatchingCellFillSeams(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462603);
  }
  _drawMatchingCellFillSeams(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462611.cells["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.hidden);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 = pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.style["fill"], this._table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.row);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462612 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.bounds["left"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462614,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.bounds["top"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.bounds["width"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462614,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB22 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.style["borders"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 = qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.columnSpan),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.rowSpan, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.column);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.rowSpan === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.rowSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 === pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.style["fill"], this._table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.row) && !Jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.right, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.insideV, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.insideV) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610.rect(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 - Hd, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79, Hd * 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610.fill()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.columnSpan === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.columnSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 === pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.style["fill"], this._table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.row) && !Jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.bottom, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.insideH, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.insideH) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610.rect(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB22 - Hd, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.bounds["width"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462614, Hd * 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462610.fill());
    });
  }
  _drawCellBorders(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462629) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462630 = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462626 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462625.width, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462631 = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462627 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462625.height, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462625.cells["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.hidden);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462632.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462626 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.bounds["left"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462630,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462627 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.bounds["top"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462631,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.bounds["width"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462630,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462631,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.style["borders"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 = qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.columnSpan),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 = qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.rowSpan, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.column),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.top,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 ? Jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.right, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.insideV, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439.insideV) : resolveSlideTableCellBoundaryBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.right, undefined),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 ? Jd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.bottom, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.insideH, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441.insideH) : resolveSlideTableCellBoundaryBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.bottom, undefined),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.left;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.row === 0) {
        let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 + cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445);
        sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10);
      }
      {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 - cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446);
        sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26);
      }
      {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26 - cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447);
        sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42);
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437.column === 0) {
        let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 + cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448);
        sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26);
      }
    });
  }
  _drawCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462645) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462643 || !this._cellHover) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462643.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462;
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.hidden && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.row === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462 = this._cellHover) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462.row) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.column === this._cellHover["column"];
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462647 = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462644 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462643.width, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462648 = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462645 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462643.height, 1);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642.rect(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462644 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646.bounds["left"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462647, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462645 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646.bounds["top"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646.bounds["width"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462648), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642.strokeStyle = "rgba(64,\x20156,\x20255,\x200.42)", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642.lineWidth = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642.stroke();
  }
  _drawCellTexts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462658) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659 = this._getRenderTable();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659 || !this._localeService) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462660 = this._resolveRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462660.cells["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.hidden || this._shouldHideCellTextForEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.row]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.column]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.textData;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 = this._resolveCellTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462658),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 = this._getTextRenderCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.column),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.renderConfig,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = af(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 = Sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.style["verticalAlign"]) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.verticalAlign),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.style["textDirection"];
      Vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462656, {
        key: this.oKey + "-cell-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.row + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.column,
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468,
        left: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462657 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.left,
        top: -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462658 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.top,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.height,
        localeService: this._localeService,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473,
        isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 !== SlideTableTextDirectionEnum.Vertical && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 !== SlideTableTextDirectionEnum.Vertical270,
        wrapStrategy: WrapStrategy.WRAP,
        clip: true,
        viewportHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.height
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470);
    });
  }
  _drawSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462671;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462667 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462670 = this._selection) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462670.ranges["length"]) || this._selection["kind"] === "text") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462672 = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462667.width, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462673 = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462667.height, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462667.cells["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.hidden && this._isCellInSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.column)),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A49 = this._selection["kind"] === "table",
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB94 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462671 = this._themeService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462671.getColorFromTheme("primary.600")) ?? "#409cff",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462675 = new ColorKit(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB94).setAlpha(0.07).toRgbString();
    if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A49) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666.rect(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666.fill(), gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB94, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669);
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462674.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486.bounds["left"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462672,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486.bounds["top"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462673,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486.bounds["width"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462672,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462673;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666.rect(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666.fill();
    }), this._selection["ranges"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 => {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462674.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.row >= Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.endRow) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.row <= Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.endRow) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.column >= Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.endColumn) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.column <= Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.endColumn));
      if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.length) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668 / 2 + Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.bounds["left"])) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462672,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669 / 2 + Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.bounds["top"])) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462673,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668 / 2 + Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.bounds["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.bounds["width"])) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462672,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D97 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669 / 2 + Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.bounds["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.bounds["height"])) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462673;
      gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462666, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D97 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB94, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669);
    });
  }
  _drawTableHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462689) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462690;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462687 || !this._hasActiveTableChrome()) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462691 = buildSlideTableControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462689).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490.kind === "table-handle");
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462691) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462691.rect,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB96 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462692.x,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB97 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462689 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462692.y,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A51 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462690 = this._controlHover) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462690.kind) === "table-handle";
    Qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB96, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB97, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462692.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462692.height, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A51), Zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB96, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB97, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462692.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462692.height, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A51 ? Vd : Bd);
  }
  _drawStructuralHeaders(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701 || !this._shouldDrawStructuralHeaders()) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = this._buildStructuralTriggers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.kind === "row-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.kind === "column-header"),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 => !this._isSelectedStructuralTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 => this._isSelectedStructuralTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493));
    [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.rect,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB29 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.x,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.y,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 = this._isSelectedStructuralTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 = this._isHoveredStructuralTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700.rect(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB29, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 ? "#1a73e8" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 ? "#d2e3fc" : "#f1f3f4", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700.fill();
    });
  }
  _drawInsertDots(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462714, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462716, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462717) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713 || !this._shouldDrawInsertDots()) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462718 = this._getStructuralControlZoom();
    this._buildStructuralTriggers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462714, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462716, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462717).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.kind === "row-insert-dot" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.kind === "column-insert-dot").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 => {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462714 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503.rect["x"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503.rect["width"] / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462715 / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503.rect["y"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503.rect["height"] / 2,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 = this._isHoveredStructuralTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 ? Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503.rect["width"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503.rect["height"]) / 2 : 2 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462718;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.arc(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102, 0, Math.PI * 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 ? zd : "rgba(95, 99, 104, 0.45)", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.fill(), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504) return;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.strokeStyle = Vd, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.lineWidth = 1.5 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462718;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103 = 3 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462718;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462712.stroke();
    });
  }
  _drawInsertGuide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462726, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462727, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462730) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462731;
    !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462731 = this._controlState) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462731.visible) || !this._controlState["insertGuide"] || this._drawGuideLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462726, this._controlState["insertGuide"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462727, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462730, 2 / this._getStructuralControlZoom());
  }
  _drawReorderGuide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462742) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462743;
    !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462743 = this._controlState) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462743.visible) || !this._controlState["reorderGuide"] || this._drawGuideLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462738, this._controlState["reorderGuide"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462742, 2 / this._getStructuralControlZoom());
  }
  _drawGuideLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462751, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462756) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D259 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462752 / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D260 = -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462753 / 2;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.setLineDash([]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.strokeStyle = zd, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.lineWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462756, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462751.kind === "row") {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB37 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D260 + Yd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462751.index);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.moveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D259, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB37), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.lineTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D259 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462752, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB37);
    } else {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB38 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D259 + Yd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462751.index);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.moveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB38, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D260), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.lineTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB38, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D260 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462753);
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462750.stroke();
  }
  _buildStructuralTriggers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769;
    return buildSlideTableTriggers({
      tableId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769 = this._getRenderTable()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769.id,
      tableWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462765,
      tableHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462766,
      rowHeights: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768,
      columnWidths: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462767,
      mergedCells: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462764.cells["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.hidden && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.rowSpan > 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.columnSpan > 1)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508 => ({
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.row,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.rowSpan - 1,
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.column,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.columnSpan - 1
      })),
      zoom: this._getStructuralControlZoom()
    });
  }
  _getStructuralControlZoom() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462777;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462778 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462776 = this.getScene()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462777 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462776.getAncestorScale) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462777.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462776);
    return rf((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462778 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462778.scaleX) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462778 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462778.scaleY), 1);
  }
  _isPointInStructuralTriggerEnvelope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782.kind !== "row-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782.kind !== "column-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782.kind !== "row-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782.kind !== "column-insert-dot") return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782.rect;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785.x && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785.y && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785.height;
  }
  _shouldDrawStructuralHeaders() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462790, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462793;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462794 = this._controlState;
    return this._hasTableSelectionForStructuralControls() ? true : !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462794 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462794.visible) && !!(this._getSelectedStructuralRange() || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462790 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462794.hoveredTrigger) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462790.kind) === "row-header" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462791 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462794.hoveredTrigger) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462791.kind) === "column-header" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462792 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462794.hoveredTrigger) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462792.kind) === "row-insert-dot" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462793 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462794.hoveredTrigger) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462793.kind) === "column-insert-dot");
  }
  _shouldDrawInsertDots() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800;
    return this._hasTableSelectionForStructuralControls() || !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800 = this._controlState) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800.visible);
  }
  _hasActiveStructuralControlState() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802 = this._controlState;
    return this._hasTableSelectionForStructuralControls() ? true : !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.visible) && !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.hoveredTrigger || this._getSelectedStructuralRange() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.insertGuide || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.reorderGuide);
  }
  _isSelectedStructuralTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805 = this._getSelectedStructuralRange();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.kind === "row" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804.kind === "row-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804.row !== undefined ? Kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.end) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.kind === "column" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804.kind === "column-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804.column !== undefined && Kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804.column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.end) : false;
  }
  _isHoveredStructuralTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809 = this._controlState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809.hoveredTrigger;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810.kind !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808.kind ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808.kind === "row-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808.kind === "row-insert-dot" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810.row !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808.row : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808.kind === "column-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808.kind === "column-insert-dot" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810.column !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808.column : false;
  }
  _hasTableSelectionForStructuralControls() {
    return this._hasActiveTableChrome();
  }
  _hasActiveTableChrome() {
    return !!this._selection && this._selection["kind"] !== "text";
  }
  _getSelectedStructuralRange() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814 = this._controlState) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814.selectedStructuralRange) return this._controlState["selectedStructuralRange"];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815 = this._selection,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.ranges[0];
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816 ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.kind === "row" ? {
      kind: "row",
      start: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.endRow),
      end: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.endRow)
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.kind === "column" ? {
      kind: "column",
      start: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.endColumn),
      end: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.endColumn)
    } : null;
  }
  _isCellInSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462821) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462822;
    return !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462822 = this._selection) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462822.ranges["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820 >= Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.endRow) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820 <= Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.endRow) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462821 >= Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.endColumn) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462821 <= Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.endColumn)));
  }
  _resolveCellForText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828 = this._getRenderTable();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462829 = this._resolveRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462830 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462829.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462826 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.hidden) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462829.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.hidden && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462826 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462826 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.rowSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.columnSpan);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462830 ? {
      model: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462829,
      cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462830
    } : null;
  }
  _resolveCellTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462842 = resolveSlideTableCellRect({
        cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836,
        tableWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837.width,
        tableHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837.height,
        targetWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838,
        targetHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462843 = this._getRenderTable(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462844 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462843 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462840 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462843.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836.row]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462840.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836.column];
    return of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462844 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462844.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841.margins);
  }
  _getTextRenderCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462855) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462854 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462855,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462856 = this._textRenderCaches["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB100);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462856 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462856 = {}, this._textRenderCaches["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462856)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462856;
  }
  _disposeTextRenderCachesForCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462860) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462861 = this._getRenderTable();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462861 && this._resolveRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462861).cells["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.hidden && Xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512)).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 => {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513.row + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513.column;
      zl(this._textRenderCaches["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39)), this._textRenderCaches["delete"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39);
    });
  }
  _isEditingCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462866;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462866 = this._editingCell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462866.row) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864 && this._editingCell["column"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865;
  }
  _shouldHideCellTextForEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462871;
    return this._editingCell && Xd(this._editingCell, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870) ? true : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462871 = this._selection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462871.kind) === "text" && this._selection["ranges"].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.startRow <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.rowSpan - 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.endRow >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.startColumn <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.columnSpan - 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.endColumn >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.column);
  }
  _getRenderTable() {
    return this._previewTable ?? this._table;
  }
  _resolveRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462874) {
    return resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462874, {
      themes: {
        ...buildDefaultSlideTableThemes(this._tableThemePalette),
        ...(this._tableThemes ?? {})
      }
    });
  }
  _resolvePictureFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462878;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462879 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462877 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462877.source;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462879) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462880 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462878 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462878.sourceType) ?? ImageSourceType.URL,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462880 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462879,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462881 = this._imageIoService["getImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462880);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462881) return e._imageNativeCache["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462881), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462881;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462882 = e._imageNativeCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462882) return this._imageIoService["addImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462882), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462882;
    if (!e._imageLoadingCache["has"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 = this._createImagePromise(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462880);
      e._imageLoadingCache["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516.then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 && this.makeDirty(true);
      });
    }
  }
  async _createImagePromise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462892) {
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462892 === ImageSourceType.UUID ? await this._imageIoService["getImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 = await new Promise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = document.createElement("img");
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.crossOrigin = "anonymous", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.onload = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.onerror = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.src = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517;
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 && (e._imageNativeCache["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518), this._imageIoService["addImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518;
    } finally {
      e._imageLoadingCache["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462890);
    }
  }
};
X(Ud, "_imageNativeCache", new Map()), X(Ud, "_imageLoadingCache", new Map());
function Wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725 ? {
    visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.visible,
    hoveredTrigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.hoveredTrigger ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.hoveredTrigger,
      rect: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.hoveredTrigger["rect"]
      }
    } : null,
    selectedStructuralRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.selectedStructuralRange ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.selectedStructuralRange
    } : null,
    insertGuide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.insertGuide ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.insertGuide
    } : null,
    reorderGuide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.reorderGuide ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469725.reorderGuide
    } : null
  } : null;
}
function Gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469727, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469728) {
  return JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469727) === JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469728);
}
function Kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469733) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469731 >= Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469733) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469731 <= Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469733);
}
function qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469739) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469737.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469738 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469738 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896.rowSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469739 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896.column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469739 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896.columnSpan);
}
function Jd(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469743) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469743.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898) => resolveSlideTableCellBoundaryBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898), undefined);
}
function Yd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469746) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D667 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469745.length, Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469746));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469745.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D667).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462899, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462900) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462899 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462900, 0);
}
function Xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469750) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469749.row >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469750.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469749.row < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469750.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469750.rowSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469749.column >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469750.column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469749.column < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469750.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469750.columnSpan;
}
function Zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469756, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469757, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469758 = Bd) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469754 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469756 / 2 - 3,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469755 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469757 / 2 - 3;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469753.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469758;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D263 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D263 < 2; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D263 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 < 2; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 += 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469753.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469753.arc(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D669 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 * 6, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D670 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D263 * 6, 1.5, 0, Math.PI * 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469753.fill();
}
function Qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469770 = false) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469771;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.shadowColor = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469770 ? "rgba(26, 115, 232, 0.22)" : "rgba(60, 64, 67, 0.16)", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.shadowBlur = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469770 ? 10 : 8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.shadowOffsetY = 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.beginPath(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469771 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.roundRect) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469771.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469769, 6), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.roundRect || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.rect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469769), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469770 ? "#1a73e8" : "#ffffff", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.shadowBlur = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.shadowOffsetY = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469770 ? "#0b57d0" : "#dadce0", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.lineWidth = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469765.restore();
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469780) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469779 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469779.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462901 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462901.width).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462902 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462902 > 0);
  return tf(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A152 != null && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A152.length ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A152 : [1, 1, 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469780);
}
function ef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469784) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469783 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469783.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462903 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462903.height ?? 24).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462904 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462904 > 0);
  return tf(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154 != null && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154.length ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154 : [1, 1, 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469784);
}
function tf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469788) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469789 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469787.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462906) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462906, 0);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469789 <= 0 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469788] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469787.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469789 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469788);
}
function nf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469793, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469794 = 0) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469793 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469793) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469793 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469794;
}
function rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469798) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469799 = nf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469798);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469799 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469799 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469798;
}
function af(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469803) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469806 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469803.documentStyle) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469804.renderConfig) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469804.horizontalAlign;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469806 === undefined ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469803.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805.paragraphs) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462908 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462908.paragraphStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.horizontalAlign) !== undefined;
  })) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805.paragraphStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469805.horizontalAlign : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469806;
}
function of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469812) {
  let {
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469813,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469814,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469815,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469816
    } = resolveSlideTableCellTextMargins(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469812),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D673 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469811.width - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469814 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469815),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D674 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469811.height - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469816 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469813);
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469811.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469814,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469811.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469816,
    width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D673,
    height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D674
  };
}
function sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469828) {
  !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469824 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469824.dash === "none" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823.setLineDash(lf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469824.dash)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469824.color || Ld, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823.lineWidth = rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469824.width, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469826), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469828), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469823.setLineDash([]));
}
function cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469835) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469835 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469835.dash === "none" ? 0 : rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469835.width, 1) / 2;
}
function lf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469837) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469837 === "dash" ? [6, 3] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469837 === "dot" ? [1, 3] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469837 === "dashDot" ? [6, 3, 1, 3] : [];
}
function uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469840) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469839 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469839.options["firstRow"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469840 === 0 ? "#e8f1ff" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469839 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469839.options["bandRow"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469840 % 2 == 1 ? "#f7faff" : Rd;
}
function df(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469849) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469850;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469844 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469850 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469844.picture) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469850.source)) return false;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.rect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469849), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.clip(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.globalAlpha = vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469844.picture["opacity"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469844.alpha ?? 1) ?? 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469844.picture["mode"] === "tile") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.createPattern(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469845, "repeat");
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.fillRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469849), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.restore(), true) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.restore(), false);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469849), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469843.restore(), true;
}
function ff(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469859, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469864) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469865;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860.type) === "none") return;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469865 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860.gradient) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469865 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469865.stops) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469865.length) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913 = mf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469859, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860.gradient, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469864);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860.gradient["stops"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913.addColorStop(hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.offset), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.opacity ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860.alpha ?? 1));
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469866 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860.color;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469866) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469867 = vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469860.alpha);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469867 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469867 >= 1) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469866;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469868 = xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469866);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469868 ? "rgba(" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469868.r + ",\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469868.g + ",\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469868.b + ",\x20" + bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469867) + ")" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469866;
}
function pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469881) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469882;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469879) return uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469881);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469879.type === "none" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469882 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469879.gradient) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469882 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469882.stops) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469882.length || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469879.picture) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469883 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469879.color;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469883) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469884 = vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469879.alpha);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469884 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469884 >= 1) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469883;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469885 = xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469883);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469885 ? "rgba(" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469885.r + ",\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469885.g + ",\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469885.b + ",\x20" + bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469884) + ")" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469883;
}
function mf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469898) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469894.type === "radial" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469894.type === "diamond") {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D264 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469898) / 2;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469893.createRadialGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469895 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469897 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469896 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469898 / 2, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469895 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469897 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469896 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469898 / 2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D264);
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D677 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469894.angle ?? 0) + 90) % 360 * Math.PI / 180,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469895 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469897 / 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB221 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469896 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469898 / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D678 = Math.sqrt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469897 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469897 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469898 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469898) / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D679 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D677) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D678,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D680 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D677) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D678;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469893.createLinearGradient(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB220 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D679, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB221 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D680, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB220 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D679, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB221 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D680);
}
function hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469905) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469905) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469905 <= 1 ? Math.min(1, Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469905)) : Math.min(1, Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469905 / 100)) : 0;
}
function gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469909, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469914) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D685 = 0.5,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D686 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469908, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469913 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D685),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D687 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469909, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469914 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D685),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D688 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469908 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469913 / 2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D685),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D689 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469909 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469914 / 2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D685);
  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D688 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D686 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D689 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D687 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469907.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469907.setLineDash([]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469907.rect(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D686, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D687, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D688 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D686, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D689 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D687), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469907.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469907.lineWidth = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469907.stroke());
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469924) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469923.trim(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469925 = yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469924);
  if (/^#[0-9a-f]{3}$/i.test(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB224)) {
    let [, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462916] = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB224;
    return "rgba(" + Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462914 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462914, 16) + ",\x20" + Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462915 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462915, 16) + ",\x20" + Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462916 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462916, 16) + ",\x20" + bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469925) + ")";
  }
  return /^#[0-9a-f]{6}$/i.test(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB224) ? "rgba(" + Number.parseInt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB224.slice(1, 3), 16) + ",\x20" + Number.parseInt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB224.slice(3, 5), 16) + ",\x20" + Number.parseInt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB224.slice(5, 7), 16) + ",\x20" + bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469925) + ")" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469923;
}
function vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469929) {
  if (!(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469929 != "number" || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469929))) return yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469929 <= 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469929 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469929 <= 100 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469929 / 100 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469929 / 100000);
}
function yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469931) {
  return Math.min(1, Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469931));
}
function bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469933) {
  return Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469933.toFixed(4)).toString();
}
function xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469935) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB226 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469935.trim(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469936 = /^#([0-9a-f]{3})$/i.exec(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB226);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469936) {
    let [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469936[1].split("").map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 => Number.parseInt("" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, 16));
    return {
      r: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30,
      g: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31,
      b: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469937 = /^#([0-9a-f]{6})$/i.exec(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB226);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469937) return {
    r: Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469937[1].slice(0, 2), 16),
    g: Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469937[1].slice(2, 4), 16),
    b: Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469937[1].slice(4, 6), 16)
  };
}
function Sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469941) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469941 === "middle") return VerticalAlign.MIDDLE;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469941 === "bottom") return VerticalAlign.BOTTOM;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469941 === "top") return VerticalAlign.TOP;
}
wf.add(Ef);
var Df = class extends Cf {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933), X(this, "zIndex", 5);
  }
  check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935.element["type"] === PageElementTypeEnum.Group;
  }
  convert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937.hidden || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937.element["type"] !== PageElementTypeEnum.Group) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939.transform,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 = new DrawingGroupObject("slide-drawing-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938.unitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938.subUnitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937.drawingId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462942 = resolveOuterShadowEffect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939.outerShadow);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462942 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941.setOuterShadow({
      shadowColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462942.color,
      shadowBlur: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462942.blurRadius,
      shadowOffsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462942.offsetX,
      shadowOffsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462942.offsetY
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941.setGlow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939.glow), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941.transformByState({
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938.pageOffsetLeft + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.left ?? 0),
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938.pageOffsetTop + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.top ?? 0),
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.width ?? 0,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.height ?? 0,
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.rotation ?? 0,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.flipX,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.flipY,
      skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.skewX,
      skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940.skewY
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941.zIndex = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938.orderIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941.evented = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941;
  }
};
wf.add(Df);
const Af = new Set([SlidePresentationBackgroundGraphicFitEnum.Cover, SlidePresentationBackgroundGraphicFitEnum.Contain, SlidePresentationBackgroundGraphicFitEnum.Stretch, SlidePresentationBackgroundGraphicFitEnum.Repeat]);
function jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469943) {
  if (!isPresentationBackgroundGraphic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469943)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469944 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469943.custom && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469943.custom == "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469943.custom["fit"] : undefined;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469944 == "string" && Af.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469944) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469944 : undefined;
}
let Mf = kf = class extends Cf {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462964) {
    super(), this._imageClipService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462963, this._imageIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462964, X(this, "zIndex", 30);
  }
  check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462967) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462967.element["type"] === PageElementTypeEnum.Image;
  }
  convert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462973;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.hidden || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.element["type"] !== PageElementTypeEnum.Image) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.transform,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.crop,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB50 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976 && Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 == "number" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 !== 0) ? {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976.left ?? 0,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976.top ?? 0,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976.right ?? 0,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976.bottom ?? 0
      } : undefined,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104 = "slide-drawing-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970.unitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970.subUnitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.drawingId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462977 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.imageSourceType ?? ImageSourceType.URL,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971.stroke,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A55 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978.lineStrokeType !== ShapeLineTypeEnum.NoLine && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978.color,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462977 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.source,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462979 = this._imageIoService["getImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.source, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462977) ?? kf._globalImageNativeCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462980 = new tu(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104, {
        image: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462979 ?? undefined,
        success: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970.requestRender,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970.pageOffsetLeft + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.left ?? 0),
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970.pageOffsetTop + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.top ?? 0),
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.width ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.height ?? 0,
        srcRect: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB50,
        prstGeom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.prstGeom,
        adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.adjustValues,
        stroke: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A55 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978.color : undefined,
        strokeWidth: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A55 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978.width ?? 1 : 0,
        outerShadow: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462972 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462972.outerShadow,
        glow: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462973 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462973.glow,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.rotation ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.flipX,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.flipY,
        skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.skewX,
        skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975.skewY,
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970.orderIndex,
        visible: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.hidden,
        evented: true,
        forceRender: true,
        backgroundImageFit: jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974)
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462980.setClipService(this._imageClipService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462979 || this._getOrCreateImageLoadingPromise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462974.source, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462977, this._imageIoService).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462980.setNativeImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970.requestRender) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970));
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462980;
  }
  _getOrCreateImageLoadingPromise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462994 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462996 = kf._globalImageNativeCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462996) return Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462996);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997 = kf._globalImageLoadingCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462998 = (async () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462994 === ImageSourceType.UUID ? await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.getImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 = await new Promise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = document.createElement("img");
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.crossOrigin = "anonymous", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.onload = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.onerror = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.src = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530;
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 ? (kf._globalImageNativeCache["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.addImageSourceCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531) : null;
    })().finally(() => {
      kf._globalImageLoadingCache["delete"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108);
    });
    return kf._globalImageLoadingCache["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462998), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462998;
  }
};
X(Mf, "_globalImageNativeCache", new Map()), X(Mf, "_globalImageLoadingCache", new Map()), Mf = kf = Q([Z(0, Inject(Of)), Z(1, IImageIoService)], Mf), wf.add(Mf);
Lf = Q([Z(1, IUniverInstanceService), Z(2, Inject(ISlideDrawingService)), Z(3, IPermissionService)], Lf);
const Rf = createInternalEditorID("SLIDE_SHAPE_TEXT"),
  zf = "slide.shape.text.float-menu",
  Bf = {
    width: 240,
    height: 120
  };
function Vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469959, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469960) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469959,
    body: {
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469960 + "\x0d\x0a",
      textRuns: [],
      paragraphs: [{
        startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469960.length,
        paragraphId: createParagraphId(new Set())
      }]
    },
    documentStyle: {
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      pageSize: {
        ...Bf
      }
    }
  };
}
function Hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469964) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469965 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469964);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469965.id = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469965;
}
function Uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469970) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469971 = Hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469970),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469971.documentStyle ?? {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469971.documentStyle = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB218,
    renderConfig: {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB218.renderConfig,
      shapeTextOpticalVerticalAlign: BooleanNumber.FALSE
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469971;
}
function Wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469976) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469977 = Hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469976),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469977.documentStyle ?? {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469977.documentStyle = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB220,
    renderConfig: {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB220.renderConfig,
      shapeTextOpticalVerticalAlign: BooleanNumber.FALSE
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469977;
}
function Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469982, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469983) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469984 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469981),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB222 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469984.documentStyle ?? {},
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB223 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB222.renderConfig
    };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469982 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469985;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB223.horizontalAlign = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469982;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469985 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469984.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469985.paragraphs;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235) {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.paragraphStyle = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.paragraphStyle,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469982
      };
    }
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469983 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB223.verticalAlign = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469983), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469984.documentStyle = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB222,
    renderConfig: Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB223).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB223 : undefined
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469984;
}
function Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469991) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469992;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469991 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469991.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469992.doc) ?? null;
}
function qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469995) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469996 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469995 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469995.dataModel;
  return {
    horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469996 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469996.ha,
    verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469996 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469996.va
  };
}
function Jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469999) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469999;
}
function Yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610001, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610004) {
  let {
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610001;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.type === PageElementTypeEnum.Text) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610006, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610008, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610010, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610011, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610012;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.textData) return Hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.textData);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236 = gu({
        isHorizontal: true,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.text ?? "",
        fontFamily: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610006 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610006.fontFamily,
        fontSize: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610007 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610007.fontSize,
        color: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610008 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610008.color,
        bold: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610009 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610009.bold,
        italic: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610010 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610010.italic,
        underline: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610011 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610011.underline
      }),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.text ?? "",
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52 = {
        ...fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236),
        fs: Jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236.fontSize ?? 16)
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237 = HorizontalAlign.CENTER,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463238 = VerticalAlign.MIDDLE,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A59 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236.isHorizontal !== false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239 = plainTextToSlideDocumentData(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB114, {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002,
        textStyle: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463238
      });
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239,
      documentStyle: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239.documentStyle,
        pageSize: {
          ...Bf
        },
        renderConfig: {
          ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610012 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610012.renderConfig),
          ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A59 ? {} : {
            centerAngle: VERTICAL_ROTATE_ANGLE,
            vertexAngle: VERTICAL_ROTATE_ANGLE
          }),
          wrapStrategy: WrapStrategy.WRAP
        }
      }
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.type === PageElementTypeEnum.Shape) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610013;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463240 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.shapeData["shapeText"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463241 = Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463240);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463241) {
      let {
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580
      } = qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463240);
      return Wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002, Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580));
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463242 = gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463240 && "isRichText" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463240 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463240.isRichText === false ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463240 : undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610003),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463242.text ?? "",
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53 = {
        ...fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463242),
        fs: Jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463242.fontSize ?? 16)
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243 = HorizontalAlign.CENTER,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244 = VerticalAlign.MIDDLE,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A60 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463242.isHorizontal !== false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463245 = plainTextToSlideDocumentData(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB115, {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002,
        textStyle: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244
      });
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463245,
      documentStyle: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463245.documentStyle,
        pageSize: {
          ...Bf
        },
        renderConfig: {
          ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610013 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463245.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610013.renderConfig),
          ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A60 ? {} : {
            centerAngle: VERTICAL_ROTATE_ANGLE,
            vertexAngle: VERTICAL_ROTATE_ANGLE
          }),
          shapeTextOpticalVerticalAlign: BooleanNumber.FALSE,
          wrapStrategy: WrapStrategy.WRAP
        }
      }
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.type === PageElementTypeEnum.Placeholder) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610015;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.placeholder["type"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463247 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.text ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610014 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.placeholder["textConfig"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610014.textData : undefined;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463247) return Uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463247);
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610005.text ?? "",
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D269 = 18,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117 = "Source Han Sans CN, PingFang SC, Microsoft YaHei, sans-serif",
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D270 = 400,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463248 = bl,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463246 === PlaceholderTypeEnum.Body,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463249 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 ? HorizontalAlign.LEFT : HorizontalAlign.CENTER,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463250 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 ? VerticalAlign.TOP : VerticalAlign.MIDDLE;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463246 === PlaceholderTypeEnum.Title || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463246 === PlaceholderTypeEnum.CenterTitle ? (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D269 = 40, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117 = "Source Han Serif SC, Songti SC, serif", var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D270 = 600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463248 = Sl) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463246 === PlaceholderTypeEnum.Header || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463246 === PlaceholderTypeEnum.Footer) && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D269 = 14, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463248 = Cl, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D270 = 400);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463251 = plainTextToSlideDocumentData(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB116, {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002,
      textStyle: {
        ff: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB117,
        fs: Jf(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D269),
        cl: {
          rgb: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610004 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610004(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463248)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463248
        },
        bl: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D270 >= 600 ? BooleanNumber.TRUE : BooleanNumber.FALSE
      },
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463249,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463250,
      ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 ? {
        bullet: {
          listId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002 + "-body-placeholder-list",
          listType: PresetListType.BULLET_LIST,
          nestingLevel: 0
        }
      } : {})
    });
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463251,
      documentStyle: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463251.documentStyle,
        pageSize: {
          ...Bf
        },
        renderConfig: {
          ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610015 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463251.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610015.renderConfig),
          shapeTextOpticalVerticalAlign: BooleanNumber.FALSE,
          wrapStrategy: WrapStrategy.WRAP
        }
      }
    };
  }
  return Vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610002, "");
}
const Xf = new Set([PlaceholderTypeEnum.Title, PlaceholderTypeEnum.CenterTitle, PlaceholderTypeEnum.Subtitle, PlaceholderTypeEnum.Body, PlaceholderTypeEnum.Text, PlaceholderTypeEnum.Footer, PlaceholderTypeEnum.Header, PlaceholderTypeEnum.Date, PlaceholderTypeEnum.SlideNumber]);
function Qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610037) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610037 === PageTypeEnum.Master ? "master" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610037 === PageTypeEnum.Layout ? "layout" : "slide";
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610039, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610040) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610042;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610043 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610040 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610039 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610041 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610039.textDataByLevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610041[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610040] : undefined) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610039 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610039.textData),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610044 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610043 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610042 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610043.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610042.dataStream;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610044) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610044.replace(/\r/g, "\x0a").replace(/[\u0000-\u0008\u000B-\u001F]/g, "").trim() || undefined;
}
function ep(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610051) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610052, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610053;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610051) return;
  if ("isRichText" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610051 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610051.isRichText === false) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610051.text ?? "";
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610054 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610052 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610051.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610052.doc,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610055 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610054 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610053 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610054.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610053.dataStream;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610055) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610055.replace(/\r/g, "\x0a").replace(/[\u0000-\u0008\u000B-\u001F]/g, "").trim();
}
function tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610061, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610062) {
  let {
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610061;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.type === PageElementTypeEnum.Text) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.text ?? "";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.type === PageElementTypeEnum.Shape) return ep(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.shapeData["shapeText"]) ?? "";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.type === PageElementTypeEnum.Placeholder) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610064;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.placeholder["type"];
    if (!Xf.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463252)) return "";
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.placeholder["textConfig"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610062.getCurrentLocale(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463255 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463254 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610064 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.textByLocale) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610064[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463254] : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463256 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.textKey ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610062.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.textKey) : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463257 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253, Qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610061.sourcePageType)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463258 = resolveDefaultPlaceholderTextKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463252),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463259 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463258 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610062.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463258) : undefined;
    return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.text, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.defaultText, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610063.placeholder["defaultText"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463259].find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581) ?? "";
  }
  return "";
}
function np(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610069) {
  let {
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610070
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610069;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610070.type === PageElementTypeEnum.Text) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610070.text ?? "";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610070.type === PageElementTypeEnum.Shape) return ep(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610070.shapeData["shapeText"]) ?? "";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610070.type === PageElementTypeEnum.Placeholder) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463260 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610070.placeholder["type"];
    return Xf.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463260) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610070.text ?? "" : "";
  }
  return "";
}
function rp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610073) {
  let {
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610074
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610073;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610074.type === PageElementTypeEnum.Shape ? !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610074.shapeData["formulaBinding"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610074.type === PageElementTypeEnum.Text || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610074.type === PageElementTypeEnum.Placeholder && Xf.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610074.placeholder["type"]);
}
let ip = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463266) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463261, this._slideDrawingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463262, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463263, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463264, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463265, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463266, X(this, "_editingParams$", new BehaviorSubject(null)), X(this, "editingParams$", this._editingParams$["asObservable"]()), X(this, "_onSavingEditorData$", new BehaviorSubject(false)), X(this, "onSavingEditorData$", this._onSavingEditorData$["asObservable"]()), X(this, "_ignoreExternalFocusChangesUntil", 0), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = this.getEditing();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.visible && !this._canEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582) && this.setEditing(null);
    }));
  }
  _isEditorEnabled() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463273;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463274 = this._configService["getConfig"](Tc);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463274 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463273 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463274.editor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463273.enabled) !== false;
  }
  dispose() {
    this._editingParams$["next"](null), this._editingParams$["complete"](), this._onSavingEditorData$["next"](false), this._onSavingEditorData$["complete"](), super.dispose();
  }
  setEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277) {
    if (!this._isEditorEnabled()) {
      this._editingParams$["next"](null), this._onSavingEditorData$["next"](false);
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277.visible && !this._canEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277) || (this._editingParams$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277 ?? this._onSavingEditorData$["next"](false));
  }
  setOnSavingEditorData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279) {
    this._onSavingEditorData$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279);
  }
  getEditing() {
    return this._editingParams$["getValue"]();
  }
  _canEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463281) {
    return canEditSlideTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463281.unitId, getSlideElementEditPermissionObjectIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463281.sourcePageType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463281.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463281.shapeId));
  }
  startEditingDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284 = Pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.drawingId)) {
    if (!rp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463285 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.unitId, UniverInstanceType.UNIVER_SLIDE),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463286 = Yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283, Rf, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463285 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463285.getThemeDataForPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.subUnitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 => this._themeService["getColorFromTheme"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584));
    this.ignoreExternalFocusChanges(), this.setEditing({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.drawingId,
      sourcePageType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283.sourcePageType,
      shapeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284,
      initialText: np(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463283),
      visible: true,
      initialDocData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463286
    });
  }
  startEditingSmartArtPresentationShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463294 = Pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.drawingId)) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.element["type"] !== PageElementTypeEnum.Shape || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.element["shapeData"])) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463295 = resolveSmartArtPresentationShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.element["shapeData"].smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463292);
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463295 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463295.shapeText)) return;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291,
        element: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.element,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463295
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463296 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.unitId, UniverInstanceType.UNIVER_SLIDE),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463297 = Yf(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54, Rf, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463296 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463296.getThemeDataForPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.subUnitId));
    this.ignoreExternalFocusChanges(), this.setEditing({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.drawingId,
      sourcePageType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291.sourcePageType,
      shapeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463294,
      initialText: np(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54),
      visible: true,
      initialDocData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463297,
      smartArtPresentationShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463292,
      smartArtNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463293
    });
  }
  startInsertedTextBoxEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463305) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463306 = () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 = this._slideDrawingService["getDrawingByParam"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463305.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463305.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463305.shapeId
      });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 && this.startEditingDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585);
    };
    typeof requestAnimationFrame == "function" ? requestAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463306) : queueMicrotask(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463306);
  }
  ignoreExternalFocusChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463309 = 300) {
    this._ignoreExternalFocusChangesUntil = Math.max(this._ignoreExternalFocusChangesUntil, Date.now() + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463309);
  }
  shouldIgnoreExternalFocusChanges() {
    return Date.now() < this._ignoreExternalFocusChangesUntil;
  }
  completeEditing() {
    this.getEditing() && (this.setOnSavingEditorData(true), requestAnimationFrame(() => {
      this.setEditing(null);
    }));
  }
  cancelEditing() {
    this.getEditing() && this.setEditing(null);
  }
  commitEditingText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463312) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463312 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311.initialText && this.commitEditingDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311, plainTextToSlideDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463312, {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311.initialDocData["id"]
    }));
  }
  commitEditingDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463316) {
    if (!this._isEditorEnabled() || fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315.initialDocData)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317 = this._getCurrentDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315.smartArtPresentationShapeId) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 = this._resolveSmartArtEditingShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.element["type"] === PageElementTypeEnum.Shape && isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.element["shapeData"]) ? resolveSmartArtPresentationShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.element["shapeData"].smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315.smartArtPresentationShapeId) : null;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 = applySlideElementTextDocument({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.drawingId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315.smartArtPresentationShapeId,
        type: PageElementTypeEnum.Shape,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.element["transform"],
        shapeData: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588,
          shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587
        },
        visible: true,
        selectable: true
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463316);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589.type) === PageElementTypeEnum.Shape && this._updateSmartArtShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589.shapeData["shapeText"], dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315.initialDocData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463316));
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.element["type"] === PageElementTypeEnum.Placeholder && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.sourcePageType !== "slide") return this._commitInheritedPlaceholderDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463316);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463318 = applySlideElementTextDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463316);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463318 ? this._commitEditingElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463318) : false;
  }
  updateShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323) {
    if (!this._isEditorEnabled() || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323.hostSize && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323.oldShapeText && sp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323.oldShapeText, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323.shapeText)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463324 = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323.shapeId
    });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463324 ? this._updateResolvedShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463323) : false;
  }
  _updateResolvedShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463329 = this.getEditing();
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463329 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463329.shapeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.shapeId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463329.smartArtPresentationShapeId) return this._updateSmartArtShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.shapeText, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.oldShapeText && dp(ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.oldShapeText), ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.shapeText)));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463330 = hp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.element) ? mp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.hostSize) : null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463331 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.element["transform"];
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463330 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463331.width !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463330.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463331.height !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463330.height)) && cp(op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.element), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.shapeText)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332 = this._applyShapeTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.shapeText),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463330 ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332,
        transform: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332.transform,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463330.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463330.height
        }
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332;
    if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB57 = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.shapeId,
      shapeKey: "",
      sourcePageType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.sourcePageType,
      initialText: "",
      visible: true,
      initialDocData: ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.oldShapeText) ?? ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.shapeText) ?? {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463328.shapeId,
        body: {
          dataStream: "\x0d\x0a"
        },
        documentStyle: {}
      }
    };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.element["type"] === PageElementTypeEnum.Placeholder && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.sourcePageType !== "slide" ? this._commitInheritedPlaceholderElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB57, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56) : this._commitEditingElement(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB57, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56);
  }
  updatePlainTextShapeHostHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339) {
    if (!this._isEditorEnabled()) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463340 = pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339.height, 0);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463340 <= 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341 = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339.shapeId
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341 || !hp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341.element) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463340 <= pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341.element["transform"].height, 0)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463342 = pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341.element["transform"].width, 0);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463342 <= 0 ? false : this._updatePlainTextShapeHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463340);
  }
  updatePlainTextShapeHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347) {
    if (!this._isEditorEnabled()) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463348 = pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347.width, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463349 = pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347.height, 0);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463348 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463349 <= 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350 = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347.shapeId
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350 || !hp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350.element)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463351 = pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350.element["transform"].width, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463352 = pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350.element["transform"].height, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463353 = gp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350.element),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D271 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463353 ? Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463348) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463348,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D272 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463353 ? Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463349) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463349;
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D271 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463351 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D272 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463352 ? false : this._updatePlainTextShapeHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D271, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D272);
  }
  _updatePlainTextShapeHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364) {
    return this.ignoreExternalFocusChanges(2000), this._commandService["executeCommand"](UpdateSlideDrawingCommand.id, {
      patches: [{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463361.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463361.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463361.shapeId,
        element: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362.element,
          transform: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362.element["transform"],
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363,
            height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364
          }
        }
      }]
    }), true;
  }
  _getCurrentDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463369) {
    return this._slideDrawingService["getDrawingByParam"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463369.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463369.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463369.shapeId
    });
  }
  _resolveSmartArtEditingShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463372) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463371.element["type"] !== PageElementTypeEnum.Shape || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463371.element["shapeData"]) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463372.smartArtPresentationShapeId ? null : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373 = resolveSmartArtPresentationShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463371.element["shapeData"].smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463372.smartArtPresentationShapeId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373.shapeText) ?? null;
  }
  _updateSmartArtShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463380 = false) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463381;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377.element["type"] !== PageElementTypeEnum.Shape || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377.element["shapeData"]) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.smartArtPresentationShapeId) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463382 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377.element["shapeData"].smartArt["presentationShapes"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.smartArtPresentationShapeId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463382) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383 = ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463379),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463379,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383 ? slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463379.text
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384 = this._commandService["syncExecuteCommand"](UpdateSlideSmartArtCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.shapeId,
        operations: [{
          type: SmartArtOperationTypeEnum.UpdatePresentationText,
          presentationShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.smartArtPresentationShapeId,
          shapeText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60,
          fontSizeChanged: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463380,
          fontSizeNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.smartArtNodeId
        }]
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.smartArtNodeId ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463381 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463382.textBindings) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463381 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463381[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463381.dataNodeId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463382.dataNodeIds[0],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384 ? this._getCurrentDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378) : null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386.element["type"]) === PageElementTypeEnum.Shape && isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386.element["shapeData"]) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386.element["shapeData"].smartArt : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 ? resolveSmartArtPresentationShapeIdForNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385, SmartArtPresentationShapeRoleEnum.Text) : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.smartArtPresentationShapeId && this._editingParams$["next"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378,
      smartArtPresentationShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384;
  }
  _commitEditingElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463402) {
    return this._commandService["executeCommand"](UpdateSlideDrawingCommand.id, {
      patches: [{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401.shapeId,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463402
      }]
    }), true;
  }
  _commitInheritedPlaceholderDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463407) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463408 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406.unitId, UniverInstanceType.UNIVER_SLIDE),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463409 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463408 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463408.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406.subUnitId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463409 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405.element["type"] !== PageElementTypeEnum.Placeholder) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411 = this._findSlidePlaceholderOverride(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463409.getData().elements, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 = applySlideElementTextDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463407);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 ? (this._commandService["executeCommand"](UpdateSlideDrawingCommand.id, {
        patches: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411.id,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590
        }]
      }), true) : false;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463412 = applySlideElementTextDocument({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410,
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410.id,
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410.transform
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463407);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463412 ? (this._commandService["executeCommand"](AddSlideElementCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406.subUnitId,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463412,
      focus: true
    }), true) : false;
  }
  _commitInheritedPlaceholderElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422.unitId, UniverInstanceType.UNIVER_SLIDE),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463425 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422.subUnitId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463425 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421.element["type"] !== PageElementTypeEnum.Placeholder || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423.type !== PageElementTypeEnum.Placeholder) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463426 = this._findSlidePlaceholderOverride(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463425.getData().elements, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421.element);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463426) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 = this._applyShapeTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463426, op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423));
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 ? (this._commandService["executeCommand"](UpdateSlideDrawingCommand.id, {
        patches: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463426.id,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591
        }]
      }), true) : false;
    }
    return this._commandService["executeCommand"](AddSlideElementCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422.subUnitId,
      element: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423,
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421.element["id"],
        transform: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421.element["transform"]
        }
      },
      focus: true
    }), true;
  }
  _applyShapeTextData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463434) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435 = ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463434),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB118 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435 ? slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463434.text ?? "";
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433.type === PageElementTypeEnum.Text) return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433,
      text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB118,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435 ? {
        textData: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435)
      } : {})
    };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433.type === PageElementTypeEnum.Shape) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463436;
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433,
        shapeData: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433.shapeData,
          shapeText: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433.shapeData["shapeText"],
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463434,
            text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB118,
            dataModel: {
              ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463436 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433.shapeData["shapeText"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463436.dataModel) ?? {}),
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463434.dataModel,
              ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435 ? {
                doc: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435)
              } : {})
            }
          }
        }
      };
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433.type === PageElementTypeEnum.Placeholder ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433,
      text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB118,
      placeholder: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433.placeholder,
        textConfig: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433.placeholder["textConfig"],
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435 ? {
            textData: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435)
          } : {})
        }
      }
    } : null;
  }
  _findSlidePlaceholderOverride(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463441)) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.type !== PageElementTypeEnum.Placeholder || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.placeholder["type"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442.placeholder["type"]) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.placeholder["index"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442.placeholder["index"];
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 ?? null) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 ?? null)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592;
    }
    return null;
  }
};
ip = Q([Z(0, ICommandService), Z(1, ISlideDrawingService), Z(2, IUniverInstanceService), Z(3, IConfigService), Z(4, IPermissionService), Z(5, Inject(ThemeService))], ip);
function ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610077) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610078;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610078 = normalizeShapeTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610077.dataModel)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610078.doc) ?? null;
}
function op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.type === PageElementTypeEnum.Shape) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.shapeData["shapeText"] ?? {
    isHorizontal: true
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.type === PageElementTypeEnum.Text) return {
    isHorizontal: true,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.text ?? "",
    dataModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.textData ? {
      doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.textData
    } : undefined
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.type === PageElementTypeEnum.Placeholder) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610082;
    return {
      isHorizontal: true,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.text ?? "",
      dataModel: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610082 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.placeholder["textConfig"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610082.textData ? {
        doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610081.placeholder["textConfig"].textData
      } : undefined
    };
  }
  return {
    isHorizontal: true
  };
}
function sp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610086) {
  if (cp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610086)) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610087 = ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610085),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610088 = ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610086);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610087 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610088 ? false : up(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610085) === up(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610086);
}
function cp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610093, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610094) {
  return JSON.stringify(lp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610093)) === JSON.stringify(lp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610094));
}
function lp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610097) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610098 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610097),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099 = normalizeShapeTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610098.dataModel);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.doc) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610100;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.doc["documentStyle"] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.doc["documentStyle"],
      renderConfig: {
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.doc["documentStyle"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610100.renderConfig),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.ha === undefined ? {} : {
          horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.ha
        }),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.va === undefined ? {} : {
          verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.va
        })
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.doc = vp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099.doc), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610098.dataModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610099;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610098;
}
function up(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610105) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610106 = ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610105);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610106 ? slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610106) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610105.text ?? "";
}
function dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610110) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610109 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610110 ? false : JSON.stringify(fp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610109)) !== JSON.stringify(fp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610110));
}
function fp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610113) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610116;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929936 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610117 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463445 => {
      typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463445 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463445) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463445 > 0 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929936.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463445);
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610117((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610113.documentStyle) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610114.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610114.fs), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610113.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610115.textRuns) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610115.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463447 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463448;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610117((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463448 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463447.ts) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463448.fs);
  }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610113.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610116.paragraphs) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610116.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463451 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463452;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463451.paragraphStyle;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610117(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463453 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463452 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463453.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463452.fs);
  }), [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929936].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463458) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463458);
}
function pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610124) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610123 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610123) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610123 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610123 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610124;
}
function mp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610127) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610127) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610128 = pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610127.width, 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610129 = pp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610127.height, 0);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610128 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610129 > 0 ? {
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610128,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610129
  } : null;
}
function hp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610133) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610133.type === PageElementTypeEnum.Text) return true;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610133.type !== PageElementTypeEnum.Shape || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610133.shapeData["shapeType"] !== ShapeTypeEnum.Rect || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610133.shapeData["isTextBox"] !== true || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610133.shapeData["shapeText"]) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610134 = resolveShapeTextBodyBehavior(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610133.shapeData);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610134.textWrap !== "none" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610134.autoFitType === ShapeTextAutoFitType.SpAutoFit;
}
function gp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610137) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610137.type === PageElementTypeEnum.Shape && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610137.shapeData["shapeType"] === ShapeTypeEnum.Rect && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610137.shapeData["isTextBox"] === true;
}
function fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610140) {
  return JSON.stringify(vp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610139)) === JSON.stringify(vp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610140));
}
function vp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610143) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610144;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610145 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610143);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610145.id = "";
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610145.documentStyle;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.marginTop = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.marginBottom = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.marginLeft = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.marginRight = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.renderConfig && (delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.renderConfig["centerAngle"], delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.renderConfig["vertexAngle"], delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.renderConfig["wrapStrategy"], Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.renderConfig).length === 0 && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610146.renderConfig)), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610144 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610145.documentStyle) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610144.pageSize && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610145.documentStyle["pageSize"] = {
    width: 1 / 0,
    height: 1 / 0
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610145;
}
let yp = class extends Cf {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463462) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463459, this._imageIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463460, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461, this._slideTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463462, X(this, "zIndex", 45);
  }
  check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463467) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463467.element["type"] === PageElementTypeEnum.Placeholder;
  }
  convert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463470) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463471;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469.hidden || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469.element["type"] !== PageElementTypeEnum.Placeholder) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463473 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463470.sceneType ?? SlideSceneTypeEnum.EDIT,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469.sourcePageType !== "slide" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472.placeholder["type"] === PlaceholderTypeEnum.Header || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472.placeholder["type"] === PlaceholderTypeEnum.Footer || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472.placeholder["type"] === PlaceholderTypeEnum.Date || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472.placeholder["type"] === PlaceholderTypeEnum.SlideNumber),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A63 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463470.showPlaceholder && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463473 === SlideSceneTypeEnum.MASTER || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463473 === SlideSceneTypeEnum.EDIT && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A64 = !!getPlaceholderImageContent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463474 = Zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A65 = Xf.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472.placeholder["type"]) && (!!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463471 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463472.text) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463471.trim()) || !!this._resolveTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469) || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 && !!this._resolveText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463473 === SlideSceneTypeEnum.PRESENTATION && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A64 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463474 || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A63 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A64 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A65) return null;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB120 = "slide-drawing-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463470.unitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463470.subUnitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469.drawingId;
    return this._createImageObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463470, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB120) || this._createPlaceholderObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463470, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB120);
  }
  _createImageObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463483) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463481.element["type"] !== PageElementTypeEnum.Placeholder) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463484 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463481.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463485 = getPlaceholderImageContent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463484);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463485) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463484.transform,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463485.imageSourceType ?? ImageSourceType.URL,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463488 = this._imageIoService,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463489 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463488.getImageSourceCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463485.source, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463487),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463490 = new tu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463483, {
        image: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463489 ?? undefined,
        url: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463489 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463487 === ImageSourceType.UUID ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463485.source,
        success: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463482.requestRender,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463482.pageOffsetLeft + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.left ?? 0),
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463482.pageOffsetTop + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.top ?? 0),
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.width ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.height ?? 0,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.rotation ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.flipX,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.flipY,
        skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.skewX,
        skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463486.skewY,
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463482.orderIndex,
        visible: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463481.hidden,
        evented: true,
        forceRender: true
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463489 == null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463487 === ImageSourceType.UUID && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463490.loadSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463485.source, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463482.requestRender).catch(() => undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463490;
  }
  _createPlaceholderObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463503) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463507;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.transform,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463510 = this._resolveText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463511 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.placeholder["textConfig"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504.textKey,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463512 = this._resolveIcons(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463513 = this._resolveTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.placeholder["type"]),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463513,
        textColor: this._resolveEditorColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463513.textColor ?? "gray.700")
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463514 = this._resolveTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463510, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.style,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A70 = !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515.fill) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515.fill["fillType"] !== ShapeFillEnum.NoFill,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A71 = !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515.stroke) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515.stroke["lineStrokeType"] !== ShapeLineTypeEnum.NoLine,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463516 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A70 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A71,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63 = {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502.pageOffsetLeft + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.left ?? 0),
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502.pageOffsetTop + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.top ?? 0),
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.width ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.height ?? 0,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.rotation ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.flipX,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.flipY,
        skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.skewX,
        skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.skewY,
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502.orderIndex,
        visible: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501.hidden,
        evented: true,
        forceRender: true,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463510 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463511 ? {
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463510 ?? "",
          textKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463511,
          fontSize: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.fontSize,
          fontFamily: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.fontFamily,
          fontWeight: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.fontWeight,
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463514
        } : undefined,
        icons: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463512,
        fillColor: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A70 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505.color : undefined,
        strokeColor: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A71 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463506 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463506.color : this._resolveEditorColor(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB307),
        strokeWidth: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A71 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463507 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463507.width : undefined,
        textColor: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.textColor,
        iconBoxBackgroundColor: this._resolveEditorColor(gl),
        iconBoxStrokeColor: this._resolveEditorColor(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB307),
        iconColor: this._resolveEditorColor(vl),
        localeService: this._localeService,
        hasUserContent: !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.text && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.text["length"] > 0),
        hasExplicitStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463516,
        hasExplicitFill: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A70,
        hasExplicitStroke: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A71
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517 = Xf.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.placeholder["type"]) ? new Xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463503, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63) : new Yl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463503, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517.setEditing(this._isEditingDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517;
  }
  _resolveEditorColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463535) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463536 = this._themeService["getColorFromTheme"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463535);
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463536 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463536 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463535;
  }
  _resolveText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539) {
    return tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539, this._localeService) || undefined;
  }
  _resolveTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541.element["type"] !== PageElementTypeEnum.Placeholder) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541.element;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544.text) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544.placeholder["textConfig"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545.textData;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463546 = this._resolvePlaceholderLevelTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541.sourcePageType);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463546) return bp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543);
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544.placeholder["type"] !== PlaceholderTypeEnum.Body || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542)) return plainTextToSlideDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542, {
      id: "slide-placeholder-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544.id + "-default",
      textStyle: xp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543, bl),
      horizontalAlign: HorizontalAlign.LEFT,
      verticalAlign: VerticalAlign.TOP,
      bullet: {
        listId: "slide-placeholder-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544.id + "-default-list",
        listType: PresetListType.BULLET_LIST,
        nestingLevel: 0
      }
    });
  }
  _resolvePlaceholderLevelTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463555;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463556 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463553.placeholder["textConfig"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463557 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554 === PageTypeEnum.Master || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554 === PageTypeEnum.Layout || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554 === PageTypeEnum.Slide ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554 : undefined;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463557 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463556 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463555 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463556.textDataByLevel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463555[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463557] : undefined) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463556 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463556.textData);
  }
  _isEditingDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463564) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463565;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463566 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463565 = this._slideTextEditingService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463565.getEditing();
    return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463566 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463566.visible) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463566.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463564.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463566.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463564.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463566.shapeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463563.drawingId;
  }
  _resolveIcons(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463571) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463571.element["type"] === PageElementTypeEnum.Placeholder ? resolvePlaceholderActionIcons(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463571.element["placeholder"]) : [];
  }
  _resolveTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463573) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463573 === PlaceholderTypeEnum.Title || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463573 === PlaceholderTypeEnum.CenterTitle ? {
      fontSize: 40,
      fontFamily: "Source Han Serif SC, Songti SC, serif",
      fontWeight: 600,
      textColor: Sl
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463573 === PlaceholderTypeEnum.Header || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463573 === PlaceholderTypeEnum.Footer || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463573 === PlaceholderTypeEnum.Date || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463573 === PlaceholderTypeEnum.SlideNumber ? {
      fontSize: 14,
      fontFamily: "Source\x20Han\x20Sans\x20CN,\x20PingFang\x20SC,\x20Microsoft\x20YaHei,\x20sans-serif",
      fontWeight: 400,
      textColor: Cl
    } : {};
  }
};
yp = Q([Z(0, Inject(LocaleService)), Z(1, IImageIoService), Z(2, Inject(ThemeService)), Z(3, Optional(ip))], yp);
function bp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610153) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610155;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB230 = slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610151).trim(),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB231 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610152 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610152.trim();
  if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB230 || !var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB231) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610151;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610156 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610151.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610154.renderConfig,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610157 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610151.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610155.paragraphs) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610155.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463575 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463575.bullet)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610155.bullet;
  return plainTextToSlideDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610152 ?? "", {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610151.id,
    textStyle: xp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610153, bl),
    horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610156 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610156.horizontalAlign,
    verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610156 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610156.verticalAlign,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610157 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610157.listType ? {
      bullet: {
        listId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610157.listId,
        listType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610157.listType,
        nestingLevel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610157.nestingLevel
      }
    } : {})
  });
}
function xp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610166) {
  return {
    ff: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165.fontFamily) ?? "Source\x20Han\x20Sans\x20CN,\x20PingFang\x20SC,\x20Microsoft\x20YaHei,\x20sans-serif",
    fs: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165.fontSize) ?? 18,
    cl: {
      rgb: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165.textColor) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610166
    },
    bl: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610165.fontWeight) ?? 400) >= 600 ? BooleanNumber.TRUE : BooleanNumber.FALSE
  };
}
wf.add(yp);
var Sp;
function Cp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610169) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610170;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610169 != null && (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610170 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610169.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610170.v) != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610169.text["length"] > 0);
}
function wp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610174) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610176;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610177 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610175 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610173.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610175.v,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610178 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610174.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610176.v;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610177 != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610178 != null) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610180;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610177 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610178 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610179 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610173.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610179.t) === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610180 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610174.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610180.t);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610173.text === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610174.text;
}
let Tp = Sp = class extends Cf {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463580) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463576, this._imageIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463577, this._shapeFormulaService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463578, this._slideTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463579, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463580, X(this, "zIndex", 10), X(this, "_formulaPresentations", new Map());
  }
  check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463586) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463586.element["type"] === PageElementTypeEnum.Shape;
  }
  convert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588.hidden || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588.element["type"] !== PageElementTypeEnum.Shape) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463590 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463590.transform,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D275 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.width ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.height ?? 0,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB122 = "slide-drawing-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.unitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.subUnitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588.drawingId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463592 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463590.shapeData["formulaBinding"],
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588.drawingId
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463592 ? this._shapeFormulaService["register"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463592) : (this._shapeFormulaService["unregister"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66), this._formulaPresentations["delete"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB122));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463593 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463592 ? this._shapeFormulaService["getPresentation"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66) : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594 = new Pd(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB122, {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.pageOffsetLeft + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.left ?? 0),
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.pageOffsetTop + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.top ?? 0),
        width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D275,
        height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D276,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.rotation ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.flipX,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.flipY,
        skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.skewX,
        skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463591.skewY,
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.orderIndex,
        visible: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588.hidden,
        evented: true,
        shapeModel: Pd.createShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463590),
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463590,
        localeService: this._localeService,
        formulaPresentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463593,
        animateFormulaPresentation: this._shouldAnimateFormulaPresentation(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463593, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463592 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463592.animationEnabled) !== false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.animateFormulaPresentationOnCreate),
        smartArtImagePlaceholderColors: this._resolveSmartArtImagePlaceholderColors()
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463592 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594.disposeWithMe(this._shapeFormulaService["presentationChanged$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.unitId === var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.subUnitId === var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.shapeId === var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66.shapeId) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594.setFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.presentation, this._shouldAnimateFormulaPresentation(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.presentation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.animationEnabled)), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.requestRender) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589);
      }
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594.setEditing(this._isEditingDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589)), this._loadShapePictureFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.requestRender), this._loadSmartArtPictureFills(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463589.requestRender), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594;
  }
  _resolveSmartArtImagePlaceholderColors() {
    return {
      background: this._themeService["getColorFromTheme"]("gray.0"),
      border: this._themeService["getColorFromTheme"]("gray.500"),
      accent: this._themeService["getColorFromTheme"]("blue.600")
    };
  }
  _shouldAnimateFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463604, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463605) {
    if (!Cp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463603)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463606 = this._formulaPresentations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463602);
    return this._formulaPresentations["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463603), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463605 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463604 && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463606 || !wp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463603)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463604 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463605;
  }
  _loadShapePictureFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463613.type !== PageElementTypeEnum.Shape) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463613.shapeData["fill"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615.fillType !== ShapeFillEnum.PictureFill || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615.fillImageSource) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615.fillImageSource,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615.fillImageSourceType ?? ImageSourceTypeEnum.URL,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463617 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463616,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463618 = this._imageIoService["getImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463617) ?? Sp._globalImageNativeCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB124);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463618) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.setFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463618);
      return;
    }
    this._getOrCreateImageLoadingPromise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463617).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.setFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614());
    });
  }
  _loadSmartArtPictureFills(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463628) {
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463627.type !== PageElementTypeEnum.Shape || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463627.shapeData))) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463627.shapeData["smartArt"].presentationShapeOrder) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463627.shapeData["smartArt"].presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629.shapeData["fill"];
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.fillType) !== ShapeFillEnum.PictureFill || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.fillImageSource) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463626.setSmartArtFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599);
        continue;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.fillImageSource,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.fillImageSourceType ?? ImageSourceTypeEnum.URL,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 = this._imageIoService["getImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136) ?? Sp._globalImageNativeCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463626.setSmartArtFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137);
        continue;
      }
      this._getOrCreateImageLoadingPromise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463626.setSmartArtFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463628 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463628());
      });
    }
  }
  _getOrCreateImageLoadingPromise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463635) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463635 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463634,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463636 = Sp._globalImageNativeCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB126);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463636) return Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463636);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637 = Sp._globalImageLoadingCache["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB126);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638 = (async () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463635 === ImageSourceType.UUID ? await this._imageIoService["getImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463634) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463634;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 = await new Promise(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = document.createElement("img");
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.onload = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.onerror = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.src = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600;
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 ? (Sp._globalImageNativeCache["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601), this._imageIoService["addImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601) : null;
    })().finally(() => {
      Sp._globalImageLoadingCache["delete"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB126);
    });
    return Sp._globalImageLoadingCache["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638;
  }
  _isEditingDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463645) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463646 = this._slideTextEditingService["getEditing"]();
    return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463646 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463646.visible) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463646.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463645.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463646.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463645.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463646.shapeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463644.drawingId;
  }
};
X(Tp, "_globalImageNativeCache", new Map()), X(Tp, "_globalImageLoadingCache", new Map()), Tp = Sp = Q([Z(0, Inject(LocaleService)), Z(1, IImageIoService), Z(2, Inject(ShapeFormulaService)), Z(3, Inject(ip)), Z(4, Inject(ThemeService))], Tp), wf.add(Tp);
let Ep = class extends Cf {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463653) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463650, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651, this._imageIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463652, this._tableResourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463653, X(this, "zIndex", 10);
  }
  check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658.element["type"] === PageElementTypeEnum.Table;
  }
  convert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463662;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660.hidden || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660.element["type"] !== PageElementTypeEnum.Table) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463663 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463663.transform,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB128 = "slide-drawing-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661.unitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661.subUnitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660.drawingId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463665 = this._resolveTableSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463663),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463662 = this._tableResourceService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463662.getResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661.unitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.themes,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668 = resolveSlideTableThemePalette(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 => this._themeService["getColorFromTheme"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604)),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68 = {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661.pageOffsetLeft + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.left ?? 0),
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661.pageOffsetTop + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.top ?? 0),
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.width ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.height ?? 0,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.rotation ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.flipX,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.flipY,
        skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.skewX,
        skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664.skewY,
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661.orderIndex,
        visible: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660.hidden,
        evented: true,
        imageIoService: this._imageIoService,
        localeService: this._localeService,
        tableThemes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667,
        tableThemePalette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668,
        themeService: this._themeService
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463665 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68.table = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463665), new Ud(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB128, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68);
  }
  _resolveTableSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463680;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681 = Dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463682 = Op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681.tableId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463682 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463680 = this._tableResourceService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463680.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463682) : undefined;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 = normalizeSlideTableSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683, {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463682,
        rowCount: 3,
        columnCount: 3
      });
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684 = Dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681.custom),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463682 ?? Op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681.id),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684.slideTable, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684.pptxTable, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463681];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142 = normalizeSlideTableSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606, {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463685
      });
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142;
    }
  }
};
Ep = Q([Z(0, Inject(LocaleService)), Z(1, Inject(ThemeService)), Z(2, IImageIoService), Z(3, Optional(SlideTableResourceService))], Ep);
function Dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610189) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610189 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610189 == "object" && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610189) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610189 : undefined;
}
function Op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610191) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610191 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610191.trim() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610191 : undefined;
}
wf.add(Ep);
let kp = class extends Cf {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463695) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463694, this._slideTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463695, X(this, "zIndex", 40);
  }
  check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463698) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463698.element["type"] === PageElementTypeEnum.Text;
  }
  convert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700.hidden || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700.element["type"] !== PageElementTypeEnum.Text) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.transform,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A74 = getEmbedSlidesFloatingCustomData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702) != null,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.text ?? "",
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.textData ? {
        isHorizontal: true,
        text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB130,
        dataModel: {
          doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.textData
        }
      } : {
        isHorizontal: true,
        text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB130,
        dataModel: {
          doc: plainTextToSlideDocumentData(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB130, {
            id: "slide-text-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.id,
            textStyle: Ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.textStyle)
          })
        }
      },
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB131 = "slide-drawing-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701.unitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701.subUnitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700.drawingId,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71 = {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.id,
        type: PageElementTypeEnum.Shape,
        name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.name,
        description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.description,
        visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.visible,
        selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.selectable,
        custom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.custom,
        transform: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702.transform
        },
        shapeData: {
          shapeType: ShapeTypeEnum.Rect,
          fill: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A74 ? {
            fillType: ShapeFillEnum.NoFill
          } : {
            ...SLIDE_TEXT_BOX_DEFAULT_STYLE.fill
          },
          stroke: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A74 ? {
            lineStrokeType: ShapeLineTypeEnum.NoLine,
            width: 0
          } : {
            ...SLIDE_TEXT_BOX_DEFAULT_STYLE.stroke
          },
          shapeText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463704 = new Pd(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB131, {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701.pageOffsetLeft + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.left ?? 0),
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701.pageOffsetTop + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.top ?? 0),
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.width ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.height ?? 0,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.rotation ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.flipX,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.flipY,
        skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.skewX,
        skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703.skewY,
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701.orderIndex,
        visible: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700.hidden,
        evented: true,
        shapeModel: Pd.createShapeModel(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71),
        element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71,
        localeService: this._localeService
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463704.setEditing(this._isEditingDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463704;
  }
  _isEditingDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463712;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463712 = this._slideTextEditingService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463712.getEditing();
    return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713.visible) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713.shapeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710.drawingId;
  }
};
kp = Q([Z(0, Inject(LocaleService)), Z(1, Optional(ip))], kp);
function Ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193) return {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.fontFamily ? {
      ff: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.fontFamily
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.fontSize === undefined ? {} : {
      fs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.fontSize
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.color ? {
      cl: {
        rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.color
      }
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.bold === undefined ? {} : {
      bl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.bold ? BooleanNumber.TRUE : BooleanNumber.FALSE
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.italic === undefined ? {} : {
      it: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.italic ? BooleanNumber.TRUE : BooleanNumber.FALSE
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.underline === undefined ? {} : {
      ul: {
        s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610193.underline ? BooleanNumber.TRUE : BooleanNumber.FALSE
      }
    })
  };
}
wf.add(kp);
jp = Q([Z(0, Inject(Injector)), Z(1, Inject(Tf))], jp);
function um(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610412) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610412.ctrlKey || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610412.metaKey ? getNextWheelZoomRatio(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610412) : null;
}
gm = Q([Z(1, Inject(Injector)), Z(2, IUniverInstanceService), Z(3, IRenderManagerService), Z(4, ICommandService), Z(5, IConfigService), Z(6, ISlideDrawingService), Z(7, Inject(ThemeService))], gm);
Am = Q([Z(0, IContextService), Z(1, Inject(ISlideDrawingService))], Am);
function Pm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610489) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610489 ? (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610489.elementOrder) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610489.elementOrder["length"] > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610489.elementOrder : Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610489.elements)).flatMap((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463995) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610489.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463994];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 && getEmbedSlidesFloatingCustomData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996) ? [{
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996,
      zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463995
    }] : [];
  }) : [];
}
function Lm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610491) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610491 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610491.element["type"]) === PageElementTypeEnum.Table;
}
function zm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610495) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610495.some(Lm);
}
const dh = 1100,
  fh = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 100
  },
  ph = "Aptos,\x20\x22Segoe\x20UI\x22,\x20Arial,\x20sans-serif",
  mh = 0.5;
function zh() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610988;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610989 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610989.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SLIDE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610989.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE), undefined, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610989]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610991 = useObservable(() => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990.pageManager["activeSlideId$"]) ?? of1(undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610987 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990.pageManager["getActiveSlide"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610987.getId(), undefined, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610991 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610988 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610991)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610988.getData() : undefined;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610992 && getEmbedSlidesPageCustomData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610992) ? {
    slideModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610990,
    page: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610992
  } : undefined;
}
function Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610999) {
  try {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610999.get(Bh);
  } catch {
    return;
  }
}
function Jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611005) {
  let {
    slideUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611006,
    focusedUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007,
    embedFocusOwner: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611008,
    activeEmbedChildUnitIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611009,
    activeSlideEditorUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611010,
    hasHostPreservingChildFocusLease: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611011
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611005;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611006 ? !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611006 ? true : isInternalEditorID(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007 === Rf || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611010 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611011 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611008 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611008.hostUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611006 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611009 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611009.length) ?? 0) > 0 : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611008 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611008.hostUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611006 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611008.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007 || !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611009 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611009.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611007)) === true : false;
}
function Yh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611019) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611019 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611019 : null;
}
function Xh() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611021;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611022 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611023 = useDependency(Injector),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611024 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611022.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SLIDE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611022.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE), undefined, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611022]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611025 = Yh(useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611022.focused$, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611021 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611022.getFocusedUnit()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611021.getUnitId()) ?? null, undefined, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611022])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611026 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F10(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611023),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611027 = useObservable(Qh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611026), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611026 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611026.getFocusOwner()) ?? null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611028 = useDependency(Uh),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611029 = useObservable(useMemo(() => tg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611028), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611028]), ng(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611028)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611030 = eg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611023),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611031 = useObservable(useMemo(() => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611030 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611030.runtimeFocusChanged$["pipe"](map(() => ig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611023)))) ?? null, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611023, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611030]), ig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611023)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611032 = Zh({
      currentSlideUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611024 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611024.getUnitId(),
      focusedUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611025,
      embedFocusOwner: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611027,
      runtimeSessions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611031
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611032 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611032 !== (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611024 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611024.getUnitId()) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611022.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611032, UniverInstanceType.UNIVER_SLIDE) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611024 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611024) ?? undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611034 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033.pageManager["activeSlideId$"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611035 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033 ? rg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611034) : undefined;
  return {
    slideModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033,
    shouldRenderHostContent: Jh({
      slideUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033.getUnitId(),
      focusedUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611025,
      embedFocusOwner: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611027,
      activeEmbedChildUnitIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611035,
      activeSlideEditorUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611029,
      hasHostPreservingChildFocusLease: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611030 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611030.hasHostPreservingChildFocusLeaseForHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611033.getUnitId())) ?? false
    })
  };
}
function Zh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611051) {
  let {
    currentSlideUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611052,
    focusedUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611053,
    embedFocusOwner: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611054,
    runtimeSessions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611055 = []
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611051;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611054 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611054.hostUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611054.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611053) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611054.hostUnitId;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611056 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611053 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611055.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464231 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464231.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611053) : undefined;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611056 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611056.hostUnitId) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611056.hostUnitId;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611057 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611052 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611055.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464232 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464232.childType === UniverInstanceType.UNIVER_SLIDE && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464232.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611052) : undefined;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611057) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611055.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611057.hostUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.entry === "slides-page-list-block");
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233.hostUnitId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611057.hostUnitId;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611052 ?? undefined;
}
function Qh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611065) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611065 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611065.focusOwner$) ?? null;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F10(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611067) {
  try {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611067.get(Kh);
  } catch {
    return;
  }
}
function eg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611069) {
  try {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611069.get(qh);
  } catch {
    return;
  }
}
function tg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611071) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611071.session$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464234 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464234 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464234.editorUnitId) ?? null), distinctUntilChanged());
}
function ng(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611073) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611074;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611074 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611073.getSession()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611074.editorUnitId) ?? null;
}
function rg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611079) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611082;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A166 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611077 ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611078.getUnitId()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464236 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464236.childUnitId).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464237 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464237 == "string"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611079 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611080 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611078.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611079)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611080.getData() : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611081 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611078.pageManager["getActiveSlide"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611081.getData(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611083 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611082 = getEmbedSlidesPageCustomData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611083)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611082.childUnitId : undefined;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084 ? [...(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A166 ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611084] : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A166;
}
function ig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611093) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611094;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611094 = Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611093)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611094.listSessions();
}
sg = Q([Z(0, IUniverInstanceService)], sg);
const yg = createIdentifier("slides-ui.presentation-session.service"),
  bg = {
    active: false,
    role: null,
    sessionId: null,
    unitId: null,
    clientId: null,
    suppressLocalOverlayUnitId: null,
    audienceFullscreenPromptVisible: false,
    audienceEnded: false
  },
  xg = "univer-slide-presentation.message";
Og = Q([Z(0, ag), Z(1, IUniverInstanceService)], Og);
const kg = createIdentifier("slides-ui.presentation-window.service");
const Pg = {
  id: "slide.operation.presentation.start",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611150) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611149.get(ag).start(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611150)
};
async function Fg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611151) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611151.get(ILayoutService).rootContainerElement,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611152 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611152.ownerDocument;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611153 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611153.fullscreenElement) try {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611153.exitFullscreen) throw Error("Fullscreen\x20exit\x20is\x20unavailable");
    await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611153.exitFullscreen();
  } catch {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464444 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611151.get(IMessageService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464445 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611151.get(LocaleService);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464444.show({
      type: MessageType.Error,
      content: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464445.t("slides-ui.presentation.fullscreenFailed")
    });
  }
}
const Ig = {
    id: "slide.operation.presentation.stop",
    type: CommandType.OPERATION,
    handler: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611157 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611158 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611157.get(yg);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611158.isOwnerSessionActive()) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611158.endSession("owner-stop"), true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611157.get(ag);
      return await Fg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611157), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611159.stop(), true;
    }
  },
  Lg = {
    id: "slide.operation.presentation.toggle-fullscreen",
    type: CommandType.OPERATION,
    handler: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611163 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611164 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611163.get(ILayoutService).rootContainerElement,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611165 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611163.get(IMessageService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611166 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611163.get(LocaleService);
      try {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611164) throw Error("Missing Univer root container");
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464448 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611164.ownerDocument;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464448.fullscreenElement) {
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464448.exitFullscreen) throw Error("Fullscreen\x20exit\x20is\x20unavailable");
          await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464448.exitFullscreen();
        } else {
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611164.requestFullscreen) throw Error("Fullscreen\x20is\x20unavailable");
          await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611164.requestFullscreen({
            navigationUI: "hide"
          });
        }
        return true;
      } catch {
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611165.show({
          type: MessageType.Error,
          content: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611166.t("slides-ui.presentation.fullscreenFailed")
        }), false;
      }
    }
  },
  Rg = {
    id: "slide.operation.presentation.go-to-slide",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611172) => !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611172 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611172.slideId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611171.get(ag).goToSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611172.slideId)
  };
function zg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611173) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611174 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611173.getSnapshot();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611174.slideOrder["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464449 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464450;
    return !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611174.slides[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464449]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464450.skipped);
  });
}
const Bg = {
    id: "slide.operation.presentation.start-dual-screen",
    type: CommandType.OPERATION,
    handler: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611178) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611179;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611180 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611177.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611181 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611177.get(kg),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611182 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611180.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611183 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611182 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611182.getUnitId();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611183 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611182) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611178 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611178.fromBeginning ? zg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611182) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611179 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611182.pageManager["getActiveSlide"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611179.getId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611185 = generateRandomId(12),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611186 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611181.openAudienceWindow({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611183,
          sessionId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611185,
          playMode: 1,
          startSlideId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611184
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611186) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611177.get(IMessageService),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464454 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611177.get(LocaleService);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464453.show({
          type: MessageType.Warning,
          content: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464454.t("slides-ui.presentation.dualScreenUnavailable"),
          duration: 5000
        }), false;
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611177.get(yg).startOwnerSession({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611183,
        sessionId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611185,
        startSlideId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611184,
        audienceWindow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611186
      });
    }
  },
  Vg = {
    id: "slide.operation.presentation.next",
    type: CommandType.OPERATION,
    handler: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611197 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611198 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611197.get(ag),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611199 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611198.getSnapshot().active,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611200 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611198.next();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611199 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611198.getSnapshot().active && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611197.get(yg).isOwnerSessionActive() && (await Fg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611197)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611200;
    }
  },
  Hg = {
    id: "slide.operation.presentation.previous",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611205 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611205.get(ag).previous()
  },
  Ug = {
    id: "slide.operation.presentation.preview-transition",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611207) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611206.get(ag).previewTransition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611207)
  };
function Gg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611216) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464457 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611216) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464457 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464457 == "object" && "evented" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464457 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464457.evented = false);
}
const var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB310 = "slide.speaker-notes.dialog";
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F30(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611698) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611698 === "" ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611698;
}
function fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B803(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611701) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611700 ?? "") !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611701;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F31(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611705) {
  return fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B803(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611705) ? {
    speakerNotes: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F30(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611705)
  } : null;
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF114(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611718, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611722) {
  return {
    id: "slide.speaker-notes.dialog",
    title: {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611718
    },
    width: 520,
    draggable: false,
    mask: true,
    maskClosable: true,
    children: {
      label: {
        name: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB310,
        props: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611719,
          slideId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611720,
          initialNotes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611721,
          onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611722
        }
      }
    },
    onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611722
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F33() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611728 = useDependency(IShortcutService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611729 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611730 = useCallback(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611729.current ??= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611728.forceEscape();
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611728]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611731 = useCallback(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464669;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611729.current) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464669.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611729.current = null;
    }, []);
  return useEffect(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611731, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611731]), {
    handleBlur: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611731,
    handleFocus: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611730
  };
}
const Av = "SLIDE_ZOOM_INPUT_COMPONENT",
  jv = [50, 80, 100, 130, 150, 170, 200, 400],
  Mv = [10, 400];
const ty = 16 / 9;
function ny(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612410 = ty) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D821 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612409.width),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D822 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612409.height),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612411 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612410) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612410 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612410 : ty;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D821 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D822 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612411 ? {
    width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D822 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612411,
    height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D822
  } : {
    width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D821,
    height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D821 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612411
  };
}
function oy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612439) {
  let {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612440,
      readonly: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612441 = false
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612439,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612442 = useRef(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612444] = useState(null);
  return useLayoutEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464978 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612442.current;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464978) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464979 = () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464978.getBoundingClientRect();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612444(ny({
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464978.clientWidth,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.height || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464978.clientHeight
      }));
    };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464979(), typeof ResizeObserver > "u") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464980 = new ResizeObserver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464979);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464980.observe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464978), () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464980.disconnect();
  }, []), jsx("div", {
    ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612442,
    className: "univer-relative\x20univer-flex\x20univer-size-full\x20univer-items-center\x20univer-justify-center\x20univer-overflow-hidden",
    "data-embed-slide-floating-preview": "true",
    "data-embed-slide-readonly-floating-preview": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612441 ? "true" : undefined,
    children: jsx("div", {
      className: "univer-relative univer-overflow-hidden",
      "data-embed-slide-floating-page-frame": "true",
      style: {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612443 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612443.width + "px" : "100%",
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612443 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612443.height + "px" : "100%"
      },
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612440
    })
  });
}
jy = Q([Z(0, Inject(ISidebarService)), Z(1, Inject(ISlideDrawingService)), Z(2, Inject(LocaleService)), Z(3, Inject(Cy)), Z(4, ICommandService)], jy);
function Ly() {
  return useObservable(useDependency(IWorkbenchService).rootUnitType$, null, true) === UniverInstanceType.UNIVER_SLIDE;
}
function zy() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612523;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612524 = useDependency(Injector),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612525 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612526 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612525.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SLIDE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612525.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE), undefined, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612525]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612527 = Yh(useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612525.focused$, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612523 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612525.getFocusedUnit()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612523.getUnitId()) ?? null, undefined, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612525]));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612526 ? Vy(By(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612524), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612526.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612527) : false;
}
function By(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612533) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612534;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612534 = Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612533)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612534.listSessions()) ?? [];
}
function Vy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612539) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612538 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612537.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465046 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465046.childType === UniverInstanceType.UNIVER_SLIDE && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465046.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612538) ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612539 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612538 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612539 != null && isInternalEditorID(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612539);
}
Hy = Q([Z(0, Inject(Injector)), Z(1, IUIPartsService)], Hy);
const Uy = "slide.table-size.dialog";
function Ky(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612610) {
  return {
    id: "slide.table-size.dialog",
    title: {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612605
    },
    width: 420,
    draggable: false,
    mask: true,
    maskClosable: true,
    children: {
      label: {
        name: Uy,
        props: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612606,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612607,
          initialRows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612608,
          initialColumns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612609,
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612605,
          onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612610
        }
      }
    },
    onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612610
  };
}
const Jy = {
  id: "slide.operation.arrange-drawing",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612640) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612640) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612641,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612642,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612643,
        arrangeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612644
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612640,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612645 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612639.get(ISlideDrawingService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612646 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612639.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612645.getDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612642),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612647.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612643);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825 === -1) return false;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612647];
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612644) {
      case ArrangeTypeEnum.forward:
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172.length - 1 && ([var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825 + 1]] = [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825 + 1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825]]);
        break;
      case ArrangeTypeEnum.backward:
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825 > 0 && ([var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825 - 1]] = [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825 - 1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825]]);
        break;
      case ArrangeTypeEnum.front:
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825, 1), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612643);
        break;
      case ArrangeTypeEnum.back:
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D825, 1), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172.unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612643);
        break;
      default:
        return false;
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612646.executeCommand(ReorderSlideElementsCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612641,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612642,
      drawingIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A172
    });
  }
};
function Yy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612657) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612658 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612657.getFocusDrawings();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612658.length) return null;
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612659] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612658;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612659 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612658.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465078 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465078.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612659.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465078.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612659.subUnitId) ? null : {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612659.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612659.subUnitId,
    drawingIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612658.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465079 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465079.drawingId)
  };
}
const Xy = {
    id: "slide.operation.contextmenu.open-shape-panel",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612663 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612663.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612665 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612663.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612666 = Yy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612664);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612666 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612666.drawingIds["length"]) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612666.drawingIds[0];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612667 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612665.executeCommand(hy.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612666.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612666.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612667
      }) : false;
    }
  },
  Zy = {
    id: "slide.operation.contextmenu.open-background-panel",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612673 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612673.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612675 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612673.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612676 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612674.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612677 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612676 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612676.pageManager["getActiveSlide"]();
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612676 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612677 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612675.executeCommand(py.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612676.getUnitId(),
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612677.getId()
      });
    }
  },
  Qy = {
    id: "slide.operation.contextmenu.open-transition-panel",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612683 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612683.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612683.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612684.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612687 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612686 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612686.pageManager["getActiveSlide"]();
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612686 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612687 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612685.executeCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB286.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612686.getUnitId(),
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612687.getId()
      });
    }
  },
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB287 = {
    id: "slide.operation.contextmenu.open-object-list-panel",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612693 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612693.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612693.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612694.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612696 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612696.pageManager["getActiveSlide"]();
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612696 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612697 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612695.executeCommand(dy.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612696.getUnitId(),
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612697.getId()
      });
    }
  },
  eb = {
    id: "slide.operation.contextmenu.open-speaker-notes-dialog",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612703 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612704 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612703.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612705 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612703.get(IDialogService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612706 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612703.get(LocaleService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612707 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612704.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612708 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612707 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612707.pageManager["getActiveSlide"]();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612707 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612708) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612709 = null;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612709 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612705.open(fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF114(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612706.t("slides-ui.presentation.speakerNotes"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612707.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612708.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612708.getData().speakerNotes, () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612709 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612709.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612709 = null;
      })), true;
    }
  },
  tb = {
    id: "slide.operation.contextmenu.toggle-ruler",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612717 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612717.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614829).toggleVisible(), true)
  },
  nb = {
    id: "slide.operation.contextmenu.open-table-size-dialog",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612718 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612719 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612718.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612720 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612718.get(SlideTableResourceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612721 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612718.get(IDialogService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612722 = Yy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612719);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612722 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612722.drawingIds["length"] !== 1) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612723 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612719.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612722.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612722.subUnitId)[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612722.drawingIds[0]];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612723 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612723.element["type"] !== PageElementTypeEnum.Table) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612720.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612722.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612723.element["tableId"]);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612725 = null;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612725 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612721.open(Ky("Table\x20size", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612722.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724.rows["length"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724.columns["length"], () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612725 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612725.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612725 = null;
      })), true;
    }
  };
function rb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612735) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612735,
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465080 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465081 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465080.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465082 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465080.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083 = Yy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465081);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.drawingIds["length"]) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465084 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.drawingIds[0];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465084 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465082.executeCommand(Jy.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465084,
        arrangeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612734
      }) : false;
    }
  };
}
const ib = rb(ArrangeTypeEnum.forward, "slide.operation.contextmenu.arrange-forward"),
  ab = rb(ArrangeTypeEnum.backward, "slide.operation.contextmenu.arrange-backward"),
  ob = rb(ArrangeTypeEnum.front, "slide.operation.contextmenu.arrange-front"),
  sb = rb(ArrangeTypeEnum.back, "slide.operation.contextmenu.arrange-back");
function cb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612739) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612738,
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465090 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465091 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465090.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465092 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465090.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093 = Yy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465091);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093.drawingIds["length"]) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465094 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465091.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093.subUnitId),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093.drawingIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465094[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000] || null).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001);
      if (zm(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49)) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.drawingId,
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.transform ?? {
            left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.element["transform"].left ?? 0,
            top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.element["transform"].top ?? 0,
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.element["transform"].width ?? 0,
            height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.element["transform"].height ?? 0,
            angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.element["transform"].rotation ?? 0,
            flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.element["transform"].flipX ?? false,
            flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.element["transform"].flipY ?? false
          };
        return {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003,
          transform: {
            ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16,
            flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612739 === "x" ? !(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.flipX ?? false) : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.flipX ?? false,
            flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612739 === "y" ? !(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.flipY ?? false) : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.flipY ?? false
          }
        };
      });
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465092.executeCommand(UpdateSlideDrawingCommand.id, {
        patches: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50
      }) : false;
    }
  };
}
const lb = cb("slide.operation.contextmenu.flip-horizontal", "x"),
  ub = cb("slide.operation.contextmenu.flip-vertical", "y"),
  db = {
    id: "slide.operation.contextmenu.group",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612742 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612743 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612742.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612744 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612742.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612745 = Yy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612743);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612745 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612745.drawingIds["length"] < 2 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612744.executeCommand(SetSlideGroupMutation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612745.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612745.subUnitId,
        drawingIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612745.drawingIds,
        groupId: generateRandomId(6)
      });
    }
  },
  fb = {
    id: "slide.operation.contextmenu.ungroup",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612750 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612751 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612750.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612752 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612750.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612753 = Yy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612751);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612753 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612753.drawingIds["length"] ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612752.executeCommand(CancelSlideGroupMutation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612753.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612753.subUnitId,
        drawingIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612753.drawingIds
      });
    }
  },
  pb = {
    id: "slide.operation.contextmenu.add-page",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612758 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612758.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612760 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612758.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612761 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612759.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612762 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612761 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612761.pageManager["getActiveSlide"]();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612761 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612762) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612763 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612762.getData(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612764 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612761.getSnapshot().slideOrder,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D827 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612764.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612763.id)) + 1,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB254 = {
          id: generateRandomId(6),
          pageType: PageTypeEnum.Slide,
          name: "Slide " + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612764.length + 1),
          elementOrder: [],
          elements: {},
          layoutPageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612763.layoutPageId,
          masterPageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612763.masterPageId,
          pageSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612763.pageSize,
          background: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612763.background,
          showMasterSp: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612763.showMasterSp
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612760.executeCommand(AddSlidePageCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612761.getUnitId(),
        slide: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB254,
        insertIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D827,
        setActive: true
      });
    }
  };
function hb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612776) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612776.vertical === true ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612776.horizontal ?? true;
}
function gb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A204 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.shapeType === ShapeTypeEnum.Rect && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.horizontal !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.vertical !== undefined),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256 = isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.shapeType) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A204 ? {
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.shapeType
    } : createDefaultInsertedShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.shapeType);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.fillColor && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256.fill = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256.fill,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.fillColor
  }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.strokeColor || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.strokeWidth !== undefined) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256.stroke = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256.stroke,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.strokeColor ? {
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.strokeColor
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.strokeWidth === undefined ? {} : {
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.strokeWidth
    })
  }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A204) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465100 = createShapeTextBoxShapeData({
      fill: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256.fill,
      stroke: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256.stroke,
      isHorizontal: hb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778),
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.fontSize === undefined ? undefined : {
        fs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.fontSize
      }
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.textWrap !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465100.shapeText && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465100.shapeText["textWrap"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612778.textWrap), Object.assign(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465100);
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F38(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612780) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612781 = gb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612780);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612780.startArrow || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612780.endArrow) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612781.ln = {
    startArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612780.startArrow ? {
      type: ShapeArrowTypeEnum.Arrow,
      size: ShapeArrowSizeEnum.Medium
    } : undefined,
    endArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612780.endArrow ? {
      type: ShapeArrowTypeEnum.Arrow,
      size: ShapeArrowSizeEnum.Large
    } : undefined
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612781;
}
var bb = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465105) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465105), X(this, "_pendingInsert$", new BehaviorSubject(null)), X(this, "pendingInsert$", this._pendingInsert$["asObservable"]());
  }
  getPendingInsert() {
    return this._pendingInsert$["getValue"]();
  }
  beginShapeInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465107) {
    this._pendingInsert$["next"]({
      type: "shape",
      options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465107
    });
  }
  beginTextInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465109 = {}) {
    this._pendingInsert$["next"]({
      type: "text",
      options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465109
    });
  }
  cancelPendingInsert() {
    return this.getPendingInsert() ? (this._pendingInsert$["next"](null), true) : false;
  }
  dispose() {
    this._pendingInsert$["complete"](), super.dispose();
  }
};
Sb = Q([Z(0, IUniverInstanceService), Z(1, ICommandService), Z(2, Inject(ip)), Z(3, IImageIoService), Z(4, IPermissionService), Z(5, Inject(Om)), Z(6, Inject(LocaleService)), Z(7, Inject(bb))], Sb);
const Ob = "slide.insert-ribbon.table",
  kb = "slide.insert-ribbon.shape",
  Ab = "slide.insert-ribbon.smart-art",
  jb = "slide.insert-ribbon.symbol-picker",
  Mb = "slide.insert-ribbon.emoji-picker",
  Nb = [];
function Ib(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612833) {
  return {
    id: "slide.insert-chart.dialog",
    title: {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612832
    },
    className: clsx("!univer-w-[calc(100vw-32px)] !univer-max-w-[680px] md:!univer-max-w-[960px] xl:!univer-max-w-[1200px]"),
    draggable: false,
    mask: true,
    maskClosable: true,
    children: {
      label: {
        name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612831,
        props: {
          onCancel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612833,
          onInserted: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612833
        }
      }
    },
    onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612833
  };
}
const Gb = {
    id: "slide.operation.insert.smart-art",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612884) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612884 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612884.value)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612885 = SMART_ART_LAYOUT_GALLERY_CATALOG.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465342 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465342.galleryId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612884.value);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612885) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612883.get(Sb).insertSmartArt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612884.value);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612886 = parseSmartArtCategory(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612885.category);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612886 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612883.get(Sb).insertSmartArt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612885.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612886);
    }
  },
  Kb = {
    id: "slide.operation.insert.text-box",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612893 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612891.get(bb),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A208 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892.value) === "vertical";
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612893.beginTextInsert({
        horizontal: !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A208,
        vertical: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A208,
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892.text) === undefined ? null : {
          text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892.text
        }),
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892.fontSize) === undefined ? null : {
          fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892.fontSize
        }),
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892.fitToContent) === undefined ? null : {
          fitToContent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612892.fitToContent
        })
      }), true;
    }
  },
  qb = {
    id: "slide.operation.insert.shape",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612898) => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D841 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612898 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612898.value),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612899 = Number.isInteger(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D841) ? shapeTypeOptions[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D841] : undefined;
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612899 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612899.horizontal || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612899.vertical ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612897.get(bb).beginShapeInsert({
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612899.type,
        startArrow: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612899.startArrow,
        endArrow: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612899.endArrow,
        nameBase: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612897.get(LocaleService).t("shape-editor-ui." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612899.name)
      }), true);
    }
  },
  Jb = {
    id: "slide.operation.cancel-pending-insert",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612903 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612903.get(bb).cancelPendingInsert()
  },
  Yb = {
    id: "slide.operation.insert.open-image",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612904 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612905 = globalThis.document;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612905) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612906 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612904.get(Sb),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612907 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612905.createElement("input");
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612907.type = "file", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612907.accept = "image/*", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612907.addEventListener("change", () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612907.files) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343[0];
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612907.value = "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612906.insertImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344).catch(() => {});
      }, {
        once: true
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612907.click(), true;
    }
  },
  Xb = {
    id: "slide.operation.smart-art.open-image",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612913) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612914 = globalThis.document;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612914 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612913) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612915 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612912.get(Sb),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612914.createElement("input");
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916.type = "file", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916.accept = "image/*", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916.style["display"] = "none";
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612917 = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916.remove();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916.addEventListener("change", () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916.files) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347[0];
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916.value = "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612917(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612915.replaceSmartArtImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348).catch(() => {});
      }, {
        once: true
      }), globalThis.addEventListener("focus", () => {
        globalThis.setTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612917, 0);
      }, {
        once: true
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612914.body["appendChild"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612916.click(), true;
    }
  },
  Zb = {
    id: "slide.operation.insert.open-chart-dialog",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612924 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612925 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612924.get(ComponentManager),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612926 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612924.get(IDialogService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612927 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612924.get(LocaleService);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612925.get("slide-chart.insert-panel")) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612928 = null;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612928 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612926.open(Ib("slide-chart.insert-panel", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612927.t("slides-ui.insertToolbar.chart"), () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612928 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612928.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612928 = null;
      })), true;
    }
  };
function Qb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612934) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612934 ?? "").toLowerCase();
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F39(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612936) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612936.type === PageElementTypeEnum.Connector) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612936.connectorData;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612936.type !== PageElementTypeEnum.Shape) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612936.shapeData;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612937.shapeType && isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612937.shapeType) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612937 : null;
}
function ex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612940) {
  let {
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612941
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612940;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612941.type === PageElementTypeEnum.Placeholder) return "shape";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612941.type === PageElementTypeEnum.Text) return "text";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612941.type === PageElementTypeEnum.Connector) return "line";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612941.type === PageElementTypeEnum.Shape) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612942;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612942 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612941.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612942.shapeType;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351 && isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351) ? "line" : "shape";
  }
  return null;
}
function tx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612946) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612947 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612946.getFocusDrawings();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612947.length) return [];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612948 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612947[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612949 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612946.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612948.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612948.subUnitId);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612947.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612949[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352.drawingId] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612946.getDrawingByParam(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353);
}
function nx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612954, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612955) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612956 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612955.getSnapshot();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612956.context || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612956.selectedIds["length"]) return [];
  let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612957,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612958
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612956.context,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612959 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612954.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612958);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612956.selectedIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465354 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612959[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465354]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355);
}
function rx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612966) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612966.length) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612967 = ex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612966[0]);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612967 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612966.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465356 => ex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465356) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612967) ? null : {
    type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612967,
    drawings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612966
  };
}
function ix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612971) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612976;
  let {
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612977
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612970,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612978 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612977.type === PageElementTypeEnum.Shape ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612977.shapeData : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612977.type === PageElementTypeEnum.Placeholder ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612977.style : null;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612978 ? Qb((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612972 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612978.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612972.color) === Qb((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612973 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612971.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612973.color) && Qb((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612974 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612978.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612974.color) === Qb((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612975 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612971.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612975.color) && (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612976 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612978.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612976.width) ?? 0) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612971.stroke["width"] : false;
}
function ax(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612989) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612992, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612996;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612997 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F39(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612988.element);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612997) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612998 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612990 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612997.ln) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612990 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612990.startArrow) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612990.type) ?? ShapeArrowTypeEnum.None,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612999 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612991 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612997.ln) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612991 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612991.endArrow) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612991.type) ?? ShapeArrowTypeEnum.None,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613000 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612989.ln) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612992.startArrow) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612992.type) ?? ShapeArrowTypeEnum.None,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613001 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612993 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612989.ln) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612993 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612993.endArrow) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612993.type) ?? ShapeArrowTypeEnum.None;
  return Qb((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612994 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612997.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612994.color) === Qb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612989.stroke["color"]) && (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612995 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612997.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612995.width) ?? 0) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612989.stroke["width"] && (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612996 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612997.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612996.dashType) ?? ShapeLineDashEnum.Solid) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612989.stroke["dashType"] ?? ShapeLineDashEnum.Solid) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612998 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613000 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612999 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613001;
}
function ox(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613017) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613016.element["type"] !== PageElementTypeEnum.Text) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613018 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613016.element["textStyle"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613018 ? Qb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613018.color) === Qb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613017.textStyle["color"]) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613018.fontSize === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613017.textStyle["fontSize"] && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613018.bold == !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613017.textStyle["bold"] : false;
}
function sx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613023) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613023.type === "shape" ? ix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613023) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613023.type === "line" ? ax(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613023) : ox(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613023);
}
function cx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613026) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613026) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613027 = getShapeQuickStylePresets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613026.type);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613027) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613026.drawings["every"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023 => sx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357))) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.id;
  return null;
}
function lx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613030) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613031;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613030.type === PageElementTypeEnum.Connector) return true;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613030.type !== PageElementTypeEnum.Shape) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613032 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613031 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613030.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613031.shapeType;
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613032 && isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613032);
}
function ux(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613037) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613036,
    shapeData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613036.shapeData,
      fill: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613036.shapeData["fill"] ?? {}),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613037.fill
      },
      stroke: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613036.shapeData["stroke"] ?? {}),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613037.stroke
      }
    }
  };
}
function dx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613040, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613041) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613042, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613043;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613040,
    style: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613040.style ?? {}),
      fill: {
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613042 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613040.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613042.fill) ?? {}),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613041.fill
      },
      stroke: {
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613043 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613040.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613043.stroke) ?? {}),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613041.stroke
      }
    }
  };
}
function fx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613048, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613050, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613051, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613052, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613053;
  if (!lx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613048)) return null;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613048.type === PageElementTypeEnum.Connector) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613057;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613048.connectorData;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613048,
      connectorData: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358,
        stroke: {
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358.stroke ?? {}),
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049.stroke
        },
        ln: {
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358.ln ?? {}),
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049.ln,
          startArrow: {
            ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613054 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613054.startArrow) ?? {}),
            ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613055 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613055.startArrow) ?? {})
          },
          endArrow: {
            ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613056 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613056.endArrow) ?? {}),
            ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613057 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613057.endArrow) ?? {})
          }
        }
      }
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613058 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613048,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613059 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613058.shapeData;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613058,
    shapeData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613059,
      stroke: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613059.stroke ?? {}),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049.stroke
      },
      ln: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613059.ln ?? {}),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049.ln,
        startArrow: {
          ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613050 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613059.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613050.startArrow) ?? {}),
          ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613051 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613051.startArrow) ?? {})
        },
        endArrow: {
          ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613052 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613059.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613052.endArrow) ?? {}),
          ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613053 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613049.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613053.endArrow) ?? {})
        }
      }
    }
  };
}
function px(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613072, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613073) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613072,
    textStyle: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613072.textStyle ?? {}),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613073.textStyle
    }
  };
}
function mx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613077) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613076)) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359.type !== PageElementTypeEnum.Placeholder || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359.placeholder["type"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613077.placeholder["type"]) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359.placeholder["index"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613077.placeholder["index"];
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 ?? null) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025 ?? null)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359;
  }
  return null;
}
function hx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613082) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A179 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613080.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360 => {
    let {
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361.type === PageElementTypeEnum.Shape && !lx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361)) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178.push({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.drawingId,
        element: ux(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613081)
      });
      return;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361.type !== PageElementTypeEnum.Placeholder) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.sourcePageType === "slide") {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178.push({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.drawingId,
        element: dx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613081)
      });
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465363 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613082 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613082.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.subUnitId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465363) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465364 = mx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465363.getData().elements, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465362);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465364) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178.push({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465364.id,
        element: dx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613081)
      });
      return;
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A179.push({
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360,
      element: dx({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465362,
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465362.id,
        transform: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465362.transform
        }
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613081)
    });
  }), {
    patches: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178,
    inheritedPlaceholderAdds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A179
  };
}
function gx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613087) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613086.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371 = fx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613087);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371 ? {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.drawingId,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371
    } : null;
  }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465374 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465374);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F40(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613091) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613090.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375.element["type"] === PageElementTypeEnum.Text).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376 => ({
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376.subUnitId,
    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376.drawingId,
    element: px(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613091)
  }));
}
function vx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613096) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613095.type === "shape" ? hx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613096) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613095.type === "line" ? {
    patches: gx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613095),
    inheritedPlaceholderAdds: []
  } : {
    patches: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F40(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613095),
    inheritedPlaceholderAdds: []
  };
}
const yx = {
  id: "slide.operation.apply-quick-style",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613101) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613102;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613103 = getShapeQuickStylePreset((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613101 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613101.presetId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613101 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613101.value) ?? "");
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613103) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613100.get(ISlideDrawingService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613100.get(Om),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613100.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613100.get(IUniverInstanceService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613100.get(ip),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613109 = nx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613105),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613110 = rx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613109.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613109 : tx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613104));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613110 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613110.type !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613103.type) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613111 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613110.drawings[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613102.unitId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613112 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613111 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613107.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613111, UniverInstanceType.UNIVER_SLIDE) : null,
      {
        patches: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613113,
        inheritedPlaceholderAdds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613114
      } = vx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613110.drawings, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613112 ?? null);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613113.length && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613114.length) return false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613108.completeEditing();
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A210 = false;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613113.length && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613106.syncExecuteCommand(UpdateSlideDrawingCommand.id, {
      patches: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613113
    }) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A210), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613114.forEach(({
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378
    }) => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613106.syncExecuteCommand(AddSlideElementCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.subUnitId,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378,
        focus: false
      }) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A210;
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A210;
  }
};
function bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613131) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A182 = [],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381 => {
      if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381)) return;
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613130[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382.element;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383.type === PageElementTypeEnum.Group) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383.children["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613132(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197));
        return;
      }
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A182.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381);
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613132(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613131), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A182;
}
function xx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613137) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613137) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613136[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026.element["type"] === PageElementTypeEnum.Shape) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613138;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613138 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026.element["shapeData"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613138.fill;
    }
  }
}
function Sx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613145) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613146 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613142.getDrawingByParam({
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613143,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613144,
    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613145
  });
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613146 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613146.element["type"] !== PageElementTypeEnum.Shape ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613146;
}
function Cx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613153) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613153.getSnapshot();
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613154.context && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613154.selectedIds["length"] === 1) {
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613154.context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613152.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613154.selectedIds[0],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613152.getDrawingByParam({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391
      });
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465392 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465392.element["type"]) === PageElementTypeEnum.Shape ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465392 : null;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613152.getFocusDrawings();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613155.length === 1 ? Sx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613155[0].unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613155[0].subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613155[0].drawingId) : null;
}
function wx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613161) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613160.element["type"] === PageElementTypeEnum.Table && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613161.rotation !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613161.left === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613161.top === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613161.width === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613161.height === undefined;
}
const Tx = {
    id: "slide.operation.update-drawing-transform",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613166 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613164.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613164.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613166.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.drawingId
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613168 || wx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165)) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613168.transform ?? {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          angle: 0,
          flipX: false,
          flipY: false
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB259 = {
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.left ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258.left,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.top ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258.top,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.width ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.height ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258.height,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613168.element["type"] === PageElementTypeEnum.Table ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258.angle ?? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.rotation ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258.angle ?? 0
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613167.executeCommand(UpdateSlideDrawingCommand.id, {
        patches: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613165.drawingId,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB259
        }]
      });
    }
  },
  Ex = {
    id: "slide.operation.update-shape-transform",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613174.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613177 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613174.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613178 = Sx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.drawingId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613178) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB262 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613178.transform ?? {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          angle: 0,
          flipX: false,
          flipY: false
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB263 = {
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB262,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.left ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB262.left,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.top ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB262.top,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.width ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB262.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.height ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB262.height,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.rotation ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB262.angle ?? 0
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613177.executeCommand(UpdateSlideDrawingCommand.id, {
        patches: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613175.drawingId,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB263
        }]
      });
    }
  },
  Dx = {
    id: "slide.operation.update-shape-style",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613190;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613191 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613184.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613192 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613184.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613193 = Sx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613191, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.drawingId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613193) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613194 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613193.element,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB266 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613194.shapeData,
          fill: {
            ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613194.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613186.fill) ?? {}),
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.fillColor ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613194.shapeData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613187.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613187.color)
          },
          stroke: {
            ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613194.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613188.stroke) ?? {}),
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.strokeColor ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613189 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613194.shapeData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613189 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613189.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613189.color),
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.strokeWidth ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613190 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613194.shapeData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613190 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613190.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613190.width)
          }
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.outerShadow !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.outerShadow === null ? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB266.outerShadow : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB266.outerShadow = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.outerShadow);
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB267 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613194,
        shapeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB266
      };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613192.executeCommand(UpdateSlideDrawingCommand.id, {
        patches: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613185.drawingId,
          element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB267
        }]
      });
    }
  },
  Ox = {
    id: "slide.operation.update-shape-data",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613208 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613206.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613209 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613206.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613208.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.drawingId
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613210) return false;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613210.element["type"] === PageElementTypeEnum.Shape) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613214;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465393 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613210.element,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465393.shapeData;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.shapeData) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613209.executeCommand(UpdateSlideDrawingCommand.id, {
          patches: [{
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.subUnitId,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.drawingId,
            element: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465393,
              shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.shapeData
            }
          }]
        });
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB110 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394,
          fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.fill ? {
            ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.fill ?? {}),
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.fill
          } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.fill,
          stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.stroke ? {
            ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.stroke ?? {}),
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.stroke
          } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.stroke,
          ln: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln ? {
            ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.ln ?? {}),
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln,
            startArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["startArrow"] ? {
              ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613211 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613211.startArrow) ?? {}),
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["startArrow"]
            } : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613212 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613212.startArrow,
            endArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["endArrow"] ? {
              ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613213 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613213.endArrow) ?? {}),
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["endArrow"]
            } : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613214.endArrow
          } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394.ln
        };
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613209.executeCommand(UpdateSlideDrawingCommand.id, {
          patches: [{
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.subUnitId,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.drawingId,
            element: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465393,
              shapeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB110
            }
          }]
        });
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613210.element["type"] !== PageElementTypeEnum.Group) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613215 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613208.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.subUnitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613216 = bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.drawingId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613217 = xx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613216),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.fill;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.fill && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.fill["fillType"] === ShapeFillEnum.SolidFill || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.fill["fillType"] === ShapeFillEnum.GradientFill) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613218 = {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613217 ?? {}),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.fill
      });
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613216.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465395 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613215[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465395]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465396 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465396).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397.element["type"] === PageElementTypeEnum.Shape) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465401;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397.element,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.shapeData,
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028,
              fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613218 ? {
                ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.fill ?? {}),
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613218
              } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.fill,
              stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.stroke ? {
                ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.stroke ?? {}),
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.stroke
              } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.stroke,
              ln: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln ? {
                ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.ln ?? {}),
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln,
                startArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["startArrow"] ? {
                  ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465398 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465398.startArrow) ?? {}),
                  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["startArrow"]
                } : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399.startArrow,
                endArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["endArrow"] ? {
                  ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465400.endArrow) ?? {}),
                  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["endArrow"]
                } : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465401 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465401.endArrow
              } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.ln
            };
          return {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.subUnitId,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397.drawingId,
            element: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027,
              shapeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
            }
          };
        }
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397.element["type"] === PageElementTypeEnum.Connector) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465405;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397.element,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.connectorData,
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19 = {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030,
              stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.stroke ? {
                ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.stroke ?? {}),
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.stroke
              } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.stroke,
              ln: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln ? {
                ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.ln ?? {}),
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln,
                startArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["startArrow"] ? {
                  ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465402 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465402.startArrow) ?? {}),
                  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["startArrow"]
                } : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465403.startArrow,
                endArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["endArrow"] ? {
                  ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465404.endArrow) ?? {}),
                  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.ln["endArrow"]
                } : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465405 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465405.endArrow
              } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.ln
            };
          return {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613207.subUnitId,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397.drawingId,
            element: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029,
              connectorData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19
            }
          };
        }
        return null;
      }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465415 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465415);
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A184.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613209.executeCommand(UpdateSlideDrawingCommand.id, {
        patches: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A184
      }) : false;
    }
  },
  kx = {
    id: "slide.operation.update-shape-type",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613234 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233.shapeType) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233.value);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613234) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613232.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613232.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613237 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233.drawingId ? Sx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613233.drawingId) : Cx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613232.get(Om));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613237) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613238 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613237.element,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613239 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613238.shapeData["shapeType"] ?? ShapeTypeEnum.Rect,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613240;
      try {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613240 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613238.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613238.shapeData).cloneShapeDataForShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613234);
      } catch {
        return false;
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613236.executeCommand(UpdateSlideDrawingCommand.id, {
        patches: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613237.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613237.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613237.drawingId,
          element: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613238,
            shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613240
          }
        }]
      });
    }
  },
  Ax = {
    id: "slide.operation.update-image-clip-shape",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613250.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613250.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613252.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251.drawingId
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613254 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613254.element["type"] !== PageElementTypeEnum.Image) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613255 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613254.element;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613253.executeCommand(UpdateSlideDrawingCommand.id, {
        patches: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251.drawingId,
          element: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613255,
            prstGeom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251.prstGeom,
            adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613251.adjustValues
          }
        }]
      });
    }
  };
function jx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613264) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613264.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465416 => ({
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613262,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613263,
    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465416
  }));
}
function Mx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613268) {
  return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613268));
}
function Nx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613272) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613273 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613271.getSnapshot();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613273.slideOrder) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613271.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613270.getDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417),
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032),
      {
        data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033,
        order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034
      } = buildResolvedSlideDrawingMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031),
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613270.drawingManagerData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613272] || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613270.drawingManagerData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613272] = {}), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613270.drawingManagerData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613272][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417] = {
      data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033,
      order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034
    };
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200));
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613270.removeNotification(jx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613270.addNotification(jx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613270.updateNotification(jx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7));
  }
}
const Px = {
  id: "slide.operation.change-theme",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613279) => {
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613279 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613279.themeId)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613280 = getSlideThemePreset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613279.themeId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613280) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613281 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613278.get(IUniverInstanceService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613282 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613278.get(ISlideDrawingService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613283 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613279.unitId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613281.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613279.unitId, UniverInstanceType.UNIVER_SLIDE) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613281.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613283) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613284 = Mx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613280),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613285 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613283.getSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613285.theme = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613283.theme["update"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613284), Nx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613283.getUnitId()), true;
  }
};
const OS = "slide.quick-style-gallery.component";
const MS = "slide.shape-format.style-ribbon-control",
  NS = "slide.shape-format.effects-ribbon-control",
  PS = "slide.shape-format.text-ribbon-control",
  FS = "slide.shape-format.text-effects-ribbon-control",
  IS = "slide.shape-format.formula-ribbon-control",
  LS = "slide.shape-format.smart-art-create-ribbon-control",
  RS = "slide.shape-format.smart-art-layout-ribbon-control",
  zS = "slide.shape-format.smart-art-style-ribbon-control",
  BS = "slide.shape-format.smart-art-reset-ribbon-control";
const SC = "slide.theme.picker.component";
var kC = "@univerjs-pro/slides-ui",
  AC = "1.0.0-insiders.20260907-70fc579";
PC = Q([Z(0, IImageIoService), Z(1, IClipboardInterfaceService)], PC);
ST = Q([Z(0, Inject(ComponentManager)), Z(1, Inject(IconManager))], ST);
RT = Q([Z(1, IUniverInstanceService), Z(2, Inject(Lf)), Z(3, Inject(ThemeService)), Z(4, TT)], RT);
zT = Q([Z(0, ICommandService), Z(1, IContextService), Z(2, Inject(PC)), Z(3, Inject(Sb)), Z(4, Inject(Om)), Z(5, IUIRuntimeScopeService)], zT);
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614830 = Q([Z(1, Inject(Injector)), Z(2, IUniverInstanceService), Z(3, ISlideDrawingService), Z(4, ICommandService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614830);
rE = Q([Z(1, Inject(Injector)), Z(2, IUniverInstanceService), Z(3, ISlideDrawingService), Z(4, ICommandService), Z(5, Inject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614830))], rE);
iE = Q([Z(0, IMenuManagerService)], iE);
aE = Q([Z(1, Inject(Lf)), Z(2, IContextMenuService), Z(3, IMenuManagerService), Z(4, Om), Z(5, Inject(ip))], aE);
oE = Q([Z(0, IMenuManagerService), Z(1, IRibbonService), Z(2, IRenderManagerService), Z(3, Inject(Om)), Z(4, Inject(ISlideDrawingService)), Z(5, Inject(ShapeFloatingToolbarService)), Z(6, Optional(Kh)), Z(7, Optional(jm)), Z(8, Optional(Mm))], oE);
lE = Q([Z(1, Inject(Injector)), Z(2, IUniverInstanceService), Z(3, Inject(Lf)), Z(4, Inject(Om)), Z(5, ISlideDrawingService), Z(6, Inject(sE)), Z(7, Inject(ip)), Z(8, ICommandService), Z(9, IPermissionService), Z(10, Inject(ThemeService)), Z(11, Optional(Kh)), Z(12, Optional(jm)), Z(13, Optional(Nm))], lE);
dE = Q([Z(1, Inject(Injector)), Z(2, IUniverInstanceService), Z(3, ISlideDrawingService), Z(4, ICommandService), Z(5, Inject(ip))], dE);
fE = Q([Z(1, ICommandService), Z(2, IUniverInstanceService), Z(3, ISlideDrawingService), Z(4, Inject(Om)), Z(5, Inject(Cy))], fE);
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614831 = Q([Z(1, IUniverInstanceService), Z(2, Inject(bb)), Z(3, Inject(Sb)), Z(4, Inject(rE)), Z(5, Inject(ThemeService))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614831);
vE = Q([Z(0, IMenuManagerService)], vE);
wE = Q([Z(0, IShortcutService)], wE);
EE = Q([Z(0, Om), Z(1, mw), Z(2, IUniverInstanceService)], EE);
DE = Q([Z(0, Inject(IUnitPresenceUIAdapterRegistry)), Z(1, Inject(EE))], DE);
RE = Q([Z(1, Inject(EE)), Z(2, ICommandService), Z(3, Inject(ThemeService))], RE);
zE = Q([Z(0, IUniverInstanceService), Z(1, yg)], zE);
VE = Q([Z(0, Inject(ICanvasPopupService)), Z(1, IRenderManagerService)], VE);
HE = Q([Z(0, IUniverInstanceService), Z(1, IRenderManagerService)], HE);
UE = Q([Z(1, Inject(DocSelectionManagerService)), Z(2, Inject(DocCanvasPopManagerService)), Z(3, Inject(DocSelectionRenderService)), Z(4, ICommandService), Z(5, Inject(DocEventManagerService)), Z(6, Inject(ShapeTextHyperLinkPopupService)), Z(7, Inject(DocInterceptorService)), Z(8, Inject(DocRenderController)), Z(9, Inject(ip))], UE);
qE = Q([Z(1, ICommandService), Z(2, IUniverInstanceService), Z(3, ISlideDrawingService), Z(4, Inject(Lf)), Z(5, Inject(Sb))], qE);
XE = Q([Z(1, Inject(VE)), Z(2, Inject(Om)), Z(3, Inject(Lf)), Z(4, Inject(ip)), Z(5, Inject(ISlideDrawingService)), Z(6, Inject(ShapeFloatingToolbarService)), Z(7, IMenuManagerService)], XE);
ZE = Q([Z(1, ICommandService), Z(2, Inject(Lf)), Z(3, Inject(VE)), Z(4, Inject(ShapeTextHyperLinkPopupService)), Z(5, Inject(ip)), Z(6, ICanvasPopupService), Z(7, IPermissionService)], ZE);
QE = Q([Z(1, Inject(VE)), Z(2, Inject(Om)), Z(3, Inject(ISlideDrawingService))], QE);
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614832 = Q([Z(1, IUniverInstanceService), Z(2, ISlideDrawingService), Z(3, Inject(Lf)), Z(4, Inject(ip)), Z(5, Inject(ShapeFormulaService)), Z(6, IContextService), Z(7, ICommandService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614832);
X(eD, "pluginName", "UNIVER_SLIDES_UI_PLUGIN"), X(eD, "packageName", kC), X(eD, "version", AC), X(eD, "type", UniverInstanceType.UNIVER_SLIDE), eD = Q([DependentOn(UniverLicensePlugin, UniverDocsPlugin, UniverRenderEnginePlugin, UniverDocsUIPlugin, UniverShapeEditorPlugin, UniverSlidesPlugin, UniverShapeEditorUIPlugin), Z(1, Inject(Injector)), Z(2, ICommandService), Z(3, IRenderManagerService), Z(4, IConfigService), Z(5, IUIPartsService)], eD);
X(tD, "ROTATE_HANDLE_OFFSET_PX", 30);
export { id, mc, bc, X, um, Ql, eu, Pd, Lm, xg, bg, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F33, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F31, Ly, zy, ip, Vy, By, hb, Nb, nx, rx, tx, cx, yx, Px, Jy, Ox, Tx, Ax, Dx, sx, Ug, db, fb, ff, SC, OS, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB310, Uy, Ob, kb, Ab, jb, Mb, Av, MS, NS, PS, FS, IS, LS, RS, zS, BS, zf, zm, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F38, gb, Jb, Rf, Yl, Xb, rp, Jl, Pg, Bg, Ig, Rg, Lg, Vg, Hg, pb, Zy, eb, Qy, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB287, tb, Xy, nb, lb, ub, ob, ib, sb, ab, Ex, kx, qb, Kb, Gb, Yb, Zb, kg, yg, bb, Xf, Pm, mh, ph, fh, Vh, Gg, fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B803, Xh, zh, El, Ul, Yf, Mv, jv, dh, oy, jl };
