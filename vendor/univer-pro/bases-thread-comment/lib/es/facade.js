import { FBaseTableRecord as _0x8f614e } from "@univerjs-pro/bases/facade";
import * as _0x8cbd0f from "@univerjs/thread-comment";
var n = class extends _0x8f614e {
  _initialize(_0x31907c) {
    let _0x260344;
    Object.defineProperty(this, "_threadCommentService", {
      get: () =>
        (_0x260344 ??= _0x31907c.get(_0x8cbd0f.ThreadCommentFacadeService)),
    });
  }
  createCommentAsync(_0x3e53e9, _0x161380 = {}) {
    return this._threadCommentService["createCommentAsync"]({
      ..._0x161380,
      unitId: this._baseUnitId,
      subUnitId: this._baseTableId,
      anchor: {
        kind: _0x8cbd0f.ThreadCommentAnchorKind["BASE_RECORD"],
        tableId: this._baseTableId,
        recordId: this._recordId,
      },
      content: _0x3e53e9,
    });
  }
  getComments() {
    return this._threadCommentService["getComments"]({
      unitIds: [this._baseUnitId],
      subUnitIds: [this._baseTableId],
      anchorKinds: [_0x8cbd0f.ThreadCommentAnchorKind["BASE_RECORD"]],
    }).filter((_0x1ea90a) => {
      var _0x5b912a = _0x29b1c3,
        _0x10ca19;
      return (
        ((_0x10ca19 = _0x1ea90a[_0x5b912a(346)]) == null
          ? undefined
          : _0x10ca19.kind) === _0x8cbd0f[_0x5b912a(345)][_0x5b912a(366)] &&
        _0x1ea90a.anchor[_0x5b912a(347)] === this._recordId
      );
    });
  }
  async listCommentsAsync() {
    return (
      await this._threadCommentService["listCommentsAsync"]({
        unitIds: [this._baseUnitId],
        subUnitIds: [this._baseTableId],
        anchorKinds: [_0x8cbd0f.ThreadCommentAnchorKind["BASE_RECORD"]],
      })
    ).filter((_0x4743dc) => {
      var _0x4c77eb = _0x1d91fa,
        _0x26d76a;
      return (
        ((_0x26d76a = _0x4743dc[_0x4c77eb(346)]) == null
          ? undefined
          : _0x26d76a.kind) ===
          _0x8cbd0f.ThreadCommentAnchorKind[_0x4c77eb(366)] &&
        _0x4743dc.anchor[_0x4c77eb(347)] === this[_0x4c77eb(365)]
      );
    });
  }
};
_0x8f614e.extend(n);
export { n as FBaseTableRecordThreadCommentMixin };
