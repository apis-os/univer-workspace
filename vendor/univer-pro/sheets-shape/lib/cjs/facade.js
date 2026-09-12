Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs-pro/engine-shape/facade"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets/facade"),
  i = require("@univerjs/sheets-drawing");
function a(_0x51866b, _0x58def3) {
  return function (_0x18f783, _0x1530c2) {
    _0x58def3(_0x18f783, _0x1530c2, _0x51866b);
  };
}
function o(_0x27b944, _0x2bc523, _0x1dfad0, _0x25fa81) {
  var _0x1b7d42 = arguments.length,
    _0x4005a9 =
      _0x1b7d42 < 3
        ? _0x2bc523
        : _0x25fa81 === null
          ? (_0x25fa81 = Object.getOwnPropertyDescriptor(_0x2bc523, _0x1dfad0))
          : _0x25fa81,
    _0x37bdb8;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4005a9 = Reflect.decorate(_0x27b944, _0x2bc523, _0x1dfad0, _0x25fa81);
  else {
    for (var _0x159dcb = _0x27b944.length - 1; _0x159dcb >= 0; _0x159dcb--)
      (_0x37bdb8 = _0x27b944[_0x159dcb]) &&
        (_0x4005a9 =
          (_0x1b7d42 < 3
            ? _0x37bdb8(_0x4005a9)
            : _0x1b7d42 > 3
              ? _0x37bdb8(_0x2bc523, _0x1dfad0, _0x4005a9)
              : _0x37bdb8(_0x2bc523, _0x1dfad0)) || _0x4005a9);
  }
  return (
    _0x1b7d42 > 3 &&
      _0x4005a9 &&
      Object.defineProperty(_0x2bc523, _0x1dfad0, _0x4005a9),
    _0x4005a9
  );
}
let s = class extends t.FShape {
  constructor(_0x112eb6, _0x38b3d2, _0x1354da, _0x5e6bb2, _0x379c0c) {
    (super(_0x112eb6, _0x38b3d2, _0x1354da, _0x5e6bb2),
      (this._sheetDrawingService = _0x379c0c));
  }
  getPlacement() {
    let _0x59bf26 = this._sheetDrawingService["getDrawingByParam"]({
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawingId: this._shapeRef["shapeId"],
    });
    return _0x59bf26 ? (0, i.getSheetDrawingPlacement)(_0x59bf26) : null;
  }
  setPlacement(_0x5d85e5) {
    return this._commandService["syncExecuteCommand"](
      i.SetSheetDrawingPlacementCommand["id"],
      {
        unitId: this._shapeRef["unitId"],
        subUnitId: this._shapeRef["subUnitId"],
        drawings: [
          { drawingId: this._shapeRef["shapeId"], placement: _0x5d85e5 },
        ],
      },
    );
  }
  setPosition(_0x42f036, _0x400117, _0x4b4c70, _0x1fbc8f) {
    var _0x3b9214, _0x3bc288;
    let _0xf23b8c = this._sheetDrawingService["getDrawingByParam"]({
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      drawingId: this._shapeRef["shapeId"],
    });
    if (!_0xf23b8c)
      return (
        console.warn(
          "[Sheet\x20Shape\x20Facade]:\x20Shape\x20\x22" +
            this._shapeRef["shapeId"] +
            '" was not found.',
        ),
        this
      );
    let _0x72bf3d =
        (_0x3b9214 = _0xf23b8c.transform) == null ? undefined : _0x3b9214.width,
      _0x63dd46 =
        (_0x3bc288 = _0xf23b8c.transform) == null
          ? undefined
          : _0x3bc288.height;
    return _0x72bf3d == null || _0x63dd46 == null
      ? (console.warn(
          '[Sheet Shape Facade]: Shape "' +
            this._shapeRef["shapeId"] +
            '" has no transform extent.',
        ),
        this)
      : (this._commandService["syncExecuteCommand"](
          i.SetSheetDrawingPlacementCommand["id"],
          {
            unitId: this._shapeRef["unitId"],
            subUnitId: this._shapeRef["subUnitId"],
            drawings: [
              {
                drawingId: this._shapeRef["shapeId"],
                placement: {
                  kind: i.SheetDrawingAnchorType["Position"],
                  from: {
                    row: _0x42f036,
                    column: _0x400117,
                    rowOffset: _0x4b4c70,
                    columnOffset: _0x1fbc8f,
                  },
                  width: _0x72bf3d,
                  height: _0x63dd46,
                },
              },
            ],
          },
        ),
        this);
  }
};
s = o(
  [
    a(2, e.IShapeHostAdapterRegistry),
    a(3, n.ICommandService),
    a(4, i.ISheetDrawingService),
  ],
  s,
);
var c = class extends r.FWorksheet {
  insertShape(_0x458ab8) {
    let _0xb604e5 = this._getShapeAdapter();
    if (!_0xb604e5) return null;
    try {
      let _0x2d529f = _0xb604e5.createShape(this._getShapeScope(), _0x458ab8);
      return _0x2d529f
        ? this._createShapeHandle(_0x2d529f)
        : (console.warn("[Sheet Shape Facade]: Failed to insert Shape."), null);
    } catch (_0x2db6bb) {
      return (
        console.warn(
          "[Sheet Shape Facade]: Failed to insert Shape.",
          _0x2db6bb,
        ),
        null
      );
    }
  }
  getShape(_0x52adce) {
    let _0x55051f = this._getShapeAdapter();
    if (!_0x55051f) return null;
    try {
      let _0x50984c = { ...this._getShapeScope(), shapeId: _0x52adce },
        _0xeeff20 = _0x55051f.getShape(_0x50984c);
      return _0xeeff20
        ? this._createShapeHandle(_0xeeff20)
        : (console.warn(
            '[Sheet Shape Facade]: Shape "' +
              _0x52adce +
              "\x22\x20was\x20not\x20found.",
          ),
          null);
    } catch (_0x4cf337) {
      return (
        console.warn(
          "[Sheet\x20Shape\x20Facade]:\x20Failed\x20to\x20read\x20Shape\x20\x22" +
            _0x52adce +
            "\x22.",
          _0x4cf337,
        ),
        null
      );
    }
  }
  getShapes() {
    let _0x358d9a = this._getShapeAdapter();
    if (!_0x358d9a) return [];
    try {
      return _0x358d9a
        .listShapes(this._getShapeScope())
        .map((_0x480b9f) => this._createShapeHandle(_0x480b9f));
    } catch (_0x2eea62) {
      return (
        console.warn("[Sheet Shape Facade]: Failed to list Shapes.", _0x2eea62),
        []
      );
    }
  }
  _getShapeScope() {
    return {
      hostType: n.UniverInstanceType["UNIVER_SHEET"],
      unitId: this.getWorkbook().getUnitId(),
      subUnitId: this.getSheetId(),
    };
  }
  _getShapeAdapter() {
    return this._injector["get"](e.IShapeHostAdapterRegistry).get(
      n.UniverInstanceType["UNIVER_SHEET"],
    );
  }
  _createShapeHandle(_0x261290) {
    let {
        unitId: _0x39cfa8,
        subUnitId: _0x44f6af,
        shapeId: _0x3acfb0,
      } = _0x261290,
      _0xc1570c = {
        unitId: _0x39cfa8,
        subUnitId: _0x44f6af,
        shapeId: _0x3acfb0,
        hostType: n.UniverInstanceType["UNIVER_SHEET"],
      };
    return (0, e.isConnectorShape)(_0x261290.shapeType)
      ? this._injector["createInstance"](
          t.FConnectorShape,
          _0xc1570c,
          this._injector,
        )
      : this._injector["createInstance"](s, _0xc1570c, this._injector);
  }
};
(r.FWorksheet["extend"](c),
  Object.defineProperty(exports, "FSheetShape", {
    enumerable: true,
    get: function () {
      return s;
    },
  }));
