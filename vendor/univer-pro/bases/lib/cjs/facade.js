Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
var e = Object["create"],
  t = Object["defineProperty"],
  n = Object["getOwnPropertyDescriptor"],
  r = Object["getOwnPropertyNames"],
  i = Object["getPrototypeOf"],
  a = Object["prototype"]["hasOwnProperty"],
  o = (_0x2a570a, _0x175a2a, _0x313093, _0x4216f9) => {
    if (
      (_0x175a2a && typeof _0x175a2a == "object") ||
      typeof _0x175a2a == "function"
    ) {
      for (
        var _0x45ce84 = r(_0x175a2a),
          _0x496929 = 0x0,
          _0x167263 = _0x45ce84["length"],
          _0x18deee;
        _0x496929 < _0x167263;
        _0x496929++
      )
        ((_0x18deee = _0x45ce84[_0x496929]),
          !a["call"](_0x2a570a, _0x18deee) &&
            _0x18deee !== _0x313093 &&
            t(_0x2a570a, _0x18deee, {
              get: ((_0x32a4fc) => _0x175a2a[_0x32a4fc])["bind"](
                null,
                _0x18deee,
              ),
              enumerable:
                !(_0x4216f9 = n(_0x175a2a, _0x18deee)) ||
                _0x4216f9["enumerable"],
            }));
    }
    return _0x2a570a;
  },
  s = (_0x40df49, _0x134a2e, _0x5e1833) => (
    (_0x5e1833 = _0x40df49 == null ? {} : e(i(_0x40df49))),
    o(
      _0x134a2e || !_0x40df49 || !_0x40df49["__esModule"]
        ? t(_0x5e1833, "default", { value: _0x40df49, enumerable: !0x0 })
        : _0x5e1833,
      _0x40df49,
    )
  );
let c = require("@univerjs-pro/bases"),
  l = require("@univerjs/core"),
  u = require("@univerjs/core/facade");
u = s(u);
let d = require("@univerjs/protocol"),
  f = require("@univerjs-pro/engine-formula");
var p = class {
    constructor(_0x4f8567, _0x181f94, _0x2dfa27) {
      ((this["_unitId"] = _0x4f8567),
        (this["_commandService"] = _0x181f94),
        (this["_permissionService"] = _0x2dfa27));
    }
    async ["setPoint"](_0x4254f5, _0x145b72) {
      await this["_commandService"]["executeCommand"](
        c["SetBasePermissionCommand"]["id"],
        {
          unitId: this["_unitId"],
          objectId: this["_unitId"],
          action: _0x4254f5,
          value: _0x145b72,
        },
      );
    }
    ["getPoint"](_0x64e5f9) {
      return (0x0, c["getBasePermissionValue"])(
        this["_permissionService"],
        this["_unitId"],
        this["_unitId"],
        _0x64e5f9,
      );
    }
    async ["setEditable"](_0x391b4a = !0x0) {
      await this["_commandService"]["executeCommand"](
        c["SetBasePermissionCommand"]["id"],
        {
          unitId: this["_unitId"],
          objectId: this["_unitId"],
          action: d["UnitAction"]["Edit"],
          value: _0x391b4a,
        },
      );
    }
    async ["setReadOnly"]() {
      await this["_commandService"]["executeCommand"](
        c["SetBasePermissionCommand"]["id"],
        {
          unitId: this["_unitId"],
          objectId: this["_unitId"],
          action: d["UnitAction"]["Edit"],
          value: !0x1,
        },
      );
    }
    ["canEdit"]() {
      return (0x0, c["getBasePermissionValue"])(
        this["_permissionService"],
        this["_unitId"],
        this["_unitId"],
        d["UnitAction"]["Edit"],
      );
    }
  },
  m = class {
    constructor(_0x2b730a, _0x4ffb1e, _0x127d4b, _0x5913a8, _0x2f8860) {
      ((this["_unitId"] = _0x2b730a),
        (this["_objectId"] = _0x4ffb1e),
        (this["_parentObjectIds"] = _0x127d4b),
        (this["_commandService"] = _0x5913a8),
        (this["_permissionService"] = _0x2f8860));
    }
    async ["setEditable"](_0xf1b5c = !0x0) {
      await this["_commandService"]["executeCommand"](
        c["SetBasePermissionCommand"]["id"],
        {
          unitId: this["_unitId"],
          objectId: this["_objectId"],
          action: d["UnitAction"]["Edit"],
          value: _0xf1b5c,
        },
      );
    }
    async ["setReadOnly"]() {
      await this["_commandService"]["executeCommand"](
        c["SetBasePermissionCommand"]["id"],
        {
          unitId: this["_unitId"],
          objectId: this["_objectId"],
          action: d["UnitAction"]["Edit"],
          value: !0x1,
        },
      );
    }
    ["canEdit"]() {
      return (0x0, c["canEditBaseTargets"])(
        this["_permissionService"],
        this["_unitId"],
        [...this["_parentObjectIds"], this["_objectId"]],
      );
    }
  };
function h(_0x47d1f8, _0x179117) {
  return function (_0x11188, _0x48d3fc) {
    _0x179117(_0x11188, _0x48d3fc, _0x47d1f8);
  };
}
function g(_0x3e4c7c, _0x26ffd2, _0x4f7137, _0x4f2a1f) {
  var _0x16e59f = arguments[_0x343148(0x12e)],
    _0x4218df =
      _0x16e59f < 0x3
        ? _0x26ffd2
        : _0x4f2a1f === null
          ? (_0x4f2a1f = Object[_0x343148(0x1ce)](_0x26ffd2, _0x4f7137))
          : _0x4f2a1f,
    _0x1fe53a;
  if (
    typeof Reflect == "object" &&
    typeof Reflect[_0x343148(0x130)] == _0x343148(0x1bc)
  )
    _0x4218df = Reflect["decorate"](_0x3e4c7c, _0x26ffd2, _0x4f7137, _0x4f2a1f);
  else {
    for (
      var _0xe546e5 = _0x3e4c7c[_0x343148(0x12e)] - 0x1;
      _0xe546e5 >= 0x0;
      _0xe546e5--
    )
      (_0x1fe53a = _0x3e4c7c[_0xe546e5]) &&
        (_0x4218df =
          (_0x16e59f < 0x3
            ? _0x1fe53a(_0x4218df)
            : _0x16e59f > 0x3
              ? _0x1fe53a(_0x26ffd2, _0x4f7137, _0x4218df)
              : _0x1fe53a(_0x26ffd2, _0x4f7137)) || _0x4218df);
  }
  return (
    _0x16e59f > 0x3 &&
      _0x4218df &&
      Object[_0x343148(0x23c)](_0x26ffd2, _0x4f7137, _0x4218df),
    _0x4218df
  );
}
let _ = class {
  constructor(_0x19ca6f, _0x2e3a88, _0xb710a0, _0x4c818e, _0x1206d6) {
    ((this[_0x38ee0d(0x223)] = _0x19ca6f),
      (this["_table"] = _0x2e3a88),
      (this[_0x38ee0d(0x24b)] = _0xb710a0),
      (this["_commandService"] = _0x4c818e),
      (this[_0x38ee0d(0x27d)] = _0x1206d6));
  }
  ["getId"]() {
    return this[_0x2ec752(0x24b)];
  }
  ["getPermission"]() {
    let _0x3868ac = this["_table"][_0x5dabe6(0x24e)]();
    return new m(
      this[_0x5dabe6(0x223)]["getId"](),
      (0x0, c[_0x5dabe6(0x1b9)])(_0x3868ac, this[_0x5dabe6(0x24b)]),
      [(0x0, c["getBaseTablePermissionObjectId"])(_0x3868ac)],
      this["_commandService"],
      this["_permissionService"],
    );
  }
  ["getField"]() {
    return this["_getField"]();
  }
  ["getName"]() {
    return this["_getField"]()[_0x560ac6(0x162)];
  }
  ["getType"]() {
    return this[_0x4d2a12(0x147)]()[_0x4d2a12(0x222)];
  }
  ["getConfig"]() {
    return this[_0x18907(0x147)]()[_0x18907(0xff)];
  }
  ["getDefaultValue"]() {
    return this[_0xef4ae9(0x147)]()[_0xef4ae9(0x1e8)];
  }
  ["getDescription"]() {
    return this[_0x10c566(0x147)]()["description"];
  }
  ["isReadonly"]() {
    return !!this[_0x1021cf(0x147)]()[_0x1021cf(0x104)];
  }
  ["setName"](_0x286955) {
    return this["update"]({ name: _0x286955 });
  }
  ["setConfig"](_0x255058, _0x59c398) {
    return this[_0x12e6ec(0x273)]({ config: _0x255058 }, _0x59c398);
  }
  ["setDefaultValue"](_0x3b213e) {
    return this["update"]({ defaultValue: _0x3b213e });
  }
  ["update"](_0x31a4e9, _0x2f542c) {
    let _0x2dcdb7 = this[_0x278343(0x147)]()[_0x278343(0x222)];
    return (_0x31a4e9["type"] ?? _0x2dcdb7) ===
      l[_0x278343(0x1f6)][_0x278343(0x21c)] &&
      (Object["prototype"]["hasOwnProperty"]["call"](_0x31a4e9, "config") ||
        _0x31a4e9[_0x278343(0x222)] === l[_0x278343(0x1f6)]["Formula"]) &&
      !this["_writeFormulaExternalReferences"](_0x2f542c)
      ? !0x1
      : this["_commandService"][_0x278343(0x226)](
          c["UpdateBaseFieldCommand"]["id"],
          {
            unitId: this[_0x278343(0x223)][_0x278343(0x24e)](),
            tableId: this[_0x278343(0x1c2)][_0x278343(0x24e)](),
            fieldId: this["_fieldId"],
            patch: _0x31a4e9,
          },
        );
  }
  ["changeType"](_0x31bf8a, _0x341ef0 = {}, _0x121142) {
    return _0x31bf8a === l[_0x217e98(0x1f6)][_0x217e98(0x21c)] &&
      !this[_0x217e98(0x17c)](_0x121142)
      ? !0x1
      : this[_0x217e98(0x110)][_0x217e98(0x226)](
          c["ChangeBaseFieldTypeCommand"]["id"],
          {
            unitId: this[_0x217e98(0x223)][_0x217e98(0x24e)](),
            tableId: this[_0x217e98(0x1c2)]["getId"](),
            fieldId: this[_0x217e98(0x24b)],
            input: { type: _0x31bf8a, config: _0x341ef0 },
          },
        );
  }
  ["delete"]() {
    return this["_commandService"][_0x2e8cb3(0x226)](
      c[_0x2e8cb3(0x281)]["id"],
      {
        unitId: this[_0x2e8cb3(0x223)][_0x2e8cb3(0x24e)](),
        tableId: this[_0x2e8cb3(0x1c2)][_0x2e8cb3(0x24e)](),
        fieldId: this[_0x2e8cb3(0x24b)],
      },
    );
  }
  ["move"](_0x5bb0ea) {
    return this[_0x4d9fae(0x110)][_0x4d9fae(0x226)](c[_0x4d9fae(0x1ed)]["id"], {
      unitId: this["_base"][_0x4d9fae(0x24e)](),
      tableId: this["_table"]["getId"](),
      fieldId: this[_0x4d9fae(0x24b)],
      target: _0x5bb0ea,
    });
  }
  ["_getField"]() {
    let _0xbf85a8 =
      this[_0x1fdf11(0x1c2)][_0x1fdf11(0x235)]()[_0x1fdf11(0xeb)][
        this[_0x1fdf11(0x24b)]
      ];
    if (!_0xbf85a8)
      throw Error(
        "[FField]:\x20field\x20\x22" +
          this["_fieldId"] +
          "\x22\x20does\x20not\x20exist.",
      );
    return _0xbf85a8;
  }
  ["_writeFormulaExternalReferences"](_0x134010) {
    if (!_0x134010 || !Array[_0x51f357(0x276)](_0x134010["externalReferences"]))
      return (console[_0x51f357(0xde)](_0x51f357(0x1c4)), !0x1);
    if (_0x134010[_0x51f357(0x17a)]["length"] === 0x0) return !0x0;
    let _0x2a31da = this["_commandService"][_0x51f357(0x226)](
      f[_0x51f357(0x160)]["id"],
      {
        unitId: this["_base"][_0x51f357(0x24e)](),
        references: _0x134010[_0x51f357(0x17a)],
      },
    );
    return (
      _0x2a31da ||
        console[_0x51f357(0xde)](
          "[Base\x20Field\x20Facade]:\x20Failed\x20to\x20bind\x20External\x20References.",
        ),
      _0x2a31da
    );
  }
};
_ = g([h(0x3, l["ICommandService"]), h(0x4, l["IPermissionService"])], _);
let v = (function (_0x3ba1a5) {
  return (
    (_0x3ba1a5["Id"] = "id"),
    (_0x3ba1a5[_0xeb01e2(0x268)] = "name"),
    (_0x3ba1a5[_0xeb01e2(0xd2)] = _0xeb01e2(0x151)),
    _0x3ba1a5
  );
})({});
function y(_0x2afe33) {
  return !!(
    _0x2afe33 &&
    _0x2afe33[_0x5edc02(0x1f3)] !== !0x0 &&
    _0x2afe33[_0x5edc02(0x222)] !== l[_0x5edc02(0x1f6)]["RecordId"]
  );
}
function b(_0x5bfe6c, _0x2e836c, _0x36f87d = "id") {
  if (!_0x2e836c) return {};
  let _0x355a55 = {};
  return (
    Object[_0x5cbf22(0x16b)](_0x2e836c)[_0x5cbf22(0x282)](
      ([_0x5ebf93, _0x1e0316]) => {
        const _0x489dde = _0x5cbf22;
        let _0x297e8e = S(_0x5bfe6c, _0x5ebf93, _0x36f87d);
        _0x355a55[_0x297e8e] = x(
          _0x5bfe6c[_0x489dde(0xeb)][_0x297e8e],
          _0x1e0316,
        );
      },
    ),
    _0x355a55
  );
}
function x(_0x40d953, _0x114bf0) {
  if (
    (_0x40d953 == null ? void 0x0 : _0x40d953[_0x284a29(0x222)]) !==
      l[_0x284a29(0x1f6)]["Attachment"] ||
    _0x114bf0 == null
  )
    return _0x114bf0;
  if (!Array["isArray"](_0x114bf0))
    throw TypeError(
      _0x284a29(0x247) + _0x40d953[_0x284a29(0x162)] + _0x284a29(0x252),
    );
  return _0x114bf0[_0x284a29(0x255)]((_0x17a90d, _0x3b4d05) =>
    C(_0x40d953, _0x17a90d, _0x3b4d05),
  );
}
function S(_0x440e7c, _0x277fba, _0xfe78f6) {
  if (
    _0xfe78f6 === "id" ||
    (_0xfe78f6 === _0x598ccf(0x151) && _0x440e7c[_0x598ccf(0xeb)][_0x277fba])
  )
    return _0x277fba;
  let _0x4ec764 = Object["values"](_0x440e7c[_0x598ccf(0xeb)])[_0x598ccf(0xe9)](
    (_0x27a706) => _0x27a706[_0x598ccf(0x162)] === _0x277fba,
  );
  if (_0x4ec764[_0x598ccf(0x12e)] === 0x1) return _0x4ec764[0x0]["id"];
  throw _0x4ec764[_0x598ccf(0x12e)] > 0x1
    ? Error("Duplicate\x20Base\x20field\x20name:\x20" + _0x277fba)
    : Error(_0x598ccf(0x142) + _0x277fba);
}
function C(_0x1f0bc0, _0x3558c5, _0x4abfed) {
  let _0x43f707 =
    _0x196d81(0x16f) +
    _0x4abfed +
    "\x20for\x20field\x20\x22" +
    _0x1f0bc0[_0x196d81(0x162)] +
    "\x22";
  if (!O(_0x3558c5)) throw TypeError(_0x43f707 + _0x196d81(0x280));
  if ("url" in _0x3558c5) throw TypeError(_0x43f707 + _0x196d81(0x254));
  if (_0x196d81(0x222) in _0x3558c5)
    throw TypeError(_0x43f707 + _0x196d81(0x1c9));
  let _0x418448 = T(_0x3558c5["id"], _0x43f707, "id"),
    _0x3d23ce = T(_0x3558c5["name"], _0x43f707, "name"),
    _0x3e0775 = T(_0x3558c5[_0x196d81(0x1e5)], _0x43f707, _0x196d81(0x1e5));
  return {
    id: _0x418448,
    name: _0x3d23ce,
    source: _0x3e0775,
    sourceType: w(_0x3558c5[_0x196d81(0x239)], _0x3e0775, _0x43f707),
    ...E(_0x3558c5, "mimeType", _0x43f707),
    ...D(_0x3558c5, "size", _0x43f707),
    ...D(_0x3558c5, "width", _0x43f707),
    ...D(_0x3558c5, _0x196d81(0x24d), _0x43f707),
    ...E(_0x3558c5, "thumbnail", _0x43f707),
  };
}
function w(_0x22f85c, _0x4fc011, _0x5151cf) {
  if (_0x22f85c == null)
    return _0x4fc011[_0x4c8d26(0x120)](_0x4c8d26(0x123))
      ? l[_0x4c8d26(0x267)]["BASE64"]
      : l[_0x4c8d26(0x267)][_0x4c8d26(0x1fc)];
  if (
    _0x22f85c === l[_0x4c8d26(0x267)]["URL"] ||
    _0x22f85c === l[_0x4c8d26(0x267)][_0x4c8d26(0x107)] ||
    _0x22f85c === l[_0x4c8d26(0x267)]["BASE64"]
  )
    return _0x22f85c;
  throw TypeError(_0x5151cf + _0x4c8d26(0x219));
}
function T(_0x590a4a, _0x20728c, _0x4c8fc8) {
  if (typeof _0x590a4a != _0x59798a(0x275) || !_0x590a4a[_0x59798a(0xf1)]())
    throw TypeError(
      _0x20728c + _0x59798a(0x199) + _0x4c8fc8 + _0x59798a(0x148),
    );
  return _0x590a4a;
}
function E(_0x1a1bdc, _0x3ad484, _0x4e4043) {
  let _0x2af0b4 = _0x1a1bdc[_0x3ad484];
  if (_0x2af0b4 == null) return {};
  if (typeof _0x2af0b4 != _0x28683e(0x275) || !_0x2af0b4[_0x28683e(0xf1)]())
    throw TypeError(
      _0x4e4043 + _0x28683e(0x199) + _0x3ad484 + _0x28683e(0x19b),
    );
  return { [_0x3ad484]: _0x2af0b4 };
}
function D(_0x414f46, _0x8f19e1, _0x32d0f4) {
  let _0x12bac6 = _0x414f46[_0x8f19e1];
  if (_0x12bac6 == null) return {};
  if (
    typeof _0x12bac6 != _0x375eea(0xd8) ||
    !Number[_0x375eea(0x209)](_0x12bac6) ||
    _0x12bac6 < 0x0
  )
    throw TypeError(
      _0x32d0f4 + _0x375eea(0x199) + _0x8f19e1 + _0x375eea(0x200),
    );
  return { [_0x8f19e1]: _0x12bac6 };
}
function O(_0x4a5eb0) {
  return (
    typeof _0x4a5eb0 == _0x562e4a(0x23b) &&
    !!_0x4a5eb0 &&
    !Array[_0x562e4a(0x276)](_0x4a5eb0)
  );
}
var k;
let A = (k = class {
  constructor(_0x8f8d47, _0x1dabad, _0x55088b, _0x229ed4, _0x41ff15) {
    ((this["_base"] = _0x8f8d47),
      (this[_0x4953fe(0x1c2)] = _0x1dabad),
      (this[_0x4953fe(0xed)] = _0x55088b),
      (this[_0x4953fe(0x1e4)] = _0x229ed4),
      (this[_0x4953fe(0x110)] = _0x41ff15),
      this["_assertInBounds"]());
  }
  ["getBaseId"]() {
    return this["_base"][_0x121d49(0x24e)]();
  }
  ["getTableId"]() {
    return this[_0x3b94d7(0x1c2)][_0x3b94d7(0x24e)]();
  }
  ["getRange"]() {
    return { ...this["_range"] };
  }
  ["getRow"]() {
    return this[_0x1fea4f(0xed)]["startRow"];
  }
  ["getColumn"]() {
    return this[_0x4b3e7c(0xed)][_0x4b3e7c(0x144)];
  }
  ["getNumRows"]() {
    return (
      this[_0x49a504(0xed)][_0x49a504(0xee)] -
      this[_0x49a504(0xed)][_0x49a504(0x218)] +
      0x1
    );
  }
  ["getNumColumns"]() {
    return (
      this[_0x324a7c(0xed)][_0x324a7c(0x10e)] -
      this[_0x324a7c(0xed)][_0x324a7c(0x144)] +
      0x1
    );
  }
  ["getValues"]() {
    let _0x4cc331 = this[_0x58299e(0x1f2)](),
      _0x1eb737 = this["_getFieldIds"](_0x4cc331),
      _0x51cf0c = [];
    for (
      let _0x4dbe8d = this[_0x58299e(0xed)][_0x58299e(0x218)];
      _0x4dbe8d <= this["_range"][_0x58299e(0xee)];
      _0x4dbe8d++
    ) {
      var _0x1a3f8c;
      let _0x244ec4 =
          (_0x1a3f8c = _0x4cc331[_0x58299e(0x172)]) == null
            ? void 0x0
            : _0x1a3f8c[_0x4dbe8d],
        _0x7c1b85 = [];
      for (
        let _0xc75d23 = this[_0x58299e(0xed)][_0x58299e(0x144)];
        _0xc75d23 <= this["_range"][_0x58299e(0x10e)];
        _0xc75d23++
      ) {
        let _0x4cf078 = _0x1eb737[_0xc75d23];
        _0x7c1b85[_0x58299e(0xe0)](
          _0x244ec4 && _0x4cf078
            ? (0x0, c[_0x58299e(0x284)])(_0x4cc331, _0x244ec4, _0x4cf078)
            : null,
        );
      }
      _0x51cf0c[_0x58299e(0xe0)](_0x7c1b85);
    }
    return _0x51cf0c;
  }
  ["getValue"]() {
    var _0x29700e;
    return (
      ((_0x29700e = this[_0x71b2e3(0x1db)]()[0x0]) == null
        ? void 0x0
        : _0x29700e[0x0]) ?? null
    );
  }
  ["setValue"](_0x4577db) {
    return this[_0x5a6389(0x25e)]([[_0x4577db]]);
  }
  ["setValues"](_0xf97229) {
    let _0x587fc1 = this[_0x14694b(0x24c)](),
      _0x1ae632 = this[_0x14694b(0x137)]();
    if (
      _0xf97229[_0x14694b(0x12e)] > _0x587fc1 ||
      _0xf97229["some"]((_0x41747d) => _0x41747d[_0x14694b(0x12e)] > _0x1ae632)
    ) {
      var _0x5b0437;
      throw Error(
        _0x14694b(0x179) +
          _0xf97229[_0x14694b(0x12e)] +
          "x" +
          (((_0x5b0437 = _0xf97229[0x0]) == null
            ? void 0x0
            : _0x5b0437[_0x14694b(0x12e)]) ?? 0x0) +
          _0x14694b(0x27e) +
          _0x587fc1 +
          "x" +
          _0x1ae632 +
          ".",
      );
    }
    let _0x1e3b19 = this["_getTable"](),
      _0xcf502e = this["_getFieldIds"](_0x1e3b19),
      _0x3e294a = _0xf97229[_0x14694b(0x153)]((_0x3d3f65, _0x32965a) =>
        _0x3d3f65["map"]((_0x147bda, _0x28a21a) => {
          const _0x5b1801 = _0x14694b;
          var _0x25bb23;
          let _0x59d950 = this[_0x5b1801(0xed)][_0x5b1801(0x218)] + _0x32965a,
            _0x5b29cc =
              _0xcf502e[this[_0x5b1801(0xed)][_0x5b1801(0x144)] + _0x28a21a],
            _0x48b58d =
              (_0x25bb23 = _0x1e3b19[_0x5b1801(0x172)]) == null
                ? void 0x0
                : _0x25bb23[_0x59d950];
          if (!_0x5b29cc || !_0x48b58d) throw Error(_0x5b1801(0x22e));
          return { recordId: _0x48b58d, fieldId: _0x5b29cc, value: _0x147bda };
        }),
      );
    return this[_0x14694b(0x110)][_0x14694b(0x226)](c[_0x14694b(0x19f)]["id"], {
      unitId: this[_0x14694b(0x223)]["getId"](),
      tableId: this[_0x14694b(0x1c2)][_0x14694b(0x24e)](),
      patches: _0x3e294a,
      source: c[_0x14694b(0x20a)][_0x14694b(0xe5)],
    });
  }
  ["clear"]() {
    return this[_0xf04a96(0x25e)](
      Array["from"]({ length: this[_0xf04a96(0x24c)]() }, () =>
        Array[_0xf04a96(0xf0)]({ length: this["getNumColumns"]() }, () => null),
      ),
    );
  }
  ["offset"](
    _0x5f1faa,
    _0x1a3e0f,
    _0x5b663c = this["getNumRows"](),
    _0x447878 = this["getNumColumns"](),
  ) {
    return this[_0x4443a2(0x1e4)][_0x4443a2(0x1e6)](
      k,
      this[_0x4443a2(0x223)],
      this["_table"],
      {
        startRow: this[_0x4443a2(0xed)][_0x4443a2(0x218)] + _0x5f1faa,
        startColumn: this[_0x4443a2(0xed)]["startColumn"] + _0x1a3e0f,
        endRow:
          this[_0x4443a2(0xed)][_0x4443a2(0x218)] + _0x5f1faa + _0x5b663c - 0x1,
        endColumn:
          this[_0x4443a2(0xed)][_0x4443a2(0x144)] + _0x1a3e0f + _0x447878 - 0x1,
      },
      this[_0x4443a2(0x1e4)],
    );
  }
  ["_getTable"]() {
    let _0x47a6ef = this[_0xce78d8(0x1c2)][_0xce78d8(0x235)]();
    if (!_0x47a6ef) throw Error(_0xce78d8(0x258));
    return (0x0, c[_0xce78d8(0x191)])(_0x47a6ef);
  }
  ["_assertInBounds"]() {
    var _0x503df3;
    let _0x168f47 = this[_0x2b7861(0x1f2)](),
      _0x5bc1e1 =
        ((_0x503df3 = _0x168f47[_0x2b7861(0x1c8)]) == null
          ? void 0x0
          : _0x503df3[_0x2b7861(0x12e)]) ?? 0x0,
      _0x1cd989 = this[_0x2b7861(0x126)](_0x168f47)[_0x2b7861(0x12e)];
    if (
      this[_0x2b7861(0xed)][_0x2b7861(0x218)] < 0x0 ||
      this[_0x2b7861(0xed)]["startColumn"] < 0x0 ||
      this[_0x2b7861(0xed)][_0x2b7861(0xee)] <
        this[_0x2b7861(0xed)][_0x2b7861(0x218)] ||
      this[_0x2b7861(0xed)][_0x2b7861(0x10e)] <
        this[_0x2b7861(0xed)][_0x2b7861(0x144)] ||
      this["_range"]["endRow"] >= Math[_0x2b7861(0x166)](_0x5bc1e1, 0x1) ||
      this[_0x2b7861(0xed)][_0x2b7861(0x10e)] >=
        Math[_0x2b7861(0x166)](_0x1cd989, 0x1)
    )
      throw Error(
        "[FBaseRange]:\x20range\x20is\x20out\x20of\x20bounds.\x20Max\x20rows:\x20" +
          _0x5bc1e1 +
          _0x2b7861(0x165) +
          _0x1cd989 +
          _0x2b7861(0xd7) +
          JSON[_0x2b7861(0xf7)](this["_range"]) +
          ".",
      );
  }
  ["_getFieldIds"](_0x1ca19d) {
    return _0x1ca19d["fieldOrder"][_0x325ae2(0xe9)]((_0x2f33f2) =>
      y(_0x1ca19d["fields"][_0x2f33f2]),
    );
  }
});
A = k = g([h(0x4, l["ICommandService"])], A);
function j(_0x11f97d) {
  "@babel/helpers - typeof";
  return (
    (j =
      typeof Symbol == "function" && typeof Symbol[_0x5b4e9b(0x125)] == "symbol"
        ? function (_0x24dde4) {
            return typeof _0x24dde4;
          }
        : function (_0x4e8064) {
            const _0x3c299d = _0x5b4e9b;
            return _0x4e8064 &&
              typeof Symbol == _0x3c299d(0x1bc) &&
              _0x4e8064[_0x3c299d(0x1b2)] === Symbol &&
              _0x4e8064 !== Symbol["prototype"]
              ? _0x3c299d(0xd9)
              : typeof _0x4e8064;
          }),
    j(_0x11f97d)
  );
}
function M(_0x5f1c5e, _0x3d3504) {
  if (j(_0x5f1c5e) != _0x1362f4(0x23b) || !_0x5f1c5e) return _0x5f1c5e;
  var _0x409512 = _0x5f1c5e[Symbol[_0x1362f4(0x1e1)]];
  if (_0x409512 !== void 0x0) {
    var _0x1d187d = _0x409512["call"](_0x5f1c5e, _0x3d3504 || _0x1362f4(0x261));
    if (j(_0x1d187d) != _0x1362f4(0x23b)) return _0x1d187d;
    throw TypeError(_0x1362f4(0xe8));
  }
  return (_0x3d3504 === _0x1362f4(0x275) ? String : Number)(_0x5f1c5e);
}
function N(_0xa6df00) {
  var _0x4c5eb3 = M(_0xa6df00, _0xe5cde6(0x275));
  return j(_0x4c5eb3) == _0xe5cde6(0xd9) ? _0x4c5eb3 : _0x4c5eb3 + "";
}
function P(_0x505c5a, _0x55a2f1, _0x4f4f36) {
  return (
    (_0x55a2f1 = N(_0x55a2f1)) in _0x505c5a
      ? Object["defineProperty"](_0x505c5a, _0x55a2f1, {
          value: _0x4f4f36,
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
        })
      : (_0x505c5a[_0x55a2f1] = _0x4f4f36),
    _0x505c5a
  );
}
var F;
let I = (F = class extends u["FBaseInitialable"] {
  constructor(
    _0xd2a8f7,
    _0x3fdbdc,
    _0x2a5b7e,
    _0x24ef3d,
    _0x5f50db,
    _0x5713ce,
  ) {
    (super(_0x24ef3d),
      (this[_0x18f888(0x223)] = _0xd2a8f7),
      (this[_0x18f888(0x1c2)] = _0x3fdbdc),
      (this[_0x18f888(0x16d)] = _0x2a5b7e),
      (this[_0x18f888(0x260)] = _0x24ef3d),
      (this[_0x18f888(0x110)] = _0x5f50db),
      (this[_0x18f888(0x27d)] = _0x5713ce),
      P(this, _0x18f888(0xfe), void 0x0),
      P(this, _0x18f888(0x14b), void 0x0),
      (this[_0x18f888(0xfe)] = _0xd2a8f7[_0x18f888(0x24e)]()),
      (this[_0x18f888(0x14b)] = _0x3fdbdc["getId"]()));
  }
  ["getBaseFacade"]() {
    return this[_0x383bd5(0x223)];
  }
  ["getTableFacade"]() {
    return this[_0x14ebb4(0x1c2)];
  }
  ["getId"]() {
    return this[_0x35f07d(0x16d)];
  }
  ["getPermission"]() {
    let _0x3e7c68 = this[_0xc2fbce(0x1c2)][_0xc2fbce(0x24e)]();
    return new m(
      this[_0xc2fbce(0x223)][_0xc2fbce(0x24e)](),
      (0x0, c[_0xc2fbce(0x271)])(_0x3e7c68, this[_0xc2fbce(0x16d)]),
      [(0x0, c[_0xc2fbce(0x112)])(_0x3e7c68)],
      this[_0xc2fbce(0x110)],
      this[_0xc2fbce(0x27d)],
    );
  }
  ["getRecord"]() {
    return { ...this[_0x2b0763(0x246)](), values: this[_0x2b0763(0x1db)]() };
  }
  ["getValue"](_0x3d3857) {
    return y(this[_0xc3a057(0x1c2)]["getTable"]()["fields"][_0x3d3857])
      ? (this[_0xc3a057(0x246)]()[_0xc3a057(0x1f5)][_0x3d3857] ?? null)
      : null;
  }
  ["getValues"]() {
    let _0x4af709 = this[_0x3326f0(0x1c2)][_0x3326f0(0x235)]();
    return Object[_0x3326f0(0x118)](
      Object[_0x3326f0(0x16b)](this["_getRecord"]()[_0x3326f0(0x1f5)])[
        "filter"
      ](([_0x31fe64]) => y(_0x4af709[_0x3326f0(0xeb)][_0x31fe64])),
    );
  }
  ["setValue"](_0x1bb4ae, _0x59c6dc) {
    let _0x44ec66 =
      this["_table"][_0x1a2dea(0x235)]()[_0x1a2dea(0xeb)][_0x1bb4ae];
    return this["_commandService"][_0x1a2dea(0x226)](
      c[_0x1a2dea(0x1d7)]["id"],
      {
        unitId: this[_0x1a2dea(0x223)][_0x1a2dea(0x24e)](),
        tableId: this[_0x1a2dea(0x1c2)][_0x1a2dea(0x24e)](),
        recordId: this[_0x1a2dea(0x16d)],
        fieldId: _0x1bb4ae,
        value: x(_0x44ec66, _0x59c6dc),
        source: c[_0x1a2dea(0x20a)]["Facade"],
      },
    );
  }
  ["setAttachments"](_0x342516, _0x15de3e) {
    return this[_0x2456da(0x1b7)](
      _0x342516,
      _0x15de3e[_0x2456da(0x255)]((_0x4fd294) => ({ ..._0x4fd294 })),
    );
  }
  ["getAttachments"](_0x1469b4) {
    this[_0x170356(0x1ef)](_0x1469b4);
    let _0xdd876b = this["getValue"](_0x1469b4);
    return Array["isArray"](_0xdd876b)
      ? _0xdd876b[_0x170356(0x255)]((_0x3e14e5, _0x41d4ae) =>
          R(_0x3e14e5, _0x1469b4, _0x41d4ae),
        )
      : [];
  }
  ["deleteAttachments"](_0x30107b, _0x256866) {
    this["_getAttachmentField"](_0x30107b);
    let _0x12a618 = new Set(
      _0x256866[_0x2d0cf0(0x255)]((_0x2bb338) => _0x2bb338["id"]),
    );
    if (!_0x12a618[_0x2d0cf0(0xf4)]) return !0x0;
    let _0x4fc25b = this[_0x2d0cf0(0x18f)](_0x30107b),
      _0x4187e3 = _0x4fc25b[_0x2d0cf0(0xe9)](
        (_0x19abef) => !_0x12a618["has"](_0x19abef["id"]),
      );
    return (
      _0x4187e3["length"] === _0x4fc25b["length"] ||
      this["setAttachments"](_0x30107b, _0x4187e3)
    );
  }
  ["setValues"](_0xdde929, _0x1d20f9 = "id") {
    let _0x1ec2d7 = this["_table"][_0x2c11f9(0x235)](),
      _0x4e2aaf = [
        {
          recordId: this[_0x2c11f9(0x16d)],
          values: b(_0x1ec2d7, _0xdde929, _0x1d20f9),
        },
      ];
    return this["_commandService"][_0x2c11f9(0x226)](
      c["SetBaseRecordValuesCommand"]["id"],
      {
        unitId: this[_0x2c11f9(0x223)]["getId"](),
        tableId: this["_table"][_0x2c11f9(0x24e)](),
        patches: _0x4e2aaf,
        source: c[_0x2c11f9(0x20a)][_0x2c11f9(0xe5)],
      },
    );
  }
  ["delete"]() {
    return this[_0x335b6f(0x110)][_0x335b6f(0x226)](
      c["DeleteBaseRecordCommand"]["id"],
      {
        unitId: this["_base"][_0x335b6f(0x24e)](),
        tableId: this[_0x335b6f(0x1c2)][_0x335b6f(0x24e)](),
        recordId: this[_0x335b6f(0x16d)],
        source: c["BaseEventSource"]["Facade"],
      },
    );
  }
  ["duplicate"](_0x48090e) {
    let _0x8fc225 = {
      ...this[_0x150c38(0x246)](),
      ..._0x48090e,
      id: (0x0, l[_0x150c38(0x108)])(0x6),
    };
    ((_0x8fc225[_0x150c38(0x1f5)] = {
      ..._0x8fc225[_0x150c38(0x1f5)],
      ...(_0x48090e == null ? void 0x0 : _0x48090e[_0x150c38(0x1f5)]),
    }),
      Reflect[_0x150c38(0x184)](
        _0x8fc225[_0x150c38(0x1f5)],
        l[_0x150c38(0xfd)],
      ));
    let _0x3e4536 = Date["now"]();
    if (
      ((_0x8fc225[_0x150c38(0x1c3)] ||= "" + _0x3e4536),
      (_0x8fc225[_0x150c38(0x263)] ||= _0x3e4536),
      (_0x8fc225[_0x150c38(0x26a)] ||= _0x3e4536),
      !this["_commandService"]["syncExecuteCommand"](c[_0x150c38(0xfb)]["id"], {
        unitId: this["_base"][_0x150c38(0x24e)](),
        tableId: this[_0x150c38(0x1c2)][_0x150c38(0x24e)](),
        sourceRecordId: this[_0x150c38(0x16d)],
        record: _0x8fc225,
        source: c[_0x150c38(0x20a)]["Facade"],
      }))
    )
      throw Error(_0x150c38(0x1a0) + this[_0x150c38(0x16d)] + "\x22.");
    return this["_injector"]["createInstance"](
      F,
      this["_base"],
      this[_0x150c38(0x1c2)],
      _0x8fc225["id"],
      this["_injector"],
    );
  }
  ["setOrderKey"](_0x1f8f29) {
    return this[_0x23aa64(0x110)][_0x23aa64(0x226)](c[_0x23aa64(0x193)]["id"], {
      unitId: this["_base"]["getId"](),
      tableId: this["_table"]["getId"](),
      recordId: this["_recordId"],
      orderKey: _0x1f8f29,
    });
  }
  ["getLinkedRecordIds"](_0x2667db) {
    let _0x111eb9 = this["_getRecordLinkField"](_0x2667db);
    return (0x0, c[_0x4b345b(0x1f8)])(this["getValue"](_0x111eb9["id"]));
  }
  ["setLinkedRecordIds"](_0x5b7dab, _0x3ad2dc) {
    let _0x6299cd = this["_getRecordLinkField"](_0x5b7dab),
      _0x3fcd2f = (0x0, c[_0x5ce944(0xdb)])(_0x3ad2dc),
      _0x6120cb = (0x0, c[_0x5ce944(0x14e)])(
        this[_0x5ce944(0x223)][_0x5ce944(0xf8)]()[_0x5ce944(0x178)](),
        _0x6299cd,
        _0x3fcd2f,
      );
    if (!_0x6120cb["valid"])
      throw Error(
        _0x6120cb[_0x5ce944(0x115)] ??
          "[FRecord]:\x20invalid\x20RecordLink\x20value.",
      );
    return this[_0x5ce944(0x110)][_0x5ce944(0x226)](
      c["UpdateBaseCellCommand"]["id"],
      {
        unitId: this[_0x5ce944(0x223)]["getId"](),
        tableId: this[_0x5ce944(0x1c2)][_0x5ce944(0x24e)](),
        recordId: this[_0x5ce944(0x16d)],
        fieldId: _0x5b7dab,
        value: _0x3fcd2f,
        source: c[_0x5ce944(0x20a)]["Facade"],
      },
    );
  }
  ["addLinkedRecord"](_0x49a5dd, _0x397c8d) {
    let _0x58e049 = (0x0, c[_0x51a221(0x15b)])(
      this[_0x51a221(0x1fa)](_0x49a5dd),
    );
    if (!_0x58e049)
      throw Error(
        "[FRecord]:\x20RecordLink\x20field\x20\x22" +
          _0x49a5dd +
          "\x22\x20has\x20invalid\x20config.",
      );
    let _0x22fa2b = this[_0x51a221(0x256)](_0x49a5dd);
    return _0x58e049["multiple"] && _0x22fa2b[_0x51a221(0x15a)](_0x397c8d)
      ? !0x0
      : this[_0x51a221(0x1b0)](
          _0x49a5dd,
          _0x58e049[_0x51a221(0x168)] ? [..._0x22fa2b, _0x397c8d] : [_0x397c8d],
        );
  }
  ["removeLinkedRecord"](_0x2afe4a, _0x51c1fd) {
    let _0x4271cf = this["getLinkedRecordIds"](_0x2afe4a);
    return (
      !_0x4271cf[_0x1407c9(0x15a)](_0x51c1fd) ||
      this[_0x1407c9(0x1b0)](
        _0x2afe4a,
        _0x4271cf["filter"]((_0x3ad7d0) => _0x3ad7d0 !== _0x51c1fd),
      )
    );
  }
  ["getParent"](_0x10e596) {
    let _0x508fb8 =
      this[_0x43b207(0x197)](_0x10e596)[_0x43b207(0x25b)][_0x43b207(0xfc)](
        this["_recordId"],
      ) ?? null;
    return _0x508fb8 ? this["_table"][_0x43b207(0x1a2)](_0x508fb8) : null;
  }
  ["getChildren"](_0x2e1531) {
    return (this[_0x2db795(0x197)](_0x2e1531)[_0x2db795(0x1b6)][
      _0x2db795(0xfc)
    ](this[_0x2db795(0x16d)]) ?? [])["flatMap"]((_0x317b18) => {
      let _0x419950 = this["_table"]["getRecordById"](_0x317b18);
      return _0x419950 ? [_0x419950] : [];
    });
  }
  ["getAncestors"](_0xd9b3dd) {
    let _0xa031f6 = this[_0x1db080(0x197)](_0xd9b3dd),
      _0x343684 = [],
      _0x4f6a2c =
        _0xa031f6[_0x1db080(0x25b)]["get"](this[_0x1db080(0x16d)]) ?? null;
    for (; _0x4f6a2c;) {
      let _0x4db53b = this[_0x1db080(0x1c2)][_0x1db080(0x1a2)](_0x4f6a2c);
      (_0x4db53b && _0x343684[_0x1db080(0xe0)](_0x4db53b),
        (_0x4f6a2c =
          _0xa031f6["parentByRecordId"][_0x1db080(0xfc)](_0x4f6a2c) ?? null));
    }
    return _0x343684;
  }
  ["getDescendants"](_0x2eb6f1) {
    let _0x15978e = this[_0x39d8b8(0x197)](_0x2eb6f1),
      _0x413e86 = _0x15978e[_0x39d8b8(0x12c)][_0x39d8b8(0x257)](
        this[_0x39d8b8(0x16d)],
      ),
      _0x5066c5 = _0x15978e[_0x39d8b8(0x25f)][_0x39d8b8(0x12d)](
        this[_0x39d8b8(0x16d)],
      )
        ? this[_0x39d8b8(0x1bd)](_0x15978e[_0x39d8b8(0x1b6)], this["_recordId"])
        : [];
    return _0x413e86 < 0x0
      ? []
      : _0x5066c5[_0x39d8b8(0x153)]((_0x4cc648) => {
          const _0x1beea0 = _0x39d8b8;
          let _0x35735e = this[_0x1beea0(0x1c2)][_0x1beea0(0x1a2)](_0x4cc648);
          return _0x35735e ? [_0x35735e] : [];
        });
  }
  ["setParent"](_0x171fb0, _0x36a507, _0x25762c) {
    return this[_0x3c8a3d(0x110)][_0x3c8a3d(0x226)](
      c["MoveBaseHierarchyRecordCommand"]["id"],
      {
        unitId: this[_0x3c8a3d(0x223)][_0x3c8a3d(0x24e)](),
        tableId: this[_0x3c8a3d(0x1c2)]["getId"](),
        fieldId: _0x171fb0,
        recordId: this[_0x3c8a3d(0x16d)],
        parentRecordId: _0x36a507,
        orderKey: _0x25762c,
        source: c[_0x3c8a3d(0x20a)][_0x3c8a3d(0xe5)],
      },
    );
  }
  ["addChild"](_0x3a58d5, _0x8aab50, _0x54861d = "id", _0x9a44a4) {
    let _0x200508 = this[_0x1a7eea(0x1c2)][_0x1a7eea(0x235)](),
      _0x198460 = Date[_0x1a7eea(0x204)](),
      _0x365bb6 = {
        ..._0x9a44a4,
        id: (0x0, l[_0x1a7eea(0x108)])(0x6),
        values: b(_0x200508, _0x8aab50, _0x54861d),
        orderKey:
          (_0x9a44a4 == null ? void 0x0 : _0x9a44a4[_0x1a7eea(0x1c3)]) ||
          "" + _0x198460,
        createdAt:
          (_0x9a44a4 == null ? void 0x0 : _0x9a44a4[_0x1a7eea(0x263)]) ||
          _0x198460,
        updatedAt:
          (_0x9a44a4 == null ? void 0x0 : _0x9a44a4[_0x1a7eea(0x26a)]) ||
          _0x198460,
      };
    if (
      !this[_0x1a7eea(0x110)][_0x1a7eea(0x226)](
        c["CreateBaseChildRecordCommand"]["id"],
        {
          unitId: this[_0x1a7eea(0x223)][_0x1a7eea(0x24e)](),
          tableId: this["_table"][_0x1a7eea(0x24e)](),
          fieldId: _0x3a58d5,
          parentRecordId: this["_recordId"],
          record: _0x365bb6,
          source: c[_0x1a7eea(0x20a)][_0x1a7eea(0xe5)],
        },
      )
    )
      throw Error(_0x1a7eea(0x21f) + this[_0x1a7eea(0x16d)] + "\x22.");
    return this[_0x1a7eea(0x260)]["createInstance"](
      F,
      this["_base"],
      this[_0x1a7eea(0x1c2)],
      _0x365bb6["id"],
      this["_injector"],
    );
  }
  ["_getHierarchyIndex"](_0x19ce9c) {
    return (0x0, c[_0x26b2c2(0x272)])(
      this[_0x26b2c2(0x1c2)][_0x26b2c2(0x235)](),
      _0x19ce9c,
    );
  }
  ["_collectDescendantIds"](_0x5c9349, _0x508294) {
    let _0x3bde00 = [],
      _0x54ee51 = (_0x115c84) => {
        for (let _0x3397ae of _0x5c9349[_0x4d7595(0xfc)](_0x115c84) ?? [])
          (_0x3bde00[_0x4d7595(0xe0)](_0x3397ae), _0x54ee51(_0x3397ae));
      };
    return (_0x54ee51(_0x508294), _0x3bde00);
  }
  ["_getRecord"]() {
    let _0x16474f =
      this["_table"][_0x4118c5(0x235)]()[_0x4118c5(0x132)][
        this[_0x4118c5(0x16d)]
      ];
    if (!_0x16474f)
      throw Error(_0x4118c5(0x16c) + this[_0x4118c5(0x16d)] + _0x4118c5(0x164));
    return _0x16474f;
  }
  ["_getRecordLinkField"](_0xb2f45) {
    let _0x59f153 = this["_table"][_0x3ea636(0x235)]()["fields"][_0xb2f45];
    if (
      !_0x59f153 ||
      _0x59f153[_0x3ea636(0x222)] !== l["BaseFieldType"][_0x3ea636(0x283)]
    )
      throw Error(_0x3ea636(0x1d0) + _0xb2f45 + _0x3ea636(0x227));
    return _0x59f153;
  }
  ["_getAttachmentField"](_0x356e82) {
    let _0x1a0668 =
      this[_0x1a7e2a(0x1c2)][_0x1a7e2a(0x235)]()[_0x1a7e2a(0xeb)][_0x356e82];
    if (
      !_0x1a0668 ||
      _0x1a0668[_0x1a7e2a(0x222)] !== l["BaseFieldType"][_0x1a7e2a(0x286)]
    )
      throw Error(_0x1a7e2a(0x1d0) + _0x356e82 + _0x1a7e2a(0xd5));
    return _0x1a0668;
  }
});
I = F = g([h(0x4, l["ICommandService"]), h(0x5, l["IPermissionService"])], I);
function L(_0x21e20d) {
  return !!(
    _0x21e20d &&
    typeof _0x21e20d == _0x1554a6(0x23b) &&
    "id" in _0x21e20d &&
    typeof _0x21e20d["id"] == _0x1554a6(0x275) &&
    _0x1554a6(0x162) in _0x21e20d &&
    typeof _0x21e20d["name"] == _0x1554a6(0x275)
  );
}
function R(_0x4401c6, _0x154be6, _0x2b343e) {
  if (!L(_0x4401c6))
    throw Error(
      "[FRecord]:\x20attachment\x20at\x20index\x20" +
        _0x2b343e +
        _0x1182bc(0x26f) +
        _0x154be6 +
        _0x1182bc(0x101),
    );
  return { ..._0x4401c6 };
}
let z = class {
  constructor(
    _0x364d99,
    _0x233279,
    _0x3def6f,
    _0x327b98,
    _0x9a3e4b,
    _0x5bbf03,
    _0x46f3fa,
  ) {
    ((this["_base"] = _0x364d99),
      (this[_0x43f826(0x1c2)] = _0x233279),
      (this["_viewId"] = _0x3def6f),
      (this[_0x43f826(0x260)] = _0x327b98),
      (this[_0x43f826(0x110)] = _0x9a3e4b),
      (this[_0x43f826(0x27d)] = _0x5bbf03),
      (this[_0x43f826(0x167)] = _0x46f3fa));
  }
  ["getId"]() {
    return this["_viewId"];
  }
  ["getPermission"]() {
    let _0x5f5bcd = this["_table"]["getId"]();
    return new m(
      this[_0x2eaafa(0x223)]["getId"](),
      (0x0, c[_0x2eaafa(0x250)])(_0x5f5bcd, this[_0x2eaafa(0x149)]),
      [(0x0, c[_0x2eaafa(0x112)])(_0x5f5bcd)],
      this["_commandService"],
      this[_0x2eaafa(0x27d)],
    );
  }
  ["getView"]() {
    return this[_0x29d3e1(0x208)]();
  }
  ["getName"]() {
    return this[_0x21adeb(0x208)]()[_0x21adeb(0x162)];
  }
  ["getType"]() {
    return this[_0x4cbd2c(0x208)]()[_0x4cbd2c(0x222)];
  }
  ["setName"](_0x1a2d1a) {
    return this[_0x34ccb0(0x110)][_0x34ccb0(0x226)](c[_0x34ccb0(0x17e)]["id"], {
      unitId: this["_base"][_0x34ccb0(0x24e)](),
      tableId: this["_table"][_0x34ccb0(0x24e)](),
      viewId: this[_0x34ccb0(0x149)],
      name: _0x1a2d1a,
    });
  }
  ["getConfig"]() {
    let _0x14e546 = this[_0x12aad6(0x111)](),
      _0x1274fd = this[_0x12aad6(0x208)]()["config"];
    switch (_0x14e546) {
      case l["BaseViewType"][_0x12aad6(0x1eb)]:
        return _0x1274fd;
      case l[_0x12aad6(0x171)][_0x12aad6(0x158)]:
        return _0x1274fd;
      case l["BaseViewType"]["Calendar"]:
        return _0x1274fd;
      case l[_0x12aad6(0x171)][_0x12aad6(0x143)]:
        return _0x1274fd;
      case l["BaseViewType"][_0x12aad6(0x249)]:
        return _0x1274fd;
      default:
        return _0x1274fd;
    }
  }
  ["updateConfig"](_0x15d835) {
    return this["_commandService"][_0x45d57e(0x226)](
      c[_0x45d57e(0x1b4)]["id"],
      {
        unitId: this[_0x45d57e(0x223)][_0x45d57e(0x24e)](),
        tableId: this["_table"][_0x45d57e(0x24e)](),
        viewId: this["_viewId"],
        patch: _0x15d835,
      },
    );
  }
  ["getConditionalColorRules"]() {
    var _0xc9f419;
    return l[_0x305d74(0x119)][_0x305d74(0x1f1)](
      ((_0xc9f419 = this[_0x305d74(0x208)]()["config"][_0x305d74(0x10d)]) ==
      null
        ? void 0x0
        : _0xc9f419[_0x305d74(0x1c0)]) ?? [],
    );
  }
  ["setConditionalColorRules"](_0x486676) {
    return this["_commandService"][_0x1a8324(0x226)](
      c[_0x1a8324(0x129)]["id"],
      {
        unitId: this["_base"][_0x1a8324(0x24e)](),
        tableId: this[_0x1a8324(0x1c2)][_0x1a8324(0x24e)](),
        viewId: this["_viewId"],
        type: c[_0x1a8324(0x1ab)][_0x1a8324(0x1ff)],
        rules: _0x486676,
      },
    );
  }
  ["addConditionalColorRule"](_0x4d2e95) {
    return this[_0x50e64b(0x110)][_0x50e64b(0x226)](c[_0x50e64b(0x129)]["id"], {
      unitId: this[_0x50e64b(0x223)]["getId"](),
      tableId: this[_0x50e64b(0x1c2)][_0x50e64b(0x24e)](),
      viewId: this[_0x50e64b(0x149)],
      type: c[_0x50e64b(0x1ab)][_0x50e64b(0x20f)],
      rule: _0x4d2e95,
    });
  }
  ["deleteConditionalColorRule"](_0x368cd3) {
    return this[_0x416808(0x110)][_0x416808(0x226)](
      c["UpdateBaseViewConditionalColorRulesCommand"]["id"],
      {
        unitId: this[_0x416808(0x223)][_0x416808(0x24e)](),
        tableId: this["_table"]["getId"](),
        viewId: this[_0x416808(0x149)],
        type: c[_0x416808(0x1ab)][_0x416808(0x20c)],
        ruleId: _0x368cd3,
      },
    );
  }
  ["clearConditionalColorRules"]() {
    return this[_0x2b99ad(0x110)][_0x2b99ad(0x226)](c[_0x2b99ad(0x129)]["id"], {
      unitId: this[_0x2b99ad(0x223)]["getId"](),
      tableId: this["_table"][_0x2b99ad(0x24e)](),
      viewId: this[_0x2b99ad(0x149)],
      type: c[_0x2b99ad(0x1ab)][_0x2b99ad(0x181)],
    });
  }
  ["getFilter"]() {
    return this["_getView"]()[_0x44ea7e(0xe9)] ?? null;
  }
  ["setFilter"](_0x31d207) {
    return this[_0x6991f0(0x110)][_0x6991f0(0x226)](c[_0x6991f0(0x1d4)]["id"], {
      unitId: this[_0x6991f0(0x223)][_0x6991f0(0x24e)](),
      tableId: this[_0x6991f0(0x1c2)]["getId"](),
      viewId: this[_0x6991f0(0x149)],
      filter: _0x31d207,
    });
  }
  ["getSort"]() {
    return this[_0x2f6c38(0x208)]()[_0x2f6c38(0x1fb)] ?? [];
  }
  ["setSort"](_0x5535d4) {
    return this[_0x500d54(0x110)]["syncExecuteCommand"](
      c[_0x500d54(0x1a1)]["id"],
      {
        unitId: this["_base"][_0x500d54(0x24e)](),
        tableId: this[_0x500d54(0x1c2)][_0x500d54(0x24e)](),
        viewId: this[_0x500d54(0x149)],
        sort: _0x5535d4,
      },
    );
  }
  ["getGroup"]() {
    return this["_getView"]()["group"] ?? [];
  }
  ["setGroup"](_0x245928) {
    return this[_0x412d7e(0x110)][_0x412d7e(0x226)](c[_0x412d7e(0x188)]["id"], {
      unitId: this["_base"]["getId"](),
      tableId: this[_0x412d7e(0x1c2)][_0x412d7e(0x24e)](),
      viewId: this[_0x412d7e(0x149)],
      group: _0x245928,
    });
  }
  ["getFieldSettings"](_0x43271a) {
    var _0x39b778;
    return y(
      this[_0x4a916c(0x1c2)][_0x4a916c(0x235)]()[_0x4a916c(0xeb)][_0x43271a],
    )
      ? (((_0x39b778 = this[_0x4a916c(0x208)]()["fieldSettings"]) == null
          ? void 0x0
          : _0x39b778[_0x43271a]) ?? {})
      : {};
  }
  ["getVisibleFields"]() {
    let _0x45d7ea = this[_0x40bf8e(0x1c2)]["getTable"](),
      _0x63cc0b = this["_getView"]();
    return (_0x63cc0b[_0x40bf8e(0x27f)] ?? _0x45d7ea[_0x40bf8e(0x27f)])
      ["filter"]((_0x4b22f2) => {
        const _0xd9174a = _0x40bf8e;
        var _0x4233bf;
        let _0x191928 = _0x45d7ea[_0xd9174a(0xeb)][_0x4b22f2];
        return (
          y(_0x191928) &&
          !(
            (_0x4233bf = _0x63cc0b[_0xd9174a(0x182)]) != null &&
            (_0x4233bf = _0x4233bf[_0x4b22f2]) != null &&
            _0x4233bf[_0xd9174a(0x1b1)]
          )
        );
      })
      [_0x40bf8e(0x255)]((_0x106f16) =>
        this[_0x40bf8e(0x260)][_0x40bf8e(0x1e6)](
          _,
          this["_base"],
          this["_table"],
          _0x106f16,
        ),
      );
  }
  ["setFieldVisible"](_0x3c9ce6, _0x2eeee3) {
    return y(
      this[_0xddca8(0x1c2)][_0xddca8(0x235)]()[_0xddca8(0xeb)][_0x3c9ce6],
    )
      ? this[_0xddca8(0x110)][_0xddca8(0x226)](
          c["SetBaseViewFieldVisibleCommand"]["id"],
          {
            unitId: this[_0xddca8(0x223)][_0xddca8(0x24e)](),
            tableId: this[_0xddca8(0x1c2)]["getId"](),
            viewId: this[_0xddca8(0x149)],
            fieldId: _0x3c9ce6,
            visible: _0x2eeee3,
          },
        )
      : !0x1;
  }
  ["setFieldWidth"](_0x3f0440, _0x22ea31) {
    return y(this[_0x66b96b(0x1c2)]["getTable"]()[_0x66b96b(0xeb)][_0x3f0440])
      ? this[_0x66b96b(0x110)][_0x66b96b(0x226)](
          c["SetBaseViewFieldWidthCommand"]["id"],
          {
            unitId: this[_0x66b96b(0x223)][_0x66b96b(0x24e)](),
            tableId: this[_0x66b96b(0x1c2)][_0x66b96b(0x24e)](),
            viewId: this[_0x66b96b(0x149)],
            fieldId: _0x3f0440,
            width: _0x22ea31,
          },
        )
      : !0x1;
  }
  ["moveField"](_0x5d6224, _0x22ed02) {
    let _0x1c2be4 = this["_table"][_0x3a25a7(0x235)](),
      _0x14ce08 = _0x22ed02[_0x3a25a7(0xe6)] ?? _0x22ed02[_0x3a25a7(0x146)];
    return !y(_0x1c2be4["fields"][_0x5d6224]) ||
      !_0x14ce08 ||
      !y(_0x1c2be4["fields"][_0x14ce08])
      ? !0x1
      : this[_0x3a25a7(0x110)][_0x3a25a7(0x226)](c[_0x3a25a7(0x27b)]["id"], {
          unitId: this["_base"][_0x3a25a7(0x24e)](),
          tableId: this[_0x3a25a7(0x1c2)][_0x3a25a7(0x24e)](),
          viewId: this[_0x3a25a7(0x149)],
          fieldId: _0x5d6224,
          target: _0x22ed02,
        });
  }
  ["move"](_0x5e68fe) {
    return this[_0x1aea35(0x110)]["syncExecuteCommand"](
      c[_0x1aea35(0x1c1)]["id"],
      {
        unitId: this[_0x1aea35(0x223)][_0x1aea35(0x24e)](),
        tableId: this[_0x1aea35(0x1c2)]["getId"](),
        viewId: this["_viewId"],
        target: _0x5e68fe,
      },
    );
  }
  ["delete"]() {
    return this["_commandService"][_0x20179f(0x226)](
      c["DeleteBaseViewCommand"]["id"],
      {
        unitId: this[_0x20179f(0x223)][_0x20179f(0x24e)](),
        tableId: this[_0x20179f(0x1c2)]["getId"](),
        viewId: this["_viewId"],
      },
    );
  }
  ["getProjection"]() {
    return this[_0x532f0b(0x167)][_0x532f0b(0x1a7)](
      this[_0x532f0b(0x223)][_0x532f0b(0xf8)]()[_0x532f0b(0x178)](),
      this[_0x532f0b(0x1c2)]["getId"](),
      this[_0x532f0b(0x149)],
    );
  }
  ["_getView"]() {
    let _0x5a0047 =
      this[_0x55b89d(0x1c2)][_0x55b89d(0x235)]()[_0x55b89d(0x106)][
        this["_viewId"]
      ];
    if (!_0x5a0047)
      throw Error(
        "[FView]:\x20view\x20\x22" +
          this[_0x55b89d(0x149)] +
          "\x22\x20does\x20not\x20exist.",
      );
    return _0x5a0047;
  }
};
z = g(
  [
    h(0x4, l["ICommandService"]),
    h(0x5, l["IPermissionService"]),
    h(0x6, c["IBaseProjectionService"]),
  ],
  z,
);
let B = class {
  constructor(
    _0x5a6b98,
    _0x3d62d0,
    _0x52d196,
    _0x4dbc06,
    _0x3f8eb6,
    _0x4f08b0,
  ) {
    ((this[_0x4382b7(0x223)] = _0x5a6b98),
      (this["_tableId"] = _0x3d62d0),
      (this[_0x4382b7(0x260)] = _0x52d196),
      (this[_0x4382b7(0x110)] = _0x4dbc06),
      (this[_0x4382b7(0x27d)] = _0x3f8eb6),
      (this[_0x4382b7(0x167)] = _0x4f08b0));
  }
  ["getBase"]() {
    return this[_0x39b06f(0x223)][_0x39b06f(0xf8)]();
  }
  ["getTable"]() {
    return this[_0x204adb(0x1f2)]();
  }
  ["getId"]() {
    return this[_0x2f5fa2(0x17d)];
  }
  ["getPermission"]() {
    return new m(
      this[_0x165aa9(0xf8)]()["getUnitId"](),
      (0x0, c[_0x165aa9(0x112)])(this["_tableId"]),
      [],
      this[_0x165aa9(0x110)],
      this[_0x165aa9(0x27d)],
    );
  }
  ["getHierarchyFieldId"]() {
    return (0x0, c[_0x433cdd(0x22a)])(this[_0x433cdd(0x1f2)]());
  }
  ["setHierarchyField"](_0xb93c85) {
    return this[_0x75c49e(0x110)]["syncExecuteCommand"](
      c[_0x75c49e(0x14d)]["id"],
      {
        unitId: this[_0x75c49e(0x223)][_0x75c49e(0x24e)](),
        tableId: this["_tableId"],
        fieldId: _0xb93c85,
      },
    );
  }
  ["getName"]() {
    return this["_getTable"]()[_0x2bab6c(0x162)];
  }
  ["getFormulaName"]() {
    let _0x161140 = this[_0x98167f(0x223)]
      [_0x98167f(0xf8)]()
      [_0x98167f(0x178)]();
    return (0x0, c[_0x98167f(0x141)])(this["_getTable"](), _0x161140);
  }
  ["setName"](_0x3164c1) {
    let _0x200227 = (0x0, c[_0x2e2335(0x14c)])(
      this[_0x2e2335(0x223)]["getBase"]()[_0x2e2335(0x178)](),
      _0x3164c1,
      this[_0x2e2335(0x17d)],
    );
    if (!_0x200227[_0x2e2335(0x216)])
      throw Error(
        "[FBaseTable]:\x20invalid\x20table\x20name\x20\x22" +
          _0x3164c1 +
          _0x2e2335(0x1b8) +
          c[_0x2e2335(0x1af)] +
          "\x20" +
          _0x200227[_0x2e2335(0x115)],
      );
    return this[_0x2e2335(0x110)][_0x2e2335(0x226)](c[_0x2e2335(0x1e9)]["id"], {
      unitId: this[_0x2e2335(0x223)]["getId"](),
      tableId: this["_tableId"],
      name: _0x3164c1,
    });
  }
  ["search"](_0x85613b, _0xc8d639) {
    let _0x1115ff = this[_0x3a4e67(0x223)]["getBase"]()[_0x3a4e67(0x178)](),
      _0x1bd4cd = this[_0x3a4e67(0x1f2)]();
    if (_0xc8d639) {
      let _0x1229f0 = this[_0x3a4e67(0x167)][_0x3a4e67(0x1a7)](
          _0x1115ff,
          this["_tableId"],
          _0xc8d639,
        ),
        _0x56b57c = _0x1bd4cd[_0x3a4e67(0x106)][_0xc8d639],
        _0x2ea0d1 =
          _0x85613b[_0x3a4e67(0x1a8)] ?? J(_0x1bd4cd, _0x56b57c, _0x1229f0),
        _0x25fcce =
          _0x3a4e67(0x170) in _0x1229f0 &&
          Array[_0x3a4e67(0x276)](_0x1229f0[_0x3a4e67(0x170)])
            ? _0x1229f0[_0x3a4e67(0x170)]
            : [];
      return (0x0, c[_0x3a4e67(0x230)])({
        ..._0x85613b,
        table: _0x1bd4cd,
        fieldIds: _0x2ea0d1,
        rows: _0x25fcce,
      });
    }
    let _0x344701 = (
        _0x1bd4cd[_0x3a4e67(0x1c8)]
          ? _0x1bd4cd[_0x3a4e67(0x1c8)][_0x3a4e67(0x255)](
              (_0xafbc40) => _0x1bd4cd[_0x3a4e67(0x132)][_0xafbc40],
            )
          : Object["values"](_0x1bd4cd[_0x3a4e67(0x132)])[_0x3a4e67(0x1fb)](
              (_0x3e46c5, _0x2bf02e) =>
                _0x3e46c5[_0x3a4e67(0x1c3)][_0x3a4e67(0x213)](
                  _0x2bf02e[_0x3a4e67(0x1c3)],
                ),
            )
      )
        ["filter"]((_0x2c2359) => _0x2c2359)
        [_0x3a4e67(0x255)]((_0x4d0994) => ({
          recordId: _0x4d0994["id"],
          values: _0x4d0994[_0x3a4e67(0x1f5)],
        })),
      _0x411a4d =
        _0x85613b[_0x3a4e67(0x1a8)] ??
        _0x1bd4cd[_0x3a4e67(0x27f)][_0x3a4e67(0xe9)]((_0x3c4ee1) =>
          y(_0x1bd4cd[_0x3a4e67(0xeb)][_0x3c4ee1]),
        );
    return (0x0, c[_0x3a4e67(0x230)])({
      ..._0x85613b,
      table: _0x1bd4cd,
      fieldIds: _0x411a4d,
      rows: _0x344701,
    });
  }
  ["getPrimaryFieldId"]() {
    return this["_getTable"]()["primaryFieldId"];
  }
  ["getFields"]() {
    let _0x4ea066 = this["_getTable"]();
    return _0x4ea066[_0x4653c8(0x27f)]
      [_0x4653c8(0x255)]((_0xfaeef3) => _0x4ea066[_0x4653c8(0xeb)][_0xfaeef3])
      [_0x4653c8(0xe9)](y)
      [_0x4653c8(0x255)]((_0x1e8082) =>
        this["_injector"][_0x4653c8(0x1e6)](
          _,
          this["_base"],
          this,
          _0x1e8082["id"],
        ),
      );
  }
  ["getFieldById"](_0x45f61f) {
    let _0xcaab3b = this["_getTable"]()[_0x447ad0(0xeb)][_0x45f61f];
    return y(_0xcaab3b)
      ? this[_0x447ad0(0x260)][_0x447ad0(0x1e6)](
          _,
          this[_0x447ad0(0x223)],
          this,
          _0xcaab3b["id"],
        )
      : null;
  }
  ["getFieldByName"](_0x69a2d1) {
    let _0x1a66cc = this["_getTable"]()[_0xc10d72(0xeb)],
      _0x415e17 = Object[_0xc10d72(0x1f5)](_0x1a66cc)[_0xc10d72(0x13b)](
        (_0x3aca94) =>
          y(_0x3aca94) && _0x3aca94[_0xc10d72(0x162)] === _0x69a2d1,
      );
    return _0x415e17
      ? this[_0xc10d72(0x260)][_0xc10d72(0x1e6)](
          _,
          this["_base"],
          this,
          _0x415e17["id"],
        )
      : null;
  }
  ["getPrimaryField"]() {
    let _0x53e376 = this[_0x272b8b(0x1f2)]()[_0x272b8b(0xea)];
    return this["_injector"]["createInstance"](
      _,
      this["_base"],
      this,
      _0x53e376,
    );
  }
  ["addField"](_0xc5a2eb, _0x492795, _0x34742c) {
    var _0x59ddc9, _0x344261;
    if (
      !Object[_0x5bb3ca(0x1f5)](l[_0x5bb3ca(0x1f6)])["some"](
        (_0x405753) => _0x405753 === _0x492795,
      )
    )
      throw Error(_0x5bb3ca(0x161) + String(_0x492795) + "\x22.");
    if (
      (_0x492795 === l["BaseFieldType"][_0x5bb3ca(0x21c)] &&
        this["_prepareFormulaFieldReferences"](_0xc5a2eb, _0x34742c),
      _0x492795 === l[_0x5bb3ca(0x1f6)][_0x5bb3ca(0x283)] &&
        (typeof (_0x34742c == null ||
        (_0x59ddc9 = _0x34742c[_0x5bb3ca(0x13d)]) == null ||
        (_0x59ddc9 = _0x59ddc9[_0x5bb3ca(0xff)]) == null
          ? void 0x0
          : _0x59ddc9[_0x5bb3ca(0x279)]) != _0x5bb3ca(0x275) ||
          typeof _0x34742c[_0x5bb3ca(0x13d)][_0x5bb3ca(0xff)][
            _0x5bb3ca(0x168)
          ] != _0x5bb3ca(0xd4)))
    )
      throw Error(_0x5bb3ca(0x1aa));
    let _0x3da278 = {
      ...(_0x34742c == null ? void 0x0 : _0x34742c[_0x5bb3ca(0x13d)]),
      id: (0x0, l["generateRandomId"])(0x6),
      name: _0xc5a2eb,
      type: _0x492795,
      config:
        (_0x34742c == null || (_0x344261 = _0x34742c["field"]) == null
          ? void 0x0
          : _0x344261[_0x5bb3ca(0xff)]) ?? {},
    };
    if (
      !this[_0x5bb3ca(0x110)]["syncExecuteCommand"](c[_0x5bb3ca(0x19c)]["id"], {
        unitId: this[_0x5bb3ca(0x223)][_0x5bb3ca(0x24e)](),
        tableId: this[_0x5bb3ca(0x17d)],
        field: _0x3da278,
        index: _0x34742c == null ? void 0x0 : _0x34742c[_0x5bb3ca(0x134)],
      })
    )
      throw Error("Failed\x20to\x20add\x20field\x20\x22" + _0xc5a2eb + "\x22");
    return this["_injector"][_0x5bb3ca(0x1e6)](
      _,
      this[_0x5bb3ca(0x223)],
      this,
      _0x3da278["id"],
    );
  }
  ["_prepareFormulaFieldReferences"](_0x5aeeb7, _0x376e96) {
    var _0x37b9d1;
    if (
      !_0x376e96 ||
      !(_0x16e429(0x17a) in _0x376e96) ||
      !Array["isArray"](_0x376e96[_0x16e429(0x17a)])
    )
      throw Error(_0x16e429(0x1fe));
    let _0x2c9c55 = this[_0x16e429(0x110)][_0x16e429(0x226)](
      c["ValidateBaseFormulaCommand"]["id"],
      {
        unitId: this[_0x16e429(0x223)][_0x16e429(0x24e)](),
        tableId: this[_0x16e429(0x17d)],
        formula: String(
          ((_0x37b9d1 = _0x376e96[_0x16e429(0x13d)]) == null ||
          (_0x37b9d1 = _0x37b9d1["config"]) == null
            ? void 0x0
            : _0x37b9d1[_0x16e429(0x228)]) ?? "",
        ),
      },
    );
    if (!_0x2c9c55["valid"])
      throw Error(_0x2c9c55[_0x16e429(0x115)] ?? _0x16e429(0x1da));
    if (
      _0x376e96[_0x16e429(0x17a)][_0x16e429(0x12e)] > 0x0 &&
      !this[_0x16e429(0x110)]["syncExecuteCommand"](f[_0x16e429(0x160)]["id"], {
        unitId: this[_0x16e429(0x223)][_0x16e429(0x24e)](),
        references: _0x376e96["externalReferences"],
      })
    )
      throw Error(_0x16e429(0x22d) + _0x5aeeb7 + "\x22");
  }
  ["getRecords"]() {
    return this[_0x40056d(0x15e)]()[_0x40056d(0x255)]((_0x11b11a) =>
      this[_0x40056d(0x260)][_0x40056d(0x1e6)](
        I,
        this["_base"],
        this,
        _0x11b11a,
        this[_0x40056d(0x260)],
      ),
    );
  }
  ["getRecordById"](_0xbb8743) {
    return this[_0x556843(0x1f2)]()[_0x556843(0x132)][_0xbb8743]
      ? this["_injector"][_0x556843(0x1e6)](
          I,
          this["_base"],
          this,
          _0xbb8743,
          this[_0x556843(0x260)],
        )
      : null;
  }
  ["queryRecords"](_0x4a600d = {}) {
    let _0x2b1edb = this[_0x1bc71f(0x1f2)](),
      _0x2cd5e3 = this[_0x1bc71f(0x15e)](_0x4a600d),
      _0x32a30c = Math[_0x1bc71f(0x166)](
        0x0,
        _0x4a600d[_0x1bc71f(0x220)] ?? 0x0,
      ),
      _0x1087d7 =
        _0x4a600d[_0x1bc71f(0x242)] == null
          ? null
          : Math[_0x1bc71f(0x166)](0x0, _0x4a600d[_0x1bc71f(0x242)]),
      _0x2fb1ae = H(
        _0x2cd5e3["map"]((_0x3a012f) => _0x2b1edb[_0x1bc71f(0x132)][_0x3a012f])[
          "filter"
        ]((_0x517000) => W(_0x517000, _0x2b1edb, _0x4a600d[_0x1bc71f(0xe9)])),
        _0x2b1edb,
        _0x4a600d[_0x1bc71f(0x1fb)],
      );
    return {
      records: V(_0x2fb1ae, _0x4a600d)["map"]((_0x577214) =>
        this[_0x1bc71f(0x260)][_0x1bc71f(0x1e6)](
          I,
          this["_base"],
          this,
          _0x577214["id"],
          this[_0x1bc71f(0x260)],
        ),
      ),
      total: _0x2fb1ae[_0x1bc71f(0x12e)],
      offset: _0x32a30c,
      limit: _0x1087d7,
      hasMore:
        _0x1087d7 != null &&
        _0x32a30c + _0x1087d7 < _0x2fb1ae[_0x1bc71f(0x12e)],
    };
  }
  ["addRecord"](_0x57ba9c, _0x1e940d = "id", _0x32817b) {
    let _0x21d944 = this[_0x32042f(0x1f2)](),
      _0x2c5661 = Date[_0x32042f(0x204)](),
      _0x38011e = {
        ..._0x32817b,
        id: (0x0, l[_0x32042f(0x108)])(0x6),
        values: b(_0x21d944, _0x57ba9c, _0x1e940d),
        orderKey:
          (_0x32817b == null ? void 0x0 : _0x32817b[_0x32042f(0x1c3)]) ||
          "" + _0x2c5661,
        createdAt:
          (_0x32817b == null ? void 0x0 : _0x32817b[_0x32042f(0x263)]) ||
          _0x2c5661,
        updatedAt:
          (_0x32817b == null ? void 0x0 : _0x32817b["updatedAt"]) || _0x2c5661,
      };
    if (
      !this[_0x32042f(0x110)]["syncExecuteCommand"](c[_0x32042f(0xdd)]["id"], {
        unitId: this[_0x32042f(0x223)][_0x32042f(0x24e)](),
        tableId: this[_0x32042f(0x17d)],
        record: _0x38011e,
        source: c[_0x32042f(0x20a)][_0x32042f(0xe5)],
      })
    )
      throw Error(_0x32042f(0x22f) + _0x38011e["id"] + "\x22");
    return this[_0x32042f(0x260)][_0x32042f(0x1e6)](
      I,
      this[_0x32042f(0x223)],
      this,
      _0x38011e["id"],
      this[_0x32042f(0x260)],
    );
  }
  ["addRecords"](_0x3a6c8a) {
    if (!_0x3a6c8a["length"]) return [];
    let _0x191cab = this[_0x4aa8f6(0x1f2)](),
      _0x55cffe = Date[_0x4aa8f6(0x204)](),
      _0x139f71 = _0x3a6c8a[_0x4aa8f6(0x255)]((_0x268353, _0x459ea6) => {
        const _0x5f0531 = _0x4aa8f6;
        var _0x23ced4, _0x2c1536, _0x47c35c;
        return {
          ..._0x268353[_0x5f0531(0x210)],
          id: (0x0, l["generateRandomId"])(0x6),
          values: b(
            _0x191cab,
            _0x268353["values"],
            _0x268353[_0x5f0531(0x1be)] ?? "id",
          ),
          orderKey:
            ((_0x23ced4 = _0x268353["record"]) == null
              ? void 0x0
              : _0x23ced4[_0x5f0531(0x1c3)]) || "" + (_0x55cffe + _0x459ea6),
          createdAt:
            ((_0x2c1536 = _0x268353[_0x5f0531(0x210)]) == null
              ? void 0x0
              : _0x2c1536[_0x5f0531(0x263)]) || _0x55cffe,
          updatedAt:
            ((_0x47c35c = _0x268353[_0x5f0531(0x210)]) == null
              ? void 0x0
              : _0x47c35c[_0x5f0531(0x26a)]) || _0x55cffe,
        };
      });
    if (
      !this[_0x4aa8f6(0x110)][_0x4aa8f6(0x226)](c[_0x4aa8f6(0x139)]["id"], {
        unitId: this[_0x4aa8f6(0x223)][_0x4aa8f6(0x24e)](),
        tableId: this[_0x4aa8f6(0x17d)],
        records: _0x139f71,
        source: c[_0x4aa8f6(0x20a)]["Facade"],
      })
    )
      throw Error(_0x4aa8f6(0x163));
    return _0x139f71[_0x4aa8f6(0x255)]((_0x5768cc) =>
      this[_0x4aa8f6(0x260)][_0x4aa8f6(0x1e6)](
        I,
        this[_0x4aa8f6(0x223)],
        this,
        _0x5768cc["id"],
        this[_0x4aa8f6(0x260)],
      ),
    );
  }
  ["deleteRecords"](_0x4c70ea) {
    return (
      !_0x4c70ea[_0x18e5ef(0x12e)] ||
      this["_commandService"]["syncExecuteCommand"](c[_0x18e5ef(0x155)]["id"], {
        unitId: this[_0x18e5ef(0x223)][_0x18e5ef(0x24e)](),
        tableId: this[_0x18e5ef(0x17d)],
        recordIds: _0x4c70ea,
        source: c[_0x18e5ef(0x20a)][_0x18e5ef(0xe5)],
      })
    );
  }
  ["getRange"](_0x54eeac, _0x242797, _0x5b8576 = 0x1, _0x2219c0 = 0x1) {
    return this[_0x129e92(0x260)][_0x129e92(0x1e6)](
      A,
      this["_base"],
      this,
      {
        startRow: _0x54eeac,
        endRow: _0x54eeac + _0x5b8576 - 0x1,
        startColumn: _0x242797,
        endColumn: _0x242797 + _0x2219c0 - 0x1,
      },
      this["_injector"],
    );
  }
  ["getDataRange"]() {
    var _0x2ac620;
    let _0x1537bc = (0x0, c[_0x559605(0x191)])(this[_0x559605(0x1f2)]()),
      _0x169113 =
        ((_0x2ac620 = _0x1537bc["recordOrder"]) == null
          ? void 0x0
          : _0x2ac620["length"]) ?? 0x0,
      _0xc1f500 = _0x1537bc[_0x559605(0x27f)][_0x559605(0xe9)]((_0x5f035a) =>
        y(_0x1537bc["fields"][_0x5f035a]),
      )["length"];
    return this[_0x559605(0x20e)](
      0x0,
      0x0,
      Math[_0x559605(0x166)](_0x169113, 0x1),
      Math[_0x559605(0x166)](_0xc1f500, 0x1),
    );
  }
  ["getViews"]() {
    let _0x5c3a3e = this[_0x4b6040(0x1f2)]();
    return _0x5c3a3e[_0x4b6040(0x113)]
      [_0x4b6040(0xe9)]((_0x905beb) => _0x5c3a3e[_0x4b6040(0x106)][_0x905beb])
      [_0x4b6040(0x255)]((_0x40e0c6) =>
        this[_0x4b6040(0x260)]["createInstance"](
          z,
          this[_0x4b6040(0x223)],
          this,
          _0x40e0c6,
          this[_0x4b6040(0x260)],
        ),
      );
  }
  ["getViewById"](_0x1d6022) {
    return this[_0x455c93(0x1f2)]()[_0x455c93(0x106)][_0x1d6022]
      ? this[_0x455c93(0x260)][_0x455c93(0x1e6)](
          z,
          this["_base"],
          this,
          _0x1d6022,
          this["_injector"],
        )
      : null;
  }
  ["getViewByName"](_0xd0c68e) {
    let _0x5b2c49 = this["_getTable"](),
      _0xc360a2 = Object[_0x4bc204(0x1f5)](_0x5b2c49[_0x4bc204(0x106)])["find"](
        (_0x2352e3) => _0x2352e3[_0x4bc204(0x162)] === _0xd0c68e,
      );
    return _0xc360a2
      ? this[_0x4bc204(0x260)][_0x4bc204(0x1e6)](
          z,
          this[_0x4bc204(0x223)],
          this,
          _0xc360a2["id"],
          this[_0x4bc204(0x260)],
        )
      : null;
  }
  ["createView"](_0x2129e8, _0x48aba8, _0x47cb32) {
    var _0x24779d, _0x30c849, _0x4d0776, _0x551325;
    let _0x40cdf2 = this[_0x23bb35(0x1f2)](),
      _0x4b0e87 = [
        l[_0x23bb35(0xfd)],
        ...((_0x47cb32 == null ||
        (_0x24779d = _0x47cb32[_0x23bb35(0x114)]) == null
          ? void 0x0
          : _0x24779d[_0x23bb35(0x27f)]) ?? _0x40cdf2[_0x23bb35(0x27f)])[
          _0x23bb35(0xe9)
        ]((_0x5802f7) => y(_0x40cdf2[_0x23bb35(0xeb)][_0x5802f7])),
      ],
      _0x283677 = {
        ...(_0x47cb32 == null ? void 0x0 : _0x47cb32[_0x23bb35(0x114)]),
        id: (0x0, l[_0x23bb35(0x108)])(0x6),
        name: _0x2129e8,
        type: _0x48aba8,
        tableId: this[_0x23bb35(0x17d)],
        config:
          (_0x47cb32 == null ||
          (_0x30c849 = _0x47cb32[_0x23bb35(0x114)]) == null
            ? void 0x0
            : _0x30c849[_0x23bb35(0xff)]) ?? {},
        fieldOrder: _0x4b0e87,
        fieldSettings: {
          ...(_0x47cb32 == null ||
          (_0x4d0776 = _0x47cb32[_0x23bb35(0x114)]) == null
            ? void 0x0
            : _0x4d0776[_0x23bb35(0x182)]),
          [l[_0x23bb35(0xfd)]]: {
            ...(_0x47cb32 == null ||
            (_0x551325 = _0x47cb32["view"]) == null ||
            (_0x551325 = _0x551325["fieldSettings"]) == null
              ? void 0x0
              : _0x551325[l[_0x23bb35(0xfd)]]),
            hidden: !0x0,
          },
        },
      };
    if (
      !this[_0x23bb35(0x110)][_0x23bb35(0x226)](
        c["CreateBaseViewCommand"]["id"],
        {
          unitId: this[_0x23bb35(0x223)][_0x23bb35(0x24e)](),
          tableId: this[_0x23bb35(0x17d)],
          view: _0x283677,
          index: _0x47cb32 == null ? void 0x0 : _0x47cb32["index"],
        },
      )
    )
      throw Error(
        "Failed\x20to\x20create\x20view\x20\x22" + _0x2129e8 + "\x22",
      );
    return this["_injector"][_0x23bb35(0x1e6)](
      z,
      this[_0x23bb35(0x223)],
      this,
      _0x283677["id"],
      this[_0x23bb35(0x260)],
    );
  }
  ["getSchema"]() {
    let _0x2645f9 = this[_0x1bb1e3(0x1f2)](),
      _0xa35c50 = _0x2645f9[_0x1bb1e3(0x27f)][_0x1bb1e3(0xe9)]((_0x44dfa3) =>
        y(_0x2645f9[_0x1bb1e3(0xeb)][_0x44dfa3]),
      ),
      _0x338a8c = _0x2645f9["viewOrder"][_0x1bb1e3(0xe9)](
        (_0x1e84e3) => _0x2645f9["views"][_0x1e84e3],
      );
    return {
      id: _0x2645f9["id"],
      name: _0x2645f9[_0x1bb1e3(0x162)],
      formulaName: this[_0x1bb1e3(0x11b)](),
      primaryFieldId: _0x2645f9[_0x1bb1e3(0xea)],
      fieldIds: _0xa35c50,
      viewIds: _0x338a8c,
      recordCount: this[_0x1bb1e3(0x15e)]()["length"],
      fields: _0xa35c50["map"]((_0x2b2c93) => {
        const _0x207625 = _0x1bb1e3;
        let _0x264b1f = _0x2645f9[_0x207625(0xeb)][_0x2b2c93];
        return {
          id: _0x264b1f["id"],
          name: _0x264b1f[_0x207625(0x162)],
          type: _0x264b1f[_0x207625(0x222)],
          config: _0x264b1f[_0x207625(0xff)],
          readonly: _0x264b1f[_0x207625(0x104)],
          description: _0x264b1f[_0x207625(0x1df)],
        };
      }),
      views: _0x338a8c["map"]((_0x1af497) => {
        const _0x53b4bc = _0x1bb1e3;
        let _0x596b08 = _0x2645f9["views"][_0x1af497];
        return {
          id: _0x596b08["id"],
          name: _0x596b08[_0x53b4bc(0x162)],
          type: _0x596b08["type"],
        };
      }),
    };
  }
  ["_getTable"]() {
    let _0x401ccd = this[_0x327baa(0x223)]
      [_0x327baa(0xf8)]()
      [_0x327baa(0x178)]()[_0x327baa(0x131)][this["_tableId"]];
    if (!_0x401ccd)
      throw Error(
        "[FTable]:\x20table\x20\x22" + this["_tableId"] + _0x327baa(0x164),
      );
    return _0x401ccd;
  }
  ["_resolveRecordIds"](_0x4ba2f2 = {}) {
    let _0x583805 = this[_0x1a19aa(0x223)]
        [_0x1a19aa(0xf8)]()
        [_0x1a19aa(0x178)](),
      _0x3046e4 = this[_0x1a19aa(0x1f2)]();
    if (_0x4ba2f2["viewId"]) {
      let _0x261fcf = this[_0x1a19aa(0x167)][_0x1a19aa(0x1a7)](
        _0x583805,
        this["_tableId"],
        _0x4ba2f2[_0x1a19aa(0x21b)],
      );
      if (
        _0x1a19aa(0x170) in _0x261fcf &&
        Array[_0x1a19aa(0x276)](_0x261fcf[_0x1a19aa(0x170)])
      )
        return _0x261fcf[_0x1a19aa(0x170)][_0x1a19aa(0x255)](
          (_0x4c6eca) => _0x4c6eca[_0x1a19aa(0x1d5)],
        );
    }
    return (
      _0x3046e4[_0x1a19aa(0x1c8)]
        ? _0x3046e4[_0x1a19aa(0x1c8)][_0x1a19aa(0x255)](
            (_0x4997fc) => _0x3046e4[_0x1a19aa(0x132)][_0x4997fc],
          )
        : Object[_0x1a19aa(0x1f5)](_0x3046e4[_0x1a19aa(0x132)])["sort"](
            (_0x113d16, _0x52770c) =>
              _0x113d16["orderKey"][_0x1a19aa(0x213)](_0x52770c["orderKey"]),
          )
    )
      ["filter"]((_0xe9bcee) => _0xe9bcee)
      [_0x1a19aa(0x255)]((_0x1d66bd) => _0x1d66bd["id"]);
  }
};
B = g(
  [
    h(0x3, l["ICommandService"]),
    h(0x4, l["IPermissionService"]),
    h(0x5, c["IBaseProjectionService"]),
  ],
  B,
);
function V(_0x8b9bda, _0x49f08a) {
  let _0x28155a = Math["max"](0x0, _0x49f08a[_0x493532(0x220)] ?? 0x0);
  return _0x49f08a[_0x493532(0x242)] == null
    ? _0x8b9bda["slice"](_0x28155a)
    : _0x8b9bda["slice"](
        _0x28155a,
        _0x28155a + Math[_0x493532(0x166)](0x0, _0x49f08a[_0x493532(0x242)]),
      );
}
function H(_0x2f0610, _0x3b6911, _0x55e03a = []) {
  return _0x55e03a[_0x23a68d(0x12e)]
    ? [..._0x2f0610][_0x23a68d(0x1fb)]((_0x465288, _0x410b1f) => {
        const _0x46cebe = _0x23a68d;
        for (let _0xf4a0e6 of _0x55e03a) {
          var _0x47bcda;
          let _0x2e9803 =
              _0xf4a0e6["direction"] === l["BaseSortDirection"]["DESC"]
                ? -0x1
                : 0x1,
            _0x5d5bee = U(
              _0x465288[_0x46cebe(0x1f5)][_0xf4a0e6[_0x46cebe(0x1d3)]],
              _0x410b1f[_0x46cebe(0x1f5)][_0xf4a0e6["fieldId"]],
              (_0x47bcda =
                _0x3b6911[_0x46cebe(0xeb)][_0xf4a0e6[_0x46cebe(0x1d3)]]) == null
                ? void 0x0
                : _0x47bcda[_0x46cebe(0x222)],
            );
          if (_0x5d5bee !== 0x0) return _0x5d5bee * _0x2e9803;
        }
        return String(_0x465288[_0x46cebe(0x1c3)] ?? _0x465288["id"])[
          _0x46cebe(0x213)
        ](String(_0x410b1f["orderKey"] ?? _0x410b1f["id"]));
      })
    : _0x2f0610;
}
function U(_0x39d5bd, _0x2729b7, _0x5f4164) {
  return _0x39d5bd == null && _0x2729b7 == null
    ? 0x0
    : _0x39d5bd == null
      ? -0x1
      : _0x2729b7 == null
        ? 0x1
        : typeof _0x39d5bd == "number" && typeof _0x2729b7 == "number"
          ? _0x39d5bd - _0x2729b7
          : _0x5f4164 === l[_0x2bc68a(0x1f6)][_0x2bc68a(0x285)]
            ? Number(_0x39d5bd) - Number(_0x2729b7)
            : String(_0x39d5bd)[_0x2bc68a(0x213)](String(_0x2729b7));
}
function W(_0x211187, _0x31f7b6, _0x91b03a) {
  var _0x2eae88;
  if (
    !_0x91b03a ||
    !(
      (_0x2eae88 = _0x91b03a["conditions"]) != null &&
      _0x2eae88[_0x32b071(0x12e)]
    )
  )
    return !0x0;
  let {
    conjunction: _0x436b82 = l[_0x32b071(0x26e)]["OR"],
    conditions: _0x38845a,
  } = _0x91b03a;
  return _0x436b82 === l[_0x32b071(0x26e)][_0x32b071(0x269)] &&
    _0x38845a[_0x32b071(0x12e)] > 0x1
    ? _0x38845a[_0x32b071(0x13e)]((_0x51a91f) =>
        G(_0x211187, _0x31f7b6, _0x51a91f),
      )
    : _0x38845a[_0x32b071(0x157)]((_0x27d44a) =>
        G(_0x211187, _0x31f7b6, _0x27d44a),
      );
}
function G(_0x523029, _0x1165c4, _0x5e49ff) {
  let _0x407c31 = _0x523029[_0x46ee79(0x1f5)][_0x5e49ff[_0x46ee79(0x1d3)]],
    _0x38433e = _0x1165c4[_0x46ee79(0xeb)][_0x5e49ff[_0x46ee79(0x1d3)]];
  if (K(_0x5e49ff)) {
    let _0x6a20a6 = q(_0x5e49ff)["test"](String(_0x407c31 ?? ""));
    return _0x5e49ff[_0x46ee79(0x177)] === _0x46ee79(0x1c5)
      ? _0x6a20a6
      : !_0x6a20a6;
  }
  return (
    !_0x38433e ||
    (0x0, c[_0x46ee79(0x1b3)])(
      _0x407c31,
      _0x5e49ff[_0x46ee79(0x177)],
      _0x5e49ff[_0x46ee79(0x173)],
      _0x38433e,
    )
  );
}
function K(_0x401cdf) {
  return (
    _0x401cdf[_0x42c856(0x177)] === _0x42c856(0x1c5) ||
    _0x401cdf[_0x42c856(0x177)] === _0x42c856(0x11d)
  );
}
function q(_0x5e30ac) {
  let _0x23cb9f = String(_0x5e30ac[_0x122bcf(0x173)] ?? "");
  if (_0x23cb9f["length"] > 0x200) throw Error(_0x122bcf(0x212));
  try {
    return new RegExp(_0x23cb9f, _0x5e30ac[_0x122bcf(0x234)] ? void 0x0 : "i");
  } catch (_0x279e50) {
    throw Error(
      _0x122bcf(0x14f) +
        _0x23cb9f +
        ".\x20" +
        (_0x279e50 instanceof Error
          ? _0x279e50[_0x122bcf(0x1e7)]
          : String(_0x279e50)),
    );
  }
}
function J(_0x354027, _0x3dd277, _0x22bcc7) {
  if (
    _0x22bcc7[_0x556b6c(0x222)] !== _0x556b6c(0x102) &&
    _0x22bcc7[_0x556b6c(0x222)] !== "custom"
  ) {
    var _0x2f2ebe;
    if (_0x22bcc7[_0x556b6c(0x222)] === l[_0x556b6c(0x171)][_0x556b6c(0x158)]) {
      var _0xee0118;
      let _0x2425df = [
        ((_0xee0118 = _0x22bcc7["fields"]) == null ||
        (_0xee0118 = _0xee0118[0x0]) == null
          ? void 0x0
          : _0xee0118["id"]) ?? _0x354027[_0x556b6c(0xea)],
        ...(_0x22bcc7[_0x556b6c(0x174)] ?? []),
      ];
      return Array["from"](
        new Set(
          _0x2425df[_0x556b6c(0xe9)](
            (_0x3741d0) => !!_0x354027["fields"][_0x3741d0],
          ),
        ),
      );
    }
    if (
      (_0x2f2ebe = _0x22bcc7[_0x556b6c(0xeb)]) != null &&
      _0x2f2ebe[_0x556b6c(0x12e)]
    )
      return _0x22bcc7["fields"]
        [_0x556b6c(0x255)]((_0x10dec8) => _0x10dec8["id"])
        ["filter"]((_0x593a18) => {
          const _0xfaa41a = _0x556b6c;
          var _0xe4fafc;
          return !!(
            _0x354027["fields"][_0x593a18] &&
            !(
              _0x3dd277 != null &&
              (_0xe4fafc = _0x3dd277[_0xfaa41a(0x182)]) != null &&
              (_0xe4fafc = _0xe4fafc[_0x593a18]) != null &&
              _0xe4fafc[_0xfaa41a(0x1b1)]
            )
          );
        });
  }
  return _0x354027[_0x556b6c(0x27f)]["filter"]((_0x58dd0e) => {
    const _0x14bb0e = _0x556b6c;
    var _0x3e162c;
    return !!(
      _0x354027[_0x14bb0e(0xeb)][_0x58dd0e] &&
      !(
        _0x3dd277 != null &&
        (_0x3e162c = _0x3dd277[_0x14bb0e(0x182)]) != null &&
        (_0x3e162c = _0x3e162c[_0x58dd0e]) != null &&
        _0x3e162c[_0x14bb0e(0x1b1)]
      )
    );
  });
}
let Y = class extends u["FBase"] {
  constructor(_0x3817b8, _0x5ecfdd, _0x571e48, _0x1e4b16, _0x2e326f) {
    (super(),
      (this[_0x214889(0x223)] = _0x3817b8),
      (this[_0x214889(0x260)] = _0x5ecfdd),
      (this[_0x214889(0x1cb)] = _0x571e48),
      (this[_0x214889(0x110)] = _0x1e4b16),
      (this["_permissionService"] = _0x2e326f));
  }
  ["getBase"]() {
    return this[_0x389216(0x223)];
  }
  ["getId"]() {
    return this["_base"]["getUnitId"]();
  }
  ["getPermission"]() {
    return new p(
      this[_0x1ece0b(0x24e)](),
      this[_0x1ece0b(0x110)],
      this[_0x1ece0b(0x27d)],
    );
  }
  ["save"]() {
    return (
      this["_resourceLoaderService"][_0x2d3ba5(0x192)](this["getId"]()) ??
      l["Tools"][_0x2d3ba5(0x1f1)](this[_0x2d3ba5(0x223)][_0x2d3ba5(0x178)]())
    );
  }
  ["getName"]() {
    return this[_0x362c6d(0x223)][_0x362c6d(0x178)]()[_0x362c6d(0x162)];
  }
  ["setName"](_0xadc5a7) {
    this[_0x5c7250(0x110)][_0x5c7250(0x226)](c[_0x5c7250(0x169)]["id"], {
      unitId: this["getId"](),
      name: _0xadc5a7,
    });
  }
  ["getTables"]() {
    let _0x4e7175 = this[_0x53e5bb(0x223)][_0x53e5bb(0x178)]();
    return _0x4e7175[_0x53e5bb(0x23e)]
      [_0x53e5bb(0x255)]((_0xd46f62) => _0x4e7175["tables"][_0xd46f62])
      [_0x53e5bb(0xe9)]((_0x4dfd82) => _0x4dfd82)
      [_0x53e5bb(0x255)]((_0x134fc6) =>
        this["_injector"][_0x53e5bb(0x1e6)](
          B,
          this,
          _0x134fc6["id"],
          this[_0x53e5bb(0x260)],
        ),
      );
  }
  ["getTableById"](_0x55f30d) {
    let _0x328368 =
      this[_0x360064(0x223)][_0x360064(0x178)]()[_0x360064(0x131)][_0x55f30d];
    return _0x328368
      ? this[_0x360064(0x260)]["createInstance"](
          B,
          this,
          _0x328368["id"],
          this[_0x360064(0x260)],
        )
      : null;
  }
  ["getTableByName"](_0x2e1f98) {
    let _0x145157 = this["_base"][_0x57068e(0x178)](),
      _0x139edf = Object[_0x57068e(0x1f5)](_0x145157["tables"])[
        _0x57068e(0x13b)
      ]((_0x38db00) => _0x38db00[_0x57068e(0x162)] === _0x2e1f98);
    return _0x139edf
      ? this[_0x57068e(0x260)][_0x57068e(0x1e6)](
          B,
          this,
          _0x139edf["id"],
          this[_0x57068e(0x260)],
        )
      : null;
  }
  ["insertTable"](_0x56163b, _0x14068a) {
    let _0x333761 = (0x0, l["createDefaultBaseTableSnapshot"])({
        id: (0x0, l[_0x24e831(0x108)])(),
        name: _0x56163b,
        ...(_0x14068a == null ? void 0x0 : _0x14068a[_0x24e831(0x12a)]),
        primaryFieldName:
          _0x14068a == null ? void 0x0 : _0x14068a["primaryFieldName"],
      }),
      _0x1c5d00 = l[_0x24e831(0x119)]["commonExtend"](
        _0x333761,
        (_0x14068a == null ? void 0x0 : _0x14068a[_0x24e831(0x12a)]) ?? {},
      ),
      _0x52056d = (0x0, c[_0x24e831(0x14c)])(
        this[_0x24e831(0x223)][_0x24e831(0x178)](),
        _0x1c5d00[_0x24e831(0x162)],
      );
    if (!_0x52056d[_0x24e831(0x216)])
      throw Error(
        _0x24e831(0x117) +
          _0x1c5d00[_0x24e831(0x162)] +
          _0x24e831(0x1b8) +
          c[_0x24e831(0x1af)] +
          "\x20" +
          _0x52056d[_0x24e831(0x115)],
      );
    if (
      !this[_0x24e831(0x110)][_0x24e831(0x226)](c[_0x24e831(0xd1)]["id"], {
        unitId: this[_0x24e831(0x223)][_0x24e831(0x233)](),
        table: _0x1c5d00,
        index: _0x14068a == null ? void 0x0 : _0x14068a["index"],
      })
    )
      throw Error(_0x24e831(0x229) + _0x56163b + "\x22.");
    return this[_0x24e831(0x260)][_0x24e831(0x1e6)](
      B,
      this,
      _0x1c5d00["id"],
      this["_injector"],
    );
  }
  ["deleteTable"](_0x59dcaf) {
    let _0x217a6c =
      typeof _0x59dcaf == _0x3f53c5(0x275)
        ? _0x59dcaf
        : _0x59dcaf[_0x3f53c5(0x24e)]();
    if (
      !this[_0x3f53c5(0x110)][_0x3f53c5(0x226)](c[_0x3f53c5(0x20d)]["id"], {
        unitId: this["_base"]["getUnitId"](),
        tableId: _0x217a6c,
      })
    )
      throw Error(_0x3f53c5(0x288) + _0x217a6c + "\x22.");
    return !0x0;
  }
  ["duplicateTable"](_0x266cfb, _0x50a967) {
    let _0x32ff94 = this[_0x47e5f3(0x223)][_0x47e5f3(0x178)](),
      _0x18fda9 =
        typeof _0x266cfb == _0x47e5f3(0x275)
          ? _0x266cfb
          : _0x266cfb[_0x47e5f3(0x24e)](),
      _0x6d9a7 = _0x32ff94[_0x47e5f3(0x131)][_0x18fda9];
    if (!_0x6d9a7) throw Error(_0x47e5f3(0x243) + _0x18fda9 + _0x47e5f3(0x164));
    let _0x1413aa = _0x32ff94["tableOrder"][_0x47e5f3(0x257)](_0x18fda9) + 0x1,
      _0x3e0e48 = (0x0, c[_0x47e5f3(0x176)])(_0x6d9a7, {
        id: (0x0, l[_0x47e5f3(0x108)])(),
        name: (0x0, c[_0x47e5f3(0x116)])(
          _0x32ff94,
          _0x6d9a7[_0x47e5f3(0x162)] + "\x20Copy",
        ),
        includeRecords:
          (_0x50a967 == null ? void 0x0 : _0x50a967[_0x47e5f3(0x183)]) ?? !0x1,
        regenerateViewIds:
          (_0x50a967 == null ? void 0x0 : _0x50a967[_0x47e5f3(0x1bb)]) ?? !0x1,
      });
    if (
      !this["_commandService"][_0x47e5f3(0x226)](
        c["CreateBaseTableCommand"]["id"],
        {
          unitId: this["_base"][_0x47e5f3(0x233)](),
          table: _0x3e0e48,
          index: _0x1413aa,
        },
      )
    )
      throw Error(_0x47e5f3(0x1ba) + _0x18fda9 + "\x22.");
    return this[_0x47e5f3(0x260)][_0x47e5f3(0x1e6)](
      B,
      this,
      _0x3e0e48["id"],
      this[_0x47e5f3(0x260)],
    );
  }
  ["getSchema"]() {
    let _0x361ed7 = this[_0x1aa297(0x223)]["getSnapshot"]();
    return {
      id: _0x361ed7["id"],
      name: _0x361ed7["name"],
      tables: this["getTables"]()["map"]((_0x577885) =>
        _0x577885[_0x1aa297(0x23a)](),
      ),
    };
  }
};
Y = g(
  [
    h(0x1, (0x0, l["Inject"])(l["Injector"])),
    h(0x2, l["IResourceLoaderService"]),
    h(0x3, l["ICommandService"]),
    h(0x4, l["IPermissionService"]),
  ],
  Y,
);
var X = class extends u["FUniver"] {
  ["_initialize"]() {
    (this[_0x2cf1dd(0x190)](), this["_initBaseAfterEvents"]());
  }
  ["createBase"](_0x5e0123 = {}, _0x567900) {
    let _0x276ab7 = this[_0x3b5db2(0x185)][_0x3b5db2(0x17f)](
      l[_0x3b5db2(0x217)]["UNIVER_BASE"],
      _0x5e0123,
      _0x567900,
    );
    return this[_0x3b5db2(0x260)][_0x3b5db2(0x1e6)](Y, _0x276ab7);
  }
  ["getActiveBase"]() {
    let _0x4003af = this[_0x16fb1d(0x185)][_0x16fb1d(0x1bf)](
      l["UniverInstanceType"][_0x16fb1d(0x14a)],
    );
    return _0x4003af
      ? this[_0x16fb1d(0x260)]["createInstance"](Y, _0x4003af)
      : null;
  }
  ["getBase"](_0x33e83f) {
    let _0x4209b0 = this[_0x3404c9(0x185)]["getUnit"](
      _0x33e83f,
      l["UniverInstanceType"][_0x3404c9(0x14a)],
    );
    return _0x4209b0
      ? this[_0x3404c9(0x260)][_0x3404c9(0x1e6)](Y, _0x4209b0)
      : null;
  }
  ["getBases"]() {
    return this[_0x55813c(0x185)]
      [_0x55813c(0x203)](l[_0x55813c(0x217)][_0x55813c(0x14a)])
      [_0x55813c(0x255)]((_0x2104e3) =>
        this["_injector"][_0x55813c(0x1e6)](Y, _0x2104e3),
      );
  }
  ["_initBaseAfterEvents"]() {
    (this[_0x5422d2(0x194)](
      this["registerEventHandler"](this["Event"][_0x5422d2(0x19e)], () =>
        this[_0x5422d2(0x110)][_0x5422d2(0xe7)]((_0x1b83c6, _0x250442) => {
          const _0x2e7b94 = _0x5422d2;
          var _0x3a6254;
          if (!Z(_0x1b83c6, c[_0x2e7b94(0x15f)])) return;
          let _0x46e8b5 = _0x1b83c6[_0x2e7b94(0x211)];
          if (!(
            (_0x3a6254 = _0x46e8b5[_0x2e7b94(0x180)]) != null &&
            _0x3a6254[_0x2e7b94(0x12e)]
          ))
            return;
          let _0x1db404 = this[_0x2e7b94(0xf8)](_0x46e8b5[_0x2e7b94(0x251)]),
            _0x553190 =
              _0x1db404 == null
                ? void 0x0
                : _0x1db404[_0x2e7b94(0x1ca)](
                    _0x46e8b5["hierarchyChanges"][0x0]["tableId"],
                  );
          if (!_0x1db404 || !_0x553190) return;
          let _0x55aeff = {
            base: _0x1db404,
            table: _0x553190,
            changes: _0x46e8b5[_0x2e7b94(0x180)],
            source:
              _0x250442 != null && _0x250442[_0x2e7b94(0x231)]
                ? c[_0x2e7b94(0x20a)][_0x2e7b94(0x225)]
                : (_0x46e8b5[_0x2e7b94(0x1e5)] ?? c["BaseEventSource"]["UI"]),
          };
          this["fireEvent"](
            this[_0x2e7b94(0x1d6)][_0x2e7b94(0x19e)],
            _0x55aeff,
          );
        }),
      ),
    ),
      this["disposeWithMe"](
        this["registerEventHandler"](
          this[_0x5422d2(0x1d6)]["BaseTableCreated"],
          () =>
            this[_0x5422d2(0x110)][_0x5422d2(0xe7)]((_0x57cff7) => {
              const _0x2186b6 = _0x5422d2;
              if (_0x57cff7["id"] !== c[_0x2186b6(0xd1)]["id"]) return;
              let {
                  unitId: _0x4bc41a,
                  table: _0x10a627,
                  index: _0x1afc68,
                } = _0x57cff7[_0x2186b6(0x211)],
                _0x57e552 = this["getBase"](_0x4bc41a);
              if (!_0x57e552) return;
              let _0x318ca0 = {
                base: _0x57e552,
                table: _0x10a627,
                index: _0x1afc68,
              };
              this[_0x2186b6(0x1a4)](
                this["Event"][_0x2186b6(0x16a)],
                _0x318ca0,
              );
            }),
        ),
      ),
      this[_0x5422d2(0x194)](
        this[_0x5422d2(0x18d)](this["Event"]["BaseTableFieldCreated"], () =>
          this[_0x5422d2(0x110)][_0x5422d2(0xe7)]((_0x3573b7) => {
            const _0x4cf0c4 = _0x5422d2;
            if (_0x3573b7["id"] !== c[_0x4cf0c4(0x19c)]["id"]) return;
            let {
                unitId: _0x4ca09f,
                tableId: _0x3ddeb8,
                field: _0x293154,
                index: _0x3b6b8a,
                viewIndexes: _0x579ecb,
              } = _0x3573b7["params"],
              _0x11b9d8 = this[_0x4cf0c4(0xf8)](_0x4ca09f);
            if (!_0x11b9d8) return;
            let _0x5059f6 = _0x11b9d8[_0x4cf0c4(0x1ca)](_0x3ddeb8);
            if (!_0x5059f6) return;
            let _0xb6a60 = {
              base: _0x11b9d8,
              table: _0x5059f6,
              field: _0x293154,
              index: _0x3b6b8a,
              viewIndexes: _0x579ecb,
            };
            this[_0x4cf0c4(0x1a4)](
              this[_0x4cf0c4(0x1d6)][_0x4cf0c4(0x265)],
              _0xb6a60,
            );
          }),
        ),
      ),
      this["disposeWithMe"](
        this[_0x5422d2(0x18d)](
          this[_0x5422d2(0x1d6)]["BaseTableRecordCreated"],
          () =>
            this["_commandService"][_0x5422d2(0xe7)]((_0x26a93d) => {
              const _0xf0d499 = _0x5422d2;
              if (
                _0x26a93d["id"] !== c[_0xf0d499(0xdd)]["id"] &&
                _0x26a93d["id"] !== c[_0xf0d499(0x139)]["id"]
              )
                return;
              let _0x3b0a83 = _0x26a93d[_0xf0d499(0x211)],
                { unitId: _0x30f770, tableId: _0x539078 } = _0x3b0a83,
                _0xa93c06 = _0x3b0a83[_0xf0d499(0x132)] ?? [
                  _0x3b0a83["record"],
                ],
                _0x5ce2b7 = this["getBase"](_0x30f770);
              if (!_0x5ce2b7) return;
              let _0xa7b1a8 = _0x5ce2b7["getTableById"](_0x539078);
              if (!_0xa7b1a8) return;
              let _0x3b0ffb = {
                base: _0x5ce2b7,
                table: _0xa7b1a8,
                records: _0xa93c06,
              };
              this[_0xf0d499(0x1a4)](
                this["Event"][_0xf0d499(0x21e)],
                _0x3b0ffb,
              );
            }),
        ),
      ),
      this[_0x5422d2(0x194)](
        this["registerEventHandler"](
          this[_0x5422d2(0x1d6)][_0x5422d2(0x262)],
          () =>
            this[_0x5422d2(0x110)]["onCommandExecuted"]((_0x321bf7) => {
              const _0x502113 = _0x5422d2;
              if (_0x321bf7["id"] !== c[_0x502113(0x121)]["id"]) return;
              let {
                  unitId: _0x93943e,
                  tableId: _0x4fc386,
                  view: _0x5bc6be,
                  index: _0x5d335e,
                } = _0x321bf7["params"],
                _0x3889dc = this[_0x502113(0xf8)](_0x93943e);
              if (!_0x3889dc) return;
              let _0x53918f = _0x3889dc[_0x502113(0x1ca)](_0x4fc386);
              if (!_0x53918f) return;
              let _0xc8120c = {
                base: _0x3889dc,
                table: _0x53918f,
                view: _0x5bc6be,
                index: _0x5d335e,
              };
              this["fireEvent"](this["Event"][_0x502113(0x262)], _0xc8120c);
            }),
        ),
      ),
      this[_0x5422d2(0x194)](
        this["registerEventHandler"](
          this["Event"]["BaseTableCellValueChanged"],
          () =>
            this[_0x5422d2(0x110)][_0x5422d2(0xe7)]((_0xb77dc6) => {
              const _0x5bc56e = _0x5422d2;
              if (_0xb77dc6["id"] !== c[_0x5bc56e(0x1d7)]["id"]) return;
              let {
                  unitId: _0x48936c,
                  tableId: _0x4ea87f,
                  recordId: _0x1edf04,
                  fieldId: _0x4ddffb,
                  value: _0x10bf13,
                } = _0xb77dc6["params"],
                _0x51dc6d = this[_0x5bc56e(0xf8)](_0x48936c);
              if (!_0x51dc6d) return;
              let _0x58c407 = _0x51dc6d["getTableById"](_0x4ea87f);
              if (!_0x58c407) return;
              let _0x27eb99 = _0x58c407["getFieldById"](_0x4ddffb);
              if (!_0x27eb99) return;
              let _0xc67597 = _0x58c407[_0x5bc56e(0x1a2)](_0x1edf04);
              if (!_0xc67597) return;
              let _0x11634b = {
                base: _0x51dc6d,
                table: _0x58c407,
                field: _0x27eb99,
                record: _0xc67597,
                value: _0x10bf13,
              };
              this["fireEvent"](this["Event"][_0x5bc56e(0x195)], _0x11634b);
            }),
        ),
      ));
  }
  ["_initBaseBeforeEvents"]() {
    (this[_0x4f5a3a(0x194)](
      this["registerEventHandler"](
        this[_0x4f5a3a(0x1d6)][_0x4f5a3a(0x105)],
        () =>
          this[_0x4f5a3a(0x110)][_0x4f5a3a(0x25a)]((_0x8b789) => {
            const _0x6f83f = _0x4f5a3a;
            if (Z(_0x8b789, c[_0x6f83f(0x127)])) {
              let {
                  unitId: _0x104e1d,
                  tableId: _0x3b01e7,
                  patches: _0x5a7b7d,
                  source: _0x31902b = c[_0x6f83f(0x20a)]["UI"],
                } = _0x8b789[_0x6f83f(0x211)],
                _0x47d16c = this[_0x6f83f(0x23f)](_0x104e1d, _0x3b01e7);
              if (!_0x47d16c) return;
              this[_0x6f83f(0x109)](
                _0x47d16c[_0x6f83f(0x221)],
                _0x47d16c[_0x6f83f(0x12a)],
                (0x0, c[_0x6f83f(0x17b)])(
                  _0x47d16c[_0x6f83f(0x12a)]["getTable"](),
                  _0x5a7b7d,
                ),
                _0x31902b,
              );
              return;
            }
            if (Z(_0x8b789, c[_0x6f83f(0x19f)])) {
              let {
                  unitId: _0x111862,
                  tableId: _0x79de51,
                  patches: _0x138a86,
                  source: _0x522abb = c[_0x6f83f(0x20a)]["UI"],
                } = _0x8b789[_0x6f83f(0x211)],
                _0x21def6 = this[_0x6f83f(0x23f)](_0x111862, _0x79de51);
              if (!_0x21def6) return;
              let _0x23490c = _0x21def6[_0x6f83f(0x12a)][_0x6f83f(0x235)]();
              this[_0x6f83f(0x109)](
                _0x21def6[_0x6f83f(0x221)],
                _0x21def6[_0x6f83f(0x12a)],
                (0x0, c[_0x6f83f(0x17b)])(
                  _0x23490c,
                  (0x0, c[_0x6f83f(0x1e3)])(_0x23490c, _0x138a86),
                ),
                _0x522abb,
              );
              return;
            }
            if (Z(_0x8b789, c[_0x6f83f(0xdd)])) {
              let _0x3ae7af = _0x8b789["params"],
                _0x2d8afd = this[_0x6f83f(0x23f)](
                  _0x3ae7af[_0x6f83f(0x251)],
                  _0x3ae7af["tableId"],
                );
              if (!_0x2d8afd) return;
              this[_0x6f83f(0x109)](
                _0x2d8afd["base"],
                _0x2d8afd[_0x6f83f(0x12a)],
                (0x0, c[_0x6f83f(0x1a3)])(_0x2d8afd["table"]["getTable"](), [
                  _0x3ae7af[_0x6f83f(0x210)],
                ]),
                _0x3ae7af[_0x6f83f(0x1e5)] ?? c["BaseEventSource"]["UI"],
              );
              return;
            }
            if (Z(_0x8b789, c["BatchCreateBaseRecordsCommand"])) {
              let _0x93ea16 = _0x8b789["params"],
                _0x58d295 = this[_0x6f83f(0x23f)](
                  _0x93ea16[_0x6f83f(0x251)],
                  _0x93ea16[_0x6f83f(0x154)],
                );
              if (!_0x58d295) return;
              this[_0x6f83f(0x109)](
                _0x58d295[_0x6f83f(0x221)],
                _0x58d295[_0x6f83f(0x12a)],
                (0x0, c[_0x6f83f(0x1a3)])(
                  _0x58d295[_0x6f83f(0x12a)][_0x6f83f(0x235)](),
                  _0x93ea16["records"],
                ),
                _0x93ea16[_0x6f83f(0x1e5)] ?? c[_0x6f83f(0x20a)]["UI"],
              );
              return;
            }
            if (Z(_0x8b789, c[_0x6f83f(0xfb)])) {
              let _0x2e66f4 = _0x8b789[_0x6f83f(0x211)],
                _0x4ea2f7 = this[_0x6f83f(0x23f)](
                  _0x2e66f4[_0x6f83f(0x251)],
                  _0x2e66f4["tableId"],
                );
              if (!_0x4ea2f7) return;
              this[_0x6f83f(0x109)](
                _0x4ea2f7[_0x6f83f(0x221)],
                _0x4ea2f7[_0x6f83f(0x12a)],
                (0x0, c["validateBaseHierarchyRecordCreations"])(
                  _0x4ea2f7["table"]["getTable"](),
                  [_0x2e66f4["record"]],
                ),
                _0x2e66f4[_0x6f83f(0x1e5)] ?? c[_0x6f83f(0x20a)]["UI"],
              );
              return;
            }
            if (Z(_0x8b789, c[_0x6f83f(0x278)])) {
              let _0x1c9894 = _0x8b789["params"],
                _0x2ae169 = this[_0x6f83f(0x23f)](
                  _0x1c9894[_0x6f83f(0x251)],
                  _0x1c9894[_0x6f83f(0x154)],
                );
              if (!_0x2ae169) return;
              let _0x1a7ddd = _0x2ae169[_0x6f83f(0x12a)][_0x6f83f(0x235)](),
                _0x2223c7 =
                  _0x1c9894[_0x6f83f(0x1d3)] ??
                  (0x0, c[_0x6f83f(0x22a)])(_0x1a7ddd),
                _0x580e81 =
                  (0x0, c[_0x6f83f(0x272)])(_0x1a7ddd, _0x2223c7)[
                    _0x6f83f(0x25b)
                  ]["get"](_0x1c9894["recordId"]) ?? null;
              this[_0x6f83f(0x109)](
                _0x2ae169[_0x6f83f(0x221)],
                _0x2ae169[_0x6f83f(0x12a)],
                [
                  {
                    tableId: _0x1c9894[_0x6f83f(0x154)],
                    fieldId: _0x2223c7,
                    recordId: _0x1c9894[_0x6f83f(0x1d5)],
                    oldParentRecordId: _0x580e81,
                    parentRecordId: _0x1c9894[_0x6f83f(0xef)],
                  },
                ],
                _0x1c9894["source"] ?? c[_0x6f83f(0x20a)]["UI"],
              );
              return;
            }
            if (Z(_0x8b789, c[_0x6f83f(0x150)])) {
              let _0x5a8087 = _0x8b789["params"],
                _0x11d606 = this[_0x6f83f(0x23f)](
                  _0x5a8087[_0x6f83f(0x251)],
                  _0x5a8087["tableId"],
                );
              if (!_0x11d606) return;
              let _0x3933d5 =
                _0x5a8087[_0x6f83f(0x1d3)] ??
                (0x0, c[_0x6f83f(0x22a)])(
                  _0x11d606["table"][_0x6f83f(0x235)](),
                );
              this["_fireBeforeHierarchyChange"](
                _0x11d606[_0x6f83f(0x221)],
                _0x11d606["table"],
                [
                  {
                    tableId: _0x5a8087["tableId"],
                    fieldId: _0x3933d5,
                    recordId: _0x5a8087["record"]["id"],
                    oldParentRecordId: null,
                    parentRecordId: _0x5a8087["parentRecordId"],
                  },
                ],
                _0x5a8087[_0x6f83f(0x1e5)] ?? c["BaseEventSource"]["UI"],
              );
              return;
            }
            if (Z(_0x8b789, c[_0x6f83f(0x1f4)])) {
              let _0xd7d1d = _0x8b789["params"],
                _0x447ed9 = this[_0x6f83f(0x23f)](
                  _0xd7d1d["unitId"],
                  _0xd7d1d["tableId"],
                );
              if (!_0x447ed9) return;
              this[_0x6f83f(0x109)](
                _0x447ed9["base"],
                _0x447ed9[_0x6f83f(0x12a)],
                (0x0, c[_0x6f83f(0x1dd)])(
                  _0x447ed9[_0x6f83f(0x12a)][_0x6f83f(0x235)](),
                  [_0xd7d1d[_0x6f83f(0x1d5)]],
                ),
                _0xd7d1d[_0x6f83f(0x1e5)] ?? c[_0x6f83f(0x20a)]["UI"],
              );
              return;
            }
            if (Z(_0x8b789, c["BatchDeleteBaseRecordsCommand"])) {
              let _0x266a60 = _0x8b789[_0x6f83f(0x211)],
                _0x30a3d7 = this["_getHierarchyEventContext"](
                  _0x266a60[_0x6f83f(0x251)],
                  _0x266a60[_0x6f83f(0x154)],
                );
              if (!_0x30a3d7) return;
              this[_0x6f83f(0x109)](
                _0x30a3d7["base"],
                _0x30a3d7[_0x6f83f(0x12a)],
                (0x0, c[_0x6f83f(0x1dd)])(
                  _0x30a3d7[_0x6f83f(0x12a)]["getTable"](),
                  _0x266a60[_0x6f83f(0x133)],
                ),
                _0x266a60[_0x6f83f(0x1e5)] ?? c["BaseEventSource"]["UI"],
              );
              return;
            }
            if (!Z(_0x8b789, c[_0x6f83f(0x1d7)])) return;
            let _0x3f42d9 = _0x8b789[_0x6f83f(0x211)],
              _0x244800 = this[_0x6f83f(0x23f)](
                _0x3f42d9[_0x6f83f(0x251)],
                _0x3f42d9[_0x6f83f(0x154)],
              );
            if (!_0x244800) return;
            let _0x3b8152 = _0x244800[_0x6f83f(0x12a)][_0x6f83f(0x235)]();
            if (
              !(0x0, c[_0x6f83f(0x12b)])(_0x3b8152)["includes"](
                _0x3f42d9[_0x6f83f(0x1d3)],
              )
            )
              return;
            let _0x5f0328 =
                (0x0, c[_0x6f83f(0x272)])(
                  _0x3b8152,
                  _0x3f42d9[_0x6f83f(0x1d3)],
                )[_0x6f83f(0x25b)]["get"](_0x3f42d9[_0x6f83f(0x1d5)]) ?? null,
              _0x11322b =
                (0x0, c["parseRecordLinkIds"])(
                  _0x3f42d9[_0x6f83f(0x173)],
                )[0x0] ?? null;
            _0x5f0328 !== _0x11322b &&
              this[_0x6f83f(0x109)](
                _0x244800[_0x6f83f(0x221)],
                _0x244800[_0x6f83f(0x12a)],
                [
                  {
                    tableId: _0x3f42d9[_0x6f83f(0x154)],
                    fieldId: _0x3f42d9[_0x6f83f(0x1d3)],
                    recordId: _0x3f42d9[_0x6f83f(0x1d5)],
                    oldParentRecordId: _0x5f0328,
                    parentRecordId: _0x11322b,
                  },
                ],
                _0x3f42d9["source"] ?? c[_0x6f83f(0x20a)]["UI"],
              );
          }),
      ),
    ),
      this[_0x4f5a3a(0x194)](
        this[_0x4f5a3a(0x18d)](this["Event"]["BeforeBaseTableCreate"], () =>
          this["_commandService"][_0x4f5a3a(0x25a)]((_0x782d8b) => {
            const _0x3a7930 = _0x4f5a3a;
            if (_0x782d8b["id"] !== c[_0x3a7930(0xd1)]["id"]) return;
            let {
                unitId: _0x2c63e2,
                table: _0x54d66c,
                index: _0x14b422,
              } = _0x782d8b[_0x3a7930(0x211)],
              _0x4d6ef0 = this[_0x3a7930(0xf8)](_0x2c63e2);
            if (!_0x4d6ef0) return;
            let _0x5de806 = {
              base: _0x4d6ef0,
              table: _0x54d66c,
              index: _0x14b422,
            };
            if (
              (this["fireEvent"](
                this[_0x3a7930(0x1d6)][_0x3a7930(0x26b)],
                _0x5de806,
              ),
              _0x5de806["cancel"])
            )
              throw new l["CanceledError"]();
          }),
        ),
      ),
      this["disposeWithMe"](
        this["registerEventHandler"](this["Event"][_0x4f5a3a(0x1d9)], () =>
          this[_0x4f5a3a(0x110)]["beforeCommandExecuted"]((_0x38e542) => {
            const _0x513a9b = _0x4f5a3a;
            if (_0x38e542["id"] !== c[_0x513a9b(0x19c)]["id"]) return;
            let {
                unitId: _0x1a5588,
                tableId: _0x4217b7,
                field: _0x5f36fd,
                index: _0x2c0c38,
                viewIndexes: _0x21e7e6,
              } = _0x38e542[_0x513a9b(0x211)],
              _0x517280 = this[_0x513a9b(0xf8)](_0x1a5588);
            if (!_0x517280) return;
            let _0x32f0d7 = _0x517280["getTableById"](_0x4217b7);
            if (!_0x32f0d7) return;
            let _0x2beba1 = {
              base: _0x517280,
              table: _0x32f0d7,
              field: _0x5f36fd,
              index: _0x2c0c38,
              viewIndexes: _0x21e7e6,
            };
            if (
              (this[_0x513a9b(0x1a4)](
                this[_0x513a9b(0x1d6)]["BeforeBaseTableFieldCreate"],
                _0x2beba1,
              ),
              _0x2beba1[_0x513a9b(0x100)])
            )
              throw new l[_0x513a9b(0x196)]();
          }),
        ),
      ),
      this["disposeWithMe"](
        this[_0x4f5a3a(0x18d)](
          this[_0x4f5a3a(0x1d6)]["BeforeBaseTableRecordCreate"],
          () =>
            this["_commandService"]["beforeCommandExecuted"]((_0x3b4260) => {
              const _0x218f51 = _0x4f5a3a;
              if (
                _0x3b4260["id"] !== c[_0x218f51(0xdd)]["id"] &&
                _0x3b4260["id"] !== c[_0x218f51(0x139)]["id"]
              )
                return;
              let _0x560398 = _0x3b4260[_0x218f51(0x211)],
                { unitId: _0x4596c8, tableId: _0x4c0972 } = _0x560398,
                _0x331c94 = _0x560398[_0x218f51(0x132)] ?? [
                  _0x560398[_0x218f51(0x210)],
                ],
                _0x218b8c = this[_0x218f51(0xf8)](_0x4596c8);
              if (!_0x218b8c) return;
              let _0x300609 = _0x218b8c["getTableById"](_0x4c0972);
              if (!_0x300609) return;
              let _0x43ea0f = {
                base: _0x218b8c,
                table: _0x300609,
                records: _0x331c94,
              };
              if (
                (this[_0x218f51(0x1a4)](
                  this["Event"][_0x218f51(0x287)],
                  _0x43ea0f,
                ),
                _0x43ea0f[_0x218f51(0x100)])
              )
                throw new l[_0x218f51(0x196)]();
            }),
        ),
      ),
      this[_0x4f5a3a(0x194)](
        this[_0x4f5a3a(0x18d)](this["Event"][_0x4f5a3a(0x236)], () =>
          this[_0x4f5a3a(0x110)][_0x4f5a3a(0x25a)]((_0x47b96b) => {
            const _0x2d12b1 = _0x4f5a3a;
            if (_0x47b96b["id"] !== c[_0x2d12b1(0x121)]["id"]) return;
            let {
                unitId: _0x24afd9,
                tableId: _0x173b72,
                view: _0x169db6,
                index: _0x37ac6e,
              } = _0x47b96b[_0x2d12b1(0x211)],
              _0x4af205 = this["getBase"](_0x24afd9);
            if (!_0x4af205) return;
            let _0x449392 = _0x4af205[_0x2d12b1(0x1ca)](_0x173b72);
            if (!_0x449392) return;
            let _0x1cac85 = {
              base: _0x4af205,
              table: _0x449392,
              view: _0x169db6,
              index: _0x37ac6e,
            };
            if (
              (this["fireEvent"](
                this["Event"]["BeforeBaseTableViewCreate"],
                _0x1cac85,
              ),
              _0x1cac85[_0x2d12b1(0x100)])
            )
              throw new l[_0x2d12b1(0x196)]();
          }),
        ),
      ),
      this["disposeWithMe"](
        this[_0x4f5a3a(0x18d)](this[_0x4f5a3a(0x1d6)][_0x4f5a3a(0x10c)], () =>
          this[_0x4f5a3a(0x110)][_0x4f5a3a(0x25a)]((_0x557694) => {
            const _0x32a85b = _0x4f5a3a;
            if (_0x557694["id"] !== c[_0x32a85b(0x1d7)]["id"]) return;
            let {
                unitId: _0x733e1b,
                tableId: _0x4f4354,
                recordId: _0x32f3dc,
                fieldId: _0x3ed0f2,
                value: _0x21178c,
              } = _0x557694[_0x32a85b(0x211)],
              _0x3b98e5 = this[_0x32a85b(0xf8)](_0x733e1b);
            if (!_0x3b98e5) return;
            let _0x424ae3 = _0x3b98e5[_0x32a85b(0x1ca)](_0x4f4354);
            if (!_0x424ae3) return;
            let _0x8ce505 = _0x424ae3[_0x32a85b(0x152)](_0x3ed0f2);
            if (!_0x8ce505) return;
            let _0x4d6599 = _0x424ae3[_0x32a85b(0x1a2)](_0x32f3dc);
            if (!_0x4d6599) return;
            let _0x2bb48e = {
              base: _0x3b98e5,
              table: _0x424ae3,
              field: _0x8ce505,
              record: _0x4d6599,
              value: _0x21178c,
            };
            if (
              (this["fireEvent"](this["Event"][_0x32a85b(0x10c)], _0x2bb48e),
              _0x2bb48e[_0x32a85b(0x100)])
            )
              throw new l["CanceledError"]();
          }),
        ),
      ));
  }
  ["_getHierarchyEventContext"](_0x490d72, _0x270fb5) {
    let _0x48247d = this[_0x1bbfdf(0xf8)](_0x490d72),
      _0x5ee7d0 =
        _0x48247d == null ? void 0x0 : _0x48247d[_0x1bbfdf(0x1ca)](_0x270fb5);
    return _0x48247d && _0x5ee7d0
      ? { base: _0x48247d, table: _0x5ee7d0 }
      : null;
  }
  ["_fireBeforeHierarchyChange"](_0x484d29, _0xd92863, _0x12ab2c, _0x5eb828) {
    if (!_0x12ab2c["length"]) return;
    let _0x19beba = {
      base: _0x484d29,
      table: _0xd92863,
      changes: _0x12ab2c,
      source: _0x5eb828,
    };
    if (
      (this[_0x3d0b21(0x1a4)](
        this[_0x3d0b21(0x1d6)][_0x3d0b21(0x105)],
        _0x19beba,
      ),
      _0x19beba[_0x3d0b21(0x100)])
    )
      throw new l[_0x3d0b21(0x196)]();
  }
};
function Z(_0x1497b3, _0x6d7093) {
  return (
    _0x1497b3["id"] === _0x6d7093["id"] &&
    _0x1497b3[_0x39c220(0x211)] !== void 0x0
  );
}
u["FUniver"]["extend"](X);
var Q = class extends u["FEnum"] {
  get ["BaseFieldType"]() {
    return l[_0x2bab6e(0x1f6)];
  }
  get ["BaseFilterConjunction"]() {
    return l[_0x2f235b(0x26e)];
  }
  get ["BaseFilterOperator"]() {
    return l[_0x4c5311(0x1a6)];
  }
  get ["BaseFieldKeyEnum"]() {
    return v;
  }
  get ["BaseViewType"]() {
    return l[_0x537c00(0x171)];
  }
  get ["BaseConditionalColorTarget"]() {
    return l["BaseConditionalColorTarget"];
  }
  get ["BaseConditionalColorOperator"]() {
    return l[_0x1c47c4(0x1d1)];
  }
  get ["BaseConditionalDateMode"]() {
    return l[_0x33c2ce(0x1d2)];
  }
  get ["BaseSortDirection"]() {
    return l[_0x7cf2f6(0x10a)];
  }
  get ["BaseEventSource"]() {
    return c[_0x5a95d8(0x20a)];
  }
  get ["BaseHierarchyErrorCode"]() {
    return c[_0x3bb24f(0x240)];
  }
  get ["BaseHierarchyInvalidReason"]() {
    return l[_0xbb506f(0x215)];
  }
  get ["BaseRecordLinkRole"]() {
    return l[_0x5e4cc8(0xe2)];
  }
};
u["FEnum"]["extend"](Q);
var $ = class extends u["FEventName"] {
  get ["BaseTableCreated"]() {
    return "BaseTableCreated";
  }
  get ["BeforeBaseTableCreate"]() {
    return _0x2b2047(0x26b);
  }
  get ["BaseTableFieldCreated"]() {
    return _0x7f2037(0x265);
  }
  get ["BeforeBaseTableFieldCreate"]() {
    return _0x1f1e8f(0x1d9);
  }
  get ["BaseTableRecordCreated"]() {
    return "BaseTableRecordCreated";
  }
  get ["BeforeBaseTableRecordCreate"]() {
    return _0x134077(0x287);
  }
  get ["BaseTableViewCreated"]() {
    return _0x1d869c(0x262);
  }
  get ["BeforeBaseTableViewCreate"]() {
    return "BeforeBaseTableViewCreate";
  }
  get ["BaseTableCellValueChanged"]() {
    return "BaseTableCellValueChanged";
  }
  get ["BeforeBaseTableCellValueChange"]() {
    return _0x24f9c2(0x10c);
  }
  get ["BaseHierarchyChanged"]() {
    return _0x4ff434(0x19e);
  }
  get ["BeforeBaseHierarchyChange"]() {
    return _0x5f1cac(0x105);
  }
};
(u["FEventName"]["extend"]($),
  (exports["BaseFieldKeyEnum"] = v),
  Object["defineProperty"](exports, "FBase", {
    enumerable: !0x0,
    get: function () {
      return Y;
    },
  }),
  (exports["FBaseObjectPermission"] = m),
  (exports["FBasePermission"] = p),
  Object["defineProperty"](exports, "FBaseTable", {
    enumerable: !0x0,
    get: function () {
      return B;
    },
  }),
  Object["defineProperty"](exports, "FBaseTableField", {
    enumerable: !0x0,
    get: function () {
      return _;
    },
  }),
  Object["defineProperty"](exports, "FBaseTableRange", {
    enumerable: !0x0,
    get: function () {
      return A;
    },
  }),
  Object["defineProperty"](exports, "FBaseTableRecord", {
    enumerable: !0x0,
    get: function () {
      return I;
    },
  }),
  Object["defineProperty"](exports, "FBaseTableView", {
    enumerable: !0x0,
    get: function () {
      return z;
    },
  }),
  (exports["FBasesEventNameMixin"] = $),
  (exports["resolveBaseFieldKey"] = S),
  (exports["resolveBaseFieldValues"] = b));
