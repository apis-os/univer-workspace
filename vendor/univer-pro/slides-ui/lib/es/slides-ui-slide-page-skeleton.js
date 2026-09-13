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
import { X, id } from "./internal-core-endo.js";
var nD = class extends Disposable {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468610 = 960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468611 = 540) {
      super(), X(this, "_dirty$", new Subject()), X(this, "dirty$", this._dirty$["asObservable"]()), X(this, "_pageData", null), X(this, "_layoutCache", new Map()), X(this, "_isDirty", true), X(this, "_pageWidth", 960), X(this, "_pageHeight", 540), this._pageWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468610, this._pageHeight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468609 && this.loadPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468609);
    }
    get pageWidth() {
      return this._pageWidth;
    }
    get pageHeight() {
      return this._pageHeight;
    }
    loadPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468617) {
      this._pageData = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468616 !== undefined && (this._pageWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468616), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468617 !== undefined && (this._pageHeight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468617), this.makeDirty();
    }
    makeDirty() {
      this._isDirty = true, this._dirty$["next"]();
    }
    calculate() {
      !this._isDirty || this._pageData === null || (this._buildLayouts(this._pageData), this._isDirty = false);
    }
    getLayouts() {
      this.calculate();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468621 = this._pageData;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468621 === null ? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468621.elementOrder["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694 => this._layoutCache["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695 !== undefined);
    }
    getLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468623) {
      return this.calculate(), this._layoutCache["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468623);
    }
    getPageData() {
      return this._pageData;
    }
    _buildLayouts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468625) {
      this._layoutCache["clear"]();
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468625.elementOrder) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468625.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696];
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335) continue;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.transform,
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696,
            type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.type,
            left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.left ?? 0,
            top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.top ?? 0,
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.width ?? 0,
            height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.height ?? 0,
            angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.rotation ?? 0,
            flipH: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.flipX ?? false,
            flipV: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.flipY ?? false,
            visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.visible !== false,
            element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335
          };
        this._layoutCache["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12);
      }
    }
    dispose() {
      this._dirty$["complete"](), this._layoutCache["clear"](), super.dispose();
    }
  },
  rD = class extends Scene {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468629) {
      super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468629), X(this, "_skeleton", null);
    }
    loadPageSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468633) {
      this._skeleton = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468633, this.transformByState({
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468633.pageWidth,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468633.pageHeight
      }), this.makeDirty(true);
    }
    getSkeleton() {
      return this._skeleton;
    }
    isReady() {
      return this._skeleton !== null;
    }
    dispose() {
      this._skeleton = null, super.dispose();
    }
  };
export { nD as SlidePageSkeleton, rD as SlideScene };
