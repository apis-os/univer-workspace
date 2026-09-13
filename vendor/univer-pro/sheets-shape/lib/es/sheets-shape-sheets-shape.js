import { IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, buildConnectorEndpointUpdate, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createDefaultInsertedShapeData, createFreeConnectorPointInfo, createUniqueShapeName, getBasicShapeRotateBound, isConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, routeConnectorLineShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, getSheetCommandTarget } from "@univerjs/sheets";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, SheetDrawingAnchorType, SheetDrawingTransformPlanService, UniverSheetsDrawingPlugin, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IDrawingManagerService, UniverDrawingPlugin } from "@univerjs/drawing";
import { X, ce } from "./internal-glue.js";
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177) {
    super(), this._resourcesManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, X(this, "_shapeModelManagerMap", new Map()), this._initSnapshot();
  }
  _ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = this._shapeModelManagerMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = new Map(), this._shapeModelManagerMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 = new ce(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182;
  }
  insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192) {
    this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188).addShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192);
  }
  removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201) {
    this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200).removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201);
  }
  getBasicShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206).getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207);
  }
  getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212).getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213);
  }
  hasShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218).hasShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219);
  }
  getShapeTypeById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224).getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225);
  }
  getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 = this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232._shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.getShapeData();
  }
  getShapeDisplayNames(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240).getShapeDisplayNames();
  }
  getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244)._shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245);
  }
  getBasicShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250).getBasicShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251);
  }
  getLineShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 = this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256)._shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.getShapeRelation();
  }
  setShapeType() {}
  _serializeShapeForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {},
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = this._shapeModelManagerMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.toJSON();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.length > 0 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682);
    }), JSON.stringify(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7);
  }
  _deserializeShapeForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) {
    Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 => {
      this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686).fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686]);
    });
  }
  toJSON() {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = {};
    return this._shapeModelManagerMap["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689) => {
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689] = {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) => {
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.toJSON();
      });
    }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9;
  }
  fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271) {
    Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692];
      Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => {
        this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651).fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651]);
      });
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: "SHEET_SHAPE_PLUGIN",
      businesses: [UniverInstanceType.UNIVER_SHEET],
      toJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => this._serializeShapeForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696),
      parseJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697),
      onLoad: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) => {
        this._deserializeShapeForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699);
      },
      onUnLoad: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = this._shapeModelManagerMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.dispose();
        }), this._shapeModelManagerMap["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102));
      }
    });
  }
  dispose() {
    this._shapeModelManagerMap["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.dispose();
      });
    });
  }
};
export { Q as SheetsShapeService };
