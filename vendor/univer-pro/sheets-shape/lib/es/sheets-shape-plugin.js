import { IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, buildConnectorEndpointUpdate, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createDefaultInsertedShapeData, createFreeConnectorPointInfo, createUniqueShapeName, getBasicShapeRotateBound, isConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, routeConnectorLineShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, getSheetCommandTarget } from "@univerjs/sheets";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, SheetDrawingAnchorType, SheetDrawingTransformPlanService, UniverSheetsDrawingPlugin, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IDrawingManagerService, UniverDrawingPlugin } from "@univerjs/drawing";
import { X, ce } from "./internal-glue.js";
import { de, fe, ge, he, me, pe, ue, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60, ve, ye } from "./sheets-shape-insert-sheets-shape.js";
import { Q } from "./sheets-shape-sheets-shape.js";
function Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989;
  return {
    left: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983.left) ?? 0,
    top: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.top) ?? 0,
    width: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985.width) ?? 200,
    height: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986.height) ?? 200,
    rotation: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.rotation) ?? 0,
    flipX: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988.flipX) ?? false,
    flipY: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989.flipY) ?? false
  };
}
let Ce = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279) {
    this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276, this._shapeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277, this._drawingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, X(this, "hostType", UniverInstanceType.UNIVER_SHEET);
  }
  get shapeChanged$() {
    return {
      subscribe: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 => {
          (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.id === ue.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.id === de.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.id === var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.id === ye.id) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111({
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.params["unitId"]
          });
        });
        return {
          unsubscribe: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.dispose()
        };
      }
    };
  }
  getShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 = this._drawingService["getDrawingData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.subUnitId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.shapeId],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = this._shapeService["getShapeType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.shapeId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.drawingType !== DrawingTypeEnum.DRAWING_SHAPE || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.transform;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287,
      shapeData: Tools.deepClone(this._shapeService["getShapeDataById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.shapeId) ?? {}),
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.name,
      description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.hidden !== true,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.selectable !== false,
      transform: {
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.left) ?? 0,
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.top) ?? 0,
        width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.width) ?? 200,
        height: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.height) ?? 200,
        rotation: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.angle) ?? 0,
        flipX: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.flipX) ?? false,
        flipY: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.flipY) ?? false
      }
    };
  }
  listShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = this._drawingService["getDrawingData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.subUnitId) ?? {};
    return Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.drawingType) === DrawingTypeEnum.DRAWING_SHAPE).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 => this.getShape({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.drawingId
    })).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117);
  }
  listShapesInUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, UniverInstanceType.UNIVER_SHEET);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.getSheets().flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 => this.listShapes({
      hostType: this.hostType,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.getSheetId()
    }))) ?? [];
  }
  createShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = generateRandomId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 = Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.shapeData ?? createDefaultInsertedShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.shapeType));
    return this._commandService["syncExecuteCommand"](fe.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.shapeType,
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.name,
      description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.description,
      position: {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.left,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.top
      },
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.height,
      rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.rotation,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.flipX,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.flipY,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.visible ?? true,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.selectable ?? true
    }) ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.shapeType,
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.name,
      description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.visible ?? true,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.selectable ?? true,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303
    } : null;
  }
  updateShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = this.getShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.transform,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.transform
    };
    return this._commandService["syncExecuteCommand"](pe.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.shapeId,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.shapeType ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.shapeType) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.shapeType,
      shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.shapeData ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.shapeData,
      position: {
        x: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.left,
        y: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.top
      },
      width: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.width,
      height: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.height,
      rotation: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.rotation,
      flipX: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.flipX,
      flipY: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.flipY,
      name: "name" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.name : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.name,
      description: "description" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.description : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.visible ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.visible,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.selectable ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.selectable
    });
  }
  createFormulaLastValueMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 = this.getShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.shapeData["formulaBinding"];
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 ? null : {
      id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.shapeId,
        shapeData: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.shapeData,
          formulaBinding: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322,
            lastValue: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320)
          }
        },
        replace: true,
        formulaLastValueGuard: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319
      }
    };
  }
  removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328) {
    return this._commandService["syncExecuteCommand"](RemoveSheetDrawingCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.unitId,
      drawings: [{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.shapeId,
        drawingType: DrawingTypeEnum.DRAWING_SHAPE
      }]
    });
  }
  bringToFront(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330) {
    return this._arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, ArrangeTypeEnum.front);
  }
  bringForward(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332) {
    return this._arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, ArrangeTypeEnum.forward);
  }
  sendBackward(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334) {
    return this._arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, ArrangeTypeEnum.backward);
  }
  sendToBack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336) {
    return this._arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, ArrangeTypeEnum.back);
  }
  setZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339) {
    return this._commandService["syncExecuteCommand"](SetDrawingArrangeCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.subUnitId,
      drawingIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.shapeId],
      zOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339
    });
  }
  _arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) {
    return this._commandService["syncExecuteCommand"](SetDrawingArrangeCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.subUnitId,
      drawingIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.shapeId],
      arrangeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343
    });
  }
};
const we = {};
let Te = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346, this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, this._sheetSkeletonService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, this._sheetsShapeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, this._shapeHostAdapterRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, this._initCommands(), this._initCommandInterceptor(), this.disposeWithMe(this._shapeHostAdapterRegistry["register"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352));
  }
  _initCommands() {
    [fe, pe, me, he, ge, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60, ve, ue, de, ye, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119)));
  }
  _initCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      getMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.id === RemoveSheetDrawingCommand.id) {
          let {
              drawings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.params,
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.drawingType === DrawingTypeEnum.DRAWING_SHAPE);
          if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length === 0) return {
            preRedos: [],
            redos: [],
            preUndos: [],
            undos: []
          };
          let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = [],
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [];
          return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => {
            let {
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
                drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 = this._sheetsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624) throw TypeError("Fail to get shape model, get: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624);
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.push({
              id: de.id,
              params: {
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
                shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623
              }
            }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push({
              id: ue.id,
              params: {
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
                shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623,
                shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.getShapeType(),
                shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.getShapeData()
              }
            });
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._sheetsShapeService["getBasicShapeRelation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.lineShapeId,
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.isFrom,
                var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 ? {
                  from: undefined
                } : {
                  to: undefined
                },
                var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 ? {
                  from: {
                    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.shapeId,
                    cxnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.cxnIndex
                  }
                } : {
                  to: {
                    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.shapeId,
                    cxnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.cxnIndex
                  }
                };
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.push({
                id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
                params: {
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
                  shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466,
                  shapeData: {
                    relation: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
                  }
                }
              }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push({
                id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
                params: {
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
                  shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466,
                  shapeData: {
                    relation: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1
                  }
                }
              });
            }
          }), {
            preRedos: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1,
            redos: [],
            preUndos: [],
            undos: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2
          };
        }
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.id === SetSheetDrawingCommand.id) {
          let {
              drawings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.params,
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.drawingType === DrawingTypeEnum.DRAWING_SHAPE);
          if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.length === 0) return {
            preRedos: [],
            redos: [],
            preUndos: [],
            undos: []
          };
          let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [],
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [];
          for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3) {
            let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613,
              transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633;
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614) continue;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = this._sheetsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615) throw TypeError("Fail to get shape model, get: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615);
            if (isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.getShapeType())) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = this._sheetsShapeService["getLineShapeRelation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613);
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
                id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
                params: {
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
                  shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613,
                  shapeData: {
                    relation: {
                      from: undefined,
                      to: undefined
                    }
                  }
                }
              }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.push({
                id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
                params: {
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
                  shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613,
                  shapeData: {
                    relation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468
                  }
                }
              }));
            } else {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = this._sheetsShapeService["getBasicShapeRelation"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613);
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.length > 0) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.lineShapeId,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.isFrom,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = this._sheetsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
                if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) continue;
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.getStartConnectInfo(),
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.getEndConnectInfo();
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 ? this._addLineRerouteUpdates(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614) : this._addLineFollowShapeUpdates(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614);
              }
            }
          }
          return {
            preRedos: [],
            redos: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4,
            preUndos: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5,
            undos: []
          };
        }
        return {
          preRedos: [],
          redos: [],
          preUndos: [],
          undos: []
        };
      }
    }));
  }
  _getConnectPointInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362) return null;
    let {
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
        cxnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 = this._sheetsShapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 = this._drawingManagerService["getDrawingByParam"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365
    });
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.transform)) return null;
    let {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 = 0,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = 0,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 = 0,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 = false,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 = false,
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.transform;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.left ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.top ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.width ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.height ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.flipX ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.flipY ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.angle ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.updateContext({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.getConnectionSiteList().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.index === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376) return null;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.x : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.x,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.y : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.y;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 != null) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 * Math.PI / 180,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4;
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1;
    }
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.ang / 60000;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = 180 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 || 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 % 360 + 360) % 360;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 = getBasicShapeRotateBound({
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 || 0);
    return {
      point: {
        x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9,
        y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10
      },
      angle: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11,
      bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377
    };
  }
  _addLineRerouteUpdates(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = this._sheetSkeletonService["getSkeleton"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.getShapeRelation(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.getAdjustNames(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 = {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = {};
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.getAdjustValueByName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123);
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 ?? 0;
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 = this._getConnectPointInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 = this._getConnectPointInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.getShapeType(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = routeConnectorLineShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = computeConnectorRouteLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.getShapeType()),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = this._drawingManagerService["getDrawingData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398]) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.lineType;
          for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.adjustValues)) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617;
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.transform,
              width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.worldRect["width"],
              height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.worldRect["height"],
              left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.worldRect["left"],
              top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.worldRect["top"],
              flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.worldRect["flipX"],
              flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.worldRect["flipY"],
              angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.rotation
            },
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406),
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397,
              drawingType: DrawingTypeEnum.DRAWING_SHAPE,
              drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398,
              transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2,
              sheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635,
              axisAlignSheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636
            },
            {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
              undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639,
              redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640,
              objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641
            } = this._drawingManagerService["getBatchUpdateOp"]([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3]);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402.push({
            id: SetDrawingApplyMutation.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
              op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640,
              objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641,
              type: DrawingApplyType.UPDATE
            }
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.push({
            id: SetDrawingApplyMutation.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
              op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639,
              objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641,
              type: DrawingApplyType.UPDATE
            }
          });
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.removeLinePoints();
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402.push({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129,
          shapeData: {
            adjustValues: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15,
            relation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407
          }
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.push({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127,
          shapeData: {
            adjustValues: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16,
            relation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407
          }
        }
      });
    }
  }
  _addLineFollowShapeUpdates(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 = this._sheetSkeletonService["getSkeleton"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 = this._drawingManagerService["getDrawingByParam"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434
    })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.transform;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438) return;
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.left !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.left || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.top !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.top,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.width !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.height !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.height,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.flipX !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.flipX || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.flipY !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.flipY,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.angle !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.angle;
    if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.left ?? 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.left ?? 0),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.top ?? 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.top ?? 0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = this._drawingManagerService["getDrawingData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428]) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428],
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.transform,
            left: (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439.left) ?? 0) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7,
            top: (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.top) ?? 0) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8
          },
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437),
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427,
            drawingType: DrawingTypeEnum.DRAWING_SHAPE,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428,
            transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4,
            sheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664,
            axisAlignSheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665
          },
          {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667,
            undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668,
            redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670
          } = this._drawingManagerService["getBatchUpdateOp"]([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5]);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.push({
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670,
            type: DrawingApplyType.UPDATE
          }
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.push({
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670,
            type: DrawingApplyType.UPDATE
          }
        });
      }
    } else {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.getStartConnectInfo(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.getEndConnectInfo();
      this._addLineRerouteUpdates(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435);
    }
  }
};
let Ee = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458) {
    super(), this._shapeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, this._shapeAdapter = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457, this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.register(this));
  }
  transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19 = {
      preRedos: [],
      redos: [],
      preUndos: [],
      undos: []
    };
    this._planDeletes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19);
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462.originals) this._planConnector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19);
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19;
  }
  _planDeletes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.mode === "command") for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.deletes) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.originals["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = this._shapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135);
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.drawingType) !== DrawingTypeEnum.DRAWING_SHAPE || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.preRedos["push"]({
        id: de.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.subUnitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.undos["push"]({
        id: ue.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.subUnitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135,
          shapeName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.getName(),
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.getShapeType(),
          shapeData: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.getShapeData())
        }
      }));
    }
  }
  _planConnector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.drawingType !== DrawingTypeEnum.DRAWING_SHAPE || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.deletes["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = this._shapeService["getShapeModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 || !isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.getShapeType())) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.getShapeRelation();
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.updates["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.from && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.updates["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.from["shapeId"]) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.deletes["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.from["shapeId"])) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.to && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.updates["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.to["shapeId"]) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.deletes["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.to["shapeId"])))) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.updates["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = this._toSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 = resolveConnectorRoutePoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.length < 2) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 ?? {}),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.from && this._resolveBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.from["shapeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.from["cxnIndex"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.to && this._resolveBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.to["shapeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.to["cxnIndex"]);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.from && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478 && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.from, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.to && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.to;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 = buildConnectorEndpointUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478 || createFreeConnectorPointInfo((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.point) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.length - 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476[0]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 || createFreeConnectorPointInfo((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.point) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.length - 1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477);
    if (!(!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.transform) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.shapeType || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.shapeData)) {
      if (this._applyUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.mode === "refresh") {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.setShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.shapeType), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.setShapeData(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.shapeData), false);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.redos["push"]({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.subUnitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.shapeType,
          shapeData: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.shapeData),
          replace: true
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.undos["push"]({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.subUnitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.getShapeType(),
          shapeData: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.getShapeData()),
          replace: true
        }
      });
    }
  }
  _resolveBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.deletes["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.updates["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.originals["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 = this._toSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 ? resolveShapeConnectionPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496) : null;
  }
  _toSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21 = {
        hostType: UniverInstanceType.UNIVER_SHEET,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.drawingId
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = this._shapeAdapter["getShape"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.transform ? null : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506,
      transform: {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.transform["left"] ?? 0,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.transform["top"] ?? 0,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.transform["width"] ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.transform["height"] ?? 0,
        rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.transform["angle"] ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.transform["flipX"] ?? false,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.transform["flipY"] ?? false
      }
    };
  }
  _applyUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.transform,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.transform["left"],
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.transform["top"],
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.transform["width"],
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.transform["height"],
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.transform["rotation"],
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.transform["flipX"],
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.transform["flipY"]
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513,
        transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23,
        sheetTransform: transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.skeleton),
        axisAlignSheetTransform: transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.skeleton),
        data: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513.data,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.shapeType,
          shapeData: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.shapeData)
        }
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.updates["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.drawingId, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24);
  }
};
let De = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 = we, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521
    } = merge({}, we, this._config);
    this._configService["setConfig"]("sheets-shape.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521);
  }
  onStarting() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 = this._injector;
    [[ce], [Q], [Ce], [Ee], [Te]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136)), touchDependencies(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526, [[Q], [Ee], [Te]]);
  }
};
export { De as UniverSheetsShapePlugin };
export { Ce, Te, Ee };
