Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/pdfs"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core");
var r = class extends t.FEnum {
  get PdfAnnotationType() {
    return e.PdfAnnotationType;
  }
  get PdfListKind() {
    return e.PdfListKind;
  }
  get PdfListPresetId() {
    return e.PdfListPresetId;
  }
  get PdfTextAnchor() {
    return e.PdfTextAnchor;
  }
  get PdfTableCellVerticalAlign() {
    return e.PdfTableCellVerticalAlign;
  }
};
t.FEnum["extend"](r);
function i(_0x191ea8) {
  if (_0x191ea8 == null) return _0x191ea8;
  let {
    width: _0x356ea2,
    dash: _0x550e37,
    dashPhase: _0x297234,
    ..._0x2d19f2
  } = _0x191ea8;
  return {
    ..._0x2d19f2,
    ...(_0x356ea2 === undefined ? {} : { width: (0, e.ptToEmu)(_0x356ea2) }),
    ...(_0x550e37 === undefined
      ? {}
      : { dash: _0x550e37.map((_0x4f0431) => (0, e.ptToEmu)(_0x4f0431)) }),
    ...(_0x297234 === undefined
      ? {}
      : { dashPhase: (0, e.ptToEmu)(_0x297234) }),
  };
}
function a(_0x4a4dad) {
  if (!_0x4a4dad) return;
  let {
    width: _0x501274,
    dash: _0x102656,
    dashPhase: _0x149121,
    ..._0x94819
  } = _0x4a4dad;
  return {
    ..._0x94819,
    ...(_0x501274 === undefined ? {} : { width: (0, e.emuToPt)(_0x501274) }),
    ...(_0x102656 === undefined
      ? {}
      : { dash: _0x102656.map((_0x22299e) => (0, e.emuToPt)(_0x22299e)) }),
    ...(_0x149121 === undefined
      ? {}
      : { dashPhase: (0, e.emuToPt)(_0x149121) }),
  };
}
function o(_0x4ffe7b, _0x22dd26, _0x564821, _0xa23e42) {
  let _0x5ae5e9 = _0x4ffe7b.getUnitId(),
    _0x3ff3fc = Date.now(),
    _0xa78c9b = (0, e.createPdfEditorSession)({
      id: _0x5ae5e9 + ":facade",
      documentId: _0x5ae5e9,
      now: _0x3ff3fc,
    }),
    _0x1969cc = _0x564821.execute(
      {
        documentId: _0x5ae5e9,
        editState: _0x4ffe7b.getEditState(),
        selection: _0xa78c9b.selection,
        baseRevision: _0x4ffe7b.getEditState().revision,
        now: _0x3ff3fc,
        createId: (_0x423903) =>
          _0x5ae5e9 + ":" + _0x423903 + ":" + (0, n.generateRandomId)(12),
      },
      _0xa23e42,
    ),
    _0x5ed772 = _0x1969cc.batch;
  if (!_0x5ed772)
    throw Error(
      "PDF action " +
        _0x564821.id +
        "\x20did\x20not\x20produce\x20a\x20durable\x20mutation\x20batch.",
    );
  if (
    !_0x22dd26
      .get(n.ICommandService)
      .syncExecuteCommand(e.ApplyPdfMutationBatchMutation["id"], {
        unitId: _0x5ae5e9,
        batch: _0x5ed772,
      })
  )
    throw Error("PDF\x20action\x20" + _0x564821.id + " was rejected.");
  return (s(_0x4ffe7b, _0x22dd26, _0x5ed772), _0x1969cc);
}
function s(_0x59bf26, _0x5581c6, _0x33917d) {
  let _0x3d9e58 = _0x33917d.mutations["map"](
    (_0x2064b0) => _0x2064b0.inverse,
  ).reverse();
  if (!_0x3d9e58.every(Boolean)) return;
  let _0x31db40 = _0x59bf26.getUnitId();
  (_0x5581c6.get(n.IUniverInstanceService).focusUnit(_0x31db40),
    _0x5581c6
      .get(n.IUndoRedoService)
      .pushUndoRedo({
        unitID: _0x31db40,
        id: _0x33917d.id,
        undoMutations: [
          {
            id: e.ApplyPdfHistoryCommand["id"],
            params: {
              unitId: _0x31db40,
              source: e.PdfEditorMutationSource["UNDO"],
              mutations: _0x3d9e58,
              atomic: _0x33917d.atomic,
            },
          },
        ],
        redoMutations: [
          {
            id: e.ApplyPdfHistoryCommand["id"],
            params: {
              unitId: _0x31db40,
              source: e.PdfEditorMutationSource["REDO"],
              mutations: _0x33917d.mutations,
              atomic: _0x33917d.atomic,
            },
          },
        ],
      }));
}
var c = class {
  constructor(_0x38719f, _0x402b81, _0x4474f6, _0x12fe76, _0x293888) {
    ((this._model = _0x38719f),
      (this._pageId = _0x402b81),
      (this._objectId = _0x4474f6),
      (this._objectType = _0x12fe76),
      (this._injector = _0x293888));
  }
  getId() {
    return this._objectId;
  }
  getType() {
    return this._objectType;
  }
  getData() {
    return n.Tools["deepClone"](this._getCurrentObject());
  }
  getTransform() {
    let _0x41f157 = this._getCurrentObject(),
      [_0x563943, _0x1bfa63, _0x351092, _0x1135bb] = _0x41f157.bbox,
      _0x5cc433 = _0x41f157.transform,
      _0x3ef9c2 = _0x5cc433
        ? l((Math.atan2(_0x5cc433[1], _0x5cc433[0]) * 180) / Math.PI)
        : 0,
      _0x272f68 = _0x5cc433
        ? _0x5cc433[0] * _0x5cc433[3] - _0x5cc433[1] * _0x5cc433[2]
        : 1;
    return {
      left: (0, e.emuToPt)(_0x563943),
      top: (0, e.emuToPt)(_0x1bfa63),
      width: (0, e.emuToPt)(_0x351092 - _0x563943),
      height: (0, e.emuToPt)(_0x1135bb - _0x1bfa63),
      rotation: _0x3ef9c2,
      flipX: false,
      flipY: _0x272f68 < 0,
    };
  }
  setTransform(_0x2c1389) {
    (d(_0x2c1389.left, "left"),
      d(_0x2c1389.top, "top"),
      f(_0x2c1389.width, "width"),
      f(_0x2c1389.height, "height"),
      d(_0x2c1389.rotation, "rotation"));
    let _0x31719d = [
      (0, e.ptToEmu)(_0x2c1389.left),
      (0, e.ptToEmu)(_0x2c1389.top),
      (0, e.ptToEmu)(_0x2c1389.left + _0x2c1389.width),
      (0, e.ptToEmu)(_0x2c1389.top + _0x2c1389.height),
    ];
    return (this._setPlacement(_0x31719d, u(_0x31719d, _0x2c1389)), this);
  }
  setPosition(_0x20a1a3, _0x988c8c) {
    return (
      d(_0x20a1a3, "left"),
      d(_0x988c8c, "top"),
      this.setTransform({
        ...this.getTransform(),
        left: _0x20a1a3,
        top: _0x988c8c,
      })
    );
  }
  setSize(_0x332fc8, _0x39b369) {
    return (
      f(_0x332fc8, "width"),
      f(_0x39b369, "height"),
      this.setTransform({
        ...this.getTransform(),
        width: _0x332fc8,
        height: _0x39b369,
      })
    );
  }
  setRotation(_0x307e53) {
    return (
      d(_0x307e53, "rotation"),
      this.setTransform({ ...this.getTransform(), rotation: _0x307e53 })
    );
  }
  setVisible(_0x250857) {
    return (
      o(this._model, this._injector, e.pdfUpdateObjectStateAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        visible: _0x250857,
      }),
      this
    );
  }
  setLocked(_0x538ef2) {
    return (
      o(this._model, this._injector, e.pdfUpdateObjectStateAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        locked: _0x538ef2,
      }),
      this
    );
  }
  bringToFront() {
    let _0x1ca300 = this._getPageZIndexes().reduce(
      (_0x2b643a, _0x2b09b5) => Math.max(_0x2b643a, _0x2b09b5),
      0,
    );
    return (this._setZIndex(_0x1ca300 + 1), this);
  }
  sendToBack() {
    return (this._setZIndex(0), this);
  }
  bringForward() {
    return (this._reorderBy(1), this);
  }
  sendBackward() {
    return (this._reorderBy(-1), this);
  }
  remove() {
    (this._getCurrentObject(),
      o(this._model, this._injector, e.pdfDeleteObjectsAction, {
        pageId: this._pageId,
        objectIds: [this._objectId],
      }));
  }
  _getCurrentObject() {
    if (
      !this._model["getMaterializedDocument"]().pages["some"](
        (_0x98d0be) => _0x98d0be.id === this._pageId,
      )
    )
      throw Error("PDF page " + this._pageId + "\x20no\x20longer\x20exists.");
    let _0x4ad140 =
      this._model["getEditState"]().overlayObjects[this._objectId];
    if (!_0x4ad140 || _0x4ad140.pageId !== this._pageId)
      throw Error(
        "PDF element " +
          this._objectId +
          "\x20no\x20longer\x20exists\x20on\x20page\x20" +
          this._pageId +
          ".",
      );
    return _0x4ad140.object;
  }
  _setPlacement(_0x471c21, _0x37efb3) {
    o(this._model, this._injector, e.pdfMoveObjectAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      bbox: _0x471c21,
      transform: _0x37efb3,
    });
  }
  _setZIndex(_0x1994ef) {
    (this._getCurrentObject(),
      o(this._model, this._injector, e.pdfReorderObjectAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        zIndex: _0x1994ef,
      }));
  }
  _reorderBy(_0x5cd3f9) {
    (this._getCurrentObject(),
      o(this._model, this._injector, e.pdfReorderObjectAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        delta: _0x5cd3f9,
      }));
  }
  _getPageZIndexes() {
    return Object.values(this._model["getEditState"]().overlayObjects)
      .filter((_0x62944a) => _0x62944a.pageId === this._pageId)
      .map((_0x42b735) => _0x42b735.zIndex);
  }
};
function l(_0x59009d) {
  let _0x299461 = Math.round((_0x59009d % 360) * 1000000000) / 1000000000;
  return Object.is(_0x299461, -0) ? 0 : _0x299461;
}
function u(_0x265334, _0x2f9757) {
  let _0x3e40a5 = (_0x265334[0] + _0x265334[2]) / 2,
    _0x123593 = (_0x265334[1] + _0x265334[3]) / 2,
    _0x2c6386 = _0x2f9757.rotation,
    _0x5ae87b = _0x2f9757.flipY;
  _0x2f9757.flipX && ((_0x2c6386 += 180), (_0x5ae87b = !_0x5ae87b));
  let _0x4653f0 = (_0x2c6386 * Math.PI) / 180,
    _0x4fbc65 = Math.cos(_0x4653f0),
    _0x27c668 = Math.sin(_0x4653f0),
    _0x3cd023 = _0x5ae87b ? -1 : 1,
    _0x2f94c9 = _0x4fbc65,
    _0x1bb184 = _0x27c668,
    _0x1e165d = -_0x27c668 * _0x3cd023,
    _0x135bb4 = _0x4fbc65 * _0x3cd023;
  return [
    _0x2f94c9,
    _0x1bb184,
    _0x1e165d,
    _0x135bb4,
    _0x3e40a5 - _0x2f94c9 * _0x3e40a5 - _0x1e165d * _0x123593,
    _0x123593 - _0x1bb184 * _0x3e40a5 - _0x135bb4 * _0x123593,
  ];
}
function d(_0x536c34, _0xcc3679) {
  if (!Number.isFinite(_0x536c34))
    throw RangeError(
      "PDF\x20element\x20" + _0xcc3679 + " must be a finite number.",
    );
}
function f(_0x550330, _0x4c09d9) {
  if (!Number.isFinite(_0x550330) || _0x550330 <= 0)
    throw RangeError(
      "PDF element " +
        _0x4c09d9 +
        "\x20must\x20be\x20a\x20positive\x20finite\x20number.",
    );
}
function p(_0x26fc8b, _0xfee068) {
  return function (_0x10bb2d, _0x468239) {
    _0xfee068(_0x10bb2d, _0x468239, _0x26fc8b);
  };
}
function m(_0x34c543, _0x15ebea, _0x2c4ccf, _0x485f0f) {
  var _0xe123bf = arguments.length,
    _0x3059eb =
      _0xe123bf < 3
        ? _0x15ebea
        : _0x485f0f === null
          ? (_0x485f0f = Object.getOwnPropertyDescriptor(_0x15ebea, _0x2c4ccf))
          : _0x485f0f,
    _0x47a86b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3059eb = Reflect.decorate(_0x34c543, _0x15ebea, _0x2c4ccf, _0x485f0f);
  else {
    for (var _0x3cace4 = _0x34c543.length - 1; _0x3cace4 >= 0; _0x3cace4--)
      (_0x47a86b = _0x34c543[_0x3cace4]) &&
        (_0x3059eb =
          (_0xe123bf < 3
            ? _0x47a86b(_0x3059eb)
            : _0xe123bf > 3
              ? _0x47a86b(_0x15ebea, _0x2c4ccf, _0x3059eb)
              : _0x47a86b(_0x15ebea, _0x2c4ccf)) || _0x3059eb);
  }
  return (
    _0xe123bf > 3 &&
      _0x3059eb &&
      Object.defineProperty(_0x15ebea, _0x2c4ccf, _0x3059eb),
    _0x3059eb
  );
}
let h = class extends c {
  constructor(_0x2f9ec8, _0x204ae8, _0xab9358, _0x41079b) {
    super(
      _0x2f9ec8,
      _0x204ae8,
      _0xab9358,
      e.PdfObjectType["ANNOTATION"],
      _0x41079b,
    );
  }
  getAnnotationType() {
    return this._getCurrentObject().annotationType;
  }
  getMarkup() {
    let _0x704ce8 = g(this._getCurrentObject().markup);
    return _0x704ce8
      ? {
          ..._0x704ce8,
          quadPoints: _0x704ce8.quadPoints["map"](v),
          stroke: a(_0x704ce8.stroke),
        }
      : null;
  }
  getInk() {
    let _0x4d49e9 = g(this._getCurrentObject().ink);
    return _0x4d49e9
      ? {
          ..._0x4d49e9,
          paths: _0x4d49e9.paths["map"]((_0x2f1fad) => _0x2f1fad.map(_)),
          stroke: a(_0x4d49e9.stroke),
        }
      : null;
  }
  getStyle() {
    var _0x4a7062,
      _0x591083,
      _0x313696,
      _0x5b78ef,
      _0x51a312,
      _0x1808ec,
      _0x40cf3f,
      _0xbdcb83;
    let _0x4103a2 = this._getCurrentObject();
    return g({
      fill:
        ((_0x4a7062 = _0x4103a2.shape) == null
          ? undefined
          : _0x4a7062.interiorFill) ??
        ((_0x591083 = _0x4103a2.markup) != null && _0x591083.color
          ? { color: _0x4103a2.markup["color"] }
          : undefined),
      stroke: a(
        ((_0x313696 = _0x4103a2.markup) == null
          ? undefined
          : _0x313696.stroke) ??
          ((_0x5b78ef = _0x4103a2.ink) == null
            ? undefined
            : _0x5b78ef.stroke) ??
          ((_0x51a312 = _0x4103a2.line) == null
            ? undefined
            : _0x51a312.stroke) ??
          ((_0x1808ec = _0x4103a2.shape) == null
            ? undefined
            : _0x1808ec.border),
      ),
      opacity:
        ((_0x40cf3f = _0x4103a2.markup) == null
          ? undefined
          : _0x40cf3f.opacity) ??
        ((_0xbdcb83 = _0x4103a2.ink) == null ||
        (_0xbdcb83 = _0xbdcb83.stroke) == null
          ? undefined
          : _0xbdcb83.opacity),
    });
  }
  setStyle(_0x30cfdd) {
    if (
      (this._getCurrentObject(),
      _0x30cfdd.opacity !== undefined &&
        _0x30cfdd.opacity !== null &&
        (!Number.isFinite(_0x30cfdd.opacity) ||
          _0x30cfdd.opacity < 0 ||
          _0x30cfdd.opacity > 1))
    )
      throw RangeError("PDF annotation opacity must be between 0 and 1.");
    return (
      o(this._model, this._injector, e.pdfUpdateObjectAppearanceAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        fill: _0x30cfdd.fill,
        stroke: i(_0x30cfdd.stroke),
        opacity: _0x30cfdd.opacity,
      }),
      this
    );
  }
};
h = m([p(3, (0, n.Inject)(n.Injector))], h);
function g(_0x11694e) {
  return _0x11694e === undefined
    ? _0x11694e
    : JSON.parse(JSON.stringify(_0x11694e));
}
function _([_0x3e86ff, _0x61aff0]) {
  return [(0, e.emuToPt)(_0x3e86ff), (0, e.emuToPt)(_0x61aff0)];
}
function v([_0x55b292, _0x20e933, _0x3a6cb4, _0x399e76]) {
  return [_(_0x55b292), _(_0x20e933), _(_0x3a6cb4), _(_0x399e76)];
}
let y = class extends c {
  constructor(_0x35835a, _0x140bcc, _0x3fb6ac, _0x52ed9a) {
    super(_0x35835a, _0x140bcc, _0x3fb6ac, e.PdfObjectType["PATH"], _0x52ed9a);
  }
  getStroke() {
    let {
      width: _0x191ded,
      dash: _0x5e2e63,
      dashPhase: _0xb5a31a,
      ..._0x3e4872
    } = this._getCurrentObject().stroke ?? {};
    return {
      ..._0x3e4872,
      ...(_0x191ded === undefined ? {} : { width: (0, e.emuToPt)(_0x191ded) }),
      ...(_0x5e2e63 === undefined
        ? {}
        : { dash: _0x5e2e63.map((_0x3e5f11) => (0, e.emuToPt)(_0x3e5f11)) }),
      ...(_0xb5a31a === undefined
        ? {}
        : { dashPhase: (0, e.emuToPt)(_0xb5a31a) }),
    };
  }
  setStroke(_0x780957) {
    this._getCurrentObject();
    let {
        width: _0x284d0e,
        dash: _0x38159d,
        dashPhase: _0x1010b2,
        ..._0x56ea9f
      } = _0x780957,
      _0x1e9f88 = {
        ..._0x56ea9f,
        ...(_0x284d0e === undefined
          ? {}
          : { width: (0, e.ptToEmu)(_0x284d0e) }),
        ...(_0x38159d === undefined
          ? {}
          : { dash: _0x38159d.map((_0x26e907) => (0, e.ptToEmu)(_0x26e907)) }),
        ...(_0x1010b2 === undefined
          ? {}
          : { dashPhase: (0, e.ptToEmu)(_0x1010b2) }),
      };
    return (
      o(this._model, this._injector, e.pdfUpdateObjectStrokeAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        stroke: _0x1e9f88,
      }),
      this
    );
  }
};
y = m([p(3, (0, n.Inject)(n.Injector))], y);
function b(_0x453e2a) {
  "@babel/helpers - typeof";
  return (
    (b =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1fe8f3) {
            return typeof _0x1fe8f3;
          }
        : function (_0x227301) {
            return _0x227301 &&
              typeof Symbol == "function" &&
              _0x227301.constructor === Symbol &&
              _0x227301 !== Symbol.prototype
              ? "symbol"
              : typeof _0x227301;
          }),
    b(_0x453e2a)
  );
}
function x(_0x21e944, _0x1bab10) {
  if (b(_0x21e944) != "object" || !_0x21e944) return _0x21e944;
  var _0x367649 = _0x21e944[Symbol.toPrimitive];
  if (_0x367649 !== undefined) {
    var _0x5b7b38 = _0x367649.call(_0x21e944, _0x1bab10 || "default");
    if (b(_0x5b7b38) != "object") return _0x5b7b38;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x1bab10 === "string" ? String : Number)(_0x21e944);
}
function ee(_0x198dad) {
  var _0x5af577 = x(_0x198dad, "string");
  return b(_0x5af577) == "symbol" ? _0x5af577 : _0x5af577 + "";
}
function S(_0x473159, _0x4546c8, _0x4dc384) {
  return (
    (_0x4546c8 = ee(_0x4546c8)) in _0x473159
      ? Object.defineProperty(_0x473159, _0x4546c8, {
          value: _0x4dc384,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x473159[_0x4546c8] = _0x4dc384),
    _0x473159
  );
}
let C = class extends c {
  constructor(_0x17a441, _0x5149b7, _0x16a165, _0xe2c7b2) {
    super(_0x17a441, _0x5149b7, _0x16a165, e.PdfObjectType["IMAGE"], _0xe2c7b2);
  }
  getSource() {
    return this._getResource().source;
  }
  getImageSourceType() {
    return this._getResource().imageSourceType;
  }
  setSource(_0x55850f, _0x5c799f) {
    let _0x3d41ab = this.toBuilder().setSource(_0x55850f, _0x5c799f).build();
    return (this._applyBuilder(_0x3d41ab), this);
  }
  getCrop() {
    let _0x5edfa8 = this._getCurrentObject(),
      _0x9b60a = _0x5edfa8.crop;
    return _0x9b60a
      ? {
          left: (0, e.emuToPt)(_0x9b60a[0] - _0x5edfa8.bbox[0]),
          top: (0, e.emuToPt)(_0x9b60a[1] - _0x5edfa8.bbox[1]),
          right: (0, e.emuToPt)(_0x9b60a[2] - _0x5edfa8.bbox[0]),
          bottom: (0, e.emuToPt)(_0x9b60a[3] - _0x5edfa8.bbox[1]),
        }
      : null;
  }
  setCrop(_0x1c0bab) {
    A(_0x1c0bab);
    let _0x2ea29a = this._getCurrentObject();
    return (
      o(this._model, this._injector, e.pdfCropImageAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        cropRect: k(_0x1c0bab, _0x2ea29a.bbox),
      }),
      this
    );
  }
  getOpacity() {
    return this._getCurrentObject().opacity ?? 1;
  }
  setOpacity(_0x3a5b06) {
    return (
      j(_0x3a5b06),
      this._getCurrentObject(),
      o(this._model, this._injector, e.pdfUpdateObjectAppearanceAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        opacity: _0x3a5b06,
      }),
      this
    );
  }
  toBuilder() {
    let _0xdb7d33 = this._getCurrentObject(),
      _0x5030ef = this._getResource();
    return new w(this._model["getUnitId"](), this._pageId, {
      id: this._objectId,
      source: _0x5030ef.source,
      imageSourceType: _0x5030ef.imageSourceType,
      transform: this.getTransform(),
      crop: this.getCrop() ?? undefined,
      opacity: _0xdb7d33.opacity,
      assetId: _0xdb7d33.assetId,
    });
  }
  remove() {
    (this._getCurrentObject(),
      o(this._model, this._injector, e.pdfRemoveManagedImageAction, {
        pageId: this._pageId,
        objectId: this._objectId,
      }));
  }
  _getResource() {
    let _0x293d2c = this._getCurrentObject(),
      _0x279fbb =
        this._model["getEditState"]().managedResources[_0x293d2c.assetId];
    if (!_0x279fbb)
      throw Error(
        "Managed resource " +
          _0x293d2c.assetId +
          " for PDF image " +
          this._objectId +
          " no longer exists.",
      );
    return _0x279fbb;
  }
  _applyBuilder(_0x582c70) {
    let _0x59d3f5 = O(_0x582c70.element["transform"]);
    o(this._model, this._injector, e.pdfUpdateManagedImageAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      resource: D(this._model, _0x582c70),
      cropRect: _0x582c70.element["crop"]
        ? k(_0x582c70.element["crop"], _0x59d3f5.bbox)
        : null,
      opacity: _0x582c70.element["opacity"],
      ..._0x59d3f5,
    });
  }
};
C = m([p(3, (0, n.Inject)(n.Injector))], C);
var w = class {
  constructor(_0x3131d8, _0xf16792, _0x2fe383) {
    ((this._unitId = _0x3131d8),
      (this._pageId = _0xf16792),
      S(this, "_elementId", undefined),
      S(this, "_source", undefined),
      S(this, "_imageSourceType", undefined),
      S(this, "_transform", undefined),
      S(this, "_crop", undefined),
      S(this, "_opacity", undefined),
      S(this, "_assetId", undefined),
      (this._elementId =
        (_0x2fe383 == null ? undefined : _0x2fe383.id) ?? re()),
      (this._source = _0x2fe383 == null ? undefined : _0x2fe383.source),
      (this._imageSourceType =
        _0x2fe383 == null ? undefined : _0x2fe383.imageSourceType),
      (this._transform = T(
        _0x2fe383 == null ? undefined : _0x2fe383.transform,
      )),
      (this._crop = _0x2fe383 == null ? undefined : _0x2fe383.crop),
      (this._opacity = _0x2fe383 == null ? undefined : _0x2fe383.opacity),
      (this._assetId = _0x2fe383 == null ? undefined : _0x2fe383.assetId));
  }
  setSource(_0x176f3b, _0x154d18) {
    return (
      (_0x176f3b !== this._source ||
        (_0x154d18 && _0x154d18 !== this._imageSourceType)) &&
        (this._assetId = undefined),
      (this._source = _0x176f3b),
      (this._imageSourceType = _0x154d18),
      this
    );
  }
  setAbsolutePosition(_0x3c0b65, _0x41a1a2) {
    return (
      M(_0x3c0b65, "left"),
      M(_0x41a1a2, "top"),
      (this._transform["left"] = _0x3c0b65),
      (this._transform["top"] = _0x41a1a2),
      this
    );
  }
  setSize(_0x10f0ad, _0x24c528) {
    return (
      N(_0x10f0ad, "width"),
      N(_0x24c528, "height"),
      (this._transform["width"] = _0x10f0ad),
      (this._transform["height"] = _0x24c528),
      this
    );
  }
  setRotation(_0x4015b5) {
    return (
      M(_0x4015b5, "rotation"),
      (this._transform["rotation"] = _0x4015b5),
      this
    );
  }
  setCrop(_0x3f4b0c) {
    return (A(_0x3f4b0c), (this._crop = { ..._0x3f4b0c }), this);
  }
  setOpacity(_0x13f068) {
    return (j(_0x13f068), (this._opacity = _0x13f068), this);
  }
  build() {
    if (!this._source)
      throw Error(
        "Image source is required. Please call setSource() before build().",
      );
    let _0x5ffbd3 = this._imageSourceType ?? te(this._source);
    return (
      ne(this._source, _0x5ffbd3),
      N(this._transform["width"], "width"),
      N(this._transform["height"], "height"),
      this._opacity !== undefined && j(this._opacity),
      {
        unitId: this._unitId,
        pageId: this._pageId,
        element: {
          id: this._elementId,
          source: this._source,
          imageSourceType: _0x5ffbd3,
          transform: { ...this._transform },
          crop: this._crop ? { ...this._crop } : undefined,
          opacity: this._opacity,
          assetId: this._assetId,
        },
      }
    );
  }
};
function T(_0x1688c8) {
  return {
    left: (_0x1688c8 == null ? undefined : _0x1688c8.left) ?? 0,
    top: (_0x1688c8 == null ? undefined : _0x1688c8.top) ?? 0,
    width: (_0x1688c8 == null ? undefined : _0x1688c8.width) ?? 288,
    height: (_0x1688c8 == null ? undefined : _0x1688c8.height) ?? 162,
    rotation: (_0x1688c8 == null ? undefined : _0x1688c8.rotation) ?? 0,
    flipX: (_0x1688c8 == null ? undefined : _0x1688c8.flipX) ?? false,
    flipY: (_0x1688c8 == null ? undefined : _0x1688c8.flipY) ?? false,
  };
}
function E(_0x408eb3) {
  let { element: _0x1ee4f4 } = _0x408eb3;
  return {
    asset: {
      id: _0x1ee4f4.assetId ?? ie(_0x1ee4f4.source, _0x1ee4f4.imageSourceType),
      type: e.PdfAssetType["IMAGE"],
      width: _0x1ee4f4.transform["width"],
      height: _0x1ee4f4.transform["height"],
    },
    source: _0x1ee4f4.source,
    imageSourceType: _0x1ee4f4.imageSourceType,
  };
}
function D(_0x3de1c8, _0x26b552) {
  let _0x101f0b = E(_0x26b552),
    _0x582c74 =
      _0x3de1c8.getEditState().managedResources[_0x101f0b.asset["id"]];
  return (_0x582c74 == null ? undefined : _0x582c74.source) ===
    _0x101f0b.source && _0x582c74.imageSourceType === _0x101f0b.imageSourceType
    ? _0x582c74
    : _0x101f0b;
}
function O(_0x47f5cd) {
  let _0x132889 = [
      (0, e.ptToEmu)(_0x47f5cd.left),
      (0, e.ptToEmu)(_0x47f5cd.top),
      (0, e.ptToEmu)(_0x47f5cd.left + _0x47f5cd.width),
      (0, e.ptToEmu)(_0x47f5cd.top + _0x47f5cd.height),
    ],
    _0x297465 = (_0x47f5cd.rotation * Math.PI) / 180,
    _0x284a69 = Math.cos(_0x297465),
    _0xe66cbb = Math.sin(_0x297465),
    _0x524f8d = _0x47f5cd.flipX ? -1 : 1,
    _0x3af4af = _0x47f5cd.flipY ? -1 : 1,
    _0x3292c4 = _0x284a69 * _0x524f8d,
    _0x3e738b = _0xe66cbb * _0x524f8d,
    _0x9940d9 = -_0xe66cbb * _0x3af4af,
    _0x1526a2 = _0x284a69 * _0x3af4af,
    _0x4375f4 = (_0x132889[0] + _0x132889[2]) / 2,
    _0x4852ee = (_0x132889[1] + _0x132889[3]) / 2;
  return {
    bbox: _0x132889,
    transform: [
      _0x3292c4,
      _0x3e738b,
      _0x9940d9,
      _0x1526a2,
      _0x4375f4 - _0x3292c4 * _0x4375f4 - _0x9940d9 * _0x4852ee,
      _0x4852ee - _0x3e738b * _0x4375f4 - _0x1526a2 * _0x4852ee,
    ],
  };
}
function k(_0x5bcabf, _0x396864) {
  return [
    _0x396864[0] + (0, e.ptToEmu)(_0x5bcabf.left),
    _0x396864[1] + (0, e.ptToEmu)(_0x5bcabf.top),
    _0x396864[0] + (0, e.ptToEmu)(_0x5bcabf.right),
    _0x396864[1] + (0, e.ptToEmu)(_0x5bcabf.bottom),
  ];
}
function te(_0x4a72f4) {
  return /^https?:\/\//i.test(_0x4a72f4)
    ? n.ImageSourceType["URL"]
    : /^data:/i.test(_0x4a72f4) ||
        /^[A-Za-z0-9+/]+={0,2}$/["test"](_0x4a72f4.replace(/\s/g, ""))
      ? n.ImageSourceType["BASE64"]
      : n.ImageSourceType["UUID"];
}
function ne(_0x1957cf, _0x4acc2b) {
  (0, e.normalizePdfEditorManagedImageResource)(
    E({
      unitId: "validation",
      pageId: "validation",
      element: {
        id: "validation",
        source: _0x1957cf,
        imageSourceType: _0x4acc2b,
        transform: {
          left: 0,
          top: 0,
          width: 1,
          height: 1,
          rotation: 0,
          flipX: false,
          flipY: false,
        },
      },
    }),
  );
}
function re() {
  return "pdf-facade-image-" + (0, n.generateRandomId)(12);
}
function ie(_0x5459c3, _0x42d7cd) {
  let _0x491f82 = _0x42d7cd + ":" + _0x5459c3,
    _0x61d1a8 = 2166136261;
  for (let _0x1fc820 = 0; _0x1fc820 < _0x491f82.length; _0x1fc820++)
    ((_0x61d1a8 ^= _0x491f82.charCodeAt(_0x1fc820)),
      (_0x61d1a8 = Math.imul(_0x61d1a8, 16777619)));
  return "pdf-facade-asset-" + (_0x61d1a8 >>> 0).toString(36);
}
function A(_0x3c4f36) {
  if (
    (M(_0x3c4f36.left, "crop.left"),
    M(_0x3c4f36.top, "crop.top"),
    M(_0x3c4f36.right, "crop.right"),
    M(_0x3c4f36.bottom, "crop.bottom"),
    _0x3c4f36.right <= _0x3c4f36.left || _0x3c4f36.bottom <= _0x3c4f36.top)
  )
    throw RangeError("PDF image crop must have positive width and height.");
}
function j(_0x39f851) {
  if (!Number.isFinite(_0x39f851) || _0x39f851 < 0 || _0x39f851 > 1)
    throw RangeError("PDF image opacity must be between 0 and 1.");
}
function M(_0x334854, _0x2665b7) {
  if (!Number.isFinite(_0x334854))
    throw RangeError("PDF image " + _0x2665b7 + " must be finite.");
}
function N(_0x5bbb01, _0x14570c) {
  if (!Number.isFinite(_0x5bbb01) || _0x5bbb01 <= 0)
    throw RangeError(
      "PDF\x20image\x20" + _0x14570c + " must be positive and finite.",
    );
}
let P = class extends c {
  constructor(_0x527c26, _0x502084, _0x34301d, _0x184747) {
    super(
      _0x527c26,
      _0x502084,
      _0x34301d,
      e.PdfObjectType["TEXT_BOX"],
      _0x184747,
    );
  }
  getItems() {
    let _0x281bc6 = this._getTextStory();
    return _0x281bc6.blocks["flatMap"]((_0x5d3137) =>
      _0x5d3137.listItem
        ? [
            {
              ...JSON.parse(JSON.stringify(_0x5d3137)),
              text: this._getBlockText(_0x281bc6, _0x5d3137.id),
              level: _0x5d3137.listItem["level"],
            },
          ]
        : [],
    );
  }
  insertItem(_0x11c730, _0x146854) {
    let { storyId: _0x53eb66, listId: _0x36db38 } = this._resolveList();
    return (
      o(this._model, this._injector, e.pdfInsertListItemAction, {
        storyId: _0x53eb66,
        listId: _0x36db38,
        index: _0x11c730,
        text: _0x146854.text,
        level: _0x146854.level ?? 0,
        blockId: _0x146854.id,
      }),
      this
    );
  }
  setItemText(_0x111749, _0x181af1) {
    let {
      storyId: _0x3d4c93,
      runId: _0x379155,
      previousText: _0x54d9b0,
    } = this._resolveItemRun(_0x111749);
    return (
      o(this._model, this._injector, e.pdfEditTextAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        storyId: _0x3d4c93,
        runId: _0x379155,
        previousText: _0x54d9b0,
        text: _0x181af1,
      }),
      this
    );
  }
  removeItem(_0xed501e) {
    let { storyId: _0x51a986 } = this._resolveItemRun(_0xed501e);
    return (
      o(this._model, this._injector, e.pdfRemoveListItemAction, {
        storyId: _0x51a986,
        blockId: _0xed501e,
      }),
      this
    );
  }
  changeItemLevel(_0x3df2cf, _0x2c3641) {
    if (!Number.isInteger(_0x2c3641) || _0x2c3641 < 0 || _0x2c3641 > 8)
      throw RangeError("PDF list level must be an integer from 0 through 8.");
    let _0x3c2465 = this._getTextStory(),
      _0x4bf590 = _0x3c2465.blocks["find"](
        (_0x515e46) => _0x515e46.id === _0x3df2cf && _0x515e46.listItem,
      );
    if (!(_0x4bf590 != null && _0x4bf590.listItem))
      throw this._missingItem(_0x3df2cf);
    if (_0x2c3641 === _0x4bf590.listItem["level"]) return this;
    if (_0x2c3641 > _0x4bf590.listItem["level"]) {
      let _0xfeec0a = _0x3c2465.blocks["indexOf"](_0x4bf590),
        _0x4ec1b1 = _0xfeec0a > 0 ? _0x3c2465.blocks[_0xfeec0a - 1] : undefined;
      if (
        !(_0x4ec1b1 != null && _0x4ec1b1.listItem) ||
        _0x4ec1b1.listItem["level"] < _0x2c3641 - 1
      )
        throw RangeError(
          "PDF list item " +
            _0x3df2cf +
            " cannot use level " +
            _0x2c3641 +
            "\x20without\x20a\x20preceding\x20parent\x20level.",
        );
    }
    return (
      o(this._model, this._injector, e.pdfChangeListLevelAction, {
        storyId: _0x3c2465.id,
        blockId: _0x3df2cf,
        delta: _0x2c3641 - _0x4bf590.listItem["level"],
      }),
      this
    );
  }
  setPreset(_0x492707) {
    let { storyId: _0x323c6e, listId: _0x30caf9 } = this._resolveList();
    return (
      o(this._model, this._injector, e.pdfChangeListStyleAction, {
        storyId: _0x323c6e,
        listId: _0x30caf9,
        presetId: _0x492707,
      }),
      this
    );
  }
  setStartNumber(_0x113b71) {
    if (!Number.isInteger(_0x113b71) || _0x113b71 < 1)
      throw RangeError("PDF list start number must be a positive integer.");
    let {
      storyId: _0x372a33,
      listId: _0x350c58,
      kind: _0x5028ae,
    } = this._resolveList();
    if (_0x5028ae === e.PdfListKind["UNORDERED"])
      throw RangeError(
        "PDF list start number is only supported for ordered lists.",
      );
    return (
      o(this._model, this._injector, e.pdfSetListStartNumberAction, {
        storyId: _0x372a33,
        listId: _0x350c58,
        level: 0,
        startAt: _0x113b71,
      }),
      this
    );
  }
  _resolveList() {
    var _0x5a1e63, _0x213495;
    let _0x301678 = this._getTextStory(),
      _0xeef3ab =
        ((_0x5a1e63 = _0x301678.blocks["find"](
          (_0x550b38) => _0x550b38.listItem,
        )) == null || (_0x5a1e63 = _0x5a1e63.listItem) == null
          ? undefined
          : _0x5a1e63.listId) ?? Object.keys(_0x301678.lists ?? {})[0];
    if (!_0xeef3ab)
      throw Error(
        "PDF\x20list\x20definition\x20for\x20element\x20" +
          this._objectId +
          "\x20no\x20longer\x20exists.",
      );
    return {
      storyId: _0x301678.id,
      listId: _0xeef3ab,
      kind:
        (_0x213495 = _0x301678.lists) == null ||
        (_0x213495 = _0x213495[_0xeef3ab]) == null
          ? undefined
          : _0x213495.kind,
    };
  }
  _resolveItemRun(_0x2496f8) {
    let _0x2f5bb8 = this._getTextStory(),
      _0x49b516 = _0x2f5bb8.blocks["find"](
        (_0x2fd367) => _0x2fd367.id === _0x2496f8 && _0x2fd367.listItem,
      ),
      _0x8d44f7 = _0x49b516 == null ? undefined : _0x49b516.runIds[0];
    if (
      !_0x49b516 ||
      !_0x8d44f7 ||
      _0x49b516.runIds["length"] !== 1 ||
      !_0x2f5bb8.runs[_0x8d44f7]
    )
      throw this._missingItem(_0x2496f8);
    return {
      storyId: _0x2f5bb8.id,
      runId: _0x8d44f7,
      previousText: _0x2f5bb8.runs[_0x8d44f7].text,
    };
  }
  _getTextStory() {
    let _0xabc91f = this._model["getMaterializedDocument"](),
      _0x3d6289 = _0xabc91f.objects[this._objectId],
      _0x35b02c =
        (_0x3d6289 == null ? undefined : _0x3d6289.type) ===
        e.PdfObjectType["TEXT_BOX"]
          ? _0x3d6289.textStoryId
          : undefined,
      _0x48ddfb = _0x35b02c ? _0xabc91f.textStories[_0x35b02c] : undefined;
    if (!_0x48ddfb)
      throw Error(
        "PDF text story for element " +
          this._objectId +
          "\x20no\x20longer\x20exists\x20on\x20page\x20" +
          this._pageId +
          ".",
      );
    return _0x48ddfb;
  }
  _getBlockText(_0x435f62, _0x490340) {
    let _0x3cda65 = _0x435f62.blocks["find"](
      (_0x5811b3) => _0x5811b3.id === _0x490340,
    );
    return (
      (_0x3cda65 == null
        ? undefined
        : _0x3cda65.runIds["map"]((_0x3e993b) => {
            var _0x2dfd9e;
            return (
              ((_0x2dfd9e = _0x435f62.runs[_0x3e993b]) == null
                ? undefined
                : _0x2dfd9e.text) ?? ""
            );
          }).join("")) ?? ""
    );
  }
  _missingItem(_0x279f59) {
    return Error(
      "PDF list item " +
        _0x279f59 +
        " is missing or is not a single-run editable item.",
    );
  }
};
P = m([p(3, (0, n.Inject)(n.Injector))], P);
let F = class extends c {
  constructor(_0x37e75d, _0x4a4174, _0x49c62a, _0x2c3731) {
    super(
      _0x37e75d,
      _0x4a4174,
      _0x49c62a,
      e.PdfObjectType["TEXT_BOX"],
      _0x2c3731,
    );
  }
  getBlocks() {
    let _0x563dd1 = this._getTextStory();
    return _0x563dd1.blocks["map"]((_0x3ea5f2) => ({
      ...JSON.parse(JSON.stringify(_0x3ea5f2)),
      text: this._getBlockText(_0x563dd1, _0x3ea5f2.id),
    }));
  }
  insertBlock(_0x36f0c5, _0x15c047) {
    let _0x35aca3 = this._getTextStory();
    return (
      o(this._model, this._injector, e.pdfInsertParagraphBlockAction, {
        storyId: _0x35aca3.id,
        index: _0x36f0c5,
        text: _0x15c047.text,
        blockId: _0x15c047.id,
        blockStyle: _0x15c047.style,
        runStyle: _0x15c047.textStyle,
      }),
      this
    );
  }
  appendBlock(_0xab5401) {
    return this.insertBlock(this.getBlocks().length, _0xab5401);
  }
  setBlockText(_0x5363e0, _0x399867) {
    let {
      storyId: _0x4f4217,
      runId: _0x343976,
      previousText: _0x4fe83a,
    } = this._resolveBlockRun(_0x5363e0);
    return (
      o(this._model, this._injector, e.pdfEditTextAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        storyId: _0x4f4217,
        runId: _0x343976,
        previousText: _0x4fe83a,
        text: _0x399867,
      }),
      this
    );
  }
  setBlockStyle(_0x4c7110, _0x3ec4b3) {
    let _0x25f2c5 = this._getTextStory();
    return (
      this._resolveBlockRun(_0x4c7110),
      o(this._model, this._injector, e.pdfUpdateParagraphStyleAction, {
        storyId: _0x25f2c5.id,
        blockId: _0x4c7110,
        patch: _0x3ec4b3,
      }),
      this
    );
  }
  removeBlock(_0x10ac2e) {
    let _0x331d1b = this._getTextStory();
    return (
      this._resolveBlockRun(_0x10ac2e),
      o(this._model, this._injector, e.pdfRemoveParagraphBlockAction, {
        storyId: _0x331d1b.id,
        blockId: _0x10ac2e,
      }),
      this
    );
  }
  _resolveBlockRun(_0x3c66d7) {
    let _0x327dc7 = this._getTextStory(),
      _0x548d66 = _0x327dc7.blocks["find"](
        (_0x9d4e74) => _0x9d4e74.id === _0x3c66d7,
      ),
      _0x8b9ba6 = _0x548d66 == null ? undefined : _0x548d66.runIds[0];
    if (
      !_0x548d66 ||
      !_0x8b9ba6 ||
      _0x548d66.runIds["length"] !== 1 ||
      !_0x327dc7.runs[_0x8b9ba6]
    )
      throw Error(
        "PDF\x20paragraph\x20block\x20" +
          _0x3c66d7 +
          " is missing or is not a single-run editable block.",
      );
    return {
      storyId: _0x327dc7.id,
      runId: _0x8b9ba6,
      previousText: _0x327dc7.runs[_0x8b9ba6].text,
    };
  }
  _getTextStory() {
    let _0xf5fc4f = this._model["getMaterializedDocument"](),
      _0x45fe15 = _0xf5fc4f.objects[this._objectId],
      _0x279830 =
        (_0x45fe15 == null ? undefined : _0x45fe15.type) ===
        e.PdfObjectType["TEXT_BOX"]
          ? _0x45fe15.textStoryId
          : undefined,
      _0x226c42 = _0x279830 ? _0xf5fc4f.textStories[_0x279830] : undefined;
    if (!_0x226c42)
      throw Error(
        "PDF text story for element " +
          this._objectId +
          " no longer exists on page " +
          this._pageId +
          ".",
      );
    return _0x226c42;
  }
  _getBlockText(_0x2d87cd, _0x517d74) {
    let _0x3428a0 = _0x2d87cd.blocks["find"](
      (_0x5ec656) => _0x5ec656.id === _0x517d74,
    );
    return (
      (_0x3428a0 == null
        ? undefined
        : _0x3428a0.runIds["map"]((_0x3f76b3) => {
            var _0x937d5b;
            return (
              ((_0x937d5b = _0x2d87cd.runs[_0x3f76b3]) == null
                ? undefined
                : _0x937d5b.text) ?? ""
            );
          }).join("")) ?? ""
    );
  }
};
F = m([p(3, (0, n.Inject)(n.Injector))], F);
let I = class extends c {
  constructor(_0x3b7f0e, _0x5387b0, _0x2b6ffa, _0x7036e6) {
    super(_0x3b7f0e, _0x5387b0, _0x2b6ffa, e.PdfObjectType["TABLE"], _0x7036e6);
  }
  getRowCount() {
    return this._getCurrentObject().rows["length"];
  }
  getColumnCount() {
    return this._getCurrentObject().columns["length"];
  }
  getCell(_0x82ff64, _0x1e16b0) {
    var _0x235a03, _0x5f315e;
    let _0x512228 = this._getCurrentObject(),
      _0x27ce5c =
        (_0x235a03 = _0x512228.rows[_0x82ff64]) == null
          ? undefined
          : _0x235a03.id,
      _0x5c84cb =
        (_0x5f315e = _0x512228.columns[_0x1e16b0]) == null
          ? undefined
          : _0x5f315e.id,
      _0x352529 = _0x512228.cells["find"](
        (_0x4a603f) =>
          _0x4a603f.rowId === _0x27ce5c && _0x4a603f.columnId === _0x5c84cb,
      );
    if (
      !Number.isInteger(_0x82ff64) ||
      !Number.isInteger(_0x1e16b0) ||
      !_0x27ce5c ||
      !_0x5c84cb ||
      !_0x352529
    )
      throw RangeError(
        "PDF\x20table\x20cell\x20coordinates\x20are\x20outside\x20the\x20current\x20table.",
      );
    return this._injector["createInstance"](
      L,
      this._model,
      this._pageId,
      this._objectId,
      _0x352529.id,
    );
  }
  resize(_0x4a7820, _0x374e79) {
    let _0x5cc5b7 = this._getCurrentObject();
    if (
      !Number.isSafeInteger(_0x4a7820) ||
      _0x4a7820 <= 0 ||
      !Number.isSafeInteger(_0x374e79) ||
      _0x374e79 <= 0
    )
      throw RangeError(
        "PDF table row and column counts must be positive safe integers.",
      );
    if (_0x4a7820 * _0x374e79 > 10000)
      throw RangeError(
        "PDF\x20table\x20resize\x20supports\x20at\x20most\x2010,000\x20cells.",
      );
    let _0x30c06e = _0x5cc5b7.bbox[2] - _0x5cc5b7.bbox[0],
      _0xe0b916 = _0x5cc5b7.bbox[3] - _0x5cc5b7.bbox[1],
      _0x252a65 = Array.from({ length: _0x4a7820 }, (_0x186a3e, _0x352a85) => {
        var _0x504cca;
        return (
          ((_0x504cca = _0x5cc5b7.rows[_0x352a85]) == null
            ? undefined
            : _0x504cca.id) ?? R("row")
        );
      }),
      _0x1f04fa = Array.from({ length: _0x374e79 }, (_0x20d828, _0x1d6175) => {
        var _0x59ca2a;
        return (
          ((_0x59ca2a = _0x5cc5b7.columns[_0x1d6175]) == null
            ? undefined
            : _0x59ca2a.id) ?? R("column")
        );
      }),
      _0x4f3945 = [],
      _0x27e667 = [],
      _0x351439 = [];
    for (let _0x440420 = 0; _0x440420 < _0x4a7820; _0x440420 += 1)
      for (let _0x223e8c = 0; _0x223e8c < _0x374e79; _0x223e8c += 1) {
        var _0x513caf, _0x558a83;
        let _0x2b72fc =
            (_0x513caf = _0x5cc5b7.rows[_0x440420]) == null
              ? undefined
              : _0x513caf.id,
          _0x519f56 =
            (_0x558a83 = _0x5cc5b7.columns[_0x223e8c]) == null
              ? undefined
              : _0x558a83.id,
          _0xfe9457 =
            _0x2b72fc && _0x519f56
              ? _0x5cc5b7.cells["find"](
                  (_0x574b13) =>
                    _0x574b13.rowId === _0x2b72fc &&
                    _0x574b13.columnId === _0x519f56,
                )
              : undefined;
        if ((_0x27e667.push(_0xfe9457), _0xfe9457)) {
          _0x351439.push({
            id: _0xfe9457.id,
            contentStoryId: _0xfe9457.contentStoryId,
          });
          continue;
        }
        let _0x5cf10c = B(this._objectId);
        (_0x4f3945.push(_0x5cf10c),
          _0x351439.push({ id: R("cell"), contentStoryId: _0x5cf10c.id }));
      }
    let _0x45d1a2 = (0, e.createPdfTableGrid)({
        width: _0x30c06e,
        height: _0xe0b916,
        rowIds: _0x252a65,
        columnIds: _0x1f04fa,
        cells: _0x351439,
      }),
      _0x1ba94f = _0x45d1a2.cells["map"]((_0x313434, _0x55e626) => ({
        ..._0x27e667[_0x55e626],
        ..._0x313434,
      })),
      _0x33ea64 = new Set(
        _0x1ba94f.map((_0x582ec5) => _0x582ec5.contentStoryId),
      ),
      _0x2066c5 = this._model["getEditState"](),
      _0x429524 = _0x5cc5b7.cells["filter"](
        (_0x40ec28) => !_0x33ea64.has(_0x40ec28.contentStoryId),
      )
        .map(
          (_0x5dc3ff) => _0x2066c5.overlayTextStories[_0x5dc3ff.contentStoryId],
        )
        .filter((_0x5a44e0) => !!_0x5a44e0);
    return (
      o(this._model, this._injector, e.pdfResizeTableAction, {
        pageId: this._pageId,
        tableId: this._objectId,
        bbox: [..._0x5cc5b7.bbox],
        rows: _0x45d1a2.rows,
        columns: _0x45d1a2.columns,
        cells: _0x1ba94f,
        addedStories: _0x4f3945,
        removedStories: _0x429524,
      }),
      this
    );
  }
  getTheme() {
    let _0x5853a1 = this._getCurrentObject();
    return JSON.parse(
      JSON.stringify({
        styleId: _0x5853a1.styleId,
        options: _0x5853a1.options,
      }),
    );
  }
  setTheme(_0x2d0765) {
    return (
      this._getCurrentObject(),
      o(this._model, this._injector, e.pdfUpdateTableThemeAction, {
        pageId: this._pageId,
        tableId: this._objectId,
        styleId: _0x2d0765.styleId,
        options: _0x2d0765.options,
      }),
      this
    );
  }
};
I = m([p(3, (0, n.Inject)(n.Injector))], I);
let L = class {
  constructor(_0x43b0a5, _0x4575f5, _0x219467, _0x1e9e46, _0x104de5) {
    ((this._model = _0x43b0a5),
      (this._pageId = _0x4575f5),
      (this._tableId = _0x219467),
      (this._cellId = _0x1e9e46),
      (this._injector = _0x104de5));
  }
  getText() {
    let { cell: _0x3ae1e8 } = this._resolveCell(),
      _0x59c337 = this._getTextStory(_0x3ae1e8);
    return _0x59c337.blocks["flatMap"]((_0x5ccb79) => _0x5ccb79.runIds)
      .map((_0x485820) => {
        var _0x2728d2;
        return (
          ((_0x2728d2 = _0x59c337.runs[_0x485820]) == null
            ? undefined
            : _0x2728d2.text) ?? ""
        );
      })
      .join("");
  }
  setText(_0x2e6853) {
    let { cell: _0x2ccf79 } = this._resolveCell(),
      _0x5e8c9d = this._getTextStory(_0x2ccf79),
      _0x1621bc = _0x5e8c9d.blocks["flatMap"]((_0x343124) => _0x343124.runIds),
      _0x4b6090 = _0x1621bc[0];
    if (!_0x4b6090 || _0x1621bc.length !== 1 || !_0x5e8c9d.runs[_0x4b6090])
      throw Error(
        "PDF table cell " +
          this._cellId +
          " is not a single-run editable cell.",
      );
    return (
      o(this._model, this._injector, e.pdfEditTextAction, {
        pageId: this._pageId,
        objectId: this._tableId,
        storyId: _0x5e8c9d.id,
        runId: _0x4b6090,
        previousText: _0x5e8c9d.runs[_0x4b6090].text,
        text: _0x2e6853,
      }),
      this
    );
  }
  getStyle() {
    let { cell: _0x29b3a1 } = this._resolveCell();
    return JSON.parse(JSON.stringify(_0x29b3a1.style ?? {}));
  }
  setStyle(_0x3841de) {
    let { cell: _0x3d150d } = this._resolveCell();
    return (
      (_0x3841de.fontColor !== undefined ||
        _0x3841de.horizontalAlignment !== undefined) &&
        this._getTextStory(_0x3d150d),
      o(this._model, this._injector, e.pdfUpdateTableCellStyleAction, {
        pageId: this._pageId,
        tableId: this._tableId,
        cellId: this._cellId,
        fontColor: _0x3841de.fontColor,
        horizontalAlignment:
          _0x3841de.horizontalAlignment === undefined
            ? undefined
            : z(_0x3841de.horizontalAlignment),
        patch: { fill: _0x3841de.fill, verticalAlign: _0x3841de.verticalAlign },
      }),
      this
    );
  }
  _resolveCell() {
    if (
      !this._model["getMaterializedDocument"]().pages["some"](
        (_0xa841e8) => _0xa841e8.id === this._pageId,
      )
    )
      throw Error("PDF page " + this._pageId + " no longer exists.");
    let _0x2c1e95 = this._model["getEditState"]().overlayObjects[this._tableId],
      _0x221676 =
        (_0x2c1e95 == null ? undefined : _0x2c1e95.pageId) === this._pageId
          ? _0x2c1e95.object
          : undefined,
      _0x3a12c5 =
        (_0x221676 == null ? undefined : _0x221676.type) ===
        e.PdfObjectType["TABLE"]
          ? _0x221676.cells["find"](
              (_0x985607) => _0x985607.id === this._cellId,
            )
          : undefined;
    if (!_0x221676 || _0x221676.type !== e.PdfObjectType["TABLE"] || !_0x3a12c5)
      throw Error("PDF table cell " + this._cellId + " no longer exists.");
    return { table: _0x221676, cell: _0x3a12c5 };
  }
  _getTextStory(_0xdd3958) {
    let _0x11a3f5 =
      this._model["getEditState"]().overlayTextStories[
        _0xdd3958.contentStoryId
      ];
    if (!_0x11a3f5)
      throw Error(
        "PDF table-cell story " +
          _0xdd3958.contentStoryId +
          " no longer exists on table " +
          this._tableId +
          " page " +
          this._pageId +
          ".",
      );
    return _0x11a3f5;
  }
};
L = m([p(4, (0, n.Inject)(n.Injector))], L);
function R(_0x2c62fb) {
  return "pdf-facade-table-" + _0x2c62fb + "-" + (0, n.generateRandomId)(12);
}
function z(_0x5bb6e3) {
  switch (_0x5bb6e3) {
    case n.HorizontalAlign["LEFT"]:
      return "left";
    case n.HorizontalAlign["CENTER"]:
      return "center";
    case n.HorizontalAlign["RIGHT"]:
      return "right";
    case n.HorizontalAlign["JUSTIFIED"]:
    case n.HorizontalAlign["BOTH"]:
      return "justify";
    default:
      throw RangeError("PDF paragraph horizontal alignment is unsupported.");
  }
}
function B(_0x1c9339) {
  let _0xca1b4 = R("story"),
    _0xe566ad = R("block"),
    _0x29d426 = R("run");
  return {
    id: _0xca1b4,
    objectIds: [_0x1c9339],
    blocks: [
      {
        id: _0xe566ad,
        runIds: [_0x29d426],
        role: e.PdfSemanticRole["PARAGRAPH"],
      },
    ],
    runs: { [_0x29d426]: { id: _0x29d426, text: "", fontSize: 12 } },
  };
}
let V = class extends c {
  constructor(_0x542323, _0x27096f, _0x44a769, _0x169a4d) {
    super(
      _0x542323,
      _0x27096f,
      _0x44a769,
      e.PdfObjectType["TEXT_BOX"],
      _0x169a4d,
    );
  }
  getText() {
    let _0x56e98e = this._model["getMaterializedDocument"](),
      _0xa2caab = _0x56e98e.objects[this._objectId];
    if (!_0xa2caab || _0xa2caab.type !== e.PdfObjectType["TEXT_BOX"])
      throw Error(
        "PDF text box " +
          this._objectId +
          " no longer exists on page " +
          this._pageId +
          ".",
      );
    let _0x4dcccb = _0xa2caab;
    if (_0x4dcccb.runs)
      return _0x4dcccb.runs["map"]((_0x1a6fa8) => _0x1a6fa8.text).join("");
    let _0x5b3b87 = _0x4dcccb.textStoryId
      ? _0x56e98e.textStories[_0x4dcccb.textStoryId]
      : undefined;
    return (
      (_0x5b3b87 == null
        ? undefined
        : _0x5b3b87.blocks["flatMap"]((_0x509cfc) => _0x509cfc.runIds)
            .map((_0x23f565) => {
              var _0x379d67;
              return (
                ((_0x379d67 = _0x5b3b87.runs[_0x23f565]) == null
                  ? undefined
                  : _0x379d67.text) ?? ""
              );
            })
            .join("")) ?? ""
    );
  }
  getTextRuns() {
    let _0x1d9449 = this._getCurrentObject();
    return JSON.parse(JSON.stringify(_0x1d9449.runs ?? []));
  }
  setText(_0x44fff4) {
    return (
      this._getCurrentObject(),
      o(this._model, this._injector, e.pdfEditTextAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        text: _0x44fff4,
      }),
      this
    );
  }
  setTextStyle(_0x1b5bb4, _0x382fff) {
    return (
      this._getCurrentObject(),
      _0x382fff
        ? o(this._model, this._injector, e.pdfUpdateTextRangeStyleAction, {
            pageId: this._pageId,
            objectId: this._objectId,
            range: _0x382fff,
            textStyle: _0x1b5bb4,
          })
        : o(this._model, this._injector, e.pdfUpdateTextStyleAction, {
            pageId: this._pageId,
            objectId: this._objectId,
            textStyle: _0x1b5bb4,
          }),
      this
    );
  }
  getTextAnchor() {
    return this._getCurrentObject().textAnchor ?? e.PdfTextAnchor["START"];
  }
  setTextAnchor(_0x51da90) {
    return (
      this._getCurrentObject(),
      o(this._model, this._injector, e.pdfUpdateTextStyleAction, {
        pageId: this._pageId,
        objectId: this._objectId,
        textAnchor: _0x51da90,
      }),
      this
    );
  }
};
V = m([p(3, (0, n.Inject)(n.Injector))], V);
let H = class {
  constructor(_0x43876b, _0x48fc0e, _0x37575a, _0x13decc, _0x15ef8c) {
    ((this._model = _0x43876b),
      (this._pageId = _0x48fc0e),
      (this._target = _0x37575a),
      (this._rootDisplayListIds = _0x13decc),
      (this._injector = _0x15ef8c),
      S(this, "_identity", undefined),
      S(this, "_id", undefined),
      S(this, "_text", undefined),
      S(this, "_runs", undefined),
      S(this, "_bounds", undefined),
      (this._identity = W(_0x37575a)),
      (this._id = le(_0x43876b.getUnitId(), _0x48fc0e, this._identity)),
      (this._text = _0x37575a.text),
      (this._runs = G(_0x37575a.runs ?? [])),
      (this._bounds = ce(_0x37575a.bbox)));
  }
  getId() {
    return this._id;
  }
  getText() {
    return this._text;
  }
  getTextRuns() {
    return G(this._runs);
  }
  getBounds() {
    return { ...this._bounds };
  }
  replaceText(_0xc7f44d) {
    var _0x34668d, _0x5ca9aa;
    let _0x3e8f93 = this._resolveCurrentTarget(),
      _0x3f0575 = "pdf-facade-native-text-" + (0, n.generateRandomId)(12),
      _0x30ae4f =
        (_0x34668d = _0x3e8f93.runs) == null ? undefined : _0x34668d[0],
      _0x13d480 = _0x30ae4f
        ? [se(_0x30ae4f, _0xc7f44d)]
        : [{ text: _0xc7f44d, fontSize: 12 }];
    return (
      o(this._model, this._injector, e.pdfPromoteNativeTextAction, {
        pageId: this._pageId,
        text: _0xc7f44d,
        bbox: _0x3e8f93.promotionBbox ?? _0x3e8f93.bbox,
        transform: _0x3e8f93.promotionTransform,
        displayOperationIds: _0x3e8f93.displayOperationIds ??
          ((_0x5ca9aa = _0x3e8f93.source) == null
            ? undefined
            : _0x5ca9aa.operatorIds) ?? [_0x3e8f93.id],
        runs: _0x13d480,
        source: _0x3e8f93.source,
        objectId: _0x3f0575,
        zIndex: _0x3e8f93.zIndex,
        metadata: e.PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA,
      }),
      this._injector["createInstance"](V, this._model, this._pageId, _0x3f0575)
    );
  }
  _resolveCurrentTarget() {
    let _0x14b79d = (0, e.createPdfNativeTextHitTargets)(
      this._model["getMaterializedDocument"](),
      this._pageId,
      { rootDisplayListIds: this._rootDisplayListIds },
    ).find((_0x5dc8cd) => W(_0x5dc8cd) === this._identity);
    if (!_0x14b79d || U(this._model, _0x14b79d))
      throw Error(
        "Native PDF text span " +
          this._id +
          " is stale, hidden, or already replaced.",
      );
    return _0x14b79d;
  }
};
H = m([p(4, (0, n.Inject)(n.Injector))], H);
function U(_0x43e709, _0x2757cf) {
  return Object.values(_0x43e709.getEditState().sourceSuppressions).some(
    (_0x2238a0) =>
      _0x2238a0.exportDisposition !==
        e.PdfExportDisposition["PRESERVE_NATIVE"] && ae(_0x2238a0, _0x2757cf),
  );
}
function W(_0x201a25) {
  var _0x4515ba, _0x2a4a44, _0x6a356a;
  return JSON.stringify(
    ((_0x4515ba = _0x201a25.source) == null
      ? undefined
      : _0x4515ba.operationPath) ?? [
      {
        displayListId:
          (_0x2a4a44 = _0x201a25.source) == null ||
          (_0x2a4a44 = _0x2a4a44.displayListIds) == null
            ? undefined
            : _0x2a4a44[0],
        operatorId:
          ((_0x6a356a = _0x201a25.displayOperationIds) == null
            ? undefined
            : _0x6a356a[0]) ?? _0x201a25.id,
      },
    ],
  );
}
function ae(_0x4785ad, _0xd997fd) {
  var _0x2d0a95, _0x187fbe;
  if (_0x4785ad.pageId && _0x4785ad.pageId !== _0xd997fd.pageId) return false;
  if ((_0x2d0a95 = _0x4785ad.operationPath) != null && _0x2d0a95.length) {
    var _0x1492a4;
    return oe(
      _0x4785ad.operationPath,
      (_0x1492a4 = _0xd997fd.source) == null
        ? undefined
        : _0x1492a4.operationPath,
    );
  }
  let _0x4ae155 = _0xd997fd.displayOperationIds ??
    ((_0x187fbe = _0xd997fd.source) == null
      ? undefined
      : _0x187fbe.operatorIds) ?? [_0xd997fd.id];
  return (_0x4785ad.operatorIds ?? []).some((_0x21843b) =>
    _0x4ae155.includes(_0x21843b),
  );
}
function oe(_0x3f8a17, _0x37437f) {
  return !!(
    _0x37437f &&
    _0x3f8a17.length === _0x37437f.length &&
    _0x3f8a17.every((_0x411e2a, _0x59d11d) => {
      let _0xdfb2cc = _0x37437f[_0x59d11d];
      return (
        _0x411e2a.displayListId ===
          (_0xdfb2cc == null ? undefined : _0xdfb2cc.displayListId) &&
        _0x411e2a.operatorId === _0xdfb2cc.operatorId &&
        _0x411e2a.resourceName === _0xdfb2cc.resourceName &&
        _0x411e2a.objectRef === _0xdfb2cc.objectRef &&
        _0x411e2a.assetId === _0xdfb2cc.assetId
      );
    })
  );
}
function se(_0x3d4a73, _0x4c704b) {
  let { glyphs: _0x432040, source: _0x3bea0f, ..._0x37a1ff } = _0x3d4a73;
  return { ..._0x37a1ff, text: _0x4c704b };
}
function ce(_0x2bd746) {
  return {
    left: (0, e.emuToPt)(_0x2bd746[0]),
    top: (0, e.emuToPt)(_0x2bd746[1]),
    width: (0, e.emuToPt)(_0x2bd746[2] - _0x2bd746[0]),
    height: (0, e.emuToPt)(_0x2bd746[3] - _0x2bd746[1]),
  };
}
function le(_0x61b019, _0x2c9c6a, _0x4969c2) {
  let _0x2c8649 = _0x61b019 + ":" + _0x2c9c6a + ":" + _0x4969c2,
    _0x5b6fdf = 2166136261;
  for (let _0x11a382 = 0; _0x11a382 < _0x2c8649.length; _0x11a382++)
    ((_0x5b6fdf ^= _0x2c8649.charCodeAt(_0x11a382)),
      (_0x5b6fdf = Math.imul(_0x5b6fdf, 16777619)));
  return "pdf-native-text-" + (_0x5b6fdf >>> 0).toString(36);
}
function G(_0x35e387) {
  return JSON.parse(JSON.stringify(_0x35e387));
}
let K = class {
  constructor(_0x28d39c, _0xb4606, _0x4cf40c) {
    ((this._model = _0x28d39c),
      (this._pageId = _0xb4606),
      (this._injector = _0x4cf40c));
  }
  getId() {
    return this._pageId;
  }
  getIndex() {
    return this._getCurrentPage().index;
  }
  getData() {
    return JSON.parse(JSON.stringify(this._getCurrentPage()));
  }
  getElements() {
    return Object.values(this._model["getEditState"]().overlayObjects)
      .filter((_0x1d1307) => _0x1d1307.pageId === this._pageId)
      .sort((_0x5a7004, _0x5059bc) => _0x5a7004.zIndex - _0x5059bc.zIndex)
      .flatMap((_0x1382ec) => {
        let _0x3f6a97 = this._createElement(_0x1382ec.object["id"]);
        return _0x3f6a97 ? [_0x3f6a97] : [];
      });
  }
  getElementById(_0x17a4de) {
    let _0xd6e240 = this._model["getEditState"]().overlayObjects[_0x17a4de];
    return !_0xd6e240 || _0xd6e240.pageId !== this._pageId
      ? null
      : this._createElement(_0x17a4de);
  }
  getTextBoxes() {
    return this._filterTextElements((_0x4edc71) => !_0x4edc71);
  }
  getImages() {
    return this.getElements().filter(
      (_0x251132) => _0x251132.getType() === e.PdfObjectType["IMAGE"],
    );
  }
  getParagraphs() {
    return this._filterTextElements(
      (_0x13a85e) => !!(_0x13a85e && !q(_0x13a85e)),
    );
  }
  getLists() {
    return this._filterTextElements(
      (_0x2ebc47) => !!(_0x2ebc47 && q(_0x2ebc47)),
    );
  }
  getTables() {
    return this.getElements().filter(
      (_0x1b9746) => _0x1b9746.getType() === e.PdfObjectType["TABLE"],
    );
  }
  getDividers() {
    return this.getElements().filter(
      (_0x2e6408) => _0x2e6408.getType() === e.PdfObjectType["PATH"],
    );
  }
  getAnnotations() {
    return this.getElements().filter(
      (_0x3fe11f) => _0x3fe11f.getType() === e.PdfObjectType["ANNOTATION"],
    );
  }
  getTextSpans() {
    let _0x2e766e = this._model["getMaterializedDocument"](),
      _0x481033 = me(_0x2e766e, this._pageId);
    return (0, e.createPdfNativeTextHitTargets)(_0x2e766e, this._pageId, {
      rootDisplayListIds: _0x481033,
    })
      .filter((_0x144d1d) => !U(this._model, _0x144d1d))
      .map((_0x2c8f7f) =>
        this._injector["createInstance"](
          H,
          this._model,
          this._pageId,
          _0x2c8f7f,
          _0x481033,
        ),
      );
  }
  insertTextBox(_0x5d9efd) {
    let _0x328043 = this._getCurrentPage(),
      _0x15e5e5 = J("textBox", _0x5d9efd.id),
      { bbox: _0x53c43e, transform: _0x3695c8 } = X(
        _0x5d9efd,
        (0, e.createPdfDefaultTextBoxInsertionBbox)(_0x328043),
      );
    return (
      o(this._model, this._injector, e.pdfAddTextBoxAction, {
        pageId: this._pageId,
        text: _0x5d9efd.text,
        objectId: _0x15e5e5,
        zIndex: _0x5d9efd.index,
        bbox: _0x53c43e,
        transform: _0x3695c8,
        fontFamily: _0x5d9efd.fontFamily,
        fontSize: _0x5d9efd.fontSize,
        fill: _0x5d9efd.fill,
      }),
      this._injector["createInstance"](V, this._model, this._pageId, _0x15e5e5)
    );
  }
  insertParagraph(_0x259e81) {
    let _0x1f6008 = this._getCurrentPage(),
      _0x3ab513 = J("paragraph", _0x259e81.id),
      _0x1cd4a5 = X(
        _0x259e81,
        (0, e.createPdfDefaultParagraphInsertionBbox)(_0x1f6008),
      );
    return (
      o(this._model, this._injector, e.pdfAddParagraphAction, {
        pageId: this._pageId,
        objectId: _0x3ab513,
        text: _0x259e81.text,
        zIndex: _0x259e81.index,
        ..._0x1cd4a5,
        fontFamily: _0x259e81.fontFamily,
        fontSize: _0x259e81.fontSize,
        fill: _0x259e81.fill,
      }),
      this._injector["createInstance"](F, this._model, this._pageId, _0x3ab513)
    );
  }
  insertList(_0x5d3ef2) {
    let _0x4df120 = this._getCurrentPage(),
      _0x1260c4 = J("list", _0x5d3ef2.id),
      _0x170774 = X(
        _0x5d3ef2,
        (0, e.createPdfDefaultListInsertionBbox)(_0x4df120),
      );
    return (
      o(this._model, this._injector, e.pdfAddListAction, {
        pageId: this._pageId,
        objectId: _0x1260c4,
        text: _0x5d3ef2.text,
        kind: _0x5d3ef2.kind,
        presetId: _0x5d3ef2.preset,
        zIndex: _0x5d3ef2.index,
        ..._0x170774,
        fontFamily: _0x5d3ef2.fontFamily,
        fontSize: _0x5d3ef2.fontSize,
        fill: _0x5d3ef2.fill,
      }),
      this._injector["createInstance"](P, this._model, this._pageId, _0x1260c4)
    );
  }
  insertTable(_0x37c5e2) {
    let _0x251aff = this._getCurrentPage(),
      _0x2f4584 = J("table", _0x37c5e2.id),
      _0x3c792e = (0, e.createPdfDefaultTableInsertionLayout)(
        _0x251aff,
        _0x37c5e2.rowCount,
        _0x37c5e2.columnCount,
      ),
      _0x3fb6ba = X(_0x37c5e2, _0x3c792e.bbox);
    return (
      o(this._model, this._injector, e.pdfAddTableAction, {
        pageId: this._pageId,
        tableId: _0x2f4584,
        rowCount: _0x37c5e2.rowCount,
        columnCount: _0x37c5e2.columnCount,
        cellTexts: _0x37c5e2.cellTexts,
        defaultCellStyle: _0x37c5e2.defaultCellStyle ?? {
          padding: {
            top: _0x3c792e.padding,
            right: _0x3c792e.padding,
            bottom: _0x3c792e.padding,
            left: _0x3c792e.padding,
          },
        },
        styleId: _0x37c5e2.styleId,
        options: _0x37c5e2.options,
        zIndex: _0x37c5e2.index,
        ..._0x3fb6ba,
      }),
      this._injector["createInstance"](I, this._model, this._pageId, _0x2f4584)
    );
  }
  insertDivider(_0x163a13 = {}) {
    let _0x2f95da = this._getCurrentPage(),
      _0x2bcc3d = J("divider", _0x163a13.id),
      _0x578efa = X(
        _0x163a13,
        (0, e.createPdfDefaultDividerInsertionBbox)(_0x2f95da),
      );
    return (
      o(this._model, this._injector, e.pdfAddDividerAction, {
        pageId: this._pageId,
        objectId: _0x2bcc3d,
        strokeColor: _0x163a13.strokeColor,
        strokeWidth:
          _0x163a13.strokeWidth === undefined
            ? undefined
            : (0, e.ptToEmu)(_0x163a13.strokeWidth),
        zIndex: _0x163a13.index,
        ..._0x578efa,
      }),
      this._injector["createInstance"](y, this._model, this._pageId, _0x2bcc3d)
    );
  }
  insertAnnotation(_0x557199) {
    let _0x7121ee = J("annotation", _0x557199.id),
      _0xb5290a = X(_0x557199, [0, 0, (0, e.ptToEmu)(144), (0, e.ptToEmu)(36)]);
    return (
      o(this._model, this._injector, e.pdfAddAnnotationAction, {
        pageId: this._pageId,
        objectId: _0x7121ee,
        annotationType: _0x557199.annotationType,
        ...de(_0x557199, _0xb5290a.bbox),
        zIndex: _0x557199.index,
        ..._0xb5290a,
      }),
      this._injector["createInstance"](h, this._model, this._pageId, _0x7121ee)
    );
  }
  newImage(_0x3fb104) {
    return _0x3fb104 instanceof C
      ? _0x3fb104.toBuilder()
      : new w(
          this._model["getUnitId"](),
          this._pageId,
          _0x3fb104 ? { id: _0x3fb104 } : undefined,
        );
  }
  insertImage(_0x40e8f1, _0x43cd04) {
    ue(this._model, this._pageId, _0x40e8f1);
    let _0x36c4e8 = D(this._model, _0x40e8f1),
      _0x27d6f3 = O(_0x40e8f1.element["transform"]);
    return (
      o(this._model, this._injector, e.pdfAddImageAction, {
        pageId: this._pageId,
        objectId: _0x40e8f1.element["id"],
        assetId: _0x36c4e8.asset["id"],
        resource: _0x36c4e8,
        crop: _0x40e8f1.element["crop"]
          ? k(_0x40e8f1.element["crop"], _0x27d6f3.bbox)
          : undefined,
        opacity: _0x40e8f1.element["opacity"],
        zIndex: _0x43cd04,
        ..._0x27d6f3,
      }),
      this._injector["createInstance"](
        C,
        this._model,
        this._pageId,
        _0x40e8f1.element["id"],
      )
    );
  }
  async insertImageAsync(_0xc89755, _0x1d9db5 = {}) {
    let _0x51fb37 = this.newImage(_0x1d9db5.id),
      _0x2393ed =
        typeof _0xc89755 == "string"
          ? _0xc89755
          : await _0xc89755.getBlob().getDataAsString();
    (_0x51fb37.setSource(_0x2393ed, _0x1d9db5.imageSourceType),
      (_0x1d9db5.left !== undefined || _0x1d9db5.top !== undefined) &&
        _0x51fb37.setAbsolutePosition(_0x1d9db5.left ?? 0, _0x1d9db5.top ?? 0),
      (_0x1d9db5.width !== undefined || _0x1d9db5.height !== undefined) &&
        _0x51fb37.setSize(_0x1d9db5.width ?? 288, _0x1d9db5.height ?? 162),
      _0x1d9db5.rotation !== undefined &&
        _0x51fb37.setRotation(_0x1d9db5.rotation),
      _0x1d9db5.crop && _0x51fb37.setCrop(_0x1d9db5.crop));
    let _0x382cb7 = _0x51fb37.build();
    return (
      (_0x382cb7.element["opacity"] = _0x1d9db5.opacity),
      this.insertImage(_0x382cb7, _0x1d9db5.index)
    );
  }
  _filterTextElements(_0xb708d0) {
    let _0x38a8a7 = this.getElements().filter(
      (_0x357e09) => _0x357e09.getType() === e.PdfObjectType["TEXT_BOX"],
    );
    if (_0x38a8a7.length === 0) return [];
    let _0xbdb1ee = this._model["getMaterializedDocument"]();
    return _0x38a8a7.filter((_0x1f04a6) =>
      _0xb708d0(this._getTextStory(_0xbdb1ee, _0x1f04a6.getId())),
    );
  }
  _getTextStory(_0x14329f, _0x3471db) {
    var _0x53c2d5;
    let _0x4a1a74 =
      _0x14329f.objects[_0x3471db] ??
      ((_0x53c2d5 = this._model["getEditState"]().overlayObjects[_0x3471db]) ==
      null
        ? undefined
        : _0x53c2d5.object);
    return (_0x4a1a74 == null ? undefined : _0x4a1a74.type) ===
      e.PdfObjectType["TEXT_BOX"] && _0x4a1a74.textStoryId
      ? _0x14329f.textStories[_0x4a1a74.textStoryId]
      : undefined;
  }
  _createElement(_0x11cf28) {
    var _0xeb76e8;
    let _0x2256fb = this._model["getMaterializedDocument"](),
      _0x3ab147 =
        _0x2256fb.objects[_0x11cf28] ??
        ((_0xeb76e8 =
          this._model["getEditState"]().overlayObjects[_0x11cf28]) == null
          ? undefined
          : _0xeb76e8.object);
    if (!_0x3ab147) return null;
    if (_0x3ab147.type === e.PdfObjectType["TEXT_BOX"]) {
      let _0x3a6f9f = _0x3ab147.textStoryId,
        _0x5ccfe3 = _0x3a6f9f ? _0x2256fb.textStories[_0x3a6f9f] : undefined;
      return _0x5ccfe3
        ? q(_0x5ccfe3)
          ? this._injector["createInstance"](
              P,
              this._model,
              this._pageId,
              _0x11cf28,
            )
          : this._injector["createInstance"](
              F,
              this._model,
              this._pageId,
              _0x11cf28,
            )
        : this._injector["createInstance"](
            V,
            this._model,
            this._pageId,
            _0x11cf28,
          );
    }
    return _0x3ab147.type === e.PdfObjectType["IMAGE"]
      ? this._injector["createInstance"](
          C,
          this._model,
          this._pageId,
          _0x11cf28,
        )
      : _0x3ab147.type === e.PdfObjectType["TABLE"]
        ? this._injector["createInstance"](
            I,
            this._model,
            this._pageId,
            _0x11cf28,
          )
        : _0x3ab147.type === e.PdfObjectType["PATH"] &&
            (0, e.isPdfEditorDividerObject)(_0x3ab147)
          ? this._injector["createInstance"](
              y,
              this._model,
              this._pageId,
              _0x11cf28,
            )
          : _0x3ab147.type === e.PdfObjectType["ANNOTATION"]
            ? this._injector["createInstance"](
                h,
                this._model,
                this._pageId,
                _0x11cf28,
              )
            : null;
  }
  _getCurrentPage() {
    let _0x46b511 = this._model["getMaterializedDocument"]().pages["find"](
      (_0x28ae01) => _0x28ae01.id === this._pageId,
    );
    if (!_0x46b511)
      throw Error("PDF page " + this._pageId + "\x20no\x20longer\x20exists.");
    return _0x46b511;
  }
};
K = m([p(2, (0, n.Inject)(n.Injector))], K);
function q(_0x4e822c) {
  return (
    _0x4e822c.blocks["some"]((_0x27ce2b) => !!_0x27ce2b.listItem) ||
    Object.keys(_0x4e822c.lists ?? {}).length > 0
  );
}
function J(_0x5a3b02, _0x520b4e) {
  return (
    _0x520b4e ?? "pdf-facade-" + _0x5a3b02 + "-" + (0, n.generateRandomId)(12)
  );
}
function ue(_0x4eb9c2, _0x135e7e, _0x4302c7) {
  if (
    _0x4302c7.unitId !== _0x4eb9c2.getUnitId() ||
    _0x4302c7.pageId !== _0x135e7e
  )
    throw RangeError(
      "PDF image builder info belongs to another PDF unit or page.",
    );
}
function de(_0x53d187, _0x1bfd88) {
  let _0x165e59 = _0x53d187.annotationType;
  switch (_0x53d187.annotationType) {
    case e.PdfAnnotationType["HIGHLIGHT"]:
    case e.PdfAnnotationType["UNDERLINE"]:
    case e.PdfAnnotationType["STRIKEOUT"]:
    case e.PdfAnnotationType["SQUIGGLY"]: {
      let {
        quadPoints: _0xf77e54,
        stroke: _0x4d3061,
        ..._0x212946
      } = _0x53d187.markup ?? {};
      return {
        markup: {
          ..._0x212946,
          ...(_0x4d3061 === undefined ? {} : { stroke: i(_0x4d3061) }),
          quadPoints:
            _0xf77e54 != null && _0xf77e54.length
              ? _0xf77e54.map(fe)
              : [pe(_0x1bfd88)],
        },
      };
    }
    case e.PdfAnnotationType["INK"]: {
      if (
        !_0x53d187.ink["paths"].length ||
        _0x53d187.ink["paths"].some((_0x2cfba1) => !_0x2cfba1.length)
      )
        throw RangeError(
          "PDF ink annotation requires at least one non-empty path.",
        );
      let { paths: _0x2135c2, stroke: _0x14947a } = _0x53d187.ink;
      return {
        ink: {
          ...(_0x14947a === undefined ? {} : { stroke: i(_0x14947a) }),
          paths: _0x2135c2.map((_0x75d9aa) => _0x75d9aa.map(Y)),
        },
      };
    }
    default:
      throw RangeError(
        "Unsupported PDF Facade annotation type: " + _0x165e59 + ".",
      );
  }
}
function Y([_0x5486ff, _0x5da907]) {
  return [(0, e.ptToEmu)(_0x5486ff), (0, e.ptToEmu)(_0x5da907)];
}
function fe([_0x1fe4e2, _0x3b6176, _0x3a2fea, _0x1f353c]) {
  return [Y(_0x1fe4e2), Y(_0x3b6176), Y(_0x3a2fea), Y(_0x1f353c)];
}
function pe([_0xd2f414, _0x41c0a2, _0xd24a9, _0x2786b8]) {
  return [
    [_0xd2f414, _0x41c0a2],
    [_0xd24a9, _0x41c0a2],
    [_0xd2f414, _0x2786b8],
    [_0xd24a9, _0x2786b8],
  ];
}
function me(_0x267096, _0xb8f0b) {
  let _0xc5b20b = Object.values(_0x267096.displayLists).filter(
      (_0xbc93fb) => _0xbc93fb.pageId === _0xb8f0b,
    ),
    _0x57869b = new Set();
  _0xc5b20b.forEach((_0x99c681) => {
    _0x99c681.ops["forEach"]((_0x384443) => {
      var _0x2c19fb;
      if (_0x384443.type !== e.PdfDisplayOpType["FORM_XOBJECT"]) return;
      let _0x2cc00a =
        _0x384443.displayListId ??
        (_0x384443.assetId
          ? (_0x2c19fb = _0x267096.assets["formXObjects"][_0x384443.assetId]) ==
            null
            ? undefined
            : _0x2c19fb.displayListId
          : undefined);
      _0x2cc00a && _0x57869b.add(_0x2cc00a);
    });
  });
  let _0x50419d = _0xc5b20b
    .map((_0x56d35a) => _0x56d35a.id)
    .filter((_0x227b8b) => !_0x57869b.has(_0x227b8b));
  return _0x50419d.length
    ? _0x50419d
    : _0xc5b20b.map((_0x1c4aac) => _0x1c4aac.id);
}
function X(_0x4ebac4, _0x457adb) {
  let _0x488508 = _0x4ebac4.left ?? (0, e.emuToPt)(_0x457adb[0]),
    _0x1285e8 = _0x4ebac4.top ?? (0, e.emuToPt)(_0x457adb[1]),
    _0x57105d = _0x4ebac4.width ?? (0, e.emuToPt)(_0x457adb[2] - _0x457adb[0]),
    _0x75077f = _0x4ebac4.height ?? (0, e.emuToPt)(_0x457adb[3] - _0x457adb[1]),
    _0x5c2739 = _0x4ebac4.rotation ?? 0;
  (Z(_0x488508, "left"),
    Z(_0x1285e8, "top"),
    Q(_0x57105d, "width"),
    Q(_0x75077f, "height"),
    Z(_0x5c2739, "rotation"));
  let _0x38db62 = [
    (0, e.ptToEmu)(_0x488508),
    (0, e.ptToEmu)(_0x1285e8),
    (0, e.ptToEmu)(_0x488508 + _0x57105d),
    (0, e.ptToEmu)(_0x1285e8 + _0x75077f),
  ];
  return {
    bbox: _0x38db62,
    ...(_0x5c2739 === 0 ? {} : { transform: he(_0x38db62, _0x5c2739) }),
  };
}
function he(_0x25bbeb, _0x3f729e) {
  let _0x5cc7b2 = (_0x3f729e * Math.PI) / 180,
    _0x10cf53 = Math.cos(_0x5cc7b2),
    _0x214c5e = Math.sin(_0x5cc7b2),
    _0x26cb41 = (_0x25bbeb[0] + _0x25bbeb[2]) / 2,
    _0x5e90de = (_0x25bbeb[1] + _0x25bbeb[3]) / 2;
  return [
    _0x10cf53,
    _0x214c5e,
    -_0x214c5e,
    _0x10cf53,
    _0x26cb41 - _0x10cf53 * _0x26cb41 + _0x214c5e * _0x5e90de,
    _0x5e90de - _0x214c5e * _0x26cb41 - _0x10cf53 * _0x5e90de,
  ];
}
function Z(_0x3d2b22, _0x55cdaa) {
  if (!Number.isFinite(_0x3d2b22))
    throw RangeError(
      "PDF text box " + _0x55cdaa + "\x20must\x20be\x20a\x20finite\x20number.",
    );
}
function Q(_0x3c0285, _0x283fa4) {
  if (!Number.isFinite(_0x3c0285) || _0x3c0285 <= 0)
    throw RangeError(
      "PDF text box " + _0x283fa4 + " must be a positive finite number.",
    );
}
let $ = class extends t.FBaseInitialable {
  constructor(_0x3ebfd0, _0x3b8abe) {
    (super(_0x3b8abe), (this._model = _0x3ebfd0), (this._injector = _0x3b8abe));
  }
  getId() {
    return this._model["getUnitId"]();
  }
  getName() {
    return this._model["getSnapshot"]().name;
  }
  save() {
    return n.Tools["deepClone"](this._model["getSnapshot"]());
  }
  getDocument() {
    return this._model["getDocument"]();
  }
  getModel() {
    return this._model;
  }
  insertPage(_0x5a18ae) {
    let _0x401428 = this._model["getMaterializedDocument"]().pages,
      _0x4c264c = _0x5a18ae ?? _0x401428.length;
    if (
      !Number.isInteger(_0x4c264c) ||
      _0x4c264c < 0 ||
      _0x4c264c > _0x401428.length
    )
      throw RangeError("PDF page insertion index is outside the document.");
    let _0x208bb9 = _0x401428[_0x4c264c - 1] ?? _0x401428[_0x4c264c],
      _0x236b70 = (0, e.createPdfPage)({
        id: "pdf-page-" + (0, n.generateRandomId)(12),
        index: _0x4c264c,
        size: _0x208bb9
          ? { ..._0x208bb9.size }
          : {
              width: (0, e.ptToEmu)(e.PDF_A4_PAGE_WIDTH_PT),
              height: (0, e.ptToEmu)(e.PDF_A4_PAGE_HEIGHT_PT),
            },
        rotation: _0x208bb9 == null ? undefined : _0x208bb9.rotation,
        pdfBoxes: _0x208bb9 == null ? undefined : _0x208bb9.pdfBoxes,
      });
    return (
      o(this._model, this._injector, e.pdfInsertPageAction, {
        page: _0x236b70,
        atIndex: _0x4c264c,
        orderedPageIds: _0x401428.map((_0x38dec7) => _0x38dec7.id),
      }),
      this._injector["createInstance"](K, this._model, _0x236b70.id)
    );
  }
  getPages() {
    return this._model["getMaterializedDocument"]().pages["map"]((_0xfadeac) =>
      this._injector["createInstance"](K, this._model, _0xfadeac.id),
    );
  }
  getPageById(_0x4b72ec) {
    return (
      this.getPages().find((_0xe6930) => _0xe6930.getId() === _0x4b72ec) ?? null
    );
  }
  getPageByIndex(_0x13bdc3) {
    return this.getPages()[_0x13bdc3] ?? null;
  }
};
$ = m([p(1, (0, n.Inject)(n.Injector))], $);
var ge = class extends t.FUniver {
  createPdf(_0x58fbce = {}, _0x19dc58) {
    let _0x392cd0 = this._injector["get"](n.IUniverInstanceService).createUnit(
      n.UniverInstanceType["UNIVER_PDF"],
      _0x58fbce,
      _0x19dc58,
    );
    return this._injector["createInstance"]($, _0x392cd0);
  }
  getActivePdf() {
    let _0x2de6b6 = this._injector["get"](
      n.IUniverInstanceService,
    ).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_PDF"]);
    return _0x2de6b6 ? this._injector["createInstance"]($, _0x2de6b6) : null;
  }
  getPdf(_0x2ee28d) {
    let _0x18dc09 = this._injector["get"](n.IUniverInstanceService).getUnit(
      _0x2ee28d,
      n.UniverInstanceType["UNIVER_PDF"],
    );
    return _0x18dc09 ? this._injector["createInstance"]($, _0x18dc09) : null;
  }
  getPdfTableThemePresets() {
    return e.DEFAULT_PDF_TABLE_THEME_PRESETS["map"](
      ({ id: _0x26b5ac, group: _0x509ef9 }) => ({
        id: _0x26b5ac,
        group: _0x509ef9,
      }),
    );
  }
};
(t.FUniver["extend"](ge),
  Object.defineProperty(exports, "FPdf", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  Object.defineProperty(exports, "FPdfAnnotation", {
    enumerable: true,
    get: function () {
      return h;
    },
  }),
  Object.defineProperty(exports, "FPdfDivider", {
    enumerable: true,
    get: function () {
      return y;
    },
  }),
  Object.defineProperty(exports, "FPdfImage", {
    enumerable: true,
    get: function () {
      return C;
    },
  }),
  (exports.FPdfImageBuilder = w),
  Object.defineProperty(exports, "FPdfList", {
    enumerable: true,
    get: function () {
      return P;
    },
  }),
  Object.defineProperty(exports, "FPdfPage", {
    enumerable: true,
    get: function () {
      return K;
    },
  }),
  (exports.FPdfPageElement = c),
  Object.defineProperty(exports, "FPdfParagraph", {
    enumerable: true,
    get: function () {
      return F;
    },
  }),
  Object.defineProperty(exports, "FPdfTable", {
    enumerable: true,
    get: function () {
      return I;
    },
  }),
  Object.defineProperty(exports, "FPdfTableCell", {
    enumerable: true,
    get: function () {
      return L;
    },
  }),
  Object.defineProperty(exports, "FPdfTextBox", {
    enumerable: true,
    get: function () {
      return V;
    },
  }),
  Object.defineProperty(exports, "FPdfTextSpan", {
    enumerable: true,
    get: function () {
      return H;
    },
  }));
