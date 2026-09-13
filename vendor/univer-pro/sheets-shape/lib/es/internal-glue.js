import { IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, buildConnectorEndpointUpdate, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createDefaultInsertedShapeData, createFreeConnectorPointInfo, createUniqueShapeName, getBasicShapeRotateBound, isConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, routeConnectorLineShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, getSheetCommandTarget } from "@univerjs/sheets";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, SheetDrawingAnchorType, SheetDrawingTransformPlanService, UniverSheetsDrawingPlugin, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IDrawingManagerService, UniverDrawingPlugin } from "@univerjs/drawing";
import { Q } from "./sheets-shape-sheets-shape.js";
import { Ce, De, Ee, Te } from "./sheets-shape-plugin.js";
function ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528) {
  "@babel/helpers - typeof";

  return ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139;
  }, ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528);
}
function oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531) {
  if (ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 || "default");
    if (ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530);
}
function se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 = oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538, "string");
  return ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 + "";
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543 = se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542;
}
var ce = class extends Disposable {
  constructor() {
    super(), X(this, "_shapes", new Map()), X(this, "_linesIds", new Set()), X(this, "_groupIds", new Set());
  }
  addShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144);
    return this._shapes["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145), isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141) && this._linesIds["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145;
  }
  getBasicShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 of this._linesIds) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = this._shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.getShapeRelation();
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153;
          ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.from) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.shapeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.from,
            lineShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673,
            isFrom: true
          }), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.to) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.shapeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.to,
            lineShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673,
            isFrom: false
          });
        }
      }
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6;
  }
  getLineShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = this._shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.getShapeRelation();
  }
  getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 = this._shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.getShapeType();
  }
  hasShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165) {
    return this._shapes["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165);
  }
  getShapeDisplayNames() {
    return Array.from(this._shapes["values"]()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.getName() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.getId());
  }
  removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = this._shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 && (isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.getShapeType()) && this._linesIds["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167), this._shapes["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167));
  }
  toJSON() {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [];
    return this._shapes["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 => {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.toJSON());
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8;
  }
  fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171) {
      let {
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
          name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = this.addShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.shapeData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.isLineShape() && this._linesIds["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643);
    }
  }
  dispose() {
    this._disposed || (this._shapes["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.dispose();
    }), this._shapes["clear"](), this._linesIds["clear"](), this._groupIds["clear"](), super.dispose());
  }
};
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548);
  };
}
function le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557;
}
Q = le([Z(0, IResourceManagerService)], Q);
var be = "@univerjs-pro/sheets-shape",
  xe = "1.0.0-insiders.20260907-70fc579";
Ce = le([Z(0, ICommandService), Z(1, Inject(Q)), Z(2, ISheetDrawingService), Z(3, IUniverInstanceService)], Ce);
Te = le([Z(0, ICommandService), Z(1, Inject(SheetInterceptorService)), Z(2, Inject(SheetSkeletonService)), Z(3, Inject(Q)), Z(4, Inject(IDrawingManagerService)), Z(5, Inject(IShapeHostAdapterRegistry)), Z(6, Inject(Ce))], Te);
Ee = le([Z(0, Inject(Q)), Z(1, Inject(Ce)), Z(2, Inject(SheetDrawingTransformPlanService))], Ee);
X(De, "type", UniverInstanceType.UNIVER_SHEET), X(De, "pluginName", "SHEET_SHAPE_PLUGIN"), X(De, "packageName", be), X(De, "version", xe), De = le([DependentOn(UniverLicensePlugin, UniverDrawingPlugin, UniverShapePlugin, UniverSheetsPlugin, UniverSheetsDrawingPlugin), Z(1, Inject(Injector)), Z(2, IConfigService)], De);
export { X, ce };
