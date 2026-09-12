Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs-pro/slides"),
  n = require("rxjs"),
  r = require("@univerjs-pro/license");
function i(_0x31634c) {
  return {
    startRow: Math.min(_0x31634c.startRow, _0x31634c.endRow),
    endRow: Math.max(_0x31634c.startRow, _0x31634c.endRow),
    startColumn: Math.min(_0x31634c.startColumn, _0x31634c.endColumn),
    endColumn: Math.max(_0x31634c.startColumn, _0x31634c.endColumn),
  };
}
function a(_0x1a1c3b) {
  let _0x35642a = i(_0x1a1c3b);
  return (
    _0x35642a.startRow !== _0x35642a.endRow ||
    _0x35642a.startColumn !== _0x35642a.endColumn
  );
}
function o(_0x47d7ac, _0x2ca9f2) {
  let _0x20f516 = i(_0x47d7ac);
  for (
    let _0x5848c2 = _0x20f516.startRow;
    _0x5848c2 <= _0x20f516.endRow;
    _0x5848c2++
  )
    for (
      let _0x4d45a8 = _0x20f516.startColumn;
      _0x4d45a8 <= _0x20f516.endColumn;
      _0x4d45a8++
    )
      _0x2ca9f2(_0x5848c2, _0x4d45a8);
}
function s(_0x1c0d15, _0x36ce10, _0x9351dd) {
  let _0xdb0ee2 = i(_0x36ce10);
  for (
    let _0x43c4bf = _0xdb0ee2.startRow;
    _0x43c4bf <= _0xdb0ee2.endRow;
    _0x43c4bf += 1
  ) {
    let _0x543abf = _0x1c0d15[_0x43c4bf];
    if (_0x543abf)
      for (
        let _0x55e7dd = _0xdb0ee2.startColumn;
        _0x55e7dd <= _0xdb0ee2.endColumn;
        _0x55e7dd += 1
      ) {
        let _0x1e9d36 = _0x543abf.cells[_0x55e7dd];
        !_0x1e9d36 ||
          _0x1e9d36.hMerge ||
          _0x1e9d36.vMerge ||
          _0x9351dd(_0x1e9d36, _0x43c4bf, _0x55e7dd);
      }
  }
}
function c(_0x359e6d, _0x2b37fd) {
  let _0x681d29 = i(_0x2b37fd);
  if (!a(_0x681d29)) return e.Tools["deepClone"](_0x359e6d);
  ee(_0x359e6d, _0x681d29);
  let _0x368b9e = v(_0x359e6d, _0x681d29),
    _0x29ea5d = _0x368b9e.rows[_0x681d29.startRow].cells[_0x681d29.startColumn];
  return (
    (_0x29ea5d.rowSpan = _0x681d29.endRow - _0x681d29.startRow + 1),
    (_0x29ea5d.columnSpan = _0x681d29.endColumn - _0x681d29.startColumn + 1),
    o(_0x681d29, (_0x27770d, _0x51f653) => {
      if (
        _0x27770d === _0x681d29.startRow &&
        _0x51f653 === _0x681d29.startColumn
      )
        return;
      let _0x5d959e = _0x368b9e.rows[_0x27770d].cells[_0x51f653];
      (_0x51f653 > _0x681d29.startColumn && (_0x5d959e.hMerge = true),
        _0x27770d > _0x681d29.startRow && (_0x5d959e.vMerge = true));
    }),
    _0x368b9e
  );
}
function l(_0x3e6296, _0x1d723e, _0x5c3841) {
  let _0x5bec9a = d(_0x3e6296, _0x1d723e, _0x5c3841);
  if (!_0x5bec9a || !a(_0x5bec9a)) return e.Tools["deepClone"](_0x3e6296);
  let _0x4d3814 = e.Tools["deepClone"](_0x3e6296);
  return (
    o(_0x5bec9a, (_0x45e5cd, _0x314804) => {
      let _0x46023a = _0x4d3814.rows[_0x45e5cd].cells[_0x314804];
      (delete _0x46023a.rowSpan,
        delete _0x46023a.columnSpan,
        delete _0x46023a.hMerge,
        delete _0x46023a.vMerge);
    }),
    _0x4d3814
  );
}
function u(_0x3f264d, _0x2bdf92) {
  let _0x397414 = i(_0x2bdf92);
  return m(_0x3f264d)
    .filter((_0x276845) => y(_0x276845, _0x397414))
    .reduce(
      (_0x2fc9a3, _0x2124d4) =>
        l(_0x2fc9a3, _0x2124d4.startRow, _0x2124d4.startColumn),
      _0x3f264d,
    );
}
function d(_0x206010, _0x15e3e7, _0x2b5f73) {
  var _0x47a73e;
  let _0x571409 =
    (_0x47a73e = _0x206010.rows[_0x15e3e7]) == null
      ? undefined
      : _0x47a73e.cells[_0x2b5f73];
  if (!_0x571409) return null;
  let _0x479511 = f(_0x571409),
    _0x3fe13d = p(_0x571409);
  if (_0x479511 > 1 || _0x3fe13d > 1)
    return {
      startRow: _0x15e3e7,
      endRow: _0x15e3e7 + _0x479511 - 1,
      startColumn: _0x2b5f73,
      endColumn: _0x2b5f73 + _0x3fe13d - 1,
    };
  if (!_0x571409.hMerge && !_0x571409.vMerge)
    return {
      startRow: _0x15e3e7,
      endRow: _0x15e3e7,
      startColumn: _0x2b5f73,
      endColumn: _0x2b5f73,
    };
  for (let _0x2f5761 = 0; _0x2f5761 < _0x206010.rows["length"]; _0x2f5761++)
    for (
      let _0x32733d = 0;
      _0x32733d < _0x206010.rows[_0x2f5761].cells["length"];
      _0x32733d++
    ) {
      let _0x279240 = _0x206010.rows[_0x2f5761].cells[_0x32733d],
        _0x3e5adb = {
          startRow: _0x2f5761,
          endRow: _0x2f5761 + f(_0x279240) - 1,
          startColumn: _0x32733d,
          endColumn: _0x32733d + p(_0x279240) - 1,
        };
      if (
        a(_0x3e5adb) &&
        _0x15e3e7 >= _0x3e5adb.startRow &&
        _0x15e3e7 <= _0x3e5adb.endRow &&
        _0x2b5f73 >= _0x3e5adb.startColumn &&
        _0x2b5f73 <= _0x3e5adb.endColumn
      )
        return _0x3e5adb;
    }
  return null;
}
function f(_0xbc8857) {
  return Math.max(1, _0xbc8857.rowSpan ?? 1);
}
function p(_0xc2411a) {
  return Math.max(1, _0xc2411a.columnSpan ?? 1);
}
function m(_0x1fb0f0) {
  let _0x1bda3d = [];
  return (
    _0x1fb0f0.rows["forEach"]((_0x119e1e, _0x45267f) => {
      _0x119e1e.cells["forEach"]((_0x22ae14, _0x4d977e) => {
        if (_0x22ae14.hMerge || _0x22ae14.vMerge) return;
        let _0x41361d = f(_0x22ae14),
          _0x4e12ed = p(_0x22ae14);
        (_0x41361d <= 1 && _0x4e12ed <= 1) ||
          _0x1bda3d.push({
            startRow: _0x45267f,
            endRow: _0x45267f + _0x41361d - 1,
            startColumn: _0x4d977e,
            endColumn: _0x4d977e + _0x4e12ed - 1,
          });
      });
    }),
    _0x1bda3d
  );
}
function h(_0x6bc128, _0x4cb5c6) {
  let _0x369b25 = m(_0x6bc128),
    _0x559ae0 = i(_0x4cb5c6),
    _0x1bf187 = true;
  for (; _0x1bf187;) {
    _0x1bf187 = false;
    for (let _0x131df4 of _0x369b25)
      !y(_0x559ae0, _0x131df4) ||
        b(_0x559ae0, _0x131df4) ||
        ((_0x559ae0 = {
          startRow: Math.min(_0x559ae0.startRow, _0x131df4.startRow),
          endRow: Math.max(_0x559ae0.endRow, _0x131df4.endRow),
          startColumn: Math.min(_0x559ae0.startColumn, _0x131df4.startColumn),
          endColumn: Math.max(_0x559ae0.endColumn, _0x131df4.endColumn),
        }),
        (_0x1bf187 = true));
  }
  return _0x559ae0;
}
function g(_0x13cf5d, _0x7e60ae, _0x5ac1ef) {
  let _0xbcd9e = Math.min(_0x7e60ae, _0x5ac1ef),
    _0x31b924 = Math.max(_0x7e60ae, _0x5ac1ef);
  return m(_0x13cf5d).some(
    (_0x37dfe8) =>
      _0xbcd9e <= _0x37dfe8.endRow &&
      _0x31b924 >= _0x37dfe8.startRow &&
      (_0xbcd9e > _0x37dfe8.startRow || _0x31b924 < _0x37dfe8.endRow),
  );
}
function _(_0x1fa27c, _0x286137, _0x1781fc) {
  let _0xe6a9e7 = Math.min(_0x286137, _0x1781fc),
    _0x1a90cf = Math.max(_0x286137, _0x1781fc);
  return m(_0x1fa27c).some(
    (_0xa90c0a) =>
      _0xe6a9e7 <= _0xa90c0a.endColumn &&
      _0x1a90cf >= _0xa90c0a.startColumn &&
      (_0xe6a9e7 > _0xa90c0a.startColumn || _0x1a90cf < _0xa90c0a.endColumn),
  );
}
function v(_0xc43f43, _0x146a44) {
  let _0xfca21d = e.Tools["deepClone"](_0xc43f43);
  return (
    m(_0xc43f43)
      .filter((_0x2dd9a9) => y(_0x2dd9a9, _0x146a44))
      .forEach((_0x44b6e8) => {
        o(_0x44b6e8, (_0x2aead1, _0x4518ac) => {
          var _0x2720f9;
          let _0x137aa4 =
            (_0x2720f9 = _0xfca21d.rows[_0x2aead1]) == null
              ? undefined
              : _0x2720f9.cells[_0x4518ac];
          _0x137aa4 &&
            (delete _0x137aa4.rowSpan,
            delete _0x137aa4.columnSpan,
            delete _0x137aa4.hMerge,
            delete _0x137aa4.vMerge);
        });
      }),
    _0xfca21d
  );
}
function y(_0x14d649, _0x2b7444) {
  return (
    _0x14d649.startRow <= _0x2b7444.endRow &&
    _0x14d649.endRow >= _0x2b7444.startRow &&
    _0x14d649.startColumn <= _0x2b7444.endColumn &&
    _0x14d649.endColumn >= _0x2b7444.startColumn
  );
}
function b(_0x204d33, _0x1ab7da) {
  return (
    _0x204d33.startRow <= _0x1ab7da.startRow &&
    _0x204d33.endRow >= _0x1ab7da.endRow &&
    _0x204d33.startColumn <= _0x1ab7da.startColumn &&
    _0x204d33.endColumn >= _0x1ab7da.endColumn
  );
}
function ee(_0x1fa032, _0x2e22cc) {
  o(_0x2e22cc, (_0x399c38, _0x431d5b) => {
    var _0x21e0e1;
    if (!(
      (_0x21e0e1 = _0x1fa032.rows[_0x399c38]) != null &&
      _0x21e0e1.cells[_0x431d5b]
    ))
      throw Error("[SlideTable]: Cell range is out of bounds.");
  });
}
function x(_0x489e4b, _0x3685dd, _0x3e3d9f, _0x208908) {
  let _0x57caa5 = de(_0x489e4b),
    _0x559feb = ue(_0x489e4b),
    _0x4b45bf = j(k(_0x3685dd), 0, _0x559feb.rows["length"]),
    _0x236a35 = _0x559feb.columns["length"],
    _0x1852c0 = Me(_0x3e3d9f),
    _0x1d6273 = me(_0x559feb, _0x4b45bf),
    _0x414302 = Array.from({ length: _0x1852c0 }, () => {
      let _0x1050a3 = {
        cells: Array.from({ length: _0x236a35 }, (_0x1abdfb, _0x586a41) =>
          pe(_0x1d6273 == null ? undefined : _0x1d6273.cells[_0x586a41]),
        ),
      };
      return (
        _0x208908 !== undefined && (_0x1050a3.height = _0x208908),
        _0x1050a3
      );
    });
  _0x559feb.rows["splice"](_0x4b45bf, 0, ..._0x414302);
  let _0xd35c9d = O(_0x559feb, _0x57caa5, (_0x39b718) =>
    ge(_0x39b718, _0x4b45bf, _0x1852c0),
  );
  return ((_0xd35c9d.rev += 1), _0xd35c9d);
}
function S(_0xa08dbe, _0x3b9ff4, _0x4c740d, _0x45f440 = 96) {
  let _0x342f2b = de(_0xa08dbe),
    _0x537b83 = ue(_0xa08dbe),
    _0x2111bd = j(k(_0x3b9ff4), 0, _0x537b83.columns["length"]),
    _0x54bc77 = Me(_0x4c740d),
    _0x37231b = Array.from({ length: _0x54bc77 }, () => ({ width: _0x45f440 }));
  (_0x537b83.columns["splice"](_0x2111bd, 0, ..._0x37231b),
    _0x537b83.rows["forEach"]((_0x168238) => {
      let _0x542986 = he(_0x168238, _0x2111bd);
      _0x168238.cells["splice"](
        _0x2111bd,
        0,
        ...Array.from({ length: _0x37231b.length }, () => pe(_0x542986)),
      );
    }));
  let _0x17cca1 = O(_0x537b83, _0x342f2b, (_0x14467f) =>
    _e(_0x14467f, _0x2111bd, _0x54bc77),
  );
  return ((_0x17cca1.rev += 1), _0x17cca1);
}
function C(_0x461aa2, _0x37133f, _0xe0ae80) {
  let _0x3313a6 = de(_0x461aa2),
    _0x553baa = ue(_0x461aa2);
  if (!(A(_0x37133f) && A(_0xe0ae80))) {
    let _0x3e2602 = O(_0x553baa, _0x3313a6, (_0x42894e) => ({ ..._0x42894e }));
    return ((_0x3e2602.rev += 1), _0x3e2602);
  }
  let _0x2d5cd0 = k(_0x37133f),
    _0x1848a3 = k(_0xe0ae80),
    _0x4611e1 = j(
      Math.min(_0x2d5cd0, _0x1848a3),
      0,
      _0x553baa.rows["length"] - 1,
    ),
    _0x6ebbf4 = j(
      Math.max(_0x2d5cd0, _0x1848a3),
      0,
      _0x553baa.rows["length"] - 1,
    );
  (_0x553baa.rows["splice"](_0x4611e1, _0x6ebbf4 - _0x4611e1 + 1),
    _0x553baa.rows["length"] === 0 &&
      _0x553baa.rows["push"]({
        cells: Array.from({ length: _0x553baa.columns["length"] }, () => ({})),
      }));
  let _0x221ab7 = O(_0x553baa, _0x3313a6, (_0x16986b) =>
    ve(_0x16986b, _0x4611e1, _0x6ebbf4),
  );
  return ((_0x221ab7.rev += 1), _0x221ab7);
}
function w(_0x3993d4, _0xcba142, _0x141224) {
  let _0x446c5a = de(_0x3993d4),
    _0x598433 = ue(_0x3993d4);
  if (!(A(_0xcba142) && A(_0x141224))) {
    let _0x221d2c = O(_0x598433, _0x446c5a, (_0x5d46a9) => ({ ..._0x5d46a9 }));
    return ((_0x221d2c.rev += 1), _0x221d2c);
  }
  let _0x27f4c8 = k(_0xcba142),
    _0x35cad5 = k(_0x141224),
    _0x562777 = j(
      Math.min(_0x27f4c8, _0x35cad5),
      0,
      _0x598433.columns["length"] - 1,
    ),
    _0x3d2b50 = j(
      Math.max(_0x27f4c8, _0x35cad5),
      0,
      _0x598433.columns["length"] - 1,
    );
  (_0x598433.columns["splice"](_0x562777, _0x3d2b50 - _0x562777 + 1),
    _0x598433.columns["length"] === 0 &&
      _0x598433.columns["push"]({ width: 96 }),
    _0x598433.rows["forEach"]((_0x435622) => {
      for (
        _0x435622.cells["splice"](_0x562777, _0x3d2b50 - _0x562777 + 1);
        _0x435622.cells["length"] < _0x598433.columns["length"];
      )
        _0x435622.cells["push"]({});
    }));
  let _0x5b61d1 = O(_0x598433, _0x446c5a, (_0x28bf77) =>
    ye(_0x28bf77, _0x562777, _0x3d2b50),
  );
  return ((_0x5b61d1.rev += 1), _0x5b61d1);
}
function T(_0x1c0ea9, _0x360961, _0x635eec) {
  if (
    _0x1c0ea9.rows["length"] === 0 ||
    !A(_0x360961.startRow) ||
    !A(_0x360961.endRow) ||
    !A(_0x635eec.row) ||
    !Te(_0x635eec.position)
  )
    return false;
  let _0x14f7e7 = Ce(_0x1c0ea9, _0x360961.startRow, _0x360961.endRow),
    _0x59f911 = j(k(_0x635eec.row), 0, _0x1c0ea9.rows["length"] - 1);
  if (g(_0x1c0ea9, _0x14f7e7.start, _0x14f7e7.end)) return false;
  let _0x38cc92 = Ee(_0x59f911, _0x635eec.position);
  return !Ae(_0x1c0ea9, _0x14f7e7.start, _0x14f7e7.end, _0x38cc92);
}
function E(_0x5b8e39, _0x126616, _0x173885) {
  if (
    _0x5b8e39.columns["length"] === 0 ||
    !A(_0x126616.startColumn) ||
    !A(_0x126616.endColumn) ||
    !A(_0x173885.column) ||
    !Te(_0x173885.position)
  )
    return false;
  let _0x363f24 = we(_0x5b8e39, _0x126616.startColumn, _0x126616.endColumn),
    _0x58bca2 = j(k(_0x173885.column), 0, _0x5b8e39.columns["length"] - 1);
  if (_(_0x5b8e39, _0x363f24.start, _0x363f24.end)) return false;
  let _0x57aa75 = Ee(_0x58bca2, _0x173885.position);
  return !je(_0x5b8e39, _0x363f24.start, _0x363f24.end, _0x57aa75);
}
function te(_0x3de697, _0x3121e3, _0x4853db, _0x371ee8, _0x41f3b7) {
  if (
    !T(
      _0x3de697,
      { startRow: _0x3121e3, endRow: _0x4853db },
      { row: _0x371ee8, position: _0x41f3b7 },
    )
  )
    return e.Tools["deepClone"](_0x3de697);
  let { start: _0x59f352, end: _0x6dea2c } = Ce(
      _0x3de697,
      _0x3121e3,
      _0x4853db,
    ),
    _0x123d5f = Ee(j(k(_0x371ee8), 0, _0x3de697.rows["length"] - 1), _0x41f3b7);
  if (De(_0x59f352, _0x6dea2c, _0x123d5f))
    return e.Tools["deepClone"](_0x3de697);
  let _0x13d7cb = e.Tools["deepClone"](_0x3de697),
    _0x3a2e9e = _0x13d7cb.rows["splice"](_0x59f352, _0x6dea2c - _0x59f352 + 1);
  return (
    _0x13d7cb.rows["splice"](
      Oe(_0x59f352, _0x6dea2c, _0x123d5f),
      0,
      ..._0x3a2e9e,
    ),
    (_0x13d7cb.rev += 1),
    _0x13d7cb
  );
}
function D(_0x17c1b7, _0x34fe12, _0x283e4d, _0x4017ce, _0x3d26fe) {
  if (
    !E(
      _0x17c1b7,
      { startColumn: _0x34fe12, endColumn: _0x283e4d },
      { column: _0x4017ce, position: _0x3d26fe },
    )
  )
    return e.Tools["deepClone"](_0x17c1b7);
  let { start: _0x32d157, end: _0x36db68 } = we(
      _0x17c1b7,
      _0x34fe12,
      _0x283e4d,
    ),
    _0x1759c9 = Ee(
      j(k(_0x4017ce), 0, _0x17c1b7.columns["length"] - 1),
      _0x3d26fe,
    );
  if (De(_0x32d157, _0x36db68, _0x1759c9))
    return e.Tools["deepClone"](_0x17c1b7);
  let _0x4a4366 = e.Tools["deepClone"](_0x17c1b7),
    _0x14689e = _0x4a4366.columns["splice"](
      _0x32d157,
      _0x36db68 - _0x32d157 + 1,
    ),
    _0x455753 = Oe(_0x32d157, _0x36db68, _0x1759c9);
  return (
    _0x4a4366.columns["splice"](_0x455753, 0, ..._0x14689e),
    _0x4a4366.rows["forEach"]((_0x2f1014) => {
      let _0x30731c = _0x2f1014.cells["splice"](
        _0x32d157,
        _0x36db68 - _0x32d157 + 1,
      );
      _0x2f1014.cells["splice"](_0x455753, 0, ..._0x30731c);
    }),
    (_0x4a4366.rev += 1),
    _0x4a4366
  );
}
function ne(_0x42017a, _0x200692, _0x31e003, _0xae7e49) {
  if (
    !Number.isFinite(_0xae7e49) ||
    _0xae7e49 <= 0 ||
    _0x42017a.rows["length"] === 0
  )
    return e.Tools["deepClone"](_0x42017a);
  let _0x57b903 = e.Tools["deepClone"](_0x42017a),
    { start: _0x3fd415, end: _0x28e43f } = Ce(_0x42017a, _0x200692, _0x31e003);
  for (let _0x3049d0 = _0x3fd415; _0x3049d0 <= _0x28e43f; _0x3049d0++)
    _0x57b903.rows[_0x3049d0].height = _0xae7e49;
  return ((_0x57b903.rev += 1), _0x57b903);
}
function re(_0x10affc, _0xecd2fc, _0x5a324f, _0x235a11) {
  if (
    !Number.isFinite(_0x235a11) ||
    _0x235a11 <= 0 ||
    _0x10affc.columns["length"] === 0
  )
    return e.Tools["deepClone"](_0x10affc);
  let _0x2ad825 = e.Tools["deepClone"](_0x10affc),
    { start: _0x2e26c2, end: _0x2dbb18 } = we(_0x10affc, _0xecd2fc, _0x5a324f);
  for (let _0x57ed98 = _0x2e26c2; _0x57ed98 <= _0x2dbb18; _0x57ed98++)
    _0x2ad825.columns[_0x57ed98].width = _0x235a11;
  return ((_0x2ad825.rev += 1), _0x2ad825);
}
function ie(_0x1258b0, _0x7c2fa0, _0x279eef, _0x520d81 = 1) {
  if (!Number.isFinite(_0x279eef) || _0x1258b0.rows["length"] < 2)
    return e.Tools["deepClone"](_0x1258b0);
  let _0xe461f7 = j(k(_0x7c2fa0), 0, _0x1258b0.rows["length"] - 2),
    _0x14030c = _0xe461f7 + 1,
    _0x35eb2d = ke(
      _0x1258b0.rows["map"]((_0x1f93de) => _0x1f93de.height ?? 24),
      _0xe461f7,
      _0x279eef,
      _0x520d81,
    ),
    _0x4dc1ea = e.Tools["deepClone"](_0x1258b0);
  return (
    (_0x4dc1ea.rows[_0xe461f7].height = _0x35eb2d[_0xe461f7]),
    (_0x4dc1ea.rows[_0x14030c].height = _0x35eb2d[_0x14030c]),
    (_0x4dc1ea.rev += 1),
    _0x4dc1ea
  );
}
function ae(_0x3eb0b8, _0x36fa2b, _0x1679db, _0x103329 = 1) {
  if (!Number.isFinite(_0x1679db) || _0x3eb0b8.columns["length"] < 2)
    return e.Tools["deepClone"](_0x3eb0b8);
  let _0x22e966 = j(k(_0x36fa2b), 0, _0x3eb0b8.columns["length"] - 2),
    _0x5e4f6a = _0x22e966 + 1,
    _0xde8c5a = ke(
      _0x3eb0b8.columns["map"]((_0x3e23bf) => _0x3e23bf.width),
      _0x22e966,
      _0x1679db,
      _0x103329,
    ),
    _0x27a31a = e.Tools["deepClone"](_0x3eb0b8);
  return (
    (_0x27a31a.columns[_0x22e966].width = _0xde8c5a[_0x22e966]),
    (_0x27a31a.columns[_0x5e4f6a].width = _0xde8c5a[_0x5e4f6a]),
    (_0x27a31a.rev += 1),
    _0x27a31a
  );
}
function oe(_0x4f825d, _0x15cb7f, _0xbeb1bd) {
  let _0x363dbe = Math.max(1, Math.floor(_0x15cb7f)),
    _0x5239c2 = Math.max(1, Math.floor(_0xbeb1bd)),
    _0x5850ad = e.Tools["deepClone"](_0x4f825d);
  if (_0x363dbe > _0x5850ad.rows["length"]) {
    var _0x4c74e0;
    let _0xe6d386 =
      (_0x4c74e0 = _0x5850ad.rows[_0x5850ad.rows["length"] - 1]) == null
        ? undefined
        : _0x4c74e0.height;
    _0x5850ad = x(
      _0x5850ad,
      _0x5850ad.rows["length"],
      _0x363dbe - _0x5850ad.rows["length"],
      _0xe6d386,
    );
  } else
    _0x363dbe < _0x5850ad.rows["length"] &&
      (_0x5850ad = C(_0x5850ad, _0x363dbe, _0x5850ad.rows["length"] - 1));
  if (_0x5239c2 > _0x5850ad.columns["length"]) {
    var _0x4ee341;
    let _0x2b78c4 =
      (_0x4ee341 = _0x5850ad.columns[_0x5850ad.columns["length"] - 1]) == null
        ? undefined
        : _0x4ee341.width;
    _0x5850ad = S(
      _0x5850ad,
      _0x5850ad.columns["length"],
      _0x5239c2 - _0x5850ad.columns["length"],
      _0x2b78c4,
    );
  } else
    _0x5239c2 < _0x5850ad.columns["length"] &&
      (_0x5850ad = w(_0x5850ad, _0x5239c2, _0x5850ad.columns["length"] - 1));
  return _0x5850ad;
}
function se(_0x5d1e64) {
  return _0x5d1e64.columns["reduce"](
    (_0x4955c0, _0xbbc313) => _0x4955c0 + (_0xbbc313.width ?? 96),
    0,
  );
}
function ce(_0x29ecda) {
  return _0x29ecda.rows["reduce"](
    (_0xc594bb, _0x32ceae) => _0xc594bb + (_0x32ceae.height ?? 24),
    0,
  );
}
function le(_0x209708, _0x25f7ae, _0xf52357, _0x8b2e85) {
  let _0x781c89 = _0x8b2e85 === "row" ? ce(_0x209708) : se(_0x209708),
    _0x106ade = _0x8b2e85 === "row" ? ce(_0x25f7ae) : se(_0x25f7ae),
    _0x4f8c2b = Math.max(0, _0x106ade - _0x781c89);
  return typeof _0xf52357 != "number" ||
    !Number.isFinite(_0xf52357) ||
    !Number.isFinite(_0x781c89) ||
    _0x781c89 <= 0
    ? _0x4f8c2b
    : (_0xf52357 / _0x781c89) * _0x4f8c2b;
}
function ue(_0x5cbaed) {
  let _0x2a8afd = e.Tools["deepClone"](_0x5cbaed);
  return (
    _0x2a8afd.rows["forEach"]((_0x2680dd) => {
      _0x2680dd.cells["forEach"]((_0x364f1d) => {
        (delete _0x364f1d.rowSpan,
          delete _0x364f1d.columnSpan,
          delete _0x364f1d.hMerge,
          delete _0x364f1d.vMerge);
      });
    }),
    _0x2a8afd
  );
}
function de(_0x41da82) {
  return m(_0x41da82).map((_0x4604b5) => ({
    range: _0x4604b5,
    ownerCell: fe(
      _0x41da82.rows[_0x4604b5.startRow].cells[_0x4604b5.startColumn],
    ),
  }));
}
function O(_0x44d750, _0x857274, _0x58a715) {
  let _0x1cc655 = _0x44d750;
  return (
    _0x857274.forEach(({ range: _0x32b81d, ownerCell: _0x37570c }) => {
      let _0x3f65b8 = _0x58a715(_0x32b81d);
      if (!_0x3f65b8) return;
      let _0x5250a1 = _0x1cc655.rows[_0x3f65b8.startRow];
      _0x5250a1 != null &&
        _0x5250a1.cells[_0x3f65b8.startColumn] &&
        ((_0x5250a1.cells[_0x3f65b8.startColumn] =
          e.Tools["deepClone"](_0x37570c)),
        a(_0x3f65b8) && (_0x1cc655 = c(_0x1cc655, _0x3f65b8)));
    }),
    _0x1cc655
  );
}
function fe(_0x24fa34) {
  let _0x507044 = e.Tools["deepClone"](_0x24fa34);
  return (
    delete _0x507044.rowSpan,
    delete _0x507044.columnSpan,
    delete _0x507044.hMerge,
    delete _0x507044.vMerge,
    _0x507044
  );
}
function pe(_0x24eadc) {
  return _0x24eadc != null && _0x24eadc.style
    ? { style: e.Tools["deepClone"](_0x24eadc.style) }
    : {};
}
function me(_0x4a4210, _0x419d98) {
  return _0x4a4210.rows[_0x419d98 - 1] ?? _0x4a4210.rows[_0x419d98];
}
function he(_0x28f4fc, _0x38055c) {
  return _0x28f4fc.cells[_0x38055c - 1] ?? _0x28f4fc.cells[_0x38055c];
}
function ge(_0x7a2d37, _0x5e03f1, _0x339ba1) {
  return _0x339ba1 <= 0
    ? { ..._0x7a2d37 }
    : _0x5e03f1 <= _0x7a2d37.startRow
      ? {
          ..._0x7a2d37,
          startRow: _0x7a2d37.startRow + _0x339ba1,
          endRow: _0x7a2d37.endRow + _0x339ba1,
        }
      : _0x5e03f1 <= _0x7a2d37.endRow
        ? { ..._0x7a2d37, endRow: _0x7a2d37.endRow + _0x339ba1 }
        : { ..._0x7a2d37 };
}
function _e(_0x4b0d74, _0x6522f8, _0x795ec2) {
  return _0x795ec2 <= 0
    ? { ..._0x4b0d74 }
    : _0x6522f8 <= _0x4b0d74.startColumn
      ? {
          ..._0x4b0d74,
          startColumn: _0x4b0d74.startColumn + _0x795ec2,
          endColumn: _0x4b0d74.endColumn + _0x795ec2,
        }
      : _0x6522f8 <= _0x4b0d74.endColumn
        ? { ..._0x4b0d74, endColumn: _0x4b0d74.endColumn + _0x795ec2 }
        : { ..._0x4b0d74 };
}
function ve(_0x10c722, _0xd0f920, _0x3a4eab) {
  let _0x2a7eca = be(
    _0x10c722.startRow,
    _0x10c722.endRow,
    _0xd0f920,
    _0x3a4eab,
  );
  if (_0x2a7eca === null) return null;
  let _0x426d8d = xe(
    _0x10c722.startRow,
    _0x10c722.endRow,
    _0xd0f920,
    _0x3a4eab,
  );
  return {
    ..._0x10c722,
    startRow: Se(_0x2a7eca, _0xd0f920, _0x3a4eab),
    endRow: Se(_0x426d8d, _0xd0f920, _0x3a4eab),
  };
}
function ye(_0x16e2e6, _0x536bff, _0x2d2ae2) {
  let _0x2a8f09 = be(
    _0x16e2e6.startColumn,
    _0x16e2e6.endColumn,
    _0x536bff,
    _0x2d2ae2,
  );
  if (_0x2a8f09 === null) return null;
  let _0x55613d = xe(
    _0x16e2e6.startColumn,
    _0x16e2e6.endColumn,
    _0x536bff,
    _0x2d2ae2,
  );
  return {
    ..._0x16e2e6,
    startColumn: Se(_0x2a8f09, _0x536bff, _0x2d2ae2),
    endColumn: Se(_0x55613d, _0x536bff, _0x2d2ae2),
  };
}
function be(_0x116e58, _0x478c7d, _0x3513de, _0xaddec1) {
  let _0x495cc3 =
    _0x116e58 < _0x3513de ? _0x116e58 : Math.max(_0x116e58, _0xaddec1 + 1);
  return _0x495cc3 <= _0x478c7d ? _0x495cc3 : null;
}
function xe(_0x41c386, _0x34333c, _0x34a378, _0x1f58c9) {
  return _0x34333c > _0x1f58c9 ? _0x34333c : Math.min(_0x34333c, _0x34a378 - 1);
}
function Se(_0xe14432, _0x2ffa53, _0x38a4a8) {
  return _0xe14432 < _0x2ffa53
    ? _0xe14432
    : _0xe14432 - (_0x38a4a8 - _0x2ffa53 + 1);
}
function Ce(_0x444aa2, _0x413db0, _0x464bc4) {
  let _0x4adaf6 = k(_0x413db0),
    _0x58b9f1 = k(_0x464bc4);
  return {
    start: j(Math.min(_0x4adaf6, _0x58b9f1), 0, _0x444aa2.rows["length"] - 1),
    end: j(Math.max(_0x4adaf6, _0x58b9f1), 0, _0x444aa2.rows["length"] - 1),
  };
}
function we(_0x4943dd, _0x77ce16, _0x3b96a2) {
  let _0x36651f = k(_0x77ce16),
    _0xb2a787 = k(_0x3b96a2);
  return {
    start: j(
      Math.min(_0x36651f, _0xb2a787),
      0,
      _0x4943dd.columns["length"] - 1,
    ),
    end: j(Math.max(_0x36651f, _0xb2a787), 0, _0x4943dd.columns["length"] - 1),
  };
}
function Te(_0x33521c) {
  return _0x33521c === "before" || _0x33521c === "after";
}
function Ee(_0x38992b, _0x8350ea) {
  return _0x8350ea === "before" ? _0x38992b : _0x38992b + 1;
}
function De(_0x45a502, _0x3173e8, _0x642ad2) {
  return _0x642ad2 >= _0x45a502 && _0x642ad2 <= _0x3173e8 + 1;
}
function Oe(_0x4c7ab6, _0x3cbc6a, _0x1febcd) {
  return _0x1febcd > _0x3cbc6a
    ? _0x1febcd - (_0x3cbc6a - _0x4c7ab6 + 1)
    : _0x1febcd;
}
function ke(_0x38614d, _0x9838b2, _0x361c70, _0x55d6be) {
  let _0x226d9c = _0x9838b2 + 1,
    _0x2f9e6a = _0x38614d[_0x9838b2],
    _0x284211 = _0x38614d[_0x226d9c],
    _0x11817f = Math.max(1, Number.isFinite(_0x55d6be) ? _0x55d6be : 1),
    _0x38e4a1 = _0x11817f - _0x2f9e6a,
    _0x497fa4 = _0x284211 - _0x11817f,
    _0x3e9f50 = Math.min(Math.max(_0x361c70, _0x38e4a1), _0x497fa4),
    _0x5bcc95 = _0x38614d.slice();
  return (
    (_0x5bcc95[_0x9838b2] = _0x2f9e6a + _0x3e9f50),
    (_0x5bcc95[_0x226d9c] = _0x284211 - _0x3e9f50),
    _0x5bcc95
  );
}
function Ae(_0xf53018, _0x49ac5b, _0x4109d7, _0x41d69b) {
  return m(_0xf53018).some(
    (_0x2e1b12) =>
      _0x41d69b > _0x2e1b12.startRow &&
      _0x41d69b <= _0x2e1b12.endRow &&
      (_0x49ac5b > _0x2e1b12.startRow || _0x4109d7 < _0x2e1b12.endRow),
  );
}
function je(_0x514e67, _0x13b7b9, _0x5717a2, _0x72b57e) {
  return m(_0x514e67).some(
    (_0x1801b7) =>
      _0x72b57e > _0x1801b7.startColumn &&
      _0x72b57e <= _0x1801b7.endColumn &&
      (_0x13b7b9 > _0x1801b7.startColumn || _0x5717a2 < _0x1801b7.endColumn),
  );
}
function Me(_0x38cb5f) {
  return Number.isFinite(_0x38cb5f) ? Math.max(0, Math.floor(_0x38cb5f)) : 0;
}
function k(_0x33664e) {
  return Number.isFinite(_0x33664e) ? Math.trunc(_0x33664e) : 0;
}
function A(_0x4049c1) {
  return Number.isFinite(_0x4049c1);
}
function j(_0x549b35, _0x12ed7a, _0x5e9fea) {
  return Math.min(
    Math.max(_0x549b35, _0x12ed7a),
    Math.max(_0x12ed7a, _0x5e9fea),
  );
}
function Ne(_0x33f418 = {}) {
  var _0xf30435, _0x38d8e9;
  let _0x24b26e =
      ((_0xf30435 = _0x33f418.values) == null ? undefined : _0xf30435.length) ??
      0,
    _0x24821b =
      ((_0x38d8e9 = _0x33f418.textData) == null
        ? undefined
        : _0x38d8e9.length) ?? 0;
  return {
    rows: Math.max(1, _0x24b26e, _0x24821b, _0x33f418.rows ?? 3),
    columns: Math.max(
      1,
      Ie(_0x33f418.values),
      Ie(_0x33f418.textData),
      _0x33f418.columns ?? 3,
    ),
    rowHeight: Math.max(1, _0x33f418.rowHeight ?? 36),
    columnWidth: Math.max(1, _0x33f418.columnWidth ?? 120),
  };
}
function Pe(_0x54f04f) {
  let _0x14801f = Ne(_0x54f04f),
    _0x1e983e = [],
    _0x3ec102 = [];
  for (let _0x5766a8 = 0; _0x5766a8 < _0x14801f.rows; _0x5766a8++) {
    let _0xf17324 = { cells: [] };
    _0x14801f.rowHeight > 0 && (_0xf17324.height = _0x14801f.rowHeight);
    for (let _0x2d2b82 = 0; _0x2d2b82 < _0x14801f.columns; _0x2d2b82++) {
      var _0x9ae126, _0x2f3677, _0x5c1d46;
      let _0x30b487 = {},
        _0x210d6d =
          ((_0x9ae126 = _0x54f04f.textData) == null ||
          (_0x9ae126 = _0x9ae126[_0x5766a8]) == null
            ? undefined
            : _0x9ae126[_0x2d2b82]) ??
          Fe(
            _0x54f04f.tableId,
            (_0x2f3677 = _0x54f04f.values) == null ||
              (_0x2f3677 = _0x2f3677[_0x5766a8]) == null
              ? undefined
              : _0x2f3677[_0x2d2b82],
            _0x5766a8,
            _0x2d2b82,
          );
      _0x210d6d && (_0x30b487.textData = e.Tools["deepClone"](_0x210d6d));
      let _0x48779f =
        (_0x5c1d46 = _0x54f04f.cellStyles) == null ||
        (_0x5c1d46 = _0x5c1d46.find(
          (_0x599a66) =>
            _0x599a66.row === _0x5766a8 && _0x599a66.column === _0x2d2b82,
        )) == null
          ? undefined
          : _0x5c1d46.style;
      (_0x48779f && (_0x30b487.style = e.Tools["deepClone"](_0x48779f)),
        _0x14801f.columnWidth > 0 &&
          _0x5766a8 === 0 &&
          _0x3ec102.push({ width: _0x14801f.columnWidth }),
        _0xf17324.cells["push"](_0x30b487));
    }
    _0x1e983e.push(_0xf17324);
  }
  return { rows: _0x1e983e, columns: _0x3ec102, resolvedOptions: _0x14801f };
}
function Fe(_0x35d24e, _0x27fa63, _0x5aa3bb, _0x3067f5) {
  return _0x27fa63 === undefined
    ? undefined
    : (0, t.plainTextToSlideDocumentData)(_0x27fa63, {
        id: "SLIDE_TABLE_CELL_" + _0x35d24e + "_" + _0x5aa3bb + "_" + _0x3067f5,
      });
}
function Ie(_0x3eb2ea) {
  let _0x4ac8fb = 0;
  for (let _0x2bf864 of _0x3eb2ea ?? [])
    _0x4ac8fb = Math.max(_0x4ac8fb, _0x2bf864.length);
  return _0x4ac8fb;
}
function Le(_0x2175e2) {
  let _0x75dd2 = P(_0x2175e2),
    _0x29bb73 = P(_0x75dd2 == null ? undefined : _0x75dd2.tables),
    _0xf4689d = {};
  return (
    _0x29bb73 &&
      Object.entries(_0x29bb73).forEach(([_0x387149, _0x56ecd4]) => {
        let _0x2ff88b = Re(_0x56ecd4, {
          id: _0x387149,
          rowCount: 3,
          columnCount: 3,
        });
        _0x2ff88b && (_0xf4689d[_0x2ff88b.id] = _0x2ff88b);
      }),
    {
      version: 1,
      tables: _0xf4689d,
      themes: { ...Ue(_0x75dd2 == null ? undefined : _0x75dd2.themes) },
    }
  );
}
function Re(_0x2ca426, _0xbc006 = {}) {
  let _0x45f222 = P(_0x2ca426),
    _0x46f26b = qe(_0x45f222 == null ? undefined : _0x45f222.id) ?? _0xbc006.id,
    _0xef4a1f = N(_0x45f222 == null ? undefined : _0x45f222.rows),
    _0x5da18d = Ke(_0x45f222 == null ? undefined : _0x45f222.cells),
    _0x44961e = We(_0x45f222, _0xbc006),
    _0x30c388 = Ge(_0x45f222, _0xbc006),
    _0x358a9d = 0;
  for (let _0x29711c of _0xef4a1f) {
    var _0xa29eb7;
    _0x358a9d = Math.max(
      _0x358a9d,
      N((_0xa29eb7 = P(_0x29711c)) == null ? undefined : _0xa29eb7.cells)
        .length,
    );
  }
  let _0x3e624c = 0;
  for (let _0x32c1be of _0x5da18d)
    _0x3e624c = Math.max(_0x3e624c, _0x32c1be.length);
  let _0x1011c7 = Math.max(
      _0x30c388.length,
      _0xef4a1f.length,
      _0x5da18d.length,
      L(_0x45f222 == null ? undefined : _0x45f222.rowCount) ?? 0,
    ),
    _0x1f0b8a = Math.max(
      _0x44961e.length,
      _0x358a9d,
      _0x3e624c,
      L(_0x45f222 == null ? undefined : _0x45f222.columnCount) ?? 0,
    ),
    _0x4aebb2 =
      _0x1f0b8a > 0 ||
      _0x1011c7 > 0 ||
      L(_0xbc006.rowCount) !== undefined ||
      L(_0xbc006.columnCount) !== undefined;
  if (!_0x46f26b || !_0x4aebb2) return;
  let _0x4f73fd = Math.max(
      1,
      _0x1011c7,
      _0x1011c7 > 0 ? 0 : (L(_0xbc006.rowCount) ?? 0),
    ),
    _0x4fd2de = Math.max(
      1,
      _0x1f0b8a,
      _0x1f0b8a > 0 ? 0 : (L(_0xbc006.columnCount) ?? 0),
    ),
    _0x2a3ee1 = I(_0xbc006.defaultColumnWidth) ?? 96,
    _0x151da4 = I(_0xbc006.defaultRowHeight) ?? 24,
    _0x543565 = {
      id: _0x46f26b,
      rev: Je(_0x45f222 == null ? undefined : _0x45f222.rev) ?? 0,
      options: He(_0x45f222 == null ? undefined : _0x45f222.options),
      columns: ze(_0x4fd2de, _0x44961e, _0x2a3ee1),
      rows: Be(
        _0x4f73fd,
        _0x4fd2de,
        _0xef4a1f,
        _0x5da18d,
        _0x30c388,
        _0x151da4,
      ),
    };
  (Ye(_0x543565, _0x45f222, "name"),
    Ye(_0x543565, _0x45f222, "description"),
    Ye(_0x543565, _0x45f222, "styleId"),
    Ye(_0x543565, _0x45f222, "themeId"));
  let _0x15bd54 = _0x45f222 == null ? undefined : _0x45f222.custom;
  return (
    _0x15bd54 === null
      ? (_0x543565.custom = null)
      : F(_0x15bd54) && (_0x543565.custom = e.Tools["deepClone"](_0x15bd54)),
    _0x543565
  );
}
function ze(_0x37832b, _0xf27327, _0x3b51e4) {
  return Array.from({ length: _0x37832b }, (_0x4b1880, _0x1f5d5a) => ({
    width: _0xf27327[_0x1f5d5a] ?? _0x3b51e4,
  }));
}
function Be(_0x13400f, _0x2db1a4, _0x12772f, _0x214728, _0x3ee27c, _0x4527fa) {
  return Array.from({ length: _0x13400f }, (_0x2e748d, _0x397227) => {
    let _0x6b691e = P(_0x12772f[_0x397227]),
      _0x9c0136 = N(_0x6b691e == null ? undefined : _0x6b691e.cells),
      _0x595f40 = _0x214728[_0x397227] ?? [],
      _0xd5feef = Array.from({ length: _0x2db1a4 }, (_0x3887f9, _0x306a72) =>
        Ve(_0x9c0136[_0x306a72] ?? _0x595f40[_0x306a72]),
      );
    return {
      height:
        I(_0x6b691e == null ? undefined : _0x6b691e.height) ??
        _0x3ee27c[_0x397227] ??
        _0x4527fa,
      cells: _0xd5feef,
    };
  });
}
function Ve(_0x525006) {
  let _0x3f9afe = P(_0x525006);
  if (!_0x3f9afe) return {};
  let _0x5821de = {};
  _0x3f9afe.textData !== undefined &&
    (_0x5821de.textData = e.Tools["deepClone"](_0x3f9afe.textData));
  let _0x5e5aec = L(_0x3f9afe.rowSpan);
  _0x5e5aec !== undefined && _0x5e5aec > 1 && (_0x5821de.rowSpan = _0x5e5aec);
  let _0x34f59f = L(_0x3f9afe.columnSpan);
  return (
    _0x34f59f !== undefined &&
      _0x34f59f > 1 &&
      (_0x5821de.columnSpan = _0x34f59f),
    typeof _0x3f9afe.hMerge == "boolean" &&
      (_0x5821de.hMerge = _0x3f9afe.hMerge),
    typeof _0x3f9afe.vMerge == "boolean" &&
      (_0x5821de.vMerge = _0x3f9afe.vMerge),
    F(_0x3f9afe.style) &&
      (_0x5821de.style = e.Tools["deepClone"](_0x3f9afe.style)),
    _0x3f9afe.custom === null
      ? (_0x5821de.custom = null)
      : F(_0x3f9afe.custom) &&
        (_0x5821de.custom = e.Tools["deepClone"](_0x3f9afe.custom)),
    _0x5821de
  );
}
function He(_0x3bc772) {
  let _0x2bf76f = P(_0x3bc772);
  if (!_0x2bf76f) return {};
  let _0x58e288 = {};
  for (let _0x384ff4 of [
    "firstRow",
    "firstCol",
    "lastRow",
    "lastCol",
    "bandRow",
    "bandCol",
  ])
    typeof _0x2bf76f[_0x384ff4] == "boolean" &&
      (_0x58e288[_0x384ff4] = _0x2bf76f[_0x384ff4]);
  return _0x58e288;
}
function Ue(_0x45ed70) {
  let _0x2f8366 = P(_0x45ed70);
  return _0x2f8366 ? e.Tools["deepClone"](_0x2f8366) : {};
}
function We(_0x4e9540, _0x4ce1f5) {
  let _0x240cef = N(_0x4e9540 == null ? undefined : _0x4e9540.columns)
    .map((_0x580a0b) => {
      var _0x59fe51;
      return I(
        typeof _0x580a0b == "number"
          ? _0x580a0b
          : (_0x59fe51 = P(_0x580a0b)) == null
            ? undefined
            : _0x59fe51.width,
      );
    })
    .filter((_0x473903) => _0x473903 !== undefined);
  return _0x240cef.length > 0
    ? _0x240cef
    : M(_0x4e9540 == null ? undefined : _0x4e9540.columnWidths)
        .concat(M(_0x4e9540 == null ? undefined : _0x4e9540.colWidths))
        .concat(M(_0x4ce1f5.columnWidths));
}
function Ge(_0x40769b, _0x29d21e) {
  let _0x2e00d8 = N(_0x40769b == null ? undefined : _0x40769b.rows)
    .map((_0x4c9d31) => {
      var _0x2b77d9;
      return I(
        (_0x2b77d9 = P(_0x4c9d31)) == null ? undefined : _0x2b77d9.height,
      );
    })
    .filter((_0xa68423) => _0xa68423 !== undefined);
  return _0x2e00d8.length > 0
    ? _0x2e00d8
    : M(_0x40769b == null ? undefined : _0x40769b.rowHeights)
        .concat(M(_0x40769b == null ? undefined : _0x40769b.heights))
        .concat(M(_0x29d21e.rowHeights));
}
function Ke(_0x2cdb88) {
  return N(_0x2cdb88).map((_0x4fd346) => N(_0x4fd346));
}
function M(_0x1a8d68) {
  return N(_0x1a8d68)
    .map((_0x4129e7) => I(_0x4129e7))
    .filter((_0x5d4376) => _0x5d4376 !== undefined);
}
function N(_0x75c592) {
  return Array.isArray(_0x75c592) ? _0x75c592 : [];
}
function P(_0x5d8db1) {
  return F(_0x5d8db1) ? _0x5d8db1 : undefined;
}
function F(_0x38361e) {
  return (
    !!_0x38361e && typeof _0x38361e == "object" && !Array.isArray(_0x38361e)
  );
}
function qe(_0x1d4471) {
  return typeof _0x1d4471 == "string" && _0x1d4471.trim()
    ? _0x1d4471
    : undefined;
}
function I(_0x1315b) {
  return typeof _0x1315b == "number" &&
    Number.isFinite(_0x1315b) &&
    _0x1315b > 0
    ? _0x1315b
    : undefined;
}
function L(_0x3338de) {
  let _0x4fb1cf = I(_0x3338de);
  return _0x4fb1cf === undefined ? undefined : Math.floor(_0x4fb1cf);
}
function Je(_0x35a6a6) {
  return typeof _0x35a6a6 == "number" &&
    Number.isFinite(_0x35a6a6) &&
    _0x35a6a6 >= 0
    ? Math.floor(_0x35a6a6)
    : undefined;
}
function Ye(_0x597fbe, _0x2936f5, _0x385f7d) {
  let _0x367775 = qe(_0x2936f5 == null ? undefined : _0x2936f5[_0x385f7d]);
  _0x367775 !== undefined && (_0x597fbe[_0x385f7d] = _0x367775);
}
let Xe = (function (_0x89b983) {
    return (
      (_0x89b983.Top = "top"),
      (_0x89b983.Middle = "middle"),
      (_0x89b983.Bottom = "bottom"),
      _0x89b983
    );
  })({}),
  Ze = (function (_0x15b33d) {
    return (
      (_0x15b33d.Horizontal = "horizontal"),
      (_0x15b33d.Vertical = "vertical"),
      (_0x15b33d.Vertical270 = "vertical270"),
      (_0x15b33d.WordArtVertical = "wordArtVertical"),
      _0x15b33d
    );
  })({}),
  Qe = (function (_0x132121) {
    return (
      (_0x132121.None = "none"),
      (_0x132121.Solid = "solid"),
      (_0x132121.Gradient = "gradient"),
      (_0x132121.Picture = "picture"),
      _0x132121
    );
  })({}),
  $e = (function (_0x2ca475) {
    return (
      (_0x2ca475.Linear = "linear"),
      (_0x2ca475.Radial = "radial"),
      (_0x2ca475.Angular = "angular"),
      (_0x2ca475.Diamond = "diamond"),
      _0x2ca475
    );
  })({}),
  et = (function (_0x42f3ea) {
    return (
      (_0x42f3ea.Stretch = "stretch"),
      (_0x42f3ea.Tile = "tile"),
      _0x42f3ea
    );
  })({}),
  tt = (function (_0x1b1e5e) {
    return (
      (_0x1b1e5e.Solid = "solid"),
      (_0x1b1e5e.Dash = "dash"),
      (_0x1b1e5e.Dot = "dot"),
      (_0x1b1e5e.DashDot = "dashDot"),
      (_0x1b1e5e.None = "none"),
      _0x1b1e5e
    );
  })({}),
  nt = (function (_0x55d5a9) {
    return (
      (_0x55d5a9.All = "all"),
      (_0x55d5a9.Inner = "inner"),
      (_0x55d5a9.Outer = "outer"),
      (_0x55d5a9.Top = "top"),
      (_0x55d5a9.Bottom = "bottom"),
      (_0x55d5a9.Left = "left"),
      (_0x55d5a9.Right = "right"),
      (_0x55d5a9.None = "none"),
      (_0x55d5a9.InnerHorizontal = "innerHorizontal"),
      (_0x55d5a9.InnerVertical = "innerVertical"),
      _0x55d5a9
    );
  })({});
const rt = {},
  R = {
    background: "#ffffff",
    border: "#d0d7e2",
    primary: "#3f7ef7",
    primarySubtle: "#eef4ff",
    primarySubtleAlt: "#f7faff",
    neutral: {
      strong: "#111827",
      medium: "#e5e7eb",
      subtle: "#f3f4f6",
      subtleAlt: "#f9fafb",
      border: "#d0d7e2",
    },
    blue: {
      strong: "#2563eb",
      medium: "#bfdbfe",
      subtle: "#eff6ff",
      subtleAlt: "#dbeafe",
    },
    cyan: {
      strong: "#0891b2",
      medium: "#bae6fd",
      subtle: "#f0f9ff",
      subtleAlt: "#e0f2fe",
    },
    green: {
      strong: "#16a34a",
      medium: "#dcfce7",
      subtle: "#f0fdf4",
      subtleAlt: "#dcfce7",
    },
    orange: {
      strong: "#ea580c",
      medium: "#fed7aa",
      subtle: "#fff7ed",
      subtleAlt: "#ffedd5",
    },
    purple: {
      strong: "#9333ea",
      medium: "#e9d5ff",
      subtle: "#faf5ff",
      subtleAlt: "#f3e8ff",
    },
    pink: {
      strong: "#db2777",
      medium: "#fbcfe8",
      subtle: "#fdf2f8",
      subtleAlt: "#fce7f3",
    },
  },
  it = [
    { key: "neutral", name: "Neutral" },
    { key: "primary", name: "Primary" },
    { key: "blue", name: "Blue" },
    { key: "cyan", name: "Cyan" },
    { key: "green", name: "Green" },
    { key: "orange", name: "Orange" },
    { key: "purple", name: "Purple" },
    { key: "pink", name: "Pink" },
  ],
  at = [
    B(
      "univerPrimaryPlainGrid",
      "bestMatch",
      "primary",
      "plainGrid",
      "Primary\x20Plain\x20Grid",
      {},
    ),
    B(
      "univerPrimaryHeader",
      "bestMatch",
      "primary",
      "header",
      "Primary Header",
      { firstRow: true },
    ),
    B(
      "univerPrimaryHeaderBandedRows",
      "bestMatch",
      "primary",
      "headerBandedRows",
      "Primary Header Banded Rows",
      { firstRow: true, bandRow: true },
    ),
    B(
      "univerNeutralPlainGrid",
      "bestMatch",
      "neutral",
      "plainGrid",
      "Neutral Plain Grid",
      {},
    ),
    B(
      "univerGreenHeaderBandedRows",
      "bestMatch",
      "green",
      "headerBandedRows",
      "Green Header Banded Rows",
      { firstRow: true, bandRow: true },
    ),
    B(
      "univerPurpleStrongHeader",
      "bestMatch",
      "purple",
      "strongHeader",
      "Purple Strong Header",
      { firstRow: true },
    ),
    ...it.flatMap(({ key: _0x34ad3a, name: _0x2376f1 }) => [
      B(
        "univer" + _0x2376f1 + "LightPlainGrid",
        "light",
        _0x34ad3a,
        "lightPlainGrid",
        _0x2376f1 + "\x20Light\x20Plain\x20Grid",
        {},
      ),
      B(
        "univer" + _0x2376f1 + "LightHeader",
        "light",
        _0x34ad3a,
        "lightHeader",
        _0x2376f1 + " Light Header",
        { firstRow: true },
      ),
      B(
        "univer" + _0x2376f1 + "LightHeaderBandedRows",
        "light",
        _0x34ad3a,
        "lightHeaderBandedRows",
        _0x2376f1 + "\x20Light\x20Header\x20Banded\x20Rows",
        { firstRow: true, bandRow: true },
      ),
    ]),
    ...it.flatMap(({ key: _0x334e07, name: _0x519477 }) => [
      B(
        "univer" + _0x519477 + "MediumStrongHeader",
        "medium",
        _0x334e07,
        "mediumStrongHeader",
        _0x519477 + "\x20Medium\x20Header",
        { firstRow: true },
      ),
      B(
        "univer" + _0x519477 + "MediumFirstColumn",
        "medium",
        _0x334e07,
        "mediumFirstColumn",
        _0x519477 + " Medium First Column",
        { firstCol: true },
      ),
      B(
        "univer" + _0x519477 + "MediumHeaderFirstColumn",
        "medium",
        _0x334e07,
        "mediumHeaderFirstColumn",
        _0x519477 + "\x20Medium\x20Header\x20First\x20Column",
        { firstRow: true, firstCol: true, bandRow: true },
      ),
    ]),
    ...it.map(({ key: _0x46b19, name: _0x572570 }) =>
      B(
        "univer" + _0x572570 + "HorizontalLines",
        "minimal",
        _0x46b19,
        "horizontalLines",
        _0x572570 + "\x20Horizontal\x20Lines",
        {},
      ),
    ),
    B(
      "univerPrimarySoftGrid",
      "minimal",
      "primary",
      "softGrid",
      "Primary Soft Grid",
      {},
    ),
    B(
      "univerNeutralSoftGrid",
      "minimal",
      "neutral",
      "softGrid",
      "Neutral Soft Grid",
      {},
    ),
  ],
  ot = at.map(({ id: _0x1f2920, group: _0x192427 }) => ({
    id: _0x1f2920,
    group: _0x192427,
  }));
function st(_0x3d47e0) {
  let _0x49d930 = z(_0x3d47e0, ["bg.white"], R.background),
    _0x41bae1 = V(_0x3d47e0, "gray", R.neutral),
    _0x80957b = _t(_0x3d47e0);
  return {
    background: _0x49d930,
    border: _0x41bae1.border ?? R.border,
    primary: _0x80957b.strong,
    primarySubtle: _0x80957b.subtle,
    primarySubtleAlt: _0x80957b.subtleAlt,
    neutral: _0x41bae1,
    blue: V(_0x3d47e0, "blue", R.blue),
    cyan: V(_0x3d47e0, "cyan", R.cyan),
    green: V(_0x3d47e0, "green", R.green),
    orange: V(_0x3d47e0, "orange", R.orange),
    purple: V(_0x3d47e0, "purple", R.purple),
    pink: V(_0x3d47e0, "pink", R.pink),
  };
}
function ct(_0x230c94 = R) {
  let _0x5b8836 = pt(_0x230c94);
  return at.reduce(
    (_0x13cffc, _0x19f1b6) => (
      (_0x13cffc[_0x19f1b6.id] = ht(_0x19f1b6, _0x5b8836)),
      _0x13cffc
    ),
    {},
  );
}
function lt(_0xe8a08) {
  return "univerFrozenTable:" + _0xe8a08;
}
function ut(_0x2cb050, _0x2f5bf4) {
  return _0x2f5bf4 !== undefined && (_0x2f5bf4 ?? undefined) !== _0x2cb050;
}
function dt(_0x3e7248, _0x2b2945, _0x39505a = R) {
  let _0x185ae8 = ct(_0x39505a)[_0x2b2945];
  if (_0x185ae8) return ft(_0x3e7248, _0x185ae8);
}
function ft(_0x39fa02, _0x467ab8) {
  return { ..._0x467ab8, id: lt(_0x39fa02) };
}
function z(_0xa630e9, _0x2a111a, _0x46943e) {
  for (let _0x1d758f of _0x2a111a) {
    let _0x30b03d = _0xa630e9 == null ? undefined : _0xa630e9(_0x1d758f);
    if (typeof _0x30b03d == "string" && _0x30b03d) return _0x30b03d;
  }
  return _0x46943e;
}
function B(_0x3c35e1, _0x31e095, _0x217078, _0x5db451, _0x5900c1, _0x468d64) {
  return {
    id: _0x3c35e1,
    group: _0x31e095,
    family: _0x217078,
    name: _0x5900c1,
    variant: _0x5db451,
    options: _0x468d64,
  };
}
function pt(_0x337be6) {
  return {
    background: _0x337be6.background,
    border: _0x337be6.border,
    primary: _0x337be6.primary,
    primarySubtle: _0x337be6.primarySubtle,
    primarySubtleAlt: _0x337be6.primarySubtleAlt,
    neutral: _0x337be6.neutral ?? R.neutral,
    blue: _0x337be6.blue ?? R.blue,
    cyan: _0x337be6.cyan ?? R.cyan,
    green: _0x337be6.green ?? R.green,
    orange: _0x337be6.orange ?? R.orange,
    purple: _0x337be6.purple ?? R.purple,
    pink: _0x337be6.pink ?? R.pink,
  };
}
function mt(_0x5bb46c, _0x1d0811) {
  return _0x1d0811 === "primary"
    ? {
        strong: _0x5bb46c.primary,
        medium: _0x5bb46c.primarySubtleAlt,
        subtle: _0x5bb46c.primarySubtle,
        subtleAlt: _0x5bb46c.primarySubtleAlt,
        border: _0x5bb46c.primary,
      }
    : _0x5bb46c[_0x1d0811];
}
function ht(_0x12d3ac, _0x49f905) {
  let _0x19a10e = mt(_0x49f905, _0x12d3ac.family),
    _0x15cf6c = yt(_0x19a10e.border ?? _0x19a10e.strong),
    _0x127a6b = yt(_0x19a10e.medium),
    _0x5a179d = yt(_0x19a10e.subtleAlt),
    _0x9d277f = {
      id: _0x12d3ac.id,
      name: _0x12d3ac.name,
      wholeTable: H(_0x15cf6c, _0x49f905.background),
    },
    _0x2180e9;
  switch (_0x12d3ac.variant) {
    case "plainGrid":
      _0x2180e9 = _0x9d277f;
      break;
    case "header":
      _0x2180e9 = { ..._0x9d277f, firstRow: U(_0x19a10e.subtle) };
      break;
    case "headerBandedRows":
      _0x2180e9 = {
        ..._0x9d277f,
        firstRow: U(_0x19a10e.medium),
        bandRow: U(_0x19a10e.subtle),
      };
      break;
    case "strongHeader":
      _0x2180e9 = { ..._0x9d277f, firstRow: U(_0x19a10e.medium) };
      break;
    case "firstColumn":
      _0x2180e9 = { ..._0x9d277f, firstCol: U(_0x19a10e.subtle) };
      break;
    case "headerFirstColumn":
      _0x2180e9 = {
        ..._0x9d277f,
        firstRow: U(_0x19a10e.medium),
        firstCol: U(_0x19a10e.subtle),
        bandRow: U(_0x19a10e.subtleAlt),
      };
      break;
    case "lightPlainGrid":
      _0x2180e9 = {
        ..._0x9d277f,
        wholeTable: H(_0x5a179d, _0x49f905.background),
      };
      break;
    case "lightHeader":
      _0x2180e9 = {
        ..._0x9d277f,
        wholeTable: H(_0x5a179d, _0x49f905.background),
        firstRow: U(_0x19a10e.subtle),
      };
      break;
    case "lightHeaderBandedRows":
      _0x2180e9 = {
        ..._0x9d277f,
        wholeTable: H(_0x5a179d, _0x49f905.background),
        firstRow: U(_0x19a10e.subtleAlt),
        bandRow: U(_0x19a10e.subtle),
      };
      break;
    case "mediumStrongHeader":
      _0x2180e9 = {
        ..._0x9d277f,
        wholeTable: H(_0x127a6b, _0x49f905.background),
        firstRow: U(_0x19a10e.medium),
      };
      break;
    case "mediumFirstColumn":
      _0x2180e9 = {
        ..._0x9d277f,
        wholeTable: H(_0x127a6b, _0x49f905.background),
        firstCol: U(_0x19a10e.medium),
      };
      break;
    case "mediumHeaderFirstColumn":
      _0x2180e9 = {
        ..._0x9d277f,
        wholeTable: H(_0x127a6b, _0x49f905.background),
        firstRow: U(_0x19a10e.medium),
        firstCol: U(_0x19a10e.subtleAlt),
        bandRow: U(_0x19a10e.subtle),
      };
      break;
    case "horizontalLines":
      _0x2180e9 = {
        ..._0x9d277f,
        wholeTable: vt(_0x15cf6c, _0x49f905.background),
      };
      break;
    case "softGrid":
      _0x2180e9 = {
        ..._0x9d277f,
        wholeTable: H(_0x127a6b, _0x49f905.background),
      };
      break;
    default:
      _0x2180e9 = _0x9d277f;
      break;
  }
  return gt(_0x2180e9, _0x19a10e);
}
function gt(_0x3ccc01, _0x25e17d) {
  return {
    ..._0x3ccc01,
    firstRow: _0x3ccc01.firstRow ?? U(_0x25e17d.subtle),
    lastRow: _0x3ccc01.lastRow ?? U(_0x25e17d.subtleAlt),
    bandRow: _0x3ccc01.bandRow ?? U(_0x25e17d.subtle),
    bandCol: _0x3ccc01.bandCol ?? U(_0x25e17d.subtleAlt),
    firstCol: _0x3ccc01.firstCol ?? U(_0x25e17d.subtleAlt),
    lastCol: _0x3ccc01.lastCol ?? U(_0x25e17d.subtle),
  };
}
function _t(_0x988666) {
  return {
    strong: z(_0x988666, ["primary.600"], R.primary),
    medium: z(
      _0x988666,
      ["primary.100", "primary.200", "primary.50"],
      R.primarySubtleAlt,
    ),
    subtle: z(_0x988666, ["primary.50"], R.primarySubtle),
    subtleAlt: z(_0x988666, ["primary.100", "primary.50"], R.primarySubtleAlt),
  };
}
function V(_0x78cb5d, _0x32cbea, _0x8a57e9) {
  let _0x4fc3f4 =
    _0x32cbea === "gray" ? ["gray.300", "gray.200"] : [_0x32cbea + ".600"];
  return {
    strong: z(
      _0x78cb5d,
      [_0x32cbea + ".600", _0x32cbea + ".700"],
      _0x8a57e9.strong,
    ),
    medium: z(
      _0x78cb5d,
      [_0x32cbea + ".100", _0x32cbea + ".200", _0x32cbea + ".50"],
      _0x8a57e9.medium,
    ),
    subtle: z(
      _0x78cb5d,
      [_0x32cbea + ".50", _0x32cbea + ".100"],
      _0x8a57e9.subtle,
    ),
    subtleAlt: z(
      _0x78cb5d,
      [_0x32cbea + ".100", _0x32cbea + ".50"],
      _0x8a57e9.subtleAlt,
    ),
    border: z(_0x78cb5d, _0x4fc3f4, _0x8a57e9.border ?? _0x8a57e9.strong),
  };
}
function H(_0x537b06, _0x3f9ad6) {
  return {
    fill: { type: "solid", color: _0x3f9ad6, alpha: 1 },
    borders: {
      top: { ..._0x537b06 },
      right: { ..._0x537b06 },
      bottom: { ..._0x537b06 },
      left: { ..._0x537b06 },
    },
  };
}
function vt(_0x4ac4a4, _0x2c98da) {
  return {
    fill: { type: "solid", color: _0x2c98da, alpha: 1 },
    borders: { top: { ..._0x4ac4a4 }, bottom: { ..._0x4ac4a4 } },
  };
}
function yt(_0x3859a6) {
  return { color: _0x3859a6, width: 1, dash: "solid" };
}
function U(_0x3a7323) {
  return { fill: { type: "solid", color: _0x3a7323, alpha: 1 } };
}
function W(_0x47f3ae) {
  "@babel/helpers - typeof";
  return (
    (W =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x58eeed) {
            return typeof _0x58eeed;
          }
        : function (_0x1080d0) {
            return _0x1080d0 &&
              typeof Symbol == "function" &&
              _0x1080d0.constructor === Symbol &&
              _0x1080d0 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1080d0;
          }),
    W(_0x47f3ae)
  );
}
function bt(_0x43a7ba, _0x37414e) {
  if (W(_0x43a7ba) != "object" || !_0x43a7ba) return _0x43a7ba;
  var _0x2fd31d = _0x43a7ba[Symbol.toPrimitive];
  if (_0x2fd31d !== undefined) {
    var _0x355bfd = _0x2fd31d.call(_0x43a7ba, _0x37414e || "default");
    if (W(_0x355bfd) != "object") return _0x355bfd;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x37414e === "string" ? String : Number)(_0x43a7ba);
}
function xt(_0x22e860) {
  var _0x481b71 = bt(_0x22e860, "string");
  return W(_0x481b71) == "symbol" ? _0x481b71 : _0x481b71 + "";
}
function G(_0x400eb5, _0xc39759, _0x47690c) {
  return (
    (_0xc39759 = xt(_0xc39759)) in _0x400eb5
      ? Object.defineProperty(_0x400eb5, _0xc39759, {
          value: _0x47690c,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x400eb5[_0xc39759] = _0x47690c),
    _0x400eb5
  );
}
function St(_0x4b9ae1, _0x21ed3e) {
  let _0x4346b3 = {
    id: _0x4b9ae1.id,
    rev: _0x4b9ae1.rev + 1,
    options: e.Tools["deepClone"](_0x21ed3e.options ?? _0x4b9ae1.options),
    columns: e.Tools["deepClone"](_0x21ed3e.columns ?? _0x4b9ae1.columns),
    rows: e.Tools["deepClone"](_0x21ed3e.rows ?? _0x4b9ae1.rows),
  };
  return (
    Ct(_0x4346b3, _0x4b9ae1, "name"),
    Ct(_0x4346b3, _0x4b9ae1, "description"),
    Ct(_0x4346b3, _0x4b9ae1, "styleId"),
    Ct(_0x4346b3, _0x4b9ae1, "themeId"),
    wt(_0x4346b3, _0x21ed3e, "name"),
    wt(_0x4346b3, _0x21ed3e, "description"),
    wt(_0x4346b3, _0x21ed3e, "styleId"),
    wt(_0x4346b3, _0x21ed3e, "themeId"),
    _0x21ed3e.custom === undefined
      ? _0x4b9ae1.custom !== undefined &&
        (_0x4346b3.custom = e.Tools["deepClone"](_0x4b9ae1.custom))
      : (_0x4346b3.custom =
          _0x21ed3e.custom === null
            ? null
            : e.Tools["deepClone"](_0x21ed3e.custom)),
    _0x4346b3
  );
}
var K = class extends e.Disposable {
  constructor(..._0x427f65) {
    (super(..._0x427f65), G(this, "_resources", new Map()));
  }
  ensureUnitResource(_0x482b85) {
    let _0x5bd291 = this._resources["get"](_0x482b85);
    return (
      _0x5bd291 ||
        ((_0x5bd291 = { version: 1, tables: {}, themes: {} }),
        this._resources["set"](_0x482b85, _0x5bd291)),
      _0x5bd291
    );
  }
  loadUnit(_0x1a72e8, _0x5cb453) {
    let _0x42a4fd = Le(
      typeof _0x5cb453 == "string" ? JSON.parse(_0x5cb453) : _0x5cb453,
    );
    return (
      this._resources["set"](_0x1a72e8, _0x42a4fd),
      this._clone(_0x42a4fd)
    );
  }
  unloadUnit(_0x588559) {
    this._resources["delete"](_0x588559);
  }
  serializeUnit(_0x587f75) {
    return JSON.stringify(this.ensureUnitResource(_0x587f75));
  }
  getResource(_0xe638d8) {
    return this._clone(this.ensureUnitResource(_0xe638d8));
  }
  getTable(_0x54de0e, _0x2c5d88) {
    let _0x138de6 = this.ensureUnitResource(_0x54de0e).tables[_0x2c5d88];
    return _0x138de6 ? this._clone(_0x138de6) : undefined;
  }
  getTheme(_0x43b0bf, _0x31b207) {
    let _0x5f17c0 = this.ensureUnitResource(_0x43b0bf).themes[_0x31b207];
    return _0x5f17c0 ? this._clone(_0x5f17c0) : undefined;
  }
  getThemes(_0xe89d6d) {
    return this._clone(this.ensureUnitResource(_0xe89d6d).themes);
  }
  buildTable(_0x3a43c4) {
    let _0xf3c7fd = _0x3a43c4.id ?? (0, e.generateRandomId)(),
      { rows: _0x3082f9, columns: _0x11b858 } = Pe({
        tableId: _0xf3c7fd,
        rows: _0x3a43c4.rows,
        columns: _0x3a43c4.columns,
        rowHeight: _0x3a43c4.rowHeight,
        columnWidth: _0x3a43c4.columnWidth,
      }),
      _0x32a13b = {
        id: _0xf3c7fd,
        rev: 0,
        options: { ...(_0x3a43c4.options ?? rt) },
        columns: _0x11b858,
        rows: _0x3082f9,
      };
    return (
      _0x3a43c4.name !== undefined && (_0x32a13b.name = _0x3a43c4.name),
      _0x3a43c4.description !== undefined &&
        (_0x32a13b.description = _0x3a43c4.description),
      _0x3a43c4.styleId !== null &&
        (_0x32a13b.styleId = _0x3a43c4.styleId ?? "univerPrimaryPlainGrid"),
      _0x32a13b
    );
  }
  createTable(_0x22fc0c, _0x3ce700) {
    return this.setTable(_0x22fc0c, this.buildTable(_0x3ce700));
  }
  setTable(_0x3e6bf8, _0x4d63ef, _0x14bcbb) {
    var _0x33f880;
    let _0x24f563 = this.ensureUnitResource(_0x3e6bf8);
    if (_0x14bcbb && _0x14bcbb.id !== _0x4d63ef.themeId)
      throw Error("The slide table theme must match the table themeId.");
    let _0x52079d =
      (_0x33f880 = _0x24f563.tables[_0x4d63ef.id]) == null
        ? undefined
        : _0x33f880.themeId;
    return (
      _0x14bcbb && (_0x24f563.themes[_0x14bcbb.id] = this._clone(_0x14bcbb)),
      (_0x24f563.tables[_0x4d63ef.id] = this._clone(_0x4d63ef)),
      _0x52079d &&
        _0x52079d !== _0x4d63ef.themeId &&
        this._deleteThemeIfUnused(_0x24f563, _0x52079d),
      this._clone(_0x24f563.tables[_0x4d63ef.id])
    );
  }
  updateTable(_0x3ca2fa, _0x315a64, _0x540347) {
    let _0x12961b = this.ensureUnitResource(_0x3ca2fa).tables[_0x315a64];
    if (!_0x12961b) return;
    let _0x579a8a = St(_0x12961b, _0x540347);
    return (
      (this.ensureUnitResource(_0x3ca2fa).tables[_0x315a64] =
        this._clone(_0x579a8a)),
      this._clone(_0x579a8a)
    );
  }
  removeTable(_0x5b33b4, _0x37d74f) {
    let _0x137be5 = this.ensureUnitResource(_0x5b33b4),
      _0x4cde55 = _0x137be5.tables[_0x37d74f];
    if (_0x4cde55)
      return (
        delete _0x137be5.tables[_0x37d74f],
        _0x4cde55.themeId &&
          this._deleteThemeIfUnused(_0x137be5, _0x4cde55.themeId),
        this._clone(_0x4cde55)
      );
  }
  dispose() {
    (this._resources["clear"](), super.dispose());
  }
  _clone(_0xda1d88) {
    return e.Tools["deepClone"](_0xda1d88);
  }
  _deleteThemeIfUnused(_0xb64f54, _0x322b0b) {
    Object.values(_0xb64f54.tables).some(
      (_0x21c1f1) => _0x21c1f1.themeId === _0x322b0b,
    ) || delete _0xb64f54.themes[_0x322b0b];
  }
};
function Ct(_0x57f7cf, _0x25973, _0x42ed5e) {
  _0x25973[_0x42ed5e] !== undefined &&
    (_0x57f7cf[_0x42ed5e] = _0x25973[_0x42ed5e]);
}
function wt(_0x1825ed, _0x79b39d, _0x55ea5b) {
  let _0x41bd58 = _0x79b39d[_0x55ea5b];
  _0x41bd58 === null
    ? delete _0x1825ed[_0x55ea5b]
    : _0x41bd58 !== undefined && (_0x1825ed[_0x55ea5b] = _0x41bd58);
}
function q(_0x2eaae0, _0x400414) {
  return function (_0x1cd4c6, _0x2252ba) {
    _0x400414(_0x1cd4c6, _0x2252ba, _0x2eaae0);
  };
}
function Tt(_0x82825b, _0x35f462, _0x5f287e, _0x39a9f6) {
  var _0x25025c = arguments.length,
    _0x2698a1 =
      _0x25025c < 3
        ? _0x35f462
        : _0x39a9f6 === null
          ? (_0x39a9f6 = Object.getOwnPropertyDescriptor(_0x35f462, _0x5f287e))
          : _0x39a9f6,
    _0x36c891;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2698a1 = Reflect.decorate(_0x82825b, _0x35f462, _0x5f287e, _0x39a9f6);
  else {
    for (var _0xb85054 = _0x82825b.length - 1; _0xb85054 >= 0; _0xb85054--)
      (_0x36c891 = _0x82825b[_0xb85054]) &&
        (_0x2698a1 =
          (_0x25025c < 3
            ? _0x36c891(_0x2698a1)
            : _0x25025c > 3
              ? _0x36c891(_0x35f462, _0x5f287e, _0x2698a1)
              : _0x36c891(_0x35f462, _0x5f287e)) || _0x2698a1);
  }
  return (
    _0x25025c > 3 &&
      _0x2698a1 &&
      Object.defineProperty(_0x35f462, _0x5f287e, _0x2698a1),
    _0x2698a1
  );
}
let J = class extends e.Disposable {
  constructor(_0x248d5f) {
    (super(),
      (this._resourceService = _0x248d5f),
      G(this, "_tableChange$", new n["Subject"]()),
      G(this, "_tableRemoval$", new n["Subject"]()),
      G(this, "_lastTableChange", null),
      G(this, "_lastTableRemoval", null));
  }
  get tableChange$() {
    return this._tableChange$["asObservable"]();
  }
  get tableRemoval$() {
    return this._tableRemoval$["asObservable"]();
  }
  getTable(_0x40d610, _0x3ec4e0) {
    return this._resourceService["getTable"](_0x40d610, _0x3ec4e0);
  }
  getLastTableChange() {
    return this._lastTableChange;
  }
  getLastTableRemoval() {
    return this._lastTableRemoval;
  }
  notifyTableChanged(_0xc0e7ef, _0x341cfe) {
    let _0x308d5f = { unitId: _0xc0e7ef, tableId: _0x341cfe },
      _0x582eb4 = this._resourceService["getTable"](_0xc0e7ef, _0x341cfe);
    (_0x582eb4 && (_0x308d5f.table = _0x582eb4),
      (this._lastTableChange = _0x308d5f),
      this._tableChange$["next"](_0x308d5f));
  }
  notifyTableRemoved(_0x4c28b4, _0x50c197) {
    let _0xf465d = { unitId: _0x4c28b4, tableId: _0x50c197 };
    ((this._lastTableRemoval = _0xf465d),
      this._tableRemoval$["next"](_0xf465d));
  }
  removeUnit(_0x266c4f) {}
  dispose() {
    ((this._lastTableChange = null),
      (this._lastTableRemoval = null),
      this._tableChange$["complete"](),
      this._tableRemoval$["complete"](),
      super.dispose());
  }
};
J = Tt([q(0, (0, e.Inject)(K))], J);
const Y = {
    id: "slide.mutation.set-slide-table",
    type: e.CommandType["MUTATION"],
    handler: (_0x50b389, _0x1e81cd) => {
      let { unitId: _0x54ece6, table: _0x282773, theme: _0x5ab00d } = _0x1e81cd,
        _0xb0493e = _0x50b389.get(K),
        _0x21a60e = _0x50b389.get(J);
      return (
        _0xb0493e.setTable(_0x54ece6, _0x282773, _0x5ab00d),
        _0x21a60e.notifyTableChanged(_0x54ece6, _0x282773.id),
        true
      );
    },
  },
  Et = {
    id: "slide.command.delete-slide-table-columns",
    type: e.CommandType["COMMAND"],
    handler: (_0x12cb1d, _0x2bb469) => {
      if (!_0x2bb469) return false;
      let _0x1d0126 = _0x12cb1d.get(K),
        {
          unitId: _0x26ae88,
          tableId: _0x42facb,
          startColumn: _0x28eb63,
          endColumn: _0x3e8b5a,
        } = _0x2bb469,
        _0xa9e00c = _0x1d0126.getTable(_0x26ae88, _0x42facb);
      if (!_0xa9e00c) return false;
      let _0x540bde = _0x12cb1d.get(e.ICommandService),
        _0x3eab09 = _0x12cb1d.get(e.IUndoRedoService),
        _0x4dcdb7 = {
          unitId: _0x26ae88,
          table: w(_0xa9e00c, _0x28eb63, _0x3e8b5a),
        },
        _0x1c7664 = { unitId: _0x26ae88, table: _0xa9e00c };
      return _0x540bde.syncExecuteCommand(Y.id, _0x4dcdb7)
        ? (_0x3eab09.pushUndoRedo({
            unitID: _0x26ae88,
            undoMutations: [{ id: Y.id, params: _0x1c7664 }],
            redoMutations: [{ id: Y.id, params: _0x4dcdb7 }],
          }),
          true)
        : false;
    },
  },
  Dt = {
    id: "slide.command.delete-slide-table-rows",
    type: e.CommandType["COMMAND"],
    handler: (_0x5ba133, _0x1b9112) => {
      if (!_0x1b9112) return false;
      let _0x167691 = _0x5ba133.get(K),
        {
          unitId: _0x1ca4e7,
          tableId: _0x1f78a8,
          startRow: _0x2fa58f,
          endRow: _0x1d1ed9,
        } = _0x1b9112,
        _0x1b452e = _0x167691.getTable(_0x1ca4e7, _0x1f78a8);
      if (!_0x1b452e) return false;
      let _0x24384f = _0x5ba133.get(e.ICommandService),
        _0x2a7414 = _0x5ba133.get(e.IUndoRedoService),
        _0x74fa47 = {
          unitId: _0x1ca4e7,
          table: C(_0x1b452e, _0x2fa58f, _0x1d1ed9),
        },
        _0x53748d = { unitId: _0x1ca4e7, table: _0x1b452e };
      return _0x24384f.syncExecuteCommand(Y.id, _0x74fa47)
        ? (_0x2a7414.pushUndoRedo({
            unitID: _0x1ca4e7,
            undoMutations: [{ id: Y.id, params: _0x53748d }],
            redoMutations: [{ id: Y.id, params: _0x74fa47 }],
          }),
          true)
        : false;
    },
  };
function Ot(_0x126404, _0x378733, _0xe6a777, _0x3db84c, _0x3bf557) {
  let _0x32bfaf = kt(_0x126404, _0x378733);
  if (
    !_0x32bfaf ||
    _0x32bfaf.element["type"] !== t.PageElementTypeEnum["Table"] ||
    _0x32bfaf.element["tableId"] !== _0x378733.tableId
  )
    return null;
  let _0x295e3b = _0x32bfaf.element,
    _0x526c23 = _0x32bfaf.transform,
    _0x404247 = _0x295e3b.transform,
    _0x86c3e4 =
      (_0x526c23 == null ? undefined : _0x526c23.width) ?? _0x404247.width ?? 0,
    _0x6c6e4e =
      (_0x526c23 == null ? undefined : _0x526c23.height) ??
      _0x404247.height ??
      0,
    _0xe08c39 = le(
      _0xe6a777,
      _0x3db84c,
      _0x3bf557 === "row" ? _0x6c6e4e : _0x86c3e4,
      _0x3bf557,
    );
  if (_0xe08c39 <= 0) return null;
  let _0x554f0d = {
      ...e.Tools["deepClone"](_0x295e3b),
      transform: {
        ..._0x404247,
        width:
          _0x3bf557 === "column"
            ? (_0x404247.width ?? _0x86c3e4) + _0xe08c39
            : _0x404247.width,
        height:
          _0x3bf557 === "row"
            ? (_0x404247.height ?? _0x6c6e4e) + _0xe08c39
            : _0x404247.height,
      },
    },
    _0x221c57 = {
      ..._0x526c23,
      width: _0x3bf557 === "column" ? _0x86c3e4 + _0xe08c39 : _0x86c3e4,
      height: _0x3bf557 === "row" ? _0x6c6e4e + _0xe08c39 : _0x6c6e4e,
    };
  return {
    redoMutation: {
      id: t.UpdateSlideElementMutation["id"],
      params: {
        unitId: _0x32bfaf.unitId,
        subUnitId: _0x32bfaf.subUnitId,
        drawingId: _0x32bfaf.drawingId,
        element: _0x554f0d,
        transform: _0x221c57,
      },
    },
    undoMutation: {
      id: t.UpdateSlideElementMutation["id"],
      params: {
        unitId: _0x32bfaf.unitId,
        subUnitId: _0x32bfaf.subUnitId,
        drawingId: _0x32bfaf.drawingId,
        element: _0x295e3b,
        transform: _0x526c23,
      },
    },
  };
}
function kt(_0x4b528b, _0x442895) {
  let _0x35ab36 = _0x4b528b.get(t.ISlideDrawingService);
  if (_0x442895.subUnitId && _0x442895.elementId)
    return (
      _0x35ab36.getDrawingByParam({
        unitId: _0x442895.unitId,
        subUnitId: _0x442895.subUnitId,
        drawingId: _0x442895.elementId,
      }) ?? null
    );
  let _0x3f5b67 = _0x35ab36.drawingManagerData,
    _0x6377b =
      (_0x3f5b67 == null ? undefined : _0x3f5b67[_0x442895.unitId]) ?? {};
  for (let [_0x2bee2a, _0x47d8d2] of Object.entries(_0x6377b)) {
    let _0x217257 = _0x47d8d2.data ?? {},
      _0x3e9c21 = Object.values(_0x217257).find(
        (_0x2956f3) =>
          _0x2956f3.element["type"] === t.PageElementTypeEnum["Table"] &&
          _0x2956f3.element["tableId"] === _0x442895.tableId &&
          _0x2956f3.unitId === _0x442895.unitId &&
          _0x2956f3.subUnitId === _0x2bee2a,
      );
    if (_0x3e9c21) return _0x3e9c21;
  }
  return null;
}
const At = {
  id: "slide.command.insert-slide-table-columns",
  type: e.CommandType["COMMAND"],
  handler: (_0x3481f4, _0x38926e) => {
    if (!_0x38926e) return false;
    let _0xbf9b8b = _0x3481f4.get(K),
      {
        unitId: _0x77d91,
        tableId: _0x5ba112,
        columnIndex: _0x472ff9,
        count: _0x359ccb = 1,
      } = _0x38926e,
      _0x125f5f = _0xbf9b8b.getTable(_0x77d91, _0x5ba112);
    if (!_0x125f5f) return false;
    let _0x14399a = _0x3481f4.get(e.ICommandService),
      _0x2acf66 = _0x3481f4.get(e.IUndoRedoService),
      _0x54d2d0 = S(
        _0x125f5f,
        _0x472ff9,
        _0x359ccb,
        _0x38926e.width ?? jt(_0x125f5f, _0x472ff9),
      ),
      _0x123db5 = { unitId: _0x77d91, table: _0x54d2d0 },
      _0x2e49f9 = { unitId: _0x77d91, table: _0x125f5f },
      _0x2c3620 = { id: Y.id, params: _0x123db5 },
      _0xad83b9 = { id: Y.id, params: _0x2e49f9 },
      _0xff346d = Ot(_0x3481f4, _0x38926e, _0x125f5f, _0x54d2d0, "column"),
      _0x59d480 = _0xff346d ? [_0x2c3620, _0xff346d.redoMutation] : [_0x2c3620],
      _0x6cfe0 = _0xff346d ? [_0xff346d.undoMutation, _0xad83b9] : [_0xad83b9];
    return (0, e.sequenceExecute)(_0x59d480, _0x14399a).result
      ? (_0x2acf66.pushUndoRedo({
          unitID: _0x77d91,
          undoMutations: _0x6cfe0,
          redoMutations: _0x59d480,
        }),
        true)
      : false;
  },
};
function jt(_0xb19c98, _0x3a34be) {
  var _0x397fc9, _0x2ac5f1;
  return (
    ((_0x397fc9 = _0xb19c98.columns[_0x3a34be - 1]) == null
      ? undefined
      : _0x397fc9.width) ??
    ((_0x2ac5f1 = _0xb19c98.columns[_0x3a34be]) == null
      ? undefined
      : _0x2ac5f1.width)
  );
}
const Mt = {
  id: "slide.command.insert-slide-table-rows",
  type: e.CommandType["COMMAND"],
  handler: (_0x27fe4c, _0x1476b0) => {
    if (!_0x1476b0) return false;
    let _0x19fe6c = _0x27fe4c.get(K),
      {
        unitId: _0x3c775d,
        tableId: _0xc6760f,
        rowIndex: _0x2ef360,
        count: _0x47e9ff = 1,
      } = _0x1476b0,
      _0x293a54 = _0x19fe6c.getTable(_0x3c775d, _0xc6760f);
    if (!_0x293a54) return false;
    let _0x4e8124 = _0x27fe4c.get(e.ICommandService),
      _0x38e398 = _0x27fe4c.get(e.IUndoRedoService),
      _0x584c6d = x(
        _0x293a54,
        _0x2ef360,
        _0x47e9ff,
        _0x1476b0.height ?? Nt(_0x293a54, _0x2ef360),
      ),
      _0x215b7b = { unitId: _0x3c775d, table: _0x584c6d },
      _0x29e127 = { unitId: _0x3c775d, table: _0x293a54 },
      _0x483c97 = { id: Y.id, params: _0x215b7b },
      _0x342ac8 = { id: Y.id, params: _0x29e127 },
      _0x3b95c9 = Ot(_0x27fe4c, _0x1476b0, _0x293a54, _0x584c6d, "row"),
      _0x42ae04 = _0x3b95c9 ? [_0x483c97, _0x3b95c9.redoMutation] : [_0x483c97],
      _0x2b1808 = _0x3b95c9 ? [_0x3b95c9.undoMutation, _0x342ac8] : [_0x342ac8];
    return (0, e.sequenceExecute)(_0x42ae04, _0x4e8124).result
      ? (_0x38e398.pushUndoRedo({
          unitID: _0x3c775d,
          undoMutations: _0x2b1808,
          redoMutations: _0x42ae04,
        }),
        true)
      : false;
  },
};
function Nt(_0x2724de, _0x518684) {
  var _0x522249, _0x4c356e;
  return (
    ((_0x522249 = _0x2724de.rows[_0x518684 - 1]) == null
      ? undefined
      : _0x522249.height) ??
    ((_0x4c356e = _0x2724de.rows[_0x518684]) == null
      ? undefined
      : _0x4c356e.height)
  );
}
const Pt = {
    id: "slide.mutation.remove-slide-table",
    type: e.CommandType["MUTATION"],
    handler: (_0x4e9ee5, _0x352a86) => {
      let { unitId: _0x246c21, tableId: _0x575cd5 } = _0x352a86,
        _0x4bf031 = _0x4e9ee5.get(K),
        _0x5976b5 = _0x4e9ee5.get(J);
      return _0x4bf031.removeTable(_0x246c21, _0x575cd5)
        ? (_0x5976b5.notifyTableRemoved(_0x246c21, _0x575cd5), true)
        : false;
    },
  },
  Ft = {
    id: "slide.command.insert-slide-table",
    type: e.CommandType["COMMAND"],
    handler: (_0x594788, _0x578849) => {
      var _0x208216,
        _0x35e590,
        _0x586518,
        _0x3ae83b,
        _0x442cdb,
        _0x1413cc,
        _0x3a4978,
        _0x589338,
        _0x12654d;
      if (!_0x578849) return false;
      let _0x5e3752 = (0, t.getSlideCommandTarget)(
        _0x594788.get(e.IUniverInstanceService),
        _0x578849,
      );
      if (!_0x5e3752) return false;
      let _0x3e6f4c = _0x594788.get(e.ICommandService),
        _0x1a61c5 = _0x594788.get(e.IUndoRedoService),
        _0xad9561 = _0x594788.get(K),
        { unitId: _0x189fde, subUnitId: _0x3183db } = _0x5e3752,
        {
          createOptions: _0x1ae35a,
          element: _0x25351e,
          insertIndex: _0x4b3ef3,
        } = _0x578849,
        _0x3f1bcf =
          ((_0x208216 = _0x578849.table) == null ? undefined : _0x208216.id) ??
          _0x1ae35a.id ??
          (0, e.generateRandomId)(6),
        _0x4c77a2 = _0xad9561.buildTable({ ..._0x1ae35a, id: _0x3f1bcf }),
        _0x95c39e = {
          id: _0x3f1bcf,
          rev:
            ((_0x35e590 = _0x578849.table) == null
              ? undefined
              : _0x35e590.rev) ?? _0x4c77a2.rev,
          name:
            ((_0x586518 = _0x578849.table) == null
              ? undefined
              : _0x586518.name) ?? _0x4c77a2.name,
          description:
            ((_0x3ae83b = _0x578849.table) == null
              ? undefined
              : _0x3ae83b.description) ?? _0x4c77a2.description,
          styleId:
            ((_0x442cdb = _0x578849.table) == null
              ? undefined
              : _0x442cdb.styleId) ?? _0x4c77a2.styleId,
          options: e.Tools["deepClone"](
            ((_0x1413cc = _0x578849.table) == null
              ? undefined
              : _0x1413cc.options) ?? _0x4c77a2.options,
          ),
          columns: e.Tools["deepClone"](
            ((_0x3a4978 = _0x578849.table) == null
              ? undefined
              : _0x3a4978.columns) ?? _0x4c77a2.columns,
          ),
          rows: e.Tools["deepClone"](
            ((_0x589338 = _0x578849.table) == null
              ? undefined
              : _0x589338.rows) ?? _0x4c77a2.rows,
          ),
          custom:
            (_0x12654d = _0x578849.table) != null && _0x12654d.custom
              ? e.Tools["deepClone"](_0x578849.table["custom"])
              : undefined,
        },
        _0x3fe216 = _0x578849.theme
          ? e.Tools["deepClone"](_0x578849.theme)
          : undefined;
      if (!_0x3fe216 && _0x95c39e.styleId) {
        let _0x362786 = _0x594788.get(e.ThemeService);
        _0x3fe216 = dt(
          _0x95c39e.id,
          _0x95c39e.styleId,
          st((_0x13d81b) => _0x362786.getColorFromTheme(_0x13d81b)),
        );
      }
      _0x3fe216 && (_0x95c39e.themeId = _0x3fe216.id);
      let _0x446f27 = It({
        unitId: _0x189fde,
        subUnitId: _0x3183db,
        tableId: _0x3f1bcf,
        element: _0x25351e,
        insertIndex: _0x4b3ef3,
      });
      if (!_0x446f27) return false;
      let _0x288439 = { unitId: _0x189fde, table: _0x95c39e };
      _0x3fe216 && (_0x288439.theme = _0x3fe216);
      let _0x5662ae = { unitId: _0x189fde, tableId: _0x3f1bcf },
        _0x53cbb2 = [{ id: Y.id, params: _0x288439 }, _0x446f27.redoMutation],
        _0x349cdd = [_0x446f27.undoMutation, { id: Pt.id, params: _0x5662ae }];
      return (0, e.sequenceExecute)(_0x53cbb2, _0x3e6f4c).result
        ? (_0x1a61c5.pushUndoRedo({
            unitID: _0x189fde,
            undoMutations: _0x349cdd,
            redoMutations: _0x53cbb2,
          }),
          true)
        : false;
    },
  };
function It(_0x5ec989) {
  let {
      unitId: _0x423289,
      subUnitId: _0x3c52ec,
      tableId: _0x1d9a7f,
      insertIndex: _0x43d958,
    } = _0x5ec989,
    _0x505027 = _0x5ec989.element
      ? e.Tools["deepClone"](_0x5ec989.element)
      : {},
    { transform: _0x2a7ab7, placeholder: _0x325651 } = _0x505027;
  _0x505027.id ||= (0, e.generateRandomId)(6);
  let _0xbd5967 = {
      unitId: _0x423289,
      subUnitId: _0x3c52ec,
      element: Lt({
        tableId: _0x1d9a7f,
        elementId: _0x505027.id,
        transform: _0x2a7ab7,
        placeholder: _0x325651,
      }),
      insertIndex: _0x43d958,
    },
    _0x214b7d = {
      unitId: _0x423289,
      subUnitId: _0x3c52ec,
      drawingId: _0x505027.id,
    };
  return {
    elementId: _0x505027.id,
    redoMutation: { id: t.AddSlideElementMutation["id"], params: _0xbd5967 },
    undoMutation: { id: t.RemoveSlideElementMutation["id"], params: _0x214b7d },
  };
}
function Lt(_0x4ef718) {
  let {
      tableId: _0x2a3001,
      elementId: _0x4f1547,
      transform: _0x43e891,
      placeholder: _0x348684,
    } = _0x4ef718,
    _0x4a4a46 = {
      id: _0x4f1547,
      type: t.PageElementTypeEnum["Table"],
      tableId: _0x2a3001,
      transform: {
        left: (_0x43e891 == null ? undefined : _0x43e891.left) ?? 120,
        top: (_0x43e891 == null ? undefined : _0x43e891.top) ?? 80,
        width: (_0x43e891 == null ? undefined : _0x43e891.width) ?? 360,
        height: (_0x43e891 == null ? undefined : _0x43e891.height) ?? 240,
        rotation: (_0x43e891 == null ? undefined : _0x43e891.rotation) ?? 0,
      },
    };
  return (_0x348684 && (_0x4a4a46.placeholder = _0x348684), _0x4a4a46);
}
const Rt = {
    id: "slide.command.merge-slide-table-cells",
    type: e.CommandType["COMMAND"],
    handler: (_0xe05863, _0x447e82) => {
      if (!_0x447e82) return false;
      let _0x36c58e = _0xe05863.get(K),
        { unitId: _0x7ce95c, tableId: _0x2920e5, range: _0xc6b1f2 } = _0x447e82,
        _0x188cd7 = _0x36c58e.getTable(_0x7ce95c, _0x2920e5);
      if (!_0x188cd7) return false;
      let _0x21e1cd = _0xe05863.get(e.ICommandService),
        _0x2b3fa1 = _0xe05863.get(e.IUndoRedoService),
        _0x496250 = { unitId: _0x7ce95c, table: c(_0x188cd7, _0xc6b1f2) },
        _0x39d91f = { unitId: _0x7ce95c, table: _0x188cd7 };
      return _0x21e1cd.syncExecuteCommand(Y.id, _0x496250)
        ? (_0x2b3fa1.pushUndoRedo({
            unitID: _0x7ce95c,
            undoMutations: [{ id: Y.id, params: _0x39d91f }],
            redoMutations: [{ id: Y.id, params: _0x496250 }],
          }),
          true)
        : false;
    },
  },
  zt = {
    id: "slide.command.move-slide-table-columns",
    type: e.CommandType["COMMAND"],
    handler: (_0xffbc17, _0x5615cd) => {
      if (!_0x5615cd) return false;
      let _0x3749ee = _0xffbc17.get(K),
        {
          unitId: _0x279349,
          tableId: _0x3f2412,
          startColumn: _0x50f0d4,
          endColumn: _0x173630,
          targetColumn: _0x5f2050,
          position: _0x3a99fa,
        } = _0x5615cd,
        _0x279515 = _0x3749ee.getTable(_0x279349, _0x3f2412);
      if (!_0x279515) return false;
      let _0x9ccb0f = D(_0x279515, _0x50f0d4, _0x173630, _0x5f2050, _0x3a99fa);
      if (_0x9ccb0f.rev === _0x279515.rev) return false;
      let _0x48bc00 = _0xffbc17.get(e.ICommandService),
        _0x5b40af = _0xffbc17.get(e.IUndoRedoService),
        _0x3de679 = { unitId: _0x279349, table: _0x9ccb0f },
        _0x670432 = { unitId: _0x279349, table: _0x279515 };
      return _0x48bc00.syncExecuteCommand(Y.id, _0x3de679)
        ? (_0x5b40af.pushUndoRedo({
            unitID: _0x279349,
            undoMutations: [{ id: Y.id, params: _0x670432 }],
            redoMutations: [{ id: Y.id, params: _0x3de679 }],
          }),
          true)
        : false;
    },
  },
  Bt = {
    id: "slide.command.move-slide-table-rows",
    type: e.CommandType["COMMAND"],
    handler: (_0x30ebde, _0x228bae) => {
      if (!_0x228bae) return false;
      let _0x14fe52 = _0x30ebde.get(K),
        {
          unitId: _0x501eb9,
          tableId: _0x22e8ec,
          startRow: _0xc39fec,
          endRow: _0x3ae5ab,
          targetRow: _0x5aea7c,
          position: _0x33a9a9,
        } = _0x228bae,
        _0x3fe823 = _0x14fe52.getTable(_0x501eb9, _0x22e8ec);
      if (!_0x3fe823) return false;
      let _0x378638 = te(_0x3fe823, _0xc39fec, _0x3ae5ab, _0x5aea7c, _0x33a9a9);
      if (_0x378638.rev === _0x3fe823.rev) return false;
      let _0x1ed525 = _0x30ebde.get(e.ICommandService),
        _0x17c2ed = _0x30ebde.get(e.IUndoRedoService),
        _0x42c9b7 = { unitId: _0x501eb9, table: _0x378638 },
        _0x1d57ac = { unitId: _0x501eb9, table: _0x3fe823 };
      return _0x1ed525.syncExecuteCommand(Y.id, _0x42c9b7)
        ? (_0x17c2ed.pushUndoRedo({
            unitID: _0x501eb9,
            undoMutations: [{ id: Y.id, params: _0x1d57ac }],
            redoMutations: [{ id: Y.id, params: _0x42c9b7 }],
          }),
          true)
        : false;
    },
  },
  Vt = {
    id: "slide.command.remove-slide-table",
    type: e.CommandType["COMMAND"],
    handler: (_0xa5ff0c, _0x3812d0) => {
      var _0x1d866b;
      if (!_0x3812d0) return false;
      let _0x2e6420 = (0, t.getSlideCommandTarget)(
        _0xa5ff0c.get(e.IUniverInstanceService),
        _0x3812d0,
      );
      if (!_0x2e6420) return false;
      let _0x2f4776 = _0xa5ff0c.get(K),
        _0x169fa9 = _0xa5ff0c.get(t.ISlideDrawingService),
        {
          presentation: _0x1068e2,
          unitId: _0x26340a,
          subUnitId: _0x1e7161,
        } = _0x2e6420,
        { tableId: _0x844586, elementId: _0x21cb2b } = _0x3812d0,
        _0x5ee7af = _0x2f4776.getTable(_0x26340a, _0x844586),
        _0x1fac5a =
          _0x5ee7af != null && _0x5ee7af.themeId
            ? _0x2f4776.getTheme(_0x26340a, _0x5ee7af.themeId)
            : undefined,
        _0x22f8bc = _0x169fa9.getDrawingByParam({
          unitId: _0x26340a,
          subUnitId: _0x1e7161,
          drawingId: _0x21cb2b,
        }),
        _0x4580a7 = _0x22f8bc == null ? undefined : _0x22f8bc.element;
      if (
        !_0x5ee7af ||
        !_0x4580a7 ||
        _0x4580a7.type !== t.PageElementTypeEnum["Table"] ||
        _0x4580a7.tableId !== _0x844586
      )
        return false;
      let _0x53df06 = _0xa5ff0c.get(e.ICommandService),
        _0xb633d3 = _0xa5ff0c.get(e.IUndoRedoService),
        _0x84089a =
          ((_0x1d866b = _0x1068e2.pageManager["getSlide"](_0x1e7161)) == null
            ? undefined
            : _0x1d866b.getData().elementOrder["indexOf"](_0x21cb2b)) ?? -1,
        _0xfe4686 = {
          unitId: _0x26340a,
          subUnitId: _0x1e7161,
          drawingId: _0x21cb2b,
        },
        _0x26450b = { unitId: _0x26340a, tableId: _0x844586 },
        _0xb9ce5a = [
          { id: t.RemoveSlideElementMutation["id"], params: _0xfe4686 },
          { id: Pt.id, params: _0x26450b },
        ],
        _0x2bfd56 = { unitId: _0x26340a, table: _0x5ee7af };
      _0x1fac5a && (_0x2bfd56.theme = _0x1fac5a);
      let _0x3ae3ce = {
          unitId: _0x26340a,
          subUnitId: _0x1e7161,
          element: _0x4580a7,
          sourcePageType:
            (_0x22f8bc == null ? undefined : _0x22f8bc.sourcePageType) ??
            t.PageTypeEnum["Slide"],
          insertIndex: _0x84089a >= 0 ? _0x84089a : undefined,
        },
        _0x1921c4 = [
          { id: Y.id, params: _0x2bfd56 },
          { id: t.AddSlideElementMutation["id"], params: _0x3ae3ce },
        ];
      return (0, e.sequenceExecute)(_0xb9ce5a, _0x53df06).result
        ? (_0xb633d3.pushUndoRedo({
            unitID: _0x26340a,
            undoMutations: _0x1921c4,
            redoMutations: _0xb9ce5a,
          }),
          true)
        : false;
    },
  },
  Ht = {
    id: "slide.command.unmerge-slide-table-cells",
    type: e.CommandType["COMMAND"],
    handler: (_0x2b4780, _0x4eb804) => {
      if (!_0x4eb804) return false;
      let _0x17a709 = _0x2b4780.get(K),
        {
          unitId: _0x3778eb,
          tableId: _0x22a0a2,
          row: _0x40993f,
          column: _0x34ed6b,
          range: _0x21c46e,
        } = _0x4eb804,
        _0x51df52 = _0x17a709.getTable(_0x3778eb, _0x22a0a2);
      if (!_0x51df52) return false;
      let _0x485bc8 = _0x2b4780.get(e.ICommandService),
        _0x3d0709 = _0x2b4780.get(e.IUndoRedoService),
        _0x486551 = _0x21c46e
          ? u(_0x51df52, _0x21c46e)
          : typeof _0x40993f == "number" && typeof _0x34ed6b == "number"
            ? l(_0x51df52, _0x40993f, _0x34ed6b)
            : null;
      if (!_0x486551) return false;
      let _0x42d40a = { unitId: _0x3778eb, table: _0x486551 },
        _0x2692ec = { unitId: _0x3778eb, table: _0x51df52 };
      return _0x485bc8.syncExecuteCommand(Y.id, _0x42d40a)
        ? (_0x3d0709.pushUndoRedo({
            unitID: _0x3778eb,
            undoMutations: [{ id: Y.id, params: _0x2692ec }],
            redoMutations: [{ id: Y.id, params: _0x42d40a }],
          }),
          true)
        : false;
    },
  },
  Ut = {
    id: "slide.command.update-slide-table",
    type: e.CommandType["COMMAND"],
    handler: (_0x5e903b, _0x44cc36) => {
      if (!_0x44cc36) return false;
      let _0x5d1dd0 = _0x5e903b.get(K),
        { unitId: _0x55ce8f, tableId: _0x47a567, patch: _0x1645f0 } = _0x44cc36,
        _0x202786 = _0x5d1dd0.getTable(_0x55ce8f, _0x47a567);
      if (!_0x202786) return false;
      let _0x8db70f = _0x5e903b.get(e.ICommandService),
        _0x59bb21 = _0x5e903b.get(e.IUndoRedoService),
        _0x56b01c = _0x202786.themeId
          ? _0x5d1dd0.getTheme(_0x55ce8f, _0x202786.themeId)
          : undefined,
        _0x28d0c7 = _0x56b01c,
        _0x184ecd = { ..._0x1645f0 },
        _0x44d197 = ut(_0x202786.styleId, _0x1645f0.styleId);
      _0x44d197 &&
        ((_0x28d0c7 = undefined),
        (_0x184ecd.themeId = null),
        typeof _0x1645f0.styleId == "string" &&
          ((_0x28d0c7 = Wt(
            _0x5d1dd0,
            _0x5e903b.get(e.ThemeService),
            _0x55ce8f,
            _0x202786,
            _0x1645f0.styleId,
          )),
          _0x28d0c7 && (_0x184ecd.themeId = _0x28d0c7.id)));
      let _0x27fc47 = { unitId: _0x55ce8f, table: St(_0x202786, _0x184ecd) },
        _0x41738d = { unitId: _0x55ce8f, table: _0x202786 };
      return (
        _0x44d197 && _0x28d0c7 && (_0x27fc47.theme = _0x28d0c7),
        _0x44d197 && _0x56b01c && (_0x41738d.theme = _0x56b01c),
        _0x8db70f.syncExecuteCommand(Y.id, _0x27fc47)
          ? (_0x59bb21.pushUndoRedo({
              unitID: _0x55ce8f,
              undoMutations: [{ id: Y.id, params: _0x41738d }],
              redoMutations: [{ id: Y.id, params: _0x27fc47 }],
            }),
            true)
          : false
      );
    },
  };
function Wt(_0x29114e, _0x2e5caf, _0x5345fa, _0x60020c, _0x480f7e) {
  let _0x343b65 = _0x29114e.getTheme(_0x5345fa, _0x480f7e);
  return _0x343b65
    ? ft(_0x60020c.id, _0x343b65)
    : dt(
        _0x60020c.id,
        _0x480f7e,
        st((_0x4b5e3e) => _0x2e5caf.getColorFromTheme(_0x4b5e3e)),
      );
}
const Gt = [
  "wholeTable",
  "bandRow",
  "bandCol",
  "firstCol",
  "lastCol",
  "firstRow",
  "lastRow",
];
function Kt(_0x40b804, _0x566968 = {}) {
  let _0x42b3b2 = qt(_0x40b804.columns["map"]((_0xb9c0dc) => _0xb9c0dc.width)),
    _0x42cae5 = qt(
      _0x40b804.rows["map"]((_0x4e2fa1) => _0x4e2fa1.height ?? 24),
    ),
    _0x3a554d = _0x40b804.columns["reduce"](
      (_0x394a8a, _0x12bd8e) => _0x394a8a + _0x12bd8e.width,
      0,
    ),
    _0x2a797e = _0x40b804.rows["reduce"](
      (_0xbc2b1a, _0x138c15) => _0xbc2b1a + (_0x138c15.height ?? 24),
      0,
    ),
    _0x482b91 = { ...ct(), ...(_0x566968.themes ?? {}) },
    _0x12a5cc =
      (_0x40b804.themeId ? _0x482b91[_0x40b804.themeId] : undefined) ??
      (_0x40b804.styleId ? _0x482b91[_0x40b804.styleId] : undefined),
    _0x194d17 = [];
  return (
    _0x40b804.rows["forEach"]((_0x554e13, _0x212c18) => {
      _0x554e13.cells["forEach"]((_0xaaeb61, _0x180983) => {
        let _0x5ec808 = f(_0xaaeb61),
          _0x1ac6d1 = p(_0xaaeb61),
          _0x4e3ed1 = !!_0xaaeb61.hMerge || !!_0xaaeb61.vMerge;
        _0x194d17.push({
          row: _0x212c18,
          column: _0x180983,
          rowSpan: _0x5ec808,
          columnSpan: _0x1ac6d1,
          hidden: _0x4e3ed1,
          bounds: {
            left: _0x42b3b2[_0x180983] ?? 0,
            top: _0x42cae5[_0x212c18] ?? 0,
            width: _0x40b804.columns["slice"](
              _0x180983,
              _0x180983 + _0x1ac6d1,
            ).reduce((_0x255dd3, _0x42dda4) => _0x255dd3 + _0x42dda4.width, 0),
            height: _0x40b804.rows["slice"](
              _0x212c18,
              _0x212c18 + _0x5ec808,
            ).reduce(
              (_0x10d234, _0x1cd3e5) => _0x10d234 + (_0x1cd3e5.height ?? 24),
              0,
            ),
          },
          style: Yt(
            _0x40b804,
            _0x12a5cc,
            _0xaaeb61.style,
            _0x212c18,
            _0x180983,
          ),
        });
      });
    }),
    { width: _0x3a554d, height: _0x2a797e, cells: _0x194d17 }
  );
}
function qt(_0x28fecd) {
  let _0x54db22 = 0;
  return _0x28fecd.map((_0x31e6fe) => {
    let _0x15a4ab = _0x54db22;
    return ((_0x54db22 += _0x31e6fe), _0x15a4ab);
  });
}
function Jt(_0x4fbac6, _0x42c94b, _0x4522d1) {
  let _0x98b6c2 = ["wholeTable"];
  return (
    _0x4fbac6.options["firstRow"] &&
      _0x42c94b === 0 &&
      _0x98b6c2.push("firstRow"),
    _0x4fbac6.options["firstCol"] &&
      _0x4522d1 === 0 &&
      _0x98b6c2.push("firstCol"),
    _0x4fbac6.options["lastRow"] &&
      _0x42c94b === _0x4fbac6.rows["length"] - 1 &&
      _0x98b6c2.push("lastRow"),
    _0x4fbac6.options["lastCol"] &&
      _0x4522d1 === _0x4fbac6.columns["length"] - 1 &&
      _0x98b6c2.push("lastCol"),
    _0x4fbac6.options["bandRow"] &&
      Zt(_0x4fbac6, _0x42c94b) &&
      _0x98b6c2.push("bandRow"),
    _0x4fbac6.options["bandCol"] &&
      Qt(_0x4fbac6, _0x4522d1) &&
      _0x98b6c2.push("bandCol"),
    _0x98b6c2
  );
}
function Yt(_0x31d03b, _0x5c950b, _0x5750f0, _0x4dfe1f, _0x2dd77b) {
  let _0x1c4a98 = Jt(_0x31d03b, _0x4dfe1f, _0x2dd77b),
    _0xf7627d = Gt.filter((_0x468f45) => _0x1c4a98.includes(_0x468f45)).reduce(
      (_0x66e512, _0xa974ad) => {
        let _0x499256 = Xt(_0x5c950b, _0xa974ad);
        return _0x499256 ? X(_0x66e512, _0x499256) : _0x66e512;
      },
      {},
    );
  return {
    ...(_0x5750f0 ? X(_0xf7627d, _0x5750f0) : _0xf7627d),
    roles: _0x1c4a98,
  };
}
function Xt(_0x3d68bc, _0x47bae8) {
  if (_0x3d68bc)
    switch (_0x47bae8) {
      case "wholeTable":
        return _0x3d68bc.wholeTable;
      case "bandRow":
        return _0x3d68bc.bandRow;
      case "bandCol":
        return _0x3d68bc.bandCol;
      case "firstCol":
        return _0x3d68bc.firstCol;
      case "lastCol":
        return _0x3d68bc.lastCol;
      case "firstRow":
        return _0x3d68bc.firstRow;
      case "lastRow":
        return _0x3d68bc.lastRow;
      default:
        return;
    }
}
function Zt(_0x2e3586, _0x56dbf2) {
  return (_0x2e3586.options["firstRow"] && _0x56dbf2 === 0) ||
    (_0x2e3586.options["lastRow"] && _0x56dbf2 === _0x2e3586.rows["length"] - 1)
    ? false
    : (_0x56dbf2 - +!!_0x2e3586.options["firstRow"]) % 2 == 0;
}
function Qt(_0x441b3a, _0x484029) {
  return (_0x441b3a.options["firstCol"] && _0x484029 === 0) ||
    (_0x441b3a.options["lastCol"] &&
      _0x484029 === _0x441b3a.columns["length"] - 1)
    ? false
    : (_0x484029 - +!!_0x441b3a.options["firstCol"]) % 2 == 0;
}
function X(_0x435e44, _0x20e1c5) {
  let _0x260ab5 = {
    ..._0x435e44,
    ..._0x20e1c5,
    ...(_0x20e1c5.borders
      ? {
          borders: {
            ...(_0x435e44 == null ? undefined : _0x435e44.borders),
            ..._0x20e1c5.borders,
          },
        }
      : {}),
    ...(_0x20e1c5.margins
      ? {
          margins: {
            ...(_0x435e44 == null ? undefined : _0x435e44.margins),
            ..._0x20e1c5.margins,
          },
        }
      : {}),
  };
  return (
    Object.prototype["hasOwnProperty"].call(_0x20e1c5, "fill") &&
      _0x20e1c5.fill === undefined &&
      delete _0x260ab5.fill,
    _0x260ab5
  );
}
function $t(_0x36bf7e, _0x57f5cd) {
  if (en(_0x36bf7e)) return _0x36bf7e;
  if (en(_0x57f5cd)) return _0x57f5cd;
}
function en(_0x1e01eb) {
  return !!_0x1e01eb && _0x1e01eb.dash !== "none";
}
function tn(_0x3bfd30, _0x4c1f49, _0x56dac2) {
  let _0x4179f4 = e.Tools["deepClone"](_0x3bfd30),
    _0x2d9e13 = false;
  return (
    s(_0x4179f4.rows, _0x4c1f49, (_0x2ec691) => {
      ((_0x2ec691.style = X(_0x2ec691.style, _0x56dac2)), (_0x2d9e13 = true));
    }),
    _0x2d9e13 && (_0x4179f4.rev += 1),
    _0x4179f4
  );
}
function nn(_0x1c312d, _0x2c936b, _0x5af451, _0xb0435c, _0x4f57ff) {
  var _0x2e8a99, _0x130c7a;
  let _0x3e8b9f =
    (_0x2e8a99 = _0x1c312d.rows[_0x2c936b]) == null
      ? undefined
      : _0x2e8a99.cells[_0x5af451];
  if (!_0x3e8b9f) return null;
  let _0x3d36bb = e.Tools["deepClone"](_0x1c312d.rows),
    _0x1d674b =
      (_0x130c7a = _0x3d36bb[_0x2c936b]) == null
        ? undefined
        : _0x130c7a.cells[_0x5af451];
  return (
    _0xb0435c
      ? (_0x1d674b.textData = e.Tools["deepClone"](_0xb0435c))
      : delete _0x1d674b.textData,
    _0x4f57ff != null &&
      _0x4f57ff.verticalAlign &&
      (_0x1d674b.style = {
        ..._0x1d674b.style,
        verticalAlign: _0x4f57ff.verticalAlign,
      }),
    e.Tools["diffValue"](rn(_0x3e8b9f), rn(_0x1d674b))
      ? null
      : { rows: _0x3d36bb }
  );
}
function rn(_0x98897b) {
  let _0x5902f5 = e.Tools["deepClone"](_0x98897b);
  return ((_0x5902f5.textData = an(_0x5902f5.textData)), _0x5902f5);
}
function an(_0x380a70) {
  var _0x421d69, _0x35d74d;
  let _0x1e78ea = e.Tools["deepClone"](
    _0x380a70 ?? {
      id: "",
      body: { dataStream: "\x0d\x0a" },
      documentStyle: {},
    },
  );
  if (
    ((_0x1e78ea.id = ""),
    (_0x421d69 = _0x1e78ea.body) != null && _0x421d69.paragraphs)
  ) {
    let _0x5280c9 = _0x1e78ea.body["paragraphs"].map((_0x4d71ad) => {
      let _0xd85081 = { ..._0x4d71ad };
      return (
        delete _0xd85081.paragraphId,
        delete _0xd85081.startIndex,
        _0xd85081
      );
    });
    _0x1e78ea.body["paragraphs"] = _0x5280c9;
  }
  if ((_0x35d74d = _0x1e78ea.body) != null && _0x35d74d.sectionBreaks) {
    let _0x8daeb2 = _0x1e78ea.body["sectionBreaks"].map((_0x2d33c3) => {
      let _0x44b56e = { ..._0x2d33c3 };
      return (
        delete _0x44b56e.sectionId,
        delete _0x44b56e.startIndex,
        _0x44b56e
      );
    });
    _0x1e78ea.body["sectionBreaks"] = _0x8daeb2;
  }
  if (_0x1e78ea.documentStyle) {
    let _0x2891f3 = { ..._0x1e78ea.documentStyle };
    (delete _0x2891f3.documentFlavor,
      delete _0x2891f3.marginBottom,
      delete _0x2891f3.marginLeft,
      delete _0x2891f3.marginRight,
      delete _0x2891f3.marginTop,
      delete _0x2891f3.pageSize);
    let _0x30b4d5 = { ..._0x2891f3.renderConfig };
    (delete _0x30b4d5.verticalAlign,
      Object.keys(_0x30b4d5).length > 0
        ? (_0x2891f3.renderConfig = _0x30b4d5)
        : delete _0x2891f3.renderConfig,
      (_0x1e78ea.documentStyle =
        Object.keys(_0x2891f3).length > 0 ? _0x2891f3 : {}));
  }
  return _0x1e78ea;
}
function on(_0x31775a, _0x5a2e30, _0x4932a5, _0x355d8e = {}) {
  let _0x1a364e = ln(_0x5a2e30 / _0x31775a.width, 1),
    _0x284db2 = ln(_0x4932a5 / _0x31775a.height, 1),
    _0x206002 = [
      { kind: "table-handle", rect: { x: -20, y: -20, width: 16, height: 16 } },
    ],
    _0x3407f9 = new Map(),
    _0x5022ae = new Map();
  return (
    _0x31775a.cells["forEach"]((_0x5d754a) => {
      _0x5d754a.hidden ||
        (_0x3407f9.has(_0x5d754a.row) ||
          _0x3407f9.set(_0x5d754a.row, {
            top: _0x5d754a.bounds["top"] * _0x284db2,
            height: _0x5d754a.bounds["height"] * _0x284db2,
          }),
        _0x5022ae.has(_0x5d754a.column) ||
          _0x5022ae.set(_0x5d754a.column, {
            left: _0x5d754a.bounds["left"] * _0x1a364e,
            width: _0x5d754a.bounds["width"] * _0x1a364e,
          }));
    }),
    _0x3407f9.forEach((_0x2373c5, _0x11ba83) => {
      (!_0x355d8e.showAll && _0x355d8e.row !== _0x11ba83) ||
        _0x206002.push({
          kind: "row-select",
          row: _0x11ba83,
          rect: {
            x: -20,
            y: _0x2373c5.top + _0x2373c5.height / 2 - 16 / 2,
            width: 16,
            height: 16,
          },
        });
    }),
    _0x5022ae.forEach((_0x2d3b43, _0xc6f3af) => {
      (!_0x355d8e.showAll && _0x355d8e.column !== _0xc6f3af) ||
        _0x206002.push({
          kind: "column-select",
          column: _0xc6f3af,
          rect: {
            x: _0x2d3b43.left + _0x2d3b43.width / 2 - 16 / 2,
            y: -20,
            width: 16,
            height: 16,
          },
        });
    }),
    _0x206002
  );
}
function sn(_0x25b291, _0x34ad72, _0x270b7a) {
  return (
    _0x25b291.find((_0x3b0e47) => cn(_0x34ad72, _0x270b7a, _0x3b0e47.rect)) ??
    null
  );
}
function cn(_0x4ff5b7, _0x19b540, _0x5e624d) {
  return (
    _0x4ff5b7 >= _0x5e624d.x &&
    _0x4ff5b7 <= _0x5e624d.x + _0x5e624d.width &&
    _0x19b540 >= _0x5e624d.y &&
    _0x19b540 <= _0x5e624d.y + _0x5e624d.height
  );
}
function ln(_0x16b8c4, _0x33288b) {
  return typeof _0x16b8c4 == "number" &&
    Number.isFinite(_0x16b8c4) &&
    _0x16b8c4 > 0
    ? _0x16b8c4
    : _0x33288b;
}
const un = { left: 6, right: 6, top: 4, bottom: 4 };
function dn(_0x4e7f23) {
  return {
    left: Z(_0x4e7f23 == null ? undefined : _0x4e7f23.left, un.left),
    right: Z(_0x4e7f23 == null ? undefined : _0x4e7f23.right, un.right),
    top: Z(_0x4e7f23 == null ? undefined : _0x4e7f23.top, un.top),
    bottom: Z(_0x4e7f23 == null ? undefined : _0x4e7f23.bottom, un.bottom),
  };
}
function fn(_0xb39c45) {
  let {
      cell: _0x1c292d,
      includeMargins: _0x112bc9 = false,
      tableHeight: _0x32a8af,
      tableWidth: _0x51e5d1,
      targetHeight: _0x220a39,
      targetWidth: _0x335cd9,
    } = _0xb39c45,
    _0x1e83e1 = pn(_0x335cd9 / _0x51e5d1, 1),
    _0x14cbae = pn(_0x220a39 / _0x32a8af, 1),
    _0x105fa5 = _0x112bc9 ? dn(_0x1c292d.style["margins"]) : undefined,
    _0x3284fc = (_0x105fa5 == null ? undefined : _0x105fa5.left) ?? 0,
    _0x3390dd = (_0x105fa5 == null ? undefined : _0x105fa5.right) ?? 0,
    _0x18af9a = (_0x105fa5 == null ? undefined : _0x105fa5.top) ?? 0,
    _0x22fe05 = (_0x105fa5 == null ? undefined : _0x105fa5.bottom) ?? 0;
  return {
    left: _0x1c292d.bounds["left"] * _0x1e83e1 + _0x3284fc,
    top: _0x1c292d.bounds["top"] * _0x14cbae + _0x18af9a,
    width: Math.max(
      1,
      _0x1c292d.bounds["width"] * _0x1e83e1 - _0x3284fc - _0x3390dd,
    ),
    height: Math.max(
      1,
      _0x1c292d.bounds["height"] * _0x14cbae - _0x18af9a - _0x22fe05,
    ),
  };
}
function Z(_0x3aa906, _0x44c80c = 0) {
  return typeof _0x3aa906 == "number" && Number.isFinite(_0x3aa906)
    ? _0x3aa906
    : _0x44c80c;
}
function pn(_0x51a086, _0x2f8eb5) {
  let _0x324a85 = Z(_0x51a086, _0x2f8eb5);
  return _0x324a85 > 0 ? _0x324a85 : _0x2f8eb5;
}
const mn = new Set(["row-insert-dot", "column-insert-dot"]),
  hn = new Set([
    "row-header",
    "column-header",
    "row-insert-dot",
    "column-insert-dot",
  ]);
function gn(_0x2729f4) {
  let _0x17cd55 = Rn(_0x2729f4.zoom, 1),
    _0x1c4e14 = 6 / _0x17cd55,
    _0x5d761f = Pn(_0x2729f4.rowHeights),
    _0x4e0c9d = Pn(_0x2729f4.columnWidths),
    _0x1fc8f0 = [
      {
        kind: "table-handle",
        tableId: _0x2729f4.tableId,
        rect: { x: -20, y: -20, width: 16, height: 16 },
      },
    ];
  (_0x1fc8f0.push(..._n(_0x2729f4, _0x5d761f, _0x17cd55)),
    _0x1fc8f0.push(...vn(_0x2729f4, _0x4e0c9d, _0x17cd55)));
  let _0x501e79 = [...yn(_0x2729f4, _0x17cd55), ...bn(_0x2729f4, _0x17cd55)];
  return (
    _0x1fc8f0.push(
      ..._0x501e79.filter((_0x4c7367) => !Sn(_0x4c7367, _0x2729f4)),
    ),
    _0x1fc8f0.push(
      ..._0x501e79.filter((_0x2290cf) => Sn(_0x2290cf, _0x2729f4)),
    ),
    _0x2729f4.rowHeights["slice"](0, -1).forEach((_0x289608, _0x26f413) => {
      var _0x567279;
      let _0x110468 =
          ((_0x567279 = _0x2729f4.rowIndices) == null
            ? undefined
            : _0x567279[_0x26f413]) ?? _0x26f413,
        _0xd2400f = _0x5d761f[_0x26f413] + _0x289608 - _0x1c4e14 / 2;
      _0x1fc8f0.push(...Cn(_0x2729f4, _0x110468, _0xd2400f, _0x1c4e14));
    }),
    _0x2729f4.columnWidths["slice"](0, -1).forEach((_0x108897, _0x3bc2ad) => {
      var _0x4d3e36;
      let _0xcf98e4 =
          ((_0x4d3e36 = _0x2729f4.columnIndices) == null
            ? undefined
            : _0x4d3e36[_0x3bc2ad]) ?? _0x3bc2ad,
        _0xc6d3a0 = _0x4e0c9d[_0x3bc2ad] + _0x108897 - _0x1c4e14 / 2;
      _0x1fc8f0.push(...wn(_0x2729f4, _0xcf98e4, _0xc6d3a0, _0x1c4e14));
    }),
    _0x1fc8f0
  );
}
function _n(_0x3d908d, _0x5e6f2f, _0x94a438) {
  let _0x20b991 = 10 / _0x94a438;
  return _0x3d908d.rowHeights["map"]((_0x5c07a8, _0x1e021e) => {
    var _0x29f614;
    return {
      kind: "row-header",
      tableId: _0x3d908d.tableId,
      row:
        ((_0x29f614 = _0x3d908d.rowIndices) == null
          ? undefined
          : _0x29f614[_0x1e021e]) ?? _0x1e021e,
      rect: {
        x: -_0x20b991,
        y: _0x5e6f2f[_0x1e021e],
        width: _0x20b991,
        height: _0x5c07a8,
      },
    };
  });
}
function vn(_0x5e303a, _0x30eb45, _0x3fbc91) {
  let _0x142e39 = 10 / _0x3fbc91;
  return _0x5e303a.columnWidths["map"]((_0x576af5, _0x4aa8dd) => {
    var _0x2c0330;
    return {
      kind: "column-header",
      tableId: _0x5e303a.tableId,
      column:
        ((_0x2c0330 = _0x5e303a.columnIndices) == null
          ? undefined
          : _0x2c0330[_0x4aa8dd]) ?? _0x4aa8dd,
      rect: {
        x: _0x30eb45[_0x4aa8dd],
        y: -_0x142e39,
        width: _0x576af5,
        height: _0x142e39,
      },
    };
  });
}
function yn(_0x296159, _0x3f7341) {
  let _0x2832bb = 12 / _0x3f7341,
    _0x322fe4 = 10 / _0x3f7341,
    _0x3428ae = 4 / _0x3f7341;
  return Fn(_0x296159.rowHeights).map((_0x512966, _0x2cf4a1) => {
    let _0x2ab10e = In(_0x296159.rowIndices, _0x2cf4a1);
    return {
      kind: "row-insert-dot",
      tableId: _0x296159.tableId,
      row: _0x2ab10e - 1,
      insertIndex: _0x2ab10e,
      rect: {
        x: -_0x322fe4 - _0x2832bb / 2 - _0x3428ae,
        y: _0x512966 - _0x2832bb / 2,
        width: _0x2832bb,
        height: _0x2832bb,
      },
    };
  });
}
function bn(_0x2fa707, _0x12499b) {
  let _0x1715ad = 12 / _0x12499b,
    _0x414914 = 10 / _0x12499b,
    _0x5a8a74 = 4 / _0x12499b + 6 / 2 / _0x12499b;
  return Fn(_0x2fa707.columnWidths).map((_0x33de6d, _0x2c5f20) => {
    let _0x95b184 = In(_0x2fa707.columnIndices, _0x2c5f20);
    return {
      kind: "column-insert-dot",
      tableId: _0x2fa707.tableId,
      column: _0x95b184 - 1,
      insertIndex: _0x95b184,
      rect: {
        x: _0x33de6d - _0x1715ad / 2,
        y: -_0x414914 - _0x5a8a74 - _0x1715ad / 2,
        width: _0x1715ad,
        height: _0x1715ad,
      },
    };
  });
}
function xn(_0x3d11db) {
  if (
    _0x3d11db.kind !== "row-insert-dot" &&
    _0x3d11db.kind !== "column-insert-dot"
  )
    return null;
  if (
    typeof _0x3d11db.insertIndex == "number" &&
    Number.isInteger(_0x3d11db.insertIndex)
  )
    return _0x3d11db.insertIndex;
  let _0x20a44b =
    _0x3d11db.kind === "row-insert-dot" ? _0x3d11db.row : _0x3d11db.column;
  return typeof _0x20a44b == "number" && Number.isInteger(_0x20a44b)
    ? _0x20a44b + 1
    : null;
}
function Sn(_0x2292f5, _0x1f02ec) {
  let _0x1428bc = xn(_0x2292f5);
  if (_0x1428bc === null) return false;
  let _0x50eb17 =
      _0x2292f5.kind === "row-insert-dot"
        ? _0x1f02ec.rowIndices
        : _0x1f02ec.columnIndices,
    _0x455f01 =
      _0x2292f5.kind === "row-insert-dot"
        ? _0x1f02ec.rowHeights["length"]
        : _0x1f02ec.columnWidths["length"],
    _0x3d559b = (_0x50eb17 == null ? undefined : _0x50eb17[0]) ?? 0,
    _0x236521 =
      ((_0x50eb17 == null ? undefined : _0x50eb17[_0x455f01 - 1]) ??
        _0x455f01 - 1) + 1;
  return _0x1428bc === _0x3d559b || _0x1428bc === _0x236521;
}
function Cn(_0xcfe461, _0x1238fe, _0x1d4f56, _0x1169dc) {
  let _0x19971a = Dn(_0xcfe461, _0x1238fe)
    .map((_0x378e7f) =>
      kn(_0xcfe461, _0x378e7f.startColumn, _0x378e7f.endColumn),
    )
    .filter((_0x15aeb9) => !!_0x15aeb9)
    .sort((_0x65d454, _0x2b03f0) => _0x65d454[0] - _0x2b03f0[0]);
  return Mn([0, _0xcfe461.tableWidth], _0x19971a).map(
    ([_0x39c991, _0xd33324]) => ({
      kind: "resize-row",
      tableId: _0xcfe461.tableId,
      row: _0x1238fe,
      rect: {
        x: _0x39c991,
        y: _0x1d4f56,
        width: _0xd33324 - _0x39c991,
        height: _0x1169dc,
      },
    }),
  );
}
function wn(_0x2e88d4, _0x107be6, _0x2f0836, _0x5e4c80) {
  let _0x400f54 = On(_0x2e88d4, _0x107be6)
    .map((_0x176bf7) => An(_0x2e88d4, _0x176bf7.startRow, _0x176bf7.endRow))
    .filter((_0x21034d) => !!_0x21034d)
    .sort((_0x474c82, _0x1bab38) => _0x474c82[0] - _0x1bab38[0]);
  return Mn([0, _0x2e88d4.tableHeight], _0x400f54).map(
    ([_0xe40d61, _0x13a8f6]) => ({
      kind: "resize-column",
      tableId: _0x2e88d4.tableId,
      column: _0x107be6,
      rect: {
        x: _0x2f0836,
        y: _0xe40d61,
        width: _0x5e4c80,
        height: _0x13a8f6 - _0xe40d61,
      },
    }),
  );
}
function Tn(_0xd6b352, _0xebd7b3, _0x21db60) {
  return (
    [..._0xd6b352]
      .sort((_0x4cb80d, _0x2a4547) => Nn(_0x2a4547) - Nn(_0x4cb80d))
      .find((_0x1b469f) => Bn(_0x1b469f, _0xebd7b3, _0x21db60)) ?? null
  );
}
function En(_0x595412, _0x1afa52, _0x2f69a4, _0x488d4a = 1) {
  let _0x4a0d46 = 6 / Rn(_0x488d4a, 1);
  return (
    [..._0x595412]
      .filter((_0x4ca0e5) => hn.has(_0x4ca0e5.kind))
      .sort((_0x367151, _0x1abc27) => Nn(_0x1abc27) - Nn(_0x367151))
      .find((_0x26159e) =>
        mn.has(_0x26159e.kind)
          ? Vn(_0x26159e.rect, _0x1afa52, _0x2f69a4)
          : Hn(_0x26159e.rect, _0x1afa52, _0x2f69a4, _0x4a0d46),
      ) ?? null
  );
}
function Dn(_0x57618d, _0x155b57) {
  var _0x5b8a87;
  return (
    ((_0x5b8a87 = _0x57618d.mergedCells) == null
      ? undefined
      : _0x5b8a87.filter(
          (_0x5b73f5) =>
            _0x155b57 >= _0x5b73f5.startRow && _0x155b57 < _0x5b73f5.endRow,
        )) ?? []
  );
}
function On(_0x246a11, _0x3cae92) {
  var _0xd8441e;
  return (
    ((_0xd8441e = _0x246a11.mergedCells) == null
      ? undefined
      : _0xd8441e.filter(
          (_0xe6935b) =>
            _0x3cae92 >= _0xe6935b.startColumn &&
            _0x3cae92 < _0xe6935b.endColumn,
        )) ?? []
  );
}
function kn(_0x2050a4, _0x4ab776, _0x13bc6e) {
  if (_0x2050a4.columnIndices)
    return jn(
      _0x2050a4.columnWidths,
      _0x2050a4.columnIndices,
      _0x4ab776,
      _0x13bc6e,
    );
  let _0x1695c9 = Ln(_0x2050a4.columnIndices, _0x4ab776),
    _0xa1b91 = Ln(_0x2050a4.columnIndices, _0x13bc6e);
  if (_0x1695c9 < 0 || _0xa1b91 < 0) return null;
  let _0x12d348 = Math.min(_0x1695c9, _0xa1b91),
    _0xfd4d51 = Math.max(_0x1695c9, _0xa1b91);
  return [
    Q(_0x2050a4.columnWidths["slice"](0, _0x12d348)),
    Q(_0x2050a4.columnWidths["slice"](0, _0xfd4d51 + 1)),
  ];
}
function An(_0x1235f5, _0xf1b199, _0x533ed0) {
  if (_0x1235f5.rowIndices)
    return jn(_0x1235f5.rowHeights, _0x1235f5.rowIndices, _0xf1b199, _0x533ed0);
  let _0x5ee73a = Ln(_0x1235f5.rowIndices, _0xf1b199),
    _0x2d74a5 = Ln(_0x1235f5.rowIndices, _0x533ed0);
  if (_0x5ee73a < 0 || _0x2d74a5 < 0) return null;
  let _0x5a4121 = Math.min(_0x5ee73a, _0x2d74a5),
    _0xbff7ee = Math.max(_0x5ee73a, _0x2d74a5);
  return [
    Q(_0x1235f5.rowHeights["slice"](0, _0x5a4121)),
    Q(_0x1235f5.rowHeights["slice"](0, _0xbff7ee + 1)),
  ];
}
function jn(_0x3fa6cc, _0x5bd15d, _0x4a0e6f, _0x1b08a8) {
  let _0x1c2e14 = Math.min(_0x4a0e6f, _0x1b08a8),
    _0x58797c = Math.max(_0x4a0e6f, _0x1b08a8),
    _0x51043c = _0x5bd15d
      .map((_0x5ab842, _0x58c796) => ({
        sourceIndex: _0x5ab842,
        offset: _0x58c796,
      }))
      .filter(
        ({ sourceIndex: _0x411607 }) =>
          _0x411607 >= _0x1c2e14 && _0x411607 <= _0x58797c,
      )
      .map(({ offset: _0x13ddc1 }) => _0x13ddc1);
  if (_0x51043c.length === 0) return null;
  let _0x397fd4 = Math.min(..._0x51043c),
    _0x277676 = Math.max(..._0x51043c);
  return [
    Q(_0x3fa6cc.slice(0, _0x397fd4)),
    Q(_0x3fa6cc.slice(0, _0x277676 + 1)),
  ];
}
function Mn(_0x2a3ff3, _0x48475c) {
  let _0x5b53d2 = [_0x2a3ff3];
  return (
    _0x48475c.forEach(([_0x12f7c9, _0x235ab0]) => {
      _0x5b53d2 = _0x5b53d2.flatMap(([_0x1fc43c, _0x2f5eb1]) => {
        let _0x8648d = Math.max(_0x1fc43c, Math.min(_0x2f5eb1, _0x12f7c9)),
          _0x31a871 = Math.max(_0x1fc43c, Math.min(_0x2f5eb1, _0x235ab0));
        return _0x31a871 <= _0x1fc43c ||
          _0x8648d >= _0x2f5eb1 ||
          _0x8648d >= _0x31a871
          ? [[_0x1fc43c, _0x2f5eb1]]
          : [
              [_0x1fc43c, _0x8648d],
              [_0x31a871, _0x2f5eb1],
            ].filter(([_0x54781f, _0x3f3379]) => _0x3f3379 > _0x54781f);
      });
    }),
    _0x5b53d2
  );
}
function Nn(_0x2fd5e7) {
  return _0x2fd5e7.kind === "row-insert-dot" ||
    _0x2fd5e7.kind === "column-insert-dot"
    ? 3
    : _0x2fd5e7.kind === "resize-column" || _0x2fd5e7.kind === "resize-row"
      ? 2
      : 0;
}
function Pn(_0x47edd9) {
  let _0x1219a8 = [],
    _0x5e7ffa = 0;
  return (
    _0x47edd9.forEach((_0x2c3e24) => {
      (_0x1219a8.push(_0x5e7ffa), (_0x5e7ffa += _0x2c3e24));
    }),
    _0x1219a8
  );
}
function Fn(_0x25ea1d) {
  if (_0x25ea1d.length === 0) return [];
  let _0x151de8 = [0],
    _0x5b5d21 = 0;
  return (
    _0x25ea1d.forEach((_0x2f2f44) => {
      ((_0x5b5d21 += _0x2f2f44), _0x151de8.push(_0x5b5d21));
    }),
    _0x151de8
  );
}
function In(_0x5aaa77, _0x534ad2) {
  return _0x5aaa77
    ? _0x534ad2 === 0
      ? (_0x5aaa77[0] ?? 0)
      : (_0x5aaa77[_0x534ad2 - 1] ?? _0x534ad2 - 1) + 1
    : _0x534ad2;
}
function Ln(_0xd6397, _0x1deeb3) {
  return (
    (_0xd6397 == null
      ? undefined
      : _0xd6397.findIndex((_0xaa1839) => _0xaa1839 === _0x1deeb3)) ?? _0x1deeb3
  );
}
function Q(_0x45509d) {
  return _0x45509d.reduce((_0x30f0e0, _0x21f7bd) => _0x30f0e0 + _0x21f7bd, 0);
}
function Rn(_0x43ae96, _0x5c05d7) {
  return typeof _0x43ae96 == "number" &&
    Number.isFinite(_0x43ae96) &&
    _0x43ae96 > 0
    ? _0x43ae96
    : _0x5c05d7;
}
function zn(_0x4fdd01, _0x4c3745, _0x1a0a83) {
  return (
    _0x4c3745 >= _0x4fdd01.x &&
    _0x4c3745 <= _0x4fdd01.x + _0x4fdd01.width &&
    _0x1a0a83 >= _0x4fdd01.y &&
    _0x1a0a83 <= _0x4fdd01.y + _0x4fdd01.height
  );
}
function Bn(_0x407687, _0x5808ad, _0x4c1ba2) {
  return mn.has(_0x407687.kind)
    ? Vn(_0x407687.rect, _0x5808ad, _0x4c1ba2)
    : zn(_0x407687.rect, _0x5808ad, _0x4c1ba2);
}
function Vn(_0x382980, _0x3f3092, _0x4664d9) {
  let _0x136f21 = Math.min(_0x382980.width, _0x382980.height) / 2,
    _0x26b233 = _0x382980.x + _0x382980.width / 2,
    _0x270879 = _0x382980.y + _0x382980.height / 2,
    _0x33f090 = _0x3f3092 - _0x26b233,
    _0x562e57 = _0x4664d9 - _0x270879;
  return _0x33f090 * _0x33f090 + _0x562e57 * _0x562e57 <= _0x136f21 * _0x136f21;
}
function Hn(_0x3659cc, _0x4e954c, _0x51a79c, _0x43e38c) {
  return (
    _0x4e954c >= _0x3659cc.x - _0x43e38c &&
    _0x4e954c <= _0x3659cc.x + _0x3659cc.width + _0x43e38c &&
    _0x51a79c >= _0x3659cc.y - _0x43e38c &&
    _0x51a79c <= _0x3659cc.y + _0x3659cc.height + _0x43e38c
  );
}
function Un(_0x2bb966) {
  let {
    pluginName: _0x5858de,
    businesses: _0x34d4b4,
    resourceService: _0x2ad7f0,
    modelService: _0x57ad8f,
  } = _0x2bb966;
  return {
    pluginName: _0x5858de,
    businesses: _0x34d4b4,
    toJson: (_0x217be3) => _0x2ad7f0.serializeUnit(_0x217be3),
    parseJson: (_0x5cefc0) => JSON.parse(_0x5cefc0),
    onLoad: (_0x59f6c, _0x2c838f) => _0x2ad7f0.loadUnit(_0x59f6c, _0x2c838f),
    onUnLoad: (_0x1f01a9) => {
      (_0x57ad8f.removeUnit(_0x1f01a9), _0x2ad7f0.unloadUnit(_0x1f01a9));
    },
  };
}
var Wn = "@univerjs-pro/slides-table",
  Gn = "1.0.0-insiders.20260907-70fc579";
const Kn = {};
let qn = class extends e.Disposable {
  constructor(_0x582bd2, _0x3696d7, _0x5e5ddb) {
    (super(),
      (this._resourceManagerService = _0x582bd2),
      (this._resourceService = _0x3696d7),
      (this._modelService = _0x5e5ddb),
      G(this, "_resourceDisposable", null),
      this._initResource());
  }
  _initResource() {
    ((this._resourceDisposable = this._resourceManagerService[
      "registerPluginResource"
    ](
      Un({
        pluginName: "SLIDE_TABLE_PLUGIN",
        businesses: [e.UniverInstanceType["UNIVER_SLIDE"]],
        resourceService: this._resourceService,
        modelService: this._modelService,
      }),
    )),
      this.disposeWithMe(this._resourceDisposable));
  }
};
qn = Tt(
  [
    q(0, e.IResourceManagerService),
    q(1, (0, e.Inject)(K)),
    q(2, (0, e.Inject)(J)),
  ],
  qn,
);
let $ = class extends e.Plugin {
  constructor(_0x495b85 = Kn, _0x3c8dc7, _0x433640, _0x3090aa) {
    (super(),
      (this._config = _0x495b85),
      (this._injector = _0x3c8dc7),
      (this._configService = _0x433640),
      (this._commandService = _0x3090aa));
    let { ..._0x52b350 } = (0, e.merge)({}, Kn, this._config);
    (this._configService["setConfig"]("slides-table.config", _0x52b350),
      this._initCommands());
  }
  onStarting() {
    let _0x1472a2 = this._injector;
    (_0x1472a2.has(K) || _0x1472a2.add([K]),
      _0x1472a2.has(J) || _0x1472a2.add([J]),
      _0x1472a2.add([qn]),
      (0, e.touchDependencies)(_0x1472a2, [[K], [J], [qn]]));
  }
  _initCommands() {
    [Ft, Ut, Vt, Mt, Dt, At, Et, Bt, zt, Rt, Ht, Y, Pt].forEach((_0x397ff3) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x397ff3));
    });
  }
};
(G($, "type", e.UniverInstanceType["UNIVER_SLIDE"]),
  G($, "pluginName", "UniverSlidesTablePlugin"),
  G($, "packageName", Wn),
  G($, "version", Gn),
  ($ = Tt(
    [
      (0, e.DependentOn)(r.UniverLicensePlugin),
      q(1, (0, e.Inject)(e.Injector)),
      q(2, e.IConfigService),
      q(3, e.ICommandService),
    ],
    $,
  )));
function Jn(_0x2f3832, _0x25031b, _0x88f665) {
  return (
    _0x2f3832 === "all" ||
    _0x2f3832 === "top" ||
    (_0x2f3832 === "outer" && _0x25031b === _0x88f665.startRow) ||
    (_0x2f3832 === "innerHorizontal" && _0x25031b > _0x88f665.startRow) ||
    (_0x2f3832 === "inner" && _0x25031b > _0x88f665.startRow)
  );
}
function Yn(_0x5a0bc7, _0x2b3574, _0x100296) {
  return (
    _0x5a0bc7 === "all" ||
    _0x5a0bc7 === "bottom" ||
    (_0x5a0bc7 === "outer" && _0x2b3574 === _0x100296.endRow)
  );
}
function Xn(_0x4f1422, _0x2430f4, _0x1f11fc) {
  return (
    _0x4f1422 === "all" ||
    _0x4f1422 === "left" ||
    (_0x4f1422 === "outer" && _0x2430f4 === _0x1f11fc.startColumn) ||
    (_0x4f1422 === "innerVertical" && _0x2430f4 > _0x1f11fc.startColumn) ||
    (_0x4f1422 === "inner" && _0x2430f4 > _0x1f11fc.startColumn)
  );
}
function Zn(_0x3ce9d, _0x2cafa3, _0x50f5d6) {
  return (
    _0x3ce9d === "all" ||
    _0x3ce9d === "right" ||
    (_0x3ce9d === "outer" && _0x2cafa3 === _0x50f5d6.endColumn)
  );
}
function Qn() {
  return { color: "#1f1f1f", width: 1, dash: "solid" };
}
function $n(_0x26b989, _0x280c02, _0x5ced1b, _0x50bbbe = Qn()) {
  let _0x440306 = i(_0x280c02),
    _0x3f3f0b = false;
  return (
    s(_0x26b989, _0x440306, (_0x50ad1b, _0x34ff22, _0x383271) => {
      var _0x3c4c4c;
      let _0x427802 = {
        ...((_0x3c4c4c = _0x50ad1b.style) == null
          ? undefined
          : _0x3c4c4c.borders),
      };
      if (_0x5ced1b === "none") {
        _0x50ad1b.style = X(_0x50ad1b.style, {
          borders: {
            top: { dash: "none" },
            right: { dash: "none" },
            bottom: { dash: "none" },
            left: { dash: "none" },
          },
        });
        return;
      }
      (Jn(_0x5ced1b, _0x34ff22, _0x440306) && (_0x427802.top = _0x50bbbe),
        Yn(_0x5ced1b, _0x34ff22, _0x440306) && (_0x427802.bottom = _0x50bbbe),
        Xn(_0x5ced1b, _0x383271, _0x440306) && (_0x427802.left = _0x50bbbe),
        Zn(_0x5ced1b, _0x383271, _0x440306) && (_0x427802.right = _0x50bbbe),
        (_0x50ad1b.style = X(_0x50ad1b.style, { borders: _0x427802 })),
        (_0x3f3f0b = true));
    }),
    { rows: _0x26b989, changed: _0x3f3f0b }
  );
}
((exports.DEFAULT_SLIDE_TABLE_COLUMN_COUNT = 3),
  (exports.DEFAULT_SLIDE_TABLE_ELEMENT_LEFT = 120),
  (exports.DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION = 0),
  (exports.DEFAULT_SLIDE_TABLE_ELEMENT_TOP = 80),
  (exports.DEFAULT_SLIDE_TABLE_ROW_COUNT = 3),
  (exports.DEFAULT_SLIDE_TABLE_ROW_HEIGHT = 36),
  (exports.DEFAULT_SLIDE_TABLE_THEME_PRESETS = ot),
  (exports.DeleteSlideTableColumnsCommand = Et),
  (exports.DeleteSlideTableRowsCommand = Dt),
  (exports.InsertSlideTableColumnsCommand = At),
  (exports.InsertSlideTableCommand = Ft),
  (exports.InsertSlideTableRowsCommand = Mt),
  (exports.MergeSlideTableCellsCommand = Rt),
  (exports.MoveSlideTableColumnsCommand = zt),
  (exports.MoveSlideTableRowsCommand = Bt),
  (exports.RemoveSlideTableCommand = Vt),
  (exports.RemoveSlideTableMutation = Pt),
  (exports.SLIDE_TABLE_CONTROL_GUTTER = 20),
  (exports.SetSlideTableMutation = Y),
  (exports.SlideTableBorderDashEnum = tt),
  (exports.SlideTableBorderPresetEnum = nt),
  (exports.SlideTableFillTypeEnum = Qe),
  (exports.SlideTableGradientFillTypeEnum = $e),
  Object.defineProperty(exports, "SlideTableModelService", {
    enumerable: true,
    get: function () {
      return J;
    },
  }),
  (exports.SlideTablePictureFillModeEnum = et),
  (exports.SlideTableResourceService = K),
  (exports.SlideTableTextDirectionEnum = Ze),
  (exports.SlideTableVerticalAlignEnum = Xe),
  Object.defineProperty(exports, "UniverSlidesTablePlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.UnmergeSlideTableCellsCommand = Ht),
  (exports.UpdateSlideTableCommand = Ut),
  (exports.buildBorderPresetPatch = $n),
  (exports.buildDefaultSlideTableThemes = ct),
  (exports.buildFrozenSlideTableTheme = dt),
  (exports.buildSlideTable = Pe),
  (exports.buildSlideTableCellTextDataPatch = nn),
  (exports.buildSlideTableControls = on),
  (exports.buildSlideTableTriggers = gn),
  (exports.buildUpdatedSlideTableSnapshot = St),
  (exports.canMoveSlideTableColumns = E),
  (exports.canMoveSlideTableRows = T),
  (exports.collectSlideTableMergeRanges = m),
  (exports.createSlideTableResourceHook = Un),
  (exports.deleteSlideTableColumns = w),
  (exports.deleteSlideTableRows = C),
  (exports.expandSlideTableRangeToMergedCells = h),
  (exports.findSlideTableMergeRange = d),
  (exports.freezeSlideTableTheme = ft),
  (exports.getDefaultSlideTableBorder = Qn),
  (exports.hasSlideTableStyleChanged = ut),
  (exports.hitTestSlideTableControl = sn),
  (exports.hitTestSlideTableFloatingControl = En),
  (exports.hitTestSlideTableTrigger = Tn),
  (exports.insertSlideTableColumns = S),
  (exports.insertSlideTableRows = x),
  (exports.isPointInRect = cn),
  (exports.isSlideTableMultiCellRange = a),
  (exports.iterateSelectedSlideTableCells = s),
  (exports.mergeSlideTableCellStyle = X),
  (exports.mergeSlideTableCells = c),
  (exports.moveSlideTableColumns = D),
  (exports.moveSlideTableRows = te),
  (exports.normalizeSlideTableCellRange = i),
  (exports.normalizeSlideTableSnapshot = Re),
  (exports.resizeSlideTableColumnBoundary = ae),
  (exports.resizeSlideTableColumns = re),
  (exports.resizeSlideTableGrid = oe),
  (exports.resizeSlideTableRowBoundary = ie),
  (exports.resizeSlideTableRows = ne),
  (exports.resolveSlideTableBuildOptions = Ne),
  (exports.resolveSlideTableCellBoundaryBorder = $t),
  (exports.resolveSlideTableCellRect = fn),
  (exports.resolveSlideTableCellTextMargins = dn),
  (exports.resolveSlideTableRenderModel = Kt),
  (exports.resolveSlideTableScaledInsertSizeDelta = le),
  (exports.resolveSlideTableThemePalette = st),
  (exports.setSlideTableCellStyle = tn),
  (exports.unmergeSlideTableCells = l));
