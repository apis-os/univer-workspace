import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ia } from "./boards-board-text-element-default-size.js";
import { Qi, id } from "./internal-core-endo.js";
import { M } from "./boards-board-element-type.js";
import { Xi } from "./boards-board-text-box-shape-text-data.js";
function da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A31 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.horizontal ?? true,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501 = ia(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A31),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.text ?? "",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502 = Qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.textStyle);
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.id ?? generateRandomId(6),
    type: M.Shape,
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.parentId,
    laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.laneId,
    transform: {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.width ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.height ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501.height,
      rotation: 0
    },
    shapeData: {
      shapeType: ShapeTypeEnum.Rect,
      isTextBox: true,
      fill: {
        fillType: ShapeFillEnum.NoFill
      },
      stroke: {
        lineStrokeType: ShapeLineTypeEnum.NoLine
      },
      shapeText: Xi({
        fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502.fs,
        horizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A31,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.horizontalAlign ?? HorizontalAlign.LEFT,
        text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41,
        textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502,
        textWrap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.textWrap,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463500.verticalAlign ?? VerticalAlign.TOP,
        wrapStrategy: WrapStrategy.CLIP
      })
    }
  };
}
export { da as createBoardTextBoxShapeElement };
