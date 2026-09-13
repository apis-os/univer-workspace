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
import { Vh, Xh, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F31, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F33, fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B803, yg, zh } from "./internal-core-endo.js";
import { ag } from "./slides-ui-islide-playback.js";
import { Tc } from "./slides-ui-plugin-config-key.js";
import { Rh } from "./slides-ui-slide-canvas-view.js";
import { fn_L2_core_endo_routine_async_O1_zalloc_nothrow_sigD23F1 } from "./slides-ui-slide-presentation-view.js";
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F32(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611708) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611708 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611708.length > 0;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611710, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611711, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611712) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611711 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611712 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611710 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611710.id) !== SetSlideSpeakerNotesCommand.id && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611710 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611710.id) !== SetSlideSpeakerNotesMutation.id) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611713 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611710.params;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611713 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611713.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611711 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611713.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611712;
}
function fn_L2_core_endo_routine_async_O1_zalloc_nothrow_sigD23F2() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611762 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611763 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611765 = useDependency(IMessageService),
    [, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611766] = useReducer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464675 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464675 + 1, 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611762.getCurrentTypeOfUnit$(UniverInstanceType.UNIVER_SLIDE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611762.getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE), undefined, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611762]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611768 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767.pageManager["activeSlideId$"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611769 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611768 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611768) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767.pageManager["getActiveSlide"](),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611767.getUnitId(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611769 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611769.getId(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611769 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611769.getData().speakerNotes,
    {
      handleBlur: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611773,
      handleFocus: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611774
    } = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F33(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611775 = useRef(false),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611777] = useState(false),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611778, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611779] = useState({
      slideId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771,
      speakerNotes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772,
      draft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772 ?? ""
    }),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB258 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611778.slideId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611778.speakerNotes === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611778.draft : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772 ?? "",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611780 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464676 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611779({
        slideId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771,
        speakerNotes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772,
        draft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464676
      });
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611781 = useCallback(() => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464678 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F31(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB258);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464678 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611763.executeCommand(SetSlideSpeakerNotesCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464678
      });
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611782 = useCallback(async () => {
      if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611775.current)) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611775.current = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611777(true);
        try {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611763.executeCommand(SetSlideSpeakerNotesCommand.id, {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771,
            speakerNotes: undefined
          });
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611765.show({
            type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 ? MessageType.Success : MessageType.Error,
            content: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 ? "slides-ui.presentation.speakerNotesCleared" : "slides-ui.presentation.speakerNotesClearFailed"),
            duration: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 ? 3000 : 5000
          });
        } catch {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611765.show({
            type: MessageType.Error,
            content: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764.t("slides-ui.presentation.speakerNotesClearFailed"),
            duration: 5000
          });
        } finally {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611775.current = false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611777(false);
        }
      }
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770]),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A188 = !fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B803(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB258);
  return useEffect(() => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611763.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866 => {
      fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611766();
    });
    return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464680.dispose();
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770]), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611770 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611771 || !fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F32(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611772) ? null : jsxs("div", {
    className: "univer-flex univer-h-28 univer-shrink-0 univer-flex-col univer-gap-1.5 univer-border-t univer-border-gray-200 univer-bg-gray-0 univer-px-4 univer-py-2 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    "data-u-comp": "slide-speaker-notes-display",
    children: [jsxs("div", {
      className: "univer-flex univer-h-6 univer-shrink-0 univer-items-center univer-justify-between univer-gap-2",
      children: [jsx("div", {
        className: "univer-text-xs univer-font-medium univer-text-gray-500 dark:!univer-text-gray-200",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764.t("slides-ui.presentation.speakerNotes")
      }), jsxs("div", {
        className: "univer-flex univer-items-center univer-gap-1.5",
        children: [jsx(Button, {
          type: "button",
          size: "small",
          variant: "default",
          disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611776,
          onClick: () => void var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611782(),
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764.t("slides-ui.presentation.speakerNotesClear")
        }), jsx(Button, {
          type: "button",
          size: "small",
          variant: "primary",
          disabled: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A188,
          onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611781,
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764.t("slides-ui.presentation.speakerNotesSave")
        })]
      })]
    }), jsx(Textarea, {
      className: "univer-min-h-0 univer-flex-1 univer-resize-none univer-bg-gray-50 univer-text-sm dark:!univer-bg-gray-800",
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764.t("slides-ui.presentation.speakerNotes"),
      value: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB258,
      placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611764.t("slides-ui.presentation.speakerNotesPlaceholder"),
      onBlur: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611773,
      onFocus: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611774,
      onValueChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611780
    })]
  });
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F35(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611805) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611804 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611805;
}
function ev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611809) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611808 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611809;
}
function tv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611812 = {}) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611813;
  let {
      embedMode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611814 = false
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611812,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611815 = useDependency(IConfigService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611816 = useDependency(yg),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611817 = useDependency(ag),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611818 = useDependency(Injector),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611819 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611815.getConfig(Tc),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611820 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611816.state$),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611821 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611817.state$),
    {
      slideModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611822,
      shouldRenderHostContent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611823
    } = Xh(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611824 = zh(),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A190 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611819 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611813 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611819.editor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611813.enabled) !== false,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A191 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611820 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611820.active) === true || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611821 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611821.active) === true,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611825 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611822 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611824 && iv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611824.slideModel["getUnitId"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611822.getUnitId()) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611824 : undefined;
  return ev(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A191, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611825) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611825 ? jsx(nv, {
    slideModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611825.slideModel,
    page: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611825.page
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611823 ? jsxs("div", {
    className: "univer-relative\x20univer-flex\x20univer-size-full\x20univer-flex-col\x20univer-overflow-hidden",
    children: [!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A191 && jsx("div", {
      className: "univer-relative univer-flex univer-min-h-0 univer-flex-1 univer-overflow-hidden",
      children: jsx(Rh, {
        embedMode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611814
      })
    }), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F35(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A190, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A191) && jsx(fn_L2_core_endo_routine_async_O1_zalloc_nothrow_sigD23F2, {}), jsx(fn_L2_core_endo_routine_async_O1_zalloc_nothrow_sigD23F1, {})]
  }) : null;
}
function nv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611840) {
  let {
      slideModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611841,
      page: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611842
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611840,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611843 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611844 = useDependency(Injector),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845 = getEmbedSlidesPageCustomData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611842),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611846 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611841.getUnitId(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611847 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845.hostAnchorId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611848 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845.embedId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611849 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845.childUnitId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611850 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611845.childType;
  return useEffect(() => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611843.current || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611848 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611847 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611849 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611850 == null) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464682 = Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611844);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464682) try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464682.mountPageList({
        hostElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611843.current,
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611846,
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611848,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611847,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611849,
        childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611850
      });
      return () => {
        rv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868);
      };
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      console.warn("[slides-ui] failed to mount embedded page-list block", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52);
    }
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611842.name]), jsx("div", {
    ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611843,
    "data-embed-slides-page-list-host": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611847,
    className: "univer-relative univer-size-full univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900"
  });
}
function rv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611862) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611862 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611862.dispose();
}
function iv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611866) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611865 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611866) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611867 = Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611864);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611867 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611867.listSessions().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684.childType === UniverInstanceType.UNIVER_SLIDE && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611866);
}
export { tv as SlideEditorContent };
