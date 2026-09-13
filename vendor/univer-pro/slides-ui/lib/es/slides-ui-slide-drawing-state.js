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
import { X } from "./internal-core-endo.js";
import { km } from "./slides-ui-islide-drawing-state.js";
let Am = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463900, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463901) {
    super(), this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463900, this._slideDrawingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463901, X(this, "_state$", new BehaviorSubject({
      ...km
    })), X(this, "_autoOpenSmartArtTextPane", true), X(this, "state$", this._state$["asObservable"]()), X(this, "selected$", this._state$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.selectedIds), distinctUntilChanged((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151])))), X(this, "focused$", this._state$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.focusedId), distinctUntilChanged())), X(this, "hover$", this._state$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678.hoverId), distinctUntilChanged())), X(this, "activeEditing$", this._state$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679.activeEditingId), distinctUntilChanged())), X(this, "focusedPart$", this._state$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680.focusedPart), distinctUntilChanged((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.drawingId) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.drawingId) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.presentationShapeId) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.presentationShapeId) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.nodeId) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.nodeId)))), X(this, "smartArtTextPaneDrawingId$", this._state$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.smartArtTextPaneDrawingId), distinctUntilChanged()));
  }
  dispose() {
    this._state$["complete"](), super.dispose();
  }
  getSnapshot() {
    return this._state$["getValue"]();
  }
  isSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904) {
    return this._state$["getValue"]().selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904);
  }
  isFocused(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906) {
    return this._state$["getValue"]().focusedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906;
  }
  isHovered(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908) {
    return this._state$["getValue"]().hoverId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908;
  }
  isActiveEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910) {
    return this._state$["getValue"]().activeEditingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910;
  }
  selectDrawings(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463914) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463915 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463914 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913.length - 1] ?? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463914;
    this._emit({
      context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912,
      selectedIds: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913],
      focusedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463915
    }), this._bridgeToDrawingService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913);
  }
  addToSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463921) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463922 = this._state$["getValue"]();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463922.selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463921)) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463922.selectedIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463921];
    this._emit({
      context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463920,
      selectedIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41,
      focusedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463921
    }), this._bridgeToDrawingService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463920, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41);
  }
  removeFromSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927 = this._state$["getValue"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927.selectedIds["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927.focusedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928.length - 1] ?? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927.focusedId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463930 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927.context : null;
    this._emit({
      context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463930,
      selectedIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928,
      focusedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927.context && this._bridgeToDrawingService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927.context, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928);
  }
  toggleInSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937) {
    this.isSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937) ? this.removeFromSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937) : this.addToSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937);
  }
  clearSelection() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463940 = this._state$["getValue"]();
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463940.selectedIds["length"] !== 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463940.focusedId !== null) && (this._emit({
      context: null,
      selectedIds: [],
      focusedId: null
    }), this._slideDrawingService["focusDrawing"](null), this._contextService["setContextValue"](FOCUSING_COMMON_DRAWINGS, false));
  }
  setFocusedPart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946 = this._state$["getValue"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946.selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942.drawingId) || (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946.focusedPart) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943.drawingId) !== (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942.drawingId) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946.focusedPart) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944.presentationShapeId) !== (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942.presentationShapeId) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946.focusedPart) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945.nodeId) !== (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942.nodeId)) && this._state$["next"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946,
      focusedPart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942
    });
  }
  toggleSmartArtTextPane(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463952) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463953 = this._state$["getValue"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463953.selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463952)) return;
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A82 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463953.smartArtTextPaneDrawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463952;
    this._autoOpenSmartArtTextPane = !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A82, this._state$["next"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463953,
      smartArtTextPaneDrawingId: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A82 ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463952
    });
  }
  closeSmartArtTextPane() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463956 = this._state$["getValue"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463956.smartArtTextPaneDrawingId !== null && (this._autoOpenSmartArtTextPane = false, this._state$["next"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463956,
      smartArtTextPaneDrawingId: null
    }));
  }
  setHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463958) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463959 = this._state$["getValue"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463959.hoverId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463958 && this._state$["next"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463959,
      hoverId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463958
    });
  }
  setActiveEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463963) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463964 = this._state$["getValue"]();
    this._state$["next"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463964,
      context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463962 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463964.context,
      activeEditingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463963
    });
  }
  clearActiveEditing() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463968 = this._state$["getValue"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463968.activeEditingId !== null && this._state$["next"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463968,
      activeEditingId: null
    });
  }
  _emit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463971 = this._state$["getValue"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.selectedIds["length"] === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.focusedId : null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463973 = this._autoOpenSmartArtTextPane && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.context && this._isSmartArtDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.context, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972 : null;
    this._state$["next"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463971,
      context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.context,
      selectedIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.selectedIds,
      focusedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.focusedId,
      focusedPart: null,
      smartArtTextPaneDrawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463973 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.selectedIds["length"] === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463971.smartArtTextPaneDrawingId ?? "") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463971.smartArtTextPaneDrawingId : null)
    });
  }
  _isSmartArtDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980 = this._slideDrawingService["getDrawingByParam"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979
    });
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980.element["type"]) === PageElementTypeEnum.Shape && isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980.element["shapeData"]);
  }
  _bridgeToDrawingService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985.length === 0) {
      this._slideDrawingService["focusDrawing"](null), this._contextService["setContextValue"](FOCUSING_COMMON_DRAWINGS, false);
      return;
    }
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988 = this._slideDrawingService["getDrawingData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687 => ({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687.drawingId
      }));
    this._slideDrawingService["focusDrawing"](var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43.length ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43 : null), this._contextService["setContextValue"](FOCUSING_COMMON_DRAWINGS, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43.length > 0);
  }
};
export { Am as SlideDrawingStateService };
