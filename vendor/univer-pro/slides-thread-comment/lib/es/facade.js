import {
  FPageElement as _0x378a64,
  FSlide as _0x4a824e,
} from "@univerjs-pro/slides/facade";
import * as _0x51a811 from "@univerjs/thread-comment";
const r = new WeakMap();
function i(_0x25532e) {
  return (
    Number.isFinite(_0x25532e.x) &&
    Number.isFinite(_0x25532e.y) &&
    _0x25532e.x >= 0 &&
    _0x25532e.x <= 1 &&
    _0x25532e.y >= 0 &&
    _0x25532e.y <= 1
  );
}
var a = class extends _0x4a824e {
    _initialize(_0x35f328) {
      let _0x1159c7;
      Object.defineProperty(this, "_threadCommentService", {
        get: () =>
          (_0x1159c7 ??= _0x35f328.get(_0x51a811.ThreadCommentFacadeService)),
      });
    }
    createPositionCommentAsync(_0x2961d4, _0x549b3e, _0x5a5849 = {}) {
      if (!i(_0x2961d4))
        throw RangeError(
          "Slide comment position must use normalized x and y values from 0 to 1.",
        );
      let _0x1b28b8 = this._slidePage["getId"]();
      return this._threadCommentService["createCommentAsync"]({
        ..._0x5a5849,
        unitId: this._slideModel["getUnitId"](),
        subUnitId: _0x1b28b8,
        anchor: {
          kind: _0x51a811.ThreadCommentAnchorKind["SLIDE_POSITION"],
          pageId: _0x1b28b8,
          ..._0x2961d4,
        },
        content: _0x549b3e,
      });
    }
    createElementCommentAsync(_0x3f5177, _0x80f689, _0x561389 = {}) {
      if (!this._slidePage["getData"]().elements[_0x3f5177])
        throw Error('Slide element "' + _0x3f5177 + '" was not found.');
      let _0x1f269c = this._slidePage["getId"]();
      return this._threadCommentService["createCommentAsync"]({
        ..._0x561389,
        unitId: this._slideModel["getUnitId"](),
        subUnitId: _0x1f269c,
        anchor: {
          kind: _0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          pageId: _0x1f269c,
          elementId: _0x3f5177,
        },
        content: _0x80f689,
      });
    }
    getElementComments(_0x49ba18) {
      let _0x3a7ff6 = this._slidePage["getId"]();
      return this._threadCommentService["getComments"]({
        unitIds: [this._slideModel["getUnitId"]()],
        subUnitIds: [_0x3a7ff6],
        anchorKinds: [_0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"]],
      }).filter((_0x30e0b9) => {
        var _0x139e07;
        return (
          ((_0x139e07 = _0x30e0b9.anchor) == null
            ? undefined
            : _0x139e07.kind) ===
            _0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
          _0x30e0b9.anchor["elementId"] === _0x49ba18
        );
      });
    }
    async listElementCommentsAsync(_0x1dd864) {
      let _0xb329e5 = this._slidePage["getId"]();
      return (
        await this._threadCommentService["listCommentsAsync"]({
          unitIds: [this._slideModel["getUnitId"]()],
          subUnitIds: [_0xb329e5],
          anchorKinds: [_0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"]],
        })
      ).filter((_0x5002ad) => {
        var _0x2d72d1;
        return (
          ((_0x2d72d1 = _0x5002ad.anchor) == null
            ? undefined
            : _0x2d72d1.kind) ===
            _0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
          _0x5002ad.anchor["elementId"] === _0x1dd864
        );
      });
    }
    getComments() {
      let _0x5a2416 = this._slidePage["getId"]();
      return this._threadCommentService["getComments"]({
        unitIds: [this._slideModel["getUnitId"]()],
        subUnitIds: [_0x5a2416],
        anchorKinds: [
          _0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          _0x51a811.ThreadCommentAnchorKind["SLIDE_POSITION"],
        ],
      });
    }
    listCommentsAsync() {
      let _0x53da1d = this._slidePage["getId"]();
      return this._threadCommentService["listCommentsAsync"]({
        unitIds: [this._slideModel["getUnitId"]()],
        subUnitIds: [_0x53da1d],
        anchorKinds: [
          _0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          _0x51a811.ThreadCommentAnchorKind["SLIDE_POSITION"],
        ],
      });
    }
  },
  o = class extends _0x378a64 {
    _getThreadCommentService() {
      let _0x3f3b00 = r.get(this);
      if (_0x3f3b00) return _0x3f3b00;
      let _0x2d4588 = this._injector["get"](
        _0x51a811.ThreadCommentFacadeService,
      );
      return (r.set(this, _0x2d4588), _0x2d4588);
    }
    createCommentAsync(_0x4bf4f0, _0x2e9bba = {}) {
      return this._getThreadCommentService().createCommentAsync({
        ..._0x2e9bba,
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        anchor: {
          kind: _0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"],
          pageId: this.subUnitId,
          elementId: this.elementId,
        },
        content: _0x4bf4f0,
      });
    }
    getComments() {
      return this._getThreadCommentService()
        .getComments({
          unitIds: [this.unitId],
          subUnitIds: [this.subUnitId],
          anchorKinds: [_0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"]],
        })
        .filter((_0x2f4b2b) => {
          var _0x509501;
          return (
            ((_0x509501 = _0x2f4b2b.anchor) == null
              ? undefined
              : _0x509501.kind) ===
              _0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
            _0x2f4b2b.anchor["elementId"] === this.elementId
          );
        });
    }
    async listCommentsAsync() {
      return (
        await this._getThreadCommentService().listCommentsAsync({
          unitIds: [this.unitId],
          subUnitIds: [this.subUnitId],
          anchorKinds: [_0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"]],
        })
      ).filter((_0x30c5b1) => {
        var _0xc16506;
        return (
          ((_0xc16506 = _0x30c5b1.anchor) == null
            ? undefined
            : _0xc16506.kind) ===
            _0x51a811.ThreadCommentAnchorKind["SLIDE_ELEMENT"] &&
          _0x30c5b1.anchor["elementId"] === this.elementId
        );
      });
    }
  };
(_0x4a824e.extend(a), _0x378a64.extend(o));
export {
  o as FSlidePageElementThreadCommentMixin,
  a as FSlideThreadCommentMixin,
};
