Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs/core"),
  n = require("@univerjs/sheets"),
  r = require("@univerjs/sheets-drawing"),
  i = require("@univerjs-pro/license"),
  a = require("@univerjs/drawing");
function o(_0x2c7279) {
  "@babel/helpers - typeof";
  return (
    (o =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5da390) {
            return typeof _0x5da390;
          }
        : function (_0x482cbd) {
            return _0x482cbd &&
              typeof Symbol == "function" &&
              _0x482cbd.constructor === Symbol &&
              _0x482cbd !== Symbol.prototype
              ? "symbol"
              : typeof _0x482cbd;
          }),
    o(_0x2c7279)
  );
}
function s(_0x408892, _0x29f1bb) {
  if (o(_0x408892) != "object" || !_0x408892) return _0x408892;
  var _0x625fc8 = _0x408892[Symbol.toPrimitive];
  if (_0x625fc8 !== undefined) {
    var _0x123641 = _0x625fc8.call(_0x408892, _0x29f1bb || "default");
    if (o(_0x123641) != "object") return _0x123641;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x29f1bb === "string" ? String : Number)(_0x408892);
}
function c(_0x87069a) {
  var _0x1e2921 = s(_0x87069a, "string");
  return o(_0x1e2921) == "symbol" ? _0x1e2921 : _0x1e2921 + "";
}
function l(_0x595ecf, _0x27aa53, _0xc9ffc5) {
  return (
    (_0x27aa53 = c(_0x27aa53)) in _0x595ecf
      ? Object.defineProperty(_0x595ecf, _0x27aa53, {
          value: _0xc9ffc5,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x595ecf[_0x27aa53] = _0xc9ffc5),
    _0x595ecf
  );
}
var u = class extends t.Disposable {
  constructor() {
    (super(),
      l(this, "_shapes", new Map()),
      l(this, "_linesIds", new Set()),
      l(this, "_groupIds", new Set()));
  }
  addShape(_0x5049dc, _0x4f04ea, _0xe08b16, _0x239552) {
    let _0x306502 = new e["ShapeModel"](
      _0x5049dc,
      _0x4f04ea,
      _0xe08b16,
      _0x239552,
    );
    return (
      this._shapes["set"](_0x4f04ea, _0x306502),
      (0, e.isConnectorShape)(_0x5049dc) && this._linesIds["add"](_0x4f04ea),
      _0x306502
    );
  }
  getBasicShapeRelation(_0xcc645) {
    let _0x2c5539 = [];
    for (let _0x562325 of this._linesIds) {
      let _0x19d745 = this._shapes["get"](_0x562325);
      if (_0x19d745) {
        let _0x4cce8f = _0x19d745.getShapeRelation();
        if (_0x4cce8f) {
          var _0x1be022, _0x2e286f;
          (((_0x1be022 = _0x4cce8f.from) == null
            ? undefined
            : _0x1be022.shapeId) === _0xcc645 &&
            _0x2c5539.push({
              ..._0x4cce8f.from,
              lineShapeId: _0x562325,
              isFrom: true,
            }),
            ((_0x2e286f = _0x4cce8f.to) == null
              ? undefined
              : _0x2e286f.shapeId) === _0xcc645 &&
              _0x2c5539.push({
                ..._0x4cce8f.to,
                lineShapeId: _0x562325,
                isFrom: false,
              }));
        }
      }
    }
    return _0x2c5539;
  }
  getLineShapeRelation(_0x3f6ef2) {
    let _0x1a4913 = this._shapes["get"](_0x3f6ef2);
    if (_0x1a4913) return _0x1a4913.getShapeRelation();
  }
  getShapeType(_0x86c35c) {
    let _0x4062b5 = this._shapes["get"](_0x86c35c);
    if (_0x4062b5) return _0x4062b5.getShapeType();
  }
  hasShape(_0x30d4b5) {
    return this._shapes["has"](_0x30d4b5);
  }
  getShapeDisplayNames() {
    return Array.from(this._shapes["values"]()).map(
      (_0x447262) => _0x447262.getName() || _0x447262.getId(),
    );
  }
  removeShape(_0x414f99) {
    let _0x388162 = this._shapes["get"](_0x414f99);
    _0x388162 &&
      ((0, e.isConnectorShape)(_0x388162.getShapeType()) &&
        this._linesIds["delete"](_0x414f99),
      this._shapes["delete"](_0x414f99));
  }
  toJSON() {
    let _0x5a2b8f = [];
    return (
      this._shapes["forEach"]((_0x2c4d46) => {
        _0x5a2b8f.push(_0x2c4d46.toJSON());
      }),
      _0x5a2b8f
    );
  }
  fromJSON(_0x5b385f) {
    for (let _0x127464 of _0x5b385f) {
      let { id: _0x138ae4, shapeType: _0x3d1189, name: _0x4b13f4 } = _0x127464,
        _0x12b20c = this.addShape(
          _0x3d1189,
          _0x138ae4,
          _0x127464.shapeData,
          _0x4b13f4,
        );
      _0x12b20c && _0x12b20c.isLineShape() && this._linesIds["add"](_0x138ae4);
    }
  }
  dispose() {
    this._disposed ||
      (this._shapes["forEach"]((_0x515b7f) => {
        _0x515b7f.dispose();
      }),
      this._shapes["clear"](),
      this._linesIds["clear"](),
      this._groupIds["clear"](),
      super.dispose());
  }
};
function d(_0x30c252, _0x51c006) {
  return function (_0x153d4f, _0x351fa8) {
    _0x51c006(_0x153d4f, _0x351fa8, _0x30c252);
  };
}
function f(_0x26c454, _0x17fe50, _0x535c0f, _0x156249) {
  var _0xfc68c3 = arguments.length,
    _0x23a9f6 =
      _0xfc68c3 < 3
        ? _0x17fe50
        : _0x156249 === null
          ? (_0x156249 = Object.getOwnPropertyDescriptor(_0x17fe50, _0x535c0f))
          : _0x156249,
    _0x5dcd3a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x23a9f6 = Reflect.decorate(_0x26c454, _0x17fe50, _0x535c0f, _0x156249);
  else {
    for (var _0x37b359 = _0x26c454.length - 1; _0x37b359 >= 0; _0x37b359--)
      (_0x5dcd3a = _0x26c454[_0x37b359]) &&
        (_0x23a9f6 =
          (_0xfc68c3 < 3
            ? _0x5dcd3a(_0x23a9f6)
            : _0xfc68c3 > 3
              ? _0x5dcd3a(_0x17fe50, _0x535c0f, _0x23a9f6)
              : _0x5dcd3a(_0x17fe50, _0x535c0f)) || _0x23a9f6);
  }
  return (
    _0xfc68c3 > 3 &&
      _0x23a9f6 &&
      Object.defineProperty(_0x17fe50, _0x535c0f, _0x23a9f6),
    _0x23a9f6
  );
}
let p = class extends t.Disposable {
  constructor(_0x1fd650) {
    (super(),
      (this._resourcesManagerService = _0x1fd650),
      l(this, "_shapeModelManagerMap", new Map()),
      this._initSnapshot());
  }
  _ensureShapeModelManager(_0x62ca96, _0x4441cf) {
    let _0x3461ea = this._shapeModelManagerMap["get"](_0x62ca96);
    _0x3461ea ||
      ((_0x3461ea = new Map()),
      this._shapeModelManagerMap["set"](_0x62ca96, _0x3461ea));
    let _0x231342 = _0x3461ea.get(_0x4441cf);
    return (
      _0x231342 || ((_0x231342 = new u()), _0x3461ea.set(_0x4441cf, _0x231342)),
      _0x231342
    );
  }
  insertShape(
    _0x1a16ba,
    _0xf84caf,
    _0x54dc2a,
    _0x4d4dd6,
    _0x43fe8c,
    _0x2a05db,
  ) {
    this._ensureShapeModelManager(_0x1a16ba, _0xf84caf).addShape(
      _0x54dc2a,
      _0x4d4dd6,
      _0x43fe8c,
      _0x2a05db,
    );
  }
  removeShape(_0x1d036d, _0x69b5b7, _0x41574d) {
    this._ensureShapeModelManager(_0x1d036d, _0x69b5b7).removeShape(_0x41574d);
  }
  getBasicShapeType(_0x4e29c9, _0x14ce73, _0x22cec3) {
    return this._ensureShapeModelManager(_0x4e29c9, _0x14ce73).getShapeType(
      _0x22cec3,
    );
  }
  getShapeType(_0x573cac, _0x2d5f2d, _0x57a3bf) {
    return this._ensureShapeModelManager(_0x573cac, _0x2d5f2d).getShapeType(
      _0x57a3bf,
    );
  }
  hasShape(_0x50d1e8, _0x324c7d, _0x4f2f1c) {
    return this._ensureShapeModelManager(_0x50d1e8, _0x324c7d).hasShape(
      _0x4f2f1c,
    );
  }
  getShapeTypeById(_0x56ef50, _0x40357d, _0x488e00) {
    return this._ensureShapeModelManager(_0x56ef50, _0x40357d).getShapeType(
      _0x488e00,
    );
  }
  getShapeDataById(_0x979c2c, _0x319f52, _0x3453c7) {
    let _0x38b672 = this._ensureShapeModelManager(_0x979c2c, _0x319f52);
    if (!_0x38b672.getShapeType(_0x3453c7)) return;
    let _0x539e3f = _0x38b672._shapes["get"](_0x3453c7);
    if (_0x539e3f) return _0x539e3f.getShapeData();
  }
  getShapeDisplayNames(_0x45495a, _0x260668) {
    return this._ensureShapeModelManager(
      _0x45495a,
      _0x260668,
    ).getShapeDisplayNames();
  }
  getShapeModel(_0x21fe90, _0x34309e, _0x4d1565) {
    return this._ensureShapeModelManager(_0x21fe90, _0x34309e)._shapes["get"](
      _0x4d1565,
    );
  }
  getBasicShapeRelation(_0x5c5638, _0x3e3c57, _0x2ce3da) {
    return this._ensureShapeModelManager(
      _0x5c5638,
      _0x3e3c57,
    ).getBasicShapeRelation(_0x2ce3da);
  }
  getLineShapeRelation(_0xd444d9, _0x59cb76, _0x80e61f) {
    let _0xa01b1 = this._ensureShapeModelManager(_0xd444d9, _0x59cb76)._shapes[
      "get"
    ](_0x80e61f);
    if (_0xa01b1) return _0xa01b1.getShapeRelation();
  }
  setShapeType() {}
  _serializeShapeForUnit(_0x3246c3) {
    let _0x4fde2b = {},
      _0x24a72d = this._shapeModelManagerMap["get"](_0x3246c3);
    return (
      _0x24a72d &&
        _0x24a72d.forEach((_0x5cb939, _0x3c4846) => {
          let _0x925b1a = _0x5cb939.toJSON();
          _0x925b1a.length > 0 && (_0x4fde2b[_0x3c4846] = _0x925b1a);
        }),
      JSON.stringify(_0x4fde2b)
    );
  }
  _deserializeShapeForUnit(_0x3fb86a, _0xb1f53a) {
    Object.keys(_0xb1f53a).forEach((_0x2afc0a) => {
      this._ensureShapeModelManager(_0x3fb86a, _0x2afc0a).fromJSON(
        _0xb1f53a[_0x2afc0a],
      );
    });
  }
  toJSON() {
    let _0x4a422d = {};
    return (
      this._shapeModelManagerMap["forEach"]((_0x41478d, _0x40dc55) => {
        ((_0x4a422d[_0x40dc55] = {}),
          _0x41478d.forEach((_0x471692, _0x2a8abf) => {
            _0x4a422d[_0x40dc55][_0x2a8abf] = _0x471692.toJSON();
          }));
      }),
      _0x4a422d
    );
  }
  fromJSON(_0x2ea3da) {
    Object.keys(_0x2ea3da).forEach((_0x339f9b) => {
      let _0x1064f2 = _0x2ea3da[_0x339f9b];
      Object.keys(_0x1064f2).forEach((_0x1cfb93) => {
        this._ensureShapeModelManager(_0x339f9b, _0x1cfb93).fromJSON(
          _0x1064f2[_0x1cfb93],
        );
      });
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: "SHEET_SHAPE_PLUGIN",
      businesses: [t.UniverInstanceType["UNIVER_SHEET"]],
      toJson: (_0x16fd25) => this._serializeShapeForUnit(_0x16fd25),
      parseJson: (_0xa6ed32) => JSON.parse(_0xa6ed32),
      onLoad: (_0x4aa6e6, _0x3e1a8c) => {
        this._deserializeShapeForUnit(_0x4aa6e6, _0x3e1a8c);
      },
      onUnLoad: (_0xfaf870) => {
        let _0x525b12 = this._shapeModelManagerMap["get"](_0xfaf870);
        _0x525b12 &&
          (_0x525b12.forEach((_0x2f660e) => {
            _0x2f660e.dispose();
          }),
          this._shapeModelManagerMap["delete"](_0xfaf870));
      },
    });
  }
  dispose() {
    this._shapeModelManagerMap["forEach"]((_0x5402b6) => {
      _0x5402b6.forEach((_0x53fcd5) => {
        _0x53fcd5.dispose();
      });
    });
  }
};
p = f([d(0, t.IResourceManagerService)], p);
const m = {
    id: "sheet.mutation.insert-shape",
    type: t.CommandType["MUTATION"],
    handler: (_0x3a6d8a, _0x354c9e) => {
      let {
        unitId: _0x1f40fe,
        subUnitId: _0x7c9cd9,
        shapeType: _0x4b782e,
        shapeId: _0x5b1499,
        shapeName: _0xfec86,
        shapeData: _0x11ceed,
      } = _0x354c9e;
      return (
        _0x3a6d8a
          .get(p)
          .insertShape(
            _0x1f40fe,
            _0x7c9cd9,
            _0x4b782e,
            _0x5b1499,
            t.Tools["deepClone"](_0x11ceed),
            _0xfec86,
          ),
        true
      );
    },
  },
  h = {
    id: "sheet.mutation.remove-shape",
    type: t.CommandType["MUTATION"],
    handler: (_0x3257da, _0x158e54) => {
      let {
        unitId: _0x5b9e14,
        subUnitId: _0x14d1ed,
        shapeId: _0x204c87,
      } = _0x158e54;
      return (
        _0x3257da.get(p).removeShape(_0x5b9e14, _0x14d1ed, _0x204c87),
        true
      );
    },
  },
  g = {
    type: t.CommandType["COMMAND"],
    id: "sheet.command.insert-shape",
    handler: (_0x57e43d, _0x155491) => {
      let _0x423699 = (0, n.getSheetCommandTarget)(
        _0x57e43d.get(t.IUniverInstanceService),
        _0x155491,
      );
      if (!_0x423699) return false;
      let _0x42cda4 = _0x57e43d.get(n.SheetSkeletonService),
        { unitId: _0x2b89f1, subUnitId: _0x5056c1 } = _0x423699,
        _0x4dbbc5 = _0x42cda4.ensureSkeleton(_0x2b89f1, _0x5056c1);
      if (!_0x4dbbc5) return false;
      let _0x2569d1 = _0x57e43d.get(t.ICommandService),
        _0x12785b = _0x57e43d.get(t.IUndoRedoService),
        _0x2f87db = _0x57e43d.get(n.SheetInterceptorService),
        _0x1b5ae5 = _0x57e43d.get(r.ISheetDrawingService),
        _0x3afab6 = _0x57e43d.get(p),
        { shapeType: _0x3a3400 } = _0x155491,
        _0x411999 =
          _0x155491.shapeData ??
          (0, e.createDefaultInsertedShapeData)(_0x3a3400),
        _0x55f232 = _0x155491.shapeId || (0, t.generateRandomId)(),
        _0x19501f = {
          unitId: _0x2b89f1,
          subUnitId: _0x5056c1,
          shapeId: _0x55f232,
          shapeName:
            _0x155491.shapeName ??
            (0, e.createUniqueShapeName)(
              _0x3a3400,
              _0x3afab6.getShapeDisplayNames(_0x2b89f1, _0x5056c1),
            ),
          shapeType: _0x3a3400,
          shapeData: _0x411999,
        },
        _0x2b31da = _0x155491.width || 200,
        _0x38411e = _0x155491.height || 200,
        _0x1c3f83 = 0,
        _0x556845 = 0;
      if (_0x155491.position) {
        let { x: _0x683093, y: _0x2f2cda } = _0x155491.position;
        ((_0x1c3f83 = _0x683093), (_0x556845 = _0x2f2cda));
      } else {
        if (_0x155491.range) {
          let { startRow: _0x48c9a3, startColumn: _0x16292b } = _0x155491.range,
            _0x13bae5 = _0x4dbbc5.getCellWithCoordByIndex(_0x48c9a3, _0x16292b);
          ((_0x1c3f83 = _0x13bae5.startX + 10),
            (_0x556845 = _0x13bae5.startY + 10));
        }
      }
      let _0x32378d = {
          left: _0x1c3f83,
          top: _0x556845,
          width: _0x2b31da,
          height: _0x38411e,
          angle: _0x155491.rotation ?? 0,
          flipX: _0x155491.flipX ?? false,
          flipY: _0x155491.flipY ?? false,
        },
        _0x43c8ad = (0, r.transformToDrawingPosition)(_0x32378d, _0x4dbbc5),
        _0x24ed0d = (0, r.transformToAxisAlignPosition)(_0x32378d, _0x4dbbc5),
        _0x15d849 = {
          unitId: _0x2b89f1,
          subUnitId: _0x5056c1,
          drawingId: _0x55f232,
          drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
          anchorType: r.SheetDrawingAnchorType["Both"],
          name: _0x155491.name,
          description: _0x155491.description,
          sheetTransform: _0x43c8ad,
          transform: _0x32378d,
          data: { shapeType: _0x3a3400, shapeData: _0x411999 },
          axisAlignSheetTransform: _0x24ed0d,
          allowTransform: true,
          hidden: _0x155491.visible === false,
          selectable: _0x155491.selectable ?? true,
        };
      (0, e.isConnectorShape)(_0x3a3400) &&
        ((_0x15d849.data["fill"] = false),
        (_0x15d849.data["rotateEnabled"] = false),
        (_0x15d849.data["resizeEnabled"] = false),
        (_0x15d849.data["borderEnabled"] = false),
        (_0x15d849.transform["rotateEnabled"] = false),
        (_0x15d849.transform["resizeEnabled"] = false),
        (_0x15d849.transform["borderEnabled"] = false));
      let {
          undo: _0x130e6d,
          redo: _0xfbc8ea,
          objects: _0x5c8960,
        } = _0x1b5ae5.getBatchAddOp([_0x15d849]),
        _0x2ae012 = _0x2f87db.onCommandExecute({
          id: r.InsertSheetDrawingCommand["id"],
          params: { unitId: _0x2b89f1, drawings: [_0x15d849] },
        }),
        _0x3ba2d1 = [
          ...(_0x2ae012.preRedos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x2b89f1,
              subUnitId: _0x5056c1,
              op: _0xfbc8ea,
              objects: _0x5c8960,
              type: r.DrawingApplyType["INSERT"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x2b89f1],
          },
          ..._0x2ae012.redos,
          { id: m.id, params: _0x19501f },
        ],
        _0x45e67a = [
          {
            id: h.id,
            params: {
              unitId: _0x2b89f1,
              subUnitId: _0x5056c1,
              shapeId: _0x55f232,
            },
          },
          ...(_0x2ae012.preUndos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x2b89f1,
              subUnitId: _0x5056c1,
              op: _0x130e6d,
              objects: _0x5c8960,
              type: r.DrawingApplyType["REMOVE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x2b89f1],
          },
          ..._0x2ae012.undos,
        ];
      return (0, t.sequenceExecute)(_0x3ba2d1, _0x2569d1).result
        ? (_0x12785b.pushUndoRedo({
            unitID: _0x2b89f1,
            undoMutations: _0x45e67a,
            redoMutations: _0x3ba2d1,
          }),
          true)
        : false;
    },
  },
  _ = {
    id: "sheet.mutation.update-shape-data",
    type: t.CommandType["MUTATION"],
    handler: (_0x1045b7, _0x10e420) => {
      let {
          unitId: _0x56b8a2,
          subUnitId: _0x857e60,
          shapeType: _0x263682,
          shapeId: _0x3dceb8,
          shapeData: _0x1e4878,
          replace: _0x40e179,
          formulaLastValueGuard: _0x42405e,
        } = _0x10e420,
        _0xe60b8e = _0x1045b7
          .get(p)
          .getShapeModel(_0x56b8a2, _0x857e60, _0x3dceb8);
      if (_0xe60b8e) {
        var _0x5f363f;
        if (
          !(0, e.canApplyShapeFormulaLastValue)(
            _0x1045b7,
            {
              hostType: t.UniverInstanceType["UNIVER_SHEET"],
              unitId: _0x56b8a2,
              subUnitId: _0x857e60,
              shapeId: _0x3dceb8,
            },
            (_0x5f363f = _0xe60b8e.getShapeData().formulaBinding) == null
              ? undefined
              : _0x5f363f.formula,
            _0x42405e,
          )
        )
          return true;
        (_0x263682 !== undefined && _0xe60b8e.setShapeType(_0x263682),
          _0x1e4878 &&
            (_0xe60b8e == null ||
              _0xe60b8e.setShapeData(
                t.Tools["deepClone"](_0x1e4878),
                !_0x40e179,
              )));
      }
      return true;
    },
  },
  v = {
    type: t.CommandType["COMMAND"],
    id: "sheet.command.set-shape-drawing-data",
    handler: (_0x53090c, _0x5a0c0c) => {
      let _0x3ddfe0 = (0, n.getSheetCommandTarget)(
        _0x53090c.get(t.IUniverInstanceService),
        _0x5a0c0c,
      );
      if (!_0x3ddfe0) return false;
      let _0x19ca4e = _0x53090c.get(n.SheetSkeletonService),
        { unitId: _0x6dcc2b, subUnitId: _0xcae73f } = _0x3ddfe0,
        _0x318352 = _0x19ca4e.ensureSkeleton(_0x6dcc2b, _0xcae73f);
      if (!_0x318352) return false;
      let _0x48bf13 = _0x53090c.get(p),
        {
          shapeId: _0x12334a,
          shapeType: _0x3f0d87,
          shapeData: _0x1c691f,
          position: _0x3fddd1,
          width: _0x2d5af1,
          height: _0x4a27ec,
        } = _0x5a0c0c,
        _0x512060 = _0x48bf13.getShapeModel(_0x6dcc2b, _0xcae73f, _0x12334a);
      if (!_0x512060) return false;
      let _0xf2b943 = _0x53090c.get(t.ICommandService),
        _0x977286 = _0x53090c.get(t.IUndoRedoService),
        _0x7df20a = _0x53090c.get(n.SheetInterceptorService),
        _0x25a04a = _0x53090c.get(r.ISheetDrawingService),
        _0x282649 = {
          unitId: _0x6dcc2b,
          subUnitId: _0xcae73f,
          shapeId: _0x12334a,
          shapeType: _0x3f0d87,
          shapeData: _0x1c691f,
          replace: true,
        },
        _0x4860d3 = _0x512060.getShapeType(),
        _0x42e772 = _0x512060.getShapeData(),
        { x: _0x175e18, y: _0x129a44 } = _0x3fddd1,
        _0x5ea012 = {
          left: _0x175e18,
          top: _0x129a44,
          width: _0x2d5af1,
          height: _0x4a27ec,
          angle: _0x5a0c0c.rotation ?? 0,
          flipX: _0x5a0c0c.flipX ?? false,
          flipY: _0x5a0c0c.flipY ?? false,
        },
        _0xe3dd1b = (0, r.transformToDrawingPosition)(_0x5ea012, _0x318352),
        _0x5bd392 = (0, r.transformToAxisAlignPosition)(_0x5ea012, _0x318352),
        _0x5adfa1 = {
          unitId: _0x6dcc2b,
          subUnitId: _0xcae73f,
          drawingId: _0x12334a,
          drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
          name: _0x5a0c0c.name,
          description: _0x5a0c0c.description,
          sheetTransform: _0xe3dd1b,
          transform: _0x5ea012,
          data: { shapeType: _0x3f0d87, shapeData: _0x1c691f },
          axisAlignSheetTransform: _0x5bd392,
          allowTransform: true,
          hidden: !_0x5a0c0c.visible,
          selectable: _0x5a0c0c.selectable,
        };
      (0, e.isConnectorShape)(_0x3f0d87) &&
        ((_0x5adfa1.data["fill"] = false),
        (_0x5adfa1.data["rotateEnabled"] = false),
        (_0x5adfa1.data["resizeEnabled"] = false),
        (_0x5adfa1.data["borderEnabled"] = false),
        (_0x5adfa1.transform["rotateEnabled"] = false),
        (_0x5adfa1.transform["resizeEnabled"] = false),
        (_0x5adfa1.transform["borderEnabled"] = false));
      let {
          undo: _0x376c5b,
          redo: _0x365a90,
          objects: _0x3e1082,
        } = _0x25a04a.getBatchUpdateOp([_0x5adfa1]),
        _0x5ebab3 = _0x7df20a.onCommandExecute({
          id: r.SetSheetDrawingCommand["id"],
          params: { unitId: _0x6dcc2b, drawings: [_0x5adfa1] },
        }),
        _0x3aa0d0 = [
          ...(_0x5ebab3.preRedos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x6dcc2b,
              subUnitId: _0xcae73f,
              op: _0x365a90,
              objects: _0x3e1082,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x6dcc2b],
          },
          ..._0x5ebab3.redos,
          { id: _.id, params: _0x282649 },
        ],
        _0x30eea1 = [
          ...(_0x5ebab3.preUndos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x6dcc2b,
              subUnitId: _0xcae73f,
              op: _0x376c5b,
              objects: _0x3e1082,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x6dcc2b],
          },
          ..._0x5ebab3.undos,
          {
            id: _.id,
            params: {
              unitId: _0x6dcc2b,
              subUnitId: _0xcae73f,
              shapeType: _0x4860d3,
              shapeId: _0x12334a,
              shapeData: _0x42e772,
              replace: true,
            },
          },
        ];
      return (0, t.sequenceExecute)(_0x3aa0d0, _0xf2b943).result
        ? (_0x977286.pushUndoRedo({
            unitID: _0x6dcc2b,
            undoMutations: _0x30eea1,
            redoMutations: _0x3aa0d0,
          }),
          true)
        : false;
    },
  },
  y = {
    type: t.CommandType["COMMAND"],
    id: "sheet.command.toggle-shape-flip",
    handler: (_0x429096, _0x1774a6) => {
      let _0x263e89 = (0, n.getSheetCommandTarget)(
        _0x429096.get(t.IUniverInstanceService),
        _0x1774a6,
      );
      if (!_0x263e89) return false;
      let _0x582479 = _0x429096.get(n.SheetSkeletonService),
        { unitId: _0x539101, subUnitId: _0x4cf74a } = _0x263e89,
        _0x4ea997 = _0x582479.getSkeleton(_0x539101, _0x4cf74a);
      if (!_0x4ea997) return false;
      let _0x21bd2b = _0x429096.get(r.ISheetDrawingService),
        { shapeId: _0x52bea2, flipH: _0x4348aa, flipV: _0x29ea84 } = _0x1774a6,
        _0x463519 = _0x21bd2b.getDrawingByParam({
          unitId: _0x539101,
          subUnitId: _0x4cf74a,
          drawingId: _0x52bea2,
        });
      if (!_0x463519) return false;
      let _0x22c178 = _0x429096
        .get(p)
        .getShapeModel(_0x539101, _0x4cf74a, _0x52bea2);
      if (!_0x22c178) return false;
      let _0x546d66 = _0x429096.get(t.ICommandService),
        _0x1ddfb7 = _0x429096.get(t.IUndoRedoService),
        _0x2ad43c = _0x429096.get(n.SheetInterceptorService),
        _0x3594ce = { ..._0x463519.transform };
      (_0x4348aa !== undefined && (_0x3594ce.flipX = !_0x3594ce.flipX),
        _0x29ea84 !== undefined && (_0x3594ce.flipY = !_0x3594ce.flipY));
      let _0x559407 = (0, r.transformToDrawingPosition)(_0x3594ce, _0x4ea997),
        _0x4ba873 = (0, r.transformToAxisAlignPosition)(_0x3594ce, _0x4ea997),
        _0x166d5d = _0x22c178.getShapeType(),
        _0x21d371 = _0x22c178.getShapeData(),
        _0x10985d = {
          unitId: _0x539101,
          subUnitId: _0x4cf74a,
          drawingId: _0x52bea2,
          drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
          sheetTransform: _0x559407,
          transform: _0x3594ce,
          data: { shapeType: _0x166d5d, shapeData: _0x21d371 },
          axisAlignSheetTransform: _0x4ba873,
          allowTransform: true,
        },
        {
          undo: _0x1325bc,
          redo: _0x2e6bb1,
          objects: _0xb60d8d,
        } = _0x21bd2b.getBatchUpdateOp([_0x10985d]),
        _0x1bfcce = _0x2ad43c.onCommandExecute({
          id: r.SetSheetDrawingCommand["id"],
          params: { unitId: _0x539101, drawings: [_0x10985d] },
        }),
        _0x3067a2 = [
          ...(_0x1bfcce.preRedos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x539101,
              subUnitId: _0x4cf74a,
              op: _0x2e6bb1,
              objects: _0xb60d8d,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x539101],
          },
          ..._0x1bfcce.redos,
        ],
        _0x47edb = [
          ...(_0x1bfcce.preUndos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x539101,
              subUnitId: _0x4cf74a,
              op: _0x1325bc,
              objects: _0xb60d8d,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x539101],
          },
          ..._0x1bfcce.undos,
        ];
      if ((0, e.isConnectorShape)(_0x166d5d)) {
        let _0x1bc7a6 = _0x22c178.getShapeRelation();
        if (_0x1bc7a6) {
          let _0x2bc74a = { ..._0x1bc7a6 };
          ((_0x2bc74a.from = undefined),
            (_0x2bc74a.to = undefined),
            _0x3067a2.push({
              id: _.id,
              params: {
                unitId: _0x539101,
                subUnitId: _0x4cf74a,
                shapeId: _0x52bea2,
                shapeType: _0x166d5d,
                shapeData: { relation: _0x2bc74a },
              },
            }),
            _0x47edb.push({
              id: _.id,
              params: {
                unitId: _0x539101,
                subUnitId: _0x4cf74a,
                shapeId: _0x52bea2,
                shapeType: _0x166d5d,
                shapeData: { relation: _0x1bc7a6 },
              },
            }));
        }
      }
      return (0, t.sequenceExecute)(_0x3067a2, _0x546d66).result
        ? (_0x1ddfb7.pushUndoRedo({
            unitID: _0x539101,
            undoMutations: _0x47edb,
            redoMutations: _0x3067a2,
          }),
          true)
        : false;
    },
  },
  b = {
    type: t.CommandType["COMMAND"],
    id: "sheet.command.set-shape-rotate",
    handler: (_0x5d5b2b, _0x270a99) => {
      let _0x280629 = (0, n.getSheetCommandTarget)(
        _0x5d5b2b.get(t.IUniverInstanceService),
        _0x270a99,
      );
      if (!_0x280629) return false;
      let _0x20956b = _0x5d5b2b.get(n.SheetSkeletonService),
        { unitId: _0xe15c3b, subUnitId: _0x8777d5 } = _0x280629,
        _0x1ff1c4 = _0x20956b.getSkeleton(_0xe15c3b, _0x8777d5);
      if (!_0x1ff1c4) return false;
      let _0x13ff1e = _0x5d5b2b.get(r.ISheetDrawingService),
        { shapeId: _0x68865a, rotate: _0x975d96 } = _0x270a99,
        _0xfdd7d2 = _0x13ff1e.getDrawingByParam({
          unitId: _0xe15c3b,
          subUnitId: _0x8777d5,
          drawingId: _0x68865a,
        });
      if (!_0xfdd7d2) return false;
      let _0xcb589b = _0x5d5b2b
        .get(p)
        .getShapeModel(_0xe15c3b, _0x8777d5, _0x68865a);
      if (!_0xcb589b) return false;
      let _0x2e44ff = _0x5d5b2b.get(t.ICommandService),
        _0x7c89a1 = _0x5d5b2b.get(t.IUndoRedoService),
        _0x8a33bd = _0x5d5b2b.get(n.SheetInterceptorService),
        _0x3ba054 = { ..._0xfdd7d2.transform };
      _0x975d96 !== undefined &&
        (_0x3ba054.angle = (_0x3ba054.angle || 0) + _0x975d96);
      let _0x5d82ea = (0, r.transformToDrawingPosition)(_0x3ba054, _0x1ff1c4),
        _0x8e3c0 = (0, r.transformToAxisAlignPosition)(_0x3ba054, _0x1ff1c4),
        _0x10c238 = _0xcb589b.getShapeType(),
        _0x1a8581 = _0xcb589b.getShapeData(),
        _0x18f59c = {
          unitId: _0xe15c3b,
          subUnitId: _0x8777d5,
          drawingId: _0x68865a,
          drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
          sheetTransform: _0x5d82ea,
          transform: _0x3ba054,
          data: { shapeType: _0x10c238, shapeData: _0x1a8581 },
          axisAlignSheetTransform: _0x8e3c0,
          allowTransform: true,
        },
        {
          undo: _0x5cf772,
          redo: _0x19f2b4,
          objects: _0x3d8450,
        } = _0x13ff1e.getBatchUpdateOp([_0x18f59c]),
        _0x308305 = _0x8a33bd.onCommandExecute({
          id: r.SetSheetDrawingCommand["id"],
          params: { unitId: _0xe15c3b, drawings: [_0x18f59c] },
        }),
        _0x24ac7e = [
          ...(_0x308305.preRedos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0xe15c3b,
              subUnitId: _0x8777d5,
              op: _0x19f2b4,
              objects: _0x3d8450,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0xe15c3b],
          },
          ..._0x308305.redos,
        ],
        _0x270ce2 = [
          ...(_0x308305.preUndos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0xe15c3b,
              subUnitId: _0x8777d5,
              op: _0x5cf772,
              objects: _0x3d8450,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0xe15c3b],
          },
          ..._0x308305.undos,
        ];
      return (0, t.sequenceExecute)(_0x24ac7e, _0x2e44ff).result
        ? (_0x7c89a1.pushUndoRedo({
            unitID: _0xe15c3b,
            undoMutations: _0x270ce2,
            redoMutations: _0x24ac7e,
          }),
          true)
        : false;
    },
  },
  x = {
    type: t.CommandType["COMMAND"],
    id: "sheet.command.set-shape-text-vertical-toggle",
    handler: (_0x2085b6, _0x8ee25b) => {
      let _0xefda1d = (0, n.getSheetCommandTarget)(
        _0x2085b6.get(t.IUniverInstanceService),
        _0x8ee25b,
      );
      if (!_0xefda1d) return false;
      let { unitId: _0x14d088, subUnitId: _0x4ee2e2 } = _0xefda1d,
        { shapeId: _0x1a5e7c } = _0x8ee25b,
        _0xc98dff = _0x2085b6
          .get(p)
          .getShapeModel(_0x14d088, _0x4ee2e2, _0x1a5e7c);
      if (!_0xc98dff) return false;
      let _0x39c1ba = _0xc98dff.getShapeTextData(),
        _0x4e3d43 =
          (_0x39c1ba == null ? undefined : _0x39c1ba.isHorizontal) ?? true,
        _0x4578f1 = !_0x4e3d43,
        _0x3e6925 = _0x2085b6.get(t.ICommandService),
        _0x8f2e81 = _0x2085b6.get(t.IUndoRedoService),
        _0x1497eb = {
          unitId: _0x14d088,
          subUnitId: _0x4ee2e2,
          shapeId: _0x1a5e7c,
          shapeData: { shapeText: { isHorizontal: _0x4578f1 } },
        },
        _0x41feec = {
          unitId: _0x14d088,
          subUnitId: _0x4ee2e2,
          shapeId: _0x1a5e7c,
          shapeData: { shapeText: { isHorizontal: _0x4e3d43 } },
        },
        _0x182dc6 = [{ id: _.id, params: _0x1497eb }],
        _0x106400 = [{ id: _.id, params: _0x41feec }];
      return (0, t.sequenceExecute)(_0x182dc6, _0x3e6925).result
        ? (_0x8f2e81.pushUndoRedo({
            unitID: _0x14d088,
            undoMutations: _0x106400,
            redoMutations: _0x182dc6,
          }),
          true)
        : false;
    },
  },
  S = {
    type: t.CommandType["COMMAND"],
    id: "sheet.command.update-connector-relation",
    handler: (_0xb8c82e, _0x367540) => {
      var _0x1e6566;
      let _0x5b17c4 = (0, n.getSheetCommandTarget)(
        _0xb8c82e.get(t.IUniverInstanceService),
        _0x367540,
      );
      if (!_0x5b17c4) return false;
      let _0x2ccc05 = _0xb8c82e.get(n.SheetSkeletonService),
        { unitId: _0x50ecee, subUnitId: _0x5bdc5e } = _0x5b17c4,
        _0x539837 = _0x2ccc05.getSkeleton(_0x50ecee, _0x5bdc5e);
      if (!_0x539837) return false;
      let _0x2d8e2c = _0xb8c82e.get(r.ISheetDrawingService),
        {
          connectorShapeId: _0x2bec29,
          width: _0x377ad8,
          height: _0x52217b,
          left: _0x532d3f,
          top: _0x348845,
          flipX: _0x20f652,
          flipY: _0x51a80e,
          rotation: _0x35f989,
          oldAdjustValues: _0x198294,
          newAdjustValues: _0x297945,
          oldLineType: _0x40d71b,
          newLineType: _0x15ba2e,
          oldRelation: _0x2898a1,
          newRelation: _0x30f02b,
        } = _0x367540,
        _0x40d662 = _0x2d8e2c.getDrawingByParam({
          unitId: _0x50ecee,
          subUnitId: _0x5bdc5e,
          drawingId: _0x2bec29,
        });
      if (!_0x40d662) return false;
      let _0x33265e = _0xb8c82e
        .get(p)
        .getShapeModel(_0x50ecee, _0x5bdc5e, _0x2bec29);
      if (!_0x33265e) return false;
      let _0x541965 = _0xb8c82e.get(t.ICommandService),
        _0x2ce420 = _0xb8c82e.get(t.IUndoRedoService),
        _0x58c82d = _0xb8c82e.get(n.SheetInterceptorService),
        _0x1a553f = {
          ..._0x40d662.transform,
          width: _0x377ad8,
          height: _0x52217b,
          left: _0x532d3f,
          top: _0x348845,
          flipX: _0x20f652,
          flipY: _0x51a80e,
          angle:
            _0x35f989 ??
            ((_0x1e6566 = _0x40d662.transform) == null
              ? undefined
              : _0x1e6566.angle) ??
            0,
        },
        _0x5b6561 = (0, r.transformToDrawingPosition)(_0x1a553f, _0x539837),
        _0xdc7210 = (0, r.transformToAxisAlignPosition)(_0x1a553f, _0x539837),
        _0x1967bb = _0x33265e.getShapeType(),
        _0x3e79c4 = _0x33265e.getShapeData(),
        _0x6e5e2e = {
          unitId: _0x50ecee,
          subUnitId: _0x5bdc5e,
          drawingId: _0x2bec29,
          drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
          sheetTransform: _0x5b6561,
          transform: _0x1a553f,
          data: {
            shapeType: _0x15ba2e || _0x40d71b || _0x1967bb,
            shapeData: {
              ..._0x3e79c4,
              adjustValues:
                _0x297945 ||
                _0x198294 ||
                (_0x3e79c4 == null ? undefined : _0x3e79c4.adjustValues),
              relation:
                _0x30f02b ||
                _0x2898a1 ||
                (_0x3e79c4 == null ? undefined : _0x3e79c4.relation),
            },
          },
          axisAlignSheetTransform: _0xdc7210,
          allowTransform: true,
        },
        {
          undo: _0x3412ea,
          redo: _0x17c495,
          objects: _0x5c5c3a,
        } = _0x2d8e2c.getBatchUpdateOp([_0x6e5e2e]),
        _0x6ac19f = _0x58c82d.onCommandExecute({
          id: r.SetSheetDrawingCommand["id"],
          params: { unitId: _0x50ecee, drawings: [_0x6e5e2e] },
        }),
        _0x2449f5 = [
          ...(_0x6ac19f.preRedos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x50ecee,
              subUnitId: _0x5bdc5e,
              op: _0x17c495,
              objects: _0x5c5c3a,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x50ecee],
          },
          ..._0x6ac19f.redos,
          {
            id: _.id,
            params: {
              unitId: _0x50ecee,
              subUnitId: _0x5bdc5e,
              shapeId: _0x2bec29,
              shapeType: _0x15ba2e,
              shapeData: { adjustValues: _0x297945, relation: _0x30f02b },
            },
          },
        ],
        _0x3c83d4 = [
          ...(_0x6ac19f.preUndos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x50ecee,
              subUnitId: _0x5bdc5e,
              op: _0x3412ea,
              objects: _0x5c5c3a,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x50ecee],
          },
          ..._0x6ac19f.undos,
          {
            id: _.id,
            params: {
              unitId: _0x50ecee,
              subUnitId: _0x5bdc5e,
              shapeId: _0x2bec29,
              shapeType: _0x1967bb,
              shapeData: {
                ..._0x3e79c4,
                adjustValues:
                  _0x198294 ||
                  (_0x3e79c4 == null ? undefined : _0x3e79c4.adjustValues),
                relation:
                  _0x2898a1 ||
                  (_0x3e79c4 == null ? undefined : _0x3e79c4.relation),
              },
            },
          },
        ];
      return (0, t.sequenceExecute)(_0x2449f5, _0x541965).result
        ? (_0x2ce420.pushUndoRedo({
            unitID: _0x50ecee,
            undoMutations: _0x3c83d4,
            redoMutations: _0x2449f5,
          }),
          true)
        : false;
    },
  },
  C = {
    type: t.CommandType["COMMAND"],
    id: "sheet.command.update-line-shape-resize",
    handler: (_0x5b94a7, _0x14667f) => {
      let _0x8d594b = (0, n.getSheetCommandTarget)(
        _0x5b94a7.get(t.IUniverInstanceService),
        _0x14667f,
      );
      if (!_0x8d594b) return false;
      let _0x48ca6d = _0x5b94a7.get(n.SheetSkeletonService),
        { unitId: _0x470b91, subUnitId: _0x32320a } = _0x8d594b,
        _0xba1d84 = _0x48ca6d.getSkeleton(_0x470b91, _0x32320a);
      if (!_0xba1d84) return false;
      let _0x37e129 = _0x5b94a7.get(r.ISheetDrawingService),
        {
          shapeId: _0x39d44a,
          width: _0x1fbedf,
          height: _0x5c2f0e,
          left: _0x2e8432,
          top: _0x5e75ad,
          flipX: _0x3dd9f6,
          flipY: _0x10ea92,
          angle: _0x5a3aef,
          oldAdjustValues: _0x513d9b,
          newAdjustValues: _0x54e33c,
          oldLineType: _0x28d81c,
          newLineType: _0x3b9cbb,
        } = _0x14667f,
        _0x11edd4 = _0x37e129.getDrawingByParam({
          unitId: _0x470b91,
          subUnitId: _0x32320a,
          drawingId: _0x39d44a,
        });
      if (!_0x11edd4) return false;
      let _0x3acfd2 = _0x5b94a7
        .get(p)
        .getShapeModel(_0x470b91, _0x32320a, _0x39d44a);
      if (!_0x3acfd2) return false;
      let _0x4146f9 = _0x5b94a7.get(t.ICommandService),
        _0x4863d3 = _0x5b94a7.get(t.IUndoRedoService),
        _0x41216c = _0x5b94a7.get(n.SheetInterceptorService),
        _0x29d714 = {
          ..._0x11edd4.transform,
          width: _0x1fbedf,
          height: _0x5c2f0e,
          left: _0x2e8432,
          top: _0x5e75ad,
          flipX: _0x3dd9f6,
          flipY: _0x10ea92,
          angle: _0x5a3aef,
        },
        _0x572a9f = (0, r.transformToDrawingPosition)(_0x29d714, _0xba1d84),
        _0x49a9ce = (0, r.transformToAxisAlignPosition)(_0x29d714, _0xba1d84),
        _0x4291a5 = _0x3acfd2.getShapeType(),
        _0x2e9835 = _0x3acfd2.getShapeData(),
        _0x49fb50 = {
          unitId: _0x470b91,
          subUnitId: _0x32320a,
          drawingId: _0x39d44a,
          drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
          sheetTransform: _0x572a9f,
          transform: _0x29d714,
          data: {
            shapeType: _0x3b9cbb || _0x28d81c || _0x4291a5,
            shapeData: {
              ..._0x2e9835,
              adjustValues:
                _0x54e33c ||
                _0x513d9b ||
                (_0x2e9835 == null ? undefined : _0x2e9835.adjustValues),
            },
          },
          axisAlignSheetTransform: _0x49a9ce,
          allowTransform: true,
        },
        {
          undo: _0x2551b4,
          redo: _0x2bb2e0,
          objects: _0x140e5c,
        } = _0x37e129.getBatchUpdateOp([_0x49fb50]),
        _0x421e1e = _0x41216c.onCommandExecute({
          id: r.SetSheetDrawingCommand["id"],
          params: { unitId: _0x470b91, drawings: [_0x49fb50] },
        }),
        _0x96182f = [
          ...(_0x421e1e.preRedos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x470b91,
              subUnitId: _0x32320a,
              op: _0x2bb2e0,
              objects: _0x140e5c,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x470b91],
          },
          ..._0x421e1e.redos,
          {
            id: _.id,
            params: {
              unitId: _0x470b91,
              subUnitId: _0x32320a,
              shapeId: _0x39d44a,
              shapeType: _0x3b9cbb,
              shapeData: { adjustValues: _0x54e33c },
            },
          },
        ],
        _0xb760cb = [
          ...(_0x421e1e.preUndos ?? []),
          {
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x470b91,
              subUnitId: _0x32320a,
              op: _0x2551b4,
              objects: _0x140e5c,
              type: r.DrawingApplyType["UPDATE"],
            },
          },
          {
            id: r.ClearSheetDrawingTransformerOperation["id"],
            params: [_0x470b91],
          },
          ..._0x421e1e.undos,
          {
            id: _.id,
            params: {
              unitId: _0x470b91,
              subUnitId: _0x32320a,
              shapeId: _0x39d44a,
              shapeType: _0x4291a5,
              shapeData: {
                ..._0x2e9835,
                adjustValues:
                  _0x513d9b ||
                  (_0x2e9835 == null ? undefined : _0x2e9835.adjustValues),
              },
            },
          },
        ];
      return (0, t.sequenceExecute)(_0x96182f, _0x4146f9).result
        ? (_0x4863d3.pushUndoRedo({
            unitID: _0x470b91,
            undoMutations: _0xb760cb,
            redoMutations: _0x96182f,
          }),
          true)
        : false;
    },
  },
  w = {
    id: "sheet.mutation.update-shape-type",
    type: t.CommandType["MUTATION"],
    handler: (_0x17502f, _0x15f11a) => {
      let {
          unitId: _0x1f29e5,
          subUnitId: _0x1fdb46,
          shapeType: _0x5e96e6,
          shapeId: _0x16a7bd,
          shapeData: _0x2f8e26,
        } = _0x15f11a,
        _0xf1abbb = _0x17502f
          .get(p)
          .getShapeModel(_0x1f29e5, _0x1fdb46, _0x16a7bd);
      return (
        _0xf1abbb &&
          (_0xf1abbb.setShapeType(_0x5e96e6),
          _0x2f8e26 &&
            (_0xf1abbb == null || _0xf1abbb.setShapeData(_0x2f8e26))),
        true
      );
    },
  };
var T = "@univerjs-pro/sheets-shape",
  E = "1.0.0-insiders.20260907-70fc579";
function D(_0x464b4c) {
  var _0xf8c011,
    _0x579a25,
    _0x2ec917,
    _0x944c63,
    _0x994431,
    _0x5071ac,
    _0x4eff57;
  return {
    left:
      ((_0xf8c011 = _0x464b4c.transform) == null
        ? undefined
        : _0xf8c011.left) ?? 0,
    top:
      ((_0x579a25 = _0x464b4c.transform) == null ? undefined : _0x579a25.top) ??
      0,
    width:
      ((_0x2ec917 = _0x464b4c.transform) == null
        ? undefined
        : _0x2ec917.width) ?? 200,
    height:
      ((_0x944c63 = _0x464b4c.transform) == null
        ? undefined
        : _0x944c63.height) ?? 200,
    rotation:
      ((_0x994431 = _0x464b4c.transform) == null
        ? undefined
        : _0x994431.rotation) ?? 0,
    flipX:
      ((_0x5071ac = _0x464b4c.transform) == null
        ? undefined
        : _0x5071ac.flipX) ?? false,
    flipY:
      ((_0x4eff57 = _0x464b4c.transform) == null
        ? undefined
        : _0x4eff57.flipY) ?? false,
  };
}
let O = class {
  constructor(_0x2553d2, _0x319759, _0x486760, _0x3e5035) {
    ((this._commandService = _0x2553d2),
      (this._shapeService = _0x319759),
      (this._drawingService = _0x486760),
      (this._instanceService = _0x3e5035),
      l(this, "hostType", t.UniverInstanceType["UNIVER_SHEET"]));
  }
  get shapeChanged$() {
    return {
      subscribe: (_0x5dce08) => {
        let _0x2073df = this._commandService["onCommandExecuted"](
          (_0x28ce79) => {
            (_0x28ce79.id === m.id ||
              _0x28ce79.id === h.id ||
              _0x28ce79.id === _.id ||
              _0x28ce79.id === w.id) &&
              _0x5dce08({ unitId: _0x28ce79.params["unitId"] });
          },
        );
        return { unsubscribe: () => _0x2073df.dispose() };
      },
    };
  }
  getShape(_0x58a219) {
    var _0xa0ed3e;
    let _0x48a4d3 =
        (_0xa0ed3e = this._drawingService["getDrawingData"](
          _0x58a219.unitId,
          _0x58a219.subUnitId,
        )) == null
          ? undefined
          : _0xa0ed3e[_0x58a219.shapeId],
      _0x2c0487 = this._shapeService["getShapeType"](
        _0x58a219.unitId,
        _0x58a219.subUnitId,
        _0x58a219.shapeId,
      );
    if (
      !_0x48a4d3 ||
      _0x48a4d3.drawingType !== t.DrawingTypeEnum["DRAWING_SHAPE"] ||
      !_0x2c0487
    )
      return null;
    let _0x5d7074 = _0x48a4d3.transform;
    return {
      ..._0x58a219,
      shapeType: _0x2c0487,
      shapeData: t.Tools["deepClone"](
        this._shapeService["getShapeDataById"](
          _0x58a219.unitId,
          _0x58a219.subUnitId,
          _0x58a219.shapeId,
        ) ?? {},
      ),
      name: _0x48a4d3.name,
      description: _0x48a4d3.description,
      visible: _0x48a4d3.hidden !== true,
      selectable: _0x48a4d3.selectable !== false,
      transform: {
        left: (_0x5d7074 == null ? undefined : _0x5d7074.left) ?? 0,
        top: (_0x5d7074 == null ? undefined : _0x5d7074.top) ?? 0,
        width: (_0x5d7074 == null ? undefined : _0x5d7074.width) ?? 200,
        height: (_0x5d7074 == null ? undefined : _0x5d7074.height) ?? 200,
        rotation: (_0x5d7074 == null ? undefined : _0x5d7074.angle) ?? 0,
        flipX: (_0x5d7074 == null ? undefined : _0x5d7074.flipX) ?? false,
        flipY: (_0x5d7074 == null ? undefined : _0x5d7074.flipY) ?? false,
      },
    };
  }
  listShapes(_0x43865d) {
    let _0x4c31e6 =
      this._drawingService["getDrawingData"](
        _0x43865d.unitId,
        _0x43865d.subUnitId,
      ) ?? {};
    return Object.values(_0x4c31e6)
      .filter(
        (_0x57459b) =>
          (_0x57459b == null ? undefined : _0x57459b.drawingType) ===
          t.DrawingTypeEnum["DRAWING_SHAPE"],
      )
      .map((_0x1780e6) =>
        this.getShape({ ..._0x43865d, shapeId: _0x1780e6.drawingId }),
      )
      .filter((_0x25726f) => !!_0x25726f);
  }
  listShapesInUnit(_0x24d2e9) {
    let _0x1e3384 = this._instanceService["getUnit"](
      _0x24d2e9,
      t.UniverInstanceType["UNIVER_SHEET"],
    );
    return (
      (_0x1e3384 == null
        ? undefined
        : _0x1e3384
            .getSheets()
            .flatMap((_0x5ab78) =>
              this.listShapes({
                hostType: this.hostType,
                unitId: _0x24d2e9,
                subUnitId: _0x5ab78.getSheetId(),
              }),
            )) ?? []
    );
  }
  createShape(_0x4bf3ab, _0x3aa7a7) {
    let _0x12f3ee = (0, t.generateRandomId)(),
      _0x2009dd = D(_0x3aa7a7),
      _0x2e655e = t.Tools["deepClone"](
        _0x3aa7a7.shapeData ??
          (0, e.createDefaultInsertedShapeData)(_0x3aa7a7.shapeType),
      );
    return this._commandService["syncExecuteCommand"](g.id, {
      unitId: _0x4bf3ab.unitId,
      subUnitId: _0x4bf3ab.subUnitId,
      shapeId: _0x12f3ee,
      shapeType: _0x3aa7a7.shapeType,
      shapeData: _0x2e655e,
      name: _0x3aa7a7.name,
      description: _0x3aa7a7.description,
      position: { x: _0x2009dd.left, y: _0x2009dd.top },
      width: _0x2009dd.width,
      height: _0x2009dd.height,
      rotation: _0x2009dd.rotation,
      flipX: _0x2009dd.flipX,
      flipY: _0x2009dd.flipY,
      visible: _0x3aa7a7.visible ?? true,
      selectable: _0x3aa7a7.selectable ?? true,
    })
      ? {
          ..._0x4bf3ab,
          shapeId: _0x12f3ee,
          shapeType: _0x3aa7a7.shapeType,
          shapeData: _0x2e655e,
          name: _0x3aa7a7.name,
          description: _0x3aa7a7.description,
          visible: _0x3aa7a7.visible ?? true,
          selectable: _0x3aa7a7.selectable ?? true,
          transform: _0x2009dd,
        }
      : null;
  }
  updateShape(_0xc8310, _0x5f1d80) {
    var _0x19129f;
    let _0x4158e4 = this.getShape(_0xc8310);
    if (!_0x4158e4) return false;
    let _0x478067 = { ..._0x4158e4.transform, ..._0x5f1d80.transform };
    return this._commandService["syncExecuteCommand"](v.id, {
      unitId: _0xc8310.unitId,
      subUnitId: _0xc8310.subUnitId,
      shapeId: _0xc8310.shapeId,
      shapeType:
        _0x5f1d80.shapeType ??
        ((_0x19129f = _0x5f1d80.shapeData) == null
          ? undefined
          : _0x19129f.shapeType) ??
        _0x4158e4.shapeType,
      shapeData: _0x5f1d80.shapeData ?? _0x4158e4.shapeData,
      position: { x: _0x478067.left, y: _0x478067.top },
      width: _0x478067.width,
      height: _0x478067.height,
      rotation: _0x478067.rotation,
      flipX: _0x478067.flipX,
      flipY: _0x478067.flipY,
      name: "name" in _0x5f1d80 ? _0x5f1d80.name : _0x4158e4.name,
      description:
        "description" in _0x5f1d80
          ? _0x5f1d80.description
          : _0x4158e4.description,
      visible: _0x5f1d80.visible ?? _0x4158e4.visible,
      selectable: _0x5f1d80.selectable ?? _0x4158e4.selectable,
    });
  }
  createFormulaLastValueMutation(_0xbe05a9, _0x496be9, _0x4ba1a0) {
    let _0x54821e = this.getShape(_0xbe05a9),
      _0x37611e =
        _0x54821e == null ? undefined : _0x54821e.shapeData["formulaBinding"];
    return !_0x54821e || !_0x37611e
      ? null
      : {
          id: _.id,
          params: {
            unitId: _0xbe05a9.unitId,
            subUnitId: _0xbe05a9.subUnitId,
            shapeId: _0xbe05a9.shapeId,
            shapeData: {
              ..._0x54821e.shapeData,
              formulaBinding: {
                ..._0x37611e,
                lastValue: t.Tools["deepClone"](_0x4ba1a0),
              },
            },
            replace: true,
            formulaLastValueGuard: _0x496be9,
          },
        };
  }
  removeShape(_0x22631e) {
    return this._commandService["syncExecuteCommand"](
      r.RemoveSheetDrawingCommand["id"],
      {
        unitId: _0x22631e.unitId,
        drawings: [
          {
            unitId: _0x22631e.unitId,
            subUnitId: _0x22631e.subUnitId,
            drawingId: _0x22631e.shapeId,
            drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
          },
        ],
      },
    );
  }
  bringToFront(_0x1ba43e) {
    return this._arrange(_0x1ba43e, t.ArrangeTypeEnum["front"]);
  }
  bringForward(_0x24be6b) {
    return this._arrange(_0x24be6b, t.ArrangeTypeEnum["forward"]);
  }
  sendBackward(_0x20455f) {
    return this._arrange(_0x20455f, t.ArrangeTypeEnum["backward"]);
  }
  sendToBack(_0x265ec6) {
    return this._arrange(_0x265ec6, t.ArrangeTypeEnum["back"]);
  }
  setZOrder(_0x1e3aaa, _0x3af41d) {
    return this._commandService["syncExecuteCommand"](
      r.SetDrawingArrangeCommand["id"],
      {
        unitId: _0x1e3aaa.unitId,
        subUnitId: _0x1e3aaa.subUnitId,
        drawingIds: [_0x1e3aaa.shapeId],
        zOrder: _0x3af41d,
      },
    );
  }
  _arrange(_0x3e6d74, _0x176b30) {
    return this._commandService["syncExecuteCommand"](
      r.SetDrawingArrangeCommand["id"],
      {
        unitId: _0x3e6d74.unitId,
        subUnitId: _0x3e6d74.subUnitId,
        drawingIds: [_0x3e6d74.shapeId],
        arrangeType: _0x176b30,
      },
    );
  }
};
O = f(
  [
    d(0, t.ICommandService),
    d(1, (0, t.Inject)(p)),
    d(2, r.ISheetDrawingService),
    d(3, t.IUniverInstanceService),
  ],
  O,
);
const k = {};
let A = class extends t.Disposable {
  constructor(
    _0x4d4d2d,
    _0x5b35d6,
    _0x1b4af1,
    _0x577eaa,
    _0x83ede5,
    _0x2380be,
    _0x5a0268,
  ) {
    (super(),
      (this._commandService = _0x4d4d2d),
      (this._sheetInterceptorService = _0x5b35d6),
      (this._sheetSkeletonService = _0x1b4af1),
      (this._sheetsShapeService = _0x577eaa),
      (this._drawingManagerService = _0x83ede5),
      (this._shapeHostAdapterRegistry = _0x2380be),
      this._initCommands(),
      this._initCommandInterceptor(),
      this.disposeWithMe(
        this._shapeHostAdapterRegistry["register"](_0x5a0268),
      ));
  }
  _initCommands() {
    [g, v, y, b, x, S, C, m, h, w, _].forEach((_0x9032aa) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x9032aa)),
    );
  }
  _initCommandInterceptor() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x52d096) => {
          if (_0x52d096.id === r.RemoveSheetDrawingCommand["id"]) {
            let { drawings: _0x1e9577 } = _0x52d096.params,
              _0x5f3e8d = _0x1e9577.filter(
                (_0x54be67) =>
                  _0x54be67.drawingType === t.DrawingTypeEnum["DRAWING_SHAPE"],
              );
            if (_0x5f3e8d.length === 0)
              return { preRedos: [], redos: [], preUndos: [], undos: [] };
            let _0x14b2a0 = [],
              _0x2c2050 = [];
            return (
              _0x5f3e8d.forEach((_0x58a444) => {
                let {
                    unitId: _0x2043fe,
                    subUnitId: _0x672b5c,
                    drawingId: _0x28ab8a,
                  } = _0x58a444,
                  _0x2b9181 = this._sheetsShapeService["getShapeModel"](
                    _0x2043fe,
                    _0x672b5c,
                    _0x28ab8a,
                  );
                if (!_0x2b9181)
                  throw TypeError("Fail to get shape model, get: " + _0x2b9181);
                (_0x14b2a0.push({
                  id: h.id,
                  params: {
                    unitId: _0x2043fe,
                    subUnitId: _0x672b5c,
                    shapeId: _0x28ab8a,
                  },
                }),
                  _0x2c2050.push({
                    id: m.id,
                    params: {
                      unitId: _0x2043fe,
                      subUnitId: _0x672b5c,
                      shapeId: _0x28ab8a,
                      shapeType: _0x2b9181.getShapeType(),
                      shapeData: _0x2b9181.getShapeData(),
                    },
                  }));
                let _0x2c806f = this._sheetsShapeService[
                  "getBasicShapeRelation"
                ](_0x2043fe, _0x672b5c, _0x28ab8a);
                if (_0x2c806f)
                  for (let _0xcfb797 of _0x2c806f) {
                    let _0x277de9 = _0xcfb797.lineShapeId,
                      _0x4c5b03 = _0xcfb797.isFrom,
                      _0x42d73c = _0x4c5b03
                        ? { from: undefined }
                        : { to: undefined },
                      _0x532008 = _0x4c5b03
                        ? {
                            from: {
                              shapeId: _0xcfb797.shapeId,
                              cxnIndex: _0xcfb797.cxnIndex,
                            },
                          }
                        : {
                            to: {
                              shapeId: _0xcfb797.shapeId,
                              cxnIndex: _0xcfb797.cxnIndex,
                            },
                          };
                    (_0x14b2a0.push({
                      id: _.id,
                      params: {
                        unitId: _0x2043fe,
                        subUnitId: _0x672b5c,
                        shapeId: _0x277de9,
                        shapeData: { relation: _0x42d73c },
                      },
                    }),
                      _0x2c2050.push({
                        id: _.id,
                        params: {
                          unitId: _0x2043fe,
                          subUnitId: _0x672b5c,
                          shapeId: _0x277de9,
                          shapeData: { relation: _0x532008 },
                        },
                      }));
                  }
              }),
              { preRedos: _0x14b2a0, redos: [], preUndos: [], undos: _0x2c2050 }
            );
          }
          if (_0x52d096.id === r.SetSheetDrawingCommand["id"]) {
            let { drawings: _0x1a4a45 } = _0x52d096.params,
              _0x21471c = _0x1a4a45.filter(
                (_0x39f253) =>
                  _0x39f253.drawingType === t.DrawingTypeEnum["DRAWING_SHAPE"],
              );
            if (_0x21471c.length === 0)
              return { preRedos: [], redos: [], preUndos: [], undos: [] };
            let _0x4f6226 = [],
              _0x17bfe3 = [];
            for (let _0x3890e1 of _0x21471c) {
              let {
                unitId: _0x1e1d02,
                subUnitId: _0x3e4a35,
                drawingId: _0x472085,
                transform: _0x215e00,
              } = _0x3890e1;
              if (!_0x1e1d02 || !_0x3e4a35 || !_0x472085 || !_0x215e00)
                continue;
              let _0x2c7669 = this._sheetsShapeService["getShapeModel"](
                _0x1e1d02,
                _0x3e4a35,
                _0x472085,
              );
              if (!_0x2c7669)
                throw TypeError("Fail to get shape model, get: " + _0x2c7669);
              if ((0, e.isConnectorShape)(_0x2c7669.getShapeType())) {
                let _0x9da47f = this._sheetsShapeService[
                  "getLineShapeRelation"
                ](_0x1e1d02, _0x3e4a35, _0x472085);
                _0x9da47f &&
                  (_0x4f6226.push({
                    id: _.id,
                    params: {
                      unitId: _0x1e1d02,
                      subUnitId: _0x3e4a35,
                      shapeId: _0x472085,
                      shapeData: {
                        relation: { from: undefined, to: undefined },
                      },
                    },
                  }),
                  _0x17bfe3.push({
                    id: _.id,
                    params: {
                      unitId: _0x1e1d02,
                      subUnitId: _0x3e4a35,
                      shapeId: _0x472085,
                      shapeData: { relation: _0x9da47f },
                    },
                  }));
              } else {
                let _0x32b446 = this._sheetsShapeService[
                  "getBasicShapeRelation"
                ](_0x1e1d02, _0x3e4a35, _0x472085);
                if (_0x32b446 && _0x32b446.length > 0)
                  for (let _0x4a20a5 of _0x32b446) {
                    let _0x5293e8 = _0x4a20a5.lineShapeId,
                      _0x26e522 = _0x4a20a5.isFrom,
                      _0x43f6eb = this._sheetsShapeService["getShapeModel"](
                        _0x1e1d02,
                        _0x3e4a35,
                        _0x5293e8,
                      );
                    if (!_0x43f6eb) continue;
                    let _0x1d2cfe = _0x43f6eb.getStartConnectInfo(),
                      _0x1414d9 = _0x43f6eb.getEndConnectInfo();
                    _0x1d2cfe && _0x1414d9
                      ? this._addLineRerouteUpdates(
                          _0x1e1d02,
                          _0x3e4a35,
                          _0x5293e8,
                          _0x43f6eb,
                          _0x1d2cfe,
                          _0x1414d9,
                          _0x4f6226,
                          _0x17bfe3,
                          _0x472085,
                          _0x215e00,
                        )
                      : this._addLineFollowShapeUpdates(
                          _0x1e1d02,
                          _0x3e4a35,
                          _0x5293e8,
                          _0x43f6eb,
                          _0x26e522 ? _0x1d2cfe : _0x1414d9,
                          _0x26e522,
                          _0x4f6226,
                          _0x17bfe3,
                          _0x472085,
                          _0x215e00,
                        );
                  }
              }
            }
            return {
              preRedos: [],
              redos: _0x4f6226,
              preUndos: _0x17bfe3,
              undos: [],
            };
          }
          return { preRedos: [], redos: [], preUndos: [], undos: [] };
        },
      }),
    );
  }
  _getConnectPointInfo(_0x56b6c5, _0x4bb973, _0x1f9433, _0x4d1bd0, _0x26c31a) {
    if (!_0x4bb973 || !_0x1f9433) return null;
    let { shapeId: _0x2d0342, cxnIndex: _0x24ac98 } = _0x56b6c5,
      _0x33b1a3 = this._sheetsShapeService["getShapeModel"](
        _0x4bb973,
        _0x1f9433,
        _0x2d0342,
      );
    if (!_0x33b1a3) return null;
    let _0x4165e5 = this._drawingManagerService["getDrawingByParam"]({
      unitId: _0x4bb973,
      subUnitId: _0x1f9433,
      drawingId: _0x2d0342,
    });
    if (!(_0x4165e5 != null && _0x4165e5.transform)) return null;
    let {
      left: _0x3f4068 = 0,
      top: _0x11a0d3 = 0,
      width: _0x134b23 = 0,
      height: _0x4287a7 = 0,
      flipX: _0x5bb6c3 = false,
      flipY: _0x35ba12 = false,
      angle: _0x218005,
    } = _0x4165e5.transform;
    (_0x26c31a &&
      _0x4d1bd0 === _0x2d0342 &&
      ((_0x3f4068 = _0x26c31a.left ?? _0x3f4068),
      (_0x11a0d3 = _0x26c31a.top ?? _0x11a0d3),
      (_0x134b23 = _0x26c31a.width ?? _0x134b23),
      (_0x4287a7 = _0x26c31a.height ?? _0x4287a7),
      (_0x5bb6c3 = _0x26c31a.flipX ?? _0x5bb6c3),
      (_0x35ba12 = _0x26c31a.flipY ?? _0x35ba12),
      (_0x218005 = _0x26c31a.angle ?? _0x218005)),
      _0x33b1a3.updateContext({ width: _0x134b23, height: _0x4287a7 }));
    let _0x389c25 = _0x33b1a3
      .getConnectionSiteList()
      .find((_0x3e5e3d) => _0x3e5e3d.index === _0x24ac98);
    if (!_0x389c25) return null;
    let _0x41ba2c = _0x5bb6c3 ? _0x134b23 - _0x389c25.x : _0x389c25.x,
      _0x29464b = _0x35ba12 ? _0x4287a7 - _0x389c25.y : _0x389c25.y;
    if (_0x218005 !== 0 && _0x218005 != null) {
      let _0x159430 = (_0x218005 * Math.PI) / 180,
        _0x1815e4 = Math.cos(_0x159430),
        _0x45dc73 = Math.sin(_0x159430),
        _0x2f7974 = _0x134b23 / 2,
        _0x3f65a2 = _0x4287a7 / 2,
        _0x2e5988 = _0x41ba2c - _0x2f7974,
        _0x5b3874 = _0x29464b - _0x3f65a2;
      ((_0x41ba2c = _0x2f7974 + _0x2e5988 * _0x1815e4 - _0x5b3874 * _0x45dc73),
        (_0x29464b =
          _0x3f65a2 + _0x2e5988 * _0x45dc73 + _0x5b3874 * _0x1815e4));
    }
    ((_0x41ba2c += _0x3f4068), (_0x29464b += _0x11a0d3));
    let _0x506e70 = _0x389c25.ang / 60000;
    (_0x5bb6c3 && (_0x506e70 = 180 - _0x506e70),
      _0x35ba12 && (_0x506e70 = -_0x506e70),
      (_0x506e70 += _0x218005 || 0),
      (_0x506e70 = ((_0x506e70 % 360) + 360) % 360));
    let _0x53014d = (0, e.getBasicShapeRotateBound)(
      { left: _0x3f4068, top: _0x11a0d3, width: _0x134b23, height: _0x4287a7 },
      _0x218005 || 0,
    );
    return {
      point: { x: _0x41ba2c, y: _0x29464b },
      angle: _0x506e70,
      bounds: _0x53014d,
    };
  }
  _addLineRerouteUpdates(
    _0x3ca0a0,
    _0x2b02a6,
    _0x16b5bb,
    _0x1830ca,
    _0x2869d3,
    _0x31774b,
    _0x26ae66,
    _0x2e1cad,
    _0x5756dc,
    _0x389f0f,
  ) {
    let _0x3dc76d = this._sheetSkeletonService["getSkeleton"](
      _0x3ca0a0,
      _0x2b02a6,
    );
    if (!_0x3dc76d) return;
    let _0x25fd0c = _0x1830ca.getShapeRelation(),
      _0x40960b = _0x1830ca.getAdjustNames(),
      _0x5ab702 = {},
      _0x5dcda2 = {};
    _0x40960b.forEach((_0x5188c4) => {
      let _0x4eb929 = _0x1830ca.getAdjustValueByName(_0x5188c4);
      _0x5dcda2[_0x5188c4] = _0x4eb929 ?? 0;
    });
    let _0x1896dc = this._getConnectPointInfo(
        _0x2869d3,
        _0x3ca0a0,
        _0x2b02a6,
        _0x5756dc,
        _0x389f0f,
      ),
      _0x9b444b = this._getConnectPointInfo(
        _0x31774b,
        _0x3ca0a0,
        _0x2b02a6,
        _0x5756dc,
        _0x389f0f,
      );
    if (_0x1896dc && _0x9b444b) {
      let _0x2f5ec7 = _0x1830ca.getShapeType(),
        _0x353a41 = (0, e.routeConnectorLineShape)(
          _0x1896dc,
          _0x9b444b,
          _0x2f5ec7,
        ),
        _0x1574c0 = _0x2f5ec7;
      if (_0x353a41) {
        let _0x562781 = (0, e.computeConnectorRouteLayout)(
            _0x353a41,
            _0x1830ca.getShapeType(),
          ),
          _0x5a7f54 = this._drawingManagerService["getDrawingData"](
            _0x3ca0a0,
            _0x2b02a6,
          );
        if (_0x5a7f54 && _0x5a7f54[_0x16b5bb]) {
          let _0x31d461 = _0x5a7f54[_0x16b5bb];
          _0x1574c0 = _0x562781.lineType;
          for (let [_0x245b4f, _0x4fb9f4] of Object.entries(
            _0x562781.adjustValues,
          ))
            _0x5ab702[_0x245b4f] = _0x4fb9f4;
          let _0x389ebc = {
              ..._0x31d461.transform,
              width: _0x562781.worldRect["width"],
              height: _0x562781.worldRect["height"],
              left: _0x562781.worldRect["left"],
              top: _0x562781.worldRect["top"],
              flipX: _0x562781.worldRect["flipX"],
              flipY: _0x562781.worldRect["flipY"],
              angle: _0x562781.rotation,
            },
            _0x19a971 = (0, r.transformToDrawingPosition)(_0x389ebc, _0x3dc76d),
            _0xd95ae9 = (0, r.transformToAxisAlignPosition)(
              _0x389ebc,
              _0x3dc76d,
            ),
            _0x281520 = {
              unitId: _0x3ca0a0,
              subUnitId: _0x2b02a6,
              drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
              drawingId: _0x16b5bb,
              transform: _0x389ebc,
              sheetTransform: _0x19a971,
              axisAlignSheetTransform: _0xd95ae9,
            },
            {
              unitId: _0x2743bd,
              subUnitId: _0xafb317,
              undo: _0x1958db,
              redo: _0xa2cfcc,
              objects: _0x5d0a7f,
            } = this._drawingManagerService["getBatchUpdateOp"]([_0x281520]);
          (_0x26ae66.push({
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x2743bd,
              subUnitId: _0xafb317,
              op: _0xa2cfcc,
              objects: _0x5d0a7f,
              type: r.DrawingApplyType["UPDATE"],
            },
          }),
            _0x2e1cad.push({
              id: r.SetDrawingApplyMutation["id"],
              params: {
                unitId: _0x2743bd,
                subUnitId: _0xafb317,
                op: _0x1958db,
                objects: _0x5d0a7f,
                type: r.DrawingApplyType["UPDATE"],
              },
            }));
        }
        _0x1830ca.removeLinePoints();
      }
      (_0x26ae66.push({
        id: _.id,
        params: {
          unitId: _0x3ca0a0,
          subUnitId: _0x2b02a6,
          shapeId: _0x16b5bb,
          shapeType: _0x1574c0,
          shapeData: { adjustValues: _0x5ab702, relation: _0x25fd0c },
        },
      }),
        _0x2e1cad.push({
          id: _.id,
          params: {
            unitId: _0x3ca0a0,
            subUnitId: _0x2b02a6,
            shapeId: _0x16b5bb,
            shapeType: _0x2f5ec7,
            shapeData: { adjustValues: _0x5dcda2, relation: _0x25fd0c },
          },
        }));
    }
  }
  _addLineFollowShapeUpdates(
    _0x3c5ae4,
    _0x430eef,
    _0x3babda,
    _0x3af1b1,
    _0x5c0d37,
    _0x34f9b4,
    _0x1d12b7,
    _0x2de06d,
    _0x157b75,
    _0x2f0449,
  ) {
    var _0x3782a2;
    if (!_0x5c0d37) return;
    let _0x379366 = this._sheetSkeletonService["getSkeleton"](
      _0x3c5ae4,
      _0x430eef,
    );
    if (!_0x379366) return;
    let _0x2ec2eb =
      (_0x3782a2 = this._drawingManagerService["getDrawingByParam"]({
        unitId: _0x3c5ae4,
        subUnitId: _0x430eef,
        drawingId: _0x157b75,
      })) == null
        ? undefined
        : _0x3782a2.transform;
    if (!_0x2ec2eb) return;
    let _0x4bed99 =
        _0x2ec2eb.left !== _0x2f0449.left || _0x2ec2eb.top !== _0x2f0449.top,
      _0x5e8c1d =
        _0x2ec2eb.width !== _0x2f0449.width ||
        _0x2ec2eb.height !== _0x2f0449.height,
      _0x2cf827 =
        _0x2ec2eb.flipX !== _0x2f0449.flipX ||
        _0x2ec2eb.flipY !== _0x2f0449.flipY,
      _0x38286c = _0x2ec2eb.angle !== _0x2f0449.angle;
    if (_0x4bed99 && !_0x5e8c1d && !_0x2cf827 && !_0x38286c) {
      let _0x4558bd = (_0x2f0449.left ?? 0) - (_0x2ec2eb.left ?? 0),
        _0x54528d = (_0x2f0449.top ?? 0) - (_0x2ec2eb.top ?? 0),
        _0x4ee337 = this._drawingManagerService["getDrawingData"](
          _0x3c5ae4,
          _0x430eef,
        );
      if (_0x4ee337 && _0x4ee337[_0x3babda]) {
        var _0x510c3a, _0xf4254b;
        let _0x18823e = _0x4ee337[_0x3babda],
          _0x1d01cf = {
            ..._0x18823e.transform,
            left:
              (((_0x510c3a = _0x18823e.transform) == null
                ? undefined
                : _0x510c3a.left) ?? 0) + _0x4558bd,
            top:
              (((_0xf4254b = _0x18823e.transform) == null
                ? undefined
                : _0xf4254b.top) ?? 0) + _0x54528d,
          },
          _0x577c7a = (0, r.transformToDrawingPosition)(_0x1d01cf, _0x379366),
          _0x1d4eed = (0, r.transformToAxisAlignPosition)(_0x1d01cf, _0x379366),
          _0x49d224 = {
            unitId: _0x3c5ae4,
            subUnitId: _0x430eef,
            drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
            drawingId: _0x3babda,
            transform: _0x1d01cf,
            sheetTransform: _0x577c7a,
            axisAlignSheetTransform: _0x1d4eed,
          },
          {
            unitId: _0x26317b,
            subUnitId: _0x466ef2,
            undo: _0x142ef0,
            redo: _0x391117,
            objects: _0x419155,
          } = this._drawingManagerService["getBatchUpdateOp"]([_0x49d224]);
        (_0x1d12b7.push({
          id: r.SetDrawingApplyMutation["id"],
          params: {
            unitId: _0x26317b,
            subUnitId: _0x466ef2,
            op: _0x391117,
            objects: _0x419155,
            type: r.DrawingApplyType["UPDATE"],
          },
        }),
          _0x2de06d.push({
            id: r.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x26317b,
              subUnitId: _0x466ef2,
              op: _0x142ef0,
              objects: _0x419155,
              type: r.DrawingApplyType["UPDATE"],
            },
          }));
      }
    } else {
      let _0x1053af = _0x3af1b1.getStartConnectInfo(),
        _0x5a1d63 = _0x3af1b1.getEndConnectInfo();
      this._addLineRerouteUpdates(
        _0x3c5ae4,
        _0x430eef,
        _0x3babda,
        _0x3af1b1,
        _0x1053af,
        _0x5a1d63,
        _0x1d12b7,
        _0x2de06d,
        _0x157b75,
        _0x2f0449,
      );
    }
  }
};
A = f(
  [
    d(0, t.ICommandService),
    d(1, (0, t.Inject)(n.SheetInterceptorService)),
    d(2, (0, t.Inject)(n.SheetSkeletonService)),
    d(3, (0, t.Inject)(p)),
    d(4, (0, t.Inject)(a.IDrawingManagerService)),
    d(5, (0, t.Inject)(e.IShapeHostAdapterRegistry)),
    d(6, (0, t.Inject)(O)),
  ],
  A,
);
let j = class extends t.Disposable {
  constructor(_0x36ef5e, _0x4132b5, _0x25a404) {
    (super(),
      (this._shapeService = _0x36ef5e),
      (this._shapeAdapter = _0x4132b5),
      this.disposeWithMe(_0x25a404.register(this)));
  }
  transform(_0x1dfaba) {
    let _0x427383 = { preRedos: [], redos: [], preUndos: [], undos: [] };
    this._planDeletes(_0x1dfaba, _0x427383);
    for (let [_0x4c726f, _0x4ef25a] of _0x1dfaba.originals)
      this._planConnector(_0x1dfaba, _0x4c726f, _0x4ef25a, _0x427383);
    return _0x427383;
  }
  _planDeletes(_0x33f24e, _0x14eb41) {
    if (_0x33f24e.mode === "command")
      for (let _0x18081f of _0x33f24e.deletes) {
        let _0x88ae40 = _0x33f24e.originals["get"](_0x18081f),
          _0x2729b = this._shapeService["getShapeModel"](
            _0x33f24e.unitId,
            _0x33f24e.subUnitId,
            _0x18081f,
          );
        (_0x88ae40 == null ? undefined : _0x88ae40.drawingType) !==
          t.DrawingTypeEnum["DRAWING_SHAPE"] ||
          !_0x2729b ||
          (_0x14eb41.preRedos["push"]({
            id: h.id,
            params: {
              unitId: _0x33f24e.unitId,
              subUnitId: _0x33f24e.subUnitId,
              shapeId: _0x18081f,
            },
          }),
          _0x14eb41.undos["push"]({
            id: m.id,
            params: {
              unitId: _0x33f24e.unitId,
              subUnitId: _0x33f24e.subUnitId,
              shapeId: _0x18081f,
              shapeName: _0x2729b.getName(),
              shapeType: _0x2729b.getShapeType(),
              shapeData: t.Tools["deepClone"](_0x2729b.getShapeData()),
            },
          }));
      }
  }
  _planConnector(_0x4a2dbc, _0x412d51, _0x14e85a, _0x3b27fe) {
    if (
      _0x14e85a.drawingType !== t.DrawingTypeEnum["DRAWING_SHAPE"] ||
      _0x4a2dbc.deletes["has"](_0x412d51)
    )
      return;
    let _0x5619c2 = this._shapeService["getShapeModel"](
      _0x4a2dbc.unitId,
      _0x4a2dbc.subUnitId,
      _0x412d51,
    );
    if (!_0x5619c2 || !(0, e.isConnectorShape)(_0x5619c2.getShapeType()))
      return;
    let _0x3861c9 = _0x5619c2.getShapeRelation();
    if (!(
      _0x4a2dbc.updates["has"](_0x412d51) ||
      (_0x3861c9 != null &&
        _0x3861c9.from &&
        (_0x4a2dbc.updates["has"](_0x3861c9.from["shapeId"]) ||
          _0x4a2dbc.deletes["has"](_0x3861c9.from["shapeId"]))) ||
      (_0x3861c9 != null &&
        _0x3861c9.to &&
        (_0x4a2dbc.updates["has"](_0x3861c9.to["shapeId"]) ||
          _0x4a2dbc.deletes["has"](_0x3861c9.to["shapeId"])))
    ))
      return;
    let _0x2a337a = _0x4a2dbc.updates["get"](_0x412d51) ?? _0x14e85a,
      _0x6f1cf1 = this._toSnapshot(_0x4a2dbc, _0x2a337a);
    if (!_0x6f1cf1) return;
    let _0x465718 = (0, e.resolveConnectorRoutePoints)(_0x6f1cf1);
    if (_0x465718.length < 2) return;
    let _0x19c63a = t.Tools["deepClone"](_0x3861c9 ?? {}),
      _0x549294 =
        _0x19c63a.from &&
        this._resolveBinding(
          _0x4a2dbc,
          _0x19c63a.from["shapeId"],
          _0x19c63a.from["cxnIndex"],
        ),
      _0x3f2670 =
        _0x19c63a.to &&
        this._resolveBinding(
          _0x4a2dbc,
          _0x19c63a.to["shapeId"],
          _0x19c63a.to["cxnIndex"],
        );
    (_0x19c63a.from && !_0x549294 && delete _0x19c63a.from,
      _0x19c63a.to && !_0x3f2670 && delete _0x19c63a.to);
    let _0x8e48d9 = (0, e.buildConnectorEndpointUpdate)(
      _0x6f1cf1,
      _0x549294 ||
        (0, e.createFreeConnectorPointInfo)(
          (_0x3f2670 == null ? undefined : _0x3f2670.point) ??
            _0x465718[_0x465718.length - 1],
          _0x465718[0],
        ),
      _0x3f2670 ||
        (0, e.createFreeConnectorPointInfo)(
          (_0x549294 == null ? undefined : _0x549294.point) ?? _0x465718[0],
          _0x465718[_0x465718.length - 1],
        ),
      _0x19c63a,
    );
    if (!(
      !(_0x8e48d9 != null && _0x8e48d9.transform) ||
      !_0x8e48d9.shapeType ||
      !_0x8e48d9.shapeData
    )) {
      if (
        (this._applyUpdate(_0x4a2dbc, _0x2a337a, _0x8e48d9),
        _0x4a2dbc.mode === "refresh")
      ) {
        (_0x5619c2.setShapeType(_0x8e48d9.shapeType),
          _0x5619c2.setShapeData(
            t.Tools["deepClone"](_0x8e48d9.shapeData),
            false,
          ));
        return;
      }
      (_0x3b27fe.redos["push"]({
        id: _.id,
        params: {
          unitId: _0x4a2dbc.unitId,
          subUnitId: _0x4a2dbc.subUnitId,
          shapeId: _0x412d51,
          shapeType: _0x8e48d9.shapeType,
          shapeData: t.Tools["deepClone"](_0x8e48d9.shapeData),
          replace: true,
        },
      }),
        _0x3b27fe.undos["push"]({
          id: _.id,
          params: {
            unitId: _0x4a2dbc.unitId,
            subUnitId: _0x4a2dbc.subUnitId,
            shapeId: _0x412d51,
            shapeType: _0x5619c2.getShapeType(),
            shapeData: t.Tools["deepClone"](_0x5619c2.getShapeData()),
            replace: true,
          },
        }));
    }
  }
  _resolveBinding(_0x4a04de, _0x50ced2, _0x255863) {
    if (_0x4a04de.deletes["has"](_0x50ced2)) return null;
    let _0x54b1cd =
      _0x4a04de.updates["get"](_0x50ced2) ??
      _0x4a04de.originals["get"](_0x50ced2);
    if (!_0x54b1cd) return null;
    let _0xf3ab73 = this._toSnapshot(_0x4a04de, _0x54b1cd);
    return _0xf3ab73
      ? (0, e.resolveShapeConnectionPoint)(_0xf3ab73, _0x255863)
      : null;
  }
  _toSnapshot(_0xa05ab4, _0x2d716a) {
    let _0x3cda53 = {
        hostType: t.UniverInstanceType["UNIVER_SHEET"],
        unitId: _0xa05ab4.unitId,
        subUnitId: _0xa05ab4.subUnitId,
        shapeId: _0x2d716a.drawingId,
      },
      _0x453a8f = this._shapeAdapter["getShape"](_0x3cda53);
    return !_0x453a8f || !_0x2d716a.transform
      ? null
      : {
          ..._0x453a8f,
          transform: {
            left: _0x2d716a.transform["left"] ?? 0,
            top: _0x2d716a.transform["top"] ?? 0,
            width: _0x2d716a.transform["width"] ?? 0,
            height: _0x2d716a.transform["height"] ?? 0,
            rotation: _0x2d716a.transform["angle"] ?? 0,
            flipX: _0x2d716a.transform["flipX"] ?? false,
            flipY: _0x2d716a.transform["flipY"] ?? false,
          },
        };
  }
  _applyUpdate(_0x2dd274, _0x422bae, _0x556f09) {
    let _0x5c0e5f = _0x422bae,
      _0x489e2a = {
        ..._0x422bae.transform,
        left: _0x556f09.transform["left"],
        top: _0x556f09.transform["top"],
        width: _0x556f09.transform["width"],
        height: _0x556f09.transform["height"],
        angle: _0x556f09.transform["rotation"],
        flipX: _0x556f09.transform["flipX"],
        flipY: _0x556f09.transform["flipY"],
      },
      _0x21c2ea = {
        ..._0x5c0e5f,
        transform: _0x489e2a,
        sheetTransform: (0, r.transformToDrawingPosition)(
          _0x489e2a,
          _0x2dd274.skeleton,
        ),
        axisAlignSheetTransform: (0, r.transformToAxisAlignPosition)(
          _0x489e2a,
          _0x2dd274.skeleton,
        ),
        data: {
          ..._0x5c0e5f.data,
          shapeType: _0x556f09.shapeType,
          shapeData: t.Tools["deepClone"](_0x556f09.shapeData),
        },
      };
    _0x2dd274.updates["set"](_0x422bae.drawingId, _0x21c2ea);
  }
};
j = f(
  [
    d(0, (0, t.Inject)(p)),
    d(1, (0, t.Inject)(O)),
    d(2, (0, t.Inject)(r.SheetDrawingTransformPlanService)),
  ],
  j,
);
let M = class extends t.Plugin {
  constructor(_0x28471f = k, _0x4ce58f, _0x9bd9b) {
    (super(),
      (this._config = _0x28471f),
      (this._injector = _0x4ce58f),
      (this._configService = _0x9bd9b));
    let { ..._0x4ba683 } = (0, t.merge)({}, k, this._config);
    this._configService["setConfig"]("sheets-shape.config", _0x4ba683);
  }
  onStarting() {
    let _0x51e9a3 = this._injector;
    ([[u], [p], [O], [j], [A]].forEach((_0x34b395) => _0x51e9a3.add(_0x34b395)),
      (0, t.touchDependencies)(_0x51e9a3, [[p], [j], [A]]));
  }
};
(l(M, "type", t.UniverInstanceType["UNIVER_SHEET"]),
  l(M, "pluginName", "SHEET_SHAPE_PLUGIN"),
  l(M, "packageName", T),
  l(M, "version", E),
  (M = f(
    [
      (0, t.DependentOn)(
        i.UniverLicensePlugin,
        a.UniverDrawingPlugin,
        e.UniverShapePlugin,
        n.UniverSheetsPlugin,
        r.UniverSheetsDrawingPlugin,
      ),
      d(1, (0, t.Inject)(t.Injector)),
      d(2, t.IConfigService),
    ],
    M,
  )),
  (exports.DEFAULT_SHAPE_HEIGHT = 200),
  (exports.DEFAULT_SHAPE_WIDTH = 200),
  (exports.InsertShapeCommand = g),
  (exports.InsertSheetsShapeMutation = m),
  (exports.RemoveSheetsShapeMutation = h),
  (exports.SetShapeDrawingDataCommand = v),
  (exports.SetSheetsShapeRotateCommand = b),
  (exports.SetSheetsShapeTextVerticalToggleCommand = x),
  Object.defineProperty(exports, "SheetsShapeService", {
    enumerable: true,
    get: function () {
      return p;
    },
  }),
  (exports.ToggleSheetsShapeFlipCommand = y),
  Object.defineProperty(exports, "UniverSheetsShapePlugin", {
    enumerable: true,
    get: function () {
      return M;
    },
  }),
  (exports.UpdateConnectorRelationCommand = S),
  (exports.UpdateLineShapeResizeCommand = C),
  (exports.UpdateSheetsShapeDataMutation = _),
  (exports.UpdateSheetsShapeTypeMutation = w));
