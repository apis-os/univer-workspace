Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (_0x26d7ea, _0x1f9000, _0x35bb14, _0x212806) => {
    if (
      (_0x1f9000 && typeof _0x1f9000 == "object") ||
      typeof _0x1f9000 == "function"
    ) {
      for (
        var _0x2d37d1 = r(_0x1f9000),
          _0x4d1ec8 = 0,
          _0x41c329 = _0x2d37d1.length,
          _0x52224d;
        _0x4d1ec8 < _0x41c329;
        _0x4d1ec8++
      )
        ((_0x52224d = _0x2d37d1[_0x4d1ec8]),
          !a.call(_0x26d7ea, _0x52224d) &&
            _0x52224d !== _0x35bb14 &&
            t(_0x26d7ea, _0x52224d, {
              get: ((_0x4d020e) => _0x1f9000[_0x4d020e]).bind(null, _0x52224d),
              enumerable:
                !(_0x212806 = n(_0x1f9000, _0x52224d)) || _0x212806.enumerable,
            }));
    }
    return _0x26d7ea;
  },
  s = (_0x1a5a44, _0x2b45f1, _0x33785b) => (
    (_0x33785b = _0x1a5a44 == null ? {} : e(i(_0x1a5a44))),
    o(
      _0x2b45f1 || !_0x1a5a44 || !_0x1a5a44.__esModule
        ? t(_0x33785b, "default", { value: _0x1a5a44, enumerable: true })
        : _0x33785b,
      _0x1a5a44,
    )
  );
let c = require("@univerjs-pro/boards/facade"),
  l = require("@univerjs/thread-comment");
l = s(l);
var u = class extends c.FBoard {
  _initialize(_0x13fdd4) {
    let _0xaa78eb;
    Object.defineProperty(this, "_threadCommentService", {
      get: () => (_0xaa78eb ??= _0x13fdd4.get(l.ThreadCommentFacadeService)),
    });
  }
  createElementCommentAsync(_0x238dee, _0x5d51e7, _0x87ff55 = {}) {
    if (!this._boardModel["getActivePage"]().elements[_0x238dee])
      throw Error('Board element "' + _0x238dee + '" was not found.');
    let _0x59fbe3 = this._boardModel["getActivePageId"]();
    return this._threadCommentService["createCommentAsync"]({
      ..._0x87ff55,
      unitId: this._boardModel["getUnitId"](),
      subUnitId: _0x59fbe3,
      anchor: {
        kind: l.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        pageId: _0x59fbe3,
        elementId: _0x238dee,
      },
      content: _0x5d51e7,
    });
  }
  createPositionCommentAsync(_0x5d7717, _0x1b0e3e, _0x592551 = {}) {
    if (!Number.isFinite(_0x5d7717.x) || !Number.isFinite(_0x5d7717.y))
      throw TypeError(
        "Board comment position must contain finite x and y values.",
      );
    let _0x32fbb1 = this._boardModel["getActivePageId"]();
    return this._threadCommentService["createCommentAsync"]({
      ..._0x592551,
      unitId: this._boardModel["getUnitId"](),
      subUnitId: _0x32fbb1,
      anchor: {
        kind: l.ThreadCommentAnchorKind["BOARD_POSITION"],
        pageId: _0x32fbb1,
        ..._0x5d7717,
      },
      content: _0x1b0e3e,
    });
  }
  getElementComments(_0x542501) {
    return this._threadCommentService["getComments"]({
      unitIds: [this._boardModel["getUnitId"]()],
      subUnitIds: [this._boardModel["getActivePageId"]()],
      anchorKinds: [l.ThreadCommentAnchorKind["BOARD_ELEMENT"]],
    }).filter((_0x55fbfe) => {
      var _0x5ee5f0 = _0x1d4676,
        _0x18817a;
      return (
        ((_0x18817a = _0x55fbfe[_0x5ee5f0(197)]) == null
          ? undefined
          : _0x18817a[_0x5ee5f0(218)]) === l[_0x5ee5f0(244)][_0x5ee5f0(242)] &&
        _0x55fbfe[_0x5ee5f0(197)][_0x5ee5f0(224)] === _0x542501
      );
    });
  }
  async listElementCommentsAsync(_0x104b24) {
    return (
      await this._threadCommentService["listCommentsAsync"]({
        unitIds: [this._boardModel["getUnitId"]()],
        subUnitIds: [this._boardModel["getActivePageId"]()],
        anchorKinds: [l.ThreadCommentAnchorKind["BOARD_ELEMENT"]],
      })
    ).filter((_0x92660e) => {
      var _0x4b0ff5 = _0x368104,
        _0x38b89c;
      return (
        ((_0x38b89c = _0x92660e[_0x4b0ff5(197)]) == null
          ? undefined
          : _0x38b89c[_0x4b0ff5(218)]) === l[_0x4b0ff5(244)].BOARD_ELEMENT &&
        _0x92660e[_0x4b0ff5(197)][_0x4b0ff5(224)] === _0x104b24
      );
    });
  }
  getComments() {
    return this._threadCommentService["getComments"]({
      unitIds: [this._boardModel["getUnitId"]()],
      anchorKinds: [
        l.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        l.ThreadCommentAnchorKind["BOARD_POSITION"],
      ],
    });
  }
  listCommentsAsync() {
    return this._threadCommentService["listCommentsAsync"]({
      unitIds: [this._boardModel["getUnitId"]()],
      anchorKinds: [
        l.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        l.ThreadCommentAnchorKind["BOARD_POSITION"],
      ],
    });
  }
};
(c.FBoard["extend"](u), (exports.FBoardThreadCommentMixin = u));
