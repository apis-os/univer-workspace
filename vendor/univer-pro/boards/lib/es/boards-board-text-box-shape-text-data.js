import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ha, id } from "./internal-core-endo.js";
import { va } from "./boards-board-sticky-element.js";
import { mi } from "./boards-board-shape-text-document.js";
const Gi = ShapeTextWrapType.None,
  Ki = ShapeTextAutoFitType.SpAutoFit;
function qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388 = Gi) {
  return {
    autoFitType: Ki,
    textWrap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388
  };
}
function Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.horizontal !== false,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.horizontalAlign ?? HorizontalAlign.LEFT,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.verticalAlign ?? VerticalAlign.TOP,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463407 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.wrapStrategy ?? WrapStrategy.CLIP;
  return {
    ...qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.textWrap),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.bold === undefined ? null : {
      bold: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.bold
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.color === undefined ? null : {
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.color
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.fontFamily === undefined ? null : {
      fontFamily: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.fontFamily
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.fontSize === undefined ? null : {
      fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.fontSize
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.italic === undefined ? null : {
      italic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.italic
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.strikethrough === undefined ? null : {
      strikethrough: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.strikethrough
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.textFill === undefined ? null : {
      textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.textFill
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.underline === undefined ? null : {
      underline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.underline
    }),
    horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405,
    isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A29,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.text,
    textDirection: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A29 ? ShapeTextDirection.Horz : ShapeTextDirection.Vert,
    verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406,
    dataModel: {
      ha: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405,
      va: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406,
      doc: mi({
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463405,
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.id,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.text,
        textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404.textStyle,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463406,
        wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463407
      })
    }
  };
}
export { Xi as createBoardTextBoxShapeTextData };
