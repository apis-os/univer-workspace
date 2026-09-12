import { UniverBasesPlugin as _0x49af1d } from "@univerjs-pro/bases";
import {
  HistoryMutationService as _0x42c45c,
  UnitComparisonAdapterRegistryService as _0x596544,
  UnitComparisonEntityType as _0x5c1fbf,
  UniverEditHistoryPlugin as _0xf6f929,
  asRecord as _0x22cb31,
  buildScopedUnitComparison as _0x27915e,
  buildSemanticComparisonItems as _0x3cc523,
  recordComparisonEntries as _0x37ab6d,
  withoutComparisonKeys as _0x6962af,
} from "@univerjs-pro/edit-history";
import { UniverLicensePlugin as _0x51202f } from "@univerjs-pro/license";
import {
  DependentOn as _0x171db7,
  IConfigService as _0x1805eb,
  Inject as _0x805f25,
  Injector as _0x1c47b3,
  JSON1 as _0x33c774,
  Plugin as _0x433789,
  UniverInstanceType as _0x37e163,
  merge as _0x26a6bb,
  registerDependencies as _0x586114,
} from "@univerjs/core";
var b = "@univerjs-pro/bases-history",
  x = "1.0.0-insiders.20260907-70fc579";
const S = {},
  ee = [
    "recordOrder",
    "fieldOrder",
    "viewOrder",
    "rowIndex",
    "rowId",
    "colIndex",
    "colId",
    "cellData",
  ];
function C(_0x480e76) {
  let _0x189b50 = null,
    _0x217d43 = null,
    _0x697a08 = _0x480e76
      .map((_0x1f606b, _0x4a737d) => ({ entry: _0x1f606b, index: _0x4a737d }))
      .sort(
        (_0x24bfb9, _0xfcc732) =>
          _0x24bfb9.entry["revision"] - _0xfcc732.entry["revision"] ||
          _0x24bfb9.index - _0xfcc732.index,
      );
  for (let { entry: _0x366f86 } of _0x697a08)
    P(_0x366f86.mutation["params"]) &&
      ((_0x189b50 =
        _0x189b50 === null
          ? _0x366f86.mutation["params"].op
          : _0x33c774.type["compose"](
              _0x189b50,
              _0x366f86.mutation["params"].op,
            )),
      (_0x217d43 = _0x366f86));
  if (_0x189b50 === null || _0x217d43 === null) return [];
  let _0x1abf41 = j(_0x189b50).filter((_0x58af95) => !te(_0x58af95)),
    _0x251782 = k(_0x1abf41, "recordOrder"),
    _0xe44455 = k(_0x1abf41, "fieldOrder");
  return _0x1abf41.flatMap((_0x5971a2, _0x456724) => {
    let _0x174372 = O(_0x5971a2.path);
    if (!_0x174372) return [];
    let _0x323549 = w(_0x5971a2, _0x174372);
    return [
      {
        id: _0x217d43.revision + ":" + _0x456724,
        kind: _0x323549,
        label: _0x174372.label,
        memberId: _0x217d43.memberId,
        tableId: _0x174372.tableId,
        viewId: _0x174372.viewId,
        recordId: _0x174372.recordId,
        recordIndex: _0x174372.recordId
          ? _0x251782.get(_0x174372.recordId)
          : undefined,
        removedRecord:
          _0x323549 === "delete" ? ne(_0x5971a2, _0x174372) : undefined,
        fieldId: _0x174372.fieldId,
        fieldIndex: _0x174372.fieldId
          ? _0xe44455.get(_0x174372.fieldId)
          : undefined,
      },
    ];
  });
}
function w(_0x23e4b9, _0x336356) {
  if (!E(_0x23e4b9.path, _0x336356)) return "update";
  let _0x4275a6 = Object.prototype["hasOwnProperty"].call(_0x23e4b9.value, "i"),
    _0x5c6f98 = Object.prototype["hasOwnProperty"].call(_0x23e4b9.value, "r");
  return _0x4275a6 && !_0x5c6f98
    ? "insert"
    : _0x5c6f98 && !_0x4275a6
      ? "delete"
      : "update";
}
function te(_0x24d2fa) {
  return (
    Object.prototype["hasOwnProperty"].call(_0x24d2fa.value, "i") &&
    Object.prototype["hasOwnProperty"].call(_0x24d2fa.value, "r") &&
    T(_0x24d2fa.value["i"], _0x24d2fa.value["r"])
  );
}
function T(_0x14cd1a, _0x5631ba) {
  if (_0x14cd1a === _0x5631ba) return true;
  if (Array.isArray(_0x14cd1a) || Array.isArray(_0x5631ba))
    return (
      Array.isArray(_0x14cd1a) &&
      Array.isArray(_0x5631ba) &&
      _0x14cd1a.length === _0x5631ba.length &&
      _0x14cd1a.every((_0x3def7e, _0x1ce860) =>
        T(_0x3def7e, _0x5631ba[_0x1ce860]),
      )
    );
  if (!F(_0x14cd1a) || !F(_0x5631ba)) return false;
  let _0x2abade = Object.keys(_0x14cd1a),
    _0x1fafe6 = Object.keys(_0x5631ba);
  return (
    _0x2abade.length === _0x1fafe6.length &&
    _0x2abade.every(
      (_0x539fcd) =>
        Object.prototype["hasOwnProperty"].call(_0x5631ba, _0x539fcd) &&
        T(_0x14cd1a[_0x539fcd], _0x5631ba[_0x539fcd]),
    )
  );
}
function E(_0x5b0312, _0x2dbeed) {
  return _0x2dbeed.tableId
    ? _0x2dbeed.recordId && _0x2dbeed.fieldId
      ? D(_0x5b0312, [
          "tables",
          _0x2dbeed.tableId,
          "records",
          _0x2dbeed.recordId,
          "values",
          _0x2dbeed.fieldId,
        ])
      : _0x2dbeed.recordId
        ? D(_0x5b0312, [
            "tables",
            _0x2dbeed.tableId,
            "records",
            _0x2dbeed.recordId,
          ])
        : _0x2dbeed.fieldId
          ? D(_0x5b0312, [
              "tables",
              _0x2dbeed.tableId,
              "fields",
              _0x2dbeed.fieldId,
            ])
          : _0x2dbeed.viewId
            ? D(_0x5b0312, [
                "tables",
                _0x2dbeed.tableId,
                "views",
                _0x2dbeed.viewId,
              ])
            : D(_0x5b0312, ["tables", _0x2dbeed.tableId])
    : false;
}
function D(_0x465cb7, _0x2713c4) {
  return (
    _0x465cb7.length === _0x2713c4.length &&
    _0x465cb7.every(
      (_0x121eb1, _0x1bf897) => _0x121eb1 === _0x2713c4[_0x1bf897],
    )
  );
}
function O(_0x153d89) {
  let _0xafd1b4 = _0x153d89.indexOf("tables"),
    _0x15f9eb = _0x153d89[_0xafd1b4 + 1];
  if (_0xafd1b4 < 0 || typeof _0x15f9eb != "string") return null;
  let _0x5dbf05 = _0x153d89[_0xafd1b4 + 2],
    _0x3d202a = _0x153d89[_0xafd1b4 + 3];
  if (_0x5dbf05 === "records" && typeof _0x3d202a == "string") {
    let _0x3d1ec4 = _0x153d89[_0xafd1b4 + 4],
      _0x36efd0 = _0x153d89[_0xafd1b4 + 5];
    return _0x3d1ec4 === "values" && typeof _0x36efd0 == "string"
      ? {
          label: "base:cell",
          tableId: _0x15f9eb,
          recordId: _0x3d202a,
          fieldId: _0x36efd0,
        }
      : _0x3d1ec4 === "updatedAt" || _0x3d1ec4 === "updatedBy"
        ? null
        : { label: "base:record", tableId: _0x15f9eb, recordId: _0x3d202a };
  }
  return _0x5dbf05 === "fields" && typeof _0x3d202a == "string"
    ? { label: "base:field", tableId: _0x15f9eb, fieldId: _0x3d202a }
    : _0x5dbf05 === "views" && typeof _0x3d202a == "string"
      ? { label: "base:view", tableId: _0x15f9eb, viewId: _0x3d202a }
      : ee.some((_0x377198) => _0x377198 === _0x5dbf05)
        ? null
        : {
            label: _0x5dbf05 === undefined ? "base:table" : "base:unknown",
            tableId: _0x15f9eb,
          };
}
function k(_0x4e74ce, _0x2660e1) {
  let _0x32fa45 = new Map();
  return (
    _0x4e74ce.forEach((_0x491de0) => {
      let _0x5b1c9f = _0x491de0.path["indexOf"](_0x2660e1),
        _0x28767a = _0x491de0.path[_0x5b1c9f + 1],
        _0x4eb161 = _0x491de0.value["r"];
      if (
        _0x5b1c9f >= 0 &&
        typeof _0x28767a == "number" &&
        typeof _0x4eb161 == "string"
      ) {
        _0x32fa45.set(_0x4eb161, _0x28767a);
        return;
      }
      if (
        _0x5b1c9f !== _0x491de0.path["length"] - 1 ||
        !Array.isArray(_0x4eb161)
      )
        return;
      let _0x117647 = new Set(
        Array.isArray(_0x491de0.value["i"])
          ? _0x491de0.value["i"].filter(
              (_0x3cad6f) => typeof _0x3cad6f == "string",
            )
          : [],
      );
      _0x4eb161.forEach((_0x39e919, _0x147664) => {
        typeof _0x39e919 == "string" &&
          !_0x117647.has(_0x39e919) &&
          _0x32fa45.set(_0x39e919, _0x147664);
      });
    }),
    _0x32fa45
  );
}
function ne(_0x70581d, _0x8cede2) {
  if (!(
    !_0x8cede2.recordId ||
    _0x8cede2.fieldId ||
    !E(_0x70581d.path, _0x8cede2)
  ))
    return A(_0x70581d.value["r"]) ? _0x70581d.value["r"] : undefined;
}
function A(_0x96de18) {
  return (
    F(_0x96de18) &&
    typeof _0x96de18.id == "string" &&
    F(_0x96de18.values) &&
    typeof _0x96de18.orderKey == "string" &&
    typeof _0x96de18.createdAt == "number" &&
    typeof _0x96de18.updatedAt == "number"
  );
}
function j(_0x45ba96) {
  let _0x1c9930 = [];
  return (M(_0x45ba96, [], _0x1c9930), _0x1c9930);
}
function M(_0x429819, _0x3980ba, _0x39f2ce) {
  if (!Array.isArray(_0x429819)) return;
  let _0x110e6f = [];
  _0x429819.forEach((_0x2044f8) => {
    if (Array.isArray(_0x2044f8)) {
      M(_0x2044f8, [..._0x3980ba, ..._0x110e6f], _0x39f2ce);
      return;
    }
    if (N(_0x2044f8)) {
      _0x39f2ce.push({ path: [..._0x3980ba, ..._0x110e6f], value: _0x2044f8 });
      return;
    }
    (typeof _0x2044f8 == "string" || typeof _0x2044f8 == "number") &&
      _0x110e6f.push(_0x2044f8);
  });
}
function N(_0x5cb5e8) {
  return (
    F(_0x5cb5e8) &&
    ["i", "r", "p", "d", "es", "ena", "et"].some((_0x245948) =>
      Object.prototype["hasOwnProperty"].call(_0x5cb5e8, _0x245948),
    )
  );
}
function P(_0x16d2b1) {
  return (
    typeof _0x16d2b1 == "object" &&
    !!_0x16d2b1 &&
    "op" in _0x16d2b1 &&
    Array.isArray(_0x16d2b1.op)
  );
}
function F(_0xad2035) {
  return typeof _0xad2035 == "object" && !!_0xad2035;
}
function I(_0x50b54d, _0x3e3bea) {
  return function (_0x2ea252, _0x447094) {
    _0x3e3bea(_0x2ea252, _0x447094, _0x50b54d);
  };
}
function L(_0x58fd75, _0x575dff, _0x2c3348, _0x46b5cd) {
  var _0x3fa2f5 = arguments.length,
    _0xbaaa61 =
      _0x3fa2f5 < 3
        ? _0x575dff
        : _0x46b5cd === null
          ? (_0x46b5cd = Object.getOwnPropertyDescriptor(_0x575dff, _0x2c3348))
          : _0x46b5cd,
    _0x202449;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xbaaa61 = Reflect.decorate(_0x58fd75, _0x575dff, _0x2c3348, _0x46b5cd);
  else {
    for (var _0x587d34 = _0x58fd75.length - 1; _0x587d34 >= 0; _0x587d34--)
      (_0x202449 = _0x58fd75[_0x587d34]) &&
        (_0xbaaa61 =
          (_0x3fa2f5 < 3
            ? _0x202449(_0xbaaa61)
            : _0x3fa2f5 > 3
              ? _0x202449(_0x575dff, _0x2c3348, _0xbaaa61)
              : _0x202449(_0x575dff, _0x2c3348)) || _0xbaaa61);
  }
  return (
    _0x3fa2f5 > 3 &&
      _0xbaaa61 &&
      Object.defineProperty(_0x575dff, _0x2c3348, _0xbaaa61),
    _0xbaaa61
  );
}
let R = class {
  constructor(_0x23d225) {
    this._mutationService = _0x23d225;
  }
  async compare(_0x3744b1, _0x16b903) {
    return C(await this._mutationService["load"](_0x3744b1, _0x16b903));
  }
};
R = L([I(0, _0x805f25(_0x42c45c))], R);
function z(_0x26fbdb) {
  "@babel/helpers - typeof";
  return (
    (z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x425dbe) {
            return typeof _0x425dbe;
          }
        : function (_0x55ae72) {
            return _0x55ae72 &&
              typeof Symbol == "function" &&
              _0x55ae72.constructor === Symbol &&
              _0x55ae72 !== Symbol.prototype
              ? "symbol"
              : typeof _0x55ae72;
          }),
    z(_0x26fbdb)
  );
}
function B(_0x5184d9, _0x3d95f0) {
  if (z(_0x5184d9) != "object" || !_0x5184d9) return _0x5184d9;
  var _0x435256 = _0x5184d9[Symbol.toPrimitive];
  if (_0x435256 !== undefined) {
    var _0x1c040b = _0x435256.call(_0x5184d9, _0x3d95f0 || "default");
    if (z(_0x1c040b) != "object") return _0x1c040b;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3d95f0 === "string" ? String : Number)(_0x5184d9);
}
function V(_0x3b632b) {
  var _0xb8b166 = B(_0x3b632b, "string");
  return z(_0xb8b166) == "symbol" ? _0xb8b166 : _0xb8b166 + "";
}
function H(_0x586e91, _0x5b5d41, _0x12abb8) {
  return (
    (_0x5b5d41 = V(_0x5b5d41)) in _0x586e91
      ? Object.defineProperty(_0x586e91, _0x5b5d41, {
          value: _0x12abb8,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x586e91[_0x5b5d41] = _0x12abb8),
    _0x586e91
  );
}
const U = ["rev", "createdAt", "updatedAt"],
  W = [
    _0x5c1fbf.BASE,
    _0x5c1fbf.TABLE,
    _0x5c1fbf.FIELD,
    _0x5c1fbf.RECORD,
    _0x5c1fbf.VIEW,
    _0x5c1fbf.CELL,
  ],
  G = _0x6962af(
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
    ...U,
  );
var K = class {
  constructor() {
    H(this, "type", _0x37e163.UNIVER_BASE);
  }
  compare(_0x1cb13f) {
    let _0x2576c5 = _0x22cb31(_0x1cb13f.leftData),
      _0x472307 = _0x22cb31(_0x1cb13f.rightData),
      _0x3b7ed1 = _0x22cb31(_0x2576c5 == null ? undefined : _0x2576c5.tables),
      _0xeb9dc6 = _0x22cb31(_0x472307 == null ? undefined : _0x472307.tables),
      _0xf751e7 = new Set([
        ...Object.keys(_0x3b7ed1 ?? {}),
        ...Object.keys(_0xeb9dc6 ?? {}),
      ]),
      _0x5597b6 = _0x37ab6d(
        _0x3b7ed1,
        _0x2576c5 == null ? undefined : _0x2576c5.tableOrder,
        G,
      ),
      _0x320ece = _0x37ab6d(
        _0xeb9dc6,
        _0x472307 == null ? undefined : _0x472307.tableOrder,
        G,
      ),
      _0x1e13dc = [
        ..._0x3cc523({
          entityType: _0x5c1fbf.BASE,
          left:
            _0x2576c5 === undefined
              ? []
              : [
                  {
                    stableId: "base",
                    position: 0,
                    value: _0x6962af(
                      "tables",
                      "tableOrder",
                      "resources",
                      ...U,
                    )(_0x2576c5),
                  },
                ],
          right:
            _0x472307 === undefined
              ? []
              : [
                  {
                    stableId: "base",
                    position: 0,
                    value: _0x6962af(
                      "tables",
                      "tableOrder",
                      "resources",
                      ...U,
                    )(_0x472307),
                  },
                ],
        }),
        ..._0x3cc523({
          entityType: _0x5c1fbf.TABLE,
          left: _0x5597b6,
          right: _0x320ece,
        }),
        ...[..._0xf751e7].flatMap((_0x360ce1) =>
          q(_0x360ce1, _0x3b7ed1, _0xeb9dc6),
        ),
      ],
      _0x5a522f = _0x27915e({
        entityType: _0x5c1fbf.TABLE,
        items: _0x1e13dc,
        left: _0x5597b6,
        right: _0x320ece,
      });
    return {
      items: _0x5a522f.items,
      supportedEntityTypes: W,
      scopes: _0x5a522f.scopes,
      productContext: {
        type: _0x37e163.UNIVER_BASE,
        visualProjection: "raw-table-data",
      },
    };
  }
};
function q(_0x24cb2f, _0x263803, _0xd0fdb2) {
  let _0x263df5 =
      _0x22cb31(_0x263803 == null ? undefined : _0x263803[_0x24cb2f]) ?? {},
    _0x29f724 =
      _0x22cb31(_0xd0fdb2 == null ? undefined : _0xd0fdb2[_0x24cb2f]) ?? {},
    _0x51a766 = _0x22cb31(_0x263df5.fields),
    _0x1566f1 = _0x22cb31(_0x29f724.fields),
    _0x1be008 = _0x22cb31(_0x263df5.records),
    _0x35476f = _0x22cb31(_0x29f724.records);
  return [
    ...J(
      _0x5c1fbf.FIELD,
      _0x24cb2f,
      _0x51a766,
      _0x1566f1,
      _0x263df5.fieldOrder,
      _0x29f724.fieldOrder,
      _0x6962af(...U),
    ),
    ...J(
      _0x5c1fbf.RECORD,
      _0x24cb2f,
      _0x1be008,
      _0x35476f,
      _0x263df5.recordOrder,
      _0x29f724.recordOrder,
      _0x6962af("values", "orderKey", ...U),
    ),
    ...J(
      _0x5c1fbf.VIEW,
      _0x24cb2f,
      _0x263df5.views,
      _0x29f724.views,
      _0x263df5.viewOrder,
      _0x29f724.viewOrder,
      _0x6962af("orderKey", ...U),
    ),
    ...Y(
      _0x24cb2f,
      _0x51a766,
      _0x1566f1,
      _0x1be008,
      _0x35476f,
      _0x263df5.fieldOrder,
      _0x29f724.fieldOrder,
      _0x263df5.recordOrder,
      _0x29f724.recordOrder,
      _0x263df5.primaryFieldId,
      _0x29f724.primaryFieldId,
    ),
  ];
}
function J(
  _0x5bba42,
  _0x1171fb,
  _0xd396cb,
  _0xf0fa43,
  _0x1f6c7b,
  _0xdf1a83,
  _0x53c92f,
) {
  return _0x3cc523({
    entityType: _0x5bba42,
    parentStableId: _0x1171fb,
    left: _0x37ab6d(_0xd396cb, _0x1f6c7b, _0x53c92f),
    right: _0x37ab6d(_0xf0fa43, _0xdf1a83, _0x53c92f),
  });
}
function Y(
  _0x231006,
  _0x1ede19,
  _0x439a2e,
  _0xe936e5,
  _0x3b2a79,
  _0x338ae9,
  _0x3455ea,
  _0x1b1be8,
  _0x156223,
  _0x2ed3b9,
  _0x2b33b8,
) {
  let _0x187683 = Z(_0x1ede19, _0xe936e5, _0x338ae9, _0x1b1be8, _0x2ed3b9),
    _0x340ffe = Z(_0x439a2e, _0x3b2a79, _0x3455ea, _0x156223, _0x2b33b8),
    _0x2d8e20 = new Map(
      _0x187683.map((_0x271b66) => [_0x271b66.stableId, _0x271b66]),
    ),
    _0xad0e86 = new Map(
      _0x340ffe.map((_0x25cc45) => [_0x25cc45.stableId, _0x25cc45]),
    );
  return _0x3cc523({
    entityType: _0x5c1fbf.CELL,
    parentStableId: _0x231006,
    left: _0x187683,
    right: _0x340ffe,
  }).map((_0x4433b4) => ({
    ..._0x4433b4,
    locations: {
      left: X(
        _0x4433b4.locations["left"],
        _0x2d8e20.get(_0x4433b4.stableId),
        _0x231006,
      ),
      right: X(
        _0x4433b4.locations["right"],
        _0xad0e86.get(_0x4433b4.stableId),
        _0x231006,
      ),
    },
  }));
}
function X(_0x2471e7, _0x1dd6e0, _0xc3c8ec) {
  if (_0x2471e7 === null || _0x1dd6e0 === undefined) return null;
  let _0x477f74 = _0x2471e7.target;
  return (_0x477f74 == null ? undefined : _0x477f74.kind) === "entity"
    ? {
        ..._0x2471e7,
        parentStableId: _0x1dd6e0.recordId,
        target: {
          ..._0x477f74,
          kind: "base-cell",
          tableId: _0xc3c8ec,
          recordId: _0x1dd6e0.recordId,
          fieldId: _0x1dd6e0.fieldId,
        },
      }
    : _0x2471e7;
}
function Z(_0x21859d, _0x69565c, _0x58bb63, _0x46ae1e, _0x35f908) {
  let _0x151f44 = Q(_0x21859d, _0x58bb63);
  return Q(_0x69565c, _0x46ae1e).flatMap((_0x39993b, _0x21f745) => {
    var _0x573bfd;
    let _0x4681f0 = _0x22cb31(
      (_0x573bfd = _0x22cb31(
        _0x69565c == null ? undefined : _0x69565c[_0x39993b],
      )) == null
        ? undefined
        : _0x573bfd.values,
    );
    if (_0x4681f0 === undefined) return [];
    let _0xce32ac =
        typeof _0x35f908 == "string" ? _0x4681f0[_0x35f908] : undefined,
      _0x45c0c2 =
        typeof _0xce32ac == "string" || typeof _0xce32ac == "number"
          ? String(_0xce32ac)
          : undefined;
    return _0x151f44.flatMap((_0x26a8c3, _0x49dfff) => {
      var _0x5ec318;
      return _0x26a8c3 in _0x4681f0
        ? [
            {
              stableId: _0x39993b + ":" + _0x26a8c3,
              recordId: _0x39993b,
              fieldId: _0x26a8c3,
              position: _0x21f745 * Math.max(1, _0x151f44.length) + _0x49dfff,
              displayName: [
                _0x45c0c2,
                (_0x5ec318 = _0x22cb31(
                  _0x21859d == null ? undefined : _0x21859d[_0x26a8c3],
                )) == null
                  ? undefined
                  : _0x5ec318.name,
              ]
                .filter(
                  (_0x299331) =>
                    typeof _0x299331 == "string" && _0x299331.length > 0,
                )
                .join("\x20·\x20"),
              value: _0x4681f0[_0x26a8c3],
            },
          ]
        : [];
    });
  });
}
function Q(_0x2ec9c4, _0x1d0fb7) {
  let _0x3dd467 = _0x2ec9c4 ?? {},
    _0x2f2c86 = Array.isArray(_0x1d0fb7)
      ? _0x1d0fb7.filter(
          (_0x1e9a44) => typeof _0x1e9a44 == "string" && _0x1e9a44 in _0x3dd467,
        )
      : [],
    _0x2e76ff = new Set(_0x2f2c86);
  return [
    ..._0x2f2c86,
    ...Object.keys(_0x3dd467).filter((_0x1e439c) => !_0x2e76ff.has(_0x1e439c)),
  ];
}
let $ = class extends _0x433789 {
  constructor(_0x4bc988 = S, _0x3b6368, _0x540da9) {
    (super(),
      (this._config = _0x4bc988),
      (this._injector = _0x3b6368),
      (this._configService = _0x540da9));
    let { ..._0x141cd1 } = _0x26a6bb({}, S, this._config);
    this._configService["setConfig"]("bases-history.config", _0x141cd1);
  }
  onStarting() {
    (_0x586114(this._injector, [[R], [K]]),
      this.disposeWithMe(
        this._injector["get"](_0x596544).register(this._injector["get"](K)),
      ));
  }
};
(H($, "pluginName", "UNIVER_BASES_HISTORY_PLUGIN"),
  H($, "packageName", b),
  H($, "version", x),
  H($, "type", _0x37e163.UNIVER_BASE),
  ($ = L(
    [
      _0x171db7(_0x51202f, _0xf6f929, _0x49af1d),
      I(1, _0x805f25(_0x1c47b3)),
      I(2, _0x1805eb),
    ],
    $,
  )));
export {
  R as BasesHistoryDiffService,
  K as BasesUnitComparisonAdapter,
  $ as UniverBasesHistoryPlugin,
};
