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
import { Om } from "./slides-ui-islide-drawing-state.js";
import { Ab, Av, BS, FS, Gb, IS, Kb, LS, MS, Mb, Mv, NS, OS, Ob, PS, Px, Qy, RS, SC, Xy, Yb, Zb, Zy, ab, cx, db, eb, fb, ib, id, jb, jv, kb, kx, lb, nb, nx, ob, qb, rx, sb, tb, tx, ub, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB287, yx, zS, zm } from "./internal-core-endo.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614829 } from "./slides-ui-islide-ruler-state.js";
import { fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37 } from "./slides-ui-with-slide-edit-permission.js";
import { cy, ly, uy } from "./slides-ui-slide-shape-ribbon-tab.js";
function Fx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613294) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613295 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613294.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613296 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613294.get(Om).getSnapshot();
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613296.context && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613296.selectedIds["length"] > 0) {
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465418,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465419
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613296.context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613295.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465419);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613296.selectedIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036);
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613295.getFocusDrawings();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613297.length) return [];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613297[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613295.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613298.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613298.subUnitId);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613297.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613299[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421.drawingId]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465422 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465422);
}
function Ix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613306) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613307;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613306.element["type"] !== PageElementTypeEnum.Shape) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613308 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613307 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613306.element["shapeData"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613307.shapeType;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613308 || !isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613308);
}
function Lx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613312) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613313 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613312.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613314 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613312.get(Om);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465423 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465424 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 = Fx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613312);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465423.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037.length !== 1 || !Ix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037[0]));
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A57 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613314.state$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465424), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613313.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465424), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613313.update$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465424), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613313.add$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465424), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613313.remove$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465424)];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465424(), () => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A57.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.unsubscribe());
  });
}
function Rx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613318) {
  return {
    id: kx.id,
    type: MenuItemType.SELECTOR,
    icon: "ShapeIcon",
    title: "slides-ui.ribbon.changeShape",
    tooltip: "slides-ui.ribbon.changeShape",
    slot: true,
    selections: [{
      label: {
        name: SHAPE_CHANGE_PICKER_COMPONENT,
        hoverable: false,
        selectable: false
      }
    }],
    hidden$: Lx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613318)
  };
}
function zx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613320) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613321;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613322 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613320.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613323 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613322.getFocusDrawings();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613323.length) return {
    hasFocus: false,
    drawingCount: 0,
    hasGroup: false,
    hasChart: false,
    hasTable: false,
    canGroup: false,
    canUngroup: false,
    canOpenShapePanel: false,
    canOpenTableSizeDialog: false,
    canFlip: false
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613324 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613322.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613323[0].unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613323[0].subUnitId),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613323.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465427 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613324[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465427.drawingId]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465428 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465428),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929954 = new Set([PageElementTypeEnum.Shape, PageElementTypeEnum.Image, PageElementTypeEnum.Group]),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A212 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465429 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465429.element["type"] === PageElementTypeEnum.Group),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A213 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465430 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465430.element["type"] === PageElementTypeEnum.Chart),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613325 = zm(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A214 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465431 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465431.element["type"] === PageElementTypeEnum.Placeholder),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A215 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465432 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929954.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465432.element["type"])),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A216 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.length > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465433 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465433.element["type"] === PageElementTypeEnum.Group),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A217 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.length >= 2 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A214 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A215,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A218 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.length > 0 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613325 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186[0] && [PageElementTypeEnum.Shape, PageElementTypeEnum.Image, PageElementTypeEnum.Group].includes(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186[0].element["type"]),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A219 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.length === 1 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613321 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613321.element["type"]) === PageElementTypeEnum.Table;
  return {
    hasFocus: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.length > 0,
    drawingCount: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.length,
    hasGroup: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A212,
    hasChart: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A213,
    hasTable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613325,
    canGroup: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A217,
    canUngroup: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A216,
    canOpenShapePanel: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A218,
    canOpenTableSizeDialog: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A219,
    canFlip: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.length > 0 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613325
  };
}
function Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613332) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613332.get(ISlideDrawingService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465434 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435 = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465434.next(zx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613332)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613333.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435(), () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436.unsubscribe();
  });
}
const Vx = "slide.contextmenu.arrange";
function Hx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613336) {
  return {
    id: Vx,
    type: MenuItemType.SUBITEMS,
    icon: "TopmostIcon",
    title: "slides-ui.image-panel.arrange.title",
    hidden$: Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613336).pipe(map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465440 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465440.hasFocus))
  };
}
function Ux() {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB266 = "slides-ui.image-panel.arrange.forward";
  return {
    id: ib.id,
    type: MenuItemType.BUTTON,
    icon: "MoveUpIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB266,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB266
  };
}
function Wx() {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB268 = "slides-ui.image-panel.arrange.backward";
  return {
    id: ab.id,
    type: MenuItemType.BUTTON,
    icon: "MoveDownIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB268,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB268
  };
}
function Gx() {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB270 = "slides-ui.image-panel.arrange.front";
  return {
    id: ob.id,
    type: MenuItemType.BUTTON,
    icon: "TopmostIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB270,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB270
  };
}
function Kx() {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB272 = "slides-ui.image-panel.arrange.back";
  return {
    id: sb.id,
    type: MenuItemType.BUTTON,
    icon: "BottomIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB272,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB272
  };
}
function qx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613338) {
  return {
    id: Xy.id,
    type: MenuItemType.BUTTON,
    title: "slides-ui.contextmenu.shapePanel",
    icon: "ShapeFormatSettingIcon",
    hidden$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465441 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465442 = Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613338).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465441.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039.hasFocus || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039.hasChart));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465442.unsubscribe();
    }),
    disabled$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465446 = Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613338).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040.canOpenShapePanel));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465446.unsubscribe();
    })
  };
}
function Jx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613340) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB274 = "slides-ui.contextmenu.backgroundPanel";
  return {
    id: Zy.id,
    type: MenuItemType.BUTTON,
    icon: "PaintIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB274,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB274,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613340, UniverInstanceType.UNIVER_SLIDE)
  };
}
function Yx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613342) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB276 = "slides-ui.contextmenu.transitionPanel";
  return {
    id: Qy.id,
    type: MenuItemType.BUTTON,
    icon: "TransitionsIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB276,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB276,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613342, UniverInstanceType.UNIVER_SLIDE)
  };
}
function Xx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613344) {
  return {
    id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB287.id,
    type: MenuItemType.BUTTON,
    icon: "ObjectLayersIcon",
    title: "slides-ui.objectListPanel.open",
    tooltip: "slides-ui.objectListPanel.open",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613344, UniverInstanceType.UNIVER_SLIDE)
  };
}
function Zx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613346) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB278 = "slides-ui.contextmenu.speakerNotes";
  return {
    id: eb.id,
    type: MenuItemType.BUTTON,
    icon: "StickyNoteIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB278,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB278,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613346, UniverInstanceType.UNIVER_SLIDE)
  };
}
function Qx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613348) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613349 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613348.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614829);
  return {
    id: tb.id,
    type: MenuItemType.BUTTON,
    icon: "RulerIcon",
    title: "slides-ui.contextmenu.ruler",
    tooltip: "slides-ui.contextmenu.ruler",
    activated$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613349.visible$,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613348, UniverInstanceType.UNIVER_SLIDE)
  };
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF115(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613352) {
  return {
    id: nb.id,
    type: MenuItemType.BUTTON,
    icon: "TableIcon",
    title: "slides-ui.tableSizePicker.title",
    hidden$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465450 = Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613352).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041.canOpenTableSizeDialog));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465450.unsubscribe();
    })
  };
}
function eS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613354) {
  return {
    id: lb.id,
    type: MenuItemType.BUTTON,
    title: "slides-ui.contextmenu.flipHorizontal",
    icon: "FlipHorizontalIcon",
    tooltip: "slides-ui.contextmenu.flipHorizontal",
    disabled$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454 = Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613354).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461042 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461042.canFlip));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454.unsubscribe();
    })
  };
}
function tS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613356) {
  return {
    id: ub.id,
    type: MenuItemType.BUTTON,
    title: "slides-ui.contextmenu.flipVertical",
    icon: "FlipVerticalIcon",
    tooltip: "slides-ui.contextmenu.flipVertical",
    disabled$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465457 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465458 = Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613356).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465457.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043.canFlip));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465458.unsubscribe();
    })
  };
}
function nS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613358) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB280 = "slides-ui.contextmenu.group";
  return {
    id: db.id,
    type: MenuItemType.BUTTON,
    icon: "GroupIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB280,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB280,
    disabled$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465461 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 = Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613358).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465461.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044.canGroup));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462.unsubscribe();
    })
  };
}
function rS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613360) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB282 = "slides-ui.contextmenu.ungroup";
  return {
    id: fb.id,
    type: MenuItemType.BUTTON,
    icon: "UngroupIcon",
    title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB282,
    tooltip: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB282,
    disabled$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465465 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465466 = Bx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613360).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465465.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045.canUngroup));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465466.unsubscribe();
    })
  };
}
const iS = "slide.menu.zoom-ratio",
  aS = [{
    value: SlidePageSizePresetEnum.WideScreen16By9,
    label: "slides-ui.display.widescreen"
  }, {
    value: SlidePageSizePresetEnum.Standard4By3,
    label: "slides-ui.display.standard"
  }];
function oS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613362) {
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613362 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613362.width) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613362.height) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D843 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613362.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613362.height;
  if (Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D843 - 16 / 9) < 0.000001) return SlidePageSizePresetEnum.WideScreen16By9;
  if (Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D843 - 4 / 3) < 0.000001) return SlidePageSizePresetEnum.Standard4By3;
}
function sS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613364) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613365 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613364.get(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613366 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613364.get(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613367 = new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465470 = () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469.next(oS((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613366.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.getSnapshot().defaultPageSize));
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465471 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613366.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SLIDE).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465470),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465472 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613365.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048.id === SetSlidePageSizeMutation.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465470();
        });
      return () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465471.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465472.dispose();
      };
    }).pipe(distinctUntilChanged());
  return {
    id: SetSlidePageSizeCommand.id,
    type: MenuItemType.SELECTOR,
    icon: "OneToOneIcon",
    title: "slides-ui.display.slideSize",
    tooltip: "slides-ui.display.slideSize",
    selectionsCommandId: SetSlidePageSizeCommand.id,
    selections: aS.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477,
      params: () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613366.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477.value ? {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.getUnitId(),
          pageId: undefined,
          pageSize: {
            preset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477.value
          }
        } : undefined;
      }
    })),
    value$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613367,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613364, UniverInstanceType.UNIVER_SLIDE)
  };
}
function cS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613372) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613373 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613372.get(ILayoutService).rootContainerElement,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613374 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613373 ? mergeLocal(of1(null), fromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613373.ownerDocument, "fullscreenchange")).pipe(map(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613373.ownerDocument["fullscreenElement"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613373), distinctUntilChanged()) : of1(false);
  return {
    id: ToggleFullscreenOperation.id,
    type: MenuItemType.BUTTON,
    title: "slides-ui.display.fullscreen",
    tooltip: "slides-ui.display.fullscreen",
    icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613374.pipe(map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465478 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465478 ? "ShrinkIcon" : "ExpandIcon")),
    activated$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613374,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613372, UniverInstanceType.UNIVER_SLIDE)
  };
}
function lS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613378) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613379 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613378.get(IUniverInstanceService).getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SLIDE).pipe(switchMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465479 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465479 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465479.zoomRatio$) ?? of1(1)), map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465480 => Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465480 * 100)), distinctUntilChanged());
  return {
    id: iS,
    type: MenuItemType.BUTTON,
    label: {
      name: Av,
      props: {
        min: Mv[0],
        max: Mv[1],
        shortcuts: jv
      }
    },
    value$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613379,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613378, UniverInstanceType.UNIVER_SLIDE)
  };
}
const uS = "slide.menu.insert.text",
  dS = "slide.menu.insert.image",
  fS = "slide.menu.insert.table",
  pS = "slide.menu.insert.shape",
  mS = "slide.menu.insert.smart-art",
  hS = "slide.menu.insert.symbol",
  gS = "slide.menu.insert.emoji";
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF116(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613386) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613383,
    type: MenuItemType.SELECTOR,
    icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613384,
    tooltip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613385,
    slot: true,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613382, UniverInstanceType.UNIVER_SLIDE),
    selections: [{
      label: {
        name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613386,
        hoverable: false,
        selectable: false
      }
    }]
  };
}
const vS = [{
  label: "slides-ui.insertToolbar.textHorizontal",
  icon: "ShapeRectTextboxHorizontalIcon",
  value: "horizontal"
}, {
  label: "slides-ui.insertToolbar.textVertical",
  icon: "ShapeRectTextboxVerticalIcon",
  value: "vertical"
}];
function yS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613392) {
  return {
    id: uS,
    type: MenuItemType.SELECTOR,
    icon: "TextIcon",
    tooltip: "slides-ui.insertToolbar.text",
    selectionsCommandId: Kb.id,
    selections: vS,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613392, UniverInstanceType.UNIVER_SLIDE)
  };
}
function bS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613394) {
  return {
    id: dS,
    commandId: Yb.id,
    type: MenuItemType.BUTTON,
    icon: "AddImageIcon",
    tooltip: "slides-ui.insertToolbar.image",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613394, UniverInstanceType.UNIVER_SLIDE)
  };
}
function xS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613396) {
  return fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF116(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613396, fS, "TableIcon", "slides-ui.insertToolbar.table", Ob);
}
function SS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613398) {
  return {
    ...fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF116(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613398, pS, "ShapeIcon", "slides-ui.insertToolbar.shape", kb),
    selectionsCommandId: qb.id
  };
}
function CS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613400) {
  return {
    ...fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF116(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613400, mS, "SmartArtIcon", "slides-ui.insertToolbar.smartArt", Ab),
    selectionsCommandId: Gb.id
  };
}
function wS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613402) {
  return {
    id: Zb.id,
    commandId: Zb.id,
    type: MenuItemType.BUTTON,
    icon: "ChartIcon",
    tooltip: "slides-ui.insertToolbar.chart",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613402, UniverInstanceType.UNIVER_SLIDE)
  };
}
function TS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613408) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613405,
    type: MenuItemType.SELECTOR,
    icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613406,
    tooltip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613407,
    slot: true,
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613404, UniverInstanceType.UNIVER_SLIDE),
    selectionsCommandId: Kb.id,
    selections: [{
      label: {
        name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613408,
        hoverable: false,
        selectable: false
      },
      params: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465481 => ({
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465481,
        fontSize: 18,
        fitToContent: true
      })
    }]
  };
}
function ES(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613414) {
  return TS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613414, hS, "SymbolsIcon", "slides-ui.insertToolbar.symbol", jb);
}
function DS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613416) {
  return TS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613416, gS, "SmileIcon", "slides-ui.insertToolbar.emoji", Mb);
}
function AS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613430) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613430.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613432 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613430.get(Om);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052 = nx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613432),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053 = rx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052 : tx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613431));
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053);
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613432.state$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613431.update$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613431.add$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613431.remove$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486)];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486(), () => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.unsubscribe());
  });
}
function jS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613436) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613437 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613436.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613436.get(Om),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613439 = new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465489 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490 = () => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056 = nx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613438),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057 = rx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056 : tx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613437));
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465489.next(cx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057) ?? "");
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A61 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613438.state$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613437.update$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613437.add$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613437.remove$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490)];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490(), () => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A61.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.unsubscribe());
    });
  return {
    id: yx.id,
    type: MenuItemType.SELECTOR,
    icon: "PaintIcon",
    title: "slides-ui.quickStyles.tooltip",
    tooltip: "slides-ui.quickStyles.tooltip",
    selections: [{
      label: {
        name: OS,
        hoverable: false,
        selectable: false
      }
    }],
    value$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613439,
    hidden$: AS(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613436)
  };
}
const tC = "slide.ribbon.shape-format.style-control",
  nC = "slide.ribbon.shape-format.effects-control",
  rC = "slide.ribbon.shape-format.text-control",
  iC = "slide.ribbon.shape-format.text-effects-control",
  aC = "slide.ribbon.shape-format.formula-control",
  oC = "slide.ribbon.smart-art.create-control",
  sC = "slide.ribbon.smart-art.layout-control",
  cC = "slide.ribbon.smart-art.style-control",
  lC = "slide.ribbon.smart-art.reset-control";
function uC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613517 = false) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613516.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613519 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613516.get(Om);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465544 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465545 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066 = nx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613519),
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A31 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066.length || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.element["type"] !== PageElementTypeEnum.Shape),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066[0],
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066.length === 1 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067.element["type"]) === PageElementTypeEnum.Shape && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067.element["shapeData"].formulaBinding != null;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465544.next(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A31 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613517 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32);
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A67 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613519.state$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465545), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613518.update$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465545), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613518.add$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465545), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613518.remove$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465545)];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465545(), () => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A67.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.unsubscribe());
  });
}
function dC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613524) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613525 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613524.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613526 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613524.get(Om);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465548 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070 = nx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613526),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070.length === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070[0] : undefined;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465548.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.element["type"] !== PageElementTypeEnum.Shape || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.element["shapeData"]));
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A69 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613526.state$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613525.update$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613525.add$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613525.remove$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549)];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549(), () => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A69.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.unsubscribe());
  });
}
function fC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613530) {
  return {
    id: tC,
    type: MenuItemType.BUTTON,
    label: {
      name: MS,
      hoverable: false,
      selectable: false
    },
    hidden$: uC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613530)
  };
}
function pC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613532) {
  return {
    id: nC,
    type: MenuItemType.BUTTON,
    label: {
      name: NS,
      hoverable: false,
      selectable: false
    },
    hidden$: uC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613532)
  };
}
function mC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613534) {
  return {
    id: rC,
    type: MenuItemType.BUTTON,
    label: {
      name: PS,
      hoverable: false,
      selectable: false
    },
    hidden$: uC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613534)
  };
}
function hC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613536) {
  return {
    id: iC,
    type: MenuItemType.BUTTON,
    label: {
      name: FS,
      hoverable: false,
      selectable: false
    },
    hidden$: uC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613536)
  };
}
function gC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613538) {
  return {
    id: aC,
    type: MenuItemType.BUTTON,
    label: {
      name: IS,
      hoverable: false,
      selectable: false
    },
    hidden$: uC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613538, true)
  };
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF117(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613542) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613541,
    type: MenuItemType.BUTTON,
    label: {
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613542,
      hoverable: false,
      selectable: false
    },
    hidden$: dC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613540)
  };
}
function vC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613546) {
  return fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF117(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613546, oC, LS);
}
function yC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613548) {
  return fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF117(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613548, sC, RS);
}
function bC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613550) {
  return fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF117(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613550, cC, zS);
}
function xC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613552) {
  return fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF117(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613552, lC, BS);
}
function TC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613576) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613577 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613576.get(IUniverInstanceService);
  return {
    id: Px.id,
    type: MenuItemType.SELECTOR,
    icon: "SlideshowThemeIcon",
    title: "slides-ui.themePicker.title",
    tooltip: "slides-ui.themePicker.tooltip",
    selections: [{
      label: {
        name: SC,
        hoverable: false,
        selectable: false
      }
    }],
    value$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465557 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613577.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465558) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465557.next("");
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465558.theme["data$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465557.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074.id ?? "office");
      });
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465559.unsubscribe();
    }),
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613576, UniverInstanceType.UNIVER_SLIDE)
  };
}
const EC = {
    [RibbonPosition.START]: {
      [RibbonStartGroup.FORMAT]: {
        [Px.id]: {
          order: 0,
          gridLayout: {
            row: 1,
            column: 1,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(TC)
        },
        [Qy.id]: {
          order: 1,
          gridLayout: {
            row: 1,
            column: 2,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Yx)
        },
        [Zy.id]: {
          order: 2,
          gridLayout: {
            row: 1,
            column: 3
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Jx)
        },
        [eb.id]: {
          order: 3,
          gridLayout: {
            row: 2,
            column: 3
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Zx)
        }
      },
      [RibbonStartGroup.LAYOUT]: {
        [uS]: {
          order: 0,
          gridLayout: {
            row: 1,
            column: 1,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(yS)
        },
        [pS]: {
          order: 1,
          gridLayout: {
            row: 1,
            column: 2,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(SS)
        },
        [mS]: {
          order: 2,
          gridLayout: {
            row: 1,
            column: 3,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(CS)
        },
        [Zb.id]: {
          order: 3,
          gridLayout: {
            row: 1,
            column: 4,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(wS)
        },
        [dS]: {
          order: 4,
          gridLayout: {
            row: 1,
            column: 5
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(bS)
        },
        [fS]: {
          order: 5,
          gridLayout: {
            row: 2,
            column: 5
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(xS)
        },
        [hS]: {
          order: 6,
          gridLayout: {
            row: 1,
            column: 6
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(ES)
        },
        [gS]: {
          order: 7,
          gridLayout: {
            row: 2,
            column: 6
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(DS)
        }
      },
      [RibbonStartGroup.OTHERS]: {
        [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB287.id]: {
          order: 0.1,
          gridLayout: {
            row: 1,
            column: 1,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: Xx
        }
      }
    },
    [RibbonPosition.VIEW]: {
      [RibbonViewGroup.DISPLAY]: {
        [SetSlidePageSizeCommand.id]: {
          order: 0,
          gridLayout: {
            row: 1,
            column: 1,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(sS)
        },
        [iS]: {
          order: 1,
          gridLayout: {
            row: 1,
            column: 2,
            width: 112
          },
          menuItemFactory: lS
        },
        [ToggleFullscreenOperation.id]: {
          order: 2,
          gridLayout: {
            row: 2,
            column: 2,
            showLabel: true,
            width: 112
          },
          menuItemFactory: cS
        }
      },
      [RibbonViewGroup.VISIBILITY]: {
        [tb.id]: {
          order: 0,
          gridLayout: {
            row: 1,
            column: 1,
            rowSpan: 2,
            showLabel: true
          },
          menuItemFactory: Qx
        }
      }
    }
  },
  DC = {
    "slide.contextMenu.drawing": {
      [ContextMenuGroup.OTHERS]: {
        [Xy.id]: {
          order: 1,
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(qx)
        },
        [lb.id]: {
          order: 3,
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(eS)
        },
        [ub.id]: {
          order: 4,
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(tS)
        },
        [nb.id]: {
          order: 5,
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF115)
        },
        [db.id]: {
          order: 6,
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(nS)
        },
        [fb.id]: {
          order: 7,
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(rS)
        },
        [Vx]: {
          order: 8,
          menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Hx),
          [ob.id]: {
            order: 0,
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Gx)
          },
          [ib.id]: {
            order: 1,
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Ux)
          },
          [sb.id]: {
            order: 2,
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Kx)
          },
          [ab.id]: {
            order: 3,
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Wx)
          }
        }
      }
    }
  },
  OC = {
    [MenuManagerPosition.RIBBON]: {
      [cy]: {
        order: 100,
        contextual: true,
        "slides-ui.ribbon.shapeFormat.quickStyles": {
          order: 0,
          [yx.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(jS)
          },
          [kx.id]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1,
              showLabel: true
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Rx)
          }
        },
        "slides-ui.ribbon.shapeFormat.shapeStyle": {
          order: 1,
          [tC]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 120
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(fC)
          },
          [nC]: {
            order: 1,
            gridLayout: {
              row: 1,
              column: 2,
              rowSpan: 2,
              width: 112
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(pC)
          }
        },
        "slides-ui.ribbon.shapeFormat.text": {
          order: 2,
          [rC]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 344
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(mC)
          },
          [iC]: {
            order: 1,
            gridLayout: {
              row: 1,
              column: 2,
              rowSpan: 2,
              width: 112
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(hC)
          }
        },
        "slides-ui.ribbon.shapeFormat.arrange": {
          order: 3,
          [ib.id]: {
            order: 2,
            gridLayout: {
              row: 1,
              column: 2
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Ux)
          },
          [ab.id]: {
            order: 3,
            gridLayout: {
              row: 2,
              column: 2
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Wx)
          },
          [ob.id]: {
            order: 4,
            gridLayout: {
              row: 1,
              column: 3
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Gx)
          },
          [sb.id]: {
            order: 5,
            gridLayout: {
              row: 2,
              column: 3
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(Kx)
          },
          [db.id]: {
            order: 6,
            gridLayout: {
              row: 1,
              column: 4
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(nS)
          },
          [fb.id]: {
            order: 7,
            gridLayout: {
              row: 2,
              column: 4
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(rS)
          },
          [lb.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(eS)
          },
          [ub.id]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(tS)
          }
        },
        [ly]: {
          order: 5,
          [Xy.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(qx)
          },
          [ToggleShapeFloatingToolbarOperation.id]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1,
              showLabel: true
            },
            menuItemFactory: ShapeFloatingToolbarToggleFactory
          }
        },
        "slides-ui.ribbon.shapeFormat.formula": {
          order: 4,
          [aC]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 120
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(gC)
          }
        }
      },
      [uy]: {
        order: 99,
        contextual: true,
        "shape-editor-ui.smartArt.createGraphic": {
          order: 0,
          [oC]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(vC)
          }
        },
        "shape-editor-ui.smartArt.layoutGroup": {
          order: 1,
          [sC]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(yC)
          }
        },
        "shape-editor-ui.smartArt.styleGroup": {
          order: 2,
          [cC]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(bC)
          }
        },
        "shape-editor-ui.smartArt.resetGroup": {
          order: 3,
          [lC]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2
            },
            menuItemFactory: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(xC)
          }
        }
      }
    }
  };
export { EC as slideRibbonSchema };
export { DC, OC };
