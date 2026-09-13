import { FormulaShapeAnimationController, SHAPE_CHANGE_PICKER_COMPONENT, SHAPE_EDITOR_TRANSFORMER_CONFIG, SHEET_DOC_SHAPE_FLOATING_TOOLBAR_TOP_OFFSET, ShapeEditPanel, ShapeFloatingToolbar, ShapeFloatingToolbarService, ShapeFloatingToolbarToggleFactory, ShapeFormulaRibbonControl, ShapeGroupEnum, ShapePickerDropdown, ShapePickerPanel, ShapeQuickStyleGallery, ShapeStyleRibbonControl, ShapeTextEditorContainer, ShapeTextFloatMenuRenderControllerBase, ShapeTextFloatToolbar, ShapeTextHyperLinkPopupService, ShapeTextRibbonControl, ToggleShapeFloatingToolbarOperation, UniverShapeEditorUIPlugin, activateDrawingObject, bindRenderTransformerLifecycle, buildShapeTextDataUpdate, clearActiveDrawingObjects, drawFormulaShapeAnimationLayers, getDrawingTypeNameKey, getTextModel, getTextStyle, normalizeShapeTextModel, plainShapeTextToDocumentData, prepareShapeTextDocumentData, resolveFormulaShapeAutoFitSize, resolveShapeContextualRibbonHostMode, resolveShapeTextDocumentRenderLayout, resolveShapeTextEditorBehaviorShapeData, resolveShapeTextEditorWrapStrategy, shouldAllowShapeTextEditorHostSizeShrink, shouldClipShapeTextDocument, useFormulaShapeToolbar } from "@univerjs-pro/shape-editor-ui";
import { DOCS_COMPONENT_MAIN_LAYER_INDEX, DOC_CONTENT_INSERT_MENU_ID, DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID, DOC_PARAGRAPH_T_INSERT_MENU_ID, DocCanvasPopManagerService, DocEventManagerService, DocLayoutInteractionService, DocParagraphMenuService, DocPrintInterceptorService, DocRenderController, DocSelectionRenderService, EMPTY_PARAGRAPH_MENU_ID, INSERT_BELLOW_MENU_ID, UniverDocsUIPlugin, VIEWPORT_KEY } from "@univerjs/docs-ui";
import { BuiltInUIPart, ComponentManager, ContextMenuGroup, ContextMenuPosition, FloatingObjectToolbarPosition, IMenuManagerService, IRibbonService, ISidebarService, IUIPartsService, IconManager, MenuItemType, MenuManagerPosition, RibbonInsertGroup, connectInjector, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { DEFAULT_DOC_SHAPE_HEIGHT, DEFAULT_DOC_SHAPE_WIDTH, DocShapeAnchorPosition, DocsShapeService, InsertDocShapeCommand, UniverDocsShapePlugin, UpdateDocDrawingMetadataCommand, UpdateDocShapeDataCommand, UpdateDocShapeDataMutation } from "@univerjs-pro/docs-shape";
import { ImageSourceTypeEnum, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeDefaultConfig, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeRenderModeEnum, ShapeTypeEnum, isConnectorShape } from "@univerjs-pro/engine-shape";
import { ShapeFormulaService, UniverShapeEditorPlugin, applyQuickStyleToShapeData, cloneShapeDataForType, createShapeFormulaDocument, createShapeTextBoxShapeData, getShapeQuickStylePreset, getShapeQuickStyleType, resolveActiveShapeQuickStylePresetId } from "@univerjs-pro/shape-editor";
import { ArrangeTypeEnum, BooleanNumber, CommandType, DependentOn, Disposable, DisposableCollection, DocumentDataModel, DrawingTypeEnum, FOCUSING_COMMON_DRAWINGS, FOCUSING_SHAPE_TEXT_EDITOR, HorizontalAlign, ICommandService, IConfigService, IContextService, IImageIoService, IPermissionService, IURLImageService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, PositionedObjectLayoutType, UniverInstanceType, VerticalAlign, createInternalEditorID, generateRandomId, getParagraphContentStartOffset, merge, registerDependencies, toDisposable, touchDependencies } from "@univerjs/core";
import { DocInterceptorService, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, canEditDocumentTargets, getDocumentDrawingSegmentId, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { IDocDrawingService, RemoveDocDrawingCommand, SetDocDrawingArrangeCommand, TextWrappingStyle, UpdateDocDrawingWrappingStyleCommand, UpdateDrawingDocTransformCommand } from "@univerjs/docs-drawing";
import { CURSOR_TYPE, Circle, DRAWING_OBJECT_LAYER_INDEX, DocumentSkeleton, DocumentViewModel, Documents, IRenderManagerService, RENDER_CLASS_TYPE, Shape, Transform, UniverRenderEnginePlugin, Vector2 } from "@univerjs/engine-render";
import { IDrawingManagerService, SetDrawingSelectedOperation, UniverDrawingPlugin, getDrawingShapeKeyByDrawingSearch } from "@univerjs/drawing";
import { DrawingCommonPanel, DrawingImageClipService, IMAGE_CLIP_SHAPE_PICKER_COMPONENT, OBJECT_LIST_FLOATING_SECTION_ID, ObjectListPanelBase, UniverDrawingUIPlugin, getObjectListPanelLabels, getObjectListPanelSectionIdForDrawingType, getObjectListPanelTypeName, insertGroupObject } from "@univerjs/drawing-ui";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { BehaviorSubject, Observable, distinctUntilChanged, map, merge as mergeLocal, startWith } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DocDrawingPosition, DocDrawingTextWrap, UniverDocsDrawingUIPlugin } from "@univerjs/docs-drawing-ui";
import { BottomIcon, MoveDownIcon, MoveUpIcon, ObjectLayersIcon, ShapeFormatSettingIcon, TextWrapShapeIcon, TopmostIcon } from "@univerjs/icons";
import { memo, useEffect, useMemo, useReducer, useState } from "react";
import { Cr, G, Jn, Qn, Sr, Xn, Yn, Zn, ar, br, er, nr, or, rr, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26, vr, xr, yr } from "./internal-core-endo.js";
import { ni, ri } from "./docs-shape-ui-docs-shape-uimenu-schema.js";
let ir = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310) {
    super(), this._clipService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, this._registerImageShapeClipDelegate(), this._clipService["setCanUseShapeClip"](true), this.disposeWithMe({
      dispose: () => this._clipService["setCanUseShapeClip"](false)
    });
  }
  _registerImageShapeClipDelegate() {
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = this._clipService["registerClipDelegate"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 === ShapeTypeEnum.None || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 === "custom") return false;
        try {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679);
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, "clip-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.clearAdjustValue(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682).length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.setShapeData({
            adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682
          }, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.updateContext({
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680,
            height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.buildClipPath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, {
            left: 0,
            top: 0,
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680,
            height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681
          });
        } catch {
          return false;
        }
      });
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313), this.disposeWithMe({
      dispose: () => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.clear()
    });
  }
  clipByShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = this._drawingManagerService["getDrawingData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316)[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317];
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.drawingType !== DrawingTypeEnum.DRAWING_IMAGE || this._drawingManagerService["featurePluginUpdateNotification"]([{
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320,
      prstGeom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318,
      adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319
    }]);
  }
};
function sr({
  onShapeClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245,
  excludeGroups: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246
}) {
  return jsx(ShapePickerPanel, {
    excludeGroups: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246,
    onShapeClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245,
    scrollContainer: "parent"
  });
}
function cr() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 = useDependency(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250 = useDependency(ir);
  return jsx(ShapePickerDropdown, {
    buttonLabel: "docs-shape-ui.crop.shape",
    excludeGroups: [ShapeGroupEnum.Line],
    onShapeClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249.getFocusDrawings().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.drawingType === DrawingTypeEnum.DRAWING_IMAGE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328) return;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.clipByShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327.type);
    }
  });
}
function lr() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 = useDependency(ComponentManager),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254 = useDependency(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.getFocusDrawings()[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255.getUnitType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.unitId) : undefined,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 === UniverInstanceType.UNIVER_DOC ? or : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 === UniverInstanceType.UNIVER_SHEET ? "sheet.image-clip.shape-picker.component" : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.get(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18) : undefined;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 ? jsx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258, {}) : null;
}
function ur({
  paragraphMenuPlacement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265
}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266 = useDependency(ICommandService);
  return jsx(sr, {
    onShapeClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266.executeCommand(G.id, {
        paragraphMenuPlacement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.type,
        enhanceParams: {
          endArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.endArrow,
          startArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.startArrow,
          horizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.horizontal,
          vertical: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.vertical
        }
      });
    }
  });
}
function gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274,
    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276,
    shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278,
    oldShapeJSON: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273.executeCommand(UpdateDocShapeDataCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20 = {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286,
    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288,
    shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290,
    oldShapeJSON: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.executeCommand(UpdateDocShapeDataCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20);
}
function wr() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 = useDependency(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = useDependency(DocsShapeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300 = () => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.getFocusDrawings();
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.length !== 1 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.drawingType) !== DrawingTypeEnum.DRAWING_SHAPE) return null;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341[0],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299.getShapeTypeById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 === undefined || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 ? null : {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346
      };
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301 = useObservable(() => new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300()),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.id === UpdateDocShapeDataMutation.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692();
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692(), () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.dispose();
      };
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298]);
  return {
    selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301,
    updateShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301 && gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301.drawingId, {
        oldShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301.shapeData
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354);
    }
  };
}
function Tr() {
  let {
    selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307,
    updateShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308
  } = wr();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307 ? jsx(ShapeStyleRibbonControl, {
    shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307.shapeData,
    shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307.shapeType,
    onUpdateShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308
  }) : null;
}
function Er() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312 = useDependency(LocaleService),
    {
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313
    } = wr();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313 ? jsx(ShapeQuickStyleGallery, {
    type: getShapeQuickStyleType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.shapeData),
    ariaLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.t("docs-shape-ui.quickStyles"),
    activePresetId: resolveActiveShapeQuickStylePresetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.shapeData),
    onSelect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.executeCommand(nr.id, {
      presetId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356
    })
  }) : null;
}
function Dr() {
  let {
    selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317,
    updateShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318
  } = wr();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317 ? jsx(ShapeTextRibbonControl, {
    fontFamilyPopupDataComponent: "docs-shape-format-font-family-menu",
    shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317.shapeData,
    onUpdateShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318
  }) : null;
}
function Or() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321;
  let {
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322,
      updateShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323
    } = wr(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324 = useFormulaShapeToolbar({
      hostType: UniverInstanceType.UNIVER_DOC,
      unitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322.unitId) ?? "",
      subUnitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322.subUnitId) ?? "",
      shapeId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322.drawingId) ?? "",
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322.shapeData,
      registerBinding: false,
      showLabels: true,
      dropdownSide: "bottom",
      onUpdateBinding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323({
        formulaBinding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357
      })
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324.extensionGroups) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.actions).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.visible !== false)) ?? [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322.shapeData["formulaBinding"] ? jsx(ShapeFormulaRibbonControl, {
    actions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12,
    panel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324.panel
  }) : null;
}
function kr({
  value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329
}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331 = Cr.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329) ?? Cr[0];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331 ? jsx("span", {
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331.label)
  }) : null;
}
const oi = {
    type: CommandType.OPERATION,
    id: "doc.operation.close-doc-shape-format-panel",
    handler() {
      return true;
    }
  },
  si = {};
function ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398.trim() || undefined;
}
function li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400.name) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403.trim()) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400.title) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404.trim()) || getObjectListPanelTypeName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402, getDrawingTypeNameKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400.drawingType)) + "\x20" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401 + 1);
}
function ui() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413 = useDependency(IDocDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414 = useDependency(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415 = useDependency(IRenderManagerService),
    [, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416] = useReducer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 + 1, 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.getUnitId()) ?? "",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414.focus$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414.getFocusDrawings(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414]);
  useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411.onCommandExecuted(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416());
    return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.dispose();
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420 = useMemo(() => getObjectListPanelLabels(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410]),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413.getDrawingData(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418) : {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 = (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413.getDrawingOrder(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418) : []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 => var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400).reverse(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401[getObjectListPanelSectionIdForDrawingType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402.drawingType)] += 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401), {
      canvas: 0,
      floating: 0
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 = {
      canvas: 0,
      floating: 0
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 = getObjectListPanelSectionIdForDrawingType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.drawingType),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 === OBJECT_LIST_FLOATING_SECTION_ID,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405]++;
      return {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.drawingId,
        name: li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410),
        description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.description,
        visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.hidden !== true,
        selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.selectable !== false,
        sectionId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405,
        sectionTitle: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420.sectionFloating : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420.sectionCanvas,
        capabilities: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 ? {
          arrange: false,
          reorder: false
        } : undefined,
        canMoveForward: !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 > 0,
        canMoveBackward: !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422.canvas - 1,
        canReorder: !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5
      };
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 = useMemo(() => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419 ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.unitId === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.drawingId), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.length - 1] ?? null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413.getDrawingByParam({
      unitId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411
    }) ?? null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426 = async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 => {
      !var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412.length || (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411.executeCommand(UpdateDocDrawingMetadataCommand.id, {
        unitId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20,
        patches: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412
      }));
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415) => {
      if (!var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20) return;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) : [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411.syncExecuteCommand(SetDrawingSelectedOperation.id, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 => ({
        unitId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126
      })));
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length - 1];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 ? activateDrawingObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415, {
        unitId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416
      }) : clearActiveDrawingObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428 = async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421) => {
      await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.hidden !== true !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 => ({
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.drawingId,
        hidden: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421
      })));
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 = async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 && (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426([{
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424,
        selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.selectable === false && undefined
      }]));
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430 = async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429);
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.name ?? undefined) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.title || undefined) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 || (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426([{
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428,
        name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431,
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431
      }]));
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431 = async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 = ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437);
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.description ?? undefined) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 || (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426([{
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436,
        description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439
      }]));
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432 = async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445) => {
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 && (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411.executeCommand(SetDocDrawingArrangeCommand.id, {
        unitId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418,
        drawingIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444],
        arrangeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445
      }));
    };
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 ? jsx(ObjectListPanelBase, {
    items: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14,
    selectedIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423,
    focusedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424,
    labels: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420,
    onSelect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427,
    onSetVisible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428,
    onCommitName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430,
    onCommitDescription: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431,
    onMoveForward: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, ArrangeTypeEnum.forward),
    onMoveBackward: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, ArrangeTypeEnum.backward),
    onToggleSelectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429
  }) : jsx("div", {
    className: "univer-flex\x20univer-size-full\x20univer-items-center\x20univer-justify-center\x20univer-text-sm\x20univer-text-gray-500",
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420.title
  });
}
let di = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450) {
    this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450;
  }
  updateShapeFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.unitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.scene;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456 = getDrawingShapeKeyByDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.getObjectIncludeInGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.setFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453);
  }
};
function fi() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456 = useDependency(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.focus$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.getFocusDrawings(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456]);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457.length === 0 ? null : jsx("div", {
    children: jsxs("div", {
      className: "univer-box-border univer-px-4 univer-text-sm",
      children: [jsx(DrawingCommonPanel, {
        drawings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457,
        hasCropper: false
      }), jsx(DocDrawingTextWrap, {
        drawings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457
      }), jsx(DocDrawingPosition, {
        drawings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457
      })]
    })
  });
}
function pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460) {
  let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465 = useDependency(di);
  return jsx(ShapeEditPanel, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460,
    positionEditor: jsx(fi, {}),
    onUpdateShapeData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465) => {
      gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465);
    },
    onUpdateLineShapeData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469) => {
      fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469);
    },
    onUpdateShapeFillImage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465.updateShapeFillImage({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472);
    }
  });
}
const mi = "doc.shape.floating-toolbar";
function hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472.getSnapshot().drawings) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.layoutType === PositionedObjectLayoutType.WRAP_NONE ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.behindDoc === BooleanNumber.TRUE ? TextWrappingStyle.BEHIND_TEXT : TextWrappingStyle.IN_FRONT_OF_TEXT : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.layoutType === PositionedObjectLayoutType.WRAP_SQUARE ? TextWrappingStyle.WRAP_SQUARE : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.layoutType === PositionedObjectLayoutType.WRAP_TOP_AND_BOTTOM ? TextWrappingStyle.WRAP_TOP_AND_BOTTOM : TextWrappingStyle.INLINE : TextWrappingStyle.INLINE;
}
function gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481 = useDependency(ShapeFloatingToolbarService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481.visible$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481.getVisible(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480.popup["extraProps"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482 ? jsx(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483,
    canvasElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480.popup["canvasElement"]
  }) : null;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491 = useDependency(DocsShapeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 = useDependency(IUniverInstanceService),
    {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.shapeData),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493, UniverInstanceType.UNIVER_DOC) ?? undefined,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501] = useState(() => hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502 = useMemo(() => getTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503 = useMemo(() => getTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497]);
  useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.id !== UpdateDocShapeDataMutation.id) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132);
    });
    return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.dispose();
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476
      }));
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 = buildShapeTextDataUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478);
      gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495, {
        oldShapeData: {
          shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.shapeText
        }
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.executeCommand(UpdateDocDrawingWrappingStyleCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494,
        drawings: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495
        }],
        wrappingStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507 = useFormulaShapeToolbar({
      hostType: UniverInstanceType.UNIVER_DOC,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495,
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497,
      onUpdateBinding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 => {
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
          formulaBinding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484
        };
        gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495, {
          oldShapeData: {
            formulaBinding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.formulaBinding
          }
        }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8);
      }
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [{
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490.t("docs-shape-ui.textWrap.inline"),
      value: TextWrappingStyle.INLINE,
      icon: jsx(TextWrapShapeIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490.t("docs-shape-ui.textWrap.square"),
      value: TextWrappingStyle.WRAP_SQUARE,
      icon: jsx(TextWrapShapeIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490.t("docs-shape-ui.textWrap.topAndBottom"),
      value: TextWrappingStyle.WRAP_TOP_AND_BOTTOM,
      icon: jsx(TextWrapShapeIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490.t("docs-shape-ui.textWrap.behindText"),
      value: TextWrappingStyle.BEHIND_TEXT,
      icon: jsx(TextWrapShapeIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490.t("docs-shape-ui.textWrap.inFrontText"),
      value: TextWrappingStyle.IN_FRONT_OF_TEXT,
      icon: jsx(TextWrapShapeIcon, {})
    }];
  return jsxs(Fragment, {
    children: [jsx(ShapeFloatingToolbar, {
      canvasElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.canvasElement,
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496,
      textStyle: {
        ff: ShapeDefaultConfig.shapeText["fontFamily"],
        fs: ShapeDefaultConfig.shapeText["fontSize"],
        cl: {
          rgb: ShapeDefaultConfig.shapeText["color"]
        },
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502
      },
      textModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503 ? {
        ha: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503.ha ?? HorizontalAlign.LEFT,
        va: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503.va ?? VerticalAlign.TOP
      } : null,
      wrappingStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500,
      wrappingStyleOptions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16,
      enableShapeFillReset: true,
      enableShapeStrokeReset: true,
      enableTextBackgroundReset: true,
      defaultFillColor: ShapeDefaultConfig.fill,
      defaultGradientEndColor: ShapeDefaultConfig.gradientEndColor,
      defaultStrokeColor: ShapeDefaultConfig.stroke,
      extensionGroups: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.extensionGroups,
      floatingObjectToolbarPosition: FloatingObjectToolbarPosition.DOC,
      onUpdateShapeData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) => {
        gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487);
      },
      onUpdateText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505,
      onUpdateWrappingStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490),
      onOpenPanel: () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.executeCommand(er.id, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495
        });
      },
      onDelete: () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.executeCommand(RemoveDocDrawingCommand.id, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493,
          drawings: [{
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495
          }]
        });
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.panel]
  });
}
function vi({
  variant: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528,
  extend: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529,
  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530
}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531 = jsx("rect", {
    x: "7",
    y: "5.5",
    width: "6",
    height: "9",
    rx: "1",
    fill: "currentColor",
    fillOpacity: "0.14",
    stroke: "currentColor",
    strokeWidth: "1.2"
  });
  return jsxs("svg", {
    "aria-hidden": "true",
    fill: "none",
    height: "1em",
    viewBox: "0 0 20 20",
    width: "1em",
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530,
    children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 === "inline" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M2 3.5h16M2 16.5h16M2 10h5M13 10h5",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      }), jsx("rect", {
        x: "8",
        y: "7",
        width: "4",
        height: "6",
        rx: "0.8",
        fill: "currentColor",
        fillOpacity: "0.14",
        stroke: "currentColor",
        strokeWidth: "1.2"
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 === "square" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M2 3h16M2 7.5h3M15 7.5h3M2 10h3M15 10h3M2 12.5h3M15 12.5h3M2 17h16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 === "top-bottom" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M2 3h16M2 17h16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 === "behind" && jsxs(Fragment, {
      children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531, jsx("path", {
        d: "M2 3h16M2 7.5h16M2 10h16M2 12.5h16M2 17h16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 === "front" && jsxs(Fragment, {
      children: [jsx("path", {
        d: "M2 3h16M2 7.5h16M2 10h16M2 12.5h16M2 17h16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      }), jsx("rect", {
        x: "7",
        y: "5.5",
        width: "6",
        height: "9",
        rx: "1",
        fill: "currentColor"
      })]
    })]
  });
}
const yi = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 => jsx(vi, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491,
    variant: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536
  }),
  bi = {
    DocsShapeWrapInlineIcon: yi("inline"),
    DocsShapeWrapSquareIcon: yi("square"),
    DocsShapeWrapTopBottomIcon: yi("top-bottom"),
    DocsShapeWrapBehindTextIcon: yi("behind"),
    DocsShapeWrapInFrontOfTextIcon: yi("front")
  };
function xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537) {
  "@babel/helpers - typeof";

  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494;
  }, xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537);
}
function Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540) {
  if (xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540 || "default");
    if (xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539);
}
function Ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548 = Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547, "string");
  return xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548 + "";
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552 = Ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551;
}
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497) {
    super(), this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, Y(this, "_editingParams$", new BehaviorSubject(null)), Y(this, "editingParams$", this._editingParams$["asObservable"]()), Y(this, "_onSavingEditorData$", new BehaviorSubject(false)), Y(this, "onSavingEditorData$", this._onSavingEditorData$["asObservable"]()), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = this.getEditing();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.visible && !this._canEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136) && this.setEditing(null);
    }));
  }
  dispose() {
    this._editingParams$["next"](null), this._editingParams$["complete"](), this._onSavingEditorData$["next"](false), this._onSavingEditorData$["complete"](), super.dispose();
  }
  setEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.visible && !this._canEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500) || (this._editingParams$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 ?? this._onSavingEditorData$["next"](false));
  }
  setOnSavingEditorData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502) {
    this._onSavingEditorData$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502);
  }
  getEditing() {
    return this._editingParams$["getValue"]();
  }
  _canEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.unitId, UniverInstanceType.UNIVER_DOC);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = getDocumentDrawingSegmentId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.shapeId);
    return canEditDocumentTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.unitId, [...getDocumentEntityParentPermissionObjectIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, "drawing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.shapeId), getDocumentEntityPermissionObjectId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, "drawing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.shapeId)]);
  }
  completeEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510) {
    this.getEditing() && (this.setOnSavingEditorData(true), requestAnimationFrame(() => {
      this.setEditing(null);
    }));
  }
  cancelEditing() {
    this.getEditing() && this.setEditing(null);
  }
};
const wi = memo(() => {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557 = useDependency(X),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558 = useDependency(DocsShapeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559 = useDependency(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560 = useDependency(ICommandService);
  return jsx(ShapeTextEditorContainer, {
    adapter: useMemo(() => ({
      getShapeModel: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140),
      getShapeData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143),
      getDrawingTransform: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146
        });
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.transform;
      },
      updateShapeText: ({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153,
        shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154,
        oldShapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155
      }) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560.executeCommand(UpdateDocShapeDataCommand.id, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153,
          shapeData: {
            shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154
          },
          oldShapeJSON: {
            oldShapeData: {
              shapeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155
            }
          }
        });
      },
      updateHostSize: ({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164
      }) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560.executeCommand(UpdateDrawingDocTransformCommand.id, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161,
          drawings: [{
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162,
            key: "size",
            value: {
              width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163,
              height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164
            }
          }]
        });
      },
      allowHostSizeShrink: ({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172
      }) => shouldAllowShapeTextEditorHostSizeShrink(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172))
    }), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559]),
    editingService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557,
    editorUnitId: Zn,
    positionOptions: useMemo(() => ({
      viewportKeys: {
        main: VIEWPORT_KEY.VIEW_MAIN
      }
    }), [])
  });
});
let Ti = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, this._iconManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this._iconManager["has"]("ObjectLayersIcon") || this.disposeWithMe(this._iconManager["register"]({
      ObjectLayersIcon: ObjectLayersIcon
    })), this._iconManager["has"]("BottomIcon") || this.disposeWithMe(this._iconManager["register"]({
      BottomIcon: BottomIcon
    })), this._iconManager["has"]("MoveDownIcon") || this.disposeWithMe(this._iconManager["register"]({
      MoveDownIcon: MoveDownIcon
    })), this._iconManager["has"]("MoveUpIcon") || this.disposeWithMe(this._iconManager["register"]({
      MoveUpIcon: MoveUpIcon
    })), this._iconManager["has"]("ShapeFormatSettingIcon") || this.disposeWithMe(this._iconManager["register"]({
      ShapeFormatSettingIcon: ShapeFormatSettingIcon
    })), this._iconManager["has"]("TopmostIcon") || this.disposeWithMe(this._iconManager["register"]({
      TopmostIcon: TopmostIcon
    })), this.disposeWithMe(this._iconManager["register"](bi));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](Jn, pi)), this.disposeWithMe(this._componentManager["register"](Xn, ui)), this.disposeWithMe(this._componentManager["register"](mi, gi)), this.disposeWithMe(this._componentManager["register"](yr, Tr)), this.disposeWithMe(this._componentManager["register"](vr, Er)), this.disposeWithMe(this._componentManager["register"](br, Dr)), this.disposeWithMe(this._componentManager["register"](xr, Or)), this.disposeWithMe(this._componentManager["register"](Sr, kr)), this.disposeWithMe(this._componentManager["register"](Qn, ShapeTextFloatToolbar)), this.disposeWithMe(this._componentManager["register"](ar, ur)), this.disposeWithMe(this._componentManager["register"](or, cr)), this._componentManager["get"](IMAGE_CLIP_SHAPE_PICKER_COMPONENT) || this.disposeWithMe(this._componentManager["register"](IMAGE_CLIP_SHAPE_PICKER_COMPONENT, lr)), this.disposeWithMe(this._componentManager["register"]("DocsShapeTextEditorContainer", wi));
  }
};
var Ei = class extends Shape {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517), Y(this, "_shapeId", null), Y(this, "_adjName", null), Y(this, "_unitId", null), Y(this, "_subUnitId", null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 && this.setShapeProps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517);
  }
  getDrawingSearch() {
    return {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: this._shapeId
    };
  }
  setShapeProps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.shapeId !== undefined && (this._shapeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.shapeId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.adjName !== undefined && (this._adjName = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.adjName), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.unitId !== undefined && (this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.unitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.subUnitId !== undefined && (this._subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.subUnitId), this.transformByState({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.height
    });
  }
  _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522) {
    Circle.drawWith(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522, {
      radius: ShapeDefaultConfig.adjHandleSize,
      fill: ShapeDefaultConfig.adjHandleFill,
      stroke: ShapeDefaultConfig.adjHandleStroke,
      strokeWidth: 1,
      evented: true
    });
  }
};
function Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568 = resolveShapeTextEditorBehaviorShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566,
      dataModel: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566.dataModel ?? {}),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567 ? {
          doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567
        } : null)
      }
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569 = resolveShapeTextEditorWrapStrategy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568);
  return {
    clip: shouldClipShapeTextDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569),
    wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569
  };
}
var Z = class extends Shape {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525), Y(this, "_props", undefined), Y(this, "_formulaAnimation", new FormulaShapeAnimationController(() => this.makeDirty(true), () => this._applyFormulaAutoFitSize())), Y(this, "_transformCalculateSrcRect", true), Y(this, "_drawingType", DrawingTypeEnum.DRAWING_SHAPE), Y(this, "isDrawingObject", true), this._props = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525
    }, this._formulaAnimation["setPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.formulaPresentation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.animateFormulaPresentation !== false), this._init(), this._applyFormulaAutoFitSize();
  }
  _init() {
    this.onTransformChange$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 => {
      this._updateSrcRectByTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173);
    });
  }
  setPrstGeom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528) {
    this._props["prstGeom"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528;
  }
  setEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530) {
    this._props["isEditing"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, this.makeDirty(true);
  }
  setFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 = true) {
    this._formulaAnimation["setPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533), this._props["formulaPresentation"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532, this._applyFormulaAutoFitSize(), this.makeDirty(true);
  }
  _applyFormulaAutoFitSize() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 = this._props["shapeModel"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536.getShapeTextData(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538 = normalizeShapeTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537.dataModel),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538.doc,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540 = this._formulaAnimation["getAutoFitPresentations"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540.length === 0) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536.updateContext({
      width: this.width,
      height: this.height
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541 = resolveFormulaShapeAutoFitSize({
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 => createShapeFormulaDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175)),
      height: this.height,
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536.getShapeData(),
      textRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536.getShapeTextRect({
        left: 0,
        top: 0,
        width: this.width,
        height: this.height
      }),
      width: this.width
    });
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542;
      this.resize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.height), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542 = this.getScene()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542.getTransformer()) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542.debounceRefreshControls();
    }
  }
  get unitId() {
    return this._props["unitId"];
  }
  get subUnitId() {
    return this._props["subUnitId"];
  }
  _updateSrcRectByTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550) {
    if (this._props["srcRect"] == null || !this._transformCalculateSrcRect) return;
    let {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552
      } = this,
      {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 = 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = 0
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.preValue,
      {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = 0,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = 0,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = 0,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = 0
      } = this._props["srcRect"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = true;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = true;
    }
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 && this.setSrcRect({
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561,
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562
    });
  }
  setSrcRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576) {
    this._props["srcRect"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576, this.makeDirty(true);
  }
  setFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578) {
    this._props["image"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, this.makeDirty(true);
  }
  set transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580) {
    this._transform = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580;
  }
  get transform() {
    this._transform || this._setTransForm();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = this._transform["clone"]();
    return this.transformForAngle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582);
  }
  get shapeModel() {
    return this._props["shapeModel"];
  }
  get shapeId() {
    return this._props["shapeId"];
  }
  get classType() {
    return RENDER_CLASS_TYPE.SHAPE;
  }
  _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 = this._props["shapeModel"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 ?? this.width,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 ?? this.height,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.getShapeType(),
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = {
        renderMode: ShapeRenderModeEnum.Path,
        oKey: this.oKey,
        image: this._props["image"],
        angle: this.angle
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.updateContext(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.save();
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {
        top: 0,
        left: 0,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.getDrawingEffectBounds(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 ? this._renderWithCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11);
    }) : (this._releaseRenderCache(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.restore();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.getShapeTextData(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.getShapeTextRect(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.isLineShape();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.save(), this.getState().flipX && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.scale(-1, 1);
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 / 2;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.translate(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.beginPath(), this._drawShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.restore();
    }
  }
  getDrawingPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606) {}
  _drawShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611;
    this._props["isEditing"] || (!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.dataModel) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.doc) && "isRichText" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.isRichText === false ? this._drawSimpleText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610) : this._drawRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610));
  }
  _drawSimpleText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618) {
    this._drawRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.text ?? "",
      dataModel: {
        doc: plainShapeTextToDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617, "docs-shape-text-" + this.oKey)
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618);
  }
  _drawRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624) {
    drawFormulaShapeAnimationLayers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622, this._formulaAnimation, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179) => {
      this._drawRichTextLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179);
    });
  }
  _drawRichTextLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632 = this._props["localeService"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.dataModel || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632 || console.warn("[DrawingShape]\x20LocaleService\x20is\x20required\x20for\x20rich\x20text\x20rendering");
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 = normalizeShapeTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.dataModel);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.doc;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 = createShapeFormulaDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.va ?? VerticalAlign.TOP,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.ha ?? HorizontalAlign.LEFT,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 = Di(this._props["shapeModel"].getShapeData(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.isHorizontal,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 = new DocumentDataModel(prepareShapeTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635, {
        isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 !== false,
        textRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637,
        wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.wrapStrategy
      })),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = new DocumentViewModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = DocumentSkeleton.create(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.calculate();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.getActualSize().actualHeight,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 = resolveShapeTextDocumentRenderLayout({
        contentHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636,
        viewportHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.height
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.updateDocumentStyle({
      pageSize: {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 === false ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.height : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.contentHeight
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.updateDocumentDataMargin({
      t: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.marginTop
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.calculate();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 = new Documents("shape-text-" + this.oKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642, {
      pageMarginLeft: 0,
      pageMarginTop: 0,
      onTextFillImageLoaded: () => this.makeDirty(true)
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.resize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.contentHeight), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.translateWithPrecision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.top), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.clip && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.rect(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.clipTop, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.clipHeight), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.clip()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.contentVerticalOffset && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.translateWithPrecision(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.contentVerticalOffset), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.restore(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.dispose();
  }
  render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 = false) {
    if (!this.visible) return this.makeDirty(false), this;
    let {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670
      } = this,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671 = this.getRealBound();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.top, this.isRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665)) {
      let {
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.viewBound;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 + this.strokeWidth + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 + this.strokeWidth + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670) return this;
    }
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 / 2,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 = this.transform["getMatrix"]();
    if (this._props["isEditing"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = this.getState(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = new Transform();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.composeMatrix({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.getMatrix();
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.save(), this._props["shapeModel"].isRenderLinePointsMode === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1), this._draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.restore(), this.makeDirty(false), this;
  }
  getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682) {
    let {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686
      } = this.getRealBound(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687 = this.transform["getMatrix"](),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686 / 2,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 = new Transform([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689 = this.getParent();
    return (this.isInGroup && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.classType) === RENDER_CLASS_TYPE.GROUP ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.ancestorTransform["multiply"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688).invert().applyPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682);
  }
  isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698) {
    let {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702
      } = this.getRealBound(),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701 / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702 / 2,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703 = this.transform["getMatrix"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704 = new Transform([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705 = this.getParent(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706 = (this.isInGroup && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705.classType) === RENDER_CLASS_TYPE.GROUP ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705.ancestorTransform["multiply"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704).invert().applyPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701 / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702 / 2,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707 = this._props["shapeModel"];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707.isLineShape() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707.isHitLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.x >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.x <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 + this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.y >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.y <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 + this.strokeWidth / 2;
  }
  dispose() {
    this._formulaAnimation["dispose"](), this._props["shapeModel"] = null, super.dispose();
  }
};
let Oi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719, this._docsShapeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, Y(this, "_activeShapeId", null), Y(this, "_unitId", null), Y(this, "_subUnitId", null), Y(this, "_activeShapeAdjustPointList", undefined), Y(this, "_adjustPointObjects", []), Y(this, "_baseShapeLeft", 0), Y(this, "_baseShapeTop", 0), Y(this, "_baseShapeWidth", 0), Y(this, "_baseShapeHeight", 0), Y(this, "_isStartAdjusting", false), Y(this, "_isShouldShowDrawingShapeAdjust", false), Y(this, "_activeAdjustInfo", undefined), Y(this, "_activeShapeModel", undefined), Y(this, "_adjHandlerPointerMove", undefined), Y(this, "_adjHandlerPointerUp", undefined), this._registerDrawingFocusChangeHandler(), this._registerDrawingTransformHandler();
  }
  clearAdjustControls() {
    this._clearShapeAdjustControls();
  }
  refreshAdjustControls() {
    this._updateShapeAdjustControls(true);
  }
  _getShapeAdjustPointListById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729 = this._docsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.getDrawingPoints();
  }
  _getShapeAdjustInfosById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 = this._docsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738.getAdjustInfoByName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737);
  }
  _getActiveDrawingParam() {
    return this._unitId === null || this._subUnitId === null || this._activeShapeId === null ? null : this._drawingManagerService["getDrawingByParam"]({
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: this._activeShapeId
    }) ?? null;
  }
  _getActiveDrawingShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744) {
    if (this._unitId === null || this._subUnitId === null || this._activeShapeId === null) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745 = getDrawingShapeKeyByDrawingSearch({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.getObjectIncludeInGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 instanceof Z ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 : null;
  }
  _createShapeAdjustControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750 = false) {
    if (this._unitId === null || this._subUnitId === null || this._activeShapeId === null) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751 = this._getActiveDrawingParam();
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.drawingType) !== DrawingTypeEnum.DRAWING_SHAPE || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.transform) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752 = this._docsShapeService["getShapeModel"](this._unitId, this._subUnitId, this._activeShapeId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.isLineShape()) return;
    let {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755 = 0,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756 = 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757 = 0,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 = 0,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754,
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 = 0
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.transform;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750 || !this._activeShapeAdjustPointList) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.updateContext({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758
    }), this._activeShapeAdjustPointList = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.getDrawingPoints());
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 = this._activeShapeAdjustPointList;
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.length)) return;
    let {
      scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761
    } = this._context;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = this._toVisualAdjustPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759);
      this._addShapeAdjustControl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.adjName, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756, this._unitId, this._subUnitId);
    }
  }
  _toVisualAdjustPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.x,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.y;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779 !== 0) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779 * Math.PI / 180,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23);
    }
    return {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781,
      adjName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.adjName
    };
  }
  _updateShapeAdjustControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 = false) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 && this._clearShapeAdjustControls(), this._createShapeAdjustControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790);
  }
  _addShapeAdjustControl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798) {
    if (!this._activeShapeId) return;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = "doc-shape-adjust-point-" + this._activeShapeId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.getObjectIncludeInGroup(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799.transformByState({
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 - ShapeDefaultConfig.adjHandleSize,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796 - ShapeDefaultConfig.adjHandleSize
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799.makeDirty(true);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 = new Ei(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12, {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 - ShapeDefaultConfig.adjHandleSize,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796 - ShapeDefaultConfig.adjHandleSize,
      adjName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794,
      shapeId: this._activeShapeId,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798,
      width: ShapeDefaultConfig.adjHandleSize + 8,
      height: ShapeDefaultConfig.adjHandleSize + 8,
      zIndex: DRAWING_OBJECT_LAYER_INDEX + 1,
      evented: true
    });
    this._adjustPointObjects["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800), this._attachAdjustEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.addObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800, DRAWING_OBJECT_LAYER_INDEX + 1);
  }
  _clearShapeAdjustControls() {
    this._adjustPointObjects["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.dispose()), this._adjustPointObjects = [];
  }
  _updateAdjustControlPositions() {
    this._createShapeAdjustControls();
  }
  _toScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 = Vector2.FromArray([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810.getActiveViewportByCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810.getViewports()[0];
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814.transformVector2SceneCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813;
  }
  _attachAdjustEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822) {
    this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820.onPointerDown$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820.getDrawingSearch();
      this._activeAdjustInfo = this._getShapeAdjustInfosById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822), this._activeShapeModel = this._docsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.drawingId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = this._getActiveDrawingParam(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.transform;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 || !this._activeShapeModel) return;
      this._baseShapeLeft = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.left || 0, this._baseShapeTop = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.top || 0, this._baseShapeWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.width || 0, this._baseShapeHeight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.height || 0;
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.flipX,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.flipY,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.angle || 0,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
          ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = this._activeAdjustInfo) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.currentAdjustValues) ?? {})
        };
      this._isStartAdjusting = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.disableObjectsEvent(), this._adjHandlerPointerMove = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.onPointerMove$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618;
        if (!this._isStartAdjusting || !this._activeShapeModel || !this._activeAdjustInfo) return;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.disableObjectsEvent(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.setCursor(CURSOR_TYPE.CROSSHAIR);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = this._toScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.offsetY),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.x - this._baseShapeLeft,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.y - this._baseShapeTop;
        if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 !== 0) {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = this._baseShapeWidth / 2,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = this._baseShapeHeight / 2,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 * Math.PI / 180,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2),
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2),
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1;
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 + (-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3);
        }
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = this._baseShapeWidth - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = this._baseShapeHeight - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8);
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
            left: 0,
            top: 0,
            width: this._baseShapeWidth,
            height: this._baseShapeHeight
          },
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = this._activeShapeModel["calcAdjValues"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2, {
            x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7,
            y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8
          }, this._activeAdjustInfo, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2);
        if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620).length !== 0) {
          for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620)) this._activeShapeModel["setAdjustValueByName"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
          this._activeShapeModel["updateContext"]({
            width: this._baseShapeWidth,
            height: this._baseShapeHeight
          }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = this._getActiveDrawingShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.makeDirty(true), this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.drawingId), this._updateAdjustControlPositions(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.stopPropagation();
        }
      }), this._adjHandlerPointerUp = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.onPointerUp$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = this._adjHandlerPointerMove) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.unsubscribe(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = this._adjHandlerPointerUp) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.resetCursor();
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = this._activeAdjustInfo;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 && this._activeShapeModel) {
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {};
          for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.currentAdjustValues)) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = this._activeShapeModel["getAdjustValueByName"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
          }
          Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB).length > 0 && gr(this._commandService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.drawingId, {
            oldShapeData: {
              adjustValues: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6
            }
          }, {
            adjustValues: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
          });
        }
        this._activeAdjustInfo = undefined, this._activeShapeModel = undefined, this._isStartAdjusting = false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.enableObjectsEvent(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.stopPropagation();
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.stopPropagation();
    })));
  }
  _registerDrawingTransformHandler() {
    let {
        scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.getTransformerByCreate();
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.changeStart$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 => {
      this._createShapeAdjustControls(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.objects !== null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.objects["size"] === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.objects["values"]().next().value instanceof Z && (this._isShouldShowDrawingShapeAdjust = true);
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.changing$["subscribe"](() => {
      this._isShouldShowDrawingShapeAdjust && this._clearShapeAdjustControls();
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.onPointerUp$["subscribeEvent"](() => {
      this._isShouldShowDrawingShapeAdjust && (this._isShouldShowDrawingShapeAdjust = false, this._createShapeAdjustControls());
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.changeEnd$["subscribe"](() => {
      this._unitId && this._subUnitId && this._activeShapeId && (this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(this._unitId, this._subUnitId, this._activeShapeId), this._updateAdjustControlPositions());
    }));
  }
  _registerDrawingFocusChangeHandler() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.id !== UpdateDocShapeDataMutation.id) return;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.params;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 === this._unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 === this._activeShapeId && this.refreshAdjustControls();
    })), this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.length === 1) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210[0],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = this._drawingManagerService["getDrawingByParam"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636);
        if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.drawingType) === DrawingTypeEnum.DRAWING_SHAPE) {
          this._activeShapeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.drawingId, this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.unitId, this._subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.subUnitId, this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.drawingId), this._clearShapeAdjustControls(), this._createShapeAdjustControls();
          return;
        }
      }
      this._activeShapeId = null, this._activeShapeAdjustPointList = undefined, this._unitId = null, this._subUnitId = null, this._clearShapeAdjustControls();
    })), this.disposeWithMe(mergeLocal(this._drawingManagerService["update$"], this._drawingManagerService["refreshTransform$"]).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.drawingId === this._activeShapeId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.unitId === this._unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.subUnitId === this._subUnitId);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 = this._drawingManagerService["getDrawingByParam"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.drawingType) === DrawingTypeEnum.DRAWING_SHAPE && this._updateShapeAdjustControls(true);
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 => {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218) this._activeShapeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.drawingId && (this._activeShapeId = null, this._activeShapeAdjustPointList = undefined, this._unitId = null, this._subUnitId = null, this._clearShapeAdjustControls());
    }));
  }
};
function ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.behindText === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.behindText === BooleanNumber.TRUE || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.layoutType === PositionedObjectLayoutType.WRAP_NONE && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.behindDoc === BooleanNumber.TRUE ? DOCS_COMPONENT_MAIN_LAYER_INDEX - 1 : DRAWING_OBJECT_LAYER_INDEX;
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836) {
    super(), this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830, this._docsShapeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832, this._imageIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, this._urlImageService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, this._shapeTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835, this._shapeFormulaService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836, Y(this, "_formulaShapes", new Map()), this.disposeWithMe(this._shapeFormulaService["presentationChanged$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 = this._formulaShapes["get"](this._formulaKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.shapeId))) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.setFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.presentation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.animationEnabled));
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => {
        this._shapeFormulaService["unregister"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.subUnitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.drawingId
        }), this._formulaShapes["delete"](this._formulaKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.drawingId));
      });
    }));
  }
  renderDrawingShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845) {
    let {
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846,
      drawingType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847,
      srcRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848,
      prstGeom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849,
      groupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853,
      isMultiTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854,
      transforms: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855,
      hidden: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847 !== DrawingTypeEnum.DRAWING_SHAPE || !this._drawingManagerService["getDrawingVisible"]() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 == null) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 = this._drawingManagerService["getDrawingEditable"](),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4) {
      let {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649,
          skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650,
          skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = getDrawingShapeKeyByDrawingSearch({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 : undefined),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845.getObjectIncludeInGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 != null) {
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853
        };
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 instanceof Z && this.refreshFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.transformByState({
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649,
          skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650,
          skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651
        });
        continue;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = this._drawingManagerService["getDrawingOrder"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845.getObjectIncludeInGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652) || !this._drawingManagerService["getDrawingVisible"]()) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = this._docsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655) continue;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.getShapeType()) ? {
          ...SHAPE_EDITOR_TRANSFORMER_CONFIG,
          rotateEnabled: false,
          resizeEnabled: false,
          borderEnabled: false
        } : SHAPE_EDITOR_TRANSFORMER_CONFIG,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.getShapeData().formulaBinding,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 && this._shapeFormulaService["register"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = new Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226,
        zIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.length - 1 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12,
        shapeModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655,
        localeService: this._localeService,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852,
        visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 !== true,
        evented: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 !== false,
        formulaPresentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 ? this._shapeFormulaService["getPresentation"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5) : undefined,
        animateFormulaPresentation: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.animationEnabled) !== false,
        transformerConfig: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4
      });
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = this._formulaKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853),
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = this._formulaShapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) ?? new Set();
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657), this._formulaShapes["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299);
      }
      this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.onDblclick$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.isLineShape() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 || (this._shapeTextEditingService["setEditing"]({
          visible: true,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853,
          shapeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.oKey
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.stopPropagation());
      }))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845.addObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845.attachTransformerTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850 && insertGroupObject({
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845, this._drawingManagerService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.setPrstGeom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.setSrcRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848), this._loadShapePictureFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.getShapeData()), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657);
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5;
  }
  _formulaKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874 + "\x00" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875 + "\x00" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876;
  }
  refreshFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882 = this._docsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.shapeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882.getShapeData().formulaBinding,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884 = this._formulaKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.shapeId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883) {
      this._shapeFormulaService["register"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883);
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991 = this._formulaShapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884) ?? new Set();
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880), this._formulaShapes["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991);
    } else {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885;
      this._shapeFormulaService["unregister"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 = this._formulaShapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880);
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.setFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 ? this._shapeFormulaService["getPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881) : undefined, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.animationEnabled) !== false);
  }
  refreshShapeFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.shapeModel["getShapeData"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.fill;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.fillType !== ShapeFillEnum.PictureFill || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.fillImageSource) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.setFillImage(undefined);
      return;
    }
    this._loadShapePictureFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893);
  }
  _loadShapePictureFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.fill;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.fillType !== ShapeFillEnum.PictureFill || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.fillImageSource) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.fillImageSource,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.fillImageSourceType ?? ImageSourceTypeEnum.URL,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903 = this._imageIoService["getImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898.setFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903);
      return;
    }
    this._loadAndSetImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902);
  }
  async _loadAndSetImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913;
    try {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912 === ImageSourceTypeEnum.UUID) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 = await this._imageIoService["getImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911);else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912 === ImageSourceTypeEnum.URL) try {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 = await this._urlImageService["getImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911);
        } catch {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911;
        } else var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911;
      }
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      console.error("[ShapeRender]\x20Failed\x20to\x20resolve\x20picture\x20fill\x20source", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914 = new window["Image"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914.onload = () => {
      this._imageIoService["addImageSourceCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910.setFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914);
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914.onerror = () => {
      console.error("[ShapeRender] Failed to load picture fill image", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911);
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914.src = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913;
  }
};
let Ai = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922) {
    super(), this._docPrintInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921, this._shapeRenderController = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922, this._initPrinting();
  }
  _initPrinting() {
    this.disposeWithMe(this._docPrintInterceptorService["interceptor"].intercept(this._docPrintInterceptorService["interceptor"].getInterceptPoints().PRINTING_COMPONENT_COLLECT, {
      handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230;
        let {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231,
            scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232,
            skeleton: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228,
          {
            pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = this._drawingManagerService["getDrawingDataForUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = ji(this._docPrintInterceptorService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.order["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 => {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658)) return;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.data[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.drawingType === DrawingTypeEnum.DRAWING_SHAPE && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.hidden && this._shapeRenderController["renderDrawingShape"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232);
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227);
      }
    }));
  }
};
function ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461582 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461582.getPageDrawingIds) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461582.getPageDrawingIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.getSkeletonData();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583.pages["length"] <= 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 == null) return null;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583.pages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584) return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992;
  Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583.skeHeaders["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584.headerId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584.pageWidth),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583.skeFooters["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584.footerId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584.pageWidth);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585 && Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586 && Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992;
}
function Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597.skeDrawings["keys"]()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597.skeTables["values"]()) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.rows) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.cells) Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598);
}
const Ni = "docs-shape-contextual-ribbon";
let Pi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933) {
    super(), this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928, this._ribbonService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932, this._shapeFloatingToolbarService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933, Y(this, "_visible", false), this._menuManagerService["mergeMenu"](ni), this.disposeWithMe(toDisposable(this._drawingManagerService["focus$"].subscribe(() => this._update()))), this._update();
  }
  dispose() {
    this._shapeFloatingToolbarService["setFallbackVisible"](false, Ni), this._hide(), super.dispose();
  }
  _update() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941 = this._drawingManagerService["getFocusDrawings"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941.length === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941[0] : undefined;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.drawingType) !== DrawingTypeEnum.DRAWING_SHAPE || this._univerInstanceService["getUnitType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.unitId) !== UniverInstanceType.UNIVER_DOC) {
      this._shapeFloatingToolbarService["setFallbackVisible"](false, Ni), this._hide();
      return;
    }
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = resolveShapeContextualRibbonHostMode((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.unitId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940.engine["getCanvasElement"]()) === "isolated";
    if (this._shapeFloatingToolbarService["setFallbackVisible"](var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9, Ni), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9) {
      this._hide();
      return;
    }
    this._visible || (this._visible = true, this._ribbonService["showContextualTab"](Yn, {
      activate: true
    }));
  }
  _hide() {
    this._visible && (this._visible = false, this._ribbonService["hideContextualTab"](Yn), this._ribbonService["setCollapsedIds"]([]));
  }
};
function Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603;) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603.getParent == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603.getParent() : null;
  }
  return null;
}
function Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607) {
  return Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946 instanceof Z);
}
function Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609.formulaBinding) == null;
}
let Ri = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947, this._shapeTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949, this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950, this._docLayoutInteractionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951, this._docsShapeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952, Y(this, "_lastEditingShapeKey", null), Y(this, "_layoutInteraction", null), this._initEvents(), this._initSelection(), this._initEditingParams();
  }
  dispose() {
    this._endLayoutInteraction(), super.dispose();
  }
  _initEvents() {
    let {
      scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959
    } = this._context;
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.onDblclick$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249) => {
      let {
          offsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250,
          offsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = Vector2.FromArray([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.pick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252)) ?? this._getFocusedShapeAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.stopPropagation();
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = this._docsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.shapeId);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 || isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.getShapeType()) || !Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.getShapeData())) return;
        this._shapeTextEditingService["setEditing"]({
          visible: true,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.subUnitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.shapeId,
          shapeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.oKey
        });
      }
    }));
  }
  _getFocusedShapeAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961) {
    let {
      scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962
    } = this._context;
    return this._drawingManagerService["getFocusDrawings"]().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.getObjectIncludeInGroup(getDrawingShapeKeyByDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260))).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 instanceof Z && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961)) ?? null;
  }
  _initSelection() {
    this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.length === 1) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262[0],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = this._drawingManagerService["getDrawingByParam"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664);
        if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.drawingType) === DrawingTypeEnum.DRAWING_SHAPE) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = this._shapeTextEditingService["getEditing"]();
          if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.shapeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.drawingId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.visible) return;
          isConnectorShape(this._docsShapeService["getShapeType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.drawingId)) && this._shapeTextEditingService["setEditing"](null);
        } else this._shapeTextEditingService["getEditing"]() && (this._shapeTextEditingService["setOnSavingEditorData"](true), requestAnimationFrame(() => {
          this._shapeTextEditingService["setEditing"](null);
        }));
      } else this._shapeTextEditingService["getEditing"]() && (this._shapeTextEditingService["setOnSavingEditorData"](true), requestAnimationFrame(() => {
        this._shapeTextEditingService["setEditing"](null);
      }));
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = this._shapeTextEditingService["getEditing"]();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.drawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.shapeId) && this._shapeTextEditingService["setEditing"](null);
    }));
  }
  _initEditingParams() {
    this.disposeWithMe(this._shapeTextEditingService["editingParams$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 => {
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.visible) === true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.unitId === this._context["unitId"] ? this._layoutInteraction ??= this._docLayoutInteractionService["beginInteraction"]() : this._endLayoutInteraction();
      let {
        scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269
      } = this._context;
      if (this._lastEditingShapeKey) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269.getObjectIncludeInGroup(this._lastEditingShapeKey);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.setEditing(false);
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) {
        let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.visible,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269.getObjectIncludeInGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.shapeKey);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.setEditing(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A), this._lastEditingShapeKey = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.shapeKey), this._contextService["setContextValue"](FOCUSING_SHAPE_TEXT_EDITOR, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A);
      } else this._lastEditingShapeKey = null, this._contextService["setContextValue"](FOCUSING_SHAPE_TEXT_EDITOR, false);
    }));
  }
  _endLayoutInteraction() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965 = this._layoutInteraction) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965.dispose(), this._layoutInteraction = null;
  }
};
let zi = class extends ShapeTextFloatMenuRenderControllerBase {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976, {
      componentKey: Qn,
      editorUnitId: Zn
    });
  }
};
let Bi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989, this._docDrawingShapeRenderController = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990, this._initialize();
  }
  _initialize() {
    this.disposeWithMe(this._drawingManagerService["add$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 => this._insertShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272))), this.disposeWithMe(this._drawingManagerService["update$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => this._updateShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669));
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.id !== UpdateDocShapeDataMutation.id) return;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.params;
      this._refreshShapeData({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277
      });
    }));
  }
  _insertShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = this._getSceneByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.unitId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = this._drawingManagerService["getDrawingByParam"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281);
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283.drawingType) === DrawingTypeEnum.DRAWING_SHAPE && this._docDrawingShapeRenderController["renderDrawingShape"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.scene);
    });
  }
  _updateShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998 = this._drawingManagerService["getDrawingByParam"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.drawingType) !== DrawingTypeEnum.DRAWING_SHAPE) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999 = this._getSceneByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.unitId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.transform == null) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000 = getDrawingShapeKeyByDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.scene["getObjectIncludeInGroup"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.setSrcRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.srcRect), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.setPrstGeom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.prstGeom), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.makeDirty(true));
  }
  _refreshShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008 = this._getSceneByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.unitId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009 = getDrawingShapeKeyByDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008.scene["getObjectIncludeInGroup"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010 && (this._docDrawingShapeRenderController["refreshShapeFillImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010), this._docDrawingShapeRenderController["refreshFormulaPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.drawingId
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.makeDirty(true));
  }
  _getSceneByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 == null) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016.scene;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017 == null ? null : {
      scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017
    };
  }
};
let Vi = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032) {
    super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021, this._sidebarService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461022, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023, this._docsShapeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027, this._docCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, this._shapeTextEditingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032, Y(this, "_sidebarDisposable", null), Y(this, "_activeShapeInfo", null), Y(this, "_isOpenedShapeEditPanel", false), Y(this, "_shapeEditPanelVersion", 0), Y(this, "_disposePopupsByUnit", new Map()), Y(this, "_popupTargetKeys", new Map()), this._initMenu(), this.disposeWithMe(this._univerInstanceService["getCurrentTypeOfUnit$"](UniverInstanceType.UNIVER_DOC).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = this._sidebarDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.dispose();
      }
    })), this._registerOperations(), this.disposeWithMe(bindRenderTransformerLifecycle(this._renderManagerService, UniverInstanceType.UNIVER_DOC, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 => this._popupMenuListener(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291))), this.disposeWithMe(this._shapeTextEditingService["editingParams$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 && this._clearPopups(undefined, true);
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      this._drawingManagerService["getFocusDrawings"]().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.drawingType === DrawingTypeEnum.DRAWING_SHAPE && this._univerInstanceService["getUnitType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.unitId) === UniverInstanceType.UNIVER_DOC && !this._canEditShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.drawingId)) && (this._clearPopups(undefined, true), this._closeShapeEditPanel());
    }));
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](ri);
  }
  getShapePopupMenus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048) {
    return [{
      label: "docs-shape-ui.openPanel",
      index: 0,
      commandId: er.id,
      commandParams: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047
      },
      disable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048 === DrawingTypeEnum.DRAWING_DOM
    }, {
      label: "docs-shape-ui.deleteShape",
      index: 1,
      commandId: RemoveDocDrawingCommand.id,
      commandParams: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045,
        drawings: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047
        }]
      },
      disable: false
    }, {
      label: "docs-shape-ui.hidePanel",
      index: 2,
      commandId: oi.id,
      commandParams: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047
      },
      disable: false
    }];
  }
  _getShapeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056 = this._docsShapeService["getShapeTypeById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057 = this._docsShapeService["getShapeDataById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057 !== undefined ? {
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054,
      version: this._shapeEditPanelVersion,
      disableShapeOption: false
    } : null;
  }
  _clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064 = false) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063 == null) {
      [...this._disposePopupsByUnit["keys"]()].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 => this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064));
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065 = this._disposePopupsByUnit["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065) {
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 >= 0; --var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13];
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.canDispose()) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13, 1));
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.length === 0 && (this._disposePopupsByUnit["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063), this._popupTargetKeys["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063));
    }
  }
  _getDisposePopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070 = this._disposePopupsByUnit["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [];
    return this._disposePopupsByUnit["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8;
  }
  _popupMenuListener(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075 = new DisposableCollection(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074 = this._renderManagerService["getAllRenderersOfType"](UniverInstanceType.UNIVER_DOC).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.scene["getTransformerByCreate"]() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074.unitId;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073.createControl$["subscribe"](() => this._handleCreateControl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073.clearControl$["subscribe"](() => {
      this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076), queueMicrotask(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073.getSelectedObjectMap().size > 0 || (this._contextService["setContextValue"](FOCUSING_COMMON_DRAWINGS, false), this._drawingManagerService["focusDrawing"](null));
      });
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073.changing$["subscribe"](() => {
      this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076, true);
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075;
  }
  _handleCreateControl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081.getSelectedObjectMap();
    if (this._isOpenedShapeEditPanel) {
      this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082, true);
      return;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083.size > 1) {
      this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083.values().next().value;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084) {
      this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085 = this._drawingManagerService["getDrawingOKey"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084.oKey);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085.drawingType !== DrawingTypeEnum.DRAWING_SHAPE) {
      this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082);
      return;
    }
    let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088,
      drawingType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085;
    if (!this._canEditShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088)) {
      this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082, true);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090 = this._getShapeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090) {
      this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091 = this._disposePopupsByUnit["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088;
    if (this._popupTargetKeys["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082) === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.length > 0) return;
    this._clearPopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.isMainScene) === false ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.with(DocCanvasPopManagerService) : this._docCanvasPopManagerService).attachPopupToObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084, {
        componentKey: mi,
        direction: "vertical-center",
        offset: [0, SHEET_DOC_SHAPE_FLOATING_TOOLBAR_TOP_OFFSET],
        extraProps: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088,
          drawingType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.shapeType,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.shapeData
        }
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086);
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093), this._getDisposePopups(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082).push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093), this._popupTargetKeys["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14), this._drawingManagerService["getFocusDrawings"]().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.drawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088) || this._drawingManagerService["focusDrawing"]([{
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088
    }]);
  }
  _canEditShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107, UniverInstanceType.UNIVER_DOC);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461110 = getDocumentDrawingSegmentId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108);
    return canEditDocumentTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107, [...getDocumentEntityParentPermissionObjectIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461110, "drawing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108), getDocumentEntityPermissionObjectId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461110, "drawing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108)]);
  }
  _registerOperations() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.id === er.id) {
        let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.params;
        this._shapeEditPanelVersion += 1, this._activeShapeInfo = this._getShapeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674), this._clearPopups(undefined, true), this._openShapeEditPanel();
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.id === oi.id && (this._activeShapeInfo = null, this._closeShapeEditPanel()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.id === UpdateDocShapeDataMutation.id) {
        let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.params;
        if (this._activeShapeInfo && this._activeShapeInfo["shapeId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = this._getShapeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, this._activeShapeInfo["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 && (this._shapeEditPanelVersion += 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.version = this._shapeEditPanelVersion, this._activeShapeInfo = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, this._isOpenedShapeEditPanel && this._openShapeEditPanel());
        }
      }
    })), this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 => {
      if (this._isOpenedShapeEditPanel === false) return;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.length === 0) {
        this._activeShapeInfo = null, this._closeShapeEditPanel();
        return;
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.length === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].drawingType === DrawingTypeEnum.DRAWING_SHAPE && (this._shapeEditPanelVersion += 1, this._activeShapeInfo = this._getShapeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].drawingId), this._activeShapeInfo)) {
        this._openShapeEditPanel();
        return;
      }
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.drawingType === DrawingTypeEnum.DRAWING_SHAPE);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.length > 1 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.length) {
        if (this._shapeEditPanelVersion += 1, this._activeShapeInfo = this._getShapeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].drawingId), this._activeShapeInfo) {
          this._openShapeEditPanel();
          return;
        }
      } else {
        if (this._shapeEditPanelVersion += 1, this._activeShapeInfo = this._getShapeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298[0].drawingId), this._activeShapeInfo) {
          this._activeShapeInfo["disableShapeOption"] = true, this._openShapeEditPanel();
          return;
        }
      }
      this._closeShapeEditPanel();
    }));
  }
  _openShapeEditPanel() {
    this._activeShapeInfo && (this._sidebarDisposable = this._sidebarService["open"]({
      id: Jn,
      header: {
        title: this._localeService["t"]("docs-shape-ui.formatShape")
      },
      width: 388,
      children: {
        label: Jn,
        ...this._activeShapeInfo
      },
      onClose: () => {
        this._drawingManagerService["focusDrawing"](null), this._contextService["setContextValue"](FOCUSING_COMMON_DRAWINGS, false), this._sidebarDisposable = null;
      }
    }), this._isOpenedShapeEditPanel = true);
  }
  _closeShapeEditPanel() {
    this._isOpenedShapeEditPanel = false, this._sidebarService["close"](Jn), this._sidebarDisposable = null, this._contextService["setContextValue"](FOCUSING_COMMON_DRAWINGS, false), this._drawingManagerService["focusDrawing"](null);
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115 = si, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119;
    let {
      menu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121
    } = merge({}, si, this._config);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 && this._configService["setConfig"]("menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120, {
      merge: true
    }), this._configService["setConfig"]("docs-shape-ui.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121), this._initCommands();
  }
  onStarting() {
    this._injector["add"]([Ti]), this._injector["get"](Ti), registerDependencies(this._injector, [[Vi], [Bi], [Q], [Ai], [Oi], [ir], [di], [X], [Pi]]), this._initUIPart();
  }
  onReady() {
    this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, [Oi]), this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, [Ri]), touchDependencies(this._injector, [[Vi], [Bi], [Q], [Ai], [ir], [di], [X], [Pi]]);
  }
  onRendered() {
    this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, [zi]);
  }
  _initCommands() {
    [G, oi, er, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26, nr, rr].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300)));
  }
  _initUIPart() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129 = this._injector,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129.get(IUIPartsService);
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130.registerComponent(BuiltInUIPart.CONTENT, () => connectInjector(wi, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129)));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612 as UniverDocsShapeUIPlugin };
export { ir, di, X, Ti, Oi, Q, Ai, Pi, Ri, zi, Bi, Vi, Y };
