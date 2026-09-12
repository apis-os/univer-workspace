import {
  IShapeHostAdapterRegistry as _0x4704b9,
  ShapeModel as _0x3f232b,
  UniverShapePlugin as _0xb48a5c,
  buildConnectorEndpointUpdate as _0x36d519,
  canApplyShapeFormulaLastValue as _0x36c7d4,
  computeConnectorRouteLayout as _0x6b6ed2,
  createDefaultInsertedShapeData as _0x22f75d,
  createFreeConnectorPointInfo as _0x4a46a4,
  createUniqueShapeName as _0x274a1e,
  getBasicShapeRotateBound as _0x3ada5f,
  isConnectorShape as _0x2de0c6,
  resolveConnectorRoutePoints as _0x33d589,
  resolveShapeConnectionPoint as _0x4ec9f7,
  routeConnectorLineShape as _0x40caaf,
} from "@univerjs-pro/engine-shape";
import {
  ArrangeTypeEnum as _0x2f992d,
  CommandType as _0x2ba7cd,
  DependentOn as _0x103409,
  Disposable as _0x32fe22,
  DrawingTypeEnum as _0xf09c45,
  ICommandService as _0x9c1e4e,
  IConfigService as _0x5c3983,
  IResourceManagerService as _0x45dd33,
  IUndoRedoService as _0x4e1fbc,
  IUniverInstanceService as _0x5d2a03,
  Inject as _0x461959,
  Injector as _0x200320,
  Plugin as _0x1be0be,
  Tools as _0x220f60,
  UniverInstanceType as _0x1fdf63,
  generateRandomId as _0x320a46,
  merge as _0x4b4e76,
  sequenceExecute as _0x765c53,
  touchDependencies as _0x42166c,
} from "@univerjs/core";
import {
  SheetInterceptorService as _0x4a1599,
  SheetSkeletonService as _0x1064b2,
  UniverSheetsPlugin as _0x4ad50c,
  getSheetCommandTarget as _0x4771ec,
} from "@univerjs/sheets";
import {
  ClearSheetDrawingTransformerOperation as _0x27daf8,
  DrawingApplyType as _0x14a90c,
  ISheetDrawingService as _0x2aeab1,
  InsertSheetDrawingCommand as _0x4f3ba0,
  RemoveSheetDrawingCommand as _0x3e4dab,
  SetDrawingApplyMutation as _0x4803b6,
  SetDrawingArrangeCommand as _0x49bb13,
  SetSheetDrawingCommand as _0x139deb,
  SheetDrawingAnchorType as _0x29167f,
  SheetDrawingTransformPlanService as _0x498e57,
  UniverSheetsDrawingPlugin as _0x2fef67,
  transformToAxisAlignPosition as _0x12afd4,
  transformToDrawingPosition as _0x5470b8,
} from "@univerjs/sheets-drawing";
import { UniverLicensePlugin as _0x585382 } from "@univerjs-pro/license";
import {
  IDrawingManagerService as _0x2f9033,
  UniverDrawingPlugin as _0x40b0cd,
} from "@univerjs/drawing";
const re = 200,
  ie = 200;
function ae(_0x28eab8) {
  "@babel/helpers - typeof";
  return (
    (ae =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1a9bd8) {
            return typeof _0x1a9bd8;
          }
        : function (_0x1508ca) {
            return _0x1508ca &&
              typeof Symbol == "function" &&
              _0x1508ca.constructor === Symbol &&
              _0x1508ca !== Symbol.prototype
              ? "symbol"
              : typeof _0x1508ca;
          }),
    ae(_0x28eab8)
  );
}
function oe(_0x5b58a0, _0x515c7c) {
  if (ae(_0x5b58a0) != "object" || !_0x5b58a0) return _0x5b58a0;
  var _0x174778 = _0x5b58a0[Symbol.toPrimitive];
  if (_0x174778 !== undefined) {
    var _0x424519 = _0x174778.call(_0x5b58a0, _0x515c7c || "default");
    if (ae(_0x424519) != "object") return _0x424519;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x515c7c === "string" ? String : Number)(_0x5b58a0);
}
function se(_0x433f4a) {
  var _0x360ed1 = oe(_0x433f4a, "string");
  return ae(_0x360ed1) == "symbol" ? _0x360ed1 : _0x360ed1 + "";
}
function X(_0xf803ae, _0x12f0e5, _0xc681ee) {
  return (
    (_0x12f0e5 = se(_0x12f0e5)) in _0xf803ae
      ? Object.defineProperty(_0xf803ae, _0x12f0e5, {
          value: _0xc681ee,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xf803ae[_0x12f0e5] = _0xc681ee),
    _0xf803ae
  );
}
var ce = class extends _0x32fe22 {
  constructor() {
    (super(),
      X(this, "_shapes", new Map()),
      X(this, "_linesIds", new Set()),
      X(this, "_groupIds", new Set()));
  }
  addShape(_0x4dd81c, _0x19d637, _0x25d197, _0x136fdd) {
    let _0x3709ba = new _0x3f232b(_0x4dd81c, _0x19d637, _0x25d197, _0x136fdd);
    return (
      this._shapes["set"](_0x19d637, _0x3709ba),
      _0x2de0c6(_0x4dd81c) && this._linesIds["add"](_0x19d637),
      _0x3709ba
    );
  }
  getBasicShapeRelation(_0x441b3e) {
    let _0x6dc558 = [];
    for (let _0x5e95ea of this._linesIds) {
      let _0x114c8d = this._shapes["get"](_0x5e95ea);
      if (_0x114c8d) {
        let _0x5620b9 = _0x114c8d.getShapeRelation();
        if (_0x5620b9) {
          var _0x730d22, _0x5d497f;
          (((_0x730d22 = _0x5620b9.from) == null
            ? undefined
            : _0x730d22.shapeId) === _0x441b3e &&
            _0x6dc558.push({
              ..._0x5620b9.from,
              lineShapeId: _0x5e95ea,
              isFrom: true,
            }),
            ((_0x5d497f = _0x5620b9.to) == null
              ? undefined
              : _0x5d497f.shapeId) === _0x441b3e &&
              _0x6dc558.push({
                ..._0x5620b9.to,
                lineShapeId: _0x5e95ea,
                isFrom: false,
              }));
        }
      }
    }
    return _0x6dc558;
  }
  getLineShapeRelation(_0x5cd3ce) {
    let _0xf4ec50 = this._shapes["get"](_0x5cd3ce);
    if (_0xf4ec50) return _0xf4ec50.getShapeRelation();
  }
  getShapeType(_0x19ae70) {
    let _0x5873b8 = this._shapes["get"](_0x19ae70);
    if (_0x5873b8) return _0x5873b8.getShapeType();
  }
  hasShape(_0x4c8e5a) {
    return this._shapes["has"](_0x4c8e5a);
  }
  getShapeDisplayNames() {
    return Array.from(this._shapes["values"]()).map(
      (_0x31e0ca) => _0x31e0ca.getName() || _0x31e0ca.getId(),
    );
  }
  removeShape(_0xa69a6a) {
    let _0x2164e5 = this._shapes["get"](_0xa69a6a);
    _0x2164e5 &&
      (_0x2de0c6(_0x2164e5.getShapeType()) &&
        this._linesIds["delete"](_0xa69a6a),
      this._shapes["delete"](_0xa69a6a));
  }
  toJSON() {
    let _0x5a008c = [];
    return (
      this._shapes["forEach"]((_0x5c38da) => {
        _0x5a008c.push(_0x5c38da.toJSON());
      }),
      _0x5a008c
    );
  }
  fromJSON(_0x45f4df) {
    for (let _0xdf4d49 of _0x45f4df) {
      let { id: _0x1544f1, shapeType: _0x57e040, name: _0x47cf77 } = _0xdf4d49,
        _0x6b8de6 = this.addShape(
          _0x57e040,
          _0x1544f1,
          _0xdf4d49.shapeData,
          _0x47cf77,
        );
      _0x6b8de6 && _0x6b8de6.isLineShape() && this._linesIds["add"](_0x1544f1);
    }
  }
  dispose() {
    this._disposed ||
      (this._shapes["forEach"]((_0x200bb7) => {
        _0x200bb7.dispose();
      }),
      this._shapes["clear"](),
      this._linesIds["clear"](),
      this._groupIds["clear"](),
      super.dispose());
  }
};
function Z(_0x4c2c78, _0x348e1b) {
  return function (_0x3f3461, _0x356bb4) {
    _0x348e1b(_0x3f3461, _0x356bb4, _0x4c2c78);
  };
}
function le(_0x5b84cd, _0xd5ad35, _0x2df572, _0x1b7b03) {
  var _0x4fc6e5 = arguments.length,
    _0x2bd7b5 =
      _0x4fc6e5 < 3
        ? _0xd5ad35
        : _0x1b7b03 === null
          ? (_0x1b7b03 = Object.getOwnPropertyDescriptor(_0xd5ad35, _0x2df572))
          : _0x1b7b03,
    _0x162fc4;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2bd7b5 = Reflect.decorate(_0x5b84cd, _0xd5ad35, _0x2df572, _0x1b7b03);
  else {
    for (var _0x2c8c60 = _0x5b84cd.length - 1; _0x2c8c60 >= 0; _0x2c8c60--)
      (_0x162fc4 = _0x5b84cd[_0x2c8c60]) &&
        (_0x2bd7b5 =
          (_0x4fc6e5 < 3
            ? _0x162fc4(_0x2bd7b5)
            : _0x4fc6e5 > 3
              ? _0x162fc4(_0xd5ad35, _0x2df572, _0x2bd7b5)
              : _0x162fc4(_0xd5ad35, _0x2df572)) || _0x2bd7b5);
  }
  return (
    _0x4fc6e5 > 3 &&
      _0x2bd7b5 &&
      Object.defineProperty(_0xd5ad35, _0x2df572, _0x2bd7b5),
    _0x2bd7b5
  );
}
let Q = class extends _0x32fe22 {
  constructor(_0x2eb204) {
    (super(),
      (this._resourcesManagerService = _0x2eb204),
      X(this, "_shapeModelManagerMap", new Map()),
      this._initSnapshot());
  }
  _ensureShapeModelManager(_0x23da77, _0x4fb13f) {
    let _0x4b48f7 = this._shapeModelManagerMap["get"](_0x23da77);
    _0x4b48f7 ||
      ((_0x4b48f7 = new Map()),
      this._shapeModelManagerMap["set"](_0x23da77, _0x4b48f7));
    let _0x53d46a = _0x4b48f7.get(_0x4fb13f);
    return (
      _0x53d46a ||
        ((_0x53d46a = new ce()), _0x4b48f7.set(_0x4fb13f, _0x53d46a)),
      _0x53d46a
    );
  }
  insertShape(
    _0x23475d,
    _0x361dfd,
    _0x389cf0,
    _0x378763,
    _0x1b74c5,
    _0x3bf6e4,
  ) {
    this._ensureShapeModelManager(_0x23475d, _0x361dfd).addShape(
      _0x389cf0,
      _0x378763,
      _0x1b74c5,
      _0x3bf6e4,
    );
  }
  removeShape(_0x45fd9b, _0x592618, _0x33b1ac) {
    this._ensureShapeModelManager(_0x45fd9b, _0x592618).removeShape(_0x33b1ac);
  }
  getBasicShapeType(_0x2736ba, _0x5a150c, _0x4bf233) {
    return this._ensureShapeModelManager(_0x2736ba, _0x5a150c).getShapeType(
      _0x4bf233,
    );
  }
  getShapeType(_0x3ffa0b, _0x5544b1, _0x3eb7b5) {
    return this._ensureShapeModelManager(_0x3ffa0b, _0x5544b1).getShapeType(
      _0x3eb7b5,
    );
  }
  hasShape(_0x4bba6e, _0x1eba33, _0x544fef) {
    return this._ensureShapeModelManager(_0x4bba6e, _0x1eba33).hasShape(
      _0x544fef,
    );
  }
  getShapeTypeById(_0x4e312a, _0x52ba99, _0x3daac0) {
    return this._ensureShapeModelManager(_0x4e312a, _0x52ba99).getShapeType(
      _0x3daac0,
    );
  }
  getShapeDataById(_0x15858e, _0xdb3212, _0x34041c) {
    let _0x1aec8a = this._ensureShapeModelManager(_0x15858e, _0xdb3212);
    if (!_0x1aec8a.getShapeType(_0x34041c)) return;
    let _0x5f528f = _0x1aec8a._shapes["get"](_0x34041c);
    if (_0x5f528f) return _0x5f528f.getShapeData();
  }
  getShapeDisplayNames(_0x10b256, _0x1db1a1) {
    return this._ensureShapeModelManager(
      _0x10b256,
      _0x1db1a1,
    ).getShapeDisplayNames();
  }
  getShapeModel(_0x2e2e9a, _0x5d566c, _0x5b7ed) {
    return this._ensureShapeModelManager(_0x2e2e9a, _0x5d566c)._shapes["get"](
      _0x5b7ed,
    );
  }
  getBasicShapeRelation(_0x3568d9, _0xf8df8d, _0x4f139f) {
    return this._ensureShapeModelManager(
      _0x3568d9,
      _0xf8df8d,
    ).getBasicShapeRelation(_0x4f139f);
  }
  getLineShapeRelation(_0x40db28, _0x2469f2, _0x1a8e29) {
    let _0x3caee0 = this._ensureShapeModelManager(_0x40db28, _0x2469f2)._shapes[
      "get"
    ](_0x1a8e29);
    if (_0x3caee0) return _0x3caee0.getShapeRelation();
  }
  setShapeType() {}
  _serializeShapeForUnit(_0x4d87bb) {
    let _0xf6efa = {},
      _0x2204fd = this._shapeModelManagerMap["get"](_0x4d87bb);
    return (
      _0x2204fd &&
        _0x2204fd.forEach((_0x2ed2b1, _0x33c763) => {
          let _0x19104 = _0x2ed2b1.toJSON();
          _0x19104.length > 0 && (_0xf6efa[_0x33c763] = _0x19104);
        }),
      JSON.stringify(_0xf6efa)
    );
  }
  _deserializeShapeForUnit(_0x31d950, _0x34df93) {
    Object.keys(_0x34df93).forEach((_0x40d082) => {
      this._ensureShapeModelManager(_0x31d950, _0x40d082).fromJSON(
        _0x34df93[_0x40d082],
      );
    });
  }
  toJSON() {
    let _0x495eec = {};
    return (
      this._shapeModelManagerMap["forEach"]((_0x505ddb, _0x35847a) => {
        ((_0x495eec[_0x35847a] = {}),
          _0x505ddb.forEach((_0xfcae07, _0x4a3c62) => {
            _0x495eec[_0x35847a][_0x4a3c62] = _0xfcae07.toJSON();
          }));
      }),
      _0x495eec
    );
  }
  fromJSON(_0x53a00d) {
    Object.keys(_0x53a00d).forEach((_0xfb39cd) => {
      let _0x1d4771 = _0x53a00d[_0xfb39cd];
      Object.keys(_0x1d4771).forEach((_0x289bad) => {
        this._ensureShapeModelManager(_0xfb39cd, _0x289bad).fromJSON(
          _0x1d4771[_0x289bad],
        );
      });
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: "SHEET_SHAPE_PLUGIN",
      businesses: [_0x1fdf63.UNIVER_SHEET],
      toJson: (_0x49098c) => this._serializeShapeForUnit(_0x49098c),
      parseJson: (_0x2d12cf) => JSON.parse(_0x2d12cf),
      onLoad: (_0x28a9b3, _0x15ebaf) => {
        this._deserializeShapeForUnit(_0x28a9b3, _0x15ebaf);
      },
      onUnLoad: (_0x16ecee) => {
        let _0x3bfbcb = this._shapeModelManagerMap["get"](_0x16ecee);
        _0x3bfbcb &&
          (_0x3bfbcb.forEach((_0x1e6b46) => {
            _0x1e6b46.dispose();
          }),
          this._shapeModelManagerMap["delete"](_0x16ecee));
      },
    });
  }
  dispose() {
    this._shapeModelManagerMap["forEach"]((_0x230f8a) => {
      _0x230f8a.forEach((_0x5e8262) => {
        _0x5e8262.dispose();
      });
    });
  }
};
Q = le([Z(0, _0x45dd33)], Q);
const ue = {
    id: "sheet.mutation.insert-shape",
    type: _0x2ba7cd.MUTATION,
    handler: (_0x674244, _0x28678e) => {
      let {
        unitId: _0x31caaf,
        subUnitId: _0x2506ad,
        shapeType: _0x3b5231,
        shapeId: _0x3e6548,
        shapeName: _0x401f4e,
        shapeData: _0x577088,
      } = _0x28678e;
      return (
        _0x674244
          .get(Q)
          .insertShape(
            _0x31caaf,
            _0x2506ad,
            _0x3b5231,
            _0x3e6548,
            _0x220f60.deepClone(_0x577088),
            _0x401f4e,
          ),
        true
      );
    },
  },
  de = {
    id: "sheet.mutation.remove-shape",
    type: _0x2ba7cd.MUTATION,
    handler: (_0x5c1f21, _0x5eae57) => {
      let {
        unitId: _0x5cddef,
        subUnitId: _0x525dcc,
        shapeId: _0x30a53d,
      } = _0x5eae57;
      return (
        _0x5c1f21.get(Q).removeShape(_0x5cddef, _0x525dcc, _0x30a53d),
        true
      );
    },
  },
  fe = {
    type: _0x2ba7cd.COMMAND,
    id: "sheet.command.insert-shape",
    handler: (_0x5b40cc, _0x36dde4) => {
      let _0x4cfb52 = _0x4771ec(_0x5b40cc.get(_0x5d2a03), _0x36dde4);
      if (!_0x4cfb52) return false;
      let _0x5176ef = _0x5b40cc.get(_0x1064b2),
        { unitId: _0x3648da, subUnitId: _0x463690 } = _0x4cfb52,
        _0x2c8594 = _0x5176ef.ensureSkeleton(_0x3648da, _0x463690);
      if (!_0x2c8594) return false;
      let _0x15e6c8 = _0x5b40cc.get(_0x9c1e4e),
        _0x5153f4 = _0x5b40cc.get(_0x4e1fbc),
        _0x3eacbc = _0x5b40cc.get(_0x4a1599),
        _0x13e64b = _0x5b40cc.get(_0x2aeab1),
        _0x430bf6 = _0x5b40cc.get(Q),
        { shapeType: _0xbfe75 } = _0x36dde4,
        _0x36cc6a = _0x36dde4.shapeData ?? _0x22f75d(_0xbfe75),
        _0x346c57 = _0x36dde4.shapeId || _0x320a46(),
        _0x419191 = {
          unitId: _0x3648da,
          subUnitId: _0x463690,
          shapeId: _0x346c57,
          shapeName:
            _0x36dde4.shapeName ??
            _0x274a1e(
              _0xbfe75,
              _0x430bf6.getShapeDisplayNames(_0x3648da, _0x463690),
            ),
          shapeType: _0xbfe75,
          shapeData: _0x36cc6a,
        },
        _0xe4d496 = _0x36dde4.width || 200,
        _0x19fc1c = _0x36dde4.height || 200,
        _0x57ca00 = 0,
        _0x965aa5 = 0;
      if (_0x36dde4.position) {
        let { x: _0x1c6764, y: _0x5aa243 } = _0x36dde4.position;
        ((_0x57ca00 = _0x1c6764), (_0x965aa5 = _0x5aa243));
      } else {
        if (_0x36dde4.range) {
          let { startRow: _0xac11bd, startColumn: _0x577e46 } = _0x36dde4.range,
            _0x1f21d5 = _0x2c8594.getCellWithCoordByIndex(_0xac11bd, _0x577e46);
          ((_0x57ca00 = _0x1f21d5.startX + 10),
            (_0x965aa5 = _0x1f21d5.startY + 10));
        }
      }
      let _0x439602 = {
          left: _0x57ca00,
          top: _0x965aa5,
          width: _0xe4d496,
          height: _0x19fc1c,
          angle: _0x36dde4.rotation ?? 0,
          flipX: _0x36dde4.flipX ?? false,
          flipY: _0x36dde4.flipY ?? false,
        },
        _0x28f44a = _0x5470b8(_0x439602, _0x2c8594),
        _0x546c18 = _0x12afd4(_0x439602, _0x2c8594),
        _0x4fb966 = {
          unitId: _0x3648da,
          subUnitId: _0x463690,
          drawingId: _0x346c57,
          drawingType: _0xf09c45.DRAWING_SHAPE,
          anchorType: _0x29167f.Both,
          name: _0x36dde4.name,
          description: _0x36dde4.description,
          sheetTransform: _0x28f44a,
          transform: _0x439602,
          data: { shapeType: _0xbfe75, shapeData: _0x36cc6a },
          axisAlignSheetTransform: _0x546c18,
          allowTransform: true,
          hidden: _0x36dde4.visible === false,
          selectable: _0x36dde4.selectable ?? true,
        };
      _0x2de0c6(_0xbfe75) &&
        ((_0x4fb966.data["fill"] = false),
        (_0x4fb966.data["rotateEnabled"] = false),
        (_0x4fb966.data["resizeEnabled"] = false),
        (_0x4fb966.data["borderEnabled"] = false),
        (_0x4fb966.transform["rotateEnabled"] = false),
        (_0x4fb966.transform["resizeEnabled"] = false),
        (_0x4fb966.transform["borderEnabled"] = false));
      let {
          undo: _0x1847b1,
          redo: _0x4477b8,
          objects: _0x499c15,
        } = _0x13e64b.getBatchAddOp([_0x4fb966]),
        _0x5ed9b6 = _0x3eacbc.onCommandExecute({
          id: _0x4f3ba0.id,
          params: { unitId: _0x3648da, drawings: [_0x4fb966] },
        }),
        _0x207bc4 = [
          ...(_0x5ed9b6.preRedos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x3648da,
              subUnitId: _0x463690,
              op: _0x4477b8,
              objects: _0x499c15,
              type: _0x14a90c.INSERT,
            },
          },
          { id: _0x27daf8.id, params: [_0x3648da] },
          ..._0x5ed9b6.redos,
          { id: ue.id, params: _0x419191 },
        ],
        _0x703cce = [
          {
            id: de.id,
            params: {
              unitId: _0x3648da,
              subUnitId: _0x463690,
              shapeId: _0x346c57,
            },
          },
          ...(_0x5ed9b6.preUndos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x3648da,
              subUnitId: _0x463690,
              op: _0x1847b1,
              objects: _0x499c15,
              type: _0x14a90c.REMOVE,
            },
          },
          { id: _0x27daf8.id, params: [_0x3648da] },
          ..._0x5ed9b6.undos,
        ];
      return _0x765c53(_0x207bc4, _0x15e6c8).result
        ? (_0x5153f4.pushUndoRedo({
            unitID: _0x3648da,
            undoMutations: _0x703cce,
            redoMutations: _0x207bc4,
          }),
          true)
        : false;
    },
  },
  $ = {
    id: "sheet.mutation.update-shape-data",
    type: _0x2ba7cd.MUTATION,
    handler: (_0x22e29c, _0x392e30) => {
      let {
          unitId: _0x3f717a,
          subUnitId: _0x38817d,
          shapeType: _0x49bdfe,
          shapeId: _0x145b85,
          shapeData: _0x4ac005,
          replace: _0x42ab6b,
          formulaLastValueGuard: _0x20a771,
        } = _0x392e30,
        _0x39ee69 = _0x22e29c
          .get(Q)
          .getShapeModel(_0x3f717a, _0x38817d, _0x145b85);
      if (_0x39ee69) {
        var _0x5d9c3f;
        if (
          !_0x36c7d4(
            _0x22e29c,
            {
              hostType: _0x1fdf63.UNIVER_SHEET,
              unitId: _0x3f717a,
              subUnitId: _0x38817d,
              shapeId: _0x145b85,
            },
            (_0x5d9c3f = _0x39ee69.getShapeData().formulaBinding) == null
              ? undefined
              : _0x5d9c3f.formula,
            _0x20a771,
          )
        )
          return true;
        (_0x49bdfe !== undefined && _0x39ee69.setShapeType(_0x49bdfe),
          _0x4ac005 &&
            (_0x39ee69 == null ||
              _0x39ee69.setShapeData(
                _0x220f60.deepClone(_0x4ac005),
                !_0x42ab6b,
              )));
      }
      return true;
    },
  },
  pe = {
    type: _0x2ba7cd.COMMAND,
    id: "sheet.command.set-shape-drawing-data",
    handler: (_0x4901e2, _0x1000d1) => {
      let _0x2dfa49 = _0x4771ec(_0x4901e2.get(_0x5d2a03), _0x1000d1);
      if (!_0x2dfa49) return false;
      let _0x12f514 = _0x4901e2.get(_0x1064b2),
        { unitId: _0x2780c7, subUnitId: _0x32e155 } = _0x2dfa49,
        _0x48cb3c = _0x12f514.ensureSkeleton(_0x2780c7, _0x32e155);
      if (!_0x48cb3c) return false;
      let _0x27ef86 = _0x4901e2.get(Q),
        {
          shapeId: _0x364a55,
          shapeType: _0x4bd632,
          shapeData: _0x5f314f,
          position: _0x171779,
          width: _0x451cd2,
          height: _0x18cc44,
        } = _0x1000d1,
        _0x18f0ff = _0x27ef86.getShapeModel(_0x2780c7, _0x32e155, _0x364a55);
      if (!_0x18f0ff) return false;
      let _0x2b602c = _0x4901e2.get(_0x9c1e4e),
        _0x1a2bf2 = _0x4901e2.get(_0x4e1fbc),
        _0x4af123 = _0x4901e2.get(_0x4a1599),
        _0x2ba9af = _0x4901e2.get(_0x2aeab1),
        _0x139d54 = {
          unitId: _0x2780c7,
          subUnitId: _0x32e155,
          shapeId: _0x364a55,
          shapeType: _0x4bd632,
          shapeData: _0x5f314f,
          replace: true,
        },
        _0x2e9db3 = _0x18f0ff.getShapeType(),
        _0x5c57f0 = _0x18f0ff.getShapeData(),
        { x: _0x56afeb, y: _0x35a251 } = _0x171779,
        _0x23861 = {
          left: _0x56afeb,
          top: _0x35a251,
          width: _0x451cd2,
          height: _0x18cc44,
          angle: _0x1000d1.rotation ?? 0,
          flipX: _0x1000d1.flipX ?? false,
          flipY: _0x1000d1.flipY ?? false,
        },
        _0x1bf5df = _0x5470b8(_0x23861, _0x48cb3c),
        _0xa79b2f = _0x12afd4(_0x23861, _0x48cb3c),
        _0x18521e = {
          unitId: _0x2780c7,
          subUnitId: _0x32e155,
          drawingId: _0x364a55,
          drawingType: _0xf09c45.DRAWING_SHAPE,
          name: _0x1000d1.name,
          description: _0x1000d1.description,
          sheetTransform: _0x1bf5df,
          transform: _0x23861,
          data: { shapeType: _0x4bd632, shapeData: _0x5f314f },
          axisAlignSheetTransform: _0xa79b2f,
          allowTransform: true,
          hidden: !_0x1000d1.visible,
          selectable: _0x1000d1.selectable,
        };
      _0x2de0c6(_0x4bd632) &&
        ((_0x18521e.data["fill"] = false),
        (_0x18521e.data["rotateEnabled"] = false),
        (_0x18521e.data["resizeEnabled"] = false),
        (_0x18521e.data["borderEnabled"] = false),
        (_0x18521e.transform["rotateEnabled"] = false),
        (_0x18521e.transform["resizeEnabled"] = false),
        (_0x18521e.transform["borderEnabled"] = false));
      let {
          undo: _0x506d00,
          redo: _0x7ce085,
          objects: _0x32c3e6,
        } = _0x2ba9af.getBatchUpdateOp([_0x18521e]),
        _0x2589e6 = _0x4af123.onCommandExecute({
          id: _0x139deb.id,
          params: { unitId: _0x2780c7, drawings: [_0x18521e] },
        }),
        _0x4faea9 = [
          ...(_0x2589e6.preRedos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x2780c7,
              subUnitId: _0x32e155,
              op: _0x7ce085,
              objects: _0x32c3e6,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x2780c7] },
          ..._0x2589e6.redos,
          { id: $.id, params: _0x139d54 },
        ],
        _0x11fb5e = [
          ...(_0x2589e6.preUndos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x2780c7,
              subUnitId: _0x32e155,
              op: _0x506d00,
              objects: _0x32c3e6,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x2780c7] },
          ..._0x2589e6.undos,
          {
            id: $.id,
            params: {
              unitId: _0x2780c7,
              subUnitId: _0x32e155,
              shapeType: _0x2e9db3,
              shapeId: _0x364a55,
              shapeData: _0x5c57f0,
              replace: true,
            },
          },
        ];
      return _0x765c53(_0x4faea9, _0x2b602c).result
        ? (_0x1a2bf2.pushUndoRedo({
            unitID: _0x2780c7,
            undoMutations: _0x11fb5e,
            redoMutations: _0x4faea9,
          }),
          true)
        : false;
    },
  },
  me = {
    type: _0x2ba7cd.COMMAND,
    id: "sheet.command.toggle-shape-flip",
    handler: (_0x391d76, _0x42a066) => {
      let _0x298d70 = _0x4771ec(_0x391d76.get(_0x5d2a03), _0x42a066);
      if (!_0x298d70) return false;
      let _0xa3f178 = _0x391d76.get(_0x1064b2),
        { unitId: _0x3f3e0f, subUnitId: _0xd4727d } = _0x298d70,
        _0x255fb7 = _0xa3f178.getSkeleton(_0x3f3e0f, _0xd4727d);
      if (!_0x255fb7) return false;
      let _0x54e576 = _0x391d76.get(_0x2aeab1),
        { shapeId: _0x279837, flipH: _0xb490cd, flipV: _0x4c182a } = _0x42a066,
        _0x2faa12 = _0x54e576.getDrawingByParam({
          unitId: _0x3f3e0f,
          subUnitId: _0xd4727d,
          drawingId: _0x279837,
        });
      if (!_0x2faa12) return false;
      let _0x117b1f = _0x391d76
        .get(Q)
        .getShapeModel(_0x3f3e0f, _0xd4727d, _0x279837);
      if (!_0x117b1f) return false;
      let _0x4f613f = _0x391d76.get(_0x9c1e4e),
        _0x21cdc4 = _0x391d76.get(_0x4e1fbc),
        _0x38d8de = _0x391d76.get(_0x4a1599),
        _0x4daec2 = { ..._0x2faa12.transform };
      (_0xb490cd !== undefined && (_0x4daec2.flipX = !_0x4daec2.flipX),
        _0x4c182a !== undefined && (_0x4daec2.flipY = !_0x4daec2.flipY));
      let _0x4487f8 = _0x5470b8(_0x4daec2, _0x255fb7),
        _0x3fe6b2 = _0x12afd4(_0x4daec2, _0x255fb7),
        _0x6a737 = _0x117b1f.getShapeType(),
        _0x3d9a59 = _0x117b1f.getShapeData(),
        _0x14b52a = {
          unitId: _0x3f3e0f,
          subUnitId: _0xd4727d,
          drawingId: _0x279837,
          drawingType: _0xf09c45.DRAWING_SHAPE,
          sheetTransform: _0x4487f8,
          transform: _0x4daec2,
          data: { shapeType: _0x6a737, shapeData: _0x3d9a59 },
          axisAlignSheetTransform: _0x3fe6b2,
          allowTransform: true,
        },
        {
          undo: _0xd71e33,
          redo: _0x5b77a3,
          objects: _0x5a0c56,
        } = _0x54e576.getBatchUpdateOp([_0x14b52a]),
        _0x4c1b04 = _0x38d8de.onCommandExecute({
          id: _0x139deb.id,
          params: { unitId: _0x3f3e0f, drawings: [_0x14b52a] },
        }),
        _0x4d0fd1 = [
          ...(_0x4c1b04.preRedos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x3f3e0f,
              subUnitId: _0xd4727d,
              op: _0x5b77a3,
              objects: _0x5a0c56,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x3f3e0f] },
          ..._0x4c1b04.redos,
        ],
        _0x4e578c = [
          ...(_0x4c1b04.preUndos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x3f3e0f,
              subUnitId: _0xd4727d,
              op: _0xd71e33,
              objects: _0x5a0c56,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x3f3e0f] },
          ..._0x4c1b04.undos,
        ];
      if (_0x2de0c6(_0x6a737)) {
        let _0x55ed45 = _0x117b1f.getShapeRelation();
        if (_0x55ed45) {
          let _0x3bc75e = { ..._0x55ed45 };
          ((_0x3bc75e.from = undefined),
            (_0x3bc75e.to = undefined),
            _0x4d0fd1.push({
              id: $.id,
              params: {
                unitId: _0x3f3e0f,
                subUnitId: _0xd4727d,
                shapeId: _0x279837,
                shapeType: _0x6a737,
                shapeData: { relation: _0x3bc75e },
              },
            }),
            _0x4e578c.push({
              id: $.id,
              params: {
                unitId: _0x3f3e0f,
                subUnitId: _0xd4727d,
                shapeId: _0x279837,
                shapeType: _0x6a737,
                shapeData: { relation: _0x55ed45 },
              },
            }));
        }
      }
      return _0x765c53(_0x4d0fd1, _0x4f613f).result
        ? (_0x21cdc4.pushUndoRedo({
            unitID: _0x3f3e0f,
            undoMutations: _0x4e578c,
            redoMutations: _0x4d0fd1,
          }),
          true)
        : false;
    },
  },
  he = {
    type: _0x2ba7cd.COMMAND,
    id: "sheet.command.set-shape-rotate",
    handler: (_0x306c95, _0x1b1045) => {
      let _0x4d75a3 = _0x4771ec(_0x306c95.get(_0x5d2a03), _0x1b1045);
      if (!_0x4d75a3) return false;
      let _0x1d708b = _0x306c95.get(_0x1064b2),
        { unitId: _0x201d08, subUnitId: _0x2f7ba4 } = _0x4d75a3,
        _0x53a6ea = _0x1d708b.getSkeleton(_0x201d08, _0x2f7ba4);
      if (!_0x53a6ea) return false;
      let _0x5c82ae = _0x306c95.get(_0x2aeab1),
        { shapeId: _0x188303, rotate: _0x173958 } = _0x1b1045,
        _0x4a0efe = _0x5c82ae.getDrawingByParam({
          unitId: _0x201d08,
          subUnitId: _0x2f7ba4,
          drawingId: _0x188303,
        });
      if (!_0x4a0efe) return false;
      let _0x55840f = _0x306c95
        .get(Q)
        .getShapeModel(_0x201d08, _0x2f7ba4, _0x188303);
      if (!_0x55840f) return false;
      let _0x2617a7 = _0x306c95.get(_0x9c1e4e),
        _0x442310 = _0x306c95.get(_0x4e1fbc),
        _0x3d665f = _0x306c95.get(_0x4a1599),
        _0x3cb5ef = { ..._0x4a0efe.transform };
      _0x173958 !== undefined &&
        (_0x3cb5ef.angle = (_0x3cb5ef.angle || 0) + _0x173958);
      let _0x9cd849 = _0x5470b8(_0x3cb5ef, _0x53a6ea),
        _0x1e4a26 = _0x12afd4(_0x3cb5ef, _0x53a6ea),
        _0x169ce1 = _0x55840f.getShapeType(),
        _0x36742b = _0x55840f.getShapeData(),
        _0x2fec0e = {
          unitId: _0x201d08,
          subUnitId: _0x2f7ba4,
          drawingId: _0x188303,
          drawingType: _0xf09c45.DRAWING_SHAPE,
          sheetTransform: _0x9cd849,
          transform: _0x3cb5ef,
          data: { shapeType: _0x169ce1, shapeData: _0x36742b },
          axisAlignSheetTransform: _0x1e4a26,
          allowTransform: true,
        },
        {
          undo: _0x378920,
          redo: _0x4b99d2,
          objects: _0x5c3336,
        } = _0x5c82ae.getBatchUpdateOp([_0x2fec0e]),
        _0x2c59ba = _0x3d665f.onCommandExecute({
          id: _0x139deb.id,
          params: { unitId: _0x201d08, drawings: [_0x2fec0e] },
        }),
        _0x4cc2b2 = [
          ...(_0x2c59ba.preRedos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x201d08,
              subUnitId: _0x2f7ba4,
              op: _0x4b99d2,
              objects: _0x5c3336,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x201d08] },
          ..._0x2c59ba.redos,
        ],
        _0xabed6e = [
          ...(_0x2c59ba.preUndos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x201d08,
              subUnitId: _0x2f7ba4,
              op: _0x378920,
              objects: _0x5c3336,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x201d08] },
          ..._0x2c59ba.undos,
        ];
      return _0x765c53(_0x4cc2b2, _0x2617a7).result
        ? (_0x442310.pushUndoRedo({
            unitID: _0x201d08,
            undoMutations: _0xabed6e,
            redoMutations: _0x4cc2b2,
          }),
          true)
        : false;
    },
  },
  ge = {
    type: _0x2ba7cd.COMMAND,
    id: "sheet.command.set-shape-text-vertical-toggle",
    handler: (_0x4f3250, _0x1a30ac) => {
      let _0x11eae7 = _0x4771ec(_0x4f3250.get(_0x5d2a03), _0x1a30ac);
      if (!_0x11eae7) return false;
      let { unitId: _0x24000b, subUnitId: _0x3d0e65 } = _0x11eae7,
        { shapeId: _0x511a79 } = _0x1a30ac,
        _0x43ce1e = _0x4f3250
          .get(Q)
          .getShapeModel(_0x24000b, _0x3d0e65, _0x511a79);
      if (!_0x43ce1e) return false;
      let _0x495bfa = _0x43ce1e.getShapeTextData(),
        _0x554115 =
          (_0x495bfa == null ? undefined : _0x495bfa.isHorizontal) ?? true,
        _0x160e78 = !_0x554115,
        _0x4e5d5b = _0x4f3250.get(_0x9c1e4e),
        _0x421608 = _0x4f3250.get(_0x4e1fbc),
        _0x2d43ae = {
          unitId: _0x24000b,
          subUnitId: _0x3d0e65,
          shapeId: _0x511a79,
          shapeData: { shapeText: { isHorizontal: _0x160e78 } },
        },
        _0x4df551 = {
          unitId: _0x24000b,
          subUnitId: _0x3d0e65,
          shapeId: _0x511a79,
          shapeData: { shapeText: { isHorizontal: _0x554115 } },
        },
        _0xc0c64d = [{ id: $.id, params: _0x2d43ae }],
        _0x7d4488 = [{ id: $.id, params: _0x4df551 }];
      return _0x765c53(_0xc0c64d, _0x4e5d5b).result
        ? (_0x421608.pushUndoRedo({
            unitID: _0x24000b,
            undoMutations: _0x7d4488,
            redoMutations: _0xc0c64d,
          }),
          true)
        : false;
    },
  },
  _e = {
    type: _0x2ba7cd.COMMAND,
    id: "sheet.command.update-connector-relation",
    handler: (_0x24437b, _0x5afece) => {
      var _0xb9fb11;
      let _0x3c700c = _0x4771ec(_0x24437b.get(_0x5d2a03), _0x5afece);
      if (!_0x3c700c) return false;
      let _0x5242fc = _0x24437b.get(_0x1064b2),
        { unitId: _0x5bd3d3, subUnitId: _0x5dd059 } = _0x3c700c,
        _0x5f4ee6 = _0x5242fc.getSkeleton(_0x5bd3d3, _0x5dd059);
      if (!_0x5f4ee6) return false;
      let _0x5ad5d5 = _0x24437b.get(_0x2aeab1),
        {
          connectorShapeId: _0x31fb28,
          width: _0x4bda60,
          height: _0x43b1c7,
          left: _0x5c2e8a,
          top: _0xceb4b0,
          flipX: _0x56bac5,
          flipY: _0x936f3a,
          rotation: _0x442af3,
          oldAdjustValues: _0x51d7d9,
          newAdjustValues: _0x570398,
          oldLineType: _0x5d4cd1,
          newLineType: _0x3f65bf,
          oldRelation: _0x125026,
          newRelation: _0x15f252,
        } = _0x5afece,
        _0x226add = _0x5ad5d5.getDrawingByParam({
          unitId: _0x5bd3d3,
          subUnitId: _0x5dd059,
          drawingId: _0x31fb28,
        });
      if (!_0x226add) return false;
      let _0x30f3ba = _0x24437b
        .get(Q)
        .getShapeModel(_0x5bd3d3, _0x5dd059, _0x31fb28);
      if (!_0x30f3ba) return false;
      let _0x2421d0 = _0x24437b.get(_0x9c1e4e),
        _0x592a22 = _0x24437b.get(_0x4e1fbc),
        _0x44aa96 = _0x24437b.get(_0x4a1599),
        _0x10d6ea = {
          ..._0x226add.transform,
          width: _0x4bda60,
          height: _0x43b1c7,
          left: _0x5c2e8a,
          top: _0xceb4b0,
          flipX: _0x56bac5,
          flipY: _0x936f3a,
          angle:
            _0x442af3 ??
            ((_0xb9fb11 = _0x226add.transform) == null
              ? undefined
              : _0xb9fb11.angle) ??
            0,
        },
        _0x13ac94 = _0x5470b8(_0x10d6ea, _0x5f4ee6),
        _0x53620e = _0x12afd4(_0x10d6ea, _0x5f4ee6),
        _0x493286 = _0x30f3ba.getShapeType(),
        _0x4575b9 = _0x30f3ba.getShapeData(),
        _0x507762 = {
          unitId: _0x5bd3d3,
          subUnitId: _0x5dd059,
          drawingId: _0x31fb28,
          drawingType: _0xf09c45.DRAWING_SHAPE,
          sheetTransform: _0x13ac94,
          transform: _0x10d6ea,
          data: {
            shapeType: _0x3f65bf || _0x5d4cd1 || _0x493286,
            shapeData: {
              ..._0x4575b9,
              adjustValues:
                _0x570398 ||
                _0x51d7d9 ||
                (_0x4575b9 == null ? undefined : _0x4575b9.adjustValues),
              relation:
                _0x15f252 ||
                _0x125026 ||
                (_0x4575b9 == null ? undefined : _0x4575b9.relation),
            },
          },
          axisAlignSheetTransform: _0x53620e,
          allowTransform: true,
        },
        {
          undo: _0x1eef2e,
          redo: _0x114ba2,
          objects: _0x2f67ac,
        } = _0x5ad5d5.getBatchUpdateOp([_0x507762]),
        _0x1ee281 = _0x44aa96.onCommandExecute({
          id: _0x139deb.id,
          params: { unitId: _0x5bd3d3, drawings: [_0x507762] },
        }),
        _0x363eb6 = [
          ...(_0x1ee281.preRedos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x5bd3d3,
              subUnitId: _0x5dd059,
              op: _0x114ba2,
              objects: _0x2f67ac,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x5bd3d3] },
          ..._0x1ee281.redos,
          {
            id: $.id,
            params: {
              unitId: _0x5bd3d3,
              subUnitId: _0x5dd059,
              shapeId: _0x31fb28,
              shapeType: _0x3f65bf,
              shapeData: { adjustValues: _0x570398, relation: _0x15f252 },
            },
          },
        ],
        _0x25f15d = [
          ...(_0x1ee281.preUndos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x5bd3d3,
              subUnitId: _0x5dd059,
              op: _0x1eef2e,
              objects: _0x2f67ac,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x5bd3d3] },
          ..._0x1ee281.undos,
          {
            id: $.id,
            params: {
              unitId: _0x5bd3d3,
              subUnitId: _0x5dd059,
              shapeId: _0x31fb28,
              shapeType: _0x493286,
              shapeData: {
                ..._0x4575b9,
                adjustValues:
                  _0x51d7d9 ||
                  (_0x4575b9 == null ? undefined : _0x4575b9.adjustValues),
                relation:
                  _0x125026 ||
                  (_0x4575b9 == null ? undefined : _0x4575b9.relation),
              },
            },
          },
        ];
      return _0x765c53(_0x363eb6, _0x2421d0).result
        ? (_0x592a22.pushUndoRedo({
            unitID: _0x5bd3d3,
            undoMutations: _0x25f15d,
            redoMutations: _0x363eb6,
          }),
          true)
        : false;
    },
  },
  ve = {
    type: _0x2ba7cd.COMMAND,
    id: "sheet.command.update-line-shape-resize",
    handler: (_0x1c8e3f, _0x28a374) => {
      let _0x44b39d = _0x4771ec(_0x1c8e3f.get(_0x5d2a03), _0x28a374);
      if (!_0x44b39d) return false;
      let _0x3b9e5d = _0x1c8e3f.get(_0x1064b2),
        { unitId: _0x11ba13, subUnitId: _0x5154fe } = _0x44b39d,
        _0xb50234 = _0x3b9e5d.getSkeleton(_0x11ba13, _0x5154fe);
      if (!_0xb50234) return false;
      let _0x2abdad = _0x1c8e3f.get(_0x2aeab1),
        {
          shapeId: _0x39a7fb,
          width: _0x2b2893,
          height: _0x5a6109,
          left: _0xe230f6,
          top: _0x7ce666,
          flipX: _0x1befae,
          flipY: _0x37d395,
          angle: _0x553d64,
          oldAdjustValues: _0xb7778e,
          newAdjustValues: _0x6d81f9,
          oldLineType: _0x187da0,
          newLineType: _0x29d24b,
        } = _0x28a374,
        _0x15c8c1 = _0x2abdad.getDrawingByParam({
          unitId: _0x11ba13,
          subUnitId: _0x5154fe,
          drawingId: _0x39a7fb,
        });
      if (!_0x15c8c1) return false;
      let _0x1b5738 = _0x1c8e3f
        .get(Q)
        .getShapeModel(_0x11ba13, _0x5154fe, _0x39a7fb);
      if (!_0x1b5738) return false;
      let _0x566277 = _0x1c8e3f.get(_0x9c1e4e),
        _0x5c1d3b = _0x1c8e3f.get(_0x4e1fbc),
        _0x3e161b = _0x1c8e3f.get(_0x4a1599),
        _0x3902b1 = {
          ..._0x15c8c1.transform,
          width: _0x2b2893,
          height: _0x5a6109,
          left: _0xe230f6,
          top: _0x7ce666,
          flipX: _0x1befae,
          flipY: _0x37d395,
          angle: _0x553d64,
        },
        _0x1c9026 = _0x5470b8(_0x3902b1, _0xb50234),
        _0x1e7a05 = _0x12afd4(_0x3902b1, _0xb50234),
        _0x5d7849 = _0x1b5738.getShapeType(),
        _0x4857c9 = _0x1b5738.getShapeData(),
        _0x4f57d7 = {
          unitId: _0x11ba13,
          subUnitId: _0x5154fe,
          drawingId: _0x39a7fb,
          drawingType: _0xf09c45.DRAWING_SHAPE,
          sheetTransform: _0x1c9026,
          transform: _0x3902b1,
          data: {
            shapeType: _0x29d24b || _0x187da0 || _0x5d7849,
            shapeData: {
              ..._0x4857c9,
              adjustValues:
                _0x6d81f9 ||
                _0xb7778e ||
                (_0x4857c9 == null ? undefined : _0x4857c9.adjustValues),
            },
          },
          axisAlignSheetTransform: _0x1e7a05,
          allowTransform: true,
        },
        {
          undo: _0x4f4090,
          redo: _0x19c3b7,
          objects: _0x2ce720,
        } = _0x2abdad.getBatchUpdateOp([_0x4f57d7]),
        _0x2661f9 = _0x3e161b.onCommandExecute({
          id: _0x139deb.id,
          params: { unitId: _0x11ba13, drawings: [_0x4f57d7] },
        }),
        _0x514e18 = [
          ...(_0x2661f9.preRedos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x11ba13,
              subUnitId: _0x5154fe,
              op: _0x19c3b7,
              objects: _0x2ce720,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x11ba13] },
          ..._0x2661f9.redos,
          {
            id: $.id,
            params: {
              unitId: _0x11ba13,
              subUnitId: _0x5154fe,
              shapeId: _0x39a7fb,
              shapeType: _0x29d24b,
              shapeData: { adjustValues: _0x6d81f9 },
            },
          },
        ],
        _0x1b4115 = [
          ...(_0x2661f9.preUndos ?? []),
          {
            id: _0x4803b6.id,
            params: {
              unitId: _0x11ba13,
              subUnitId: _0x5154fe,
              op: _0x4f4090,
              objects: _0x2ce720,
              type: _0x14a90c.UPDATE,
            },
          },
          { id: _0x27daf8.id, params: [_0x11ba13] },
          ..._0x2661f9.undos,
          {
            id: $.id,
            params: {
              unitId: _0x11ba13,
              subUnitId: _0x5154fe,
              shapeId: _0x39a7fb,
              shapeType: _0x5d7849,
              shapeData: {
                ..._0x4857c9,
                adjustValues:
                  _0xb7778e ||
                  (_0x4857c9 == null ? undefined : _0x4857c9.adjustValues),
              },
            },
          },
        ];
      return _0x765c53(_0x514e18, _0x566277).result
        ? (_0x5c1d3b.pushUndoRedo({
            unitID: _0x11ba13,
            undoMutations: _0x1b4115,
            redoMutations: _0x514e18,
          }),
          true)
        : false;
    },
  },
  ye = {
    id: "sheet.mutation.update-shape-type",
    type: _0x2ba7cd.MUTATION,
    handler: (_0x4a3262, _0x2be543) => {
      let {
          unitId: _0x1b4ada,
          subUnitId: _0x2d9c52,
          shapeType: _0x280387,
          shapeId: _0x59b897,
          shapeData: _0x47d263,
        } = _0x2be543,
        _0x3a0cde = _0x4a3262
          .get(Q)
          .getShapeModel(_0x1b4ada, _0x2d9c52, _0x59b897);
      return (
        _0x3a0cde &&
          (_0x3a0cde.setShapeType(_0x280387),
          _0x47d263 &&
            (_0x3a0cde == null || _0x3a0cde.setShapeData(_0x47d263))),
        true
      );
    },
  };
var be = "@univerjs-pro/sheets-shape",
  xe = "1.0.0-insiders.20260907-70fc579";
function Se(_0x410ab2) {
  var _0x49e65a,
    _0x58af13,
    _0x1c8d62,
    _0x4f94f8,
    _0x697b0c,
    _0x2a4537,
    _0x1da408;
  return {
    left:
      ((_0x49e65a = _0x410ab2.transform) == null
        ? undefined
        : _0x49e65a.left) ?? 0,
    top:
      ((_0x58af13 = _0x410ab2.transform) == null ? undefined : _0x58af13.top) ??
      0,
    width:
      ((_0x1c8d62 = _0x410ab2.transform) == null
        ? undefined
        : _0x1c8d62.width) ?? 200,
    height:
      ((_0x4f94f8 = _0x410ab2.transform) == null
        ? undefined
        : _0x4f94f8.height) ?? 200,
    rotation:
      ((_0x697b0c = _0x410ab2.transform) == null
        ? undefined
        : _0x697b0c.rotation) ?? 0,
    flipX:
      ((_0x2a4537 = _0x410ab2.transform) == null
        ? undefined
        : _0x2a4537.flipX) ?? false,
    flipY:
      ((_0x1da408 = _0x410ab2.transform) == null
        ? undefined
        : _0x1da408.flipY) ?? false,
  };
}
let Ce = class {
  constructor(_0x314a35, _0x551d7c, _0x7b324e, _0x30924c) {
    ((this._commandService = _0x314a35),
      (this._shapeService = _0x551d7c),
      (this._drawingService = _0x7b324e),
      (this._instanceService = _0x30924c),
      X(this, "hostType", _0x1fdf63.UNIVER_SHEET));
  }
  get shapeChanged$() {
    return {
      subscribe: (_0x203641) => {
        let _0x126b59 = this._commandService["onCommandExecuted"](
          (_0x45341c) => {
            (_0x45341c.id === ue.id ||
              _0x45341c.id === de.id ||
              _0x45341c.id === $.id ||
              _0x45341c.id === ye.id) &&
              _0x203641({ unitId: _0x45341c.params["unitId"] });
          },
        );
        return { unsubscribe: () => _0x126b59.dispose() };
      },
    };
  }
  getShape(_0x1e6e75) {
    var _0x821fe9;
    let _0x310ba5 =
        (_0x821fe9 = this._drawingService["getDrawingData"](
          _0x1e6e75.unitId,
          _0x1e6e75.subUnitId,
        )) == null
          ? undefined
          : _0x821fe9[_0x1e6e75.shapeId],
      _0x379fb0 = this._shapeService["getShapeType"](
        _0x1e6e75.unitId,
        _0x1e6e75.subUnitId,
        _0x1e6e75.shapeId,
      );
    if (
      !_0x310ba5 ||
      _0x310ba5.drawingType !== _0xf09c45.DRAWING_SHAPE ||
      !_0x379fb0
    )
      return null;
    let _0x506281 = _0x310ba5.transform;
    return {
      ..._0x1e6e75,
      shapeType: _0x379fb0,
      shapeData: _0x220f60.deepClone(
        this._shapeService["getShapeDataById"](
          _0x1e6e75.unitId,
          _0x1e6e75.subUnitId,
          _0x1e6e75.shapeId,
        ) ?? {},
      ),
      name: _0x310ba5.name,
      description: _0x310ba5.description,
      visible: _0x310ba5.hidden !== true,
      selectable: _0x310ba5.selectable !== false,
      transform: {
        left: (_0x506281 == null ? undefined : _0x506281.left) ?? 0,
        top: (_0x506281 == null ? undefined : _0x506281.top) ?? 0,
        width: (_0x506281 == null ? undefined : _0x506281.width) ?? 200,
        height: (_0x506281 == null ? undefined : _0x506281.height) ?? 200,
        rotation: (_0x506281 == null ? undefined : _0x506281.angle) ?? 0,
        flipX: (_0x506281 == null ? undefined : _0x506281.flipX) ?? false,
        flipY: (_0x506281 == null ? undefined : _0x506281.flipY) ?? false,
      },
    };
  }
  listShapes(_0x9daa37) {
    let _0x161a85 =
      this._drawingService["getDrawingData"](
        _0x9daa37.unitId,
        _0x9daa37.subUnitId,
      ) ?? {};
    return Object.values(_0x161a85)
      .filter(
        (_0x1eec86) =>
          (_0x1eec86 == null ? undefined : _0x1eec86.drawingType) ===
          _0xf09c45.DRAWING_SHAPE,
      )
      .map((_0x17558f) =>
        this.getShape({ ..._0x9daa37, shapeId: _0x17558f.drawingId }),
      )
      .filter((_0x22522e) => !!_0x22522e);
  }
  listShapesInUnit(_0x2c8ab7) {
    let _0x2ef335 = this._instanceService["getUnit"](
      _0x2c8ab7,
      _0x1fdf63.UNIVER_SHEET,
    );
    return (
      (_0x2ef335 == null
        ? undefined
        : _0x2ef335
            .getSheets()
            .flatMap((_0xe5b33c) =>
              this.listShapes({
                hostType: this.hostType,
                unitId: _0x2c8ab7,
                subUnitId: _0xe5b33c.getSheetId(),
              }),
            )) ?? []
    );
  }
  createShape(_0x9587d2, _0x12a5de) {
    let _0x5c082d = _0x320a46(),
      _0x5a1c23 = Se(_0x12a5de),
      _0xdaf4c7 = _0x220f60.deepClone(
        _0x12a5de.shapeData ?? _0x22f75d(_0x12a5de.shapeType),
      );
    return this._commandService["syncExecuteCommand"](fe.id, {
      unitId: _0x9587d2.unitId,
      subUnitId: _0x9587d2.subUnitId,
      shapeId: _0x5c082d,
      shapeType: _0x12a5de.shapeType,
      shapeData: _0xdaf4c7,
      name: _0x12a5de.name,
      description: _0x12a5de.description,
      position: { x: _0x5a1c23.left, y: _0x5a1c23.top },
      width: _0x5a1c23.width,
      height: _0x5a1c23.height,
      rotation: _0x5a1c23.rotation,
      flipX: _0x5a1c23.flipX,
      flipY: _0x5a1c23.flipY,
      visible: _0x12a5de.visible ?? true,
      selectable: _0x12a5de.selectable ?? true,
    })
      ? {
          ..._0x9587d2,
          shapeId: _0x5c082d,
          shapeType: _0x12a5de.shapeType,
          shapeData: _0xdaf4c7,
          name: _0x12a5de.name,
          description: _0x12a5de.description,
          visible: _0x12a5de.visible ?? true,
          selectable: _0x12a5de.selectable ?? true,
          transform: _0x5a1c23,
        }
      : null;
  }
  updateShape(_0x491140, _0x3433ef) {
    var _0x4ebd49;
    let _0x217c8d = this.getShape(_0x491140);
    if (!_0x217c8d) return false;
    let _0x12cb0d = { ..._0x217c8d.transform, ..._0x3433ef.transform };
    return this._commandService["syncExecuteCommand"](pe.id, {
      unitId: _0x491140.unitId,
      subUnitId: _0x491140.subUnitId,
      shapeId: _0x491140.shapeId,
      shapeType:
        _0x3433ef.shapeType ??
        ((_0x4ebd49 = _0x3433ef.shapeData) == null
          ? undefined
          : _0x4ebd49.shapeType) ??
        _0x217c8d.shapeType,
      shapeData: _0x3433ef.shapeData ?? _0x217c8d.shapeData,
      position: { x: _0x12cb0d.left, y: _0x12cb0d.top },
      width: _0x12cb0d.width,
      height: _0x12cb0d.height,
      rotation: _0x12cb0d.rotation,
      flipX: _0x12cb0d.flipX,
      flipY: _0x12cb0d.flipY,
      name: "name" in _0x3433ef ? _0x3433ef.name : _0x217c8d.name,
      description:
        "description" in _0x3433ef
          ? _0x3433ef.description
          : _0x217c8d.description,
      visible: _0x3433ef.visible ?? _0x217c8d.visible,
      selectable: _0x3433ef.selectable ?? _0x217c8d.selectable,
    });
  }
  createFormulaLastValueMutation(_0x5812e1, _0x33df6a, _0x525c1f) {
    let _0x2aa09a = this.getShape(_0x5812e1),
      _0x4be92d =
        _0x2aa09a == null ? undefined : _0x2aa09a.shapeData["formulaBinding"];
    return !_0x2aa09a || !_0x4be92d
      ? null
      : {
          id: $.id,
          params: {
            unitId: _0x5812e1.unitId,
            subUnitId: _0x5812e1.subUnitId,
            shapeId: _0x5812e1.shapeId,
            shapeData: {
              ..._0x2aa09a.shapeData,
              formulaBinding: {
                ..._0x4be92d,
                lastValue: _0x220f60.deepClone(_0x525c1f),
              },
            },
            replace: true,
            formulaLastValueGuard: _0x33df6a,
          },
        };
  }
  removeShape(_0xcdb128) {
    return this._commandService["syncExecuteCommand"](_0x3e4dab.id, {
      unitId: _0xcdb128.unitId,
      drawings: [
        {
          unitId: _0xcdb128.unitId,
          subUnitId: _0xcdb128.subUnitId,
          drawingId: _0xcdb128.shapeId,
          drawingType: _0xf09c45.DRAWING_SHAPE,
        },
      ],
    });
  }
  bringToFront(_0x302f6a) {
    return this._arrange(_0x302f6a, _0x2f992d.front);
  }
  bringForward(_0x4cdb28) {
    return this._arrange(_0x4cdb28, _0x2f992d.forward);
  }
  sendBackward(_0x1f759c) {
    return this._arrange(_0x1f759c, _0x2f992d.backward);
  }
  sendToBack(_0x2aa2bf) {
    return this._arrange(_0x2aa2bf, _0x2f992d.back);
  }
  setZOrder(_0xbc49c2, _0x4e3f1c) {
    return this._commandService["syncExecuteCommand"](_0x49bb13.id, {
      unitId: _0xbc49c2.unitId,
      subUnitId: _0xbc49c2.subUnitId,
      drawingIds: [_0xbc49c2.shapeId],
      zOrder: _0x4e3f1c,
    });
  }
  _arrange(_0x1d689e, _0x171e22) {
    return this._commandService["syncExecuteCommand"](_0x49bb13.id, {
      unitId: _0x1d689e.unitId,
      subUnitId: _0x1d689e.subUnitId,
      drawingIds: [_0x1d689e.shapeId],
      arrangeType: _0x171e22,
    });
  }
};
Ce = le(
  [Z(0, _0x9c1e4e), Z(1, _0x461959(Q)), Z(2, _0x2aeab1), Z(3, _0x5d2a03)],
  Ce,
);
const we = {};
let Te = class extends _0x32fe22 {
  constructor(
    _0x1a7294,
    _0x2bc6a9,
    _0x5a53eb,
    _0xc4dfa4,
    _0x38b799,
    _0x3ec7b3,
    _0x5e324e,
  ) {
    (super(),
      (this._commandService = _0x1a7294),
      (this._sheetInterceptorService = _0x2bc6a9),
      (this._sheetSkeletonService = _0x5a53eb),
      (this._sheetsShapeService = _0xc4dfa4),
      (this._drawingManagerService = _0x38b799),
      (this._shapeHostAdapterRegistry = _0x3ec7b3),
      this._initCommands(),
      this._initCommandInterceptor(),
      this.disposeWithMe(
        this._shapeHostAdapterRegistry["register"](_0x5e324e),
      ));
  }
  _initCommands() {
    [fe, pe, me, he, ge, _e, ve, ue, de, ye, $].forEach((_0x2f6d12) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x2f6d12)),
    );
  }
  _initCommandInterceptor() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x3010e5) => {
          if (_0x3010e5.id === _0x3e4dab.id) {
            let { drawings: _0x2caaab } = _0x3010e5.params,
              _0xcf4842 = _0x2caaab.filter(
                (_0x5ca472) =>
                  _0x5ca472.drawingType === _0xf09c45.DRAWING_SHAPE,
              );
            if (_0xcf4842.length === 0)
              return { preRedos: [], redos: [], preUndos: [], undos: [] };
            let _0x3815a3 = [],
              _0x405c05 = [];
            return (
              _0xcf4842.forEach((_0x5c005f) => {
                let {
                    unitId: _0x35b545,
                    subUnitId: _0x423e33,
                    drawingId: _0x564e28,
                  } = _0x5c005f,
                  _0x27e081 = this._sheetsShapeService["getShapeModel"](
                    _0x35b545,
                    _0x423e33,
                    _0x564e28,
                  );
                if (!_0x27e081)
                  throw TypeError("Fail to get shape model, get: " + _0x27e081);
                (_0x3815a3.push({
                  id: de.id,
                  params: {
                    unitId: _0x35b545,
                    subUnitId: _0x423e33,
                    shapeId: _0x564e28,
                  },
                }),
                  _0x405c05.push({
                    id: ue.id,
                    params: {
                      unitId: _0x35b545,
                      subUnitId: _0x423e33,
                      shapeId: _0x564e28,
                      shapeType: _0x27e081.getShapeType(),
                      shapeData: _0x27e081.getShapeData(),
                    },
                  }));
                let _0x231656 = this._sheetsShapeService[
                  "getBasicShapeRelation"
                ](_0x35b545, _0x423e33, _0x564e28);
                if (_0x231656)
                  for (let _0x3696fa of _0x231656) {
                    let _0x21845a = _0x3696fa.lineShapeId,
                      _0x2b9a66 = _0x3696fa.isFrom,
                      _0x57fd0e = _0x2b9a66
                        ? { from: undefined }
                        : { to: undefined },
                      _0x580377 = _0x2b9a66
                        ? {
                            from: {
                              shapeId: _0x3696fa.shapeId,
                              cxnIndex: _0x3696fa.cxnIndex,
                            },
                          }
                        : {
                            to: {
                              shapeId: _0x3696fa.shapeId,
                              cxnIndex: _0x3696fa.cxnIndex,
                            },
                          };
                    (_0x3815a3.push({
                      id: $.id,
                      params: {
                        unitId: _0x35b545,
                        subUnitId: _0x423e33,
                        shapeId: _0x21845a,
                        shapeData: { relation: _0x57fd0e },
                      },
                    }),
                      _0x405c05.push({
                        id: $.id,
                        params: {
                          unitId: _0x35b545,
                          subUnitId: _0x423e33,
                          shapeId: _0x21845a,
                          shapeData: { relation: _0x580377 },
                        },
                      }));
                  }
              }),
              { preRedos: _0x3815a3, redos: [], preUndos: [], undos: _0x405c05 }
            );
          }
          if (_0x3010e5.id === _0x139deb.id) {
            let { drawings: _0x420354 } = _0x3010e5.params,
              _0x43562e = _0x420354.filter(
                (_0x2b7340) =>
                  _0x2b7340.drawingType === _0xf09c45.DRAWING_SHAPE,
              );
            if (_0x43562e.length === 0)
              return { preRedos: [], redos: [], preUndos: [], undos: [] };
            let _0x2ac79c = [],
              _0x3dbd7c = [];
            for (let _0x297c71 of _0x43562e) {
              let {
                unitId: _0x9b8982,
                subUnitId: _0x78a053,
                drawingId: _0x560b64,
                transform: _0x2408df,
              } = _0x297c71;
              if (!_0x9b8982 || !_0x78a053 || !_0x560b64 || !_0x2408df)
                continue;
              let _0x15b382 = this._sheetsShapeService["getShapeModel"](
                _0x9b8982,
                _0x78a053,
                _0x560b64,
              );
              if (!_0x15b382)
                throw TypeError("Fail to get shape model, get: " + _0x15b382);
              if (_0x2de0c6(_0x15b382.getShapeType())) {
                let _0x509394 = this._sheetsShapeService[
                  "getLineShapeRelation"
                ](_0x9b8982, _0x78a053, _0x560b64);
                _0x509394 &&
                  (_0x2ac79c.push({
                    id: $.id,
                    params: {
                      unitId: _0x9b8982,
                      subUnitId: _0x78a053,
                      shapeId: _0x560b64,
                      shapeData: {
                        relation: { from: undefined, to: undefined },
                      },
                    },
                  }),
                  _0x3dbd7c.push({
                    id: $.id,
                    params: {
                      unitId: _0x9b8982,
                      subUnitId: _0x78a053,
                      shapeId: _0x560b64,
                      shapeData: { relation: _0x509394 },
                    },
                  }));
              } else {
                let _0x23be7d = this._sheetsShapeService[
                  "getBasicShapeRelation"
                ](_0x9b8982, _0x78a053, _0x560b64);
                if (_0x23be7d && _0x23be7d.length > 0)
                  for (let _0x3f6de3 of _0x23be7d) {
                    let _0x1c57b3 = _0x3f6de3.lineShapeId,
                      _0x3b4493 = _0x3f6de3.isFrom,
                      _0x81df3a = this._sheetsShapeService["getShapeModel"](
                        _0x9b8982,
                        _0x78a053,
                        _0x1c57b3,
                      );
                    if (!_0x81df3a) continue;
                    let _0x404992 = _0x81df3a.getStartConnectInfo(),
                      _0x130aa9 = _0x81df3a.getEndConnectInfo();
                    _0x404992 && _0x130aa9
                      ? this._addLineRerouteUpdates(
                          _0x9b8982,
                          _0x78a053,
                          _0x1c57b3,
                          _0x81df3a,
                          _0x404992,
                          _0x130aa9,
                          _0x2ac79c,
                          _0x3dbd7c,
                          _0x560b64,
                          _0x2408df,
                        )
                      : this._addLineFollowShapeUpdates(
                          _0x9b8982,
                          _0x78a053,
                          _0x1c57b3,
                          _0x81df3a,
                          _0x3b4493 ? _0x404992 : _0x130aa9,
                          _0x3b4493,
                          _0x2ac79c,
                          _0x3dbd7c,
                          _0x560b64,
                          _0x2408df,
                        );
                  }
              }
            }
            return {
              preRedos: [],
              redos: _0x2ac79c,
              preUndos: _0x3dbd7c,
              undos: [],
            };
          }
          return { preRedos: [], redos: [], preUndos: [], undos: [] };
        },
      }),
    );
  }
  _getConnectPointInfo(_0x5f5c87, _0xfe8e6c, _0x173682, _0x3751f0, _0x89221e) {
    if (!_0xfe8e6c || !_0x173682) return null;
    let { shapeId: _0x4a2a65, cxnIndex: _0x3f4c66 } = _0x5f5c87,
      _0x4b1c5d = this._sheetsShapeService["getShapeModel"](
        _0xfe8e6c,
        _0x173682,
        _0x4a2a65,
      );
    if (!_0x4b1c5d) return null;
    let _0x2fc9e4 = this._drawingManagerService["getDrawingByParam"]({
      unitId: _0xfe8e6c,
      subUnitId: _0x173682,
      drawingId: _0x4a2a65,
    });
    if (!(_0x2fc9e4 != null && _0x2fc9e4.transform)) return null;
    let {
      left: _0x345cf3 = 0,
      top: _0x4a9b3f = 0,
      width: _0x122dfb = 0,
      height: _0x54e34a = 0,
      flipX: _0x47526b = false,
      flipY: _0x3b0bcf = false,
      angle: _0x5aa57f,
    } = _0x2fc9e4.transform;
    (_0x89221e &&
      _0x3751f0 === _0x4a2a65 &&
      ((_0x345cf3 = _0x89221e.left ?? _0x345cf3),
      (_0x4a9b3f = _0x89221e.top ?? _0x4a9b3f),
      (_0x122dfb = _0x89221e.width ?? _0x122dfb),
      (_0x54e34a = _0x89221e.height ?? _0x54e34a),
      (_0x47526b = _0x89221e.flipX ?? _0x47526b),
      (_0x3b0bcf = _0x89221e.flipY ?? _0x3b0bcf),
      (_0x5aa57f = _0x89221e.angle ?? _0x5aa57f)),
      _0x4b1c5d.updateContext({ width: _0x122dfb, height: _0x54e34a }));
    let _0x599bdf = _0x4b1c5d
      .getConnectionSiteList()
      .find((_0x5727c6) => _0x5727c6.index === _0x3f4c66);
    if (!_0x599bdf) return null;
    let _0x2e16e4 = _0x47526b ? _0x122dfb - _0x599bdf.x : _0x599bdf.x,
      _0x3ce644 = _0x3b0bcf ? _0x54e34a - _0x599bdf.y : _0x599bdf.y;
    if (_0x5aa57f !== 0 && _0x5aa57f != null) {
      let _0x48c1cb = (_0x5aa57f * Math.PI) / 180,
        _0x260b7f = Math.cos(_0x48c1cb),
        _0xac786 = Math.sin(_0x48c1cb),
        _0x37c2c0 = _0x122dfb / 2,
        _0x47719b = _0x54e34a / 2,
        _0x429c03 = _0x2e16e4 - _0x37c2c0,
        _0x221782 = _0x3ce644 - _0x47719b;
      ((_0x2e16e4 = _0x37c2c0 + _0x429c03 * _0x260b7f - _0x221782 * _0xac786),
        (_0x3ce644 = _0x47719b + _0x429c03 * _0xac786 + _0x221782 * _0x260b7f));
    }
    ((_0x2e16e4 += _0x345cf3), (_0x3ce644 += _0x4a9b3f));
    let _0x1b7eba = _0x599bdf.ang / 60000;
    (_0x47526b && (_0x1b7eba = 180 - _0x1b7eba),
      _0x3b0bcf && (_0x1b7eba = -_0x1b7eba),
      (_0x1b7eba += _0x5aa57f || 0),
      (_0x1b7eba = ((_0x1b7eba % 360) + 360) % 360));
    let _0x12eb26 = _0x3ada5f(
      { left: _0x345cf3, top: _0x4a9b3f, width: _0x122dfb, height: _0x54e34a },
      _0x5aa57f || 0,
    );
    return {
      point: { x: _0x2e16e4, y: _0x3ce644 },
      angle: _0x1b7eba,
      bounds: _0x12eb26,
    };
  }
  _addLineRerouteUpdates(
    _0x337c6d,
    _0x592844,
    _0x4c654f,
    _0x26d498,
    _0x321335,
    _0x9ab620,
    _0x441049,
    _0x1e2e35,
    _0x3782d6,
    _0x3414b2,
  ) {
    let _0x4cb40d = this._sheetSkeletonService["getSkeleton"](
      _0x337c6d,
      _0x592844,
    );
    if (!_0x4cb40d) return;
    let _0xb9bf38 = _0x26d498.getShapeRelation(),
      _0x3e455c = _0x26d498.getAdjustNames(),
      _0x2a522e = {},
      _0x4fe17b = {};
    _0x3e455c.forEach((_0xccb4f) => {
      let _0x3bf8a8 = _0x26d498.getAdjustValueByName(_0xccb4f);
      _0x4fe17b[_0xccb4f] = _0x3bf8a8 ?? 0;
    });
    let _0x1d14e8 = this._getConnectPointInfo(
        _0x321335,
        _0x337c6d,
        _0x592844,
        _0x3782d6,
        _0x3414b2,
      ),
      _0x56cbc1 = this._getConnectPointInfo(
        _0x9ab620,
        _0x337c6d,
        _0x592844,
        _0x3782d6,
        _0x3414b2,
      );
    if (_0x1d14e8 && _0x56cbc1) {
      let _0x312b8a = _0x26d498.getShapeType(),
        _0x2a8839 = _0x40caaf(_0x1d14e8, _0x56cbc1, _0x312b8a),
        _0x5451ae = _0x312b8a;
      if (_0x2a8839) {
        let _0x10b43e = _0x6b6ed2(_0x2a8839, _0x26d498.getShapeType()),
          _0x56358b = this._drawingManagerService["getDrawingData"](
            _0x337c6d,
            _0x592844,
          );
        if (_0x56358b && _0x56358b[_0x4c654f]) {
          let _0x2c3548 = _0x56358b[_0x4c654f];
          _0x5451ae = _0x10b43e.lineType;
          for (let [_0x4d6fac, _0x1f79dd] of Object.entries(
            _0x10b43e.adjustValues,
          ))
            _0x2a522e[_0x4d6fac] = _0x1f79dd;
          let _0x3339bf = {
              ..._0x2c3548.transform,
              width: _0x10b43e.worldRect["width"],
              height: _0x10b43e.worldRect["height"],
              left: _0x10b43e.worldRect["left"],
              top: _0x10b43e.worldRect["top"],
              flipX: _0x10b43e.worldRect["flipX"],
              flipY: _0x10b43e.worldRect["flipY"],
              angle: _0x10b43e.rotation,
            },
            _0x4ca30f = _0x5470b8(_0x3339bf, _0x4cb40d),
            _0x38536a = _0x12afd4(_0x3339bf, _0x4cb40d),
            _0x4e2f99 = {
              unitId: _0x337c6d,
              subUnitId: _0x592844,
              drawingType: _0xf09c45.DRAWING_SHAPE,
              drawingId: _0x4c654f,
              transform: _0x3339bf,
              sheetTransform: _0x4ca30f,
              axisAlignSheetTransform: _0x38536a,
            },
            {
              unitId: _0x2de10c,
              subUnitId: _0x2b0a83,
              undo: _0x52743c,
              redo: _0x5c1e50,
              objects: _0x10efb2,
            } = this._drawingManagerService["getBatchUpdateOp"]([_0x4e2f99]);
          (_0x441049.push({
            id: _0x4803b6.id,
            params: {
              unitId: _0x2de10c,
              subUnitId: _0x2b0a83,
              op: _0x5c1e50,
              objects: _0x10efb2,
              type: _0x14a90c.UPDATE,
            },
          }),
            _0x1e2e35.push({
              id: _0x4803b6.id,
              params: {
                unitId: _0x2de10c,
                subUnitId: _0x2b0a83,
                op: _0x52743c,
                objects: _0x10efb2,
                type: _0x14a90c.UPDATE,
              },
            }));
        }
        _0x26d498.removeLinePoints();
      }
      (_0x441049.push({
        id: $.id,
        params: {
          unitId: _0x337c6d,
          subUnitId: _0x592844,
          shapeId: _0x4c654f,
          shapeType: _0x5451ae,
          shapeData: { adjustValues: _0x2a522e, relation: _0xb9bf38 },
        },
      }),
        _0x1e2e35.push({
          id: $.id,
          params: {
            unitId: _0x337c6d,
            subUnitId: _0x592844,
            shapeId: _0x4c654f,
            shapeType: _0x312b8a,
            shapeData: { adjustValues: _0x4fe17b, relation: _0xb9bf38 },
          },
        }));
    }
  }
  _addLineFollowShapeUpdates(
    _0xfa5189,
    _0x263bd7,
    _0x4f65aa,
    _0x402990,
    _0x946298,
    _0x40e65c,
    _0x4133ae,
    _0x5cce3b,
    _0x168be5,
    _0x8392ed,
  ) {
    var _0x386847;
    if (!_0x946298) return;
    let _0x2bf96c = this._sheetSkeletonService["getSkeleton"](
      _0xfa5189,
      _0x263bd7,
    );
    if (!_0x2bf96c) return;
    let _0x4e2bba =
      (_0x386847 = this._drawingManagerService["getDrawingByParam"]({
        unitId: _0xfa5189,
        subUnitId: _0x263bd7,
        drawingId: _0x168be5,
      })) == null
        ? undefined
        : _0x386847.transform;
    if (!_0x4e2bba) return;
    let _0x3c0633 =
        _0x4e2bba.left !== _0x8392ed.left || _0x4e2bba.top !== _0x8392ed.top,
      _0x7f3e95 =
        _0x4e2bba.width !== _0x8392ed.width ||
        _0x4e2bba.height !== _0x8392ed.height,
      _0x385fd7 =
        _0x4e2bba.flipX !== _0x8392ed.flipX ||
        _0x4e2bba.flipY !== _0x8392ed.flipY,
      _0x1a5f33 = _0x4e2bba.angle !== _0x8392ed.angle;
    if (_0x3c0633 && !_0x7f3e95 && !_0x385fd7 && !_0x1a5f33) {
      let _0x133d8f = (_0x8392ed.left ?? 0) - (_0x4e2bba.left ?? 0),
        _0x16809f = (_0x8392ed.top ?? 0) - (_0x4e2bba.top ?? 0),
        _0x50e8b9 = this._drawingManagerService["getDrawingData"](
          _0xfa5189,
          _0x263bd7,
        );
      if (_0x50e8b9 && _0x50e8b9[_0x4f65aa]) {
        var _0x113b18, _0x163d11;
        let _0x35d85d = _0x50e8b9[_0x4f65aa],
          _0x1d1cba = {
            ..._0x35d85d.transform,
            left:
              (((_0x113b18 = _0x35d85d.transform) == null
                ? undefined
                : _0x113b18.left) ?? 0) + _0x133d8f,
            top:
              (((_0x163d11 = _0x35d85d.transform) == null
                ? undefined
                : _0x163d11.top) ?? 0) + _0x16809f,
          },
          _0x3b50b2 = _0x5470b8(_0x1d1cba, _0x2bf96c),
          _0x314c6b = _0x12afd4(_0x1d1cba, _0x2bf96c),
          _0x24002d = {
            unitId: _0xfa5189,
            subUnitId: _0x263bd7,
            drawingType: _0xf09c45.DRAWING_SHAPE,
            drawingId: _0x4f65aa,
            transform: _0x1d1cba,
            sheetTransform: _0x3b50b2,
            axisAlignSheetTransform: _0x314c6b,
          },
          {
            unitId: _0x1136fd,
            subUnitId: _0x198ef5,
            undo: _0x4af8ae,
            redo: _0x324154,
            objects: _0xadea83,
          } = this._drawingManagerService["getBatchUpdateOp"]([_0x24002d]);
        (_0x4133ae.push({
          id: _0x4803b6.id,
          params: {
            unitId: _0x1136fd,
            subUnitId: _0x198ef5,
            op: _0x324154,
            objects: _0xadea83,
            type: _0x14a90c.UPDATE,
          },
        }),
          _0x5cce3b.push({
            id: _0x4803b6.id,
            params: {
              unitId: _0x1136fd,
              subUnitId: _0x198ef5,
              op: _0x4af8ae,
              objects: _0xadea83,
              type: _0x14a90c.UPDATE,
            },
          }));
      }
    } else {
      let _0x256a64 = _0x402990.getStartConnectInfo(),
        _0x3f1a1 = _0x402990.getEndConnectInfo();
      this._addLineRerouteUpdates(
        _0xfa5189,
        _0x263bd7,
        _0x4f65aa,
        _0x402990,
        _0x256a64,
        _0x3f1a1,
        _0x4133ae,
        _0x5cce3b,
        _0x168be5,
        _0x8392ed,
      );
    }
  }
};
Te = le(
  [
    Z(0, _0x9c1e4e),
    Z(1, _0x461959(_0x4a1599)),
    Z(2, _0x461959(_0x1064b2)),
    Z(3, _0x461959(Q)),
    Z(4, _0x461959(_0x2f9033)),
    Z(5, _0x461959(_0x4704b9)),
    Z(6, _0x461959(Ce)),
  ],
  Te,
);
let Ee = class extends _0x32fe22 {
  constructor(_0x4c9267, _0x229e8b, _0x503c3f) {
    (super(),
      (this._shapeService = _0x4c9267),
      (this._shapeAdapter = _0x229e8b),
      this.disposeWithMe(_0x503c3f.register(this)));
  }
  transform(_0x2751cf) {
    let _0x1bb2ba = { preRedos: [], redos: [], preUndos: [], undos: [] };
    this._planDeletes(_0x2751cf, _0x1bb2ba);
    for (let [_0x18a0e5, _0x185247] of _0x2751cf.originals)
      this._planConnector(_0x2751cf, _0x18a0e5, _0x185247, _0x1bb2ba);
    return _0x1bb2ba;
  }
  _planDeletes(_0x46915a, _0x421c57) {
    if (_0x46915a.mode === "command")
      for (let _0x3f518a of _0x46915a.deletes) {
        let _0x25de19 = _0x46915a.originals["get"](_0x3f518a),
          _0x5ca701 = this._shapeService["getShapeModel"](
            _0x46915a.unitId,
            _0x46915a.subUnitId,
            _0x3f518a,
          );
        (_0x25de19 == null ? undefined : _0x25de19.drawingType) !==
          _0xf09c45.DRAWING_SHAPE ||
          !_0x5ca701 ||
          (_0x421c57.preRedos["push"]({
            id: de.id,
            params: {
              unitId: _0x46915a.unitId,
              subUnitId: _0x46915a.subUnitId,
              shapeId: _0x3f518a,
            },
          }),
          _0x421c57.undos["push"]({
            id: ue.id,
            params: {
              unitId: _0x46915a.unitId,
              subUnitId: _0x46915a.subUnitId,
              shapeId: _0x3f518a,
              shapeName: _0x5ca701.getName(),
              shapeType: _0x5ca701.getShapeType(),
              shapeData: _0x220f60.deepClone(_0x5ca701.getShapeData()),
            },
          }));
      }
  }
  _planConnector(_0x33cf5c, _0x8bcadc, _0x15c63b, _0x4f9dde) {
    if (
      _0x15c63b.drawingType !== _0xf09c45.DRAWING_SHAPE ||
      _0x33cf5c.deletes["has"](_0x8bcadc)
    )
      return;
    let _0x5b1a4e = this._shapeService["getShapeModel"](
      _0x33cf5c.unitId,
      _0x33cf5c.subUnitId,
      _0x8bcadc,
    );
    if (!_0x5b1a4e || !_0x2de0c6(_0x5b1a4e.getShapeType())) return;
    let _0x14f0eb = _0x5b1a4e.getShapeRelation();
    if (!(
      _0x33cf5c.updates["has"](_0x8bcadc) ||
      (_0x14f0eb != null &&
        _0x14f0eb.from &&
        (_0x33cf5c.updates["has"](_0x14f0eb.from["shapeId"]) ||
          _0x33cf5c.deletes["has"](_0x14f0eb.from["shapeId"]))) ||
      (_0x14f0eb != null &&
        _0x14f0eb.to &&
        (_0x33cf5c.updates["has"](_0x14f0eb.to["shapeId"]) ||
          _0x33cf5c.deletes["has"](_0x14f0eb.to["shapeId"])))
    ))
      return;
    let _0x48c415 = _0x33cf5c.updates["get"](_0x8bcadc) ?? _0x15c63b,
      _0x4c7535 = this._toSnapshot(_0x33cf5c, _0x48c415);
    if (!_0x4c7535) return;
    let _0x5d1042 = _0x33d589(_0x4c7535);
    if (_0x5d1042.length < 2) return;
    let _0x3cbff7 = _0x220f60.deepClone(_0x14f0eb ?? {}),
      _0x13556b =
        _0x3cbff7.from &&
        this._resolveBinding(
          _0x33cf5c,
          _0x3cbff7.from["shapeId"],
          _0x3cbff7.from["cxnIndex"],
        ),
      _0x500bf7 =
        _0x3cbff7.to &&
        this._resolveBinding(
          _0x33cf5c,
          _0x3cbff7.to["shapeId"],
          _0x3cbff7.to["cxnIndex"],
        );
    (_0x3cbff7.from && !_0x13556b && delete _0x3cbff7.from,
      _0x3cbff7.to && !_0x500bf7 && delete _0x3cbff7.to);
    let _0x225f6e = _0x36d519(
      _0x4c7535,
      _0x13556b ||
        _0x4a46a4(
          (_0x500bf7 == null ? undefined : _0x500bf7.point) ??
            _0x5d1042[_0x5d1042.length - 1],
          _0x5d1042[0],
        ),
      _0x500bf7 ||
        _0x4a46a4(
          (_0x13556b == null ? undefined : _0x13556b.point) ?? _0x5d1042[0],
          _0x5d1042[_0x5d1042.length - 1],
        ),
      _0x3cbff7,
    );
    if (!(
      !(_0x225f6e != null && _0x225f6e.transform) ||
      !_0x225f6e.shapeType ||
      !_0x225f6e.shapeData
    )) {
      if (
        (this._applyUpdate(_0x33cf5c, _0x48c415, _0x225f6e),
        _0x33cf5c.mode === "refresh")
      ) {
        (_0x5b1a4e.setShapeType(_0x225f6e.shapeType),
          _0x5b1a4e.setShapeData(
            _0x220f60.deepClone(_0x225f6e.shapeData),
            false,
          ));
        return;
      }
      (_0x4f9dde.redos["push"]({
        id: $.id,
        params: {
          unitId: _0x33cf5c.unitId,
          subUnitId: _0x33cf5c.subUnitId,
          shapeId: _0x8bcadc,
          shapeType: _0x225f6e.shapeType,
          shapeData: _0x220f60.deepClone(_0x225f6e.shapeData),
          replace: true,
        },
      }),
        _0x4f9dde.undos["push"]({
          id: $.id,
          params: {
            unitId: _0x33cf5c.unitId,
            subUnitId: _0x33cf5c.subUnitId,
            shapeId: _0x8bcadc,
            shapeType: _0x5b1a4e.getShapeType(),
            shapeData: _0x220f60.deepClone(_0x5b1a4e.getShapeData()),
            replace: true,
          },
        }));
    }
  }
  _resolveBinding(_0x125c5b, _0x46d5b8, _0x32a947) {
    if (_0x125c5b.deletes["has"](_0x46d5b8)) return null;
    let _0x305bd4 =
      _0x125c5b.updates["get"](_0x46d5b8) ??
      _0x125c5b.originals["get"](_0x46d5b8);
    if (!_0x305bd4) return null;
    let _0x5d036a = this._toSnapshot(_0x125c5b, _0x305bd4);
    return _0x5d036a ? _0x4ec9f7(_0x5d036a, _0x32a947) : null;
  }
  _toSnapshot(_0x4486e7, _0x4f41f0) {
    let _0x256396 = {
        hostType: _0x1fdf63.UNIVER_SHEET,
        unitId: _0x4486e7.unitId,
        subUnitId: _0x4486e7.subUnitId,
        shapeId: _0x4f41f0.drawingId,
      },
      _0x5a9c7c = this._shapeAdapter["getShape"](_0x256396);
    return !_0x5a9c7c || !_0x4f41f0.transform
      ? null
      : {
          ..._0x5a9c7c,
          transform: {
            left: _0x4f41f0.transform["left"] ?? 0,
            top: _0x4f41f0.transform["top"] ?? 0,
            width: _0x4f41f0.transform["width"] ?? 0,
            height: _0x4f41f0.transform["height"] ?? 0,
            rotation: _0x4f41f0.transform["angle"] ?? 0,
            flipX: _0x4f41f0.transform["flipX"] ?? false,
            flipY: _0x4f41f0.transform["flipY"] ?? false,
          },
        };
  }
  _applyUpdate(_0x187f3d, _0x163e77, _0x54a438) {
    let _0x30c7b3 = _0x163e77,
      _0x255b52 = {
        ..._0x163e77.transform,
        left: _0x54a438.transform["left"],
        top: _0x54a438.transform["top"],
        width: _0x54a438.transform["width"],
        height: _0x54a438.transform["height"],
        angle: _0x54a438.transform["rotation"],
        flipX: _0x54a438.transform["flipX"],
        flipY: _0x54a438.transform["flipY"],
      },
      _0x53b29b = {
        ..._0x30c7b3,
        transform: _0x255b52,
        sheetTransform: _0x5470b8(_0x255b52, _0x187f3d.skeleton),
        axisAlignSheetTransform: _0x12afd4(_0x255b52, _0x187f3d.skeleton),
        data: {
          ..._0x30c7b3.data,
          shapeType: _0x54a438.shapeType,
          shapeData: _0x220f60.deepClone(_0x54a438.shapeData),
        },
      };
    _0x187f3d.updates["set"](_0x163e77.drawingId, _0x53b29b);
  }
};
Ee = le(
  [Z(0, _0x461959(Q)), Z(1, _0x461959(Ce)), Z(2, _0x461959(_0x498e57))],
  Ee,
);
let De = class extends _0x1be0be {
  constructor(_0x272cf6 = we, _0x360418, _0x10bb75) {
    (super(),
      (this._config = _0x272cf6),
      (this._injector = _0x360418),
      (this._configService = _0x10bb75));
    let { ..._0x49317c } = _0x4b4e76({}, we, this._config);
    this._configService["setConfig"]("sheets-shape.config", _0x49317c);
  }
  onStarting() {
    let _0x5b89c2 = this._injector;
    ([[ce], [Q], [Ce], [Ee], [Te]].forEach((_0x5a081a) =>
      _0x5b89c2.add(_0x5a081a),
    ),
      _0x42166c(_0x5b89c2, [[Q], [Ee], [Te]]));
  }
};
(X(De, "type", _0x1fdf63.UNIVER_SHEET),
  X(De, "pluginName", "SHEET_SHAPE_PLUGIN"),
  X(De, "packageName", be),
  X(De, "version", xe),
  (De = le(
    [
      _0x103409(_0x585382, _0x40b0cd, _0xb48a5c, _0x4ad50c, _0x2fef67),
      Z(1, _0x461959(_0x200320)),
      Z(2, _0x5c3983),
    ],
    De,
  )));
export {
  ie as DEFAULT_SHAPE_HEIGHT,
  re as DEFAULT_SHAPE_WIDTH,
  fe as InsertShapeCommand,
  ue as InsertSheetsShapeMutation,
  de as RemoveSheetsShapeMutation,
  pe as SetShapeDrawingDataCommand,
  he as SetSheetsShapeRotateCommand,
  ge as SetSheetsShapeTextVerticalToggleCommand,
  Q as SheetsShapeService,
  me as ToggleSheetsShapeFlipCommand,
  De as UniverSheetsShapePlugin,
  _e as UpdateConnectorRelationCommand,
  ve as UpdateLineShapeResizeCommand,
  $ as UpdateSheetsShapeDataMutation,
  ye as UpdateSheetsShapeTypeMutation,
};
