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
import { Cr, G, Sr, Yn, ar, br, er, nr, rr, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26, vr, xr, yr } from "./internal-core-endo.js";
function dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 => ({
    id: G.id,
    type: MenuItemType.SELECTOR,
    selections: [{
      label: {
        name: ar,
        hoverable: false,
        selectable: false,
        props: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269 ? {
          id: G.id,
          paragraphMenuPlacement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269
        } : {
          id: G.id
        }
      }
    }],
    icon: "ShapeIcon",
    title: "docs-shape-ui.insertShape",
    tooltip: "docs-shape-ui.insertShape",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, UniverInstanceType.UNIVER_DOC)
  });
}
const fr = dr(),
  pr = dr("below"),
  mr = dr("target");
function hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271) {
  return {
    id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26.id,
    type: MenuItemType.BUTTON,
    icon: "ObjectLayersIcon",
    title: "docs-shape-ui.objectListPanel.open",
    tooltip: "docs-shape-ui.objectListPanel.open",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271, UniverInstanceType.UNIVER_DOC)
  };
}
const Ar = "docs-shape-ui.ribbon.shape-format.style-control",
  jr = "docs-shape-ui.ribbon.shape-format.text-control",
  Mr = "docs-shape-ui.ribbon.shape-format.formula-control",
  Nr = "docs-shape-ui.ribbon.shape-format.arrange-forward",
  Pr = "docs-shape-ui.ribbon.shape-format.arrange-backward",
  Fr = "docs-shape-ui.ribbon.shape-format.arrange-front",
  Ir = "docs-shape-ui.ribbon.shape-format.arrange-back",
  Lr = "docs-shape-ui.ribbon.shape-format.wrapping-style";
function Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.get(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.get(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.get(DocsShapeService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.drawingId) : null;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 ? resolveActiveShapeQuickStylePresetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) ?? "" : "");
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.id === UpdateDocShapeDataMutation.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362();
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362(), () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.dispose();
    };
  });
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343.get(IDrawingManagerService).getFocusDrawings();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345.length === 1 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344.drawingType) === DrawingTypeEnum.DRAWING_SHAPE ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345[0] : null;
}
function zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.layoutType) === PositionedObjectLayoutType.WRAP_NONE ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.behindDoc === BooleanNumber.TRUE ? TextWrappingStyle.BEHIND_TEXT : TextWrappingStyle.IN_FRONT_OF_TEXT : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.layoutType) === PositionedObjectLayoutType.WRAP_SQUARE ? TextWrappingStyle.WRAP_SQUARE : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.layoutType) === PositionedObjectLayoutType.WRAP_TOP_AND_BOTTOM ? TextWrappingStyle.WRAP_TOP_AND_BOTTOM : TextWrappingStyle.INLINE;
}
function Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.get(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.get(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.get(IUniverInstanceService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 = () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.unitId, UniverInstanceType.UNIVER_DOC) : undefined;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.next(zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.getSnapshot().drawings) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.drawingId] : undefined));
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.id === RichTextEditingMutation.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370();
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370(), () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.dispose();
    };
  }).pipe(distinctUntilChanged());
}
function Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360 = false) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359.get(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359.get(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359.get(DocsShapeService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.next(true);
          return;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.drawingId);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.formulaBinding == null);
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.id === UpdateDocShapeDataMutation.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378();
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378(), () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.dispose();
    };
  });
}
function Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.get(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.get(DocsShapeService);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370.focus$["pipe"](startWith(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370.getFocusDrawings()), map(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371.getShapeTypeById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.drawingId) : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 === undefined || isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386);
  }));
}
function Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375) {
  return {
    id: nr.id,
    type: MenuItemType.SELECTOR,
    icon: "PaintIcon",
    title: "shape-editor-ui.toolbar.quickStyles",
    tooltip: "shape-editor-ui.toolbar.quickStyles",
    selections: [{
      label: {
        name: vr,
        hoverable: false,
        selectable: false
      }
    }],
    value$: Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375),
    hidden$: Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375)
  };
}
function Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377) {
  return {
    id: rr.id,
    type: MenuItemType.SELECTOR,
    icon: "ShapeIcon",
    title: "shape-editor-ui.toolbar.changeShape",
    tooltip: "shape-editor-ui.toolbar.changeShape",
    slot: true,
    selections: [{
      label: {
        name: SHAPE_CHANGE_PICKER_COMPONENT,
        hoverable: false,
        selectable: false
      }
    }],
    hidden$: Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377)
  };
}
function Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381 = false) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 => ({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379,
    type: MenuItemType.BUTTON,
    label: {
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461380,
      hoverable: false,
      selectable: false
    },
    hidden$: Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381)
  });
}
const Kr = Gr(Ar, yr),
  qr = Gr(jr, br),
  Jr = Gr(Mr, xr, true);
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385) {
  return {
    id: Lr,
    type: MenuItemType.SELECTOR,
    icon: Cr[0].icon,
    label: Sr,
    selectionsCommandId: UpdateDocDrawingWrappingStyleCommand.id,
    selections: Cr.map(({
      icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392
    }) => ({
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391,
      icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390,
      params: () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 ? {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.subUnitId,
          drawings: [{
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.subUnitId,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.drawingId
          }],
          wrappingStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392
        } : undefined;
      }
    })),
    value$: Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385),
    hidden$: Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385)
  };
}
function Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393 => ({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387,
    commandId: SetDocDrawingArrangeCommand.id,
    type: MenuItemType.BUTTON,
    icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390,
    tooltip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390,
    hidden$: Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393),
    params: () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.subUnitId,
        drawingIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.drawingId],
        arrangeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388
      } : undefined;
    }
  });
}
const Zr = Xr(Nr, ArrangeTypeEnum.forward, "MoveUpIcon", "shape-editor-ui.arrange.forward"),
  Qr = Xr(Pr, ArrangeTypeEnum.backward, "MoveDownIcon", "shape-editor-ui.arrange.backward"),
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 = Xr(Fr, ArrangeTypeEnum.front, "TopmostIcon", "shape-editor-ui.arrange.front"),
  ei = Xr(Ir, ArrangeTypeEnum.back, "BottomIcon", "shape-editor-ui.arrange.back");
function ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395) {
  return {
    id: er.id,
    type: MenuItemType.BUTTON,
    icon: "ShapeFormatSettingIcon",
    title: "docs-shape-ui.formatShape",
    tooltip: "docs-shape-ui.formatShape",
    hidden$: Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395),
    params: () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.drawingId
      } : undefined;
    }
  };
}
const ni = {
    [MenuManagerPosition.RIBBON]: {
      [Yn]: {
        order: 100,
        title: "docs-shape-ui.formatShape",
        contextual: true,
        "docs-shape-ui.ribbon.shape-format.quick-styles": {
          order: 0,
          [nr.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: Ur
          },
          [rr.id]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1,
              showLabel: true
            },
            menuItemFactory: Wr
          }
        },
        "docs-shape-ui.ribbon.shape-format.style": {
          order: 1,
          [Ar]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 104
            },
            menuItemFactory: Kr
          }
        },
        "docs-shape-ui.ribbon.shape-format.text": {
          order: 2,
          [jr]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 344
            },
            menuItemFactory: qr
          }
        },
        "docs-shape-ui.ribbon.shape-format.arrange": {
          order: 3,
          [Lr]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              columnSpan: 2,
              showLabel: true
            },
            menuItemFactory: Yr
          },
          [Nr]: {
            order: 1,
            gridLayout: {
              row: 1,
              column: 3
            },
            menuItemFactory: Zr
          },
          [Pr]: {
            order: 2,
            gridLayout: {
              row: 2,
              column: 3
            },
            menuItemFactory: Qr
          },
          [Fr]: {
            order: 3,
            gridLayout: {
              row: 1,
              column: 4
            },
            menuItemFactory: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611
          },
          [Ir]: {
            order: 4,
            gridLayout: {
              row: 2,
              column: 4
            },
            menuItemFactory: ei
          }
        },
        "docs-shape-ui.ribbon.shape-format.formula": {
          order: 4,
          [Mr]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 120
            },
            menuItemFactory: Jr
          }
        },
        "docs-shape-ui.ribbon.shape-format.advanced": {
          order: 5,
          [er.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: ti
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
        }
      }
    }
  },
  ri = {
    [RibbonInsertGroup.MEDIA]: {
      [G.id]: {
        order: 4,
        menuItemFactory: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397 => ({
          ...fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397),
          title: undefined
        })
      }
    },
    [RibbonInsertGroup.OTHERS]: {
      [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26.id]: {
        order: 0,
        gridLayout: {
          row: 1,
          column: 1,
          rowSpan: 2,
          showLabel: true
        },
        menuItemFactory: hr
      }
    },
    [ContextMenuPosition.PARAGRAPH]: {
      [ContextMenuGroup.LAYOUT]: {
        [INSERT_BELLOW_MENU_ID]: {
          [G.id]: {
            replace: true,
            order: 8,
            menuItemFactory: pr
          }
        }
      },
      [DOC_CONTENT_INSERT_MENU_ID]: {
        [ContextMenuGroup.LAYOUT]: {
          [G.id]: {
            replace: true,
            order: 8,
            menuItemFactory: pr
          }
        }
      },
      [EMPTY_PARAGRAPH_MENU_ID]: {
        [ContextMenuGroup.LAYOUT]: {
          [G.id]: {
            replace: true,
            order: 8,
            menuItemFactory: mr
          }
        }
      },
      [DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        insert: {
          [G.id]: {
            replace: true,
            order: 2,
            menuItemFactory: fr
          }
        }
      },
      [DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        insert: {
          [G.id + ".below"]: {
            replace: true,
            order: 2,
            menuItemFactory: pr
          }
        }
      }
    }
  };
export { ri as DocsShapeUIMenuSchema };
export { ni };
