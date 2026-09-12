Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs/docs"),
  n = require("rxjs"),
  r = require("@univerjs-pro/license");
const i = { displayMode: "inline", kind: "inline" };
function a(_0x109f52) {
  return { ...i, latex: "", ..._0x109f52 };
}
function o(_0x146f62) {
  let _0x15870b = (_0x146f62 == null ? undefined : _0x146f62.formulas) ?? {};
  return {
    formulas: Object.fromEntries(
      Object.entries(_0x15870b).map(([_0x3cd070, _0x2aff26]) => [
        _0x3cd070,
        a(_0x2aff26),
      ]),
    ),
  };
}
function s(_0x42d885, _0x49d9ae, _0x435d1b) {
  let _0x5847b1 = o(_0x42d885);
  return (
    (_0x5847b1.formulas[_0x49d9ae] = a({
      ..._0x5847b1.formulas[_0x49d9ae],
      ..._0x435d1b,
    })),
    _0x5847b1
  );
}
function c(_0x3ce46e, _0x3bd1fa) {
  let _0x4df83e = o(_0x3ce46e);
  return (delete _0x4df83e.formulas[_0x3bd1fa], _0x4df83e);
}
const l = "univer-docs-latex-formula",
  u = new Set([
    e.DataStreamTreeTokenType["SECTION_BREAK"],
    e.DataStreamTreeTokenType["TABLE_START"],
    e.DataStreamTreeTokenType["TABLE_ROW_START"],
    e.DataStreamTreeTokenType["TABLE_CELL_START"],
    e.DataStreamTreeTokenType["TABLE_CELL_END"],
    e.DataStreamTreeTokenType["TABLE_ROW_END"],
    e.DataStreamTreeTokenType["TABLE_END"],
    e.DataStreamTreeTokenType["COLUMN_GROUP_START"],
    e.DataStreamTreeTokenType["COLUMN_START"],
    e.DataStreamTreeTokenType["COLUMN_END"],
    e.DataStreamTreeTokenType["COLUMN_GROUP_END"],
    e.DataStreamTreeTokenType["BLOCK_START"],
    e.DataStreamTreeTokenType["BLOCK_END"],
    e.DataStreamTreeTokenType["CUSTOM_BLOCK"],
  ]);
var d = class extends Error {
  constructor() {
    super("Latex formula range cannot cross document structure boundaries");
  }
};
function f(_0x4ca54e) {
  let _0xf9c5ea = O(_0x4ca54e.documentData),
    _0x370080 = D(_0xf9c5ea),
    { startOffset: _0x522561, endOffset: _0x5b2d6c } = y(
      _0x370080,
      _0x4ca54e.startOffset,
      _0x4ca54e.endOffset,
    );
  b(_0x370080, _0x522561, _0x5b2d6c);
  let _0x55dcf3 = s(_0x4ca54e.metadata, _0x4ca54e.rangeId, {
    ...i,
    ..._0x4ca54e.properties,
    latex: _0x4ca54e.latex,
  });
  return (
    S(_0x370080, _0x522561, _0x5b2d6c, _0x4ca54e.latex),
    v(
      _0x370080,
      _0x522561,
      _0x522561 + _0x4ca54e.latex["length"] - 1,
      _0x4ca54e.rangeId,
    ),
    (_0x370080.customRanges = [
      ...(_0x370080.customRanges ?? []),
      _(_0x4ca54e.rangeId, _0x522561, _0x4ca54e.latex["length"]),
    ].sort(
      (_0x4838ad, _0x2b5bad) => _0x4838ad.startIndex - _0x2b5bad.startIndex,
    )),
    {
      nextDocumentData: _0xf9c5ea,
      nextMetadata: _0x55dcf3,
      cursorOffset: _0x522561 + _0x4ca54e.latex["length"],
    }
  );
}
function p(_0x5e1b38) {
  var _0x113fda, _0x339cd3;
  let _0x3a7b1c = O(_0x5e1b38.documentData),
    _0x18b26e = D(_0x3a7b1c),
    _0x34520b =
      (_0x113fda = _0x18b26e.customRanges) == null
        ? undefined
        : _0x113fda.find(
            (_0x46338e) =>
              _0x46338e.rangeId === _0x5e1b38.rangeId && g(_0x46338e),
          );
  if (!_0x34520b) return null;
  let _0x35ec01 = _0x34520b.startIndex,
    _0x3ce441 = (0, e.getCustomRangeInterval)(_0x34520b);
  return (
    S(_0x18b26e, _0x3ce441.startOffset, _0x3ce441.endOffset, _0x5e1b38.latex),
    (_0x18b26e.customRanges = [
      ...(((_0x339cd3 = _0x18b26e.customRanges) == null
        ? undefined
        : _0x339cd3.filter(
            (_0x289e29) => _0x289e29.rangeId !== _0x5e1b38.rangeId,
          )) ?? []),
      _(_0x5e1b38.rangeId, _0x35ec01, _0x5e1b38.latex["length"]),
    ].sort(
      (_0x53f81e, _0x41f45b) => _0x53f81e.startIndex - _0x41f45b.startIndex,
    )),
    {
      nextDocumentData: _0x3a7b1c,
      nextMetadata: s(_0x5e1b38.metadata, _0x5e1b38.rangeId, {
        ..._0x5e1b38.properties,
        latex: _0x5e1b38.latex,
      }),
      cursorOffset: _0x35ec01 + _0x5e1b38.latex["length"],
    }
  );
}
function m(_0x5b7b76) {
  var _0x51ad47, _0x4511bb;
  let _0x504a5e = O(_0x5b7b76.documentData),
    _0x2e264c = D(_0x504a5e),
    _0x4ec3bd =
      (_0x51ad47 = _0x2e264c.customRanges) == null
        ? undefined
        : _0x51ad47.find(
            (_0x1839be) =>
              _0x1839be.rangeId === _0x5b7b76.rangeId && g(_0x1839be),
          );
  if (!_0x4ec3bd) return null;
  let _0x1fa505 = (0, e.getCustomRangeInterval)(_0x4ec3bd),
    _0x5c3d7d = _0x5b7b76.text ?? "";
  return (
    S(_0x2e264c, _0x1fa505.startOffset, _0x1fa505.endOffset, _0x5c3d7d),
    (_0x2e264c.customRanges =
      (_0x4511bb = _0x2e264c.customRanges) == null
        ? undefined
        : _0x4511bb.filter(
            (_0x4f882e) => _0x4f882e.rangeId !== _0x5b7b76.rangeId,
          )),
    {
      nextDocumentData: _0x504a5e,
      nextMetadata: c(_0x5b7b76.metadata, _0x5b7b76.rangeId),
      cursorOffset: _0x1fa505.startOffset + _0x5c3d7d.length,
    }
  );
}
function h(_0x121842, _0x33e36e) {
  if (!g(_0x121842)) return "";
  let _0x2d0c92 = (0, e.getCustomRangeInterval)(_0x121842);
  return _0x33e36e.slice(_0x2d0c92.startOffset, _0x2d0c92.endOffset);
}
function g(_0x63d7a8) {
  var _0x424daa;
  return (
    (_0x63d7a8 == null ? undefined : _0x63d7a8.rangeType) ===
      e.CustomRangeType["CUSTOM"] &&
    ((_0x424daa = _0x63d7a8.properties) == null
      ? undefined
      : _0x424daa.kind) === "univer-docs-latex-formula"
  );
}
function _(_0x19e95c, _0x36b9c9, _0x5466e6) {
  return {
    startIndex: _0x36b9c9,
    endIndex: _0x36b9c9 + Math.max(0, _0x5466e6 - 1),
    rangeId: _0x19e95c,
    rangeType: e.CustomRangeType["CUSTOM"],
    wholeEntity: true,
    properties: { kind: l },
  };
}
function v(_0x511f2b, _0x59cc70, _0x17215d, _0x445e52) {
  var _0x2a8e12;
  _0x511f2b.customRanges =
    (_0x2a8e12 = _0x511f2b.customRanges) == null
      ? undefined
      : _0x2a8e12.filter(
          (_0x1df979) =>
            _0x1df979.rangeId === _0x445e52 ||
            !g(_0x1df979) ||
            _0x1df979.endIndex < _0x59cc70 ||
            _0x1df979.startIndex > _0x17215d,
        );
}
function y(_0x1a069c, _0x2cccdc, _0x518d15) {
  let _0x3442bc = ee(_0x1a069c),
    _0x20e4e7 = _0x2cccdc ?? _0x3442bc,
    _0xf6ea92 = _0x518d15 ?? _0x20e4e7;
  return {
    startOffset: x(Math.min(_0x20e4e7, _0xf6ea92), _0x3442bc),
    endOffset: x(Math.max(_0x20e4e7, _0xf6ea92), _0x3442bc),
  };
}
function b(_0x3d87e4, _0x40f03b, _0x5b0232) {
  if (_0x40f03b === _0x5b0232) {
    if (u.has(_0x3d87e4.dataStream[_0x40f03b])) throw new d();
    return;
  }
  for (let _0x33bb9e = _0x40f03b; _0x33bb9e < _0x5b0232; _0x33bb9e++)
    if (
      _0x3d87e4.dataStream[_0x33bb9e] ===
        e.DataStreamTreeTokenType["PARAGRAPH"] ||
      u.has(_0x3d87e4.dataStream[_0x33bb9e])
    )
      throw new d();
}
function x(_0x33fa94, _0x5320a4) {
  return Math.max(0, Math.min(_0x33fa94, _0x5320a4));
}
function ee(_0xd5469f) {
  return _0xd5469f.dataStream["endsWith"](
    "" +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      e.DataStreamTreeTokenType["SECTION_BREAK"],
  )
    ? Math.max(0, _0xd5469f.dataStream["length"] - 2)
    : _0xd5469f.dataStream["endsWith"](
          e.DataStreamTreeTokenType["SECTION_BREAK"],
        )
      ? Math.max(0, _0xd5469f.dataStream["length"] - 1)
      : _0xd5469f.dataStream["length"];
}
function S(_0xc81c40, _0x9768bc, _0x314af5, _0x359608) {
  (_0x314af5 > _0x9768bc && ne(_0xc81c40, _0x9768bc, _0x314af5),
    te(_0xc81c40, _0x9768bc, _0x359608));
}
function te(_0x479960, _0x349a10, _0x11abb0) {
  _0x11abb0 &&
    ((_0x479960.dataStream =
      "" +
      _0x479960.dataStream["slice"](0, _0x349a10) +
      _0x11abb0 +
      _0x479960.dataStream["slice"](_0x349a10)),
    re(_0x479960, _0x349a10, _0x11abb0.length));
}
function ne(_0x5ebd12, _0x13e785, _0x3bfa85) {
  let _0x486fc5 = _0x3bfa85 - _0x13e785;
  ((_0x5ebd12.dataStream =
    "" +
    _0x5ebd12.dataStream["slice"](0, _0x13e785) +
    _0x5ebd12.dataStream["slice"](_0x3bfa85)),
    ie(_0x5ebd12, _0x13e785, _0x486fc5));
}
function re(_0x153d6f, _0x46e761, _0x24244c) {
  ((_0x153d6f.paragraphs = C(_0x153d6f.paragraphs, _0x46e761, _0x24244c)),
    (_0x153d6f.sectionBreaks = C(
      _0x153d6f.sectionBreaks,
      _0x46e761,
      _0x24244c,
    )),
    (_0x153d6f.customBlocks = C(_0x153d6f.customBlocks, _0x46e761, _0x24244c)),
    (_0x153d6f.textRuns = ae(_0x153d6f.textRuns, _0x46e761, _0x24244c)),
    (_0x153d6f.tables = oe(_0x153d6f.tables, _0x46e761, _0x24244c)),
    (_0x153d6f.columnGroups = T(_0x153d6f.columnGroups, _0x46e761, _0x24244c)),
    (_0x153d6f.customRanges = T(_0x153d6f.customRanges, _0x46e761, _0x24244c)),
    (_0x153d6f.customDecorations = T(
      _0x153d6f.customDecorations,
      _0x46e761,
      _0x24244c,
    )),
    (_0x153d6f.blockRanges = T(_0x153d6f.blockRanges, _0x46e761, _0x24244c)));
}
function ie(_0x2d4abc, _0x5eb084, _0x5231e6) {
  var _0x1d5e0a, _0x37b301;
  ((_0x2d4abc.paragraphs = w(_0x2d4abc.paragraphs, _0x5eb084, _0x5231e6)),
    (_0x2d4abc.sectionBreaks = w(
      _0x2d4abc.sectionBreaks,
      _0x5eb084,
      _0x5231e6,
    )),
    (_0x2d4abc.customBlocks = w(_0x2d4abc.customBlocks, _0x5eb084, _0x5231e6)),
    (_0x2d4abc.textRuns =
      (_0x1d5e0a = se(
        (_0x37b301 = _0x2d4abc.textRuns) == null
          ? undefined
          : _0x37b301.map((_0x3a7266) => ({
              ..._0x3a7266,
              startIndex: _0x3a7266.st,
              endIndex: _0x3a7266.ed,
            })),
        _0x5eb084,
        _0x5231e6,
      )) == null
        ? undefined
        : _0x1d5e0a.map((_0x332519) => {
            let {
              startIndex: _0x2162d7,
              endIndex: _0x1b532b,
              ..._0x18a215
            } = _0x332519;
            return { ..._0x18a215, st: _0x2162d7, ed: _0x1b532b };
          })),
    (_0x2d4abc.tables = se(_0x2d4abc.tables, _0x5eb084, _0x5231e6)),
    (_0x2d4abc.columnGroups = E(_0x2d4abc.columnGroups, _0x5eb084, _0x5231e6)),
    (_0x2d4abc.customRanges = E(_0x2d4abc.customRanges, _0x5eb084, _0x5231e6)),
    (_0x2d4abc.customDecorations = E(
      _0x2d4abc.customDecorations,
      _0x5eb084,
      _0x5231e6,
    )),
    (_0x2d4abc.blockRanges = E(_0x2d4abc.blockRanges, _0x5eb084, _0x5231e6)));
}
function C(_0x16e992, _0x217a5a, _0x471e48) {
  return _0x16e992 == null
    ? undefined
    : _0x16e992.map((_0x335547) =>
        _0x335547.startIndex >= _0x217a5a
          ? { ..._0x335547, startIndex: _0x335547.startIndex + _0x471e48 }
          : _0x335547,
      );
}
function w(_0x1cc848, _0x302fd7, _0x388898) {
  let _0x1aab51 = _0x302fd7 + _0x388898;
  return _0x1cc848 == null
    ? undefined
    : _0x1cc848
        .map((_0x1e2173) =>
          _0x1e2173.startIndex >= _0x302fd7 && _0x1e2173.startIndex < _0x1aab51
            ? null
            : _0x1e2173.startIndex >= _0x1aab51
              ? { ..._0x1e2173, startIndex: _0x1e2173.startIndex - _0x388898 }
              : _0x1e2173,
        )
        .filter((_0x456f93) => _0x456f93 != null);
}
function ae(_0x397ef9, _0x283828, _0x2c2557) {
  return _0x397ef9 == null
    ? undefined
    : _0x397ef9.map((_0x6bffb6) =>
        _0x6bffb6.st >= _0x283828
          ? {
              ..._0x6bffb6,
              st: _0x6bffb6.st + _0x2c2557,
              ed: _0x6bffb6.ed + _0x2c2557,
            }
          : _0x6bffb6.ed > _0x283828
            ? { ..._0x6bffb6, ed: _0x6bffb6.ed + _0x2c2557 }
            : _0x6bffb6,
      );
}
function T(_0x41b1d1, _0x4423c8, _0x5e0346) {
  return _0x41b1d1 == null
    ? undefined
    : _0x41b1d1.map((_0x153b9e) =>
        (0, e.shiftInclusiveRangeOnInsert)(_0x153b9e, _0x4423c8, _0x5e0346),
      );
}
function oe(_0x12bea0, _0x20e836, _0x107bb5) {
  return _0x12bea0 == null
    ? undefined
    : _0x12bea0.map((_0x39f590) =>
        (0, e.shiftExclusiveRangeOnInsert)(_0x39f590, _0x20e836, _0x107bb5),
      );
}
function E(_0x47cfc0, _0x9f14fa, _0x555428) {
  return _0x47cfc0 == null
    ? undefined
    : _0x47cfc0
        .map((_0x19f24a) =>
          (0, e.shiftInclusiveRangeOnDelete)(_0x19f24a, _0x9f14fa, _0x555428),
        )
        .filter((_0x5b9f56) => _0x5b9f56 != null);
}
function se(_0x111909, _0x55f3df, _0x4c8f06) {
  return _0x111909 == null
    ? undefined
    : _0x111909
        .map((_0x2c6e98) =>
          (0, e.shiftExclusiveRangeOnDelete)(_0x2c6e98, _0x55f3df, _0x4c8f06),
        )
        .filter((_0x508be9) => _0x508be9 != null);
}
function D(_0xc58ebb) {
  if (!_0xc58ebb.body)
    throw Error("Document body is required to insert docs latex formulas.");
  return _0xc58ebb.body;
}
function O(_0x2ff961) {
  return {
    ..._0x2ff961,
    body: _0x2ff961.body ? ce(_0x2ff961.body) : _0x2ff961.body,
  };
}
function ce(_0x24c583) {
  var _0xf48f2c,
    _0xe5c2fa,
    _0x592c4c,
    _0x3ed8a2,
    _0x2194b5,
    _0x5093ce,
    _0x272d1c,
    _0x6ea933,
    _0x5eac7e;
  return {
    ..._0x24c583,
    paragraphs:
      (_0xf48f2c = _0x24c583.paragraphs) == null
        ? undefined
        : _0xf48f2c.map((_0x318cb7) => ({
            ..._0x318cb7,
            bullet: k(_0x318cb7.bullet),
            paragraphStyle: k(_0x318cb7.paragraphStyle),
          })),
    sectionBreaks:
      (_0xe5c2fa = _0x24c583.sectionBreaks) == null
        ? undefined
        : _0xe5c2fa.map((_0x141b46) => ({ ..._0x141b46 })),
    textRuns:
      (_0x592c4c = _0x24c583.textRuns) == null
        ? undefined
        : _0x592c4c.map((_0x2406a4) => ({ ..._0x2406a4 })),
    tables:
      (_0x3ed8a2 = _0x24c583.tables) == null
        ? undefined
        : _0x3ed8a2.map((_0x34173f) => ({ ..._0x34173f })),
    columnGroups:
      (_0x2194b5 = _0x24c583.columnGroups) == null
        ? undefined
        : _0x2194b5.map((_0x5eff5a) => {
            var _0x286172;
            return {
              ..._0x5eff5a,
              columns:
                (_0x286172 = _0x5eff5a.columns) == null
                  ? undefined
                  : _0x286172.map((_0x2e5fc9) => k(_0x2e5fc9)),
            };
          }),
    blockRanges:
      (_0x5093ce = _0x24c583.blockRanges) == null
        ? undefined
        : _0x5093ce.map((_0x563ecf) => ({ ..._0x563ecf })),
    customRanges:
      (_0x272d1c = _0x24c583.customRanges) == null
        ? undefined
        : _0x272d1c.map((_0x359267) => ({ ..._0x359267 })),
    customDecorations:
      (_0x6ea933 = _0x24c583.customDecorations) == null
        ? undefined
        : _0x6ea933.map((_0x390310) => ({ ..._0x390310 })),
    customBlocks:
      (_0x5eac7e = _0x24c583.customBlocks) == null
        ? undefined
        : _0x5eac7e.map((_0x23f1d1) => ({ ..._0x23f1d1 })),
  };
}
function k(_0x28e859) {
  return Array.isArray(_0x28e859)
    ? _0x28e859.map((_0x2ffedc) => k(_0x2ffedc))
    : !_0x28e859 || typeof _0x28e859 != "object"
      ? _0x28e859
      : Object.fromEntries(
          Object.entries(_0x28e859).map(([_0x59c04b, _0x512550]) => [
            _0x59c04b,
            k(_0x512550),
          ]),
        );
}
function A(_0xa7b7f8) {
  "@babel/helpers - typeof";
  return (
    (A =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3f994d) {
            return typeof _0x3f994d;
          }
        : function (_0x1f5846) {
            return _0x1f5846 &&
              typeof Symbol == "function" &&
              _0x1f5846.constructor === Symbol &&
              _0x1f5846 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1f5846;
          }),
    A(_0xa7b7f8)
  );
}
function le(_0x546620, _0x47a1aa) {
  if (A(_0x546620) != "object" || !_0x546620) return _0x546620;
  var _0x24cc56 = _0x546620[Symbol.toPrimitive];
  if (_0x24cc56 !== undefined) {
    var _0x8b715a = _0x24cc56.call(_0x546620, _0x47a1aa || "default");
    if (A(_0x8b715a) != "object") return _0x8b715a;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x47a1aa === "string" ? String : Number)(_0x546620);
}
function ue(_0x37fcbf) {
  var _0x465b16 = le(_0x37fcbf, "string");
  return A(_0x465b16) == "symbol" ? _0x465b16 : _0x465b16 + "";
}
function j(_0x22e609, _0x4f52ce, _0x18a843) {
  return (
    (_0x4f52ce = ue(_0x4f52ce)) in _0x22e609
      ? Object.defineProperty(_0x22e609, _0x4f52ce, {
          value: _0x18a843,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x22e609[_0x4f52ce] = _0x18a843),
    _0x22e609
  );
}
var M = class extends e.Disposable {
  constructor(..._0xcebf60) {
    (super(..._0xcebf60),
      j(this, "_resources", new Map()),
      j(this, "_change$", new n["Subject"]()),
      j(this, "change$", this._change$["asObservable"]()));
  }
  getFormula(_0x286f35, _0x5f5381) {
    var _0x552906;
    let _0x483b6d =
      (_0x552906 = this._resources["get"](_0x286f35)) == null
        ? undefined
        : _0x552906.formulas[_0x5f5381];
    return _0x483b6d ? { ..._0x483b6d } : undefined;
  }
  setFormula(_0x46b260, _0x5822c8, _0x3cc544) {
    this._setResource(
      _0x46b260,
      _0x5822c8,
      s(this._resources["get"](_0x46b260), _0x5822c8, _0x3cc544),
    );
  }
  removeFormula(_0x2df2e4, _0x54dc99) {
    this._setResource(
      _0x2df2e4,
      _0x54dc99,
      c(this._resources["get"](_0x2df2e4), _0x54dc99),
    );
  }
  serialize(_0x2c08a5) {
    return o(this._resources["get"](_0x2c08a5));
  }
  deserialize(_0x415387, _0x2cb922) {
    (this._resources["set"](_0x415387, o(_0x2cb922)),
      this._change$["next"]({ unitId: _0x415387 }));
  }
  removeUnit(_0x3128dd) {
    (this._resources["delete"](_0x3128dd),
      this._change$["next"]({ unitId: _0x3128dd }));
  }
  dispose() {
    (super.dispose(), this._resources["clear"](), this._change$["complete"]());
  }
  _setResource(_0x5eada7, _0x35c7b2, _0x4a6c51) {
    (this._resources["set"](_0x5eada7, _0x4a6c51),
      this._change$["next"]({ unitId: _0x5eada7, rangeId: _0x35c7b2 }));
  }
};
const N = {
    id: "docs-latex.mutation.set-formula",
    type: e.CommandType["MUTATION"],
    handler: (_0x411980, _0x56f047) =>
      !(_0x56f047 != null && _0x56f047.unitId) ||
      !_0x56f047.rangeId ||
      !_0x56f047.config
        ? false
        : (_0x411980
            .get(M)
            .setFormula(_0x56f047.unitId, _0x56f047.rangeId, _0x56f047.config),
          true),
  },
  P = {
    id: "docs-latex.mutation.remove-formula",
    type: e.CommandType["MUTATION"],
    handler: (_0x240e42, _0x165af7) =>
      !(_0x165af7 != null && _0x165af7.unitId) || !_0x165af7.rangeId
        ? false
        : (_0x240e42.get(M).removeFormula(_0x165af7.unitId, _0x165af7.rangeId),
          true),
  },
  F = {
    id: "docs-latex.command.insert-formula",
    type: e.CommandType["COMMAND"],
    handler: (_0x41c2a2, _0x3e8284) => {
      var _0x46782d;
      if (!_0x3e8284) return false;
      let { latex: _0x10d1b9 } = _0x3e8284;
      if (!_0x10d1b9.trim()) return false;
      let _0x1b5d0a = B(_0x41c2a2, _0x3e8284.unitId);
      if (!_0x1b5d0a) return false;
      let _0x5f19e8 =
          _0x3e8284.startOffset != null || _0x3e8284.endOffset != null,
        _0x13de83 = _0x5f19e8
          ? undefined
          : (_0x3e8284.selection ?? de(_0x41c2a2, _0x1b5d0a.getUnitId())),
        _0x4872bf = _0x5f19e8
          ? (_0x3e8284.segmentId ?? "")
          : (_0x3e8284.segmentId ??
            (_0x13de83 == null ? undefined : _0x13de83.segmentId) ??
            ""),
        _0x468288 = V(_0x41c2a2, _0x1b5d0a, _0x4872bf);
      if (!_0x468288) return false;
      let _0x2bb8d4 = pe(_0x3e8284, _0x13de83);
      if (!_0x2bb8d4) return false;
      let _0x24e494 = fe(
          _0x468288.actionDocumentData["body"],
          _0x468288.model,
          _0x468288.unitId,
        ),
        _0x37d51a = me({
          documentData: _0x468288.actionDocumentData,
          endOffset: _0x2bb8d4.endOffset,
          latex: _0x10d1b9,
          metadata: _0x468288.model["serialize"](_0x468288.unitId),
          properties: _0x3e8284.properties,
          rangeId: _0x24e494,
          startOffset: _0x2bb8d4.startOffset,
        });
      if (!_0x37d51a) return false;
      let _0x85e52c =
        (_0x46782d = _0x37d51a.nextMetadata) == null
          ? undefined
          : _0x46782d.formulas[_0x24e494];
      return !_0x85e52c ||
        !K({
          actionDocumentData: _0x468288.actionDocumentData,
          bodyPath: (0, e.getRichTextEditPath)(_0x468288.document, _0x4872bf),
          commandService: _0x468288.commandService,
          cursorOffset: _0x37d51a.cursorOffset,
          nextDocumentData: _0x37d51a.nextDocumentData,
          nextMetadataConfig: _0x85e52c,
          previousMetadataConfig: undefined,
          rangeId: _0x24e494,
          segmentId: _0x4872bf,
          selectionManager: _0x468288.selectionManager,
          trigger: F.id,
          undoRedoService: _0x468288.undoRedoService,
          unitId: _0x468288.unitId,
        })
        ? false
        : {
            endOffset: _0x37d51a.cursorOffset,
            rangeId: _0x24e494,
            segmentId: _0x4872bf,
            startOffset: _0x37d51a.cursorOffset - _0x10d1b9.length,
          };
    },
  },
  I = {
    id: "docs-latex.command.update-formula",
    type: e.CommandType["COMMAND"],
    handler: (_0x226e9b, _0x4f0f99) => {
      var _0x11c475;
      let _0xcd86c9 = _0x4f0f99 == null ? undefined : _0x4f0f99.latex;
      if (
        !(_0x4f0f99 != null && _0x4f0f99.rangeId) ||
        !(_0xcd86c9 != null && _0xcd86c9.trim())
      )
        return false;
      let _0x43f3c1 = _0x4f0f99.segmentId ?? "",
        _0x1e37e6 = B(_0x226e9b, _0x4f0f99.unitId),
        _0xd6faf1 = _0x1e37e6 ? V(_0x226e9b, _0x1e37e6, _0x43f3c1) : null;
      if (!_0xd6faf1) return false;
      let _0x4bec06 = p({
        documentData: _0xd6faf1.actionDocumentData,
        latex: _0xcd86c9,
        metadata: _0xd6faf1.model["serialize"](_0xd6faf1.unitId),
        properties: _0x4f0f99.properties,
        rangeId: _0x4f0f99.rangeId,
      });
      if (!_0x4bec06) return false;
      let _0x11421a =
        (_0x11c475 = _0x4bec06.nextMetadata) == null
          ? undefined
          : _0x11c475.formulas[_0x4f0f99.rangeId];
      return _0x11421a
        ? K({
            actionDocumentData: _0xd6faf1.actionDocumentData,
            bodyPath: (0, e.getRichTextEditPath)(_0xd6faf1.document, _0x43f3c1),
            commandService: _0xd6faf1.commandService,
            cursorOffset: _0x4bec06.cursorOffset,
            nextDocumentData: _0x4bec06.nextDocumentData,
            nextMetadataConfig: _0x11421a,
            previousMetadataConfig: _0xd6faf1.model["getFormula"](
              _0xd6faf1.unitId,
              _0x4f0f99.rangeId,
            ),
            rangeId: _0x4f0f99.rangeId,
            segmentId: _0x43f3c1,
            selectionManager: _0xd6faf1.selectionManager,
            trigger: I.id,
            undoRedoService: _0xd6faf1.undoRedoService,
            unitId: _0xd6faf1.unitId,
          })
        : false;
    },
  },
  L = {
    id: "docs-latex.command.remove-formula",
    type: e.CommandType["COMMAND"],
    handler: (_0x34b248, _0x548ac4) => z(_0x34b248, _0x548ac4, undefined, L.id),
  },
  R = {
    id: "docs-latex.command.replace-formula-with-text",
    type: e.CommandType["COMMAND"],
    handler: (_0x20f0b0, _0x2115f2) =>
      z(
        _0x20f0b0,
        _0x2115f2,
        (_0x2115f2 == null ? undefined : _0x2115f2.text) ?? "",
        R.id,
      ),
  };
function z(_0x39065b, _0x4d4208, _0x4bb3a4, _0x33420d) {
  if (!(_0x4d4208 != null && _0x4d4208.rangeId)) return false;
  let _0x4e40f6 = _0x4d4208.segmentId ?? "",
    _0x394ed9 = B(_0x39065b, _0x4d4208.unitId),
    _0x53a68f = _0x394ed9 ? V(_0x39065b, _0x394ed9, _0x4e40f6) : null;
  if (!_0x53a68f) return false;
  let _0x183770 = m({
    documentData: _0x53a68f.actionDocumentData,
    metadata: _0x53a68f.model["serialize"](_0x53a68f.unitId),
    rangeId: _0x4d4208.rangeId,
    text: _0x4bb3a4,
  });
  return _0x183770
    ? K({
        actionDocumentData: _0x53a68f.actionDocumentData,
        bodyPath: (0, e.getRichTextEditPath)(_0x53a68f.document, _0x4e40f6),
        commandService: _0x53a68f.commandService,
        cursorOffset: _0x183770.cursorOffset,
        nextDocumentData: _0x183770.nextDocumentData,
        nextMetadataConfig: undefined,
        previousMetadataConfig: _0x53a68f.model["getFormula"](
          _0x53a68f.unitId,
          _0x4d4208.rangeId,
        ),
        rangeId: _0x4d4208.rangeId,
        segmentId: _0x4e40f6,
        selectionManager: _0x53a68f.selectionManager,
        trigger: _0x33420d,
        undoRedoService: _0x53a68f.undoRedoService,
        unitId: _0x53a68f.unitId,
      })
    : false;
}
function B(_0x17f58e, _0x356cb5) {
  let _0x34dda9 = _0x17f58e.get(e.IUniverInstanceService);
  return (
    (_0x356cb5
      ? _0x34dda9.getUnit(_0x356cb5, e.UniverInstanceType["UNIVER_DOC"])
      : _0x34dda9.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"])) ??
    null
  );
}
function V(_0x1cbfef, _0x5938d5, _0x5b5e2f) {
  if (_0x5938d5.getSnapshot().disabled) return null;
  let _0x3eea66 = _0x5938d5.getSelfOrHeaderFooterModel(_0x5b5e2f);
  return _0x3eea66
    ? {
        actionDocumentData: _0x3eea66.getSnapshot(),
        commandService: _0x1cbfef.get(e.ICommandService),
        document: _0x5938d5,
        model: _0x1cbfef.get(M),
        selectionManager: _0x1cbfef.get(t.DocSelectionManagerService),
        undoRedoService: _0x1cbfef.get(e.IUndoRedoService),
        unitId: _0x5938d5.getUnitId(),
      }
    : null;
}
function de(_0x1f63d3, _0x41792a) {
  var _0x7c2854;
  return (_0x7c2854 = _0x1f63d3
    .get(t.DocSelectionManagerService)
    .getTextRanges({ subUnitId: _0x41792a, unitId: _0x41792a })) == null
    ? undefined
    : _0x7c2854[0];
}
function fe(_0xd4c55d, _0x454159, _0x10d7b1) {
  var _0x5ffd44;
  let _0x4891d4 = (0, e.generateRandomId)(6);
  for (
    ;
    (_0xd4c55d != null &&
      (_0x5ffd44 = _0xd4c55d.customRanges) != null &&
      _0x5ffd44.some((_0x3780dc) => _0x3780dc.rangeId === _0x4891d4)) ||
    _0x454159.getFormula(_0x10d7b1, _0x4891d4);
  )
    _0x4891d4 = (0, e.generateRandomId)(6);
  return _0x4891d4;
}
function pe(_0x385f8d, _0x1bbf6c) {
  return _0x385f8d.startOffset != null || _0x385f8d.endOffset != null
    ? _0x385f8d.startOffset == null || _0x385f8d.endOffset == null
      ? null
      : {
          endOffset: Math.max(_0x385f8d.startOffset, _0x385f8d.endOffset),
          startOffset: Math.min(_0x385f8d.startOffset, _0x385f8d.endOffset),
        }
    : !_0x1bbf6c ||
        (_0x385f8d.segmentId != null &&
          _0x385f8d.segmentId !== (_0x1bbf6c.segmentId ?? ""))
      ? null
      : {
          endOffset: Math.max(_0x1bbf6c.startOffset, _0x1bbf6c.endOffset),
          startOffset: Math.min(_0x1bbf6c.startOffset, _0x1bbf6c.endOffset),
        };
}
function me(_0x28569b) {
  try {
    return f(_0x28569b);
  } catch (_0x5e83c6) {
    if (_0x5e83c6 instanceof d) return null;
    throw _0x5e83c6;
  }
}
function he(_0x343cc4, _0x5b4941, _0x2d4ac1, _0x260aa6) {
  let _0x162ca9 = _0x343cc4.body,
    _0xb27fe2 = _0x5b4941.body,
    _0x5e46b2 =
      ge(_0x162ca9, _0xb27fe2, _0x260aa6) ??
      ve(
        _0x162ca9 == null ? undefined : _0x162ca9.dataStream,
        _0xb27fe2 == null ? undefined : _0xb27fe2.dataStream,
      );
  return [
    _0x5e46b2 && _0xb27fe2 ? _e(_0xb27fe2, _0x5e46b2, _0x2d4ac1) : null,
    _0x5e46b2 ? null : be(_0x162ca9, _0xb27fe2, _0x2d4ac1),
  ]
    .filter(Boolean)
    .reduce(
      (_0x1b2269, _0x452fc9) => e.JSONX["compose"](_0x1b2269, _0x452fc9),
      null,
    );
}
function ge(_0x17455b, _0x5563bb, _0x27c1be) {
  var _0x495efa, _0x560fdd;
  if (!_0x17455b || !_0x5563bb || _0x17455b.dataStream === _0x5563bb.dataStream)
    return null;
  let _0x4bf3e6 =
      (_0x495efa = _0x17455b.customRanges) == null
        ? undefined
        : _0x495efa.find(
            (_0x5d77e7) => _0x5d77e7.rangeId === _0x27c1be && g(_0x5d77e7),
          ),
    _0x495b50 =
      (_0x560fdd = _0x5563bb.customRanges) == null
        ? undefined
        : _0x560fdd.find(
            (_0x59ce81) => _0x59ce81.rangeId === _0x27c1be && g(_0x59ce81),
          );
  if (!_0x4bf3e6 || !_0x495b50) return null;
  let _0x1bd899 = (0, e.getCustomRangeInterval)(_0x4bf3e6),
    _0x480a2a = (0, e.getCustomRangeInterval)(_0x495b50);
  return _0x1bd899.startOffset === _0x480a2a.startOffset
    ? {
        start: _0x1bd899.startOffset,
        deleteLength: _0x1bd899.endOffset - _0x1bd899.startOffset,
        insertLength: _0x480a2a.endOffset - _0x480a2a.startOffset,
      }
    : null;
}
function _e(_0x262a1d, _0x4e0bb2, _0x118e2f) {
  let _0x2b43c0 = new e["TextX"]();
  return (
    _0x2b43c0.retain(_0x4e0bb2.start),
    _0x4e0bb2.insertLength > 0 &&
      _0x2b43c0.insert(
        _0x4e0bb2.insertLength,
        (0, e.getBodySliceForTextXAction)(
          _0x262a1d,
          _0x4e0bb2.start,
          _0x4e0bb2.start + _0x4e0bb2.insertLength,
          false,
        ),
      ),
    _0x4e0bb2.deleteLength > 0 && _0x2b43c0.delete(_0x4e0bb2.deleteLength),
    e.JSONX["getInstance"]().editOp(_0x2b43c0.serialize(), _0x118e2f)
  );
}
function ve(_0x494fbf, _0x25dea9) {
  if (_0x494fbf == null || _0x25dea9 == null || _0x494fbf === _0x25dea9)
    return null;
  let _0x10e604 = 0;
  for (
    ;
    _0x10e604 < _0x494fbf.length &&
    _0x10e604 < _0x25dea9.length &&
    _0x494fbf[_0x10e604] === _0x25dea9[_0x10e604];
  )
    _0x10e604++;
  let _0x4007c9 = _0x494fbf.length,
    _0x1121dc = _0x25dea9.length;
  for (
    ;
    _0x4007c9 > _0x10e604 &&
    _0x1121dc > _0x10e604 &&
    _0x494fbf[_0x4007c9 - 1] === _0x25dea9[_0x1121dc - 1];
  )
    (_0x4007c9--, _0x1121dc--);
  return {
    start: _0x10e604,
    deleteLength: _0x4007c9 - _0x10e604,
    insertLength: _0x1121dc - _0x10e604,
  };
}
const ye = [
  "paragraphs",
  "sectionBreaks",
  "tables",
  "columnGroups",
  "blockRanges",
  "customBlocks",
  "customRanges",
  "customDecorations",
  "textRuns",
];
function be(_0x58468b, _0x51cb6a, _0x239433) {
  let _0x139ccd = [],
    _0x5c02f5 = _0x58468b ? H(_0x58468b) : undefined,
    _0x118530 = _0x51cb6a ? H(_0x51cb6a) : undefined;
  for (let _0x27bf64 of ye)
    U(
      e.JSONX["getInstance"](),
      [..._0x239433, _0x27bf64],
      _0x5c02f5 == null ? undefined : _0x5c02f5[_0x27bf64],
      _0x118530 == null ? undefined : _0x118530[_0x27bf64],
      _0x139ccd,
    );
  return _0x139ccd.reduce(
    (_0x943cdf, _0x2004d4) => e.JSONX["compose"](_0x943cdf, _0x2004d4),
    null,
  );
}
function H(_0x14b3b4) {
  return _0x14b3b4;
}
function U(_0xe60e37, _0x585b28, _0x12c2ae, _0x1ea979, _0x1ba837) {
  if (!G(_0x12c2ae, _0x1ea979)) {
    if (_0x12c2ae == null) {
      _0x1ba837.push(_0xe60e37.insertOp(_0x585b28, _0x1ea979));
      return;
    }
    if (_0x1ea979 == null) {
      _0x1ba837.push(_0xe60e37.removeOp(_0x585b28, _0x12c2ae));
      return;
    }
    if (Array.isArray(_0x12c2ae) && Array.isArray(_0x1ea979)) {
      xe(_0xe60e37, _0x585b28, _0x12c2ae, _0x1ea979, _0x1ba837);
      return;
    }
    if (W(_0x12c2ae) && W(_0x1ea979)) {
      new Set([...Object.keys(_0x12c2ae), ...Object.keys(_0x1ea979)]).forEach(
        (_0x184c1f) => {
          U(
            _0xe60e37,
            [..._0x585b28, _0x184c1f],
            _0x12c2ae[_0x184c1f],
            _0x1ea979[_0x184c1f],
            _0x1ba837,
          );
        },
      );
      return;
    }
    _0x1ba837.push(_0xe60e37.replaceOp(_0x585b28, _0x12c2ae, _0x1ea979));
  }
}
function xe(_0x337b87, _0x3c978d, _0x216b5c, _0xc7aeac, _0x28dcf4) {
  if (_0x216b5c.length === _0xc7aeac.length) {
    _0x216b5c.forEach((_0x2caa17, _0x21e8a1) =>
      U(
        _0x337b87,
        [..._0x3c978d, _0x21e8a1],
        _0x2caa17,
        _0xc7aeac[_0x21e8a1],
        _0x28dcf4,
      ),
    );
    return;
  }
  let _0xd22127 = 0;
  for (
    ;
    _0xd22127 < _0x216b5c.length &&
    _0xd22127 < _0xc7aeac.length &&
    G(_0x216b5c[_0xd22127], _0xc7aeac[_0xd22127]);
  )
    _0xd22127++;
  let _0x293008 = _0x216b5c.length - 1,
    _0x427187 = _0xc7aeac.length - 1;
  for (
    ;
    _0x293008 >= _0xd22127 &&
    _0x427187 >= _0xd22127 &&
    G(_0x216b5c[_0x293008], _0xc7aeac[_0x427187]);
  )
    (_0x293008--, _0x427187--);
  for (let _0x5e9e0d = _0x293008; _0x5e9e0d >= _0xd22127; _0x5e9e0d--)
    _0x28dcf4.push(
      _0x337b87.removeOp([..._0x3c978d, _0x5e9e0d], _0x216b5c[_0x5e9e0d]),
    );
  for (let _0x28c4a7 = _0xd22127; _0x28c4a7 <= _0x427187; _0x28c4a7++)
    _0x28dcf4.push(
      _0x337b87.insertOp([..._0x3c978d, _0x28c4a7], _0xc7aeac[_0x28c4a7]),
    );
}
function W(_0x1dbf01) {
  return (
    typeof _0x1dbf01 == "object" && !!_0x1dbf01 && !Array.isArray(_0x1dbf01)
  );
}
function G(_0x1432d5, _0x32c456) {
  return JSON.stringify(_0x1432d5) === JSON.stringify(_0x32c456);
}
function K(_0x389d2d) {
  let {
      actionDocumentData: _0x41be51,
      bodyPath: _0x210141,
      commandService: _0x5759e7,
      cursorOffset: _0x26a105,
      nextDocumentData: _0x4b9e97,
      nextMetadataConfig: _0x342b1e,
      previousMetadataConfig: _0x19d226,
      rangeId: _0x19763c,
      segmentId: _0x2de652,
      selectionManager: _0x3bb580,
      trigger: _0x28243d,
      undoRedoService: _0x85c936,
      unitId: _0x362bab,
    } = _0x389d2d,
    _0x34c9b9 = he(_0x41be51, _0x4b9e97, _0x210141, _0x19763c),
    _0x2428e1 = J(_0x362bab, _0x19763c, _0x342b1e),
    _0x1d8a41 = J(_0x362bab, _0x19763c, _0x19d226),
    _0x31258b = _0x34c9b9
      ? Ce(_0x362bab, _0x2de652, _0x26a105, _0x34c9b9, _0x28243d)
      : null,
    _0x1cf0e2 = null,
    _0x58444a = false;
  try {
    if (_0x31258b) {
      let _0x4eaeb9 = _0x5759e7.syncExecuteCommand(
        _0x31258b.id,
        _0x31258b.params,
      );
      if (!_0x4eaeb9) return false;
      _0x1cf0e2 = {
        id: t.RichTextEditingMutation["id"],
        params: {
          ..._0x4eaeb9,
          noHistory: true,
          noNeedSetTextRange: true,
          segmentId: _0x2de652,
        },
      };
    }
    if (!_0x5759e7.syncExecuteCommand(_0x2428e1.id, _0x2428e1.params))
      return (q(_0x5759e7, _0x1cf0e2), false);
    ((_0x58444a = true),
      _0x85c936.pushUndoRedo({
        id: _0x28243d + ":" + _0x19763c,
        redoMutations: [...(_0x31258b ? [_0x31258b] : []), _0x2428e1],
        undoMutations: [_0x1d8a41, ...(_0x1cf0e2 ? [_0x1cf0e2] : [])],
        unitID: _0x362bab,
      }));
  } catch (_0x10bc02) {
    try {
      _0x58444a && _0x5759e7.syncExecuteCommand(_0x1d8a41.id, _0x1d8a41.params);
    } finally {
      q(_0x5759e7, _0x1cf0e2);
    }
    throw _0x10bc02;
  }
  return (Se(_0x3bb580, _0x362bab, _0x2de652, _0x26a105), true);
}
function Se(_0xacbf06, _0x2456e8, _0x2dcbd1, _0x34cbad) {
  _0xacbf06.replaceDocRanges(
    [{ startOffset: _0x34cbad, endOffset: _0x34cbad, segmentId: _0x2dcbd1 }],
    { unitId: _0x2456e8, subUnitId: _0x2456e8 },
    false,
    { [t.DOC_SELECTION_OPTION_PRESERVE_CARET]: true },
  );
}
function Ce(_0x1311cc, _0x3399ae, _0x40c611, _0x58d35d, _0x16a7d1) {
  return {
    id: t.RichTextEditingMutation["id"],
    params: {
      unitId: _0x1311cc,
      actions: _0x58d35d,
      segmentId: _0x3399ae,
      textRanges: [
        {
          startOffset: _0x40c611,
          endOffset: _0x40c611,
          collapsed: true,
          segmentId: _0x3399ae,
        },
      ],
      isEditing: false,
      noHistory: true,
      noNeedSetTextRange: true,
      trigger: _0x16a7d1,
    },
  };
}
function q(_0x131424, _0x2c253f) {
  _0x2c253f && _0x131424.syncExecuteCommand(_0x2c253f.id, _0x2c253f.params);
}
function J(_0x4c1af7, _0x1728f0, _0x42ce8c) {
  return _0x42ce8c
    ? {
        id: N.id,
        params: { config: _0x42ce8c, rangeId: _0x1728f0, unitId: _0x4c1af7 },
      }
    : { id: P.id, params: { rangeId: _0x1728f0, unitId: _0x4c1af7 } };
}
const Y = "DOC_LATEX_PLUGIN",
  we = "docs-latex.config",
  X = {};
var Te = "@univerjs-pro/docs-latex",
  Ee = "1.0.0-insiders.20260907-70fc579";
function Z(_0x45b882, _0x18be9c) {
  return function (_0x1fbc76, _0x1b6466) {
    _0x18be9c(_0x1fbc76, _0x1b6466, _0x45b882);
  };
}
function De(_0x13dbac, _0xdc5ab4, _0xec87e0, _0x4f947f) {
  var _0x3018e4 = arguments.length,
    _0x1a0a0f =
      _0x3018e4 < 3
        ? _0xdc5ab4
        : _0x4f947f === null
          ? (_0x4f947f = Object.getOwnPropertyDescriptor(_0xdc5ab4, _0xec87e0))
          : _0x4f947f,
    _0x23edee;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1a0a0f = Reflect.decorate(_0x13dbac, _0xdc5ab4, _0xec87e0, _0x4f947f);
  else {
    for (var _0x292619 = _0x13dbac.length - 1; _0x292619 >= 0; _0x292619--)
      (_0x23edee = _0x13dbac[_0x292619]) &&
        (_0x1a0a0f =
          (_0x3018e4 < 3
            ? _0x23edee(_0x1a0a0f)
            : _0x3018e4 > 3
              ? _0x23edee(_0xdc5ab4, _0xec87e0, _0x1a0a0f)
              : _0x23edee(_0xdc5ab4, _0xec87e0)) || _0x1a0a0f);
  }
  return (
    _0x3018e4 > 3 &&
      _0x1a0a0f &&
      Object.defineProperty(_0xdc5ab4, _0xec87e0, _0x1a0a0f),
    _0x1a0a0f
  );
}
let Q = class extends e.Disposable {
  constructor(_0x17b4fa, _0xf8cb9e) {
    (super(),
      (this._resourceManagerService = _0x17b4fa),
      (this._docsLatexModel = _0xf8cb9e),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: Y,
        businesses: [e.UniverInstanceType["UNIVER_DOC"]],
        toJson: (_0x5f318c) =>
          JSON.stringify(this._docsLatexModel["serialize"](_0x5f318c)),
        parseJson: (_0x14c1a1) => o(JSON.parse(_0x14c1a1)),
        onLoad: (_0x16d725, _0x50516f) =>
          this._docsLatexModel["deserialize"](_0x16d725, _0x50516f),
        onUnLoad: (_0x37d113) => this._docsLatexModel["removeUnit"](_0x37d113),
      }),
    );
  }
};
Q = De([Z(0, e.IResourceManagerService), Z(1, (0, e.Inject)(M))], Q);
let $ = class extends e.Plugin {
  constructor(_0x114348 = X, _0x3b4566, _0x3d2fd5, _0x5945d7) {
    (super(),
      (this._config = _0x114348),
      (this._injector = _0x3b4566),
      (this._commandService = _0x3d2fd5),
      (this._configService = _0x5945d7));
    let { ..._0x45c828 } = (0, e.merge)({}, X, this._config);
    this._configService["setConfig"](we, _0x45c828);
  }
  onStarting() {
    (this._injector["add"]([M]),
      this._injector["add"]([Q]),
      this._injector["get"](M),
      this._injector["get"](Q),
      [P, N, F, L, R, I].forEach((_0x21cf26) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x21cf26)),
      ));
  }
};
(j($, "pluginName", Y),
  j($, "packageName", Te),
  j($, "version", Ee),
  j($, "type", e.UniverInstanceType["UNIVER_DOC"]),
  ($ = De(
    [
      (0, e.DependentOn)(r.UniverLicensePlugin, t.UniverDocsPlugin),
      Z(1, (0, e.Inject)(e.Injector)),
      Z(2, e.ICommandService),
      Z(3, e.IConfigService),
    ],
    $,
  )),
  (exports.DEFAULT_LATEX_FORMULA_PROPERTIES = i),
  (exports.DOCS_LATEX_CUSTOM_RANGE_KIND = l),
  (exports.DOCS_LATEX_PLUGIN = Y),
  (exports.DOCS_LATEX_PLUGIN_CONFIG_KEY = we),
  (exports.DocsLatexModel = M),
  (exports.InsertDocsLatexFormulaCommand = F),
  (exports.RemoveDocsLatexFormulaCommand = L),
  (exports.ReplaceDocsLatexFormulaWithTextCommand = R),
  Object.defineProperty(exports, "UniverDocsLatexPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.UpdateDocsLatexFormulaCommand = I),
  (exports.buildInsertLatexFormulaActions = f),
  (exports.buildRemoveLatexFormulaActions = m),
  (exports.buildUpdateLatexFormulaActions = p),
  (exports.defaultPluginConfig = X),
  (exports.getFormulaLatexFromRange = h),
  (exports.isDocsLatexFormulaRange = g),
  (exports.normalizeDocsLatexFormulaConfig = a),
  (exports.normalizeDocsLatexMetadataResource = o));
