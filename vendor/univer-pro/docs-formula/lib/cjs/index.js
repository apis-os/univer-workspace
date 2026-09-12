Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-formula"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs"),
  r = require("@univerjs/engine-formula"),
  i = require("rxjs"),
  a = require("@univerjs-pro/license");
const o = "DOC_FORMULA_PLUGIN",
  s = "univer-docs-formula";
function c() {
  return { schemaVersion: 1, formulas: {} };
}
function l(_0x3be04f) {
  return !_0x3be04f ||
    typeof _0x3be04f != "object" ||
    !f(_0x3be04f, ["schemaVersion", "formulas"]) ||
    !("schemaVersion" in _0x3be04f) ||
    _0x3be04f.schemaVersion !== 1 ||
    !("formulas" in _0x3be04f) ||
    !_0x3be04f.formulas ||
    typeof _0x3be04f.formulas != "object" ||
    Array.isArray(_0x3be04f.formulas)
    ? false
    : Object.entries(_0x3be04f.formulas).every(
        ([_0x2fc334, _0x47ff34]) => _0x2fc334.length > 0 && u(_0x47ff34),
      );
}
function u(_0x169868) {
  return !_0x169868 ||
    typeof _0x169868 != "object" ||
    !f(_0x169868, ["formula", "numberFormat", "lastValue"]) ||
    !("formula" in _0x169868) ||
    typeof _0x169868.formula != "string" ||
    !_0x169868.formula["trim"]() ||
    ("numberFormat" in _0x169868 &&
      _0x169868.numberFormat != null &&
      (typeof _0x169868.numberFormat != "object" ||
        !f(_0x169868.numberFormat, ["pattern"]) ||
        !("pattern" in _0x169868.numberFormat) ||
        typeof _0x169868.numberFormat["pattern"] != "string"))
    ? false
    : !("lastValue" in _0x169868) ||
        _0x169868.lastValue == null ||
        d(_0x169868.lastValue);
}
function d(_0x4e85c9) {
  return !_0x4e85c9 ||
    typeof _0x4e85c9 != "object" ||
    !f(_0x4e85c9, ["v", "t", "pattern"]) ||
    !("v" in _0x4e85c9) ||
    (_0x4e85c9.v !== null &&
      typeof _0x4e85c9.v != "string" &&
      typeof _0x4e85c9.v != "number" &&
      typeof _0x4e85c9.v != "boolean") ||
    ("t" in _0x4e85c9 && _0x4e85c9.t != null && !ee(_0x4e85c9.t))
    ? false
    : !("pattern" in _0x4e85c9) ||
        _0x4e85c9.pattern == null ||
        typeof _0x4e85c9.pattern == "string";
}
function f(_0x49f62a, _0x4adedf) {
  let _0x3df6e7 = new Set(_0x4adedf);
  return Object.keys(_0x49f62a).every((_0x3890d9) => _0x3df6e7.has(_0x3890d9));
}
function ee(_0x329fbb) {
  return (
    typeof _0x329fbb == "number" &&
    Object.values(t.CellValueType).includes(_0x329fbb)
  );
}
const p = new Set([
  t.DataStreamTreeTokenType["SECTION_BREAK"],
  t.DataStreamTreeTokenType["TABLE_START"],
  t.DataStreamTreeTokenType["TABLE_ROW_START"],
  t.DataStreamTreeTokenType["TABLE_CELL_START"],
  t.DataStreamTreeTokenType["TABLE_CELL_END"],
  t.DataStreamTreeTokenType["TABLE_ROW_END"],
  t.DataStreamTreeTokenType["TABLE_END"],
  t.DataStreamTreeTokenType["COLUMN_GROUP_START"],
  t.DataStreamTreeTokenType["COLUMN_START"],
  t.DataStreamTreeTokenType["COLUMN_END"],
  t.DataStreamTreeTokenType["COLUMN_GROUP_END"],
  t.DataStreamTreeTokenType["BLOCK_START"],
  t.DataStreamTreeTokenType["BLOCK_END"],
  t.DataStreamTreeTokenType["CUSTOM_BLOCK"],
]);
var m = class extends Error {
  constructor() {
    super("Doc Formula range cannot cross document structure boundaries");
  }
};
function te(_0x44b0c5) {
  var _0x2c4df6, _0x2169b7;
  let _0x59cf87 = t.Tools["deepClone"](_0x44b0c5.documentData),
    _0x8da656 = T(_0x59cf87),
    { startOffset: _0x4e7d94, endOffset: _0x452d7f } = oe(
      _0x8da656,
      _0x44b0c5.startOffset,
      _0x44b0c5.endOffset,
    );
  ie(_0x8da656, _0x4e7d94, _0x452d7f);
  let _0x2bbb2a =
    ((_0x2c4df6 = _0x8da656.customRanges) == null
      ? undefined
      : _0x2c4df6
          .filter((_0x5f500b) => {
            if (!g(_0x5f500b)) return false;
            let _0x5205c2 = (0, t.getCustomRangeInterval)(_0x5f500b);
            return (
              _0x5205c2.endOffset > _0x4e7d94 &&
              _0x5205c2.startOffset < _0x452d7f
            );
          })
          .map((_0x338c7f) => _0x338c7f.rangeId)) ?? [];
  (ce(_0x8da656, _0x4e7d94, _0x452d7f, "￼"),
    (_0x8da656.customRanges = [
      ...(((_0x2169b7 = _0x8da656.customRanges) == null
        ? undefined
        : _0x2169b7.filter(
            (_0x308d95) =>
              !_0x2bbb2a.includes(_0x308d95.rangeId) &&
              _0x308d95.rangeId !== _0x44b0c5.rangeId,
          )) ?? []),
      ae(_0x44b0c5.rangeId, _0x4e7d94),
    ].sort(
      (_0x166ce5, _0x4d0723) => _0x166ce5.startIndex - _0x4d0723.startIndex,
    )));
  let _0x537d8a = v(_0x44b0c5.resource);
  return (
    _0x2bbb2a.forEach((_0x13cd19) => {
      delete _0x537d8a.formulas[_0x13cd19];
    }),
    (_0x537d8a.formulas[_0x44b0c5.rangeId] = t.Tools["deepClone"](
      _0x44b0c5.config,
    )),
    {
      nextDocumentData: _0x59cf87,
      nextResource: _0x537d8a,
      cursorOffset: _0x4e7d94 + 1,
    }
  );
}
function ne(_0x5ee8c8) {
  var _0x28d72f, _0x1441d6;
  let _0x581454 = t.Tools["deepClone"](_0x5ee8c8.documentData),
    _0x3ebe6a =
      (_0x28d72f = T(_0x581454).customRanges) == null
        ? undefined
        : _0x28d72f.find(
            (_0x104557) =>
              _0x104557.rangeId === _0x5ee8c8.rangeId && g(_0x104557),
          );
  if (
    !_0x3ebe6a ||
    !(
      (_0x1441d6 = _0x5ee8c8.resource) != null &&
      _0x1441d6.formulas[_0x5ee8c8.rangeId]
    )
  )
    return null;
  let _0x32ec34 = v(_0x5ee8c8.resource);
  return (
    (_0x32ec34.formulas[_0x5ee8c8.rangeId] = t.Tools["deepClone"](
      _0x5ee8c8.config,
    )),
    {
      nextDocumentData: _0x581454,
      nextResource: _0x32ec34,
      cursorOffset: _0x3ebe6a.endIndex + 1,
    }
  );
}
function h(_0x1ca86c) {
  let _0x2308ca = t.Tools["deepClone"](_0x1ca86c.documentData),
    _0x3bf107 = le(_0x2308ca, _0x1ca86c.rangeId, _0x1ca86c.text ?? "");
  if (_0x3bf107 == null) return null;
  let _0x147762 = v(_0x1ca86c.resource);
  return (
    delete _0x147762.formulas[_0x1ca86c.rangeId],
    {
      nextDocumentData: _0x2308ca,
      nextResource: _0x147762,
      cursorOffset: _0x3bf107,
    }
  );
}
function re(_0x3bb8ff, _0x5bcadc) {
  var _0x32ed62;
  let _0x1bc193 = t.Tools["deepClone"](_0x3bb8ff),
    _0x41f88c = _0x1bc193.body;
  if (!_0x41f88c) return _0x1bc193;
  let _0x5e8a7d = new Map(
      _0x5bcadc.map((_0x2f7da6) => [_0x2f7da6.rangeId, _0x2f7da6.text]),
    ),
    _0x4f5810 =
      ((_0x32ed62 = _0x41f88c.customRanges) == null
        ? undefined
        : _0x32ed62
            .filter(
              (_0x42aa33) => g(_0x42aa33) && _0x5e8a7d.has(_0x42aa33.rangeId),
            )
            .sort(
              (_0x26ba71, _0x2a6433) =>
                _0x2a6433.startIndex - _0x26ba71.startIndex,
            )) ?? [];
  for (let _0x51403a of _0x4f5810)
    le(_0x1bc193, _0x51403a.rangeId, _0x5e8a7d.get(_0x51403a.rangeId) ?? "");
  return _0x1bc193;
}
function g(_0x14c2d1) {
  var _0x59743e;
  return (
    (_0x14c2d1 == null ? undefined : _0x14c2d1.rangeType) ===
      t.CustomRangeType["CUSTOM"] &&
    _0x14c2d1.wholeEntity === true &&
    ((_0x59743e = _0x14c2d1.properties) == null
      ? undefined
      : _0x59743e.kind) === "univer-docs-formula"
  );
}
function _(_0x34003b, _0x2a8232) {
  var _0x5a1240;
  return _0x34003b == null || (_0x5a1240 = _0x34003b.customRanges) == null
    ? undefined
    : _0x5a1240.find(
        (_0x3f4fa7) => _0x3f4fa7.rangeId === _0x2a8232 && g(_0x3f4fa7),
      );
}
function ie(_0x286789, _0x568acb, _0x44749c) {
  if (_0x568acb === _0x44749c) {
    if (p.has(_0x286789.dataStream[_0x568acb])) throw new m();
    return;
  }
  for (let _0x54b73e = _0x568acb; _0x54b73e < _0x44749c; _0x54b73e++)
    if (
      _0x286789.dataStream[_0x54b73e] ===
        t.DataStreamTreeTokenType["PARAGRAPH"] ||
      p.has(_0x286789.dataStream[_0x54b73e])
    )
      throw new m();
}
function ae(_0x583717, _0x3035b7) {
  return {
    startIndex: _0x3035b7,
    endIndex: _0x3035b7,
    rangeId: _0x583717,
    rangeType: t.CustomRangeType["CUSTOM"],
    wholeEntity: true,
    properties: { kind: s },
  };
}
function v(_0x26e845) {
  return _0x26e845 ? t.Tools["deepClone"](_0x26e845) : c();
}
function oe(_0x2fd4bc, _0x12a168, _0x820acc) {
  let _0x422975 = se(_0x2fd4bc),
    _0x95605e = _0x12a168 ?? _0x422975,
    _0xc27afa = _0x820acc ?? _0x95605e;
  return {
    startOffset: y(Math.min(_0x95605e, _0xc27afa), _0x422975),
    endOffset: y(Math.max(_0x95605e, _0xc27afa), _0x422975),
  };
}
function y(_0x5799fb, _0x54db70) {
  return Math.max(0, Math.min(_0x5799fb, _0x54db70));
}
function se(_0x312955) {
  return _0x312955.dataStream["endsWith"](
    "" +
      t.DataStreamTreeTokenType["PARAGRAPH"] +
      t.DataStreamTreeTokenType["SECTION_BREAK"],
  )
    ? Math.max(0, _0x312955.dataStream["length"] - 2)
    : _0x312955.dataStream["endsWith"](
          t.DataStreamTreeTokenType["SECTION_BREAK"],
        )
      ? Math.max(0, _0x312955.dataStream["length"] - 1)
      : _0x312955.dataStream["length"];
}
function ce(_0x432239, _0x41756f, _0x5c7f95, _0x2402d2) {
  (_0x5c7f95 > _0x41756f && de(_0x432239, _0x41756f, _0x5c7f95),
    ue(_0x432239, _0x41756f, _0x2402d2));
}
function le(_0x288912, _0x56061e, _0x3a593d) {
  var _0x3af518, _0x544ffc;
  let _0x513755 = T(_0x288912),
    _0x33d9c8 =
      (_0x3af518 = _0x513755.customRanges) == null
        ? undefined
        : _0x3af518.find(
            (_0x300e82) => _0x300e82.rangeId === _0x56061e && g(_0x300e82),
          );
  if (!_0x33d9c8) return null;
  let _0x41ff52 = (0, t.getCustomRangeInterval)(_0x33d9c8);
  return (
    ce(_0x513755, _0x41ff52.startOffset, _0x41ff52.endOffset, _0x3a593d),
    (_0x513755.customRanges =
      (_0x544ffc = _0x513755.customRanges) == null
        ? undefined
        : _0x544ffc.filter((_0x59e7de) => _0x59e7de.rangeId !== _0x56061e)),
    _0x41ff52.startOffset + _0x3a593d.length
  );
}
function ue(_0x392e8e, _0x570a73, _0x39f2b4) {
  _0x39f2b4 &&
    ((_0x392e8e.dataStream =
      "" +
      _0x392e8e.dataStream["slice"](0, _0x570a73) +
      _0x39f2b4 +
      _0x392e8e.dataStream["slice"](_0x570a73)),
    fe(_0x392e8e, _0x570a73, _0x39f2b4.length));
}
function de(_0x50518a, _0x130afc, _0xf5c295) {
  let _0x3b32e8 = _0xf5c295 - _0x130afc;
  ((_0x50518a.dataStream =
    "" +
    _0x50518a.dataStream["slice"](0, _0x130afc) +
    _0x50518a.dataStream["slice"](_0xf5c295)),
    pe(_0x50518a, _0x130afc, _0x3b32e8));
}
function fe(_0xabed1b, _0x22d4db, _0x445359) {
  ((_0xabed1b.paragraphs = b(_0xabed1b.paragraphs, _0x22d4db, _0x445359)),
    (_0xabed1b.sectionBreaks = b(
      _0xabed1b.sectionBreaks,
      _0x22d4db,
      _0x445359,
    )),
    (_0xabed1b.customBlocks = b(_0xabed1b.customBlocks, _0x22d4db, _0x445359)),
    (_0xabed1b.textRuns = me(_0xabed1b.textRuns, _0x22d4db, _0x445359)),
    (_0xabed1b.tables = he(_0xabed1b.tables, _0x22d4db, _0x445359)),
    (_0xabed1b.columnGroups = S(_0xabed1b.columnGroups, _0x22d4db, _0x445359)),
    (_0xabed1b.customRanges = S(_0xabed1b.customRanges, _0x22d4db, _0x445359)),
    (_0xabed1b.customDecorations = S(
      _0xabed1b.customDecorations,
      _0x22d4db,
      _0x445359,
    )),
    (_0xabed1b.blockRanges = S(_0xabed1b.blockRanges, _0x22d4db, _0x445359)));
}
function pe(_0x42b65c, _0x3eb5ca, _0xc9a3bc) {
  var _0x114236, _0x551a8f;
  ((_0x42b65c.paragraphs = x(_0x42b65c.paragraphs, _0x3eb5ca, _0xc9a3bc)),
    (_0x42b65c.sectionBreaks = x(
      _0x42b65c.sectionBreaks,
      _0x3eb5ca,
      _0xc9a3bc,
    )),
    (_0x42b65c.customBlocks = x(_0x42b65c.customBlocks, _0x3eb5ca, _0xc9a3bc)),
    (_0x42b65c.textRuns =
      (_0x114236 = w(
        (_0x551a8f = _0x42b65c.textRuns) == null
          ? undefined
          : _0x551a8f.map((_0x2970d2) => ({
              ..._0x2970d2,
              startIndex: _0x2970d2.st,
              endIndex: _0x2970d2.ed,
            })),
        _0x3eb5ca,
        _0xc9a3bc,
      )) == null
        ? undefined
        : _0x114236.map((_0x4bffcb) => {
            let {
              startIndex: _0x374f42,
              endIndex: _0xff037e,
              ..._0x10d4fb
            } = _0x4bffcb;
            return { ..._0x10d4fb, st: _0x374f42, ed: _0xff037e };
          })),
    (_0x42b65c.tables = w(_0x42b65c.tables, _0x3eb5ca, _0xc9a3bc)),
    (_0x42b65c.columnGroups = C(_0x42b65c.columnGroups, _0x3eb5ca, _0xc9a3bc)),
    (_0x42b65c.customRanges = C(_0x42b65c.customRanges, _0x3eb5ca, _0xc9a3bc)),
    (_0x42b65c.customDecorations = C(
      _0x42b65c.customDecorations,
      _0x3eb5ca,
      _0xc9a3bc,
    )),
    (_0x42b65c.blockRanges = C(_0x42b65c.blockRanges, _0x3eb5ca, _0xc9a3bc)));
}
function b(_0x3d738e, _0x277c4f, _0x12d76e) {
  return _0x3d738e == null
    ? undefined
    : _0x3d738e.map((_0x33ed11) =>
        _0x33ed11.startIndex >= _0x277c4f
          ? { ..._0x33ed11, startIndex: _0x33ed11.startIndex + _0x12d76e }
          : _0x33ed11,
      );
}
function x(_0x517d57, _0x3d44fc, _0x2dd569) {
  let _0x136494 = _0x3d44fc + _0x2dd569;
  return _0x517d57 == null
    ? undefined
    : _0x517d57
        .map((_0x523cbd) =>
          _0x523cbd.startIndex >= _0x3d44fc && _0x523cbd.startIndex < _0x136494
            ? null
            : _0x523cbd.startIndex >= _0x136494
              ? { ..._0x523cbd, startIndex: _0x523cbd.startIndex - _0x2dd569 }
              : _0x523cbd,
        )
        .filter((_0x2f295c) => _0x2f295c != null);
}
function me(_0x3f6ea0, _0x31887d, _0xf62914) {
  return _0x3f6ea0 == null
    ? undefined
    : _0x3f6ea0.map((_0xc97eff) =>
        _0xc97eff.st >= _0x31887d
          ? {
              ..._0xc97eff,
              st: _0xc97eff.st + _0xf62914,
              ed: _0xc97eff.ed + _0xf62914,
            }
          : _0xc97eff.ed > _0x31887d
            ? { ..._0xc97eff, ed: _0xc97eff.ed + _0xf62914 }
            : _0xc97eff,
      );
}
function S(_0x4daa7b, _0x5b4cfa, _0x479051) {
  return _0x4daa7b == null
    ? undefined
    : _0x4daa7b.map((_0x5dd657) =>
        (0, t.shiftInclusiveRangeOnInsert)(_0x5dd657, _0x5b4cfa, _0x479051),
      );
}
function he(_0x453404, _0x3cd327, _0x14cdb5) {
  return _0x453404 == null
    ? undefined
    : _0x453404.map((_0x1d44fc) =>
        (0, t.shiftExclusiveRangeOnInsert)(_0x1d44fc, _0x3cd327, _0x14cdb5),
      );
}
function C(_0x3e5a57, _0x21669c, _0x2ab96a) {
  return _0x3e5a57 == null
    ? undefined
    : _0x3e5a57
        .map((_0x5ac283) =>
          (0, t.shiftInclusiveRangeOnDelete)(_0x5ac283, _0x21669c, _0x2ab96a),
        )
        .filter((_0x15fc4a) => _0x15fc4a != null);
}
function w(_0x2242e3, _0x1755d1, _0x3f5cc9) {
  return _0x2242e3 == null
    ? undefined
    : _0x2242e3
        .map((_0x63bd05) =>
          (0, t.shiftExclusiveRangeOnDelete)(_0x63bd05, _0x1755d1, _0x3f5cc9),
        )
        .filter((_0x43b325) => _0x43b325 != null);
}
function T(_0x5347e5) {
  if (!_0x5347e5.body)
    throw Error("Document main body is required to insert Doc Formula.");
  return _0x5347e5.body;
}
function E(_0x1c7b22) {
  "@babel/helpers - typeof";
  return (
    (E =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x23ebd3) {
            return typeof _0x23ebd3;
          }
        : function (_0x205d7c) {
            return _0x205d7c &&
              typeof Symbol == "function" &&
              _0x205d7c.constructor === Symbol &&
              _0x205d7c !== Symbol.prototype
              ? "symbol"
              : typeof _0x205d7c;
          }),
    E(_0x1c7b22)
  );
}
function ge(_0x5f269e, _0x1c666a) {
  if (E(_0x5f269e) != "object" || !_0x5f269e) return _0x5f269e;
  var _0x4fa3ed = _0x5f269e[Symbol.toPrimitive];
  if (_0x4fa3ed !== undefined) {
    var _0x2b1eb8 = _0x4fa3ed.call(_0x5f269e, _0x1c666a || "default");
    if (E(_0x2b1eb8) != "object") return _0x2b1eb8;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x1c666a === "string" ? String : Number)(_0x5f269e);
}
function _e(_0x390e11) {
  var _0x5ae0b3 = ge(_0x390e11, "string");
  return E(_0x5ae0b3) == "symbol" ? _0x5ae0b3 : _0x5ae0b3 + "";
}
function D(_0x415b38, _0x17b406, _0x2a0ee5) {
  return (
    (_0x17b406 = _e(_0x17b406)) in _0x415b38
      ? Object.defineProperty(_0x415b38, _0x17b406, {
          value: _0x2a0ee5,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x415b38[_0x17b406] = _0x2a0ee5),
    _0x415b38
  );
}
var O = class extends t.Disposable {
  constructor(..._0x8b8d05) {
    (super(..._0x8b8d05),
      D(this, "_resources", new Map()),
      D(this, "_rawResources", new Map()),
      D(this, "_loadErrors", new Map()),
      D(this, "_change$", new i["Subject"]()),
      D(this, "change$", this._change$["asObservable"]()));
  }
  getFormula(_0x5c417c, _0x1c55c3) {
    var _0x211226;
    let _0x93678f =
      (_0x211226 = this._resources["get"](_0x5c417c)) == null
        ? undefined
        : _0x211226.formulas[_0x1c55c3];
    return _0x93678f ? t.Tools["deepClone"](_0x93678f) : undefined;
  }
  getFormulas(_0x1cae7e) {
    var _0x299d74;
    return t.Tools["deepClone"](
      ((_0x299d74 = this._resources["get"](_0x1cae7e)) == null
        ? undefined
        : _0x299d74.formulas) ?? {},
    );
  }
  getResource(_0x235335) {
    let _0x7aa97e = this._resources["get"](_0x235335);
    return _0x7aa97e ? t.Tools["deepClone"](_0x7aa97e) : undefined;
  }
  setFormula(_0x510102, _0x2d85a4, _0x51f4fa) {
    return this.setFormulas(_0x510102, { [_0x2d85a4]: _0x51f4fa });
  }
  setResource(_0x1cf87e, _0x4ae6a4) {
    return this._loadErrors["has"](_0x1cf87e) || !l(_0x4ae6a4)
      ? false
      : (this._resources["set"](_0x1cf87e, t.Tools["deepClone"](_0x4ae6a4)),
        this._change$["next"]({ unitId: _0x1cf87e }),
        true);
  }
  setFormulas(_0x225b9f, _0x31efe8) {
    if (
      this._loadErrors["has"](_0x225b9f) ||
      !Object.keys(_0x31efe8).length ||
      !l({ schemaVersion: 1, formulas: _0x31efe8 })
    )
      return false;
    let _0x12c54c = this._resources["get"](_0x225b9f) ?? c(),
      _0x1f70bc = t.Tools["deepClone"](_0x12c54c);
    return (
      Object.assign(_0x1f70bc.formulas, t.Tools["deepClone"](_0x31efe8)),
      this._resources["set"](_0x225b9f, _0x1f70bc),
      this._change$["next"]({
        unitId: _0x225b9f,
        rangeIds: Object.keys(_0x31efe8),
      }),
      true
    );
  }
  removeFormula(_0x43dea3, _0x45f674) {
    if (this._loadErrors["has"](_0x43dea3)) return false;
    let _0x12e001 = this._resources["get"](_0x43dea3);
    if (!(_0x12e001 != null && _0x12e001.formulas[_0x45f674])) return false;
    let _0x6d8fa9 = t.Tools["deepClone"](_0x12e001);
    return (
      delete _0x6d8fa9.formulas[_0x45f674],
      this._resources["set"](_0x43dea3, _0x6d8fa9),
      this._change$["next"]({ unitId: _0x43dea3, rangeIds: [_0x45f674] }),
      true
    );
  }
  load(_0x5ae8e4, _0x2b3930) {
    return _0x2b3930 &&
      typeof _0x2b3930 == "object" &&
      "schemaVersion" in _0x2b3930 &&
      _0x2b3930.schemaVersion !== 1
      ? (this._preserveInvalid(_0x5ae8e4, _0x2b3930, "unsupported-version"),
        false)
      : l(_0x2b3930)
        ? (this._resources["set"](_0x5ae8e4, t.Tools["deepClone"](_0x2b3930)),
          this._rawResources["delete"](_0x5ae8e4),
          this._loadErrors["delete"](_0x5ae8e4),
          this._change$["next"]({ unitId: _0x5ae8e4 }),
          true)
        : (this._preserveInvalid(_0x5ae8e4, _0x2b3930, "invalid-resource"),
          false);
  }
  serialize(_0x3869c1) {
    let _0x4a09f7 = this._resources["get"](_0x3869c1);
    return _0x4a09f7
      ? t.Tools["deepClone"](_0x4a09f7)
      : this._rawResources["has"](_0x3869c1)
        ? t.Tools["deepClone"](this._rawResources["get"](_0x3869c1))
        : c();
  }
  getLoadError(_0x30a635) {
    return this._loadErrors["get"](_0x30a635);
  }
  removeUnit(_0x49c057) {
    (this._resources["delete"](_0x49c057),
      this._rawResources["delete"](_0x49c057),
      this._loadErrors["delete"](_0x49c057),
      this._change$["next"]({ unitId: _0x49c057 }));
  }
  dispose() {
    (this._resources["clear"](),
      this._rawResources["clear"](),
      this._loadErrors["clear"](),
      this._change$["complete"](),
      super.dispose());
  }
  _preserveInvalid(_0xe719bc, _0x5af310, _0x3d8ecd) {
    (this._resources["delete"](_0xe719bc),
      this._rawResources["set"](_0xe719bc, t.Tools["deepClone"](_0x5af310)),
      this._loadErrors["set"](_0xe719bc, _0x3d8ecd),
      this._change$["next"]({ unitId: _0xe719bc }));
  }
};
let ve = (function (_0x467b38) {
  return (
    (_0x467b38.EMPTY = "empty"),
    (_0x467b38.PENDING = "pending"),
    (_0x467b38.SUCCESS = "success"),
    (_0x467b38.ERROR = "error"),
    _0x467b38
  );
})({});
function k(_0x28e514, _0x25fee0) {
  return function (_0x177c7d, _0x2a39d0) {
    _0x25fee0(_0x177c7d, _0x2a39d0, _0x28e514);
  };
}
function A(_0x46c9a9, _0x539dda, _0x478e24, _0x324ea0) {
  var _0x3696af = arguments.length,
    _0x5572eb =
      _0x3696af < 3
        ? _0x539dda
        : _0x324ea0 === null
          ? (_0x324ea0 = Object.getOwnPropertyDescriptor(_0x539dda, _0x478e24))
          : _0x324ea0,
    _0x22348d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5572eb = Reflect.decorate(_0x46c9a9, _0x539dda, _0x478e24, _0x324ea0);
  else {
    for (var _0x57dc96 = _0x46c9a9.length - 1; _0x57dc96 >= 0; _0x57dc96--)
      (_0x22348d = _0x46c9a9[_0x57dc96]) &&
        (_0x5572eb =
          (_0x3696af < 3
            ? _0x22348d(_0x5572eb)
            : _0x3696af > 3
              ? _0x22348d(_0x539dda, _0x478e24, _0x5572eb)
              : _0x22348d(_0x539dda, _0x478e24)) || _0x5572eb);
  }
  return (
    _0x3696af > 3 &&
      _0x5572eb &&
      Object.defineProperty(_0x539dda, _0x478e24, _0x5572eb),
    _0x5572eb
  );
}
let j = class extends t.Disposable {
  constructor(_0x32f4a1, _0x2c7e91, _0x1469be) {
    (super(),
      (this._model = _0x32f4a1),
      (this._registrationService = _0x2c7e91),
      (this._hostExternalReferenceModel = _0x1469be),
      D(this, "_registrations", new Map()),
      D(this, "_formulaKeys", new Map()),
      D(this, "_presentationChanged$", new i["Subject"]()),
      D(
        this,
        "presentationChanged$",
        this._presentationChanged$["asObservable"](),
      ),
      this.disposeWithMe(
        this._registrationService["formulaResult$"].subscribe((_0x40edc2) => {
          for (let _0x73346 of Object.values(_0x40edc2))
            for (let _0x462e1a of Object.values(_0x73346))
              _0x462e1a.forEach((_0x5a4ec7) =>
                this._updateFormulaResult(_0x5a4ec7),
              );
        }),
      ));
  }
  syncUnit(_0x3e148e) {
    var _0x3cfd1f;
    let _0x356dc4 = _0x3e148e.getUnitId(),
      _0x3c3729 =
        ((_0x3cfd1f = _0x3e148e.getSnapshot().body) == null ||
        (_0x3cfd1f = _0x3cfd1f.customRanges) == null
          ? undefined
          : _0x3cfd1f.filter(g)) ?? [],
      _0x2ce9d5 = this._model["getFormulas"](_0x356dc4),
      _0x55da1e = new Set();
    for (let _0x26e83e of _0x3c3729) {
      let _0x781673 = _0x2ce9d5[_0x26e83e.rangeId];
      _0x781673 &&
        (_0x55da1e.add(M(_0x356dc4, _0x26e83e.rangeId)),
        this.register(
          { unitId: _0x356dc4, rangeId: _0x26e83e.rangeId },
          _0x781673,
        ));
    }
    for (let _0x14b406 of Array.from(this._registrations["values"]()))
      _0x14b406.unitId === _0x356dc4 &&
        !_0x55da1e.has(M(_0x14b406.unitId, _0x14b406.rangeId)) &&
        this.unregister(_0x14b406);
  }
  register(_0x23cdec, _0xa8f5ed) {
    let _0x3ff882 = M(_0x23cdec.unitId, _0x23cdec.rangeId),
      _0x390b5d = this._registrations["get"](_0x3ff882),
      _0x2ca1e9 = this._hostExternalReferenceModel["getRevision"](
        _0x23cdec.unitId,
      );
    if (
      _0x390b5d &&
      _0x390b5d.config["formula"] === _0xa8f5ed.formula &&
      _0x390b5d.referenceRevision === _0x2ca1e9
    ) {
      _0x390b5d.config = _0xa8f5ed;
      let _0x3b64e8 = _0x390b5d.formulaId
        ? (this._registrationService["getFormulaValueSync"](
            _0x390b5d.unitId,
            _0x390b5d.unitId,
            _0x390b5d.formulaId,
          ) ?? undefined)
        : undefined;
      ((_0x390b5d.liveResult = _0x3b64e8),
        this._setPresentation(_0x3ff882, N(_0xa8f5ed, _0x3b64e8)));
      return;
    }
    _0x390b5d != null &&
      _0x390b5d.formulaId &&
      this._deleteRegistration(_0x390b5d);
    let _0x5eea08 = {
      ..._0x23cdec,
      config: _0xa8f5ed,
      referenceRevision: _0x2ca1e9,
      presentation: N(_0xa8f5ed, undefined),
    };
    if (
      (this._registrations["set"](_0x3ff882, _0x5eea08),
      !_0xa8f5ed.formula["trim"]())
    )
      return;
    let _0x313059 = this._registrationService["registerFormulaWithRange"](
      _0x23cdec.unitId,
      _0x23cdec.unitId,
      _0xa8f5ed.formula,
      undefined,
      { rangeId: _0x23cdec.rangeId },
      r.OtherFormulaBizType["DOC"],
      _0x23cdec.rangeId,
    );
    ((_0x5eea08.formulaId = _0x313059),
      this._formulaKeys["set"](_0x313059, _0x3ff882));
  }
  unregister(_0x5f0600) {
    let _0x6cab17 = M(_0x5f0600.unitId, _0x5f0600.rangeId),
      _0x50c2a = this._registrations["get"](_0x6cab17);
    _0x50c2a &&
      (this._deleteRegistration(_0x50c2a),
      this._registrations["delete"](_0x6cab17));
  }
  unregisterUnit(_0xc3d741) {
    for (let _0x4d699e of Array.from(this._registrations["values"]()))
      _0x4d699e.unitId === _0xc3d741 && this.unregister(_0x4d699e);
  }
  getPresentation(_0x203e25) {
    var _0x3d9cb9;
    return (_0x3d9cb9 = this._registrations["get"](
      M(_0x203e25.unitId, _0x203e25.rangeId),
    )) == null
      ? undefined
      : _0x3d9cb9.presentation;
  }
  getResult(_0x2c3c11) {
    let _0x3f92d7 = this._registrations["get"](
      M(_0x2c3c11.unitId, _0x2c3c11.rangeId),
    );
    return _0x3f92d7 ? P(_0x3f92d7) : undefined;
  }
  getRegisteredFormulas() {
    return Array.from(this._registrations["values"](), (_0x166ab0) => ({
      identity: { unitId: _0x166ab0.unitId, rangeId: _0x166ab0.rangeId },
      config: _0x166ab0.config,
      referenceRevision: _0x166ab0.referenceRevision,
      ...(_0x166ab0.liveResult ? { liveResult: _0x166ab0.liveResult } : null),
    }));
  }
  dispose() {
    for (let _0x40417a of this._registrations["values"]())
      this._deleteRegistration(_0x40417a);
    (this._registrations["clear"](),
      this._formulaKeys["clear"](),
      this._presentationChanged$["complete"](),
      super.dispose());
  }
  _updateFormulaResult(_0x24b98a) {
    let _0x2bebde = this._formulaKeys["get"](_0x24b98a.formulaId),
      _0x3778ee = _0x2bebde ? this._registrations["get"](_0x2bebde) : undefined;
    !_0x2bebde ||
      !_0x3778ee ||
      ((_0x3778ee.liveResult = _0x24b98a),
      this._setPresentation(_0x2bebde, N(_0x3778ee.config, _0x24b98a)));
  }
  _setPresentation(_0x2e434b, _0x18e8cf) {
    var _0x53fc64, _0x35c3c6;
    let _0x375477 = this._registrations["get"](_0x2e434b);
    if (!_0x375477 || ye(_0x375477.presentation, _0x18e8cf)) return;
    let _0x13a4ed = _0x375477.presentation,
      _0x4b7b5f = P(_0x375477);
    ((_0x375477.presentation = _0x18e8cf),
      this._presentationChanged$["next"]({
        unitId: _0x375477.unitId,
        rangeId: _0x375477.rangeId,
        presentation: _0x18e8cf,
        previousPresentation: _0x13a4ed,
        result: P(_0x375477),
        previousResult: {
          ..._0x4b7b5f,
          ..._0x13a4ed,
          value: (_0x53fc64 = _0x13a4ed.cell) == null ? undefined : _0x53fc64.v,
          valueType:
            ((_0x35c3c6 = _0x13a4ed.cell) == null ? undefined : _0x35c3c6.t) ??
            undefined,
        },
      }));
  }
  _deleteRegistration(_0x41872f) {
    _0x41872f.formulaId &&
      (this._registrationService["deleteFormula"](
        _0x41872f.unitId,
        _0x41872f.unitId,
        [_0x41872f.formulaId],
      ),
      this._formulaKeys["delete"](_0x41872f.formulaId));
  }
};
j = A(
  [
    k(0, (0, t.Inject)(O)),
    k(1, (0, t.Inject)(r.RegisterOtherFormulaService)),
    k(2, (0, t.Inject)(e.HostExternalReferenceModel)),
  ],
  j,
);
function M(_0x2821aa, _0x2fe9ce) {
  return _0x2821aa + "\x00" + _0x2fe9ce;
}
function N(_0x2db4b4, _0x2849ed) {
  return (0, e.resolveFormulaResultPresentation)({
    numberFormat: _0x2db4b4.numberFormat,
    lastValue: _0x2db4b4.lastValue,
    result: _0x2849ed,
  });
}
function P(_0x3d1aba) {
  var _0x4e6557, _0x5d4114, _0x38ff85;
  let _0x2b941c = _0x3d1aba.presentation,
    _0x3ac695 = _0x3d1aba.config["formula"].trim()
      ? _0x2b941c.stale || _0x2b941c.cell == null
        ? "pending"
        : ((_0x4e6557 = _0x3d1aba.liveResult) == null
              ? undefined
              : _0x4e6557.status) === r.FormulaResultStatus["ERROR"]
          ? "error"
          : "success"
      : "empty";
  return {
    ..._0x2b941c,
    status: _0x3ac695,
    value: (_0x5d4114 = _0x2b941c.cell) == null ? undefined : _0x5d4114.v,
    valueType:
      ((_0x38ff85 = _0x2b941c.cell) == null ? undefined : _0x38ff85.t) ??
      undefined,
  };
}
function ye(_0x561d49, _0x31ceae) {
  var _0x99c874, _0xafd530, _0x18fd3a, _0x3efb31;
  return (
    _0x561d49.text === _0x31ceae.text &&
    _0x561d49.color === _0x31ceae.color &&
    _0x561d49.pattern === _0x31ceae.pattern &&
    _0x561d49.source === _0x31ceae.source &&
    _0x561d49.stale === _0x31ceae.stale &&
    ((_0x99c874 = _0x561d49.cell) == null ? undefined : _0x99c874.t) ===
      ((_0xafd530 = _0x31ceae.cell) == null ? undefined : _0xafd530.t) &&
    Object.is(
      (_0x18fd3a = _0x561d49.cell) == null ? undefined : _0x18fd3a.v,
      (_0x3efb31 = _0x31ceae.cell) == null ? undefined : _0x3efb31.v,
    )
  );
}
const F = {
    id: "docs-formula.mutation.set-formula",
    type: t.CommandType["MUTATION"],
    handler: (_0x2772c1, _0x2cf949) =>
      !(_0x2cf949 != null && _0x2cf949.unitId) ||
      !_0x2cf949.rangeId ||
      !_0x2cf949.config
        ? false
        : _0x2772c1
            .get(O)
            .setFormula(_0x2cf949.unitId, _0x2cf949.rangeId, _0x2cf949.config),
  },
  I = {
    id: "docs-formula.mutation.remove-formula",
    type: t.CommandType["MUTATION"],
    handler: (_0x1e09d7, _0x1ec8b2) =>
      !(_0x1ec8b2 != null && _0x1ec8b2.unitId) || !_0x1ec8b2.rangeId
        ? false
        : _0x1e09d7.get(O).removeFormula(_0x1ec8b2.unitId, _0x1ec8b2.rangeId),
  },
  L = {
    id: "docs-formula.mutation.set-resource",
    type: t.CommandType["MUTATION"],
    handler: (_0x129b8d, _0x2d5790) =>
      !(_0x2d5790 != null && _0x2d5790.unitId) || !_0x2d5790.resource
        ? false
        : _0x129b8d.get(O).setResource(_0x2d5790.unitId, _0x2d5790.resource),
  },
  R = {
    id: "docs-formula.mutation.set-last-values",
    type: t.CommandType["MUTATION"],
    handler: (_0x4088c6, _0xd19ddf) => {
      if (
        !(_0xd19ddf != null && _0xd19ddf.unitId) ||
        !_0xd19ddf.updates["length"]
      )
        return false;
      let _0x4e3bea = _0x4088c6.get(O),
        _0x15a7af = _0x4088c6.get(e.HostExternalReferenceModel),
        _0x183b2e = _0x4e3bea.getResource(_0xd19ddf.unitId);
      if (!_0x183b2e) return false;
      let _0xf55b41 = t.Tools["deepClone"](_0x183b2e),
        _0x29ab3f = false;
      for (let _0x471644 of _0xd19ddf.updates) {
        var _0x1e147a, _0x53adae, _0x6c5cf6, _0x37328c;
        let _0x3c8b38 = _0xf55b41.formulas[_0x471644.rangeId];
        !_0x3c8b38 ||
          _0x3c8b38.formula !== _0x471644.expectedFormula ||
          ((_0x1e147a = _0x3c8b38.numberFormat) == null
            ? undefined
            : _0x1e147a.pattern) !== _0x471644.expectedNumberFormat ||
          _0x15a7af.getRevision(_0xd19ddf.unitId) !==
            _0x471644.expectedReferenceRevision ||
          ((((_0x53adae = _0x3c8b38.lastValue) == null
            ? undefined
            : _0x53adae.v) !== _0x471644.lastValue["v"] ||
            ((_0x6c5cf6 = _0x3c8b38.lastValue) == null
              ? undefined
              : _0x6c5cf6.t) !== _0x471644.lastValue["t"] ||
            ((_0x37328c = _0x3c8b38.lastValue) == null
              ? undefined
              : _0x37328c.pattern) !== _0x471644.lastValue["pattern"]) &&
            ((_0x3c8b38.lastValue = t.Tools["deepClone"](_0x471644.lastValue)),
            (_0x29ab3f = true)));
      }
      return !_0x29ab3f || _0x4e3bea.setResource(_0xd19ddf.unitId, _0xf55b41);
    },
  },
  z = {
    id: "docs-formula.command.insert",
    type: t.CommandType["COMMAND"],
    handler: (_0x2e0126, _0x49d975) => {
      if (!(_0x49d975 != null && _0x49d975.formula["trim"]())) return false;
      let _0x3e6387 = K(_0x2e0126, _0x49d975.unitId, "");
      if (!_0x3e6387) return false;
      let _0x263f1e = xe(
        _0x49d975.target,
        _0x3e6387.body,
        be(_0x2e0126, _0x3e6387.unitId),
      );
      if (!_0x263f1e) return false;
      let _0x516d3d = Se(
        _0x2e0126,
        _0x3e6387.unitId,
        _0x49d975.formula,
        _0x49d975.externalReferences ?? [],
      );
      if (!_0x516d3d) return false;
      let _0x130759 = Ce(_0x3e6387.body, _0x3e6387.model, _0x3e6387.unitId),
        _0x24de68 = we({
          documentData: _0x3e6387.documentData,
          resource: _0x3e6387.resource,
          rangeId: _0x130759,
          config: {
            formula: _0x49d975.formula,
            ...(_0x49d975.numberFormat
              ? { numberFormat: _0x49d975.numberFormat }
              : null),
          },
          startOffset: _0x263f1e.startOffset,
          endOffset: _0x263f1e.endOffset,
        });
      if (!_0x24de68) return false;
      let _0x1a91e7 = (0, e.buildUpsertHostExternalReferenceMutations)(
        _0x2e0126,
        _0x3e6387.unitId,
        _0x516d3d,
      );
      return !_0x1a91e7 ||
        !q({
          accessor: _0x2e0126,
          document: _0x3e6387.document,
          unitId: _0x3e6387.unitId,
          trigger: z.id,
          rangeId: _0x130759,
          previousResource: _0x3e6387.resource,
          nextResource: _0x24de68.nextResource,
          previousDocumentData: _0x3e6387.documentData,
          nextDocumentData: _0x24de68.nextDocumentData,
          cursorOffset: _0x24de68.cursorOffset,
          externalMutations: _0x1a91e7,
        })
        ? false
        : {
            rangeId: _0x130759,
            startOffset: _0x24de68.cursorOffset - 1,
            endOffset: _0x24de68.cursorOffset,
          };
    },
  },
  B = {
    id: "docs-formula.command.update",
    type: t.CommandType["COMMAND"],
    handler: (_0x4c4445, _0x2cabb4) => {
      if (
        !(_0x2cabb4 != null && _0x2cabb4.rangeId) ||
        !_0x2cabb4.formula["trim"]()
      )
        return false;
      let _0x33d3c5 = K(_0x4c4445, _0x2cabb4.unitId, ""),
        _0x4928b1 =
          _0x33d3c5 == null
            ? undefined
            : _0x33d3c5.model["getFormula"](
                _0x33d3c5.unitId,
                _0x2cabb4.rangeId,
              ),
        _0x1e4888 = _0x33d3c5
          ? _(_0x33d3c5.documentData["body"], _0x2cabb4.rangeId)
          : undefined;
      if (!_0x33d3c5 || !_0x4928b1 || !_0x1e4888) return false;
      let _0x3cc995 = Se(
        _0x4c4445,
        _0x33d3c5.unitId,
        _0x2cabb4.formula,
        _0x2cabb4.externalReferences ?? [],
      );
      if (!_0x3cc995) return false;
      let _0x3ed3eb = (0, e.buildUpsertHostExternalReferenceMutations)(
        _0x4c4445,
        _0x33d3c5.unitId,
        _0x3cc995,
      );
      if (!_0x3ed3eb) return false;
      let _0x228b4c = je(_0x33d3c5.resource);
      return (
        (_0x228b4c.formulas[_0x2cabb4.rangeId] = {
          formula: _0x2cabb4.formula,
          ...(_0x2cabb4.numberFormat
            ? { numberFormat: _0x2cabb4.numberFormat }
            : _0x4928b1.numberFormat
              ? { numberFormat: _0x4928b1.numberFormat }
              : null),
        }),
        q({
          accessor: _0x4c4445,
          document: _0x33d3c5.document,
          unitId: _0x33d3c5.unitId,
          trigger: B.id,
          rangeId: _0x2cabb4.rangeId,
          previousResource: _0x33d3c5.resource,
          nextResource: _0x228b4c,
          cursorOffset: _0x1e4888.endIndex + 1,
          externalMutations: _0x3ed3eb,
        })
      );
    },
  },
  V = {
    id: "docs-formula.command.set-number-format",
    type: t.CommandType["COMMAND"],
    handler: (_0x587543, _0x503df4) => {
      if (!(_0x503df4 != null && _0x503df4.rangeId)) return false;
      let _0x458058 = K(_0x587543, _0x503df4.unitId, ""),
        _0x4a9bc4 =
          _0x458058 == null
            ? undefined
            : _0x458058.model["getFormula"](
                _0x458058.unitId,
                _0x503df4.rangeId,
              ),
        _0x44d26e = _0x458058
          ? _(_0x458058.documentData["body"], _0x503df4.rangeId)
          : undefined;
      if (!_0x458058 || !_0x4a9bc4 || !_0x44d26e) return false;
      let _0x1a34ba = je(_0x458058.resource);
      return (
        (_0x1a34ba.formulas[_0x503df4.rangeId] = {
          ..._0x4a9bc4,
          ...(_0x503df4.numberFormat
            ? { numberFormat: _0x503df4.numberFormat }
            : null),
        }),
        _0x503df4.numberFormat ||
          delete _0x1a34ba.formulas[_0x503df4.rangeId].numberFormat,
        q({
          accessor: _0x587543,
          document: _0x458058.document,
          unitId: _0x458058.unitId,
          trigger: V.id,
          rangeId: _0x503df4.rangeId,
          previousResource: _0x458058.resource,
          nextResource: _0x1a34ba,
          cursorOffset: _0x44d26e.endIndex + 1,
          externalMutations: {},
        })
      );
    },
  },
  H = {
    id: "docs-formula.command.remove",
    type: t.CommandType["COMMAND"],
    handler: (_0x59454f, _0x3fd97e) => G(_0x59454f, _0x3fd97e, "", H.id),
  },
  U = {
    id: "docs-formula.command.replace-with-text",
    type: t.CommandType["COMMAND"],
    handler: (_0x246ee8, _0x533a88) =>
      G(
        _0x246ee8,
        _0x533a88,
        (_0x533a88 == null ? undefined : _0x533a88.text) ?? "",
        U.id,
      ),
  },
  W = {
    id: "docs-formula.command.convert-to-text",
    type: t.CommandType["COMMAND"],
    handler: (_0x207c82, _0x392cde) => {
      if (!(_0x392cde != null && _0x392cde.rangeId)) return false;
      let _0x1757e3 = K(_0x207c82, _0x392cde.unitId, "");
      if (!_0x1757e3) return false;
      let _0x502303 = _0x207c82
        .get(j)
        .getResult({ unitId: _0x1757e3.unitId, rangeId: _0x392cde.rangeId });
      return _0x502303 ? G(_0x207c82, _0x392cde, _0x502303.text, W.id) : false;
    },
  };
function G(_0x53c34d, _0x51d9e4, _0x17fc8d, _0x698c43) {
  if (!(_0x51d9e4 != null && _0x51d9e4.rangeId)) return false;
  let _0xfcca8f = K(_0x53c34d, _0x51d9e4.unitId, "");
  if (!_0xfcca8f) return false;
  let _0x170343 = h({
    documentData: _0xfcca8f.documentData,
    resource: _0xfcca8f.resource,
    rangeId: _0x51d9e4.rangeId,
    text: _0x17fc8d,
  });
  return _0x170343
    ? q({
        accessor: _0x53c34d,
        document: _0xfcca8f.document,
        unitId: _0xfcca8f.unitId,
        trigger: _0x698c43,
        rangeId: _0x51d9e4.rangeId,
        previousResource: _0xfcca8f.resource,
        nextResource: _0x170343.nextResource,
        previousDocumentData: _0xfcca8f.documentData,
        nextDocumentData: _0x170343.nextDocumentData,
        cursorOffset: _0x170343.cursorOffset,
        externalMutations: {},
      })
    : false;
}
function K(_0x210f13, _0x38a9fd, _0x13d3e6) {
  if (_0x13d3e6) return null;
  let _0x41848d = _0x210f13.get(t.IUniverInstanceService),
    _0x93edf2 =
      (_0x38a9fd
        ? _0x41848d.getUnit(_0x38a9fd, t.UniverInstanceType["UNIVER_DOC"])
        : _0x41848d.getCurrentUnitOfType(t.UniverInstanceType["UNIVER_DOC"])) ??
      null;
  if (!_0x93edf2) return null;
  let _0x38d1e3 = _0x93edf2.getSnapshot(),
    _0x31e3a3 = _0x38d1e3.body;
  if (_0x38d1e3.disabled || !_0x31e3a3) return null;
  let _0x4481d2 = _0x210f13.get(O);
  return _0x4481d2.getLoadError(_0x93edf2.getUnitId())
    ? null
    : {
        document: _0x93edf2,
        body: _0x31e3a3,
        documentData: _0x38d1e3,
        model: _0x4481d2,
        resource: _0x4481d2.getResource(_0x93edf2.getUnitId()) ?? c(),
        unitId: _0x93edf2.getUnitId(),
      };
}
function be(_0x3a38ff, _0x1d451f) {
  var _0x2d60d5;
  return (_0x2d60d5 = _0x3a38ff
    .get(n.DocSelectionManagerService)
    .getTextRanges({ subUnitId: _0x1d451f, unitId: _0x1d451f })) == null
    ? undefined
    : _0x2d60d5[0];
}
function xe(_0x1672c4, _0x3a7530, _0x506562) {
  if ((_0x1672c4 == null ? undefined : _0x1672c4.type) === "paragraph") {
    var _0x4ab2db;
    let _0x4697d4 =
      ((_0x4ab2db = _0x3a7530.paragraphs) == null
        ? undefined
        : _0x4ab2db.filter(
            (_0x5035c6) => _0x5035c6.paragraphId === _0x1672c4.paragraphId,
          )) ?? [];
    if (_0x4697d4.length !== 1) return null;
    let _0x40a703 = _0x4697d4[0],
      _0x15a2d6 = (0, t.getParagraphContentStartOffset)(_0x3a7530, _0x40a703),
      _0x4ad479 = _0x40a703.startIndex - _0x15a2d6,
      _0x40c9ab = _0x1672c4.position === "end" ? _0x4ad479 : _0x1672c4.position;
    if (!Number.isInteger(_0x40c9ab) || _0x40c9ab < 0 || _0x40c9ab > _0x4ad479)
      return null;
    let _0x30c955 = _0x15a2d6 + _0x40c9ab;
    return { startOffset: _0x30c955, endOffset: _0x30c955 };
  }
  if ((_0x1672c4 == null ? undefined : _0x1672c4.type) === "range")
    return !Number.isInteger(_0x1672c4.startOffset) ||
      !Number.isInteger(_0x1672c4.endOffset)
      ? null
      : {
          startOffset: Math.min(_0x1672c4.startOffset, _0x1672c4.endOffset),
          endOffset: Math.max(_0x1672c4.startOffset, _0x1672c4.endOffset),
        };
  let _0x26fe65 =
    (_0x1672c4 == null ? undefined : _0x1672c4.type) === "selection"
      ? _0x1672c4.selection
      : _0x506562;
  return !_0x26fe65 || _0x26fe65.segmentId
    ? null
    : {
        startOffset: Math.min(_0x26fe65.startOffset, _0x26fe65.endOffset),
        endOffset: Math.max(_0x26fe65.startOffset, _0x26fe65.endOffset),
      };
}
function Se(_0x3e00d1, _0x522338, _0x54bbf2, _0x1fbefe) {
  let _0x4fdd76 = _0x3e00d1.get(r.LexerTreeBuilder),
    _0x6703d = _0x54bbf2.startsWith("=") ? _0x54bbf2.slice(1) : _0x54bbf2,
    _0x3cd5e2 = _0x4fdd76.sequenceNodesBuilder(_0x6703d);
  if (!_0x3cd5e2) return null;
  let _0x7cf66f = _0x3e00d1.get(e.HostExternalReferenceModel),
    _0xbbf11b = (0, e.resolveHostFormulaExternalReferences)({
      qualifiers: (0, e.collectFormulaExternalReferenceQualifiers)(_0x3cd5e2),
      explicitReferences: _0x1fbefe ?? [],
      resolveBinding: (_0x3f8218) =>
        _0x7cf66f.resolveBinding(_0x522338, _0x3f8218),
    });
  return _0xbbf11b.status === "resolved" ? _0xbbf11b.references : null;
}
function Ce(_0x256d2f, _0x19b55e, _0x4dc473) {
  var _0x1f4769;
  let _0x29b4dd = (0, t.generateRandomId)(6);
  for (
    ;
    (_0x256d2f != null &&
      (_0x1f4769 = _0x256d2f.customRanges) != null &&
      _0x1f4769.some((_0x421692) => _0x421692.rangeId === _0x29b4dd)) ||
    _0x19b55e.getFormula(_0x4dc473, _0x29b4dd);
  )
    _0x29b4dd = (0, t.generateRandomId)(6);
  return _0x29b4dd;
}
function we(_0x533161) {
  try {
    return te(_0x533161);
  } catch (_0x4630e6) {
    if (_0x4630e6 instanceof m) return null;
    throw _0x4630e6;
  }
}
function Te(_0xe53a41) {
  let _0x3710ff =
    _0xe53a41.previousDocumentData && _0xe53a41.nextDocumentData
      ? De(
          _0xe53a41.document,
          _0xe53a41.unitId,
          _0xe53a41.previousDocumentData,
          _0xe53a41.nextDocumentData,
          _0xe53a41.cursorOffset,
          _0xe53a41.trigger,
        )
      : null;
  return _0xe53a41.previousDocumentData &&
    _0xe53a41.nextDocumentData &&
    !_0x3710ff
    ? null
    : {
        documentRedo: _0x3710ff,
        resourceRedo: {
          id: L.id,
          params: {
            unitId: _0xe53a41.unitId,
            resource: _0xe53a41.nextResource,
          },
        },
        resourceUndo: {
          id: L.id,
          params: {
            unitId: _0xe53a41.unitId,
            resource: _0xe53a41.previousResource,
          },
        },
      };
}
function Ee(_0x36077c, _0x2a4396, _0x48df4a, _0x40e158) {
  _0x40e158.pushUndoRedo({
    id: _0x36077c.trigger + ":" + _0x36077c.rangeId,
    unitID: _0x36077c.unitId,
    redoMutations: [
      ...(_0x36077c.externalMutations["redoMutation"]
        ? [_0x36077c.externalMutations["redoMutation"]]
        : []),
      ...(_0x2a4396.documentRedo ? [_0x2a4396.documentRedo] : []),
      _0x2a4396.resourceRedo,
    ],
    undoMutations: [
      _0x2a4396.resourceUndo,
      ...(_0x48df4a ? [_0x48df4a] : []),
      ...(_0x36077c.externalMutations["undoMutation"]
        ? [_0x36077c.externalMutations["undoMutation"]]
        : []),
    ],
  });
}
function q(_0x4cf4be) {
  let _0x4a0d15 = _0x4cf4be.accessor["get"](t.ICommandService),
    _0x310626 = _0x4cf4be.accessor["get"](t.IUndoRedoService),
    _0x2cb39a = _0x4cf4be.accessor["get"](n.DocSelectionManagerService),
    _0xd911db = Te(_0x4cf4be);
  if (!_0xd911db) return false;
  let _0x4c9cca = false,
    _0x2cfda9 = null,
    _0x5e2f93 = false;
  try {
    if (_0x4cf4be.externalMutations["redoMutation"]) {
      if (
        !_0x4a0d15.syncExecuteCommand(
          _0x4cf4be.externalMutations["redoMutation"].id,
          _0x4cf4be.externalMutations["redoMutation"].params,
        )
      )
        return false;
      _0x4c9cca = true;
    }
    if (_0xd911db.documentRedo) {
      let _0x1d0d23 = _0x4a0d15.syncExecuteCommand(
        _0xd911db.documentRedo["id"],
        _0xd911db.documentRedo["params"],
      );
      if (!_0x1d0d23)
        return (J(_0x4a0d15, _0x4cf4be.externalMutations, _0x4c9cca), false);
      _0x2cfda9 = {
        id: n.RichTextEditingMutation["id"],
        params: {
          ..._0x1d0d23,
          noHistory: true,
          noNeedSetTextRange: true,
          segmentId: "",
        },
      };
    }
    if (
      !_0x4a0d15.syncExecuteCommand(
        _0xd911db.resourceRedo["id"],
        _0xd911db.resourceRedo["params"],
      )
    )
      return (
        Oe(_0x4a0d15, _0x2cfda9),
        J(_0x4a0d15, _0x4cf4be.externalMutations, _0x4c9cca),
        false
      );
    ((_0x5e2f93 = true), Ee(_0x4cf4be, _0xd911db, _0x2cfda9, _0x310626));
  } catch (_0xb4b098) {
    throw (
      _0x5e2f93 &&
        _0x4a0d15.syncExecuteCommand(
          _0xd911db.resourceUndo["id"],
          _0xd911db.resourceUndo["params"],
        ),
      Oe(_0x4a0d15, _0x2cfda9),
      J(_0x4a0d15, _0x4cf4be.externalMutations, _0x4c9cca),
      _0xb4b098
    );
  }
  return (
    _0x2cb39a.replaceDocRanges(
      [
        {
          startOffset: _0x4cf4be.cursorOffset,
          endOffset: _0x4cf4be.cursorOffset,
          segmentId: "",
        },
      ],
      { unitId: _0x4cf4be.unitId, subUnitId: _0x4cf4be.unitId },
      false,
      { [n.DOC_SELECTION_OPTION_PRESERVE_CARET]: true },
    ),
    true
  );
}
function De(_0x59ee4d, _0x24a99f, _0x5b681d, _0x3f45a8, _0xc9fd59, _0x405ed7) {
  let _0x19eafb = ke(
    _0x5b681d,
    _0x3f45a8,
    (0, t.getRichTextEditPath)(_0x59ee4d, ""),
  );
  return _0x19eafb
    ? {
        id: n.RichTextEditingMutation["id"],
        params: {
          unitId: _0x24a99f,
          actions: _0x19eafb,
          segmentId: "",
          textRanges: [
            {
              startOffset: _0xc9fd59,
              endOffset: _0xc9fd59,
              collapsed: true,
              segmentId: "",
            },
          ],
          isEditing: false,
          noHistory: true,
          noNeedSetTextRange: true,
          trigger: _0x405ed7,
        },
      }
    : null;
}
function Oe(_0xa7a6dc, _0x375a24) {
  _0x375a24 && _0xa7a6dc.syncExecuteCommand(_0x375a24.id, _0x375a24.params);
}
function J(_0x379e3f, _0x55df16, _0x33e90d) {
  _0x33e90d &&
    _0x55df16.undoMutation &&
    _0x379e3f.syncExecuteCommand(
      _0x55df16.undoMutation["id"],
      _0x55df16.undoMutation["params"],
    );
}
function ke(_0x2c89c8, _0x3bfc95, _0x17e9b9) {
  let _0x5be0ec = _0x2c89c8.body,
    _0x5a9a60 = _0x3bfc95.body,
    _0x616f59 = Ae(
      _0x5be0ec == null ? undefined : _0x5be0ec.dataStream,
      _0x5a9a60 == null ? undefined : _0x5a9a60.dataStream,
    );
  if (!_0x616f59 || !_0x5a9a60) return null;
  let _0x4ef5a1 = new t["TextX"]();
  return (
    _0x4ef5a1.retain(_0x616f59.start),
    _0x616f59.insertLength > 0 &&
      _0x4ef5a1.insert(
        _0x616f59.insertLength,
        (0, t.getBodySliceForTextXAction)(
          _0x5a9a60,
          _0x616f59.start,
          _0x616f59.start + _0x616f59.insertLength,
          false,
        ),
      ),
    _0x616f59.deleteLength > 0 && _0x4ef5a1.delete(_0x616f59.deleteLength),
    t.JSONX["getInstance"]().editOp(_0x4ef5a1.serialize(), _0x17e9b9)
  );
}
function Ae(_0x1fc2f2, _0x203958) {
  if (_0x1fc2f2 == null || _0x203958 == null || _0x1fc2f2 === _0x203958)
    return null;
  let _0x47c6e9 = 0;
  for (
    ;
    _0x47c6e9 < _0x1fc2f2.length &&
    _0x47c6e9 < _0x203958.length &&
    _0x1fc2f2[_0x47c6e9] === _0x203958[_0x47c6e9];
  )
    _0x47c6e9 += 1;
  let _0x7908b6 = _0x1fc2f2.length,
    _0x3fa8c2 = _0x203958.length;
  for (
    ;
    _0x7908b6 > _0x47c6e9 &&
    _0x3fa8c2 > _0x47c6e9 &&
    _0x1fc2f2[_0x7908b6 - 1] === _0x203958[_0x3fa8c2 - 1];
  )
    (--_0x7908b6, --_0x3fa8c2);
  return {
    start: _0x47c6e9,
    deleteLength: _0x7908b6 - _0x47c6e9,
    insertLength: _0x3fa8c2 - _0x47c6e9,
  };
}
function je(_0x4c3c85) {
  return {
    schemaVersion: 1,
    formulas: Object.fromEntries(
      Object.entries(_0x4c3c85.formulas).map(([_0x1f43b8, _0x1b7393]) => [
        _0x1f43b8,
        {
          ..._0x1b7393,
          ...(_0x1b7393.numberFormat
            ? { numberFormat: { ..._0x1b7393.numberFormat } }
            : null),
          ...(_0x1b7393.lastValue
            ? { lastValue: { ..._0x1b7393.lastValue } }
            : null),
        },
      ]),
    ),
  };
}
let Y = class extends t.Disposable {
  constructor(_0x35f43a, _0x9f8719, _0x42cc8d, _0xcb1120) {
    (super(),
      (this._instanceService = _0x35f43a),
      (this._commandService = _0x9f8719),
      (this._model = _0x42cc8d),
      (this._service = _0xcb1120),
      D(this, "_pendingUnitIds", new Set()),
      D(this, "_syncScheduled", false),
      D(this, "_isDisposed", false),
      this._instanceService["getAllUnitsForType"](
        t.UniverInstanceType["UNIVER_DOC"],
      ).forEach((_0x46ab5a) => this._service["syncUnit"](_0x46ab5a)),
      this.disposeWithMe(
        this._model["change$"].subscribe(({ unitId: _0x620e92 }) =>
          this._syncUnit(_0x620e92),
        ),
      ),
      this.disposeWithMe(
        this._instanceService["unitAdded$"].subscribe(({ unit: _0x4d2fbc }) => {
          _0x4d2fbc.type === t.UniverInstanceType["UNIVER_DOC"] &&
            this._queueSync(_0x4d2fbc.getUnitId());
        }),
      ),
      this.disposeWithMe(
        this._instanceService["unitDisposed$"].subscribe((_0x318b59) => {
          this._service["unregisterUnit"](_0x318b59.getUnitId());
        }),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x5b1c28) => {
          if (
            _0x5b1c28.id === n.RichTextEditingMutation["id"] &&
            Me(_0x5b1c28.params)
          ) {
            let _0x1f8535 = _0x5b1c28.params;
            _0x1f8535.segmentId || this._syncUnit(_0x1f8535.unitId);
          }
        }),
      ));
  }
  dispose() {
    ((this._isDisposed = true), super.dispose());
  }
  _queueSync(_0x40d1ee) {
    (this._pendingUnitIds["add"](_0x40d1ee),
      !this._syncScheduled &&
        ((this._syncScheduled = true),
        queueMicrotask(() => {
          if (((this._syncScheduled = false), this._isDisposed)) return;
          let _0x2d8440 = Array.from(this._pendingUnitIds);
          (this._pendingUnitIds["clear"](),
            _0x2d8440.forEach((_0x386445) => this._syncUnit(_0x386445)));
        })));
  }
  _syncUnit(_0x31577d) {
    let _0x4869ca = this._instanceService["getUnit"](
      _0x31577d,
      t.UniverInstanceType["UNIVER_DOC"],
    );
    _0x4869ca && this._service["syncUnit"](_0x4869ca);
  }
};
Y = A(
  [
    k(0, t.IUniverInstanceService),
    k(1, t.ICommandService),
    k(2, (0, t.Inject)(O)),
    k(3, (0, t.Inject)(j)),
  ],
  Y,
);
function Me(_0x53a87f) {
  return (
    typeof _0x53a87f == "object" &&
    !!_0x53a87f &&
    "unitId" in _0x53a87f &&
    typeof _0x53a87f.unitId == "string" &&
    (!("segmentId" in _0x53a87f) ||
      _0x53a87f.segmentId === undefined ||
      typeof _0x53a87f.segmentId == "string")
  );
}
let X = class extends t.Disposable {
  constructor(_0xc230ff, _0x2fb748) {
    (super(),
      (this._resourceManagerService = _0xc230ff),
      (this._docFormulaModel = _0x2fb748),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"]({
          pluginName: o,
          businesses: [t.UniverInstanceType["UNIVER_DOC"]],
          toJson: (_0x33cd22) =>
            JSON.stringify(this._docFormulaModel["serialize"](_0x33cd22)),
          parseJson: (_0x4c583e) => JSON.parse(_0x4c583e),
          onLoad: (_0x51c79f, _0x1f83b8) => {
            this._docFormulaModel["load"](_0x51c79f, _0x1f83b8);
          },
          onUnLoad: (_0x496d2e) =>
            this._docFormulaModel["removeUnit"](_0x496d2e),
        }),
      ));
  }
};
X = A([k(0, t.IResourceManagerService), k(1, (0, t.Inject)(O))], X);
var Ne = "@univerjs-pro/docs-formula",
  Pe = "1.0.0-insiders.20260907-70fc579";
const Fe = {};
let Z = class extends t.Disposable {
  constructor(_0x1d611e, _0x50b7a1, _0xf6b4b7) {
    (super(),
      (this._univerInstanceService = _0x1d611e),
      (this._formulaService = _0x50b7a1),
      this.disposeWithMe(
        _0xf6b4b7.register({
          resolve: (_0x726a7c, _0x1863b8) => {
            var _0x4086cc;
            return (
              ((_0x4086cc = _0x1863b8.customRanges) == null
                ? undefined
                : _0x4086cc
                    .filter(g)
                    .map((_0x40377f) => ({
                      startOffset: _0x40377f.startIndex,
                      endOffset: _0x40377f.endIndex + 1,
                      text: this.resolveFormula(_0x726a7c, _0x40377f.rangeId),
                    }))) ?? []
            );
          },
        }),
      ),
      this.disposeWithMe(
        this._formulaService["presentationChanged$"].subscribe(
          ({ unitId: _0xaf2f3d }) => {
            _0xf6b4b7.notifyTextChanged(_0xaf2f3d);
          },
        ),
      ));
  }
  resolveFormula(_0x334377, _0x15d061) {
    var _0x3ca4c2;
    return (
      ((_0x3ca4c2 = this._formulaService["getResult"]({
        unitId: _0x334377,
        rangeId: _0x15d061,
      })) == null
        ? undefined
        : _0x3ca4c2.text) ?? ""
    );
  }
  resolveText(_0x4f08a3, _0x18b2b3, _0x38adf1) {
    var _0x597b85;
    let _0x56db1e = this._univerInstanceService["getUnit"](
        _0x4f08a3,
        t.UniverInstanceType["UNIVER_DOC"],
      ),
      _0xd1791a = _0x56db1e == null ? undefined : _0x56db1e.getBody();
    if (!_0xd1791a) return "";
    let _0x1e154a = _0xd1791a.dataStream["slice"](_0x18b2b3, _0x38adf1),
      _0x32e7e2 =
        ((_0x597b85 = _0xd1791a.customRanges) == null
          ? undefined
          : _0x597b85
              .filter(
                (_0x11c20c) =>
                  g(_0x11c20c) &&
                  _0x11c20c.startIndex >= _0x18b2b3 &&
                  _0x11c20c.endIndex < _0x38adf1,
              )
              .sort(
                (_0x33c115, _0xd58270) =>
                  _0xd58270.startIndex - _0x33c115.startIndex,
              )) ?? [];
    for (let _0x1c7c7d of _0x32e7e2) {
      let _0x3f3317 = _0x1c7c7d.startIndex - _0x18b2b3,
        _0x1b440d = _0x1c7c7d.endIndex - _0x18b2b3 + 1;
      _0x1e154a =
        "" +
        _0x1e154a.slice(0, _0x3f3317) +
        this.resolveFormula(_0x4f08a3, _0x1c7c7d.rangeId) +
        _0x1e154a.slice(_0x1b440d);
    }
    return _0x1e154a;
  }
  degradeDocumentData(_0x190977) {
    return Ie(_0x190977);
  }
  degradeBody(_0x45ee8d, _0x58c638, _0x46a569 = {}) {
    var _0x5110b7;
    return (
      re(
        { id: _0x45ee8d, body: _0x58c638, documentStyle: {} },
        (
          ((_0x5110b7 = _0x58c638.customRanges) == null
            ? undefined
            : _0x5110b7.filter(g)) ?? []
        ).map((_0x32d9ae) => ({
          rangeId: _0x32d9ae.rangeId,
          text:
            _0x46a569[_0x32d9ae.rangeId] ??
            this.resolveFormula(_0x45ee8d, _0x32d9ae.rangeId),
        })),
      ).body ?? { dataStream: "" }
    );
  }
};
Z = A(
  [
    k(0, t.IUniverInstanceService),
    k(1, (0, t.Inject)(j)),
    k(2, (0, t.Inject)(n.DocTextResolverService)),
  ],
  Z,
);
function Ie(_0x247438) {
  var _0x32fce4, _0x1e9ad6;
  let _0x24eedf = Le(_0x247438),
    _0x25ccfb = re(
      _0x247438,
      (
        ((_0x32fce4 = _0x247438.body) == null ||
        (_0x32fce4 = _0x32fce4.customRanges) == null
          ? undefined
          : _0x32fce4.filter(g)) ?? []
      ).map((_0xf73974) => ({
        rangeId: _0xf73974.rangeId,
        text: Re(
          _0x24eedf == null ? undefined : _0x24eedf.formulas[_0xf73974.rangeId],
        ),
      })),
    );
  return (
    (_0x25ccfb.resources =
      (_0x1e9ad6 = _0x25ccfb.resources) == null
        ? undefined
        : _0x1e9ad6.filter((_0x4d822a) => _0x4d822a.name !== o)),
    _0x25ccfb
  );
}
function Le(_0x490817) {
  var _0xeaafe9;
  let _0x48de8a =
    (_0xeaafe9 = _0x490817.resources) == null ||
    (_0xeaafe9 = _0xeaafe9.find(
      (_0x5012b3) => _0x5012b3.name === "DOC_FORMULA_PLUGIN",
    )) == null
      ? undefined
      : _0xeaafe9.data;
  if (_0x48de8a)
    try {
      let _0x1bf860 = JSON.parse(_0x48de8a);
      return l(_0x1bf860) ? _0x1bf860 : undefined;
    } catch {
      return;
    }
}
function Re(_0xdfc021) {
  return _0xdfc021
    ? (0, e.resolveFormulaResultPresentation)({
        lastValue: _0xdfc021.lastValue,
        numberFormat: _0xdfc021.numberFormat,
      }).text
    : "";
}
let Q = class extends t.Disposable {
  constructor(_0x31d5b9, _0x477f27, _0x53a2ae) {
    (super(),
      (this._formulaService = _0x31d5b9),
      (this._cacheEligibilityService = _0x477f27),
      this.disposeWithMe(_0x53a2ae.registerProvider(this)));
  }
  collectMutations(_0x5daef6) {
    let _0x241fd3 = new Map();
    for (let _0x1b0583 of this._formulaService["getRegisteredFormulas"]()) {
      var _0x573901;
      if (
        !this._cacheEligibilityService["assess"](
          _0x1b0583.config["formula"],
          _0x1b0583.liveResult,
        ).eligible
      )
        continue;
      let _0x4c6995 = (0, e.getScalarFormulaResultCell)(_0x1b0583.liveResult),
        _0x382e16 = _0x4c6995 ? (0, e.toFormulaLastValue)(_0x4c6995) : null;
      if (!_0x382e16 || ze(_0x1b0583.config["lastValue"], _0x382e16)) continue;
      let _0x50625f = _0x241fd3.get(_0x1b0583.identity["unitId"]) ?? [];
      (_0x50625f.push({
        rangeId: _0x1b0583.identity["rangeId"],
        expectedFormula: _0x1b0583.config["formula"],
        expectedNumberFormat:
          (_0x573901 = _0x1b0583.config["numberFormat"]) == null
            ? undefined
            : _0x573901.pattern,
        expectedReferenceRevision: _0x1b0583.referenceRevision,
        lastValue: _0x382e16,
      }),
        _0x241fd3.set(_0x1b0583.identity["unitId"], _0x50625f));
    }
    return Array.from(_0x241fd3, ([_0x321bf3, _0x2738fb]) => ({
      id: R.id,
      params: { unitId: _0x321bf3, updates: _0x2738fb },
    }));
  }
};
Q = A(
  [
    k(0, (0, t.Inject)(j)),
    k(1, (0, t.Inject)(e.FormulaCacheEligibilityService)),
    k(2, (0, t.Inject)(e.FormulaLastValuePersistenceService)),
  ],
  Q,
);
function ze(_0x104154, _0x47d784) {
  return (
    (_0x104154 == null ? undefined : _0x104154.v) === _0x47d784.v &&
    (_0x104154 == null ? undefined : _0x104154.t) === _0x47d784.t &&
    (_0x104154 == null ? undefined : _0x104154.pattern) === _0x47d784.pattern
  );
}
let $ = class extends t.Plugin {
  constructor(_0x3b8e0b = Fe, _0x746700, _0x46d59e, _0x163a16) {
    (super(),
      (this._config = _0x3b8e0b),
      (this._injector = _0x746700),
      (this._commandService = _0x46d59e),
      (this._configService = _0x163a16));
    let { ..._0x521bbc } = (0, t.merge)({}, Fe, this._config);
    this._configService["setConfig"]("docs-formula.config", _0x521bbc);
  }
  onStarting() {
    (this._injector["add"]([O]),
      this._injector["add"]([j]),
      this._injector["add"]([X]),
      this._injector["add"]([Y]),
      this._injector["add"]([Q]),
      this._injector["add"]([Z]),
      (0, t.touchDependencies)(this._injector, [[O], [X], [Y], [Q], [Z]]),
      [F, I, L, R, z, B, V, H, U, W].forEach((_0x5083ed) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x5083ed)),
      ));
  }
};
(D($, "pluginName", o),
  D($, "packageName", Ne),
  D($, "version", Pe),
  D($, "type", t.UniverInstanceType["UNIVER_DOC"]),
  ($ = A(
    [
      (0, t.DependentOn)(
        a.UniverLicensePlugin,
        e.UniverProFormulaEnginePlugin,
        n.UniverDocsPlugin,
      ),
      k(1, (0, t.Inject)(t.Injector)),
      k(2, t.ICommandService),
      k(3, t.IConfigService),
    ],
    $,
  )),
  (exports.ConvertDocFormulaToTextCommand = W),
  (exports.DOC_FORMULA_CUSTOM_RANGE_KIND = s),
  (exports.DOC_FORMULA_OBJECT_REPLACEMENT = "￼"),
  (exports.DOC_FORMULA_PLUGIN = o),
  (exports.DOC_FORMULA_SCHEMA_VERSION = 1),
  Object.defineProperty(exports, "DocFormulaDisplayTextService", {
    enumerable: true,
    get: function () {
      return Z;
    },
  }),
  Object.defineProperty(exports, "DocFormulaLifecycleController", {
    enumerable: true,
    get: function () {
      return Y;
    },
  }),
  (exports.DocFormulaModel = O),
  Object.defineProperty(exports, "DocFormulaResourceController", {
    enumerable: true,
    get: function () {
      return X;
    },
  }),
  (exports.DocFormulaResultStatus = ve),
  Object.defineProperty(exports, "DocFormulaService", {
    enumerable: true,
    get: function () {
      return j;
    },
  }),
  (exports.InsertDocFormulaCommand = z),
  (exports.InvalidDocFormulaInsertRangeError = m),
  (exports.RemoveDocFormulaCommand = H),
  (exports.RemoveDocFormulaMutation = I),
  (exports.ReplaceDocFormulaWithTextCommand = U),
  (exports.SetDocFormulaLastValuesMutation = R),
  (exports.SetDocFormulaMutation = F),
  (exports.SetDocFormulaNumberFormatCommand = V),
  (exports.SetDocFormulaResourceMutation = L),
  Object.defineProperty(exports, "UniverDocsFormulaPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.UpdateDocFormulaCommand = B),
  (exports.assertSafeDocFormulaInsertRange = ie),
  (exports.buildInsertDocFormulaActions = te),
  (exports.buildRemoveDocFormulaActions = h),
  (exports.buildUpdateDocFormulaActions = ne),
  (exports.createEmptyDocFormulaResource = c),
  (exports.degradeDocFormulaDocumentData = Ie),
  (exports.findDocFormulaRange = _),
  (exports.isDocFormulaConfig = u),
  (exports.isDocFormulaRange = g),
  (exports.isDocFormulaResource = l),
  (exports.isFormulaLastValue = d));
