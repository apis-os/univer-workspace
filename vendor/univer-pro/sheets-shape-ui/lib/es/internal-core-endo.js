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
import { Fr, Gi, Li, Q, Qi, Wi, Yi, Z, Zi, aa, ca, na, oa, qi, ra, sa, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703 } from "./sheets-shape-ui-sheets-shape-uiplugin.js";
function dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 !== undefined) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 === undefined) {
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781] = undefined;
        continue;
      }
      typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 == "object" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 == "object" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344) ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781] = dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344;
    }
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82;
}
const fr = {
  type: CommandType.COMMAND,
  id: "sheet.command.update-shape-data",
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252.get(SheetsShapeService),
      {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462256,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462257,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462259,
        replaceShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260,
        oldShapeJSON: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462254.getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252.get(IUndoRedoService),
      {
        oldShapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264,
        oldShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265 = {}
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265 : dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462259 || {}),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB84 = {
        id: UpdateSheetsShapeDataMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462256,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462257,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462259,
          replace: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260
        }
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB85 = {
        id: UpdateSheetsShapeDataMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462256,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462266,
          replace: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260
        }
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB84.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB84.params) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263.pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255,
      undoMutations: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB85],
      redoMutations: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB84]
    }), true) : false;
  }
};
function pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462287) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB88 = {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462284,
    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462285,
    shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462287,
    oldShapeJSON: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462286
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282.executeCommand(fr.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB88);
}
function hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306) {
  "@babel/helpers - typeof";

  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784;
  }, hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306);
}
function gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309) {
  if (hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309 || "default");
    if (hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317 = gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316, "string");
  return hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317 + "";
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320;
}
function vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462329 = resolveShapeTextEditorBehaviorShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327,
      dataModel: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327.dataModel ?? {}),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328 ? {
          doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328
        } : null)
      }
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330 = resolveShapeTextEditorWrapStrategy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462329);
  return {
    clip: shouldClipShapeTextDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330),
    wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330
  };
}
var yr = class extends Shape {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787) {
      super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787), J(this, "_props", undefined), J(this, "_formulaAnimation", new FormulaShapeAnimationController(() => this.makeDirty(true), () => this._applyFormulaAutoFitSize())), J(this, "_transformCalculateSrcRect", true), J(this, "_drawingType", DrawingTypeEnum.DRAWING_SHAPE), J(this, "isDrawingObject", true), this._props = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787
      }, this._formulaAnimation["setPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.formulaPresentation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.animateFormulaPresentation !== false), this._init(), this._applyFormulaAutoFitSize();
    }
    _init() {
      this.onTransformChange$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 => {
        this._updateSrcRectByTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345);
      });
    }
    setPrstGeom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790) {
      this._props["prstGeom"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790;
    }
    setEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792) {
      this._props["isEditing"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792, this.makeDirty(true);
    }
    setFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 = true) {
      this._formulaAnimation["setPresentation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795), this._props["formulaPresentation"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, this._applyFormulaAutoFitSize(), this.makeDirty(true);
    }
    _applyFormulaAutoFitSize() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 = this._props["shapeModel"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798.getShapeTextData(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 = normalizeShapeTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799.dataModel),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.doc,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802 = this._formulaAnimation["getAutoFitPresentations"]();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.length === 0) return;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798.updateContext({
        width: this.width,
        height: this.height
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803 = resolveFormulaShapeAutoFitSize({
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 => createShapeFormulaDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347)),
        height: this.height,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798.getShapeData(),
        textRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798.getShapeTextRect({
          left: 0,
          top: 0,
          width: this.width,
          height: this.height
        }),
        width: this.width
      });
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804;
        this.resize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.height), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 = this.getScene()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.getTransformer()) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.debounceRefreshControls();
      }
    }
    get unitId() {
      return this._props["unitId"];
    }
    get subUnitId() {
      return this._props["subUnitId"];
    }
    _updateSrcRectByTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812) {
      if (this._props["srcRect"] == null || !this._transformCalculateSrcRect) return;
      let {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814
        } = this,
        {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 = 0,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 = 0
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812.preValue,
        {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817 = 0,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 = 0,
          right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 = 0,
          bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820 = 0
        } = this._props["srcRect"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 = false;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 = true;
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 = true;
      }
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 && this.setSrcRect({
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824
      });
    }
    setSrcRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838) {
      this._props["srcRect"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838, this.makeDirty(true);
    }
    setFillImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840) {
      this._props["image"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840, this.makeDirty(true);
    }
    set transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842) {
      this._transform = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842;
    }
    get transform() {
      this._transform || this._setTransForm();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 = this._transform["clone"]();
      return this.transformForAngle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844);
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
    _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850 = this._props["shapeModel"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848 ?? this.width,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849 ?? this.height,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26 = {
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.getShapeType(),
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = {
          renderMode: ShapeRenderModeEnum.Path,
          oKey: this.oKey,
          image: this._props["image"],
          angle: this.angle
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.updateContext(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.save();
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {
          top: 0,
          left: 0,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.getDrawingEffectBounds(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 ? this._renderWithCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27);
      }) : (this._releaseRenderCache(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.restore();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.getShapeTextData(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.getShapeTextRect(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.isLineShape();
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.save(), this.getState().flipX && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.scale(-1, 1);
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851 / 2,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852 / 2;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.translate(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.beginPath(), this._drawShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.restore();
      }
    }
    getDrawingPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868) {}
    _drawShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873;
      this._props["isEditing"] || (!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.dataModel) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873.doc) && "isRichText" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.isRichText === false ? this._drawSimpleText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872) : this._drawRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872));
    }
    _drawSimpleText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880) {
      this._drawRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879.text ?? "",
        dataModel: {
          doc: plainShapeTextToDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879, "sheets-shape-text-" + this.oKey)
        }
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880);
    }
    _drawRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886) {
      drawFormulaShapeAnimationLayers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884, this._formulaAnimation, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351) => {
        this._drawRichTextLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351);
      });
    }
    _drawRichTextLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 = this._props["localeService"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.dataModel || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895 = normalizeShapeTextModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.dataModel);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.doc;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 = createShapeFormulaDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.va ?? VerticalAlign.TOP,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.ha ?? HorizontalAlign.LEFT,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900 = vr(this._props["shapeModel"].getShapeData(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.isHorizontal,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 = new DocumentDataModel(prepareShapeTextDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897, {
          isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901 !== false,
          textRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892,
          verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898,
          horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899,
          wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.wrapStrategy
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903 = new DocumentViewModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904 = DocumentSkeleton.create(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.calculate();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.getActualSize().actualHeight,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906 = resolveShapeTextDocumentRenderLayout({
          contentHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905,
          verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898,
          viewportHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.height
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902.updateDocumentStyle({
        pageSize: {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901 === false ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.height : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.contentHeight
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902.updateDocumentDataMargin({
        t: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.marginTop
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.calculate();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907 = new Documents("shape-text-" + this.oKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904, {
        pageMarginLeft: 0,
        pageMarginTop: 0,
        onTextFillImageLoaded: () => this.makeDirty(true)
      });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.resize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.contentHeight), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.translateWithPrecision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.top), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.clip && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.rect(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.clipTop, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.clipHeight), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.clip()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.contentVerticalOffset && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.translateWithPrecision(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.contentVerticalOffset), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.restore(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902.dispose();
    }
    render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928 = false) {
      if (!this.visible) return this.makeDirty(false), this;
      let {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932
        } = this,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933 = this.getRealBound();
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.top, this.isRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927)) {
        let {
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355,
          bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356,
          right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.viewBound;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929 + this.strokeWidth + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930 + this.strokeWidth + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932) return this;
      }
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929 / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930 / 2,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934 = this.transform["getMatrix"]();
      if (this._props["isEditing"]) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 = this.getState(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359 = new Transform();
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.composeMatrix({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.getMatrix();
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926.save(), this._props["shapeModel"].isRenderLinePointsMode === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926.transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5), this._draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926.restore(), this.makeDirty(false), this;
    }
    getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944) {
      let {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948
        } = this.getRealBound(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949 = this.transform["getMatrix"](),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948 / 2,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 = new Transform([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 = this.getParent();
      return (this.isInGroup && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951.classType) === RENDER_CLASS_TYPE.GROUP ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951.ancestorTransform["multiply"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950).invert().applyPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944);
    }
    isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960) {
      let {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964
        } = this.getRealBound(),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 / 2,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 / 2,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965 = this.transform["getMatrix"](),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966 = new Transform([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965[3], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967 = this.getParent(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 = (this.isInGroup && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.classType) === RENDER_CLASS_TYPE.GROUP ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.ancestorTransform["multiply"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966).invert().applyPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 / 2,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969 = this._props["shapeModel"];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.isLineShape() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.isHitLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.x >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.x <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 + this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.y >= -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 - this.strokeWidth / 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.y <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 + this.strokeWidth / 2;
    }
    dispose() {
      this._formulaAnimation["dispose"](), this._props["shapeModel"] = null, super.dispose();
    }
  },
  br = class extends Shape {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981) {
      super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981), J(this, "_shapeId", null), J(this, "_adjName", null), J(this, "_unitId", null), J(this, "_subUnitId", null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981 && this.setShapeProps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981);
    }
    getDrawingSearch() {
      return {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._shapeId
      };
    }
    setShapeProps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.shapeId !== undefined && (this._shapeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.shapeId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.adjName !== undefined && (this._adjName = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.adjName), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.unitId !== undefined && (this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.unitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.subUnitId !== undefined && (this._subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.subUnitId), this.transformByState({
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.height
      });
    }
    _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986) {
      Circle.drawWith(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986, {
        radius: ShapeDefaultConfig.adjHandleSize,
        fill: ShapeDefaultConfig.adjHandleFill,
        stroke: ShapeDefaultConfig.adjHandleStroke,
        strokeWidth: 1,
        evented: true
      });
    }
  };
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336);
  };
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345;
}
Z = X([Y(0, IDrawingManagerService), Y(1, Inject(SheetsShapeService)), Y(2, Inject(LocaleService)), Y(3, IImageIoService), Y(4, IURLImageService), Y(5, Inject(ShapeFormulaService))], Z);
let xr = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087) {
    super(), this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082, this._sheetsShapeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084, this._sheetDrawingShapeRenderController = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087, J(this, "_activeShapeId", null), J(this, "_unitId", null), J(this, "_subUnitId", null), J(this, "_activeShapeAdjustPointList", undefined), J(this, "_shapes", []), J(this, "_baseShapeLeft", 0), J(this, "_baseShapeTop", 0), J(this, "_baseShapeWidth", 0), J(this, "_baseShapeHeight", 0), J(this, "_isStartAdjusting", false), J(this, "_activeAdjustInfo", undefined), J(this, "_activeShapeModel", undefined), J(this, "_adjHandlerPointerMove", undefined), J(this, "_adjHandlerPointerUp", undefined), J(this, "_isShouldShowDrawingShapeAdjust", false), this._registerDrawingFocusChangeHandler(), this._registerDrawingMoveHandler();
  }
  _getShapeAdjustPointListById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461096) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097 = this._sheetsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461096);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.getDrawingPoints();
  }
  clearAdjustControls() {
    this._clearShapeAdjustControls();
  }
  refreshAdjustControls() {
    this._updateShapeAdjustControls(true);
  }
  setShouldShowAdjust(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102) {
    this._isShouldShowDrawingShapeAdjust = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102;
  }
  _getShapeAdjustInfosById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108 = this._sheetsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108.getAdjustInfoByName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107);
  }
  _createShapeAdjustControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114 = false) {
    if (this._unitId === null || this._subUnitId === null || this._activeShapeId === null) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115 = this._renderManagerService["getRenderUnitById"](this._unitId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115.with(SheetSkeletonManagerService).getCurrentSkeleton()) return;
    let {
        scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32 = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117 = this._drawingManagerService["getDrawingByParam"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32),
      {
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117.drawingType !== DrawingTypeEnum.DRAWING_SHAPE) return;
    let {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124,
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125 = 0
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 === undefined) return;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = this._sheetsShapeService["getShapeModel"](this._unitId, this._subUnitId, this._activeShapeId);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.updateContext({
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121 ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 ?? 0
      }), this._activeShapeAdjustPointList = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.getDrawingPoints();
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126 = this._activeShapeAdjustPointList;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.x,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.y;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121 || 0) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 || 0) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125 !== 0) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121 || 0) / 2,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 || 0) / 2,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125 * Math.PI / 180,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14);
      }
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687,
        adjName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.adjName
      };
      this._addShapeAdjustControl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.adjName, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120, this._unitId, this._subUnitId);
    }
  }
  _updateShapeAdjustControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140 = false) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140 && (this._clearShapeAdjustControls(), this._createShapeAdjustControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140));
  }
  _addShapeAdjustControl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148) {
    if (!this._activeShapeId) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142.getObjectIncludeInGroup("shape-adjust-point-" + this._activeShapeId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149.transformByState({
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145 - ShapeDefaultConfig.adjHandleSize,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146 - ShapeDefaultConfig.adjHandleSize
      });
      return;
    }
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34 = {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145 - ShapeDefaultConfig.adjHandleSize,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146 - ShapeDefaultConfig.adjHandleSize,
        adjName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144,
        shapeId: this._activeShapeId,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148,
        width: ShapeDefaultConfig.adjHandleSize + 8,
        height: ShapeDefaultConfig.adjHandleSize + 8,
        zIndex: DRAWING_OBJECT_LAYER_INDEX + 1,
        evented: true
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150 = new br("shape-adjust-point-" + this._activeShapeId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34);
    this._shapes["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150), this._attachAdjustEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142.addObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150, DRAWING_OBJECT_LAYER_INDEX + 1);
  }
  _clearShapeAdjustControls() {
    this._shapes["length"] !== 0 && (this._shapes["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.dispose();
    }), this._shapes = []);
  }
  _updateAdjustControlPositions() {
    this._createShapeAdjustControls();
  }
  _getScrollInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36 = {
      x: 0,
      y: 0
    };
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163.with(SheetSkeletonManagerService).getSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161)) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163.with(SheetScrollManagerService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164.getCurrentScrollState();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162.getSheetBySheetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 = getViewportByCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165.sheetViewStartRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165.sheetViewStartColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163.scene, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 ? {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.viewportScrollX,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.viewportScrollY
    } : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36;
  }
  _getZoomRatio(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178.getSheetBySheetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179.getZoomRatio()) ?? 1;
  }
  _attachAdjustEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186) {
    this.disposeWithMe(toDisposable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184.onPointerDown$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184.getDrawingSearch();
      this._activeAdjustInfo = this._getShapeAdjustInfosById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186), this._activeShapeModel = this._sheetsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.drawingId);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 = this._drawingManagerService["getDrawingByParam"]({
          unitId: this._unitId,
          subUnitId: this._subUnitId,
          drawingId: this._activeShapeId
        }),
        {
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382) {
        let {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382;
        this._baseShapeLeft = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 || 0, this._baseShapeTop = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 || 0, this._baseShapeWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 || 0, this._baseShapeHeight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 || 0;
      }
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 = !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.transform) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.flipX),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.transform) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.flipY),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.angle) || 0;
      this._isStartAdjusting = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.disableObjectsEvent();
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = this._activeAdjustInfo) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.currentAdjustValues) ?? {})
      };
      this._adjHandlerPointerMove = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.onPointerMove$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693) => {
        if (!this._isStartAdjusting) return;
        let {
            offsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694,
            offsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = this._activeAdjustInfo;
        if (this._activeShapeModel && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.disableObjectsEvent(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.setCursor(CURSOR_TYPE.CROSSHAIR);
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
              left: 0,
              top: 0,
              width: this._baseShapeWidth,
              height: this._baseShapeHeight
            },
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._getScrollInfo(this._unitId, this._subUnitId),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = this._getZoomRatio(this._unitId, this._subUnitId),
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.x - this._baseShapeLeft,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.y - this._baseShapeTop;
          if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 !== 0) {
            let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = this._baseShapeWidth / 2,
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = this._baseShapeHeight / 2,
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 * Math.PI / 180,
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2),
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2),
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1;
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 + (-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3);
          }
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = this._baseShapeWidth - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = this._baseShapeHeight - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19);
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
              x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18,
              y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19
            },
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = this._activeShapeModel["calcAdjValues"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6);
          if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627).length === 0) return;
          for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627)) this._activeShapeModel["setAdjustValueByName"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463);
          this._activeShapeModel["updateContext"]({
            width: this._baseShapeWidth,
            height: this._baseShapeHeight
          });
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = this._drawingManagerService["getDrawingByParam"]({
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.subUnitId,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.drawingId
          });
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 && (this._sheetDrawingShapeRenderController["renderDrawingShape"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185), this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.drawingId), this._updateAdjustControlPositions());
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.stopPropagation();
      }), this._adjHandlerPointerUp = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.onPointerUp$["subscribeEvent"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) => {
        this._adjHandlerPointerMove["unsubscribe"](), this._adjHandlerPointerUp["unsubscribe"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.resetCursor();
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = this._activeAdjustInfo;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.unitId,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.subUnitId,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.drawingId,
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = {};
          for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.currentAdjustValues)) {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = this._activeShapeModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.getAdjustValueByName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
          }
          Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3).length > 0 && pr(this._commandService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, {
            oldShapeData: {
              adjustValues: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
            }
          }, {
            adjustValues: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3
          });
        }
        this._activeAdjustInfo = undefined, this._activeShapeModel = undefined, this._isStartAdjusting = false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.enableObjectsEvent();
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.stopPropagation();
    })));
  }
  _registerDrawingMoveHandler() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 = this._univerInstanceService["getCurrentTypeOfUnit$"](UniverInstanceType.UNIVER_SHEET);
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190.pipe(switchMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.activeSheet$["pipe"](switchMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110) return EMPTY;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.getUnitId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.scene;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 ? of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113) : EMPTY;
    })) : EMPTY)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.getTransformerByCreate();
      this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.onPointerMove$["subscribeEvent"](() => {
        this._isShouldShowDrawingShapeAdjust;
      })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.changeStart$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 => {
        let {
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118;
        this._createShapeAdjustControls(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 !== null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.size === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.values().next().value instanceof yr && this.setShouldShowAdjust(true);
      })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.changing$["subscribe"](() => {
        this._isShouldShowDrawingShapeAdjust && this._clearShapeAdjustControls();
      })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.onPointerUp$["subscribeEvent"](() => {
        this._isShouldShowDrawingShapeAdjust && (this.setShouldShowAdjust(false), this._createShapeAdjustControls());
      })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.changeEnd$["subscribe"](() => {
        this._unitId && this._subUnitId && this._activeShapeId && this._drawingManagerService["getDrawingByParam"]({
          unitId: this._unitId,
          subUnitId: this._subUnitId,
          drawingId: this._activeShapeId
        }) && (this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(this._unitId, this._subUnitId, this._activeShapeId), this._updateAdjustControlPositions());
      }));
    }));
  }
  _registerDrawingFocusChangeHandler() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.id !== UpdateSheetsShapeDataMutation.id) return;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.params;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398 === this._unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 === this._subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 === this._activeShapeId && this.refreshAdjustControls();
    })), this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.length === 1) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405[0];
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.drawingType === DrawingTypeEnum.DRAWING_SHAPE && this._univerInstanceService["getUnitType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.unitId) === UniverInstanceType.UNIVER_SHEET) {
          this._activeShapeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.drawingId;
          let {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122;
          this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, this._activeShapeId), this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, this._subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, this._clearShapeAdjustControls(), this._createShapeAdjustControls();
          return;
        }
      }
      this._activeShapeId = null, this._activeShapeAdjustPointList = undefined, this._unitId = null, this._subUnitId = null, this._clearShapeAdjustControls();
    })), this.disposeWithMe(this._drawingManagerService["update$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.length === 1) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407[0];
        ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = this._drawingManagerService["getDrawingByParam"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.drawingType) === DrawingTypeEnum.DRAWING_SHAPE && this._updateShapeAdjustControls(true);
      }
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 => {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411) this._activeShapeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.drawingId && (this._activeShapeId = null, this._activeShapeAdjustPointList = undefined, this._unitId = null, this._subUnitId = null, this._clearShapeAdjustControls());
    }));
  }
};
xr = X([Y(0, IDrawingManagerService), Y(1, Inject(SheetsShapeService)), Y(2, Inject(IRenderManagerService)), Y(3, Inject(Z)), Y(4, IUniverInstanceService), Y(5, ICommandService)], xr);
const Sr = {
    id: "drawing.operation.set-drawing-active",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354.get(IDrawingManagerService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354.get(IRenderManagerService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354.get(xr);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355 == null) return true;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355.length > 0) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357.getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355[0].unitId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359.scene;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192) {
          let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414,
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355[0],
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = getDrawingShapeKeyByDrawingSearch({
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414,
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415
            }, undefined),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.getObjectIncludeInGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417) {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360;
            (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357.getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355[0].unitId)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360.scene["getTransformer"]()) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360.activeAnObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417);
          }
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356.focusDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358.setShouldShowAdjust(false);
      }
      return true;
    }
  },
  Cr = {
    type: CommandType.COMMAND,
    id: "sheet.command.menu-insert-shape",
    handler: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462370 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368.get(IUniverInstanceService));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462370) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368.get(SheetsSelectionsService).getCurrentLastSelection();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462372 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368.get(ICommandService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462373,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462374
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462370,
        {
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462375,
          enhanceParams: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369,
        {
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462377
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462373,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462374,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462375,
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462377,
          shapeId: generateRandomId()
        };
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193 = isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462375),
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462375 === ShapeTypeEnum.Rect;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376.startArrow || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376.endArrow) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92.shapeData = {
          ln: {
            startArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376.startArrow ? {
              type: ShapeArrowTypeEnum.Arrow,
              size: ShapeArrowSizeEnum.Medium
            } : undefined,
            endArrow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376.endArrow ? {
              type: ShapeArrowTypeEnum.Arrow,
              size: ShapeArrowSizeEnum.Large
            } : undefined
          }
        }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376.horizontal || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376.vertical) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92.shapeData = createShapeTextBoxShapeData({
          fill: {
            fillType: ShapeFillEnum.SolidFill,
            color: "#FFFFFF"
          },
          isHorizontal: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462376.horizontal,
          stroke: {
            lineStrokeType: ShapeLineTypeEnum.SolidLine,
            width: 1,
            color: "#bcbcbc"
          }
        }));
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462372.syncExecuteCommand(InsertShapeCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92);
      return setTimeout(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462372.executeCommand(Sr.id, [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462373,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462374,
          drawingId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92.shapeId
        }]);
      }, 200), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378;
    }
  },
  wr = "sheet.shape.edit.panel",
  Tr = "sheet.shape.object-list.panel",
  Er = "sheet.shape.floating-toolbar",
  Dr = "sheets-shape-ui.ribbon.shape-format",
  Or = createInternalEditorID("SHAPE_TEXT"),
  kr = "sheet.shape.text.float-menu",
  Ar = {
    id: "sheet.operation.open-shape-object-list-panel",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390.get(ISidebarService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462393 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390.get(LocaleService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462394 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462395 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390.get(ICommandService);
      return getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462394) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391.value) === "close" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392.close(Tr), true) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392.open({
        id: Tr,
        header: {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462393.t("sheets-shape-ui.objectListPanel.title")
        },
        children: {
          label: Tr
        },
        onClose: () => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462395.syncExecuteCommand(SetDrawingSelectedOperation.id, []);
        },
        width: 360
      }), true) : false;
    }
  },
  jr = {
    type: CommandType.OPERATION,
    id: "sheet.operation.open-sheet-shape-format-panel",
    handler() {
      return true;
    }
  };
function Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402.get(IDrawingManagerService).getFocusDrawings(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403.length === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403[0] : null;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404.drawingType !== DrawingTypeEnum.DRAWING_SHAPE) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462405 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402.get(SheetsShapeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462405.getShapeTypeById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404.drawingId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462407 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462405.getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404.drawingId);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406 === undefined || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462407 ? null : {
    drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462404,
    shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462407,
    shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406
  };
}
const Nr = {
    id: "sheet.operation.apply-shape-quick-style",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462415) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416 = Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417 = getShapeQuickStylePreset((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462415 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462415.presetId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462415 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462415.value) ?? "");
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417.type !== getShapeQuickStyleType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416.shapeData)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462418 = applyQuickStyleToShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416.shapeData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462418) return false;
      let {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462419
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414.get(ICommandService).executeCommand(fr.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462419.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462419.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462419.drawingId,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462418,
        oldShapeJSON: {
          oldShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416.shapeData
        }
      });
    }
  },
  Pr = {
    id: "sheet.operation.update-shape-type",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462427) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428 = Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462426),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462427 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462427.shapeType) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462427 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462427.value);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429 || isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428.shapeType) || isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462430 = cloneShapeDataForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428.shapeData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462430) return false;
      let {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462426.get(ICommandService).executeCommand(fr.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431.drawingId,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462430,
        replaceShapeData: true,
        oldShapeJSON: {
          oldShapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428.shapeType,
          oldShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428.shapeData
        }
      });
    }
  };
Fr = X([Y(0, Inject(DrawingImageClipService)), Y(1, Inject(IDrawingManagerService))], Fr);
const Ir = "sheet.shape.picker.component",
  Lr = "sheet.image-clip.shape-picker.component";
const Xr = "sheets-shape-ui.shape-format.quick-style-gallery",
  Zr = "sheets-shape-ui.shape-format.style-ribbon-control",
  Qr = "sheets-shape-ui.shape-format.text-ribbon-control",
  var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 = "sheets-shape-ui.shape-format.formula-ribbon-control";
var Ai = "@univerjs-pro/sheets-shape-ui",
  ji = "1.0.0-insiders.20260907-70fc579";
Li = X([Y(0, IRenderManagerService)], Li);
Q = X([Y(0, IPermissionService)], Q);
Wi = X([Y(0, Inject(ComponentManager)), Y(1, Inject(IconManager))], Wi);
Gi = X([Y(1, IDrawingManagerService), Y(2, Inject(IRenderManagerService)), Y(3, IUniverInstanceService), Y(4, Inject(Fr))], Gi);
qi = X([Y(0, IMenuManagerService), Y(1, IRibbonService), Y(2, IDrawingManagerService), Y(3, IUniverInstanceService), Y(4, IRenderManagerService), Y(5, Inject(ShapeFloatingToolbarService))], qi);
Yi = X([Y(0, Inject(IUniverInstanceService)), Y(1, Inject(SheetInterceptorService)), Y(2, Inject(ISheetDrawingService)), Y(3, Inject(SheetsShapeService))], Yi);
Zi = X([Y(1, Inject(Q)), Y(2, Inject(MobileShapeEditorService)), Y(3, IDrawingManagerService), Y(4, IContextService), Y(5, Inject(SheetsShapeService))], Zi);
Qi = X([Y(1, Inject(DocSelectionManagerService)), Y(2, Inject(DocCanvasPopManagerService)), Y(3, Inject(DocSelectionRenderService)), Y(4, ICommandService), Y(5, Inject(DocEventManagerService)), Y(6, Inject(ShapeTextHyperLinkPopupService)), Y(7, Inject(DocInterceptorService)), Y(8, Inject(DocRenderController)), Y(9, Inject(Q))], Qi);
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702 = X([Y(0, ICommandService), Y(1, IRenderManagerService), Y(2, IDrawingManagerService), Y(3, IUniverInstanceService), Y(4, Inject(DrawingRenderService)), Y(5, Inject(Z))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702);
na = X([Y(1, Inject(IRenderManagerService)), Y(2, Inject(IDrawingManagerService)), Y(3, Inject(SheetsShapeService))], na);
ra = X([Y(0, Inject(SheetSkeletonService)), Y(1, Inject(ISheetClipboardService)), Y(2, Inject(ISheetDrawingService)), Y(3, Inject(SheetsShapeService)), Y(4, Inject(SheetsDrawingGroupCopyPasteController))], ra);
aa = X([Y(1, ICommandService), Y(2, IRenderManagerService), Y(3, IDrawingManagerService), Y(4, IUniverInstanceService), Y(5, Inject(SheetsShapeService)), Y(6, Inject(xr)), Y(7, Inject(na))], aa);
oa = X([Y(0, Inject(SheetPrintInterceptorService)), Y(1, IDrawingManagerService), Y(2, Inject(Z))], oa);
sa = X([Y(0, Inject(ICommandService)), Y(1, Inject(LocaleService)), Y(2, Inject(SheetPermissionCheckController))], sa);
ca = X([Y(0, IUniverInstanceService), Y(1, Inject(ISidebarService)), Y(2, IMenuManagerService), Y(3, Inject(SheetsShapeService)), Y(4, Inject(LocaleService)), Y(5, ICommandService), Y(6, IDrawingManagerService), Y(7, Inject(SheetCanvasPopManagerService)), Y(8, IContextService), Y(9, IRenderManagerService), Y(10, Inject(Q))], ca);
J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, "type", UniverInstanceType.UNIVER_SHEET), J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, "pluginName", "SHEET_SHAPE_UI_PLUGIN"), J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, "packageName", Ai), J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, "version", ji), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703 = X([DependentOn(UniverLicensePlugin, UniverDocsPlugin, UniverDrawingPlugin, UniverDrawingUIPlugin, UniverRenderEnginePlugin, UniverSheetsPlugin, UniverDocsUIPlugin, UniverSheetsDrawingPlugin, UniverShapeEditorPlugin, UniverSheetsDrawingUIPlugin, UniverSheetsShapePlugin, UniverSheetsUIPlugin, UniverShapeEditorUIPlugin), Y(1, Inject(Injector)), Y(2, ICommandService), Y(3, IConfigService), Y(4, IRenderManagerService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703);
export { fr, J, yr, Lr, Cr, pr, Nr, jr, Or, wr, Tr, Ir, Er, Zr, Xr, Qr, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30, kr, br, Dr, xr, Ar, Sr, Pr };
