var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (_0xb85d9d, _0xa2f618, _0x5d59e6, _0x455509) => {
    if (
      (_0xa2f618 && typeof _0xa2f618 == "object") ||
      typeof _0xa2f618 == "function"
    ) {
      for (
        var _0x278270 = r(_0xa2f618),
          _0x54d7aa = 0,
          _0x116190 = _0x278270.length,
          _0x4ea832;
        _0x54d7aa < _0x116190;
        _0x54d7aa++
      )
        ((_0x4ea832 = _0x278270[_0x54d7aa]),
          !a.call(_0xb85d9d, _0x4ea832) &&
            _0x4ea832 !== _0x5d59e6 &&
            t(_0xb85d9d, _0x4ea832, {
              get: ((_0x2d3884) => _0xa2f618[_0x2d3884]).bind(null, _0x4ea832),
              enumerable:
                !(_0x455509 = n(_0xa2f618, _0x4ea832)) || _0x455509.enumerable,
            }));
    }
    return _0xb85d9d;
  },
  s = (_0x240874, _0x17dcea, _0x340bb9) => (
    (_0x340bb9 = _0x240874 == null ? {} : e(i(_0x240874))),
    o(
      _0x17dcea || !_0x240874 || !_0x240874.__esModule
        ? t(_0x340bb9, "default", { value: _0x240874, enumerable: true })
        : _0x340bb9,
      _0x240874,
    )
  );
Object.defineProperty(exports, "t", {
  enumerable: true,
  get: function () {
    return s;
  },
});
