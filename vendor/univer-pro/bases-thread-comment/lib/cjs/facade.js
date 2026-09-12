Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (_0x4d9aaf, _0x496e90, _0x5c61aa, _0x3ac9be) => {
    if (
      (_0x496e90 && typeof _0x496e90 == "object") ||
      typeof _0x496e90 == "function"
    ) {
      for (
        var _0x22104a = r(_0x496e90),
          _0x5c815d = 0,
          _0x55fa56 = _0x22104a.length,
          _0x48849c;
        _0x5c815d < _0x55fa56;
        _0x5c815d++
      )
        ((_0x48849c = _0x22104a[_0x5c815d]),
          !a.call(_0x4d9aaf, _0x48849c) &&
            _0x48849c !== _0x5c61aa &&
            t(_0x4d9aaf, _0x48849c, {
              get: ((_0x3f63b6) => _0x496e90[_0x3f63b6]).bind(null, _0x48849c),
              enumerable:
                !(_0x3ac9be = n(_0x496e90, _0x48849c)) || _0x3ac9be.enumerable,
            }));
    }
    return _0x4d9aaf;
  },
  s = (_0x12950e, _0x22c8be, _0x24af7c) => (
    (_0x24af7c = _0x12950e == null ? {} : e(i(_0x12950e))),
    o(
      _0x22c8be || !_0x12950e || !_0x12950e.__esModule
        ? t(_0x24af7c, "default", { value: _0x12950e, enumerable: true })
        : _0x24af7c,
      _0x12950e,
    )
  );
let c = require("@univerjs-pro/bases/facade"),
  l = require("@univerjs/thread-comment");
l = s(l);
var u = class extends c.FBaseTableRecord {
  _initialize(_0x4fc46e) {
    let _0x4caac6;
    Object.defineProperty(this, "_threadCommentService", {
      get: () => (_0x4caac6 ??= _0x4fc46e.get(l.ThreadCommentFacadeService)),
    });
  }
  createCommentAsync(_0x57fe4d, _0x35b333 = {}) {
    return this._threadCommentService["createCommentAsync"]({
      ..._0x35b333,
      unitId: this._baseUnitId,
      subUnitId: this._baseTableId,
      anchor: {
        kind: l.ThreadCommentAnchorKind["BASE_RECORD"],
        tableId: this._baseTableId,
        recordId: this._recordId,
      },
      content: _0x57fe4d,
    });
  }
  getComments() {
    return this._threadCommentService["getComments"]({
      unitIds: [this._baseUnitId],
      subUnitIds: [this._baseTableId],
      anchorKinds: [l.ThreadCommentAnchorKind["BASE_RECORD"]],
    }).filter((_0x4fe3b6) => {
      var _0x5dc505 = _0x54a505,
        _0x4ad3f4;
      return (
        ((_0x4ad3f4 = _0x4fe3b6.anchor) == null
          ? undefined
          : _0x4ad3f4[_0x5dc505(224)]) === l[_0x5dc505(223)].BASE_RECORD &&
        _0x4fe3b6[_0x5dc505(230)][_0x5dc505(238)] === this[_0x5dc505(246)]
      );
    });
  }
  async listCommentsAsync() {
    return (
      await this._threadCommentService["listCommentsAsync"]({
        unitIds: [this._baseUnitId],
        subUnitIds: [this._baseTableId],
        anchorKinds: [l.ThreadCommentAnchorKind["BASE_RECORD"]],
      })
    ).filter((_0x10fd38) => {
      var _0x852b57 = _0x2b6766,
        _0xa969bf;
      return (
        ((_0xa969bf = _0x10fd38[_0x852b57(230)]) == null
          ? undefined
          : _0xa969bf.kind) === l[_0x852b57(223)].BASE_RECORD &&
        _0x10fd38[_0x852b57(230)][_0x852b57(238)] === this[_0x852b57(246)]
      );
    });
  }
};
(c.FBaseTableRecord["extend"](u),
  (exports.FBaseTableRecordThreadCommentMixin = u));
