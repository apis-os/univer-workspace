import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { et, nt, tt } from "./internal-core-endo.js";
function Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 : JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936));
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940) {
  return Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, {
    'configurable': true,
    'enumerable': false,
    'writable': true,
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938;
}
function rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958 = et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.shapeData
    };
  if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.fill) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959;
    fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56, 'fill', Qe(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.fmtScheme) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.fillStyleLst[1]) ?? {
      'fillType': ShapeFillEnum.SolidFill,
      'color': tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, "acc1")
    }));
  }
  if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.stroke) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960;
    fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56, "stroke", Qe(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.fmtScheme) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960.lnStyleLst[1]) ?? {
      'lineStrokeType': ShapeLineTypeEnum.SolidLine,
      'color': tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, "acc1"),
      'width': 1.5
    }));
  }
  if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.shapeText && 'isRichText' in var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.shapeText && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.shapeText["isRichText"] === false) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.shapeText
      };
    Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => {
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627] === undefined && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627]);
    }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.shapeText = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10;
  }
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956,
    'shapeData': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56
  };
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998) {
    case "image":
      return DrawingTypeEnum.DRAWING_IMAGE;
    case "shape":
      return DrawingTypeEnum.DRAWING_SHAPE;
    case "chart":
      return DrawingTypeEnum.DRAWING_CHART;
    case "table":
      return DrawingTypeEnum.DRAWING_TABLE;
    case "group":
      return DrawingTypeEnum.DRAWING_GROUP;
    case "media":
      return DrawingTypeEnum.DRAWING_VIDEO;
    default:
      return DrawingTypeEnum.DRAWING_SHAPE;
  }
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.type === "shape" ? rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.transform;
  return {
    'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000,
    'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001,
    'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005.id,
    'drawingType': lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005.type),
    'transform': {
      'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.left ?? 0,
      'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.top ?? 0,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.width ?? 0,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.height ?? 0,
      'angle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.rotation ?? 0,
      'flipX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.flipX,
      'flipY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.flipY
    },
    'hidden': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005.visible === false,
    'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005,
    'sourcePageType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003
  };
}
export { N as slideElementToDrawing };
