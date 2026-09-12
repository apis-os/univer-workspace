import {
  IConnectorShapeHostAdapter as _0x2a4643,
  IShapeHostAdapterRegistry as _0x14adf6,
  ShapeModel as _0x141fed,
  UniverShapePlugin as _0x25b2b2,
  canApplyShapeFormulaLastValue as _0x114934,
  createDefaultInsertedShapeData as _0x5a5107,
  isConnectorShape as _0x2602d4,
} from "@univerjs-pro/engine-shape";
import {
  ArrangeTypeEnum as _0x48858d,
  BooleanNumber as _0x56b296,
  CommandType as _0x5ed22d,
  DependentOn as _0x3ae8b9,
  Disposable as _0xe4d676,
  DrawingTypeEnum as _0x10fadf,
  ICommandService as _0x1600be,
  IConfigService as _0x317fd4,
  IResourceManagerService as _0x5406ed,
  IUndoRedoService as _0x4fa2f6,
  IUniverInstanceService as _0x664727,
  Inject as _0x2453bb,
  Injector as _0x349a01,
  JSONX as _0x553d22,
  Plugin as _0x2984ea,
  Tools as _0x5659c4,
  UniverInstanceType as _0x35a411,
  WrapTextType as _0x496a84,
  generateRandomId as _0x3fb76a,
  getParagraphContentStartOffset as _0x250fb4,
  merge as _0x36d79c,
  touchDependencies as _0x3b4401,
} from "@univerjs/core";
import {
  IDocDrawingAdapterService as _0x1ab7b1,
  InsertDocDrawingCommand as _0x405d10,
  RemoveDocDrawingCommand as _0x35a249,
  SetDocDrawingArrangeCommand as _0x4963f1,
  TextWrappingStyle as _0x18c7b0,
  UniverDocsDrawingPlugin as _0x255f13,
  UpdateDrawingDocTransformCommand as _0x399c8f,
  WRAPPING_STYLE_TO_LAYOUT_TYPE as _0x34248b,
} from "@univerjs/docs-drawing";
import {
  RichTextEditingMutation as _0x360808,
  buildDocTransform as _0x31fd6a,
  docDrawingPositionToTransform as _0x3552d8,
} from "@univerjs/docs";
import { UniverLicensePlugin as _0x2cbda8 } from "@univerjs-pro/license";
const N = 160,
  ce = 96;
let le = (function (_0x22eae8) {
  return (
    (_0x22eae8.PARAGRAPH_START = "paragraph-start"),
    (_0x22eae8.PARAGRAPH_END = "paragraph-end"),
    (_0x22eae8.OFFSET = "offset"),
    _0x22eae8
  );
})({});
function P(_0x4782b9) {
  "@babel/helpers - typeof";
  return (
    (P =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x24747b) {
            return typeof _0x24747b;
          }
        : function (_0x3df28d) {
            return _0x3df28d &&
              typeof Symbol == "function" &&
              _0x3df28d.constructor === Symbol &&
              _0x3df28d !== Symbol.prototype
              ? "symbol"
              : typeof _0x3df28d;
          }),
    P(_0x4782b9)
  );
}
function ue(_0x2266b4, _0xdc9f24) {
  if (P(_0x2266b4) != "object" || !_0x2266b4) return _0x2266b4;
  var _0x34203c = _0x2266b4[Symbol.toPrimitive];
  if (_0x34203c !== undefined) {
    var _0x1576db = _0x34203c.call(_0x2266b4, _0xdc9f24 || "default");
    if (P(_0x1576db) != "object") return _0x1576db;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0xdc9f24 === "string" ? String : Number)(_0x2266b4);
}
function de(_0x44ada9) {
  var _0x4cfe25 = ue(_0x44ada9, "string");
  return P(_0x4cfe25) == "symbol" ? _0x4cfe25 : _0x4cfe25 + "";
}
function F(_0xc5e4c3, _0xeca404, _0x2b06f4) {
  return (
    (_0xeca404 = de(_0xeca404)) in _0xc5e4c3
      ? Object.defineProperty(_0xc5e4c3, _0xeca404, {
          value: _0x2b06f4,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xc5e4c3[_0xeca404] = _0x2b06f4),
    _0xc5e4c3
  );
}
var I = class extends _0xe4d676 {
  constructor(..._0x4845d4) {
    (super(..._0x4845d4),
      F(this, "shapes", new Map()),
      F(this, "_lineIds", new Set()));
  }
  addShape(_0x3f16ad, _0x5387c0, _0x18d426) {
    let _0xe61a29 = new _0x141fed(_0x3f16ad, _0x5387c0, _0x18d426);
    return (
      this.shapes["set"](_0x5387c0, _0xe61a29),
      _0x2602d4(_0x3f16ad) && this._lineIds["add"](_0x5387c0),
      _0xe61a29
    );
  }
  removeShape(_0x2c1539) {
    let _0xbf0938 = this.shapes["get"](_0x2c1539);
    _0xbf0938 &&
      (_0x2602d4(_0xbf0938.getShapeType()) &&
        this._lineIds["delete"](_0x2c1539),
      _0xbf0938.dispose(),
      this.shapes["delete"](_0x2c1539));
  }
  getShapeType(_0x1026c7) {
    var _0x1d126f;
    return (_0x1d126f = this.shapes["get"](_0x1026c7)) == null
      ? undefined
      : _0x1d126f.getShapeType();
  }
  getShapeData(_0x4a674b) {
    var _0x12b7d3;
    return (_0x12b7d3 = this.shapes["get"](_0x4a674b)) == null
      ? undefined
      : _0x12b7d3.getShapeData();
  }
  hasShape(_0x4abdc7) {
    return this.shapes["has"](_0x4abdc7);
  }
  getBasicShapeRelation(_0x3f745c) {
    let _0x1dd2f0 = [];
    for (let _0x25c83a of this._lineIds) {
      var _0x354b29, _0x15bc08;
      let _0x512459 = this.shapes["get"](_0x25c83a),
        _0x570d8d =
          _0x512459 == null ? undefined : _0x512459.getShapeRelation();
      _0x570d8d &&
        (((_0x354b29 = _0x570d8d.from) == null
          ? undefined
          : _0x354b29.shapeId) === _0x3f745c &&
          _0x1dd2f0.push({
            ..._0x570d8d.from,
            lineShapeId: _0x25c83a,
            isFrom: true,
          }),
        ((_0x15bc08 = _0x570d8d.to) == null ? undefined : _0x15bc08.shapeId) ===
          _0x3f745c &&
          _0x1dd2f0.push({
            ..._0x570d8d.to,
            lineShapeId: _0x25c83a,
            isFrom: false,
          }));
    }
    return _0x1dd2f0;
  }
  getLineShapeRelation(_0xbc3853) {
    var _0x4607b8;
    return (_0x4607b8 = this.shapes["get"](_0xbc3853)) == null
      ? undefined
      : _0x4607b8.getShapeRelation();
  }
  toJSON() {
    return Array.from(this.shapes["values"]()).map((_0x293f68) =>
      _0x293f68.toJSON(),
    );
  }
  fromJSON(_0xb94fe9) {
    for (let _0x558057 of _0xb94fe9) {
      let { id: _0x4ec5ba, shapeType: _0x2da016 } = _0x558057;
      this.addShape(_0x2da016, _0x4ec5ba, _0x558057.shapeData);
    }
  }
  dispose() {
    this._disposed ||
      (this.shapes["forEach"]((_0x198cb2) => _0x198cb2.dispose()),
      this.shapes["clear"](),
      this._lineIds["clear"](),
      super.dispose());
  }
};
function L(_0x4cb4d2, _0x494415) {
  return function (_0x3c6512, _0x278ed0) {
    _0x494415(_0x3c6512, _0x278ed0, _0x4cb4d2);
  };
}
function R(_0x18b9dc, _0x226d55, _0x2ffc85, _0x522522) {
  var _0x15c54b = arguments.length,
    _0x3a58ed =
      _0x15c54b < 3
        ? _0x226d55
        : _0x522522 === null
          ? (_0x522522 = Object.getOwnPropertyDescriptor(_0x226d55, _0x2ffc85))
          : _0x522522,
    _0xb56ff3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3a58ed = Reflect.decorate(_0x18b9dc, _0x226d55, _0x2ffc85, _0x522522);
  else {
    for (var _0x16f3a2 = _0x18b9dc.length - 1; _0x16f3a2 >= 0; _0x16f3a2--)
      (_0xb56ff3 = _0x18b9dc[_0x16f3a2]) &&
        (_0x3a58ed =
          (_0x15c54b < 3
            ? _0xb56ff3(_0x3a58ed)
            : _0x15c54b > 3
              ? _0xb56ff3(_0x226d55, _0x2ffc85, _0x3a58ed)
              : _0xb56ff3(_0x226d55, _0x2ffc85)) || _0x3a58ed);
  }
  return (
    _0x15c54b > 3 &&
      _0x3a58ed &&
      Object.defineProperty(_0x226d55, _0x2ffc85, _0x3a58ed),
    _0x3a58ed
  );
}
const z = "DOC_SHAPE_PLUGIN";
let B = class extends _0xe4d676 {
  constructor(_0x5c2e6c) {
    (super(),
      (this._resourcesManagerService = _0x5c2e6c),
      F(this, "_shapeModelManagerMap", new Map()),
      this._initSnapshot());
  }
  _ensureShapeModelManager(_0xb2f383) {
    let _0x606aef = this._shapeModelManagerMap["get"](_0xb2f383);
    return (
      _0x606aef ||
        ((_0x606aef = new I()),
        this._shapeModelManagerMap["set"](_0xb2f383, _0x606aef)),
      _0x606aef
    );
  }
  insertShape(_0x217332, _0x56099e, _0x924919, _0x51b760) {
    this._ensureShapeModelManager(_0x217332).addShape(
      _0x56099e,
      _0x924919,
      _0x51b760,
    );
  }
  removeShape(_0x175888, _0x2ba6f5) {
    this._ensureShapeModelManager(_0x175888).removeShape(_0x2ba6f5);
  }
  getShapeType(_0x405f81, _0x3e4857, _0x162c8d) {
    return this._ensureShapeModelManager(_0x405f81).getShapeType(
      _0x162c8d ?? _0x3e4857,
    );
  }
  getShapeData(_0x4fb53f, _0x2673b7, _0x49bbea) {
    return this._ensureShapeModelManager(_0x4fb53f).getShapeData(
      _0x49bbea ?? _0x2673b7,
    );
  }
  hasShape(_0x1c7733, _0x28ebc4) {
    return this._ensureShapeModelManager(_0x1c7733).hasShape(_0x28ebc4);
  }
  getShapeTypeById(_0x44a4f9, _0xa9977b, _0x3d4eb9) {
    return this.getShapeType(_0x44a4f9, _0x3d4eb9 ?? _0xa9977b);
  }
  getShapeDataById(_0x1eed28, _0x3186df, _0x10ef5e) {
    return this.getShapeData(_0x1eed28, _0x10ef5e ?? _0x3186df);
  }
  getShapeModel(_0x31dfa8, _0x562d5b, _0x5edaf1) {
    return this._ensureShapeModelManager(_0x31dfa8).shapes["get"](
      _0x5edaf1 ?? _0x562d5b,
    );
  }
  getBasicShapeRelation(_0x36d05d, _0x50e086) {
    return this._ensureShapeModelManager(_0x36d05d).getBasicShapeRelation(
      _0x50e086,
    );
  }
  getLineShapeRelation(_0x206a5e, _0xad2cf6) {
    return this._ensureShapeModelManager(_0x206a5e).getLineShapeRelation(
      _0xad2cf6,
    );
  }
  _serializeShapeForUnit(_0x1b930d) {
    var _0x2ff48d;
    return JSON.stringify(
      ((_0x2ff48d = this._shapeModelManagerMap["get"](_0x1b930d)) == null
        ? undefined
        : _0x2ff48d.toJSON()) ?? [],
    );
  }
  _deserializeShapeForUnit(_0x2eba74, _0x2a2284) {
    this._ensureShapeModelManager(_0x2eba74).fromJSON(_0x2a2284);
  }
  toJSON() {
    let _0x13d1b1 = {};
    return (
      this._shapeModelManagerMap["forEach"]((_0x2fbf9f, _0x2915b8) => {
        _0x13d1b1[_0x2915b8] = _0x2fbf9f.toJSON();
      }),
      _0x13d1b1
    );
  }
  fromJSON(_0x5b4b60) {
    Object.keys(_0x5b4b60).forEach((_0x373b4b) => {
      this._ensureShapeModelManager(_0x373b4b).fromJSON(_0x5b4b60[_0x373b4b]);
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: z,
      businesses: [_0x35a411.UNIVER_DOC],
      toJson: (_0x419172) => this._serializeShapeForUnit(_0x419172),
      parseJson: (_0x15d1f5) => JSON.parse(_0x15d1f5),
      onLoad: (_0x1b6944, _0x194251) =>
        this._deserializeShapeForUnit(_0x1b6944, _0x194251 ?? []),
      onUnLoad: (_0x5ec134) => {
        var _0x31e1f9;
        ((_0x31e1f9 = this._shapeModelManagerMap["get"](_0x5ec134)) == null ||
          _0x31e1f9.dispose(),
          this._shapeModelManagerMap["delete"](_0x5ec134));
      },
    });
  }
  dispose() {
    (this._shapeModelManagerMap["forEach"]((_0xebf4d2) => _0xebf4d2.dispose()),
      this._shapeModelManagerMap["clear"](),
      super.dispose());
  }
};
B = R([L(0, _0x5406ed)], B);
const V = {
    id: "doc.mutation.insert-shape",
    type: _0x5ed22d.MUTATION,
    handler: (_0x152ba9, _0x4ccbed) => {
      let {
        unitId: _0xc4c9a3,
        shapeType: _0x269835,
        shapeId: _0x3b1836,
        shapeData: _0x3f5886,
      } = _0x4ccbed;
      return (
        _0x152ba9
          .get(B)
          .insertShape(_0xc4c9a3, _0x269835, _0x3b1836, _0x3f5886),
        true
      );
    },
  },
  H = {
    id: "doc.mutation.remove-shape",
    type: _0x5ed22d.MUTATION,
    handler: (_0x1e5534, _0x263aab) => {
      let { unitId: _0x5281b5, shapeId: _0x38bc11 } = _0x263aab;
      return (_0x1e5534.get(B).removeShape(_0x5281b5, _0x38bc11), true);
    },
  };
function fe(_0xcd25da, _0x2f5358) {
  var _0x3d255d;
  let _0x2293f0 = _0x2f5358.segmentId ?? "",
    _0x3f5121 =
      (_0x3d255d = _0xcd25da.getSelfOrHeaderFooterModel(_0x2293f0)) == null
        ? undefined
        : _0x3d255d.getBody();
  if (!_0x3f5121) return null;
  let _0xbf7505 = (_0x3f5121.paragraphs ?? []).filter(
    (_0x16ead6) => _0x16ead6.paragraphId === _0x2f5358.paragraphId,
  );
  if (_0xbf7505.length !== 1) return null;
  let _0x101e1b = _0xbf7505[0],
    _0x1d77ba = _0x250fb4(_0x3f5121, _0x101e1b),
    _0x3fb5d0 = _0x101e1b.startIndex,
    _0x29eb87 = _0x3fb5d0;
  if (_0x2f5358.position === "offset") {
    let { offset: _0x598567 } = _0x2f5358;
    if (
      !Number.isInteger(_0x598567) ||
      _0x598567 < 0 ||
      _0x598567 > _0x3fb5d0 - _0x1d77ba
    )
      return null;
    _0x29eb87 = _0x1d77ba + _0x598567;
  } else {
    if (_0x2f5358.position === "paragraph-start") _0x29eb87 = _0x1d77ba;
    else {
      if (
        _0x2f5358.position !== undefined &&
        _0x2f5358.position !== "paragraph-end"
      )
        return null;
    }
  }
  return {
    startOffset: _0x29eb87,
    endOffset: _0x29eb87,
    collapsed: true,
    segmentId: _0x2293f0,
  };
}
function pe(_0x157009, _0x2811f8) {
  let _0x4f0424 = _0x34248b[_0x2811f8.wrappingStyle];
  if (
    _0x4f0424 === undefined ||
    (_0x2811f8.wrappingStyle === _0x18c7b0.INLINE &&
      _0x2811f8.position !== undefined)
  )
    return null;
  let _0xd048b4 = fe(_0x157009, _0x2811f8.anchor);
  return _0xd048b4 ? { layoutType: _0x4f0424, textRange: _0xd048b4 } : null;
}
function me(_0x331ea2, _0x18cb99, _0xbcc2f) {
  var _0xe2b512, _0x422fe7, _0x2e3413, _0x481e2b, _0x2f3100;
  let { placement: _0x52de96 } = _0x331ea2,
    _0x4fc450 =
      ((_0xe2b512 = _0x331ea2.transform) == null
        ? undefined
        : _0xe2b512.width) ?? 160,
    _0x8ac2f =
      ((_0x422fe7 = _0x331ea2.transform) == null
        ? undefined
        : _0x422fe7.height) ?? 96,
    _0x5af2ca =
      ((_0x2e3413 = _0x331ea2.transform) == null
        ? undefined
        : _0x2e3413.rotation) ?? 0,
    _0x4ae2ac = {
      ..._0x31fd6a(
        _0x4fc450,
        _0x8ac2f,
        _0x52de96.wrappingStyle === _0x18c7b0.INLINE
          ? undefined
          : {
              left:
                (_0x481e2b = _0x52de96.position) == null
                  ? undefined
                  : _0x481e2b.horizontalOffset,
              top:
                (_0x2f3100 = _0x52de96.position) == null
                  ? undefined
                  : _0x2f3100.verticalOffset,
            },
      ),
      angle: _0x5af2ca,
    },
    _0x1145da = { ..._0x3552d8(_0x4ae2ac), angle: _0x5af2ca },
    _0x513913 = {};
  return (
    _0x2602d4(_0x331ea2.shapeType) &&
      ((_0x513913.fill = false),
      (_0x513913.rotateEnabled = false),
      (_0x513913.resizeEnabled = false),
      (_0x513913.borderEnabled = false),
      (_0x1145da.rotateEnabled = false),
      (_0x1145da.resizeEnabled = false),
      (_0x1145da.borderEnabled = false)),
    {
      unitId: _0x331ea2.unitId,
      subUnitId: _0x331ea2.unitId,
      drawingId: _0x18cb99,
      drawingType: _0x10fadf.DRAWING_SHAPE,
      name: _0x331ea2.name,
      transform: _0x1145da,
      docTransform: _0x4ae2ac,
      data: _0x513913,
      behindDoc:
        _0x52de96.wrappingStyle === _0x18c7b0.BEHIND_TEXT
          ? _0x56b296.TRUE
          : _0x56b296.FALSE,
      title: _0x331ea2.name ?? "",
      description: _0x331ea2.description ?? "",
      layoutType: _0xbcc2f,
      wrapText: _0x496a84.BOTH_SIDES,
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0,
      allowTransform: true,
      hidden: _0x331ea2.visible === false,
      selectable: _0x331ea2.selectable ?? true,
    }
  );
}
const U = {
    type: _0x5ed22d.COMMAND,
    id: "doc.command.insert-shape",
    handler: (_0x8e678, _0x2c54c9) => {
      var _0x2df57e;
      let _0x30da51 = _0x8e678
        .get(_0x664727)
        .getUnit(_0x2c54c9.unitId, _0x35a411.UNIVER_DOC);
      if (!_0x30da51) return false;
      let _0x1e913b =
        (_0x2df57e = _0x2c54c9.placement) != null && _0x2df57e.anchor
          ? pe(_0x30da51, _0x2c54c9.placement)
          : null;
      if (!_0x1e913b) return false;
      let _0x45c961 = _0x8e678.get(_0x1600be),
        _0x536eaf = _0x8e678.get(_0x4fa2f6),
        _0x2948e7 = _0x2c54c9.shapeId ?? _0x3fb76a(),
        _0x5f0181 = me(_0x2c54c9, _0x2948e7, _0x1e913b.layoutType),
        _0x5ae4dc = _0x2c54c9.shapeData ?? _0x5a5107(_0x2c54c9.shapeType),
        _0x1d5819 = {
          unitId: _0x2c54c9.unitId,
          shapeId: _0x2948e7,
          shapeType: _0x2c54c9.shapeType,
          shapeData: _0x5ae4dc,
        },
        _0x58b570 = "doc-shape-insert:" + _0x2c54c9.unitId + ":" + _0x2948e7,
        _0x4e70ca = _0x536eaf.__tempBatchingUndoRedo(_0x2c54c9.unitId);
      if (!_0x45c961.syncExecuteCommand(V.id, _0x1d5819))
        return (_0x4e70ca == null || _0x4e70ca.dispose(), false);
      _0x536eaf.pushUndoRedo({
        id: _0x58b570,
        unitID: _0x2c54c9.unitId,
        redoMutations: [{ id: V.id, params: _0x1d5819 }],
        undoMutations: [
          {
            id: H.id,
            params: { unitId: _0x2c54c9.unitId, shapeId: _0x2948e7 },
          },
        ],
      });
      let _0x44689f = _0x45c961.syncExecuteCommand(_0x405d10.id, {
        unitId: _0x2c54c9.unitId,
        drawings: [_0x5f0181],
        textRange: _0x1e913b.textRange,
      });
      return (
        _0x4e70ca == null || _0x4e70ca.dispose(),
        _0x44689f
          ? true
          : (_0x536eaf.rollback(_0x58b570, _0x2c54c9.unitId), false)
      );
    },
  },
  he = ["name", "title", "description", "hidden", "visible", "selectable"],
  W = {
    id: "doc.command.update-drawing-metadata",
    type: _0x5ed22d.COMMAND,
    handler: (_0x4a199e, _0x16631a) => {
      if (!_0x16631a || _0x16631a.patches["length"] === 0) return false;
      let _0x24b676 = _0x4a199e.get(_0x1600be),
        _0x126c25 = _0x4a199e
          .get(_0x664727)
          .getUnit(_0x16631a.unitId, _0x35a411.UNIVER_DOC),
        _0x3541d5 =
          _0x126c25 == null ? undefined : _0x126c25.getSnapshot().drawings;
      if (!_0x126c25 || !_0x3541d5) return false;
      let _0x390bd5 = _0x553d22.getInstance(),
        _0x26d815 = [];
      if (
        (_0x16631a.patches["forEach"]((_0x37b075) => {
          let _0x2d004f = _0x3541d5[_0x37b075.drawingId];
          _0x2d004f &&
            he.forEach((_0x26f879) => {
              if (!(_0x26f879 in _0x37b075)) return;
              let _0xbd6d84 = _0x37b075[_0x26f879],
                _0x2b9908 = _0x2d004f[_0x26f879];
              if (_0x2b9908 === _0xbd6d84) return;
              let _0x4aa75c = ["drawings", _0x37b075.drawingId, _0x26f879];
              if (_0xbd6d84 === undefined) {
                _0x2b9908 !== undefined &&
                  _0x26d815.push(_0x390bd5.removeOp(_0x4aa75c, _0x2b9908));
                return;
              }
              _0x26d815.push(
                _0x2b9908 === undefined
                  ? _0x390bd5.insertOp(_0x4aa75c, _0xbd6d84)
                  : _0x390bd5.replaceOp(_0x4aa75c, _0x2b9908, _0xbd6d84),
              );
            });
        }),
        !_0x26d815.length)
      )
        return false;
      let _0x20296d = {
        id: _0x360808.id,
        params: {
          unitId: _0x16631a.unitId,
          actions: _0x26d815.reduce(
            (_0x5fbc50, _0x3a0750) => _0x553d22.compose(_0x5fbc50, _0x3a0750),
            null,
          ),
          textRanges: null,
        },
      };
      return !!_0x24b676.syncExecuteCommand(_0x20296d.id, _0x20296d.params);
    },
  },
  G = {
    id: "doc.mutation.update-shape-data",
    type: _0x5ed22d.MUTATION,
    handler: (_0x14e0e3, _0x2a1e85) => {
      var _0x2e557b;
      let {
          unitId: _0x568236,
          shapeType: _0x527c99,
          shapeId: _0x9bba53,
          shapeData: _0x4161d1,
          replaceShapeData: _0x554bcc,
          formulaLastValueGuard: _0x5f19b3,
        } = _0x2a1e85,
        _0x376704 = _0x14e0e3.get(B).getShapeModel(_0x568236, _0x9bba53);
      return _0x376704
        ? _0x114934(
            _0x14e0e3,
            {
              hostType: _0x35a411.UNIVER_DOC,
              unitId: _0x568236,
              subUnitId: _0x568236,
              shapeId: _0x9bba53,
            },
            (_0x2e557b = _0x376704.getShapeData().formulaBinding) == null
              ? undefined
              : _0x2e557b.formula,
            _0x5f19b3,
          )
          ? (_0x527c99 !== undefined && _0x376704.setShapeType(_0x527c99),
            _0x4161d1 && _0x376704.setShapeData(_0x4161d1, !_0x554bcc),
            true)
          : true
        : false;
    },
  };
function K(_0x12d5fe, _0x424689) {
  let _0x5728e8 = {};
  for (let _0x49dd70 of Object.keys(_0x424689)) {
    let _0x3859d7 = _0x424689[_0x49dd70],
      _0x253897 = _0x12d5fe[_0x49dd70];
    _0x3859d7 !== undefined &&
      (typeof _0x3859d7 == "object" &&
      _0x3859d7 &&
      !Array.isArray(_0x3859d7) &&
      typeof _0x253897 == "object" &&
      _0x253897 &&
      !Array.isArray(_0x253897)
        ? (_0x5728e8[_0x49dd70] = K(_0x253897, _0x3859d7))
        : (_0x5728e8[_0x49dd70] = _0x253897));
  }
  return _0x5728e8;
}
const q = {
  type: _0x5ed22d.COMMAND,
  id: "doc.command.update-shape-data",
  handler: (_0x477190, _0x54f5f8) => {
    let _0x312530 = _0x477190.get(B),
      {
        unitId: _0x48e645,
        shapeType: _0xfe8ec4,
        shapeId: _0x3b5c1e,
        shapeData: _0x23422a,
        replaceShapeData: _0x55fcf0,
        oldShapeJSON: _0x346c9c,
      } = _0x54f5f8;
    if (!_0x312530.getShapeModel(_0x48e645, _0x3b5c1e)) return false;
    let _0x2e76ee = _0x477190.get(_0x1600be),
      _0x4f710f = _0x477190.get(_0x4fa2f6),
      { oldShapeType: _0x494269, oldShapeData: _0x5e4eb8 = {} } = _0x346c9c,
      _0x4837a4 = _0x55fcf0 ? _0x5e4eb8 : K(_0x5e4eb8, _0x23422a || {}),
      _0x1ea42f = {
        id: G.id,
        params: {
          unitId: _0x48e645,
          shapeId: _0x3b5c1e,
          shapeType: _0xfe8ec4,
          shapeData: _0x23422a,
          replaceShapeData: _0x55fcf0,
        },
      },
      _0x1172d5 = {
        id: G.id,
        params: {
          unitId: _0x48e645,
          shapeId: _0x3b5c1e,
          shapeType: _0x494269,
          shapeData: _0x4837a4,
          replaceShapeData: _0x55fcf0,
        },
      };
    return _0x2e76ee.syncExecuteCommand(_0x1ea42f.id, _0x1ea42f.params)
      ? (_0x4f710f.pushUndoRedo({
          unitID: _0x48e645,
          undoMutations: [_0x1172d5],
          redoMutations: [_0x1ea42f],
        }),
        true)
      : false;
  },
};
function ge(_0x425186) {
  let { docTransform: _0x223378, transform: _0x43f9ee } = _0x425186;
  return {
    left:
      _0x223378.positionH["posOffset"] ??
      (_0x43f9ee == null ? undefined : _0x43f9ee.left) ??
      0,
    top:
      _0x223378.positionV["posOffset"] ??
      (_0x43f9ee == null ? undefined : _0x43f9ee.top) ??
      0,
    width: _0x223378.size["width"] ?? 160,
    height: _0x223378.size["height"] ?? 96,
    rotation: _0x223378.angle ?? 0,
    flipX:
      _0x223378.flipX ??
      (_0x43f9ee == null ? undefined : _0x43f9ee.flipX) ??
      false,
    flipY:
      _0x223378.flipY ??
      (_0x43f9ee == null ? undefined : _0x43f9ee.flipY) ??
      false,
  };
}
let J = class {
  constructor(_0x5ede5e, _0x10f6dc, _0x7e820b, _0x1b689b) {
    ((this._commandService = _0x5ede5e),
      (this._univerInstanceService = _0x10f6dc),
      (this._shapeService = _0x7e820b),
      (this._connectorShapeHostAdapter = _0x1b689b),
      F(this, "hostType", _0x35a411.UNIVER_DOC));
  }
  get shapeChanged$() {
    return {
      subscribe: (_0x214997) => {
        let _0x4fe538 = this._commandService["onCommandExecuted"](
          (_0x3fb1a6) => {
            (_0x3fb1a6.id === V.id ||
              _0x3fb1a6.id === H.id ||
              _0x3fb1a6.id === G.id) &&
              _0x214997({ unitId: _0x3fb1a6.params["unitId"] });
          },
        );
        return { unsubscribe: () => _0x4fe538.dispose() };
      },
    };
  }
  getShape(_0x582546) {
    let _0x27d3a4 = this._getDrawing(_0x582546),
      _0x4d9d90 = this._shapeService["getShapeType"](
        _0x582546.unitId,
        _0x582546.shapeId,
      );
    return !_0x27d3a4 || _0x4d9d90 === undefined
      ? null
      : {
          ..._0x582546,
          shapeType: _0x4d9d90,
          shapeData: _0x5659c4.deepClone(
            this._shapeService["getShapeData"](
              _0x582546.unitId,
              _0x582546.shapeId,
            ) ?? {},
          ),
          name: _0x27d3a4.name ?? (_0x27d3a4.title || undefined),
          description: _0x27d3a4.description,
          visible: _0x27d3a4.hidden !== true,
          selectable: _0x27d3a4.selectable !== false,
          transform: ge(_0x27d3a4),
        };
  }
  listShapes(_0x4ba58c) {
    let _0x1f6de2 = this._getDocument(_0x4ba58c.unitId);
    if (!_0x1f6de2) return [];
    let _0x439373 = _0x1f6de2.getDrawings() ?? {};
    return (_0x1f6de2.getDrawingsOrder() ?? Object.keys(_0x439373))
      .filter((_0x4762b3) => {
        var _0x543de2;
        return (
          ((_0x543de2 = _0x439373[_0x4762b3]) == null
            ? undefined
            : _0x543de2.drawingType) === _0x10fadf.DRAWING_SHAPE
        );
      })
      .map((_0x120ebb) => this.getShape({ ..._0x4ba58c, shapeId: _0x120ebb }))
      .filter((_0x149b28) => !!_0x149b28);
  }
  listShapesInUnit(_0x3ee451) {
    return this.listShapes({
      hostType: this.hostType,
      unitId: _0x3ee451,
      subUnitId: _0x3ee451,
    });
  }
  createShape(_0x22a61f, _0x5eb043) {
    var _0x5727dd, _0x3a9e55, _0xeffaca;
    if (!_0x5eb043.placement) return null;
    let _0x287253 = _0x3fb76a(),
      _0x597535 =
        _0x5eb043.placement["wrappingStyle"] === _0x18c7b0.INLINE
          ? undefined
          : _0x5eb043.placement["position"],
      _0x466535 = {
        left: (_0x597535 == null ? undefined : _0x597535.horizontalOffset) ?? 0,
        top: (_0x597535 == null ? undefined : _0x597535.verticalOffset) ?? 0,
        width:
          ((_0x5727dd = _0x5eb043.transform) == null
            ? undefined
            : _0x5727dd.width) ?? 160,
        height:
          ((_0x3a9e55 = _0x5eb043.transform) == null
            ? undefined
            : _0x3a9e55.height) ?? 96,
        rotation:
          ((_0xeffaca = _0x5eb043.transform) == null
            ? undefined
            : _0xeffaca.rotation) ?? 0,
        flipX: false,
        flipY: false,
      },
      _0x4cd282 = _0x5659c4.deepClone(
        _0x5eb043.shapeData ?? _0x5a5107(_0x5eb043.shapeType),
      );
    return this._commandService["syncExecuteCommand"](U.id, {
      unitId: _0x22a61f.unitId,
      shapeId: _0x287253,
      ..._0x5eb043,
      shapeData: _0x4cd282,
      transform: {
        width: _0x466535.width,
        height: _0x466535.height,
        rotation: _0x466535.rotation,
      },
      visible: _0x5eb043.visible ?? true,
      selectable: _0x5eb043.selectable ?? true,
    })
      ? {
          ..._0x22a61f,
          shapeId: _0x287253,
          shapeType: _0x5eb043.shapeType,
          shapeData: _0x4cd282,
          name: _0x5eb043.name,
          description: _0x5eb043.description,
          visible: _0x5eb043.visible ?? true,
          selectable: _0x5eb043.selectable ?? true,
          transform: _0x466535,
        }
      : null;
  }
  updateShape(_0x5a35ca, _0xd5909a) {
    let _0x2a31b8 = this.getShape(_0x5a35ca),
      _0x78b42d = this._getDrawing(_0x5a35ca);
    if (
      !_0x2a31b8 ||
      !_0x78b42d ||
      !this._supportsTransformUpdate(_0x2a31b8, _0xd5909a)
    )
      return false;
    if (
      _0xd5909a.shapeType !== undefined ||
      _0xd5909a.shapeData !== undefined
    ) {
      var _0x2ec4f1;
      if (
        !this._commandService["syncExecuteCommand"](q.id, {
          unitId: _0x5a35ca.unitId,
          shapeId: _0x5a35ca.shapeId,
          shapeType:
            _0xd5909a.shapeType ??
            ((_0x2ec4f1 = _0xd5909a.shapeData) == null
              ? undefined
              : _0x2ec4f1.shapeType),
          shapeData: _0xd5909a.shapeData,
          replaceShapeData: true,
          oldShapeJSON: {
            oldShapeData: _0x2a31b8.shapeData,
            oldShapeType: _0x2a31b8.shapeType,
          },
        })
      )
        return false;
    }
    let _0x4e7abe = this._buildTransformUpdates(
      _0x5a35ca,
      _0x78b42d,
      _0x2a31b8,
      _0xd5909a,
    );
    if (
      _0x4e7abe.length > 0 &&
      !this._commandService["syncExecuteCommand"](_0x399c8f.id, {
        unitId: _0x5a35ca.unitId,
        subUnitId: _0x5a35ca.subUnitId,
        drawings: _0x4e7abe,
      })
    )
      return false;
    let _0x58c660 = "name" in _0xd5909a,
      _0x266fcd = "description" in _0xd5909a;
    return (
      (_0xd5909a.visible === undefined &&
        _0xd5909a.selectable === undefined &&
        !_0x58c660 &&
        !_0x266fcd) ||
      this._commandService["syncExecuteCommand"](W.id, {
        unitId: _0x5a35ca.unitId,
        patches: [
          {
            drawingId: _0x5a35ca.shapeId,
            ...(_0xd5909a.visible === undefined
              ? null
              : { hidden: !_0xd5909a.visible }),
            ...(_0xd5909a.selectable === undefined
              ? null
              : { selectable: _0xd5909a.selectable }),
            ...(_0x58c660
              ? { name: _0xd5909a.name, title: _0xd5909a.name }
              : null),
            ...(_0x266fcd ? { description: _0xd5909a.description } : null),
          },
        ],
      })
    );
  }
  createFormulaLastValueMutation(_0x2ecca4, _0x56f7bc, _0x3efef5) {
    let _0x465d68 = this.getShape(_0x2ecca4),
      _0x4f4c7b =
        _0x465d68 == null ? undefined : _0x465d68.shapeData["formulaBinding"];
    return !_0x465d68 || !_0x4f4c7b
      ? null
      : {
          id: G.id,
          params: {
            unitId: _0x2ecca4.unitId,
            shapeId: _0x2ecca4.shapeId,
            shapeData: {
              ..._0x465d68.shapeData,
              formulaBinding: {
                ..._0x4f4c7b,
                lastValue: _0x5659c4.deepClone(_0x3efef5),
              },
            },
            replaceShapeData: true,
            formulaLastValueGuard: _0x56f7bc,
          },
        };
  }
  removeShape(_0x2e6dac) {
    let _0x25294e = this._getDrawing(_0x2e6dac),
      _0x5447c8 = this._getTextRange(_0x2e6dac.unitId, _0x2e6dac.shapeId);
    return !_0x25294e || !_0x5447c8
      ? false
      : this._commandService["syncExecuteCommand"](_0x35a249.id, {
          unitId: _0x2e6dac.unitId,
          drawings: [
            {
              unitId: _0x2e6dac.unitId,
              subUnitId: _0x2e6dac.subUnitId,
              drawingId: _0x2e6dac.shapeId,
              drawingType: _0x10fadf.DRAWING_SHAPE,
            },
          ],
          textRange: _0x5447c8,
        });
  }
  bringToFront(_0x122ed7) {
    return this._arrange(_0x122ed7, _0x48858d.front);
  }
  bringForward(_0x30417e) {
    return this._arrange(_0x30417e, _0x48858d.forward);
  }
  sendBackward(_0xb6706c) {
    return this._arrange(_0xb6706c, _0x48858d.backward);
  }
  sendToBack(_0xaf534a) {
    return this._arrange(_0xaf534a, _0x48858d.back);
  }
  setZOrder(_0x445b4a, _0x203cb0) {
    return this._commandService["syncExecuteCommand"](_0x4963f1.id, {
      unitId: _0x445b4a.unitId,
      subUnitId: _0x445b4a.subUnitId,
      drawingIds: [_0x445b4a.shapeId],
      zOrder: _0x203cb0,
    });
  }
  refreshConnectedConnectors(_0x4dbb7a) {
    let _0x1fbf79 = this._shapeService["getShapeType"](
      _0x4dbb7a.unitId,
      _0x4dbb7a.shapeId,
    );
    if (_0x1fbf79 === undefined) return false;
    if (_0x2602d4(_0x1fbf79)) return true;
    let _0x4fb4f6 = new Set(
        this._shapeService["getBasicShapeRelation"](
          _0x4dbb7a.unitId,
          _0x4dbb7a.shapeId,
        ).map(({ lineShapeId: _0x19d0ae }) => _0x19d0ae),
      ),
      _0x4bae55 = true;
    for (let _0x53e1a7 of _0x4fb4f6) {
      let _0x1f6248 = this._shapeService["getLineShapeRelation"](
          _0x4dbb7a.unitId,
          _0x53e1a7,
        ),
        _0x58327b = { ..._0x4dbb7a, shapeId: _0x53e1a7 };
      (_0x1f6248 != null &&
        _0x1f6248.from &&
        (_0x4bae55 =
          this._connectorShapeHostAdapter["bindStart"](
            _0x58327b,
            _0x1f6248.from,
          ) && _0x4bae55),
        _0x1f6248 != null &&
          _0x1f6248.to &&
          (_0x4bae55 =
            this._connectorShapeHostAdapter["bindEnd"](
              _0x58327b,
              _0x1f6248.to,
            ) && _0x4bae55));
    }
    return _0x4bae55;
  }
  getRemoveDrawingMutationInfos(_0x468793) {
    let { drawing: _0x310da9, unitId: _0x5b87cd } = _0x468793;
    if (_0x310da9.drawingType !== _0x10fadf.DRAWING_SHAPE) return null;
    let _0x38ac5e = this._shapeService["getShapeType"](
      _0x5b87cd,
      _0x310da9.drawingId,
    );
    if (_0x38ac5e === undefined) return null;
    let _0x821acd = this._shapeService["getShapeData"](
      _0x5b87cd,
      _0x310da9.drawingId,
    );
    return {
      redoMutations: [
        {
          id: H.id,
          params: { unitId: _0x5b87cd, shapeId: _0x310da9.drawingId },
        },
      ],
      undoMutations: [
        {
          id: V.id,
          params: {
            unitId: _0x5b87cd,
            shapeId: _0x310da9.drawingId,
            shapeType: _0x38ac5e,
            shapeData: _0x821acd,
          },
        },
      ],
    };
  }
  _getDocument(_0x35a9e1) {
    return (
      this._univerInstanceService["getUnit"](_0x35a9e1, _0x35a411.UNIVER_DOC) ??
      null
    );
  }
  _getDrawing(_0x4b76e6) {
    var _0x10f211;
    let _0x10d496 =
      (_0x10f211 = this._getDocument(_0x4b76e6.unitId)) == null ||
      (_0x10f211 = _0x10f211.getDrawings()) == null
        ? undefined
        : _0x10f211[_0x4b76e6.shapeId];
    return (_0x10d496 == null ? undefined : _0x10d496.drawingType) ===
      _0x10fadf.DRAWING_SHAPE
      ? _0x10d496
      : null;
  }
  _supportsTransformUpdate(_0x599229, _0x2c0c43) {
    var _0x41fed1, _0x5b98e4;
    return _0x2602d4(_0x599229.shapeType)
      ? true
      : (((_0x41fed1 = _0x2c0c43.transform) == null
          ? undefined
          : _0x41fed1.flipX) === undefined ||
          _0x2c0c43.transform["flipX"] === _0x599229.transform["flipX"]) &&
          (((_0x5b98e4 = _0x2c0c43.transform) == null
            ? undefined
            : _0x5b98e4.flipY) === undefined ||
            _0x2c0c43.transform["flipY"] === _0x599229.transform["flipY"]);
  }
  _buildTransformUpdates(_0x4bc69d, _0x13911c, _0x3d365d, _0x228d97) {
    let _0x429eb3 = _0x228d97.transform;
    if (!_0x429eb3) return [];
    let _0x2c27ef = [];
    return (
      (_0x429eb3.width !== undefined || _0x429eb3.height !== undefined) &&
        _0x2c27ef.push({
          drawingId: _0x4bc69d.shapeId,
          key: "size",
          value: {
            width: _0x429eb3.width ?? _0x3d365d.transform["width"],
            height: _0x429eb3.height ?? _0x3d365d.transform["height"],
          },
        }),
      _0x429eb3.rotation !== undefined &&
        _0x2c27ef.push({
          drawingId: _0x4bc69d.shapeId,
          key: "angle",
          value: _0x429eb3.rotation,
        }),
      _0x429eb3.left !== undefined &&
        _0x2c27ef.push({
          drawingId: _0x4bc69d.shapeId,
          key: "positionH",
          value: {
            ..._0x13911c.docTransform["positionH"],
            posOffset: _0x429eb3.left,
          },
        }),
      _0x429eb3.top !== undefined &&
        _0x2c27ef.push({
          drawingId: _0x4bc69d.shapeId,
          key: "positionV",
          value: {
            ..._0x13911c.docTransform["positionV"],
            posOffset: _0x429eb3.top,
          },
        }),
      _0x429eb3.flipX !== undefined &&
        _0x2c27ef.push({
          drawingId: _0x4bc69d.shapeId,
          key: "flipX",
          value: _0x429eb3.flipX,
        }),
      _0x429eb3.flipY !== undefined &&
        _0x2c27ef.push({
          drawingId: _0x4bc69d.shapeId,
          key: "flipY",
          value: _0x429eb3.flipY,
        }),
      _0x2c27ef
    );
  }
  _arrange(_0x4d372e, _0x489534) {
    return this._commandService["syncExecuteCommand"](_0x4963f1.id, {
      unitId: _0x4d372e.unitId,
      subUnitId: _0x4d372e.subUnitId,
      drawingIds: [_0x4d372e.shapeId],
      arrangeType: _0x489534,
    });
  }
  _getTextRange(_0x63f3e5, _0x2321b7) {
    var _0x124d89;
    let _0x2deaba =
      (_0x124d89 = this._getDocument(_0x63f3e5)) == null
        ? undefined
        : _0x124d89.getSnapshot();
    if (!_0x2deaba) return null;
    let _0x1f052a = [
      { segmentId: "", body: _0x2deaba.body },
      ...Object.entries(_0x2deaba.headers ?? {}).map(
        ([_0x3b9468, _0x201c4a]) => ({
          segmentId: _0x3b9468,
          body: _0x201c4a.body,
        }),
      ),
      ...Object.entries(_0x2deaba.footers ?? {}).map(
        ([_0x1b05c7, _0x37b3d1]) => ({
          segmentId: _0x1b05c7,
          body: _0x37b3d1.body,
        }),
      ),
    ];
    for (let { segmentId: _0x3e0a70, body: _0x48aa27 } of _0x1f052a) {
      var _0x5e883e;
      let _0x4cfc9a =
        _0x48aa27 == null || (_0x5e883e = _0x48aa27.customBlocks) == null
          ? undefined
          : _0x5e883e.find((_0xba4f23) => _0xba4f23.blockId === _0x2321b7);
      if (_0x4cfc9a)
        return {
          startOffset: _0x4cfc9a.startIndex,
          endOffset: _0x4cfc9a.startIndex,
          collapsed: true,
          segmentId: _0x3e0a70,
        };
    }
    return null;
  }
};
J = R(
  [L(0, _0x1600be), L(1, _0x664727), L(2, _0x2453bb(B)), L(3, _0x2a4643)],
  J,
);
var _e = "@univerjs-pro/docs-shape",
  ve = "1.0.0-insiders.20260907-70fc579";
const Y = {};
let X = class extends _0xe4d676 {
  constructor(_0x12e739, _0x4b4359, _0x4e5990, _0x24afd0) {
    (super(),
      (this._commandService = _0x12e739),
      (this._shapeHostAdapterRegistry = _0x4b4359),
      (this._docDrawingAdapterService = _0x4e5990),
      this._registerCommands(),
      this.disposeWithMe(this._shapeHostAdapterRegistry["register"](_0x24afd0)),
      this.disposeWithMe(
        this._docDrawingAdapterService["registerAdapter"](_0x24afd0),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x5514dd) => {
          if (_0x5514dd.id !== _0x360808.id) return;
          let { unitId: _0x31e56f, actions: _0x165ad7 } = _0x5514dd.params;
          if (Z(_0x165ad7, "docTransform")) {
            for (let _0x422c25 of Q(_0x165ad7))
              _0x24afd0.refreshConnectedConnectors({
                hostType: _0x35a411.UNIVER_DOC,
                unitId: _0x31e56f,
                subUnitId: _0x31e56f,
                shapeId: _0x422c25,
              });
          }
        }),
      ));
  }
  _registerCommands() {
    [U, V, H, G, q, W].forEach((_0x3bc108) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x3bc108)),
    );
  }
};
X = R(
  [L(0, _0x1600be), L(1, _0x14adf6), L(2, _0x1ab7b1), L(3, _0x2453bb(J))],
  X,
);
function Z(_0xa5293f, _0x435e2f) {
  return (
    Array.isArray(_0xa5293f) &&
    _0xa5293f.some(
      (_0x3e0a1f) =>
        _0x3e0a1f === _0x435e2f ||
        (Array.isArray(_0x3e0a1f) && Z(_0x3e0a1f, _0x435e2f)),
    )
  );
}
function Q(_0x4b4a10, _0x39ce49 = new Set()) {
  return _0x553d22.isNoop(_0x4b4a10) || !Array.isArray(_0x4b4a10)
    ? _0x39ce49
    : _0x4b4a10[0] === "drawings"
      ? (typeof _0x4b4a10[1] == "string"
          ? _0x39ce49.add(_0x4b4a10[1])
          : _0x4b4a10.slice(1).forEach((_0x42e387) => {
              Array.isArray(_0x42e387) &&
                typeof _0x42e387[0] == "string" &&
                _0x39ce49.add(_0x42e387[0]);
            }),
        _0x39ce49)
      : (_0x4b4a10.forEach((_0x36fc6d) => {
          Array.isArray(_0x36fc6d) && Q(_0x36fc6d, _0x39ce49);
        }),
        _0x39ce49);
}
let $ = class extends _0x2984ea {
  constructor(_0x54cfcd = Y, _0x3aeaff, _0x4fdaa4) {
    (super(),
      (this._config = _0x54cfcd),
      (this._injector = _0x3aeaff),
      (this._configService = _0x4fdaa4));
    let { ..._0x4f05bd } = _0x36d79c({}, Y, this._config);
    this._configService["setConfig"]("docs-shape.config", _0x4f05bd);
  }
  onStarting() {
    ([[B], [J], [X]].forEach((_0x3dda99) => this._injector["add"](_0x3dda99)),
      _0x3b4401(this._injector, [[B], [X]]));
  }
};
(F($, "type", _0x35a411.UNIVER_DOC),
  F($, "pluginName", "DOC_SHAPE_PLUGIN"),
  F($, "packageName", _e),
  F($, "version", ve),
  ($ = R(
    [
      _0x3ae8b9(_0x2cbda8, _0x255f13, _0x25b2b2),
      L(1, _0x2453bb(_0x349a01)),
      L(2, _0x317fd4),
    ],
    $,
  )));
export {
  ce as DEFAULT_DOC_SHAPE_HEIGHT,
  N as DEFAULT_DOC_SHAPE_WIDTH,
  z as DOCS_SHAPE_PLUGIN,
  le as DocShapeAnchorPosition,
  J as DocShapeHostAdapter,
  B as DocsShapeService,
  U as InsertDocShapeCommand,
  V as InsertDocShapeMutation,
  $ as UniverDocsShapePlugin,
  W as UpdateDocDrawingMetadataCommand,
  q as UpdateDocShapeDataCommand,
  G as UpdateDocShapeDataMutation,
};
