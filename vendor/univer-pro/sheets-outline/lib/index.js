import {
  CommandType as _0x3ec73b,
  CustomCommandExecutionError as _0x3e93d1,
  DependentOn as _0x1ff602,
  Disposable as _0x4f218d,
  ICommandService as _0x2a0ab5,
  IConfigService as _0x485bdd,
  IPermissionService as _0x24db67,
  IResourceManagerService as _0x19d78c,
  IUndoRedoService as _0x5020c6,
  IUniverInstanceService as _0x1b81a9,
  Inject as _0x24059e,
  Injector as _0x1da809,
  Plugin as _0xcd8562,
  UniverInstanceType as _0x4df1ea,
  generateRandomId as _0x31ac74,
  merge as _0x33c806,
  sequenceExecute as _0x2940b3,
} from "@univerjs/core";
import {
  InsertColCommand as _0x5b3c5e,
  InsertRowCommand as _0x2e74cd,
  MoveColsCommand as _0x589973,
  MoveRowsCommand as _0x40de3b,
  RemoveColCommand as _0x27301e,
  RemoveRowCommand as _0x5cefe1,
  SetColHiddenMutation as _0x4ea7c9,
  SetColVisibleMutation as _0x233529,
  SetRowHiddenMutation as _0x98f82c,
  SetRowVisibleMutation as _0x476ef8,
  SheetInterceptorService as _0x4c516f,
  SheetPermissionCheckController as _0x180599,
  UniverSheetsPlugin as _0x4bb6da,
  WorkbookViewPermission as _0x20c42f,
  WorksheetViewPermission as _0x7fb6b3,
  getSheetCommandTarget as _0x1ed71f,
} from "@univerjs/sheets";
import { Subject as _0x6009bd, of as _0xa3bfaf } from "rxjs";
import {
  debounceTime as _0x381668,
  map as _0x5da69e,
  startWith as _0x37a77f,
} from "rxjs/operators";
import { UniverLicensePlugin as _0x10cfbf } from "@univerjs-pro/license";
let _e = (function (_0x1f00c3) {
    return ((_0x1f00c3.ROW = "row"), (_0x1f00c3.COLUMN = "column"), _0x1f00c3);
  })({}),
  ve = (function (_0x2a2805) {
    return (
      (_0x2a2805.INVALID_RANGE = "invalid-range"),
      (_0x2a2805.OUT_OF_BOUNDS = "out-of-bounds"),
      (_0x2a2805.CROSSING = "crossing"),
      (_0x2a2805.MAX_DEPTH = "max-depth"),
      (_0x2a2805.MOVE_SPLITS_OUTLINE = "move-splits-outline"),
      (_0x2a2805.CLEAR_RANGE_NOT_CONTAIN_OUTLINE =
        "clear-range-not-contain-outline"),
      (_0x2a2805.UNKNOWN = "unknown"),
      _0x2a2805
    );
  })({});
var S = class extends Error {
  constructor(_0x1e6ef8, _0x4cc6f5, _0x551778) {
    (super(_0x4cc6f5),
      (this.reason = _0x1e6ef8),
      (this.outlineId = _0x551778),
      (this.name = "DimensionOutlineError"));
  }
};
function ye(_0x33f29f) {
  return _0x33f29f instanceof S
    ? _0x33f29f.reason
    : _0x33f29f instanceof Error
      ? _0x33f29f.message["includes"]("split dimension outline")
        ? "move-splits-outline"
        : _0x33f29f.message["includes"]("depth")
          ? "max-depth"
          : _0x33f29f.message["includes"]("Crossing")
            ? "crossing"
            : _0x33f29f.message["includes"]("range")
              ? "invalid-range"
              : "unknown"
      : "unknown";
}
function be(_0xe568f1) {
  return _0xe568f1 instanceof S ? _0xe568f1.outlineId : undefined;
}
const C = 2 ** 53 - 1;
function w(_0x57b79d, _0x2b47a3) {
  return (
    _0x57b79d.unitId === _0x2b47a3.unitId &&
    _0x57b79d.subUnitId === _0x2b47a3.subUnitId &&
    _0x57b79d.axis === _0x2b47a3.axis
  );
}
function T(_0x2c67a9, _0x5e106a = {}) {
  let _0x2afc85 = _0x5e106a.maxDepth ?? 8,
    _0x57edff = new Map();
  for (let _0x129d9a of _0x2c67a9) {
    let _0x5e9395 =
        _0x129d9a.unitId + ":" + _0x129d9a.subUnitId + ":" + _0x129d9a.axis,
      _0x5e9691 = _0x57edff.get(_0x5e9395);
    _0x5e9691
      ? _0x5e9691.push(_0x129d9a)
      : _0x57edff.set(_0x5e9395, [_0x129d9a]);
  }
  let _0x4ea05c = [];
  for (let _0x46e89a of _0x57edff.values()) {
    let _0x1345f4 = [..._0x46e89a].sort(j),
      _0xade2d = [];
    for (let _0x5ad576 of _0x1345f4) {
      for (
        Me(_0x5ad576);
        _0xade2d.length > 0 &&
        _0x5ad576.start > _0xade2d[_0xade2d.length - 1].end;
      )
        _0xade2d.pop();
      let _0x2a1904 = _0xade2d[_0xade2d.length - 1];
      if (_0x2a1904 && _0x5ad576.end > _0x2a1904.end)
        throw new S(
          "crossing",
          "Crossing dimension outlines are not allowed",
          _0x5ad576.id,
        );
      let _0x4a8a9d = _0x2a1904 ? _0x2a1904.depth + 1 : 1;
      if (_0x4a8a9d > _0x2afc85)
        throw new S(
          "max-depth",
          "Dimension\x20outline\x20depth\x20cannot\x20exceed\x20" + _0x2afc85,
          _0x5ad576.id,
        );
      let _0x58f249 = {
        ..._0x5ad576,
        depth: _0x4a8a9d,
        parentId: _0x2a1904 == null ? undefined : _0x2a1904.id,
        anchor: _0x5ad576.end,
        children: [],
      };
      (_0x2a1904
        ? _0x2a1904.children["push"](_0x58f249)
        : _0x4ea05c.push(_0x58f249),
        _0xade2d.push(_0x58f249));
    }
  }
  return _0x4ea05c;
}
function E(_0x49d62d, _0x36dddc, _0x2867d6 = {}) {
  if (_0x36dddc.start < 0 || _0x36dddc.start > _0x36dddc.end)
    return { valid: false, reason: "invalid-range" };
  if (_0x2867d6.maxIndex != null && _0x36dddc.end >= _0x2867d6.maxIndex)
    return { valid: false, reason: "out-of-bounds" };
  let _0x597ec0 = _0x49d62d.filter((_0x276cd2) => w(_0x276cd2, _0x36dddc));
  for (let _0x411e8b of _0x597ec0)
    if (Ne(_0x411e8b, _0x36dddc)) return { valid: false, reason: "crossing" };
  try {
    T([..._0x49d62d, _0x36dddc], _0x2867d6);
  } catch (_0x5a6d52) {
    let _0x17f100 = ye(_0x5a6d52);
    return _0x17f100 === "max-depth"
      ? { valid: false, reason: "max-depth" }
      : _0x17f100 === "invalid-range"
        ? { valid: false, reason: "invalid-range" }
        : { valid: false, reason: "crossing" };
  }
  return { valid: true };
}
function xe(_0x508bf1, _0x2c5d8d, _0x1d95cf = {}) {
  let _0x33562e = E(_0x508bf1, _0x2c5d8d, _0x1d95cf);
  if (!_0x33562e.valid)
    throw Error(_0x33562e.reason ?? "invalid-dimension-outline");
  return [..._0x508bf1, _0x2c5d8d];
}
function Se(_0x547cad, _0x92495f) {
  let _0x1f37ae = _0x92495f.start,
    _0x1d455e = _0x92495f.end,
    _0x12cd9c = [],
    _0x681780 = true;
  for (; _0x681780;) {
    _0x681780 = false;
    for (let _0x246961 of _0x547cad)
      _0x12cd9c.includes(_0x246961) ||
        !w(_0x246961, _0x92495f) ||
        !Ae(_0x246961.start, _0x246961.end, _0x1f37ae, _0x1d455e) ||
        (_0x12cd9c.push(_0x246961),
        (_0x1f37ae = Math.min(_0x1f37ae, _0x246961.start)),
        (_0x1d455e = Math.max(_0x1d455e, _0x246961.end)),
        (_0x681780 = true));
  }
  if (_0x12cd9c.length === 0) return null;
  let [_0x456ebc] = [..._0x12cd9c].sort(j);
  return {
    mergedOutline: { ..._0x456ebc, start: _0x1f37ae, end: _0x1d455e },
    mergedOutlines: _0x12cd9c,
  };
}
function Ce(_0x34d19d, _0x3e7e64) {
  return _0x34d19d.filter(
    (_0xc3e34a) =>
      !w(_0xc3e34a, _0x3e7e64) ||
      !(_0xc3e34a.start >= _0x3e7e64.start && _0xc3e34a.end <= _0x3e7e64.end),
  );
}
function we(_0x31acd7, _0x2f7e51, _0x1803a2, _0x289495) {
  return Te(
    _0x31acd7
      .filter(
        (_0x45021f) =>
          _0x45021f.unitId === _0x2f7e51 &&
          _0x45021f.subUnitId === _0x1803a2 &&
          _0x45021f.axis === _0x289495 &&
          _0x45021f.collapsed,
      )
      .map((_0x3d273d) => ({ start: _0x3d273d.start, end: _0x3d273d.end })),
  );
}
function Te(_0x18b821) {
  if (_0x18b821.length === 0) return [];
  let _0x3662c2 = [..._0x18b821].sort(
      (_0x3c7324, _0x103dee) =>
        _0x3c7324.start - _0x103dee.start || _0x3c7324.end - _0x103dee.end,
    ),
    _0x44493a = [];
  for (let _0x30d750 of _0x3662c2) {
    let _0x49bcbd = _0x44493a[_0x44493a.length - 1];
    !_0x49bcbd || _0x30d750.start > _0x49bcbd.end + 1
      ? _0x44493a.push({ ..._0x30d750 })
      : (_0x49bcbd.end = Math.max(_0x49bcbd.end, _0x30d750.end));
  }
  return _0x44493a;
}
function D(_0x3360d2, _0x2924c9) {
  return _0x2924c9.count <= 0
    ? _0x3360d2
    : A(
        _0x3360d2.map((_0x476f74) =>
          w(_0x476f74, _0x2924c9)
            ? _0x2924c9.index <= _0x476f74.start
              ? {
                  ..._0x476f74,
                  start: _0x476f74.start + _0x2924c9.count,
                  end: _0x476f74.end + _0x2924c9.count,
                }
              : _0x476f74.start < _0x2924c9.index &&
                  _0x2924c9.index <= _0x476f74.end
                ? { ..._0x476f74, end: _0x476f74.end + _0x2924c9.count }
                : _0x476f74
            : _0x476f74,
        ),
      );
}
function O(_0xc1bbb5, _0x3c3801) {
  if (_0x3c3801.start > _0x3c3801.end) return _0xc1bbb5;
  let _0x12f625 = _0x3c3801.end - _0x3c3801.start + 1,
    _0x592131 = [];
  for (let _0x145318 of _0xc1bbb5) {
    if (!w(_0x145318, _0x3c3801)) {
      _0x592131.push(_0x145318);
      continue;
    }
    if (_0x145318.end < _0x3c3801.start) {
      _0x592131.push(_0x145318);
      continue;
    }
    if (_0x145318.start > _0x3c3801.end) {
      _0x592131.push({
        ..._0x145318,
        start: _0x145318.start - _0x12f625,
        end: _0x145318.end - _0x12f625,
      });
      continue;
    }
    let _0x2f978e = Math.max(_0x145318.start, _0x3c3801.start),
      _0x24f1fd = Math.min(_0x145318.end, _0x3c3801.end),
      _0x31af74 = Math.max(0, _0x24f1fd - _0x2f978e + 1),
      _0x1990e4 = _0x145318.end - _0x145318.start + 1 - _0x31af74;
    if (_0x1990e4 <= 0) continue;
    let _0x216580 =
      _0x145318.start < _0x3c3801.start ? _0x145318.start : _0x3c3801.start;
    _0x592131.push({
      ..._0x145318,
      start: _0x216580,
      end: _0x216580 + _0x1990e4 - 1,
    });
  }
  return A(_0x592131);
}
function k(_0x1960ac, _0xf742fb) {
  if (_0xf742fb.sourceStart > _0xf742fb.sourceEnd) return _0x1960ac;
  let _0x20dd84 = [];
  for (let _0x3fa642 of _0x1960ac) {
    if (!w(_0x3fa642, _0xf742fb)) {
      _0x20dd84.push(_0x3fa642);
      continue;
    }
    let _0x35bdc1 = Ee(_0x3fa642, _0xf742fb);
    if (_0x35bdc1.type === "split")
      throw new S(
        "move-splits-outline",
        "Move would split dimension outline: " + _0x3fa642.id,
        _0x3fa642.id,
      );
    _0x20dd84.push(_0x35bdc1.outline);
  }
  return A(_0x20dd84);
}
function Ee(_0x31c766, _0x158b90) {
  let _0xc2ec76 = De(
      _0x158b90.sourceStart,
      _0x158b90.sourceEnd + 1,
      _0x158b90.destinationIndex,
    ),
    _0x5edf08 = [],
    _0x10ccd6 = { start: _0x31c766.start, end: _0x31c766.end + 1 };
  for (let _0x893ccf of _0xc2ec76) {
    let _0x2e484a = Oe(_0x10ccd6, _0x893ccf.range);
    _0x2e484a &&
      _0x5edf08.push({
        start: _0x2e484a.start + _0x893ccf.offset,
        end: _0x2e484a.end + _0x893ccf.offset,
      });
  }
  let _0x169d6f = ke(_0x5edf08);
  return _0x169d6f.length === 1
    ? {
        type: "ok",
        outline: {
          ..._0x31c766,
          start: _0x169d6f[0].start,
          end: _0x169d6f[0].end - 1,
        },
      }
    : { type: "split", outline: _0x31c766, ranges: _0x169d6f };
}
function De(_0x279541, _0x2289dc, _0x4123f1) {
  let _0x345637 = _0x2289dc - _0x279541;
  if (_0x345637 <= 0)
    throw Error("Invalid dimension outline move source range");
  return _0x4123f1 >= _0x279541 && _0x4123f1 <= _0x2289dc
    ? [{ range: { start: 0, end: C }, offset: 0 }]
    : _0x4123f1 < _0x279541
      ? [
          { range: { start: 0, end: _0x4123f1 }, offset: 0 },
          { range: { start: _0x4123f1, end: _0x279541 }, offset: _0x345637 },
          {
            range: { start: _0x279541, end: _0x2289dc },
            offset: _0x4123f1 - _0x279541,
          },
          { range: { start: _0x2289dc, end: C }, offset: 0 },
        ]
      : [
          { range: { start: 0, end: _0x279541 }, offset: 0 },
          {
            range: { start: _0x279541, end: _0x2289dc },
            offset: _0x4123f1 - _0x2289dc,
          },
          { range: { start: _0x2289dc, end: _0x4123f1 }, offset: -_0x345637 },
          { range: { start: _0x4123f1, end: C }, offset: 0 },
        ];
}
function Oe(_0x2e4381, _0x349e7f) {
  let _0x596230 = Math.max(_0x2e4381.start, _0x349e7f.start),
    _0x4a6a36 = Math.min(_0x2e4381.end, _0x349e7f.end);
  return _0x596230 >= _0x4a6a36 ? null : { start: _0x596230, end: _0x4a6a36 };
}
function ke(_0x33799a) {
  if (_0x33799a.length === 0) return [];
  let _0x31259e = [..._0x33799a].sort(
      (_0xe77a2e, _0xf1d3d) =>
        _0xe77a2e.start - _0xf1d3d.start || _0xe77a2e.end - _0xf1d3d.end,
    ),
    _0x46fdb5 = [];
  for (let _0x2bb73d of _0x31259e) {
    let _0x3bd549 = _0x46fdb5[_0x46fdb5.length - 1];
    !_0x3bd549 || _0x2bb73d.start > _0x3bd549.end
      ? _0x46fdb5.push({ ..._0x2bb73d })
      : (_0x3bd549.end = Math.max(_0x3bd549.end, _0x2bb73d.end));
  }
  return _0x46fdb5;
}
function Ae(_0x43e52b, _0x14c7b7, _0x4bdee8, _0x351c4e) {
  return _0x14c7b7 + 1 === _0x4bdee8 || _0x351c4e + 1 === _0x43e52b;
}
function A(_0x4b53fd) {
  let _0x423e86 = je(_0x4b53fd);
  return (T(_0x423e86), _0x423e86);
}
function je(_0x4e2329) {
  let _0x142e21 = new Map();
  for (let _0x21b32d of _0x4e2329) {
    let _0x2f18d0 = [
        _0x21b32d.unitId,
        _0x21b32d.subUnitId,
        _0x21b32d.axis,
        _0x21b32d.start,
        _0x21b32d.end,
      ].join(":"),
      _0x1ca619 = _0x142e21.get(_0x2f18d0);
    if (!_0x1ca619) {
      _0x142e21.set(_0x2f18d0, _0x21b32d);
      continue;
    }
    _0x142e21.set(_0x2f18d0, {
      ..._0x1ca619,
      collapsed: _0x1ca619.collapsed || _0x21b32d.collapsed,
    });
  }
  return Array.from(_0x142e21.values());
}
function j(_0x3e90f3, _0x53064d) {
  return _0x3e90f3.unitId === _0x53064d.unitId
    ? _0x3e90f3.subUnitId === _0x53064d.subUnitId
      ? _0x3e90f3.axis === _0x53064d.axis
        ? _0x3e90f3.start === _0x53064d.start
          ? _0x53064d.end - _0x3e90f3.end
          : _0x3e90f3.start - _0x53064d.start
        : _0x3e90f3.axis["localeCompare"](_0x53064d.axis)
      : _0x3e90f3.subUnitId["localeCompare"](_0x53064d.subUnitId)
    : _0x3e90f3.unitId["localeCompare"](_0x53064d.unitId);
}
function Me(_0x2f9d72) {
  if (_0x2f9d72.start > _0x2f9d72.end)
    throw new S("invalid-range", "Invalid outline range", _0x2f9d72.id);
}
function Ne(_0x4a5533, _0x234582) {
  let _0x5ca907 =
      _0x4a5533.start <= _0x234582.end && _0x234582.start <= _0x4a5533.end,
    _0x47f20d =
      _0x4a5533.start <= _0x234582.start && _0x234582.end <= _0x4a5533.end,
    _0x250aed =
      _0x234582.start <= _0x4a5533.start && _0x4a5533.end <= _0x234582.end;
  return _0x5ca907 && !_0x47f20d && !_0x250aed;
}
function M(_0x301938) {
  "@babel/helpers - typeof";
  return (
    (M =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2ad8ff) {
            return typeof _0x2ad8ff;
          }
        : function (_0x399d46) {
            return _0x399d46 &&
              typeof Symbol == "function" &&
              _0x399d46.constructor === Symbol &&
              _0x399d46 !== Symbol.prototype
              ? "symbol"
              : typeof _0x399d46;
          }),
    M(_0x301938)
  );
}
function Pe(_0x3cf54d, _0x5ef621) {
  if (M(_0x3cf54d) != "object" || !_0x3cf54d) return _0x3cf54d;
  var _0x33fb4f = _0x3cf54d[Symbol.toPrimitive];
  if (_0x33fb4f !== undefined) {
    var _0x4d15ba = _0x33fb4f.call(_0x3cf54d, _0x5ef621 || "default");
    if (M(_0x4d15ba) != "object") return _0x4d15ba;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5ef621 === "string" ? String : Number)(_0x3cf54d);
}
function Fe(_0x17bc60) {
  var _0x25cc10 = Pe(_0x17bc60, "string");
  return M(_0x25cc10) == "symbol" ? _0x25cc10 : _0x25cc10 + "";
}
function N(_0x2998f6, _0x1cb617, _0x55ffec) {
  return (
    (_0x1cb617 = Fe(_0x1cb617)) in _0x2998f6
      ? Object.defineProperty(_0x2998f6, _0x1cb617, {
          value: _0x55ffec,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2998f6[_0x1cb617] = _0x55ffec),
    _0x2998f6
  );
}
var P = class extends _0x4f218d {
    constructor(..._0x232721) {
      (super(..._0x232721),
        N(this, "_outlines", new Map()),
        N(this, "_change$", new _0x6009bd()),
        N(this, "change$", this._change$["asObservable"]()));
    }
    getOutlines(_0x4357b4, _0x163d1c) {
      var _0x624346;
      return [
        ...(((_0x624346 = this._outlines["get"](_0x4357b4)) == null
          ? undefined
          : _0x624346.get(_0x163d1c)) ?? []),
      ];
    }
    getUnitOutlines(_0x30e656) {
      let _0x21b281 = this._outlines["get"](_0x30e656),
        _0x401e3e = new Map();
      return (
        _0x21b281 == null ||
          _0x21b281.forEach((_0x383686, _0x3c5987) => {
            _0x401e3e.set(_0x3c5987, [..._0x383686]);
          }),
        _0x401e3e
      );
    }
    setOutlines(_0x21cd22, _0x12fd6e, _0xa0bd80) {
      (this._ensureUnitOutlines(_0x21cd22).set(_0x12fd6e, [..._0xa0bd80]),
        this._change$["next"]({ unitId: _0x21cd22, subUnitId: _0x12fd6e }));
    }
    removeUnit(_0x2664b7) {
      (this._outlines["delete"](_0x2664b7),
        this._change$["next"]({ unitId: _0x2664b7 }));
    }
    serialize(_0x429d25) {
      let _0x1c8391 = this._outlines["get"](_0x429d25),
        _0x32f1a9 = {};
      return (
        _0x1c8391 == null ||
          _0x1c8391.forEach((_0x324c20, _0x415450) => {
            _0x32f1a9[_0x415450] = { outlineList: [..._0x324c20] };
          }),
        _0x32f1a9
      );
    }
    deserialize(_0x4dcbab, _0x19d5b9) {
      let _0x2a26f2 = new Map();
      (Object.entries(_0x19d5b9).forEach(([_0x2d1d68, _0x3f078f]) => {
        _0x2a26f2.set(_0x2d1d68, [...(_0x3f078f.outlineList ?? [])]);
      }),
        this._outlines["set"](_0x4dcbab, _0x2a26f2),
        this._change$["next"]({ unitId: _0x4dcbab }));
    }
    dispose() {
      (super.dispose(), this._outlines["clear"](), this._change$["complete"]());
    }
    _ensureUnitOutlines(_0x278ca7) {
      let _0x3cbfd8 = this._outlines["get"](_0x278ca7);
      return (
        _0x3cbfd8 ||
          ((_0x3cbfd8 = new Map()),
          this._outlines["set"](_0x278ca7, _0x3cbfd8)),
        _0x3cbfd8
      );
    }
  },
  F = class extends _0x4f218d {
    constructor(..._0x3771ae) {
      (super(..._0x3771ae),
        N(this, "_error$", new _0x6009bd()),
        N(this, "error$", this._error$["asObservable"]()));
    }
    emit(_0x1e61de) {
      this._error$["next"](_0x1e61de);
    }
    dispose() {
      (super.dispose(), this._error$["complete"]());
    }
  };
const I = {
    id: "sheet.mutation.add-dimension-outline",
    type: _0x3ec73b.MUTATION,
    handler: (_0x5e6cba, _0x492f0d) => {
      let _0x49541b = _0x5e6cba.get(P),
        _0x87f4f8 = _0x49541b.getOutlines(
          _0x492f0d.unitId,
          _0x492f0d.subUnitId,
        );
      return (
        _0x49541b.setOutlines(
          _0x492f0d.unitId,
          _0x492f0d.subUnitId,
          xe(_0x87f4f8, _0x492f0d.outline),
        ),
        true
      );
    },
  },
  L = {
    id: "sheet.mutation.remove-dimension-outline",
    type: _0x3ec73b.MUTATION,
    handler: (_0x5a6f12, _0x401624) => {
      let _0x54b41e = _0x5a6f12.get(P),
        _0x3bfbb0 = _0x54b41e.getOutlines(
          _0x401624.unitId,
          _0x401624.subUnitId,
        );
      return (
        _0x54b41e.setOutlines(
          _0x401624.unitId,
          _0x401624.subUnitId,
          _0x3bfbb0.filter((_0x31a429) => _0x31a429.id !== _0x401624.outlineId),
        ),
        true
      );
    },
  };
function R(_0x5f30b5, _0x5162ed, _0x5a61df) {
  let _0x11627e = Le(_0x5f30b5);
  return (
    !_0x11627e ||
    _0x11627e.permissionCheckWithoutRange(
      { workbookTypes: [_0x20c42f], worksheetTypes: [_0x7fb6b3] },
      _0x5162ed,
      _0x5a61df,
    )
  );
}
function Ie(_0x33fd02, _0x1bff32, _0x51c08a) {
  let _0x5b3b0c = Re(_0x33fd02);
  return (
    (_0x5b3b0c == null ? undefined : _0x5b3b0c.permissionPointUpdate$) ??
    _0xa3bfaf(null)
  ).pipe(
    _0x381668(100),
    _0x37a77f(null),
    _0x5da69e(() => R(_0x33fd02, _0x1bff32, _0x51c08a)),
  );
}
function Le(_0xda5e03) {
  if (typeof _0xda5e03.has == "function" && !_0xda5e03.has(_0x180599))
    return null;
  try {
    return _0xda5e03.get(_0x180599);
  } catch {
    return null;
  }
}
function Re(_0x31847d) {
  if (typeof _0x31847d.has == "function" && !_0x31847d.has(_0x24db67))
    return null;
  try {
    return _0x31847d.get(_0x24db67);
  } catch {
    return null;
  }
}
const z = {
    id: "sheet.command.add-dimension-outline",
    type: _0x3ec73b.COMMAND,
    handler: (_0x12c275, _0x1bf111) => {
      if (!_0x1bf111) return false;
      let _0x84332d = _0x1ed71f(_0x12c275.get(_0x1b81a9), _0x1bf111);
      if (!_0x84332d) return false;
      let {
        unitId: _0x2593c5,
        subUnitId: _0x3cb3f2,
        worksheet: _0x5ad4df,
      } = _0x84332d;
      if (!R(_0x12c275, _0x2593c5, _0x3cb3f2)) return false;
      let _0x16903b = _0x12c275.get(P),
        _0x232d5d = {
          id: "dimension-outline-" + _0x31ac74(6),
          unitId: _0x2593c5,
          subUnitId: _0x3cb3f2,
          axis: _0x1bf111.axis,
          start: _0x1bf111.start,
          end: _0x1bf111.end,
          collapsed: false,
        },
        _0x712408 =
          _0x1bf111.axis === "row"
            ? _0x5ad4df.getRowCount()
            : _0x5ad4df.getColumnCount(),
        _0x36be54 = _0x16903b.getOutlines(_0x2593c5, _0x3cb3f2),
        _0x319150 = Se(_0x36be54, _0x232d5d),
        _0x5acc5d =
          (_0x319150 == null ? undefined : _0x319150.mergedOutlines) ?? [],
        _0x233ea4 =
          (_0x319150 == null ? undefined : _0x319150.mergedOutline) ??
          _0x232d5d,
        _0x22e7ac = E(
          _0x319150
            ? _0x36be54.filter(
                (_0x1b5630) =>
                  !_0x5acc5d.some((_0x3d0bc9) => _0x3d0bc9.id === _0x1b5630.id),
              )
            : _0x36be54,
          _0x233ea4,
          { maxIndex: _0x712408 },
        );
      if (!_0x22e7ac.valid)
        return (
          _0x12c275
            .get(F)
            .emit({
              reason: _0x22e7ac.reason ?? "unknown",
              commandId: z.id,
              unitId: _0x2593c5,
              subUnitId: _0x3cb3f2,
              axis: _0x1bf111.axis,
              outlineId: _0x233ea4.id,
            }),
          false
        );
      let _0x2a0999 = [
          ..._0x5acc5d.map((_0x5f432b) => ({
            id: L.id,
            params: {
              unitId: _0x2593c5,
              subUnitId: _0x3cb3f2,
              outlineId: _0x5f432b.id,
            },
          })),
          {
            id: I.id,
            params: {
              unitId: _0x2593c5,
              subUnitId: _0x3cb3f2,
              outline: _0x233ea4,
            },
          },
        ],
        _0x26e8fa = [
          {
            id: L.id,
            params: {
              unitId: _0x2593c5,
              subUnitId: _0x3cb3f2,
              outlineId: _0x233ea4.id,
            },
          },
          ..._0x5acc5d.map((_0x1ebfbf) => ({
            id: I.id,
            params: {
              unitId: _0x2593c5,
              subUnitId: _0x3cb3f2,
              outline: _0x1ebfbf,
            },
          })),
        ];
      return _0x2940b3(_0x2a0999, _0x12c275.get(_0x2a0ab5)).result
        ? (_0x12c275
            .get(_0x5020c6)
            .pushUndoRedo({
              unitID: _0x2593c5,
              undoMutations: _0x26e8fa,
              redoMutations: _0x2a0999,
            }),
          true)
        : false;
    },
  },
  B = {
    id: "sheet.mutation.clear-dimension-outlines",
    type: _0x3ec73b.MUTATION,
    handler: (_0x24d17d, _0x3f3f46) => {
      let _0x3600d3 = _0x24d17d.get(P),
        _0x38968a = _0x3600d3.getOutlines(
          _0x3f3f46.unitId,
          _0x3f3f46.subUnitId,
        );
      return (
        _0x3600d3.setOutlines(
          _0x3f3f46.unitId,
          _0x3f3f46.subUnitId,
          Ce(_0x38968a, _0x3f3f46),
        ),
        true
      );
    },
  },
  V = {
    id: "sheet.command.clear-dimension-outlines",
    type: _0x3ec73b.COMMAND,
    handler: (_0x3c6514, _0x56cd07) => {
      if (!_0x56cd07) return false;
      let _0xb5bd19 = _0x1ed71f(_0x3c6514.get(_0x1b81a9), _0x56cd07);
      if (!_0xb5bd19) return false;
      let { unitId: _0x2fc83a, subUnitId: _0x520342 } = _0xb5bd19;
      if (!R(_0x3c6514, _0x2fc83a, _0x520342)) return false;
      let _0x3a6447 = {
          unitId: _0x2fc83a,
          subUnitId: _0x520342,
          axis: _0x56cd07.axis,
          start: _0x56cd07.start,
          end: _0x56cd07.end,
        },
        _0x14cb2f = _0x3c6514
          .get(P)
          .getOutlines(_0x2fc83a, _0x520342)
          .filter(
            (_0x302ecf) =>
              w(_0x302ecf, _0x3a6447) &&
              _0x302ecf.start >= _0x56cd07.start &&
              _0x302ecf.end <= _0x56cd07.end,
          );
      if (_0x14cb2f.length === 0)
        return (
          _0x3c6514
            .get(F)
            .emit({
              reason: "clear-range-not-contain-outline",
              commandId: V.id,
              unitId: _0x2fc83a,
              subUnitId: _0x520342,
              axis: _0x56cd07.axis,
            }),
          false
        );
      let _0x4ac92e = [
          {
            id: B.id,
            params: {
              ..._0x3a6447,
              removedOutlineIds: _0x14cb2f.map((_0x4fff6a) => _0x4fff6a.id),
            },
          },
        ],
        _0x115868 = _0x14cb2f.map((_0x113a13) => ({
          id: I.id,
          params: {
            unitId: _0x2fc83a,
            subUnitId: _0x520342,
            outline: _0x113a13,
          },
        }));
      return _0x2940b3(_0x4ac92e, _0x3c6514.get(_0x2a0ab5)).result
        ? (_0x3c6514
            .get(_0x5020c6)
            .pushUndoRedo({
              unitID: _0x2fc83a,
              undoMutations: _0x115868,
              redoMutations: _0x4ac92e,
            }),
          true)
        : false;
    },
  },
  ze = {
    id: "sheet.command.remove-dimension-outline",
    type: _0x3ec73b.COMMAND,
    handler: (_0x41ca65, _0x1cc157) => {
      if (!_0x1cc157) return false;
      let _0x4ac4f7 = _0x1ed71f(_0x41ca65.get(_0x1b81a9), _0x1cc157);
      if (!_0x4ac4f7) return false;
      let { unitId: _0x335c14, subUnitId: _0x5e22b4 } = _0x4ac4f7;
      if (!R(_0x41ca65, _0x335c14, _0x5e22b4)) return false;
      let _0x168466 = _0x41ca65
        .get(P)
        .getOutlines(_0x335c14, _0x5e22b4)
        .find((_0x2c1bb8) => _0x2c1bb8.id === _0x1cc157.outlineId);
      if (!_0x168466) return false;
      let _0x564ab1 = [
          {
            id: L.id,
            params: {
              unitId: _0x335c14,
              subUnitId: _0x5e22b4,
              outlineId: _0x168466.id,
              outline: _0x168466,
            },
          },
        ],
        _0x4db409 = [
          {
            id: I.id,
            params: {
              unitId: _0x335c14,
              subUnitId: _0x5e22b4,
              outline: _0x168466,
            },
          },
        ];
      return _0x2940b3(_0x564ab1, _0x41ca65.get(_0x2a0ab5)).result
        ? (_0x41ca65
            .get(_0x5020c6)
            .pushUndoRedo({
              unitID: _0x335c14,
              undoMutations: _0x4db409,
              redoMutations: _0x564ab1,
            }),
          true)
        : false;
    },
  },
  H = {
    id: "sheet.mutation.set-dimension-outline-collapsed",
    type: _0x3ec73b.MUTATION,
    handler: (_0x4cbbb0, _0x1055d2) => {
      let _0x201fdf = _0x4cbbb0.get(P),
        _0x13b66b = _0x201fdf.getOutlines(
          _0x1055d2.unitId,
          _0x1055d2.subUnitId,
        ),
        _0x1dc1bf = _0x13b66b.find(
          (_0x2fa9ba) => _0x2fa9ba.id === _0x1055d2.outlineId,
        );
      return (
        _0x1dc1bf &&
          _0x201fdf.setOutlines(
            _0x1055d2.unitId,
            _0x1055d2.subUnitId,
            _0x13b66b.map((_0x258e8b) =>
              _0x258e8b.unitId !== _0x1dc1bf.unitId ||
              _0x258e8b.subUnitId !== _0x1dc1bf.subUnitId ||
              _0x258e8b.axis !== _0x1dc1bf.axis ||
              _0x258e8b.start !== _0x1dc1bf.start ||
              _0x258e8b.end !== _0x1dc1bf.end
                ? _0x258e8b
                : { ..._0x258e8b, collapsed: _0x1055d2.collapsed },
            ),
          ),
        true
      );
    },
  };
function Be(_0x3769df, _0x533353, _0x13ab25, _0x1bbb54) {
  return _0x3769df === "row"
    ? {
        startRow: _0x533353,
        endRow: _0x13ab25,
        startColumn: 0,
        endColumn: _0x1bbb54.getMaxColumns() - 1,
      }
    : {
        startRow: 0,
        endRow: _0x1bbb54.getRowCount() - 1,
        startColumn: _0x533353,
        endColumn: _0x13ab25,
      };
}
function Ve(_0x3ef881) {
  return _0x3ef881 === "row" ? _0x98f82c.id : _0x4ea7c9.id;
}
function He(_0x5c43ce) {
  return _0x5c43ce === "row" ? _0x476ef8.id : _0x233529.id;
}
function Ue(_0x35dba8, _0x12957d, _0x4de9f9, _0x469484) {
  let _0x30e78f = _0x12957d
      ? [Be(_0x35dba8.axis, _0x35dba8.start, _0x35dba8.end, _0x4de9f9)]
      : We(_0x35dba8, _0x469484, _0x4de9f9),
    _0x544fd9 = _0x12957d ? Ve(_0x35dba8.axis) : He(_0x35dba8.axis);
  return [
    {
      id: H.id,
      params: {
        unitId: _0x35dba8.unitId,
        subUnitId: _0x35dba8.subUnitId,
        outlineId: _0x35dba8.id,
        outline: _0x35dba8,
        collapsed: _0x12957d,
      },
    },
    ..._0x30e78f.map((_0x42f54e) => ({
      id: _0x544fd9,
      params: {
        unitId: _0x35dba8.unitId,
        subUnitId: _0x35dba8.subUnitId,
        ranges: [_0x42f54e],
        dimensionOutlineId: _0x35dba8.id,
      },
    })),
  ];
}
function We(_0xaab636, _0x51057e, _0x1f9d20) {
  let _0x2a0b01 = we(
    _0x51057e.map((_0x40a293) =>
      Ge(_0x40a293, _0xaab636) ? { ..._0x40a293, collapsed: false } : _0x40a293,
    ),
    _0xaab636.unitId,
    _0xaab636.subUnitId,
    _0xaab636.axis,
  );
  return Ke({ start: _0xaab636.start, end: _0xaab636.end }, _0x2a0b01).map(
    (_0x35cc30) =>
      Be(_0xaab636.axis, _0x35cc30.start, _0x35cc30.end, _0x1f9d20),
  );
}
function Ge(_0x45f0a8, _0x540572) {
  return (
    _0x45f0a8.unitId === _0x540572.unitId &&
    _0x45f0a8.subUnitId === _0x540572.subUnitId &&
    _0x45f0a8.axis === _0x540572.axis &&
    _0x45f0a8.start === _0x540572.start &&
    _0x45f0a8.end === _0x540572.end
  );
}
function Ke(_0xdb828e, _0x34dc37) {
  let _0x4a79cf = _0xdb828e.start,
    _0x122e33 = [];
  for (let _0x4a3de5 of _0x34dc37)
    if (
      !(_0x4a3de5.end < _0x4a79cf || _0x4a3de5.start > _0xdb828e.end) &&
      (_0x4a3de5.start > _0x4a79cf &&
        _0x122e33.push({
          start: _0x4a79cf,
          end: Math.min(_0x4a3de5.start - 1, _0xdb828e.end),
        }),
      (_0x4a79cf = Math.max(_0x4a79cf, _0x4a3de5.end + 1)),
      _0x4a79cf > _0xdb828e.end)
    )
      break;
  return (
    _0x4a79cf <= _0xdb828e.end &&
      _0x122e33.push({ start: _0x4a79cf, end: _0xdb828e.end }),
    _0x122e33
  );
}
const qe = {
    id: "sheet.command.set-dimension-outline-collapsed",
    type: _0x3ec73b.COMMAND,
    handler: (_0x395d28, _0x69072f) => {
      if (!_0x69072f) return false;
      let _0x272baf = _0x1ed71f(_0x395d28.get(_0x1b81a9), _0x69072f);
      if (!_0x272baf) return false;
      let {
        unitId: _0x557bd9,
        subUnitId: _0x5b3a47,
        worksheet: _0x486269,
      } = _0x272baf;
      if (!R(_0x395d28, _0x557bd9, _0x5b3a47)) return false;
      let _0x5004b0 = _0x395d28.get(P).getOutlines(_0x557bd9, _0x5b3a47),
        _0x38a394 = _0x5004b0.find(
          (_0x56e3c1) => _0x56e3c1.id === _0x69072f.outlineId,
        );
      if (!_0x38a394 || _0x38a394.collapsed === _0x69072f.collapsed)
        return false;
      let _0x22ab48 = Ue(_0x38a394, _0x69072f.collapsed, _0x486269, _0x5004b0),
        _0x1b1726 = Ue(_0x38a394, !_0x69072f.collapsed, _0x486269, _0x5004b0);
      return _0x2940b3(_0x22ab48, _0x395d28.get(_0x2a0ab5)).result
        ? (_0x395d28
            .get(_0x5020c6)
            .pushUndoRedo({
              unitID: _0x557bd9,
              undoMutations: _0x1b1726,
              redoMutations: _0x22ab48,
            }),
          true)
        : false;
    },
  },
  U = {
    id: "sheet.mutation.transform-dimension-outlines",
    type: _0x3ec73b.MUTATION,
    handler: (_0x59374e, _0x518df6) => {
      let _0x1dc60f = _0x59374e.get(P),
        _0xd94125 = Je(
          _0x1dc60f.getOutlines(_0x518df6.unitId, _0x518df6.subUnitId),
          _0x518df6,
        );
      return (
        _0x1dc60f.setOutlines(_0x518df6.unitId, _0x518df6.subUnitId, _0xd94125),
        true
      );
    },
  };
function Je(_0x487caf, _0x6fbf59) {
  switch (_0x6fbf59.type) {
    case "insert":
      return _0x6fbf59.restoreOutlines
        ? Ye(_0x487caf, _0x6fbf59)
        : D(_0x487caf, _0x6fbf59);
    case "delete":
      return O(_0x487caf, _0x6fbf59);
    case "move":
      return k(_0x487caf, _0x6fbf59);
  }
}
function Ye(_0x33e8c9, _0x44fe89) {
  return [
    ..._0x33e8c9.filter(
      (_0x37ac85) =>
        _0x37ac85.unitId !== _0x44fe89.unitId ||
        _0x37ac85.subUnitId !== _0x44fe89.subUnitId ||
        _0x37ac85.axis !== _0x44fe89.axis,
    ),
    ..._0x44fe89.restoreOutlines,
  ];
}
const W = "SHEET_OUTLINE_PLUGIN";
var Xe = "@univerjs-pro/sheets-outline",
  Ze = "1.0.0-insiders.20260907-70fc579";
const Qe = {};
function G(_0x202710, _0x4c3dbb) {
  return function (_0x1c52bb, _0xd9a228) {
    _0x4c3dbb(_0x1c52bb, _0xd9a228, _0x202710);
  };
}
function K(_0x3e327d, _0x1105f9, _0x2c4142, _0x378a87) {
  var _0x139c13 = arguments.length,
    _0x79c14d =
      _0x139c13 < 3
        ? _0x1105f9
        : _0x378a87 === null
          ? (_0x378a87 = Object.getOwnPropertyDescriptor(_0x1105f9, _0x2c4142))
          : _0x378a87,
    _0x1f5a74;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x79c14d = Reflect.decorate(_0x3e327d, _0x1105f9, _0x2c4142, _0x378a87);
  else {
    for (var _0x1ab18b = _0x3e327d.length - 1; _0x1ab18b >= 0; _0x1ab18b--)
      (_0x1f5a74 = _0x3e327d[_0x1ab18b]) &&
        (_0x79c14d =
          (_0x139c13 < 3
            ? _0x1f5a74(_0x79c14d)
            : _0x139c13 > 3
              ? _0x1f5a74(_0x1105f9, _0x2c4142, _0x79c14d)
              : _0x1f5a74(_0x1105f9, _0x2c4142)) || _0x79c14d);
  }
  return (
    _0x139c13 > 3 &&
      _0x79c14d &&
      Object.defineProperty(_0x1105f9, _0x2c4142, _0x79c14d),
    _0x79c14d
  );
}
const q = { redos: [], undos: [], preRedos: [], preUndos: [] };
let J = class extends _0x4f218d {
  constructor(_0x1047b3, _0xc50e8e, _0x3f1e20, _0x1e8bfa) {
    (super(),
      (this._univerInstanceService = _0x1047b3),
      (this._sheetInterceptorService = _0xc50e8e),
      (this._sheetsOutlineModel = _0x3f1e20),
      (this._sheetsOutlineErrorService = _0x1e8bfa),
      this._initCommandInterceptor());
  }
  _initCommandInterceptor() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x35c0c0) =>
          $e(
            _0x35c0c0,
            (_0x3fdd22, _0x3bd54f) =>
              this._sheetsOutlineModel["getOutlines"](_0x3fdd22, _0x3bd54f),
            this._getCommandScope(_0x35c0c0.params),
            (_0x4f9cf7) => this._sheetsOutlineErrorService["emit"](_0x4f9cf7),
          ),
      }),
    );
  }
  _getCommandScope(_0x198e24) {
    let _0x115094 = _0x198e24,
      _0x1f6e38 =
        _0x115094 != null && _0x115094.unitId
          ? this._univerInstanceService["getUnit"](
              _0x115094.unitId,
              _0x4df1ea.UNIVER_SHEET,
            )
          : this._univerInstanceService["getCurrentUnitOfType"](
              _0x4df1ea.UNIVER_SHEET,
            );
    if (!_0x1f6e38) return;
    let _0x3f6f3a =
      _0x115094 != null && _0x115094.subUnitId
        ? _0x1f6e38.getSheetBySheetId(_0x115094.subUnitId)
        : _0x1f6e38.getActiveSheet();
    if (_0x3f6f3a)
      return {
        unitId: _0x1f6e38.getUnitId(),
        subUnitId: _0x3f6f3a.getSheetId(),
      };
  }
};
J = K(
  [
    G(0, _0x1b81a9),
    G(1, _0x24059e(_0x4c516f)),
    G(2, _0x24059e(P)),
    G(3, _0x24059e(F)),
  ],
  J,
);
function $e(_0x29ddbb, _0x15869e, _0x3b8d55, _0x18b801) {
  let _0x5f4462 = tt(_0x29ddbb, _0x3b8d55);
  if (!_0x5f4462) return Z();
  let _0x1d30b5 = _0x15869e(_0x5f4462.unitId, _0x5f4462.subUnitId);
  if (!_0x1d30b5.some((_0x525ab2) => _0x525ab2.axis === _0x5f4462.axis))
    return Z();
  et(_0x1d30b5, _0x5f4462, _0x29ddbb.id, _0x18b801);
  let _0x2d4fbe = it(_0x5f4462, _0x1d30b5);
  return {
    redos: [{ id: U.id, params: _0x5f4462 }],
    undos: [{ id: U.id, params: _0x2d4fbe }],
    preRedos: [],
    preUndos: [],
  };
}
function et(_0x3b7e02, _0x4b69b4, _0x1ee833, _0x5b96c4) {
  try {
    switch (_0x4b69b4.type) {
      case "insert":
        D(_0x3b7e02, _0x4b69b4);
        break;
      case "delete":
        O(_0x3b7e02, _0x4b69b4);
        break;
      case "move":
        k(_0x3b7e02, _0x4b69b4);
        break;
    }
  } catch (_0x387a4b) {
    throw (
      _0x5b96c4 == null ||
        _0x5b96c4({
          reason: ye(_0x387a4b),
          commandId: _0x1ee833,
          unitId: _0x4b69b4.unitId,
          subUnitId: _0x4b69b4.subUnitId,
          axis: _0x4b69b4.axis,
          outlineId: be(_0x387a4b),
        }),
      new _0x3e93d1(
        _0x387a4b instanceof Error
          ? _0x387a4b.message
          : "Invalid\x20dimension\x20outline\x20mutation",
      )
    );
  }
}
function tt(_0x57d767, _0x16b8c5) {
  switch (_0x57d767.id) {
    case _0x2e74cd.id:
      return Y(_0x57d767.params, "row", _0x16b8c5);
    case _0x5b3c5e.id:
      return Y(_0x57d767.params, "column", _0x16b8c5);
    case _0x5cefe1.id:
      return nt(_0x57d767.params, "row", _0x16b8c5);
    case _0x27301e.id:
      return nt(_0x57d767.params, "column", _0x16b8c5);
    case _0x40de3b.id:
      return rt(_0x57d767.params, "row", _0x16b8c5);
    case _0x589973.id:
      return rt(_0x57d767.params, "column", _0x16b8c5);
    default:
      return null;
  }
}
function Y(_0x1ad71b, _0x20a82a, _0x333990) {
  let _0x5086ad = X(_0x1ad71b, _0x333990);
  if (!(_0x1ad71b != null && _0x1ad71b.range) || !_0x5086ad) return null;
  let _0x1ca5ed =
      _0x20a82a === "row"
        ? _0x1ad71b.range["startRow"]
        : _0x1ad71b.range["startColumn"],
    _0x35f03b =
      _0x20a82a === "row"
        ? _0x1ad71b.range["endRow"]
        : _0x1ad71b.range["endColumn"];
  return {
    ..._0x5086ad,
    axis: _0x20a82a,
    type: "insert",
    index: _0x1ca5ed,
    count: _0x35f03b - _0x1ca5ed + 1,
  };
}
function nt(_0x3a7e3f, _0x3f79bc, _0xeafe85) {
  let _0x1b9b85 = X(_0x3a7e3f, _0xeafe85);
  if (!(_0x3a7e3f != null && _0x3a7e3f.range) || !_0x1b9b85) return null;
  let _0x1c4149 =
      _0x3f79bc === "row"
        ? _0x3a7e3f.range["startRow"]
        : _0x3a7e3f.range["startColumn"],
    _0x113bdc =
      _0x3f79bc === "row"
        ? _0x3a7e3f.range["endRow"]
        : _0x3a7e3f.range["endColumn"];
  return {
    ..._0x1b9b85,
    axis: _0x3f79bc,
    type: "delete",
    start: _0x1c4149,
    end: _0x113bdc,
  };
}
function rt(_0x381a58, _0x41f76b, _0x21eedb) {
  let _0x3dd0a4 = X(_0x381a58, _0x21eedb);
  if (
    !(_0x381a58 != null && _0x381a58.fromRange) ||
    !_0x381a58.toRange ||
    !_0x3dd0a4
  )
    return null;
  let _0x273ce2 =
      _0x41f76b === "row"
        ? _0x381a58.fromRange["startRow"]
        : _0x381a58.fromRange["startColumn"],
    _0x33c65d =
      _0x41f76b === "row"
        ? _0x381a58.fromRange["endRow"]
        : _0x381a58.fromRange["endColumn"],
    _0x1e9893 =
      _0x41f76b === "row"
        ? _0x381a58.toRange["startRow"]
        : _0x381a58.toRange["startColumn"];
  return {
    ..._0x3dd0a4,
    axis: _0x41f76b,
    type: "move",
    sourceStart: _0x273ce2,
    sourceEnd: _0x33c65d,
    destinationIndex: _0x1e9893,
  };
}
function it(_0x34cc6d, _0x4463b2) {
  switch (_0x34cc6d.type) {
    case "insert":
      return {
        unitId: _0x34cc6d.unitId,
        subUnitId: _0x34cc6d.subUnitId,
        axis: _0x34cc6d.axis,
        type: "delete",
        start: _0x34cc6d.index,
        end: _0x34cc6d.index + _0x34cc6d.count - 1,
      };
    case "delete":
      return {
        unitId: _0x34cc6d.unitId,
        subUnitId: _0x34cc6d.subUnitId,
        axis: _0x34cc6d.axis,
        type: "insert",
        index: _0x34cc6d.start,
        count: _0x34cc6d.end - _0x34cc6d.start + 1,
        restoreOutlines: _0x4463b2.filter(
          (_0x487772) =>
            _0x487772.unitId === _0x34cc6d.unitId &&
            _0x487772.subUnitId === _0x34cc6d.subUnitId &&
            _0x487772.axis === _0x34cc6d.axis,
        ),
      };
    case "move":
      return at(_0x34cc6d);
  }
}
function at(_0x52c17b) {
  let _0x28dd75 = _0x52c17b.sourceEnd - _0x52c17b.sourceStart + 1;
  return _0x52c17b.destinationIndex >= _0x52c17b.sourceStart &&
    _0x52c17b.destinationIndex <= _0x52c17b.sourceEnd + 1
    ? { ..._0x52c17b }
    : _0x52c17b.destinationIndex > _0x52c17b.sourceEnd + 1
      ? {
          ..._0x52c17b,
          sourceStart: _0x52c17b.destinationIndex - _0x28dd75,
          sourceEnd: _0x52c17b.destinationIndex - 1,
          destinationIndex: _0x52c17b.sourceStart,
        }
      : {
          ..._0x52c17b,
          sourceStart: _0x52c17b.destinationIndex,
          sourceEnd: _0x52c17b.destinationIndex + _0x28dd75 - 1,
          destinationIndex: _0x52c17b.sourceEnd + 1,
        };
}
function X(_0x36db3a, _0x189b6c) {
  let _0x13df62 =
      (_0x36db3a == null ? undefined : _0x36db3a.unitId) ??
      (_0x189b6c == null ? undefined : _0x189b6c.unitId),
    _0x30655d =
      (_0x36db3a == null ? undefined : _0x36db3a.subUnitId) ??
      (_0x189b6c == null ? undefined : _0x189b6c.subUnitId);
  return _0x13df62 && _0x30655d
    ? { unitId: _0x13df62, subUnitId: _0x30655d }
    : null;
}
function Z() {
  return {
    redos: [...q.redos],
    undos: [...q.undos],
    preRedos: [...(q.preRedos ?? [])],
    preUndos: [...(q.preUndos ?? [])],
  };
}
let Q = class extends _0x4f218d {
  constructor(_0x157958, _0x12b203) {
    (super(),
      (this._resourceManagerService = _0x157958),
      (this._sheetsOutlineModel = _0x12b203),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: W,
        businesses: [_0x4df1ea.UNIVER_SHEET],
        toJson: (_0x4e0b34) =>
          JSON.stringify(this._sheetsOutlineModel["serialize"](_0x4e0b34)),
        parseJson: (_0x17cb45) => JSON.parse(_0x17cb45),
        onLoad: (_0x21c2ff, _0x377943) =>
          this._sheetsOutlineModel["deserialize"](_0x21c2ff, _0x377943),
        onUnLoad: (_0x114256) =>
          this._sheetsOutlineModel["removeUnit"](_0x114256),
      }),
    );
  }
};
Q = K([G(0, _0x19d78c), G(1, _0x24059e(P))], Q);
let $ = class extends _0xcd8562 {
  constructor(_0x3f6305 = Qe, _0x45cac4, _0x5df41e, _0x196119) {
    (super(),
      (this._config = _0x3f6305),
      (this._injector = _0x45cac4),
      (this._commandService = _0x5df41e),
      (this._configService = _0x196119));
    let { ..._0x5eb8cc } = _0x33c806({}, Qe, this._config);
    this._configService["setConfig"]("sheets-outline.config", _0x5eb8cc);
  }
  onStarting() {
    (this._injector["add"]([P]),
      this._injector["add"]([F]),
      this._injector["add"]([Q]),
      this._injector["add"]([J]),
      this._initRegisterCommand(),
      this._injector["get"](P),
      this._injector["get"](F),
      this._injector["get"](Q),
      this._injector["get"](J));
  }
  _initRegisterCommand() {
    ([z, ze, qe, V].forEach((_0x5581fd) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x5581fd));
    }),
      [I, L, H, B, U].forEach((_0x13cbd8) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x13cbd8));
      }));
  }
};
(N($, "pluginName", W),
  N($, "packageName", Xe),
  N($, "version", Ze),
  N($, "type", _0x4df1ea.UNIVER_SHEET),
  ($ = K(
    [
      _0x1ff602(_0x10cfbf, _0x4bb6da),
      G(1, _0x24059e(_0x1da809)),
      G(2, _0x2a0ab5),
      G(3, _0x485bdd),
    ],
    $,
  )));
export {
  z as AddDimensionOutlineCommand,
  I as AddDimensionOutlineMutation,
  V as ClearDimensionOutlinesCommand,
  B as ClearDimensionOutlinesMutation,
  _e as DimensionOutlineAxis,
  ve as DimensionOutlineErrorReason,
  ze as RemoveDimensionOutlineCommand,
  L as RemoveDimensionOutlineMutation,
  W as SHEET_OUTLINE_PLUGIN,
  qe as SetDimensionOutlineCollapsedCommand,
  H as SetDimensionOutlineCollapsedMutation,
  F as SheetsOutlineErrorService,
  P as SheetsOutlineModel,
  U as TransformDimensionOutlinesMutation,
  $ as UniverSheetsOutlinePlugin,
  T as buildDimensionOutlineTree,
  E as canAddDimensionOutline,
  Ie as getDimensionOutlineViewPermission$,
  R as hasDimensionOutlineViewPermission,
  O as transformOutlinesByDelete,
  D as transformOutlinesByInsert,
  k as transformOutlinesByMove,
};
