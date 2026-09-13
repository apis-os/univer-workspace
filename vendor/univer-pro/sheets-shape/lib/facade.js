import { IShapeHostAdapterRegistry as var_core_value_sig9E2F, isConnectorShape as var_core_value_sigD082 } from "@univerjs-pro/engine-shape";
import { FConnectorShape as var_core_value_sigDBB7, FShape as var_core_value_sigD0A8 } from "@univerjs-pro/engine-shape/facade";
import { ICommandService as var_core_value_sigF4B9, UniverInstanceType as var_core_value_sig5CEE } from "@univerjs/core";
import { FWorksheet as var_core_value_sigE92A } from "@univerjs/sheets/facade";
import { ISheetDrawingService as var_core_value_sig362B, SetSheetDrawingPlacementCommand as var_core_value_sig5CA5, SheetDrawingAnchorType as var_core_value_sigE90F, getSheetDrawingPlacement as var_core_value_sigEFD4 } from "@univerjs/sheets-drawing";
function d(var_core_value_sig09B8, var_core_value_sig6F91) {
  return function (var_core_value_sig8061, var_core_value_sig4D4C) {
    var_core_value_sig6F91(var_core_value_sig8061, var_core_value_sig4D4C, var_core_value_sig09B8);
  };
}
function f(var_core_value_sigF9C7, var_core_value_sig8895, var_core_value_sigC80B, var_core_value_sig284F) {
  var var_core_value_sigE154 = arguments.length,
    var_core_value_sig4632 = var_core_value_sigE154 < 3 ? var_core_value_sig8895 : var_core_value_sig284F === null ? var_core_value_sig284F = Object.getOwnPropertyDescriptor(var_core_value_sig8895, var_core_value_sigC80B) : var_core_value_sig284F,
    var_core_value_sig12F2;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig4632 = Reflect.decorate(var_core_value_sigF9C7, var_core_value_sig8895, var_core_value_sigC80B, var_core_value_sig284F);else {
    for (var var_core_value_sig2259 = var_core_value_sigF9C7.length - 1; var_core_value_sig2259 >= 0; var_core_value_sig2259--) (var_core_value_sig12F2 = var_core_value_sigF9C7[var_core_value_sig2259]) && (var_core_value_sig4632 = (var_core_value_sigE154 < 3 ? var_core_value_sig12F2(var_core_value_sig4632) : var_core_value_sigE154 > 3 ? var_core_value_sig12F2(var_core_value_sig8895, var_core_value_sigC80B, var_core_value_sig4632) : var_core_value_sig12F2(var_core_value_sig8895, var_core_value_sigC80B)) || var_core_value_sig4632);
  }
  return var_core_value_sigE154 > 3 && var_core_value_sig4632 && Object.defineProperty(var_core_value_sig8895, var_core_value_sigC80B, var_core_value_sig4632), var_core_value_sig4632;
}
let p = class extends var_core_value_sigD0A8 {
  constructor(var_core_value_sigC9E0, var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigF602, var_core_value_sig1BBD) {
    super(var_core_value_sigC9E0, var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigF602), this._sheetDrawingService = var_core_value_sig1BBD;
  }
  getPlacement() {
    let var_core_value_sigF704 = this._sheetDrawingService["getDrawingByParam"]({
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawingId: this._shapeRef["shapeId"]
    });
    return var_core_value_sigF704 ? var_core_value_sigEFD4(var_core_value_sigF704) : null;
  }
  setPlacement(var_core_value_sig2BCF) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig5CA5.id, {
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawings: [{
        drawingId: this._shapeRef["shapeId"],
        placement: var_core_value_sig2BCF
      }]
    });
  }
  setPosition(var_core_value_sig0D69, var_core_value_sig480E, var_core_value_sig26DB, var_core_value_sigF0F9) {
    var var_core_value_sig1A0F, var_core_value_sigFBA4;
    let var_core_value_sig4383 = this._sheetDrawingService["getDrawingByParam"]({
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawingId: this._shapeRef["shapeId"]
    });
    if (!var_core_value_sig4383) return console.warn('[Sheet Shape Facade]: Shape "' + this._shapeRef["shapeId"] + "\x22\x20was\x20not\x20found."), this;
    let var_core_value_sig186C = (var_core_value_sig1A0F = var_core_value_sig4383.transform) == null ? undefined : var_core_value_sig1A0F.width,
      var_core_value_sigD955 = (var_core_value_sigFBA4 = var_core_value_sig4383.transform) == null ? undefined : var_core_value_sigFBA4.height;
    return var_core_value_sig186C == null || var_core_value_sigD955 == null ? (console.warn('[Sheet Shape Facade]: Shape "' + this._shapeRef["shapeId"] + '" has no transform extent.'), this) : (this._commandService["syncExecuteCommand"](var_core_value_sig5CA5.id, {
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawings: [{
        drawingId: this._shapeRef["shapeId"],
        placement: {
          kind: var_core_value_sigE90F.Position,
          from: {
            row: var_core_value_sig0D69,
            column: var_core_value_sig480E,
            rowOffset: var_core_value_sig26DB,
            columnOffset: var_core_value_sigF0F9
          },
          width: var_core_value_sig186C,
          height: var_core_value_sigD955
        }
      }]
    }), this);
  }
};
p = f([d(2, var_core_value_sig9E2F), d(3, var_core_value_sigF4B9), d(4, var_core_value_sig362B)], p);
var m = class extends var_core_value_sigE92A {
  insertShape(var_core_value_sig48BD) {
    let var_core_value_sig429F = this._getShapeAdapter();
    if (!var_core_value_sig429F) return null;
    try {
      let var_core_value_sig2AD8 = var_core_value_sig429F.createShape(this._getShapeScope(), var_core_value_sig48BD);
      return var_core_value_sig2AD8 ? this._createShapeHandle(var_core_value_sig2AD8) : (console.warn("[Sheet Shape Facade]: Failed to insert Shape."), null);
    } catch (var_core_value_sig2AD0) {
      return console.warn("[Sheet Shape Facade]: Failed to insert Shape.", var_core_value_sig2AD0), null;
    }
  }
  getShape(var_core_value_sigF62A) {
    let var_core_value_sig8178 = this._getShapeAdapter();
    if (!var_core_value_sig8178) return null;
    try {
      let var_core_value_sig3EEE = {
          ...this._getShapeScope(),
          shapeId: var_core_value_sigF62A
        },
        var_core_value_sigBC46 = var_core_value_sig8178.getShape(var_core_value_sig3EEE);
      return var_core_value_sigBC46 ? this._createShapeHandle(var_core_value_sigBC46) : (console.warn('[Sheet Shape Facade]: Shape "' + var_core_value_sigF62A + '" was not found.'), null);
    } catch (var_core_value_sig3D7D) {
      return console.warn('[Sheet Shape Facade]: Failed to read Shape "' + var_core_value_sigF62A + "\x22.", var_core_value_sig3D7D), null;
    }
  }
  getShapes() {
    let var_core_value_sigE9ED = this._getShapeAdapter();
    if (!var_core_value_sigE9ED) return [];
    try {
      return var_core_value_sigE9ED.listShapes(this._getShapeScope()).map(var_core_value_sig7524 => this._createShapeHandle(var_core_value_sig7524));
    } catch (var_core_value_sig27E5) {
      return console.warn("[Sheet Shape Facade]: Failed to list Shapes.", var_core_value_sig27E5), [];
    }
  }
  _getShapeScope() {
    return {
      hostType: var_core_value_sig5CEE.UNIVER_SHEET,
      unitId: this.getWorkbook().getUnitId(),
      subUnitId: this.getSheetId()
    };
  }
  _getShapeAdapter() {
    return this._injector["get"](var_core_value_sig9E2F).get(var_core_value_sig5CEE.UNIVER_SHEET);
  }
  _createShapeHandle(var_core_value_sigB577) {
    let {
        unitId: var_core_value_sig9572,
        subUnitId: var_core_value_sigD873,
        shapeId: var_core_value_sigA12B
      } = var_core_value_sigB577,
      var_core_value_sigF230 = {
        unitId: var_core_value_sig9572,
        subUnitId: var_core_value_sigD873,
        shapeId: var_core_value_sigA12B,
        hostType: var_core_value_sig5CEE.UNIVER_SHEET
      };
    return var_core_value_sigD082(var_core_value_sigB577.shapeType) ? this._injector["createInstance"](var_core_value_sigDBB7, var_core_value_sigF230, this._injector) : this._injector["createInstance"](p, var_core_value_sigF230, this._injector);
  }
};
var_core_value_sigE92A.extend(m);
export { p as FSheetShape };
