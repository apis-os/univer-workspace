require("@univerjs/docs-drawing/facade");
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs-pro/engine-shape/facade"),
  n = require("@univerjs/core"),
  r = require("@univerjs/docs/facade"),
  i = require("@univerjs-pro/docs-shape"),
  a = require("@univerjs/core/facade");
var o = class extends r.FDocument {
  insertShape(_0x5ce4d9) {
    let _0x47727d = this._getShapeAdapter();
    if (!_0x47727d) return null;
    try {
      let _0x471277 = _0x47727d.createShape(this._getShapeScope(), _0x5ce4d9);
      return _0x471277
        ? this._createShapeHandle(_0x471277)
        : (console.warn("[Doc Shape Facade]: Failed to insert Shape."), null);
    } catch (_0xa19af5) {
      return (
        console.warn("[Doc Shape Facade]: Failed to insert Shape.", _0xa19af5),
        null
      );
    }
  }
  getShape(_0x136497) {
    let _0x28c257 = this._getShapeAdapter();
    if (!_0x28c257) return null;
    try {
      let _0x418500 = _0x28c257.getShape({
        ...this._getShapeScope(),
        shapeId: _0x136497,
      });
      return _0x418500
        ? this._createShapeHandle(_0x418500)
        : (console.warn(
            '[Doc Shape Facade]: Shape "' + _0x136497 + '" was not found.',
          ),
          null);
    } catch (_0x43f689) {
      return (
        console.warn(
          '[Doc Shape Facade]: Failed to read Shape "' + _0x136497 + "\x22.",
          _0x43f689,
        ),
        null
      );
    }
  }
  getShapes() {
    let _0x3427d7 = this._getShapeAdapter();
    if (!_0x3427d7) return [];
    try {
      return _0x3427d7
        .listShapes(this._getShapeScope())
        .map((_0x58958b) => this._createShapeHandle(_0x58958b));
    } catch (_0x5e6a1b) {
      return (
        console.warn("[Doc Shape Facade]: Failed to list Shapes.", _0x5e6a1b),
        []
      );
    }
  }
  _getShapeScope() {
    return {
      hostType: n.UniverInstanceType["UNIVER_DOC"],
      unitId: this.getId(),
      subUnitId: this.getId(),
    };
  }
  _getShapeAdapter() {
    return this._injector["get"](e.IShapeHostAdapterRegistry).get(
      n.UniverInstanceType["UNIVER_DOC"],
    );
  }
  _createShapeHandle(_0x3d02a6) {
    let _0x3e755c = {
      hostType: n.UniverInstanceType["UNIVER_DOC"],
      unitId: _0x3d02a6.unitId,
      subUnitId: _0x3d02a6.subUnitId,
      shapeId: _0x3d02a6.shapeId,
    };
    return (0, e.isConnectorShape)(_0x3d02a6.shapeType)
      ? this._injector["createInstance"](
          t.FConnectorShape,
          _0x3e755c,
          this._injector,
        )
      : this._injector["createInstance"](t.FShape, _0x3e755c, this._injector);
  }
};
r.FDocument["extend"](o);
var s = class extends a.FEnum {
  get DocShapeAnchorPosition() {
    return i.DocShapeAnchorPosition;
  }
};
a.FEnum["extend"](s);
