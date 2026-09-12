import "@univerjs/docs-drawing/facade";
import {
  IShapeHostAdapterRegistry as _0x50dd03,
  isConnectorShape as _0x2dc527,
} from "@univerjs-pro/engine-shape";
import {
  FConnectorShape as _0x5d1137,
  FShape as _0x5455d3,
} from "@univerjs-pro/engine-shape/facade";
import { UniverInstanceType as _0x59d17d } from "@univerjs/core";
import { FDocument as _0x30f46f } from "@univerjs/docs/facade";
import { DocShapeAnchorPosition as _0xe720f3 } from "@univerjs-pro/docs-shape";
import { FEnum as _0x452dbc } from "@univerjs/core/facade";
var c = class extends _0x30f46f {
  insertShape(_0x9c9440) {
    let _0x97760d = this._getShapeAdapter();
    if (!_0x97760d) return null;
    try {
      let _0x52f684 = _0x97760d.createShape(this._getShapeScope(), _0x9c9440);
      return _0x52f684
        ? this._createShapeHandle(_0x52f684)
        : (console.warn("[Doc Shape Facade]: Failed to insert Shape."), null);
    } catch (_0x60c709) {
      return (
        console.warn(
          "[Doc\x20Shape\x20Facade]:\x20Failed\x20to\x20insert\x20Shape.",
          _0x60c709,
        ),
        null
      );
    }
  }
  getShape(_0x13e263) {
    let _0x33db63 = this._getShapeAdapter();
    if (!_0x33db63) return null;
    try {
      let _0x3526e = _0x33db63.getShape({
        ...this._getShapeScope(),
        shapeId: _0x13e263,
      });
      return _0x3526e
        ? this._createShapeHandle(_0x3526e)
        : (console.warn(
            "[Doc\x20Shape\x20Facade]:\x20Shape\x20\x22" +
              _0x13e263 +
              '" was not found.',
          ),
          null);
    } catch (_0x49cfb4) {
      return (
        console.warn(
          '[Doc Shape Facade]: Failed to read Shape "' + _0x13e263 + "\x22.",
          _0x49cfb4,
        ),
        null
      );
    }
  }
  getShapes() {
    let _0x1eaa18 = this._getShapeAdapter();
    if (!_0x1eaa18) return [];
    try {
      return _0x1eaa18
        .listShapes(this._getShapeScope())
        .map((_0x38b818) => this._createShapeHandle(_0x38b818));
    } catch (_0x5d9db4) {
      return (
        console.warn("[Doc Shape Facade]: Failed to list Shapes.", _0x5d9db4),
        []
      );
    }
  }
  _getShapeScope() {
    return {
      hostType: _0x59d17d.UNIVER_DOC,
      unitId: this.getId(),
      subUnitId: this.getId(),
    };
  }
  _getShapeAdapter() {
    return this._injector["get"](_0x50dd03).get(_0x59d17d.UNIVER_DOC);
  }
  _createShapeHandle(_0x58b6ae) {
    let _0xcfdf46 = {
      hostType: _0x59d17d.UNIVER_DOC,
      unitId: _0x58b6ae.unitId,
      subUnitId: _0x58b6ae.subUnitId,
      shapeId: _0x58b6ae.shapeId,
    };
    return _0x2dc527(_0x58b6ae.shapeType)
      ? this._injector["createInstance"](_0x5d1137, _0xcfdf46, this._injector)
      : this._injector["createInstance"](_0x5455d3, _0xcfdf46, this._injector);
  }
};
_0x30f46f.extend(c);
var l = class extends _0x452dbc {
  get DocShapeAnchorPosition() {
    return _0xe720f3;
  }
};
_0x452dbc.extend(l);
export {};
