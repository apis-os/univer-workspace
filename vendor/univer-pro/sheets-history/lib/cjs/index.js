Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/edit-history"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets");
const i = "sheets-history.config",
  a = {};
var o = "@univerjs-pro/sheets-history",
  s = "1.0.0-insiders.20260907-70fc579";
function c(_0x34d033, _0x1885b1) {
  return function (_0x5bd13d, _0x53f848) {
    _0x1885b1(_0x5bd13d, _0x53f848, _0x34d033);
  };
}
function l(_0x110c6a, _0x3a8f4c, _0x1853b9, _0x1e9fd9) {
  var _0x1dc548 = arguments.length,
    _0x2a75f7 =
      _0x1dc548 < 3
        ? _0x3a8f4c
        : _0x1e9fd9 === null
          ? (_0x1e9fd9 = Object.getOwnPropertyDescriptor(_0x3a8f4c, _0x1853b9))
          : _0x1e9fd9,
    _0x434d3e;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2a75f7 = Reflect.decorate(_0x110c6a, _0x3a8f4c, _0x1853b9, _0x1e9fd9);
  else {
    for (var _0x17398a = _0x110c6a.length - 1; _0x17398a >= 0; _0x17398a--)
      (_0x434d3e = _0x110c6a[_0x17398a]) &&
        (_0x2a75f7 =
          (_0x1dc548 < 3
            ? _0x434d3e(_0x2a75f7)
            : _0x1dc548 > 3
              ? _0x434d3e(_0x3a8f4c, _0x1853b9, _0x2a75f7)
              : _0x434d3e(_0x3a8f4c, _0x1853b9)) || _0x2a75f7);
  }
  return (
    _0x1dc548 > 3 &&
      _0x2a75f7 &&
      Object.defineProperty(_0x3a8f4c, _0x1853b9, _0x2a75f7),
    _0x2a75f7
  );
}
let u = class extends n.Disposable {
  constructor(
    _0x49e8c6,
    _0x260fed,
    _0x5809b0,
    _0x5521a9,
    _0x253e32,
    _0x576f8e,
  ) {
    (super(),
      (this._commandService = _0x49e8c6),
      (this._permissionService = _0x5809b0),
      (this._univerInstanceService = _0x5521a9),
      (this._selectionService = _0x253e32),
      (this._rangeProtectionRuleModel = _0x576f8e),
      this.disposeWithMe(
        _0x260fed.register({
          type: n.UniverInstanceType["UNIVER_SHEET"],
          canView: (_0xaebf27) =>
            this._hasPermission(
              new r.WorkbookViewHistoryPermission(_0xaebf27).id,
            ),
          canRevert: (_0x5718da) => this._canRevert(_0x5718da),
          captureLocation: (_0xd8e263) => this._captureLocation(_0xd8e263),
          restoreLocation: (_0x4ed8d8, _0xbd5425) =>
            this._restoreLocation(
              _0x4ed8d8,
              d(_0xbd5425) ? _0xbd5425 : undefined,
            ),
        }),
      ));
  }
  _captureLocation(_0x2f1ffc) {
    var _0x454593;
    let _0x3d06a7 = this._univerInstanceService["getUnit"](
        _0x2f1ffc,
        n.UniverInstanceType["UNIVER_SHEET"],
      ),
      _0xd3ec64 = _0x3d06a7 == null ? undefined : _0x3d06a7.getActiveSheet();
    if (_0xd3ec64)
      return {
        subUnitId: _0xd3ec64.getSheetId(),
        range:
          (_0x454593 = this._selectionService["getCurrentLastSelection"]()) ==
          null
            ? undefined
            : _0x454593.range,
      };
  }
  async _restoreLocation(_0x1af9f2, _0x5c72c3) {
    _0x5c72c3 &&
      (await this._commandService["executeCommand"](
        r.SetWorksheetActivateCommand["id"],
        { unitId: _0x1af9f2, subUnitId: _0x5c72c3.subUnitId },
      ),
      _0x5c72c3.range &&
        (await this._commandService["executeCommand"](
          r.SelectRangeCommand["id"],
          {
            unitId: _0x1af9f2,
            subUnit: _0x5c72c3.subUnitId,
            range: _0x5c72c3.range,
          },
        )));
  }
  _hasPermission(_0x27539e) {
    return this._permissionService["composePermission"]([_0x27539e]).every(
      (_0x2f4143) => !!_0x2f4143.value,
    );
  }
  _canRevert(_0x40bd4d) {
    let _0x5610e1 = this._univerInstanceService["getUnit"](
      _0x40bd4d,
      n.UniverInstanceType["UNIVER_SHEET"],
    );
    if (!_0x5610e1) return false;
    let _0x2734e9 = _0x5610e1
        .getSheets()
        .map((_0x2012e6) => _0x2012e6.getSheetId()),
      _0xa9e200 = _0x2734e9.map(
        (_0x3edc31) =>
          new r["WorksheetEditPermission"](_0x40bd4d, _0x3edc31).id,
      ),
      _0x3d2b2f = _0x2734e9.flatMap((_0x4196a1) =>
        this._rangeProtectionRuleModel["getSubunitRuleList"](
          _0x40bd4d,
          _0x4196a1,
        ).map(
          (_0x13b643) =>
            new r["RangeProtectionPermissionEditPoint"](
              _0x40bd4d,
              _0x4196a1,
              _0x13b643.permissionId,
            ).id,
        ),
      ),
      _0x2927a1 = [
        new r.WorkbookEditablePermission(_0x40bd4d).id,
        ..._0xa9e200,
        ..._0x3d2b2f,
        new r["WorkbookRecoverHistoryPermission"](_0x40bd4d).id,
      ];
    return this._permissionService["composePermission"](_0x2927a1).every(
      (_0x5550fe) => !!_0x5550fe.value,
    );
  }
};
u = l(
  [
    c(0, n.ICommandService),
    c(1, (0, n.Inject)(e.HistoryUnitAdapterRegistryService)),
    c(2, n.IPermissionService),
    c(3, n.IUniverInstanceService),
    c(4, (0, n.Inject)(r.SheetsSelectionsService)),
    c(5, (0, n.Inject)(r.RangeProtectionRuleModel)),
  ],
  u,
);
function d(_0x2dd1ac) {
  return (
    typeof _0x2dd1ac == "object" &&
    !!_0x2dd1ac &&
    "subUnitId" in _0x2dd1ac &&
    typeof _0x2dd1ac.subUnitId == "string"
  );
}
function f(_0x1550eb) {
  "@babel/helpers - typeof";
  return (
    (f =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4265ca) {
            return typeof _0x4265ca;
          }
        : function (_0x5ebb6e) {
            return _0x5ebb6e &&
              typeof Symbol == "function" &&
              _0x5ebb6e.constructor === Symbol &&
              _0x5ebb6e !== Symbol.prototype
              ? "symbol"
              : typeof _0x5ebb6e;
          }),
    f(_0x1550eb)
  );
}
function p(_0xf17aac, _0x580ba3) {
  if (f(_0xf17aac) != "object" || !_0xf17aac) return _0xf17aac;
  var _0x4f5838 = _0xf17aac[Symbol.toPrimitive];
  if (_0x4f5838 !== undefined) {
    var _0x409b96 = _0x4f5838.call(_0xf17aac, _0x580ba3 || "default");
    if (f(_0x409b96) != "object") return _0x409b96;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x580ba3 === "string" ? String : Number)(_0xf17aac);
}
function m(_0x2a5124) {
  var _0xe2fc45 = p(_0x2a5124, "string");
  return f(_0xe2fc45) == "symbol" ? _0xe2fc45 : _0xe2fc45 + "";
}
function h(_0x23b2ab, _0x57782e, _0x19b49a) {
  return (
    (_0x57782e = m(_0x57782e)) in _0x23b2ab
      ? Object.defineProperty(_0x23b2ab, _0x57782e, {
          value: _0x19b49a,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x23b2ab[_0x57782e] = _0x19b49a),
    _0x23b2ab
  );
}
const g = [
    e.UnitComparisonEntityType["WORKBOOK"],
    e.UnitComparisonEntityType["WORKSHEET"],
    e.UnitComparisonEntityType["CELL"],
    e.UnitComparisonEntityType["ROW_COLUMN"],
    e.UnitComparisonEntityType["CONDITION_FORMAT"],
    e.UnitComparisonEntityType["DATA_VALIDATION"],
    e.UnitComparisonEntityType["SPARKLINE"],
    e.UnitComparisonEntityType["TABLE"],
    e.UnitComparisonEntityType["SHAPE"],
    e.UnitComparisonEntityType["CHART"],
    e.UnitComparisonEntityType["PIVOT"],
  ],
  _ = [
    [
      e.UnitComparisonEntityType["CONDITION_FORMAT"],
      "SHEET_CONDITIONAL_FORMATTING_PLUGIN",
    ],
    [
      e.UnitComparisonEntityType["DATA_VALIDATION"],
      "SHEET_DATA_VALIDATION_PLUGIN",
    ],
    [e.UnitComparisonEntityType["SPARKLINE"], "SHEET_SPARKLINE_PLUGIN"],
    [e.UnitComparisonEntityType["TABLE"], "SHEET_TABLE_PLUGIN"],
    [e.UnitComparisonEntityType["SHAPE"], "SHEET_DRAWING_PLUGIN"],
    [e.UnitComparisonEntityType["CHART"], "SHEET_CHART_PLUGIN"],
    [e.UnitComparisonEntityType["PIVOT"], "SHEET_PIVOT_TABLE_PLUGIN"],
  ],
  v = new Set([
    "sheet.mutation.insert-col",
    "sheet.mutation.insert-row",
    "sheet.mutation.move-columns",
    "sheet.mutation.move-cols",
    "sheet.mutation.move-rows",
    "sheet.mutation.remove-col",
    "sheet.mutation.remove-rows",
  ]),
  y = new Set([
    ...v,
    "sheet.mutation.insert-sheet",
    "sheet.mutation.remove-sheet",
  ]),
  b =
    /(?:^|\.)(?:insert|remove|delete|move|reorder)-(?:(?:row|rows|col|cols|column|columns)(?:-|$)|(?:sheet|sheets)$)/iu;
var x = class {
  constructor() {
    h(this, "type", n.UniverInstanceType["UNIVER_SHEET"]);
  }
  compare(_0x261ba3) {
    let _0x43a4c0 = S(_0x261ba3.leftData),
      _0x14da22 = S(_0x261ba3.rightData),
      _0x50dc8f = (0, e.asRecord)(
        _0x43a4c0 == null ? undefined : _0x43a4c0.sheets,
      ),
      _0x26be06 = (0, e.asRecord)(
        _0x14da22 == null ? undefined : _0x14da22.sheets,
      ),
      _0x7b84be = (0, e.withoutComparisonKeys)(
        "cellData",
        "rowData",
        "columnData",
      ),
      _0x19f944 = (0, e.recordComparisonEntries)(
        _0x50dc8f,
        _0x43a4c0 == null ? undefined : _0x43a4c0.sheetOrder,
        _0x7b84be,
      ),
      _0x2b5a87 = (0, e.recordComparisonEntries)(
        _0x26be06,
        _0x14da22 == null ? undefined : _0x14da22.sheetOrder,
        _0x7b84be,
      ),
      _0x5dfd9b = new Set([
        ...Object.keys(_0x50dc8f ?? {}),
        ...Object.keys(_0x26be06 ?? {}),
      ]),
      _0x17c2ee = W(_0x261ba3.leftChangesets, _0x43a4c0),
      _0x47e9bc = W(_0x261ba3.rightChangesets, _0x14da22),
      _0x568860 = [..._0x17c2ee, ..._0x47e9bc].some((_0x3174e0) =>
        v.has(_0x3174e0.id),
      ),
      _0x45cb49 = [..._0x5dfd9b].map((_0x425a5c) =>
        re(_0x425a5c, _0x50dc8f, _0x26be06, _0x17c2ee, _0x47e9bc, _0x568860),
      ),
      _0x2a22b8 = [
        ...ee(_0x43a4c0, _0x14da22, _0x50dc8f, _0x26be06),
        ..._0x45cb49.flatMap((_0x5ea9dd) => _0x5ea9dd.items),
        ..._.flatMap(([_0x480cd8, _0x44dc52]) =>
          te(_0x480cd8, _0x44dc52, _0x261ba3.leftData, _0x261ba3.rightData, [
            ..._0x5dfd9b,
          ]),
        ),
      ],
      _0x12d89c = [
        ...new Set([
          ...G(_0x17c2ee),
          ...G(_0x47e9bc),
          ..._0x45cb49.flatMap((_0x3f38d5) => _0x3f38d5.unsupportedMutationIds),
        ]),
      ].sort(),
      _0x531ffe = [..._0x5dfd9b].flatMap((_0x2d014f, _0x42b9f7) => {
        let _0x38cf5c = _0x2a22b8.filter(
          (_0x29f9a9) =>
            _0x29f9a9.parentStableId === _0x2d014f ||
            (_0x29f9a9.entityType === e.UnitComparisonEntityType["WORKSHEET"] &&
              _0x29f9a9.stableId === _0x2d014f),
        ).length;
        if (!_0x38cf5c) return [];
        let _0x2e241d = (0, e.asRecord)(
            _0x50dc8f == null ? undefined : _0x50dc8f[_0x2d014f],
          ),
          _0x305fc8 = (0, e.asRecord)(
            _0x26be06 == null ? undefined : _0x26be06[_0x2d014f],
          );
        return [
          {
            sheetId: _0x2d014f,
            name:
              typeof (_0x305fc8 == null ? undefined : _0x305fc8.name) ==
              "string"
                ? _0x305fc8.name
                : typeof (_0x2e241d == null ? undefined : _0x2e241d.name) ==
                    "string"
                  ? _0x2e241d.name
                  : _0x2d014f,
            changeCount: _0x38cf5c,
            rows: _0x45cb49[_0x42b9f7].rows,
            columns: _0x45cb49[_0x42b9f7].columns,
          },
        ];
      }),
      _0x1a5633 = _0x45cb49.some(
        (_0x140f00) => _0x140f00.snapshotAxisAmbiguous,
      ),
      _0x504ef2 = (0, e.buildScopedUnitComparison)({
        entityType: e.UnitComparisonEntityType["WORKSHEET"],
        items: _0x2a22b8,
        left: _0x19f944,
        right: _0x2b5a87,
      });
    return {
      items: _0x504ef2.items,
      supportedEntityTypes: g,
      scopes: _0x504ef2.scopes,
      productContext: {
        type: n.UniverInstanceType["UNIVER_SHEET"],
        sheets: _0x531ffe,
      },
      ...(_0x12d89c.length || _0x1a5633
        ? {
            unsupportedMutationIds: _0x12d89c,
            readiness: e.UnitComparisonReadiness["DEGRADED"],
            diagnosticCodes: [
              ...(_0x12d89c.length
                ? [
                    e.UnitComparisonDiagnosticCode[
                      "SHEET_STRUCTURAL_HISTORY_FALLBACK"
                    ],
                  ]
                : []),
              ...(_0x1a5633
                ? [
                    e.UnitComparisonDiagnosticCode[
                      "SHEET_SNAPSHOT_AXIS_IDENTITY_AMBIGUOUS"
                    ],
                  ]
                : []),
            ],
          }
        : {}),
    };
  }
};
function S(_0x2290a0) {
  let _0x420457 = (0, e.asRecord)(_0x2290a0);
  if (_0x420457 === undefined) return;
  let _0x116d77 = (0, e.asRecord)(_0x420457.styles) ?? {},
    { styles: _0x2100a3, ..._0x325030 } = w(
      _0x420457,
      _0x116d77,
      "defaultStyle",
    );
  return {
    ..._0x325030,
    ...(_0x420457.sheets === undefined
      ? {}
      : {
          sheets: T(_0x420457.sheets, (_0x28f2c9) => {
            let _0x54701d = (0, e.asRecord)(_0x28f2c9);
            return _0x54701d === undefined
              ? _0x28f2c9
              : {
                  ...w(_0x54701d, _0x116d77, "defaultStyle"),
                  ...(_0x54701d.cellData === undefined
                    ? {}
                    : {
                        cellData: T(_0x54701d.cellData, (_0x4f6810) =>
                          T(_0x4f6810, (_0x193872) => C(_0x193872, _0x116d77)),
                        ),
                      }),
                  ...(_0x54701d.rowData === undefined
                    ? {}
                    : {
                        rowData: T(_0x54701d.rowData, (_0x331019) =>
                          C(_0x331019, _0x116d77),
                        ),
                      }),
                  ...(_0x54701d.columnData === undefined
                    ? {}
                    : {
                        columnData: T(_0x54701d.columnData, (_0x236a1c) =>
                          C(_0x236a1c, _0x116d77),
                        ),
                      }),
                };
          }),
        }),
  };
}
function C(_0x58a77e, _0x107fdc) {
  let _0x4a56b9 = (0, e.asRecord)(_0x58a77e);
  return _0x4a56b9 === undefined ? _0x58a77e : w(_0x4a56b9, _0x107fdc, "s");
}
function w(_0xa226c7, _0x588989, _0x60316) {
  let _0x2886b2 = _0xa226c7[_0x60316];
  return typeof _0x2886b2 == "string" &&
    Object.prototype["hasOwnProperty"].call(_0x588989, _0x2886b2)
    ? { ..._0xa226c7, [_0x60316]: _0x588989[_0x2886b2] }
    : _0xa226c7;
}
function T(_0x1a66ac, _0x5620bc) {
  let _0x3aa06a = (0, e.asRecord)(_0x1a66ac);
  return _0x3aa06a === undefined
    ? _0x1a66ac
    : Object.fromEntries(
        Object.entries(_0x3aa06a).map(([_0x5329b5, _0x45f1b5]) => [
          _0x5329b5,
          _0x5620bc(_0x45f1b5),
        ]),
      );
}
function ee(_0x397510, _0x541699, _0x336d7a, _0x5125b2) {
  return [
    ...(0, e.buildSemanticComparisonItems)({
      entityType: e.UnitComparisonEntityType["WORKBOOK"],
      left:
        _0x397510 === undefined
          ? []
          : [
              {
                stableId: "workbook",
                position: 0,
                value: (0, e.withoutComparisonKeys)(
                  "sheets",
                  "sheetOrder",
                  "resources",
                  "rev",
                )(_0x397510),
              },
            ],
      right:
        _0x541699 === undefined
          ? []
          : [
              {
                stableId: "workbook",
                position: 0,
                value: (0, e.withoutComparisonKeys)(
                  "sheets",
                  "sheetOrder",
                  "resources",
                  "rev",
                )(_0x541699),
              },
            ],
    }),
    ...(0, e.buildSemanticComparisonItems)({
      entityType: e.UnitComparisonEntityType["WORKSHEET"],
      left: (0, e.recordComparisonEntries)(
        _0x336d7a,
        _0x397510 == null ? undefined : _0x397510.sheetOrder,
        (0, e.withoutComparisonKeys)("cellData", "rowData", "columnData"),
      ),
      right: (0, e.recordComparisonEntries)(
        _0x5125b2,
        _0x541699 == null ? undefined : _0x541699.sheetOrder,
        (0, e.withoutComparisonKeys)("cellData", "rowData", "columnData"),
      ),
    }),
  ];
}
function te(_0x4f3f70, _0x54e6f4, _0x351f6d, _0x27d296, _0x19cc20) {
  let _0x58ba38 = O(_0x351f6d, _0x54e6f4),
    _0x3e46f2 = O(_0x27d296, _0x54e6f4);
  return _0x19cc20.some(
    (_0x5a5caf) => A(_0x58ba38, _0x5a5caf) || A(_0x3e46f2, _0x5a5caf),
  )
    ? _0x19cc20.flatMap((_0x18f7db) =>
        (0, e.buildSemanticComparisonItems)({
          entityType: _0x4f3f70,
          parentStableId: _0x18f7db,
          left: j(_0x58ba38, _0x18f7db, _0x4f3f70),
          right: j(_0x3e46f2, _0x18f7db, _0x4f3f70),
        }).map(E),
      )
    : (0, e.buildSemanticComparisonItems)({
        entityType: _0x4f3f70,
        left: (0, e.resourceComparisonEntries)(_0x351f6d, _0x54e6f4),
        right: (0, e.resourceComparisonEntries)(_0x27d296, _0x54e6f4),
      }).map(E);
}
function E(_0x1a744d) {
  let _0x212129 = (_0x4dba22) => {
    var _0x5751bd;
    let _0x1ca5af = _0x1a744d.locations[_0x4dba22],
      _0x526bac = (0, e.asRecord)(
        (_0x5751bd = _0x1a744d.values) == null
          ? undefined
          : _0x5751bd[_0x4dba22],
      );
    if (_0x1ca5af === null || _0x526bac === undefined) return _0x1ca5af;
    let _0x1b612c = (0, e.asRecord)(_0x526bac.range),
      _0x2a15ed = Array.isArray(_0x526bac.ranges)
        ? _0x526bac.ranges
        : undefined,
      _0x114c94 = _0x1ca5af.target,
      _0x2bc8f2 = D(_0x1b612c),
      _0x29bf0e =
        _0x2a15ed == null
          ? undefined
          : _0x2a15ed.map(D).filter((_0x190818) => _0x190818 !== undefined);
    return _0x1b612c === undefined && _0x2a15ed === undefined
      ? _0x1ca5af
      : (_0x114c94 == null ? undefined : _0x114c94.kind) === "entity"
        ? {
            ..._0x1ca5af,
            target: {
              ..._0x114c94,
              kind: "sheet-range",
              ...(_0x2bc8f2 === undefined ? {} : { range: _0x2bc8f2 }),
              ...(_0x29bf0e === undefined ? {} : { ranges: _0x29bf0e }),
            },
          }
        : _0x1ca5af;
  };
  return {
    ..._0x1a744d,
    locations: { left: _0x212129("left"), right: _0x212129("right") },
  };
}
function D(_0x26365c) {
  let _0x4bdbc7 = (0, e.asRecord)(_0x26365c);
  if (!(
    _0x4bdbc7 === undefined ||
    !Number.isSafeInteger(_0x4bdbc7.startRow) ||
    !Number.isSafeInteger(_0x4bdbc7.endRow) ||
    !Number.isSafeInteger(_0x4bdbc7.startColumn) ||
    !Number.isSafeInteger(_0x4bdbc7.endColumn)
  ))
    return {
      startRow: _0x4bdbc7.startRow,
      endRow: _0x4bdbc7.endRow,
      startColumn: _0x4bdbc7.startColumn,
      endColumn: _0x4bdbc7.endColumn,
    };
}
function O(_0x8f671f, _0x3bb212) {
  var _0x20b4da;
  let _0x158fbc = k(_0x8f671f, _0x3bb212),
    _0x5af84a = (0, e.asRecord)(_0x158fbc);
  if (_0x5af84a === undefined) return _0x158fbc;
  let _0x1be141 =
    (_0x20b4da = (0, e.asRecord)(_0x8f671f)) == null ? undefined : _0x20b4da.id;
  if (
    _0x3bb212 === "SHEET_SPARKLINE_PLUGIN" &&
    typeof _0x1be141 == "string" &&
    (0, e.asRecord)(_0x5af84a[_0x1be141]) !== undefined
  )
    return _0x5af84a[_0x1be141];
  if (_0x3bb212 === "SHEET_TABLE_PLUGIN")
    return Object.fromEntries(
      Object.entries(_0x5af84a).map(([_0x85f781, _0xfcdf59]) => {
        let _0x32c267 = (0, e.asRecord)(_0xfcdf59);
        return Array.isArray(_0x32c267 == null ? undefined : _0x32c267.tables)
          ? [
              _0x85f781,
              _0x32c267.tables["map"]((_0x3c4f9a) => {
                let _0x5af4c4 = (0, e.asRecord)(_0x3c4f9a);
                return _0x5af4c4 === undefined
                  ? _0x3c4f9a
                  : {
                      ..._0x5af4c4,
                      columns: Array.isArray(_0x5af4c4.columns)
                        ? _0x5af4c4.columns["map"](
                            (0, e.withoutComparisonKeys)("id"),
                          )
                        : _0x5af4c4.columns,
                    };
              }),
            ]
          : [_0x85f781, _0xfcdf59];
      }),
    );
  if (
    _0x3bb212 === "SHEET_PIVOT_TABLE_PLUGIN" &&
    (0, e.asRecord)(_0x5af84a.pivotTableConfigs) !== undefined
  ) {
    let _0x59e219 = (0, e.asRecord)(_0x5af84a.pivotTableConfigs),
      _0x514842 = (0, e.asRecord)(_0x5af84a.dataFieldManagerConfig) ?? {},
      _0x4292a2 = {};
    for (let [_0x39df03, _0x55fb98] of Object.entries(_0x59e219)) {
      var _0x3138ef;
      let _0x73036f =
        (0, e.asRecord)(
          (_0x3138ef = (0, e.asRecord)(_0x514842[_0x39df03])) == null
            ? undefined
            : _0x3138ef.collections,
        ) ?? {};
      for (let [_0x7e0fef, _0x4688b5] of Object.entries(
        (0, e.asRecord)(_0x55fb98) ?? {},
      ))
        _0x4292a2[_0x7e0fef] = Object.fromEntries(
          Object.entries((0, e.asRecord)(_0x4688b5) ?? {}).map(
            ([_0x5cde25, _0x3171fb]) => [
              _0x5cde25,
              {
                ...(0, e.asRecord)(_0x3171fb),
                ...(_0x73036f[_0x5cde25] === undefined
                  ? {}
                  : { collection: _0x73036f[_0x5cde25] }),
              },
            ],
          ),
        );
    }
    return _0x4292a2;
  }
  return _0x158fbc;
}
function k(_0x23fcc0, _0x495829) {
  var _0x8e8790;
  let _0x3448cc = (
    Array.isArray(
      (_0x8e8790 = (0, e.asRecord)(_0x23fcc0)) == null
        ? undefined
        : _0x8e8790.resources,
    )
      ? (0, e.asRecord)(_0x23fcc0).resources
      : []
  )
    .map(e.asRecord)
    .find(
      (_0x4aebdf) =>
        (_0x4aebdf == null ? undefined : _0x4aebdf.name) === _0x495829,
    );
  if (typeof (_0x3448cc == null ? undefined : _0x3448cc.data) != "string")
    return _0x3448cc == null ? undefined : _0x3448cc.data;
  try {
    return JSON.parse(_0x3448cc.data);
  } catch {
    return _0x3448cc.data;
  }
}
function A(_0x51c30f, _0x4ab065) {
  let _0x577459 = (0, e.asRecord)(_0x51c30f);
  return (
    _0x577459 !== undefined &&
    (Object.prototype["hasOwnProperty"].call(_0x577459, _0x4ab065) ||
      Object.values(_0x577459).some((_0x40eb77) => {
        let _0x18ced1 = (0, e.asRecord)(_0x40eb77);
        return (
          (_0x18ced1 == null ? undefined : _0x18ced1.sheetId) === _0x4ab065 ||
          (_0x18ced1 == null ? undefined : _0x18ced1.subUnitId) === _0x4ab065
        );
      }))
  );
}
function j(_0x247cf1, _0x362cbd, _0x9f6b2c) {
  let _0x345e54 = (0, e.asRecord)(_0x247cf1);
  return _0x345e54 === undefined
    ? []
    : Object.prototype["hasOwnProperty"].call(_0x345e54, _0x362cbd)
      ? _0x9f6b2c === e.UnitComparisonEntityType["SHAPE"]
        ? ne(_0x345e54[_0x362cbd])
        : M(_0x345e54[_0x362cbd])
      : M(
          Object.fromEntries(
            Object.entries(_0x345e54).filter(([, _0x144f55]) => {
              let _0x57a025 = (0, e.asRecord)(_0x144f55);
              return (
                (_0x57a025 == null ? undefined : _0x57a025.sheetId) ===
                  _0x362cbd ||
                (_0x57a025 == null ? undefined : _0x57a025.subUnitId) ===
                  _0x362cbd
              );
            }),
          ),
        );
}
function ne(_0x35f551) {
  let _0x214378 = (0, e.asRecord)(_0x35f551),
    _0x32f0a9 = (0, e.asRecord)(_0x214378 == null ? undefined : _0x214378.data);
  return _0x32f0a9 === undefined
    ? M(_0x35f551)
    : (0, e.recordComparisonEntries)(
        _0x32f0a9,
        Array.isArray(_0x214378 == null ? undefined : _0x214378.order)
          ? _0x214378.order["filter"](
              (_0x1dac9b) => typeof _0x1dac9b == "string",
            )
          : undefined,
      );
}
function M(_0x58cedc) {
  return (
    Array.isArray(_0x58cedc)
      ? _0x58cedc.map((_0x498ed2, _0x4d8ff6) => [String(_0x4d8ff6), _0x498ed2])
      : (0, e.recordComparisonEntries)(_0x58cedc, undefined).map(
          (_0x4144df) => [_0x4144df.stableId, _0x4144df.value],
        )
  ).map(([_0x29478e, _0x3062b8], _0x23f6b3) => {
    var _0x27d1ea, _0x140844, _0x48fd18;
    let _0x20a618 = (0, e.asRecord)(_0x3062b8),
      _0x1e0111 =
        ["id", "ruleId", "cfId", "uid", "tableId", "chartId", "pivotTableId"]
          .map((_0x3b006a) =>
            _0x20a618 == null ? undefined : _0x20a618[_0x3b006a],
          )
          .find((_0x3233d8) => typeof _0x3233d8 == "string") ?? _0x29478e,
      _0x1e8369 = [
        _0x20a618 == null ? undefined : _0x20a618.name,
        _0x20a618 == null ? undefined : _0x20a618.title,
        (_0x27d1ea = (0, e.asRecord)(
          (_0x140844 = (0, e.asRecord)(
            (_0x48fd18 = (0, e.asRecord)(
              _0x20a618 == null ? undefined : _0x20a618.style,
            )) == null
              ? undefined
              : _0x48fd18.titles,
          )) == null
            ? undefined
            : _0x140844.title,
        )) == null
          ? undefined
          : _0x27d1ea.content,
      ].find((_0x268338) => typeof _0x268338 == "string");
    return {
      stableId: _0x1e0111,
      position: _0x23f6b3,
      value: _0x3062b8,
      ...(_0x1e8369 === undefined ? {} : { displayName: _0x1e8369 }),
    };
  });
}
function re(_0x4aa02c, _0x54b36f, _0x406cd7, _0x19d37b, _0x4dd5e2, _0x220876) {
  let _0x726ac5 = (0, e.asRecord)(
      _0x54b36f == null ? undefined : _0x54b36f[_0x4aa02c],
    ),
    _0x302b3e = (0, e.asRecord)(
      _0x406cd7 == null ? undefined : _0x406cd7[_0x4aa02c],
    ),
    _0x1f9fa7 = ie(
      _0x726ac5,
      _0x302b3e,
      _0x4aa02c,
      _0x19d37b,
      _0x4dd5e2,
      _0x220876,
    ),
    _0x404015 =
      _0x1f9fa7.leftRows === undefined
        ? N(_0x726ac5, _0x302b3e, "row")
        : undefined,
    _0x25ab55 =
      _0x1f9fa7.leftColumns === undefined
        ? N(_0x726ac5, _0x302b3e, "column")
        : undefined,
    _0x209bf1 = {
      ..._0x1f9fa7,
      ...(_0x404015 === undefined
        ? {}
        : { leftRows: _0x404015.left, rightRows: _0x404015.right }),
      ...(_0x25ab55 === undefined
        ? {}
        : { leftColumns: _0x25ab55.left, rightColumns: _0x25ab55.right }),
    };
  return {
    snapshotAxisAmbiguous:
      (_0x404015 == null ? undefined : _0x404015.ambiguous) === true ||
      (_0x25ab55 == null ? undefined : _0x25ab55.ambiguous) === true,
    items: [
      ...(0, e.buildSemanticComparisonItems)({
        entityType: e.UnitComparisonEntityType["CELL"],
        parentStableId: _0x4aa02c,
        left: R(
          _0x726ac5 == null ? undefined : _0x726ac5.cellData,
          _0x209bf1.leftRows,
          _0x209bf1.leftColumns,
        ),
        right: R(
          _0x302b3e == null ? undefined : _0x302b3e.cellData,
          _0x209bf1.rightRows,
          _0x209bf1.rightColumns,
        ),
      }),
      ...z(
        _0x4aa02c,
        "row",
        _0x726ac5 == null ? undefined : _0x726ac5.rowData,
        _0x302b3e == null ? undefined : _0x302b3e.rowData,
        _0x209bf1.leftRows,
        _0x209bf1.rightRows,
      ),
      ...z(
        _0x4aa02c,
        "column",
        _0x726ac5 == null ? undefined : _0x726ac5.columnData,
        _0x302b3e == null ? undefined : _0x302b3e.columnData,
        _0x209bf1.leftColumns,
        _0x209bf1.rightColumns,
      ),
    ],
    unsupportedMutationIds: _0x209bf1.unsupportedMutationIds,
    rows: I(
      _0x209bf1.leftRows,
      _0x209bf1.rightRows,
      X(_0x726ac5, "row"),
      X(_0x302b3e, "row"),
    ),
    columns: I(
      _0x209bf1.leftColumns,
      _0x209bf1.rightColumns,
      X(_0x726ac5, "column"),
      X(_0x302b3e, "column"),
    ),
  };
}
function N(_0x565b16, _0x2e00e9, _0x2958c5) {
  if (_0x565b16 === undefined || _0x2e00e9 === undefined) return;
  let _0x4d2e43 = P(_0x565b16, _0x2958c5),
    _0x5ae487 = P(_0x2e00e9, _0x2958c5);
  if (
    _0x4d2e43 === undefined ||
    _0x5ae487 === undefined ||
    _0x4d2e43 === _0x5ae487
  )
    return;
  let _0x2859cc = _0x4d2e43 < _0x5ae487,
    _0xc7a218 = Math.min(_0x4d2e43, _0x5ae487),
    _0x5e700d = Math.abs(_0x4d2e43 - _0x5ae487),
    _0x238b60 = F(_0x2859cc ? _0x565b16 : _0x2e00e9, _0x2958c5, _0xc7a218),
    _0x1870cf = F(
      _0x2859cc ? _0x2e00e9 : _0x565b16,
      _0x2958c5,
      _0xc7a218 + _0x5e700d,
    ),
    _0x345a9f = [
      ...new Set([
        ..._0x238b60.keys(),
        ..._0x1870cf.keys(),
        ...[..._0x1870cf.keys()].map((_0x2b43f3) => _0x2b43f3 - _0x5e700d),
      ]),
    ]
      .filter((_0xbbc7eb) => _0xbbc7eb >= 0 && _0xbbc7eb < _0xc7a218)
      .sort((_0x4d2839, _0x4f263d) => _0x4d2839 - _0x4f263d),
    _0x38bd0f = (_0x383974, _0x6283b9) =>
      Number(
        (_0x238b60.get(_0x383974) ?? "") !==
          (_0x1870cf.get(_0x383974 + _0x6283b9) ?? ""),
      ),
    _0x18edba = _0x345a9f.reduce(
      (_0x4edc19, _0x13089c) => _0x4edc19 + _0x38bd0f(_0x13089c, _0x5e700d),
      0,
    ),
    _0x803c38 = _0x18edba,
    _0x3ce90a = 0,
    _0x36267d = (_0x345a9f[0] ?? _0xc7a218) + 1;
  for (let _0x17295e = 0; _0x17295e < _0x345a9f.length; _0x17295e += 1) {
    let _0x508fd6 = _0x345a9f[_0x17295e];
    _0x18edba += _0x38bd0f(_0x508fd6, 0) - _0x38bd0f(_0x508fd6, _0x5e700d);
    let _0x349a7d = (_0x345a9f[_0x17295e + 1] ?? _0xc7a218) - _0x508fd6;
    _0x18edba < _0x803c38
      ? ((_0x803c38 = _0x18edba),
        (_0x3ce90a = _0x508fd6 + 1),
        (_0x36267d = _0x349a7d))
      : _0x18edba === _0x803c38 && (_0x36267d += _0x349a7d);
  }
  let _0x6ac2df =
      _0xc7a218 > 0
        ? [{ prefix: _0x2958c5 + ":snapshot", start: 0, count: _0xc7a218 }]
        : [],
    _0x422fcf = _0x6ac2df.map((_0x15ffb1) => ({ ..._0x15ffb1 }));
  return (
    q(_0x422fcf, _0x3ce90a, 0, [
      { prefix: _0x2958c5 + ":snapshot-extra", start: 0, count: _0x5e700d },
    ]),
    {
      left: _0x2859cc ? _0x6ac2df : _0x422fcf,
      right: _0x2859cc ? _0x422fcf : _0x6ac2df,
      ambiguous: _0x36267d !== 1 || _0x803c38 !== 0,
    }
  );
}
function P(_0x59ab40, _0x3d9a2f) {
  let _0x14dcb7 = _0x59ab40[_0x3d9a2f === "row" ? "rowCount" : "columnCount"];
  return typeof _0x14dcb7 == "number" &&
    Number.isSafeInteger(_0x14dcb7) &&
    _0x14dcb7 >= 0
    ? _0x14dcb7
    : undefined;
}
function F(_0x5b0e42, _0x5d855a, _0x44f9dd) {
  let _0x6e7783 = new Map();
  for (let [_0x4e036c, _0x179e89] of Object.entries(
    (0, e.asRecord)(_0x5b0e42.cellData) ?? {},
  ))
    for (let [_0x5d88c2, _0x3aa7af] of Object.entries(
      (0, e.asRecord)(_0x179e89) ?? {},
    )) {
      let _0x1a07c9 = Number(_0x5d855a === "row" ? _0x4e036c : _0x5d88c2),
        _0x2c9c1c = Number(_0x5d855a === "row" ? _0x5d88c2 : _0x4e036c);
      if (
        !Number.isInteger(_0x1a07c9) ||
        _0x1a07c9 < 0 ||
        _0x1a07c9 >= _0x44f9dd ||
        !Number.isInteger(_0x2c9c1c) ||
        _0x2c9c1c < 0
      )
        continue;
      let _0x3e299e = _0x6e7783.get(_0x1a07c9) ?? [];
      (_0x3e299e.push([_0x2c9c1c, _0x3aa7af]),
        _0x6e7783.set(_0x1a07c9, _0x3e299e));
    }
  let _0x2f5cd6 =
      (0, e.asRecord)(
        _0x5d855a === "row" ? _0x5b0e42.rowData : _0x5b0e42.columnData,
      ) ?? {},
    _0x2875ce = new Set([
      ..._0x6e7783.keys(),
      ...Object.keys(_0x2f5cd6).map(Number),
    ]);
  return new Map(
    [..._0x2875ce]
      .filter(
        (_0x3ab537) =>
          Number.isInteger(_0x3ab537) &&
          _0x3ab537 >= 0 &&
          _0x3ab537 < _0x44f9dd,
      )
      .map((_0x47fde4) => [
        _0x47fde4,
        (0, e.stableJson)({
          cells: (_0x6e7783.get(_0x47fde4) ?? []).sort(
            (_0x39a9fc, _0x206d48) => _0x39a9fc[0] - _0x206d48[0],
          ),
          dimension: _0x2f5cd6[_0x47fde4],
        }),
      ]),
  );
}
function I(_0x2ddb18, _0x336e6c, _0x451053, _0x987e66) {
  let _0x5493a7 =
      _0x2ddb18 ??
      (_0x451053 > 0
        ? [{ prefix: "coordinate", start: 0, count: _0x451053 }]
        : []),
    _0x3a1d5c =
      _0x336e6c ??
      (_0x987e66 > 0
        ? [{ prefix: "coordinate", start: 0, count: _0x987e66 }]
        : []),
    _0x16f7e0 = new Map();
  for (let _0x593462 of [..._0x5493a7, ..._0x3a1d5c]) {
    let _0x62e800 = _0x16f7e0.get(_0x593462.prefix) ?? new Set();
    (_0x62e800.add(_0x593462.start),
      _0x62e800.add(_0x593462.start + _0x593462.count),
      _0x16f7e0.set(_0x593462.prefix, _0x62e800));
  }
  let _0x1d4573 = new Map(
      [..._0x16f7e0].map(([_0x466b33, _0x24e41f]) => [
        _0x466b33,
        [..._0x24e41f].sort((_0x247f39, _0x578683) => _0x247f39 - _0x578683),
      ]),
    ),
    _0xb5f8d3 = (_0x2f9bda) => {
      let _0x48001b = 0;
      return _0x2f9bda.flatMap((_0x34d3fb) => {
        let _0x55b4c4 = _0x1d4573
            .get(_0x34d3fb.prefix)
            .filter(
              (_0x253aaa) =>
                _0x253aaa >= _0x34d3fb.start &&
                _0x253aaa <= _0x34d3fb.start + _0x34d3fb.count,
            ),
          _0x5c96e6 = _0x55b4c4
            .slice(0, -1)
            .map((_0x262ff5, _0x55598f) => ({
              id: _0x34d3fb.prefix + ":" + _0x262ff5,
              position: _0x48001b + _0x262ff5 - _0x34d3fb.start,
              count: _0x55b4c4[_0x55598f + 1] - _0x262ff5,
            }));
        return ((_0x48001b += _0x34d3fb.count), _0x5c96e6);
      });
    },
    _0x3a4d6b = _0xb5f8d3(_0x5493a7),
    _0x4066a0 = _0xb5f8d3(_0x3a1d5c);
  return (0, e.alignComparisonIdentities)(
    _0x3a4d6b.map((_0x25e6e6) => _0x25e6e6.id),
    _0x4066a0.map((_0x37ada7) => _0x37ada7.id),
  ).map((_0x42d64c) => ({
    leftStart:
      _0x42d64c.leftIndex === null
        ? null
        : _0x3a4d6b[_0x42d64c.leftIndex].position,
    rightStart:
      _0x42d64c.rightIndex === null
        ? null
        : _0x4066a0[_0x42d64c.rightIndex].position,
    count:
      _0x42d64c.leftIndex === null
        ? _0x4066a0[_0x42d64c.rightIndex].count
        : _0x3a4d6b[_0x42d64c.leftIndex].count,
  }));
}
function ie(_0x47a8e5, _0x1a09ee, _0x4353ec, _0x3fcf9f, _0x4d8615, _0x35c34a) {
  if (!_0x35c34a || _0x47a8e5 === undefined || _0x1a09ee === undefined)
    return { unsupportedMutationIds: [] };
  let _0x5acc60 = K(_0x47a8e5, _0x4353ec, "row", _0x3fcf9f),
    _0x4c15d7 = K(_0x1a09ee, _0x4353ec, "row", _0x4d8615),
    _0x1b7814 = K(_0x47a8e5, _0x4353ec, "column", _0x3fcf9f),
    _0x4162b7 = K(_0x1a09ee, _0x4353ec, "column", _0x4d8615),
    _0x2f45ea =
      _0x5acc60.identities !== undefined && _0x4c15d7.identities !== undefined,
    _0x28df0d =
      _0x1b7814.identities !== undefined && _0x4162b7.identities !== undefined;
  return {
    ...(_0x2f45ea
      ? { leftRows: _0x5acc60.identities, rightRows: _0x4c15d7.identities }
      : {}),
    ...(_0x28df0d
      ? {
          leftColumns: _0x1b7814.identities,
          rightColumns: _0x4162b7.identities,
        }
      : {}),
    unsupportedMutationIds: [
      ..._0x5acc60.unsupportedMutationIds,
      ..._0x4c15d7.unsupportedMutationIds,
      ..._0x1b7814.unsupportedMutationIds,
      ..._0x4162b7.unsupportedMutationIds,
      ...(_0x2f45ea ? [] : L(_0x3fcf9f, _0x4d8615, _0x4353ec, "row")),
      ...(_0x28df0d ? [] : L(_0x3fcf9f, _0x4d8615, _0x4353ec, "column")),
    ],
  };
}
function L(_0x3cc7c8, _0x32afc3, _0xbd0253, _0x3558e5) {
  return [..._0x3cc7c8, ..._0x32afc3]
    .filter(
      (_0x7715e) =>
        _0x7715e.params["subUnitId"] === _0xbd0253 && Y(_0x7715e.id, _0x3558e5),
    )
    .map((_0x5cc2e9) => _0x5cc2e9.id);
}
function R(_0x41159c, _0x328725, _0x53eb16) {
  let _0x2c7800 = (0, e.asRecord)(_0x41159c) ?? {};
  return Object.keys(_0x2c7800)
    .map(Number)
    .filter(Number.isInteger)
    .sort((_0x11fbce, _0x138578) => _0x11fbce - _0x138578)
    .flatMap((_0x52b05e) => {
      let _0x367aa2 = (0, e.asRecord)(_0x2c7800[String(_0x52b05e)]) ?? {};
      return Object.keys(_0x367aa2)
        .map(Number)
        .filter(Number.isInteger)
        .sort((_0x4c9845, _0x135708) => _0x4c9845 - _0x135708)
        .map((_0x4ec324) => {
          let _0x41fe43 = le(_0x52b05e, _0x4ec324);
          return {
            stableId:
              _0x328725 === undefined && _0x53eb16 === undefined
                ? _0x41fe43
                : (_0x328725 === undefined
                    ? "row:coordinate:" + _0x52b05e
                    : U(_0x328725, _0x52b05e)) +
                  "|" +
                  (_0x53eb16 === undefined
                    ? "column:coordinate:" + _0x4ec324
                    : U(_0x53eb16, _0x4ec324)),
            ...(_0x328725 === undefined && _0x53eb16 === undefined
              ? {}
              : { nativeStableId: _0x41fe43 }),
            position: _0x52b05e * 16384 + _0x4ec324,
            value: ae(_0x367aa2[String(_0x4ec324)]),
          };
        });
    });
}
function ae(_0x59799f) {
  let _0x23d649 = (0, e.asRecord)(_0x59799f);
  if (_0x23d649 === undefined) return _0x59799f;
  let {
    f: _0x32a5c9,
    s: _0x7384cd,
    t: _0x204a90,
    v: _0x5bf8de,
    ..._0x52bd4f
  } = _0x23d649;
  return {
    ..._0x52bd4f,
    ...(_0x5bf8de === undefined ? {} : { value: _0x5bf8de }),
    ...(_0x32a5c9 === undefined ? {} : { formula: _0x32a5c9 }),
    ...(_0x204a90 === undefined ? {} : { valueType: _0x204a90 }),
    ...(_0x7384cd === undefined ? {} : { style: _0x7384cd }),
  };
}
function z(_0x28f0b5, _0x3c36dc, _0x14306c, _0x1876af, _0x24677d, _0x130043) {
  let _0x8afd5a = new Map();
  for (let [_0x52a3a6, _0x5334ab] of [
    [_0x24677d, _0x14306c],
    [_0x130043, _0x1876af],
  ]) {
    for (let _0x55e217 of _0x52a3a6 ?? []) {
      let _0x45db26 = _0x8afd5a.get(_0x55e217.prefix) ?? new Set();
      (_0x45db26.add(_0x55e217.start),
        _0x45db26.add(_0x55e217.start + _0x55e217.count),
        _0x8afd5a.set(_0x55e217.prefix, _0x45db26));
    }
    for (let _0x2a21af of Object.keys((0, e.asRecord)(_0x5334ab) ?? {})
      .map(Number)
      .filter(Number.isSafeInteger)) {
      let _0x5fcad0 = H(_0x52a3a6, _0x2a21af);
      _0x5fcad0 !== undefined &&
        (_0x8afd5a.get(_0x5fcad0.prefix).add(_0x5fcad0.start),
        _0x8afd5a.get(_0x5fcad0.prefix).add(_0x5fcad0.start + 1));
    }
  }
  let _0x13898f = new Map(
      [..._0x8afd5a].map(([_0x3e0307, _0x5a1e20]) => [
        _0x3e0307,
        [..._0x5a1e20].sort((_0xb152c, _0x5f4f1f) => _0xb152c - _0x5f4f1f),
      ]),
    ),
    _0x40b742 = V(_0x14306c, _0x3c36dc, _0x24677d, _0x13898f),
    _0x22e30f = V(_0x1876af, _0x3c36dc, _0x130043, _0x13898f),
    _0x3fd6ab = new Map(
      _0x40b742.map((_0x1fe12e) => [_0x1fe12e.stableId, _0x1fe12e]),
    ),
    _0x4d31c5 = new Map(
      _0x22e30f.map((_0xcfc4fd) => [_0xcfc4fd.stableId, _0xcfc4fd]),
    );
  return (0, e.buildSemanticComparisonItems)({
    entityType: e.UnitComparisonEntityType["ROW_COLUMN"],
    parentStableId: _0x28f0b5,
    left: _0x40b742,
    right: _0x22e30f,
  }).map((_0x311093) => ({
    ..._0x311093,
    locations: {
      left: B(
        _0x311093.locations["left"],
        _0x3fd6ab.get(_0x311093.stableId),
        _0x3c36dc,
      ),
      right: B(
        _0x311093.locations["right"],
        _0x4d31c5.get(_0x311093.stableId),
        _0x3c36dc,
      ),
    },
  }));
}
function B(_0x45fad4, _0xa99097, _0x3cd187) {
  if (_0x45fad4 === null || _0xa99097 === undefined) return null;
  let _0x511614 = _0x45fad4.target;
  return (_0x511614 == null ? undefined : _0x511614.kind) === "entity"
    ? {
        ..._0x45fad4,
        target: {
          ..._0x511614,
          kind: "sheet-axis",
          axis: _0x3cd187,
          start: _0xa99097.position,
          end: _0xa99097.position + _0xa99097.count - 1,
        },
      }
    : _0x45fad4;
}
function V(_0x43dc83, _0x5c7623, _0x5f1004, _0x31a390) {
  let _0x589fb0 = (0, e.asRecord)(_0x43dc83) ?? {};
  if (_0x5f1004 === undefined)
    return Object.keys(_0x589fb0)
      .map(Number)
      .filter(Number.isSafeInteger)
      .sort((_0x1229aa, _0x51cf25) => _0x1229aa - _0x51cf25)
      .map((_0x4f350e) => ({
        stableId: _0x5c7623 + ":" + _0x4f350e,
        position: _0x4f350e,
        count: 1,
        value: _0x589fb0[String(_0x4f350e)] ?? {},
      }));
  let _0x89924 = 0;
  return _0x5f1004.flatMap((_0x57e50f) => {
    let _0x1dca63 = _0x31a390
        .get(_0x57e50f.prefix)
        .filter(
          (_0x42358b) =>
            _0x42358b >= _0x57e50f.start &&
            _0x42358b <= _0x57e50f.start + _0x57e50f.count,
        ),
      _0x17542c = _0x1dca63.slice(0, -1).map((_0x30d882, _0x460621) => {
        let _0x316f86 = _0x1dca63[_0x460621 + 1] - _0x30d882,
          _0x1286c0 = _0x89924 + _0x30d882 - _0x57e50f.start;
        return {
          stableId:
            _0x316f86 === 1
              ? _0x57e50f.prefix + ":" + _0x30d882
              : _0x57e50f.prefix +
                ":" +
                _0x30d882 +
                "-" +
                (_0x30d882 + _0x316f86 - 1),
          nativeStableId: _0x5c7623 + ":" + _0x1286c0,
          position: _0x1286c0,
          count: _0x316f86,
          value: _0x589fb0[String(_0x1286c0)] ?? {},
        };
      });
    return ((_0x89924 += _0x57e50f.count), _0x17542c);
  });
}
function H(_0x1a63c9, _0x22b8ca) {
  if (_0x22b8ca < 0) return;
  let _0x279329 = _0x22b8ca;
  for (let _0x36aafb of _0x1a63c9 ?? []) {
    if (_0x279329 < _0x36aafb.count)
      return {
        prefix: _0x36aafb.prefix,
        start: _0x36aafb.start + _0x279329,
        count: 1,
      };
    _0x279329 -= _0x36aafb.count;
  }
}
function U(_0x414846, _0x1952e3) {
  let _0x3db7fb = H(_0x414846, _0x1952e3);
  return _0x3db7fb === undefined
    ? undefined
    : _0x3db7fb.prefix + ":" + _0x3db7fb.start;
}
function W(_0x12d2ba, _0x5f49ba) {
  let _0x1852ef = 0,
    _0x310000;
  return _0x12d2ba.flatMap((_0x836e98) => {
    var _0x226108;
    let _0xaaf941 =
      (_0x226108 = (0, e.asRecord)(_0x836e98)) == null
        ? undefined
        : _0x226108.mutations;
    return (Array.isArray(_0xaaf941) ? _0xaaf941 : []).flatMap((_0x23c9f3) => {
      let _0x2d0eb = (0, e.asRecord)(_0x23c9f3);
      if (typeof (_0x2d0eb == null ? undefined : _0x2d0eb.id) != "string")
        return [];
      _0x310000 ??= Q(
        (0, e.stableJson)({ changesets: _0x12d2ba, snapshot: _0x5f49ba }),
      );
      let _0x4bfd93 = _0x1852ef;
      return (
        (_0x1852ef += 1),
        [
          {
            branchIdentity: _0x310000,
            id: _0x2d0eb.id,
            params: oe(_0x2d0eb.data),
            sequence: _0x4bfd93,
          },
        ]
      );
    });
  });
}
function oe(_0x12bfba) {
  if (typeof _0x12bfba != "string") return (0, e.asRecord)(_0x12bfba) ?? {};
  try {
    return (0, e.asRecord)(JSON.parse(_0x12bfba)) ?? {};
  } catch {
    return {};
  }
}
function G(_0x49d718) {
  return _0x49d718
    .map((_0x274d8c) => _0x274d8c.id)
    .filter((_0x45921b) => b.test(_0x45921b) && !y.has(_0x45921b));
}
function K(_0x8b743a, _0x503067, _0x41413e, _0x2cdb87) {
  let _0x362b9e = _0x2cdb87.filter(
      (_0x20ae62) =>
        _0x20ae62.params["subUnitId"] === _0x503067 &&
        Y(_0x20ae62.id, _0x41413e),
    ),
    _0x4beb52 = X(_0x8b743a, _0x41413e),
    _0x2a8260 = _0x2cdb87.filter(
      (_0x4f538b) =>
        _0x4f538b.id !== "sheet.mutation.insert-sheet" &&
        _0x4f538b.id !== "sheet.mutation.remove-sheet" &&
        (_0x4f538b.params["subUnitId"] === undefined ||
          _0x4f538b.params["subUnitId"] === _0x503067) &&
        b.test(_0x4f538b.id) &&
        (!y.has(_0x4f538b.id) ||
          typeof _0x4f538b.params["subUnitId"] != "string"),
    );
  if (_0x2a8260.length > 0)
    return {
      unsupportedMutationIds: _0x2a8260.map((_0x1cff13) => _0x1cff13.id),
    };
  let _0x3bd5b0 =
    _0x4beb52 -
    _0x362b9e.reduce((_0x2638f0, _0x3ab0a4) => {
      let _0x2321b8 = Z(_0x3ab0a4.params["range"], _0x41413e);
      if (_0x2321b8 === undefined) return _0x2638f0;
      let _0x8c0523 = _0x2321b8.end - _0x2321b8.start + 1;
      return _0x3ab0a4.id["startsWith"]("sheet.mutation.insert-")
        ? _0x2638f0 + _0x8c0523
        : _0x3ab0a4.id["startsWith"]("sheet.mutation.remove-")
          ? _0x2638f0 - _0x8c0523
          : _0x2638f0;
    }, 0);
  if (
    !Number.isSafeInteger(_0x3bd5b0) ||
    _0x3bd5b0 < 0 ||
    !Number.isSafeInteger(_0x4beb52)
  )
    return {
      unsupportedMutationIds: _0x362b9e.map((_0x51e77d) => _0x51e77d.id),
    };
  let _0x3703a8 =
      _0x3bd5b0 > 0
        ? [{ prefix: _0x41413e + ":base", start: 0, count: _0x3bd5b0 }]
        : [],
    _0x42f1c9 = _0x3bd5b0;
  for (let _0x42f7f8 of _0x362b9e) {
    if (_0x42f7f8.id["startsWith"]("sheet.mutation.insert-")) {
      let _0x3b84bc = Z(_0x42f7f8.params["range"], _0x41413e);
      if (_0x3b84bc === undefined || _0x3b84bc.start > _0x42f1c9)
        return { unsupportedMutationIds: [_0x42f7f8.id] };
      let _0x17c478 = _0x3b84bc.end - _0x3b84bc.start + 1;
      (q(_0x3703a8, _0x3b84bc.start, 0, [
        {
          prefix: _0x41413e + ":insert:" + ce(_0x42f7f8),
          start: 0,
          count: _0x17c478,
        },
      ]),
        (_0x42f1c9 += _0x17c478));
      continue;
    }
    if (_0x42f7f8.id["startsWith"]("sheet.mutation.remove-")) {
      let _0x4ffe6b = Z(_0x42f7f8.params["range"], _0x41413e);
      if (_0x4ffe6b === undefined || _0x4ffe6b.end >= _0x42f1c9)
        return { unsupportedMutationIds: [_0x42f7f8.id] };
      let _0x59b3b2 = _0x4ffe6b.end - _0x4ffe6b.start + 1;
      (q(_0x3703a8, _0x4ffe6b.start, _0x59b3b2, []), (_0x42f1c9 -= _0x59b3b2));
      continue;
    }
    if (!se(_0x3703a8, _0x42f7f8, _0x41413e, _0x42f1c9))
      return { unsupportedMutationIds: [_0x42f7f8.id] };
  }
  return _0x42f1c9 === _0x4beb52
    ? { identities: _0x3703a8, unsupportedMutationIds: [] }
    : { unsupportedMutationIds: _0x362b9e.map((_0x542c6c) => _0x542c6c.id) };
}
function se(_0x56d6c4, _0x4db9d0, _0xc741bb, _0x1a91b0) {
  let _0x5dc0ac = Z(_0x4db9d0.params["sourceRange"], _0xc741bb),
    _0x455a30 = Z(_0x4db9d0.params["targetRange"], _0xc741bb);
  if (
    _0x5dc0ac === undefined ||
    _0x455a30 === undefined ||
    _0x5dc0ac.end >= _0x1a91b0 ||
    _0x455a30.start > _0x1a91b0 ||
    (_0x455a30.start > _0x5dc0ac.start && _0x455a30.start <= _0x5dc0ac.end)
  )
    return false;
  let _0x514ff6 = _0x5dc0ac.end - _0x5dc0ac.start + 1,
    _0x290dd1 = q(_0x56d6c4, _0x5dc0ac.start, _0x514ff6, []);
  return (
    q(
      _0x56d6c4,
      _0x455a30.start > _0x5dc0ac.start
        ? _0x455a30.start - _0x514ff6
        : _0x455a30.start,
      0,
      _0x290dd1,
    ),
    true
  );
}
function q(_0xf7564f, _0x4db561, _0x77eea5, _0x395049) {
  let _0x33f910 = J(_0xf7564f, _0x4db561),
    _0x53e6b9 = J(_0xf7564f, _0x4db561 + _0x77eea5);
  return _0xf7564f.splice(_0x33f910, _0x53e6b9 - _0x33f910, ..._0x395049);
}
function J(_0x1d2c8d, _0x53dcd7) {
  let _0x457e59 = _0x53dcd7;
  for (let _0xd7256b = 0; _0xd7256b < _0x1d2c8d.length; _0xd7256b += 1) {
    let _0x41a3a8 = _0x1d2c8d[_0xd7256b];
    if (_0x457e59 === 0) return _0xd7256b;
    if (_0x457e59 < _0x41a3a8.count)
      return (
        _0x1d2c8d.splice(
          _0xd7256b,
          1,
          { ..._0x41a3a8, count: _0x457e59 },
          {
            ..._0x41a3a8,
            start: _0x41a3a8.start + _0x457e59,
            count: _0x41a3a8.count - _0x457e59,
          },
        ),
        _0xd7256b + 1
      );
    _0x457e59 -= _0x41a3a8.count;
  }
  return _0x1d2c8d.length;
}
function Y(_0x2a68a2, _0x815710) {
  return _0x815710 === "row"
    ? _0x2a68a2 === "sheet.mutation.insert-row" ||
        _0x2a68a2 === "sheet.mutation.remove-rows" ||
        _0x2a68a2 === "sheet.mutation.move-rows"
    : _0x2a68a2 === "sheet.mutation.insert-col" ||
        _0x2a68a2 === "sheet.mutation.remove-col" ||
        _0x2a68a2 === "sheet.mutation.move-columns" ||
        _0x2a68a2 === "sheet.mutation.move-cols";
}
function X(_0x4f02b4, _0x426ab1) {
  let _0x499464 =
      _0x4f02b4 == null
        ? undefined
        : _0x4f02b4[_0x426ab1 === "row" ? "rowCount" : "columnCount"],
    _0x27947f = (0, e.asRecord)(
      _0x4f02b4 == null
        ? undefined
        : _0x4f02b4[_0x426ab1 === "row" ? "rowData" : "columnData"],
    ),
    _0x13ac4f = (0, e.asRecord)(
      _0x4f02b4 == null ? undefined : _0x4f02b4.cellData,
    ),
    _0x9b237 =
      _0x426ab1 === "row"
        ? Object.keys(_0x13ac4f ?? {}).map(Number)
        : Object.values(_0x13ac4f ?? {}).flatMap((_0x25d649) =>
            Object.keys((0, e.asRecord)(_0x25d649) ?? {}).map(Number),
          );
  return [...Object.keys(_0x27947f ?? {}).map(Number), ..._0x9b237]
    .filter(Number.isInteger)
    .reduce(
      (_0x1dff54, _0x1d9901) => Math.max(_0x1dff54, _0x1d9901 + 1),
      typeof _0x499464 == "number" ? _0x499464 : 0,
    );
}
function Z(_0x139f50, _0x364476) {
  let _0x573c39 = (0, e.asRecord)(_0x139f50),
    _0x3dcb74 =
      _0x573c39 == null
        ? undefined
        : _0x573c39[_0x364476 === "row" ? "startRow" : "startColumn"],
    _0x6a763c =
      _0x573c39 == null
        ? undefined
        : _0x573c39[_0x364476 === "row" ? "endRow" : "endColumn"];
  return typeof _0x3dcb74 == "number" &&
    typeof _0x6a763c == "number" &&
    Number.isSafeInteger(_0x3dcb74) &&
    Number.isSafeInteger(_0x6a763c) &&
    _0x3dcb74 >= 0 &&
    _0x6a763c >= _0x3dcb74
    ? { start: _0x3dcb74, end: _0x6a763c }
    : undefined;
}
function ce(_0x16589d) {
  return Q(
    (0, e.stableJson)({
      id: _0x16589d.id,
      branchIdentity: _0x16589d.branchIdentity,
      sequence: _0x16589d.sequence,
      subUnitId: _0x16589d.params["subUnitId"],
      range: _0x16589d.params["range"],
      sourceRange: _0x16589d.params["sourceRange"],
      targetRange: _0x16589d.params["targetRange"],
    }),
  );
}
function Q(_0x13b2b9) {
  let _0x2e1d43 = 2166136261;
  for (let _0xc9c193 = 0; _0xc9c193 < _0x13b2b9.length; _0xc9c193 += 1)
    ((_0x2e1d43 ^= _0x13b2b9.charCodeAt(_0xc9c193)),
      (_0x2e1d43 = Math.imul(_0x2e1d43, 16777619)));
  return (_0x2e1d43 >>> 0).toString(36);
}
function le(_0x17661f, _0x10770c) {
  let _0x45afbf = Math.max(0, _0x10770c),
    _0x5494f4 = "";
  do
    ((_0x5494f4 = String.fromCharCode(65 + (_0x45afbf % 26)) + _0x5494f4),
      (_0x45afbf = Math.floor(_0x45afbf / 26) - 1));
  while (_0x45afbf >= 0);
  return "" + _0x5494f4 + (_0x17661f + 1);
}
let $ = class extends n.Plugin {
  constructor(_0x42f8c5 = a, _0x272482, _0x5e13ba) {
    (super(),
      (this._config = _0x42f8c5),
      (this._injector = _0x272482),
      (this._configService = _0x5e13ba));
    let { ..._0x43d021 } = (0, n.merge)({}, a, this._config);
    this._configService["setConfig"](i, _0x43d021);
  }
  onStarting() {
    ((0, n.registerDependencies)(this._injector, [[u], [x]]),
      this.disposeWithMe(
        this._injector["get"](e.UnitComparisonAdapterRegistryService).register(
          this._injector["get"](x),
        ),
      ),
      this._injector["get"](u));
  }
};
(h($, "pluginName", "UNIVER_SHEETS_HISTORY_PLUGIN"),
  h($, "packageName", o),
  h($, "version", s),
  h($, "type", n.UniverInstanceType["UNIVER_SHEET"]),
  ($ = l(
    [
      (0, n.DependentOn)(
        t.UniverLicensePlugin,
        e.UniverEditHistoryPlugin,
        r.UniverSheetsPlugin,
      ),
      c(1, (0, n.Inject)(n.Injector)),
      c(2, n.IConfigService),
    ],
    $,
  )),
  (exports.SHEETS_HISTORY_PLUGIN_CONFIG_KEY = i),
  (exports.SheetsUnitComparisonAdapter = x),
  Object.defineProperty(exports, "UniverSheetsHistoryPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
