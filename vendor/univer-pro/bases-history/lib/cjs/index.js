Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases"),
  t = require("@univerjs-pro/edit-history"),
  n = require("@univerjs-pro/license"),
  r = require("@univerjs/core");
var i = "@univerjs-pro/bases-history",
  a = "1.0.0-insiders.20260907-70fc579";
const o = {},
  s = [
    "recordOrder",
    "fieldOrder",
    "viewOrder",
    "rowIndex",
    "rowId",
    "colIndex",
    "colId",
    "cellData",
  ];
function c(_0x382cf5) {
  let _0x22c828 = null,
    _0x3cf8b3 = null,
    _0x1daf64 = _0x382cf5
      .map((_0x5c1a21, _0x285006) => ({ entry: _0x5c1a21, index: _0x285006 }))
      .sort(
        (_0x3cffae, _0x1923f4) =>
          _0x3cffae.entry["revision"] - _0x1923f4.entry["revision"] ||
          _0x3cffae.index - _0x1923f4.index,
      );
  for (let { entry: _0x465f52 } of _0x1daf64)
    x(_0x465f52.mutation["params"]) &&
      ((_0x22c828 =
        _0x22c828 === null
          ? _0x465f52.mutation["params"].op
          : r.JSON1["type"].compose(
              _0x22c828,
              _0x465f52.mutation["params"].op,
            )),
      (_0x3cf8b3 = _0x465f52));
  if (_0x22c828 === null || _0x3cf8b3 === null) return [];
  let _0x3398e4 = v(_0x22c828).filter((_0x565445) => !u(_0x565445)),
    _0x398d31 = h(_0x3398e4, "recordOrder"),
    _0x122884 = h(_0x3398e4, "fieldOrder");
  return _0x3398e4.flatMap((_0x583c68, _0x2682de) => {
    let _0x3daa27 = m(_0x583c68.path);
    if (!_0x3daa27) return [];
    let _0x40ffd3 = l(_0x583c68, _0x3daa27);
    return [
      {
        id: _0x3cf8b3.revision + ":" + _0x2682de,
        kind: _0x40ffd3,
        label: _0x3daa27.label,
        memberId: _0x3cf8b3.memberId,
        tableId: _0x3daa27.tableId,
        viewId: _0x3daa27.viewId,
        recordId: _0x3daa27.recordId,
        recordIndex: _0x3daa27.recordId
          ? _0x398d31.get(_0x3daa27.recordId)
          : undefined,
        removedRecord:
          _0x40ffd3 === "delete" ? g(_0x583c68, _0x3daa27) : undefined,
        fieldId: _0x3daa27.fieldId,
        fieldIndex: _0x3daa27.fieldId
          ? _0x122884.get(_0x3daa27.fieldId)
          : undefined,
      },
    ];
  });
}
function l(_0x3ed8e0, _0x115d4d) {
  if (!f(_0x3ed8e0.path, _0x115d4d)) return "update";
  let _0x49215e = Object.prototype["hasOwnProperty"].call(_0x3ed8e0.value, "i"),
    _0x55f47e = Object.prototype["hasOwnProperty"].call(_0x3ed8e0.value, "r");
  return _0x49215e && !_0x55f47e
    ? "insert"
    : _0x55f47e && !_0x49215e
      ? "delete"
      : "update";
}
function u(_0x101edc) {
  return (
    Object.prototype["hasOwnProperty"].call(_0x101edc.value, "i") &&
    Object.prototype["hasOwnProperty"].call(_0x101edc.value, "r") &&
    d(_0x101edc.value["i"], _0x101edc.value["r"])
  );
}
function d(_0x4d2e46, _0x493120) {
  if (_0x4d2e46 === _0x493120) return true;
  if (Array.isArray(_0x4d2e46) || Array.isArray(_0x493120))
    return (
      Array.isArray(_0x4d2e46) &&
      Array.isArray(_0x493120) &&
      _0x4d2e46.length === _0x493120.length &&
      _0x4d2e46.every((_0x571005, _0x49e655) =>
        d(_0x571005, _0x493120[_0x49e655]),
      )
    );
  if (!S(_0x4d2e46) || !S(_0x493120)) return false;
  let _0x40d494 = Object.keys(_0x4d2e46),
    _0x5382b1 = Object.keys(_0x493120);
  return (
    _0x40d494.length === _0x5382b1.length &&
    _0x40d494.every(
      (_0x4ee161) =>
        Object.prototype["hasOwnProperty"].call(_0x493120, _0x4ee161) &&
        d(_0x4d2e46[_0x4ee161], _0x493120[_0x4ee161]),
    )
  );
}
function f(_0x4f007f, _0x7ad32b) {
  return _0x7ad32b.tableId
    ? _0x7ad32b.recordId && _0x7ad32b.fieldId
      ? p(_0x4f007f, [
          "tables",
          _0x7ad32b.tableId,
          "records",
          _0x7ad32b.recordId,
          "values",
          _0x7ad32b.fieldId,
        ])
      : _0x7ad32b.recordId
        ? p(_0x4f007f, [
            "tables",
            _0x7ad32b.tableId,
            "records",
            _0x7ad32b.recordId,
          ])
        : _0x7ad32b.fieldId
          ? p(_0x4f007f, [
              "tables",
              _0x7ad32b.tableId,
              "fields",
              _0x7ad32b.fieldId,
            ])
          : _0x7ad32b.viewId
            ? p(_0x4f007f, [
                "tables",
                _0x7ad32b.tableId,
                "views",
                _0x7ad32b.viewId,
              ])
            : p(_0x4f007f, ["tables", _0x7ad32b.tableId])
    : false;
}
function p(_0x588cd2, _0x5e9640) {
  return (
    _0x588cd2.length === _0x5e9640.length &&
    _0x588cd2.every(
      (_0x1937f7, _0x500c00) => _0x1937f7 === _0x5e9640[_0x500c00],
    )
  );
}
function m(_0x33aeb4) {
  let _0x30396f = _0x33aeb4.indexOf("tables"),
    _0x2baf22 = _0x33aeb4[_0x30396f + 1];
  if (_0x30396f < 0 || typeof _0x2baf22 != "string") return null;
  let _0x288e2a = _0x33aeb4[_0x30396f + 2],
    _0x567913 = _0x33aeb4[_0x30396f + 3];
  if (_0x288e2a === "records" && typeof _0x567913 == "string") {
    let _0x15e476 = _0x33aeb4[_0x30396f + 4],
      _0x34ed81 = _0x33aeb4[_0x30396f + 5];
    return _0x15e476 === "values" && typeof _0x34ed81 == "string"
      ? {
          label: "base:cell",
          tableId: _0x2baf22,
          recordId: _0x567913,
          fieldId: _0x34ed81,
        }
      : _0x15e476 === "updatedAt" || _0x15e476 === "updatedBy"
        ? null
        : { label: "base:record", tableId: _0x2baf22, recordId: _0x567913 };
  }
  return _0x288e2a === "fields" && typeof _0x567913 == "string"
    ? { label: "base:field", tableId: _0x2baf22, fieldId: _0x567913 }
    : _0x288e2a === "views" && typeof _0x567913 == "string"
      ? { label: "base:view", tableId: _0x2baf22, viewId: _0x567913 }
      : s.some((_0x2656fc) => _0x2656fc === _0x288e2a)
        ? null
        : {
            label: _0x288e2a === undefined ? "base:table" : "base:unknown",
            tableId: _0x2baf22,
          };
}
function h(_0x468e80, _0x593bb9) {
  let _0x2a085c = new Map();
  return (
    _0x468e80.forEach((_0x508dc3) => {
      let _0x427bee = _0x508dc3.path["indexOf"](_0x593bb9),
        _0x2fa652 = _0x508dc3.path[_0x427bee + 1],
        _0x26f645 = _0x508dc3.value["r"];
      if (
        _0x427bee >= 0 &&
        typeof _0x2fa652 == "number" &&
        typeof _0x26f645 == "string"
      ) {
        _0x2a085c.set(_0x26f645, _0x2fa652);
        return;
      }
      if (
        _0x427bee !== _0x508dc3.path["length"] - 1 ||
        !Array.isArray(_0x26f645)
      )
        return;
      let _0x462bf1 = new Set(
        Array.isArray(_0x508dc3.value["i"])
          ? _0x508dc3.value["i"].filter(
              (_0x1cf1b8) => typeof _0x1cf1b8 == "string",
            )
          : [],
      );
      _0x26f645.forEach((_0x163fe4, _0xe9c413) => {
        typeof _0x163fe4 == "string" &&
          !_0x462bf1.has(_0x163fe4) &&
          _0x2a085c.set(_0x163fe4, _0xe9c413);
      });
    }),
    _0x2a085c
  );
}
function g(_0x5e7cf8, _0x3c925b) {
  if (!(
    !_0x3c925b.recordId ||
    _0x3c925b.fieldId ||
    !f(_0x5e7cf8.path, _0x3c925b)
  ))
    return _(_0x5e7cf8.value["r"]) ? _0x5e7cf8.value["r"] : undefined;
}
function _(_0x294bdc) {
  return (
    S(_0x294bdc) &&
    typeof _0x294bdc.id == "string" &&
    S(_0x294bdc.values) &&
    typeof _0x294bdc.orderKey == "string" &&
    typeof _0x294bdc.createdAt == "number" &&
    typeof _0x294bdc.updatedAt == "number"
  );
}
function v(_0x3665b3) {
  let _0x4daaa3 = [];
  return (y(_0x3665b3, [], _0x4daaa3), _0x4daaa3);
}
function y(_0x4b17cb, _0x1512cf, _0x4b02f9) {
  if (!Array.isArray(_0x4b17cb)) return;
  let _0x2afeaf = [];
  _0x4b17cb.forEach((_0x2bb196) => {
    if (Array.isArray(_0x2bb196)) {
      y(_0x2bb196, [..._0x1512cf, ..._0x2afeaf], _0x4b02f9);
      return;
    }
    if (b(_0x2bb196)) {
      _0x4b02f9.push({ path: [..._0x1512cf, ..._0x2afeaf], value: _0x2bb196 });
      return;
    }
    (typeof _0x2bb196 == "string" || typeof _0x2bb196 == "number") &&
      _0x2afeaf.push(_0x2bb196);
  });
}
function b(_0x32a9c7) {
  return (
    S(_0x32a9c7) &&
    ["i", "r", "p", "d", "es", "ena", "et"].some((_0x5b6599) =>
      Object.prototype["hasOwnProperty"].call(_0x32a9c7, _0x5b6599),
    )
  );
}
function x(_0x24b323) {
  return (
    typeof _0x24b323 == "object" &&
    !!_0x24b323 &&
    "op" in _0x24b323 &&
    Array.isArray(_0x24b323.op)
  );
}
function S(_0x4d401b) {
  return typeof _0x4d401b == "object" && !!_0x4d401b;
}
function C(_0x556f04, _0x2c29b3) {
  return function (_0xe42d6e, _0x41929d) {
    _0x2c29b3(_0xe42d6e, _0x41929d, _0x556f04);
  };
}
function w(_0x5b425e, _0x584bbc, _0x442efa, _0x57970d) {
  var _0x43cf56 = arguments.length,
    _0x638109 =
      _0x43cf56 < 3
        ? _0x584bbc
        : _0x57970d === null
          ? (_0x57970d = Object.getOwnPropertyDescriptor(_0x584bbc, _0x442efa))
          : _0x57970d,
    _0x395802;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x638109 = Reflect.decorate(_0x5b425e, _0x584bbc, _0x442efa, _0x57970d);
  else {
    for (var _0x2737c0 = _0x5b425e.length - 1; _0x2737c0 >= 0; _0x2737c0--)
      (_0x395802 = _0x5b425e[_0x2737c0]) &&
        (_0x638109 =
          (_0x43cf56 < 3
            ? _0x395802(_0x638109)
            : _0x43cf56 > 3
              ? _0x395802(_0x584bbc, _0x442efa, _0x638109)
              : _0x395802(_0x584bbc, _0x442efa)) || _0x638109);
  }
  return (
    _0x43cf56 > 3 &&
      _0x638109 &&
      Object.defineProperty(_0x584bbc, _0x442efa, _0x638109),
    _0x638109
  );
}
let T = class {
  constructor(_0x48cf74) {
    this._mutationService = _0x48cf74;
  }
  async compare(_0x42a3d5, _0x4a2604) {
    return c(await this._mutationService["load"](_0x42a3d5, _0x4a2604));
  }
};
T = w([C(0, (0, r.Inject)(t.HistoryMutationService))], T);
function E(_0x218936) {
  "@babel/helpers - typeof";
  return (
    (E =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x7a77ae) {
            return typeof _0x7a77ae;
          }
        : function (_0x5ca071) {
            return _0x5ca071 &&
              typeof Symbol == "function" &&
              _0x5ca071.constructor === Symbol &&
              _0x5ca071 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5ca071;
          }),
    E(_0x218936)
  );
}
function D(_0x5a542c, _0x5dd9c4) {
  if (E(_0x5a542c) != "object" || !_0x5a542c) return _0x5a542c;
  var _0x1725d1 = _0x5a542c[Symbol.toPrimitive];
  if (_0x1725d1 !== undefined) {
    var _0x3a8f44 = _0x1725d1.call(_0x5a542c, _0x5dd9c4 || "default");
    if (E(_0x3a8f44) != "object") return _0x3a8f44;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x5dd9c4 === "string" ? String : Number)(_0x5a542c);
}
function O(_0x57d9c2) {
  var _0x3bc1fd = D(_0x57d9c2, "string");
  return E(_0x3bc1fd) == "symbol" ? _0x3bc1fd : _0x3bc1fd + "";
}
function k(_0x5667cf, _0x274093, _0x58451a) {
  return (
    (_0x274093 = O(_0x274093)) in _0x5667cf
      ? Object.defineProperty(_0x5667cf, _0x274093, {
          value: _0x58451a,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5667cf[_0x274093] = _0x58451a),
    _0x5667cf
  );
}
const A = ["rev", "createdAt", "updatedAt"],
  j = [
    t.UnitComparisonEntityType["BASE"],
    t.UnitComparisonEntityType["TABLE"],
    t.UnitComparisonEntityType["FIELD"],
    t.UnitComparisonEntityType["RECORD"],
    t.UnitComparisonEntityType["VIEW"],
    t.UnitComparisonEntityType["CELL"],
  ],
  M = (0, t.withoutComparisonKeys)(
    "fields",
    "fieldOrder",
    "records",
    "recordOrder",
    "views",
    "viewOrder",
    "cellData",
    "colId",
    "colIndex",
    "rowId",
    "rowIndex",
    ...A,
  );
var N = class {
  constructor() {
    k(this, "type", r.UniverInstanceType["UNIVER_BASE"]);
  }
  compare(_0x3f23ad) {
    let _0x2bdd8c = (0, t.asRecord)(_0x3f23ad.leftData),
      _0x303bc9 = (0, t.asRecord)(_0x3f23ad.rightData),
      _0x44c183 = (0, t.asRecord)(
        _0x2bdd8c == null ? undefined : _0x2bdd8c.tables,
      ),
      _0x23ba7e = (0, t.asRecord)(
        _0x303bc9 == null ? undefined : _0x303bc9.tables,
      ),
      _0x4843ea = new Set([
        ...Object.keys(_0x44c183 ?? {}),
        ...Object.keys(_0x23ba7e ?? {}),
      ]),
      _0x3a5faf = (0, t.recordComparisonEntries)(
        _0x44c183,
        _0x2bdd8c == null ? undefined : _0x2bdd8c.tableOrder,
        M,
      ),
      _0x3725c7 = (0, t.recordComparisonEntries)(
        _0x23ba7e,
        _0x303bc9 == null ? undefined : _0x303bc9.tableOrder,
        M,
      ),
      _0x1b343f = [
        ...(0, t.buildSemanticComparisonItems)({
          entityType: t.UnitComparisonEntityType["BASE"],
          left:
            _0x2bdd8c === undefined
              ? []
              : [
                  {
                    stableId: "base",
                    position: 0,
                    value: (0, t.withoutComparisonKeys)(
                      "tables",
                      "tableOrder",
                      "resources",
                      ...A,
                    )(_0x2bdd8c),
                  },
                ],
          right:
            _0x303bc9 === undefined
              ? []
              : [
                  {
                    stableId: "base",
                    position: 0,
                    value: (0, t.withoutComparisonKeys)(
                      "tables",
                      "tableOrder",
                      "resources",
                      ...A,
                    )(_0x303bc9),
                  },
                ],
        }),
        ...(0, t.buildSemanticComparisonItems)({
          entityType: t.UnitComparisonEntityType["TABLE"],
          left: _0x3a5faf,
          right: _0x3725c7,
        }),
        ...[..._0x4843ea].flatMap((_0x4956bb) =>
          P(_0x4956bb, _0x44c183, _0x23ba7e),
        ),
      ],
      _0x332a81 = (0, t.buildScopedUnitComparison)({
        entityType: t.UnitComparisonEntityType["TABLE"],
        items: _0x1b343f,
        left: _0x3a5faf,
        right: _0x3725c7,
      });
    return {
      items: _0x332a81.items,
      supportedEntityTypes: j,
      scopes: _0x332a81.scopes,
      productContext: {
        type: r.UniverInstanceType["UNIVER_BASE"],
        visualProjection: "raw-table-data",
      },
    };
  }
};
function P(_0x3395c9, _0x247110, _0x523780) {
  let _0xf5b3ab =
      (0, t.asRecord)(_0x247110 == null ? undefined : _0x247110[_0x3395c9]) ??
      {},
    _0xdd3016 =
      (0, t.asRecord)(_0x523780 == null ? undefined : _0x523780[_0x3395c9]) ??
      {},
    _0x56460c = (0, t.asRecord)(_0xf5b3ab.fields),
    _0x52eb90 = (0, t.asRecord)(_0xdd3016.fields),
    _0x26ec93 = (0, t.asRecord)(_0xf5b3ab.records),
    _0x229aa0 = (0, t.asRecord)(_0xdd3016.records);
  return [
    ...F(
      t.UnitComparisonEntityType["FIELD"],
      _0x3395c9,
      _0x56460c,
      _0x52eb90,
      _0xf5b3ab.fieldOrder,
      _0xdd3016.fieldOrder,
      (0, t.withoutComparisonKeys)(...A),
    ),
    ...F(
      t.UnitComparisonEntityType["RECORD"],
      _0x3395c9,
      _0x26ec93,
      _0x229aa0,
      _0xf5b3ab.recordOrder,
      _0xdd3016.recordOrder,
      (0, t.withoutComparisonKeys)("values", "orderKey", ...A),
    ),
    ...F(
      t.UnitComparisonEntityType["VIEW"],
      _0x3395c9,
      _0xf5b3ab.views,
      _0xdd3016.views,
      _0xf5b3ab.viewOrder,
      _0xdd3016.viewOrder,
      (0, t.withoutComparisonKeys)("orderKey", ...A),
    ),
    ...I(
      _0x3395c9,
      _0x56460c,
      _0x52eb90,
      _0x26ec93,
      _0x229aa0,
      _0xf5b3ab.fieldOrder,
      _0xdd3016.fieldOrder,
      _0xf5b3ab.recordOrder,
      _0xdd3016.recordOrder,
      _0xf5b3ab.primaryFieldId,
      _0xdd3016.primaryFieldId,
    ),
  ];
}
function F(
  _0x23faa5,
  _0x499776,
  _0xe69e85,
  _0x525fd5,
  _0xd53bf2,
  _0x551783,
  _0x343229,
) {
  return (0, t.buildSemanticComparisonItems)({
    entityType: _0x23faa5,
    parentStableId: _0x499776,
    left: (0, t.recordComparisonEntries)(_0xe69e85, _0xd53bf2, _0x343229),
    right: (0, t.recordComparisonEntries)(_0x525fd5, _0x551783, _0x343229),
  });
}
function I(
  _0x29a60b,
  _0x40af72,
  _0x4951f2,
  _0x1d8623,
  _0x5b6f60,
  _0x3021d6,
  _0x4aab8,
  _0x59693a,
  _0x4d8370,
  _0x26a960,
  _0x2f91be,
) {
  let _0x6d54d4 = R(_0x40af72, _0x1d8623, _0x3021d6, _0x59693a, _0x26a960),
    _0x18078c = R(_0x4951f2, _0x5b6f60, _0x4aab8, _0x4d8370, _0x2f91be),
    _0x5c5175 = new Map(
      _0x6d54d4.map((_0x335b06) => [_0x335b06.stableId, _0x335b06]),
    ),
    _0x34d6c2 = new Map(
      _0x18078c.map((_0x194d61) => [_0x194d61.stableId, _0x194d61]),
    );
  return (0, t.buildSemanticComparisonItems)({
    entityType: t.UnitComparisonEntityType["CELL"],
    parentStableId: _0x29a60b,
    left: _0x6d54d4,
    right: _0x18078c,
  }).map((_0x2226bc) => ({
    ..._0x2226bc,
    locations: {
      left: L(
        _0x2226bc.locations["left"],
        _0x5c5175.get(_0x2226bc.stableId),
        _0x29a60b,
      ),
      right: L(
        _0x2226bc.locations["right"],
        _0x34d6c2.get(_0x2226bc.stableId),
        _0x29a60b,
      ),
    },
  }));
}
function L(_0xe7da20, _0x31d6cc, _0x1d9491) {
  if (_0xe7da20 === null || _0x31d6cc === undefined) return null;
  let _0x134bf8 = _0xe7da20.target;
  return (_0x134bf8 == null ? undefined : _0x134bf8.kind) === "entity"
    ? {
        ..._0xe7da20,
        parentStableId: _0x31d6cc.recordId,
        target: {
          ..._0x134bf8,
          kind: "base-cell",
          tableId: _0x1d9491,
          recordId: _0x31d6cc.recordId,
          fieldId: _0x31d6cc.fieldId,
        },
      }
    : _0xe7da20;
}
function R(_0x121fed, _0x4c1bc2, _0x5ab2c0, _0x2f1e27, _0x44001f) {
  let _0x27d034 = z(_0x121fed, _0x5ab2c0);
  return z(_0x4c1bc2, _0x2f1e27).flatMap((_0x298270, _0x2368a4) => {
    var _0x1f38ec;
    let _0x4cdbb7 = (0, t.asRecord)(
      (_0x1f38ec = (0, t.asRecord)(
        _0x4c1bc2 == null ? undefined : _0x4c1bc2[_0x298270],
      )) == null
        ? undefined
        : _0x1f38ec.values,
    );
    if (_0x4cdbb7 === undefined) return [];
    let _0x4f0c73 =
        typeof _0x44001f == "string" ? _0x4cdbb7[_0x44001f] : undefined,
      _0x4a3c5e =
        typeof _0x4f0c73 == "string" || typeof _0x4f0c73 == "number"
          ? String(_0x4f0c73)
          : undefined;
    return _0x27d034.flatMap((_0x36160f, _0x2aaa5b) => {
      var _0x1266ad;
      return _0x36160f in _0x4cdbb7
        ? [
            {
              stableId: _0x298270 + ":" + _0x36160f,
              recordId: _0x298270,
              fieldId: _0x36160f,
              position: _0x2368a4 * Math.max(1, _0x27d034.length) + _0x2aaa5b,
              displayName: [
                _0x4a3c5e,
                (_0x1266ad = (0, t.asRecord)(
                  _0x121fed == null ? undefined : _0x121fed[_0x36160f],
                )) == null
                  ? undefined
                  : _0x1266ad.name,
              ]
                .filter(
                  (_0x358bde) =>
                    typeof _0x358bde == "string" && _0x358bde.length > 0,
                )
                .join(" · "),
              value: _0x4cdbb7[_0x36160f],
            },
          ]
        : [];
    });
  });
}
function z(_0x32fa53, _0x1881ce) {
  let _0x1eb369 = _0x32fa53 ?? {},
    _0x1443e7 = Array.isArray(_0x1881ce)
      ? _0x1881ce.filter(
          (_0x2e598a) => typeof _0x2e598a == "string" && _0x2e598a in _0x1eb369,
        )
      : [],
    _0x8c7a29 = new Set(_0x1443e7);
  return [
    ..._0x1443e7,
    ...Object.keys(_0x1eb369).filter((_0x55e270) => !_0x8c7a29.has(_0x55e270)),
  ];
}
let B = class extends r.Plugin {
  constructor(_0x1ea00d = o, _0x5298a4, _0x29c9ca) {
    (super(),
      (this._config = _0x1ea00d),
      (this._injector = _0x5298a4),
      (this._configService = _0x29c9ca));
    let { ..._0x514d38 } = (0, r.merge)({}, o, this._config);
    this._configService["setConfig"]("bases-history.config", _0x514d38);
  }
  onStarting() {
    ((0, r.registerDependencies)(this._injector, [[T], [N]]),
      this.disposeWithMe(
        this._injector["get"](t.UnitComparisonAdapterRegistryService).register(
          this._injector["get"](N),
        ),
      ));
  }
};
(k(B, "pluginName", "UNIVER_BASES_HISTORY_PLUGIN"),
  k(B, "packageName", i),
  k(B, "version", a),
  k(B, "type", r.UniverInstanceType["UNIVER_BASE"]),
  (B = w(
    [
      (0, r.DependentOn)(
        n.UniverLicensePlugin,
        t.UniverEditHistoryPlugin,
        e.UniverBasesPlugin,
      ),
      C(1, (0, r.Inject)(r.Injector)),
      C(2, r.IConfigService),
    ],
    B,
  )),
  Object.defineProperty(exports, "BasesHistoryDiffService", {
    enumerable: true,
    get: function () {
      return T;
    },
  }),
  (exports.BasesUnitComparisonAdapter = N),
  Object.defineProperty(exports, "UniverBasesHistoryPlugin", {
    enumerable: true,
    get: function () {
      return B;
    },
  }));
