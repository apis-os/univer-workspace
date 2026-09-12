Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs-drawing"),
  r = require("@univerjs/docs"),
  i = require("@univerjs-pro/license"),
  a = (function (_0x10a555) {
    return (
      (_0x10a555.PARAGRAPH_START = "paragraph-start"),
      (_0x10a555.PARAGRAPH_END = "paragraph-end"),
      (_0x10a555.OFFSET = "offset"),
      _0x10a555
    );
  })({});
function o(_0x49afa7) {
  "@babel/helpers - typeof";
  return (
    (o =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x44a191) {
            return typeof _0x44a191;
          }
        : function (_0x588bad) {
            return _0x588bad &&
              typeof Symbol == "function" &&
              _0x588bad.constructor === Symbol &&
              _0x588bad !== Symbol.prototype
              ? "symbol"
              : typeof _0x588bad;
          }),
    o(_0x49afa7)
  );
}
function s(_0x218ed3, _0x128303) {
  if (o(_0x218ed3) != "object" || !_0x218ed3) return _0x218ed3;
  var _0x13e3e4 = _0x218ed3[Symbol.toPrimitive];
  if (_0x13e3e4 !== undefined) {
    var _0x377ccb = _0x13e3e4.call(_0x218ed3, _0x128303 || "default");
    if (o(_0x377ccb) != "object") return _0x377ccb;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x128303 === "string" ? String : Number)(_0x218ed3);
}
function c(_0x1d3322) {
  var _0x3bc2f4 = s(_0x1d3322, "string");
  return o(_0x3bc2f4) == "symbol" ? _0x3bc2f4 : _0x3bc2f4 + "";
}
function l(_0x540cef, _0x5e5370, _0x417d93) {
  return (
    (_0x5e5370 = c(_0x5e5370)) in _0x540cef
      ? Object.defineProperty(_0x540cef, _0x5e5370, {
          value: _0x417d93,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x540cef[_0x5e5370] = _0x417d93),
    _0x540cef
  );
}
var u = class extends t.Disposable {
  constructor(..._0x2da6ba) {
    (super(..._0x2da6ba),
      l(this, "shapes", new Map()),
      l(this, "_lineIds", new Set()));
  }
  addShape(_0x24f4cd, _0x254e8d, _0x5e66d2) {
    let _0x20b048 = new e["ShapeModel"](_0x24f4cd, _0x254e8d, _0x5e66d2);
    return (
      this.shapes["set"](_0x254e8d, _0x20b048),
      (0, e.isConnectorShape)(_0x24f4cd) && this._lineIds["add"](_0x254e8d),
      _0x20b048
    );
  }
  removeShape(_0x1001b1) {
    let _0x4e6a1a = this.shapes["get"](_0x1001b1);
    _0x4e6a1a &&
      ((0, e.isConnectorShape)(_0x4e6a1a.getShapeType()) &&
        this._lineIds["delete"](_0x1001b1),
      _0x4e6a1a.dispose(),
      this.shapes["delete"](_0x1001b1));
  }
  getShapeType(_0x228b52) {
    var _0x372125;
    return (_0x372125 = this.shapes["get"](_0x228b52)) == null
      ? undefined
      : _0x372125.getShapeType();
  }
  getShapeData(_0x25c6e5) {
    var _0x58cfa7;
    return (_0x58cfa7 = this.shapes["get"](_0x25c6e5)) == null
      ? undefined
      : _0x58cfa7.getShapeData();
  }
  hasShape(_0xda716e) {
    return this.shapes["has"](_0xda716e);
  }
  getBasicShapeRelation(_0x543a89) {
    let _0x4f4a21 = [];
    for (let _0x37f859 of this._lineIds) {
      var _0x59a283, _0x4bb673;
      let _0xc91a4a = this.shapes["get"](_0x37f859),
        _0xa47a24 =
          _0xc91a4a == null ? undefined : _0xc91a4a.getShapeRelation();
      _0xa47a24 &&
        (((_0x59a283 = _0xa47a24.from) == null
          ? undefined
          : _0x59a283.shapeId) === _0x543a89 &&
          _0x4f4a21.push({
            ..._0xa47a24.from,
            lineShapeId: _0x37f859,
            isFrom: true,
          }),
        ((_0x4bb673 = _0xa47a24.to) == null ? undefined : _0x4bb673.shapeId) ===
          _0x543a89 &&
          _0x4f4a21.push({
            ..._0xa47a24.to,
            lineShapeId: _0x37f859,
            isFrom: false,
          }));
    }
    return _0x4f4a21;
  }
  getLineShapeRelation(_0x1a66f7) {
    var _0x56f0f6;
    return (_0x56f0f6 = this.shapes["get"](_0x1a66f7)) == null
      ? undefined
      : _0x56f0f6.getShapeRelation();
  }
  toJSON() {
    return Array.from(this.shapes["values"]()).map((_0x522b8b) =>
      _0x522b8b.toJSON(),
    );
  }
  fromJSON(_0x46343a) {
    for (let _0x55bf5f of _0x46343a) {
      let { id: _0x136ba2, shapeType: _0x2fe897 } = _0x55bf5f;
      this.addShape(_0x2fe897, _0x136ba2, _0x55bf5f.shapeData);
    }
  }
  dispose() {
    this._disposed ||
      (this.shapes["forEach"]((_0x3e91d3) => _0x3e91d3.dispose()),
      this.shapes["clear"](),
      this._lineIds["clear"](),
      super.dispose());
  }
};
function d(_0x4c1605, _0x112f87) {
  return function (_0x3747ab, _0x737770) {
    _0x112f87(_0x3747ab, _0x737770, _0x4c1605);
  };
}
function f(_0x43c758, _0x18cbae, _0xaa94f1, _0x5cf5c2) {
  var _0xa6a0e6 = arguments.length,
    _0x26eabb =
      _0xa6a0e6 < 3
        ? _0x18cbae
        : _0x5cf5c2 === null
          ? (_0x5cf5c2 = Object.getOwnPropertyDescriptor(_0x18cbae, _0xaa94f1))
          : _0x5cf5c2,
    _0x1f2af0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x26eabb = Reflect.decorate(_0x43c758, _0x18cbae, _0xaa94f1, _0x5cf5c2);
  else {
    for (var _0x23a974 = _0x43c758.length - 1; _0x23a974 >= 0; _0x23a974--)
      (_0x1f2af0 = _0x43c758[_0x23a974]) &&
        (_0x26eabb =
          (_0xa6a0e6 < 3
            ? _0x1f2af0(_0x26eabb)
            : _0xa6a0e6 > 3
              ? _0x1f2af0(_0x18cbae, _0xaa94f1, _0x26eabb)
              : _0x1f2af0(_0x18cbae, _0xaa94f1)) || _0x26eabb);
  }
  return (
    _0xa6a0e6 > 3 &&
      _0x26eabb &&
      Object.defineProperty(_0x18cbae, _0xaa94f1, _0x26eabb),
    _0x26eabb
  );
}
const p = "DOC_SHAPE_PLUGIN";
let m = class extends t.Disposable {
  constructor(_0x7e42d6) {
    (super(),
      (this._resourcesManagerService = _0x7e42d6),
      l(this, "_shapeModelManagerMap", new Map()),
      this._initSnapshot());
  }
  _ensureShapeModelManager(_0x4cabab) {
    let _0x1921e1 = this._shapeModelManagerMap["get"](_0x4cabab);
    return (
      _0x1921e1 ||
        ((_0x1921e1 = new u()),
        this._shapeModelManagerMap["set"](_0x4cabab, _0x1921e1)),
      _0x1921e1
    );
  }
  insertShape(_0x195b17, _0x2641fa, _0x2f865c, _0x5e9144) {
    this._ensureShapeModelManager(_0x195b17).addShape(
      _0x2641fa,
      _0x2f865c,
      _0x5e9144,
    );
  }
  removeShape(_0x568d88, _0xedfed5) {
    this._ensureShapeModelManager(_0x568d88).removeShape(_0xedfed5);
  }
  getShapeType(_0x5cd97c, _0x27a61b, _0x3e4c43) {
    return this._ensureShapeModelManager(_0x5cd97c).getShapeType(
      _0x3e4c43 ?? _0x27a61b,
    );
  }
  getShapeData(_0x48916b, _0x49179d, _0x1d2b76) {
    return this._ensureShapeModelManager(_0x48916b).getShapeData(
      _0x1d2b76 ?? _0x49179d,
    );
  }
  hasShape(_0x3d1dcb, _0x377bfa) {
    return this._ensureShapeModelManager(_0x3d1dcb).hasShape(_0x377bfa);
  }
  getShapeTypeById(_0x1f7f92, _0xf0d95d, _0x21db83) {
    return this.getShapeType(_0x1f7f92, _0x21db83 ?? _0xf0d95d);
  }
  getShapeDataById(_0x3453fb, _0x5cca7d, _0xc9ba19) {
    return this.getShapeData(_0x3453fb, _0xc9ba19 ?? _0x5cca7d);
  }
  getShapeModel(_0x3de7de, _0x33ec0a, _0x158bf6) {
    return this._ensureShapeModelManager(_0x3de7de).shapes["get"](
      _0x158bf6 ?? _0x33ec0a,
    );
  }
  getBasicShapeRelation(_0x168253, _0x2a6968) {
    return this._ensureShapeModelManager(_0x168253).getBasicShapeRelation(
      _0x2a6968,
    );
  }
  getLineShapeRelation(_0x5c27dc, _0x1013d1) {
    return this._ensureShapeModelManager(_0x5c27dc).getLineShapeRelation(
      _0x1013d1,
    );
  }
  _serializeShapeForUnit(_0x56a442) {
    var _0x1c3de8;
    return JSON.stringify(
      ((_0x1c3de8 = this._shapeModelManagerMap["get"](_0x56a442)) == null
        ? undefined
        : _0x1c3de8.toJSON()) ?? [],
    );
  }
  _deserializeShapeForUnit(_0x2fd33e, _0x15ae88) {
    this._ensureShapeModelManager(_0x2fd33e).fromJSON(_0x15ae88);
  }
  toJSON() {
    let _0xa42cf2 = {};
    return (
      this._shapeModelManagerMap["forEach"]((_0xe49e98, _0x4326ea) => {
        _0xa42cf2[_0x4326ea] = _0xe49e98.toJSON();
      }),
      _0xa42cf2
    );
  }
  fromJSON(_0x1151ef) {
    Object.keys(_0x1151ef).forEach((_0x4a4048) => {
      this._ensureShapeModelManager(_0x4a4048).fromJSON(_0x1151ef[_0x4a4048]);
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: p,
      businesses: [t.UniverInstanceType["UNIVER_DOC"]],
      toJson: (_0x3d2890) => this._serializeShapeForUnit(_0x3d2890),
      parseJson: (_0xcc04bc) => JSON.parse(_0xcc04bc),
      onLoad: (_0x4308fb, _0x130d96) =>
        this._deserializeShapeForUnit(_0x4308fb, _0x130d96 ?? []),
      onUnLoad: (_0x2ba374) => {
        var _0x30cfd0;
        ((_0x30cfd0 = this._shapeModelManagerMap["get"](_0x2ba374)) == null ||
          _0x30cfd0.dispose(),
          this._shapeModelManagerMap["delete"](_0x2ba374));
      },
    });
  }
  dispose() {
    (this._shapeModelManagerMap["forEach"]((_0x41e3dd) => _0x41e3dd.dispose()),
      this._shapeModelManagerMap["clear"](),
      super.dispose());
  }
};
m = f([d(0, t.IResourceManagerService)], m);
const h = {
    id: "doc.mutation.insert-shape",
    type: t.CommandType["MUTATION"],
    handler: (_0x2e8a5a, _0x2147b1) => {
      let {
        unitId: _0x5bffa3,
        shapeType: _0x2f992b,
        shapeId: _0xc974bf,
        shapeData: _0x272a45,
      } = _0x2147b1;
      return (
        _0x2e8a5a
          .get(m)
          .insertShape(_0x5bffa3, _0x2f992b, _0xc974bf, _0x272a45),
        true
      );
    },
  },
  g = {
    id: "doc.mutation.remove-shape",
    type: t.CommandType["MUTATION"],
    handler: (_0x5a2655, _0x15a196) => {
      let { unitId: _0x42e5db, shapeId: _0x44232c } = _0x15a196;
      return (_0x5a2655.get(m).removeShape(_0x42e5db, _0x44232c), true);
    },
  };
function _(_0x126ab3, _0x2b721e) {
  var _0x13db28;
  let _0x49211e = _0x2b721e.segmentId ?? "",
    _0x50ac9a =
      (_0x13db28 = _0x126ab3.getSelfOrHeaderFooterModel(_0x49211e)) == null
        ? undefined
        : _0x13db28.getBody();
  if (!_0x50ac9a) return null;
  let _0x17a439 = (_0x50ac9a.paragraphs ?? []).filter(
    (_0x40b700) => _0x40b700.paragraphId === _0x2b721e.paragraphId,
  );
  if (_0x17a439.length !== 1) return null;
  let _0x3865d3 = _0x17a439[0],
    _0x289df3 = (0, t.getParagraphContentStartOffset)(_0x50ac9a, _0x3865d3),
    _0x21a978 = _0x3865d3.startIndex,
    _0x457d4f = _0x21a978;
  if (_0x2b721e.position === "offset") {
    let { offset: _0x284428 } = _0x2b721e;
    if (
      !Number.isInteger(_0x284428) ||
      _0x284428 < 0 ||
      _0x284428 > _0x21a978 - _0x289df3
    )
      return null;
    _0x457d4f = _0x289df3 + _0x284428;
  } else {
    if (_0x2b721e.position === "paragraph-start") _0x457d4f = _0x289df3;
    else {
      if (
        _0x2b721e.position !== undefined &&
        _0x2b721e.position !== "paragraph-end"
      )
        return null;
    }
  }
  return {
    startOffset: _0x457d4f,
    endOffset: _0x457d4f,
    collapsed: true,
    segmentId: _0x49211e,
  };
}
function v(_0x101b82, _0xf54af9) {
  let _0x42db83 = n.WRAPPING_STYLE_TO_LAYOUT_TYPE[_0xf54af9.wrappingStyle];
  if (
    _0x42db83 === undefined ||
    (_0xf54af9.wrappingStyle === n.TextWrappingStyle["INLINE"] &&
      _0xf54af9.position !== undefined)
  )
    return null;
  let _0x3abeb7 = _(_0x101b82, _0xf54af9.anchor);
  return _0x3abeb7 ? { layoutType: _0x42db83, textRange: _0x3abeb7 } : null;
}
function y(_0x25d85b, _0x353f46, _0x350e68) {
  var _0x27e866, _0x287973, _0x1d53f3, _0x217ad4, _0x38c89a;
  let { placement: _0x292249 } = _0x25d85b,
    _0x34cec2 =
      ((_0x27e866 = _0x25d85b.transform) == null
        ? undefined
        : _0x27e866.width) ?? 160,
    _0x274795 =
      ((_0x287973 = _0x25d85b.transform) == null
        ? undefined
        : _0x287973.height) ?? 96,
    _0x39534f =
      ((_0x1d53f3 = _0x25d85b.transform) == null
        ? undefined
        : _0x1d53f3.rotation) ?? 0,
    _0x15fb06 = {
      ...(0, r.buildDocTransform)(
        _0x34cec2,
        _0x274795,
        _0x292249.wrappingStyle === n.TextWrappingStyle["INLINE"]
          ? undefined
          : {
              left:
                (_0x217ad4 = _0x292249.position) == null
                  ? undefined
                  : _0x217ad4.horizontalOffset,
              top:
                (_0x38c89a = _0x292249.position) == null
                  ? undefined
                  : _0x38c89a.verticalOffset,
            },
      ),
      angle: _0x39534f,
    },
    _0x3b44e2 = {
      ...(0, r.docDrawingPositionToTransform)(_0x15fb06),
      angle: _0x39534f,
    },
    _0x2f4c47 = {};
  return (
    (0, e.isConnectorShape)(_0x25d85b.shapeType) &&
      ((_0x2f4c47.fill = false),
      (_0x2f4c47.rotateEnabled = false),
      (_0x2f4c47.resizeEnabled = false),
      (_0x2f4c47.borderEnabled = false),
      (_0x3b44e2.rotateEnabled = false),
      (_0x3b44e2.resizeEnabled = false),
      (_0x3b44e2.borderEnabled = false)),
    {
      unitId: _0x25d85b.unitId,
      subUnitId: _0x25d85b.unitId,
      drawingId: _0x353f46,
      drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
      name: _0x25d85b.name,
      transform: _0x3b44e2,
      docTransform: _0x15fb06,
      data: _0x2f4c47,
      behindDoc:
        _0x292249.wrappingStyle === n.TextWrappingStyle["BEHIND_TEXT"]
          ? t.BooleanNumber["TRUE"]
          : t.BooleanNumber["FALSE"],
      title: _0x25d85b.name ?? "",
      description: _0x25d85b.description ?? "",
      layoutType: _0x350e68,
      wrapText: t.WrapTextType["BOTH_SIDES"],
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0,
      allowTransform: true,
      hidden: _0x25d85b.visible === false,
      selectable: _0x25d85b.selectable ?? true,
    }
  );
}
const b = {
    type: t.CommandType["COMMAND"],
    id: "doc.command.insert-shape",
    handler: (_0x135a1a, _0x2abab7) => {
      var _0xdfc21a;
      let _0x49d15a = _0x135a1a
        .get(t.IUniverInstanceService)
        .getUnit(_0x2abab7.unitId, t.UniverInstanceType["UNIVER_DOC"]);
      if (!_0x49d15a) return false;
      let _0x1d42d2 =
        (_0xdfc21a = _0x2abab7.placement) != null && _0xdfc21a.anchor
          ? v(_0x49d15a, _0x2abab7.placement)
          : null;
      if (!_0x1d42d2) return false;
      let _0x137262 = _0x135a1a.get(t.ICommandService),
        _0x2e4cb6 = _0x135a1a.get(t.IUndoRedoService),
        _0x59cb26 = _0x2abab7.shapeId ?? (0, t.generateRandomId)(),
        _0x49ee58 = y(_0x2abab7, _0x59cb26, _0x1d42d2.layoutType),
        _0x555c1c =
          _0x2abab7.shapeData ??
          (0, e.createDefaultInsertedShapeData)(_0x2abab7.shapeType),
        _0x5ed81d = {
          unitId: _0x2abab7.unitId,
          shapeId: _0x59cb26,
          shapeType: _0x2abab7.shapeType,
          shapeData: _0x555c1c,
        },
        _0x13e2bc = "doc-shape-insert:" + _0x2abab7.unitId + ":" + _0x59cb26,
        _0x30d271 = _0x2e4cb6.__tempBatchingUndoRedo(_0x2abab7.unitId);
      if (!_0x137262.syncExecuteCommand(h.id, _0x5ed81d))
        return (_0x30d271 == null || _0x30d271.dispose(), false);
      _0x2e4cb6.pushUndoRedo({
        id: _0x13e2bc,
        unitID: _0x2abab7.unitId,
        redoMutations: [{ id: h.id, params: _0x5ed81d }],
        undoMutations: [
          {
            id: g.id,
            params: { unitId: _0x2abab7.unitId, shapeId: _0x59cb26 },
          },
        ],
      });
      let _0x215e48 = _0x137262.syncExecuteCommand(
        n.InsertDocDrawingCommand["id"],
        {
          unitId: _0x2abab7.unitId,
          drawings: [_0x49ee58],
          textRange: _0x1d42d2.textRange,
        },
      );
      return (
        _0x30d271 == null || _0x30d271.dispose(),
        _0x215e48
          ? true
          : (_0x2e4cb6.rollback(_0x13e2bc, _0x2abab7.unitId), false)
      );
    },
  },
  x = ["name", "title", "description", "hidden", "visible", "selectable"],
  S = {
    id: "doc.command.update-drawing-metadata",
    type: t.CommandType["COMMAND"],
    handler: (_0x2e3bb0, _0x224253) => {
      if (!_0x224253 || _0x224253.patches["length"] === 0) return false;
      let _0x1f1555 = _0x2e3bb0.get(t.ICommandService),
        _0x2a60ce = _0x2e3bb0
          .get(t.IUniverInstanceService)
          .getUnit(_0x224253.unitId, t.UniverInstanceType["UNIVER_DOC"]),
        _0x1fcb05 =
          _0x2a60ce == null ? undefined : _0x2a60ce.getSnapshot().drawings;
      if (!_0x2a60ce || !_0x1fcb05) return false;
      let _0x28edaf = t.JSONX["getInstance"](),
        _0x65559e = [];
      if (
        (_0x224253.patches["forEach"]((_0xacaef2) => {
          let _0x4ddd3a = _0x1fcb05[_0xacaef2.drawingId];
          _0x4ddd3a &&
            x.forEach((_0x57c2db) => {
              if (!(_0x57c2db in _0xacaef2)) return;
              let _0x723efb = _0xacaef2[_0x57c2db],
                _0x237538 = _0x4ddd3a[_0x57c2db];
              if (_0x237538 === _0x723efb) return;
              let _0x342dab = ["drawings", _0xacaef2.drawingId, _0x57c2db];
              if (_0x723efb === undefined) {
                _0x237538 !== undefined &&
                  _0x65559e.push(_0x28edaf.removeOp(_0x342dab, _0x237538));
                return;
              }
              _0x65559e.push(
                _0x237538 === undefined
                  ? _0x28edaf.insertOp(_0x342dab, _0x723efb)
                  : _0x28edaf.replaceOp(_0x342dab, _0x237538, _0x723efb),
              );
            });
        }),
        !_0x65559e.length)
      )
        return false;
      let _0x186c5d = {
        id: r.RichTextEditingMutation["id"],
        params: {
          unitId: _0x224253.unitId,
          actions: _0x65559e.reduce(
            (_0x22d928, _0x531ef3) => t.JSONX["compose"](_0x22d928, _0x531ef3),
            null,
          ),
          textRanges: null,
        },
      };
      return !!_0x1f1555.syncExecuteCommand(_0x186c5d.id, _0x186c5d.params);
    },
  },
  C = {
    id: "doc.mutation.update-shape-data",
    type: t.CommandType["MUTATION"],
    handler: (_0x1297f9, _0x2df724) => {
      var _0x1c30f6;
      let {
          unitId: _0xb8785e,
          shapeType: _0x22514a,
          shapeId: _0x2eb3ab,
          shapeData: _0x38dfc4,
          replaceShapeData: _0x4309db,
          formulaLastValueGuard: _0x244c8b,
        } = _0x2df724,
        _0x9d996c = _0x1297f9.get(m).getShapeModel(_0xb8785e, _0x2eb3ab);
      return _0x9d996c
        ? (0, e.canApplyShapeFormulaLastValue)(
            _0x1297f9,
            {
              hostType: t.UniverInstanceType["UNIVER_DOC"],
              unitId: _0xb8785e,
              subUnitId: _0xb8785e,
              shapeId: _0x2eb3ab,
            },
            (_0x1c30f6 = _0x9d996c.getShapeData().formulaBinding) == null
              ? undefined
              : _0x1c30f6.formula,
            _0x244c8b,
          )
          ? (_0x22514a !== undefined && _0x9d996c.setShapeType(_0x22514a),
            _0x38dfc4 && _0x9d996c.setShapeData(_0x38dfc4, !_0x4309db),
            true)
          : true
        : false;
    },
  };
function w(_0x1ee06d, _0x4b999f) {
  let _0x329c23 = {};
  for (let _0x1a9440 of Object.keys(_0x4b999f)) {
    let _0x126e0a = _0x4b999f[_0x1a9440],
      _0x122e3b = _0x1ee06d[_0x1a9440];
    _0x126e0a !== undefined &&
      (typeof _0x126e0a == "object" &&
      _0x126e0a &&
      !Array.isArray(_0x126e0a) &&
      typeof _0x122e3b == "object" &&
      _0x122e3b &&
      !Array.isArray(_0x122e3b)
        ? (_0x329c23[_0x1a9440] = w(_0x122e3b, _0x126e0a))
        : (_0x329c23[_0x1a9440] = _0x122e3b));
  }
  return _0x329c23;
}
const T = {
  type: t.CommandType["COMMAND"],
  id: "doc.command.update-shape-data",
  handler: (_0x1ef8ab, _0x256dab) => {
    let _0x4e5a2e = _0x1ef8ab.get(m),
      {
        unitId: _0x264f4a,
        shapeType: _0x91c642,
        shapeId: _0x30f6a5,
        shapeData: _0xe2f991,
        replaceShapeData: _0x3dfde9,
        oldShapeJSON: _0x31e680,
      } = _0x256dab;
    if (!_0x4e5a2e.getShapeModel(_0x264f4a, _0x30f6a5)) return false;
    let _0x3496a7 = _0x1ef8ab.get(t.ICommandService),
      _0x1751dd = _0x1ef8ab.get(t.IUndoRedoService),
      { oldShapeType: _0x44624b, oldShapeData: _0x55cf20 = {} } = _0x31e680,
      _0x32a979 = _0x3dfde9 ? _0x55cf20 : w(_0x55cf20, _0xe2f991 || {}),
      _0x2ad4e9 = {
        id: C.id,
        params: {
          unitId: _0x264f4a,
          shapeId: _0x30f6a5,
          shapeType: _0x91c642,
          shapeData: _0xe2f991,
          replaceShapeData: _0x3dfde9,
        },
      },
      _0x2e9436 = {
        id: C.id,
        params: {
          unitId: _0x264f4a,
          shapeId: _0x30f6a5,
          shapeType: _0x44624b,
          shapeData: _0x32a979,
          replaceShapeData: _0x3dfde9,
        },
      };
    return _0x3496a7.syncExecuteCommand(_0x2ad4e9.id, _0x2ad4e9.params)
      ? (_0x1751dd.pushUndoRedo({
          unitID: _0x264f4a,
          undoMutations: [_0x2e9436],
          redoMutations: [_0x2ad4e9],
        }),
        true)
      : false;
  },
};
function E(_0x2ef445) {
  let { docTransform: _0x4ed029, transform: _0x16d3c2 } = _0x2ef445;
  return {
    left:
      _0x4ed029.positionH["posOffset"] ??
      (_0x16d3c2 == null ? undefined : _0x16d3c2.left) ??
      0,
    top:
      _0x4ed029.positionV["posOffset"] ??
      (_0x16d3c2 == null ? undefined : _0x16d3c2.top) ??
      0,
    width: _0x4ed029.size["width"] ?? 160,
    height: _0x4ed029.size["height"] ?? 96,
    rotation: _0x4ed029.angle ?? 0,
    flipX:
      _0x4ed029.flipX ??
      (_0x16d3c2 == null ? undefined : _0x16d3c2.flipX) ??
      false,
    flipY:
      _0x4ed029.flipY ??
      (_0x16d3c2 == null ? undefined : _0x16d3c2.flipY) ??
      false,
  };
}
let D = class {
  constructor(_0x573196, _0x49e93f, _0x46c698, _0x588d3d) {
    ((this._commandService = _0x573196),
      (this._univerInstanceService = _0x49e93f),
      (this._shapeService = _0x46c698),
      (this._connectorShapeHostAdapter = _0x588d3d),
      l(this, "hostType", t.UniverInstanceType["UNIVER_DOC"]));
  }
  get shapeChanged$() {
    return {
      subscribe: (_0x24c413) => {
        let _0x50bbe8 = this._commandService["onCommandExecuted"](
          (_0x2c36af) => {
            (_0x2c36af.id === h.id ||
              _0x2c36af.id === g.id ||
              _0x2c36af.id === C.id) &&
              _0x24c413({ unitId: _0x2c36af.params["unitId"] });
          },
        );
        return { unsubscribe: () => _0x50bbe8.dispose() };
      },
    };
  }
  getShape(_0x2370cf) {
    let _0x193eec = this._getDrawing(_0x2370cf),
      _0x1e0bc0 = this._shapeService["getShapeType"](
        _0x2370cf.unitId,
        _0x2370cf.shapeId,
      );
    return !_0x193eec || _0x1e0bc0 === undefined
      ? null
      : {
          ..._0x2370cf,
          shapeType: _0x1e0bc0,
          shapeData: t.Tools["deepClone"](
            this._shapeService["getShapeData"](
              _0x2370cf.unitId,
              _0x2370cf.shapeId,
            ) ?? {},
          ),
          name: _0x193eec.name ?? (_0x193eec.title || undefined),
          description: _0x193eec.description,
          visible: _0x193eec.hidden !== true,
          selectable: _0x193eec.selectable !== false,
          transform: E(_0x193eec),
        };
  }
  listShapes(_0x1b7b71) {
    let _0x129195 = this._getDocument(_0x1b7b71.unitId);
    if (!_0x129195) return [];
    let _0x442039 = _0x129195.getDrawings() ?? {};
    return (_0x129195.getDrawingsOrder() ?? Object.keys(_0x442039))
      .filter((_0x56ddb5) => {
        var _0x481c85;
        return (
          ((_0x481c85 = _0x442039[_0x56ddb5]) == null
            ? undefined
            : _0x481c85.drawingType) === t.DrawingTypeEnum["DRAWING_SHAPE"]
        );
      })
      .map((_0x3572d2) => this.getShape({ ..._0x1b7b71, shapeId: _0x3572d2 }))
      .filter((_0x7014e6) => !!_0x7014e6);
  }
  listShapesInUnit(_0x57146d) {
    return this.listShapes({
      hostType: this.hostType,
      unitId: _0x57146d,
      subUnitId: _0x57146d,
    });
  }
  createShape(_0x1c360b, _0x115d50) {
    var _0x4f4c13, _0x3e7f3e, _0x4e1eb3;
    if (!_0x115d50.placement) return null;
    let _0x35dd0d = (0, t.generateRandomId)(),
      _0x4b2284 =
        _0x115d50.placement["wrappingStyle"] === n.TextWrappingStyle["INLINE"]
          ? undefined
          : _0x115d50.placement["position"],
      _0x46e655 = {
        left: (_0x4b2284 == null ? undefined : _0x4b2284.horizontalOffset) ?? 0,
        top: (_0x4b2284 == null ? undefined : _0x4b2284.verticalOffset) ?? 0,
        width:
          ((_0x4f4c13 = _0x115d50.transform) == null
            ? undefined
            : _0x4f4c13.width) ?? 160,
        height:
          ((_0x3e7f3e = _0x115d50.transform) == null
            ? undefined
            : _0x3e7f3e.height) ?? 96,
        rotation:
          ((_0x4e1eb3 = _0x115d50.transform) == null
            ? undefined
            : _0x4e1eb3.rotation) ?? 0,
        flipX: false,
        flipY: false,
      },
      _0x4d90e4 = t.Tools["deepClone"](
        _0x115d50.shapeData ??
          (0, e.createDefaultInsertedShapeData)(_0x115d50.shapeType),
      );
    return this._commandService["syncExecuteCommand"](b.id, {
      unitId: _0x1c360b.unitId,
      shapeId: _0x35dd0d,
      ..._0x115d50,
      shapeData: _0x4d90e4,
      transform: {
        width: _0x46e655.width,
        height: _0x46e655.height,
        rotation: _0x46e655.rotation,
      },
      visible: _0x115d50.visible ?? true,
      selectable: _0x115d50.selectable ?? true,
    })
      ? {
          ..._0x1c360b,
          shapeId: _0x35dd0d,
          shapeType: _0x115d50.shapeType,
          shapeData: _0x4d90e4,
          name: _0x115d50.name,
          description: _0x115d50.description,
          visible: _0x115d50.visible ?? true,
          selectable: _0x115d50.selectable ?? true,
          transform: _0x46e655,
        }
      : null;
  }
  updateShape(_0x337bc6, _0xf71cee) {
    let _0x2d01e6 = this.getShape(_0x337bc6),
      _0x517c39 = this._getDrawing(_0x337bc6);
    if (
      !_0x2d01e6 ||
      !_0x517c39 ||
      !this._supportsTransformUpdate(_0x2d01e6, _0xf71cee)
    )
      return false;
    if (
      _0xf71cee.shapeType !== undefined ||
      _0xf71cee.shapeData !== undefined
    ) {
      var _0x4af52b;
      if (
        !this._commandService["syncExecuteCommand"](T.id, {
          unitId: _0x337bc6.unitId,
          shapeId: _0x337bc6.shapeId,
          shapeType:
            _0xf71cee.shapeType ??
            ((_0x4af52b = _0xf71cee.shapeData) == null
              ? undefined
              : _0x4af52b.shapeType),
          shapeData: _0xf71cee.shapeData,
          replaceShapeData: true,
          oldShapeJSON: {
            oldShapeData: _0x2d01e6.shapeData,
            oldShapeType: _0x2d01e6.shapeType,
          },
        })
      )
        return false;
    }
    let _0x4a9098 = this._buildTransformUpdates(
      _0x337bc6,
      _0x517c39,
      _0x2d01e6,
      _0xf71cee,
    );
    if (
      _0x4a9098.length > 0 &&
      !this._commandService["syncExecuteCommand"](
        n.UpdateDrawingDocTransformCommand["id"],
        {
          unitId: _0x337bc6.unitId,
          subUnitId: _0x337bc6.subUnitId,
          drawings: _0x4a9098,
        },
      )
    )
      return false;
    let _0x3fbb93 = "name" in _0xf71cee,
      _0x5e7a93 = "description" in _0xf71cee;
    return (
      (_0xf71cee.visible === undefined &&
        _0xf71cee.selectable === undefined &&
        !_0x3fbb93 &&
        !_0x5e7a93) ||
      this._commandService["syncExecuteCommand"](S.id, {
        unitId: _0x337bc6.unitId,
        patches: [
          {
            drawingId: _0x337bc6.shapeId,
            ...(_0xf71cee.visible === undefined
              ? null
              : { hidden: !_0xf71cee.visible }),
            ...(_0xf71cee.selectable === undefined
              ? null
              : { selectable: _0xf71cee.selectable }),
            ...(_0x3fbb93
              ? { name: _0xf71cee.name, title: _0xf71cee.name }
              : null),
            ...(_0x5e7a93 ? { description: _0xf71cee.description } : null),
          },
        ],
      })
    );
  }
  createFormulaLastValueMutation(_0x42e5b2, _0x1f6287, _0x39d6c1) {
    let _0x595582 = this.getShape(_0x42e5b2),
      _0x2e7293 =
        _0x595582 == null ? undefined : _0x595582.shapeData["formulaBinding"];
    return !_0x595582 || !_0x2e7293
      ? null
      : {
          id: C.id,
          params: {
            unitId: _0x42e5b2.unitId,
            shapeId: _0x42e5b2.shapeId,
            shapeData: {
              ..._0x595582.shapeData,
              formulaBinding: {
                ..._0x2e7293,
                lastValue: t.Tools["deepClone"](_0x39d6c1),
              },
            },
            replaceShapeData: true,
            formulaLastValueGuard: _0x1f6287,
          },
        };
  }
  removeShape(_0x3092ce) {
    let _0x2debb6 = this._getDrawing(_0x3092ce),
      _0x1f4983 = this._getTextRange(_0x3092ce.unitId, _0x3092ce.shapeId);
    return !_0x2debb6 || !_0x1f4983
      ? false
      : this._commandService["syncExecuteCommand"](
          n.RemoveDocDrawingCommand["id"],
          {
            unitId: _0x3092ce.unitId,
            drawings: [
              {
                unitId: _0x3092ce.unitId,
                subUnitId: _0x3092ce.subUnitId,
                drawingId: _0x3092ce.shapeId,
                drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
              },
            ],
            textRange: _0x1f4983,
          },
        );
  }
  bringToFront(_0x473278) {
    return this._arrange(_0x473278, t.ArrangeTypeEnum["front"]);
  }
  bringForward(_0x187b66) {
    return this._arrange(_0x187b66, t.ArrangeTypeEnum["forward"]);
  }
  sendBackward(_0x5b956c) {
    return this._arrange(_0x5b956c, t.ArrangeTypeEnum["backward"]);
  }
  sendToBack(_0x306e66) {
    return this._arrange(_0x306e66, t.ArrangeTypeEnum["back"]);
  }
  setZOrder(_0x495efb, _0x3cd27e) {
    return this._commandService["syncExecuteCommand"](
      n.SetDocDrawingArrangeCommand["id"],
      {
        unitId: _0x495efb.unitId,
        subUnitId: _0x495efb.subUnitId,
        drawingIds: [_0x495efb.shapeId],
        zOrder: _0x3cd27e,
      },
    );
  }
  refreshConnectedConnectors(_0x5df78c) {
    let _0x5e79ea = this._shapeService["getShapeType"](
      _0x5df78c.unitId,
      _0x5df78c.shapeId,
    );
    if (_0x5e79ea === undefined) return false;
    if ((0, e.isConnectorShape)(_0x5e79ea)) return true;
    let _0x19235b = new Set(
        this._shapeService["getBasicShapeRelation"](
          _0x5df78c.unitId,
          _0x5df78c.shapeId,
        ).map(({ lineShapeId: _0x1fdb5c }) => _0x1fdb5c),
      ),
      _0x4cca02 = true;
    for (let _0x1eb4dd of _0x19235b) {
      let _0x218da8 = this._shapeService["getLineShapeRelation"](
          _0x5df78c.unitId,
          _0x1eb4dd,
        ),
        _0x404281 = { ..._0x5df78c, shapeId: _0x1eb4dd };
      (_0x218da8 != null &&
        _0x218da8.from &&
        (_0x4cca02 =
          this._connectorShapeHostAdapter["bindStart"](
            _0x404281,
            _0x218da8.from,
          ) && _0x4cca02),
        _0x218da8 != null &&
          _0x218da8.to &&
          (_0x4cca02 =
            this._connectorShapeHostAdapter["bindEnd"](
              _0x404281,
              _0x218da8.to,
            ) && _0x4cca02));
    }
    return _0x4cca02;
  }
  getRemoveDrawingMutationInfos(_0x2ea898) {
    let { drawing: _0x2057ff, unitId: _0x12b570 } = _0x2ea898;
    if (_0x2057ff.drawingType !== t.DrawingTypeEnum["DRAWING_SHAPE"])
      return null;
    let _0x1f6319 = this._shapeService["getShapeType"](
      _0x12b570,
      _0x2057ff.drawingId,
    );
    if (_0x1f6319 === undefined) return null;
    let _0x2a5e87 = this._shapeService["getShapeData"](
      _0x12b570,
      _0x2057ff.drawingId,
    );
    return {
      redoMutations: [
        {
          id: g.id,
          params: { unitId: _0x12b570, shapeId: _0x2057ff.drawingId },
        },
      ],
      undoMutations: [
        {
          id: h.id,
          params: {
            unitId: _0x12b570,
            shapeId: _0x2057ff.drawingId,
            shapeType: _0x1f6319,
            shapeData: _0x2a5e87,
          },
        },
      ],
    };
  }
  _getDocument(_0x5df0e5) {
    return (
      this._univerInstanceService["getUnit"](
        _0x5df0e5,
        t.UniverInstanceType["UNIVER_DOC"],
      ) ?? null
    );
  }
  _getDrawing(_0x35c453) {
    var _0x391345;
    let _0x4cbbd7 =
      (_0x391345 = this._getDocument(_0x35c453.unitId)) == null ||
      (_0x391345 = _0x391345.getDrawings()) == null
        ? undefined
        : _0x391345[_0x35c453.shapeId];
    return (_0x4cbbd7 == null ? undefined : _0x4cbbd7.drawingType) ===
      t.DrawingTypeEnum["DRAWING_SHAPE"]
      ? _0x4cbbd7
      : null;
  }
  _supportsTransformUpdate(_0x2b1ba4, _0x608768) {
    var _0x140b7b, _0x5397b4;
    return (0, e.isConnectorShape)(_0x2b1ba4.shapeType)
      ? true
      : (((_0x140b7b = _0x608768.transform) == null
          ? undefined
          : _0x140b7b.flipX) === undefined ||
          _0x608768.transform["flipX"] === _0x2b1ba4.transform["flipX"]) &&
          (((_0x5397b4 = _0x608768.transform) == null
            ? undefined
            : _0x5397b4.flipY) === undefined ||
            _0x608768.transform["flipY"] === _0x2b1ba4.transform["flipY"]);
  }
  _buildTransformUpdates(_0x3f3eab, _0x553500, _0x2d8df3, _0x2fd1a6) {
    let _0x149f64 = _0x2fd1a6.transform;
    if (!_0x149f64) return [];
    let _0x2ca030 = [];
    return (
      (_0x149f64.width !== undefined || _0x149f64.height !== undefined) &&
        _0x2ca030.push({
          drawingId: _0x3f3eab.shapeId,
          key: "size",
          value: {
            width: _0x149f64.width ?? _0x2d8df3.transform["width"],
            height: _0x149f64.height ?? _0x2d8df3.transform["height"],
          },
        }),
      _0x149f64.rotation !== undefined &&
        _0x2ca030.push({
          drawingId: _0x3f3eab.shapeId,
          key: "angle",
          value: _0x149f64.rotation,
        }),
      _0x149f64.left !== undefined &&
        _0x2ca030.push({
          drawingId: _0x3f3eab.shapeId,
          key: "positionH",
          value: {
            ..._0x553500.docTransform["positionH"],
            posOffset: _0x149f64.left,
          },
        }),
      _0x149f64.top !== undefined &&
        _0x2ca030.push({
          drawingId: _0x3f3eab.shapeId,
          key: "positionV",
          value: {
            ..._0x553500.docTransform["positionV"],
            posOffset: _0x149f64.top,
          },
        }),
      _0x149f64.flipX !== undefined &&
        _0x2ca030.push({
          drawingId: _0x3f3eab.shapeId,
          key: "flipX",
          value: _0x149f64.flipX,
        }),
      _0x149f64.flipY !== undefined &&
        _0x2ca030.push({
          drawingId: _0x3f3eab.shapeId,
          key: "flipY",
          value: _0x149f64.flipY,
        }),
      _0x2ca030
    );
  }
  _arrange(_0x1d9952, _0xf50707) {
    return this._commandService["syncExecuteCommand"](
      n.SetDocDrawingArrangeCommand["id"],
      {
        unitId: _0x1d9952.unitId,
        subUnitId: _0x1d9952.subUnitId,
        drawingIds: [_0x1d9952.shapeId],
        arrangeType: _0xf50707,
      },
    );
  }
  _getTextRange(_0x589207, _0x2c650b) {
    var _0x2b7d85;
    let _0x4e5dd6 =
      (_0x2b7d85 = this._getDocument(_0x589207)) == null
        ? undefined
        : _0x2b7d85.getSnapshot();
    if (!_0x4e5dd6) return null;
    let _0x2707e0 = [
      { segmentId: "", body: _0x4e5dd6.body },
      ...Object.entries(_0x4e5dd6.headers ?? {}).map(
        ([_0x43c239, _0x217637]) => ({
          segmentId: _0x43c239,
          body: _0x217637.body,
        }),
      ),
      ...Object.entries(_0x4e5dd6.footers ?? {}).map(
        ([_0x582b15, _0x5e5e07]) => ({
          segmentId: _0x582b15,
          body: _0x5e5e07.body,
        }),
      ),
    ];
    for (let { segmentId: _0x5589f1, body: _0x41f37d } of _0x2707e0) {
      var _0x3b70e1;
      let _0x37b792 =
        _0x41f37d == null || (_0x3b70e1 = _0x41f37d.customBlocks) == null
          ? undefined
          : _0x3b70e1.find((_0x2183f8) => _0x2183f8.blockId === _0x2c650b);
      if (_0x37b792)
        return {
          startOffset: _0x37b792.startIndex,
          endOffset: _0x37b792.startIndex,
          collapsed: true,
          segmentId: _0x5589f1,
        };
    }
    return null;
  }
};
D = f(
  [
    d(0, t.ICommandService),
    d(1, t.IUniverInstanceService),
    d(2, (0, t.Inject)(m)),
    d(3, e.IConnectorShapeHostAdapter),
  ],
  D,
);
var O = "@univerjs-pro/docs-shape",
  k = "1.0.0-insiders.20260907-70fc579";
const A = {};
let j = class extends t.Disposable {
  constructor(_0x3f6938, _0x1992c4, _0x499c21, _0x2967b7) {
    (super(),
      (this._commandService = _0x3f6938),
      (this._shapeHostAdapterRegistry = _0x1992c4),
      (this._docDrawingAdapterService = _0x499c21),
      this._registerCommands(),
      this.disposeWithMe(this._shapeHostAdapterRegistry["register"](_0x2967b7)),
      this.disposeWithMe(
        this._docDrawingAdapterService["registerAdapter"](_0x2967b7),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x2f69e2) => {
          if (_0x2f69e2.id !== r.RichTextEditingMutation["id"]) return;
          let { unitId: _0x201dfb, actions: _0x1bc582 } = _0x2f69e2.params;
          if (M(_0x1bc582, "docTransform")) {
            for (let _0x909e21 of N(_0x1bc582))
              _0x2967b7.refreshConnectedConnectors({
                hostType: t.UniverInstanceType["UNIVER_DOC"],
                unitId: _0x201dfb,
                subUnitId: _0x201dfb,
                shapeId: _0x909e21,
              });
          }
        }),
      ));
  }
  _registerCommands() {
    [b, h, g, C, T, S].forEach((_0x2ae817) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x2ae817)),
    );
  }
};
j = f(
  [
    d(0, t.ICommandService),
    d(1, e.IShapeHostAdapterRegistry),
    d(2, n.IDocDrawingAdapterService),
    d(3, (0, t.Inject)(D)),
  ],
  j,
);
function M(_0x2642d2, _0x3d9c4b) {
  return (
    Array.isArray(_0x2642d2) &&
    _0x2642d2.some(
      (_0x1d5f1c) =>
        _0x1d5f1c === _0x3d9c4b ||
        (Array.isArray(_0x1d5f1c) && M(_0x1d5f1c, _0x3d9c4b)),
    )
  );
}
function N(_0x4c7d79, _0x5602d1 = new Set()) {
  return t.JSONX["isNoop"](_0x4c7d79) || !Array.isArray(_0x4c7d79)
    ? _0x5602d1
    : _0x4c7d79[0] === "drawings"
      ? (typeof _0x4c7d79[1] == "string"
          ? _0x5602d1.add(_0x4c7d79[1])
          : _0x4c7d79.slice(1).forEach((_0x279a38) => {
              Array.isArray(_0x279a38) &&
                typeof _0x279a38[0] == "string" &&
                _0x5602d1.add(_0x279a38[0]);
            }),
        _0x5602d1)
      : (_0x4c7d79.forEach((_0x440bbb) => {
          Array.isArray(_0x440bbb) && N(_0x440bbb, _0x5602d1);
        }),
        _0x5602d1);
}
let P = class extends t.Plugin {
  constructor(_0x443dc0 = A, _0x3087fd, _0x93396b) {
    (super(),
      (this._config = _0x443dc0),
      (this._injector = _0x3087fd),
      (this._configService = _0x93396b));
    let { ..._0x224b59 } = (0, t.merge)({}, A, this._config);
    this._configService["setConfig"]("docs-shape.config", _0x224b59);
  }
  onStarting() {
    ([[m], [D], [j]].forEach((_0x1055de) => this._injector["add"](_0x1055de)),
      (0, t.touchDependencies)(this._injector, [[m], [j]]));
  }
};
(l(P, "type", t.UniverInstanceType["UNIVER_DOC"]),
  l(P, "pluginName", "DOC_SHAPE_PLUGIN"),
  l(P, "packageName", O),
  l(P, "version", k),
  (P = f(
    [
      (0, t.DependentOn)(
        i.UniverLicensePlugin,
        n.UniverDocsDrawingPlugin,
        e.UniverShapePlugin,
      ),
      d(1, (0, t.Inject)(t.Injector)),
      d(2, t.IConfigService),
    ],
    P,
  )),
  (exports.DEFAULT_DOC_SHAPE_HEIGHT = 96),
  (exports.DEFAULT_DOC_SHAPE_WIDTH = 160),
  (exports.DOCS_SHAPE_PLUGIN = p),
  (exports.DocShapeAnchorPosition = a),
  Object.defineProperty(exports, "DocShapeHostAdapter", {
    enumerable: true,
    get: function () {
      return D;
    },
  }),
  Object.defineProperty(exports, "DocsShapeService", {
    enumerable: true,
    get: function () {
      return m;
    },
  }),
  (exports.InsertDocShapeCommand = b),
  (exports.InsertDocShapeMutation = h),
  Object.defineProperty(exports, "UniverDocsShapePlugin", {
    enumerable: true,
    get: function () {
      return P;
    },
  }),
  (exports.UpdateDocDrawingMetadataCommand = S),
  (exports.UpdateDocShapeDataCommand = T),
  (exports.UpdateDocShapeDataMutation = C));
