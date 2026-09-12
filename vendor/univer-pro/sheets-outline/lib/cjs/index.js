Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs/sheets"),
  n = require("rxjs"),
  r = require("rxjs/operators"),
  i = require("@univerjs-pro/license"),
  a = (function (_0x544dea) {
    return ((_0x544dea.ROW = "row"), (_0x544dea.COLUMN = "column"), _0x544dea);
  })({}),
  o = (function (_0x21ac2f) {
    return (
      (_0x21ac2f.INVALID_RANGE = "invalid-range"),
      (_0x21ac2f.OUT_OF_BOUNDS = "out-of-bounds"),
      (_0x21ac2f.CROSSING = "crossing"),
      (_0x21ac2f.MAX_DEPTH = "max-depth"),
      (_0x21ac2f.MOVE_SPLITS_OUTLINE = "move-splits-outline"),
      (_0x21ac2f.CLEAR_RANGE_NOT_CONTAIN_OUTLINE =
        "clear-range-not-contain-outline"),
      (_0x21ac2f.UNKNOWN = "unknown"),
      _0x21ac2f
    );
  })({});
var s = class extends Error {
  constructor(_0x55d1c7, _0x410ac4, _0x2cd828) {
    (super(_0x410ac4),
      (this.reason = _0x55d1c7),
      (this.outlineId = _0x2cd828),
      (this.name = "DimensionOutlineError"));
  }
};
function c(_0x18f30e) {
  return _0x18f30e instanceof s
    ? _0x18f30e.reason
    : _0x18f30e instanceof Error
      ? _0x18f30e.message["includes"]("split dimension outline")
        ? "move-splits-outline"
        : _0x18f30e.message["includes"]("depth")
          ? "max-depth"
          : _0x18f30e.message["includes"]("Crossing")
            ? "crossing"
            : _0x18f30e.message["includes"]("range")
              ? "invalid-range"
              : "unknown"
      : "unknown";
}
function l(_0x262c1c) {
  return _0x262c1c instanceof s ? _0x262c1c.outlineId : undefined;
}
const u = 2 ** 53 - 1;
function d(_0x34bf99, _0x8060f6) {
  return (
    _0x34bf99.unitId === _0x8060f6.unitId &&
    _0x34bf99.subUnitId === _0x8060f6.subUnitId &&
    _0x34bf99.axis === _0x8060f6.axis
  );
}
function f(_0x5ab0be, _0x741ecd = {}) {
  let _0x374707 = _0x741ecd.maxDepth ?? 8,
    _0xa1796e = new Map();
  for (let _0x767791 of _0x5ab0be) {
    let _0x664453 =
        _0x767791.unitId + ":" + _0x767791.subUnitId + ":" + _0x767791.axis,
      _0x3ef818 = _0xa1796e.get(_0x664453);
    _0x3ef818
      ? _0x3ef818.push(_0x767791)
      : _0xa1796e.set(_0x664453, [_0x767791]);
  }
  let _0xdcf924 = [];
  for (let _0x13592a of _0xa1796e.values()) {
    let _0x86345c = [..._0x13592a].sort(S),
      _0xf93c32 = [];
    for (let _0x58faf6 of _0x86345c) {
      for (
        se(_0x58faf6);
        _0xf93c32.length > 0 &&
        _0x58faf6.start > _0xf93c32[_0xf93c32.length - 1].end;
      )
        _0xf93c32.pop();
      let _0x414947 = _0xf93c32[_0xf93c32.length - 1];
      if (_0x414947 && _0x58faf6.end > _0x414947.end)
        throw new s(
          "crossing",
          "Crossing dimension outlines are not allowed",
          _0x58faf6.id,
        );
      let _0x118e8a = _0x414947 ? _0x414947.depth + 1 : 1;
      if (_0x118e8a > _0x374707)
        throw new s(
          "max-depth",
          "Dimension\x20outline\x20depth\x20cannot\x20exceed\x20" + _0x374707,
          _0x58faf6.id,
        );
      let _0x3ff1d8 = {
        ..._0x58faf6,
        depth: _0x118e8a,
        parentId: _0x414947 == null ? undefined : _0x414947.id,
        anchor: _0x58faf6.end,
        children: [],
      };
      (_0x414947
        ? _0x414947.children["push"](_0x3ff1d8)
        : _0xdcf924.push(_0x3ff1d8),
        _0xf93c32.push(_0x3ff1d8));
    }
  }
  return _0xdcf924;
}
function p(_0x2e1085, _0x5397b2, _0x28d77b = {}) {
  if (_0x5397b2.start < 0 || _0x5397b2.start > _0x5397b2.end)
    return { valid: false, reason: "invalid-range" };
  if (_0x28d77b.maxIndex != null && _0x5397b2.end >= _0x28d77b.maxIndex)
    return { valid: false, reason: "out-of-bounds" };
  let _0x290c83 = _0x2e1085.filter((_0x37ee76) => d(_0x37ee76, _0x5397b2));
  for (let _0x1bd7f3 of _0x290c83)
    if (C(_0x1bd7f3, _0x5397b2)) return { valid: false, reason: "crossing" };
  try {
    f([..._0x2e1085, _0x5397b2], _0x28d77b);
  } catch (_0x1c719c) {
    let _0x18da88 = c(_0x1c719c);
    return _0x18da88 === "max-depth"
      ? { valid: false, reason: "max-depth" }
      : _0x18da88 === "invalid-range"
        ? { valid: false, reason: "invalid-range" }
        : { valid: false, reason: "crossing" };
  }
  return { valid: true };
}
function m(_0x54adbc, _0x327c69, _0x42b6f9 = {}) {
  let _0x15fa0e = p(_0x54adbc, _0x327c69, _0x42b6f9);
  if (!_0x15fa0e.valid)
    throw Error(_0x15fa0e.reason ?? "invalid-dimension-outline");
  return [..._0x54adbc, _0x327c69];
}
function ee(_0x5adc47, _0x4b3321) {
  let _0x291a99 = _0x4b3321.start,
    _0x3030c9 = _0x4b3321.end,
    _0x28876e = [],
    _0x513736 = true;
  for (; _0x513736;) {
    _0x513736 = false;
    for (let _0x19335e of _0x5adc47)
      _0x28876e.includes(_0x19335e) ||
        !d(_0x19335e, _0x4b3321) ||
        !ae(_0x19335e.start, _0x19335e.end, _0x291a99, _0x3030c9) ||
        (_0x28876e.push(_0x19335e),
        (_0x291a99 = Math.min(_0x291a99, _0x19335e.start)),
        (_0x3030c9 = Math.max(_0x3030c9, _0x19335e.end)),
        (_0x513736 = true));
  }
  if (_0x28876e.length === 0) return null;
  let [_0x2d35f5] = [..._0x28876e].sort(S);
  return {
    mergedOutline: { ..._0x2d35f5, start: _0x291a99, end: _0x3030c9 },
    mergedOutlines: _0x28876e,
  };
}
function h(_0x1a6381, _0x3d35f5) {
  return _0x1a6381.filter(
    (_0x267bd4) =>
      !d(_0x267bd4, _0x3d35f5) ||
      !(_0x267bd4.start >= _0x3d35f5.start && _0x267bd4.end <= _0x3d35f5.end),
  );
}
function g(_0xfeaf7e, _0x1a0d43, _0x2768ae, _0x3646f5) {
  return _(
    _0xfeaf7e
      .filter(
        (_0x502689) =>
          _0x502689.unitId === _0x1a0d43 &&
          _0x502689.subUnitId === _0x2768ae &&
          _0x502689.axis === _0x3646f5 &&
          _0x502689.collapsed,
      )
      .map((_0x2f817b) => ({ start: _0x2f817b.start, end: _0x2f817b.end })),
  );
}
function _(_0x3eff09) {
  if (_0x3eff09.length === 0) return [];
  let _0x256f4e = [..._0x3eff09].sort(
      (_0x7ebc6d, _0x30a48f) =>
        _0x7ebc6d.start - _0x30a48f.start || _0x7ebc6d.end - _0x30a48f.end,
    ),
    _0x1464bb = [];
  for (let _0x501192 of _0x256f4e) {
    let _0x4ff790 = _0x1464bb[_0x1464bb.length - 1];
    !_0x4ff790 || _0x501192.start > _0x4ff790.end + 1
      ? _0x1464bb.push({ ..._0x501192 })
      : (_0x4ff790.end = Math.max(_0x4ff790.end, _0x501192.end));
  }
  return _0x1464bb;
}
function v(_0x2690a1, _0x36f7ba) {
  return _0x36f7ba.count <= 0
    ? _0x2690a1
    : x(
        _0x2690a1.map((_0x2450cd) =>
          d(_0x2450cd, _0x36f7ba)
            ? _0x36f7ba.index <= _0x2450cd.start
              ? {
                  ..._0x2450cd,
                  start: _0x2450cd.start + _0x36f7ba.count,
                  end: _0x2450cd.end + _0x36f7ba.count,
                }
              : _0x2450cd.start < _0x36f7ba.index &&
                  _0x36f7ba.index <= _0x2450cd.end
                ? { ..._0x2450cd, end: _0x2450cd.end + _0x36f7ba.count }
                : _0x2450cd
            : _0x2450cd,
        ),
      );
}
function y(_0x5bf95e, _0x2857a3) {
  if (_0x2857a3.start > _0x2857a3.end) return _0x5bf95e;
  let _0x527552 = _0x2857a3.end - _0x2857a3.start + 1,
    _0x3a633b = [];
  for (let _0x215dce of _0x5bf95e) {
    if (!d(_0x215dce, _0x2857a3)) {
      _0x3a633b.push(_0x215dce);
      continue;
    }
    if (_0x215dce.end < _0x2857a3.start) {
      _0x3a633b.push(_0x215dce);
      continue;
    }
    if (_0x215dce.start > _0x2857a3.end) {
      _0x3a633b.push({
        ..._0x215dce,
        start: _0x215dce.start - _0x527552,
        end: _0x215dce.end - _0x527552,
      });
      continue;
    }
    let _0x3e7086 = Math.max(_0x215dce.start, _0x2857a3.start),
      _0x49cd5d = Math.min(_0x215dce.end, _0x2857a3.end),
      _0x51f12f = Math.max(0, _0x49cd5d - _0x3e7086 + 1),
      _0x31b7a2 = _0x215dce.end - _0x215dce.start + 1 - _0x51f12f;
    if (_0x31b7a2 <= 0) continue;
    let _0x15fc6c =
      _0x215dce.start < _0x2857a3.start ? _0x215dce.start : _0x2857a3.start;
    _0x3a633b.push({
      ..._0x215dce,
      start: _0x15fc6c,
      end: _0x15fc6c + _0x31b7a2 - 1,
    });
  }
  return x(_0x3a633b);
}
function b(_0xe0c97a, _0x289c10) {
  if (_0x289c10.sourceStart > _0x289c10.sourceEnd) return _0xe0c97a;
  let _0x3bc07b = [];
  for (let _0x3df1ad of _0xe0c97a) {
    if (!d(_0x3df1ad, _0x289c10)) {
      _0x3bc07b.push(_0x3df1ad);
      continue;
    }
    let _0x2f01f5 = te(_0x3df1ad, _0x289c10);
    if (_0x2f01f5.type === "split")
      throw new s(
        "move-splits-outline",
        "Move would split dimension outline: " + _0x3df1ad.id,
        _0x3df1ad.id,
      );
    _0x3bc07b.push(_0x2f01f5.outline);
  }
  return x(_0x3bc07b);
}
function te(_0x37249c, _0x30cfdf) {
  let _0x4f480a = ne(
      _0x30cfdf.sourceStart,
      _0x30cfdf.sourceEnd + 1,
      _0x30cfdf.destinationIndex,
    ),
    _0x3ede38 = [],
    _0xf28220 = { start: _0x37249c.start, end: _0x37249c.end + 1 };
  for (let _0x52e61b of _0x4f480a) {
    let _0x1b4edd = re(_0xf28220, _0x52e61b.range);
    _0x1b4edd &&
      _0x3ede38.push({
        start: _0x1b4edd.start + _0x52e61b.offset,
        end: _0x1b4edd.end + _0x52e61b.offset,
      });
  }
  let _0x465e3e = ie(_0x3ede38);
  return _0x465e3e.length === 1
    ? {
        type: "ok",
        outline: {
          ..._0x37249c,
          start: _0x465e3e[0].start,
          end: _0x465e3e[0].end - 1,
        },
      }
    : { type: "split", outline: _0x37249c, ranges: _0x465e3e };
}
function ne(_0x2c630a, _0x573f47, _0x79c461) {
  let _0x425ba7 = _0x573f47 - _0x2c630a;
  if (_0x425ba7 <= 0)
    throw Error("Invalid dimension outline move source range");
  return _0x79c461 >= _0x2c630a && _0x79c461 <= _0x573f47
    ? [{ range: { start: 0, end: u }, offset: 0 }]
    : _0x79c461 < _0x2c630a
      ? [
          { range: { start: 0, end: _0x79c461 }, offset: 0 },
          { range: { start: _0x79c461, end: _0x2c630a }, offset: _0x425ba7 },
          {
            range: { start: _0x2c630a, end: _0x573f47 },
            offset: _0x79c461 - _0x2c630a,
          },
          { range: { start: _0x573f47, end: u }, offset: 0 },
        ]
      : [
          { range: { start: 0, end: _0x2c630a }, offset: 0 },
          {
            range: { start: _0x2c630a, end: _0x573f47 },
            offset: _0x79c461 - _0x573f47,
          },
          { range: { start: _0x573f47, end: _0x79c461 }, offset: -_0x425ba7 },
          { range: { start: _0x79c461, end: u }, offset: 0 },
        ];
}
function re(_0x11a4f6, _0x2016e3) {
  let _0x1ea400 = Math.max(_0x11a4f6.start, _0x2016e3.start),
    _0x30c09b = Math.min(_0x11a4f6.end, _0x2016e3.end);
  return _0x1ea400 >= _0x30c09b ? null : { start: _0x1ea400, end: _0x30c09b };
}
function ie(_0x42567f) {
  if (_0x42567f.length === 0) return [];
  let _0x1ba520 = [..._0x42567f].sort(
      (_0xb42cae, _0x5c96fc) =>
        _0xb42cae.start - _0x5c96fc.start || _0xb42cae.end - _0x5c96fc.end,
    ),
    _0x124e68 = [];
  for (let _0x18ef99 of _0x1ba520) {
    let _0x3c55c1 = _0x124e68[_0x124e68.length - 1];
    !_0x3c55c1 || _0x18ef99.start > _0x3c55c1.end
      ? _0x124e68.push({ ..._0x18ef99 })
      : (_0x3c55c1.end = Math.max(_0x3c55c1.end, _0x18ef99.end));
  }
  return _0x124e68;
}
function ae(_0x5dadef, _0x4c4f07, _0x4527df, _0x2580b3) {
  return _0x4c4f07 + 1 === _0x4527df || _0x2580b3 + 1 === _0x5dadef;
}
function x(_0x2e06da) {
  let _0x5353ca = oe(_0x2e06da);
  return (f(_0x5353ca), _0x5353ca);
}
function oe(_0x23c1ec) {
  let _0x30504b = new Map();
  for (let _0x133d44 of _0x23c1ec) {
    let _0x1d1cd4 = [
        _0x133d44.unitId,
        _0x133d44.subUnitId,
        _0x133d44.axis,
        _0x133d44.start,
        _0x133d44.end,
      ].join(":"),
      _0x892196 = _0x30504b.get(_0x1d1cd4);
    if (!_0x892196) {
      _0x30504b.set(_0x1d1cd4, _0x133d44);
      continue;
    }
    _0x30504b.set(_0x1d1cd4, {
      ..._0x892196,
      collapsed: _0x892196.collapsed || _0x133d44.collapsed,
    });
  }
  return Array.from(_0x30504b.values());
}
function S(_0x3a7048, _0x1a2084) {
  return _0x3a7048.unitId === _0x1a2084.unitId
    ? _0x3a7048.subUnitId === _0x1a2084.subUnitId
      ? _0x3a7048.axis === _0x1a2084.axis
        ? _0x3a7048.start === _0x1a2084.start
          ? _0x1a2084.end - _0x3a7048.end
          : _0x3a7048.start - _0x1a2084.start
        : _0x3a7048.axis["localeCompare"](_0x1a2084.axis)
      : _0x3a7048.subUnitId["localeCompare"](_0x1a2084.subUnitId)
    : _0x3a7048.unitId["localeCompare"](_0x1a2084.unitId);
}
function se(_0x175eab) {
  if (_0x175eab.start > _0x175eab.end)
    throw new s("invalid-range", "Invalid outline range", _0x175eab.id);
}
function C(_0x45ed0d, _0x42e9d0) {
  let _0x2176fc =
      _0x45ed0d.start <= _0x42e9d0.end && _0x42e9d0.start <= _0x45ed0d.end,
    _0x1af100 =
      _0x45ed0d.start <= _0x42e9d0.start && _0x42e9d0.end <= _0x45ed0d.end,
    _0x3cfe5b =
      _0x42e9d0.start <= _0x45ed0d.start && _0x45ed0d.end <= _0x42e9d0.end;
  return _0x2176fc && !_0x1af100 && !_0x3cfe5b;
}
function w(_0x197b3e) {
  "@babel/helpers - typeof";
  return (
    (w =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5240cf) {
            return typeof _0x5240cf;
          }
        : function (_0x21db19) {
            return _0x21db19 &&
              typeof Symbol == "function" &&
              _0x21db19.constructor === Symbol &&
              _0x21db19 !== Symbol.prototype
              ? "symbol"
              : typeof _0x21db19;
          }),
    w(_0x197b3e)
  );
}
function ce(_0x19b2cb, _0x3decd6) {
  if (w(_0x19b2cb) != "object" || !_0x19b2cb) return _0x19b2cb;
  var _0x353d4b = _0x19b2cb[Symbol.toPrimitive];
  if (_0x353d4b !== undefined) {
    var _0x2aeef0 = _0x353d4b.call(_0x19b2cb, _0x3decd6 || "default");
    if (w(_0x2aeef0) != "object") return _0x2aeef0;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3decd6 === "string" ? String : Number)(_0x19b2cb);
}
function le(_0x35512b) {
  var _0x5a4483 = ce(_0x35512b, "string");
  return w(_0x5a4483) == "symbol" ? _0x5a4483 : _0x5a4483 + "";
}
function T(_0x2dbeb9, _0x415912, _0x1e9156) {
  return (
    (_0x415912 = le(_0x415912)) in _0x2dbeb9
      ? Object.defineProperty(_0x2dbeb9, _0x415912, {
          value: _0x1e9156,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2dbeb9[_0x415912] = _0x1e9156),
    _0x2dbeb9
  );
}
var E = class extends e.Disposable {
    constructor(..._0x336e4a) {
      (super(..._0x336e4a),
        T(this, "_outlines", new Map()),
        T(this, "_change$", new n["Subject"]()),
        T(this, "change$", this._change$["asObservable"]()));
    }
    getOutlines(_0x28ed61, _0x117465) {
      var _0x8c41cc;
      return [
        ...(((_0x8c41cc = this._outlines["get"](_0x28ed61)) == null
          ? undefined
          : _0x8c41cc.get(_0x117465)) ?? []),
      ];
    }
    getUnitOutlines(_0x3c0315) {
      let _0x28a27b = this._outlines["get"](_0x3c0315),
        _0x12da1a = new Map();
      return (
        _0x28a27b == null ||
          _0x28a27b.forEach((_0x18ca91, _0x46621f) => {
            _0x12da1a.set(_0x46621f, [..._0x18ca91]);
          }),
        _0x12da1a
      );
    }
    setOutlines(_0x1eeb1f, _0x580641, _0x12e4fa) {
      (this._ensureUnitOutlines(_0x1eeb1f).set(_0x580641, [..._0x12e4fa]),
        this._change$["next"]({ unitId: _0x1eeb1f, subUnitId: _0x580641 }));
    }
    removeUnit(_0x555f79) {
      (this._outlines["delete"](_0x555f79),
        this._change$["next"]({ unitId: _0x555f79 }));
    }
    serialize(_0xf69972) {
      let _0x161fc1 = this._outlines["get"](_0xf69972),
        _0x46ac1d = {};
      return (
        _0x161fc1 == null ||
          _0x161fc1.forEach((_0x416b1f, _0x3c61cc) => {
            _0x46ac1d[_0x3c61cc] = { outlineList: [..._0x416b1f] };
          }),
        _0x46ac1d
      );
    }
    deserialize(_0x5db826, _0x3228a9) {
      let _0xb764ea = new Map();
      (Object.entries(_0x3228a9).forEach(([_0x158cb2, _0x3c4cb0]) => {
        _0xb764ea.set(_0x158cb2, [...(_0x3c4cb0.outlineList ?? [])]);
      }),
        this._outlines["set"](_0x5db826, _0xb764ea),
        this._change$["next"]({ unitId: _0x5db826 }));
    }
    dispose() {
      (super.dispose(), this._outlines["clear"](), this._change$["complete"]());
    }
    _ensureUnitOutlines(_0x50d151) {
      let _0x568f75 = this._outlines["get"](_0x50d151);
      return (
        _0x568f75 ||
          ((_0x568f75 = new Map()),
          this._outlines["set"](_0x50d151, _0x568f75)),
        _0x568f75
      );
    }
  },
  D = class extends e.Disposable {
    constructor(..._0x35609e) {
      (super(..._0x35609e),
        T(this, "_error$", new n["Subject"]()),
        T(this, "error$", this._error$["asObservable"]()));
    }
    emit(_0x31e98f) {
      this._error$["next"](_0x31e98f);
    }
    dispose() {
      (super.dispose(), this._error$["complete"]());
    }
  };
const O = {
    id: "sheet.mutation.add-dimension-outline",
    type: e.CommandType["MUTATION"],
    handler: (_0xbaea08, _0x923826) => {
      let _0x19d6a4 = _0xbaea08.get(E),
        _0x21cc4e = _0x19d6a4.getOutlines(
          _0x923826.unitId,
          _0x923826.subUnitId,
        );
      return (
        _0x19d6a4.setOutlines(
          _0x923826.unitId,
          _0x923826.subUnitId,
          m(_0x21cc4e, _0x923826.outline),
        ),
        true
      );
    },
  },
  k = {
    id: "sheet.mutation.remove-dimension-outline",
    type: e.CommandType["MUTATION"],
    handler: (_0x4bd3cc, _0x54fb73) => {
      let _0x525368 = _0x4bd3cc.get(E),
        _0x5ef900 = _0x525368.getOutlines(
          _0x54fb73.unitId,
          _0x54fb73.subUnitId,
        );
      return (
        _0x525368.setOutlines(
          _0x54fb73.unitId,
          _0x54fb73.subUnitId,
          _0x5ef900.filter((_0x24607d) => _0x24607d.id !== _0x54fb73.outlineId),
        ),
        true
      );
    },
  };
function A(_0x4a3d36, _0x52ec97, _0x1c71b1) {
  let _0x10c0e5 = de(_0x4a3d36);
  return (
    !_0x10c0e5 ||
    _0x10c0e5.permissionCheckWithoutRange(
      {
        workbookTypes: [t.WorkbookViewPermission],
        worksheetTypes: [t.WorksheetViewPermission],
      },
      _0x52ec97,
      _0x1c71b1,
    )
  );
}
function ue(_0x310bc2, _0x454640, _0x1898f5) {
  let _0x513a38 = fe(_0x310bc2);
  return (
    (_0x513a38 == null ? undefined : _0x513a38.permissionPointUpdate$) ??
    (0, n.of)(null)
  ).pipe(
    (0, r.debounceTime)(100),
    (0, r.startWith)(null),
    (0, r.map)(() => A(_0x310bc2, _0x454640, _0x1898f5)),
  );
}
function de(_0x2d6661) {
  if (
    typeof _0x2d6661.has == "function" &&
    !_0x2d6661.has(t.SheetPermissionCheckController)
  )
    return null;
  try {
    return _0x2d6661.get(t.SheetPermissionCheckController);
  } catch {
    return null;
  }
}
function fe(_0x4680ec) {
  if (
    typeof _0x4680ec.has == "function" &&
    !_0x4680ec.has(e.IPermissionService)
  )
    return null;
  try {
    return _0x4680ec.get(e.IPermissionService);
  } catch {
    return null;
  }
}
const j = {
    id: "sheet.command.add-dimension-outline",
    type: e.CommandType["COMMAND"],
    handler: (_0x1a4481, _0x2155cb) => {
      if (!_0x2155cb) return false;
      let _0x4864a9 = (0, t.getSheetCommandTarget)(
        _0x1a4481.get(e.IUniverInstanceService),
        _0x2155cb,
      );
      if (!_0x4864a9) return false;
      let {
        unitId: _0x20d691,
        subUnitId: _0x52e6f0,
        worksheet: _0x4d0511,
      } = _0x4864a9;
      if (!A(_0x1a4481, _0x20d691, _0x52e6f0)) return false;
      let _0x1e0e7a = _0x1a4481.get(E),
        _0x1b7231 = {
          id: "dimension-outline-" + (0, e.generateRandomId)(6),
          unitId: _0x20d691,
          subUnitId: _0x52e6f0,
          axis: _0x2155cb.axis,
          start: _0x2155cb.start,
          end: _0x2155cb.end,
          collapsed: false,
        },
        _0xa164fc =
          _0x2155cb.axis === "row"
            ? _0x4d0511.getRowCount()
            : _0x4d0511.getColumnCount(),
        _0x3c3e40 = _0x1e0e7a.getOutlines(_0x20d691, _0x52e6f0),
        _0x499789 = ee(_0x3c3e40, _0x1b7231),
        _0x56cad8 =
          (_0x499789 == null ? undefined : _0x499789.mergedOutlines) ?? [],
        _0x4dabc9 =
          (_0x499789 == null ? undefined : _0x499789.mergedOutline) ??
          _0x1b7231,
        _0x427ef6 = p(
          _0x499789
            ? _0x3c3e40.filter(
                (_0x1aa055) =>
                  !_0x56cad8.some((_0x577ea6) => _0x577ea6.id === _0x1aa055.id),
              )
            : _0x3c3e40,
          _0x4dabc9,
          { maxIndex: _0xa164fc },
        );
      if (!_0x427ef6.valid)
        return (
          _0x1a4481
            .get(D)
            .emit({
              reason: _0x427ef6.reason ?? "unknown",
              commandId: j.id,
              unitId: _0x20d691,
              subUnitId: _0x52e6f0,
              axis: _0x2155cb.axis,
              outlineId: _0x4dabc9.id,
            }),
          false
        );
      let _0x594dfd = [
          ..._0x56cad8.map((_0x579d1c) => ({
            id: k.id,
            params: {
              unitId: _0x20d691,
              subUnitId: _0x52e6f0,
              outlineId: _0x579d1c.id,
            },
          })),
          {
            id: O.id,
            params: {
              unitId: _0x20d691,
              subUnitId: _0x52e6f0,
              outline: _0x4dabc9,
            },
          },
        ],
        _0x31be44 = [
          {
            id: k.id,
            params: {
              unitId: _0x20d691,
              subUnitId: _0x52e6f0,
              outlineId: _0x4dabc9.id,
            },
          },
          ..._0x56cad8.map((_0x37e347) => ({
            id: O.id,
            params: {
              unitId: _0x20d691,
              subUnitId: _0x52e6f0,
              outline: _0x37e347,
            },
          })),
        ];
      return (0, e.sequenceExecute)(_0x594dfd, _0x1a4481.get(e.ICommandService))
        .result
        ? (_0x1a4481
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x20d691,
              undoMutations: _0x31be44,
              redoMutations: _0x594dfd,
            }),
          true)
        : false;
    },
  },
  M = {
    id: "sheet.mutation.clear-dimension-outlines",
    type: e.CommandType["MUTATION"],
    handler: (_0x54d557, _0x29af47) => {
      let _0x2c5ee3 = _0x54d557.get(E),
        _0x21c23a = _0x2c5ee3.getOutlines(
          _0x29af47.unitId,
          _0x29af47.subUnitId,
        );
      return (
        _0x2c5ee3.setOutlines(
          _0x29af47.unitId,
          _0x29af47.subUnitId,
          h(_0x21c23a, _0x29af47),
        ),
        true
      );
    },
  },
  N = {
    id: "sheet.command.clear-dimension-outlines",
    type: e.CommandType["COMMAND"],
    handler: (_0x5464fc, _0xa76a79) => {
      if (!_0xa76a79) return false;
      let _0xe3e10 = (0, t.getSheetCommandTarget)(
        _0x5464fc.get(e.IUniverInstanceService),
        _0xa76a79,
      );
      if (!_0xe3e10) return false;
      let { unitId: _0x476fba, subUnitId: _0x222f3d } = _0xe3e10;
      if (!A(_0x5464fc, _0x476fba, _0x222f3d)) return false;
      let _0x35d0b8 = {
          unitId: _0x476fba,
          subUnitId: _0x222f3d,
          axis: _0xa76a79.axis,
          start: _0xa76a79.start,
          end: _0xa76a79.end,
        },
        _0x43644f = _0x5464fc
          .get(E)
          .getOutlines(_0x476fba, _0x222f3d)
          .filter(
            (_0x2bea18) =>
              d(_0x2bea18, _0x35d0b8) &&
              _0x2bea18.start >= _0xa76a79.start &&
              _0x2bea18.end <= _0xa76a79.end,
          );
      if (_0x43644f.length === 0)
        return (
          _0x5464fc
            .get(D)
            .emit({
              reason: "clear-range-not-contain-outline",
              commandId: N.id,
              unitId: _0x476fba,
              subUnitId: _0x222f3d,
              axis: _0xa76a79.axis,
            }),
          false
        );
      let _0x5a041d = [
          {
            id: M.id,
            params: {
              ..._0x35d0b8,
              removedOutlineIds: _0x43644f.map((_0x15c0b5) => _0x15c0b5.id),
            },
          },
        ],
        _0x55096f = _0x43644f.map((_0x29431b) => ({
          id: O.id,
          params: {
            unitId: _0x476fba,
            subUnitId: _0x222f3d,
            outline: _0x29431b,
          },
        }));
      return (0, e.sequenceExecute)(_0x5a041d, _0x5464fc.get(e.ICommandService))
        .result
        ? (_0x5464fc
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x476fba,
              undoMutations: _0x55096f,
              redoMutations: _0x5a041d,
            }),
          true)
        : false;
    },
  },
  P = {
    id: "sheet.command.remove-dimension-outline",
    type: e.CommandType["COMMAND"],
    handler: (_0x4be9f1, _0x3a1414) => {
      if (!_0x3a1414) return false;
      let _0x5bf9ed = (0, t.getSheetCommandTarget)(
        _0x4be9f1.get(e.IUniverInstanceService),
        _0x3a1414,
      );
      if (!_0x5bf9ed) return false;
      let { unitId: _0x3d6bd3, subUnitId: _0x4b5112 } = _0x5bf9ed;
      if (!A(_0x4be9f1, _0x3d6bd3, _0x4b5112)) return false;
      let _0x3d6d7c = _0x4be9f1
        .get(E)
        .getOutlines(_0x3d6bd3, _0x4b5112)
        .find((_0x3714b7) => _0x3714b7.id === _0x3a1414.outlineId);
      if (!_0x3d6d7c) return false;
      let _0x880c0e = [
          {
            id: k.id,
            params: {
              unitId: _0x3d6bd3,
              subUnitId: _0x4b5112,
              outlineId: _0x3d6d7c.id,
              outline: _0x3d6d7c,
            },
          },
        ],
        _0x4593e3 = [
          {
            id: O.id,
            params: {
              unitId: _0x3d6bd3,
              subUnitId: _0x4b5112,
              outline: _0x3d6d7c,
            },
          },
        ];
      return (0, e.sequenceExecute)(_0x880c0e, _0x4be9f1.get(e.ICommandService))
        .result
        ? (_0x4be9f1
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x3d6bd3,
              undoMutations: _0x4593e3,
              redoMutations: _0x880c0e,
            }),
          true)
        : false;
    },
  },
  F = {
    id: "sheet.mutation.set-dimension-outline-collapsed",
    type: e.CommandType["MUTATION"],
    handler: (_0xaa13ca, _0x1073e9) => {
      let _0x4a048f = _0xaa13ca.get(E),
        _0x5a8d5a = _0x4a048f.getOutlines(
          _0x1073e9.unitId,
          _0x1073e9.subUnitId,
        ),
        _0xf67794 = _0x5a8d5a.find(
          (_0x22b476) => _0x22b476.id === _0x1073e9.outlineId,
        );
      return (
        _0xf67794 &&
          _0x4a048f.setOutlines(
            _0x1073e9.unitId,
            _0x1073e9.subUnitId,
            _0x5a8d5a.map((_0x16a4b3) =>
              _0x16a4b3.unitId !== _0xf67794.unitId ||
              _0x16a4b3.subUnitId !== _0xf67794.subUnitId ||
              _0x16a4b3.axis !== _0xf67794.axis ||
              _0x16a4b3.start !== _0xf67794.start ||
              _0x16a4b3.end !== _0xf67794.end
                ? _0x16a4b3
                : { ..._0x16a4b3, collapsed: _0x1073e9.collapsed },
            ),
          ),
        true
      );
    },
  };
function I(_0x19214b, _0x1d6c42, _0x29633f, _0x1a9f4a) {
  return _0x19214b === "row"
    ? {
        startRow: _0x1d6c42,
        endRow: _0x29633f,
        startColumn: 0,
        endColumn: _0x1a9f4a.getMaxColumns() - 1,
      }
    : {
        startRow: 0,
        endRow: _0x1a9f4a.getRowCount() - 1,
        startColumn: _0x1d6c42,
        endColumn: _0x29633f,
      };
}
function pe(_0x1493b3) {
  return _0x1493b3 === "row"
    ? t.SetRowHiddenMutation["id"]
    : t.SetColHiddenMutation["id"];
}
function me(_0x4c3e67) {
  return _0x4c3e67 === "row"
    ? t.SetRowVisibleMutation["id"]
    : t.SetColVisibleMutation["id"];
}
function L(_0x2bb970, _0xa80854, _0x31c0af, _0x28c295) {
  let _0x300d2e = _0xa80854
      ? [I(_0x2bb970.axis, _0x2bb970.start, _0x2bb970.end, _0x31c0af)]
      : he(_0x2bb970, _0x28c295, _0x31c0af),
    _0x34369c = _0xa80854 ? pe(_0x2bb970.axis) : me(_0x2bb970.axis);
  return [
    {
      id: F.id,
      params: {
        unitId: _0x2bb970.unitId,
        subUnitId: _0x2bb970.subUnitId,
        outlineId: _0x2bb970.id,
        outline: _0x2bb970,
        collapsed: _0xa80854,
      },
    },
    ..._0x300d2e.map((_0x35b8b5) => ({
      id: _0x34369c,
      params: {
        unitId: _0x2bb970.unitId,
        subUnitId: _0x2bb970.subUnitId,
        ranges: [_0x35b8b5],
        dimensionOutlineId: _0x2bb970.id,
      },
    })),
  ];
}
function he(_0x564267, _0x48c458, _0x597d59) {
  let _0x1b2c3f = g(
    _0x48c458.map((_0x31c99f) =>
      R(_0x31c99f, _0x564267) ? { ..._0x31c99f, collapsed: false } : _0x31c99f,
    ),
    _0x564267.unitId,
    _0x564267.subUnitId,
    _0x564267.axis,
  );
  return ge({ start: _0x564267.start, end: _0x564267.end }, _0x1b2c3f).map(
    (_0x115a14) => I(_0x564267.axis, _0x115a14.start, _0x115a14.end, _0x597d59),
  );
}
function R(_0x1a1663, _0x2385ad) {
  return (
    _0x1a1663.unitId === _0x2385ad.unitId &&
    _0x1a1663.subUnitId === _0x2385ad.subUnitId &&
    _0x1a1663.axis === _0x2385ad.axis &&
    _0x1a1663.start === _0x2385ad.start &&
    _0x1a1663.end === _0x2385ad.end
  );
}
function ge(_0x3cff43, _0x56c66c) {
  let _0x509e16 = _0x3cff43.start,
    _0x37ffe1 = [];
  for (let _0x40686e of _0x56c66c)
    if (
      !(_0x40686e.end < _0x509e16 || _0x40686e.start > _0x3cff43.end) &&
      (_0x40686e.start > _0x509e16 &&
        _0x37ffe1.push({
          start: _0x509e16,
          end: Math.min(_0x40686e.start - 1, _0x3cff43.end),
        }),
      (_0x509e16 = Math.max(_0x509e16, _0x40686e.end + 1)),
      _0x509e16 > _0x3cff43.end)
    )
      break;
  return (
    _0x509e16 <= _0x3cff43.end &&
      _0x37ffe1.push({ start: _0x509e16, end: _0x3cff43.end }),
    _0x37ffe1
  );
}
const z = {
    id: "sheet.command.set-dimension-outline-collapsed",
    type: e.CommandType["COMMAND"],
    handler: (_0x8b5c1b, _0x29d0b1) => {
      if (!_0x29d0b1) return false;
      let _0x34e893 = (0, t.getSheetCommandTarget)(
        _0x8b5c1b.get(e.IUniverInstanceService),
        _0x29d0b1,
      );
      if (!_0x34e893) return false;
      let {
        unitId: _0x4c96d2,
        subUnitId: _0x1019f2,
        worksheet: _0x1caf00,
      } = _0x34e893;
      if (!A(_0x8b5c1b, _0x4c96d2, _0x1019f2)) return false;
      let _0x489fbd = _0x8b5c1b.get(E).getOutlines(_0x4c96d2, _0x1019f2),
        _0x34cd0d = _0x489fbd.find(
          (_0x4445ec) => _0x4445ec.id === _0x29d0b1.outlineId,
        );
      if (!_0x34cd0d || _0x34cd0d.collapsed === _0x29d0b1.collapsed)
        return false;
      let _0x29c7b1 = L(_0x34cd0d, _0x29d0b1.collapsed, _0x1caf00, _0x489fbd),
        _0x2230db = L(_0x34cd0d, !_0x29d0b1.collapsed, _0x1caf00, _0x489fbd);
      return (0, e.sequenceExecute)(_0x29c7b1, _0x8b5c1b.get(e.ICommandService))
        .result
        ? (_0x8b5c1b
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x4c96d2,
              undoMutations: _0x2230db,
              redoMutations: _0x29c7b1,
            }),
          true)
        : false;
    },
  },
  B = {
    id: "sheet.mutation.transform-dimension-outlines",
    type: e.CommandType["MUTATION"],
    handler: (_0x53cfc6, _0x4a68fb) => {
      let _0x5496d6 = _0x53cfc6.get(E),
        _0x4d622d = _e(
          _0x5496d6.getOutlines(_0x4a68fb.unitId, _0x4a68fb.subUnitId),
          _0x4a68fb,
        );
      return (
        _0x5496d6.setOutlines(_0x4a68fb.unitId, _0x4a68fb.subUnitId, _0x4d622d),
        true
      );
    },
  };
function _e(_0x3f423e, _0x49aea0) {
  switch (_0x49aea0.type) {
    case "insert":
      return _0x49aea0.restoreOutlines
        ? ve(_0x3f423e, _0x49aea0)
        : v(_0x3f423e, _0x49aea0);
    case "delete":
      return y(_0x3f423e, _0x49aea0);
    case "move":
      return b(_0x3f423e, _0x49aea0);
  }
}
function ve(_0x4892db, _0x47783a) {
  return [
    ..._0x4892db.filter(
      (_0x618d2) =>
        _0x618d2.unitId !== _0x47783a.unitId ||
        _0x618d2.subUnitId !== _0x47783a.subUnitId ||
        _0x618d2.axis !== _0x47783a.axis,
    ),
    ..._0x47783a.restoreOutlines,
  ];
}
const V = "SHEET_OUTLINE_PLUGIN";
var ye = "@univerjs-pro/sheets-outline",
  be = "1.0.0-insiders.20260907-70fc579";
const H = {};
function U(_0x3ee38c, _0x15b728) {
  return function (_0x13ab27, _0x314886) {
    _0x15b728(_0x13ab27, _0x314886, _0x3ee38c);
  };
}
function W(_0x3b82f6, _0xa889d4, _0x5f2ff6, _0xd8d82b) {
  var _0x3628f3 = arguments.length,
    _0x343b97 =
      _0x3628f3 < 3
        ? _0xa889d4
        : _0xd8d82b === null
          ? (_0xd8d82b = Object.getOwnPropertyDescriptor(_0xa889d4, _0x5f2ff6))
          : _0xd8d82b,
    _0x207b5c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x343b97 = Reflect.decorate(_0x3b82f6, _0xa889d4, _0x5f2ff6, _0xd8d82b);
  else {
    for (var _0x1ff9f8 = _0x3b82f6.length - 1; _0x1ff9f8 >= 0; _0x1ff9f8--)
      (_0x207b5c = _0x3b82f6[_0x1ff9f8]) &&
        (_0x343b97 =
          (_0x3628f3 < 3
            ? _0x207b5c(_0x343b97)
            : _0x3628f3 > 3
              ? _0x207b5c(_0xa889d4, _0x5f2ff6, _0x343b97)
              : _0x207b5c(_0xa889d4, _0x5f2ff6)) || _0x343b97);
  }
  return (
    _0x3628f3 > 3 &&
      _0x343b97 &&
      Object.defineProperty(_0xa889d4, _0x5f2ff6, _0x343b97),
    _0x343b97
  );
}
const G = { redos: [], undos: [], preRedos: [], preUndos: [] };
let K = class extends e.Disposable {
  constructor(_0x4942c2, _0x42321b, _0x26bbac, _0x38860f) {
    (super(),
      (this._univerInstanceService = _0x4942c2),
      (this._sheetInterceptorService = _0x42321b),
      (this._sheetsOutlineModel = _0x26bbac),
      (this._sheetsOutlineErrorService = _0x38860f),
      this._initCommandInterceptor());
  }
  _initCommandInterceptor() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x819591) =>
          xe(
            _0x819591,
            (_0x3b5945, _0x4ef34e) =>
              this._sheetsOutlineModel["getOutlines"](_0x3b5945, _0x4ef34e),
            this._getCommandScope(_0x819591.params),
            (_0x599721) => this._sheetsOutlineErrorService["emit"](_0x599721),
          ),
      }),
    );
  }
  _getCommandScope(_0x2e4dd8) {
    let _0x1feaa3 = _0x2e4dd8,
      _0x15a10a =
        _0x1feaa3 != null && _0x1feaa3.unitId
          ? this._univerInstanceService["getUnit"](
              _0x1feaa3.unitId,
              e.UniverInstanceType["UNIVER_SHEET"],
            )
          : this._univerInstanceService["getCurrentUnitOfType"](
              e.UniverInstanceType["UNIVER_SHEET"],
            );
    if (!_0x15a10a) return;
    let _0x506c04 =
      _0x1feaa3 != null && _0x1feaa3.subUnitId
        ? _0x15a10a.getSheetBySheetId(_0x1feaa3.subUnitId)
        : _0x15a10a.getActiveSheet();
    if (_0x506c04)
      return {
        unitId: _0x15a10a.getUnitId(),
        subUnitId: _0x506c04.getSheetId(),
      };
  }
};
K = W(
  [
    U(0, e.IUniverInstanceService),
    U(1, (0, e.Inject)(t.SheetInterceptorService)),
    U(2, (0, e.Inject)(E)),
    U(3, (0, e.Inject)(D)),
  ],
  K,
);
function xe(_0x185e1d, _0x184454, _0x4252d6, _0x7e317d) {
  let _0x492091 = Ce(_0x185e1d, _0x4252d6);
  if (!_0x492091) return Z();
  let _0x51fb61 = _0x184454(_0x492091.unitId, _0x492091.subUnitId);
  if (!_0x51fb61.some((_0x3bc9f7) => _0x3bc9f7.axis === _0x492091.axis))
    return Z();
  Se(_0x51fb61, _0x492091, _0x185e1d.id, _0x7e317d);
  let _0x1567b3 = we(_0x492091, _0x51fb61);
  return {
    redos: [{ id: B.id, params: _0x492091 }],
    undos: [{ id: B.id, params: _0x1567b3 }],
    preRedos: [],
    preUndos: [],
  };
}
function Se(_0x506654, _0x17a678, _0x47b8b2, _0x485d51) {
  try {
    switch (_0x17a678.type) {
      case "insert":
        v(_0x506654, _0x17a678);
        break;
      case "delete":
        y(_0x506654, _0x17a678);
        break;
      case "move":
        b(_0x506654, _0x17a678);
        break;
    }
  } catch (_0x263eae) {
    throw (
      _0x485d51 == null ||
        _0x485d51({
          reason: c(_0x263eae),
          commandId: _0x47b8b2,
          unitId: _0x17a678.unitId,
          subUnitId: _0x17a678.subUnitId,
          axis: _0x17a678.axis,
          outlineId: l(_0x263eae),
        }),
      new e["CustomCommandExecutionError"](
        _0x263eae instanceof Error
          ? _0x263eae.message
          : "Invalid\x20dimension\x20outline\x20mutation",
      )
    );
  }
}
function Ce(_0x427599, _0x23658b) {
  switch (_0x427599.id) {
    case t.InsertRowCommand["id"]:
      return q(_0x427599.params, "row", _0x23658b);
    case t.InsertColCommand["id"]:
      return q(_0x427599.params, "column", _0x23658b);
    case t.RemoveRowCommand["id"]:
      return J(_0x427599.params, "row", _0x23658b);
    case t.RemoveColCommand["id"]:
      return J(_0x427599.params, "column", _0x23658b);
    case t.MoveRowsCommand["id"]:
      return Y(_0x427599.params, "row", _0x23658b);
    case t.MoveColsCommand["id"]:
      return Y(_0x427599.params, "column", _0x23658b);
    default:
      return null;
  }
}
function q(_0x2fe423, _0x1b7f2f, _0x5a6af4) {
  let _0x3d8a3b = X(_0x2fe423, _0x5a6af4);
  if (!(_0x2fe423 != null && _0x2fe423.range) || !_0x3d8a3b) return null;
  let _0x92e83b =
      _0x1b7f2f === "row"
        ? _0x2fe423.range["startRow"]
        : _0x2fe423.range["startColumn"],
    _0xedfafe =
      _0x1b7f2f === "row"
        ? _0x2fe423.range["endRow"]
        : _0x2fe423.range["endColumn"];
  return {
    ..._0x3d8a3b,
    axis: _0x1b7f2f,
    type: "insert",
    index: _0x92e83b,
    count: _0xedfafe - _0x92e83b + 1,
  };
}
function J(_0x4eccf9, _0x111a13, _0x797c3b) {
  let _0x1779e4 = X(_0x4eccf9, _0x797c3b);
  if (!(_0x4eccf9 != null && _0x4eccf9.range) || !_0x1779e4) return null;
  let _0x5252c4 =
      _0x111a13 === "row"
        ? _0x4eccf9.range["startRow"]
        : _0x4eccf9.range["startColumn"],
    _0x5506bb =
      _0x111a13 === "row"
        ? _0x4eccf9.range["endRow"]
        : _0x4eccf9.range["endColumn"];
  return {
    ..._0x1779e4,
    axis: _0x111a13,
    type: "delete",
    start: _0x5252c4,
    end: _0x5506bb,
  };
}
function Y(_0x329bdc, _0x3e0e27, _0x4bbd17) {
  let _0x395d06 = X(_0x329bdc, _0x4bbd17);
  if (
    !(_0x329bdc != null && _0x329bdc.fromRange) ||
    !_0x329bdc.toRange ||
    !_0x395d06
  )
    return null;
  let _0xb7f9b0 =
      _0x3e0e27 === "row"
        ? _0x329bdc.fromRange["startRow"]
        : _0x329bdc.fromRange["startColumn"],
    _0x513dc0 =
      _0x3e0e27 === "row"
        ? _0x329bdc.fromRange["endRow"]
        : _0x329bdc.fromRange["endColumn"],
    _0x2d241d =
      _0x3e0e27 === "row"
        ? _0x329bdc.toRange["startRow"]
        : _0x329bdc.toRange["startColumn"];
  return {
    ..._0x395d06,
    axis: _0x3e0e27,
    type: "move",
    sourceStart: _0xb7f9b0,
    sourceEnd: _0x513dc0,
    destinationIndex: _0x2d241d,
  };
}
function we(_0x46ed5c, _0xf0814d) {
  switch (_0x46ed5c.type) {
    case "insert":
      return {
        unitId: _0x46ed5c.unitId,
        subUnitId: _0x46ed5c.subUnitId,
        axis: _0x46ed5c.axis,
        type: "delete",
        start: _0x46ed5c.index,
        end: _0x46ed5c.index + _0x46ed5c.count - 1,
      };
    case "delete":
      return {
        unitId: _0x46ed5c.unitId,
        subUnitId: _0x46ed5c.subUnitId,
        axis: _0x46ed5c.axis,
        type: "insert",
        index: _0x46ed5c.start,
        count: _0x46ed5c.end - _0x46ed5c.start + 1,
        restoreOutlines: _0xf0814d.filter(
          (_0x1f1615) =>
            _0x1f1615.unitId === _0x46ed5c.unitId &&
            _0x1f1615.subUnitId === _0x46ed5c.subUnitId &&
            _0x1f1615.axis === _0x46ed5c.axis,
        ),
      };
    case "move":
      return Te(_0x46ed5c);
  }
}
function Te(_0x72881f) {
  let _0x1d17e7 = _0x72881f.sourceEnd - _0x72881f.sourceStart + 1;
  return _0x72881f.destinationIndex >= _0x72881f.sourceStart &&
    _0x72881f.destinationIndex <= _0x72881f.sourceEnd + 1
    ? { ..._0x72881f }
    : _0x72881f.destinationIndex > _0x72881f.sourceEnd + 1
      ? {
          ..._0x72881f,
          sourceStart: _0x72881f.destinationIndex - _0x1d17e7,
          sourceEnd: _0x72881f.destinationIndex - 1,
          destinationIndex: _0x72881f.sourceStart,
        }
      : {
          ..._0x72881f,
          sourceStart: _0x72881f.destinationIndex,
          sourceEnd: _0x72881f.destinationIndex + _0x1d17e7 - 1,
          destinationIndex: _0x72881f.sourceEnd + 1,
        };
}
function X(_0x267976, _0x3dcf67) {
  let _0x1e5919 =
      (_0x267976 == null ? undefined : _0x267976.unitId) ??
      (_0x3dcf67 == null ? undefined : _0x3dcf67.unitId),
    _0xb32a56 =
      (_0x267976 == null ? undefined : _0x267976.subUnitId) ??
      (_0x3dcf67 == null ? undefined : _0x3dcf67.subUnitId);
  return _0x1e5919 && _0xb32a56
    ? { unitId: _0x1e5919, subUnitId: _0xb32a56 }
    : null;
}
function Z() {
  return {
    redos: [...G.redos],
    undos: [...G.undos],
    preRedos: [...(G.preRedos ?? [])],
    preUndos: [...(G.preUndos ?? [])],
  };
}
let Q = class extends e.Disposable {
  constructor(_0xccd603, _0x433d3e) {
    (super(),
      (this._resourceManagerService = _0xccd603),
      (this._sheetsOutlineModel = _0x433d3e),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: V,
        businesses: [e.UniverInstanceType["UNIVER_SHEET"]],
        toJson: (_0x24988a) =>
          JSON.stringify(this._sheetsOutlineModel["serialize"](_0x24988a)),
        parseJson: (_0x2387c2) => JSON.parse(_0x2387c2),
        onLoad: (_0x135a70, _0x1447fb) =>
          this._sheetsOutlineModel["deserialize"](_0x135a70, _0x1447fb),
        onUnLoad: (_0x271e2f) =>
          this._sheetsOutlineModel["removeUnit"](_0x271e2f),
      }),
    );
  }
};
Q = W([U(0, e.IResourceManagerService), U(1, (0, e.Inject)(E))], Q);
let $ = class extends e.Plugin {
  constructor(_0x1568cc = H, _0x1b8903, _0x300354, _0x59dc1b) {
    (super(),
      (this._config = _0x1568cc),
      (this._injector = _0x1b8903),
      (this._commandService = _0x300354),
      (this._configService = _0x59dc1b));
    let { ..._0x295510 } = (0, e.merge)({}, H, this._config);
    this._configService["setConfig"]("sheets-outline.config", _0x295510);
  }
  onStarting() {
    (this._injector["add"]([E]),
      this._injector["add"]([D]),
      this._injector["add"]([Q]),
      this._injector["add"]([K]),
      this._initRegisterCommand(),
      this._injector["get"](E),
      this._injector["get"](D),
      this._injector["get"](Q),
      this._injector["get"](K));
  }
  _initRegisterCommand() {
    ([j, P, z, N].forEach((_0x293a7b) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x293a7b));
    }),
      [O, k, F, M, B].forEach((_0x494075) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x494075));
      }));
  }
};
(T($, "pluginName", V),
  T($, "packageName", ye),
  T($, "version", be),
  T($, "type", e.UniverInstanceType["UNIVER_SHEET"]),
  ($ = W(
    [
      (0, e.DependentOn)(i.UniverLicensePlugin, t.UniverSheetsPlugin),
      U(1, (0, e.Inject)(e.Injector)),
      U(2, e.ICommandService),
      U(3, e.IConfigService),
    ],
    $,
  )),
  (exports.AddDimensionOutlineCommand = j),
  (exports.AddDimensionOutlineMutation = O),
  (exports.ClearDimensionOutlinesCommand = N),
  (exports.ClearDimensionOutlinesMutation = M),
  (exports.DimensionOutlineAxis = a),
  (exports.DimensionOutlineErrorReason = o),
  (exports.RemoveDimensionOutlineCommand = P),
  (exports.RemoveDimensionOutlineMutation = k),
  (exports.SHEET_OUTLINE_PLUGIN = V),
  (exports.SetDimensionOutlineCollapsedCommand = z),
  (exports.SetDimensionOutlineCollapsedMutation = F),
  (exports.SheetsOutlineErrorService = D),
  (exports.SheetsOutlineModel = E),
  (exports.TransformDimensionOutlinesMutation = B),
  Object.defineProperty(exports, "UniverSheetsOutlinePlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.buildDimensionOutlineTree = f),
  (exports.canAddDimensionOutline = p),
  (exports.getDimensionOutlineViewPermission$ = ue),
  (exports.hasDimensionOutlineViewPermission = A),
  (exports.transformOutlinesByDelete = y),
  (exports.transformOutlinesByInsert = v),
  (exports.transformOutlinesByMove = b));
