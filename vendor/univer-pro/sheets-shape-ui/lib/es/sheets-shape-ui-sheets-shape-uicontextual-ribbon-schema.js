import { FormulaShapeAnimationController, MobileShapeEditorService, SHAPE_CHANGE_PICKER_COMPONENT, SHAPE_EDITOR_TRANSFORMER_CONFIG, SHEET_DOC_SHAPE_FLOATING_TOOLBAR_TOP_OFFSET, ShapeEditPanel, ShapeFloatingToolbar, ShapeFloatingToolbarService, ShapeFloatingToolbarToggleFactory, ShapeFormulaRibbonControl, ShapeGroupEnum, ShapePickerDropdown, ShapePickerPanel, ShapeQuickStyleGallery, ShapeStyleRibbonControl, ShapeTextEditorContainer, ShapeTextFloatMenuRenderControllerBase, ShapeTextFloatToolbar, ShapeTextHyperLinkPopupService, ShapeTextRibbonControl, ToggleShapeFloatingToolbarOperation, UniverShapeEditorUIPlugin, activateDrawingObject, bindRenderTransformerLifecycle, buildShapeTextDataUpdate, clearActiveDrawingObjects, drawFormulaShapeAnimationLayers, getDrawingTypeNameKey, getTextModel, getTextStyle, normalizeShapeTextModel, plainShapeTextToDocumentData, prepareShapeTextDocumentData, resolveFormulaShapeAutoFitSize, resolveShapeContextualRibbonHostMode, resolveShapeTextDocumentRenderLayout, resolveShapeTextEditorBehaviorShapeData, resolveShapeTextEditorWrapStrategy, shouldAllowShapeTextEditorHostSizeShrink, shouldClipShapeTextDocument, useFormulaShapeToolbar } from "@univerjs-pro/shape-editor-ui";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, FloatingObjectToolbarPosition, IMenuManagerService, IRibbonService, ISidebarService, IconManager, MOBILE_UI_MODE, MenuItemType, MenuManagerPosition, RibbonInsertGroup, UndoRedoGroupService, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { ConnectorCoordinateTransform, ImageSourceTypeEnum, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeDefaultConfig, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeRenderModeEnum, ShapeTypeEnum, computeConnectorRouteLayout, getBasicShapeRotateBound, isConnectorShape, isCurvedConnectorShape, routeConnectorLineShape } from "@univerjs-pro/engine-shape";
import { ShapeFormulaService, UniverShapeEditorPlugin, applyQuickStyleToShapeData, cloneShapeDataForType, createShapeFormulaDocument, createShapeTextBoxShapeData, getShapeQuickStylePreset, getShapeQuickStyleType, resolveActiveShapeQuickStylePresetId } from "@univerjs-pro/shape-editor";
import { InsertShapeCommand, InsertSheetsShapeMutation, RemoveSheetsShapeMutation, SetShapeDrawingDataCommand, SheetsShapeService, ToggleSheetsShapeFlipCommand, UniverSheetsShapePlugin, UpdateConnectorRelationCommand, UpdateLineShapeResizeCommand, UpdateSheetsShapeDataMutation } from "@univerjs-pro/sheets-shape";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, DisposableCollection, DocumentDataModel, DrawingTypeEnum, FOCUSING_COMMON_DRAWINGS, FOCUSING_SHAPE_TEXT_EDITOR, HorizontalAlign, ICommandService, IConfigService, IContextService, IImageIoService, IPermissionService, IURLImageService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, VerticalAlign, createInternalEditorID, generateRandomId, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { CopySheetCommand, RemoveSheetCommand, SheetInterceptorService, SheetPermissionCheckController, SheetSkeletonService, SheetsSelectionsService, UniverSheetsPlugin, WorkbookEditablePermission, WorksheetEditPermission, attachRangeWithCoord, discreteRangeToRange, getSheetCommandTarget } from "@univerjs/sheets";
import { IDrawingManagerService, SetDrawingSelectedOperation, UniverDrawingPlugin, getDrawingShapeKeyByDrawingSearch, getOrCreateDrawingCopyPlan } from "@univerjs/drawing";
import { CURSOR_TYPE, Circle, DRAWING_OBJECT_LAYER_INDEX, DocumentSkeleton, DocumentViewModel, Documents, IRenderManagerService, Image, RENDER_CLASS_TYPE, SHEET_VIEWPORT_KEY, Shape, Transform, UniverRenderEnginePlugin, Vector2 } from "@univerjs/engine-render";
import { COPY_TYPE, ISheetClipboardService, PREDEFINED_HOOK_NAME, SheetCanvasPopManagerService, SheetPrintInterceptorService, SheetScrollManagerService, SheetSkeletonManagerService, UniverSheetsUIPlugin, deriveStateFromActiveSheet$, getCurrentRangeDisable$, getViewportByCell } from "@univerjs/sheets-ui";
import { BehaviorSubject, EMPTY, Observable, map, of, startWith, switchMap } from "rxjs";
import { DrawingCommonPanel, DrawingImageClipService, DrawingRenderService, IMAGE_CLIP_SHAPE_PICKER_COMPONENT, OBJECT_LIST_FLOATING_SECTION_ID, ObjectListPanelBase, UniverDrawingUIPlugin, getCurrentUnitInfo, getObjectListPanelLabels, getObjectListPanelSectionIdForDrawingType, getObjectListPanelTypeName, insertGroupObject } from "@univerjs/drawing-ui";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { DrawingApplyType, ISheetDrawingService, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, UniverSheetsDrawingPlugin, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DocInterceptorService, DocSelectionManagerService, UniverDocsPlugin } from "@univerjs/docs";
import { DocCanvasPopManagerService, DocEventManagerService, DocRenderController, DocSelectionRenderService, UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { SheetDrawingAnchor, SheetsDrawingGroupCopyPasteController, UniverSheetsDrawingUIPlugin } from "@univerjs/sheets-drawing-ui";
import { BottomIcon, FlipHorizontalIcon, FlipVerticalIcon, MoveDownIcon, MoveUpIcon, ObjectLayersIcon, ShapeFormatSettingIcon, TopmostIcon } from "@univerjs/icons";
import { memo, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { ConfigContext } from "@univerjs/design";
import { Ar, Cr, Dr, Ir, Nr, Pr, Qr, Xr, Zr, jr, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 } from "./internal-core-endo.js";
function Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460.get(IUniverInstanceService);
  return {
    id: Cr.id,
    type: MenuItemType.SELECTOR,
    selections: [{
      label: {
        name: Ir,
        hoverable: false,
        selectable: false,
        props: {
          id: Cr.id
        }
      }
    }],
    icon: "ShapeIcon",
    tooltip: "sheets-shape-ui.insertShape",
    activated$: deriveStateFromActiveSheet$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461, false, () => new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.next(false);
    })),
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460, UniverInstanceType.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460)
  };
}
function Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464.get(IUniverInstanceService);
  return {
    id: Ar.id,
    type: MenuItemType.BUTTON,
    icon: "ObjectLayersIcon",
    title: "sheets-shape-ui.objectListPanel.open",
    tooltip: "sheets-shape-ui.objectListPanel.open",
    activated$: deriveStateFromActiveSheet$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462465, false, () => new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.next(false);
    })),
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464, UniverInstanceType.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464)
  };
}
const Wr = "sheet.menu.shape.flip-horizontal",
  Gr = "sheet.menu.shape.flip-vertical";
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462468) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462468.get(IDrawingManagerService).getFocusDrawings();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462469.length === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462469[0].drawingType === DrawingTypeEnum.DRAWING_SHAPE ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462469[0] : null;
}
function qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462472) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462472.get(IDrawingManagerService);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473.focus$["pipe"](startWith(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473.getFocusDrawings()), map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.length !== 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226[0].drawingType !== DrawingTypeEnum.DRAWING_SHAPE));
}
function Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462476) {
  return {
    id: Wr,
    commandId: ToggleSheetsShapeFlipCommand.id,
    type: MenuItemType.BUTTON,
    title: "sheets-shape-ui.flipHorizontal",
    tooltip: "sheets-shape-ui.flipHorizontal",
    icon: "FlipHorizontalIcon",
    hidden$: qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462476),
    params: () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227 = Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462476);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227.drawingId,
        flipH: true
      } : undefined;
    }
  };
}
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478) {
  return {
    id: Gr,
    commandId: ToggleSheetsShapeFlipCommand.id,
    type: MenuItemType.BUTTON,
    title: "sheets-shape-ui.flipVertical",
    tooltip: "sheets-shape-ui.flipVertical",
    icon: "FlipVerticalIcon",
    hidden$: qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478),
    params: () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229 = Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.drawingId,
        flipV: true
      } : undefined;
    }
  };
}
const ai = "sheets-shape-ui.ribbon.shape-format.style-control",
  oi = "sheets-shape-ui.ribbon.shape-format.text-control",
  si = "sheets-shape-ui.ribbon.shape-format.formula-control",
  ci = "sheets-shape-ui.ribbon.shape-format.arrange-forward",
  li = "sheets-shape-ui.ribbon.shape-format.arrange-backward",
  ui = "sheets-shape-ui.ribbon.shape-format.arrange-front",
  di = "sheets-shape-ui.ribbon.shape-format.arrange-back";
function fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462512) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462512.get(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462514 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462512.get(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462515 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462512.get(SheetsShapeService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462512),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462515.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.drawingId) : null;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 ? resolveActiveShapeQuickStylePresetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444) ?? "" : "");
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462514.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.id === UpdateSheetsShapeDataMutation.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252();
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252(), () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.dispose();
    };
  });
}
function pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462520) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462520.get(IDrawingManagerService).getFocusDrawings();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522.length === 1 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521.drawingType) === DrawingTypeEnum.DRAWING_SHAPE ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522[0] : null;
}
function mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462527 = false) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462528 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526.get(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462529 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526.get(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462530 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526.get(SheetsShapeService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.next(true);
          return;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462530.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.drawingId);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462527 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.formulaBinding == null);
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462529.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462528.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.id === UpdateSheetsShapeDataMutation.id && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260();
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260(), () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262.dispose();
    };
  });
}
function hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536.get(IDrawingManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536.get(SheetsShapeService);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537.focus$["pipe"](startWith(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537.getFocusDrawings()), map(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462536),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538.getShapeTypeById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.drawingId) : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268 === undefined || isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268);
  }));
}
function gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462542) {
  return {
    id: Nr.id,
    type: MenuItemType.SELECTOR,
    icon: "PaintIcon",
    title: "shape-editor-ui.toolbar.quickStyles",
    tooltip: "shape-editor-ui.toolbar.quickStyles",
    selections: [{
      label: {
        name: Xr,
        hoverable: false,
        selectable: false
      }
    }],
    value$: fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462542),
    hidden$: mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462542)
  };
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462544) {
  return {
    id: Pr.id,
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
    hidden$: hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462544)
  };
}
function vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462548 = false) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 => ({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546,
    type: MenuItemType.BUTTON,
    label: {
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547,
      hoverable: false,
      selectable: false
    },
    hidden$: mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462548)
  });
}
const yi = vi(ai, Zr),
  bi = vi(oi, Qr),
  xi = vi(si, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30, true);
function Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 => ({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552,
    commandId: SetDrawingArrangeCommand.id,
    type: MenuItemType.BUTTON,
    icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555,
    tooltip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555,
    hidden$: mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272),
    params: () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.subUnitId,
        drawingIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.drawingId],
        arrangeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553
      } : undefined;
    }
  });
}
const Ci = Si(ci, ArrangeTypeEnum.forward, "MoveUpIcon", "shape-editor-ui.arrange.forward"),
  wi = Si(li, ArrangeTypeEnum.backward, "MoveDownIcon", "shape-editor-ui.arrange.backward"),
  Ti = Si(ui, ArrangeTypeEnum.front, "TopmostIcon", "shape-editor-ui.arrange.front"),
  Ei = Si(di, ArrangeTypeEnum.back, "BottomIcon", "shape-editor-ui.arrange.back");
function Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560) {
  return {
    id: jr.id,
    type: MenuItemType.BUTTON,
    icon: "ShapeFormatSettingIcon",
    title: "sheets-shape-ui.formatShape",
    tooltip: "sheets-shape-ui.formatShape",
    hidden$: mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560),
    params: () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273.drawingId
      } : undefined;
    }
  };
}
const Oi = {
    [MenuManagerPosition.RIBBON]: {
      [Dr]: {
        order: 100,
        title: "sheets-shape-ui.formatShape",
        contextual: true,
        "sheets-shape-ui.ribbon.shape-format.quick-styles": {
          order: 0,
          [Nr.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: gi
          },
          [Pr.id]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1,
              showLabel: true
            },
            menuItemFactory: fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1
          }
        },
        "sheets-shape-ui.ribbon.shape-format.style": {
          order: 1,
          [ai]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 104
            },
            menuItemFactory: yi
          }
        },
        "sheets-shape-ui.ribbon.shape-format.text": {
          order: 2,
          [oi]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 344
            },
            menuItemFactory: bi
          }
        },
        "sheets-shape-ui.ribbon.shape-format.arrange": {
          order: 3,
          [Wr]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1
            },
            menuItemFactory: Jr
          },
          [Gr]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1
            },
            menuItemFactory: Yr
          },
          [ci]: {
            order: 2,
            gridLayout: {
              row: 1,
              column: 2
            },
            menuItemFactory: Ci
          },
          [li]: {
            order: 3,
            gridLayout: {
              row: 2,
              column: 2
            },
            menuItemFactory: wi
          },
          [ui]: {
            order: 4,
            gridLayout: {
              row: 1,
              column: 3
            },
            menuItemFactory: Ti
          },
          [di]: {
            order: 5,
            gridLayout: {
              row: 2,
              column: 3
            },
            menuItemFactory: Ei
          }
        },
        "sheets-shape-ui.ribbon.shape-format.formula": {
          order: 4,
          [si]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 120
            },
            menuItemFactory: xi
          }
        },
        "sheets-shape-ui.ribbon.shape-format.advanced": {
          order: 5,
          [jr.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: Di
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
  ki = {
    [RibbonInsertGroup.MEDIA]: {
      [Cr.id]: {
        order: 4,
        menuItemFactory: Hr
      }
    },
    [RibbonInsertGroup.OTHERS]: {
      [Ar.id]: {
        order: 0,
        gridLayout: {
          row: 1,
          column: 1,
          rowSpan: 2,
          showLabel: true
        },
        menuItemFactory: Ur
      }
    },
    [ContextMenuPosition.DRAWING]: {
      [ContextMenuGroup.OTHERS]: {
        [Wr]: {
          order: 4,
          menuItemFactory: Jr
        },
        [Gr]: {
          order: 5,
          menuItemFactory: Yr
        }
      }
    }
  };
export { Oi as SheetsShapeUIContextualRibbonSchema, ki as SheetsShapeUIMenuSchema };
