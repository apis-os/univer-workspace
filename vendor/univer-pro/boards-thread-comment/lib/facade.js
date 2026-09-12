import { FBoard as _0x4b11e7 } from "@univerjs-pro/boards/facade";
import * as _0x2dd77b from "@univerjs/thread-comment";
var n = class extends _0x4b11e7 {
  _initialize(_0x479de1) {
    let _0x1becde;
    Object.defineProperty(this, "_threadCommentService", {
      get: () =>
        (_0x1becde ??= _0x479de1.get(_0x2dd77b.ThreadCommentFacadeService)),
    });
  }
  createElementCommentAsync(_0xc94502, _0x11c667, _0x1ea310 = {}) {
    if (!this._boardModel["getActivePage"]().elements[_0xc94502])
      throw Error('Board element "' + _0xc94502 + '" was not found.');
    let _0x2c88be = this._boardModel["getActivePageId"]();
    return this._threadCommentService["createCommentAsync"]({
      ..._0x1ea310,
      unitId: this._boardModel["getUnitId"](),
      subUnitId: _0x2c88be,
      anchor: {
        kind: _0x2dd77b.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        pageId: _0x2c88be,
        elementId: _0xc94502,
      },
      content: _0x11c667,
    });
  }
  createPositionCommentAsync(_0x5abd0b, _0x5f0a72, _0x4307dd = {}) {
    if (!Number.isFinite(_0x5abd0b.x) || !Number.isFinite(_0x5abd0b.y))
      throw TypeError(
        "Board comment position must contain finite x and y values.",
      );
    let _0xcc255c = this._boardModel["getActivePageId"]();
    return this._threadCommentService["createCommentAsync"]({
      ..._0x4307dd,
      unitId: this._boardModel["getUnitId"](),
      subUnitId: _0xcc255c,
      anchor: {
        kind: _0x2dd77b.ThreadCommentAnchorKind["BOARD_POSITION"],
        pageId: _0xcc255c,
        ..._0x5abd0b,
      },
      content: _0x5f0a72,
    });
  }
  getElementComments(_0xa872ce) {
    return this._threadCommentService["getComments"]({
      unitIds: [this._boardModel["getUnitId"]()],
      subUnitIds: [this._boardModel["getActivePageId"]()],
      anchorKinds: [_0x2dd77b.ThreadCommentAnchorKind["BOARD_ELEMENT"]],
    }).filter((_0x8a5067) => {
      var _0x2a3944;
      return (
        ((_0x2a3944 = _0x8a5067.anchor) == null
          ? undefined
          : _0x2a3944.kind) ===
          _0x2dd77b.ThreadCommentAnchorKind["BOARD_ELEMENT"] &&
        _0x8a5067.anchor["elementId"] === _0xa872ce
      );
    });
  }
  async listElementCommentsAsync(_0x3e332c) {
    return (
      await this._threadCommentService["listCommentsAsync"]({
        unitIds: [this._boardModel["getUnitId"]()],
        subUnitIds: [this._boardModel["getActivePageId"]()],
        anchorKinds: [_0x2dd77b.ThreadCommentAnchorKind["BOARD_ELEMENT"]],
      })
    ).filter((_0x497325) => {
      var _0x4e5dfd;
      return (
        ((_0x4e5dfd = _0x497325.anchor) == null
          ? undefined
          : _0x4e5dfd.kind) ===
          _0x2dd77b.ThreadCommentAnchorKind["BOARD_ELEMENT"] &&
        _0x497325.anchor["elementId"] === _0x3e332c
      );
    });
  }
  getComments() {
    return this._threadCommentService["getComments"]({
      unitIds: [this._boardModel["getUnitId"]()],
      anchorKinds: [
        _0x2dd77b.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        _0x2dd77b.ThreadCommentAnchorKind["BOARD_POSITION"],
      ],
    });
  }
  listCommentsAsync() {
    return this._threadCommentService["listCommentsAsync"]({
      unitIds: [this._boardModel["getUnitId"]()],
      anchorKinds: [
        _0x2dd77b.ThreadCommentAnchorKind["BOARD_ELEMENT"],
        _0x2dd77b.ThreadCommentAnchorKind["BOARD_POSITION"],
      ],
    });
  }
};
_0x4b11e7.extend(n);
export { n as FBoardThreadCommentMixin };
