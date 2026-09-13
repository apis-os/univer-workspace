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
import { X, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F38, gb, id, jl } from "./internal-core-endo.js";
import { xc } from "./slides-ui-slide-logical-page-size.js";
function xb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612801, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612802) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612803 = plainTextToSlideDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612800, {
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612801 === undefined ? undefined : {
        fs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612801
      }
    }),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D837 = Math.max(1, Math.ceil(measureDocumentNoWrapTextWidth(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612803) + 2)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612804 = jl({
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612803,
      size: {
        width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D837,
        height: SLIDE_INSERT_DEFAULT_SIZE.textBoxHeight
      },
      localeService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612802,
      verticalAlign: VerticalAlign.TOP,
      isHorizontal: true,
      wrapStrategy: WrapStrategy.WRAP
    }),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D838 = Math.max(1, Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612804.actualHeight));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612804.dispose(), {
    width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D837,
    height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D838
  };
}
let Sb = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465118) {
    this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465111, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465112, this._textEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465113, this._imageIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465114, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465115, this._drawingStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465116, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465117, this._pendingInsertService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465118, X(this, "pendingInsert$", undefined), this.pendingInsert$ = this._pendingInsertService["pendingInsert$"];
  }
  cancelPendingInsert() {
    return this._pendingInsertService["cancelPendingInsert"]();
  }
  insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465127) {
    return this._insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465127);
  }
  insertShapeAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465130) {
    return this._insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465130);
  }
  insertConnectorAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135) {
    return isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465133.shapeType) ? this._insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465134, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135) : false;
  }
  insertSmartArt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465140) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141 = this._getActiveSlideContext(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142 = createSmartArtDataFromLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465140);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142) return false;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A53 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142.presentationShapes),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D341 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A53.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.transform["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.transform["width"])),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D342 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A53.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.transform["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.transform["height"])),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100 = {
        id: generateRandomId(6),
        type: PageElementTypeEnum.Shape,
        transform: this._getCenteredTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141.pageWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141.pageHeight, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D341, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D342),
        shapeData: {
          shapeType: ShapeTypeEnum.SmartArt,
          smartArt: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142
        }
      };
    return this._insertElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100, "SmartArt") ? (setTimeout(() => {
      this._drawingStateService["selectDrawings"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141.subUnitId
      }, [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100.id], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100.id);
    }, 0), true) : false;
  }
  _insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465150) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465151 = this._getActiveSlideContext();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465151) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147.width ?? SLIDE_INSERT_DEFAULT_SIZE.shapeWidth,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147.height ?? SLIDE_INSERT_DEFAULT_SIZE.shapeHeight,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465154 = generateRandomId(6),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148 ? {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148.top,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148.height,
        rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148.rotation ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148.flipX,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148.flipY
      } : this._getCenteredTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465151.pageWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465151.pageHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465153),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103 = isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147.shapeType) ? {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465154,
        type: PageElementTypeEnum.Connector,
        transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102,
        connectorData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465150 ?? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F38(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147)
      } : {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465154,
        type: PageElementTypeEnum.Shape,
        transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102,
        shapeData: gb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147)
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147.text === undefined || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103.type === PageElementTypeEnum.Connector ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103 : applySlideElementPlainText(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147.text);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465155 || !this._insertElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147.nameBase) ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465149 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465149(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465154), true);
  }
  insertTextBox(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465165 = {}) {
    return this._insertTextBox(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465165);
  }
  insertRichTextBox(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465169 = this._getActiveSlideContext();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465169 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167.body) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168.dataStream)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465170 = applySlideElementTextDocument({
      id: generateRandomId(6),
      type: PageElementTypeEnum.Shape,
      transform: this._getCenteredTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465169.pageWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465169.pageHeight, SLIDE_INSERT_DEFAULT_SIZE.textBoxWidth, SLIDE_INSERT_DEFAULT_SIZE.textBoxHeight),
      shapeData: gb({
        shapeType: ShapeTypeEnum.Rect,
        horizontal: true,
        textWrap: ShapeTextWrapType.Square
      })
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465170 ? this._insertElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465170) : false;
  }
  insertTextBoxAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465177 = ShapeTextWrapType.None) {
    return this._insertTextBox(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465177);
  }
  _insertTextBox(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465183 = ShapeTextWrapType.None) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465184 = this._resolveTextBoxIsHorizontal(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185 = resolveSlideTextBoxDefaultSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465184),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.fitToContent && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.text ? xb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.text, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.fontSize, this._localeService) : undefined,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465182 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186 ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465182,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465182.left + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465182.width - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.width) / 2,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465182.top + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465182.height - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.height) / 2,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.height
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465182;
    return this._insertShape({
      shapeType: ShapeTypeEnum.Rect,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.width ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.height ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185.height,
      horizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465184,
      vertical: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465184,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.text,
      fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.fontSize,
      fitToContent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.fitToContent,
      textWrap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465183
    }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB106, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181.fitToContent || this._textEditingService["startInsertedTextBoxEditing"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009
      });
    });
  }
  insertTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465193 = {}) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465194 = this._getActiveSlideContext();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465194) return false;
    let {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465195,
        columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465196,
        columnWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197,
        rowHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465198
      } = resolveSlideTableBuildOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465193),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199 = generateRandomId(6);
    return this._commandService["syncExecuteCommand"](InsertSlideTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465194.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465194.subUnitId,
      createOptions: {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465195,
        columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465196,
        columnWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197,
        rowHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465198,
        options: {
          firstRow: true,
          bandRow: true
        }
      },
      element: {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199,
        transform: this._getCenteredTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465194.pageWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465194.pageHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465196 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465195 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465198)
      }
    }) ? (this._drawingStateService["selectDrawings"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465194.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465194.subUnitId
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199), true) : false;
  }
  insertTableSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208 = this._getActiveSlideContext();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207.rows["length"] === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207.columns["length"] === 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209 = generateRandomId(6),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210 = generateRandomId(6),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465211 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207.columns["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013.width, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465212 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207.rows["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.height ?? 24), 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213 = this._fitSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208.pageWidth * 0.8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208.pageHeight * 0.8),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214 = this._commandService["syncExecuteCommand"](InsertSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208.subUnitId,
        createOptions: {
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209,
          rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207.rows["length"],
          columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207.columns["length"],
          styleId: null
        },
        table: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207,
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209,
          rev: 0
        },
        element: {
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210,
          transform: this._getCenteredTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208.pageWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208.pageHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213.height)
        }
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214 && this._drawingStateService["selectDrawings"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465208.subUnitId
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214;
  }
  async insertImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224 = {}) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465226;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227 = this._getActiveSlideContext();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224.target && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224.target["unitId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.unitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224.target["subUnitId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.subUnitId) || !canEditSlideTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.unitId, [getSlidePagePermissionObjectId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.subUnitId)])) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465228 = await this.resolveImageSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465228 || !this._isActiveSlideContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227) || !canEditSlideTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.unitId, [getSlidePagePermissionObjectId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.subUnitId)])) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465229 = this._fitSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465228.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465228.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.pageWidth * SLIDE_INSERT_DEFAULT_SIZE.imageFitRatio, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.pageHeight * SLIDE_INSERT_DEFAULT_SIZE.imageFitRatio),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230 = this._getCenteredTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.pageWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.pageHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465229.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465229.height);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230.left += ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224.offset) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225.x) ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230.top += ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465226 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224.offset) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465226.y) ?? 0;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108 = {
      id: generateRandomId(6),
      type: PageElementTypeEnum.Image,
      source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465228.source,
      imageSourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465228.imageSourceType,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230
    };
    return this._insertElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108);
  }
  getActiveSlideTarget() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465239 = this._getActiveSlideContext();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465239 ? {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465239.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465239.subUnitId
    } : null;
  }
  async replaceSmartArtImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465242) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465243 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.unitId, UniverInstanceType.UNIVER_SLIDE),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465243 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465243.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.subUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465245 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465244 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465244.getData().elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.drawingId];
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465245 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465245.type) !== PageElementTypeEnum.Shape || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465245.shapeData)) return false;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55 = [getSlidePagePermissionObjectId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.subUnitId), getSlideElementPermissionObjectId(PageTypeEnum.Slide, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.drawingId)];
    if (!canEditSlideTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.unitId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465245.shapeData["smartArt"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465247 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465246 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465246.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.presentationShapeId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465246 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465247 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465247.role) !== SmartArtPresentationShapeRoleEnum.Image) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465248 = await this.resolveImageSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465242);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465248 || !canEditSlideTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.unitId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55) ? false : this._commandService["executeCommand"](UpdateSlideSmartArtCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.drawingId,
      operations: [{
        type: SmartArtOperationTypeEnum.ReplacePresentationImage,
        presentationShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465241.presentationShapeId,
        source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465248.source,
        sourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465248.imageSourceType
      }]
    });
  }
  async resolveImageSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257) {
    return this._resolveImageSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257);
  }
  _insertElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465261) {
    return this._commandService["syncExecuteCommand"](AddSlideElementCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465259.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465259.subUnitId,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465260,
      nameBase: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465261,
      focus: true
    });
  }
  _getActiveSlideContext() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265 = this._instanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_SLIDE),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265.pageManager["getActiveSlide"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465266) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465267 = xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265.getSnapshot().defaultPageSize);
    return {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265.getUnitId(),
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465266.getId(),
      pageWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465267.width,
      pageHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465267.height
    };
  }
  _isActiveSlideContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465271) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465272 = this._getActiveSlideContext();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465272 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465272.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465271.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465272.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465271.subUnitId;
  }
  _getCenteredTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278) {
    return {
      left: Math.max(SLIDE_INSERT_DEFAULT_SIZE.minPositionOffset, Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465275 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465277) / 2)),
      top: Math.max(SLIDE_INSERT_DEFAULT_SIZE.minPositionOffset, Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465276 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278) / 2)),
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465277,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278,
      rotation: 0
    };
  }
  _resolveTextBoxIsHorizontal(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465283) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465283.vertical === true ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465283.horizontal ?? true;
  }
  _fitSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465289 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465285) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465285 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465285 : SLIDE_INSERT_DEFAULT_SIZE.fallbackImageWidth,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465286) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465286 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465286 : SLIDE_INSERT_DEFAULT_SIZE.fallbackImageHeight,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D345 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465287 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290, 1);
    return {
      width: Math.max(SLIDE_INSERT_DEFAULT_SIZE.minImageEdge, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465289 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D345)),
      height: Math.max(SLIDE_INSERT_DEFAULT_SIZE.minImageEdge, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D345))
    };
  }
  async _resolveImageSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465297) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465298 = await svgImageFileToDataUrl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465297);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465298) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 = await getImageSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465298);
      return {
        source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465298,
        imageSourceType: ImageSourceType.BASE64,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016.height
      };
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465299 = await this._imageIoService["saveImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465297);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465299) return null;
    let {
        source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465300,
        imageSourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465301,
        base64Cache: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465299,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303 = await getImageSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465300 || "");
    return this._imageIoService["addImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303.image), {
      source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465300,
      imageSourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465301,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303.height
    };
  }
};
export { Sb as SlideInsertService };
