import {
  HistoryUnitAdapterRegistryService as _0x272f3a,
  UnitComparisonAdapterRegistryService as _0xaac180,
  UnitComparisonDiagnosticCode as _0x4e8c28,
  UnitComparisonEntityType as _0x17e586,
  UnitComparisonReadiness as _0x499c39,
  UniverEditHistoryPlugin as _0x101c23,
  alignComparisonIdentities as _0x370ed7,
  asRecord as _0x94a9b2,
  buildScopedUnitComparison as _0x46fcfe,
  buildSemanticComparisonItems as _0x481ca6,
  recordComparisonEntries as _0x522176,
  resourceComparisonEntries as _0x134eb4,
  stableJson as _0x4a291f,
  withoutComparisonKeys as _0x35b74a,
} from "@univerjs-pro/edit-history";
import { UniverLicensePlugin as _0x239017 } from "@univerjs-pro/license";
import {
  DependentOn as _0x85b963,
  Disposable as _0xecc5f9,
  ICommandService as _0x299a8d,
  IConfigService as _0x22671c,
  IPermissionService as _0x2fa107,
  IUniverInstanceService as _0x61dc9d,
  Inject as _0x6b8b3c,
  Injector as _0x78d174,
  Plugin as _0x5640d9,
  UniverInstanceType as _0x15c628,
  merge as _0x2e8261,
  registerDependencies as _0x4cc84f,
} from "@univerjs/core";
import {
  RangeProtectionPermissionEditPoint as _0x5081d8,
  RangeProtectionRuleModel as _0x4c5b7a,
  SelectRangeCommand as _0x4b7684,
  SetWorksheetActivateCommand as _0x847593,
  SheetsSelectionsService as _0x383940,
  UniverSheetsPlugin as _0x336062,
  WorkbookEditablePermission as _0x438e32,
  WorkbookRecoverHistoryPermission as _0x3656ca,
  WorkbookViewHistoryPermission as _0x122d75,
  WorksheetEditPermission as _0x285fe0,
} from "@univerjs/sheets";
const w = "sheets-history.config",
  pe = {};
var me = "@univerjs-pro/sheets-history",
  he = "1.0.0-insiders.20260907-70fc579";
function T(_0x37701f, _0xfdadc8) {
  return function (_0x474e50, _0x55bd89) {
    _0xfdadc8(_0x474e50, _0x55bd89, _0x37701f);
  };
}
function ge(_0xd3920d, _0xafc64, _0x1b2a8c, _0x5d2695) {
  var _0x5ddc4e = arguments.length,
    _0x5b69fe =
      _0x5ddc4e < 3
        ? _0xafc64
        : _0x5d2695 === null
          ? (_0x5d2695 = Object.getOwnPropertyDescriptor(_0xafc64, _0x1b2a8c))
          : _0x5d2695,
    _0x12aa44;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5b69fe = Reflect.decorate(_0xd3920d, _0xafc64, _0x1b2a8c, _0x5d2695);
  else {
    for (var _0xbe6ec6 = _0xd3920d.length - 1; _0xbe6ec6 >= 0; _0xbe6ec6--)
      (_0x12aa44 = _0xd3920d[_0xbe6ec6]) &&
        (_0x5b69fe =
          (_0x5ddc4e < 3
            ? _0x12aa44(_0x5b69fe)
            : _0x5ddc4e > 3
              ? _0x12aa44(_0xafc64, _0x1b2a8c, _0x5b69fe)
              : _0x12aa44(_0xafc64, _0x1b2a8c)) || _0x5b69fe);
  }
  return (
    _0x5ddc4e > 3 &&
      _0x5b69fe &&
      Object.defineProperty(_0xafc64, _0x1b2a8c, _0x5b69fe),
    _0x5b69fe
  );
}
let E = class extends _0xecc5f9 {
  constructor(
    _0x339387,
    _0x3b4836,
    _0x277027,
    _0x58084a,
    _0x449934,
    _0x3259e9,
  ) {
    (super(),
      (this._commandService = _0x339387),
      (this._permissionService = _0x277027),
      (this._univerInstanceService = _0x58084a),
      (this._selectionService = _0x449934),
      (this._rangeProtectionRuleModel = _0x3259e9),
      this.disposeWithMe(
        _0x3b4836.register({
          type: _0x15c628.UNIVER_SHEET,
          canView: (_0x51c3d4) =>
            this._hasPermission(new _0x122d75(_0x51c3d4).id),
          canRevert: (_0x5a63c1) => this._canRevert(_0x5a63c1),
          captureLocation: (_0xf99b95) => this._captureLocation(_0xf99b95),
          restoreLocation: (_0x14356e, _0x15e529) =>
            this._restoreLocation(
              _0x14356e,
              _e(_0x15e529) ? _0x15e529 : undefined,
            ),
        }),
      ));
  }
  _captureLocation(_0x1f1356) {
    var _0x2a5760;
    let _0xc79a41 = this._univerInstanceService["getUnit"](
        _0x1f1356,
        _0x15c628.UNIVER_SHEET,
      ),
      _0x5d9f11 = _0xc79a41 == null ? undefined : _0xc79a41.getActiveSheet();
    if (_0x5d9f11)
      return {
        subUnitId: _0x5d9f11.getSheetId(),
        range:
          (_0x2a5760 = this._selectionService["getCurrentLastSelection"]()) ==
          null
            ? undefined
            : _0x2a5760.range,
      };
  }
  async _restoreLocation(_0x43c0b1, _0x173fa6) {
    _0x173fa6 &&
      (await this._commandService["executeCommand"](_0x847593.id, {
        unitId: _0x43c0b1,
        subUnitId: _0x173fa6.subUnitId,
      }),
      _0x173fa6.range &&
        (await this._commandService["executeCommand"](_0x4b7684.id, {
          unitId: _0x43c0b1,
          subUnit: _0x173fa6.subUnitId,
          range: _0x173fa6.range,
        })));
  }
  _hasPermission(_0x1263da) {
    return this._permissionService["composePermission"]([_0x1263da]).every(
      (_0x17dd1e) => !!_0x17dd1e.value,
    );
  }
  _canRevert(_0xdf298a) {
    let _0x58bc18 = this._univerInstanceService["getUnit"](
      _0xdf298a,
      _0x15c628.UNIVER_SHEET,
    );
    if (!_0x58bc18) return false;
    let _0x670fcc = _0x58bc18
        .getSheets()
        .map((_0x4c7807) => _0x4c7807.getSheetId()),
      _0x2e8b3f = _0x670fcc.map(
        (_0x47ff43) => new _0x285fe0(_0xdf298a, _0x47ff43).id,
      ),
      _0x5a9a6d = _0x670fcc.flatMap((_0x4a2977) =>
        this._rangeProtectionRuleModel["getSubunitRuleList"](
          _0xdf298a,
          _0x4a2977,
        ).map(
          (_0x4e777c) =>
            new _0x5081d8(_0xdf298a, _0x4a2977, _0x4e777c.permissionId).id,
        ),
      ),
      _0x22df48 = [
        new _0x438e32(_0xdf298a).id,
        ..._0x2e8b3f,
        ..._0x5a9a6d,
        new _0x3656ca(_0xdf298a).id,
      ];
    return this._permissionService["composePermission"](_0x22df48).every(
      (_0x2f1369) => !!_0x2f1369.value,
    );
  }
};
E = ge(
  [
    T(0, _0x299a8d),
    T(1, _0x6b8b3c(_0x272f3a)),
    T(2, _0x2fa107),
    T(3, _0x61dc9d),
    T(4, _0x6b8b3c(_0x383940)),
    T(5, _0x6b8b3c(_0x4c5b7a)),
  ],
  E,
);
function _e(_0x18aaa5) {
  return (
    typeof _0x18aaa5 == "object" &&
    !!_0x18aaa5 &&
    "subUnitId" in _0x18aaa5 &&
    typeof _0x18aaa5.subUnitId == "string"
  );
}
function D(_0x24d14a) {
  "@babel/helpers - typeof";
  return (
    (D =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x362749) {
            return typeof _0x362749;
          }
        : function (_0x2f6223) {
            return _0x2f6223 &&
              typeof Symbol == "function" &&
              _0x2f6223.constructor === Symbol &&
              _0x2f6223 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2f6223;
          }),
    D(_0x24d14a)
  );
}
function ve(_0x4ed63c, _0x5b7a36) {
  if (D(_0x4ed63c) != "object" || !_0x4ed63c) return _0x4ed63c;
  var _0x33181c = _0x4ed63c[Symbol.toPrimitive];
  if (_0x33181c !== undefined) {
    var _0x53b21b = _0x33181c.call(_0x4ed63c, _0x5b7a36 || "default");
    if (D(_0x53b21b) != "object") return _0x53b21b;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5b7a36 === "string" ? String : Number)(_0x4ed63c);
}
function ye(_0x3038f4) {
  var _0x540354 = ve(_0x3038f4, "string");
  return D(_0x540354) == "symbol" ? _0x540354 : _0x540354 + "";
}
function O(_0x6f664, _0x271389, _0x327ca9) {
  return (
    (_0x271389 = ye(_0x271389)) in _0x6f664
      ? Object.defineProperty(_0x6f664, _0x271389, {
          value: _0x327ca9,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x6f664[_0x271389] = _0x327ca9),
    _0x6f664
  );
}
const be = [
    _0x17e586.WORKBOOK,
    _0x17e586.WORKSHEET,
    _0x17e586.CELL,
    _0x17e586.ROW_COLUMN,
    _0x17e586.CONDITION_FORMAT,
    _0x17e586.DATA_VALIDATION,
    _0x17e586.SPARKLINE,
    _0x17e586.TABLE,
    _0x17e586.SHAPE,
    _0x17e586.CHART,
    _0x17e586.PIVOT,
  ],
  xe = [
    [_0x17e586.CONDITION_FORMAT, "SHEET_CONDITIONAL_FORMATTING_PLUGIN"],
    [_0x17e586.DATA_VALIDATION, "SHEET_DATA_VALIDATION_PLUGIN"],
    [_0x17e586.SPARKLINE, "SHEET_SPARKLINE_PLUGIN"],
    [_0x17e586.TABLE, "SHEET_TABLE_PLUGIN"],
    [_0x17e586.SHAPE, "SHEET_DRAWING_PLUGIN"],
    [_0x17e586.CHART, "SHEET_CHART_PLUGIN"],
    [_0x17e586.PIVOT, "SHEET_PIVOT_TABLE_PLUGIN"],
  ],
  Se = new Set([
    "sheet.mutation.insert-col",
    "sheet.mutation.insert-row",
    "sheet.mutation.move-columns",
    "sheet.mutation.move-cols",
    "sheet.mutation.move-rows",
    "sheet.mutation.remove-col",
    "sheet.mutation.remove-rows",
  ]),
  k = new Set([
    ...Se,
    "sheet.mutation.insert-sheet",
    "sheet.mutation.remove-sheet",
  ]),
  A =
    /(?:^|\.)(?:insert|remove|delete|move|reorder)-(?:(?:row|rows|col|cols|column|columns)(?:-|$)|(?:sheet|sheets)$)/iu;
var j = class {
  constructor() {
    O(this, "type", _0x15c628.UNIVER_SHEET);
  }
  compare(_0x11326a) {
    let _0x49e55d = Ce(_0x11326a.leftData),
      _0x51334f = Ce(_0x11326a.rightData),
      _0x15da94 = _0x94a9b2(_0x49e55d == null ? undefined : _0x49e55d.sheets),
      _0x43f094 = _0x94a9b2(_0x51334f == null ? undefined : _0x51334f.sheets),
      _0xe8cb18 = _0x35b74a("cellData", "rowData", "columnData"),
      _0x5afadb = _0x522176(
        _0x15da94,
        _0x49e55d == null ? undefined : _0x49e55d.sheetOrder,
        _0xe8cb18,
      ),
      _0x4db1dc = _0x522176(
        _0x43f094,
        _0x51334f == null ? undefined : _0x51334f.sheetOrder,
        _0xe8cb18,
      ),
      _0x1c5422 = new Set([
        ...Object.keys(_0x15da94 ?? {}),
        ...Object.keys(_0x43f094 ?? {}),
      ]),
      _0x9b2fce = Fe(_0x11326a.leftChangesets, _0x49e55d),
      _0x46d4f4 = Fe(_0x11326a.rightChangesets, _0x51334f),
      _0x30e9f5 = [..._0x9b2fce, ..._0x46d4f4].some((_0x5507e6) =>
        Se.has(_0x5507e6.id),
      ),
      _0x37e895 = [..._0x1c5422].map((_0x3466dc) =>
        Oe(_0x3466dc, _0x15da94, _0x43f094, _0x9b2fce, _0x46d4f4, _0x30e9f5),
      ),
      _0x416eb7 = [
        ...we(_0x49e55d, _0x51334f, _0x15da94, _0x43f094),
        ..._0x37e895.flatMap((_0x27c1a5) => _0x27c1a5.items),
        ...xe.flatMap(([_0x485591, _0x2cc8c1]) =>
          Te(_0x485591, _0x2cc8c1, _0x11326a.leftData, _0x11326a.rightData, [
            ..._0x1c5422,
          ]),
        ),
      ],
      _0x3944b1 = [
        ...new Set([
          ...J(_0x9b2fce),
          ...J(_0x46d4f4),
          ..._0x37e895.flatMap((_0x2598dd) => _0x2598dd.unsupportedMutationIds),
        ]),
      ].sort(),
      _0x16b241 = [..._0x1c5422].flatMap((_0x53346d, _0x393d9c) => {
        let _0x5e0be4 = _0x416eb7.filter(
          (_0x1eaaa9) =>
            _0x1eaaa9.parentStableId === _0x53346d ||
            (_0x1eaaa9.entityType === _0x17e586.WORKSHEET &&
              _0x1eaaa9.stableId === _0x53346d),
        ).length;
        if (!_0x5e0be4) return [];
        let _0x45fedf = _0x94a9b2(
            _0x15da94 == null ? undefined : _0x15da94[_0x53346d],
          ),
          _0x3f47fb = _0x94a9b2(
            _0x43f094 == null ? undefined : _0x43f094[_0x53346d],
          );
        return [
          {
            sheetId: _0x53346d,
            name:
              typeof (_0x3f47fb == null ? undefined : _0x3f47fb.name) ==
              "string"
                ? _0x3f47fb.name
                : typeof (_0x45fedf == null ? undefined : _0x45fedf.name) ==
                    "string"
                  ? _0x45fedf.name
                  : _0x53346d,
            changeCount: _0x5e0be4,
            rows: _0x37e895[_0x393d9c].rows,
            columns: _0x37e895[_0x393d9c].columns,
          },
        ];
      }),
      _0x4e419c = _0x37e895.some(
        (_0x100c7d) => _0x100c7d.snapshotAxisAmbiguous,
      ),
      _0x2dff1a = _0x46fcfe({
        entityType: _0x17e586.WORKSHEET,
        items: _0x416eb7,
        left: _0x5afadb,
        right: _0x4db1dc,
      });
    return {
      items: _0x2dff1a.items,
      supportedEntityTypes: be,
      scopes: _0x2dff1a.scopes,
      productContext: { type: _0x15c628.UNIVER_SHEET, sheets: _0x16b241 },
      ...(_0x3944b1.length || _0x4e419c
        ? {
            unsupportedMutationIds: _0x3944b1,
            readiness: _0x499c39.DEGRADED,
            diagnosticCodes: [
              ...(_0x3944b1.length
                ? [_0x4e8c28.SHEET_STRUCTURAL_HISTORY_FALLBACK]
                : []),
              ...(_0x4e419c
                ? [_0x4e8c28.SHEET_SNAPSHOT_AXIS_IDENTITY_AMBIGUOUS]
                : []),
            ],
          }
        : {}),
    };
  }
};
function Ce(_0x2c8de8) {
  let _0x2fb006 = _0x94a9b2(_0x2c8de8);
  if (_0x2fb006 === undefined) return;
  let _0x39a4f2 = _0x94a9b2(_0x2fb006.styles) ?? {},
    { styles: _0xcaaca6, ..._0x2e863a } = N(
      _0x2fb006,
      _0x39a4f2,
      "defaultStyle",
    );
  return {
    ..._0x2e863a,
    ...(_0x2fb006.sheets === undefined
      ? {}
      : {
          sheets: P(_0x2fb006.sheets, (_0x1ae567) => {
            let _0xd6e430 = _0x94a9b2(_0x1ae567);
            return _0xd6e430 === undefined
              ? _0x1ae567
              : {
                  ...N(_0xd6e430, _0x39a4f2, "defaultStyle"),
                  ...(_0xd6e430.cellData === undefined
                    ? {}
                    : {
                        cellData: P(_0xd6e430.cellData, (_0x378a3f) =>
                          P(_0x378a3f, (_0x4df4b4) => M(_0x4df4b4, _0x39a4f2)),
                        ),
                      }),
                  ...(_0xd6e430.rowData === undefined
                    ? {}
                    : {
                        rowData: P(_0xd6e430.rowData, (_0x11de0d) =>
                          M(_0x11de0d, _0x39a4f2),
                        ),
                      }),
                  ...(_0xd6e430.columnData === undefined
                    ? {}
                    : {
                        columnData: P(_0xd6e430.columnData, (_0xe4a8d1) =>
                          M(_0xe4a8d1, _0x39a4f2),
                        ),
                      }),
                };
          }),
        }),
  };
}
function M(_0x3301ef, _0x2f394e) {
  let _0x223a86 = _0x94a9b2(_0x3301ef);
  return _0x223a86 === undefined ? _0x3301ef : N(_0x223a86, _0x2f394e, "s");
}
function N(_0x357a2a, _0x1c53bc, _0x46c32d) {
  let _0x76a8bb = _0x357a2a[_0x46c32d];
  return typeof _0x76a8bb == "string" &&
    Object.prototype["hasOwnProperty"].call(_0x1c53bc, _0x76a8bb)
    ? { ..._0x357a2a, [_0x46c32d]: _0x1c53bc[_0x76a8bb] }
    : _0x357a2a;
}
function P(_0x19c310, _0xe34c1c) {
  let _0x1dfdc6 = _0x94a9b2(_0x19c310);
  return _0x1dfdc6 === undefined
    ? _0x19c310
    : Object.fromEntries(
        Object.entries(_0x1dfdc6).map(([_0x35537c, _0x37c703]) => [
          _0x35537c,
          _0xe34c1c(_0x37c703),
        ]),
      );
}
function we(_0x45989f, _0x4c3fd3, _0x251a22, _0x1a0ac9) {
  return [
    ..._0x481ca6({
      entityType: _0x17e586.WORKBOOK,
      left:
        _0x45989f === undefined
          ? []
          : [
              {
                stableId: "workbook",
                position: 0,
                value: _0x35b74a(
                  "sheets",
                  "sheetOrder",
                  "resources",
                  "rev",
                )(_0x45989f),
              },
            ],
      right:
        _0x4c3fd3 === undefined
          ? []
          : [
              {
                stableId: "workbook",
                position: 0,
                value: _0x35b74a(
                  "sheets",
                  "sheetOrder",
                  "resources",
                  "rev",
                )(_0x4c3fd3),
              },
            ],
    }),
    ..._0x481ca6({
      entityType: _0x17e586.WORKSHEET,
      left: _0x522176(
        _0x251a22,
        _0x45989f == null ? undefined : _0x45989f.sheetOrder,
        _0x35b74a("cellData", "rowData", "columnData"),
      ),
      right: _0x522176(
        _0x1a0ac9,
        _0x4c3fd3 == null ? undefined : _0x4c3fd3.sheetOrder,
        _0x35b74a("cellData", "rowData", "columnData"),
      ),
    }),
  ];
}
function Te(_0x538390, _0x4cb8ee, _0x54a00a, _0x1e2b73, _0x471376) {
  let _0xd1585a = L(_0x54a00a, _0x4cb8ee),
    _0x1822a1 = L(_0x1e2b73, _0x4cb8ee);
  return _0x471376.some(
    (_0x2eeea2) => R(_0xd1585a, _0x2eeea2) || R(_0x1822a1, _0x2eeea2),
  )
    ? _0x471376.flatMap((_0x5a42f3) =>
        _0x481ca6({
          entityType: _0x538390,
          parentStableId: _0x5a42f3,
          left: z(_0xd1585a, _0x5a42f3, _0x538390),
          right: z(_0x1822a1, _0x5a42f3, _0x538390),
        }).map(F),
      )
    : _0x481ca6({
        entityType: _0x538390,
        left: _0x134eb4(_0x54a00a, _0x4cb8ee),
        right: _0x134eb4(_0x1e2b73, _0x4cb8ee),
      }).map(F);
}
function F(_0x1c3cd8) {
  let _0x38626a = (_0x30829e) => {
    var _0x119cf5;
    let _0xfcaf11 = _0x1c3cd8.locations[_0x30829e],
      _0xc5be = _0x94a9b2(
        (_0x119cf5 = _0x1c3cd8.values) == null
          ? undefined
          : _0x119cf5[_0x30829e],
      );
    if (_0xfcaf11 === null || _0xc5be === undefined) return _0xfcaf11;
    let _0x52ca1f = _0x94a9b2(_0xc5be.range),
      _0x592fea = Array.isArray(_0xc5be.ranges) ? _0xc5be.ranges : undefined,
      _0x1e844f = _0xfcaf11.target,
      _0x545ec0 = I(_0x52ca1f),
      _0x487ee1 =
        _0x592fea == null
          ? undefined
          : _0x592fea.map(I).filter((_0x348268) => _0x348268 !== undefined);
    return _0x52ca1f === undefined && _0x592fea === undefined
      ? _0xfcaf11
      : (_0x1e844f == null ? undefined : _0x1e844f.kind) === "entity"
        ? {
            ..._0xfcaf11,
            target: {
              ..._0x1e844f,
              kind: "sheet-range",
              ...(_0x545ec0 === undefined ? {} : { range: _0x545ec0 }),
              ...(_0x487ee1 === undefined ? {} : { ranges: _0x487ee1 }),
            },
          }
        : _0xfcaf11;
  };
  return {
    ..._0x1c3cd8,
    locations: { left: _0x38626a("left"), right: _0x38626a("right") },
  };
}
function I(_0x38bd57) {
  let _0x403163 = _0x94a9b2(_0x38bd57);
  if (!(
    _0x403163 === undefined ||
    !Number.isSafeInteger(_0x403163.startRow) ||
    !Number.isSafeInteger(_0x403163.endRow) ||
    !Number.isSafeInteger(_0x403163.startColumn) ||
    !Number.isSafeInteger(_0x403163.endColumn)
  ))
    return {
      startRow: _0x403163.startRow,
      endRow: _0x403163.endRow,
      startColumn: _0x403163.startColumn,
      endColumn: _0x403163.endColumn,
    };
}
function L(_0x25d0c4, _0x39a456) {
  var _0x49427e;
  let _0x395742 = Ee(_0x25d0c4, _0x39a456),
    _0x5171b3 = _0x94a9b2(_0x395742);
  if (_0x5171b3 === undefined) return _0x395742;
  let _0x2f2570 =
    (_0x49427e = _0x94a9b2(_0x25d0c4)) == null ? undefined : _0x49427e.id;
  if (
    _0x39a456 === "SHEET_SPARKLINE_PLUGIN" &&
    typeof _0x2f2570 == "string" &&
    _0x94a9b2(_0x5171b3[_0x2f2570]) !== undefined
  )
    return _0x5171b3[_0x2f2570];
  if (_0x39a456 === "SHEET_TABLE_PLUGIN")
    return Object.fromEntries(
      Object.entries(_0x5171b3).map(([_0x4f5c3f, _0x548532]) => {
        let _0x45f4f5 = _0x94a9b2(_0x548532);
        return Array.isArray(_0x45f4f5 == null ? undefined : _0x45f4f5.tables)
          ? [
              _0x4f5c3f,
              _0x45f4f5.tables["map"]((_0x38fe03) => {
                let _0x449e57 = _0x94a9b2(_0x38fe03);
                return _0x449e57 === undefined
                  ? _0x38fe03
                  : {
                      ..._0x449e57,
                      columns: Array.isArray(_0x449e57.columns)
                        ? _0x449e57.columns["map"](_0x35b74a("id"))
                        : _0x449e57.columns,
                    };
              }),
            ]
          : [_0x4f5c3f, _0x548532];
      }),
    );
  if (
    _0x39a456 === "SHEET_PIVOT_TABLE_PLUGIN" &&
    _0x94a9b2(_0x5171b3.pivotTableConfigs) !== undefined
  ) {
    let _0x242221 = _0x94a9b2(_0x5171b3.pivotTableConfigs),
      _0x2050d9 = _0x94a9b2(_0x5171b3.dataFieldManagerConfig) ?? {},
      _0x4037a9 = {};
    for (let [_0x5d15c7, _0x2d0c46] of Object.entries(_0x242221)) {
      var _0x432924;
      let _0x318dc6 =
        _0x94a9b2(
          (_0x432924 = _0x94a9b2(_0x2050d9[_0x5d15c7])) == null
            ? undefined
            : _0x432924.collections,
        ) ?? {};
      for (let [_0x26c920, _0x162882] of Object.entries(
        _0x94a9b2(_0x2d0c46) ?? {},
      ))
        _0x4037a9[_0x26c920] = Object.fromEntries(
          Object.entries(_0x94a9b2(_0x162882) ?? {}).map(
            ([_0x34e63e, _0x5402a6]) => [
              _0x34e63e,
              {
                ..._0x94a9b2(_0x5402a6),
                ...(_0x318dc6[_0x34e63e] === undefined
                  ? {}
                  : { collection: _0x318dc6[_0x34e63e] }),
              },
            ],
          ),
        );
    }
    return _0x4037a9;
  }
  return _0x395742;
}
function Ee(_0x2dcc18, _0x5a9d96) {
  var _0x5818d5;
  let _0x299cb6 = (
    Array.isArray(
      (_0x5818d5 = _0x94a9b2(_0x2dcc18)) == null
        ? undefined
        : _0x5818d5.resources,
    )
      ? _0x94a9b2(_0x2dcc18).resources
      : []
  )
    .map(_0x94a9b2)
    .find(
      (_0x195662) =>
        (_0x195662 == null ? undefined : _0x195662.name) === _0x5a9d96,
    );
  if (typeof (_0x299cb6 == null ? undefined : _0x299cb6.data) != "string")
    return _0x299cb6 == null ? undefined : _0x299cb6.data;
  try {
    return JSON.parse(_0x299cb6.data);
  } catch {
    return _0x299cb6.data;
  }
}
function R(_0x3019b3, _0xec570c) {
  let _0x5330d0 = _0x94a9b2(_0x3019b3);
  return (
    _0x5330d0 !== undefined &&
    (Object.prototype["hasOwnProperty"].call(_0x5330d0, _0xec570c) ||
      Object.values(_0x5330d0).some((_0x4763cc) => {
        let _0x2006dc = _0x94a9b2(_0x4763cc);
        return (
          (_0x2006dc == null ? undefined : _0x2006dc.sheetId) === _0xec570c ||
          (_0x2006dc == null ? undefined : _0x2006dc.subUnitId) === _0xec570c
        );
      }))
  );
}
function z(_0xff16fe, _0x2cd77f, _0x12a72a) {
  let _0x3a43d0 = _0x94a9b2(_0xff16fe);
  return _0x3a43d0 === undefined
    ? []
    : Object.prototype["hasOwnProperty"].call(_0x3a43d0, _0x2cd77f)
      ? _0x12a72a === _0x17e586.SHAPE
        ? De(_0x3a43d0[_0x2cd77f])
        : B(_0x3a43d0[_0x2cd77f])
      : B(
          Object.fromEntries(
            Object.entries(_0x3a43d0).filter(([, _0xe60280]) => {
              let _0x3fa774 = _0x94a9b2(_0xe60280);
              return (
                (_0x3fa774 == null ? undefined : _0x3fa774.sheetId) ===
                  _0x2cd77f ||
                (_0x3fa774 == null ? undefined : _0x3fa774.subUnitId) ===
                  _0x2cd77f
              );
            }),
          ),
        );
}
function De(_0x198627) {
  let _0x3f95b2 = _0x94a9b2(_0x198627),
    _0x25f831 = _0x94a9b2(_0x3f95b2 == null ? undefined : _0x3f95b2.data);
  return _0x25f831 === undefined
    ? B(_0x198627)
    : _0x522176(
        _0x25f831,
        Array.isArray(_0x3f95b2 == null ? undefined : _0x3f95b2.order)
          ? _0x3f95b2.order["filter"](
              (_0x4cdaa1) => typeof _0x4cdaa1 == "string",
            )
          : undefined,
      );
}
function B(_0x2083ad) {
  return (
    Array.isArray(_0x2083ad)
      ? _0x2083ad.map((_0xceee29, _0x5a129b) => [String(_0x5a129b), _0xceee29])
      : _0x522176(_0x2083ad, undefined).map((_0x1802bd) => [
          _0x1802bd.stableId,
          _0x1802bd.value,
        ])
  ).map(([_0x47b174, _0x49035f], _0x3b4e64) => {
    var _0x312d1f, _0x148870, _0x15e642;
    let _0xa46d4c = _0x94a9b2(_0x49035f),
      _0x526856 =
        ["id", "ruleId", "cfId", "uid", "tableId", "chartId", "pivotTableId"]
          .map((_0x1f5722) =>
            _0xa46d4c == null ? undefined : _0xa46d4c[_0x1f5722],
          )
          .find((_0x1f9a39) => typeof _0x1f9a39 == "string") ?? _0x47b174,
      _0x1adc07 = [
        _0xa46d4c == null ? undefined : _0xa46d4c.name,
        _0xa46d4c == null ? undefined : _0xa46d4c.title,
        (_0x312d1f = _0x94a9b2(
          (_0x148870 = _0x94a9b2(
            (_0x15e642 = _0x94a9b2(
              _0xa46d4c == null ? undefined : _0xa46d4c.style,
            )) == null
              ? undefined
              : _0x15e642.titles,
          )) == null
            ? undefined
            : _0x148870.title,
        )) == null
          ? undefined
          : _0x312d1f.content,
      ].find((_0x3422d9) => typeof _0x3422d9 == "string");
    return {
      stableId: _0x526856,
      position: _0x3b4e64,
      value: _0x49035f,
      ...(_0x1adc07 === undefined ? {} : { displayName: _0x1adc07 }),
    };
  });
}
function Oe(_0xb4a36, _0x5a7ca7, _0x53f1d2, _0x1131da, _0x43c95f, _0x4bdea4) {
  let _0x5377d9 = _0x94a9b2(
      _0x5a7ca7 == null ? undefined : _0x5a7ca7[_0xb4a36],
    ),
    _0x2cc89f = _0x94a9b2(_0x53f1d2 == null ? undefined : _0x53f1d2[_0xb4a36]),
    _0x93ef9a = ke(
      _0x5377d9,
      _0x2cc89f,
      _0xb4a36,
      _0x1131da,
      _0x43c95f,
      _0x4bdea4,
    ),
    _0x12910e =
      _0x93ef9a.leftRows === undefined
        ? V(_0x5377d9, _0x2cc89f, "row")
        : undefined,
    _0x236b8b =
      _0x93ef9a.leftColumns === undefined
        ? V(_0x5377d9, _0x2cc89f, "column")
        : undefined,
    _0x221c98 = {
      ..._0x93ef9a,
      ...(_0x12910e === undefined
        ? {}
        : { leftRows: _0x12910e.left, rightRows: _0x12910e.right }),
      ...(_0x236b8b === undefined
        ? {}
        : { leftColumns: _0x236b8b.left, rightColumns: _0x236b8b.right }),
    };
  return {
    snapshotAxisAmbiguous:
      (_0x12910e == null ? undefined : _0x12910e.ambiguous) === true ||
      (_0x236b8b == null ? undefined : _0x236b8b.ambiguous) === true,
    items: [
      ..._0x481ca6({
        entityType: _0x17e586.CELL,
        parentStableId: _0xb4a36,
        left: K(
          _0x5377d9 == null ? undefined : _0x5377d9.cellData,
          _0x221c98.leftRows,
          _0x221c98.leftColumns,
        ),
        right: K(
          _0x2cc89f == null ? undefined : _0x2cc89f.cellData,
          _0x221c98.rightRows,
          _0x221c98.rightColumns,
        ),
      }),
      ...q(
        _0xb4a36,
        "row",
        _0x5377d9 == null ? undefined : _0x5377d9.rowData,
        _0x2cc89f == null ? undefined : _0x2cc89f.rowData,
        _0x221c98.leftRows,
        _0x221c98.rightRows,
      ),
      ...q(
        _0xb4a36,
        "column",
        _0x5377d9 == null ? undefined : _0x5377d9.columnData,
        _0x2cc89f == null ? undefined : _0x2cc89f.columnData,
        _0x221c98.leftColumns,
        _0x221c98.rightColumns,
      ),
    ],
    unsupportedMutationIds: _0x221c98.unsupportedMutationIds,
    rows: W(
      _0x221c98.leftRows,
      _0x221c98.rightRows,
      Z(_0x5377d9, "row"),
      Z(_0x2cc89f, "row"),
    ),
    columns: W(
      _0x221c98.leftColumns,
      _0x221c98.rightColumns,
      Z(_0x5377d9, "column"),
      Z(_0x2cc89f, "column"),
    ),
  };
}
function V(_0x5d64c2, _0x28a6c1, _0x146201) {
  if (_0x5d64c2 === undefined || _0x28a6c1 === undefined) return;
  let _0x2ccae0 = H(_0x5d64c2, _0x146201),
    _0x5a7ed3 = H(_0x28a6c1, _0x146201);
  if (
    _0x2ccae0 === undefined ||
    _0x5a7ed3 === undefined ||
    _0x2ccae0 === _0x5a7ed3
  )
    return;
  let _0x1f0932 = _0x2ccae0 < _0x5a7ed3,
    _0xd7b779 = Math.min(_0x2ccae0, _0x5a7ed3),
    _0x33e072 = Math.abs(_0x2ccae0 - _0x5a7ed3),
    _0x20e78f = U(_0x1f0932 ? _0x5d64c2 : _0x28a6c1, _0x146201, _0xd7b779),
    _0xa88ad4 = U(
      _0x1f0932 ? _0x28a6c1 : _0x5d64c2,
      _0x146201,
      _0xd7b779 + _0x33e072,
    ),
    _0x240871 = [
      ...new Set([
        ..._0x20e78f.keys(),
        ..._0xa88ad4.keys(),
        ...[..._0xa88ad4.keys()].map((_0x4b628e) => _0x4b628e - _0x33e072),
      ]),
    ]
      .filter((_0x2c8334) => _0x2c8334 >= 0 && _0x2c8334 < _0xd7b779)
      .sort((_0x8ad4c0, _0x4160e3) => _0x8ad4c0 - _0x4160e3),
    _0x5ec141 = (_0x32c166, _0x105890) =>
      Number(
        (_0x20e78f.get(_0x32c166) ?? "") !==
          (_0xa88ad4.get(_0x32c166 + _0x105890) ?? ""),
      ),
    _0x2a16ad = _0x240871.reduce(
      (_0x7d1953, _0x35efe4) => _0x7d1953 + _0x5ec141(_0x35efe4, _0x33e072),
      0,
    ),
    _0x5590f1 = _0x2a16ad,
    _0x7c1a7c = 0,
    _0x407a61 = (_0x240871[0] ?? _0xd7b779) + 1;
  for (let _0x37cd89 = 0; _0x37cd89 < _0x240871.length; _0x37cd89 += 1) {
    let _0x2ed12d = _0x240871[_0x37cd89];
    _0x2a16ad += _0x5ec141(_0x2ed12d, 0) - _0x5ec141(_0x2ed12d, _0x33e072);
    let _0xcc2c21 = (_0x240871[_0x37cd89 + 1] ?? _0xd7b779) - _0x2ed12d;
    _0x2a16ad < _0x5590f1
      ? ((_0x5590f1 = _0x2a16ad),
        (_0x7c1a7c = _0x2ed12d + 1),
        (_0x407a61 = _0xcc2c21))
      : _0x2a16ad === _0x5590f1 && (_0x407a61 += _0xcc2c21);
  }
  let _0x489b7f =
      _0xd7b779 > 0
        ? [{ prefix: _0x146201 + ":snapshot", start: 0, count: _0xd7b779 }]
        : [],
    _0x1ca1f3 = _0x489b7f.map((_0x1b741a) => ({ ..._0x1b741a }));
  return (
    X(_0x1ca1f3, _0x7c1a7c, 0, [
      { prefix: _0x146201 + ":snapshot-extra", start: 0, count: _0x33e072 },
    ]),
    {
      left: _0x1f0932 ? _0x489b7f : _0x1ca1f3,
      right: _0x1f0932 ? _0x1ca1f3 : _0x489b7f,
      ambiguous: _0x407a61 !== 1 || _0x5590f1 !== 0,
    }
  );
}
function H(_0x46edc1, _0x582b4c) {
  let _0x32ff57 = _0x46edc1[_0x582b4c === "row" ? "rowCount" : "columnCount"];
  return typeof _0x32ff57 == "number" &&
    Number.isSafeInteger(_0x32ff57) &&
    _0x32ff57 >= 0
    ? _0x32ff57
    : undefined;
}
function U(_0x359a1d, _0x2a5f84, _0xdec67b) {
  let _0x86c839 = new Map();
  for (let [_0x590e9e, _0x146c17] of Object.entries(
    _0x94a9b2(_0x359a1d.cellData) ?? {},
  ))
    for (let [_0x477e2e, _0x25f384] of Object.entries(
      _0x94a9b2(_0x146c17) ?? {},
    )) {
      let _0x207e18 = Number(_0x2a5f84 === "row" ? _0x590e9e : _0x477e2e),
        _0x262d90 = Number(_0x2a5f84 === "row" ? _0x477e2e : _0x590e9e);
      if (
        !Number.isInteger(_0x207e18) ||
        _0x207e18 < 0 ||
        _0x207e18 >= _0xdec67b ||
        !Number.isInteger(_0x262d90) ||
        _0x262d90 < 0
      )
        continue;
      let _0x23d624 = _0x86c839.get(_0x207e18) ?? [];
      (_0x23d624.push([_0x262d90, _0x25f384]),
        _0x86c839.set(_0x207e18, _0x23d624));
    }
  let _0x1ecab4 =
      _0x94a9b2(
        _0x2a5f84 === "row" ? _0x359a1d.rowData : _0x359a1d.columnData,
      ) ?? {},
    _0x4a9c12 = new Set([
      ..._0x86c839.keys(),
      ...Object.keys(_0x1ecab4).map(Number),
    ]);
  return new Map(
    [..._0x4a9c12]
      .filter(
        (_0x3b2b40) =>
          Number.isInteger(_0x3b2b40) &&
          _0x3b2b40 >= 0 &&
          _0x3b2b40 < _0xdec67b,
      )
      .map((_0x4e65bc) => [
        _0x4e65bc,
        _0x4a291f({
          cells: (_0x86c839.get(_0x4e65bc) ?? []).sort(
            (_0x428dc6, _0x49b9cb) => _0x428dc6[0] - _0x49b9cb[0],
          ),
          dimension: _0x1ecab4[_0x4e65bc],
        }),
      ]),
  );
}
function W(_0x321694, _0x43a582, _0x41f9e6, _0x20c904) {
  let _0x9698ba =
      _0x321694 ??
      (_0x41f9e6 > 0
        ? [{ prefix: "coordinate", start: 0, count: _0x41f9e6 }]
        : []),
    _0x3a3bd7 =
      _0x43a582 ??
      (_0x20c904 > 0
        ? [{ prefix: "coordinate", start: 0, count: _0x20c904 }]
        : []),
    _0x52f23a = new Map();
  for (let _0x1dd1e4 of [..._0x9698ba, ..._0x3a3bd7]) {
    let _0x379e88 = _0x52f23a.get(_0x1dd1e4.prefix) ?? new Set();
    (_0x379e88.add(_0x1dd1e4.start),
      _0x379e88.add(_0x1dd1e4.start + _0x1dd1e4.count),
      _0x52f23a.set(_0x1dd1e4.prefix, _0x379e88));
  }
  let _0x59a6f0 = new Map(
      [..._0x52f23a].map(([_0x46f3fd, _0x38269c]) => [
        _0x46f3fd,
        [..._0x38269c].sort((_0x2135ba, _0x5855f1) => _0x2135ba - _0x5855f1),
      ]),
    ),
    _0x1d2db3 = (_0x38fc30) => {
      let _0x5f5c31 = 0;
      return _0x38fc30.flatMap((_0x5d21cd) => {
        let _0x4085d8 = _0x59a6f0
            .get(_0x5d21cd.prefix)
            .filter(
              (_0x5ace60) =>
                _0x5ace60 >= _0x5d21cd.start &&
                _0x5ace60 <= _0x5d21cd.start + _0x5d21cd.count,
            ),
          _0x2c56b4 = _0x4085d8
            .slice(0, -1)
            .map((_0x18b52c, _0x421093) => ({
              id: _0x5d21cd.prefix + ":" + _0x18b52c,
              position: _0x5f5c31 + _0x18b52c - _0x5d21cd.start,
              count: _0x4085d8[_0x421093 + 1] - _0x18b52c,
            }));
        return ((_0x5f5c31 += _0x5d21cd.count), _0x2c56b4);
      });
    },
    _0x2c194b = _0x1d2db3(_0x9698ba),
    _0x13f8f1 = _0x1d2db3(_0x3a3bd7);
  return _0x370ed7(
    _0x2c194b.map((_0x32c0a1) => _0x32c0a1.id),
    _0x13f8f1.map((_0x7d67df) => _0x7d67df.id),
  ).map((_0x4ee8e4) => ({
    leftStart:
      _0x4ee8e4.leftIndex === null
        ? null
        : _0x2c194b[_0x4ee8e4.leftIndex].position,
    rightStart:
      _0x4ee8e4.rightIndex === null
        ? null
        : _0x13f8f1[_0x4ee8e4.rightIndex].position,
    count:
      _0x4ee8e4.leftIndex === null
        ? _0x13f8f1[_0x4ee8e4.rightIndex].count
        : _0x2c194b[_0x4ee8e4.leftIndex].count,
  }));
}
function ke(_0x4761ff, _0x3dceef, _0x2f91c1, _0x226266, _0x18ace7, _0x1af9c9) {
  if (!_0x1af9c9 || _0x4761ff === undefined || _0x3dceef === undefined)
    return { unsupportedMutationIds: [] };
  let _0x42682b = Y(_0x4761ff, _0x2f91c1, "row", _0x226266),
    _0x21f131 = Y(_0x3dceef, _0x2f91c1, "row", _0x18ace7),
    _0x27b4cf = Y(_0x4761ff, _0x2f91c1, "column", _0x226266),
    _0x186dbe = Y(_0x3dceef, _0x2f91c1, "column", _0x18ace7),
    _0x4b64f1 =
      _0x42682b.identities !== undefined && _0x21f131.identities !== undefined,
    _0x14c729 =
      _0x27b4cf.identities !== undefined && _0x186dbe.identities !== undefined;
  return {
    ...(_0x4b64f1
      ? { leftRows: _0x42682b.identities, rightRows: _0x21f131.identities }
      : {}),
    ...(_0x14c729
      ? {
          leftColumns: _0x27b4cf.identities,
          rightColumns: _0x186dbe.identities,
        }
      : {}),
    unsupportedMutationIds: [
      ..._0x42682b.unsupportedMutationIds,
      ..._0x21f131.unsupportedMutationIds,
      ..._0x27b4cf.unsupportedMutationIds,
      ..._0x186dbe.unsupportedMutationIds,
      ...(_0x4b64f1 ? [] : G(_0x226266, _0x18ace7, _0x2f91c1, "row")),
      ...(_0x14c729 ? [] : G(_0x226266, _0x18ace7, _0x2f91c1, "column")),
    ],
  };
}
function G(_0x2dab33, _0x2eefd7, _0x1b7ff8, _0xbd669d) {
  return [..._0x2dab33, ..._0x2eefd7]
    .filter(
      (_0x1ec8a8) =>
        _0x1ec8a8.params["subUnitId"] === _0x1b7ff8 &&
        ze(_0x1ec8a8.id, _0xbd669d),
    )
    .map((_0x1ac5d9) => _0x1ac5d9.id);
}
function K(_0x262dce, _0x41ba0d, _0x5aa360) {
  let _0xdb56ac = _0x94a9b2(_0x262dce) ?? {};
  return Object.keys(_0xdb56ac)
    .map(Number)
    .filter(Number.isInteger)
    .sort((_0xb2c5ff, _0x22f8e8) => _0xb2c5ff - _0x22f8e8)
    .flatMap((_0xdc4757) => {
      let _0x13d665 = _0x94a9b2(_0xdb56ac[String(_0xdc4757)]) ?? {};
      return Object.keys(_0x13d665)
        .map(Number)
        .filter(Number.isInteger)
        .sort((_0x1bdbfa, _0x574bf1) => _0x1bdbfa - _0x574bf1)
        .map((_0x4bf792) => {
          let _0xaa5742 = He(_0xdc4757, _0x4bf792);
          return {
            stableId:
              _0x41ba0d === undefined && _0x5aa360 === undefined
                ? _0xaa5742
                : (_0x41ba0d === undefined
                    ? "row:coordinate:" + _0xdc4757
                    : Pe(_0x41ba0d, _0xdc4757)) +
                  "|" +
                  (_0x5aa360 === undefined
                    ? "column:coordinate:" + _0x4bf792
                    : Pe(_0x5aa360, _0x4bf792)),
            ...(_0x41ba0d === undefined && _0x5aa360 === undefined
              ? {}
              : { nativeStableId: _0xaa5742 }),
            position: _0xdc4757 * 16384 + _0x4bf792,
            value: Ae(_0x13d665[String(_0x4bf792)]),
          };
        });
    });
}
function Ae(_0x5a521b) {
  let _0x2ee589 = _0x94a9b2(_0x5a521b);
  if (_0x2ee589 === undefined) return _0x5a521b;
  let {
    f: _0x179455,
    s: _0x450068,
    t: _0x535a0a,
    v: _0x792cfe,
    ..._0x46fe1b
  } = _0x2ee589;
  return {
    ..._0x46fe1b,
    ...(_0x792cfe === undefined ? {} : { value: _0x792cfe }),
    ...(_0x179455 === undefined ? {} : { formula: _0x179455 }),
    ...(_0x535a0a === undefined ? {} : { valueType: _0x535a0a }),
    ...(_0x450068 === undefined ? {} : { style: _0x450068 }),
  };
}
function q(_0x4800e4, _0x24d607, _0xfe24b4, _0xaaa410, _0x7ffb57, _0x487620) {
  let _0x344761 = new Map();
  for (let [_0x581a4a, _0x398f78] of [
    [_0x7ffb57, _0xfe24b4],
    [_0x487620, _0xaaa410],
  ]) {
    for (let _0x336d4a of _0x581a4a ?? []) {
      let _0x244b26 = _0x344761.get(_0x336d4a.prefix) ?? new Set();
      (_0x244b26.add(_0x336d4a.start),
        _0x244b26.add(_0x336d4a.start + _0x336d4a.count),
        _0x344761.set(_0x336d4a.prefix, _0x244b26));
    }
    for (let _0x36835f of Object.keys(_0x94a9b2(_0x398f78) ?? {})
      .map(Number)
      .filter(Number.isSafeInteger)) {
      let _0x21f81f = Ne(_0x581a4a, _0x36835f);
      _0x21f81f !== undefined &&
        (_0x344761.get(_0x21f81f.prefix).add(_0x21f81f.start),
        _0x344761.get(_0x21f81f.prefix).add(_0x21f81f.start + 1));
    }
  }
  let _0xcb5f4b = new Map(
      [..._0x344761].map(([_0x56e2f6, _0x355564]) => [
        _0x56e2f6,
        [..._0x355564].sort((_0x26d5de, _0x47818a) => _0x26d5de - _0x47818a),
      ]),
    ),
    _0x4fae0b = Me(_0xfe24b4, _0x24d607, _0x7ffb57, _0xcb5f4b),
    _0x4b33cb = Me(_0xaaa410, _0x24d607, _0x487620, _0xcb5f4b),
    _0x58571a = new Map(
      _0x4fae0b.map((_0x440bd8) => [_0x440bd8.stableId, _0x440bd8]),
    ),
    _0x335ffd = new Map(
      _0x4b33cb.map((_0x3ff975) => [_0x3ff975.stableId, _0x3ff975]),
    );
  return _0x481ca6({
    entityType: _0x17e586.ROW_COLUMN,
    parentStableId: _0x4800e4,
    left: _0x4fae0b,
    right: _0x4b33cb,
  }).map((_0x4aeac4) => ({
    ..._0x4aeac4,
    locations: {
      left: je(
        _0x4aeac4.locations["left"],
        _0x58571a.get(_0x4aeac4.stableId),
        _0x24d607,
      ),
      right: je(
        _0x4aeac4.locations["right"],
        _0x335ffd.get(_0x4aeac4.stableId),
        _0x24d607,
      ),
    },
  }));
}
function je(_0x135309, _0x8e63a, _0x4475f8) {
  if (_0x135309 === null || _0x8e63a === undefined) return null;
  let _0x63c330 = _0x135309.target;
  return (_0x63c330 == null ? undefined : _0x63c330.kind) === "entity"
    ? {
        ..._0x135309,
        target: {
          ..._0x63c330,
          kind: "sheet-axis",
          axis: _0x4475f8,
          start: _0x8e63a.position,
          end: _0x8e63a.position + _0x8e63a.count - 1,
        },
      }
    : _0x135309;
}
function Me(_0x2fd2f9, _0x538728, _0x2876a0, _0xe85e25) {
  let _0x381267 = _0x94a9b2(_0x2fd2f9) ?? {};
  if (_0x2876a0 === undefined)
    return Object.keys(_0x381267)
      .map(Number)
      .filter(Number.isSafeInteger)
      .sort((_0x340891, _0x342d97) => _0x340891 - _0x342d97)
      .map((_0x50ac07) => ({
        stableId: _0x538728 + ":" + _0x50ac07,
        position: _0x50ac07,
        count: 1,
        value: _0x381267[String(_0x50ac07)] ?? {},
      }));
  let _0x25459d = 0;
  return _0x2876a0.flatMap((_0x53a09e) => {
    let _0x4f2164 = _0xe85e25
        .get(_0x53a09e.prefix)
        .filter(
          (_0xfbc327) =>
            _0xfbc327 >= _0x53a09e.start &&
            _0xfbc327 <= _0x53a09e.start + _0x53a09e.count,
        ),
      _0x2ec8b1 = _0x4f2164.slice(0, -1).map((_0x42846e, _0x212909) => {
        let _0x4817b0 = _0x4f2164[_0x212909 + 1] - _0x42846e,
          _0x354039 = _0x25459d + _0x42846e - _0x53a09e.start;
        return {
          stableId:
            _0x4817b0 === 1
              ? _0x53a09e.prefix + ":" + _0x42846e
              : _0x53a09e.prefix +
                ":" +
                _0x42846e +
                "-" +
                (_0x42846e + _0x4817b0 - 1),
          nativeStableId: _0x538728 + ":" + _0x354039,
          position: _0x354039,
          count: _0x4817b0,
          value: _0x381267[String(_0x354039)] ?? {},
        };
      });
    return ((_0x25459d += _0x53a09e.count), _0x2ec8b1);
  });
}
function Ne(_0x52726b, _0x1893f3) {
  if (_0x1893f3 < 0) return;
  let _0x53aa72 = _0x1893f3;
  for (let _0x572f53 of _0x52726b ?? []) {
    if (_0x53aa72 < _0x572f53.count)
      return {
        prefix: _0x572f53.prefix,
        start: _0x572f53.start + _0x53aa72,
        count: 1,
      };
    _0x53aa72 -= _0x572f53.count;
  }
}
function Pe(_0x57fb9a, _0x320bc3) {
  let _0x3df342 = Ne(_0x57fb9a, _0x320bc3);
  return _0x3df342 === undefined
    ? undefined
    : _0x3df342.prefix + ":" + _0x3df342.start;
}
function Fe(_0x221c50, _0x2818ac) {
  let _0x3054e1 = 0,
    _0x1132d7;
  return _0x221c50.flatMap((_0x2639ad) => {
    var _0x1d9634;
    let _0x458e49 =
      (_0x1d9634 = _0x94a9b2(_0x2639ad)) == null
        ? undefined
        : _0x1d9634.mutations;
    return (Array.isArray(_0x458e49) ? _0x458e49 : []).flatMap((_0x513388) => {
      let _0xda00c0 = _0x94a9b2(_0x513388);
      if (typeof (_0xda00c0 == null ? undefined : _0xda00c0.id) != "string")
        return [];
      _0x1132d7 ??= Ve(
        _0x4a291f({ changesets: _0x221c50, snapshot: _0x2818ac }),
      );
      let _0x27e682 = _0x3054e1;
      return (
        (_0x3054e1 += 1),
        [
          {
            branchIdentity: _0x1132d7,
            id: _0xda00c0.id,
            params: Ie(_0xda00c0.data),
            sequence: _0x27e682,
          },
        ]
      );
    });
  });
}
function Ie(_0x1065c1) {
  if (typeof _0x1065c1 != "string") return _0x94a9b2(_0x1065c1) ?? {};
  try {
    return _0x94a9b2(JSON.parse(_0x1065c1)) ?? {};
  } catch {
    return {};
  }
}
function J(_0xd36e99) {
  return _0xd36e99
    .map((_0x299d36) => _0x299d36.id)
    .filter((_0x4ae0f8) => A.test(_0x4ae0f8) && !k.has(_0x4ae0f8));
}
function Y(_0x3fc91d, _0x6f10f9, _0x2dfb15, _0x24d44f) {
  let _0x945c2d = _0x24d44f.filter(
      (_0x47c6e8) =>
        _0x47c6e8.params["subUnitId"] === _0x6f10f9 &&
        ze(_0x47c6e8.id, _0x2dfb15),
    ),
    _0x145732 = Z(_0x3fc91d, _0x2dfb15),
    _0x412f38 = _0x24d44f.filter(
      (_0x1aee79) =>
        _0x1aee79.id !== "sheet.mutation.insert-sheet" &&
        _0x1aee79.id !== "sheet.mutation.remove-sheet" &&
        (_0x1aee79.params["subUnitId"] === undefined ||
          _0x1aee79.params["subUnitId"] === _0x6f10f9) &&
        A.test(_0x1aee79.id) &&
        (!k.has(_0x1aee79.id) ||
          typeof _0x1aee79.params["subUnitId"] != "string"),
    );
  if (_0x412f38.length > 0)
    return {
      unsupportedMutationIds: _0x412f38.map((_0x45be89) => _0x45be89.id),
    };
  let _0x5f2301 =
    _0x145732 -
    _0x945c2d.reduce((_0x5e0843, _0x59eb43) => {
      let _0x426d93 = Q(_0x59eb43.params["range"], _0x2dfb15);
      if (_0x426d93 === undefined) return _0x5e0843;
      let _0x32b054 = _0x426d93.end - _0x426d93.start + 1;
      return _0x59eb43.id["startsWith"]("sheet.mutation.insert-")
        ? _0x5e0843 + _0x32b054
        : _0x59eb43.id["startsWith"]("sheet.mutation.remove-")
          ? _0x5e0843 - _0x32b054
          : _0x5e0843;
    }, 0);
  if (
    !Number.isSafeInteger(_0x5f2301) ||
    _0x5f2301 < 0 ||
    !Number.isSafeInteger(_0x145732)
  )
    return {
      unsupportedMutationIds: _0x945c2d.map((_0x531774) => _0x531774.id),
    };
  let _0xfc4d8d =
      _0x5f2301 > 0
        ? [{ prefix: _0x2dfb15 + ":base", start: 0, count: _0x5f2301 }]
        : [],
    _0x514219 = _0x5f2301;
  for (let _0x5ef531 of _0x945c2d) {
    if (_0x5ef531.id["startsWith"]("sheet.mutation.insert-")) {
      let _0x575ad5 = Q(_0x5ef531.params["range"], _0x2dfb15);
      if (_0x575ad5 === undefined || _0x575ad5.start > _0x514219)
        return { unsupportedMutationIds: [_0x5ef531.id] };
      let _0x41b894 = _0x575ad5.end - _0x575ad5.start + 1;
      (X(_0xfc4d8d, _0x575ad5.start, 0, [
        {
          prefix: _0x2dfb15 + ":insert:" + Be(_0x5ef531),
          start: 0,
          count: _0x41b894,
        },
      ]),
        (_0x514219 += _0x41b894));
      continue;
    }
    if (_0x5ef531.id["startsWith"]("sheet.mutation.remove-")) {
      let _0x24529f = Q(_0x5ef531.params["range"], _0x2dfb15);
      if (_0x24529f === undefined || _0x24529f.end >= _0x514219)
        return { unsupportedMutationIds: [_0x5ef531.id] };
      let _0x332d05 = _0x24529f.end - _0x24529f.start + 1;
      (X(_0xfc4d8d, _0x24529f.start, _0x332d05, []), (_0x514219 -= _0x332d05));
      continue;
    }
    if (!Le(_0xfc4d8d, _0x5ef531, _0x2dfb15, _0x514219))
      return { unsupportedMutationIds: [_0x5ef531.id] };
  }
  return _0x514219 === _0x145732
    ? { identities: _0xfc4d8d, unsupportedMutationIds: [] }
    : { unsupportedMutationIds: _0x945c2d.map((_0x114d17) => _0x114d17.id) };
}
function Le(_0x392e5b, _0x3ee45c, _0x862b4e, _0x5cf54f) {
  let _0x34c167 = Q(_0x3ee45c.params["sourceRange"], _0x862b4e),
    _0x152f7e = Q(_0x3ee45c.params["targetRange"], _0x862b4e);
  if (
    _0x34c167 === undefined ||
    _0x152f7e === undefined ||
    _0x34c167.end >= _0x5cf54f ||
    _0x152f7e.start > _0x5cf54f ||
    (_0x152f7e.start > _0x34c167.start && _0x152f7e.start <= _0x34c167.end)
  )
    return false;
  let _0x53e883 = _0x34c167.end - _0x34c167.start + 1,
    _0x3f43a1 = X(_0x392e5b, _0x34c167.start, _0x53e883, []);
  return (
    X(
      _0x392e5b,
      _0x152f7e.start > _0x34c167.start
        ? _0x152f7e.start - _0x53e883
        : _0x152f7e.start,
      0,
      _0x3f43a1,
    ),
    true
  );
}
function X(_0x23b770, _0x359f0b, _0x1802e5, _0xf39136) {
  let _0x2cc51c = Re(_0x23b770, _0x359f0b),
    _0x4be4c5 = Re(_0x23b770, _0x359f0b + _0x1802e5);
  return _0x23b770.splice(_0x2cc51c, _0x4be4c5 - _0x2cc51c, ..._0xf39136);
}
function Re(_0x48a18d, _0x54736c) {
  let _0x4b5226 = _0x54736c;
  for (let _0x2f465a = 0; _0x2f465a < _0x48a18d.length; _0x2f465a += 1) {
    let _0x4d360d = _0x48a18d[_0x2f465a];
    if (_0x4b5226 === 0) return _0x2f465a;
    if (_0x4b5226 < _0x4d360d.count)
      return (
        _0x48a18d.splice(
          _0x2f465a,
          1,
          { ..._0x4d360d, count: _0x4b5226 },
          {
            ..._0x4d360d,
            start: _0x4d360d.start + _0x4b5226,
            count: _0x4d360d.count - _0x4b5226,
          },
        ),
        _0x2f465a + 1
      );
    _0x4b5226 -= _0x4d360d.count;
  }
  return _0x48a18d.length;
}
function ze(_0x28111f, _0x281b69) {
  return _0x281b69 === "row"
    ? _0x28111f === "sheet.mutation.insert-row" ||
        _0x28111f === "sheet.mutation.remove-rows" ||
        _0x28111f === "sheet.mutation.move-rows"
    : _0x28111f === "sheet.mutation.insert-col" ||
        _0x28111f === "sheet.mutation.remove-col" ||
        _0x28111f === "sheet.mutation.move-columns" ||
        _0x28111f === "sheet.mutation.move-cols";
}
function Z(_0x5f389f, _0x53a2e7) {
  let _0x41c5ae =
      _0x5f389f == null
        ? undefined
        : _0x5f389f[_0x53a2e7 === "row" ? "rowCount" : "columnCount"],
    _0x3d69fe = _0x94a9b2(
      _0x5f389f == null
        ? undefined
        : _0x5f389f[_0x53a2e7 === "row" ? "rowData" : "columnData"],
    ),
    _0x3d9eba = _0x94a9b2(_0x5f389f == null ? undefined : _0x5f389f.cellData),
    _0x32cb8a =
      _0x53a2e7 === "row"
        ? Object.keys(_0x3d9eba ?? {}).map(Number)
        : Object.values(_0x3d9eba ?? {}).flatMap((_0x11421b) =>
            Object.keys(_0x94a9b2(_0x11421b) ?? {}).map(Number),
          );
  return [...Object.keys(_0x3d69fe ?? {}).map(Number), ..._0x32cb8a]
    .filter(Number.isInteger)
    .reduce(
      (_0x5c2cf3, _0x1f1491) => Math.max(_0x5c2cf3, _0x1f1491 + 1),
      typeof _0x41c5ae == "number" ? _0x41c5ae : 0,
    );
}
function Q(_0x3859f3, _0x162d2e) {
  let _0x4c3bb7 = _0x94a9b2(_0x3859f3),
    _0x23a3fa =
      _0x4c3bb7 == null
        ? undefined
        : _0x4c3bb7[_0x162d2e === "row" ? "startRow" : "startColumn"],
    _0x32be8b =
      _0x4c3bb7 == null
        ? undefined
        : _0x4c3bb7[_0x162d2e === "row" ? "endRow" : "endColumn"];
  return typeof _0x23a3fa == "number" &&
    typeof _0x32be8b == "number" &&
    Number.isSafeInteger(_0x23a3fa) &&
    Number.isSafeInteger(_0x32be8b) &&
    _0x23a3fa >= 0 &&
    _0x32be8b >= _0x23a3fa
    ? { start: _0x23a3fa, end: _0x32be8b }
    : undefined;
}
function Be(_0x267118) {
  return Ve(
    _0x4a291f({
      id: _0x267118.id,
      branchIdentity: _0x267118.branchIdentity,
      sequence: _0x267118.sequence,
      subUnitId: _0x267118.params["subUnitId"],
      range: _0x267118.params["range"],
      sourceRange: _0x267118.params["sourceRange"],
      targetRange: _0x267118.params["targetRange"],
    }),
  );
}
function Ve(_0x1e7f7c) {
  let _0x4706ba = 2166136261;
  for (let _0x5e23a9 = 0; _0x5e23a9 < _0x1e7f7c.length; _0x5e23a9 += 1)
    ((_0x4706ba ^= _0x1e7f7c.charCodeAt(_0x5e23a9)),
      (_0x4706ba = Math.imul(_0x4706ba, 16777619)));
  return (_0x4706ba >>> 0).toString(36);
}
function He(_0x33c5f4, _0x558ed0) {
  let _0x24af1e = Math.max(0, _0x558ed0),
    _0x1584fc = "";
  do
    ((_0x1584fc = String.fromCharCode(65 + (_0x24af1e % 26)) + _0x1584fc),
      (_0x24af1e = Math.floor(_0x24af1e / 26) - 1));
  while (_0x24af1e >= 0);
  return "" + _0x1584fc + (_0x33c5f4 + 1);
}
let $ = class extends _0x5640d9 {
  constructor(_0x529e58 = pe, _0x4f6edc, _0x1474d7) {
    (super(),
      (this._config = _0x529e58),
      (this._injector = _0x4f6edc),
      (this._configService = _0x1474d7));
    let { ..._0x3ddf26 } = _0x2e8261({}, pe, this._config);
    this._configService["setConfig"](w, _0x3ddf26);
  }
  onStarting() {
    (_0x4cc84f(this._injector, [[E], [j]]),
      this.disposeWithMe(
        this._injector["get"](_0xaac180).register(this._injector["get"](j)),
      ),
      this._injector["get"](E));
  }
};
(O($, "pluginName", "UNIVER_SHEETS_HISTORY_PLUGIN"),
  O($, "packageName", me),
  O($, "version", he),
  O($, "type", _0x15c628.UNIVER_SHEET),
  ($ = ge(
    [
      _0x85b963(_0x239017, _0x101c23, _0x336062),
      T(1, _0x6b8b3c(_0x78d174)),
      T(2, _0x22671c),
    ],
    $,
  )));
export {
  w as SHEETS_HISTORY_PLUGIN_CONFIG_KEY,
  j as SheetsUnitComparisonAdapter,
  $ as UniverSheetsHistoryPlugin,
};
