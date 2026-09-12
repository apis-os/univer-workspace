Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (_0x1b4a34, _0x33932b, _0x43f9ba, _0xa077ec) => {
    if (
      (_0x33932b && typeof _0x33932b == "object") ||
      typeof _0x33932b == "function"
    ) {
      for (
        var _0x42eec8 = r(_0x33932b),
          _0xa2f1ff = 0,
          _0x3c58fb = _0x42eec8.length,
          _0x5f2522;
        _0xa2f1ff < _0x3c58fb;
        _0xa2f1ff++
      )
        ((_0x5f2522 = _0x42eec8[_0xa2f1ff]),
          !a.call(_0x1b4a34, _0x5f2522) &&
            _0x5f2522 !== _0x43f9ba &&
            t(_0x1b4a34, _0x5f2522, {
              get: ((_0x46050c) => _0x33932b[_0x46050c]).bind(null, _0x5f2522),
              enumerable:
                !(_0xa077ec = n(_0x33932b, _0x5f2522)) || _0xa077ec.enumerable,
            }));
    }
    return _0x1b4a34;
  },
  s = (_0x5c774b, _0x5d9eb2, _0x2aebf5) => (
    (_0x2aebf5 = _0x5c774b == null ? {} : e(i(_0x5c774b))),
    o(
      _0x5d9eb2 || !_0x5c774b || !_0x5c774b.__esModule
        ? t(_0x2aebf5, "default", { value: _0x5c774b, enumerable: true })
        : _0x2aebf5,
      _0x5c774b,
    )
  );
let c = require("@univerjs-pro/slides/facade"),
  l = require("@univerjs/thread-comment");
l = s(l);
const u = new WeakMap();
function d(_0x10588c) {
  return (
    Number.isFinite(_0x10588c.x) &&
    Number.isFinite(_0x10588c.y) &&
    _0x10588c.x >= 0 &&
    _0x10588c.x <= 1 &&
    _0x10588c.y >= 0 &&
    _0x10588c.y <= 1
  );
}
var f = class extends c.FSlide {
    _initialize(_0x1b3e95) {
      let _0x390df8;
      Object.defineProperty(this, "_threadCommentService", {
        get: () => (_0x390df8 ??= _0x1b3e95.get(l.ThreadCommentFacadeService)),
      });
    }
    createPositionCommentAsync(_0x446244, _0x174b6a, _0x57aa86 = {}) {
      if (!d(_0x446244))
        throw RangeError(
          "Slide comment position must use normalized x and y values from 0 to 1.",
        );
      let _0x1a24a9 = this._slidePage["getId"]();
      return this._threadCommentService["createCommentAsync"]({
        ..._0x57aa86,
        unitId: this._slideModel["getUnitId"](),
        subUnitId: _0x1a24a9,
        anchor: {
          kind: l.ThreadCommentAnchorKind["SLIDE_POSITION"],
          pageId: _0x1a24a9,
          ..._0x446244,
        },
        content: _0x174b6a,
      });
    }
    createElementCommentAsync(_0x2dfb02, _0x4a0f7e, _0x38ec9e = {}) {
      if (!this._slidePage["getData"]().elements[_0x2dfb02])
        throw Error(
          'Slide element "' + _0x2dfb02 + "\x22\x20was\x20not\x20found.",
        );
      let _0x560503 = this._slidePage["getId"]();
      return this._threadCommentService["createCommentAsync"]({
        ..._0x38ec9e,
        unitId: this._slideModel["getUnitId"](),
        subUnitId: _0x560503,
        anchor: {
          kind: l.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          pageId: _0x560503,
          elementId: _0x2dfb02,
        },
        content: _0x4a0f7e,
      });
    }
    getElementComments(_0x933030) {
      let _0x1b975e = this._slidePage["getId"]();
      return this._threadCommentService["getComments"]({
        unitIds: [this._slideModel["getUnitId"]()],
        subUnitIds: [_0x1b975e],
        anchorKinds: [l.ThreadCommentAnchorKind["SLIDE_ELEMENT"]],
      }).filter((_0x527233) => {
        var _0x98a3e5;
        return (
          ((_0x98a3e5 = _0x527233.anchor) == null
            ? undefined
            : _0x98a3e5.kind) === l.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
          _0x527233.anchor["elementId"] === _0x933030
        );
      });
    }
    async listElementCommentsAsync(_0x4914a5) {
      let _0x4d28fb = this._slidePage["getId"]();
      return (
        await this._threadCommentService["listCommentsAsync"]({
          unitIds: [this._slideModel["getUnitId"]()],
          subUnitIds: [_0x4d28fb],
          anchorKinds: [l.ThreadCommentAnchorKind["SLIDE_ELEMENT"]],
        })
      ).filter((_0x40af2f) => {
        var _0x2a23d6;
        return (
          ((_0x2a23d6 = _0x40af2f.anchor) == null
            ? undefined
            : _0x2a23d6.kind) === l.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
          _0x40af2f.anchor["elementId"] === _0x4914a5
        );
      });
    }
    getComments() {
      let _0x55aa64 = this._slidePage["getId"]();
      return this._threadCommentService["getComments"]({
        unitIds: [this._slideModel["getUnitId"]()],
        subUnitIds: [_0x55aa64],
        anchorKinds: [
          l.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          l.ThreadCommentAnchorKind["SLIDE_POSITION"],
        ],
      });
    }
    listCommentsAsync() {
      let _0x5256a6 = this._slidePage["getId"]();
      return this._threadCommentService["listCommentsAsync"]({
        unitIds: [this._slideModel["getUnitId"]()],
        subUnitIds: [_0x5256a6],
        anchorKinds: [
          l.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          l.ThreadCommentAnchorKind["SLIDE_POSITION"],
        ],
      });
    }
  },
  p = class extends c.FPageElement {
    _getThreadCommentService() {
      let _0x5e4f32 = u.get(this);
      if (_0x5e4f32) return _0x5e4f32;
      let _0x3141b1 = this._injector["get"](l.ThreadCommentFacadeService);
      return (u.set(this, _0x3141b1), _0x3141b1);
    }
    createCommentAsync(_0x43ff38, _0x41b38f = {}) {
      return this._getThreadCommentService().createCommentAsync({
        ..._0x41b38f,
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        anchor: {
          kind: l.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          pageId: this.subUnitId,
          elementId: this.elementId,
        },
        content: _0x43ff38,
      });
    }
    getComments() {
      return this._getThreadCommentService()
        .getComments({
          unitIds: [this.unitId],
          subUnitIds: [this.subUnitId],
          anchorKinds: [l.ThreadCommentAnchorKind["SLIDE_ELEMENT"]],
        })
        .filter((_0x50ea4e) => {
          var _0x3574d5;
          return (
            ((_0x3574d5 = _0x50ea4e.anchor) == null
              ? undefined
              : _0x3574d5.kind) ===
              l.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
            _0x50ea4e.anchor["elementId"] === this.elementId
          );
        });
    }
    async listCommentsAsync() {
      return (
        await this._getThreadCommentService().listCommentsAsync({
          unitIds: [this.unitId],
          subUnitIds: [this.subUnitId],
          anchorKinds: [l.ThreadCommentAnchorKind["SLIDE_ELEMENT"]],
        })
      ).filter((_0x4f822e) => {
        var _0x244d61;
        return (
          ((_0x244d61 = _0x4f822e.anchor) == null
            ? undefined
            : _0x244d61.kind) === l.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
          _0x4f822e.anchor["elementId"] === this.elementId
        );
      });
    }
  };
(c.FSlide["extend"](f),
  c.FPageElement["extend"](p),
  (exports.FSlidePageElementThreadCommentMixin = p),
  (exports.FSlideThreadCommentMixin = f));
