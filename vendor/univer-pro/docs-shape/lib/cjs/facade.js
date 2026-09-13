require("@univerjs/docs-drawing/facade");
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs-pro/engine-shape/facade"),
  n = require("@univerjs/core"),
  r = require("@univerjs/docs/facade"),
  i = require("@univerjs-pro/docs-shape"),
  a = require("@univerjs/core/facade");
var o = class extends r.FDocument {
  insertShape(var_core_value_sig27E5) {
    let var_core_value_sig8061 = this._getShapeAdapter();
    if (!var_core_value_sig8061) return null;
    try {
      let var_core_value_sig2AD8 = var_core_value_sig8061.createShape(this._getShapeScope(), var_core_value_sig27E5);
      return var_core_value_sig2AD8 ? this._createShapeHandle(var_core_value_sig2AD8) : (console.warn("[Doc Shape Facade]: Failed to insert Shape."), null);
    } catch (var_core_value_sig2AD0) {
      return console.warn("[Doc Shape Facade]: Failed to insert Shape.", var_core_value_sig2AD0), null;
    }
  }
  getShape(var_core_value_sig4D4C) {
    let var_core_value_sigC9E0 = this._getShapeAdapter();
    if (!var_core_value_sigC9E0) return null;
    try {
      let var_core_value_sig3EEE = var_core_value_sigC9E0.getShape({
        ...this._getShapeScope(),
        shapeId: var_core_value_sig4D4C
      });
      return var_core_value_sig3EEE ? this._createShapeHandle(var_core_value_sig3EEE) : (console.warn('[Doc Shape Facade]: Shape "' + var_core_value_sig4D4C + '" was not found.'), null);
    } catch (var_core_value_sigBC46) {
      return console.warn('[Doc Shape Facade]: Failed to read Shape "' + var_core_value_sig4D4C + "\x22.", var_core_value_sigBC46), null;
    }
  }
  getShapes() {
    let var_core_value_sig76BA = this._getShapeAdapter();
    if (!var_core_value_sig76BA) return [];
    try {
      return var_core_value_sig76BA.listShapes(this._getShapeScope()).map(var_core_value_sig7524 => this._createShapeHandle(var_core_value_sig7524));
    } catch (var_core_value_sig3D7D) {
      return console.warn("[Doc Shape Facade]: Failed to list Shapes.", var_core_value_sig3D7D), [];
    }
  }
  _getShapeScope() {
    return {
      hostType: n.UniverInstanceType["UNIVER_DOC"],
      unitId: this.getId(),
      subUnitId: this.getId()
    };
  }
  _getShapeAdapter() {
    return this._injector["get"](e.IShapeHostAdapterRegistry).get(n.UniverInstanceType["UNIVER_DOC"]);
  }
  _createShapeHandle(var_core_value_sigFBFA) {
    let var_core_value_sigF602 = {
      hostType: n.UniverInstanceType["UNIVER_DOC"],
      unitId: var_core_value_sigFBFA.unitId,
      subUnitId: var_core_value_sigFBFA.subUnitId,
      shapeId: var_core_value_sigFBFA.shapeId
    };
    return (0, e.isConnectorShape)(var_core_value_sigFBFA.shapeType) ? this._injector["createInstance"](t.FConnectorShape, var_core_value_sigF602, this._injector) : this._injector["createInstance"](t.FShape, var_core_value_sigF602, this._injector);
  }
};
r.FDocument["extend"](o);
var s = class extends a.FEnum {
  get DocShapeAnchorPosition() {
    return i.DocShapeAnchorPosition;
  }
};
a.FEnum["extend"](s);
