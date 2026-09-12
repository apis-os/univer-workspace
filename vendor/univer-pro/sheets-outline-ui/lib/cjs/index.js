Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/ui"),
  t = require("@univerjs-pro/sheets-outline"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets"),
  i = require("rxjs"),
  a = require("@univerjs/design"),
  o = require("react/jsx-runtime"),
  s = require("@univerjs-pro/license"),
  c = require("@univerjs/engine-render"),
  l = require("@univerjs/sheets-ui"),
  u = require("@univerjs/icons");
const d = {
    id: "sheet.command.outline-selected-dimension",
    type: n.CommandType["COMMAND"],
    handler: (_0x3ff0c0, _0x58b15e) =>
      m(
        _0x3ff0c0,
        (_0x58b15e == null ? undefined : _0x58b15e.value) ===
          t.DimensionOutlineAxis["ROW"] ||
          (_0x58b15e == null ? undefined : _0x58b15e.value) ===
            t.DimensionOutlineAxis["COLUMN"]
          ? _0x58b15e.value
          : undefined,
      ),
  },
  f = {
    id: "sheet.command.outline-selected-rows",
    type: n.CommandType["COMMAND"],
    handler: (_0x575aa0) => m(_0x575aa0, t.DimensionOutlineAxis["ROW"]),
  },
  p = {
    id: "sheet.command.outline-selected-columns",
    type: n.CommandType["COMMAND"],
    handler: (_0x7131) => m(_0x7131, t.DimensionOutlineAxis["COLUMN"]),
  };
function m(_0x4add9f, _0xb32fdc) {
  let _0x3ceafd = h(_0x4add9f.get(r.SheetsSelectionsService), _0xb32fdc);
  if (!_0x3ceafd) return false;
  let _0x568aac = (0, r.getSheetCommandTarget)(
    _0x4add9f.get(n.IUniverInstanceService),
  );
  return _0x568aac
    ? _0x4add9f
        .get(n.ICommandService)
        .executeCommand(t.AddDimensionOutlineCommand["id"], {
          unitId: _0x568aac.unitId,
          subUnitId: _0x568aac.subUnitId,
          axis: _0x3ceafd.axis,
          start: _0x3ceafd.start,
          end: _0x3ceafd.end,
        })
    : false;
}
function h(_0x27a5c2, _0x31f69c) {
  let _0x5cea69 = _0x27a5c2.getCurrentSelections();
  if (!_0x5cea69 || _0x5cea69.length !== 1) return null;
  let _0x19522e = _0x5cea69[0].range;
  return _0x31f69c === t.DimensionOutlineAxis["ROW"]
    ? { axis: _0x31f69c, start: _0x19522e.startRow, end: _0x19522e.endRow }
    : _0x31f69c === t.DimensionOutlineAxis["COLUMN"]
      ? {
          axis: _0x31f69c,
          start: _0x19522e.startColumn,
          end: _0x19522e.endColumn,
        }
      : _0x19522e.rangeType === n.RANGE_TYPE["ROW"]
        ? {
            axis: t.DimensionOutlineAxis["ROW"],
            start: _0x19522e.startRow,
            end: _0x19522e.endRow,
          }
        : _0x19522e.rangeType === n.RANGE_TYPE["COLUMN"]
          ? {
              axis: t.DimensionOutlineAxis["COLUMN"],
              start: _0x19522e.startColumn,
              end: _0x19522e.endColumn,
            }
          : null;
}
const g = {
    id: "sheet.command.clear-selected-dimension-outlines",
    type: n.CommandType["COMMAND"],
    handler: (_0x96e0e6, _0xa09359) =>
      y(
        _0x96e0e6,
        (_0xa09359 == null ? undefined : _0xa09359.value) ===
          t.DimensionOutlineAxis["ROW"] ||
          (_0xa09359 == null ? undefined : _0xa09359.value) ===
            t.DimensionOutlineAxis["COLUMN"]
          ? _0xa09359.value
          : undefined,
      ),
  },
  _ = {
    id: "sheet.command.clear-selected-rows-outlines",
    type: n.CommandType["COMMAND"],
    handler: (_0x1b9656) => y(_0x1b9656, t.DimensionOutlineAxis["ROW"]),
  },
  v = {
    id: "sheet.command.clear-selected-columns-outlines",
    type: n.CommandType["COMMAND"],
    handler: (_0x5a1113) => y(_0x5a1113, t.DimensionOutlineAxis["COLUMN"]),
  };
function y(_0x54dc84, _0x558402) {
  let _0x68d7b2 = h(_0x54dc84.get(r.SheetsSelectionsService), _0x558402);
  if (!_0x68d7b2) return false;
  let _0x346071 = (0, r.getSheetCommandTarget)(
    _0x54dc84.get(n.IUniverInstanceService),
  );
  return _0x346071
    ? _0x54dc84
        .get(n.ICommandService)
        .executeCommand(t.ClearDimensionOutlinesCommand["id"], {
          unitId: _0x346071.unitId,
          subUnitId: _0x346071.subUnitId,
          axis: _0x68d7b2.axis,
          start: _0x68d7b2.start,
          end: _0x68d7b2.end,
        })
    : false;
}
const b = "sheet-outline-action-dialog";
function ee(_0x402b5d) {
  let {
      rowLabel: _0x48e92c,
      columnLabel: _0x4ca11d,
      onSelect: _0x222eb1,
      onCancel: _0x49684f,
    } = _0x402b5d,
    _0x391a28 = (0, e.useDependency)(n.LocaleService);
  return (0, o.jsxs)("div", {
    className: "univer-grid univer-gap-4",
    children: [
      (0, o.jsxs)("div", {
        className: "univer-grid univer-gap-2",
        children: [
          (0, o.jsx)(a.Button, {
            onClick: () => _0x222eb1(t.DimensionOutlineAxis["ROW"]),
            children: _0x48e92c,
          }),
          (0, o.jsx)(a.Button, {
            onClick: () => _0x222eb1(t.DimensionOutlineAxis["COLUMN"]),
            children: _0x4ca11d,
          }),
        ],
      }),
      (0, o.jsx)("footer", {
        className: "univer-flex univer-justify-end",
        children: (0, o.jsx)(a.Button, {
          onClick: _0x49684f,
          children: _0x391a28.t("sheets-outline-ui.cancel"),
        }),
      }),
    ],
  });
}
const x = {
    id: "sheet.command.outline-selected-dimension-shortcut",
    type: n.CommandType["COMMAND"],
    handler: (_0x82321f) => re(_0x82321f, "group"),
  },
  S = {
    id: "sheet.command.clear-selected-dimension-outlines-shortcut",
    type: n.CommandType["COMMAND"],
    handler: (_0x2e16be) => re(_0x2e16be, "ungroup"),
  },
  te = {
    group: {
      [t.DimensionOutlineAxis["ROW"]]: f.id,
      [t.DimensionOutlineAxis["COLUMN"]]: p.id,
    },
    ungroup: {
      [t.DimensionOutlineAxis["ROW"]]: _.id,
      [t.DimensionOutlineAxis["COLUMN"]]: v.id,
    },
  },
  ne = {
    group: {
      [t.DimensionOutlineAxis["ROW"]]: "sheets-outline-ui.groupRows",
      [t.DimensionOutlineAxis["COLUMN"]]: "sheets-outline-ui.groupColumns",
    },
    ungroup: {
      [t.DimensionOutlineAxis["ROW"]]: "sheets-outline-ui.ungroupRows",
      [t.DimensionOutlineAxis["COLUMN"]]: "sheets-outline-ui.ungroupColumns",
    },
  };
function re(_0x3b9339, _0x23fe5a) {
  let _0x354d5b = _0x3b9339
    .get(r.SheetsSelectionsService)
    .getCurrentSelections();
  if (!_0x354d5b || _0x354d5b.length !== 1) return false;
  let _0x1a0848 = (0, r.getSheetCommandTarget)(
    _0x3b9339.get(n.IUniverInstanceService),
  );
  if (
    !_0x1a0848 ||
    !(0, t.hasDimensionOutlineViewPermission)(
      _0x3b9339,
      _0x1a0848.unitId,
      _0x1a0848.subUnitId,
    )
  )
    return false;
  let _0x1c5a75 = _0x354d5b[0].range;
  return _0x1c5a75.rangeType === n.RANGE_TYPE["ROW"]
    ? C(_0x3b9339, _0x23fe5a, t.DimensionOutlineAxis["ROW"])
    : _0x1c5a75.rangeType === n.RANGE_TYPE["COLUMN"]
      ? C(_0x3b9339, _0x23fe5a, t.DimensionOutlineAxis["COLUMN"])
      : ie(_0x3b9339, _0x23fe5a);
}
async function ie(_0x26c7a6, _0x4111c1) {
  let _0x360c57 = await ae(_0x26c7a6, _0x4111c1);
  return _0x360c57 ? C(_0x26c7a6, _0x4111c1, _0x360c57) : false;
}
function C(_0x432b1b, _0x418277, _0x18d48a) {
  return !!_0x432b1b
    .get(n.ICommandService)
    .executeCommand(te[_0x418277][_0x18d48a], { value: _0x18d48a });
}
function ae(_0x18aa08, _0x5c42ee) {
  let _0x157178 = _0x18aa08.get(e.IDialogService),
    _0x285f1d = _0x18aa08.has(e.ILayoutService)
      ? _0x18aa08.get(e.ILayoutService)
      : null,
    _0x2db40c = _0x18aa08.get(n.LocaleService),
    _0x415300 = _0x18aa08.get(r.SheetsSelectionsService),
    _0xfceb0a = h(_0x415300, t.DimensionOutlineAxis["ROW"]),
    _0x55407 = h(_0x415300, t.DimensionOutlineAxis["COLUMN"]);
  return !_0xfceb0a || !_0x55407
    ? Promise.resolve(null)
    : new Promise((_0x4625b4) => {
        let _0x10cec1 = false,
          _0x1076ff = null,
          _0x1fd93b = (_0x3f355e) => {
            _0x10cec1 ||
              ((_0x10cec1 = true),
              _0x1076ff == null || _0x1076ff.dispose(),
              oe(_0x285f1d),
              _0x4625b4(_0x3f355e));
          };
        ((_0x1076ff = _0x157178.open({
          id: b,
          title: {
            title: _0x2db40c.t(
              _0x5c42ee === "group"
                ? "sheets-outline-ui.group"
                : "sheets-outline-ui.ungroup",
            ),
          },
          width: 360,
          children: {
            label: {
              name: b,
              props: {
                rowLabel: w(
                  _0x2db40c,
                  _0x5c42ee,
                  t.DimensionOutlineAxis["ROW"],
                  _0xfceb0a.start,
                  _0xfceb0a.end,
                ),
                columnLabel: w(
                  _0x2db40c,
                  _0x5c42ee,
                  t.DimensionOutlineAxis["COLUMN"],
                  _0x55407.start,
                  _0x55407.end,
                ),
                onSelect: (_0x4f9505) => _0x1fd93b(_0x4f9505),
                onCancel: () => _0x1fd93b(null),
              },
            },
          },
          onClose: () => _0x1fd93b(null),
        })),
          _0x10cec1 && _0x1076ff.dispose());
      });
}
function oe(_0x301b1e) {
  _0x301b1e &&
    (queueMicrotask(() => _0x301b1e.focus()),
    setTimeout(() => _0x301b1e.focus(), 0));
}
function w(_0x3fccc1, _0xfdf059, _0x536cae, _0xdc2e94, _0x14dbc6) {
  let _0x12c3e9 = ne[_0xfdf059][_0x536cae];
  return _0x536cae === t.DimensionOutlineAxis["ROW"]
    ? _0x3fccc1.t(_0x12c3e9, "" + (_0xdc2e94 + 1), "" + (_0x14dbc6 + 1))
    : _0x3fccc1.t(
        _0x12c3e9,
        n.Tools["chatAtABC"](_0xdc2e94),
        n.Tools["chatAtABC"](_0x14dbc6),
      );
}
const T = "sheet.toolbar.dimension-outline.group";
function se(_0x316a0c) {
  return {
    id: T,
    type: e.MenuItemType["SELECTOR"],
    icon: "GroupingDoubleIcon",
    tooltip: "sheets-outline-ui.group",
    selections: ce(_0x316a0c),
    hidden$: pe(_0x316a0c),
    disabled$: me(_0x316a0c),
  };
}
function ce(_0x2d5ad4) {
  return O(_0x2d5ad4).pipe((0, i.map)(() => ve(_0x2d5ad4)));
}
const E = "sheet.contextMenu.dimension-outline";
function le(_0x1385ee) {
  return de(_0x1385ee, t.DimensionOutlineAxis["ROW"]);
}
function ue(_0x4e39d1) {
  return de(_0x4e39d1, t.DimensionOutlineAxis["COLUMN"]);
}
function de(_0x183b27, _0x4c1955) {
  return {
    id: E,
    type: e.MenuItemType["SELECTOR"],
    icon: "GroupingDoubleIcon",
    title: "sheets-outline-ui.group",
    tooltip: "sheets-outline-ui.group",
    selections: fe(_0x183b27, _0x4c1955),
    hidden$: pe(_0x183b27),
    disabled$: me(_0x183b27),
  };
}
function fe(_0x118ef0, _0x46505a) {
  return O(_0x118ef0).pipe((0, i.map)(() => ye(_0x118ef0, [_0x46505a])));
}
function pe(_0x498f31) {
  return (0, i.combineLatest)([
    (0, e.getMenuHiddenObservable)(
      _0x498f31,
      n.UniverInstanceType["UNIVER_SHEET"],
    ),
    O(_0x498f31),
  ]).pipe((0, i.map)(([_0x681e03]) => _0x681e03 || !he(_0x498f31)));
}
function me(_0x257311) {
  return O(_0x257311).pipe(
    (0, i.switchMap)(() => {
      let _0x1dc021 = (0, r.getSheetCommandTarget)(
        _0x257311.get(n.IUniverInstanceService),
      );
      return _0x1dc021
        ? (0, t.getDimensionOutlineViewPermission$)(
            _0x257311,
            _0x1dc021.unitId,
            _0x1dc021.subUnitId,
          ).pipe((0, i.map)((_0x305bd5) => !_0x305bd5))
        : (0, i.of)(true);
    }),
  );
}
function he(_0x19e420) {
  return D(_0x19e420) != null;
}
function D(_0x581344) {
  let _0x5802b5 = _0x581344
    .get(r.SheetsSelectionsService)
    .getCurrentSelections();
  return (_0x5802b5 == null ? undefined : _0x5802b5.length) === 1
    ? _0x5802b5[0].range
    : null;
}
function O(_0x1d1678) {
  let _0x113d35 = _0x1d1678.get(r.SheetsSelectionsService),
    _0x28123a = _0x1d1678.get(t.SheetsOutlineModel);
  return _0x1d1678
    .get(n.IUniverInstanceService)
    .getCurrentTypeOfUnit$(n.UniverInstanceType["UNIVER_SHEET"])
    .pipe(
      (0, i.switchMap)((_0x508e09) =>
        _0x508e09
          ? (0, i.merge)(
              _0x508e09.activeSheet$,
              _0x113d35.selectionChanged$,
              _0x28123a.change$,
            ).pipe((0, i.startWith)(null))
          : (0, i.of)(null),
      ),
    );
}
const ge = {
    [t.DimensionOutlineAxis["ROW"]]: f.id,
    [t.DimensionOutlineAxis["COLUMN"]]: p.id,
  },
  _e = {
    [t.DimensionOutlineAxis["ROW"]]: _.id,
    [t.DimensionOutlineAxis["COLUMN"]]: v.id,
  };
function ve(_0x55e133) {
  return he(_0x55e133)
    ? [
        {
          id: x.id,
          commandId: x.id,
          value: "group",
          label: _0x55e133.get(n.LocaleService).t("sheets-outline-ui.group"),
          disabled: Te(_0x55e133),
        },
        {
          id: S.id,
          commandId: S.id,
          value: "ungroup",
          label: _0x55e133.get(n.LocaleService).t("sheets-outline-ui.ungroup"),
          disabled: Ee(_0x55e133),
        },
      ]
    : [];
}
function ye(_0x6bae3c, _0x5b80b8, _0x49592d) {
  let _0x49a930 = _0x5b80b8.map((_0x226d76) =>
      k(
        ge[_0x226d76],
        _0x226d76,
        Se(_0x6bae3c, _0x226d76),
        j(_0x6bae3c, _0x226d76),
      ),
    ),
    _0x31b5a3 = _0x5b80b8.map((_0x34df95) =>
      k(
        _e[_0x34df95],
        _0x34df95,
        Ce(_0x6bae3c, _0x34df95),
        M(_0x6bae3c, _0x34df95),
      ),
    );
  return _0x49592d === "group"
    ? _0x49a930
    : _0x49592d === "ungroup"
      ? _0x31b5a3
      : [..._0x49a930, ..._0x31b5a3];
}
function k(_0x3f8408, _0x1a7466, _0x4aebca, _0x87fcfe) {
  return {
    id: _0x3f8408,
    commandId: _0x3f8408,
    value: _0x1a7466,
    disabled: _0x87fcfe,
    label: _0x4aebca,
  };
}
const be = {
    [t.DimensionOutlineAxis["ROW"]]: "sheets-outline-ui.groupRows",
    [t.DimensionOutlineAxis["COLUMN"]]: "sheets-outline-ui.groupColumns",
  },
  xe = {
    [t.DimensionOutlineAxis["ROW"]]: "sheets-outline-ui.ungroupRows",
    [t.DimensionOutlineAxis["COLUMN"]]: "sheets-outline-ui.ungroupColumns",
  };
function Se(_0x194aec, _0x2d4a48) {
  return A(_0x194aec, be, _0x2d4a48);
}
function Ce(_0x445af4, _0x43b175) {
  return A(_0x445af4, xe, _0x43b175);
}
function A(_0x224204, _0x250c97, _0x5a2fe8) {
  let _0x6203bc = h(_0x224204.get(r.SheetsSelectionsService), _0x5a2fe8);
  return _0x6203bc
    ? _0x224204
        .get(n.LocaleService)
        .t(_0x250c97[_0x6203bc.axis], ...we(_0x6203bc))
    : "";
}
function we(_0x3c56a1) {
  return _0x3c56a1.axis === t.DimensionOutlineAxis["ROW"]
    ? ["" + (_0x3c56a1.start + 1), "" + (_0x3c56a1.end + 1)]
    : [
        n.Tools["chatAtABC"](_0x3c56a1.start),
        n.Tools["chatAtABC"](_0x3c56a1.end),
      ];
}
function j(_0x7e1258, _0x6a7d3e) {
  let _0xf984e9 = h(_0x7e1258.get(r.SheetsSelectionsService), _0x6a7d3e),
    _0x3724d9 = (0, r.getSheetCommandTarget)(
      _0x7e1258.get(n.IUniverInstanceService),
    );
  return (
    !_0xf984e9 ||
    !_0x3724d9 ||
    !(0, t.hasDimensionOutlineViewPermission)(
      _0x7e1258,
      _0x3724d9.unitId,
      _0x3724d9.subUnitId,
    ) ||
    !(0, t.canAddDimensionOutline)(
      _0x7e1258
        .get(t.SheetsOutlineModel)
        .getOutlines(_0x3724d9.unitId, _0x3724d9.subUnitId),
      {
        id: "__menu_check__",
        unitId: _0x3724d9.unitId,
        subUnitId: _0x3724d9.subUnitId,
        axis: _0xf984e9.axis,
        start: _0xf984e9.start,
        end: _0xf984e9.end,
        collapsed: false,
      },
    ).valid
  );
}
function M(_0x1b70de, _0x3017be) {
  let _0x471893 = h(_0x1b70de.get(r.SheetsSelectionsService), _0x3017be),
    _0x4a8603 = (0, r.getSheetCommandTarget)(
      _0x1b70de.get(n.IUniverInstanceService),
    );
  return (
    !_0x471893 ||
    !_0x4a8603 ||
    !(0, t.hasDimensionOutlineViewPermission)(
      _0x1b70de,
      _0x4a8603.unitId,
      _0x4a8603.subUnitId,
    ) ||
    !_0x1b70de
      .get(t.SheetsOutlineModel)
      .getOutlines(_0x4a8603.unitId, _0x4a8603.subUnitId)
      .some(
        (_0x197155) =>
          _0x197155.axis === _0x471893.axis &&
          _0x197155.start >= _0x471893.start &&
          _0x197155.end <= _0x471893.end,
      )
  );
}
function Te(_0x2bae9b) {
  let _0x46ec42 = D(_0x2bae9b);
  return _0x46ec42
    ? _0x46ec42.rangeType === n.RANGE_TYPE["ROW"]
      ? j(_0x2bae9b, t.DimensionOutlineAxis["ROW"])
      : (_0x46ec42.rangeType === n.RANGE_TYPE["COLUMN"] ||
          j(_0x2bae9b, t.DimensionOutlineAxis["ROW"])) &&
        j(_0x2bae9b, t.DimensionOutlineAxis["COLUMN"])
    : true;
}
function Ee(_0x6f4ab) {
  let _0x937c9c = D(_0x6f4ab);
  return _0x937c9c
    ? _0x937c9c.rangeType === n.RANGE_TYPE["ROW"]
      ? M(_0x6f4ab, t.DimensionOutlineAxis["ROW"])
      : (_0x937c9c.rangeType === n.RANGE_TYPE["COLUMN"] ||
          M(_0x6f4ab, t.DimensionOutlineAxis["ROW"])) &&
        M(_0x6f4ab, t.DimensionOutlineAxis["COLUMN"])
    : true;
}
const N = {
  [e.RibbonDataGroup["ORGANIZATION"]]: {
    [T]: { order: 20, gridLayout: { row: 2, column: 3 }, menuItemFactory: se },
  },
  [e.ContextMenuPosition["ROW_HEADER"]]: {
    [e.ContextMenuGroup["LAYOUT"]]: { [E]: { order: 8, menuItemFactory: le } },
  },
  [e.ContextMenuPosition["COL_HEADER"]]: {
    [e.ContextMenuGroup["LAYOUT"]]: { [E]: { order: 8, menuItemFactory: ue } },
  },
};
var De = "@univerjs-pro/sheets-outline-ui",
  Oe = "1.0.0-insiders.20260907-70fc579";
const P = {};
function F(_0x2adb6c, _0x4ed1cb) {
  return function (_0x213e2c, _0x3fd25a) {
    _0x4ed1cb(_0x213e2c, _0x3fd25a, _0x2adb6c);
  };
}
function I(_0x287650, _0x17df7c, _0xe8c9d5, _0x4e6b6a) {
  var _0x25afaa = arguments.length,
    _0x410fce =
      _0x25afaa < 3
        ? _0x17df7c
        : _0x4e6b6a === null
          ? (_0x4e6b6a = Object.getOwnPropertyDescriptor(_0x17df7c, _0xe8c9d5))
          : _0x4e6b6a,
    _0x3dbf20;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x410fce = Reflect.decorate(_0x287650, _0x17df7c, _0xe8c9d5, _0x4e6b6a);
  else {
    for (var _0x215927 = _0x287650.length - 1; _0x215927 >= 0; _0x215927--)
      (_0x3dbf20 = _0x287650[_0x215927]) &&
        (_0x410fce =
          (_0x25afaa < 3
            ? _0x3dbf20(_0x410fce)
            : _0x25afaa > 3
              ? _0x3dbf20(_0x17df7c, _0xe8c9d5, _0x410fce)
              : _0x3dbf20(_0x17df7c, _0xe8c9d5)) || _0x410fce);
  }
  return (
    _0x25afaa > 3 &&
      _0x410fce &&
      Object.defineProperty(_0x17df7c, _0xe8c9d5, _0x410fce),
    _0x410fce
  );
}
let L = class extends n.Disposable {
  constructor(_0x5bfb9a, _0x133634) {
    (super(),
      (this._componentManager = _0x5bfb9a),
      (this._iconManager = _0x133634),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](b, ee));
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        GroupingDoubleIcon: u.GroupingDoubleIcon,
      }),
    );
  }
};
L = I(
  [F(0, (0, n.Inject)(e.ComponentManager)), F(1, (0, n.Inject)(e.IconManager))],
  L,
);
const ke = new Set([
  t.AddDimensionOutlineCommand["id"],
  t.ClearDimensionOutlinesCommand["id"],
  t.RemoveDimensionOutlineCommand["id"],
  t.SetDimensionOutlineCollapsedCommand["id"],
]);
let R = class extends n.Disposable {
  constructor(_0x58aa1c, _0x547253, _0x2acbe1, _0x4f2538) {
    (super(),
      (this._commandService = _0x58aa1c),
      (this._localeService = _0x547253),
      (this._sheetPermissionCheckController = _0x2acbe1),
      (this._univerInstanceService = _0x4f2538),
      this._initPermission());
  }
  _initPermission() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x5c50a2) => {
        if (!ke.has(_0x5c50a2.id)) return;
        let _0x3a7a1e = (0, r.getSheetCommandTarget)(
          this._univerInstanceService,
          _0x5c50a2.params,
        );
        _0x3a7a1e &&
          (this._sheetPermissionCheckController["permissionCheckWithoutRange"](
            {
              workbookTypes: [r.WorkbookViewPermission],
              worksheetTypes: [r.WorksheetViewPermission],
            },
            _0x3a7a1e.unitId,
            _0x3a7a1e.subUnitId,
          ) ||
            this._sheetPermissionCheckController[
              "blockExecuteWithoutPermission"
            ](this._localeService["t"]("sheets-outline-ui.error.permission")));
      }),
    );
  }
};
R = I(
  [
    F(0, (0, n.Inject)(n.ICommandService)),
    F(1, (0, n.Inject)(n.LocaleService)),
    F(2, (0, n.Inject)(r.SheetPermissionCheckController)),
    F(3, n.IUniverInstanceService),
  ],
  R,
);
const Ae = {
    id: x.id,
    preconditions: (_0x3aa7d3) => (0, l.whenSheetEditorFocused)(_0x3aa7d3),
    binding: e.KeyCode["ARROW_RIGHT"] | e.MetaKeys["ALT"] | e.MetaKeys["SHIFT"],
    mac: e.KeyCode["K"] | e.MetaKeys["CTRL_COMMAND"] | e.MetaKeys["SHIFT"],
  },
  je = {
    id: S.id,
    preconditions: (_0x35126c) => (0, l.whenSheetEditorFocused)(_0x35126c),
    binding: e.KeyCode["ARROW_LEFT"] | e.MetaKeys["ALT"] | e.MetaKeys["SHIFT"],
    mac: e.KeyCode["J"] | e.MetaKeys["CTRL_COMMAND"] | e.MetaKeys["SHIFT"],
  },
  Me = {
    [t.DimensionOutlineErrorReason["INVALID_RANGE"]]:
      "sheets-outline-ui.error.invalidRange",
    [t.DimensionOutlineErrorReason["OUT_OF_BOUNDS"]]:
      "sheets-outline-ui.error.outOfBounds",
    [t.DimensionOutlineErrorReason["CROSSING"]]:
      "sheets-outline-ui.error.crossing",
    [t.DimensionOutlineErrorReason["MAX_DEPTH"]]:
      "sheets-outline-ui.error.maxDepth",
    [t.DimensionOutlineErrorReason["MOVE_SPLITS_OUTLINE"]]:
      "sheets-outline-ui.error.moveSplitsOutline",
    [t.DimensionOutlineErrorReason["CLEAR_RANGE_NOT_CONTAIN_OUTLINE"]]:
      "sheets-outline-ui.error.clearRangeNotContainOutline",
    [t.DimensionOutlineErrorReason["UNKNOWN"]]:
      "sheets-outline-ui.error.unknown",
  };
let z = class extends n.Disposable {
  constructor(_0x189949, _0x4abc5c, _0x5b90d2) {
    (super(),
      (this._sheetsOutlineErrorService = _0x189949),
      (this._messageService = _0x4abc5c),
      (this._localeService = _0x5b90d2),
      this._initErrorListener());
  }
  _initErrorListener() {
    this.disposeWithMe(
      this._sheetsOutlineErrorService["error$"].subscribe((_0x1efd2f) => {
        this._showError(_0x1efd2f);
      }),
    );
  }
  _showError(_0x486433) {
    this._messageService["show"]({
      type: a.MessageType["Error"],
      content: this._localeService["t"](Me[_0x486433.reason]),
    });
  }
};
z = I(
  [
    F(0, (0, n.Inject)(t.SheetsOutlineErrorService)),
    F(1, e.IMessageService),
    F(2, (0, n.Inject)(n.LocaleService)),
  ],
  z,
);
let B = class extends n.Disposable {
  constructor(_0x2ca274) {
    (super(),
      (this._menuManagerService = _0x2ca274),
      this._menuManagerService["mergeMenu"](N));
  }
};
B = I([F(0, e.IMenuManagerService)], B);
function V(_0x337b8b, _0x4450a3, _0x6fd13, _0xc14331, _0x11aa23 = {}) {
  return Le(
    (0, t.buildDimensionOutlineTree)(_0x337b8b).filter(
      (_0x51c6ae) =>
        _0x51c6ae.unitId === _0x4450a3 &&
        _0x51c6ae.subUnitId === _0x6fd13 &&
        _0x51c6ae.axis === _0xc14331,
    ),
    _0x11aa23,
  );
}
function H(_0x3e17cb, _0x39f63e, _0x243fd1, _0x15e652, _0x2a4cda = {}) {
  return V(_0x3e17cb, _0x39f63e, _0x243fd1, _0x15e652, _0x2a4cda).reduce(
    (_0x2aec82, _0x3a2fef) => Math.max(_0x2aec82, _0x3a2fef.depth),
    0,
  );
}
function U(_0x522b75, _0x2eaf64 = {}) {
  return _0x522b75 <= 0
    ? 0
    : (_0x2eaf64.includeLevelButtons ? Ne(_0x522b75) : _0x522b75) * 20;
}
function Ne(_0x4d49e9) {
  return Math.max(0, _0x4d49e9);
}
function Pe(_0x2059e8, _0x5f09f7, _0x469b08) {
  return _0x469b08.depth < _0x5f09f7
    ? false
    : !_0x2059e8.some((_0x3d79a3) => _0x3d79a3.collapsed);
}
function Fe(_0x141a1b, _0x325a3a, _0xef871a) {
  for (let _0x278d75 = _0x141a1b.length - 1; _0x278d75 >= 0; _0x278d75--) {
    let _0x419a1b = _0x141a1b[_0x278d75];
    if (
      _0x325a3a >= _0x419a1b.left &&
      _0x325a3a <= _0x419a1b.left + _0x419a1b.width &&
      _0xef871a >= _0x419a1b.top &&
      _0xef871a <= _0x419a1b.top + _0x419a1b.height
    )
      return _0x419a1b;
  }
  return null;
}
function Ie(_0x3aaedd, _0x2911e1, _0x618836) {
  for (let _0x3f29be = _0x3aaedd.length - 1; _0x3f29be >= 0; _0x3f29be--) {
    let _0x87362 = _0x3aaedd[_0x3f29be];
    if (
      _0x2911e1 >= _0x87362.left &&
      _0x2911e1 <= _0x87362.left + _0x87362.width &&
      _0x618836 >= _0x87362.top &&
      _0x618836 <= _0x87362.top + _0x87362.height
    )
      return _0x87362;
  }
  return null;
}
function Le(_0x9aeb33, _0xb29905) {
  let _0x544e82 = [];
  for (let _0x459012 of _0x9aeb33) {
    _0x544e82.push(_0x459012);
    let _0x5022cf =
      _0xb29905.includeHiddenGroups || !_0x459012.collapsed
        ? _0x459012.children
        : _0x459012.children["filter"]((_0x54ec7b) => Re(_0x459012, _0x54ec7b));
    _0x5022cf.length > 0 && _0x544e82.push(...Le(_0x5022cf, _0xb29905));
  }
  return _0x544e82;
}
function Re(_0x5ed381, _0x102e19) {
  return (
    _0x5ed381.unitId === _0x102e19.unitId &&
    _0x5ed381.subUnitId === _0x102e19.subUnitId &&
    _0x5ed381.axis === _0x102e19.axis &&
    _0x5ed381.start === _0x102e19.start &&
    _0x5ed381.end === _0x102e19.end
  );
}
function W(_0x5b0a69) {
  "@babel/helpers - typeof";
  return (
    (W =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4903be) {
            return typeof _0x4903be;
          }
        : function (_0x580095) {
            return _0x580095 &&
              typeof Symbol == "function" &&
              _0x580095.constructor === Symbol &&
              _0x580095 !== Symbol.prototype
              ? "symbol"
              : typeof _0x580095;
          }),
    W(_0x5b0a69)
  );
}
function ze(_0x582406, _0x431564) {
  if (W(_0x582406) != "object" || !_0x582406) return _0x582406;
  var _0x3dbad9 = _0x582406[Symbol.toPrimitive];
  if (_0x3dbad9 !== undefined) {
    var _0x166022 = _0x3dbad9.call(_0x582406, _0x431564 || "default");
    if (W(_0x166022) != "object") return _0x166022;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x431564 === "string" ? String : Number)(_0x582406);
}
function Be(_0x29e744) {
  var _0x3e2792 = ze(_0x29e744, "string");
  return W(_0x3e2792) == "symbol" ? _0x3e2792 : _0x3e2792 + "";
}
function G(_0xd9bad1, _0x1d7cb4, _0x3fb5af) {
  return (
    (_0x1d7cb4 = Be(_0x1d7cb4)) in _0xd9bad1
      ? Object.defineProperty(_0xd9bad1, _0x1d7cb4, {
          value: _0x3fb5af,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xd9bad1[_0x1d7cb4] = _0x3fb5af),
    _0xd9bad1
  );
}
const K = 0.5;
var Ve = class extends c.Shape {
  constructor(_0x134c17, _0x2a6651, _0x2027f4, _0x33affd, _0x3730ef) {
    (super(_0x134c17, {
      evented: true,
      fill: "rgba(0,\x200,\x200,\x200)",
      zIndex: 100,
    }),
      (this._axis = _0x2a6651),
      (this._sheetsOutlineModel = _0x2027f4),
      (this._themeService = _0x33affd),
      (this._getSkeleton = _0x3730ef),
      G(this, "_buttons", []),
      G(this, "_levelButtons", []),
      G(this, "_lines", []),
      G(this, "_hoveredOutlineId", null),
      G(this, "_hoveredLevel", null));
  }
  refreshBounds() {
    let _0x48cf62 = this._getSkeleton();
    if (!_0x48cf62) {
      this.hide();
      return;
    }
    let _0x366c2b = _0x48cf62.worksheet,
      _0x3b6521 = _0x366c2b.getUnitId(),
      _0x4aa44a = _0x366c2b.getSheetId(),
      _0x5db7bd = U(
        H(
          this._sheetsOutlineModel["getOutlines"](_0x3b6521, _0x4aa44a),
          _0x3b6521,
          _0x4aa44a,
          this._axis,
          { includeHiddenGroups: true },
        ),
        { includeLevelButtons: true },
      );
    if (_0x5db7bd <= 0) {
      this.hide();
      return;
    }
    (this.show(),
      this._axis === t.DimensionOutlineAxis["ROW"]
        ? this.transformByState({
            left: 0,
            top: 0,
            width: _0x5db7bd,
            height:
              _0x48cf62.columnHeaderHeightAndMarginTop +
              _0x48cf62.rowTotalHeight,
          })
        : this.transformByState({
            left: 0,
            top: 0,
            width:
              _0x48cf62.rowHeaderWidthAndMarginLeft +
              _0x48cf62.columnTotalWidth,
            height: _0x5db7bd,
          }));
  }
  setHoveredOutline(_0x16eb4a) {
    this._hoveredOutlineId !== _0x16eb4a &&
      ((this._hoveredOutlineId = _0x16eb4a), this.makeDirty(true));
  }
  setHoveredLevel(_0xd4f9b2) {
    this._hoveredLevel !== _0xd4f9b2 &&
      ((this._hoveredLevel = _0xd4f9b2), this.makeDirty(true));
  }
  hitTestButton(_0x474aef, _0x2f5e62) {
    return Fe(this._buttons, _0x474aef, _0x2f5e62);
  }
  hitTestLevelButton(_0x4542e6, _0x266603) {
    return Ie(this._levelButtons, _0x4542e6, _0x266603);
  }
  hitTestOutline(_0x4d9929, _0x3299b6) {
    let _0x1c7d91 = this.hitTestButton(_0x4d9929, _0x3299b6);
    return _0x1c7d91 ? _0x1c7d91.id : this.hitTestLine(_0x4d9929, _0x3299b6);
  }
  hitTestLine(_0x1d6183, _0xaa0942) {
    for (
      let _0xf8dd8a = this._lines["length"] - 1;
      _0xf8dd8a >= 0;
      _0xf8dd8a--
    ) {
      let _0x30a3bb = this._lines[_0xf8dd8a];
      if (
        _0x1d6183 >= _0x30a3bb.left &&
        _0x1d6183 <= _0x30a3bb.left + _0x30a3bb.width &&
        _0xaa0942 >= _0x30a3bb.top &&
        _0xaa0942 <= _0x30a3bb.top + _0x30a3bb.height
      )
        return _0x30a3bb.id;
    }
    return null;
  }
  _draw(_0x2ed54b) {
    ((this._buttons = []), (this._levelButtons = []), (this._lines = []));
    let _0x121b32 = this._getSkeleton();
    if (!_0x121b32) return;
    let _0x1cdbef = _0x121b32.worksheet,
      _0x4ff2f2 = _0x1cdbef.getUnitId(),
      _0x209592 = _0x1cdbef.getSheetId(),
      _0x2fb9a6 = this._sheetsOutlineModel["getOutlines"](_0x4ff2f2, _0x209592),
      _0x59a480 = V(_0x2fb9a6, _0x4ff2f2, _0x209592, this._axis),
      _0xacb4cc = V(_0x2fb9a6, _0x4ff2f2, _0x209592, this._axis, {
        includeHiddenGroups: true,
      });
    if (_0xacb4cc.length === 0) return;
    let _0x43c543 = _0xacb4cc.reduce(
        (_0x53ef75, _0x2d3ea6) => Math.max(_0x53ef75, _0x2d3ea6.depth),
        0,
      ),
      _0x2b134a = U(_0x43c543, { includeLevelButtons: true }),
      _0x273a87 = We(this._axis, _0xacb4cc, _0x43c543, _0x2b134a, _0x121b32);
    (_0x2ed54b.save(),
      (_0x2ed54b.textAlign = "center"),
      (_0x2ed54b.textBaseline = "middle"),
      (_0x2ed54b.font = "12px\x20" + c.DEFAULT_FONTFACE_PLANE),
      _0x2ed54b.setLineWidthByPrecision(2),
      this._axis === t.DimensionOutlineAxis["ROW"]
        ? this._drawRows(_0x2ed54b, _0x59a480, _0x273a87, _0x2b134a, _0x121b32)
        : this._drawColumns(
            _0x2ed54b,
            _0x59a480,
            _0x273a87,
            _0x2b134a,
            _0x121b32,
          ),
      _0x2ed54b.restore());
  }
  _drawRows(_0x58223d, _0x3ce7f4, _0x31afcf, _0x3e735d, _0x2c9f60) {
    let {
        rowHeightAccumulation: _0x3ebd9c,
        rowTotalHeight: _0x524c0c,
        columnHeaderHeightAndMarginTop: _0x171222,
      } = _0x2c9f60,
      _0xb40652 = q(this._themeService);
    (_0x58223d.save(),
      (_0x58223d.fillStyle = _0xb40652.gutterBackground),
      _0x58223d.fillRectByPrecision(0, 0, _0x3e735d, _0x171222 + _0x524c0c),
      (_0x58223d.strokeStyle = _0xb40652.gutterBorder),
      _0x58223d.setLineWidthByPrecision(1),
      _0x58223d.beginPath(),
      _0x58223d.moveToByPrecision(_0x3e735d - K, 0),
      _0x58223d.lineToByPrecision(_0x3e735d - K, _0x171222 + _0x524c0c),
      _0x58223d.stroke(),
      _0x58223d.restore(),
      this._drawLevelButtons(_0x58223d, _0x31afcf),
      _0x58223d.setLineWidthByPrecision(2));
    for (let _0x2a8418 of _0x3ce7f4) {
      let _0x4ad581 = Math.min(
          _0x3e735d - 14 - 3,
          (_0x2a8418.depth - 1) * 20 + 3,
        ),
        _0x5c109e = _0x4ad581 + 14 / 2,
        _0x541763 = J(_0x3ebd9c, _0x2a8418.start),
        _0x5148d9 = X(_0x3ebd9c, _0x2a8418.end, _0x524c0c),
        _0x51cece = Ge(_0x3ebd9c, _0x2a8418.end, _0x524c0c, 14),
        _0x500a32 = this._hoveredOutlineId === _0x2a8418.id,
        _0x10de35 = this._getHoverColor(),
        _0x5c71b9 = Math.max(0, _0x541763),
        _0x3d92c7 = Math.max(_0x541763, Math.min(_0x524c0c, _0x5148d9)),
        _0x1e759c = Y(_0x3ebd9c, _0x2a8418.start, _0x2a8418.end, _0x524c0c);
      ((_0x58223d.strokeStyle = _0x500a32 ? _0x10de35 : _0xb40652.line),
        _0x58223d.beginPath(),
        _0x58223d.moveToByPrecision(_0x5c109e, _0x171222 + _0x5c71b9),
        _0x58223d.lineToByPrecision(_0x5c109e, _0x171222 + _0x3d92c7),
        _0x58223d.moveToByPrecision(_0x5c109e, _0x171222 + _0x1e759c),
        _0x58223d.lineToByPrecision(
          Math.min(_0x3e735d, _0x5c109e + 8),
          _0x171222 + _0x1e759c,
        ),
        _0x58223d.stroke(),
        this._lines["push"]({
          id: _0x2a8418.id,
          axis: _0x2a8418.axis,
          left: _0x5c109e - 6 / 2,
          top: _0x5c71b9,
          width: 6,
          height: Math.max(14, _0x3d92c7 - _0x5c71b9),
        }),
        this._drawButton(
          _0x58223d,
          _0x4ad581,
          _0x51cece,
          _0x2a8418,
          _0x500a32,
          0,
          _0x171222,
        ));
    }
  }
  _drawColumns(_0x4c9226, _0x71b38a, _0x2b80f9, _0x1bb8e3, _0x103a03) {
    let {
        columnWidthAccumulation: _0x111562,
        columnTotalWidth: _0x596ae3,
        rowHeaderWidthAndMarginLeft: _0x245781,
      } = _0x103a03,
      _0x40c8ee = q(this._themeService);
    (_0x4c9226.save(),
      (_0x4c9226.fillStyle = _0x40c8ee.gutterBackground),
      _0x4c9226.fillRectByPrecision(0, 0, _0x245781 + _0x596ae3, _0x1bb8e3),
      (_0x4c9226.strokeStyle = _0x40c8ee.gutterBorder),
      _0x4c9226.setLineWidthByPrecision(1),
      _0x4c9226.beginPath(),
      _0x4c9226.moveToByPrecision(0, _0x1bb8e3 - K),
      _0x4c9226.lineToByPrecision(_0x245781 + _0x596ae3, _0x1bb8e3 - K),
      _0x4c9226.stroke(),
      _0x4c9226.restore(),
      this._drawLevelButtons(_0x4c9226, _0x2b80f9),
      _0x4c9226.setLineWidthByPrecision(2));
    for (let _0x3e7290 of _0x71b38a) {
      let _0x31b7f0 = Math.min(
          _0x1bb8e3 - 14 - 3,
          (_0x3e7290.depth - 1) * 20 + 3,
        ),
        _0x24c7a6 = _0x31b7f0 + 14 / 2,
        _0x569a21 = J(_0x111562, _0x3e7290.start),
        _0x5eae03 = X(_0x111562, _0x3e7290.end, _0x596ae3),
        _0x3a3836 = Ge(_0x111562, _0x3e7290.end, _0x596ae3, 14),
        _0x11b7d7 = this._hoveredOutlineId === _0x3e7290.id,
        _0x3cf8a2 = this._getHoverColor(),
        _0xbf3833 = Math.max(0, _0x569a21),
        _0x1ebb8d = Math.max(_0x569a21, Math.min(_0x596ae3, _0x5eae03)),
        _0x433953 = Y(_0x111562, _0x3e7290.start, _0x3e7290.end, _0x596ae3);
      ((_0x4c9226.strokeStyle = _0x11b7d7 ? _0x3cf8a2 : _0x40c8ee.line),
        _0x4c9226.beginPath(),
        _0x4c9226.moveToByPrecision(_0x245781 + _0xbf3833, _0x24c7a6),
        _0x4c9226.lineToByPrecision(_0x245781 + _0x1ebb8d, _0x24c7a6),
        _0x4c9226.moveToByPrecision(_0x245781 + _0x433953, _0x24c7a6),
        _0x4c9226.lineToByPrecision(
          _0x245781 + _0x433953,
          Math.min(_0x1bb8e3, _0x24c7a6 + 8),
        ),
        _0x4c9226.stroke(),
        this._lines["push"]({
          id: _0x3e7290.id,
          axis: _0x3e7290.axis,
          left: _0xbf3833,
          top: _0x24c7a6 - 6 / 2,
          width: Math.max(14, _0x1ebb8d - _0xbf3833),
          height: 6,
        }),
        this._drawButton(
          _0x4c9226,
          _0x3a3836,
          _0x31b7f0,
          _0x3e7290,
          _0x11b7d7,
          _0x245781,
        ));
    }
  }
  _drawLevelButtons(_0x4d0012, _0x5008ee) {
    let _0x1d7b94 = q(this._themeService);
    for (let _0x5c6e0f of _0x5008ee) {
      let _0x2f81b4 = this._hoveredLevel === _0x5c6e0f.level;
      (_0x4d0012.save(),
        _0x4d0012.translateWithPrecision(_0x5c6e0f.left, _0x5c6e0f.top),
        c.Rect["drawWith"](_0x4d0012, {
          width: 14,
          height: 14,
          radius: 3,
          fill: _0x2f81b4
            ? this._getHoverBackgroundColor()
            : _0x1d7b94.buttonFill,
          stroke: _0x2f81b4 ? this._getHoverColor() : _0x1d7b94.buttonStroke,
        }),
        (_0x4d0012.fillStyle = _0x2f81b4
          ? this._getHoverColor()
          : _0x1d7b94.buttonText),
        _0x4d0012.fillText(String(_0x5c6e0f.level), 14 / 2, 7.5),
        _0x4d0012.restore(),
        this._levelButtons["push"](_0x5c6e0f));
    }
  }
  _drawButton(
    _0x29e5ca,
    _0x2e26be,
    _0x568ae2,
    _0x32df91,
    _0x27620b,
    _0x4d53c7 = 0,
    _0x529a5c = 0,
  ) {
    (_0x29e5ca.save(),
      _0x29e5ca.translateWithPrecision(
        _0x2e26be + _0x4d53c7,
        _0x568ae2 + _0x529a5c,
      ));
    let _0x4c66ed = He(_0x32df91.collapsed, _0x27620b, this._themeService);
    (c.Rect["drawWith"](_0x29e5ca, {
      width: 14,
      height: 14,
      radius: 3,
      fill: _0x4c66ed.fill,
      stroke: _0x4c66ed.stroke,
    }),
      Ue(_0x29e5ca, _0x32df91.collapsed, _0x4c66ed.text),
      _0x29e5ca.restore(),
      this._buttons["push"]({
        id: _0x32df91.id,
        axis: _0x32df91.axis,
        collapsed: _0x32df91.collapsed,
        left: _0x2e26be,
        top: _0x568ae2,
        width: 14,
        height: 14,
      }));
  }
  _getHoverColor() {
    return this._themeService["getColorFromTheme"]("primary.600");
  }
  _getHoverBackgroundColor() {
    return this._themeService["getColorFromTheme"]("primary.50");
  }
};
function He(_0x588949, _0x12f8df, _0x19266e) {
  let _0x210715 = q(_0x19266e);
  if (_0x588949) {
    let _0x6e1bfc = _0x12f8df
      ? _0x19266e.getColorFromTheme("primary.700")
      : _0x19266e.getColorFromTheme("primary.600");
    return {
      fill: _0x6e1bfc,
      stroke: _0x6e1bfc,
      text: _0x210715.activeButtonText,
    };
  }
  return {
    fill: _0x12f8df
      ? _0x19266e.getColorFromTheme("primary.50")
      : _0x210715.buttonFill,
    stroke: _0x12f8df
      ? _0x19266e.getColorFromTheme("primary.600")
      : _0x210715.buttonStroke,
    text: _0x12f8df
      ? _0x19266e.getColorFromTheme("primary.600")
      : _0x210715.buttonText,
  };
}
function q(_0x26a752) {
  return {
    gutterBackground: _0x26a752.getColorFromTheme("gray.50"),
    gutterBorder: _0x26a752.getColorFromTheme("gray.200"),
    line: _0x26a752.getColorFromTheme("gray.300"),
    buttonFill: _0x26a752.getColorFromTheme("gray.0"),
    buttonStroke: _0x26a752.getColorFromTheme("gray.300"),
    buttonText: _0x26a752.getColorFromTheme("gray.500"),
    activeButtonText: _0x26a752.getColorFromTheme("gray.0"),
  };
}
function Ue(_0x3fcaed, _0x2c1466, _0x3a4ac3) {
  ((_0x3fcaed.strokeStyle = _0x3a4ac3),
    _0x3fcaed.setLineWidthByPrecision(1.5),
    _0x3fcaed.beginPath(),
    _0x3fcaed.moveToByPrecision(4, 7),
    _0x3fcaed.lineToByPrecision(10, 7),
    _0x2c1466 &&
      (_0x3fcaed.moveToByPrecision(7, 4), _0x3fcaed.lineToByPrecision(7, 10)),
    _0x3fcaed.stroke());
}
function We(_0x3c868d, _0x3d67bc, _0x22da5c, _0x533539, _0x5ba1d9) {
  let _0x1c3fce = Ne(_0x22da5c);
  return Array.from({ length: _0x1c3fce }, (_0x33822d, _0x3e2368) => ({
    axis: _0x3c868d,
    level: _0x3e2368 + 1,
    active: false,
    left:
      _0x3c868d === t.DimensionOutlineAxis["ROW"]
        ? _0x3e2368 * 20 + 3
        : Math.max(3, _0x5ba1d9.rowHeaderWidthAndMarginLeft - 14 - 3),
    top:
      _0x3c868d === t.DimensionOutlineAxis["ROW"]
        ? Math.max(3, _0x5ba1d9.columnHeaderHeightAndMarginTop - 14 - 3)
        : Math.min(_0x533539 - 14 - 3, _0x3e2368 * 20 + 3),
    width: 14,
    height: 14,
  }));
}
function J(_0x11be07, _0x199b6d) {
  return _0x199b6d <= 0
    ? 0
    : (_0x11be07[_0x199b6d - 1] ?? _0x11be07[_0x11be07.length - 1] ?? 0);
}
function Ge(_0x2f7c27, _0x5baeb2, _0x445dda, _0xaf0090) {
  let _0x493fa0 = X(_0x2f7c27, _0x5baeb2, _0x445dda) - _0xaf0090 / 2;
  return Math.max(
    3,
    Math.min(Math.max(_0x445dda - _0xaf0090 - 3, 3), _0x493fa0),
  );
}
function Y(_0x587f9b, _0x31b48a, _0x54b081, _0x48d5ed) {
  return Math.max(0, Math.min(_0x48d5ed, J(_0x587f9b, _0x31b48a)));
}
function X(_0x483b06, _0x3c1e80, _0x37da01) {
  let _0x35e433 = _0x3c1e80 + 1;
  return _0x35e433 >= 0 && _0x35e433 < _0x483b06.length
    ? ((_0x35e433 <= 0 ? 0 : (_0x483b06[_0x35e433 - 1] ?? 0)) +
        (_0x483b06[_0x35e433] ?? _0x37da01)) /
        2
    : _0x37da01;
}
const Ke = new Set([
  "sheet.mutation.add-dimension-outline",
  "sheet.mutation.remove-dimension-outline",
  "sheet.mutation.set-dimension-outline-collapsed",
  "sheet.mutation.clear-dimension-outlines",
  "sheet.mutation.transform-dimension-outlines",
  r.SetRowHiddenMutation["id"],
  r.SetRowVisibleMutation["id"],
  r.SetColHiddenMutation["id"],
  r.SetColVisibleMutation["id"],
]);
let Z = class extends n.Disposable {
  constructor(
    _0x5f5426,
    _0x337c31,
    _0x3749fa,
    _0x13e38b,
    _0x4b4766,
    _0x2cda4a,
    _0x1b8bb0,
  ) {
    (super(),
      (this._context = _0x5f5426),
      (this._sheetsOutlineModel = _0x337c31),
      (this._sheetSkeletonManagerService = _0x3749fa),
      (this._renderManagerService = _0x13e38b),
      (this._commandService = _0x4b4766),
      (this._themeService = _0x2cda4a),
      (this._headerUnhideRangeService = _0x1b8bb0),
      G(this, "_rowOutlineShape", undefined),
      G(this, "_columnOutlineShape", undefined),
      G(this, "_headerBaseSize", new Map()),
      G(this, "_syncingHeaderSize", false),
      (this._rowOutlineShape = new Ve(
        "SheetsDimensionOutlineRowOutlineShape",
        t.DimensionOutlineAxis["ROW"],
        this._sheetsOutlineModel,
        this._themeService,
        () => this._sheetSkeletonManagerService["getCurrentSkeleton"]() || null,
      )),
      (this._columnOutlineShape = new Ve(
        "SheetsDimensionOutlineColumnOutlineShape",
        t.DimensionOutlineAxis["COLUMN"],
        this._sheetsOutlineModel,
        this._themeService,
        () => this._sheetSkeletonManagerService["getCurrentSkeleton"]() || null,
      )),
      this._initHeaderUnhideRangeRules(),
      this._initOutlineShapes(),
      this._initRefresh(),
      this._refreshCurrentSheet());
  }
  _initHeaderUnhideRangeRules() {
    this.disposeWithMe(
      this._headerUnhideRangeService["registerRangeVisibleHandler"](
        (_0x3b59ae, _0x480c20) =>
          _0x3b59ae &&
          Je(
            this._sheetsOutlineModel["getOutlines"](
              _0x480c20.workbook["getUnitId"](),
              _0x480c20.worksheet["getSheetId"](),
            ),
            Xe(_0x480c20.axis),
            _0x480c20.range,
          ),
      ),
    );
  }
  _initOutlineShapes() {
    (this._context["scene"].addObjects(
      [this._rowOutlineShape, this._columnOutlineShape],
      11,
    ),
      this.disposeWithMe(
        (0, n.toDisposable)(() => {
          this._context["scene"].removeObjects([
            this._rowOutlineShape,
            this._columnOutlineShape,
          ]);
        }),
      ),
      this.disposeWithMe(
        this._rowOutlineShape["onPointerMove$"].subscribeEvent(
          (_0x4b9899, _0x47584d) => {
            this._handleOutlinePointerMove(
              _0x4b9899,
              _0x47584d,
              this._rowOutlineShape,
              t.DimensionOutlineAxis["ROW"],
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._rowOutlineShape["onPointerLeave$"].subscribeEvent(
          (_0x46293e, _0x240453) => {
            this._handleOutlinePointerLeave(
              _0x46293e,
              _0x240453,
              this._rowOutlineShape,
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._rowOutlineShape["onPointerDown$"].subscribeEvent(
          (_0x54e86c, _0x97560) => {
            this._handleOutlinePointerDown(
              _0x54e86c,
              _0x97560,
              this._rowOutlineShape,
              t.DimensionOutlineAxis["ROW"],
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._columnOutlineShape["onPointerMove$"].subscribeEvent(
          (_0x3bb9c5, _0x20de2c) => {
            this._handleOutlinePointerMove(
              _0x3bb9c5,
              _0x20de2c,
              this._columnOutlineShape,
              t.DimensionOutlineAxis["COLUMN"],
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._columnOutlineShape["onPointerLeave$"].subscribeEvent(
          (_0x2ab128, _0x8542d1) => {
            this._handleOutlinePointerLeave(
              _0x2ab128,
              _0x8542d1,
              this._columnOutlineShape,
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._columnOutlineShape["onPointerDown$"].subscribeEvent(
          (_0x5d110c, _0x108c30) => {
            this._handleOutlinePointerDown(
              _0x5d110c,
              _0x108c30,
              this._columnOutlineShape,
              t.DimensionOutlineAxis["COLUMN"],
            );
          },
        ),
      ));
  }
  _initRefresh() {
    var _0x447d95;
    let _0xb631ad =
        (_0x447d95 = this._context["unit"]) == null
          ? undefined
          : _0x447d95.activeSheet$,
      _0x22067b = (0, n.fromCallback)(
        this._commandService["onCommandExecuted"].bind(this._commandService),
      ).pipe(
        (0, i.filter)(
          ([_0x25e1b7]) =>
            _0x25e1b7.type === n.CommandType["MUTATION"] &&
            Ke.has(_0x25e1b7.id),
        ),
      );
    this.disposeWithMe(
      (0, i.merge)(
        this._sheetsOutlineModel["change$"],
        _0x22067b,
        this._themeService["currentTheme$"],
        this._sheetSkeletonManagerService["currentSkeleton$"].pipe(
          (0, i.filter)(
            (_0x5d3f93) => _0x5d3f93 != null && !this._syncingHeaderSize,
          ),
        ),
        ...(_0xb631ad ? [_0xb631ad] : []),
      ).subscribe(() => this._refreshCurrentSheet()),
    );
  }
  _refreshCurrentSheet() {
    var _0x2f9e75, _0x41bc6a, _0x15c993;
    (this._sheetSkeletonManagerService["reCalculate"](),
      this._syncOutlineHeaderSize(),
      this._rowOutlineShape["refreshBounds"](),
      this._columnOutlineShape["refreshBounds"](),
      (_0x2f9e75 = this._context["mainComponent"]) == null ||
        _0x2f9e75.makeDirty(),
      (_0x41bc6a = this._context["components"].get(l.SHEET_VIEW_KEY["ROW"])) ==
        null || _0x41bc6a.makeDirty(true),
      (_0x15c993 = this._context["components"].get(
        l.SHEET_VIEW_KEY["COLUMN"],
      )) == null || _0x15c993.makeDirty(true),
      this._rowOutlineShape["makeDirty"](true),
      this._columnOutlineShape["makeDirty"](true),
      this._context["scene"].makeDirty());
  }
  _syncOutlineHeaderSize() {
    if (this._syncingHeaderSize) return;
    let _0x57fa90 = this._context["unit"].getActiveSheet();
    if (!_0x57fa90) return;
    let _0x4e317a = this._context["unit"].getUnitId(),
      _0x291fb4 = _0x57fa90.getSheetId(),
      _0x157f8c = this._sheetsOutlineModel["getOutlines"](_0x4e317a, _0x291fb4),
      _0x33ca1b = H(
        _0x157f8c,
        _0x4e317a,
        _0x291fb4,
        t.DimensionOutlineAxis["ROW"],
        { includeHiddenGroups: true },
      ),
      _0x2967a9 = H(
        _0x157f8c,
        _0x4e317a,
        _0x291fb4,
        t.DimensionOutlineAxis["COLUMN"],
        { includeHiddenGroups: true },
      ),
      _0x4f1101 = U(_0x33ca1b, { includeLevelButtons: true }),
      _0x18234d = U(_0x2967a9, { includeLevelButtons: true }),
      _0x262511 = this._getHeaderBaseSize(
        _0x4e317a,
        _0x291fb4,
        _0x33ca1b,
        _0x2967a9,
        _0x4f1101,
        _0x18234d,
      ),
      _0x5d9d1d = _0x262511.rowHeaderWidth + _0x4f1101,
      _0xe2e3dd = _0x262511.columnHeaderHeight + _0x18234d,
      _0x40e9ec = this._renderManagerService["getRenderUnitById"](_0x4e317a),
      _0x50ba0f = this._sheetSkeletonManagerService["getSkeleton"](_0x291fb4);
    if (!(!_0x50ba0f || !_0x40e9ec)) {
      this._syncingHeaderSize = true;
      try {
        let _0xe34724 =
            _0x50ba0f.rowHeaderWidth !== _0x262511.rowHeaderWidth ||
            _0x50ba0f.rowHeaderWidthAndMarginLeft !== _0x5d9d1d,
          _0x6de683 =
            _0x50ba0f.columnHeaderHeight !== _0x262511.columnHeaderHeight ||
            _0x50ba0f.columnHeaderHeightAndMarginTop !== _0xe2e3dd;
        ((_0xe34724 || _0x6de683) &&
          ((_0x50ba0f.rowHeaderWidth = _0x262511.rowHeaderWidth),
          (_0x50ba0f.columnHeaderHeight = _0x262511.columnHeaderHeight),
          _0x50ba0f.setMarginLeft(_0x4f1101),
          _0x50ba0f.setMarginTop(_0x18234d)),
          (_0xe34724 || _0x6de683) &&
            this._sheetSkeletonManagerService["setCurrent"]({
              sheetId: _0x291fb4,
            }));
      } finally {
        this._syncingHeaderSize = false;
      }
    }
  }
  _getHeaderBaseSize(
    _0x37e002,
    _0x48bf42,
    _0x3a692d,
    _0x3e38d1,
    _0x144b35,
    _0x250923,
  ) {
    var _0x43ec97, _0x454a0f, _0x2a80e2;
    let _0x4b91f2 = _0x37e002 + ":" + _0x48bf42,
      _0x470e81 = this._headerBaseSize["get"](_0x4b91f2),
      _0x1e1ea1 =
        (_0x43ec97 = this._context["unit"].getSheetBySheetId(_0x48bf42)) == null
          ? undefined
          : _0x43ec97.getConfig(),
      _0x2845c7 = {
        rowHeaderWidth: qe(
          _0x1e1ea1 == null || (_0x454a0f = _0x1e1ea1.rowHeader) == null
            ? undefined
            : _0x454a0f.width,
          46,
          240,
          _0x3a692d,
          _0x144b35,
          _0x470e81 == null ? undefined : _0x470e81.rowHeaderWidth,
        ),
        columnHeaderHeight: qe(
          _0x1e1ea1 == null || (_0x2a80e2 = _0x1e1ea1.columnHeader) == null
            ? undefined
            : _0x2a80e2.height,
          20,
          160,
          _0x3e38d1,
          _0x250923,
          _0x470e81 == null ? undefined : _0x470e81.columnHeaderHeight,
        ),
      };
    return (this._headerBaseSize["set"](_0x4b91f2, _0x2845c7), _0x2845c7);
  }
  _handleOutlinePointerMove(_0x4750eb, _0x427e97, _0x38682e, _0x315359) {
    let _0x30789c = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!_0x30789c) return;
    _0x427e97.stopPropagation();
    let _0x1fe145 = this._getOutlineLevelLocalPoint(_0x4750eb),
      _0x34f621 = _0x38682e.hitTestLevelButton(_0x1fe145.x, _0x1fe145.y),
      _0x17c523 = this._getOutlineLocalPoint(_0x4750eb, _0x30789c, _0x315359),
      _0x56adcd = _0x34f621
        ? null
        : _0x38682e.hitTestOutline(_0x17c523.x, _0x17c523.y);
    (_0x38682e.setHoveredLevel(
      (_0x34f621 == null ? undefined : _0x34f621.level) ?? null,
    ),
      _0x38682e.setHoveredOutline(_0x56adcd),
      _0x34f621 || _0x56adcd
        ? this._context["scene"].setCursor(c.CURSOR_TYPE["POINTER"])
        : this._context["scene"].resetCursor());
  }
  _handleOutlinePointerLeave(_0x4b834e, _0x135b6b, _0x36d582) {
    (_0x135b6b.stopPropagation(),
      _0x36d582.setHoveredOutline(null),
      _0x36d582.setHoveredLevel(null),
      this._context["scene"].resetCursor());
  }
  _handleOutlinePointerDown(_0x378372, _0x2473a6, _0x54ea77, _0x496920) {
    let _0x3333ba = this._sheetSkeletonManagerService["getCurrentSkeleton"](),
      _0x3c6b4b = this._context["unit"].getActiveSheet();
    if (!_0x3333ba || !_0x3c6b4b) return;
    (_0x2473a6.stopPropagation(),
      _0x378372.stopPropagation(),
      _0x378372.preventDefault());
    let _0x23b525 = this._getOutlineLevelLocalPoint(_0x378372),
      _0x512d51 = _0x54ea77.hitTestLevelButton(_0x23b525.x, _0x23b525.y);
    if (_0x512d51) {
      this._handleOutlineLevelButtonDown(
        _0x512d51,
        _0x496920,
        _0x3c6b4b.getSheetId(),
      );
      return;
    }
    let _0x3185ad = this._getOutlineLocalPoint(_0x378372, _0x3333ba, _0x496920),
      _0x538fe2 = _0x54ea77.hitTestButton(_0x3185ad.x, _0x3185ad.y);
    if (_0x538fe2) {
      this._commandService["syncExecuteCommand"](
        t.SetDimensionOutlineCollapsedCommand["id"],
        {
          unitId: this._context["unit"].getUnitId(),
          subUnitId: _0x3c6b4b.getSheetId(),
          outlineId: _0x538fe2.id,
          collapsed: !_0x538fe2.collapsed,
        },
      );
      return;
    }
    let _0x41595d = _0x54ea77.hitTestLine(_0x3185ad.x, _0x3185ad.y);
    _0x41595d && this._handleOutlineLineDown(_0x41595d, _0x496920, _0x3c6b4b);
  }
  _handleOutlineLineDown(_0x3f13ef, _0x3e6cf9, _0x2aa3a7) {
    let _0x48a1ee = this._context["unit"].getUnitId(),
      _0x4e1164 = _0x2aa3a7.getSheetId(),
      _0x3eb690 = V(
        this._sheetsOutlineModel["getOutlines"](_0x48a1ee, _0x4e1164),
        _0x48a1ee,
        _0x4e1164,
        _0x3e6cf9,
        { includeHiddenGroups: true },
      ).find((_0x55308d) => _0x55308d.id === _0x3f13ef);
    _0x3eb690 &&
      this._commandService["syncExecuteCommand"](
        r.SetSelectionsOperation["id"],
        Ye(
          _0x48a1ee,
          _0x4e1164,
          _0x3eb690,
          _0x2aa3a7.getRowCount(),
          _0x2aa3a7.getColumnCount(),
        ),
      );
  }
  _handleOutlineLevelButtonDown(_0x1a6f9f, _0xcbb3d0, _0x53d856) {
    let _0x4ca0ba = this._context["unit"].getUnitId(),
      _0x3a2723 = V(
        this._sheetsOutlineModel["getOutlines"](_0x4ca0ba, _0x53d856),
        _0x4ca0ba,
        _0x53d856,
        _0xcbb3d0,
        { includeHiddenGroups: true },
      );
    for (let _0x5a23dc of _0x3a2723) {
      let _0x9c0612 = Pe(_0x3a2723, _0x1a6f9f.level, _0x5a23dc);
      _0x5a23dc.collapsed !== _0x9c0612 &&
        this._commandService["syncExecuteCommand"](
          t.SetDimensionOutlineCollapsedCommand["id"],
          {
            unitId: _0x4ca0ba,
            subUnitId: _0x53d856,
            outlineId: _0x5a23dc.id,
            collapsed: _0x9c0612,
          },
        );
    }
  }
  _getOutlineLocalPoint(_0x177f51, _0x507e77, _0x1fcf54) {
    let { scaleX: _0x1cda99, scaleY: _0x33c316 } =
        this._context["scene"].getAncestorScale(),
      _0x2a2eec = (0, l.getTransformCoord)(
        _0x177f51.offsetX,
        _0x177f51.offsetY,
        this._context["scene"],
        _0x507e77,
      );
    return _0x1fcf54 === t.DimensionOutlineAxis["ROW"]
      ? {
          x: _0x177f51.offsetX / _0x1cda99,
          y: _0x2a2eec.y - _0x507e77.columnHeaderHeightAndMarginTop,
        }
      : {
          x: _0x2a2eec.x - _0x507e77.rowHeaderWidthAndMarginLeft,
          y: _0x177f51.offsetY / _0x33c316,
        };
  }
  _getOutlineLevelLocalPoint(_0x3533c2) {
    let { scaleX: _0x4e2c17, scaleY: _0x39636a } =
      this._context["scene"].getAncestorScale();
    return {
      x: _0x3533c2.offsetX / _0x4e2c17,
      y: _0x3533c2.offsetY / _0x39636a,
    };
  }
};
Z = I(
  [
    F(1, (0, n.Inject)(t.SheetsOutlineModel)),
    F(2, (0, n.Inject)(l.SheetSkeletonManagerService)),
    F(3, c.IRenderManagerService),
    F(4, n.ICommandService),
    F(5, (0, n.Inject)(n.ThemeService)),
    F(6, (0, n.Inject)(l.HeaderUnhideRangeService)),
  ],
  Z,
);
function qe(_0x21bd46, _0x1c7b81, _0x339889, _0x4833da, _0x526450, _0x212694) {
  let _0x530121 = _0x212694 ?? _0x1c7b81;
  if (
    typeof _0x21bd46 != "number" ||
    _0x21bd46 <= 0 ||
    (_0x4833da > 0 && _0x21bd46 > _0x339889)
  )
    return _0x530121;
  if (_0x4833da > 0 && _0x526450 > 0) {
    if (_0x212694 != null && _0x21bd46 === _0x212694 + _0x526450)
      return _0x212694;
    if (_0x21bd46 === _0x1c7b81 + _0x526450) return _0x1c7b81;
  }
  return _0x21bd46;
}
function Je(_0xb80163, _0x57bd58, _0x459bc5) {
  return !_0xb80163.some((_0xd639ed) =>
    _0xd639ed.axis !== _0x57bd58 || !_0xd639ed.collapsed
      ? false
      : _0x57bd58 === t.DimensionOutlineAxis["ROW"]
        ? _0x459bc5.startRow === _0xd639ed.start &&
          _0x459bc5.endRow === _0xd639ed.end
        : _0x459bc5.startColumn === _0xd639ed.start &&
          _0x459bc5.endColumn === _0xd639ed.end,
  );
}
function Ye(_0x2b6795, _0xdc2d43, _0x28c567, _0xbd052d, _0xbdd8f8) {
  if (_0x28c567.axis === t.DimensionOutlineAxis["ROW"]) {
    let _0xf5b979 = Q(_0x28c567.start, _0xbd052d),
      _0x133f69 = Q(_0x28c567.end, _0xbd052d),
      _0x1b3760 = Math.max(0, _0xbdd8f8 - 1);
    return {
      unitId: _0x2b6795,
      subUnitId: _0xdc2d43,
      selections: [
        {
          range: {
            startRow: _0xf5b979,
            endRow: _0x133f69,
            startColumn: 0,
            endColumn: _0x1b3760,
            rangeType: n.RANGE_TYPE["ROW"],
          },
          primary: {
            startRow: _0xf5b979,
            endRow: _0x133f69,
            startColumn: 0,
            endColumn: _0x1b3760,
            actualRow: _0xf5b979,
            actualColumn: 0,
            isMerged: false,
            isMergedMainCell: false,
          },
          style: null,
        },
      ],
    };
  }
  let _0x2dc5fa = Q(_0x28c567.start, _0xbdd8f8),
    _0x3e9122 = Q(_0x28c567.end, _0xbdd8f8),
    _0x3ce3e4 = Math.max(0, _0xbd052d - 1);
  return {
    unitId: _0x2b6795,
    subUnitId: _0xdc2d43,
    selections: [
      {
        range: {
          startRow: 0,
          endRow: _0x3ce3e4,
          startColumn: _0x2dc5fa,
          endColumn: _0x3e9122,
          rangeType: n.RANGE_TYPE["COLUMN"],
        },
        primary: {
          startRow: 0,
          endRow: _0x3ce3e4,
          startColumn: _0x2dc5fa,
          endColumn: _0x3e9122,
          actualRow: 0,
          actualColumn: _0x2dc5fa,
          isMerged: false,
          isMergedMainCell: false,
        },
        style: null,
      },
    ],
  };
}
function Q(_0x4d72c4, _0x34db83) {
  return Math.max(0, Math.min(Math.max(0, _0x34db83 - 1), _0x4d72c4));
}
function Xe(_0x5d5dd8) {
  return _0x5d5dd8 === l.HeaderUnhideRangeAxis["ROW"]
    ? t.DimensionOutlineAxis["ROW"]
    : t.DimensionOutlineAxis["COLUMN"];
}
let $ = class extends n.Plugin {
  constructor(
    _0x53e878 = P,
    _0x215b0b,
    _0xf4ae73,
    _0x24353b,
    _0x4d9681,
    _0x404902,
  ) {
    (super(),
      (this._config = _0x53e878),
      (this._injector = _0x215b0b),
      (this._commandService = _0xf4ae73),
      (this._renderManagerService = _0x24353b),
      (this._shortcutService = _0x4d9681),
      (this._configService = _0x404902));
    let { menu: _0x303519, ..._0x4aed6f } = (0, n.merge)({}, P, this._config);
    (_0x303519 &&
      this._configService["setConfig"]("menu", _0x303519, { merge: true }),
      this._configService["setConfig"]("sheets-outline-ui.config", _0x4aed6f));
  }
  onStarting() {
    (this._injector["add"]([L]),
      this._injector["get"](L),
      [[R], [z], [B]].forEach((_0x2735da) => this._injector["add"](_0x2735da)),
      this._initRegisterCommand(),
      this._initRegisterShortcut(),
      this._injector["get"](R),
      this._injector["get"](z),
      this._injector["get"](B));
  }
  onReady() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        n.UniverInstanceType["UNIVER_SHEET"],
        [Z],
      ),
    );
  }
  _initRegisterCommand() {
    [d, f, p, g, _, v, x, S].forEach((_0x389b82) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x389b82)),
    );
  }
  _initRegisterShortcut() {
    [Ae, je].forEach((_0x4effbb) =>
      this.disposeWithMe(this._shortcutService["registerShortcut"](_0x4effbb)),
    );
  }
};
(G($, "pluginName", t.SHEET_OUTLINE_PLUGIN + "_UI_PLUGIN"),
  G($, "packageName", De),
  G($, "version", Oe),
  G($, "type", n.UniverInstanceType["UNIVER_SHEET"]),
  ($ = I(
    [
      (0, n.DependentOn)(
        s.UniverLicensePlugin,
        c.UniverRenderEnginePlugin,
        r.UniverSheetsPlugin,
        t.UniverSheetsOutlinePlugin,
        l.UniverSheetsUIPlugin,
      ),
      F(1, (0, n.Inject)(n.Injector)),
      F(2, n.ICommandService),
      F(3, c.IRenderManagerService),
      F(4, e.IShortcutService),
      F(5, n.IConfigService),
    ],
    $,
  )),
  (exports.SheetsOutlineUIMenuSchema = N),
  Object.defineProperty(exports, "UniverSheetsOutlineUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
