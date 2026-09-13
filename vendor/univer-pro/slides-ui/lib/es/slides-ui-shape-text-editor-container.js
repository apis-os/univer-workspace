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
import { Jl, Pd, Rf, Ul, Yf, ip } from "./internal-core-endo.js";
import { sm } from "./slides-ui-slide-main-viewport-key.js";
import { Pf } from "./slides-ui-drawing-okey.js";
const Sv = memo(() => {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612092 = useDependency(ip),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093 = useDependency(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612094 = useDependency(IRenderManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612095 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612096 = useDependency(ThemeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612097 = useMemo(() => Tv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612092, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612094.getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.engine).getCanvasElement) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.focus({
            preventScroll: true
          });
        });
      });
    }), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612092]);
  return jsx(ShapeTextEditorContainer, {
    adapter: useMemo(() => ({
      getShapeModel: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906
        });
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908) return null;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909 = Cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612092, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909.shapeType ?? ShapeTypeEnum.Rect, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906 + ":smart-art-editor", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909);
          return {
            getShapeTextData: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909.shapeText,
            getShapeTextRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.updateContext({
              width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.width,
              height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.height
            }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.getShapeTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644))
          };
        }
        return Ev({
          drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
          renderManagerService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612094,
          themeData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612095.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904, UniverInstanceType.UNIVER_SLIDE)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.getThemeDataForPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905),
          resolveThemeColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612096.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186)
        });
      },
      getShapeData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918
        });
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 ? Cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612092, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.element["type"] === PageElementTypeEnum.Shape ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.element["shapeData"] : null) : null;
      },
      getDrawingTransform: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926
        });
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.transform) ?? null;
      },
      updateShapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612092.updateShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932);
      },
      updateHostSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612092.updatePlainTextShapeHostSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934);
      },
      allowHostSizeShrink: ({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938
      }) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938
        });
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939.element["type"] === PageElementTypeEnum.Text ? shouldAllowShapeTextEditorHostSizeShrink(null, {
          textLike: true
        }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939.element["type"] === PageElementTypeEnum.Shape && shouldAllowShapeTextEditorHostSizeShrink(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939.element["shapeData"]) : false;
      },
      deferHostSizeUpdateDuringEditing: ({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946
      }) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946
        });
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947.element["type"] === PageElementTypeEnum.Text || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947.element["type"] === PageElementTypeEnum.Shape && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947.element["shapeData"].isTextBox === true : false;
      },
      commitOnEscape: () => true
    }), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612092, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612096]),
    editingService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612097,
    editorUnitId: Rf,
    positionOptions: useMemo(() => ({
      viewportKeys: {
        main: sm
      },
      getHostTransform: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.smartArtPresentationShapeId) return null;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093.getDrawingByParam({
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.subUnitId,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.shapeId
          }),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.scene["getObject"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.shapeKey);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 ? wv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.smartArtPresentationShapeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956 instanceof Pd ? {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.left,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.top,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.height,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.angle,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.flipX,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.flipY,
          scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.scaleX,
          scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.scaleY
        } : undefined) : null;
      }
    }), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612093])
  });
});
function Cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612105) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612104.getEditing();
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612106 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612106.smartArtPresentationShapeId) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612106.shapeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612105.drawingId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612105.element["type"] !== PageElementTypeEnum.Shape || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612105.element["shapeData"])) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612107 = resolveSmartArtPresentationShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612105.element["shapeData"].smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612106.smartArtPresentationShapeId);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612107 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612107.shapeText ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612107 : null;
}
function wv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612112.element["type"] !== PageElementTypeEnum.Shape || !isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612112.element["shapeData"])) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612112.element["shapeData"].smartArt["presentationShapes"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612113];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612115) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612112.element["transform"],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D797 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.left ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D798 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.top) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.top ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D799 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.width ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D800 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.height ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D801 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.angle) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.rotation ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117 = resolveSmartArtPresentationTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612112.element["shapeData"].smartArt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612115.transform, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D799, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D800),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB262 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D797 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D799 / 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB263 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D798 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D800 / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D802 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117.width / 2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D799 / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D803 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117.height / 2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D800 / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D804 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D801 * Math.PI / 180,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D805 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D802 * Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D804) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D803 * Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D804),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D806 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D802 * Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D804) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D803 * Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D804);
  return {
    left: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB262 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D805 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117.width / 2,
    top: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB263 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D806 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117.height / 2,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117.width,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612117.height,
    angle: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D801,
    flipX: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.flipX) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.flipX,
    flipY: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.flipY) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.flipY,
    scaleX: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.scaleX) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.scaleX,
    scaleY: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.scaleY) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.scaleY,
    skewX: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.skewX) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.skewX,
    skewY: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612114.skewY) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612116.skewY
  };
}
function Tv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612125) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 = null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612127 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.editingParams$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.visible && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851.unitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851.subUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.shapeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851.shapeId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.shapeKey !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851.shapeKey)) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 = null;
          return;
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962 === null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612125(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851.unitId));
      });
    };
  return {
    editingParams$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.editingParams$,
    onSavingEditorData$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.onSavingEditorData$,
    setEditing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464853 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464853) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.setEditing(null);
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464854 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.getEditing();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464854 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.setEditing({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464854,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464853
      });
    },
    completeEditing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464857 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464858 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.getEditing();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464857 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612126 = null) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464858 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464858.visible && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612127(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464858), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.completeEditing();
    },
    cancelEditing: () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464861 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.getEditing();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464861 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464861.visible && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612127(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464861), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612124.cancelEditing();
    }
  };
}
function Ev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612132) {
  let {
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612133,
      renderManagerService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612134,
      resolveThemeColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612135,
      themeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612136
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612132,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612137 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612134.getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612133.unitId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612138 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612137 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612137.scene["getObject"](Pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612133.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612133.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612133.drawingId));
  return {
    getShapeTextData: () => Dv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612135),
    getShapeTextRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612138 instanceof Pd ? normalizeShapeTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612138.getTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612138 instanceof Jl ? normalizeShapeTextRect(Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863) : {
      left: 0,
      top: 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.height
    }
  };
}
function Dv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612148) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612149;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612150 = Yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612146, Rf, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612148),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612151 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612150.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612149.renderConfig,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB244 = {
      doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612150,
      va: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612151 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612151.verticalAlign) ?? VerticalAlign.TOP,
      ha: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612151 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612151.horizontalAlign) ?? HorizontalAlign.LEFT
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612152 = kv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612146);
  return {
    ...Ov(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612150),
    isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612152,
    text: slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612150),
    dataModel: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB244
  };
}
function Ov(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612161) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612160.element;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.type === PageElementTypeEnum.Shape) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.shapeData["shapeText"] ?? {};
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.type === PageElementTypeEnum.Text) return {
    isHorizontal: true,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.text ?? slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612161),
    dataModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.textData ? {
      doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.textData
    } : undefined
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.type === PageElementTypeEnum.Placeholder) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612163;
    return {
      isHorizontal: true,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.text ?? slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612161),
      dataModel: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.placeholder["textConfig"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612163.textData ? {
        doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612162.placeholder["textConfig"].textData
      } : undefined
    };
  }
  return {};
}
function kv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612168) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612168.element;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612169.type === PageElementTypeEnum.Shape) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612170;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612170 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612169.shapeData["shapeText"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612170.isHorizontal) !== false;
  }
  return true;
}
export { Sv as ShapeTextEditorContainer };
