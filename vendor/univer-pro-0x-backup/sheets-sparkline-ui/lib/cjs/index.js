Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/sheets-sparkline"),
  t = require("@univerjs/ui"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets"),
  i = require("@univerjs/protocol"),
  a = require("@univerjs/sheets-ui"),
  o = require("rxjs"),
  s = require("@univerjs-pro/license"),
  c = require("@univerjs/engine-render"),
  l = require("@univerjs/icons"),
  u = require("@univerjs/design"),
  d = require("react"),
  f = require("react/jsx-runtime"),
  p = require("@univerjs/engine-formula"),
  m = require("@univerjs/sheets-formula-ui");
const h = "SHEET_SPARKLINE_MENU",
  g = "SHEET_SPARKLINE_SELECTOR",
  _ = "SHEET_SPARKLINE_PANEL",
  v = "SHEET_SPARKLINE_PANEL_ID",
  y = {
    id: "sheet.operation.open-sparkline-panel",
    type: n.CommandType["OPERATION"],
    handler: (_0x55f5bb) => {
      let _0x30c550 = _0x55f5bb.get(t.ISidebarService),
        _0xb994eb = _0x55f5bb.get(n.LocaleService),
        _0x35c922 = _0x55f5bb.get(t.IDialogService),
        _0x434045 = {
          id: v,
          header: { title: _0xb994eb.t("sheets-sparkline-ui.panel.title") },
          children: { label: _ },
          width: 330,
          onClose: () => {
            _0x35c922.close(g);
          },
        };
      return (_0x30c550.open(_0x434045), true);
    },
  },
  b = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.open-sparkline-selector",
    handler: async (_0x371ae9) => {
      let _0x20754f = (0, r.getSheetCommandTarget)(
        _0x371ae9.get(n.IUniverInstanceService),
      );
      if (!_0x20754f) return false;
      let _0x433487 = await x(
        _0x371ae9,
        _0x371ae9
          .get(r.SheetsSelectionsService)
          .getCurrentSelections()
          .map((_0x121f0b) => _0x121f0b.range),
      );
      if (!_0x433487) return false;
      let { unitId: _0x18000c, subUnitId: _0x3132cf } = _0x20754f;
      return (
        _0x371ae9
          .get(n.ICommandService)
          .executeCommand(e.AddSheetSparklineCommand["id"], {
            sourceRanges: _0x433487.sourceRanges,
            targetRanges: _0x433487.targetRanges,
            targetInfo: { unitId: _0x18000c, subUnitId: _0x3132cf },
          }),
        true
      );
    },
  };
async function x(_0x179ed9, _0x31522b, _0x5154ba, _0x10d80) {
  let _0xc02d40 = _0x179ed9.get(t.IDialogService),
    _0x2f5db6 = _0x179ed9.get(n.LocaleService);
  return new Promise((_0x13e93b) => {
    let _0x2de194,
      _0x32ab7b = {
        sourceRanges: _0x31522b,
        targetRanges: _0x5154ba,
        resetCtx: _0x10d80,
        onConfirm: (_0x55f3d1) => {
          (_0x13e93b(_0x55f3d1), _0x2de194 == null || _0x2de194.dispose());
        },
        onCancel: () => {
          (_0x13e93b(null), _0x2de194 == null || _0x2de194.dispose());
        },
      };
    _0x2de194 = _0xc02d40.open({
      id: g,
      title: { title: _0x2f5db6.t("sheets-sparkline-ui.selector.title") },
      draggable: true,
      mask: false,
      maskClosable: false,
      children: { label: { name: g, props: _0x32ab7b } },
      width: 400,
      onClose: () => {
        _0x2de194.dispose();
      },
    });
  });
}
const S = "sheet.sparkline.context-menu-id";
function C(_0x352ae1) {
  return {
    id: b.id,
    title: "sheets-sparkline-ui.title",
    tooltip: "sheets-sparkline-ui.title",
    icon: h,
    type: t.MenuItemType["BUTTON"],
    hidden$: (0, t.getMenuHiddenObservable)(
      _0x352ae1,
      n.UniverInstanceType["UNIVER_SHEET"],
    ),
    disabled$: (0, a.getCurrentRangeDisable$)(_0x352ae1, {
      workbookTypes: [r.WorkbookEditablePermission],
      worksheetTypes: [r.WorksheetEditPermission],
      rangeTypes: [r.RangeProtectionPermissionEditPoint],
    }),
  };
}
function w(_0x383004) {
  return {
    id: S,
    type: t.MenuItemType["SUBITEMS"],
    icon: h,
    title: "sheets-sparkline-ui.title",
    hidden$: (0, o.combineLatest)([
      (0, t.getMenuHiddenObservable)(
        _0x383004,
        n.UniverInstanceType["UNIVER_SHEET"],
      ),
      D(_0x383004),
    ]).pipe((0, o.map)(([_0x261813, _0x3afcad]) => _0x261813 || _0x3afcad)),
  };
}
function T(_0x27f4eb) {
  return {
    id: e.RemoveSheetSparklineCommand["id"],
    type: t.MenuItemType["BUTTON"],
    title: "sheets-sparkline-ui.remove",
    tooltip: "sheets-sparkline-ui.remove",
    disabled$: (0, a.getCurrentRangeDisable$)(_0x27f4eb, {
      workbookTypes: [r.WorkbookEditablePermission],
      worksheetTypes: [r.WorksheetEditPermission],
      rangeTypes: [r.RangeProtectionPermissionEditPoint],
    }),
  };
}
function E(_0x3106cc) {
  return {
    id: y.id,
    title: "sheets-sparkline-ui.edit",
    tooltip: "sheets-sparkline-ui.edit",
    type: t.MenuItemType["BUTTON"],
    disabled$: (0, a.getCurrentRangeDisable$)(_0x3106cc, {
      workbookTypes: [r.WorkbookEditablePermission],
      worksheetTypes: [r.WorksheetEditPermission],
      rangeTypes: [r.RangeProtectionPermissionEditPoint],
    }),
  };
}
function D(_0x3b4dcc) {
  let _0x3d9df9 = _0x3b4dcc
      .get(n.IUniverInstanceService)
      .getCurrentTypeOfUnit$(n.UniverInstanceType["UNIVER_SHEET"]),
    _0x5ee9dc = _0x3b4dcc.get(e.SparklineDataSourceModel),
    _0x5a62ec = _0x3b4dcc.get(r.RangeProtectionCache);
  return _0x3d9df9.pipe(
    (0, o.switchMap)((_0x158537) =>
      _0x158537
        ? _0x158537.activeSheet$["pipe"](
            (0, o.switchMap)((_0x34208a) => {
              if (!_0x34208a) return (0, o.of)(true);
              let _0x333dfb = _0x3b4dcc.get(r.SheetsSelectionsService);
              return (0, o.merge)(
                (0, o.of)(undefined),
                _0x333dfb.selectionMoveEnd$,
                _0x5ee9dc.updateConfig$,
              ).pipe(
                (0, o.map)(() => {
                  let _0x2d653d = _0x333dfb.getCurrentSelections();
                  if (_0x2d653d.length > 1 || _0x2d653d.length === 0)
                    return true;
                  let { primary: _0x55b4ef, range: _0x52b917 } = _0x2d653d[0];
                  if (!_0x55b4ef) return true;
                  let _0x3f04f0 = _0x158537.getUnitId(),
                    _0x51afe0 = _0x34208a.getSheetId();
                  if (
                    !_0x5ee9dc.getSparkline(
                      _0x3f04f0,
                      _0x51afe0,
                      _0x55b4ef.actualRow,
                      _0x55b4ef.actualColumn,
                    )
                  )
                    return true;
                  let _0x6ed933 = new Set();
                  n.Range["foreach"](_0x52b917, (_0x348c32, _0x21806e) => {
                    let _0x2373ef = _0x5ee9dc.getSparkline(
                      _0x3f04f0,
                      _0x51afe0,
                      _0x348c32,
                      _0x21806e,
                    );
                    _0x2373ef &&
                      _0x5ee9dc.getSparklineById(
                        _0x3f04f0,
                        _0x51afe0,
                        _0x2373ef,
                      ) &&
                      _0x6ed933.add(_0x2373ef);
                  });
                  let _0x5cc9a7 = true;
                  return (
                    _0x6ed933.forEach((_0x839bbd) => {
                      let _0x23ad0b = _0x5ee9dc.getSparklineById(
                        _0x3f04f0,
                        _0x51afe0,
                        _0x839bbd,
                      );
                      _0x23ad0b &&
                        _0x5cc9a7 &&
                        _0x23ad0b.sparklines["forValue"](
                          (_0x5c403e, _0xcfb40e) => {
                            var _0x1c01ad;
                            ((_0x1c01ad = _0x5a62ec.getCellInfo(
                              _0x3f04f0,
                              _0x51afe0,
                              _0x5c403e,
                              _0xcfb40e,
                            )) == null
                              ? undefined
                              : _0x1c01ad[i.UnitAction["Edit"]]) === false &&
                              (_0x5cc9a7 = false);
                          },
                        );
                    }),
                    !_0x5cc9a7
                  );
                }),
              );
            }),
          )
        : (0, o.of)(true),
    ),
  );
}
const O = {
  [t.RibbonInsertGroup["MEDIA"]]: { [b.id]: { order: 3, menuItemFactory: C } },
  [t.ContextMenuPosition["MAIN_AREA"]]: {
    [t.ContextMenuGroup["DATA"]]: {
      [S]: {
        order: 5,
        menuItemFactory: w,
        [y.id]: { menuItemFactory: E },
        [e.RemoveSheetSparklineCommand["id"]]: { menuItemFactory: T },
      },
    },
  },
  [t.ContextMenuPosition["COL_HEADER"]]: {
    [t.ContextMenuGroup["LAYOUT"]]: {
      [S]: {
        [y.id]: { menuItemFactory: E },
        [e.RemoveSheetSparklineCommand["id"]]: { menuItemFactory: T },
      },
    },
  },
  [t.ContextMenuPosition["ROW_HEADER"]]: {
    [t.ContextMenuGroup["LAYOUT"]]: {
      [S]: {
        [y.id]: { menuItemFactory: E },
        [e.RemoveSheetSparklineCommand["id"]]: { menuItemFactory: T },
      },
    },
  },
};
var k = "@univerjs-pro/sheets-sparkline-ui",
  A = "1.0.0-insiders.20260907-70fc579";
const j = {};
function M({
  title: _0x27d3b8,
  children: _0x6c29bd,
  containerStyle: _0x1f3a13,
}) {
  let [_0x38c311, _0x4ad2eb] = (0, d.useState)(false);
  return (0, f.jsxs)("div", {
    className: (0, u.clsx)(
      "univer-px-0 univer-py-2.5",
      u.borderBottomClassName,
    ),
    style: _0x1f3a13,
    children: [
      (0, f.jsxs)("div", {
        className:
          "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-px-0\x20univer-py-1.5\x20univer-text-sm\x20univer-font-medium",
        onClick: () => _0x4ad2eb(!_0x38c311),
        children: [
          (0, f.jsx)("span", {
            className: "univer-size-4 univer-pr-1",
            children: _0x38c311
              ? (0, f.jsx)(l.MoreDownIcon, {})
              : (0, f.jsx)(l.MoreRightIcon, {}),
          }),
          _0x27d3b8,
        ],
      }),
      _0x38c311 &&
        (0, f.jsx)("div", {
          className: "univer-pb-4 univer-pl-4 univer-pt-2.5",
          children: _0x6c29bd,
        }),
    ],
  });
}
const N = (_0x49c93a) => {
    let { color: _0x323dbf, onChange: _0x5c81ee } = _0x49c93a,
      [_0x522f60, _0x195cb0] = (0, d.useState)(false),
      _0x1a66cd = (0, t.useDependency)(n.LocaleService),
      _0x6682ed = _0x323dbf === "transparent" || _0x323dbf == null,
      _0x287568 = (0, d.useCallback)(
        (_0xcda4e1) => {
          (_0x5c81ee == null || _0x5c81ee(_0xcda4e1), _0x195cb0(false));
        },
        [_0x5c81ee],
      );
    return (0, f.jsx)(u.Dropdown, {
      overlay: (0, f.jsx)("div", {
        className: (0, u.clsx)(
          "univer-flex univer-flex-col univer-items-center univer-gap-3 univer-p-3 univer-text-xs",
          u.borderClassName,
        ),
        children: (0, f.jsx)(u.ColorPicker, {
          value: _0x6682ed ? "#ffffff" : _0x323dbf,
          onChange: _0x287568,
        }),
      }),
      open: _0x522f60,
      onOpenChange: _0x195cb0,
      children: (0, f.jsxs)("button", {
        className: (0, u.clsx)(
          u.selectClassName,
          "univer-w-full\x20!univer-min-w-0\x20univer-text-gray-500\x20hover:univer-border-primary-600\x20dark:!univer-text-gray-0",
          {
            "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900":
              _0x522f60,
            "univer-cursor-pointer": !_0x522f60,
          },
        ),
        type: "button",
        children: [
          _0x6682ed
            ? (0, f.jsx)("div", {
                className:
                  "univer-flex-1 univer-truncate univer-text-sm univer-text-gray-500 dark:!univer-text-gray-0",
                children: _0x1a66cd.t("sheets-sparkline-ui.panel.default"),
              })
            : (0, f.jsx)("div", {
                className: (0, u.clsx)("univer-size-5", u.borderClassName),
                style: { backgroundColor: _0x323dbf },
              }),
          (0, f.jsx)(l.MoreDownIcon, {
            className: "univer-flex-shrink-0 dark:!univer-text-gray-0",
          }),
        ],
      }),
    });
  },
  P = ({ config: _0xf898d6, ctx: _0x194843 }) => {
    var _0x795f80,
      _0x172e9c,
      _0x5b04df,
      _0x39ffa3,
      _0x266de0,
      _0x5e6f6a,
      _0x4ef3ba,
      _0x5baa64,
      _0x2beb06,
      _0x3c8352,
      _0x2b07cf;
    let _0x2cc22e = (0, t.useDependency)(n.ICommandService),
      _0x15126a = (0, t.useDependency)(n.LocaleService),
      _0xbfaee5 = (0, t.useDependency)(e.SparklineDataSourceModel),
      { unitId: _0x1ba34e, subUnitId: _0x30b326, range: _0x425a29 } = _0x194843,
      _0x27a461 = (_0x15cf94) => {
        let _0x2b4791 = n.Tools["deepClone"](_0xf898d6);
        ((_0x2b4791.config ||= {}),
          _0x2b4791.config["type"] && delete _0x2b4791.config["type"],
          _0x2b4791.config["axis"] || (_0x2b4791.config["axis"] = {}),
          (_0x2b4791.config["axis"].visible = _0x15cf94),
          _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x2b4791,
            isChangeDataSource: false,
          }));
      },
      _0x920ff0 = (_0x31071e) => {
        let _0x2e6a6c = n.Tools["deepClone"](_0xf898d6);
        ((_0x2e6a6c.config ||= {}),
          _0x2e6a6c.config["type"] && delete _0x2e6a6c.config["type"],
          _0x2e6a6c.config["axis"] || (_0x2e6a6c.config["axis"] = {}),
          (_0x2e6a6c.config["axis"].color = _0x31071e),
          _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x2e6a6c,
            isChangeDataSource: false,
          }));
      },
      _0x15b85f = (_0x4796fb) => {
        let _0x25c43a = n.Tools["deepClone"](_0xf898d6);
        ((_0x25c43a.config ||= {}),
          _0x25c43a.config["type"] && delete _0x25c43a.config["type"],
          _0x25c43a.config["axis"] || (_0x25c43a.config["axis"] = {}),
          (_0x25c43a.config["axis"].reverse = _0x4796fb),
          _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x25c43a,
            isChangeDataSource: false,
          }));
      },
      _0x1d8188 = (_0x4626e3, _0x472969) => {
        let _0x1d04e0 = _0x472969 === "min" ? "extremumMin" : "extremumMax",
          _0x1710f2 = n.Tools["deepClone"](_0xf898d6);
        ((_0x1710f2.config ||= {}),
          _0x1710f2.config["type"] && delete _0x1710f2.config["type"],
          _0x1710f2.config[_0x1d04e0] || (_0x1710f2.config[_0x1d04e0] = {}),
          (_0x1710f2.config[_0x1d04e0].type = _0x4626e3),
          _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x1710f2,
            isChangeDataSource: false,
          }));
      },
      _0x40c5da = (_0x3ecd26, _0x5c5a5e) => {
        let _0x500b7a = _0x5c5a5e === "min" ? "extremumMin" : "extremumMax",
          _0x47c0fa = n.Tools["deepClone"](_0xf898d6);
        ((_0x47c0fa.config ||= {}),
          _0x47c0fa.config["type"] && delete _0x47c0fa.config["type"],
          _0x47c0fa.config[_0x500b7a] || (_0x47c0fa.config[_0x500b7a] = {}),
          (_0x47c0fa.config[_0x500b7a].type =
            e.SparklineExtremumTypeEnum["CUSTOM_EXTREMUM"]),
          (_0x47c0fa.config[_0x500b7a].value = _0x3ecd26),
          _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x47c0fa,
            isChangeDataSource: false,
          }));
      },
      _0x872826 = (_0x1451e8, _0x10b464) => {
        let _0x1ffe31 = _0x10b464 === "empty" ? "emptyShowAs" : "nonNumShowAs",
          _0x27886a = n.Tools["deepClone"](_0xf898d6);
        ((_0x27886a.config ||= {}),
          _0x27886a.config["type"] && delete _0x27886a.config["type"],
          (_0x27886a.config[_0x1ffe31] = _0x1451e8),
          _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x27886a,
            isChangeDataSource: false,
          }));
      },
      _0x40b586 = () => {
        let _0x4eb209 = n.Tools["deepClone"](_0xf898d6);
        _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
          config: _0x4eb209,
          combine: true,
        });
      },
      _0x5f3de9 = () => {
        let _0xc9162e = n.Tools["deepClone"](_0xf898d6);
        _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
          config: _0xc9162e,
          unCombine: true,
        });
      },
      _0x174b14 = (_0x41a2d1) => {
        let _0x2cfb31 = n.Tools["deepClone"](_0xf898d6);
        ((_0x2cfb31.config ||= {}),
          _0x2cfb31.config["type"] && delete _0x2cfb31.config["type"],
          (_0x2cfb31.config["containHiddenCells"] = _0x41a2d1),
          _0x2cc22e.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x2cfb31,
            isChangeDataSource: false,
          }));
      },
      _0x125b67 = _0xbfaee5.getSparklineCache(),
      _0x371c73 =
        _0x125b67 == null ||
        (_0x795f80 = _0x125b67.sparklineAnchorMap["get"](_0x1ba34e)) == null
          ? undefined
          : _0x795f80.get(_0x30b326),
      _0x1dd1ac = false,
      _0x987f0b = false,
      _0x1fb11f = new Set(),
      {
        startRow: _0x59cf8c,
        endRow: _0x4eb492,
        startColumn: _0x144201,
        endColumn: _0x5d4bbb,
      } = _0x425a29;
    for (let _0x5740dc = _0x59cf8c; _0x5740dc <= _0x4eb492; _0x5740dc++)
      for (let _0x21e0db = _0x144201; _0x21e0db <= _0x5d4bbb; _0x21e0db++) {
        var _0x17a36e;
        let _0x591c38 =
          _0x371c73 == null ||
          (_0x17a36e = _0x371c73.matrix["getValue"](_0x5740dc, _0x21e0db)) ==
            null
            ? undefined
            : _0x17a36e.groupId;
        _0x591c38 && _0x1fb11f.add(_0x591c38);
      }
    if (_0x1fb11f.size > 1)
      ((_0x1dd1ac = true),
        Array.from(_0x1fb11f).forEach((_0x56c551) => {
          var _0x485455;
          let _0x124758 =
            (_0x485455 = _0x125b67.sparklineModel["get"](_0x1ba34e)) == null ||
            (_0x485455 = _0x485455.get(_0x30b326)) == null
              ? undefined
              : _0x485455.get(_0x56c551);
          ((_0x124758 == null
            ? undefined
            : _0x124758.sparklines["toNativeArray"]().length) ?? 0) > 1 &&
            (_0x987f0b = true);
        }));
    else {
      if (_0x1fb11f.size === 1) {
        var _0x104d7a;
        let _0x4ecfc8 = Array.from(_0x1fb11f)[0],
          _0x2890d3 =
            (_0x104d7a = _0x125b67.sparklineModel["get"](_0x1ba34e)) == null ||
            (_0x104d7a = _0x104d7a.get(_0x30b326)) == null
              ? undefined
              : _0x104d7a.get(_0x4ecfc8);
        _0x987f0b =
          ((_0x2890d3 == null
            ? undefined
            : _0x2890d3.sparklines["toNativeArray"]().length) ?? 0) > 1;
        let _0x1a07f2 = 0,
          _0x30cfb5 = 0;
        (_0x2890d3 == null ||
          _0x2890d3.sparklines["forValue"]((_0x39236a, _0x329214) => {
            let _0x9f87fe = (0, n.cellToRange)(_0x39236a, _0x329214);
            n.Rectangle["intersects"](_0x9f87fe, _0x425a29)
              ? _0x1a07f2++
              : _0x30cfb5++;
          }),
          (_0x1dd1ac = _0x30cfb5 > 0 && _0x1a07f2 > 1));
      }
    }
    return (0, f.jsxs)("div", {
      children: [
        (0, f.jsx)(M, {
          title: _0x15126a.t("sheets-sparkline-ui.panel.composeManager"),
          children: (0, f.jsxs)(u.ActionRow, {
            className: "univer-flex\x20univer-justify-between",
            children: [
              (0, f.jsxs)(u.Button, {
                disabled: !_0x1dd1ac,
                onClick: () => _0x40b586(),
                children: [
                  (0, f.jsx)(l.GroupSparklineIcon, {}),
                  _0x15126a.t("sheets-sparkline-ui.panel.compose"),
                ],
              }),
              (0, f.jsxs)(u.Button, {
                disabled: !_0x987f0b,
                onClick: () => _0x5f3de9(),
                children: [
                  (0, f.jsx)(l.UngroupSparklineIcon, {}),
                  _0x15126a.t("sheets-sparkline-ui.panel.unCompose"),
                ],
              }),
            ],
          }),
        }),
        (0, f.jsxs)(M, {
          title: _0x15126a.t("sheets-sparkline-ui.panel.horizontal"),
          children: [
            (0, f.jsx)("div", {
              className: "univer-mb-2 univer-text-sm",
              children: (0, f.jsx)(u.Checkbox, {
                checked:
                  (_0x172e9c = _0xf898d6.config["axis"]) == null
                    ? undefined
                    : _0x172e9c.visible,
                onChange: (_0x1efa20) => _0x27a461(_0x1efa20),
                children: _0x15126a.t("sheets-sparkline-ui.panel.showZeroAxis"),
              }),
            }),
            ((_0x5b04df = _0xf898d6.config["axis"]) == null
              ? undefined
              : _0x5b04df.visible) &&
              (0, f.jsxs)("div", {
                className: "univer-mb-2",
                children: [
                  (0, f.jsx)("div", {
                    className: "univer-mb-2",
                    children: _0x15126a.t(
                      "sheets-sparkline-ui.panel.axisColor",
                    ),
                  }),
                  (0, f.jsx)(N, {
                    color:
                      ((_0x39ffa3 = _0xf898d6.config["axis"]) == null
                        ? undefined
                        : _0x39ffa3.color) ?? "#000",
                    onChange: (_0x7dc4bc) => _0x920ff0(_0x7dc4bc),
                  }),
                ],
              }),
            (0, f.jsx)("div", {
              className: "univer-mb-2 univer-text-sm",
              children: (0, f.jsx)(u.Checkbox, {
                checked:
                  (_0x266de0 = _0xf898d6.config["axis"]) == null
                    ? undefined
                    : _0x266de0.reverse,
                onChange: (_0x18e8f1) => _0x15b85f(_0x18e8f1),
                children: _0x15126a.t("sheets-sparkline-ui.panel.reverse"),
              }),
            }),
          ],
        }),
        (0, f.jsx)(M, {
          title: _0x15126a.t("sheets-sparkline-ui.panel.vertical"),
          children: (0, f.jsxs)("div", {
            children: [
              (0, f.jsx)("div", {
                className:
                  "univer-mx-0\x20univer-my-2\x20univer-text-sm\x20univer-text-gray-500",
                children: _0x15126a.t("sheets-sparkline-ui.panel.min"),
              }),
              (0, f.jsxs)(u.RadioGroup, {
                value:
                  ((_0x5e6f6a = _0xf898d6.config["extremumMin"]) == null
                    ? undefined
                    : _0x5e6f6a.type) ??
                  e.SparklineExtremumTypeEnum["SELF_EXTREMUM"],
                className: "univer-flex univer-flex-col",
                onChange: (_0x777e27) => _0x1d8188(_0x777e27, "min"),
                children: [
                  (0, f.jsx)(u.Radio, {
                    value: e.SparklineExtremumTypeEnum["SELF_EXTREMUM"],
                    children: _0x15126a.t("sheets-sparkline-ui.panel.itemMin"),
                  }),
                  (0, f.jsx)(u.Radio, {
                    value: e.SparklineExtremumTypeEnum["GROUP_EXTREMUM"],
                    children: _0x15126a.t("sheets-sparkline-ui.panel.groupMin"),
                  }),
                  (0, f.jsx)(u.Radio, {
                    value: e.SparklineExtremumTypeEnum["CUSTOM_EXTREMUM"],
                    children: (0, f.jsxs)("div", {
                      className: "univer-flex\x20univer-items-center",
                      children: [
                        (0, f.jsx)("div", {
                          children: _0x15126a.t(
                            "sheets-sparkline-ui.panel.customMin",
                          ),
                        }),
                        (0, f.jsx)(u.InputNumber, {
                          disabled:
                            ((_0x4ef3ba = _0xf898d6.config["extremumMin"]) ==
                            null
                              ? undefined
                              : _0x4ef3ba.type) !==
                            e.SparklineExtremumTypeEnum["CUSTOM_EXTREMUM"],
                          value:
                            (_0x5baa64 = _0xf898d6.config["extremumMin"]) ==
                            null
                              ? undefined
                              : _0x5baa64.value,
                          onChange: (_0x5a9430) => {
                            typeof _0x5a9430 == "number" &&
                              _0x40c5da(_0x5a9430, "min");
                          },
                          className: "univer-ml-3\x20univer-h-6\x20univer-w-14",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, f.jsx)("br", {}),
              (0, f.jsx)("div", {
                className:
                  "univer-mx-0 univer-my-2 univer-text-sm univer-text-gray-500",
                children: _0x15126a.t("sheets-sparkline-ui.panel.max"),
              }),
              (0, f.jsxs)(u.RadioGroup, {
                value:
                  ((_0x2beb06 = _0xf898d6.config["extremumMax"]) == null
                    ? undefined
                    : _0x2beb06.type) ??
                  e.SparklineExtremumTypeEnum["SELF_EXTREMUM"],
                className: "univer-flex\x20univer-flex-col",
                onChange: (_0x1115c7) => _0x1d8188(_0x1115c7, "max"),
                children: [
                  (0, f.jsx)(u.Radio, {
                    value: e.SparklineExtremumTypeEnum["SELF_EXTREMUM"],
                    children: _0x15126a.t("sheets-sparkline-ui.panel.itemMax"),
                  }),
                  (0, f.jsx)(u.Radio, {
                    value: e.SparklineExtremumTypeEnum["GROUP_EXTREMUM"],
                    children: _0x15126a.t("sheets-sparkline-ui.panel.groupMax"),
                  }),
                  (0, f.jsx)(u.Radio, {
                    value: e.SparklineExtremumTypeEnum["CUSTOM_EXTREMUM"],
                    children: (0, f.jsxs)("div", {
                      className: "univer-flex univer-items-center",
                      children: [
                        (0, f.jsx)("div", {
                          children: _0x15126a.t(
                            "sheets-sparkline-ui.panel.customMax",
                          ),
                        }),
                        (0, f.jsx)(u.InputNumber, {
                          disabled:
                            ((_0x3c8352 = _0xf898d6.config["extremumMax"]) ==
                            null
                              ? undefined
                              : _0x3c8352.type) !==
                            e.SparklineExtremumTypeEnum["CUSTOM_EXTREMUM"],
                          value:
                            (_0x2b07cf = _0xf898d6.config["extremumMax"]) ==
                            null
                              ? undefined
                              : _0x2b07cf.value,
                          onChange: (_0x3fbb37) => {
                            typeof _0x3fbb37 == "number" &&
                              _0x40c5da(_0x3fbb37, "max");
                          },
                          className: "univer-ml-3 univer-h-6 univer-w-14",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, f.jsxs)(M, {
          title: _0x15126a.t("sheets-sparkline-ui.panel.moreSetting"),
          containerStyle: { border: "none" },
          children: [
            (0, f.jsx)(u.Checkbox, {
              checked: _0xf898d6.config["containHiddenCells"],
              onChange: (_0x3480f0) => _0x174b14(_0x3480f0),
              children: _0x15126a.t("sheets-sparkline-ui.panel.showHidden"),
            }),
            (0, f.jsxs)("div", {
              className: "univer-mt-3",
              children: [
                (0, f.jsx)("div", {
                  className:
                    "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
                  children: _0x15126a.t(
                    "sheets-sparkline-ui.panel.showEmptyAs",
                  ),
                }),
                (0, f.jsx)(u.Select, {
                  className: "univer-w-full\x20!univer-min-w-0",
                  value:
                    _0xf898d6.config["emptyShowAs"] ??
                    e.SpacialShowAsEnum["SPACING"],
                  options: [
                    {
                      label: _0x15126a.t("sheets-sparkline-ui.panel.spacing"),
                      value: e.SpacialShowAsEnum["SPACING"],
                    },
                    {
                      label: _0x15126a.t("sheets-sparkline-ui.panel.zeroValue"),
                      value: e.SpacialShowAsEnum["ZERO_VALUE"],
                    },
                    {
                      label: _0x15126a.t(
                        "sheets-sparkline-ui.panel.connectWithLine",
                      ),
                      value: e.SpacialShowAsEnum["CONNECT_WITH_LINE"],
                    },
                  ],
                  onChange: (_0x503329) => _0x872826(_0x503329, "empty"),
                }),
              ],
            }),
            (0, f.jsxs)("div", {
              className: "univer-mt-3",
              children: [
                (0, f.jsx)("div", {
                  className:
                    "univer-mb-2\x20univer-text-sm\x20univer-text-gray-800\x20dark:!univer-text-gray-100",
                  children: _0x15126a.t(
                    "sheets-sparkline-ui.panel.showNonNumAs",
                  ),
                }),
                (0, f.jsx)(u.Select, {
                  className: "univer-w-full !univer-min-w-0",
                  value:
                    _0xf898d6.config["nonNumShowAs"] ??
                    e.SpacialShowAsEnum["SPACING"],
                  options: [
                    {
                      label: _0x15126a.t("sheets-sparkline-ui.panel.spacing"),
                      value: e.SpacialShowAsEnum["SPACING"],
                    },
                    {
                      label: _0x15126a.t("sheets-sparkline-ui.panel.zeroValue"),
                      value: e.SpacialShowAsEnum["ZERO_VALUE"],
                    },
                    {
                      label: _0x15126a.t(
                        "sheets-sparkline-ui.panel.connectWithLine",
                      ),
                      value: e.SpacialShowAsEnum["CONNECT_WITH_LINE"],
                    },
                  ],
                  onChange: (_0x1c7b0e) => _0x872826(_0x1c7b0e, "nonNum"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  F = (_0x3167c7) => {
    let {
        onCheckboxChange: _0x1acd84,
        onColorChange: _0x25e877,
        type: _0x397856,
        config: _0x3db9f0,
        chartType: _0x590eaf,
      } = _0x3167c7,
      _0x11bf6d = (0, t.useDependency)(n.LocaleService),
      _0x2cd4b1 = e.SparklineThemeMapping["standard"][1],
      _0x4087a0 = (0, d.useMemo)(
        () => new n.ColorKit(_0x2cd4b1).toHexString(),
        [_0x2cd4b1],
      ),
      _0xa0c45f =
        _0x397856 === "markersPoint" &&
        _0x590eaf !== e.SparklineTypeEnum["LINE_CHART"],
      _0xdbe2c5 =
        (_0x3db9f0 == null ? undefined : _0x3db9f0.color) ?? _0x2cd4b1,
      _0x4fff6e = new n["ColorKit"](_0xdbe2c5).isDark();
    return (0, f.jsxs)("div", {
      className: (0, u.clsx)(
        "univer-flex\x20univer-h-5\x20univer-w-[45%]\x20univer-items-center\x20univer-justify-between\x20univer-rounded-sm\x20hover:univer-bg-gray-200",
      ),
      children: [
        (0, f.jsx)(u.Checkbox, {
          checked: _0x3db9f0 == null ? undefined : _0x3db9f0.visible,
          disabled: _0xa0c45f,
          onChange: (_0x2d7bf5) => _0x1acd84(_0x2d7bf5, _0x397856),
          children: _0x11bf6d.t("sheets-sparkline-ui.panel." + _0x397856),
        }),
        (_0x3db9f0 == null ? undefined : _0x3db9f0.visible) &&
          (0, f.jsx)(u.Dropdown, {
            overlay: (0, f.jsx)("div", {
              className: "univer-p-4",
              children: (0, f.jsx)(u.ColorPicker, {
                value:
                  (_0x3db9f0 == null ? undefined : _0x3db9f0.color) ??
                  _0x4087a0,
                onChange: (_0x30f918) => _0x25e877(_0x30f918, _0x397856),
              }),
            }),
            children: (0, f.jsx)("span", {
              children: (0, f.jsx)(l.PointColorDoubleIcon, {
                className: (0, u.clsx)("univer-mr-0.5 univer-mt-0.5", {
                  "univer-text-gray-0": _0x4fff6e,
                }),
                extend: { colorChannel1: _0xdbe2c5 },
              }),
            }),
          }),
      ],
    });
  },
  I = ({ config: _0x2302a1, ctx: _0x23aa63 }) => {
    var _0xbe7611, _0x5292c8, _0x2ee48f, _0x2398d5, _0x4ac4e7, _0x3b7951;
    let _0x5429a0 = (0, t.useDependency)(n.ICommandService),
      _0x1fa0d3 = (0, t.useDependency)(n.Injector),
      _0x5d9c16 = (0, t.useDependency)(n.LocaleService),
      _0x292c77 = (0, t.useDependency)(e.SparklineDataSourceModel),
      _0x511e30 =
        (_0x2302a1 == null ? undefined : _0x2302a1.config["type"]) ??
        e.SparklineTypeEnum["LINE_CHART"],
      _0x398be5 = _0x511e30 === e.SparklineTypeEnum["LINE_CHART"],
      _0x1a114c = (_0xd47dc9) => {
        let _0x251215 = n.Tools["deepClone"](_0x2302a1) ?? {};
        ((_0x251215 != null && _0x251215.config) || (_0x251215.config = {}),
          (_0x251215.config["type"] = _0xd47dc9),
          _0x5429a0.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x251215,
            isChangeDataSource: false,
          }));
      },
      _0x3c5d9b = (_0x55c516, _0x11e1c6) => {
        var _0x5c9b60;
        let _0x1a2e95 = n.Tools["deepClone"](_0x2302a1) ?? {};
        ((_0x1a2e95 != null && _0x1a2e95.config) || (_0x1a2e95.config = {}),
          _0x1a2e95.config["type"] && delete _0x1a2e95.config["type"],
          (_0x1a2e95 != null && _0x1a2e95.config["points"]) ||
            (_0x1a2e95.config["points"] = {}),
          (_0x1a2e95 != null &&
            (_0x5c9b60 = _0x1a2e95.config["points"]) != null &&
            _0x5c9b60[_0x11e1c6]) ||
            (_0x1a2e95.config["points"][_0x11e1c6] = {}),
          (_0x1a2e95.config["points"][_0x11e1c6].visible = _0x55c516),
          _0x5429a0.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x1a2e95,
            isChangeDataSource: false,
          }));
      },
      _0x33c126 = (_0x541292, _0x243030) => {
        var _0x16d89d;
        let _0x3f58f8 = n.Tools["deepClone"](_0x2302a1) ?? {};
        ((_0x3f58f8 != null && _0x3f58f8.config) || (_0x3f58f8.config = {}),
          _0x3f58f8.config["type"] && delete _0x3f58f8.config["type"],
          (_0x3f58f8 != null && _0x3f58f8.config["points"]) ||
            (_0x3f58f8.config["points"] = {}),
          (_0x3f58f8 != null &&
            (_0x16d89d = _0x3f58f8.config["points"]) != null &&
            _0x16d89d[_0x243030]) ||
            (_0x3f58f8.config["points"][_0x243030] = {}),
          (_0x3f58f8.config["points"][_0x243030].color = _0x541292),
          (_0x3f58f8.config["themeType"] = e.SparklineThemeTypeEnum["CUSTOM"]),
          _0x5429a0.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x3f58f8,
            isChangeDataSource: false,
          }));
      },
      _0x302fd5 = (_0x47b89b) => {
        let _0x639ee5 = n.Tools["deepClone"](_0x2302a1) ?? {};
        ((_0x639ee5 != null && _0x639ee5.config) || (_0x639ee5.config = {}),
          _0x639ee5.config["type"] && delete _0x639ee5.config["type"],
          (_0x639ee5.config["themeType"] = _0x47b89b),
          _0x639ee5.config["seriesColor"] != null &&
            (_0x639ee5.config["seriesColor"] = undefined),
          (_0x639ee5 != null && _0x639ee5.config["points"]) ||
            (_0x639ee5.config["points"] = {}));
        let _0x506ea3 = e.SparklineThemeMapping[_0x47b89b];
        (e.SparklinePointsNames["forEach"]((_0xb292bc) => {
          var _0x4a8e28;
          _0x639ee5 != null &&
          (_0x4a8e28 = _0x639ee5.config["points"]) != null &&
          _0x4a8e28[_0xb292bc]
            ? (_0x639ee5.config["points"][_0xb292bc].color = _0x506ea3[1])
            : (_0x639ee5.config["points"][_0xb292bc] = { color: _0x506ea3[1] });
        }),
          _0x5429a0.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x639ee5,
            isChangeDataSource: false,
          }));
      },
      _0x3a6913 = (_0x473ce3) => {
        let _0x54c403 = n.Tools["deepClone"](_0x2302a1) ?? {};
        ((_0x54c403 != null && _0x54c403.config) || (_0x54c403.config = {}),
          _0x54c403.config["type"] && delete _0x54c403.config["type"],
          (_0x54c403.config["seriesColor"] = _0x473ce3),
          (_0x54c403.config["themeType"] = e.SparklineThemeTypeEnum["CUSTOM"]),
          _0x5429a0.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x54c403,
            isChangeDataSource: false,
          }));
      },
      _0x574ce0 = (_0x227610) => {
        let _0x27c26e = n.Tools["deepClone"](_0x2302a1) ?? {};
        ((_0x27c26e != null && _0x27c26e.config) || (_0x27c26e.config = {}),
          _0x27c26e.config["type"] && delete _0x27c26e.config["type"]);
        let _0x3de35c = Number.parseInt(_0x227610, 10);
        ((_0x27c26e.config["lineWidth"] = _0x3de35c),
          _0x5429a0.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0x27c26e,
            isChangeDataSource: false,
          }));
      },
      _0x1f51bb = (_0x4da7e1) => {
        let _0xab1a01 = n.Tools["deepClone"](_0x2302a1) ?? {};
        ((_0xab1a01 != null && _0xab1a01.config) || (_0xab1a01.config = {}),
          _0xab1a01.config["type"] && delete _0xab1a01.config["type"],
          _0x398be5
            ? (_0xab1a01.config["showGradient"] = _0x4da7e1)
            : (_0xab1a01.config["showRadius"] = _0x4da7e1),
          _0x5429a0.executeCommand(e.SetSheetSparklineCommand["id"], {
            config: _0xab1a01,
            isChangeDataSource: false,
          }));
      },
      _0x4e03e9 = (_0x4de121) => {
        _0x5429a0.executeCommand(e.RemoveSheetSparklineCommand["id"], {
          isIcon: _0x4de121,
        });
      },
      _0x3b8fec = new Set([_0x23aa63.groupId]),
      _0x3f9b98 = _0x23aa63.range;
    for (
      let _0x1d831c = _0x3f9b98.startRow;
      _0x1d831c <= _0x3f9b98.endRow;
      _0x1d831c++
    )
      for (
        let _0xb43e4a = _0x3f9b98.startColumn;
        _0xb43e4a <= _0x3f9b98.endColumn;
        _0xb43e4a++
      ) {
        let _0x59317c = _0x292c77.getSparkline(
          _0x23aa63.unitId,
          _0x23aa63.subUnitId,
          _0x1d831c,
          _0xb43e4a,
        );
        if (_0x59317c && (_0x3b8fec.add(_0x59317c), _0x3b8fec.size > 1)) break;
      }
    return (0, f.jsxs)("div", {
      children: [
        (0, f.jsxs)("div", {
          className:
            "univer-mb-3 univer-flex univer-items-center univer-justify-between",
          children: [
            (0, f.jsx)("div", {
              className: "univer-text-sm univer-font-medium",
              children: _0x5d9c16.t(
                "sheets-sparkline-ui.panel.sourceAndPosition",
              ),
            }),
            (0, f.jsx)("div", {
              className: (0, u.clsx)("univer-cursor-pointer", {
                "univer-cursor-not-allowed": _0x3b8fec.size > 1,
              }),
              onClick: async () => {
                if (_0x3b8fec.size > 1) return;
                let {
                  primary: _0x3dbdb1,
                  range: _0x3dabb8,
                  groupId: _0x51ecc7,
                } = _0x23aa63;
                if (
                  !(await x(_0x1fa0d3, [_0x3dabb8], undefined, {
                    groupId: _0x51ecc7,
                    primary: n.Tools["deepClone"](_0x3dbdb1),
                  }))
                )
                  return false;
              },
              children: (0, f.jsx)(l.WriteIcon, {}),
            }),
          ],
        }),
        (0, f.jsxs)("div", {
          children: [
            (0, f.jsx)("div", {
              className: "univer-mb-3 univer-text-sm univer-font-medium",
              children: _0x5d9c16.t("sheets-sparkline-ui.panel.type"),
            }),
            (0, f.jsx)("div", {
              className: "univer-mb-5 univer-text-sm",
              children: (0, f.jsx)(u.Segmented, {
                className: "univer-w-full",
                value: _0x511e30,
                items: [
                  {
                    label: (0, f.jsxs)("span", {
                      className:
                        "univer-flex univer-items-center univer-justify-center univer-gap-1",
                      children: [
                        (0, f.jsx)(l.LineSparklineIcon, {
                          className: "univer-flex-shrink-0",
                        }),
                        (0, f.jsx)("span", {
                          className: "univer-truncate",
                          children: _0x5d9c16.t(
                            "sheets-sparkline-ui.panel.line",
                          ),
                        }),
                      ],
                    }),
                    value: e.SparklineTypeEnum["LINE_CHART"],
                  },
                  {
                    label: (0, f.jsxs)("span", {
                      className:
                        "univer-flex univer-items-center univer-justify-center univer-gap-1",
                      children: [
                        (0, f.jsx)(l.ColumnSparklineIcon, {
                          className: "univer-flex-shrink-0",
                        }),
                        (0, f.jsx)("span", {
                          className: "univer-truncate",
                          children: _0x5d9c16.t(
                            "sheets-sparkline-ui.panel.bar",
                          ),
                        }),
                      ],
                    }),
                    value: e.SparklineTypeEnum["BAR_CHART"],
                  },
                  {
                    label: (0, f.jsxs)("span", {
                      className:
                        "univer-flex univer-items-center univer-justify-center univer-gap-1",
                      children: [
                        (0, f.jsx)(l.WinlossSparklineIcon, {
                          className: "univer-flex-shrink-0",
                        }),
                        (0, f.jsx)("span", {
                          className: "univer-truncate",
                          children: _0x5d9c16.t(
                            "sheets-sparkline-ui.panel.profitAndLoss",
                          ),
                        }),
                      ],
                    }),
                    value: e.SparklineTypeEnum["PROFIT_AND_LOSS_CHART"],
                  },
                  {
                    label: (0, f.jsxs)("span", {
                      className:
                        "univer-flex univer-items-center univer-justify-center univer-gap-1",
                      children: [
                        (0, f.jsx)(l.PieChartIcon, {
                          className: "univer-flex-shrink-0",
                        }),
                        (0, f.jsx)("span", {
                          className: "univer-truncate",
                          children: _0x5d9c16.t(
                            "sheets-sparkline-ui.panel.pie",
                          ),
                        }),
                      ],
                    }),
                    value: e.SparklineTypeEnum["PIE_CHART"],
                  },
                ],
                onChange: _0x1a114c,
              }),
            }),
          ],
        }),
        _0x2302a1.config["type"] !== e.SparklineTypeEnum["PIE_CHART"] &&
          (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsxs)("div", {
                children: [
                  (0, f.jsx)("div", {
                    className:
                      "univer-mb-3\x20univer-text-sm\x20univer-font-medium",
                    children: _0x5d9c16.t("sheets-sparkline-ui.panel.theme"),
                  }),
                  (0, f.jsx)("div", {
                    className: "univer-mb-5 univer-text-sm",
                    children: (0, f.jsx)(u.Select, {
                      className: "univer-w-full\x20!univer-min-w-0",
                      value: _0x5d9c16.t(
                        "sheets-sparkline-ui.panel." +
                          ((_0x2302a1 == null
                            ? undefined
                            : _0x2302a1.config["themeType"]) ??
                            e.SparklineThemeTypeEnum["STANDARD"]),
                      ),
                      options: Object.keys(e.SparklineThemeMapping).map(
                        (_0x1f9686) => {
                          let _0x1bd276 = e.SparklineThemeMapping[_0x1f9686];
                          return {
                            label: (0, f.jsxs)("div", {
                              className: "univer-flex univer-items-center",
                              children: [
                                (0, f.jsx)("div", {
                                  className:
                                    "univer-rounded-tl-0.5 univer-rounded-bl-0.5 univer-h-4 univer-w-6",
                                  style: { background: _0x1bd276[0] },
                                }),
                                (0, f.jsx)("div", {
                                  className:
                                    "univer-rounded-tl-0.5 univer-rounded-bl-0.5 univer-mr-2 univer-h-4 univer-w-6",
                                  style: { background: _0x1bd276[1] },
                                }),
                                (0, f.jsx)("div", {
                                  children: _0x5d9c16.t(
                                    "sheets-sparkline-ui.panel." + _0x1f9686,
                                  ),
                                }),
                              ],
                            }),
                            value: _0x1f9686,
                          };
                        },
                      ),
                      onChange: (_0x5e2d4b) => _0x302fd5(_0x5e2d4b),
                    }),
                  }),
                ],
              }),
              (0, f.jsxs)("div", {
                children: [
                  (0, f.jsx)("div", {
                    className: "univer-mb-3 univer-text-sm univer-font-medium",
                    children: _0x5d9c16.t(
                      "sheets-sparkline-ui.panel.adjustStyle",
                    ),
                  }),
                  (0, f.jsxs)("div", {
                    className: "univer-mb-5 univer-text-sm",
                    children: [
                      (0, f.jsxs)("div", {
                        className: "univer-flex univer-gap-5",
                        children: [
                          (0, f.jsxs)("div", {
                            className: "univer-flex-1",
                            children: [
                              (0, f.jsx)("div", {
                                className: "univer-mb-2",
                                children: _0x5d9c16.t(
                                  "sheets-sparkline-ui.panel.sparklineColor",
                                ),
                              }),
                              (0, f.jsx)(N, {
                                color:
                                  (_0x2302a1 == null
                                    ? undefined
                                    : _0x2302a1.config["seriesColor"]) ??
                                  "transparent",
                                onChange: _0x3a6913,
                              }),
                            ],
                          }),
                          _0x511e30 === e.SparklineTypeEnum["LINE_CHART"] &&
                            (0, f.jsxs)("div", {
                              className: "univer-flex-1",
                              children: [
                                (0, f.jsx)("div", {
                                  className: "univer-mb-2",
                                  children: _0x5d9c16.t(
                                    "sheets-sparkline-ui.panel.lineWidth",
                                  ),
                                }),
                                (0, f.jsx)(u.Select, {
                                  className: "univer-w-full\x20!univer-min-w-0",
                                  value:
                                    _0x2302a1 != null &&
                                    _0x2302a1.config["lineWidth"]
                                      ? _0x2302a1.config["lineWidth"] + "px"
                                      : "2px",
                                  options: [
                                    { value: "1px", label: "1px" },
                                    { value: "2px", label: "2px" },
                                    { value: "3px", label: "3px" },
                                    { value: "4px", label: "4px" },
                                  ],
                                  onChange: (_0x4a3a49) => _0x574ce0(_0x4a3a49),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, f.jsx)(u.Checkbox, {
                        className: "univer-mt-2",
                        checked: _0x398be5
                          ? _0x2302a1 == null
                            ? undefined
                            : _0x2302a1.config["showGradient"]
                          : _0x2302a1 == null
                            ? undefined
                            : _0x2302a1.config["showRadius"],
                        onChange: (_0x507433) => _0x1f51bb(_0x507433),
                        children: _0x398be5
                          ? _0x5d9c16.t("sheets-sparkline-ui.panel.gradient")
                          : _0x5d9c16.t("sheets-sparkline-ui.panel.radius"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, f.jsxs)("div", {
                children: [
                  (0, f.jsx)("div", {
                    className: "univer-mb-3 univer-text-sm univer-font-medium",
                    children: _0x5d9c16.t("sheets-sparkline-ui.panel.marker"),
                  }),
                  (0, f.jsxs)("div", {
                    className: "univer-mb-5\x20univer-text-sm",
                    children: [
                      (0, f.jsxs)("div", {
                        className:
                          "univer-mb-2 univer-flex univer-w-full univer-justify-between",
                        children: [
                          (0, f.jsx)(
                            F,
                            {
                              onCheckboxChange: _0x3c5d9b,
                              onColorChange: _0x33c126,
                              chartType: _0x511e30,
                              type: "highPoint",
                              config:
                                _0x2302a1 == null ||
                                (_0xbe7611 = _0x2302a1.config["points"]) == null
                                  ? undefined
                                  : _0xbe7611.highPoint,
                            },
                            "highPoint",
                          ),
                          (0, f.jsx)(
                            F,
                            {
                              onCheckboxChange: _0x3c5d9b,
                              onColorChange: _0x33c126,
                              chartType: _0x511e30,
                              type: "firstPoint",
                              config:
                                _0x2302a1 == null ||
                                (_0x5292c8 = _0x2302a1.config["points"]) == null
                                  ? undefined
                                  : _0x5292c8.firstPoint,
                            },
                            "firstPoint",
                          ),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className:
                          "univer-mb-2\x20univer-flex\x20univer-w-full\x20univer-justify-between",
                        children: [
                          (0, f.jsx)(
                            F,
                            {
                              onCheckboxChange: _0x3c5d9b,
                              onColorChange: _0x33c126,
                              chartType: _0x511e30,
                              type: "lowPoint",
                              config:
                                _0x2302a1 == null ||
                                (_0x2ee48f = _0x2302a1.config["points"]) == null
                                  ? undefined
                                  : _0x2ee48f.lowPoint,
                            },
                            "lowPoint",
                          ),
                          (0, f.jsx)(
                            F,
                            {
                              onCheckboxChange: _0x3c5d9b,
                              onColorChange: _0x33c126,
                              chartType: _0x511e30,
                              type: "lastPoint",
                              config:
                                _0x2302a1 == null ||
                                (_0x2398d5 = _0x2302a1.config["points"]) == null
                                  ? undefined
                                  : _0x2398d5.lastPoint,
                            },
                            "lastPoint",
                          ),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className:
                          "univer-mb-2\x20univer-flex\x20univer-w-full\x20univer-justify-between",
                        children: [
                          (0, f.jsx)(
                            F,
                            {
                              onCheckboxChange: _0x3c5d9b,
                              onColorChange: _0x33c126,
                              chartType: _0x511e30,
                              type: "negativePoint",
                              config:
                                _0x2302a1 == null ||
                                (_0x4ac4e7 = _0x2302a1.config["points"]) == null
                                  ? undefined
                                  : _0x4ac4e7.negativePoint,
                            },
                            "negativePoint",
                          ),
                          (0, f.jsx)(
                            F,
                            {
                              onCheckboxChange: _0x3c5d9b,
                              onColorChange: _0x33c126,
                              chartType: _0x511e30,
                              type: "markersPoint",
                              config:
                                _0x2302a1 == null ||
                                (_0x3b7951 = _0x2302a1.config["points"]) == null
                                  ? undefined
                                  : _0x3b7951.markersPoint,
                            },
                            "markersPoint",
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        _0x2302a1.config["type"] === e.SparklineTypeEnum["PIE_CHART"] &&
          (0, f.jsx)("div", {
            className: "univer-mb-3 univer-text-sm univer-font-medium",
            children: _0x5d9c16.t("sheets-sparkline-ui.panel.manager"),
          }),
        (0, f.jsxs)(u.ActionRow, {
          className: "univer-flex\x20univer-justify-between",
          children: [
            (0, f.jsxs)(u.Button, {
              onClick: () => _0x4e03e9(true),
              children: [
                (0, f.jsx)(l.DeleteIcon, {}),
                _0x5d9c16.t("sheets-sparkline-ui.panel.removeItem"),
              ],
            }),
            (0, f.jsxs)(u.Button, {
              onClick: () => _0x4e03e9(false),
              children: [
                (0, f.jsx)(l.DeleteIcon, {}),
                _0x5d9c16.t("sheets-sparkline-ui.panel.removeGroup"),
              ],
            }),
          ],
        }),
      ],
    });
  },
  L = () => {
    var _0x5008a6, _0x1dcd2a, _0x187f90;
    let _0x43c2dc = (0, t.useObservable)(
        (0, t.useDependency)(r.SheetsSelectionsService).selectionMoveEnd$,
      ),
      _0x4abba2 = (0, t.useDependency)(e.SparklineDataSourceModel),
      _0x23768d = (0, t.useDependency)(n.IUniverInstanceService),
      _0x1caa6c = (0, t.useDependency)(n.LocaleService),
      _0xe010a = (0, r.getSheetCommandTarget)(_0x23768d),
      [_0x5d2b2e, _0x2c1711] = (0, d.useState)("basic"),
      _0x358280 = _0x5d2b2e === "basic",
      _0x585f91 = _0xe010a == null ? undefined : _0xe010a.unitId,
      _0xc03eb7 = _0xe010a == null ? undefined : _0xe010a.subUnitId,
      _0x4dd2b3 =
        (_0x43c2dc == null ? undefined : _0x43c2dc.length) === 1
          ? _0x43c2dc[0]
          : undefined,
      _0x1f34f0 = _0x4dd2b3 == null ? undefined : _0x4dd2b3.primary,
      _0x4d01e1 = _0x4dd2b3 == null ? undefined : _0x4dd2b3.range,
      _0x10a09d = _0x4abba2.getSparklineCache(),
      _0x4742a7 =
        _0x585f91 && _0xc03eb7
          ? _0x10a09d == null ||
            (_0x5008a6 = _0x10a09d.sparklineAnchorMap["get"](_0x585f91)) == null
            ? undefined
            : _0x5008a6.get(_0xc03eb7)
          : undefined,
      _0x26e43b = _0x1f34f0
        ? _0x4742a7 == null ||
          (_0x1dcd2a = _0x4742a7.matrix["getValue"](
            _0x1f34f0.actualRow,
            _0x1f34f0.actualColumn,
          )) == null
          ? undefined
          : _0x1dcd2a.groupId
        : undefined,
      _0x19b245 =
        _0x585f91 && _0xc03eb7 && _0x26e43b
          ? (_0x187f90 = _0x10a09d.sparklineModel["get"](_0x585f91)) == null ||
            (_0x187f90 = _0x187f90.get(_0xc03eb7)) == null
            ? undefined
            : _0x187f90.get(_0x26e43b)
          : undefined,
      _0x4b8cd0 = (0, t.useObservable)(
        _0x585f91 && _0xc03eb7 && _0x26e43b
          ? () =>
              _0x4abba2.updateConfig$["pipe"](
                (0, o.filter)(
                  (_0x3a412d) =>
                    _0x3a412d.unitId === _0x585f91 &&
                    _0x3a412d.subUnitId === _0xc03eb7 &&
                    _0x3a412d.groupId === _0x26e43b,
                ),
                (0, o.map)((_0x48a4a0) => _0x48a4a0.config),
                (0, o.startWith)(_0x19b245),
              )
          : null,
        _0x19b245,
        false,
        [_0x19b245, _0x26e43b, _0x4abba2, _0xc03eb7, _0x585f91],
      );
    if (
      !_0x585f91 ||
      !_0xc03eb7 ||
      !_0x1f34f0 ||
      !_0x4d01e1 ||
      !_0x26e43b ||
      !_0x4b8cd0
    )
      return null;
    let _0x321884 = {
      unitId: _0x585f91,
      subUnitId: _0xc03eb7,
      range: _0x4d01e1,
      primary: _0x1f34f0,
      groupId: _0x26e43b,
    };
    return (0, f.jsxs)("div", {
      className:
        "univer-max-w-[290px] univer-pb-4 univer-text-gray-900 dark:!univer-text-gray-0",
      children: [
        (0, f.jsxs)("div", {
          className:
            "univer-relative univer-mx-0 univer-my-4 univer-box-border univer-flex univer-h-10 univer-items-center univer-justify-around",
          children: [
            (0, f.jsxs)("div", {
              className: (0, u.clsx)(
                "univer-relative univer-flex univer-h-full univer-cursor-pointer univer-flex-col univer-font-medium univer-leading-7",
                { "univer-text-primary-600": _0x358280 },
              ),
              children: [
                (0, f.jsx)("div", {
                  onClick: () => _0x2c1711("basic"),
                  children: _0x1caa6c.t("sheets-sparkline-ui.panel.basic"),
                }),
                _0x358280 &&
                  (0, f.jsx)("div", {
                    className:
                      "univer-absolute univer-bottom-0 univer-h-0.5 univer-w-full univer-rounded-sm univer-bg-primary-600 univer-transition-transform univer-duration-300 univer-ease-in-out",
                  }),
              ],
            }),
            (0, f.jsxs)("div", {
              className: (0, u.clsx)(
                "univer-relative\x20univer-flex\x20univer-h-full\x20univer-cursor-pointer\x20univer-flex-col\x20univer-font-medium\x20univer-leading-7",
                {
                  "univer-text-primary-600": !_0x358280,
                  "univer-cursor-not-allowed\x20univer-text-gray-200":
                    _0x4b8cd0.config["type"] ===
                    e.SparklineTypeEnum["PIE_CHART"],
                },
              ),
              children: [
                (0, f.jsx)("div", {
                  onClick: () => {
                    _0x4b8cd0.config["type"] !==
                      e.SparklineTypeEnum["PIE_CHART"] && _0x2c1711("advanced");
                  },
                  children: _0x1caa6c.t("sheets-sparkline-ui.panel.advanced"),
                }),
                !_0x358280 &&
                  (0, f.jsx)("div", {
                    className:
                      "univer-bg-pruniver-text-primary-600 univer-absolute univer-bottom-0 univer-h-0.5 univer-w-full univer-rounded-sm univer-transition-transform univer-duration-300 univer-ease-in-out",
                  }),
              ],
            }),
          ],
        }),
        (0, f.jsx)("div", {
          children: _0x358280
            ? (0, f.jsx)(I, { config: _0x4b8cd0, ctx: _0x321884 })
            : (0, f.jsx)(P, { config: _0x4b8cd0, ctx: _0x321884 }),
        }),
      ],
    });
  };
function R(_0x45cf30, _0x41d615, _0x1a2ff9) {
  if (!_0x1a2ff9) return false;
  if (_0x41d615.length !== _0x1a2ff9.length) {
    if (_0x1a2ff9.length === 1) {
      let _0xcf817c = _0x1a2ff9[0];
      if (
        _0xcf817c.startRow !== _0xcf817c.endRow &&
        _0xcf817c.startColumn !== _0xcf817c.endColumn
      )
        return false;
    } else return false;
  }
  if (_0x45cf30 === "item") {
    if (_0x1a2ff9.length !== 1) return false;
    let {
      startRow: _0x5e35e5,
      startColumn: _0x13790c,
      endRow: _0x2c1297,
      endColumn: _0x419221,
    } = _0x1a2ff9[0];
    if (_0x5e35e5 !== _0x2c1297 && _0x13790c !== _0x419221) return false;
  }
  if (_0x1a2ff9.length > 1) {
    if (
      _0x1a2ff9.some((_0x19b26d) => {
        let {
          startRow: _0x1aa00b,
          startColumn: _0x324554,
          endRow: _0x296860,
          endColumn: _0x3560fc,
        } = _0x19b26d;
        return _0x1aa00b !== _0x296860 || _0x324554 !== _0x3560fc;
      })
    )
      return false;
  } else {
    let {
      startRow: _0x1cf547,
      startColumn: _0x1e1627,
      endRow: _0x18aef1,
      endColumn: _0x1d972a,
    } = _0x1a2ff9[0];
    if (_0x1cf547 !== _0x18aef1 && _0x1e1627 !== _0x1d972a) return false;
  }
  let _0x54a79a = 0;
  for (let _0x52a985 of _0x1a2ff9)
    _0x54a79a +=
      (_0x52a985.endRow - _0x52a985.startRow + 1) *
      (_0x52a985.endColumn - _0x52a985.startColumn + 1);
  if (_0x41d615.length > 1) {
    for (let _0x56960c of _0x41d615) {
      let {
        startColumn: _0x4e04e8,
        startRow: _0x447e7a,
        endRow: _0x40d3bc,
        endColumn: _0x54b03b,
      } = _0x56960c;
      if (_0x4e04e8 !== _0x54b03b && _0x447e7a !== _0x40d3bc) return false;
    }
    for (let _0x522e13 of _0x1a2ff9) {
      let {
        startColumn: _0x4f4013,
        startRow: _0xc6123f,
        endRow: _0x383c8e,
        endColumn: _0x563551,
      } = _0x522e13;
      if (_0x4f4013 !== _0x563551 && _0xc6123f !== _0x383c8e) return false;
    }
    return true;
  } else {
    let _0xa66d9f = _0x41d615[0].endRow - _0x41d615[0].startRow + 1,
      _0x5d3c5d = _0x41d615[0].endColumn - _0x41d615[0].startColumn + 1;
    return _0x54a79a === _0xa66d9f || _0x54a79a === _0x5d3c5d;
  }
}
const z = {
    cellSourceRanges: [],
    cellTargetRanges: [],
    groupSourceRanges: [],
    groupTargetRanges: [],
  },
  B = (_0x8c5166, _0x413a9f, _0x56aec2) => {
    var _0x33485e, _0x227f17;
    if (!_0x413a9f || !_0x56aec2) return z;
    let _0x466a8d = _0x8c5166.get(n.IUniverInstanceService),
      _0x3b5dbf = _0x8c5166.get(e.SparklineDataSourceModel),
      _0x46678f = (0, r.getSheetCommandTarget)(_0x466a8d);
    if (!_0x46678f) return;
    let { unitId: _0x532d07, subUnitId: _0xcabb0f } = _0x46678f,
      { actualRow: _0x8db8e0, actualColumn: _0x51a266 } = _0x413a9f,
      _0x41f8f6 =
        (_0x33485e = _0x3b5dbf
          .getSparklineCache()
          .sparklineModel["get"](_0x532d07)) == null ||
        (_0x33485e = _0x33485e.get(_0xcabb0f)) == null ||
        (_0x33485e = _0x33485e.get(_0x56aec2)) == null
          ? undefined
          : _0x33485e.sparklines["getValue"](_0x8db8e0, _0x51a266);
    if (!_0x41f8f6) return;
    let _0x319e8b = [_0x41f8f6],
      _0x2f57a2 = [(0, n.cellToRange)(_0x8db8e0, _0x51a266)],
      _0x1f9e5c = [],
      _0x55a0ed = [],
      _0x441ba8 =
        (_0x227f17 = _0x3b5dbf
          .getSparklineCache()
          .sparklineModel["get"](_0x532d07)) == null ||
        (_0x227f17 = _0x227f17.get(_0xcabb0f)) == null ||
        (_0x227f17 = _0x227f17.get(_0x56aec2)) == null
          ? undefined
          : _0x227f17.sparklines;
    return (
      _0x441ba8 == null ||
        _0x441ba8.forValue((_0x5f19e3, _0x348b69, _0x3ace20) => {
          let _0x5911f6 = _0x3ace20;
          (_0x1f9e5c.push(_0x5911f6),
            _0x55a0ed.push((0, n.cellToRange)(_0x5f19e3, _0x348b69)));
        }),
      {
        cellSourceRanges: _0x319e8b,
        cellTargetRanges: _0x2f57a2,
        groupSourceRanges: _0x1f9e5c,
        groupTargetRanges: _0x55a0ed,
      }
    );
  };
function V(_0x4993c9) {
  let {
      sourceRanges: _0x22e507,
      targetRanges: _0x5cdd58,
      onConfirm: _0x318341,
      onCancel: _0x556456,
      resetCtx: _0x3bb4e7,
    } = _0x4993c9,
    _0x34181e = (0, t.useDependency)(n.IUniverInstanceService),
    _0x4652a8 = (0, t.useDependency)(n.ICommandService),
    _0x5d658e = (0, t.useDependency)(e.SparklineDataSourceModel),
    _0x3967d4 = (0, t.useDependency)(n.LocaleService),
    _0x4fda52 = (0, t.useDependency)(n.Injector),
    [_0x1d83b2, _0xadd4ee] = (0, d.useState)(),
    [_0xe541d8, _0x2189eb] = (0, d.useState)(),
    [_0x3b09b0, _0x71d9fb] = (0, d.useState)(_0x3bb4e7 ? "item" : "none"),
    _0x2f471c = (0, d.useMemo)(
      () =>
        B(
          _0x4fda52,
          _0x3bb4e7 == null ? undefined : _0x3bb4e7.primary,
          _0x3bb4e7 == null ? undefined : _0x3bb4e7.groupId,
        ),
      [
        _0x4fda52,
        _0x3bb4e7 == null ? undefined : _0x3bb4e7.groupId,
        _0x3bb4e7 == null ? undefined : _0x3bb4e7.primary,
      ],
    ),
    {
      cellSourceRanges: _0x1b594f,
      cellTargetRanges: _0x284670,
      groupSourceRanges: _0x4c7819,
      groupTargetRanges: _0x2a0fb8,
    } = _0x2f471c ?? {},
    [_0x61cc1, _0x5ce524] = (0, d.useState)(_0x3bb4e7 ? _0x1b594f : _0x22e507),
    [_0x203576, _0x568eb9] = (0, d.useState)(_0x3bb4e7 ? _0x284670 : _0x5cdd58),
    _0x143f9e = (0, t.useDependency)(t.IDialogService),
    _0x40e6d7 = (0, d.useRef)(null);
  (0, d.useEffect)(() => {
    ((_0x61cc1 == null ? undefined : _0x61cc1.length) === 0 &&
      _0xadd4ee(undefined),
      (_0x203576 == null ? undefined : _0x203576.length) === 0 &&
        _0x2189eb(undefined));
    let _0x6121b3 = R(_0x3b09b0, _0x61cc1, _0x203576);
    _0x2189eb(
      _0x6121b3
        ? undefined
        : _0x3967d4.t("sheets-sparkline-ui.selector.targetError"),
    );
  }, [_0x3967d4, _0x3b09b0, _0x61cc1, _0x203576]);
  let _0x233233 = (_0xbd5ae0) => {
      (_0x71d9fb(_0xbd5ae0),
        _0x5ce524(
          _0xbd5ae0 === "item"
            ? _0x2f471c == null
              ? undefined
              : _0x2f471c.cellSourceRanges
            : _0x2f471c == null
              ? undefined
              : _0x2f471c.groupSourceRanges,
        ),
        _0x568eb9(
          _0xbd5ae0 === "item"
            ? _0x2f471c == null
              ? undefined
              : _0x2f471c.cellTargetRanges
            : _0x2f471c == null
              ? undefined
              : _0x2f471c.groupTargetRanges,
        ));
    },
    { initSourceRangeStr: _0x20cdcd, initTargetRangeStr: _0x1fa647 } = (0,
    d.useMemo)(() => {
      let _0x996ccf, _0x561314;
      return (
        _0x3bb4e7
          ? ((_0x996ccf = _0x3b09b0 === "item" ? _0x1b594f : _0x4c7819),
            (_0x561314 = _0x3b09b0 === "item" ? _0x284670 : _0x2a0fb8))
          : ((_0x996ccf = _0x22e507), (_0x561314 = _0x5cdd58)),
        {
          initSourceRangeStr:
            (_0x996ccf == null
              ? undefined
              : _0x996ccf
                  .map((_0x6d0512) => {
                    if (!(0, n.isValidRange)(_0x6d0512))
                      return (
                        _0xadd4ee(
                          _0x3967d4.t(
                            "sheets-sparkline-ui.selector.targetError",
                          ),
                        ),
                        "#REF!"
                      );
                    let _0x2fffa5 = (0, p.serializeRange)(_0x6d0512);
                    return _0x2fffa5 === "NaN" ? "" : _0x2fffa5;
                  })
                  .filter((_0x7e3ee1) => !!_0x7e3ee1)
                  .join(",")) ?? "",
          initTargetRangeStr:
            (_0x561314 == null
              ? undefined
              : _0x561314
                  .map((_0x3c2310) => {
                    let _0x2db283 = (0, p.serializeRange)(_0x3c2310);
                    return _0x2db283 === "NaN" ? "" : _0x2db283;
                  })
                  .filter((_0x1aebab) => !!_0x1aebab)
                  .join(",")) ?? "",
        }
      );
    }, [
      _0x1b594f,
      _0x284670,
      _0x4c7819,
      _0x2a0fb8,
      _0x3967d4,
      _0x22e507,
      _0x5cdd58,
      _0x3bb4e7,
      _0x3b09b0,
    ]),
    _0x20b3a8 = (0, r.getSheetCommandTarget)(_0x34181e);
  if (!_0x20b3a8) return null;
  let {
    unitId: _0x5166ef,
    subUnitId: _0x58f053,
    worksheet: _0x36ad67,
  } = _0x20b3a8;
  return (0, f.jsxs)("div", {
    ref: _0x40e6d7,
    children: [
      !!_0x3bb4e7 &&
        (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)("div", {
              className: "univer-mb-2 univer-text-sm",
              children: _0x3967d4.t("sheets-sparkline-ui.selector.changeType"),
            }),
            (0, f.jsxs)("div", {
              className: (0, u.clsx)(
                "univer-mb-4\x20univer-box-content\x20univer-flex\x20univer-h-7\x20univer-w-full\x20univer-rounded-sm\x20univer-p-0.5",
                u.borderClassName,
              ),
              children: [
                (0, f.jsx)("div", {
                  className: (0, u.clsx)(
                    "univer-h-7 univer-flex-1 univer-cursor-pointer univer-rounded-sm univer-text-center univer-text-sm univer-leading-7",
                    {
                      "univer-bg-blue-200\x20univer-scrollbar-corner-primary-600":
                        _0x3b09b0 === "item",
                    },
                  ),
                  onClick: () => _0x233233("item"),
                  children: _0x3967d4.t(
                    "sheets-sparkline-ui.selector.sparkline",
                  ),
                }),
                (0, f.jsx)("div", {
                  className: (0, u.clsx)(
                    "univer-h-7\x20univer-flex-1\x20univer-cursor-pointer\x20univer-rounded-sm\x20univer-text-center\x20univer-text-sm\x20univer-leading-7",
                    {
                      "univer-bg-blue-200\x20univer-scrollbar-corner-primary-600":
                        _0x3b09b0 === "group",
                    },
                  ),
                  onClick: () => _0x233233("group"),
                  children: _0x3967d4.t(
                    "sheets-sparkline-ui.selector.sparklineGroup",
                  ),
                }),
              ],
            }),
          ],
        }),
      (0, f.jsxs)("div", {
        className: "univer-mb-4",
        children: [
          (0, f.jsx)("div", {
            className:
              "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
            children: _0x3967d4.t("sheets-sparkline-ui.selector.setSource"),
          }),
          (0, f.jsx)(
            m.RangeSelector,
            {
              unitId: _0x5166ef,
              subUnitId: _0x58f053,
              initialValue: _0x20cdcd,
              onChange: (_0x4e35a0, _0x42b72a) => {
                let _0x4ca280 = _0x42b72a
                  .split(",")
                  .map(p.deserializeRangeWithSheet)
                  .map((_0x48cc72) =>
                    n.Range["transformRange"](_0x48cc72.range, _0x36ad67),
                  );
                if (
                  !_0x4ca280.some(
                    (_0x1d8646) =>
                      !(0, n.isValidRange)(_0x1d8646) ||
                      _0x1d8646.endColumn < _0x1d8646.startColumn ||
                      _0x1d8646.endRow < _0x1d8646.startRow,
                  )
                ) {
                  if (_0x4ca280.length > 1) {
                    if (_0x3b09b0 === "item") {
                      _0xadd4ee(
                        _0x3967d4.t(
                          "sheets-sparkline-ui.selector.singleSourceError",
                        ),
                      );
                      return;
                    }
                    let _0x8defd4 = _0x4ca280.some((_0x183467) => {
                      let {
                        startRow: _0x3eeb8e,
                        endRow: _0x1654bb,
                        startColumn: _0x5284ae,
                        endColumn: _0x403850,
                      } = _0x183467;
                      return _0x3eeb8e !== _0x1654bb && _0x5284ae !== _0x403850;
                    });
                    (_0xadd4ee(
                      _0x8defd4
                        ? _0x3967d4.t(
                            "sheets-sparkline-ui.selector.multSourceError",
                          )
                        : undefined,
                    ),
                      _0x8defd4 || _0x5ce524(_0x4ca280));
                    return;
                  } else {
                    let {
                      startRow: _0x31bbcd,
                      endRow: _0x11d7ac,
                      startColumn: _0x13a10e,
                      endColumn: _0x5f0880,
                    } = _0x4ca280[0];
                    if (
                      _0x3b09b0 === "item" &&
                      _0x31bbcd !== _0x11d7ac &&
                      _0x13a10e !== _0x5f0880
                    ) {
                      _0xadd4ee(
                        _0x3967d4.t(
                          "sheets-sparkline-ui.selector.resetSourceError",
                        ),
                      );
                      return;
                    }
                  }
                  (_0xadd4ee(undefined), _0x5ce524(_0x4ca280));
                }
              },
              supportAcrossSheet: false,
            },
            _0x20cdcd,
          ),
          _0x1d83b2
            ? (0, f.jsx)("div", {
                className: "univer-text-xs univer-text-red-500",
                children: _0x1d83b2,
              })
            : null,
        ],
      }),
      (0, f.jsxs)("div", {
        className: "univer-mb-4",
        children: [
          (0, f.jsx)("div", {
            className:
              "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
            children: _0x3967d4.t("sheets-sparkline-ui.selector.setTarget"),
          }),
          (0, f.jsx)(
            m.RangeSelector,
            {
              unitId: _0x5166ef,
              subUnitId: _0x58f053,
              initialValue: _0x1fa647,
              onChange: (_0x4d92e2, _0x3b2ae9) => {
                let _0x199a74 = _0x3b2ae9
                  .split(",")
                  .map(p.deserializeRangeWithSheet)
                  .map((_0x57c7cd) => _0x57c7cd.range);
                _0x199a74.some(
                  (_0x581f03) =>
                    !(0, n.isValidRange)(_0x581f03) ||
                    _0x581f03.endColumn < _0x581f03.startColumn ||
                    _0x581f03.endRow < _0x581f03.startRow,
                ) || _0x568eb9(_0x199a74);
              },
              supportAcrossSheet: false,
            },
            _0x1fa647,
          ),
          _0xe541d8
            ? (0, f.jsx)("div", {
                className: "univer-text-xs univer-text-red-500",
                children: _0xe541d8,
              })
            : null,
        ],
      }),
      (0, f.jsxs)(u.ActionRow, {
        className: "univer-flex\x20univer-justify-end\x20univer-gap-2",
        children: [
          (0, f.jsx)(u.Button, {
            onClick: () => {
              _0x143f9e.close(g);
            },
            children: _0x3967d4.t("sheets-sparkline-ui.selector.cancel"),
          }),
          (0, f.jsx)(u.Button, {
            variant: "primary",
            onClick: () => {
              if (_0x61cc1 && _0x203576 && !_0x1d83b2 && !_0xe541d8) {
                if (_0x3bb4e7) {
                  var _0x57e256;
                  let _0x498496 =
                    (_0x57e256 = _0x5d658e
                      .getSparklineCache()
                      .sparklineModel["get"](_0x5166ef)) == null ||
                    (_0x57e256 = _0x57e256.get(_0x58f053)) == null
                      ? undefined
                      : _0x57e256.get(_0x3bb4e7.groupId);
                  (_0x4652a8.executeCommand(e.SetSheetSparklineCommand["id"], {
                    config: _0x498496,
                    isChangeDataSource: true,
                    changeDataSourceInfo: {
                      sourceRanges: _0x61cc1,
                      targetRanges: _0x203576,
                      groupId: _0x3bb4e7.groupId,
                      resetType: _0x3b09b0,
                      primary: _0x3bb4e7.primary,
                    },
                  }),
                    _0x556456());
                } else
                  _0x318341({
                    sourceRanges: _0x61cc1,
                    targetRanges: _0x203576,
                  });
              }
            },
            disabled: !!(_0x1d83b2 || _0xe541d8),
            children: _0x3967d4.t("sheets-sparkline-ui.selector.confirm"),
          }),
        ],
      }),
    ],
  });
}
function H(_0x31797e, _0x12ff7e) {
  return function (_0x58c22b, _0x42fc81) {
    _0x12ff7e(_0x58c22b, _0x42fc81, _0x31797e);
  };
}
function U(_0x22da60, _0x4f18ed, _0x23bff3, _0x5cc6ac) {
  var _0x417191 = arguments.length,
    _0x2f6d44 =
      _0x417191 < 3
        ? _0x4f18ed
        : _0x5cc6ac === null
          ? (_0x5cc6ac = Object.getOwnPropertyDescriptor(_0x4f18ed, _0x23bff3))
          : _0x5cc6ac,
    _0xeacee2;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2f6d44 = Reflect.decorate(_0x22da60, _0x4f18ed, _0x23bff3, _0x5cc6ac);
  else {
    for (var _0x442456 = _0x22da60.length - 1; _0x442456 >= 0; _0x442456--)
      (_0xeacee2 = _0x22da60[_0x442456]) &&
        (_0x2f6d44 =
          (_0x417191 < 3
            ? _0xeacee2(_0x2f6d44)
            : _0x417191 > 3
              ? _0xeacee2(_0x4f18ed, _0x23bff3, _0x2f6d44)
              : _0xeacee2(_0x4f18ed, _0x23bff3)) || _0x2f6d44);
  }
  return (
    _0x417191 > 3 &&
      _0x2f6d44 &&
      Object.defineProperty(_0x4f18ed, _0x23bff3, _0x2f6d44),
    _0x2f6d44
  );
}
let W = class extends n.Disposable {
  constructor(_0x1f1935, _0x524aca) {
    (super(),
      (this._componentManager = _0x1f1935),
      (this._iconManager = _0x524aca),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    [
      [g, V],
      [_, L],
    ].forEach(([_0x1565c7, _0x333905]) => {
      this.disposeWithMe(
        this._componentManager["register"](_0x1565c7, _0x333905),
      );
    });
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ [h]: l.LineSparklineIcon }),
    );
  }
};
W = U(
  [H(0, (0, n.Inject)(t.ComponentManager)), H(1, (0, n.Inject)(t.IconManager))],
  W,
);
let G = class extends n.Disposable {
  constructor(_0x5b6bb1, _0x2f45e2, _0x17d572, _0x953657) {
    (super(),
      (this._injector = _0x5b6bb1),
      (this._univerInstanceService = _0x2f45e2),
      (this._autoFillService = _0x17d572),
      (this._sparklineDataSourceModel = _0x953657),
      this._initAutoFillWithSparkline());
  }
  _initAutoFillWithSparkline() {
    let _0x4d0c7f = () => ({ redos: [], undos: [] }),
      _0x34ec53 = (_0xd19f34, _0x3ba527) => {
        let _0x13a9da = [],
          _0x10936a = [],
          {
            source: _0x20e4e0,
            target: _0x4c2ea7,
            unitId: _0x2f5db5,
            subUnitId: _0x2a65d3,
          } = _0xd19f34;
        if (!_0x20e4e0 || !_0x4c2ea7 || _0x3ba527 == null)
          return { undos: _0x13a9da, redos: _0x10936a };
        let _0x14fa24 = (0, r.discreteRangeToRange)(_0x20e4e0),
          _0x51e7bc = (0, r.discreteRangeToRange)(_0x4c2ea7),
          _0x50ecc6 = _0x14fa24.endRow - _0x14fa24.startRow + 1,
          _0x97edbc = _0x14fa24.endColumn - _0x14fa24.startColumn + 1,
          _0x52a1a2 = _0x51e7bc.endRow - _0x51e7bc.startRow + 1,
          _0xbbf703 = _0x51e7bc.endColumn - _0x51e7bc.startColumn + 1;
        if (n.Rectangle["contains"](_0x14fa24, _0x51e7bc))
          return { undos: _0x13a9da, redos: _0x10936a };
        if (_0x3ba527 === n.Direction["UP"]) {
          let _0x5db978 = {},
            _0x3efe69 = {},
            _0xbd347f = new Set();
          for (let _0x19907c = 0; _0x19907c < _0x97edbc; _0x19907c++)
            for (let _0x5cf526 = 0; _0x5cf526 < _0x52a1a2; _0x5cf526++) {
              let _0x4edd76 = _0x5cf526 % _0x50ecc6,
                _0x15905e = _0x51e7bc.startRow + _0x5cf526,
                _0x5a7ae0 = _0x51e7bc.startColumn + _0x19907c,
                _0x34be11 = _0x14fa24.startRow + _0x4edd76,
                _0x18bcc0 = this._sparklineDataSourceModel["getSparkline"](
                  _0x2f5db5,
                  _0x2a65d3,
                  _0x15905e,
                  _0x5a7ae0,
                );
              if (_0x18bcc0) {
                _0xbd347f.add(_0x18bcc0);
                let _0x4cdd1e = this._sparklineDataSourceModel[
                  "getSparklineById"
                ](_0x2f5db5, _0x2a65d3, _0x18bcc0);
                if (_0x4cdd1e) {
                  _0x3efe69[_0x18bcc0] = {
                    config: n.Tools["deepClone"](_0x4cdd1e.config),
                    sparklines: n.Tools["deepClone"](
                      _0x4cdd1e.sparklines["clone"](),
                    ),
                  };
                  let _0x31f340 = _0x5db978[_0x18bcc0];
                  (_0x31f340 ||
                    ((_0x31f340 = {
                      config: n.Tools["deepClone"](_0x4cdd1e.config),
                      sparklines: new n["ObjectMatrix"](
                        _0x4cdd1e.sparklines["clone"](),
                      ),
                    }),
                    (_0x5db978[_0x18bcc0] = _0x31f340)),
                    _0x31f340.sparklines["realDeleteValue"](
                      _0x15905e,
                      _0x5a7ae0,
                    ));
                }
              }
              let _0x5497df = this._sparklineDataSourceModel["getSparkline"](
                _0x2f5db5,
                _0x2a65d3,
                _0x34be11,
                _0x5a7ae0,
              );
              if (_0x5497df) {
                let _0x48892c = this._sparklineDataSourceModel[
                  "getSparklineById"
                ](_0x2f5db5, _0x2a65d3, _0x5497df);
                if (_0x48892c) {
                  var _0x14c51d;
                  _0x3efe69[_0x5497df] = {
                    config: n.Tools["deepClone"](_0x48892c.config),
                    sparklines: n.Tools["deepClone"](
                      _0x48892c.sparklines["clone"](),
                    ),
                  };
                  let _0x4af7bf = _0x5db978[_0x5497df];
                  (_0x4af7bf ||
                    ((_0x4af7bf = {
                      config: n.Tools["deepClone"](_0x48892c.config),
                      sparklines: new n["ObjectMatrix"](
                        _0x48892c.sparklines["clone"](),
                      ),
                    }),
                    (_0x5db978[_0x5497df] = _0x4af7bf)),
                    _0x4af7bf.sparklines["realDeleteValue"](
                      _0x15905e,
                      _0x5a7ae0,
                    ));
                  let _0x68f43 =
                      (_0x14c51d = this._sparklineDataSourceModel[
                        "getSparklineById"
                      ](_0x2f5db5, _0x2a65d3, _0x5497df)) == null
                        ? undefined
                        : _0x14c51d.sparklines,
                    _0x42cb77 =
                      _0x68f43 == null
                        ? undefined
                        : _0x68f43.getValue(_0x34be11, _0x5a7ae0);
                  if (_0x42cb77) {
                    let _0x2c4b8c = {
                      ..._0x42cb77,
                      startRow: _0x42cb77.startRow + _0x15905e - _0x34be11,
                      endRow: _0x42cb77.endRow + _0x15905e - _0x34be11,
                    };
                    (_0x4af7bf.sparklines["setValue"](
                      _0x15905e,
                      _0x5a7ae0,
                      _0x2c4b8c,
                    ),
                      _0xbd347f.add(_0x5497df));
                  }
                }
              }
              let _0x5419a7 = {};
              (Object.entries(_0x5db978).forEach(([_0x336669, _0x950083]) => {
                _0x950083.sparklines["getSizeOf"]() &&
                  (_0x5419a7[_0x336669] = {
                    config: _0x950083.config,
                    sparklines: _0x950083.sparklines["clone"](),
                  });
              }),
                _0xbd347f.size &&
                  (_0x10936a.push({
                    id: e.RemoveSheetSparklineMutation["id"],
                    params: {
                      unitId: _0x2f5db5,
                      subUnitId: _0x2a65d3,
                      groupIds: Array.from(_0xbd347f),
                      isSingle: false,
                    },
                  }),
                  _0x13a9da.push({
                    id: e.RemoveSheetSparklineMutation["id"],
                    params: {
                      unitId: _0x2f5db5,
                      subUnitId: _0x2a65d3,
                      groupIds: Array.from(_0xbd347f),
                      isSingle: false,
                    },
                  }),
                  _0x10936a.push({
                    id: e.AddSheetSparklineMutation["id"],
                    params: {
                      unitId: _0x2f5db5,
                      subUnitId: _0x2a65d3,
                      sparklineConfigMap: _0x5419a7,
                    },
                  }),
                  _0x13a9da.push({
                    id: e.AddSheetSparklineMutation["id"],
                    params: {
                      unitId: _0x2f5db5,
                      subUnitId: _0x2a65d3,
                      sparklineConfigMap: _0x3efe69,
                    },
                  })));
            }
        } else {
          if (_0x3ba527 === n.Direction["DOWN"]) {
            let _0x2742d3 = {},
              _0x52ef42 = {},
              _0x4f434d = new Set();
            for (let _0x4e07bb = 0; _0x4e07bb < _0x97edbc; _0x4e07bb++)
              for (let _0x2d7ace = 0; _0x2d7ace < _0x52a1a2; _0x2d7ace++) {
                let _0x7f44f1 = _0x2d7ace % _0x50ecc6,
                  _0x246b14 = _0x51e7bc.startRow + _0x2d7ace,
                  _0x1ab677 = _0x51e7bc.startColumn + _0x4e07bb,
                  _0x20b24f = _0x14fa24.startRow + _0x7f44f1,
                  _0x38151c = this._sparklineDataSourceModel["getSparkline"](
                    _0x2f5db5,
                    _0x2a65d3,
                    _0x20b24f,
                    _0x1ab677,
                  ),
                  _0x435ae3 = this._sparklineDataSourceModel["getSparkline"](
                    _0x2f5db5,
                    _0x2a65d3,
                    _0x246b14,
                    _0x1ab677,
                  );
                if (_0x435ae3) {
                  _0x4f434d.add(_0x435ae3);
                  let _0x55c5e7 = this._sparklineDataSourceModel[
                    "getSparklineById"
                  ](_0x2f5db5, _0x2a65d3, _0x435ae3);
                  if (_0x55c5e7) {
                    _0x52ef42[_0x435ae3] = {
                      config: n.Tools["deepClone"](_0x55c5e7.config),
                      sparklines: n.Tools["deepClone"](
                        _0x55c5e7.sparklines["clone"](),
                      ),
                    };
                    let _0x30c474 = _0x2742d3[_0x435ae3];
                    (_0x30c474 ||
                      ((_0x30c474 = {
                        config: n.Tools["deepClone"](_0x55c5e7.config),
                        sparklines: new n["ObjectMatrix"](
                          _0x55c5e7.sparklines["clone"](),
                        ),
                      }),
                      (_0x2742d3[_0x435ae3] = _0x30c474)),
                      _0x30c474.sparklines["realDeleteValue"](
                        _0x246b14,
                        _0x1ab677,
                      ));
                  }
                }
                if (_0x38151c) {
                  let _0x2eb006 = this._sparklineDataSourceModel[
                    "getSparklineById"
                  ](_0x2f5db5, _0x2a65d3, _0x38151c);
                  if (_0x2eb006) {
                    var _0x8ff489;
                    _0x52ef42[_0x38151c] = {
                      config: n.Tools["deepClone"](_0x2eb006.config),
                      sparklines: n.Tools["deepClone"](
                        _0x2eb006.sparklines["clone"](),
                      ),
                    };
                    let _0x18894e = _0x2742d3[_0x38151c];
                    (_0x18894e ||
                      ((_0x18894e = {
                        config: n.Tools["deepClone"](_0x2eb006.config),
                        sparklines: new n.ObjectMatrix(
                          _0x2eb006.sparklines["clone"](),
                        ),
                      }),
                      (_0x2742d3[_0x38151c] = _0x18894e)),
                      _0x18894e.sparklines["realDeleteValue"](
                        _0x246b14,
                        _0x1ab677,
                      ));
                    let _0x2868d2 =
                        (_0x8ff489 = this._sparklineDataSourceModel[
                          "getSparklineById"
                        ](_0x2f5db5, _0x2a65d3, _0x38151c)) == null
                          ? undefined
                          : _0x8ff489.sparklines,
                      _0x2cf998 =
                        _0x2868d2 == null
                          ? undefined
                          : _0x2868d2.getValue(_0x20b24f, _0x1ab677);
                    if (_0x2cf998) {
                      let _0x27fa2d = {
                        ..._0x2cf998,
                        startRow: _0x2cf998.startRow + _0x246b14 - _0x20b24f,
                        endRow: _0x2cf998.endRow + _0x246b14 - _0x20b24f,
                      };
                      (_0x18894e.sparklines["setValue"](
                        _0x246b14,
                        _0x1ab677,
                        _0x27fa2d,
                      ),
                        _0x4f434d.add(_0x38151c));
                    }
                  }
                }
              }
            let _0x8bc1f9 = {};
            (Object.entries(_0x2742d3).forEach(([_0x3ea43d, _0x2832a1]) => {
              _0x2832a1.sparklines["getSizeOf"]() &&
                (_0x8bc1f9[_0x3ea43d] = {
                  config: _0x2832a1.config,
                  sparklines: _0x2832a1.sparklines["clone"](),
                });
            }),
              _0x4f434d.size &&
                (_0x10936a.push({
                  id: e.RemoveSheetSparklineMutation["id"],
                  params: {
                    unitId: _0x2f5db5,
                    subUnitId: _0x2a65d3,
                    groupIds: Array.from(_0x4f434d),
                    isSingle: false,
                  },
                }),
                _0x13a9da.push({
                  id: e.RemoveSheetSparklineMutation["id"],
                  params: {
                    unitId: _0x2f5db5,
                    subUnitId: _0x2a65d3,
                    groupIds: Array.from(_0x4f434d),
                    isSingle: false,
                  },
                }),
                _0x10936a.push({
                  id: e.AddSheetSparklineMutation["id"],
                  params: {
                    unitId: _0x2f5db5,
                    subUnitId: _0x2a65d3,
                    sparklineConfigMap: _0x8bc1f9,
                  },
                }),
                _0x13a9da.push({
                  id: e.AddSheetSparklineMutation["id"],
                  params: {
                    unitId: _0x2f5db5,
                    subUnitId: _0x2a65d3,
                    sparklineConfigMap: _0x52ef42,
                  },
                })));
          } else {
            if (_0x3ba527 === n.Direction["LEFT"]) {
              let _0x53ddfc = {},
                _0x32c3e6 = {},
                _0x1d1b2a = new Set();
              for (let _0x3433ac = 0; _0x3433ac < _0x50ecc6; _0x3433ac++)
                for (let _0x4b7a9e = 0; _0x4b7a9e < _0xbbf703; _0x4b7a9e++) {
                  let _0x242f74 = _0x4b7a9e % _0x97edbc,
                    _0x508ab4 = _0x51e7bc.startRow + _0x3433ac,
                    _0x46ef67 = _0x51e7bc.startColumn + _0x4b7a9e,
                    _0x4a32ae = _0x14fa24.startColumn + _0x242f74,
                    _0x5d7ad5 = this._sparklineDataSourceModel["getSparkline"](
                      _0x2f5db5,
                      _0x2a65d3,
                      _0x508ab4,
                      _0x46ef67,
                    );
                  if (_0x5d7ad5) {
                    _0x1d1b2a.add(_0x5d7ad5);
                    let _0x4c84b2 = this._sparklineDataSourceModel[
                      "getSparklineById"
                    ](_0x2f5db5, _0x2a65d3, _0x5d7ad5);
                    if (_0x4c84b2) {
                      _0x32c3e6[_0x5d7ad5] = {
                        config: n.Tools["deepClone"](_0x4c84b2.config),
                        sparklines: n.Tools["deepClone"](
                          _0x4c84b2.sparklines["clone"](),
                        ),
                      };
                      let _0x275ccb = _0x53ddfc[_0x5d7ad5];
                      (_0x275ccb ||
                        ((_0x275ccb = {
                          config: n.Tools["deepClone"](_0x4c84b2.config),
                          sparklines: new n["ObjectMatrix"](
                            _0x4c84b2.sparklines["clone"](),
                          ),
                        }),
                        (_0x53ddfc[_0x5d7ad5] = _0x275ccb)),
                        _0x275ccb.sparklines["realDeleteValue"](
                          _0x508ab4,
                          _0x46ef67,
                        ));
                    }
                  }
                  let _0x27c2c5 = this._sparklineDataSourceModel[
                    "getSparkline"
                  ](_0x2f5db5, _0x2a65d3, _0x508ab4, _0x4a32ae);
                  if (_0x27c2c5) {
                    let _0x450d14 = this._sparklineDataSourceModel[
                      "getSparklineById"
                    ](_0x2f5db5, _0x2a65d3, _0x27c2c5);
                    if (_0x450d14) {
                      var _0x206ce9;
                      _0x32c3e6[_0x27c2c5] = {
                        config: n.Tools["deepClone"](_0x450d14.config),
                        sparklines: n.Tools["deepClone"](
                          _0x450d14.sparklines["clone"](),
                        ),
                      };
                      let _0x5a9d16 = _0x53ddfc[_0x27c2c5];
                      (_0x5a9d16 ||
                        ((_0x5a9d16 = {
                          config: n.Tools["deepClone"](_0x450d14.config),
                          sparklines: new n["ObjectMatrix"](
                            _0x450d14.sparklines["clone"](),
                          ),
                        }),
                        (_0x53ddfc[_0x27c2c5] = _0x5a9d16)),
                        _0x5a9d16.sparklines["realDeleteValue"](
                          _0x508ab4,
                          _0x46ef67,
                        ));
                      let _0x108835 =
                          (_0x206ce9 = this._sparklineDataSourceModel[
                            "getSparklineById"
                          ](_0x2f5db5, _0x2a65d3, _0x27c2c5)) == null
                            ? undefined
                            : _0x206ce9.sparklines,
                        _0x393b5f =
                          _0x108835 == null
                            ? undefined
                            : _0x108835.getValue(_0x508ab4, _0x4a32ae);
                      if (_0x393b5f) {
                        let _0x384175 = {
                          ..._0x393b5f,
                          startColumn:
                            _0x393b5f.startColumn + _0x46ef67 - _0x4a32ae,
                          endColumn:
                            _0x393b5f.endColumn + _0x46ef67 - _0x4a32ae,
                        };
                        (_0x5a9d16.sparklines["setValue"](
                          _0x508ab4,
                          _0x46ef67,
                          _0x384175,
                        ),
                          _0x1d1b2a.add(_0x27c2c5));
                      }
                    }
                  }
                }
              let _0x29ef64 = {};
              (Object.entries(_0x53ddfc).forEach(([_0x2960b9, _0x41dbf1]) => {
                _0x41dbf1.sparklines["getSizeOf"]() &&
                  (_0x29ef64[_0x2960b9] = {
                    config: _0x41dbf1.config,
                    sparklines: _0x41dbf1.sparklines["clone"](),
                  });
              }),
                _0x1d1b2a.size &&
                  (_0x10936a.push({
                    id: e.RemoveSheetSparklineMutation["id"],
                    params: {
                      unitId: _0x2f5db5,
                      subUnitId: _0x2a65d3,
                      groupIds: Array.from(_0x1d1b2a),
                      isSingle: false,
                    },
                  }),
                  _0x13a9da.push({
                    id: e.RemoveSheetSparklineMutation["id"],
                    params: {
                      unitId: _0x2f5db5,
                      subUnitId: _0x2a65d3,
                      groupIds: Array.from(_0x1d1b2a),
                      isSingle: false,
                    },
                  }),
                  _0x10936a.push({
                    id: e.AddSheetSparklineMutation["id"],
                    params: {
                      unitId: _0x2f5db5,
                      subUnitId: _0x2a65d3,
                      sparklineConfigMap: _0x29ef64,
                    },
                  }),
                  _0x13a9da.push({
                    id: e.AddSheetSparklineMutation["id"],
                    params: {
                      unitId: _0x2f5db5,
                      subUnitId: _0x2a65d3,
                      sparklineConfigMap: _0x32c3e6,
                    },
                  })));
            } else {
              if (_0x3ba527 === n.Direction["RIGHT"]) {
                let _0x1e69f2 = {},
                  _0x1a131d = {},
                  _0x2a4654 = new Set();
                for (let _0x54e3ae = 0; _0x54e3ae < _0x50ecc6; _0x54e3ae++)
                  for (let _0x5d36c8 = 0; _0x5d36c8 < _0xbbf703; _0x5d36c8++) {
                    let _0x45bbce = _0x5d36c8 % _0x97edbc,
                      _0x2b75e7 = _0x51e7bc.startRow + _0x54e3ae,
                      _0x2078d1 = _0x51e7bc.startColumn + _0x5d36c8,
                      _0x236f9e = _0x14fa24.startColumn + _0x45bbce,
                      _0x1876f1 = this._sparklineDataSourceModel[
                        "getSparkline"
                      ](_0x2f5db5, _0x2a65d3, _0x2b75e7, _0x2078d1);
                    if (_0x1876f1) {
                      _0x2a4654.add(_0x1876f1);
                      let _0xd7c7b9 = this._sparklineDataSourceModel[
                        "getSparklineById"
                      ](_0x2f5db5, _0x2a65d3, _0x1876f1);
                      if (_0xd7c7b9) {
                        _0x1a131d[_0x1876f1] = {
                          config: n.Tools["deepClone"](_0xd7c7b9.config),
                          sparklines: n.Tools["deepClone"](
                            _0xd7c7b9.sparklines["clone"](),
                          ),
                        };
                        let _0x556290 = _0x1e69f2[_0x1876f1];
                        (_0x556290 ||
                          ((_0x556290 = {
                            config: n.Tools["deepClone"](_0xd7c7b9.config),
                            sparklines: new n["ObjectMatrix"](
                              _0xd7c7b9.sparklines["clone"](),
                            ),
                          }),
                          (_0x1e69f2[_0x1876f1] = _0x556290)),
                          _0x556290.sparklines["realDeleteValue"](
                            _0x2b75e7,
                            _0x2078d1,
                          ));
                      }
                    }
                    let _0x16493e = this._sparklineDataSourceModel[
                      "getSparkline"
                    ](_0x2f5db5, _0x2a65d3, _0x2b75e7, _0x236f9e);
                    if (_0x16493e) {
                      let _0x2bb9f6 = this._sparklineDataSourceModel[
                        "getSparklineById"
                      ](_0x2f5db5, _0x2a65d3, _0x16493e);
                      if (_0x2bb9f6) {
                        var _0xc75c17;
                        _0x1a131d[_0x16493e] = {
                          config: n.Tools["deepClone"](_0x2bb9f6.config),
                          sparklines: n.Tools["deepClone"](
                            _0x2bb9f6.sparklines["clone"](),
                          ),
                        };
                        let _0x158398 = _0x1e69f2[_0x16493e];
                        (_0x158398 ||
                          ((_0x158398 = {
                            config: n.Tools["deepClone"](_0x2bb9f6.config),
                            sparklines: new n["ObjectMatrix"](
                              _0x2bb9f6.sparklines["clone"](),
                            ),
                          }),
                          (_0x1e69f2[_0x16493e] = _0x158398)),
                          _0x158398.sparklines["realDeleteValue"](
                            _0x2b75e7,
                            _0x2078d1,
                          ));
                        let _0x5e8395 =
                            (_0xc75c17 = this._sparklineDataSourceModel[
                              "getSparklineById"
                            ](_0x2f5db5, _0x2a65d3, _0x16493e)) == null
                              ? undefined
                              : _0xc75c17.sparklines,
                          _0x5adedc =
                            _0x5e8395 == null
                              ? undefined
                              : _0x5e8395.getValue(_0x2b75e7, _0x236f9e);
                        if (_0x5adedc) {
                          let _0x28e5c8 = {
                            ..._0x5adedc,
                            startColumn:
                              _0x5adedc.startColumn + _0x2078d1 - _0x236f9e,
                            endColumn:
                              _0x5adedc.endColumn + _0x2078d1 - _0x236f9e,
                          };
                          (_0x158398.sparklines["setValue"](
                            _0x2b75e7,
                            _0x2078d1,
                            _0x28e5c8,
                          ),
                            _0x2a4654.add(_0x16493e));
                        }
                      }
                    }
                  }
                let _0x4f8a9d = {};
                (Object.entries(_0x1e69f2).forEach(([_0x533dd4, _0x507031]) => {
                  _0x507031.sparklines["getSizeOf"]() &&
                    (_0x4f8a9d[_0x533dd4] = {
                      config: _0x507031.config,
                      sparklines: _0x507031.sparklines["clone"](),
                    });
                }),
                  _0x2a4654.size &&
                    (_0x10936a.push({
                      id: e.RemoveSheetSparklineMutation["id"],
                      params: {
                        unitId: _0x2f5db5,
                        subUnitId: _0x2a65d3,
                        groupIds: Array.from(_0x2a4654),
                        isSingle: false,
                      },
                    }),
                    _0x13a9da.push({
                      id: e.RemoveSheetSparklineMutation["id"],
                      params: {
                        unitId: _0x2f5db5,
                        subUnitId: _0x2a65d3,
                        groupIds: Array.from(_0x2a4654),
                        isSingle: false,
                      },
                    }),
                    _0x10936a.push({
                      id: e.AddSheetSparklineMutation["id"],
                      params: {
                        unitId: _0x2f5db5,
                        subUnitId: _0x2a65d3,
                        sparklineConfigMap: _0x4f8a9d,
                      },
                    }),
                    _0x13a9da.push({
                      id: e.AddSheetSparklineMutation["id"],
                      params: {
                        unitId: _0x2f5db5,
                        subUnitId: _0x2a65d3,
                        sparklineConfigMap: _0x1a131d,
                      },
                    })));
              }
            }
          }
        }
        return { undos: _0x13a9da, redos: _0x10936a };
      },
      _0x1a426c = {
        id: e.PLUGIN_NAME,
        onFillData: (_0x5db9d8, _0x3384d9, _0x463ab7) =>
          _0x463ab7 === r.AUTO_FILL_APPLY_TYPE["COPY"] ||
          _0x463ab7 === r.AUTO_FILL_APPLY_TYPE["ONLY_FORMAT"] ||
          _0x463ab7 === r.AUTO_FILL_APPLY_TYPE["SERIES"]
            ? _0x34ec53(_0x5db9d8, _0x3384d9)
            : _0x4d0c7f(),
      };
    this.disposeWithMe(this._autoFillService["addHook"](_0x1a426c));
  }
};
G = U(
  [
    H(0, (0, n.Inject)(n.Injector)),
    H(1, (0, n.Inject)(n.IUniverInstanceService)),
    H(2, (0, n.Inject)(r.IAutoFillService)),
    H(3, (0, n.Inject)(e.SparklineDataSourceModel)),
  ],
  G,
);
let K = class extends n.Disposable {
  constructor(_0x485070, _0xe01bae) {
    (super(),
      (this._sheetClipboardService = _0x485070),
      (this._sparklineDataSourceModel = _0xe01bae),
      this._initClipboardWithSparkline());
  }
  _initClipboardWithSparkline() {
    this.disposeWithMe(
      this._sheetClipboardService["addClipboardHook"]({
        id: e.PLUGIN_NAME,
        onPasteCells: (_0xa99b7d, _0xc46a9a, _0x87e2d9, _0x461ef7) => {
          let _0x5dd5c9 = [],
            _0x13f52f = [],
            { copyType: _0x1e782b = a.COPY_TYPE["COPY"] } = _0x461ef7,
            _0xc057ee = {};
          if (
            _0x1e782b === a.COPY_TYPE["CUT"] ||
            _0x461ef7.pasteType !== a.PREDEFINED_HOOK_NAME["DEFAULT_PASTE"] ||
            !_0xa99b7d ||
            _0xc46a9a.unitId !== _0xa99b7d.unitId
          )
            return { undos: _0x5dd5c9, redos: _0x13f52f };
          let {
              range: _0x4660d2,
              unitId: _0x5e8817,
              subUnitId: _0x16598e,
            } = _0xc46a9a,
            {
              range: _0x4573fb,
              unitId: _0x368f8d,
              subUnitId: _0x209dbc,
            } = _0xa99b7d,
            _0x1b1cf9 = {},
            _0xd0205e = {},
            _0x5e23e0 = {},
            _0x2c96fd = new Set(),
            _0x2dd442 = new Set();
          for (
            let _0x23913e = 0;
            _0x23913e < _0x4660d2.rows["length"];
            _0x23913e++
          )
            for (
              let _0x10607c = 0;
              _0x10607c < _0x4660d2.cols["length"];
              _0x10607c++
            ) {
              let _0x27f5a1 = _0x4573fb.rows[_0x23913e],
                _0x27fe75 = _0x4573fb.cols[_0x10607c];
              if (
                !this._sparklineDataSourceModel["getSparkline"](
                  _0x368f8d,
                  _0x209dbc,
                  _0x27f5a1,
                  _0x27fe75,
                )
              )
                continue;
              let _0x4e66cb = _0x4660d2.rows[_0x23913e],
                _0x3cf302 = _0x4660d2.cols[_0x10607c],
                _0x398462 = _0x4660d2.rows[_0x23913e] - _0x27f5a1,
                _0xe7e368 = _0x4660d2.cols[_0x10607c] - _0x27fe75,
                _0x348111 = this._sparklineDataSourceModel["getSparkline"](
                  _0x368f8d,
                  _0x209dbc,
                  _0x27f5a1,
                  _0x27fe75,
                );
              if (_0x348111) {
                let _0x5be389 = _0x1b1cf9[_0xc057ee[_0x348111]],
                  _0x1aef8b = this._sparklineDataSourceModel[
                    "getSparklineById"
                  ](_0x368f8d, _0x209dbc, _0x348111);
                if (!_0x1aef8b) continue;
                if (!_0xc057ee[_0x348111] && _0x1aef8b) {
                  let _0x3e1235 = "g_" + (0, n.generateRandomId)(6);
                  ((_0x5be389 = {
                    newGroupId: _0x3e1235,
                    config: {
                      config: n.Tools["deepClone"](_0x1aef8b.config),
                      sparklines: {},
                    },
                  }),
                    (_0x1b1cf9[_0x3e1235] = _0x5be389),
                    (_0xc057ee[_0x348111] = _0x3e1235));
                }
                _0x5be389.config["sparklines"][_0x4e66cb] ||
                  (_0x5be389.config["sparklines"][_0x4e66cb] = {});
                let _0x79990c = _0x1aef8b.sparklines["getValue"](
                  _0x27f5a1,
                  _0x27fe75,
                );
                if (_0x79990c) {
                  let _0xca80a = {
                    startRow: _0x79990c.startRow + _0x398462,
                    startColumn: _0x79990c.startColumn + _0xe7e368,
                    endRow: _0x79990c.endRow + _0x398462,
                    endColumn: _0x79990c.endColumn + _0xe7e368,
                  };
                  _0x5be389.config["sparklines"][_0x4e66cb][_0x3cf302] =
                    _0xca80a;
                }
              }
              let _0x2edb25 = this._sparklineDataSourceModel["getSparkline"](
                _0x5e8817,
                _0x16598e,
                _0x4660d2.rows[_0x23913e],
                _0x4660d2.cols[_0x10607c],
              );
              if (_0x2edb25) {
                let _0x25b1b9 = this._sparklineDataSourceModel[
                  "getSparklineById"
                ](_0x5e8817, _0x16598e, _0x2edb25);
                if (_0x25b1b9) {
                  var _0x55a2cc;
                  (_0x2c96fd.add(_0x2edb25),
                    (_0x5e23e0[_0x2edb25] = {
                      config: n.Tools["deepClone"](_0x25b1b9.config),
                      sparklines: n.Tools["deepClone"](
                        _0x25b1b9.sparklines["getMatrix"](),
                      ),
                    }),
                    _0xd0205e[_0x2edb25] &&
                      (_0xd0205e[_0x2edb25] = {
                        config: n.Tools["deepClone"](_0x25b1b9.config),
                        sparklines: n.Tools["deepClone"](
                          _0x25b1b9.sparklines["getMatrix"](),
                        ),
                      }),
                    (_0x55a2cc = _0xd0205e[_0x2edb25]) != null &&
                      (_0x55a2cc = _0x55a2cc.sparklines) != null &&
                      (_0x55a2cc = _0x55a2cc[_0x23913e]) != null &&
                      _0x55a2cc[_0x10607c] &&
                      delete _0xd0205e[_0x2edb25].sparklines[_0x23913e][
                        _0x10607c
                      ]);
                }
              }
            }
          return (
            Object.keys(_0x1b1cf9).forEach((_0x254ea5) => {
              let _0x14a3fc = _0x1b1cf9[_0x254ea5];
              _0x14a3fc &&
                (_0x2dd442.add(_0x254ea5),
                (_0xd0205e[_0x254ea5] = _0x14a3fc.config));
            }),
            _0x2dd442.size > 0 &&
              _0x5dd5c9.push({
                id: e.RemoveSheetSparklineMutation["id"],
                params: {
                  unitId: _0x5e8817,
                  subUnitId: _0x16598e,
                  groupIds: Array.from(_0x2dd442),
                  isSingle: false,
                },
              }),
            Object.keys(_0x5e23e0).length > 0 &&
              _0x5dd5c9.push({
                id: e.AddSheetSparklineMutation["id"],
                params: {
                  unitId: _0x5e8817,
                  subUnitId: _0x16598e,
                  sparklineConfigMap: _0x5e23e0,
                },
              }),
            _0x2c96fd.size > 0 &&
              _0x13f52f.push({
                id: e.RemoveSheetSparklineMutation["id"],
                params: {
                  unitId: _0x5e8817,
                  subUnitId: _0x16598e,
                  groupIds: Array.from(_0x2c96fd),
                  isSingle: false,
                },
              }),
            Object.keys(_0xd0205e).length > 0 &&
              _0x13f52f.push({
                id: e.AddSheetSparklineMutation["id"],
                params: {
                  unitId: _0x5e8817,
                  subUnitId: _0x16598e,
                  sparklineConfigMap: _0xd0205e,
                },
              }),
            { undos: _0x5dd5c9, redos: _0x13f52f }
          );
        },
      }),
    );
  }
};
K = U(
  [
    H(0, (0, n.Inject)(a.ISheetClipboardService)),
    H(1, (0, n.Inject)(e.SparklineDataSourceModel)),
  ],
  K,
);
let q = class extends n.Disposable {
  constructor(_0x3c7294) {
    (super(), (this._menuManagerService = _0x3c7294), this._initMenu());
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](O);
  }
};
q = U([H(0, t.IMenuManagerService)], q);
function J(_0x51b49d) {
  "@babel/helpers - typeof";
  return (
    (J =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3c95eb) {
            return typeof _0x3c95eb;
          }
        : function (_0x306043) {
            return _0x306043 &&
              typeof Symbol == "function" &&
              _0x306043.constructor === Symbol &&
              _0x306043 !== Symbol.prototype
              ? "symbol"
              : typeof _0x306043;
          }),
    J(_0x51b49d)
  );
}
function ee(_0x3e4acf, _0x169754) {
  if (J(_0x3e4acf) != "object" || !_0x3e4acf) return _0x3e4acf;
  var _0x909d9d = _0x3e4acf[Symbol.toPrimitive];
  if (_0x909d9d !== undefined) {
    var _0x334e87 = _0x909d9d.call(_0x3e4acf, _0x169754 || "default");
    if (J(_0x334e87) != "object") return _0x334e87;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x169754 === "string" ? String : Number)(_0x3e4acf);
}
function te(_0x125320) {
  var _0x3c6f8c = ee(_0x125320, "string");
  return J(_0x3c6f8c) == "symbol" ? _0x3c6f8c : _0x3c6f8c + "";
}
function Y(_0x34999f, _0x40df04, _0x286033) {
  return (
    (_0x40df04 = te(_0x40df04)) in _0x34999f
      ? Object.defineProperty(_0x34999f, _0x40df04, {
          value: _0x286033,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x34999f[_0x40df04] = _0x286033),
    _0x34999f
  );
}
let X = class extends n.Disposable {
  constructor(
    _0x132cf8,
    _0x18bf48,
    _0x1c8ab5,
    _0x86aba1,
    _0x1ef51b,
    _0x579088,
    _0x3ebffb,
    _0x39a2d2,
  ) {
    (super(),
      (this._sheetSelectionService = _0x132cf8),
      (this._univerInstanceService = _0x18bf48),
      (this._sparklineDataSourceModel = _0x1c8ab5),
      (this._sidebarService = _0x86aba1),
      (this._markSelectionService = _0x1ef51b),
      (this._rangeProtectionCache = _0x579088),
      (this._commandService = _0x3ebffb),
      (this._dialogService = _0x39a2d2),
      Y(this, "_targetIds", []),
      Y(this, "_sourceIds", []),
      this._initSelectionMove(),
      this._initWorksheetChange());
  }
  _initWorksheetChange() {
    this._commandService["onCommandExecuted"]((_0x52c476) => {
      _0x52c476.id === r.SetWorksheetActiveOperation["id"] &&
        (this._closePanel(), this._dialogService["close"](g));
    });
  }
  _initSelectionMove() {
    this.disposeWithMe(
      (0, o.merge)(
        this._sheetSelectionService["selectionMoveEnd$"].pipe(
          (0, o.distinctUntilChanged)(
            (_0x49d6c0, _0x55b622) =>
              _0x49d6c0.length === _0x55b622.length &&
              !_0x55b622.some(
                (_0x102868, _0x2bae1c) =>
                  !n.Rectangle["equals"](
                    _0x102868.range,
                    _0x49d6c0[_0x2bae1c].range,
                  ),
              ),
          ),
        ),
        this._sparklineDataSourceModel["updateConfig$"].pipe(
          (0, o.auditTime)(500),
        ),
      ).subscribe(() => {
        var _0x2b4c84, _0x54fd4f, _0xd01b58, _0x13501a;
        let _0x32b302 = this._sheetSelectionService["getCurrentSelections"]();
        [...this._targetIds, ...this._sourceIds].forEach((_0x1fa370) => {
          _0x1fa370 && this._markSelectionService["removeShape"](_0x1fa370);
        });
        let _0x414996 = (0, r.getSheetCommandTarget)(
          this._univerInstanceService,
        );
        if (!_0x414996) {
          this._closePanel();
          return;
        }
        let {
          unitId: _0x866aab,
          subUnitId: _0x5d6454,
          worksheet: _0x18015e,
        } = _0x414996;
        if (!_0x32b302 || _0x32b302.length !== 1) {
          this._closePanel();
          return;
        }
        let { primary: _0x17d286, range: _0x2da6d3 } = _0x32b302[0];
        if (!_0x17d286) {
          this._closePanel();
          return;
        }
        let _0xec006a = _0x17d286.actualRow,
          _0xe932df = _0x17d286.actualColumn,
          _0x178f25 = _0x18015e.getMergedCell(
            _0x17d286 == null ? undefined : _0x17d286.actualRow,
            _0x17d286 == null ? undefined : _0x17d286.actualColumn,
          );
        if (
          (_0x178f25 &&
            ((_0xec006a = _0x178f25.startRow),
            (_0xe932df = _0x178f25.startColumn)),
          ((_0x2b4c84 = this._rangeProtectionCache["getCellInfo"](
            _0x866aab,
            _0x5d6454,
            _0xec006a,
            _0xe932df,
          )) == null
            ? undefined
            : _0x2b4c84[i.UnitAction["Edit"]]) === false)
        ) {
          this._closePanel();
          return;
        }
        let _0x5e344f = this._sparklineDataSourceModel["getSparklineCache"](),
          _0x431bbb =
            _0x5e344f == null ||
            (_0x54fd4f = _0x5e344f.sparklineAnchorMap["get"](_0x866aab)) == null
              ? undefined
              : _0x54fd4f.get(_0x5d6454),
          _0x3c7b1b =
            _0x431bbb == null ||
            (_0xd01b58 = _0x431bbb.matrix["getValue"](_0xec006a, _0xe932df)) ==
              null
              ? undefined
              : _0xd01b58.groupId;
        if (!_0x3c7b1b) {
          this._closePanel();
          return;
        }
        let _0x327c29 =
          (_0x13501a = this._sparklineDataSourceModel["getSparklineById"](
            _0x866aab,
            _0x5d6454,
            _0x3c7b1b,
          )) == null
            ? undefined
            : _0x13501a.sparklines;
        _0x327c29 &&
          (re(_0x327c29.getMatrix(), _0x18015e).forEach((_0x5615bd) => {
            let _0x1e0cb3 = ne(
              _0x5615bd,
              this._markSelectionService,
              "#49B811",
              "rgba(73, 184, 17, 0.05)",
            );
            _0x1e0cb3 && this._sourceIds["push"](_0x1e0cb3);
          }),
          _0x327c29.forValue((_0x15cfb6, _0x153ab2, _0x5123e4) => {
            let _0x1519c3 = _0x5123e4;
            if (
              _0x1519c3 &&
              n.Rectangle["intersects"](
                (0, n.cellToRange)(_0x15cfb6, _0x153ab2),
                _0x2da6d3,
              )
            ) {
              let _0x3e6ea4 = ne(
                _0x1519c3,
                this._markSelectionService,
                "#f00c0c",
                "rgba(232, 95, 95, 0.05)",
              );
              _0x3e6ea4 && this._sourceIds["push"](_0x3e6ea4);
            }
          }),
          this._markSelectionService["refreshShapes"]());
      }),
    );
  }
  _closePanel() {
    let _0x26b215 = this._sidebarService["options"];
    _0x26b215.id === "SHEET_SPARKLINE_PANEL_ID" &&
      _0x26b215.visible &&
      this._sidebarService["close"](v);
  }
};
X = U(
  [
    H(0, (0, n.Inject)(r.SheetsSelectionsService)),
    H(1, (0, n.Inject)(n.IUniverInstanceService)),
    H(2, (0, n.Inject)(e.SparklineDataSourceModel)),
    H(3, (0, n.Inject)(t.ISidebarService)),
    H(4, (0, n.Inject)(a.IMarkSelectionService)),
    H(5, (0, n.Inject)(r.RangeProtectionCache)),
    H(6, (0, n.Inject)(n.ICommandService)),
    H(7, (0, n.Inject)(t.IDialogService)),
  ],
  X,
);
function ne(_0x3c727c, _0x122420, _0x80fc26, _0x238204) {
  if ((0, n.isValidRange)(_0x3c727c)) {
    let _0x2df394 = _0x122420.addShapeWithNoFresh(
      {
        range: _0x3c727c,
        style: {
          fill: _0x238204,
          strokeWidth: 1,
          stroke: _0x80fc26,
          widgets: {},
        },
        primary: null,
      },
      undefined,
      -10,
    );
    if (_0x2df394) return _0x2df394;
  }
}
function re(_0x59d403, _0x235dc6) {
  let _0x365330 = [],
    _0x5ae584 = new Set();
  for (let _0x259f7e in _0x59d403) {
    let _0x345354 = Number.parseInt(_0x259f7e, 10);
    for (let _0x219522 in _0x59d403[_0x345354]) {
      let _0x2c31d1 = Number.parseInt(_0x219522, 10),
        _0xd0ba5c = _0x345354 + "-" + _0x2c31d1;
      if (!_0x5ae584.has(_0xd0ba5c)) {
        let _0xa7e435 = _0x1e8903(_0x345354, _0x2c31d1);
        _0x365330.push(..._0xa7e435);
      }
    }
  }
  return _0x365330;
}
let Z = class extends n.Disposable {
  constructor(
    _0x4214c6,
    _0x47e4ec,
    _0x2253f4,
    _0x23331b,
    _0x5dda01,
    _0x378e3f,
  ) {
    (super(),
      (this._commandService = _0x4214c6),
      (this._localeService = _0x47e4ec),
      (this._sheetPermissionCheckController = _0x2253f4),
      (this._sheetsSelectionsService = _0x23331b),
      (this._univerInstanceService = _0x5dda01),
      (this._sparklineDataSourceModel = _0x378e3f),
      this._initPermissionWithSparkline());
  }
  _initPermissionWithSparkline() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x3feb3f) => {
        if (_0x3feb3f.id === e.AddSheetSparklineCommand["id"]) {
          let { targetRanges: _0x593954, targetInfo: _0x1165a6 } =
              _0x3feb3f.params,
            { unitId: _0x48729e, subUnitId: _0x3035ad } = _0x1165a6;
          this._sheetPermissionCheckController["permissionCheckWithRanges"](
            {
              workbookTypes: [r.WorkbookEditablePermission],
              worksheetTypes: [r.WorksheetEditPermission],
              rangeTypes: [r.RangeProtectionPermissionEditPoint],
            },
            _0x593954,
            _0x48729e,
            _0x3035ad,
          ) ||
            this._sheetPermissionCheckController[
              "blockExecuteWithoutPermission"
            ](
              this._localeService["t"](
                "sheets-sparkline-ui.permission.editErr",
              ),
            );
        } else {
          if (_0x3feb3f.id === e.SetSheetSparklineCommand["id"]) {
            let {
                isChangeDataSource: _0x4ad03f,
                changeDataSourceInfo: _0x52d17e,
              } = _0x3feb3f.params,
              _0x297cff = (0, r.getSheetCommandTarget)(
                this._univerInstanceService,
              );
            if (!_0x297cff) return;
            let _0x50f1a4 = this._sheetsSelectionsService[
                "getCurrentSelections"
              ]().map((_0x27f500) => _0x27f500.range),
              { unitId: _0x26ad3e, subUnitId: _0x1542d0 } = _0x297cff;
            if (_0x4ad03f) {
              if (_0x52d17e) {
                let {
                    targetRanges: _0x13ae42,
                    sourceRanges: _0x4fc96c,
                    resetType: _0x575f51,
                  } = _0x52d17e,
                  _0x22e5c5 =
                    _0x575f51 === "item"
                      ? _0x13ae42
                      : [..._0x4fc96c, ..._0x13ae42];
                this._sheetPermissionCheckController[
                  "permissionCheckWithRanges"
                ](
                  {
                    workbookTypes: [r.WorkbookEditablePermission],
                    worksheetTypes: [r.WorksheetEditPermission],
                    rangeTypes: [r.RangeProtectionPermissionEditPoint],
                  },
                  _0x22e5c5,
                  _0x26ad3e,
                  _0x1542d0,
                ) ||
                  this._sheetPermissionCheckController[
                    "blockExecuteWithoutPermission"
                  ](
                    this._localeService["t"](
                      "sheets-sparkline-ui.permission.editErr",
                    ),
                  );
              }
            } else {
              let _0x4df960 = new Set();
              _0x50f1a4.forEach((_0x1b815c) => {
                n.Range["foreach"](_0x1b815c, (_0x2ce8dd, _0x51d77b) => {
                  let _0x2cd58f = this._sparklineDataSourceModel[
                    "getSparkline"
                  ](_0x26ad3e, _0x1542d0, _0x2ce8dd, _0x51d77b);
                  _0x2cd58f &&
                    this._sparklineDataSourceModel["getSparklineById"](
                      _0x26ad3e,
                      _0x1542d0,
                      _0x2cd58f,
                    ) &&
                    _0x4df960.add(_0x2cd58f);
                });
              });
              let _0x3f2cce = [];
              (_0x4df960.forEach((_0x18ace) => {
                let _0x19d3ce = this._sparklineDataSourceModel[
                  "getSparklineById"
                ](_0x26ad3e, _0x1542d0, _0x18ace);
                _0x19d3ce &&
                  _0x3f2cce.push(
                    ...re(
                      _0x19d3ce.sparklines["getMatrix"](),
                      _0x297cff.worksheet,
                    ),
                  );
              }),
                this._sheetPermissionCheckController[
                  "permissionCheckWithRanges"
                ](
                  {
                    workbookTypes: [r.WorkbookEditablePermission],
                    worksheetTypes: [r.WorksheetEditPermission],
                    rangeTypes: [r.RangeProtectionPermissionEditPoint],
                  },
                  _0x3f2cce,
                  _0x26ad3e,
                  _0x1542d0,
                ) ||
                  this._sheetPermissionCheckController[
                    "blockExecuteWithoutPermission"
                  ](
                    this._localeService["t"](
                      "sheets-sparkline-ui.permission.editErr",
                    ),
                  ));
            }
          } else {
            if (_0x3feb3f.id === e.RemoveSheetSparklineCommand["id"]) {
              let { isSingle: _0x10eebc } = _0x3feb3f.params;
              if (_0x10eebc)
                this._sheetPermissionCheckController[
                  "permissionCheckWithRanges"
                ]({
                  workbookTypes: [r.WorkbookEditablePermission],
                  worksheetTypes: [r.WorksheetEditPermission],
                  rangeTypes: [r.RangeProtectionPermissionEditPoint],
                }) ||
                  this._sheetPermissionCheckController[
                    "blockExecuteWithoutPermission"
                  ](
                    this._localeService["t"](
                      "sheets-sparkline-ui.permission.editErr",
                    ),
                  );
              else {
                let _0xa7c5a4 = (0, r.getSheetCommandTarget)(
                  this._univerInstanceService,
                );
                if (!_0xa7c5a4) return;
                let _0x5c49fa = this._sheetsSelectionsService[
                    "getCurrentSelections"
                  ]().map((_0xa1f02a) => _0xa1f02a.range),
                  { unitId: _0x3e3725, subUnitId: _0x179ffe } = _0xa7c5a4,
                  _0x412ec8 = new Set();
                _0x5c49fa.forEach((_0xd74d45) => {
                  n.Range["foreach"](_0xd74d45, (_0x3a1e3d, _0x49851c) => {
                    let _0x2804d0 = this._sparklineDataSourceModel[
                      "getSparkline"
                    ](_0x3e3725, _0x179ffe, _0x3a1e3d, _0x49851c);
                    _0x2804d0 &&
                      this._sparklineDataSourceModel["getSparklineById"](
                        _0x3e3725,
                        _0x179ffe,
                        _0x2804d0,
                      ) &&
                      _0x412ec8.add(_0x2804d0);
                  });
                });
                let _0x21b478 = [];
                (_0x412ec8.forEach((_0x10dfc5) => {
                  let _0x11cf73 = this._sparklineDataSourceModel[
                    "getSparklineById"
                  ](_0x3e3725, _0x179ffe, _0x10dfc5);
                  _0x11cf73 &&
                    _0x21b478.push(
                      ...re(
                        _0x11cf73.sparklines["getMatrix"](),
                        _0xa7c5a4.worksheet,
                      ),
                    );
                }),
                  this._sheetPermissionCheckController[
                    "permissionCheckWithRanges"
                  ](
                    {
                      workbookTypes: [r.WorkbookEditablePermission],
                      worksheetTypes: [r.WorksheetEditPermission],
                      rangeTypes: [r.RangeProtectionPermissionEditPoint],
                    },
                    _0x21b478,
                    _0x3e3725,
                    _0x179ffe,
                  ) ||
                    this._sheetPermissionCheckController[
                      "blockExecuteWithoutPermission"
                    ](
                      this._localeService["t"](
                        "sheets-sparkline-ui.permission.editErr",
                      ),
                    ));
              }
            }
          }
        }
      }),
    );
  }
};
Z = U(
  [
    H(0, (0, n.Inject)(n.ICommandService)),
    H(1, (0, n.Inject)(n.LocaleService)),
    H(2, (0, n.Inject)(r.SheetPermissionCheckController)),
    H(3, (0, n.Inject)(r.SheetsSelectionsService)),
    H(4, (0, n.Inject)(n.IUniverInstanceService)),
    H(5, (0, n.Inject)(e.SparklineDataSourceModel)),
  ],
  Z,
);
let Q = class extends n.Disposable {
  constructor(_0x3c7501, _0x29dc48) {
    (super(),
      (this._sheetPrintInterceptorService = _0x3c7501),
      (this._sparklineDataSourceModel = _0x29dc48),
      this._init());
  }
  _init() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_RANGE,
        {
          handler: (_0x492f6d, _0x20392a, _0x570d38) => {
            let { unitId: _0x36e50b, subUnitId: _0x277fa } = _0x20392a,
              _0x3b7f9d = this._sparklineDataSourceModel["getSubUnitSparkline"](
                _0x36e50b,
                _0x277fa,
              ),
              _0x167128 = _0x492f6d;
            return (
              _0x3b7f9d &&
                Array.from(_0x3b7f9d.values()).forEach((_0x517f09) => {
                  let _0x536196 = _0x517f09.sparklines["getDataRange"]();
                  _0x167128 =
                    _0x167128 && _0x536196.endRow >= 0
                      ? n.Rectangle["realUnion"](_0x167128, _0x536196)
                      : _0x536196;
                }),
              _0x570d38(_0x167128)
            );
          },
        },
      ),
    );
  }
};
Q = U(
  [
    H(0, (0, n.Inject)(a.SheetPrintInterceptorService)),
    H(1, (0, n.Inject)(e.SparklineDataSourceModel)),
  ],
  Q,
);
const ie = (_0x4f6494, _0x125373, _0x129cc8, _0x26c7cc, _0x53f385) => {
    var _0x51dddf,
      _0xbeecb3,
      _0x3385ae,
      _0x1764ff,
      _0xabdbae,
      _0x218ae6,
      _0x28f772,
      _0x27f37b,
      _0x1ac183,
      _0x422e1f;
    let {
      startX: _0x25a6fd,
      startY: _0x281474,
      endX: _0x47a29f,
      endY: _0x52488b,
    } = _0x125373.mergeInfo;
    if (!_0x26c7cc) return;
    let {
        max: _0x3c85af,
        min: _0x3dc1f4,
        highIndex: _0x4fb0da,
        lowIndex: _0x3a1fb9,
        negativeIndexes: _0xc1438e,
        data: _0x4ed0e2,
      } = _0x26c7cc,
      _0x356d5d = _0x47a29f - _0x25a6fd - 8,
      _0x37e1c8 = _0x52488b - _0x281474 - 8,
      _0x577d1f = _0x25a6fd + 4,
      _0xa23a1f = _0x281474 + 4,
      _0x16f9bc =
        ((_0x51dddf = _0x129cc8.extremumMax) == null
          ? undefined
          : _0x51dddf.type) ?? e.SparklineExtremumTypeEnum["SELF_EXTREMUM"],
      _0x1f7b72 =
        ((_0xbeecb3 = _0x129cc8.extremumMin) == null
          ? undefined
          : _0xbeecb3.type) ?? e.SparklineExtremumTypeEnum["SELF_EXTREMUM"],
      _0x5da8d0 =
        (_0x53f385 == null ? undefined : _0x53f385.showMax) ?? _0x3c85af,
      _0x1ebccc =
        (_0x53f385 == null ? undefined : _0x53f385.showMin) ?? _0x3dc1f4,
      _0x549749 =
        _0x16f9bc === e.SparklineExtremumTypeEnum["SELF_EXTREMUM"]
          ? _0x3c85af
          : _0x5da8d0,
      _0x191dee =
        _0x1f7b72 === e.SparklineExtremumTypeEnum["SELF_EXTREMUM"]
          ? _0x3dc1f4
          : _0x1ebccc,
      _0xcd43b1 = false,
      _0x1852b9 = _0x4ed0e2[_0x4fb0da];
    typeof _0x1852b9 == "number" && _0x1852b9 < _0x191dee && (_0xcd43b1 = true);
    let _0x47533f = false,
      _0x220a86 = _0x4ed0e2[_0x3a1fb9];
    if (
      (typeof _0x220a86 == "number" &&
        _0x220a86 > _0x549749 &&
        (_0x47533f = true),
      _0x191dee > _0x549749 || _0xcd43b1 || _0x47533f)
    )
      return;
    let _0x4fcac5 = _0x549749 === _0x191dee,
      _0x9af31e = _0x549749 - _0x191dee,
      _0x3d4a3d = _0x356d5d / (_0x4ed0e2.length - 1),
      _0x30fea6 =
        ((_0x3385ae = _0x129cc8.axis) == null
          ? undefined
          : _0x3385ae.reverse) ?? false,
      _0x58a4e4 = [];
    (_0x4f6494.save(),
      _0x4f6494.beginPath(),
      _0x4f6494.rect(_0x25a6fd + 4, _0x281474 + 4, _0x356d5d, _0x37e1c8),
      _0x4f6494.clip(),
      _0x4f6494.beginPath());
    let _0x24b537 = null;
    for (let _0x1b1fb7 = 0; _0x1b1fb7 < _0x4ed0e2.length; _0x1b1fb7++) {
      let _0x310fb9 = _0x4ed0e2[_0x1b1fb7];
      if (_0x310fb9 === "u-spacing") {
        _0x24b537 = null;
        continue;
      }
      if (_0x310fb9 === "u-connect") continue;
      let _0x1bb57e = {
        x: _0x30fea6
          ? _0x47a29f - 4 - _0x1b1fb7 * _0x3d4a3d
          : _0x577d1f + _0x1b1fb7 * _0x3d4a3d,
        y: _0x4fcac5
          ? _0xa23a1f + _0x37e1c8 / 2
          : _0xa23a1f +
            _0x37e1c8 -
            ((Number(_0x310fb9) - _0x191dee) / _0x9af31e) * _0x37e1c8,
      };
      (_0x58a4e4.push(_0x1bb57e),
        _0x24b537
          ? (_0x4f6494.moveTo(_0x24b537.x, _0x24b537.y),
            _0x4f6494.lineTo(_0x1bb57e.x, _0x1bb57e.y))
          : _0x4f6494.moveTo(_0x1bb57e.x, _0x1bb57e.y),
        (_0x24b537 = _0x1bb57e));
    }
    let _0x44307b = _0x129cc8.themeType ?? e.SparklineThemeTypeEnum["STANDARD"],
      _0x4fa535 =
        _0x129cc8.seriesColor ??
        ((_0x1764ff = e.SparklineThemeMapping[_0x44307b]) == null
          ? undefined
          : _0x1764ff[0]) ??
        e.SparklineThemeMapping["standard"][0],
      _0x3d31c1 = _0x53f385 == null ? undefined : _0x53f385.startGradient,
      _0x4485e9 = _0x53f385 == null ? undefined : _0x53f385.endGradient;
    ((_0x4f6494.strokeStyle = _0x4fa535),
      (_0x4f6494.lineWidth = _0x129cc8.lineWidth || 2),
      (_0x4f6494.lineJoin = "round"),
      _0x4f6494.stroke());
    let _0x323100 = [],
      _0x2e5a1e = [];
    if (_0x129cc8.showGradient && _0x3d31c1 && _0x4485e9) {
      let _0x5bd6e7 = _0x4f6494.createLinearGradient(
        0,
        _0xa23a1f,
        0,
        _0xa23a1f + _0x37e1c8,
      );
      (_0x5bd6e7.addColorStop(0, _0x3d31c1),
        _0x5bd6e7.addColorStop(1, _0x4485e9),
        _0x4f6494.beginPath());
      let _0x4c51b9 = [],
        _0x373a43 = null,
        _0x145c6a = 0;
      for (let _0x37ba1e = 0; _0x37ba1e <= _0x4ed0e2.length; _0x37ba1e++) {
        let _0x127a79 = _0x4ed0e2[_0x37ba1e],
          _0x51bb17 = _0x127a79 === "u-spacing",
          _0x23ffff = _0x127a79 === "u-connect",
          _0x33110e = _0x37ba1e === _0x4ed0e2.length;
        (_0x127a79 === _0x1852b9 && _0x323100.push(_0x37ba1e),
          _0x127a79 === _0x220a86 && _0x2e5a1e.push(_0x37ba1e),
          _0x51bb17 || _0x33110e
            ? _0x373a43 !== null &&
              (_0x4c51b9.push([_0x373a43, _0x145c6a - 1]), (_0x373a43 = null))
            : _0x23ffff ||
              (_0x373a43 === null && (_0x373a43 = _0x145c6a), _0x145c6a++));
      }
      _0x4c51b9.forEach(([_0x5d9815, _0x505b1a]) => {
        let _0x1f8c2e = _0x58a4e4[_0x5d9815],
          _0x2528d9 = _0x58a4e4[_0x505b1a];
        if (!(!_0x1f8c2e || !_0x2528d9 || _0x5d9815 === _0x505b1a)) {
          (_0x4f6494.beginPath(), _0x4f6494.moveTo(_0x1f8c2e.x, _0x1f8c2e.y));
          for (let _0x3d2c9d = _0x5d9815; _0x3d2c9d <= _0x505b1a; _0x3d2c9d++) {
            let _0x3daa3c = _0x58a4e4[_0x3d2c9d];
            _0x3daa3c && _0x4f6494.lineTo(_0x3daa3c.x, _0x3daa3c.y);
          }
          (_0x4f6494.lineTo(_0x58a4e4[_0x505b1a].x, _0xa23a1f + _0x37e1c8),
            _0x4f6494.lineTo(_0x58a4e4[_0x5d9815].x, _0xa23a1f + _0x37e1c8),
            _0x4f6494.closePath(),
            (_0x4f6494.fillStyle = _0x5bd6e7),
            _0x4f6494.fill());
        }
      });
    } else
      for (let _0x5cb60d = 0; _0x5cb60d <= _0x4ed0e2.length; _0x5cb60d++) {
        let _0xa5e249 = _0x4ed0e2[_0x5cb60d];
        (_0xa5e249 === _0x1852b9 && _0x323100.push(_0x5cb60d),
          _0xa5e249 === _0x220a86 && _0x2e5a1e.push(_0x5cb60d));
      }
    let _0x420b0d = "rgb(64, 159, 17)";
    if (
      ((_0xabdbae = _0x129cc8.points) != null &&
        (_0xabdbae = _0xabdbae.markersPoint) != null &&
        _0xabdbae.visible &&
        ((_0x4f6494.fillStyle =
          _0x129cc8.points["markersPoint"].color || _0x420b0d),
        _0x58a4e4.forEach((_0x1dd068) => {
          (_0x4f6494.beginPath(),
            _0x4f6494.arc(_0x1dd068.x, _0x1dd068.y, 2, 0, Math.PI * 2),
            _0x4f6494.fill());
        })),
      (_0x218ae6 = _0x129cc8.points) != null &&
        (_0x218ae6 = _0x218ae6.firstPoint) != null &&
        _0x218ae6.visible)
    ) {
      _0x4f6494.fillStyle = _0x129cc8.points["firstPoint"].color || _0x420b0d;
      let _0x24fddc = _0x58a4e4[0];
      _0x24fddc &&
        (_0x4f6494.beginPath(),
        _0x4f6494.arc(_0x24fddc.x, _0x24fddc.y, 2, 0, Math.PI * 2),
        _0x4f6494.fill());
    }
    if (
      (_0x28f772 = _0x129cc8.points) != null &&
      (_0x28f772 = _0x28f772.lastPoint) != null &&
      _0x28f772.visible
    ) {
      _0x4f6494.fillStyle = _0x129cc8.points["lastPoint"].color || _0x420b0d;
      let _0x461054 = _0x58a4e4[_0x58a4e4.length - 1];
      _0x461054 &&
        (_0x4f6494.beginPath(),
        _0x4f6494.arc(_0x461054.x, _0x461054.y, 2, 0, Math.PI * 2),
        _0x4f6494.fill());
    }
    ((_0x27f37b = _0x129cc8.points) != null &&
      (_0x27f37b = _0x27f37b.highPoint) != null &&
      _0x27f37b.visible &&
      ((_0x4f6494.fillStyle = _0x129cc8.points["highPoint"].color || _0x420b0d),
      _0x323100.forEach((_0x43b7c8) => {
        let _0x4157ea = _0x58a4e4[_0x43b7c8];
        _0x4157ea &&
          (_0x4f6494.beginPath(),
          _0x4f6494.arc(_0x4157ea.x, _0x4157ea.y, 2, 0, Math.PI * 2),
          _0x4f6494.fill());
      })),
      (_0x1ac183 = _0x129cc8.points) != null &&
        (_0x1ac183 = _0x1ac183.lowPoint) != null &&
        _0x1ac183.visible &&
        ((_0x4f6494.fillStyle =
          _0x129cc8.points["lowPoint"].color || _0x420b0d),
        _0x2e5a1e.forEach((_0x213e62) => {
          let _0x1705a2 = _0x58a4e4[_0x213e62];
          _0x1705a2 &&
            (_0x4f6494.beginPath(),
            _0x4f6494.arc(_0x1705a2.x, _0x1705a2.y, 2, 0, Math.PI * 2),
            _0x4f6494.fill());
        })),
      (_0x422e1f = _0x129cc8.points) != null &&
        (_0x422e1f = _0x422e1f.negativePoint) != null &&
        _0x422e1f.visible &&
        ((_0x4f6494.fillStyle =
          _0x129cc8.points["negativePoint"].color || _0x420b0d),
        _0xc1438e.forEach((_0x388b85) => {
          let _0x59fd17 = _0x58a4e4[_0x388b85];
          _0x59fd17 &&
            (_0x4f6494.beginPath(),
            _0x4f6494.arc(_0x59fd17.x, _0x59fd17.y, 2, 0, Math.PI * 2),
            _0x4f6494.fill());
        })));
    let _0x30a6c5 = true;
    if (_0x4fcac5) {
      var _0xc7a68d;
      _0x30a6c5 = !!((_0xc7a68d = _0x129cc8.axis) != null && _0xc7a68d.visible);
    } else {
      var _0x31f98c;
      _0x30a6c5 = !!(
        _0x191dee <= 0 &&
        (_0x31f98c = _0x129cc8.axis) != null &&
        _0x31f98c.visible
      );
    }
    if (_0x30a6c5) {
      var _0x21d64b;
      let _0xa6a6a = _0xa23a1f;
      (_0x4fcac5
        ? _0x191dee === 0
          ? (_0xa6a6a = _0xa23a1f + _0x37e1c8 / 2)
          : _0x191dee > 0 && (_0xa6a6a = _0xa23a1f + _0x37e1c8)
        : (_0xa6a6a =
            _0xa23a1f + _0x37e1c8 - ((0 - _0x191dee) / _0x9af31e) * _0x37e1c8),
        _0x4f6494.beginPath(),
        _0x4f6494.moveTo(_0x577d1f, _0xa6a6a),
        _0x4f6494.lineTo(_0x577d1f + _0x356d5d, _0xa6a6a),
        (_0x4f6494.strokeStyle =
          ((_0x21d64b = _0x129cc8.axis) == null
            ? undefined
            : _0x21d64b.color) ?? "rgb(0, 0, 0)"),
        (_0x4f6494.lineWidth = 1),
        _0x4f6494.stroke());
    }
    _0x4f6494.restore();
  },
  ae = (_0x5b5f2d, _0x284ee7, _0x3726f1, _0x17c8fd, _0x19d57b) => {
    var _0x12c543, _0x41834e, _0x48a92f, _0xf6b821;
    let {
      startX: _0x5148cb,
      startY: _0x1192ba,
      endX: _0x15d1b6,
      endY: _0x2ca910,
    } = _0x284ee7;
    if (!_0x17c8fd) return;
    let {
        max: _0x92957,
        min: _0x1bb81c,
        highIndex: _0x298523,
        lowIndex: _0x489fda,
        negativeIndexes: _0xaf10b8,
        data: _0x84dc44,
      } = _0x17c8fd,
      _0x1a3e30 = _0x15d1b6 - _0x5148cb - 8,
      _0x50bb19 = _0x2ca910 - _0x1192ba - 8,
      _0x30e872 = _0x5148cb + 4,
      _0x42e885 = _0x1192ba + 4,
      _0x1951f3 =
        ((_0x12c543 = _0x3726f1.extremumMax) == null
          ? undefined
          : _0x12c543.type) ?? e.SparklineExtremumTypeEnum["SELF_EXTREMUM"],
      _0x3463f9 =
        ((_0x41834e = _0x3726f1.extremumMin) == null
          ? undefined
          : _0x41834e.type) ?? e.SparklineExtremumTypeEnum["SELF_EXTREMUM"],
      _0x171c34 =
        (_0x19d57b == null ? undefined : _0x19d57b.showMax) ?? _0x92957,
      _0x15d0b8 =
        (_0x19d57b == null ? undefined : _0x19d57b.showMin) ?? _0x1bb81c,
      _0x8bffd7 =
        _0x1951f3 === e.SparklineExtremumTypeEnum["SELF_EXTREMUM"]
          ? _0x92957
          : _0x171c34,
      _0x4011db =
        _0x3463f9 === e.SparklineExtremumTypeEnum["SELF_EXTREMUM"]
          ? _0x1bb81c
          : _0x15d0b8,
      _0xb2aa61 = _0x8bffd7 - _0x4011db,
      _0x4bfd05 = _0x1a3e30,
      _0x4b955b = _0x8bffd7 === _0x4011db,
      _0x40a794 = _0x4bfd05 / (_0x84dc44.length * 1.2),
      _0x1a7235 = _0x40a794 * 0.2,
      _0x1699be =
        ((_0x48a92f = _0x3726f1.axis) == null
          ? undefined
          : _0x48a92f.reverse) ?? false,
      _0x4578cf = _0x3726f1.showRadius ?? false,
      _0x59fb58 = 0;
    _0x4b955b ||
      (_0x59fb58 = _0x4011db >= 0 ? _0x4011db : _0x8bffd7 <= 0 ? _0x8bffd7 : 0);
    let _0x5879d7 = _0x42e885 + _0x50bb19;
    (_0x4b955b
      ? _0x4011db === 0
        ? (_0x5879d7 = _0x42e885 + _0x50bb19 / 2)
        : _0x4011db > 0
          ? (_0x5879d7 = _0x42e885 + _0x50bb19)
          : _0x4011db < 0 && (_0x5879d7 = _0x42e885)
      : (_0x5879d7 =
          _0x4011db >= 0
            ? _0x42e885 + _0x50bb19
            : _0x8bffd7 <= 0
              ? _0x42e885
              : _0x42e885 +
                _0x50bb19 -
                ((0 - _0x4011db) / _0xb2aa61) * _0x50bb19),
      _0x5b5f2d.save(),
      _0x5b5f2d.beginPath(),
      _0x5b5f2d.rect(
        _0x5148cb,
        _0x1192ba,
        _0x15d1b6 - _0x5148cb,
        _0x2ca910 - _0x1192ba,
      ),
      _0x5b5f2d.clip());
    let _0x529308 = _0x3726f1.themeType ?? e.SparklineThemeTypeEnum["STANDARD"],
      _0x199a5a =
        _0x3726f1.seriesColor ??
        ((_0xf6b821 = e.SparklineThemeMapping[_0x529308]) == null
          ? undefined
          : _0xf6b821[0]) ??
        e.SparklineThemeMapping["standard"][0],
      _0x14ab1c = _0x84dc44[_0x298523],
      _0x4dab07 = _0x84dc44[_0x489fda];
    _0x84dc44.forEach((_0x4990c, _0x18d6ae) => {
      var _0x30bb4a, _0x16dd07, _0x1ba6b2, _0x5de27c, _0x30710b;
      if (typeof _0x4990c == "string" || _0x4990c === undefined) return;
      let _0x44ef53 = _0x1699be
          ? _0x15d1b6 -
            4 -
            (_0x18d6ae + 1) * (_0x40a794 + _0x1a7235) +
            _0x1a7235 / 2
          : _0x30e872 + _0x18d6ae * (_0x40a794 + _0x1a7235) + _0x1a7235 / 2,
        _0xc74a74 = 0;
      _0x4b955b
        ? _0x4011db !== 0 && (_0xc74a74 = _0x50bb19)
        : (_0xc74a74 =
            _0x4990c < _0x4011db
              ? 0
              : _0x4990c > _0x8bffd7
                ? _0x50bb19
                : _0x4990c === 0
                  ? 0
                  : Math.max(
                      (Math.abs(_0x4990c - _0x59fb58) / _0xb2aa61) * _0x50bb19,
                      2,
                    ));
      let _0x1eb679 = _0x199a5a;
      ((_0x30bb4a = _0x3726f1.points) != null &&
        (_0x30bb4a = _0x30bb4a.firstPoint) != null &&
        _0x30bb4a.visible &&
        _0x18d6ae === 0 &&
        (_0x1eb679 = _0x3726f1.points["firstPoint"].color || _0x199a5a),
        (_0x16dd07 = _0x3726f1.points) != null &&
          (_0x16dd07 = _0x16dd07.lastPoint) != null &&
          _0x16dd07.visible &&
          _0x18d6ae === _0x84dc44.length - 1 &&
          (_0x1eb679 = _0x3726f1.points["lastPoint"].color || _0x199a5a),
        (_0x1ba6b2 = _0x3726f1.points) != null &&
          (_0x1ba6b2 = _0x1ba6b2.highPoint) != null &&
          _0x1ba6b2.visible &&
          _0x4990c === _0x14ab1c &&
          (_0x1eb679 = _0x3726f1.points["highPoint"].color || _0x199a5a),
        (_0x5de27c = _0x3726f1.points) != null &&
          (_0x5de27c = _0x5de27c.lowPoint) != null &&
          _0x5de27c.visible &&
          _0x4990c === _0x4dab07 &&
          (_0x1eb679 = _0x3726f1.points["lowPoint"].color || _0x199a5a),
        (_0x30710b = _0x3726f1.points) != null &&
          (_0x30710b = _0x30710b.negativePoint) != null &&
          _0x30710b.visible &&
          _0xaf10b8.includes(_0x18d6ae) &&
          (_0x1eb679 = _0x3726f1.points["negativePoint"].color || _0x199a5a),
        (_0x5b5f2d.fillStyle = _0x1eb679),
        _0x40a794 >= 4 && _0x4578cf && _0xc74a74 >= 2
          ? (_0x5b5f2d.beginPath(),
            _0x4990c >= _0x59fb58
              ? (_0x5b5f2d.moveTo(_0x44ef53, _0x5879d7 - _0xc74a74 + 2),
                _0x5b5f2d.arcTo(
                  _0x44ef53,
                  _0x5879d7 - _0xc74a74,
                  _0x44ef53 + _0x40a794,
                  _0x5879d7 - _0xc74a74,
                  2,
                ),
                _0x5b5f2d.arcTo(
                  _0x44ef53 + _0x40a794,
                  _0x5879d7 - _0xc74a74,
                  _0x44ef53 + _0x40a794,
                  _0x5879d7 - _0xc74a74 + 2,
                  2,
                ),
                _0x5b5f2d.lineTo(_0x44ef53 + _0x40a794, _0x5879d7),
                _0x5b5f2d.lineTo(_0x44ef53, _0x5879d7),
                _0x5b5f2d.closePath(),
                _0x5b5f2d.fill())
              : (_0x5b5f2d.moveTo(_0x44ef53, _0x5879d7),
                _0x5b5f2d.lineTo(_0x44ef53 + _0x40a794, _0x5879d7),
                _0x5b5f2d.arcTo(
                  _0x44ef53 + _0x40a794,
                  _0x5879d7 + _0xc74a74,
                  _0x44ef53 + _0x40a794 - 2,
                  _0x5879d7 + _0xc74a74,
                  2,
                ),
                _0x5b5f2d.arcTo(
                  _0x44ef53,
                  _0x5879d7 + _0xc74a74,
                  _0x44ef53,
                  _0x5879d7 + _0xc74a74 - 2,
                  2,
                ),
                _0x5b5f2d.lineTo(_0x44ef53, _0x5879d7),
                _0x5b5f2d.closePath(),
                _0x5b5f2d.fill()))
          : _0x4990c >= _0x59fb58
            ? _0x5b5f2d.fillRect(
                _0x44ef53,
                _0x5879d7 - _0xc74a74,
                _0x40a794,
                _0xc74a74,
              )
            : _0x5b5f2d.fillRect(_0x44ef53, _0x5879d7, _0x40a794, _0xc74a74));
    });
    let _0xc547b0 = true;
    if (_0x4b955b) {
      var _0x390be5;
      _0xc547b0 = !!((_0x390be5 = _0x3726f1.axis) != null && _0x390be5.visible);
    } else {
      var _0x182e6f;
      _0xc547b0 = !!(
        (_0x182e6f = _0x3726f1.axis) != null &&
        _0x182e6f.visible &&
        !(_0x8bffd7 < 0 || _0x4011db > 0)
      );
    }
    if (_0xc547b0) {
      var _0x186c2a;
      (_0x5b5f2d.beginPath(),
        _0x5b5f2d.moveTo(_0x30e872, _0x5879d7),
        _0x5b5f2d.lineTo(_0x30e872 + _0x1a3e30, _0x5879d7),
        (_0x5b5f2d.strokeStyle =
          ((_0x186c2a = _0x3726f1.axis) == null
            ? undefined
            : _0x186c2a.color) ?? "rgb(0, 0, 0)"),
        (_0x5b5f2d.lineWidth = 1),
        _0x5b5f2d.stroke());
    }
    _0x5b5f2d.restore();
  },
  oe = (_0xdf7a31, _0x2c74cb, _0x441fa8, _0x23aca5, _0x4a9d5a) => {
    var _0x233b39, _0x5352ee, _0x102f39;
    let {
      startX: _0x29c96e,
      startY: _0x2df9bc,
      endX: _0x3ab864,
      endY: _0x3b342d,
    } = _0x2c74cb;
    if (!_0x23aca5) return;
    let {
        highIndex: _0x1e19f9,
        lowIndex: _0x236ef1,
        negativeIndexes: _0x46f45b,
        data: _0x5ceb2e,
      } = _0x23aca5,
      _0x1da431 = _0x3ab864 - _0x29c96e - 8,
      _0x534b59 = _0x3b342d - _0x2df9bc - 8,
      _0x53d4d1 = _0x29c96e + 4,
      _0x4c033e = _0x2df9bc + 4,
      _0x1781d9 = _0x1da431 / (_0x5ceb2e.length * 1.2),
      _0x1abbcf = _0x1781d9 * 0.2,
      _0x6590f1 =
        ((_0x233b39 = _0x441fa8.axis) == null
          ? undefined
          : _0x233b39.reverse) ?? false,
      _0xfc2eea = _0x441fa8.showRadius ?? false,
      _0x23dde = _0x4c033e + _0x534b59 / 2;
    (_0xdf7a31.save(),
      _0xdf7a31.beginPath(),
      _0xdf7a31.rect(
        _0x29c96e,
        _0x2df9bc,
        _0x3ab864 - _0x29c96e,
        _0x3b342d - _0x2df9bc,
      ),
      _0xdf7a31.clip());
    let _0x2f470f = _0x441fa8.themeType ?? e.SparklineThemeTypeEnum["STANDARD"],
      _0x5c5c4e =
        _0x441fa8.seriesColor ??
        ((_0x5352ee = e.SparklineThemeMapping[_0x2f470f]) == null
          ? undefined
          : _0x5352ee[0]) ??
        e.SparklineThemeMapping["standard"][0],
      _0x432c90 = _0x5ceb2e[_0x1e19f9],
      _0x1e6410 = _0x5ceb2e[_0x236ef1];
    (_0x5ceb2e.forEach((_0x381c6a, _0x3d5522) => {
      var _0x5df3a6, _0x3600b0, _0xef712, _0x27c27a, _0x100f47;
      if (typeof _0x381c6a == "string" || _0x381c6a === undefined) return;
      let _0xcb639e = _0x381c6a === 0 ? 0 : _0x534b59 / 2,
        _0x43a663 = _0x6590f1
          ? _0x3ab864 -
            4 -
            (_0x3d5522 + 1) * (_0x1781d9 + _0x1abbcf) +
            _0x1abbcf / 2
          : _0x53d4d1 + _0x3d5522 * (_0x1781d9 + _0x1abbcf) + _0x1abbcf / 2,
        _0x20c56c = _0x381c6a >= 0,
        _0x194bbf = _0x5c5c4e;
      ((_0x5df3a6 = _0x441fa8.points) != null &&
        (_0x5df3a6 = _0x5df3a6.firstPoint) != null &&
        _0x5df3a6.visible &&
        _0x3d5522 === 0 &&
        (_0x194bbf = _0x441fa8.points["firstPoint"].color || _0x5c5c4e),
        (_0x3600b0 = _0x441fa8.points) != null &&
          (_0x3600b0 = _0x3600b0.lastPoint) != null &&
          _0x3600b0.visible &&
          _0x3d5522 === _0x5ceb2e.length - 1 &&
          (_0x194bbf = _0x441fa8.points["lastPoint"].color || _0x5c5c4e),
        (_0xef712 = _0x441fa8.points) != null &&
          (_0xef712 = _0xef712.highPoint) != null &&
          _0xef712.visible &&
          _0x381c6a === _0x432c90 &&
          (_0x194bbf = _0x441fa8.points["highPoint"].color || _0x5c5c4e),
        (_0x27c27a = _0x441fa8.points) != null &&
          (_0x27c27a = _0x27c27a.lowPoint) != null &&
          _0x27c27a.visible &&
          _0x381c6a === _0x1e6410 &&
          (_0x194bbf = _0x441fa8.points["lowPoint"].color || _0x5c5c4e),
        (_0x100f47 = _0x441fa8.points) != null &&
          (_0x100f47 = _0x100f47.negativePoint) != null &&
          _0x100f47.visible &&
          _0x46f45b.includes(_0x3d5522) &&
          (_0x194bbf = _0x441fa8.points["negativePoint"].color || _0x5c5c4e),
        (_0xdf7a31.fillStyle = _0x194bbf),
        _0x1781d9 >= 4 && _0xfc2eea
          ? (_0xdf7a31.beginPath(),
            _0x20c56c
              ? (_0xdf7a31.moveTo(_0x43a663, _0x23dde - _0xcb639e + 2),
                _0xdf7a31.arcTo(
                  _0x43a663,
                  _0x23dde - _0xcb639e,
                  _0x43a663 + _0x1781d9,
                  _0x23dde - _0xcb639e,
                  2,
                ),
                _0xdf7a31.arcTo(
                  _0x43a663 + _0x1781d9,
                  _0x23dde - _0xcb639e,
                  _0x43a663 + _0x1781d9,
                  _0x23dde - _0xcb639e + 2,
                  2,
                ),
                _0xdf7a31.lineTo(_0x43a663 + _0x1781d9, _0x23dde),
                _0xdf7a31.lineTo(_0x43a663, _0x23dde),
                _0xdf7a31.closePath(),
                _0xdf7a31.fill())
              : (_0xdf7a31.moveTo(_0x43a663, _0x23dde),
                _0xdf7a31.lineTo(_0x43a663 + _0x1781d9, _0x23dde),
                _0xdf7a31.arcTo(
                  _0x43a663 + _0x1781d9,
                  _0x23dde + _0xcb639e,
                  _0x43a663 + _0x1781d9 - 2,
                  _0x23dde + _0xcb639e,
                  2,
                ),
                _0xdf7a31.arcTo(
                  _0x43a663,
                  _0x23dde + _0xcb639e,
                  _0x43a663,
                  _0x23dde + _0xcb639e - 2,
                  2,
                ),
                _0xdf7a31.lineTo(_0x43a663, _0x23dde),
                _0xdf7a31.closePath(),
                _0xdf7a31.fill()))
          : _0x20c56c
            ? _0xdf7a31.fillRect(
                _0x43a663,
                _0x23dde - _0xcb639e,
                _0x1781d9,
                _0xcb639e,
              )
            : _0xdf7a31.fillRect(_0x43a663, _0x23dde, _0x1781d9, _0xcb639e));
    }),
      (_0x102f39 = _0x441fa8.axis) != null &&
        _0x102f39.visible &&
        (_0xdf7a31.beginPath(),
        _0xdf7a31.moveTo(0 + _0x53d4d1, _0x4c033e + _0x534b59 / 2),
        _0xdf7a31.lineTo(_0x1da431 + _0x53d4d1, _0x4c033e + _0x534b59 / 2),
        (_0xdf7a31.strokeStyle =
          _0x441fa8.axis["color"] ?? "rgb(0,\x200,\x200)"),
        (_0xdf7a31.lineWidth = 1),
        _0xdf7a31.stroke()),
      _0xdf7a31.restore());
  },
  se = (_0x480022, _0x17686a, _0x5b1fc7, _0x5a9a6a, _0x12ce18) => {
    let {
      startX: _0x584760,
      startY: _0x465296,
      endX: _0xd0f59b,
      endY: _0x15d1c8,
    } = _0x17686a.mergeInfo;
    if (!_0x5a9a6a) return;
    let { data: _0x13f967 } = _0x5a9a6a,
      _0x246033 = _0xd0f59b - _0x584760 - 8,
      _0x367ba7 = _0x15d1c8 - _0x465296 - 8,
      _0x553b43 = _0x584760 + 4,
      _0x2aa07f = _0x465296 + 4,
      _0x2295fb = Math.min(_0x246033, _0x367ba7) / 2,
      _0x5c5a0c = _0x553b43 + _0x246033 / 2,
      _0x3db5e6 = _0x2aa07f + _0x367ba7 / 2,
      _0xbf839b = [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40",
        "#E7E9ED",
        "#B4A0E5",
      ],
      _0x33baa9 = _0x13f967.filter(
        (_0x5c0775) => typeof _0x5c0775 == "number" && !Number.isNaN(_0x5c0775),
      ),
      _0xfac849 = _0x33baa9.reduce(
        (_0x262407, _0x20cd6f) => _0x262407 + _0x20cd6f,
        0,
      );
    if (_0xfac849 === 0 || _0x33baa9.length === 0) return;
    let _0x57165c = -Math.PI / 2;
    _0x33baa9.forEach((_0x1ffe3b, _0x14b2cd) => {
      let _0x31cbcb = (_0x1ffe3b / _0xfac849) * 2 * Math.PI,
        _0x4c650d = _0x57165c + _0x31cbcb;
      (_0x480022.beginPath(),
        _0x480022.moveTo(_0x5c5a0c, _0x3db5e6),
        _0x480022.arc(_0x5c5a0c, _0x3db5e6, _0x2295fb, _0x57165c, _0x4c650d),
        _0x480022.closePath(),
        (_0x480022.fillStyle = _0xbf839b[_0x14b2cd % _0xbf839b.length]),
        _0x480022.fill(),
        (_0x480022.lineWidth = 1),
        (_0x480022.strokeStyle = "#ffffff"),
        _0x480022.stroke(),
        (_0x57165c = _0x4c650d));
    });
  };
var ce = class e extends c.SheetExtension {
  constructor(_0x1b1888) {
    (super(),
      (this._renderer = _0x1b1888),
      Y(this, "uKey", "SHEET_SPARKLINE_RENDERER"),
      Y(this, "Z_INDEX", 35));
  }
  draw(_0x4cc897, _0x4768d8, _0x5f3b0d, _0x5372e3, { viewRanges: _0x153add }) {
    _0x153add.forEach((_0x514034) => {
      n.Range["foreach"](_0x514034, (_0x4229a1, _0x387b9a) => {
        let _0x179f52 = _0x5f3b0d.getCellWithCoordByIndex(
          _0x4229a1,
          _0x387b9a,
          false,
        );
        _0x179f52 && this._renderer(_0x4cc897, _0x5f3b0d, _0x179f52);
      });
    });
  }
  copyForPrinting() {
    return new e(this._renderer);
  }
};
let le = class extends n.Disposable {
  constructor(_0x394089, _0x2b5fa6, _0x4fa3f4, _0x37d24a) {
    (super(),
      (this._context = _0x394089),
      (this._sparklineDataSourceModel = _0x2b5fa6),
      (this._rangeProtectionCache = _0x4fa3f4),
      (this._sheetPrintInterceptorService = _0x37d24a),
      Y(this, "_sparklineExtension", null),
      this._initRender(),
      this._initPrinting(),
      this._initSkeleton());
  }
  _initRender() {
    let _0x4d32ad = this._sparklineDataSourceModel["getSparklineCache"](),
      _0x425bfb = _0x4d32ad.sparklineAnchorMap,
      _0x2caa28 = _0x4d32ad.sparklineModel,
      _0x56d1b9 = (_0x3bf8c8, _0x2c4363, _0x3f83a4) => {
        var _0x3734bb, _0x3bfea7, _0xcbae29;
        let { actualRow: _0x584da0, actualColumn: _0x4712a2 } = _0x3f83a4,
          { worksheet: _0x118626 } = _0x2c4363,
          _0x5f0a78 = _0x118626.getSheetId(),
          _0x11cfe3 = _0x118626.getUnitId();
        if (
          ((_0x3734bb = this._rangeProtectionCache["getCellInfo"](
            _0x11cfe3,
            _0x5f0a78,
            _0x584da0,
            _0x4712a2,
          )) == null
            ? undefined
            : _0x3734bb[i.UnitAction["View"]]) === false
        )
          return;
        let _0x35c2e4 = _0x118626.getRowVisible(_0x584da0),
          _0x2c69e7 = _0x118626.getColVisible(_0x4712a2);
        if (!_0x35c2e4 || !_0x2c69e7) return;
        let _0x415ef9 =
            (_0x3bfea7 = _0x425bfb.get(_0x11cfe3)) == null
              ? undefined
              : _0x3bfea7.get(_0x5f0a78),
          _0x446e6d =
            _0x415ef9 == null || (_0xcbae29 = _0x415ef9.matrix) == null
              ? undefined
              : _0xcbae29.getValue(_0x584da0, _0x4712a2);
        if (_0x446e6d) {
          var _0x5e4bd9;
          let _0x23dcdd =
              _0x415ef9 == null
                ? undefined
                : _0x415ef9.extra[_0x446e6d.groupId],
            _0xf47673 =
              (_0x5e4bd9 = _0x2caa28.get(_0x11cfe3)) == null ||
              (_0x5e4bd9 = _0x5e4bd9.get(_0x5f0a78)) == null
                ? undefined
                : _0x5e4bd9.get(
                    _0x446e6d == null ? undefined : _0x446e6d.groupId,
                  );
          if (!_0xf47673) return;
          let _0x1f9ec2 =
            (_0xf47673 == null ? undefined : _0xf47673.config["type"]) ??
            e.SparklineTypeEnum["LINE_CHART"];
          _0x1f9ec2 === e.SparklineTypeEnum["LINE_CHART"]
            ? ie(_0x3bf8c8, _0x3f83a4, _0xf47673.config, _0x446e6d, _0x23dcdd)
            : _0x1f9ec2 === e.SparklineTypeEnum["BAR_CHART"]
              ? ae(_0x3bf8c8, _0x3f83a4, _0xf47673.config, _0x446e6d, _0x23dcdd)
              : _0x1f9ec2 === e.SparklineTypeEnum["PROFIT_AND_LOSS_CHART"]
                ? oe(
                    _0x3bf8c8,
                    _0x3f83a4,
                    _0xf47673.config,
                    _0x446e6d,
                    _0x23dcdd,
                  )
                : _0x1f9ec2 === e.SparklineTypeEnum["PIE_CHART"] &&
                  se(
                    _0x3bf8c8,
                    _0x3f83a4,
                    _0xf47673.config,
                    _0x446e6d,
                    _0x23dcdd,
                  );
        }
      },
      _0x2cb996 = this._context["mainComponent"];
    _0x2cb996.getExtensionByKey("SHEET_SPARKLINE_RENDERER") ||
      ((this._sparklineExtension = new ce(_0x56d1b9)),
      _0x2cb996.register(this._sparklineExtension));
  }
  _initPrinting() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (_0x3d4570, _0x51ae00, _0x1fbfcc) => {
            var _0xc0820c;
            let { spreadsheet: _0x1c16de } = _0x51ae00;
            return (
              this._sparklineExtension &&
                !(
                  (_0xc0820c = _0x1c16de.getExtensionByKey) != null &&
                  _0xc0820c.call(_0x1c16de, "SHEET_SPARKLINE_RENDERER")
                ) &&
                _0x1c16de.register(
                  this._sparklineExtension["copyForPrinting"](),
                ),
              _0x1fbfcc(_0x3d4570)
            );
          },
        },
      ),
    );
  }
  _initSkeleton() {
    this.disposeWithMe(
      this._sparklineDataSourceModel["updateConfig$"]
        .pipe((0, o.auditTime)(300))
        .subscribe(() => {
          var _0x5b40cf;
          (_0x5b40cf = this._context["mainComponent"]) == null ||
            _0x5b40cf.makeDirty();
        }),
    );
  }
};
le = U(
  [
    H(1, (0, n.Inject)(e.SparklineDataSourceModel)),
    H(2, (0, n.Inject)(r.RangeProtectionCache)),
    H(3, (0, n.Inject)(a.SheetPrintInterceptorService)),
  ],
  le,
);
let $ = class extends n.Plugin {
  constructor(_0x3bc5ff = j, _0x3974e7, _0x1284e4, _0xa9c587, _0x49df78) {
    (super(),
      (this._config = _0x3bc5ff),
      (this._configService = _0x3974e7),
      (this._injector = _0x1284e4),
      (this._commandService = _0xa9c587),
      (this._renderManagerService = _0x49df78));
    let { menu: _0x5bfd1, ..._0x613ce1 } = (0, n.merge)({}, j, this._config);
    (_0x5bfd1 &&
      this._configService["setConfig"]("menu", _0x5bfd1, { merge: true }),
      this._configService["setConfig"]("sheets-sparkline-ui.config", _0x613ce1),
      this._initRegisterCommand());
  }
  onStarting() {
    (this._injector["add"]([W]),
      this._injector["get"](W),
      [[q], [X], [G], [Z], [K], [Q]].forEach((_0x49af91) => {
        this._injector["add"](_0x49af91);
      }),
      (0, n.touchDependencies)(this._injector, [[q]]));
  }
  onRendered() {
    ([[le]].forEach((_0x54b02b) => {
      this._renderManagerService["registerRenderModule"](
        n.UniverInstanceType["UNIVER_SHEET"],
        _0x54b02b,
      );
    }),
      (0, n.touchDependencies)(this._injector, [[X], [G], [Z], [K], [Q]]));
  }
  _initRegisterCommand() {
    [b, y].forEach((_0x206e7d) =>
      this._commandService["registerCommand"](_0x206e7d),
    );
  }
};
(Y($, "pluginName", "SHEET_SPARKLINE_UI_PLUGIN"),
  Y($, "packageName", k),
  Y($, "version", A),
  Y($, "type", n.UniverInstanceType["UNIVER_SHEET"]),
  ($ = U(
    [
      (0, n.DependentOn)(
        s.UniverLicensePlugin,
        c.UniverRenderEnginePlugin,
        r.UniverSheetsPlugin,
        e.UniverSheetSparklinePlugin,
        a.UniverSheetsUIPlugin,
      ),
      H(1, n.IConfigService),
      H(2, (0, n.Inject)(n.Injector)),
      H(3, (0, n.Inject)(n.ICommandService)),
      H(4, c.IRenderManagerService),
    ],
    $,
  )),
  (exports.SheetsSparklineUIMenuSchema = O),
  Object.defineProperty(exports, "UniverSheetSparklineUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
