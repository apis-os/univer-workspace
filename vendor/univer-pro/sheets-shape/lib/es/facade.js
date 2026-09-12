import {
  IShapeHostAdapterRegistry as _0x46edc2,
  isConnectorShape as _0x1401f7,
} from "@univerjs-pro/engine-shape";
import {
  FConnectorShape as _0xc95bdc,
  FShape as _0x102c5d,
} from "@univerjs-pro/engine-shape/facade";
import {
  ICommandService as _0x3e665a,
  UniverInstanceType as _0xae7e,
} from "@univerjs/core";
import { FWorksheet as _0x8a9581 } from "@univerjs/sheets/facade";
import {
  ISheetDrawingService as _0x12b8e3,
  SetSheetDrawingPlacementCommand as _0x8c687b,
  SheetDrawingAnchorType as _0x45a599,
  getSheetDrawingPlacement as _0x123a5b,
} from "@univerjs/sheets-drawing";
function d(_0x29c826, _0x4f9649) {
  return function (_0x233b92, _0xc7900d) {
    _0x4f9649(_0x233b92, _0xc7900d, _0x29c826);
  };
}
function f(_0x147c6a, _0x47789b, _0x203818, _0xfa65bd) {
  var _0x350d85 = arguments.length,
    _0x5b0fee =
      _0x350d85 < 3
        ? _0x47789b
        : _0xfa65bd === null
          ? (_0xfa65bd = Object.getOwnPropertyDescriptor(_0x47789b, _0x203818))
          : _0xfa65bd,
    _0x1d2a39;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5b0fee = Reflect.decorate(_0x147c6a, _0x47789b, _0x203818, _0xfa65bd);
  else {
    for (var _0x2ecb6f = _0x147c6a.length - 1; _0x2ecb6f >= 0; _0x2ecb6f--)
      (_0x1d2a39 = _0x147c6a[_0x2ecb6f]) &&
        (_0x5b0fee =
          (_0x350d85 < 3
            ? _0x1d2a39(_0x5b0fee)
            : _0x350d85 > 3
              ? _0x1d2a39(_0x47789b, _0x203818, _0x5b0fee)
              : _0x1d2a39(_0x47789b, _0x203818)) || _0x5b0fee);
  }
  return (
    _0x350d85 > 3 &&
      _0x5b0fee &&
      Object.defineProperty(_0x47789b, _0x203818, _0x5b0fee),
    _0x5b0fee
  );
}
let p = class extends _0x102c5d {
  constructor(_0x6b8108, _0x3fc6ed, _0x5eb211, _0x421cce, _0x94e3cf) {
    (super(_0x6b8108, _0x3fc6ed, _0x5eb211, _0x421cce),
      (this._sheetDrawingService = _0x94e3cf));
  }
  getPlacement() {
    let _0x19520e = this._sheetDrawingService["getDrawingByParam"]({
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawingId: this._shapeRef["shapeId"],
    });
    return _0x19520e ? _0x123a5b(_0x19520e) : null;
  }
  setPlacement(_0x3112e2) {
    return this._commandService["syncExecuteCommand"](_0x8c687b.id, {
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawings: [
        { drawingId: this._shapeRef["shapeId"], placement: _0x3112e2 },
      ],
    });
  }
  setPosition(_0x3fe8c9, _0x3c297a, _0x256808, _0x4d3004) {
    var _0x43e65e, _0x4753d7;
    let _0x53455e = this._sheetDrawingService["getDrawingByParam"]({
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawingId: this._shapeRef["shapeId"],
    });
    if (!_0x53455e)
      return (
        console.warn(
          '[Sheet Shape Facade]: Shape "' +
            this._shapeRef["shapeId"] +
            "\x22\x20was\x20not\x20found.",
        ),
        this
      );
    let _0x2ea756 =
        (_0x43e65e = _0x53455e.transform) == null ? undefined : _0x43e65e.width,
      _0x1e9c88 =
        (_0x4753d7 = _0x53455e.transform) == null
          ? undefined
          : _0x4753d7.height;
    return _0x2ea756 == null || _0x1e9c88 == null
      ? (console.warn(
          '[Sheet Shape Facade]: Shape "' +
            this._shapeRef["shapeId"] +
            '" has no transform extent.',
        ),
        this)
      : (this._commandService["syncExecuteCommand"](_0x8c687b.id, {
          unitId: this._shapeRef["unitId"],
          subUnitId: this._shapeRef["subUnitId"],
          drawings: [
            {
              drawingId: this._shapeRef["shapeId"],
              placement: {
                kind: _0x45a599.Position,
                from: {
                  row: _0x3fe8c9,
                  column: _0x3c297a,
                  rowOffset: _0x256808,
                  columnOffset: _0x4d3004,
                },
                width: _0x2ea756,
                height: _0x1e9c88,
              },
            },
          ],
        }),
        this);
  }
};
p = f([d(2, _0x46edc2), d(3, _0x3e665a), d(4, _0x12b8e3)], p);
var m = class extends _0x8a9581 {
  insertShape(_0xe09740) {
    let _0x282afa = this._getShapeAdapter();
    if (!_0x282afa) return null;
    try {
      let _0x3f6ebc = _0x282afa.createShape(this._getShapeScope(), _0xe09740);
      return _0x3f6ebc
        ? this._createShapeHandle(_0x3f6ebc)
        : (console.warn("[Sheet Shape Facade]: Failed to insert Shape."), null);
    } catch (_0x4c0032) {
      return (
        console.warn(
          "[Sheet Shape Facade]: Failed to insert Shape.",
          _0x4c0032,
        ),
        null
      );
    }
  }
  getShape(_0xaaff5e) {
    let _0x3e55fc = this._getShapeAdapter();
    if (!_0x3e55fc) return null;
    try {
      let _0x4953ab = { ...this._getShapeScope(), shapeId: _0xaaff5e },
        _0x4e6c0b = _0x3e55fc.getShape(_0x4953ab);
      return _0x4e6c0b
        ? this._createShapeHandle(_0x4e6c0b)
        : (console.warn(
            '[Sheet Shape Facade]: Shape "' + _0xaaff5e + '" was not found.',
          ),
          null);
    } catch (_0x2ec1f6) {
      return (
        console.warn(
          '[Sheet Shape Facade]: Failed to read Shape "' + _0xaaff5e + "\x22.",
          _0x2ec1f6,
        ),
        null
      );
    }
  }
  getShapes() {
    let _0xa581ad = this._getShapeAdapter();
    if (!_0xa581ad) return [];
    try {
      return _0xa581ad
        .listShapes(this._getShapeScope())
        .map((_0x3c43e5) => this._createShapeHandle(_0x3c43e5));
    } catch (_0xdd6fea) {
      return (
        console.warn("[Sheet Shape Facade]: Failed to list Shapes.", _0xdd6fea),
        []
      );
    }
  }
  _getShapeScope() {
    return {
      hostType: _0xae7e.UNIVER_SHEET,
      unitId: this.getWorkbook().getUnitId(),
      subUnitId: this.getSheetId(),
    };
  }
  _getShapeAdapter() {
    return this._injector["get"](_0x46edc2).get(_0xae7e.UNIVER_SHEET);
  }
  _createShapeHandle(_0x423579) {
    let {
        unitId: _0x294cf5,
        subUnitId: _0x96ba08,
        shapeId: _0x395bbb,
      } = _0x423579,
      _0x26836c = {
        unitId: _0x294cf5,
        subUnitId: _0x96ba08,
        shapeId: _0x395bbb,
        hostType: _0xae7e.UNIVER_SHEET,
      };
    return _0x1401f7(_0x423579.shapeType)
      ? this._injector["createInstance"](_0xc95bdc, _0x26836c, this._injector)
      : this._injector["createInstance"](p, _0x26836c, this._injector);
  }
};
_0x8a9581.extend(m);
export { p as FSheetShape };
