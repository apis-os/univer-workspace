Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core");
const r = 0.0001;
function i(_0x28b11f) {
  return { x: _0x28b11f.x, y: _0x28b11f.y };
}
function a(_0x185472) {
  return {
    ..._0x185472,
    in: _0x185472.in ? i(_0x185472.in) : undefined,
    out: _0x185472.out ? i(_0x185472.out) : undefined,
  };
}
function o(_0x5e35fe) {
  return {
    kind: "pen",
    closed: _0x5e35fe.closed,
    anchors: _0x5e35fe.anchors["map"](a),
  };
}
function s(_0x2c5f6f, _0x36fba3, _0x4507a5) {
  return {
    x: _0x2c5f6f.x + (_0x36fba3.x - _0x2c5f6f.x) * _0x4507a5,
    y: _0x2c5f6f.y + (_0x36fba3.y - _0x2c5f6f.y) * _0x4507a5,
  };
}
function c(_0x40d61a, _0x249926) {
  return Math.hypot(_0x40d61a.x - _0x249926.x, _0x40d61a.y - _0x249926.y);
}
function l(_0x162d7f) {
  let _0x54931d = Math.hypot(_0x162d7f.x, _0x162d7f.y);
  return _0x54931d < r
    ? { x: 1, y: 0 }
    : { x: _0x162d7f.x / _0x54931d, y: _0x162d7f.y / _0x54931d };
}
function u(_0x571751, _0x41dad9, _0x56d7e9 = c(_0x571751, _0x41dad9)) {
  let _0x274ac1 = l({
    x: _0x571751.x - _0x41dad9.x,
    y: _0x571751.y - _0x41dad9.y,
  });
  return {
    x: _0x571751.x + _0x274ac1.x * _0x56d7e9,
    y: _0x571751.y + _0x274ac1.y * _0x56d7e9,
  };
}
function d(_0x3df234, _0x342431) {
  let { anchors: _0x3c16fd } = _0x3df234;
  return _0x3c16fd.length < 2 || _0x342431 < 0
    ? null
    : _0x342431 < _0x3c16fd.length - 1
      ? {
          startIndex: _0x342431,
          endIndex: _0x342431 + 1,
          start: _0x3c16fd[_0x342431],
          end: _0x3c16fd[_0x342431 + 1],
        }
      : _0x3df234.closed && _0x342431 === _0x3c16fd.length - 1
        ? {
            startIndex: _0x3c16fd.length - 1,
            endIndex: 0,
            start: _0x3c16fd[_0x3c16fd.length - 1],
            end: _0x3c16fd[0],
          }
        : null;
}
function f(_0x180dca, _0x5b4df3) {
  let _0x3e566a = d(_0x180dca, _0x5b4df3);
  return _0x3e566a
    ? [
        _0x3e566a.start,
        _0x3e566a.start["out"] ?? _0x3e566a.start,
        _0x3e566a.end["in"] ?? _0x3e566a.end,
        _0x3e566a.end,
      ]
    : null;
}
function ee(_0x4db178, _0x132c10) {
  return _0x132c10 === "anchor" ? _0x4db178 : (_0x4db178[_0x132c10] ?? null);
}
function p(_0x284f1c, _0x308c0f, _0x8f17f1) {
  return _0x8f17f1 === "anchor" || _0x284f1c.closed
    ? true
    : _0x8f17f1 === "in"
      ? _0x308c0f > 0
      : _0x308c0f < _0x284f1c.anchors["length"] - 1;
}
function m(_0x386b85, _0x12b002) {
  let [_0x2b29df, _0x279096, _0x475a37, _0x21fae9] = _0x386b85,
    _0x388c9c = s(_0x2b29df, _0x279096, _0x12b002),
    _0x3a7079 = s(_0x279096, _0x475a37, _0x12b002),
    _0xfe2121 = s(_0x475a37, _0x21fae9, _0x12b002);
  return s(
    s(_0x388c9c, _0x3a7079, _0x12b002),
    s(_0x3a7079, _0xfe2121, _0x12b002),
    _0x12b002,
  );
}
function h(_0xae77f4, _0x32ce18) {
  let [_0x2c2da5, _0x2b9f11, _0x2a315c, _0x69462f] = _0xae77f4,
    _0x3b53da = s(_0x2c2da5, _0x2b9f11, _0x32ce18),
    _0x393b34 = s(_0x2b9f11, _0x2a315c, _0x32ce18),
    _0x4e74ee = s(_0x2a315c, _0x69462f, _0x32ce18),
    _0x31118b = s(_0x3b53da, _0x393b34, _0x32ce18),
    _0x42156e = s(_0x393b34, _0x4e74ee, _0x32ce18),
    _0x4e6f6b = s(_0x31118b, _0x42156e, _0x32ce18);
  return {
    left: [_0x2c2da5, _0x3b53da, _0x31118b, _0x4e6f6b],
    right: [_0x4e6f6b, _0x42156e, _0x4e74ee, _0x69462f],
  };
}
function g(_0x32dee2, _0x106c2e, _0x9ce005) {
  let _0x258079 = _0x9ce005.x - _0x106c2e.x,
    _0x3beb40 = _0x9ce005.y - _0x106c2e.y,
    _0x15d9cd = _0x258079 * _0x258079 + _0x3beb40 * _0x3beb40,
    _0x3b6049 =
      _0x15d9cd <= r
        ? 0
        : Math.max(
            0,
            Math.min(
              1,
              ((_0x32dee2.x - _0x106c2e.x) * _0x258079 +
                (_0x32dee2.y - _0x106c2e.y) * _0x3beb40) /
                _0x15d9cd,
            ),
          ),
    _0x1d51fb = {
      x: _0x106c2e.x + _0x258079 * _0x3b6049,
      y: _0x106c2e.y + _0x3beb40 * _0x3b6049,
    };
  return {
    point: _0x1d51fb,
    ratio: _0x3b6049,
    distance: c(_0x32dee2, _0x1d51fb),
  };
}
function te(_0x5b0d2d, _0x417858, _0x5105f4) {
  return g(_0x5b0d2d, _0x417858, _0x5105f4).distance ** 2;
}
function _(_0x12d847, _0x283216) {
  if (_0x12d847.length <= 2) return _0x12d847.map(i);
  let _0x311535 = 0,
    _0x4e93d8 = 0,
    _0x47c139 = _0x12d847[0],
    _0x3c1ffe = _0x12d847[_0x12d847.length - 1],
    _0x17c6be = _0x283216 * _0x283216;
  for (let _0x2d281c = 1; _0x2d281c < _0x12d847.length - 1; _0x2d281c++) {
    let _0x491b6f = te(_0x12d847[_0x2d281c], _0x47c139, _0x3c1ffe);
    _0x491b6f > _0x311535 && ((_0x311535 = _0x491b6f), (_0x4e93d8 = _0x2d281c));
  }
  if (_0x311535 <= _0x17c6be) return [i(_0x47c139), i(_0x3c1ffe)];
  let _0x144fbe = _(_0x12d847.slice(0, _0x4e93d8 + 1), _0x283216),
    _0xccafa8 = _(_0x12d847.slice(_0x4e93d8), _0x283216);
  return [..._0x144fbe.slice(0, -1), ..._0xccafa8];
}
function ne(_0x5c3226, _0x25cdc6) {
  let _0x242d45 = _0x5c3226[_0x25cdc6],
    _0x5b501c = _0x5c3226[_0x25cdc6 + 1],
    _0x4f6236 = _0x5c3226[_0x25cdc6 - 1] ?? _0x242d45;
  return {
    x: _0x242d45.x + (_0x5b501c.x - _0x4f6236.x) / 6,
    y: _0x242d45.y + (_0x5b501c.y - _0x4f6236.y) / 6,
  };
}
function v(_0x141059, _0x387014) {
  let _0x3ed7b9 = _0x141059[_0x387014],
    _0x479e8d = _0x141059[_0x387014 - 1],
    _0x13a4ef = _0x141059[_0x387014 + 1] ?? _0x3ed7b9;
  return {
    x: _0x3ed7b9.x - (_0x13a4ef.x - _0x479e8d.x) / 6,
    y: _0x3ed7b9.y - (_0x13a4ef.y - _0x479e8d.y) / 6,
  };
}
function y(_0x116151, _0x5395c9) {
  let _0x13c5ad = _0x116151.anchors[_0x5395c9],
    _0xbe0b08 =
      _0x116151.anchors[_0x5395c9 - 1] ??
      (_0x116151.closed
        ? _0x116151.anchors[_0x116151.anchors["length"] - 1]
        : null),
    _0x53c7ac =
      _0x116151.anchors[_0x5395c9 + 1] ??
      (_0x116151.closed ? _0x116151.anchors[0] : null),
    _0x4ed1c3 =
      _0xbe0b08 && _0x53c7ac
        ? l({ x: _0x53c7ac.x - _0xbe0b08.x, y: _0x53c7ac.y - _0xbe0b08.y })
        : _0x53c7ac
          ? l({ x: _0x53c7ac.x - _0x13c5ad.x, y: _0x53c7ac.y - _0x13c5ad.y })
          : _0xbe0b08
            ? l({ x: _0x13c5ad.x - _0xbe0b08.x, y: _0x13c5ad.y - _0xbe0b08.y })
            : { x: 1, y: 0 },
    _0x5e4913 =
      _0xbe0b08 && _0x53c7ac ? Math.max(50, c(_0xbe0b08, _0x53c7ac) / 4) : 50;
  return {
    in: {
      x: _0x13c5ad.x - _0x4ed1c3.x * _0x5e4913,
      y: _0x13c5ad.y - _0x4ed1c3.y * _0x5e4913,
    },
    out: {
      x: _0x13c5ad.x + _0x4ed1c3.x * _0x5e4913,
      y: _0x13c5ad.y + _0x4ed1c3.y * _0x5e4913,
    },
  };
}
function b(_0x4aa50, _0x2f0d67) {
  let _0x456bad = _0x4aa50[_0x2f0d67],
    _0x4ee741 = _0x2f0d67 === "in" ? "out" : "in",
    _0x3a66ea = _0x4aa50[_0x4ee741];
  if (_0x456bad) {
    if (_0x4aa50.pointType === "symmetric") {
      _0x4aa50[_0x4ee741] = u(_0x4aa50, _0x456bad);
      return;
    }
    _0x4aa50.pointType === "smooth" &&
      (_0x4aa50[_0x4ee741] = u(
        _0x4aa50,
        _0x456bad,
        _0x3a66ea ? c(_0x4aa50, _0x3a66ea) : c(_0x4aa50, _0x456bad),
      ));
  }
}
function x(_0x2282ea, _0x188acd) {
  let _0x19c08a = o(_0x2282ea);
  return (
    !_0x188acd ||
      _0x19c08a.closed ||
      _0x19c08a.anchors["length"] === 0 ||
      _0x19c08a.anchors["push"]({
        id: "__ink-preview-anchor__",
        x: _0x188acd.x,
        y: _0x188acd.y,
        pointType: "corner",
      }),
    _0x19c08a
  );
}
function re(_0x34d23c, _0x304da5 = {}) {
  let _0x13d6f0 = Math.max(
      0,
      _0x304da5.tolerance ?? Math.max(4, _0x34d23c.width * 0.35),
    ),
    _0x4497db =
      _0x304da5.createId ?? ((_0x35758d) => "ink-centerline-" + _0x35758d),
    _0x515405 = _(_0x34d23c.points, _0x13d6f0),
    _0x32f7cd = _0x515405.map((_0x992f3c, _0x1cba6b) => ({
      id: _0x4497db(_0x1cba6b),
      x: _0x992f3c.x,
      y: _0x992f3c.y,
      pointType: "free",
    }));
  for (let _0x5a0a1d = 0; _0x5a0a1d < _0x32f7cd.length - 1; _0x5a0a1d++)
    ((_0x32f7cd[_0x5a0a1d].out = ne(_0x515405, _0x5a0a1d)),
      (_0x32f7cd[_0x5a0a1d + 1].in = v(_0x515405, _0x5a0a1d + 1)));
  return { kind: "pen", closed: false, anchors: _0x32f7cd };
}
function ie(_0x4a962c, _0x4e849d, _0x57f8a6) {
  let _0x480482 = null,
    _0x2f6c9f = ["anchor", "in", "out"];
  return (
    _0x4a962c.anchors["forEach"]((_0x3e6f85, _0x552f23) => {
      _0x2f6c9f.forEach((_0x47251f) => {
        if (!p(_0x4a962c, _0x552f23, _0x47251f)) return;
        let _0x25b337 = ee(_0x3e6f85, _0x47251f);
        if (!_0x25b337) return;
        let _0x248931 = c(_0x4e849d, _0x25b337);
        _0x248931 > _0x57f8a6 ||
          (_0x480482 && _0x248931 >= _0x480482.distance) ||
          (_0x480482 = {
            handle: { kind: _0x47251f, anchorId: _0x3e6f85.id },
            point: i(_0x25b337),
            distance: _0x248931,
          });
      });
    }),
    _0x480482
  );
}
function S(_0x3d6970, _0x5302fd, _0x2ae486) {
  let _0x4a0d0c = null,
    _0x524eb3 = _0x3d6970.closed
      ? _0x3d6970.anchors["length"]
      : Math.max(0, _0x3d6970.anchors["length"] - 1);
  for (let _0x2f3408 = 0; _0x2f3408 < _0x524eb3; _0x2f3408++) {
    let _0x558ce0 = f(_0x3d6970, _0x2f3408);
    if (!_0x558ce0) continue;
    let _0x444fd = m(_0x558ce0, 0);
    for (let _0x43f7a7 = 1; _0x43f7a7 <= 32; _0x43f7a7++) {
      let _0x25cf02 = m(_0x558ce0, _0x43f7a7 / 32),
        _0x18b639 = g(_0x5302fd, _0x444fd, _0x25cf02),
        _0x483325 = (_0x43f7a7 - 1 + _0x18b639.ratio) / 32;
      ((!_0x4a0d0c || _0x18b639.distance < _0x4a0d0c.distance) &&
        (_0x4a0d0c = {
          segmentIndex: _0x2f3408,
          t: _0x483325,
          point: _0x18b639.point,
          distance: _0x18b639.distance,
        }),
        (_0x444fd = _0x25cf02));
    }
  }
  return _0x4a0d0c && _0x4a0d0c.distance <= _0x2ae486 ? _0x4a0d0c : null;
}
function C(_0x2e80ce, _0x446cd1, _0x13bffd) {
  let _0xcc2f29 = o(_0x2e80ce),
    _0x2ba620 = d(_0xcc2f29, _0x446cd1.segmentIndex),
    _0x319e54 = f(_0xcc2f29, _0x446cd1.segmentIndex);
  if (!_0x2ba620 || !_0x319e54) return _0xcc2f29;
  let _0x25a566 = h(_0x319e54, Math.max(0, Math.min(1, _0x446cd1.t))),
    _0x40c66a = {
      id: _0x13bffd(),
      x: _0x25a566.left[3].x,
      y: _0x25a566.left[3].y,
      in: i(_0x25a566.left[2]),
      out: i(_0x25a566.right[1]),
      pointType: "free",
    };
  return (
    (_0xcc2f29.anchors[_0x2ba620.startIndex].out = i(_0x25a566.left[1])),
    (_0xcc2f29.anchors[_0x2ba620.endIndex].in = i(_0x25a566.right[2])),
    _0xcc2f29.anchors["splice"](_0x2ba620.startIndex + 1, 0, _0x40c66a),
    _0xcc2f29
  );
}
function w(_0x475166, _0x4161cd) {
  let _0x2ccd77 = o(_0x475166);
  return (
    (_0x2ccd77.anchors = _0x2ccd77.anchors["filter"](
      (_0x46440c) => _0x46440c.id !== _0x4161cd,
    )),
    _0x2ccd77.closed &&
      _0x2ccd77.anchors["length"] < 3 &&
      (_0x2ccd77.closed = false),
    _0x2ccd77
  );
}
function T(_0x536ea5, _0x4617dd, _0x4453c8) {
  let _0x5da3d4 = o(_0x536ea5),
    _0x13b0d9 = _0x5da3d4.anchors["findIndex"](
      (_0x53bd90) => _0x53bd90.id === _0x4617dd,
    ),
    _0x3ea1aa = _0x5da3d4.anchors[_0x13b0d9];
  if (!_0x3ea1aa) return _0x5da3d4;
  if (((_0x3ea1aa.pointType = _0x4453c8), _0x4453c8 === "corner"))
    return (delete _0x3ea1aa.in, delete _0x3ea1aa.out, _0x5da3d4);
  let _0x49dce6 = y(_0x5da3d4, _0x13b0d9);
  if (
    ((_0x3ea1aa.in = _0x3ea1aa.in ? i(_0x3ea1aa.in) : _0x49dce6.in),
    (_0x3ea1aa.out = _0x3ea1aa.out ? i(_0x3ea1aa.out) : _0x49dce6.out),
    _0x4453c8 === "symmetric")
  ) {
    let _0x24f1d3 = Math.max(
        c(_0x3ea1aa, _0x3ea1aa.in),
        c(_0x3ea1aa, _0x3ea1aa.out),
        50,
      ),
      _0x1965b8 = l({
        x: _0x3ea1aa.out["x"] - _0x3ea1aa.x,
        y: _0x3ea1aa.out["y"] - _0x3ea1aa.y,
      });
    ((_0x3ea1aa.out = {
      x: _0x3ea1aa.x + _0x1965b8.x * _0x24f1d3,
      y: _0x3ea1aa.y + _0x1965b8.y * _0x24f1d3,
    }),
      (_0x3ea1aa.in = {
        x: _0x3ea1aa.x - _0x1965b8.x * _0x24f1d3,
        y: _0x3ea1aa.y - _0x1965b8.y * _0x24f1d3,
      }));
  } else _0x4453c8 === "smooth" && b(_0x3ea1aa, "out");
  return _0x5da3d4;
}
function E(_0x155d35, _0x49fb4a) {
  let _0x33d2e7 = _0x155d35.anchors["find"](
      (_0x46dcbc) => _0x46dcbc.id === _0x49fb4a,
    ),
    _0x2cac6e =
      (_0x33d2e7 == null ? undefined : _0x33d2e7.pointType) ?? "corner";
  return T(
    _0x155d35,
    _0x49fb4a,
    _0x2cac6e === "corner"
      ? "smooth"
      : _0x2cac6e === "smooth"
        ? "symmetric"
        : _0x2cac6e === "symmetric"
          ? "free"
          : "corner",
  );
}
function ae(_0x8da6e2, _0x29ef94, _0x3d93a1) {
  let _0x4f23e5 = o(_0x8da6e2),
    _0xe6c385 = _0x4f23e5.anchors["find"](
      (_0x21384b) => _0x21384b.id === _0x29ef94.anchorId,
    );
  if (!_0xe6c385) return _0x4f23e5;
  if (_0x29ef94.kind === "anchor") {
    let _0x288874 = {
      x: _0x3d93a1.x - _0xe6c385.x,
      y: _0x3d93a1.y - _0xe6c385.y,
    };
    return (
      (_0xe6c385.x = _0x3d93a1.x),
      (_0xe6c385.y = _0x3d93a1.y),
      (_0xe6c385.in &&= {
        x: _0xe6c385.in["x"] + _0x288874.x,
        y: _0xe6c385.in["y"] + _0x288874.y,
      }),
      (_0xe6c385.out &&= {
        x: _0xe6c385.out["x"] + _0x288874.x,
        y: _0xe6c385.out["y"] + _0x288874.y,
      }),
      _0x4f23e5
    );
  }
  return (
    (_0xe6c385[_0x29ef94.kind] = i(_0x3d93a1)),
    _0xe6c385.pointType === "corner" && (_0xe6c385.pointType = "free"),
    b(_0xe6c385, _0x29ef94.kind),
    _0x4f23e5
  );
}
const D = 1e-9;
function O(_0x5a176b) {
  let _0x5558b2 = Math.round(_0x5a176b * 10000) / 10000;
  return Object.is(_0x5558b2, -0) ? "0" : String(_0x5558b2);
}
function k(_0x8058d3) {
  return O(_0x8058d3.x) + "\x20" + O(_0x8058d3.y);
}
function A(_0x6797d1, _0xbff70a) {
  return { x: _0x6797d1.x - _0xbff70a.x, y: _0x6797d1.y - _0xbff70a.y };
}
function j(_0x444554, _0x1e0015, _0x5549c5, _0x3505d3, _0x56c63a) {
  let _0x133fd8 = 1 - _0x56c63a;
  return {
    x:
      _0x133fd8 * _0x133fd8 * _0x133fd8 * _0x444554.x +
      3 * _0x133fd8 * _0x133fd8 * _0x56c63a * _0x1e0015.x +
      3 * _0x133fd8 * _0x56c63a * _0x56c63a * _0x5549c5.x +
      _0x56c63a * _0x56c63a * _0x56c63a * _0x3505d3.x,
    y:
      _0x133fd8 * _0x133fd8 * _0x133fd8 * _0x444554.y +
      3 * _0x133fd8 * _0x133fd8 * _0x56c63a * _0x1e0015.y +
      3 * _0x133fd8 * _0x56c63a * _0x56c63a * _0x5549c5.y +
      _0x56c63a * _0x56c63a * _0x56c63a * _0x3505d3.y,
  };
}
function M(_0x318594, _0x1750a6, _0x1b5f1b, _0x480409) {
  let _0x3c6b65 = -_0x318594 + 3 * _0x1750a6 - 3 * _0x1b5f1b + _0x480409,
    _0x4db4d3 = 3 * _0x318594 - 6 * _0x1750a6 + 3 * _0x1b5f1b,
    _0xf9538a = -3 * _0x318594 + 3 * _0x1750a6,
    _0x11124a = [];
  if (Math.abs(_0x3c6b65) < D) {
    if (Math.abs(_0x4db4d3) < D) return _0x11124a;
    let _0x3c6a15 = -_0xf9538a / (2 * _0x4db4d3);
    return (
      _0x3c6a15 > 0 && _0x3c6a15 < 1 && _0x11124a.push(_0x3c6a15),
      _0x11124a
    );
  }
  let _0x16f765 = _0x4db4d3 * _0x4db4d3 - 3 * _0x3c6b65 * _0xf9538a;
  if (_0x16f765 < 0) return _0x11124a;
  let _0x29a662 = Math.sqrt(Math.max(0, _0x16f765)),
    _0x4f6ae9 = (-_0x4db4d3 + _0x29a662) / (3 * _0x3c6b65),
    _0x85cabb = (-_0x4db4d3 - _0x29a662) / (3 * _0x3c6b65);
  return (
    _0x4f6ae9 > 0 && _0x4f6ae9 < 1 && _0x11124a.push(_0x4f6ae9),
    _0x85cabb > 0 &&
      _0x85cabb < 1 &&
      Math.abs(_0x85cabb - _0x4f6ae9) > D &&
      _0x11124a.push(_0x85cabb),
    _0x11124a
  );
}
function N(_0x247f47, _0x27e4ba, _0x494e69, _0x59524b, _0x372f7a) {
  (_0x247f47.push(_0x27e4ba, _0x372f7a),
    new Set([
      ...M(_0x27e4ba.x, _0x494e69.x, _0x59524b.x, _0x372f7a.x),
      ...M(_0x27e4ba.y, _0x494e69.y, _0x59524b.y, _0x372f7a.y),
    ]).forEach((_0x455e49) => {
      _0x247f47.push(j(_0x27e4ba, _0x494e69, _0x59524b, _0x372f7a, _0x455e49));
    }));
}
function P(_0x2f4499) {
  let _0x313301 = _0x2f4499.anchors;
  if (_0x313301.length <= 1) return _0x313301;
  let _0x33f644 = [];
  for (let _0x1e0c1a = 1; _0x1e0c1a < _0x313301.length; _0x1e0c1a++) {
    let _0x31f357 = _0x313301[_0x1e0c1a - 1],
      _0x5a701c = _0x313301[_0x1e0c1a];
    N(
      _0x33f644,
      _0x31f357,
      _0x31f357.out ?? _0x31f357,
      _0x5a701c.in ?? _0x5a701c,
      _0x5a701c,
    );
  }
  if (_0x2f4499.closed && _0x313301.length > 1) {
    let _0x3c3072 = _0x313301[_0x313301.length - 1],
      _0x272f44 = _0x313301[0];
    N(
      _0x33f644,
      _0x3c3072,
      _0x3c3072.out ?? _0x3c3072,
      _0x272f44.in ?? _0x272f44,
      _0x272f44,
    );
  }
  return _0x33f644;
}
function F(_0x192e4d) {
  let _0x1bfcae = _0x192e4d.points;
  if (_0x1bfcae.length <= 1) return _0x1bfcae;
  let _0xf4a049 = [];
  for (let _0x5a30bd = 0; _0x5a30bd < _0x1bfcae.length - 1; _0x5a30bd++) {
    let _0x19b736 = _0x1bfcae[_0x5a30bd],
      _0x2a39f8 = _0x1bfcae[_0x5a30bd + 1],
      _0x4153ed = _0x1bfcae[_0x5a30bd - 1] ?? _0x19b736,
      _0xc9a6f7 = _0x1bfcae[_0x5a30bd + 2] ?? _0x2a39f8;
    N(
      _0xf4a049,
      _0x19b736,
      {
        x: _0x19b736.x + (_0x2a39f8.x - _0x4153ed.x) / 6,
        y: _0x19b736.y + (_0x2a39f8.y - _0x4153ed.y) / 6,
      },
      {
        x: _0x2a39f8.x - (_0xc9a6f7.x - _0x19b736.x) / 6,
        y: _0x2a39f8.y - (_0xc9a6f7.y - _0x19b736.y) / 6,
      },
      _0x2a39f8,
    );
  }
  return _0xf4a049;
}
function I(_0x28fa31) {
  return _0x28fa31.kind === "pen" ? P(_0x28fa31) : F(_0x28fa31);
}
function L(_0x26ba3f) {
  let _0x213c88 = Math.round(_0x26ba3f * 10000) / 10000;
  return Object.is(_0x213c88, -0) ? 0 : _0x213c88;
}
function R(_0xd8366f) {
  let _0x29afff = I(_0xd8366f);
  if (_0x29afff.length === 0) return { left: 0, top: 0, width: 1, height: 1 };
  let _0x4f344c = Math.min(..._0x29afff.map((_0x1370ae) => _0x1370ae.x)),
    _0x1db7aa = Math.min(..._0x29afff.map((_0x1da91b) => _0x1da91b.y)),
    _0x3a6fc2 = Math.max(..._0x29afff.map((_0x3cdf11) => _0x3cdf11.x)),
    _0x1c31d9 = Math.max(..._0x29afff.map((_0xc9ea96) => _0xc9ea96.y));
  return {
    left: L(_0x4f344c),
    top: L(_0x1db7aa),
    width: L(Math.max(1, _0x3a6fc2 - _0x4f344c)),
    height: L(Math.max(1, _0x1c31d9 - _0x1db7aa)),
  };
}
function z(_0x5407e7, _0x263f2f) {
  let _0x55ff80 = _0x5407e7.anchors;
  if (_0x55ff80.length === 0) return "";
  let _0xb23fc1 = ["M\x20" + k(A(_0x55ff80[0], _0x263f2f))];
  for (let _0x370332 = 1; _0x370332 < _0x55ff80.length; _0x370332++) {
    let _0x4f426a = _0x55ff80[_0x370332 - 1],
      _0xf65cf9 = _0x55ff80[_0x370332],
      _0x215dae = _0x4f426a.out ?? _0x4f426a,
      _0x1c43a5 = _0xf65cf9.in ?? _0xf65cf9;
    _0xb23fc1.push(
      "C\x20" +
        k(A(_0x215dae, _0x263f2f)) +
        "\x20" +
        k(A(_0x1c43a5, _0x263f2f)) +
        "\x20" +
        k(A(_0xf65cf9, _0x263f2f)),
    );
  }
  if (_0x5407e7.closed && _0x55ff80.length > 1) {
    let _0x1b14b0 = _0x55ff80[_0x55ff80.length - 1],
      _0xdcc853 = _0x55ff80[0],
      _0x4237fd = _0x1b14b0.out ?? _0x1b14b0,
      _0x184d24 = _0xdcc853.in ?? _0xdcc853;
    (_0xb23fc1.push(
      "C\x20" +
        k(A(_0x4237fd, _0x263f2f)) +
        "\x20" +
        k(A(_0x184d24, _0x263f2f)) +
        "\x20" +
        k(A(_0xdcc853, _0x263f2f)),
    ),
      _0xb23fc1.push("Z"));
  }
  return _0xb23fc1.join("\x20");
}
function B(_0x2548e0, _0x5434e5) {
  let _0x100d98 = _0x2548e0.points["map"]((_0x14253a) =>
    A(_0x14253a, _0x5434e5),
  );
  if (_0x100d98.length === 0) return "";
  if (_0x100d98.length === 1) return "M\x20" + k(_0x100d98[0]);
  let _0x50183c = ["M\x20" + k(_0x100d98[0])];
  for (let _0x103303 = 0; _0x103303 < _0x100d98.length - 1; _0x103303++) {
    let _0x43e024 = _0x100d98[_0x103303],
      _0x5630fc = _0x100d98[_0x103303 + 1],
      _0x3dae07 = _0x100d98[_0x103303 - 1] ?? _0x43e024,
      _0x46428d = _0x100d98[_0x103303 + 2] ?? _0x5630fc,
      _0x1e3d50 = {
        x: _0x43e024.x + (_0x5630fc.x - _0x3dae07.x) / 6,
        y: _0x43e024.y + (_0x5630fc.y - _0x3dae07.y) / 6,
      },
      _0x5a785b = {
        x: _0x5630fc.x - (_0x46428d.x - _0x43e024.x) / 6,
        y: _0x5630fc.y - (_0x46428d.y - _0x43e024.y) / 6,
      };
    _0x50183c.push(
      "C\x20" + k(_0x1e3d50) + "\x20" + k(_0x5a785b) + "\x20" + k(_0x5630fc),
    );
  }
  return _0x50183c.join("\x20");
}
function V(_0x487933, _0x87962f) {
  return _0x487933.kind === "pen"
    ? z(_0x487933, _0x87962f)
    : B(_0x487933, _0x87962f);
}
function H(_0x303f5b, _0x29d82c) {
  return _0x29d82c != null && _0x29d82c.color
    ? _0x29d82c.color
    : _0x303f5b.kind === "pen"
      ? "#f54a45"
      : _0x303f5b.color;
}
function U(_0x85bfc1, _0x1a7de1) {
  return (_0x1a7de1 == null ? undefined : _0x1a7de1.width) === undefined
    ? _0x85bfc1.kind === "pen"
      ? 2
      : _0x85bfc1.width
    : _0x1a7de1.width;
}
function W(_0x4b063f, _0x23be87) {
  return (_0x23be87 == null ? undefined : _0x23be87.opacity) === undefined
    ? _0x4b063f.kind === "pen"
      ? undefined
      : _0x4b063f.opacity
    : _0x23be87.opacity;
}
function oe(_0x2ea3c8, _0x3c2b94) {
  let _0xeee29c = R(_0x2ea3c8),
    _0x30b1e1 = V(_0x2ea3c8, { x: _0xeee29c.left, y: _0xeee29c.top }),
    _0x5e4a2a = _0x2ea3c8.kind === "pen" && _0x2ea3c8.closed,
    _0x925ab0 = _0x3c2b94 == null ? undefined : _0x3c2b94.fillColor;
  return {
    shapeType: e.ShapeTypeEnum["Rect"],
    isCustom: true,
    customGeometry: {
      rect: { l: 0, t: 0, r: "r", b: "b" },
      pathLst: [
        {
          w: _0xeee29c.width,
          h: _0xeee29c.height,
          fill: _0x5e4a2a ? "norm" : "none",
          stroke: true,
          data: _0x30b1e1,
          dataArray: K(_0x2ea3c8, { x: _0xeee29c.left, y: _0xeee29c.top }),
        },
      ],
    },
    fill:
      _0x5e4a2a && _0x925ab0
        ? { color: _0x925ab0, fillType: e.ShapeFillEnum["SolidFill"] }
        : { fillType: e.ShapeFillEnum["NoFill"] },
    stroke: {
      color: H(_0x2ea3c8, _0x3c2b94),
      width: U(_0x2ea3c8, _0x3c2b94),
      opacity: W(_0x2ea3c8, _0x3c2b94),
      lineStrokeType: e.ShapeLineTypeEnum["SolidLine"],
      capType: e.ShapeLineCapEnum["Round"],
      lineJoinType: e.ShapeLineJoinEnum["Round"],
    },
  };
}
function G(_0x7302b4, _0x5df49b) {
  return { x: _0x7302b4.x - _0x5df49b.x, y: _0x7302b4.y - _0x5df49b.y };
}
function K(_0x1cc6a6, _0x4e8de0) {
  if (_0x1cc6a6.kind === "pen") {
    let _0x2be0a4 = _0x1cc6a6.anchors;
    if (_0x2be0a4.length === 0) return [];
    let _0x1883e7 = G(_0x2be0a4[0], _0x4e8de0),
      _0x3ecddf = [{ command: "M", points: [_0x1883e7.x, _0x1883e7.y] }];
    for (let _0x2624dd = 1; _0x2624dd < _0x2be0a4.length; _0x2624dd++) {
      let _0x5fb81a = _0x2be0a4[_0x2624dd - 1],
        _0x27df6c = _0x2be0a4[_0x2624dd],
        _0x398f6e = G(_0x5fb81a.out ?? _0x5fb81a, _0x4e8de0),
        _0xf7f506 = G(_0x27df6c.in ?? _0x27df6c, _0x4e8de0),
        _0x35f6cc = G(_0x27df6c, _0x4e8de0);
      _0x3ecddf.push({
        command: "C",
        points: [
          _0x398f6e.x,
          _0x398f6e.y,
          _0xf7f506.x,
          _0xf7f506.y,
          _0x35f6cc.x,
          _0x35f6cc.y,
        ],
      });
    }
    if (_0x1cc6a6.closed && _0x2be0a4.length > 1) {
      let _0x46d030 = _0x2be0a4[_0x2be0a4.length - 1],
        _0x48f019 = _0x2be0a4[0],
        _0x50ef8a = G(_0x46d030.out ?? _0x46d030, _0x4e8de0),
        _0x4b74e2 = G(_0x48f019.in ?? _0x48f019, _0x4e8de0),
        _0x3c2557 = G(_0x48f019, _0x4e8de0);
      (_0x3ecddf.push({
        command: "C",
        points: [
          _0x50ef8a.x,
          _0x50ef8a.y,
          _0x4b74e2.x,
          _0x4b74e2.y,
          _0x3c2557.x,
          _0x3c2557.y,
        ],
      }),
        _0x3ecddf.push({ command: "z", points: [] }));
    }
    return _0x3ecddf;
  }
  let _0x133743 = _0x1cc6a6.points["map"]((_0x1f0cc6) =>
    G(_0x1f0cc6, _0x4e8de0),
  );
  if (_0x133743.length === 0) return [];
  let _0x94b0a5 = [{ command: "M", points: [_0x133743[0].x, _0x133743[0].y] }];
  for (let _0xbdcdf4 = 0; _0xbdcdf4 < _0x133743.length - 1; _0xbdcdf4++) {
    let _0x31e686 = _0x133743[_0xbdcdf4],
      _0x29b535 = _0x133743[_0xbdcdf4 + 1],
      _0x1ccb23 = _0x133743[_0xbdcdf4 - 1] ?? _0x31e686,
      _0x170206 = _0x133743[_0xbdcdf4 + 2] ?? _0x29b535,
      _0x157057 = {
        x: _0x31e686.x + (_0x29b535.x - _0x1ccb23.x) / 6,
        y: _0x31e686.y + (_0x29b535.y - _0x1ccb23.y) / 6,
      },
      _0x26bbf5 = {
        x: _0x29b535.x - (_0x170206.x - _0x31e686.x) / 6,
        y: _0x29b535.y - (_0x170206.y - _0x31e686.y) / 6,
      };
    _0x94b0a5.push({
      command: "C",
      points: [
        _0x157057.x,
        _0x157057.y,
        _0x26bbf5.x,
        _0x26bbf5.y,
        _0x29b535.x,
        _0x29b535.y,
      ],
    });
  }
  return _0x94b0a5;
}
function q(_0x2e6671) {
  let {
      model: _0x5c65ca,
      sourceModel: _0x260c5f = _0x5c65ca,
      style: _0x2beac7,
    } = _0x2e6671,
    _0x3b926e = _0x2e6671.tool ?? _0x5c65ca.kind,
    _0x572372 = R(_0x5c65ca),
    _0x526673 =
      _0x5c65ca.kind === "pen" && _0x3b926e !== "pen" ? _0x5c65ca : undefined;
  return {
    transform: { ..._0x572372, rotation: 0 },
    shapeData: oe(_0x5c65ca, _0x2beac7),
    ink: {
      version: 1,
      tool: _0x3b926e,
      sourceModel: _0x260c5f,
      ...(_0x526673 ? { editModel: _0x526673 } : {}),
      normalizedBounds: _0x572372,
    },
  };
}
var se = "@univerjs-pro/ink",
  ce = "1.0.0-insiders.20260907-70fc579";
function J(_0x3699f4) {
  "@babel/helpers - typeof";
  return (
    (J =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x465540) {
            return typeof _0x465540;
          }
        : function (_0x404310) {
            return _0x404310 &&
              typeof Symbol == "function" &&
              _0x404310.constructor === Symbol &&
              _0x404310 !== Symbol.prototype
              ? "symbol"
              : typeof _0x404310;
          }),
    J(_0x3699f4)
  );
}
function le(_0x461c54, _0x13f416) {
  if (J(_0x461c54) != "object" || !_0x461c54) return _0x461c54;
  var _0x30ade0 = _0x461c54[Symbol.toPrimitive];
  if (_0x30ade0 !== undefined) {
    var _0x566385 = _0x30ade0.call(_0x461c54, _0x13f416 || "default");
    if (J(_0x566385) != "object") return _0x566385;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x13f416 === "string" ? String : Number)(_0x461c54);
}
function ue(_0x1ba00d) {
  var _0xd22e36 = le(_0x1ba00d, "string");
  return J(_0xd22e36) == "symbol" ? _0xd22e36 : _0xd22e36 + "";
}
function Y(_0x3637df, _0x520566, _0x5a8fdc) {
  return (
    (_0x520566 = ue(_0x520566)) in _0x3637df
      ? Object.defineProperty(_0x3637df, _0x520566, {
          value: _0x5a8fdc,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3637df[_0x520566] = _0x5a8fdc),
    _0x3637df
  );
}
const X = (0, n.createIdentifier)("ink.host-adapter.service");
var de = class {
  constructor() {
    Y(this, "_adapters", []);
  }
  registerAdapter(_0x3892d1) {
    return (
      this._adapters["push"](_0x3892d1),
      (0, n.toDisposable)(() => {
        let _0x40a4c0 = this._adapters["indexOf"](_0x3892d1);
        _0x40a4c0 >= 0 && this._adapters["splice"](_0x40a4c0, 1);
      })
    );
  }
  beginInkMode(_0x34126a) {
    for (let _0x1dff6f of this._adapters)
      if (_0x1dff6f.beginInkMode(_0x34126a)) return true;
    return false;
  }
  async createCustomShape(_0x23a27b) {
    for (let _0x12d690 of this._adapters)
      if (
        _0x12d690.createCustomShape &&
        (await _0x12d690.createCustomShape(_0x23a27b))
      )
        return true;
    return false;
  }
};
const fe = {
    id: "ink.operation.start",
    type: n.CommandType["OPERATION"],
    handler: (_0x33b63e, _0x1f1c0b) =>
      _0x1f1c0b ? _0x33b63e.get(X).beginInkMode(_0x1f1c0b) : false,
  },
  Z = {};
function Q(_0x50a17e, _0x2c2ee2) {
  return function (_0x3e926e, _0x472ae7) {
    _0x2c2ee2(_0x3e926e, _0x472ae7, _0x50a17e);
  };
}
function pe(_0x566831, _0x11736a, _0xca1d41, _0x1a00e9) {
  var _0x189136 = arguments.length,
    _0x2e1348 =
      _0x189136 < 3
        ? _0x11736a
        : _0x1a00e9 === null
          ? (_0x1a00e9 = Object.getOwnPropertyDescriptor(_0x11736a, _0xca1d41))
          : _0x1a00e9,
    _0x76d4ed;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2e1348 = Reflect.decorate(_0x566831, _0x11736a, _0xca1d41, _0x1a00e9);
  else {
    for (var _0x3c511d = _0x566831.length - 1; _0x3c511d >= 0; _0x3c511d--)
      (_0x76d4ed = _0x566831[_0x3c511d]) &&
        (_0x2e1348 =
          (_0x189136 < 3
            ? _0x76d4ed(_0x2e1348)
            : _0x189136 > 3
              ? _0x76d4ed(_0x11736a, _0xca1d41, _0x2e1348)
              : _0x76d4ed(_0x11736a, _0xca1d41)) || _0x2e1348);
  }
  return (
    _0x189136 > 3 &&
      _0x2e1348 &&
      Object.defineProperty(_0x11736a, _0xca1d41, _0x2e1348),
    _0x2e1348
  );
}
let $ = class extends n.Plugin {
  constructor(_0x3d153d = Z, _0x17dc18, _0xcf5c79, _0x2c7d48) {
    (super(),
      (this._config = _0x3d153d),
      (this._injector = _0x17dc18),
      (this._commandService = _0xcf5c79),
      (this._configService = _0x2c7d48));
    let { ..._0x254ee7 } = (0, n.merge)({}, Z, this._config);
    this._configService["setConfig"]("ink.config", _0x254ee7);
  }
  onStarting() {
    ([[X, { useClass: de }]].forEach((_0x2608bb) =>
      this._injector["add"](_0x2608bb),
    ),
      this.disposeWithMe(this._commandService["registerCommand"](fe)));
  }
};
(Y($, "pluginName", "UNIVER_INK_PLUGIN"),
  Y($, "packageName", se),
  Y($, "version", ce),
  Y($, "type", n.UniverInstanceType["UNIVER_UNKNOWN"]),
  ($ = pe(
    [
      (0, n.DependentOn)(t.UniverLicensePlugin),
      Q(1, (0, n.Inject)(n.Injector)),
      Q(2, n.ICommandService),
      Q(3, n.IConfigService),
    ],
    $,
  )),
  (exports.IInkHostAdapterService = X),
  Object.defineProperty(exports, "UniverInkPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.buildInkCustomShapePayload = q),
  (exports.convertBrushModelToPenModel = re),
  (exports.cycleInkPenAnchorPointType = E),
  (exports.deleteInkPenAnchor = w),
  (exports.findClosestInkPenHandle = ie),
  (exports.findClosestInkPenSegment = S),
  (exports.getInkModelBounds = R),
  (exports.getInkPenPreviewModel = x),
  (exports.insertInkPenAnchorAt = C),
  (exports.isInkPenHandleVisible = p),
  (exports.moveInkPenAnchorPoint = ae),
  (exports.setInkPenAnchorPointType = T));
