import { IShapeHostAdapterRegistry, isConnectorShape } from "@univerjs-pro/engine-shape";
import { FConnectorShape, FShape } from "@univerjs-pro/engine-shape/facade";
import { ICommandService, UniverInstanceType } from "@univerjs/core";
import { FWorksheet } from "@univerjs/sheets/facade";
import { ISheetDrawingService, SetSheetDrawingPlacementCommand, SheetDrawingAnchorType, getSheetDrawingPlacement } from "@univerjs/sheets-drawing";
import { p } from "./facade-sheets-shape-fsheet-shape.js";
function d(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657);
  };
}
function f(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666;
}
p = f([d(2, IShapeHostAdapterRegistry), d(3, ICommandService), d(4, ISheetDrawingService)], p);
var m = class extends FWorksheet {
  insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = this._getShapeAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) return null;
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.createShape(this._getShapeScope(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 ? this._createShapeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) : (console.warn("[Sheet Shape Facade]: Failed to insert Shape."), null);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      return console.warn("[Sheet Shape Facade]: Failed to insert Shape.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5), null;
    }
  }
  getShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = this._getShapeAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) return null;
    try {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
          ...this._getShapeScope(),
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.getShape(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 ? this._createShapeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) : (console.warn('[Sheet Shape Facade]: Shape "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 + '" was not found.'), null);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      return console.warn('[Sheet Shape Facade]: Failed to read Shape "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 + "\x22.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52), null;
    }
  }
  getShapes() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = this._getShapeAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) return [];
    try {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.listShapes(this._getShapeScope()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => this._createShapeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46));
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54) {
      return console.warn("[Sheet Shape Facade]: Failed to list Shapes.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54), [];
    }
  }
  _getShapeScope() {
    return {
      hostType: UniverInstanceType.UNIVER_SHEET,
      unitId: this.getWorkbook().getUnitId(),
      subUnitId: this.getSheetId()
    };
  }
  _getShapeAdapter() {
    return this._injector["get"](IShapeHostAdapterRegistry).get(UniverInstanceType.UNIVER_SHEET);
  }
  _createShapeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) {
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
        hostType: UniverInstanceType.UNIVER_SHEET
      };
    return isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.shapeType) ? this._injector["createInstance"](FConnectorShape, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1, this._injector) : this._injector["createInstance"](p, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1, this._injector);
  }
};
FWorksheet.extend(m);
