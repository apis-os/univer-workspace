Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-table"),
  t = require("@univerjs/docs-ui"),
  n = require("@univerjs/ui"),
  r = require("@univerjs/core"),
  i = require("@univerjs/design"),
  a = require("react"),
  o = require("rxjs"),
  s = require("react/jsx-runtime"),
  c = require("@univerjs-pro/license"),
  l = require("@univerjs/docs"),
  u = require("@univerjs/engine-render"),
  d = require("@univerjs/icons"),
  f = require("@univerjs-pro/docs-column");
function p(_0x535b09, _0x210ef1) {
  return _0x535b09 + ":" + _0x210ef1;
}
function m(_0x41811e) {
  if (!_0x41811e) return null;
  let _0x42397b = Number(_0x41811e.rowCount),
    _0x15e5f5 = Number(_0x41811e.colCount);
  if (g(_0x42397b, _0x15e5f5))
    return { colCount: _0x15e5f5, rowCount: _0x42397b };
  if (_0x41811e.value == null) return null;
  let [_0x26ff00, _0x3d27a4] = String(_0x41811e.value)
    .split(":")
    .map((_0x990e53) => Number(_0x990e53));
  return g(_0x26ff00, _0x3d27a4)
    ? { colCount: _0x3d27a4, rowCount: _0x26ff00 }
    : null;
}
function h(_0x1c1a56) {
  let _0x1c94c2 = Number(_0x1c1a56);
  return Number.isFinite(_0x1c94c2)
    ? Math.min(20, Math.max(1, Math.trunc(_0x1c94c2)))
    : 1;
}
function g(_0x4ff824, _0x3ce9b2) {
  let _0x326245 = Number(_0x4ff824),
    _0x55362e = Number(_0x3ce9b2);
  return (
    Number.isInteger(_0x326245) &&
    Number.isInteger(_0x55362e) &&
    _0x326245 >= 1 &&
    _0x326245 <= 20 &&
    _0x55362e >= 1 &&
    _0x55362e <= 20
  );
}
const _ = {
    id: "docs-table-ui.operation.create-table",
    type: r.CommandType["COMMAND"],
    handler: async (_0x20b7ec, _0x12253d) => {
      let _0x2a2e4a = _0x20b7ec.get(r.ICommandService),
        _0x24459a = m(_0x12253d);
      return _0x24459a
        ? _0x2a2e4a.executeCommand(e.DocsTableInsertTableCommand["id"], {
            rows: _0x24459a.rowCount,
            columns: _0x24459a.colCount,
            position: e.DocsTableInsertTablePosition["Selection"],
          })
        : false;
    },
  },
  v = "doc.menu.table",
  y = "docs-table-ui.insert-table-picker",
  b = { rowCount: 3, colCount: 5 };
function x(_0x4775dd) {
  return {
    id: v,
    commandId: _.id,
    selectionsCommandId: _.id,
    params: b,
    type: n.MenuItemType["SUBITEMS"],
    icon: "TableIcon",
    tooltip: "docs-table-ui.table.main",
    slot: true,
    hidden$: C(_0x4775dd),
    selections: [{ label: { name: y, hoverable: false, selectable: false } }],
  };
}
function ee(_0x5dc8c3) {
  return {
    id: _.id,
    commandId: _.id,
    selectionsCommandId: _.id,
    params: b,
    type: n.MenuItemType["BUTTON_SELECTOR"],
    icon: "TableIcon",
    title: "docs-table-ui.insertTable",
    hidden$: C(_0x5dc8c3),
    selections: [{ label: { name: y, hoverable: false, selectable: false } }],
  };
}
function S(_0x30c913) {
  return {
    id: _.id,
    commandId: _.id,
    selectionsCommandId: _.id,
    params: b,
    type: n.MenuItemType["BUTTON_SELECTOR"],
    icon: "TableIcon",
    title: "docs-table-ui.insertTable",
    hidden$: C(_0x30c913),
    selections: [{ label: { name: y, hoverable: false, selectable: false } }],
  };
}
function C(_0x25d375) {
  let _0x6efd56 = (0, n.getMenuHiddenObservable)(
      _0x25d375,
      r.UniverInstanceType["UNIVER_DOC"],
      undefined,
    ),
    _0x5db0a2 = te(_0x25d375);
  return _0x5db0a2
    ? (0, o.combineLatest)([
        _0x6efd56,
        _0x5db0a2.selectionChange$["pipe"](
          (0, o.startWith)(_0x5db0a2.getCurrentSelection()),
          (0, o.map)((_0x17b17f) => !!(_0x17b17f != null && _0x17b17f.tableId)),
        ),
      ]).pipe((0, o.map)(([_0x40b858, _0x32407a]) => _0x40b858 || _0x32407a))
    : _0x6efd56;
}
function te(_0x4d674c) {
  try {
    let _0x31ee06 = _0x4d674c.get(e.DocsTableSelectionService);
    if (
      _0x31ee06 &&
      typeof _0x31ee06.getCurrentSelection == "function" &&
      _0x31ee06.selectionChange$
    )
      return _0x31ee06;
  } catch {
    return null;
  }
  return null;
}
function ne(_0x46441d) {
  let _0x46025c = (0, n.useDependency)(r.LocaleService),
    _0x5281a6 = (0, n.useObservable)(_0x46025c.direction$, "ltr"),
    [_0x2aaf3b, _0x3ec66d] = (0, a.useState)({ colCount: 5, rowCount: 3 }),
    [_0x5a6ca1, _0x419091] = (0, a.useState)(3),
    [_0xa084ff, _0x232541] = (0, a.useState)(5),
    _0x2a5501 = (_0x3fd961) => {
      var _0x144383;
      (_0x144383 = _0x46441d.onChange) == null ||
        _0x144383.call(_0x46441d, p(_0x3fd961.rowCount, _0x3fd961.colCount));
    };
  return (0, s.jsxs)("section", {
    className:
      "univer-box-border univer-w-[300px] univer-rounded-lg univer-bg-gray-0 univer-p-2 univer-text-gray-900 dark:!univer-bg-gray-800 dark:!univer-text-gray-0",
    "data-u-comp": y,
    dir: _0x5281a6,
    onClick: (_0x1e020f) => _0x1e020f.stopPropagation(),
    onMouseDown: (_0x4e6b13) => _0x4e6b13.stopPropagation(),
    children: [
      (0, s.jsx)("div", {
        className:
          "univer-grid univer-grid-cols-[repeat(14,minmax(0,1fr))] univer-gap-0.5",
        children: Array.from({ length: 10 }).map((_0x26c4a5, _0x4f5d4c) =>
          Array.from({ length: 14 }).map((_0x44e23f, _0x48743c) => {
            let _0x4c31f5 = _0x4f5d4c + 1,
              _0x333e54 = _0x48743c + 1,
              _0x534c4b =
                _0x4c31f5 <= _0x2aaf3b.rowCount &&
                _0x333e54 <= _0x2aaf3b.colCount;
            return (0, s.jsx)(
              "button",
              {
                type: "button",
                "aria-label":
                  _0x46025c.t("docs-table-ui.insertTableSize") +
                  "\x20" +
                  _0x333e54 +
                  " x " +
                  _0x4c31f5,
                className: (0, i.clsx)(
                  "univer-size-4 univer-cursor-pointer univer-rounded-sm univer-border univer-border-solid univer-p-0 univer-transition-colors",
                  _0x534c4b
                    ? "univer-border-primary-500 univer-bg-primary-100 hover:univer-bg-primary-200"
                    : "univer-border-gray-200 univer-bg-gray-50 hover:univer-border-primary-300 hover:univer-bg-primary-50",
                ),
                onClick: () =>
                  _0x2a5501({ colCount: _0x333e54, rowCount: _0x4c31f5 }),
                onMouseEnter: () =>
                  _0x3ec66d({ colCount: _0x333e54, rowCount: _0x4c31f5 }),
              },
              _0x4c31f5 + ":" + _0x333e54,
            );
          }),
        ),
      }),
      (0, s.jsxs)("div", {
        dir: "ltr",
        className:
          "univer-mt-2 univer-text-center univer-text-sm univer-font-medium",
        children: [_0x2aaf3b.colCount, " × ", _0x2aaf3b.rowCount],
      }),
      (0, s.jsxs)("div", {
        className:
          "univer-mt-2 univer-border-0 univer-border-t univer-border-solid univer-border-gray-200 univer-pt-3",
        children: [
          (0, s.jsx)("div", {
            className: "univer-mb-2\x20univer-text-xs\x20univer-text-gray-500",
            children: _0x46025c.t("docs-table-ui.customTableSize"),
          }),
          (0, s.jsxs)("div", {
            className: "univer-grid univer-grid-cols-2 univer-gap-2",
            children: [
              (0, s.jsxs)("label", {
                className:
                  "univer-grid univer-gap-1 univer-text-xs univer-text-gray-500",
                children: [
                  (0, s.jsx)("span", {
                    children: _0x46025c.t("docs-table-ui.tableRows"),
                  }),
                  (0, s.jsx)(i.InputNumber, {
                    className: "univer-w-full",
                    min: 1,
                    max: 20,
                    precision: 0,
                    value: _0x5a6ca1,
                    onChange: (_0x4173ab) => _0x419091(h(_0x4173ab)),
                  }),
                ],
              }),
              (0, s.jsxs)("label", {
                className:
                  "univer-grid univer-gap-1 univer-text-xs univer-text-gray-500",
                children: [
                  (0, s.jsx)("span", {
                    children: _0x46025c.t("docs-table-ui.tableColumns"),
                  }),
                  (0, s.jsx)(i.InputNumber, {
                    className: "univer-w-full",
                    min: 1,
                    max: 20,
                    precision: 0,
                    value: _0xa084ff,
                    onChange: (_0xf3b2cd) => _0x232541(h(_0xf3b2cd)),
                  }),
                ],
              }),
              (0, s.jsx)(i.Button, {
                className: "univer-col-span-2 univer-w-full",
                variant: "primary",
                onClick: () =>
                  _0x2a5501({ colCount: _0xa084ff, rowCount: _0x5a6ca1 }),
                children: _0x46025c.t("docs-table-ui.insert"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const re = "docs-table-ui.menu.insert",
  w = "docs-table-ui.menu.delete",
  T = "docs-table-ui.menu.border",
  ie = "doc.menu.table-insert",
  ae = "doc.menu.table-delete",
  oe = "doc.operation.show-hyper-link-edit-popup",
  se = "docs.operation.start-add-comment",
  E = {
    all: "AllBorderIcon",
    bottom: "DownBorderDoubleIcon",
    inner: "InnerBorderDoubleIcon",
    innerHorizontal: "HorizontalBorderDoubleIcon",
    innerVertical: "VerticalBorderDoubleIcon",
    left: "LeftBorderDoubleIcon",
    none: "NoBorderIcon",
    outer: "OuterBorderDoubleIcon",
    right: "RightBorderDoubleIcon",
    top: "UpBorderDoubleIcon",
  };
function ce() {
  return {
    id: re,
    type: n.MenuItemType["SUBITEMS"],
    title: "docs-table-ui.insert",
  };
}
function le(_0x1c3df1) {
  return {
    id: w,
    type: n.MenuItemType["SUBITEMS"],
    title: "docs-table-ui.delete",
    hidden$: _0x1c3df1 ? j(_0x1c3df1) : undefined,
  };
}
function ue(_0x3635d7) {
  return {
    id: T,
    type: n.MenuItemType["SUBITEMS"],
    title: "docs-table-ui.borders",
    icon: E.all,
    hidden$: _0x3635d7 ? j(_0x3635d7) : undefined,
  };
}
function de() {
  return Ve(ie, "docs-table-ui.table.insert");
}
function fe() {
  return Ve(ae, "docs-table-ui.table.delete");
}
function pe() {
  return He(oe);
}
function me() {
  return He(se);
}
function D(_0x2d7994) {
  return {
    ...k(
      t.DeleteLeftCommand["id"],
      "docs-table-ui.clearContent",
      undefined,
      _0x2d7994,
    ),
    id: t.DeleteLeftCommand["id"],
    icon: "ClearFormatDoubleIcon",
  };
}
function O(_0x2e4b8f) {
  return {
    ...k(
      e.DocsTableInsertRowsCommand["id"],
      "docs-table-ui.insertRowAbove",
      { position: "above" },
      _0x2e4b8f,
    ),
    icon: "InsertRowAboveDoubleIcon",
  };
}
function he(_0x1886d2) {
  return {
    ...k(
      e.DocsTableInsertRowsCommand["id"],
      "docs-table-ui.insertRowBelow",
      { position: "below" },
      _0x1886d2,
    ),
    icon: "InsertRowBelowDoubleIcon",
  };
}
function ge(_0x225482) {
  return {
    ...k(
      e.DocsTableInsertColumnsCommand["id"],
      "docs-table-ui.insertColumnLeft",
      { position: "left" },
      _0x225482,
    ),
    icon: "LeftInsertColumnDoubleIcon",
  };
}
function _e(_0x2a64e9) {
  return {
    ...k(
      e.DocsTableInsertColumnsCommand["id"],
      "docs-table-ui.insertColumnRight",
      { position: "right" },
      _0x2a64e9,
    ),
    icon: "RightInsertColumnDoubleIcon",
  };
}
function ve(_0x20acd2) {
  return k(
    e.DocsTableDeleteRowsCommand["id"],
    "docs-table-ui.deleteRow",
    ze(_0x20acd2),
    _0x20acd2,
  );
}
function ye(_0x16f8a0) {
  return k(
    e.DocsTableDeleteColumnsCommand["id"],
    "docs-table-ui.deleteColumn",
    ze(_0x16f8a0),
    _0x16f8a0,
  );
}
function be(_0x372143) {
  return k(
    e.DocsTableDeleteTableCommand["id"],
    "docs-table-ui.deleteTable",
    ze(_0x372143),
    _0x372143,
  );
}
function xe(_0x367af5) {
  return k(
    e.DocsTableMergeCellsCommand["id"],
    "docs-table-ui.mergeCells",
    undefined,
    _0x367af5,
    _0x367af5 ? Ge(_0x367af5) : undefined,
  );
}
function Se(_0x40ef13) {
  return k(
    e.DocsTableUnmergeCellsCommand["id"],
    "docs-table-ui.unmergeCells",
    undefined,
    _0x40ef13,
    _0x40ef13 ? Ke(_0x40ef13) : undefined,
  );
}
function Ce(_0x30d05b) {
  return k(
    e.DocsTableInsertTitleRowCommand["id"],
    "docs-table-ui.insertTitleRow",
    undefined,
    _0x30d05b,
    undefined,
    _0x30d05b ? Ue(_0x30d05b) : undefined,
  );
}
function we(_0x47a3fa) {
  return k(
    e.DocsTableSetHeaderRowCountCommand["id"],
    "docs-table-ui.pinHeaderRows",
    undefined,
    _0x47a3fa,
    undefined,
    _0x47a3fa ? Ue(_0x47a3fa) : undefined,
  );
}
function Te(_0x4f991a) {
  return A(
    "docs-table-ui.borderAll",
    e.DocsTableBorderPreset["All"],
    _0x4f991a,
  );
}
function Ee(_0x4eb215) {
  return A(
    "docs-table-ui.borderBottom",
    e.DocsTableBorderPreset["Bottom"],
    _0x4eb215,
  );
}
function De(_0x4f2ab4) {
  return A(
    "docs-table-ui.borderInner",
    e.DocsTableBorderPreset["Inner"],
    _0x4f2ab4,
  );
}
function Oe(_0x2f132e) {
  return A(
    "docs-table-ui.borderInnerHorizontal",
    e.DocsTableBorderPreset["InnerHorizontal"],
    _0x2f132e,
  );
}
function ke(_0x39d4ff) {
  return A(
    "docs-table-ui.borderInnerVertical",
    e.DocsTableBorderPreset["InnerVertical"],
    _0x39d4ff,
  );
}
function Ae(_0x3fb064) {
  return A(
    "docs-table-ui.borderLeft",
    e.DocsTableBorderPreset["Left"],
    _0x3fb064,
  );
}
function je(_0x506d1f) {
  return A(
    "docs-table-ui.borderOuter",
    e.DocsTableBorderPreset["Outer"],
    _0x506d1f,
  );
}
function Me(_0x4064fc) {
  return A(
    "docs-table-ui.borderNone",
    e.DocsTableBorderPreset["None"],
    _0x4064fc,
  );
}
function Ne(_0x4613a6) {
  return A(
    "docs-table-ui.borderRight",
    e.DocsTableBorderPreset["Right"],
    _0x4613a6,
  );
}
function Pe(_0xf7fd5d) {
  return A(
    "docs-table-ui.borderTop",
    e.DocsTableBorderPreset["Top"],
    _0xf7fd5d,
  );
}
function Fe(_0x590b69) {
  return Be({
    accessor: _0x590b69,
    commandId: e.DocsTableSetTableBackgroundCommand["id"],
    defaultColor: r.DEFAULT_STYLES["bg"].rgb,
    icon: "PaintBucketDoubleIcon",
    tooltip: "docs-table-ui.tableBackgroundColor",
  });
}
function Ie(_0x355156) {
  return Be({
    accessor: _0x355156,
    commandId: e.DocsTableSetTableBorderColorCommand["id"],
    defaultColor: "#1f1f1f",
    icon: "PaintBucketDoubleIcon",
    tooltip: "docs-table-ui.borderColor",
  });
}
function Le(_0x5abd46) {
  return {
    id: e.DocsTableSetTableBorderWidthCommand["id"],
    type: n.MenuItemType["SELECTOR"],
    icon: "TableBorderWidthIcon",
    tooltip: "docs-table-ui.borderWidth",
    selections: [0, 0.5, 0.75, 1, 1.5, 2.25, 3, 4.5, 6].map((_0x89d0ad) => ({
      value: _0x89d0ad,
      label: _0x89d0ad + "pt",
    })),
    value$: (0, o.of)(1),
    hidden$: _0x5abd46 ? j(_0x5abd46) : undefined,
  };
}
function Re(_0xbb5be1) {
  return {
    id: e.DocsTableSetTableBorderStyleCommand["id"],
    type: n.MenuItemType["SELECTOR"],
    icon: "TableBorderStyleIcon",
    tooltip: "docs-table-ui.borderStyle",
    selections: [
      {
        value: "solid",
        label: "docs-table-ui.borderStyleSolid",
        icon: "TableBorderStyleSolidIcon",
      },
      {
        value: "dot",
        label: "docs-table-ui.borderStyleDotted",
        icon: "TableBorderStyleDottedIcon",
      },
      {
        value: "dash",
        label: "docs-table-ui.borderStyleDashed",
        icon: "TableBorderStyleDashedIcon",
      },
    ],
    value$: (0, o.of)("solid"),
    hidden$: _0xbb5be1 ? j(_0xbb5be1) : undefined,
  };
}
function k(_0x663cbc, _0x2cc268, _0xa42f5a, _0x471fcf, _0x1e7870, _0x19b430) {
  return {
    id: _0x663cbc + "." + _0x2cc268.split(".").pop(),
    commandId: _0x663cbc,
    type: n.MenuItemType["BUTTON"],
    title: _0x2cc268,
    params: _0xa42f5a,
    hidden$: _0x19b430 ?? (_0x471fcf ? j(_0x471fcf) : undefined),
    disabled$: _0x1e7870,
  };
}
function ze(_0x4a4437) {
  if (!_0x4a4437) return;
  let _0x12faf1 = _0x4a4437.get(e.DocsTableSelectionService);
  return () => {
    let _0xaa7ec4 = _0x12faf1.getCurrentSelection();
    return _0xaa7ec4 ? { ..._0xaa7ec4 } : undefined;
  };
}
function A(_0xa60d5d, _0x15a4cb, _0x2e475f) {
  return {
    ...k(
      e.DocsTableSetTableBorderCommand["id"],
      _0xa60d5d,
      { preset: _0x15a4cb },
      _0x2e475f,
    ),
    icon: E[_0x15a4cb],
  };
}
function Be(_0xb49d4a) {
  let _0x417c9f = _0xb49d4a.defaultColor || "#1f1f1f";
  return {
    id: _0xb49d4a.commandId,
    tooltip: _0xb49d4a.tooltip,
    type: n.MenuItemType["BUTTON_SELECTOR"],
    icon: _0xb49d4a.icon,
    selections: [
      {
        label: {
          name: n.COLOR_PICKER_COMPONENT,
          hoverable: false,
          selectable: false,
        },
        value$: (0, o.of)(_0x417c9f),
      },
    ],
    value$: _0xb49d4a.accessor
      ? new o.Observable((_0x1375bb) => {
          let _0x4e4c7d = _0xb49d4a.accessor["get"](
            r.IUniverInstanceService,
          ).focused$["subscribe"](() => _0x1375bb.next(_0x417c9f));
          return (_0x1375bb.next(_0x417c9f), () => _0x4e4c7d.unsubscribe());
        })
      : (0, o.of)(_0x417c9f),
    hidden$: _0xb49d4a.accessor ? j(_0xb49d4a.accessor) : undefined,
  };
}
function Ve(_0xdeacb4, _0x648cae) {
  return {
    id: _0xdeacb4,
    type: n.MenuItemType["SUBITEMS"],
    title: _0x648cae,
    hidden$: (0, o.of)(true),
  };
}
function He(_0x3e3fc5, _0x2ccaf7) {
  return {
    id: _0x3e3fc5,
    commandId: _0x3e3fc5,
    type: n.MenuItemType["BUTTON"],
    title: _0x2ccaf7,
    hidden$: (0, o.of)(true),
  };
}
function j(_0x121672) {
  let _0x9ea88f = qe(_0x121672);
  return (0, o.combineLatest)([
    (0, n.getMenuHiddenObservable)(
      _0x121672,
      r.UniverInstanceType["UNIVER_DOC"],
    ),
    _0x9ea88f.pipe(
      (0, o.map)((_0x477e25) => !(_0x477e25 != null && _0x477e25.tableId)),
    ),
  ]).pipe((0, o.map)(([_0x18ea54, _0xf992c2]) => _0x18ea54 || _0xf992c2));
}
function Ue(_0x265d80) {
  return (0, o.combineLatest)([j(_0x265d80), We(_0x265d80)]).pipe(
    (0, o.map)(([_0x2011a5, _0x17b64d]) => _0x2011a5 || _0x17b64d),
  );
}
function We(_0x49d1d9) {
  let _0x272242 = _0x49d1d9.get(r.IUniverInstanceService);
  return new o["Observable"]((_0x2d23d3) => {
    let _0x126d56 = (_0x397b1b) => {
        var _0x252775;
        let _0x463a57 = _0x397b1b
            ? _0x272242.getUnit(_0x397b1b, r.UniverInstanceType["UNIVER_DOC"])
            : _0x272242.getCurrentUnitOfType(
                r.UniverInstanceType["UNIVER_DOC"],
              ),
          _0x52a22e =
            _0x463a57 == null ||
            (_0x252775 = _0x463a57.getSnapshot()) == null ||
            (_0x252775 = _0x252775.documentStyle) == null
              ? undefined
              : _0x252775.documentFlavor;
        _0x2d23d3.next(_0x52a22e !== r.DocumentFlavor["TRADITIONAL"]);
      },
      _0x14947c = _0x272242.focused$["subscribe"]((_0x583cd4) =>
        _0x126d56(_0x583cd4 ?? null),
      );
    return (_0x126d56(), () => _0x14947c.unsubscribe());
  });
}
function Ge(_0x24b3f8) {
  let _0x1a6969 = _0x24b3f8.get(r.IUniverInstanceService),
    _0x3f28a0 = _0x24b3f8.get(e.DocsTableSelectionService);
  return qe(_0x24b3f8).pipe(
    (0, o.map)((_0x434fcb) => {
      let _0x1dc105 = _0x1a6969.getCurrentUnitOfType(
          r.UniverInstanceType["UNIVER_DOC"],
        ),
        _0xd9c8aa =
          _0x434fcb != null && _0x434fcb.tableId
            ? _0x434fcb
            : _0x3f28a0.getStableTableSelection();
      return (
        !_0x1dc105 ||
        !(_0xd9c8aa != null && _0xd9c8aa.tableId) ||
        !(0, e.canMergeCells)(
          _0x1dc105.getSnapshot(),
          _0xd9c8aa.tableId,
          _0xd9c8aa,
        )
      );
    }),
  );
}
function Ke(_0x46e0cb) {
  let _0x14dca4 = _0x46e0cb.get(r.IUniverInstanceService),
    _0x4cf775 = _0x46e0cb.get(e.DocsTableSelectionService);
  return qe(_0x46e0cb).pipe(
    (0, o.map)((_0x17e1ae) => {
      let _0x16e619 = _0x14dca4.getCurrentUnitOfType(
          r.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x5dff74 =
          _0x17e1ae != null && _0x17e1ae.tableId
            ? _0x17e1ae
            : _0x4cf775.getStableTableSelection();
      return (
        !_0x16e619 ||
        !(_0x5dff74 != null && _0x5dff74.tableId) ||
        !(0, e.canUnmergeCells)(
          _0x16e619.getSnapshot(),
          _0x5dff74.tableId,
          _0x5dff74,
        )
      );
    }),
  );
}
function qe(_0x3d1957) {
  let _0x54db86 = _0x3d1957.get(e.DocsTableSelectionService);
  return _0x54db86.selectionChange$["pipe"](
    (0, o.startWith)(_0x54db86.getCurrentSelection()),
  );
}
const Je = {
    [n.RibbonInsertGroup["MEDIA"]]: { [v]: { order: 2, menuItemFactory: x } },
  },
  Ye = {
    [n.MenuManagerPosition["RIBBON"]]: {
      [n.RibbonPosition["INSERT"]]: Je,
      [n.RibbonPosition["START"]]: {
        "ribbon.start.docs-table-style": {
          order: 20,
          [e.DocsTableSetTableBackgroundCommand["id"]]: {
            order: 0,
            menuItemFactory: Fe,
          },
          [e.DocsTableSetTableBorderColorCommand["id"]]: {
            order: 1,
            menuItemFactory: Ie,
          },
          [e.DocsTableSetTableBorderWidthCommand["id"]]: {
            order: 2,
            menuItemFactory: Le,
          },
          [e.DocsTableSetTableBorderStyleCommand["id"]]: {
            order: 3,
            menuItemFactory: Re,
          },
        },
      },
    },
  },
  Xe = {
    ...Je,
    [n.ContextMenuPosition["PARAGRAPH"]]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [t.INSERT_BELLOW_MENU_ID]: {
          [t.DocCreateTableOperation["id"]]: { order: 4, menuItemFactory: ee },
        },
      },
      [t.EMPTY_PARAGRAPH_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [t.DocCreateTableOperation["id"]]: { order: 4, menuItemFactory: ee },
        },
      },
      [t.DOC_CONTENT_INSERT_MENU_ID]: {
        "docs-table-ui.menu.cell-style-context-group": {
          order: -1,
          tiny: true,
          [e.DocsTableSetTableBackgroundCommand["id"]]: {
            order: 0,
            menuItemFactory: Fe,
          },
          [e.DocsTableSetTableBorderColorCommand["id"]]: {
            order: 1,
            menuItemFactory: Ie,
          },
          [e.DocsTableSetTableBorderWidthCommand["id"]]: {
            order: 2,
            menuItemFactory: Le,
          },
          [e.DocsTableSetTableBorderStyleCommand["id"]]: {
            order: 3,
            menuItemFactory: Re,
          },
        },
        [n.ContextMenuGroup["LAYOUT"]]: {
          [t.DocCreateTableOperation["id"]]: { order: 4, menuItemFactory: ee },
          [T]: {
            order: 8,
            menuItemFactory: ue,
            "docs-table-ui.menu.border-all": { order: 0, menuItemFactory: Te },
            "docs-table-ui.menu.border-inner": {
              order: 1,
              menuItemFactory: De,
            },
            "docs-table-ui.menu.border-outer": {
              order: 2,
              menuItemFactory: je,
            },
            "docs-table-ui.menu.border-top": { order: 3, menuItemFactory: Pe },
            "docs-table-ui.menu.border-bottom": {
              order: 4,
              menuItemFactory: Ee,
            },
            "docs-table-ui.menu.border-left": { order: 5, menuItemFactory: Ae },
            "docs-table-ui.menu.border-right": {
              order: 6,
              menuItemFactory: Ne,
            },
            "docs-table-ui.menu.border-inner-horizontal": {
              order: 7,
              menuItemFactory: Oe,
            },
            "docs-table-ui.menu.border-inner-vertical": {
              order: 8,
              menuItemFactory: ke,
            },
            "docs-table-ui.menu.border-none": { order: 9, menuItemFactory: Me },
          },
        },
      },
      [t.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        insert: {
          [t.DocCreateTableOperation["id"]]: { order: 0, menuItemFactory: S },
        },
      },
      [t.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        insert: {
          [t.DocCreateTableOperation["id"] + ".below"]: {
            order: 0,
            menuItemFactory: ee,
          },
        },
      },
      [t.DOC_TABLE_BLOCK_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [t.INSERT_BELLOW_MENU_ID]: {
            order: 0,
            menuItemFactory: t.ParagraphMenuInsertBelowSubmenuItemFactory,
          },
        },
      },
    },
    [n.ContextMenuPosition["MAIN_AREA"]]: {
      [n.ContextMenuGroup["DATA"]]: {
        [oe]: { order: 0, menuItemFactory: pe },
        [se]: { order: 1, menuItemFactory: me },
      },
      [n.ContextMenuGroup["FORMAT"]]: {
        [t.DeleteLeftCommand["id"]]: { order: 0, menuItemFactory: D },
      },
      [n.ContextMenuGroup["LAYOUT"]]: {
        [ie]: { order: 1, menuItemFactory: de },
        [ae]: { order: 2, menuItemFactory: fe },
        [re]: {
          order: 20,
          menuItemFactory: ce,
          "docs-table-ui.menu.insert-row-above": {
            order: 0,
            menuItemFactory: O,
          },
          "docs-table-ui.menu.insert-row-below": {
            order: 1,
            menuItemFactory: he,
          },
          "docs-table-ui.menu.insert-column-left": {
            order: 2,
            menuItemFactory: ge,
          },
          "docs-table-ui.menu.insert-column-right": {
            order: 3,
            menuItemFactory: _e,
          },
        },
        [w]: {
          order: 30,
          menuItemFactory: le,
          "docs-table-ui.menu.delete-rows": { order: 0, menuItemFactory: ve },
          "docs-table-ui.menu.delete-columns": {
            order: 1,
            menuItemFactory: ye,
          },
          "docs-table-ui.menu.delete-table": { order: 2, menuItemFactory: be },
        },
        "docs-table-ui.menu.merge-cells": { order: 40, menuItemFactory: xe },
        "docs-table-ui.menu.unmerge-cells": { order: 41, menuItemFactory: Se },
      },
      [n.ContextMenuGroup["OTHERS"]]: {
        "docs-table-ui.menu.insert-title-row": {
          order: 0,
          menuItemFactory: Ce,
        },
        "docs-table-ui.menu.pin-header": { order: 1, menuItemFactory: we },
      },
    },
  };
var Ze = "@univerjs-pro/docs-table-ui",
  Qe = "1.0.0-insiders.20260907-70fc579";
const $e = {},
  et = "docs-table-ui.border-panel",
  tt = { colorChannel1: "#9ca3af" },
  nt = {
    all: d.AllBorderIcon,
    bottom: d.DownBorderDoubleIcon,
    inner: d.InnerBorderDoubleIcon,
    innerHorizontal: d.HorizontalBorderDoubleIcon,
    innerVertical: d.VerticalBorderDoubleIcon,
    left: d.LeftBorderDoubleIcon,
    none: d.NoBorderIcon,
    outer: d.OuterBorderDoubleIcon,
    right: d.RightBorderDoubleIcon,
    top: d.UpBorderDoubleIcon,
  },
  rt = [
    {
      label: "docs-table-ui.borderAll",
      preset: e.DocsTableBorderPreset["All"],
    },
    {
      label: "docs-table-ui.borderInner",
      preset: e.DocsTableBorderPreset["Inner"],
    },
    {
      label: "docs-table-ui.borderOuter",
      preset: e.DocsTableBorderPreset["Outer"],
    },
    {
      label: "docs-table-ui.borderNone",
      preset: e.DocsTableBorderPreset["None"],
    },
  ];
function it(_0x48db99) {
  var _0x18764c;
  let _0xed1ace =
      (_0x18764c = _0x48db99.popup) == null ? undefined : _0x18764c.extraProps,
    _0xaf8a86 = (_0xed1ace == null ? undefined : _0xed1ace.presets) ?? rt,
    _0x240aea = _0xed1ace == null ? undefined : _0xed1ace.onSelect,
    _0x4fabe6 = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsx)("section", {
    className:
      "univer-box-border\x20univer-grid\x20univer-grid-cols-5\x20univer-gap-1\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-2\x20univer-text-primary-600\x20univer-shadow-lg",
    "data-u-comp": et,
    children: _0xaf8a86.map(({ label: _0x2bd187, preset: _0x5afaa0 }) => {
      let _0x2bd30b = nt[_0x5afaa0],
        _0xb2aefb = _0x4fabe6.t(_0x2bd187);
      return (0, s.jsx)(
        i.Button,
        {
          size: "icon",
          variant: "ghost",
          type: "button",
          "aria-label": _0xb2aefb,
          title: _0xb2aefb,
          onClick: (_0x5c7b79) => {
            (_0x5c7b79.preventDefault(),
              _0x240aea == null || _0x240aea(_0x5afaa0));
          },
          children: (0, s.jsx)(_0x2bd30b, {
            className: "univer-size-4 univer-text-base univer-text-current",
            extend: tt,
          }),
        },
        _0x5afaa0,
      );
    }),
  });
}
const at = "docs-table-ui.column-type-panel",
  ot = [
    "docs-table-ui.columnTypeText",
    "docs-table-ui.columnTypeNumber",
    "docs-table-ui.columnTypeDate",
    "docs-table-ui.columnTypeCheckbox",
    "docs-table-ui.columnTypeDropdown",
  ];
function st() {
  let _0x2ee1e5 = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsx)("section", {
    "data-u-comp": at,
    children: ot.map((_0x5eb119) =>
      (0, s.jsx)(
        i.Button,
        {
          type: "button",
          "aria-label": _0x2ee1e5.t(_0x5eb119),
          children: _0x2ee1e5.t(_0x5eb119),
        },
        _0x5eb119,
      ),
    ),
  });
}
const ct = { icon: "TextTypeIcon", value: r.NamedStyleType["NORMAL_TEXT"] },
  lt = {
    [r.PresetListType["ORDER_LIST"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_1"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_2"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_3"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_4"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_5"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_QUICK_2"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_QUICK_3"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_QUICK_4"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_QUICK_5"]]: "OrderIcon",
    [r.PresetListType["ORDER_LIST_QUICK_6"]]: "OrderIcon",
    [r.PresetListType["BULLET_LIST"]]: "UnorderIcon",
    [r.PresetListType["BULLET_LIST_1"]]: "UnorderIcon",
    [r.PresetListType["BULLET_LIST_2"]]: "UnorderIcon",
    [r.PresetListType["BULLET_LIST_3"]]: "UnorderIcon",
    [r.PresetListType["BULLET_LIST_4"]]: "UnorderIcon",
    [r.PresetListType["BULLET_LIST_5"]]: "UnorderIcon",
    [r.PresetListType["CHECK_LIST"]]: "TodoListDoubleIcon",
    [r.PresetListType["CHECK_LIST_CHECKED"]]: "TodoListDoubleIcon",
  },
  ut = {
    [r.NamedStyleType["NORMAL_TEXT"]]: "TextTypeIcon",
    [r.NamedStyleType["HEADING_1"]]: "H1Icon",
    [r.NamedStyleType["HEADING_2"]]: "H2Icon",
    [r.NamedStyleType["HEADING_3"]]: "H3Icon",
    [r.NamedStyleType["HEADING_4"]]: "H4Icon",
    [r.NamedStyleType["HEADING_5"]]: "H5Icon",
    [r.NamedStyleType["TITLE"]]: "TitleTypeIcon",
    [r.NamedStyleType["SUBTITLE"]]: "SubtitleTypeIcon",
    [r.NamedStyleType["NAMED_STYLE_TYPE_UNSPECIFIED"]]: "TextTypeIcon",
  };
function dt(_0x5551fe, _0x2ab20d) {
  var _0x58a8fd;
  let _0x6d2a8f = mt(_0x5551fe, _0x2ab20d);
  if (!_0x6d2a8f) return ct;
  let _0x4d7381 = _t(_0x6d2a8f);
  return {
    icon: vt(
      _0x4d7381,
      (_0x58a8fd = _0x6d2a8f.paragraphStyle) == null
        ? undefined
        : _0x58a8fd.namedStyleType,
    ),
    value: _0x4d7381,
  };
}
function ft(_0x13bf67, _0x27c1d1) {
  if (!_0x13bf67 || !(_0x27c1d1 != null && _0x27c1d1.tableId)) return [];
  let _0x491bd2 = (0, e.getTableRangeById)(_0x13bf67, _0x27c1d1.tableId);
  if (!_0x491bd2) return [];
  let _0x43e74c = Math.min(_0x27c1d1.startRow, _0x27c1d1.endRow),
    _0x268937 = Math.max(_0x27c1d1.startRow, _0x27c1d1.endRow),
    _0x1b7f0b = Math.min(_0x27c1d1.startColumn, _0x27c1d1.endColumn),
    _0x341823 = Math.max(_0x27c1d1.startColumn, _0x27c1d1.endColumn),
    _0x57dcd4 = new Set(),
    _0x5df034 = [];
  for (let _0x97f332 = _0x43e74c; _0x97f332 <= _0x268937; _0x97f332++)
    for (let _0x5e34fa = _0x1b7f0b; _0x5e34fa <= _0x341823; _0x5e34fa++) {
      var _0x3c938c;
      let _0x56edc5 =
        (_0x3c938c = _0x491bd2.rows[_0x97f332]) == null
          ? undefined
          : _0x3c938c.cells[_0x5e34fa];
      if (!_0x56edc5) continue;
      let _0x50db87 = _0x56edc5.startOffset + 1,
        _0x19cd93 = Math.max(_0x50db87, _0x56edc5.endOffset - 1),
        _0x3766a7 = _0x50db87 + ":" + _0x19cd93;
      _0x57dcd4.has(_0x3766a7) ||
        (_0x57dcd4.add(_0x3766a7),
        _0x5df034.push({
          collapsed: _0x50db87 === _0x19cd93,
          endOffset: _0x19cd93,
          segmentId: _0x27c1d1.segmentId ?? "",
          startOffset: _0x50db87,
        }));
    }
  return _0x5df034.sort(
    (_0x1b9a5a, _0x215539) =>
      _0x1b9a5a.startOffset - _0x215539.startOffset ||
      _0x1b9a5a.endOffset - _0x215539.endOffset,
  );
}
function pt(_0xf12fce, _0x5ec48d) {
  let _0x372101 = gt(_0xf12fce, _0x5ec48d);
  if (!_0x372101) return [];
  let _0x271447 = _0x372101.startOffset + 1,
    _0x3e2d85 = Math.max(_0x271447, _0x372101.endOffset - 1);
  return [
    {
      collapsed: _0x271447 === _0x3e2d85,
      endOffset: _0x3e2d85,
      segmentId: (_0x5ec48d == null ? undefined : _0x5ec48d.segmentId) ?? "",
      startOffset: _0x271447,
    },
  ];
}
function mt(_0x167ddb, _0x4688f4) {
  var _0x5e878c;
  if (!_0x167ddb || !(_0x4688f4 != null && _0x4688f4.tableId)) return null;
  let _0x5f259b =
      (_0x5e878c = _0x167ddb.body) == null ? undefined : _0x5e878c.paragraphs,
    _0x5d6900 = gt(_0x167ddb, _0x4688f4);
  return !_0x5d6900 || !(_0x5f259b != null && _0x5f259b.length)
    ? null
    : ht(_0x5f259b, _0x5d6900.startOffset + 1);
}
function ht(_0x1edbb1, _0x19da5f) {
  let _0x356b91 = -1;
  for (let _0x4e4da1 of _0x1edbb1) {
    if (_0x19da5f > _0x356b91 && _0x19da5f <= _0x4e4da1.startIndex)
      return _0x4e4da1;
    _0x356b91 = _0x4e4da1.startIndex;
  }
  return null;
}
function gt(_0x5e8115, _0x3f8079) {
  var _0x3772f7;
  if (!_0x5e8115 || !(_0x3f8079 != null && _0x3f8079.tableId)) return null;
  let _0x43d8e1 = (0, e.getTableRangeById)(_0x5e8115, _0x3f8079.tableId),
    _0x4065d1 = Math.min(_0x3f8079.startRow, _0x3f8079.endRow),
    _0x476b5d = Math.min(_0x3f8079.startColumn, _0x3f8079.endColumn);
  return (
    (_0x43d8e1 == null || (_0x3772f7 = _0x43d8e1.rows[_0x4065d1]) == null
      ? undefined
      : _0x3772f7.cells[_0x476b5d]) ?? null
  );
}
function _t(_0x3cf7d0) {
  var _0x592dbd, _0x18fd74;
  let _0x4befb9 =
    (_0x592dbd = _0x3cf7d0.bullet) == null ? undefined : _0x592dbd.listType;
  return _0x4befb9 != null &&
    _0x4befb9.startsWith(r.PresetListType["ORDER_LIST"])
    ? r.PresetListType["ORDER_LIST"]
    : _0x4befb9 != null && _0x4befb9.startsWith(r.PresetListType["BULLET_LIST"])
      ? r.PresetListType["BULLET_LIST"]
      : _0x4befb9 === r.PresetListType["CHECK_LIST"] ||
          _0x4befb9 === r.PresetListType["CHECK_LIST_CHECKED"]
        ? r.PresetListType["CHECK_LIST"]
        : (((_0x18fd74 = _0x3cf7d0.paragraphStyle) == null
            ? undefined
            : _0x18fd74.namedStyleType) ?? r.NamedStyleType["NORMAL_TEXT"]);
}
function vt(_0x82b486, _0x750ec5) {
  return typeof _0x82b486 == "string"
    ? (lt[_0x82b486] ?? ct.icon)
    : (ut[_0x82b486] ??
        ut[_0x750ec5 ?? r.NamedStyleType["NORMAL_TEXT"]] ??
        ct.icon);
}
function M(_0x5d17d7) {
  return {
    id: _0x5d17d7.id,
    type: r.CommandType["COMMAND"],
    handler: async (_0x5c87b6, _0x3feca2) => {
      let _0x437a33 = _0x5d17d7.mapParams
        ? _0x5d17d7.mapParams(_0x3feca2)
        : _0x3feca2;
      return kt(_0x5c87b6, _0x5d17d7.targetCommandId, _0x437a33);
    },
  };
}
const yt = {
    id: "docs-table-ui.command.floating-text-style",
    type: r.CommandType["COMMAND"],
    handler: async (_0x489ec9, _0x39776b) => {
      if (!_0x39776b) return false;
      let { value: _0x1cd21b } = _0x39776b;
      if (typeof _0x1cd21b == "number")
        return kt(
          _0x489ec9,
          t.SetParagraphNamedStyleCommand["id"],
          { value: _0x1cd21b },
          "top-left",
        );
      switch (_0x1cd21b) {
        case r.PresetListType["ORDER_LIST"]:
          return kt(
            _0x489ec9,
            t.OrderListCommand["id"],
            { value: _0x1cd21b },
            "top-left",
          );
        case r.PresetListType["BULLET_LIST"]:
          return kt(
            _0x489ec9,
            t.BulletListCommand["id"],
            { value: _0x1cd21b },
            "top-left",
          );
        case r.PresetListType["CHECK_LIST"]:
          return kt(
            _0x489ec9,
            t.CheckListCommand["id"],
            { value: _0x1cd21b },
            "top-left",
          );
        default:
          return false;
      }
    },
  },
  bt = M({
    id: "docs-table-ui.command.floating-bold",
    targetCommandId: t.SetInlineFormatBoldCommand["id"],
  }),
  xt = M({
    id: "docs-table-ui.command.floating-italic",
    targetCommandId: t.SetInlineFormatItalicCommand["id"],
  }),
  St = M({
    id: "docs-table-ui.command.floating-underline",
    targetCommandId: t.SetInlineFormatUnderlineCommand["id"],
  }),
  Ct = M({
    id: "docs-table-ui.command.floating-strike-through",
    targetCommandId: t.SetInlineFormatStrikethroughCommand["id"],
  }),
  wt = M({
    id: "docs-table-ui.command.floating-font-family",
    targetCommandId: t.SetInlineFormatFontFamilyCommand["id"],
  }),
  Tt = M({
    id: "docs-table-ui.command.floating-font-size",
    targetCommandId: t.SetInlineFormatFontSizeCommand["id"],
  }),
  Et = M({
    id: "docs-table-ui.command.floating-align",
    targetCommandId: t.AlignOperationCommand["id"],
    mapParams: (_0x15ee5f) => ({
      alignType: _0x15ee5f == null ? undefined : _0x15ee5f.value,
    }),
  }),
  Dt = M({
    id: "docs-table-ui.command.floating-text-color",
    targetCommandId: t.SetInlineFormatTextColorCommand["id"],
  }),
  Ot = M({
    id: "docs-table-ui.command.floating-text-background-color",
    targetCommandId: t.SetInlineFormatTextBackgroundColorCommand["id"],
  });
async function kt(_0x16c4c4, _0x218e07, _0x4d2271, _0x300f8c = "selection") {
  var _0x485e4c;
  let _0x17630e = _0x16c4c4.get(r.ICommandService),
    _0x2df32f = _0x16c4c4.get(e.DocsTableSelectionService),
    _0x23f6aa = _0x16c4c4.get(r.IUniverInstanceService),
    _0x28e43b = _0x16c4c4.get(l.DocSelectionManagerService),
    _0x5d7e21 = _0x23f6aa.getCurrentUnitOfType(
      r.UniverInstanceType["UNIVER_DOC"],
    ),
    _0x52b8bc = _0x2df32f.getStableTableSelection();
  if (!_0x5d7e21 || !(_0x52b8bc != null && _0x52b8bc.tableId))
    return _0x17630e.executeCommand(_0x218e07, _0x4d2271);
  let _0x21f1c1 = _0x5d7e21.getSnapshot(),
    _0x46840c =
      _0x300f8c === "top-left"
        ? pt(_0x21f1c1, _0x52b8bc)
        : ft(_0x21f1c1, _0x52b8bc);
  if (!_0x46840c.length) return false;
  let _0x485e71 = _0x5d7e21.getUnitId(),
    _0x42f55e = [...(_0x28e43b.getDocRanges() ?? [])];
  (_0x485e4c = _0x28e43b.replaceDocRanges) == null ||
    _0x485e4c.call(
      _0x28e43b,
      _0x46840c,
      { unitId: _0x485e71, subUnitId: _0x485e71 },
      false,
    );
  try {
    return await _0x17630e.executeCommand(_0x218e07, _0x4d2271);
  } finally {
    var _0x169cf5;
    (_0x169cf5 = _0x28e43b.replaceDocRanges) == null ||
      _0x169cf5.call(
        _0x28e43b,
        _0x42f55e,
        { unitId: _0x485e71, subUnitId: _0x485e71 },
        false,
      );
  }
}
function At(_0x16725c) {
  "@babel/helpers - typeof";
  return (
    (At =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x200009) {
            return typeof _0x200009;
          }
        : function (_0xad4cdd) {
            return _0xad4cdd &&
              typeof Symbol == "function" &&
              _0xad4cdd.constructor === Symbol &&
              _0xad4cdd !== Symbol.prototype
              ? "symbol"
              : typeof _0xad4cdd;
          }),
    At(_0x16725c)
  );
}
function jt(_0x2c4611, _0x49e90c) {
  if (At(_0x2c4611) != "object" || !_0x2c4611) return _0x2c4611;
  var _0x549710 = _0x2c4611[Symbol.toPrimitive];
  if (_0x549710 !== undefined) {
    var _0x478c9f = _0x549710.call(_0x2c4611, _0x49e90c || "default");
    if (At(_0x478c9f) != "object") return _0x478c9f;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x49e90c === "string" ? String : Number)(_0x2c4611);
}
function Mt(_0x215736) {
  var _0x5a2749 = jt(_0x215736, "string");
  return At(_0x5a2749) == "symbol" ? _0x5a2749 : _0x5a2749 + "";
}
function N(_0x563fec, _0x4231e4, _0x9feadf) {
  return (
    (_0x4231e4 = Mt(_0x4231e4)) in _0x563fec
      ? Object.defineProperty(_0x563fec, _0x4231e4, {
          value: _0x9feadf,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x563fec[_0x4231e4] = _0x9feadf),
    _0x563fec
  );
}
const Nt = {
  unitId: "",
  visible: false,
  tableId: "",
  selectionKind: e.DocsTableSelectionKind["Range"],
  selection: null,
  anchorRect: null,
  selectionRect: null,
  mergeAction: null,
  showDeleteAction: false,
  hoverActive: false,
  deleteTarget: null,
  deleteHoverActive: false,
  topLeftCell: null,
  verticalAlign: null,
  typeIcon: undefined,
  typeValue: undefined,
};
var Pt = class extends r.Disposable {
  constructor(..._0x22990f) {
    (super(..._0x22990f),
      N(this, "_state", Nt),
      N(this, "state$", new o["BehaviorSubject"](Nt)));
  }
  getState() {
    return this._state;
  }
  setState(_0x49da95) {
    this._updateState(_0x49da95);
  }
  show(_0x501b41 = {}) {
    this._updateState({ visible: true, ..._0x501b41 });
  }
  hide() {
    this._updateState({ ...Nt, visible: false });
  }
  reset() {
    ((this._state = Nt), this.state$["next"](this._state));
  }
  setDeleteHoverActive(_0x57b386) {
    this._updateState({ deleteHoverActive: _0x57b386 });
  }
  setDeleteHover(_0x31db66) {
    this.setDeleteHoverActive(_0x31db66);
  }
  setHoverActive(_0x44c893) {
    this._updateState({ hoverActive: _0x44c893 });
  }
  dispose() {
    (this.state$["complete"](), super.dispose());
  }
  _updateState(_0x27aa39) {
    ((this._state = { ...this._state, ..._0x27aa39 }),
      this.state$["next"](this._state));
  }
};
function Ft({ items: _0x1da5af }) {
  return (0, s.jsx)("div", {
    className:
      "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: _0x1da5af.map((_0x2135d9) =>
      (0, s.jsx)(n.ToolbarItem, { ..._0x2135d9 }, _0x2135d9.id),
    ),
  });
}
function It({ items: _0x240ffc, children: _0x484b66 }) {
  return (0, s.jsxs)("div", {
    className:
      "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: [
      _0x240ffc == null
        ? undefined
        : _0x240ffc.map((_0x27a2ef) =>
            (0, s.jsx)(n.ToolbarItem, { ..._0x27a2ef }, _0x27a2ef.id),
          ),
      _0x484b66,
    ],
  });
}
const Lt = [0, 0.5, 0.75, 1, 1.5, 2.25, 3, 4.5, 6],
  Rt = [
    {
      value: "solid",
      label: "docs-table-ui.borderStyleSolid",
      icon: d.TableBorderStyleSolidIcon,
    },
    {
      value: "dot",
      label: "docs-table-ui.borderStyleDotted",
      icon: d.TableBorderStyleDottedIcon,
    },
    {
      value: "dash",
      label: "docs-table-ui.borderStyleDashed",
      icon: d.TableBorderStyleDashedIcon,
    },
  ],
  zt = [
    {
      label: "docs-table-ui.borderAll",
      preset: e.DocsTableBorderPreset["All"],
    },
    {
      label: "docs-table-ui.borderInner",
      preset: e.DocsTableBorderPreset["Inner"],
    },
    {
      label: "docs-table-ui.borderOuter",
      preset: e.DocsTableBorderPreset["Outer"],
    },
    {
      label: "docs-table-ui.borderTop",
      preset: e.DocsTableBorderPreset["Top"],
    },
    {
      label: "docs-table-ui.borderBottom",
      preset: e.DocsTableBorderPreset["Bottom"],
    },
    {
      label: "docs-table-ui.borderLeft",
      preset: e.DocsTableBorderPreset["Left"],
    },
    {
      label: "docs-table-ui.borderRight",
      preset: e.DocsTableBorderPreset["Right"],
    },
    {
      label: "docs-table-ui.borderInnerHorizontal",
      preset: e.DocsTableBorderPreset["InnerHorizontal"],
    },
    {
      label: "docs-table-ui.borderInnerVertical",
      preset: e.DocsTableBorderPreset["InnerVertical"],
    },
    {
      label: "docs-table-ui.borderNone",
      preset: e.DocsTableBorderPreset["None"],
    },
  ];
function Bt(_0x37cf39) {
  let {
    children: _0xfce527,
    disabled: _0x1ce7c0,
    itemId: _0x3cf54b,
    open: _0x4c5243,
    title: _0x24155c,
  } = _0x37cf39;
  return (0, s.jsx)(i.Tooltip, {
    title: _0x24155c,
    placement: "bottom",
    children: (0, s.jsx)("span", {
      children: (0, s.jsx)(i.Button, {
        size: "small",
        variant: "ghost",
        type: "button",
        "data-toolbar-item": _0x3cf54b,
        "aria-label": _0x24155c,
        disabled: _0x1ce7c0,
        className: (0, i.clsx)({
          "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
            _0x4c5243,
        }),
        children: _0xfce527,
      }),
    }),
  });
}
function Vt(_0x410191) {
  let { itemId: _0x17ce74, onClick: _0xeb3fc5 } = _0x410191,
    _0x1cb2c4 = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsxs)(i.Button, {
    size: "large",
    variant: "ghost",
    type: "button",
    "data-toolbar-item": _0x17ce74,
    "aria-label": _0x1cb2c4.t("docs-table-ui.toolbar.resetColor"),
    className: "univer-w-full univer-justify-start",
    onClick: (_0x4661fa) => {
      (_0x4661fa.preventDefault(), _0x4661fa.stopPropagation(), _0xeb3fc5());
    },
    children: [
      (0, s.jsx)(d.NoColorDoubleIcon, {
        className: "univer-size-5",
        extend: { colorChannel1: "var(--univer-primary-600)" },
      }),
      (0, s.jsx)("span", {
        children: _0x1cb2c4.t("docs-table-ui.toolbar.resetColor"),
      }),
    ],
  });
}
function Ht(_0x5b4ff8) {
  let {
    color: _0x52eace,
    onChange: _0x18ed40,
    onReset: _0x32678f,
    resetItemId: _0x45eef3,
  } = _0x5b4ff8;
  return (0, s.jsxs)("div", {
    className:
      "univer-overflow-hidden univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900",
    onMouseDown: (_0x3435c7) => _0x3435c7.stopPropagation(),
    children: [
      (0, s.jsx)("div", {
        className: "univer-p-4",
        children: (0, s.jsx)(i.ColorPicker, {
          value: _0x52eace,
          onChange: _0x18ed40,
        }),
      }),
      (0, s.jsx)(i.Separator, {}),
      (0, s.jsx)(Vt, { itemId: _0x45eef3, onClick: _0x32678f }),
    ],
  });
}
function Ut(_0x42449b) {
  let {
    active: _0x50d47d,
    children: _0xcb7b3a,
    disabled: _0x1b3583,
    itemId: _0x402581,
    label: _0x95c027,
    onClick: _0x2d94a3,
  } = _0x42449b;
  return (0, s.jsx)(i.Tooltip, {
    title: _0x95c027,
    placement: "bottom",
    children: (0, s.jsx)(i.Button, {
      size: "small",
      variant: "ghost",
      type: "button",
      "data-toolbar-item": _0x402581,
      "aria-label": _0x95c027,
      disabled: _0x1b3583,
      className: (0, i.clsx)({
        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
          _0x50d47d,
      }),
      onClick: (_0x11afd5) => {
        (_0x11afd5.preventDefault(), _0x2d94a3());
      },
      children: _0xcb7b3a,
    }),
  });
}
function Wt(_0x3c87c9) {
  let {
    commandId: _0x1f3350,
    disabled: _0x31541a,
    icon: _0x3baefc,
    item: _0x2405db,
    itemId: _0x3a0206,
    label: _0x14c82d,
    onExecute: _0x36b264,
  } = _0x3c87c9;
  return (0, s.jsx)(Ut, {
    active: (0, n.useObservable)(
      () => _0x2405db.activated$ ?? (0, o.of)(false),
      false,
      false,
      [_0x2405db],
    ),
    disabled: _0x31541a,
    itemId: _0x3a0206,
    label: _0x14c82d,
    onClick: () => _0x36b264(_0x1f3350),
    children: _0x3baefc,
  });
}
function Gt(_0x557270) {
  let {
      alignItem: _0x2f5827,
      disabled: _0x223ef1,
      formatItems: _0x5eb1ee,
      onExecuteInlineCommand: _0x1ba789,
      onHorizontalAlign: _0x44fd6b,
      onVerticalAlign: _0x18244a,
      verticalAlign: _0x18d9ae,
    } = _0x557270,
    _0x3e6394 = (0, n.useDependency)(r.LocaleService),
    [_0x1792e9, _0x42de35] = (0, a.useState)(false),
    _0x2f2947 = (0, n.useObservable)(
      () => _0x2f5827.value$ ?? (0, o.of)(r.HorizontalAlign["LEFT"]),
      r.HorizontalAlign["LEFT"],
      false,
      [_0x2f5827],
    ),
    _0x533f36 = [
      {
        icon: d.LeftJustifyingIcon,
        itemId: "text-align-left",
        label: "docs-table-ui.toolbar.alignLeft",
        value: r.HorizontalAlign["LEFT"],
      },
      {
        icon: d.HorizontallyIcon,
        itemId: "text-align-center",
        label: "docs-table-ui.toolbar.alignCenter",
        value: r.HorizontalAlign["CENTER"],
      },
      {
        icon: d.RightJustifyingIcon,
        itemId: "text-align-right",
        label: "docs-table-ui.toolbar.alignRight",
        value: r.HorizontalAlign["RIGHT"],
      },
      {
        icon: d.AlignTextBothIcon,
        itemId: "text-align-justify",
        label: "docs-table-ui.toolbar.alignJustify",
        value: r.HorizontalAlign["JUSTIFIED"],
      },
    ],
    _0x1116fd = [
      {
        icon: d.AlignTopIcon,
        itemId: "vertical-align-top",
        label: "docs-table-ui.verticalAlignTop",
        value: r.VerticalAlignmentType["TOP"],
      },
      {
        icon: d.VerticalCenterIcon,
        itemId: "vertical-align-middle",
        label: "docs-table-ui.verticalAlignMiddle",
        value: r.VerticalAlignmentType["CENTER"],
      },
      {
        icon: d.AlignBottomIcon,
        itemId: "vertical-align-bottom",
        label: "docs-table-ui.verticalAlignBottom",
        value: r.VerticalAlignmentType["BOTTOM"],
      },
    ];
  return (0, s.jsx)(i.Dropdown, {
    disabled: _0x223ef1,
    open: _0x1792e9,
    onOpenChange: _0x42de35,
    overlay: (0, s.jsxs)("section", {
      className: (0, i.clsx)(
        "univer-box-border\x20univer-grid\x20univer-gap-2\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-2\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
        i.borderClassName,
      ),
      onMouseDown: (_0xddf32e) => _0xddf32e.stopPropagation(),
      children: [
        (0, s.jsxs)("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-1",
          children: [
            (0, s.jsx)(Wt, {
              commandId: bt.id,
              disabled: _0x223ef1,
              icon: (0, s.jsx)(d.BoldIcon, {}),
              item: _0x5eb1ee.bold,
              itemId: "floating-text-bold",
              label: _0x3e6394.t("docs-table-ui.toolbar.bold"),
              onExecute: _0x1ba789,
            }),
            (0, s.jsx)(Wt, {
              commandId: xt.id,
              disabled: _0x223ef1,
              icon: (0, s.jsx)(d.ItalicIcon, {}),
              item: _0x5eb1ee.italic,
              itemId: "floating-text-italic",
              label: _0x3e6394.t("docs-table-ui.toolbar.italic"),
              onExecute: _0x1ba789,
            }),
            (0, s.jsx)(Wt, {
              commandId: St.id,
              disabled: _0x223ef1,
              icon: (0, s.jsx)(d.UnderlineIcon, {}),
              item: _0x5eb1ee.underline,
              itemId: "floating-text-underline",
              label: _0x3e6394.t("docs-table-ui.toolbar.underline"),
              onExecute: _0x1ba789,
            }),
            (0, s.jsx)(Wt, {
              commandId: Ct.id,
              disabled: _0x223ef1,
              icon: (0, s.jsx)(d.StrikethroughIcon, {}),
              item: _0x5eb1ee.strike,
              itemId: "floating-text-strike",
              label: _0x3e6394.t("docs-table-ui.toolbar.strikethrough"),
              onExecute: _0x1ba789,
            }),
          ],
        }),
        (0, s.jsx)(i.Separator, {}),
        (0, s.jsx)("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-1",
          children: _0x533f36.map(
            ({
              icon: _0x5dad76,
              itemId: _0x599b66,
              label: _0xb44d83,
              value: _0xc508ec,
            }) =>
              (0, s.jsx)(
                Ut,
                {
                  active: _0x2f2947 === _0xc508ec,
                  disabled: _0x223ef1,
                  itemId: _0x599b66,
                  label: _0x3e6394.t(_0xb44d83),
                  onClick: () => _0x44fd6b(_0xc508ec),
                  children: (0, s.jsx)(_0x5dad76, {}),
                },
                _0x599b66,
              ),
          ),
        }),
        (0, s.jsx)(i.Separator, {}),
        (0, s.jsx)("div", {
          className: "univer-flex univer-items-center univer-gap-1",
          children: _0x1116fd.map(
            ({
              icon: _0x2c55eb,
              itemId: _0x2f6c04,
              label: _0x32f1b6,
              value: _0x23aeaa,
            }) =>
              (0, s.jsx)(
                Ut,
                {
                  active: _0x18d9ae === _0x23aeaa,
                  disabled: _0x223ef1,
                  itemId: _0x2f6c04,
                  label: _0x3e6394.t(_0x32f1b6),
                  onClick: () => _0x18244a(_0x23aeaa),
                  children: (0, s.jsx)(_0x2c55eb, {}),
                },
                _0x2f6c04,
              ),
          ),
        }),
      ],
    }),
    children: (0, s.jsx)("span", {
      children: (0, s.jsxs)(Bt, {
        title: _0x3e6394.t("docs-table-ui.textFormat"),
        itemId: "floating-text-format-panel",
        open: _0x1792e9,
        disabled: _0x223ef1,
        children: [
          (0, s.jsx)(d.TextIcon, {}),
          (0, s.jsx)(d.MoreDownIcon, { className: "univer-text-xs" }),
        ],
      }),
    }),
  });
}
function Kt(_0x4742b8) {
  let {
      color: _0x1b2373,
      disabled: _0x180361,
      onChange: _0x11e61d,
      onReset: _0x15c78a,
    } = _0x4742b8,
    _0x2de1a3 = (0, n.useDependency)(r.LocaleService),
    [_0x583550, _0x4612ac] = (0, a.useState)(false);
  return (0, s.jsx)(i.Dropdown, {
    disabled: _0x180361,
    open: _0x583550,
    onOpenChange: _0x4612ac,
    overlay: (0, s.jsx)(Ht, {
      color: _0x1b2373,
      resetItemId: "cell-background-reset",
      onChange: _0x11e61d,
      onReset: () => {
        (_0x15c78a(), _0x4612ac(false));
      },
    }),
    children: (0, s.jsx)("span", {
      children: (0, s.jsxs)(Bt, {
        title: _0x2de1a3.t("docs-table-ui.tableBackgroundColor"),
        itemId: "cell-background",
        open: _0x583550,
        disabled: _0x180361,
        children: [
          (0, s.jsx)(d.PaintBucketDoubleIcon, {
            className: "univer-fill-primary-600",
            extend: { colorChannel1: _0x1b2373 },
          }),
          (0, s.jsx)(d.MoreDownIcon, { className: "univer-text-xs" }),
        ],
      }),
    }),
  });
}
function qt(_0x30faee) {
  var _0x4af2ac;
  let {
      color: _0x929e8b,
      disabled: _0x5203ee,
      onChangeColor: _0x4f32e2,
      onChangeStyle: _0xc7ee0,
      onChangeWidth: _0x557dba,
      onResetColor: _0x465a6c,
      onSelectPreset: _0x1b0fe1,
      style: _0x3a64b8,
      width: _0x206e1c,
    } = _0x30faee,
    _0x3133d8 = (0, n.useDependency)(r.LocaleService),
    [_0x4a41e8, _0x39db95] = (0, a.useState)(false),
    _0x370800 = (0, n.useObservable)(
      _0x3133d8.direction$,
      _0x3133d8.getDirection(),
    ),
    _0x1a9d0f =
      ((_0x4af2ac = Rt.find((_0x434727) => _0x434727.value === _0x3a64b8)) ==
      null
        ? undefined
        : _0x4af2ac.icon) ?? d.TableBorderStyleSolidIcon;
  return (0, s.jsx)(i.Dropdown, {
    disabled: _0x5203ee,
    open: _0x4a41e8,
    onOpenChange: _0x39db95,
    overlay: (0, s.jsxs)("section", {
      className: (0, i.clsx)(
        "univer-box-border univer-grid univer-gap-2 univer-rounded-lg univer-bg-gray-0 univer-p-2 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
        i.borderClassName,
      ),
      dir: _0x370800,
      onMouseDown: (_0x16061e) => _0x16061e.stopPropagation(),
      children: [
        (0, s.jsx)("div", {
          className: "univer-grid\x20univer-grid-cols-5\x20univer-gap-1",
          children: zt.map(({ label: _0x4f3cc2, preset: _0x42a523 }) => {
            let _0x1c9cff = nt[_0x42a523],
              _0x1233a5 = _0x3133d8.t(_0x4f3cc2);
            return (0, s.jsx)(
              i.Tooltip,
              {
                title: _0x1233a5,
                placement: "bottom",
                children: (0, s.jsx)(i.Button, {
                  size: "icon",
                  variant: "ghost",
                  type: "button",
                  "aria-label": _0x1233a5,
                  onClick: () => {
                    (_0x1b0fe1(_0x42a523), _0x39db95(false));
                  },
                  children: (0, s.jsx)(_0x1c9cff, {
                    className: "univer-size-4 univer-text-current",
                    extend: tt,
                  }),
                }),
              },
              _0x42a523,
            );
          }),
        }),
        (0, s.jsx)(i.Separator, {}),
        (0, s.jsxs)("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-2",
          children: [
            (0, s.jsx)(i.Dropdown, {
              overlay: (0, s.jsx)(Ht, {
                color: _0x929e8b,
                resetItemId: "border-color-reset",
                onChange: (_0x33e946) => {
                  _0x4f32e2(_0x33e946);
                },
                onReset: _0x465a6c,
              }),
              children: (0, s.jsxs)(i.Button, {
                size: "small",
                variant: "ghost",
                type: "button",
                "aria-label": _0x3133d8.t("docs-table-ui.borderColor"),
                children: [
                  (0, s.jsx)(d.PaintBucketDoubleIcon, {
                    className: "univer-fill-primary-600",
                    extend: { colorChannel1: _0x929e8b },
                  }),
                  (0, s.jsx)(d.MoreDownIcon, { className: "univer-text-xs" }),
                ],
              }),
            }),
            (0, s.jsx)(i.Dropdown, {
              overlay: (0, s.jsx)("div", {
                className:
                  "univer-grid univer-gap-1 univer-rounded-lg univer-bg-gray-0 univer-p-1.5 univer-shadow-lg dark:!univer-bg-gray-900",
                children: Lt.map((_0x599fe3) =>
                  (0, s.jsxs)(
                    i.Button,
                    {
                      size: "middle",
                      variant: "ghost",
                      type: "button",
                      className: (0, i.clsx)("univer-min-w-16", {
                        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                          _0x599fe3 === _0x206e1c,
                      }),
                      onClick: () => {
                        _0x557dba(_0x599fe3);
                      },
                      children: [_0x599fe3, "pt"],
                    },
                    _0x599fe3,
                  ),
                ),
              }),
              children: (0, s.jsxs)(i.Button, {
                size: "small",
                variant: "ghost",
                type: "button",
                "aria-label": _0x3133d8.t("docs-table-ui.borderWidth"),
                children: [
                  (0, s.jsx)(d.TableBorderWidthIcon, {
                    className: "univer-text-base",
                  }),
                  (0, s.jsxs)("span", {
                    className: "univer-text-xs",
                    children: [_0x206e1c, "pt"],
                  }),
                  (0, s.jsx)(d.MoreDownIcon, { className: "univer-text-xs" }),
                ],
              }),
            }),
            (0, s.jsx)(i.Dropdown, {
              overlay: (0, s.jsx)("div", {
                className:
                  "univer-grid univer-gap-1 univer-rounded-lg univer-bg-gray-0 univer-p-1.5 univer-shadow-lg dark:!univer-bg-gray-900",
                children: Rt.map(
                  ({ icon: _0x28c5fb, label: _0x38ca91, value: _0xed7b3d }) =>
                    (0, s.jsx)(
                      i.Tooltip,
                      {
                        title: _0x3133d8.t(_0x38ca91),
                        placement: "right",
                        children: (0, s.jsx)(i.Button, {
                          size: "middle",
                          variant: "ghost",
                          type: "button",
                          className: (0, i.clsx)("univer-min-w-12", {
                            "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                              _0xed7b3d === _0x3a64b8,
                          }),
                          onClick: () => {
                            _0xc7ee0(_0xed7b3d);
                          },
                          children: (0, s.jsx)(_0x28c5fb, {
                            className: "univer-text-base",
                          }),
                        }),
                      },
                      _0xed7b3d,
                    ),
                ),
              }),
              children: (0, s.jsxs)(i.Button, {
                size: "small",
                variant: "ghost",
                type: "button",
                "aria-label": _0x3133d8.t("docs-table-ui.borderStyle"),
                children: [
                  (0, s.jsx)(_0x1a9d0f, { className: "univer-text-base" }),
                  (0, s.jsx)(d.MoreDownIcon, { className: "univer-text-xs" }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
    children: (0, s.jsx)("span", {
      children: (0, s.jsxs)(Bt, {
        title: _0x3133d8.t("docs-table-ui.borders"),
        itemId: "cell-border",
        open: _0x4a41e8,
        disabled: _0x5203ee,
        children: [
          (0, s.jsx)(d.OuterBorderDoubleIcon, {}),
          (0, s.jsx)(d.MoreDownIcon, { className: "univer-text-xs" }),
        ],
      }),
    }),
  });
}
function Jt(_0x2d5ec6) {
  let {
      color: _0xc46f71,
      commandId: _0x3afc42,
      disabled: _0x575903,
      icon: _0x394013,
      itemId: _0x50a593,
      onChange: _0x2f379c,
      resetItemId: _0x38ff72,
      title: _0x38a2f0,
    } = _0x2d5ec6,
    [_0x4b0279, _0x2da5b8] = (0, a.useState)(false);
  return (0, s.jsx)(i.Dropdown, {
    disabled: _0x575903,
    open: _0x4b0279,
    onOpenChange: _0x2da5b8,
    overlay: (0, s.jsx)(Ht, {
      color: _0xc46f71,
      resetItemId: _0x38ff72,
      onChange: (_0x5992d3) => {
        _0x2f379c(_0x3afc42, _0x5992d3);
      },
      onReset: () => {
        (_0x2f379c(_0x3afc42, null), _0x2da5b8(false));
      },
    }),
    children: (0, s.jsx)("span", {
      children: (0, s.jsxs)(Bt, {
        title: _0x38a2f0,
        itemId: _0x50a593,
        open: _0x4b0279,
        disabled: _0x575903,
        children: [
          _0x394013 === "font"
            ? (0, s.jsx)(d.FontColorDoubleIcon, {
                className: "univer-fill-primary-600",
                extend: { colorChannel1: _0xc46f71 },
              })
            : (0, s.jsx)(d.PaintBucketDoubleIcon, {
                className: "univer-fill-primary-600",
                extend: { colorChannel1: _0xc46f71 },
              }),
          (0, s.jsx)(d.MoreDownIcon, { className: "univer-text-xs" }),
        ],
      }),
    }),
  });
}
const Yt = "docs-table-ui.floating-toolbar";
function Xt(_0x536f98, _0x1594a6) {
  var _0x2ff6d1, _0x14f46b;
  if (!_0x536f98 || !(_0x1594a6 != null && _0x1594a6.tableId)) return null;
  let _0xd967df =
    (_0x2ff6d1 = (0, e.getTableRangeById)(_0x536f98, _0x1594a6.tableId)) == null
      ? undefined
      : _0x2ff6d1.tableSource;
  return (
    (_0xd967df == null ||
    (_0x14f46b = _0xd967df.tableRows[_0x1594a6.startRow]) == null
      ? undefined
      : _0x14f46b.tableCells[_0x1594a6.startColumn]) ?? null
  );
}
function Zt(_0x537b6e) {
  return _0x537b6e
    ? ([
        _0x537b6e.borderTop,
        _0x537b6e.borderRight,
        _0x537b6e.borderBottom,
        _0x537b6e.borderLeft,
      ].find((_0x320233) => {
        var _0x4a52f3, _0x54b1ec;
        return (
          !!_0x320233 &&
          ((((_0x4a52f3 = _0x320233.width) == null ? undefined : _0x4a52f3.v) ??
            0) > 0 ||
            !!((_0x54b1ec = _0x320233.color) != null && _0x54b1ec.rgb) ||
            _0x320233.dashStyle != null)
        );
      }) ?? null)
    : null;
}
function Qt(_0x434617) {
  return _0x434617 === r.DashStyleType["DOT"]
    ? "dot"
    : _0x434617 === r.DashStyleType["DASH"]
      ? "dash"
      : "solid";
}
function P(_0x3f0e16, _0x1757ec, _0x1a0b6f) {
  return { ..._0x1757ec(_0x3f0e16), ..._0x1a0b6f };
}
function F(_0x463d46, _0x42cd3d, _0x194828) {
  return { ..._0x463d46, commandId: _0x42cd3d, disabled$: _0x194828 };
}
const $t = {
  [r.NamedStyleType["NORMAL_TEXT"]]: "docs-table-ui.toolbar.textStyle.normal",
  [r.NamedStyleType["HEADING_1"]]: "docs-table-ui.toolbar.textStyle.heading1",
  [r.NamedStyleType["HEADING_2"]]: "docs-table-ui.toolbar.textStyle.heading2",
  [r.NamedStyleType["HEADING_3"]]: "docs-table-ui.toolbar.textStyle.heading3",
  [r.NamedStyleType["HEADING_4"]]: "docs-table-ui.toolbar.textStyle.heading4",
  [r.NamedStyleType["HEADING_5"]]: "docs-table-ui.toolbar.textStyle.heading5",
  [r.PresetListType["ORDER_LIST"]]:
    "docs-table-ui.toolbar.textStyle.orderedList",
  [r.PresetListType["BULLET_LIST"]]:
    "docs-table-ui.toolbar.textStyle.unorderedList",
  [r.PresetListType["CHECK_LIST"]]: "docs-table-ui.toolbar.textStyle.checklist",
};
function en(_0x42d925) {
  let { label: _0x1e0dec, tooltip: _0x183d7c, ..._0x50f96f } = _0x42d925,
    _0x1e8132 = $t[String(_0x42d925.value)],
    _0x10c605 =
      _0x42d925.id === t.OrderListCommand["id"] ||
      _0x42d925.id === t.BulletListCommand["id"] ||
      _0x42d925.id === t.CheckListCommand["id"]
        ? yt.id
        : _0x42d925.id;
  return {
    ..._0x50f96f,
    id: _0x10c605,
    label: _0x1e8132,
    ...(_0x183d7c ? { tooltip: _0x1e8132 } : {}),
  };
}
function tn(_0x52ba92) {
  return (
    _0x52ba92 &&
    (Array.isArray(_0x52ba92)
      ? _0x52ba92.map(en)
      : _0x52ba92.pipe((0, o.map)((_0x17a268) => _0x17a268.map(en))))
  );
}
function nn() {
  var _0x7a0bd5,
    _0x150aff,
    _0x2ce42d,
    _0x2564cc,
    _0x8bf990,
    _0x5baf5a,
    _0x179300;
  let _0x103fde = (0, n.useDependency)(r.ICommandService),
    _0x3000a2 = (0, n.useDependency)(r.LocaleService),
    _0x262e3d = (0, n.useDependency)(r.Injector),
    _0x399e5c = (0, n.useDependency)(r.IUniverInstanceService),
    _0x13adf0 = (0, n.useDependency)(Pt),
    _0x1f72d9 = (0, n.useObservable)(
      () => _0x13adf0.state$,
      _0x13adf0.getState(),
      false,
      [_0x13adf0],
    ),
    _0x4ef438 =
      !!_0x1f72d9.selection &&
      _0x1f72d9.selection["startRow"] >= 0 &&
      _0x1f72d9.selection["endRow"] >= 0 &&
      _0x1f72d9.selection["startColumn"] >= 0 &&
      _0x1f72d9.selection["endColumn"] >= 0,
    _0x261809 = _0x262e3d,
    _0x7a111 = (0, a.useMemo)(
      () =>
        _0x13adf0.state$["pipe"](
          (0, o.map)((_0x39aec0) => !_0x39aec0.selection),
        ),
      [_0x13adf0],
    ),
    _0x145687 = (0, a.useMemo)(
      () =>
        _0x13adf0.state$["pipe"](
          (0, o.map)(
            (_0x4201a4) =>
              _0x4201a4.typeValue ?? r.NamedStyleType["NORMAL_TEXT"],
          ),
        ),
      [_0x13adf0],
    ),
    _0x2f2b99 = (0, a.useMemo)(() => {
      let _0x5d24f1 = P(_0x261809, t.FloatTextStyleMenuItemFactory);
      return {
        ..._0x5d24f1,
        commandId: yt.id,
        disabled$: _0x7a111,
        icon: _0x1f72d9.typeIcon ?? "TextTypeIcon",
        selections: tn(_0x5d24f1.selections),
        tooltip: "docs-table-ui.toolbar.textStyle.tooltip",
        value$: _0x145687,
      };
    }, [_0x261809, _0x7a111, _0x145687, _0x1f72d9.typeIcon]),
    _0xed0f07 = (0, a.useMemo)(
      () => [
        F(P(_0x261809, t.FontFamilySelectorMenuItemFactory), wt.id, _0x7a111),
        F(P(_0x261809, t.FontSizeSelectorMenuItemFactory), Tt.id, _0x7a111),
      ],
      [_0x261809, _0x7a111],
    ),
    _0x386d14 = (0, a.useMemo)(
      () => ({
        align: F(P(_0x261809, t.AlignMenuItemFactory), Et.id, _0x7a111),
        bold: F(P(_0x261809, t.BoldMenuItemFactory), bt.id, _0x7a111),
        italic: F(P(_0x261809, t.ItalicMenuItemFactory), xt.id, _0x7a111),
        strike: F(
          P(_0x261809, t.StrikeThroughMenuItemFactory),
          Ct.id,
          _0x7a111,
        ),
        underline: F(P(_0x261809, t.UnderlineMenuItemFactory), St.id, _0x7a111),
      }),
      [_0x261809, _0x7a111],
    ),
    _0xf05f93 = (0, a.useMemo)(
      () => [
        F(P(_0x261809, t.TextColorSelectorMenuItemFactory), Dt.id, _0x7a111),
        F(
          P(_0x261809, t.BackgroundColorSelectorMenuItemFactory),
          Ot.id,
          _0x7a111,
        ),
      ],
      [_0x261809, _0x7a111],
    ),
    _0x3c6271 = (0, n.useObservable)(
      () => {
        var _0x555901;
        return (
          ((_0x555901 = _0xf05f93[0]) == null ? undefined : _0x555901.value$) ??
          (0, o.of)(r.DEFAULT_STYLES["cl"].rgb)
        );
      },
      r.DEFAULT_STYLES["cl"].rgb,
      false,
      [_0xf05f93],
    ),
    _0x5ae9d2 = (0, n.useObservable)(
      () => {
        var _0x4a9766;
        return (
          ((_0x4a9766 = _0xf05f93[1]) == null ? undefined : _0x4a9766.value$) ??
          (0, o.of)(r.DEFAULT_STYLES["bg"].rgb)
        );
      },
      r.DEFAULT_STYLES["bg"].rgb,
      false,
      [_0xf05f93],
    ),
    _0x20d691 = (0, a.useMemo)(() => {
      var _0x49c97a;
      return Xt(
        (_0x49c97a = _0x399e5c.getCurrentUnitOfType(
          r.UniverInstanceType["UNIVER_DOC"],
        )) == null
          ? undefined
          : _0x49c97a.getSnapshot(),
        _0x1f72d9.selection,
      );
    }, [_0x1f72d9.selection, _0x399e5c]),
    _0x2b9009 =
      (_0x20d691 == null || (_0x7a0bd5 = _0x20d691.backgroundColor) == null
        ? undefined
        : _0x7a0bd5.rgb) ?? r.DEFAULT_STYLES["bg"].rgb,
    _0x2a54cf = Zt(_0x20d691),
    _0x1f863a =
      (_0x2a54cf == null || (_0x150aff = _0x2a54cf.color) == null
        ? undefined
        : _0x150aff.rgb) ?? "#1f1f1f",
    _0x131eb5 =
      (_0x2a54cf == null || (_0x2ce42d = _0x2a54cf.width) == null
        ? undefined
        : _0x2ce42d.v) ?? 1,
    _0x3d4a5a = Qt(_0x2a54cf == null ? undefined : _0x2a54cf.dashStyle),
    _0x1b6baa = [
      (_0x2564cc = _0x1f72d9.selection) == null
        ? undefined
        : _0x2564cc.startRow,
      (_0x8bf990 = _0x1f72d9.selection) == null ? undefined : _0x8bf990.endRow,
      (_0x5baf5a = _0x1f72d9.selection) == null
        ? undefined
        : _0x5baf5a.startColumn,
      (_0x179300 = _0x1f72d9.selection) == null
        ? undefined
        : _0x179300.endColumn,
      _0x2b9009,
      _0x1f863a,
      _0x131eb5,
      _0x3d4a5a,
    ].join("|"),
    _0x4d552f = {
      backgroundColor: _0x2b9009,
      borderColor: _0x1f863a,
      borderStyle: _0x3d4a5a,
      borderWidth: _0x131eb5,
      key: _0x1b6baa,
    },
    [_0x2746d4, _0x116868] = (0, a.useState)(_0x4d552f),
    _0x3c901e = _0x2746d4.key === _0x1b6baa ? _0x2746d4 : _0x4d552f,
    _0x12883e = (_0x145aa5) => {
      _0x116868({ ..._0x3c901e, ..._0x145aa5, key: _0x1b6baa });
    };
  if (!_0x1f72d9.visible || !_0x4ef438) return null;
  let _0x3ec3d4 =
      _0x1f72d9.mergeAction === "unmerge"
        ? _0x3000a2.t("docs-table-ui.unmergeCells")
        : _0x1f72d9.mergeAction === "merge"
          ? _0x3000a2.t("docs-table-ui.mergeCells")
          : null,
    _0x3be589 =
      _0x1f72d9.deleteTarget === "row"
        ? _0x3000a2.t("docs-table-ui.deleteRow")
        : _0x1f72d9.deleteTarget === "column"
          ? _0x3000a2.t("docs-table-ui.deleteColumn")
          : null,
    _0x4a36c8 = () => {
      !_0x1f72d9.selection ||
        !_0x1f72d9.mergeAction ||
        _0x103fde.executeCommand(
          _0x1f72d9.mergeAction === "unmerge"
            ? e.DocsTableUnmergeCellsCommand["id"]
            : e.DocsTableMergeCellsCommand["id"],
          _0x1f72d9.selection,
        );
    },
    _0x191584 = () => {
      !_0x1f72d9.selection ||
        !_0x1f72d9.deleteTarget ||
        _0x103fde.executeCommand(
          _0x1f72d9.deleteTarget === "row"
            ? e.DocsTableDeleteRowsCommand["id"]
            : e.DocsTableDeleteColumnsCommand["id"],
          _0x1f72d9.selection,
        );
    },
    _0x4c79d2 = (_0x2bd0e4) => {
      _0x1f72d9.selection &&
        _0x103fde.executeCommand(
          e.DocsTableSetTableVerticalAlignCommand["id"],
          { value: _0x2bd0e4 },
        );
    },
    _0x4d987e = (_0xbb82c) => {
      _0x1f72d9.selection && _0x103fde.executeCommand(_0xbb82c);
    },
    _0x378861 = (_0x524516) => {
      _0x1f72d9.selection &&
        _0x103fde.executeCommand(Et.id, { value: _0x524516 });
    },
    _0x1c163c = (_0x29e6d6) => (
      _0x12883e({ backgroundColor: _0x29e6d6 }),
      _0x103fde.executeCommand(e.DocsTableSetTableBackgroundCommand["id"], {
        value: _0x29e6d6,
      })
    ),
    _0x2c3608 = () => (
      _0x12883e({ backgroundColor: _0x2b9009 }),
      _0x103fde.executeCommand(e.DocsTableSetTableBackgroundCommand["id"], {
        value: null,
      })
    ),
    _0x93d65 = (_0x1d32a5, _0x35ce7b) => {
      if (_0x1f72d9.selection)
        return _0x103fde.executeCommand(_0x1d32a5, { value: _0x35ce7b });
    };
  return (0, s.jsxs)("div", {
    "data-u-comp": Yt,
    role: "toolbar",
    onMouseEnter: () => _0x13adf0.setHoverActive(true),
    onMouseLeave: () => _0x13adf0.setHoverActive(false),
    onMouseDown: (_0xa907e8) => {
      (_0xa907e8.stopPropagation(), _0xa907e8.preventDefault());
    },
    className: (0, i.clsx)(
      "univer-box-border univer-flex univer-items-center univer-rounded univer-bg-gray-0 univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      i.borderClassName,
    ),
    children: [
      (0, s.jsx)(It, {
        items: [_0x2f2b99],
        children: _0x3ec3d4
          ? (0, s.jsx)(i.Tooltip, {
              title: _0x3ec3d4,
              placement: "bottom",
              children: (0, s.jsx)("span", {
                children: (0, s.jsx)(n.ToolbarButton, {
                  "data-toolbar-item": "merge-cells",
                  "aria-label": _0x3ec3d4,
                  onClick: _0x4a36c8,
                  children:
                    _0x1f72d9.mergeAction === "unmerge"
                      ? (0, s.jsx)(d.CancelMergeIcon, {})
                      : (0, s.jsx)(d.MergeAllIcon, {}),
                }),
              }),
            })
          : null,
      }),
      (0, s.jsx)(i.Separator, { orientation: "vertical" }),
      (0, s.jsxs)(It, {
        children: [
          (0, s.jsx)(Kt, {
            color: _0x3c901e.backgroundColor,
            disabled: !_0x1f72d9.selection,
            onChange: _0x1c163c,
            onReset: _0x2c3608,
          }),
          (0, s.jsx)(qt, {
            color: _0x3c901e.borderColor,
            width: _0x3c901e.borderWidth,
            style: _0x3c901e.borderStyle,
            disabled: !_0x1f72d9.selection,
            onSelectPreset: (_0x12ca5d) =>
              _0x103fde.executeCommand(e.DocsTableSetTableBorderCommand["id"], {
                preset: _0x12ca5d,
              }),
            onChangeColor: (_0x5dfcc9) => (
              _0x12883e({ borderColor: _0x5dfcc9 }),
              _0x103fde.executeCommand(
                e.DocsTableSetTableBorderColorCommand["id"],
                { value: _0x5dfcc9 },
              )
            ),
            onResetColor: () => (
              _0x12883e({ borderColor: _0x1f863a }),
              _0x103fde.executeCommand(
                e.DocsTableSetTableBorderColorCommand["id"],
                { value: null },
              )
            ),
            onChangeWidth: (_0x377ae5) => (
              _0x12883e({ borderWidth: _0x377ae5 }),
              _0x103fde.executeCommand(
                e.DocsTableSetTableBorderWidthCommand["id"],
                { value: _0x377ae5 },
              )
            ),
            onChangeStyle: (_0x4b5e36) => (
              _0x12883e({ borderStyle: _0x4b5e36 }),
              _0x103fde.executeCommand(
                e.DocsTableSetTableBorderStyleCommand["id"],
                { value: _0x4b5e36 },
              )
            ),
          }),
        ],
      }),
      (0, s.jsx)(i.Separator, { orientation: "vertical" }),
      (0, s.jsx)(Ft, { items: _0xed0f07 }),
      (0, s.jsx)(i.Separator, { orientation: "vertical" }),
      (0, s.jsx)(It, {
        children: (0, s.jsx)(Gt, {
          alignItem: _0x386d14.align,
          disabled: !_0x1f72d9.selection,
          formatItems: {
            bold: _0x386d14.bold,
            italic: _0x386d14.italic,
            strike: _0x386d14.strike,
            underline: _0x386d14.underline,
          },
          verticalAlign: _0x1f72d9.verticalAlign,
          onExecuteInlineCommand: _0x4d987e,
          onHorizontalAlign: _0x378861,
          onVerticalAlign: _0x4c79d2,
        }),
      }),
      (0, s.jsx)(i.Separator, { orientation: "vertical" }),
      (0, s.jsxs)(It, {
        children: [
          (0, s.jsx)(Jt, {
            color: _0x3c6271,
            commandId: Dt.id,
            disabled: !_0x1f72d9.selection,
            icon: "font",
            itemId: "text-color",
            resetItemId: "text-color-reset",
            title: _0x3000a2.t("docs-table-ui.toolbar.textColor.main"),
            onChange: _0x93d65,
          }),
          (0, s.jsx)(Jt, {
            color: _0x5ae9d2,
            commandId: Ot.id,
            disabled: !_0x1f72d9.selection,
            icon: "bucket",
            itemId: "text-background",
            resetItemId: "text-background-reset",
            title: _0x3000a2.t("docs-table-ui.toolbar.fillColor.main"),
            onChange: _0x93d65,
          }),
        ],
      }),
      _0x1f72d9.showDeleteAction && _0x3be589
        ? (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(i.Separator, { orientation: "vertical" }),
              (0, s.jsx)("div", {
                className:
                  "univer-flex univer-h-7 univer-items-center univer-px-1",
                onMouseEnter: () => _0x13adf0.setDeleteHoverActive(true),
                onMouseLeave: () => _0x13adf0.setDeleteHoverActive(false),
                children: (0, s.jsx)(i.Tooltip, {
                  title: _0x3be589,
                  placement: "bottom",
                  children: (0, s.jsx)("span", {
                    children: (0, s.jsx)(n.ToolbarButton, {
                      "data-toolbar-item": "delete-selection",
                      "aria-label": _0x3be589,
                      className: (0, i.clsx)(
                        "hover:!univer-bg-red-50 hover:!univer-text-red-500",
                        "dark:hover:!univer-bg-red-950/40 dark:hover:!univer-text-red-400",
                      ),
                      onClick: _0x191584,
                      children:
                        _0x1f72d9.deleteTarget === "row"
                          ? (0, s.jsx)(d.DeleteRowDoubleIcon, {
                              extend: { colorChannel1: "currentColor" },
                            })
                          : (0, s.jsx)(d.DeleteColumnDoubleIcon, {
                              extend: { colorChannel1: "currentColor" },
                            }),
                    }),
                  }),
                }),
              }),
            ],
          })
        : null,
    ],
  });
}
const rn = "docs-table-ui.options-panel";
function an() {
  let _0x2e4254 = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsx)("section", {
    "data-u-comp": rn,
    children: (0, s.jsxs)("label", {
      children: [
        (0, s.jsx)("span", {
          children: _0x2e4254.t("docs-table-ui.tableOptions"),
        }),
        (0, s.jsx)(i.InputNumber, {
          min: 0,
          "aria-label": _0x2e4254.t("docs-table-ui.pinHeaderRows"),
        }),
      ],
    }),
  });
}
const on = "docs-table-ui.toolbar";
function sn() {
  let _0x2ec32d = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsxs)("div", {
    "data-u-comp": on,
    children: [
      (0, s.jsx)(i.Button, {
        size: "icon",
        type: "button",
        "aria-label": _0x2ec32d.t("docs-table-ui.insertRowBelow"),
        children: "+",
      }),
      (0, s.jsx)(i.Button, {
        size: "icon",
        type: "button",
        "aria-label": _0x2ec32d.t("docs-table-ui.insertColumnRight"),
        children: "+",
      }),
      (0, s.jsx)(i.Button, {
        size: "icon",
        type: "button",
        "aria-label": _0x2ec32d.t("docs-table-ui.sortAscending"),
        children: "A",
      }),
    ],
  });
}
function I(_0x2a24ff, _0xba7e57) {
  return function (_0x57d2ee, _0xace89b) {
    _0xba7e57(_0x57d2ee, _0xace89b, _0x2a24ff);
  };
}
function L(_0x16fa61, _0xf7011, _0x1dffde, _0x560564) {
  var _0x2b005e = arguments.length,
    _0x29364e =
      _0x2b005e < 3
        ? _0xf7011
        : _0x560564 === null
          ? (_0x560564 = Object.getOwnPropertyDescriptor(_0xf7011, _0x1dffde))
          : _0x560564,
    _0x156362;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x29364e = Reflect.decorate(_0x16fa61, _0xf7011, _0x1dffde, _0x560564);
  else {
    for (var _0x2ec9cf = _0x16fa61.length - 1; _0x2ec9cf >= 0; _0x2ec9cf--)
      (_0x156362 = _0x16fa61[_0x2ec9cf]) &&
        (_0x29364e =
          (_0x2b005e < 3
            ? _0x156362(_0x29364e)
            : _0x2b005e > 3
              ? _0x156362(_0xf7011, _0x1dffde, _0x29364e)
              : _0x156362(_0xf7011, _0x1dffde)) || _0x29364e);
  }
  return (
    _0x2b005e > 3 &&
      _0x29364e &&
      Object.defineProperty(_0xf7011, _0x1dffde, _0x29364e),
    _0x29364e
  );
}
let cn = class extends r.Disposable {
  constructor(_0xb6df97, _0xe6224c) {
    (super(),
      (this._componentManager = _0xb6df97),
      (this._iconManager = _0xe6224c),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    ([
      [et, it],
      [at, st],
      [Yt, nn],
      [rn, an],
      [on, sn],
    ].forEach(([_0x2e465d, _0x599b3c]) => {
      this.disposeWithMe(
        this._componentManager["register"](_0x2e465d, _0x599b3c),
      );
    }),
      this.disposeWithMe(this._componentManager["register"](y, ne)));
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        TableIcon: d.TableIcon,
        TableBorderWidthIcon: d.TableBorderWidthIcon,
        TableBorderStyleIcon: d.TableBorderStyleIcon,
        TableBorderStyleSolidIcon: d.TableBorderStyleSolidIcon,
        TableBorderStyleDottedIcon: d.TableBorderStyleDottedIcon,
        TableBorderStyleDashedIcon: d.TableBorderStyleDashedIcon,
        CalendarIcon: d.CalendarIcon,
        NumberIcon: d.NumberIcon,
      }),
    );
  }
};
cn = L(
  [I(0, (0, r.Inject)(n.ComponentManager)), I(1, (0, r.Inject)(n.IconManager))],
  cn,
);
var ln = class {
    constructor() {
      N(this, "_handlers", []);
    }
    register(_0xd1006) {
      return (
        this._handlers["push"](_0xd1006),
        this._sortHandlers(),
        (0, r.toDisposable)(() => {
          let _0x3fae5b = this._handlers["indexOf"](_0xd1006);
          _0x3fae5b >= 0 && this._handlers["splice"](_0x3fae5b, 1);
        })
      );
    }
    handleWheel(_0x352f36) {
      return this._handlers["some"]((_0x5bc122) =>
        _0x5bc122.handleWheel(_0x352f36),
      );
    }
    _sortHandlers() {
      this._handlers["sort"](
        (_0x1b62d6, _0x31805a) =>
          (_0x31805a.order ?? 0) - (_0x1b62d6.order ?? 0),
      );
    }
  },
  un = class extends r.Disposable {
    constructor(..._0x105ce7) {
      (super(..._0x105ce7), N(this, "_states", new Map()));
    }
    getState(_0x33411c, _0x1e45bc) {
      return this._states["get"](this._key(_0x33411c, _0x1e45bc));
    }
    setViewport(_0x2ac8ab, _0x35ad92, _0x5b1f70) {
      let _0xea6071 = this._key(_0x2ac8ab, _0x35ad92),
        _0x24a033 = this._states["get"](_0xea6071),
        _0x1eeda0 = {
          contentWidth: Math.max(0, _0x5b1f70.contentWidth),
          isDraggingScrollbar:
            (_0x24a033 == null ? undefined : _0x24a033.isDraggingScrollbar) ??
            false,
          leadingInsetLeft: Math.max(0, _0x5b1f70.leadingInsetLeft ?? 0),
          overflowWidthThreshold: Math.max(
            0,
            _0x5b1f70.overflowWidthThreshold ?? _0x5b1f70.viewportWidth,
          ),
          scrollLeft:
            (_0x24a033 == null ? undefined : _0x24a033.scrollLeft) ?? 0,
          trailingInsetRight: Math.max(0, _0x5b1f70.trailingInsetRight ?? 0),
          viewportLeft: _0x5b1f70.viewportLeft ?? 0,
          viewportWidth: Math.max(0, _0x5b1f70.viewportWidth),
        };
      return (
        (_0x1eeda0.scrollLeft = this._clamp(_0x1eeda0.scrollLeft, _0x1eeda0)),
        this._states["set"](_0xea6071, _0x1eeda0),
        _0x1eeda0
      );
    }
    setScrollLeft(_0x36c9b1, _0x385287, _0x385fd5) {
      let _0x57898c = this.getState(_0x36c9b1, _0x385287);
      return _0x57898c
        ? ((_0x57898c.scrollLeft = this._clamp(_0x385fd5, _0x57898c)),
          _0x57898c.scrollLeft)
        : 0;
    }
    toContentX(_0x3232cd, _0x4972b1, _0x200b16) {
      let _0x1d8dc6 = this.getState(_0x3232cd, _0x4972b1);
      return (
        _0x200b16 -
        ((_0x1d8dc6 == null ? undefined : _0x1d8dc6.leadingInsetLeft) ?? 0) +
        ((_0x1d8dc6 == null ? undefined : _0x1d8dc6.scrollLeft) ?? 0)
      );
    }
    toViewportX(_0x52e4c0, _0x33a7c1, _0x73611a) {
      let _0x134ed4 = this.getState(_0x52e4c0, _0x33a7c1);
      return (
        _0x73611a +
        ((_0x134ed4 == null ? undefined : _0x134ed4.leadingInsetLeft) ?? 0) -
        ((_0x134ed4 == null ? undefined : _0x134ed4.scrollLeft) ?? 0)
      );
    }
    ensureContentRangeVisible(_0x107d7f, _0x28046d, _0x3b63fb, _0x3f5fcb) {
      let _0x9536eb = this.getState(_0x107d7f, _0x28046d);
      if (!_0x9536eb) return 0;
      let _0x442df9 = _0x9536eb.scrollLeft - _0x9536eb.leadingInsetLeft,
        _0x35c5cf = _0x442df9 + _0x9536eb.viewportWidth;
      return _0x3b63fb < _0x442df9
        ? this.setScrollLeft(
            _0x107d7f,
            _0x28046d,
            _0x3b63fb + _0x9536eb.leadingInsetLeft,
          )
        : _0x3f5fcb > _0x35c5cf
          ? this.setScrollLeft(
              _0x107d7f,
              _0x28046d,
              _0x3f5fcb + _0x9536eb.leadingInsetLeft - _0x9536eb.viewportWidth,
            )
          : _0x9536eb.scrollLeft;
    }
    ensureColumnRangeVisible(_0x11d156, _0x28cc85, _0x1ff45f, _0xa9cc62) {
      return this.ensureContentRangeVisible(
        _0x11d156,
        _0x28cc85,
        _0x1ff45f,
        _0xa9cc62,
      );
    }
    applyWheel(_0x571d0f, _0x56a1e0, _0x463206) {
      if (_0x463206.ctrlKey || _0x463206.metaKey) return false;
      let _0x269175 = _0x463206.zoom && _0x463206.zoom > 0 ? _0x463206.zoom : 1,
        _0x1e60e9 =
          (_0x463206.shiftKey
            ? _0x463206.deltaX || _0x463206.deltaY
            : Math.abs(_0x463206.deltaX) > Math.abs(_0x463206.deltaY)
              ? _0x463206.deltaX
              : 0) / _0x269175;
      if (!_0x1e60e9) return false;
      let _0x315daa = this.getState(_0x571d0f, _0x56a1e0);
      if (!_0x315daa || !this._canScrollHorizontally(_0x315daa)) return false;
      let _0x3c4fee = _0x315daa.scrollLeft;
      return (
        this.setScrollLeft(_0x571d0f, _0x56a1e0, _0x3c4fee + _0x1e60e9),
        _0x315daa.scrollLeft !== _0x3c4fee
      );
    }
    scrollByScrollbarTravel(_0x1a7047, _0x209cfa, _0x4c03da, _0x38fde2) {
      let _0x973a4c = this.getState(_0x1a7047, _0x209cfa);
      if (!_0x973a4c || _0x38fde2 <= 0)
        return (_0x973a4c == null ? undefined : _0x973a4c.scrollLeft) ?? 0;
      let _0x580eaf = this._getMaxScrollLeft(_0x973a4c);
      return this.setScrollLeft(
        _0x1a7047,
        _0x209cfa,
        _0x973a4c.scrollLeft + (_0x580eaf / _0x38fde2) * _0x4c03da,
      );
    }
    scrollByDragEdge(_0x19a9fb, _0x512fdc, _0x4164bf, _0x46bd30, _0x5873aa) {
      let _0x3069c5 = this.getState(_0x19a9fb, _0x512fdc);
      if (
        !_0x3069c5 ||
        !this._canScrollHorizontally(_0x3069c5) ||
        _0x46bd30 <= 0 ||
        _0x5873aa <= 0
      )
        return false;
      let _0x54a5a9 = _0x4164bf,
        _0x22ac22 = _0x3069c5.viewportWidth - _0x4164bf,
        _0x33dcef = 0,
        _0x32f23e = 0;
      if (
        (_0x54a5a9 < _0x46bd30
          ? ((_0x33dcef = -1), (_0x32f23e = _0x54a5a9))
          : _0x22ac22 < _0x46bd30 && ((_0x33dcef = 1), (_0x32f23e = _0x22ac22)),
        !_0x33dcef)
      )
        return false;
      let _0x4f03da = Math.min(
          1,
          Math.max(0, (_0x46bd30 - _0x32f23e) / _0x46bd30),
        ),
        _0x3be30c = Math.max(1, Math.ceil(_0x4f03da * _0x5873aa)),
        _0x1ad83a = _0x3069c5.scrollLeft;
      return (
        this.setScrollLeft(
          _0x19a9fb,
          _0x512fdc,
          _0x1ad83a + _0x33dcef * _0x3be30c,
        ),
        _0x3069c5.scrollLeft !== _0x1ad83a
      );
    }
    clear(_0x1ca46c, _0x3423d8) {
      this._states["delete"](this._key(_0x1ca46c, _0x3423d8));
    }
    _clamp(_0x55934d, _0x1cece4) {
      return Math.min(
        Math.max(0, _0x55934d),
        this._getMaxScrollLeft(_0x1cece4),
      );
    }
    _getVirtualContentWidth(_0x230a81) {
      return (
        _0x230a81.leadingInsetLeft +
        _0x230a81.contentWidth +
        _0x230a81.trailingInsetRight
      );
    }
    _getMaxScrollLeft(_0x2c7894) {
      return this._canScrollHorizontally(_0x2c7894)
        ? Math.max(
            0,
            this._getVirtualContentWidth(_0x2c7894) - _0x2c7894.viewportWidth,
          )
        : 0;
    }
    _canScrollHorizontally(_0x342dd3) {
      return (
        _0x342dd3.contentWidth > _0x342dd3.overflowWidthThreshold &&
        this._getVirtualContentWidth(_0x342dd3) > _0x342dd3.viewportWidth
      );
    }
    _key(_0x52074a, _0x57731a) {
      return _0x52074a + "::" + _0x57731a;
    }
  };
const dn = {
  [e.DocsTableBorderPreset["All"]]: "AllBorderIcon",
  [e.DocsTableBorderPreset["Bottom"]]: "DownBorderDoubleIcon",
  [e.DocsTableBorderPreset["Inner"]]: "InnerBorderDoubleIcon",
  [e.DocsTableBorderPreset["InnerHorizontal"]]: "HorizontalBorderDoubleIcon",
  [e.DocsTableBorderPreset["InnerVertical"]]: "VerticalBorderDoubleIcon",
  [e.DocsTableBorderPreset["Left"]]: "LeftBorderDoubleIcon",
  [e.DocsTableBorderPreset["None"]]: "NoBorderIcon",
  [e.DocsTableBorderPreset["Outer"]]: "OuterBorderDoubleIcon",
  [e.DocsTableBorderPreset["Right"]]: "RightBorderDoubleIcon",
  [e.DocsTableBorderPreset["Top"]]: "UpBorderDoubleIcon",
};
function fn(_0x223787) {
  return dn[_0x223787];
}
function pn(_0xed71e2, _0x5b8f0f) {
  if (_0xed71e2.length === 0) return null;
  let _0x3b4dc5 = [..._0xed71e2].sort(
      (_0x3dd5b8, _0x5b722a) =>
        _0x3dd5b8.rect["top"] - _0x5b722a.rect["top"] ||
        _0x3dd5b8.paragraphStart - _0x5b722a.paragraphStart,
    ),
    _0x1b55e4 = _0x3b4dc5.find(
      (_0x1fa81b) =>
        _0x5b8f0f.y <= (_0x1fa81b.rect["top"] + _0x1fa81b.rect["bottom"]) / 2,
    );
  if (_0x1b55e4)
    return {
      targetOffset: _0x1b55e4.paragraphStart,
      width: _0x1b55e4.rect["right"] - _0x1b55e4.rect["left"],
      x: _0x1b55e4.rect["left"],
      y: _0x1b55e4.rect["top"],
    };
  let _0x24fd02 = _0x3b4dc5[_0x3b4dc5.length - 1];
  return {
    targetOffset: _0x24fd02.paragraphEnd + 1,
    width: _0x24fd02.rect["right"] - _0x24fd02.rect["left"],
    x: _0x24fd02.rect["left"],
    y: _0x24fd02.rect["bottom"],
  };
}
function mn(_0xab78c, _0xd86f33, _0x31d7e5) {
  return _0xd86f33
    ? Math.hypot(_0xd86f33.x - _0xab78c.x, _0xd86f33.y - _0xab78c.y) < _0x31d7e5
    : false;
}
function hn(_0x48ff7d, _0x3802c5, _0x435cab, _0x5bd151) {
  return {
    trigger: _0x48ff7d,
    startX: _0x3802c5,
    startY: _0x435cab,
    tableRect: _0x5bd151,
  };
}
function gn(_0x1dcb04, _0xcd5241, _0x379060) {
  let _0x1664a4 = _0xcd5241 - _0x1dcb04.startX,
    _0x17a5f7 = _0x379060 - _0x1dcb04.startY;
  return {
    deltaX: _0x1664a4,
    deltaY: _0x17a5f7,
    rect: {
      ..._0x1dcb04.tableRect,
      x: _0x1dcb04.tableRect["x"] + _0x1664a4,
      y: _0x1dcb04.tableRect["y"] + _0x17a5f7,
    },
  };
}
const _n = ["pointerup", "pointercancel", "mouseup", "blur"];
function vn(_0x1967b1, _0x5210aa = bn()) {
  if (!_0x5210aa) return { dispose: () => undefined };
  let _0x57dc23 = _n.map((_0x664cde) => {
    let _0x2f45a9 = (_0x4ddad3) =>
      _0x1967b1({ event: _0x4ddad3, type: _0x664cde });
    return (
      _0x5210aa.addEventListener(_0x664cde, _0x2f45a9, false),
      { listener: _0x2f45a9, type: _0x664cde }
    );
  });
  return {
    dispose: () => {
      _0x57dc23.forEach(({ listener: _0x3473e2, type: _0x50fbba }) =>
        _0x5210aa.removeEventListener(_0x50fbba, _0x3473e2, false),
      );
    },
  };
}
function yn(_0x3a3ed2, _0x51d971 = bn()) {
  if (!_0x51d971) return { dispose: () => undefined };
  let _0x28b830 = (_0x20a937) =>
    _0x3a3ed2({ event: _0x20a937, type: "pointermove" });
  return (
    _0x51d971.addEventListener("pointermove", _0x28b830, false),
    {
      dispose: () =>
        _0x51d971.removeEventListener("pointermove", _0x28b830, false),
    }
  );
}
function bn() {
  return globalThis.window === undefined ? null : globalThis.window;
}
function xn(_0x678a14, _0x169d42, _0x25486f, _0x16a9bf, _0x1fe154 = 1) {
  return {
    trigger: _0x678a14,
    startX: _0x169d42,
    startY: _0x25486f,
    initialSize: _0x16a9bf,
    minSize: _0x1fe154,
  };
}
function Sn(_0x56ab71, _0x592ab8, _0x51dd8b) {
  return _0x56ab71.trigger["kind"] === "resize-column"
    ? {
        column: _0x56ab71.trigger["column"],
        width: Math.max(
          _0x56ab71.minSize,
          _0x56ab71.initialSize + _0x592ab8 - _0x56ab71.startX,
        ),
      }
    : {
        height: Math.max(
          _0x56ab71.minSize,
          _0x56ab71.initialSize + _0x51dd8b - _0x56ab71.startY,
        ),
        row: _0x56ab71.trigger["row"],
      };
}
function Cn(_0x1b9382, _0x3c7de0, _0x32972c) {
  return _0x32972c ? Sn(_0x1b9382, _0x32972c.x, _0x32972c.y) : _0x3c7de0;
}
function wn(_0x389417, _0x38cae4, _0x3979b7) {
  if (_0x38cae4.kind === "resize-column") {
    var _0x444fa5;
    let _0x1ac265 = Tn(_0x389417.columnIndices, _0x38cae4.column);
    if (_0x1ac265 == null || _0x1ac265 < 0) return null;
    let _0x85151c =
        _0x3979b7 != null &&
        _0x3979b7.column === _0x38cae4.column &&
        _0x3979b7.width != null
          ? _0x3979b7.width
          : _0x389417.columnWidths[_0x1ac265],
      _0x460db5 = Dn(_0x389417),
      _0x14f1ac =
        _0x389417.tableRect["x"] +
        R(_0x389417.columnWidths["slice"](0, _0x1ac265)) +
        _0x85151c -
        1 -
        (((_0x444fa5 = _0x389417.viewport) == null
          ? undefined
          : _0x444fa5.scrollLeft) ?? 0);
    return _0x14f1ac < _0x460db5.x || _0x14f1ac > _0x460db5.x + _0x460db5.width
      ? null
      : {
          height: En(
            _0x38cae4.rect["height"],
            _0x389417.tableRect["height"],
            R(_0x389417.rowHeights),
          ),
          width: 2,
          x: _0x14f1ac,
          y: Math.max(_0x389417.tableRect["y"], _0x38cae4.rect["y"]),
        };
  }
  if (_0x38cae4.kind === "resize-row") {
    let _0x4206bc = Tn(_0x389417.rowIndices, _0x38cae4.row);
    if (_0x4206bc == null || _0x4206bc < 0) return null;
    let _0x540221 =
        _0x3979b7 != null &&
        _0x3979b7.row === _0x38cae4.row &&
        _0x3979b7.height != null
          ? _0x3979b7.height
          : _0x389417.rowHeights[_0x4206bc],
      _0x4102d2 = On(_0x389417),
      _0x3fb82d = Math.max(_0x4102d2.x, _0x38cae4.rect["x"]),
      _0x359cb3 = Math.min(
        _0x4102d2.x + _0x4102d2.width,
        _0x38cae4.rect["x"] + _0x38cae4.rect["width"],
      );
    return _0x359cb3 <= _0x3fb82d
      ? null
      : {
          height: 2,
          width: _0x359cb3 - _0x3fb82d,
          x: _0x3fb82d,
          y:
            _0x389417.tableRect["y"] +
            R(_0x389417.rowHeights["slice"](0, _0x4206bc)) +
            _0x540221 -
            1,
        };
  }
  return null;
}
function Tn(_0x312452, _0x2f80e9) {
  return _0x2f80e9 == null
    ? -1
    : _0x312452
      ? _0x312452.findIndex((_0x19a70f) => _0x19a70f === _0x2f80e9)
      : _0x2f80e9;
}
function R(_0x594e38) {
  return _0x594e38.reduce((_0x1a22fd, _0x2fe635) => _0x1a22fd + _0x2fe635, 0);
}
function En(..._0x19037f) {
  return Math.max(
    0,
    Math.min(..._0x19037f.filter((_0x5ea745) => _0x5ea745 > 0)),
  );
}
function Dn(_0x13935d) {
  var _0x573247, _0x55fd2d;
  return {
    ..._0x13935d.tableRect,
    x:
      ((_0x573247 = _0x13935d.viewport) == null
        ? undefined
        : _0x573247.viewportLeft) ?? _0x13935d.tableRect["x"],
    width:
      ((_0x55fd2d = _0x13935d.viewport) == null
        ? undefined
        : _0x55fd2d.viewportWidth) ?? _0x13935d.tableRect["width"],
  };
}
function On(_0x575c3f) {
  let _0x3ca726 = Dn(_0x575c3f),
    _0x8bacee = _0x575c3f.viewport
      ? Math.max(_0x3ca726.x, kn(_0x575c3f, 0))
      : _0x575c3f.tableRect["x"],
    _0x157b98 = _0x575c3f.viewport
      ? Math.min(
          _0x3ca726.x + _0x3ca726.width,
          kn(_0x575c3f, R(_0x575c3f.columnWidths)),
        )
      : _0x575c3f.tableRect["x"] + R(_0x575c3f.columnWidths);
  return {
    ..._0x3ca726,
    x: _0x8bacee,
    width: Math.max(0, _0x157b98 - _0x8bacee),
  };
}
function kn(_0x51a8bc, _0x34e4e0) {
  var _0x58b621;
  return (
    _0x51a8bc.tableRect["x"] +
    _0x34e4e0 -
    (((_0x58b621 = _0x51a8bc.viewport) == null
      ? undefined
      : _0x58b621.scrollLeft) ?? 0)
  );
}
function An(_0x369a04) {
  let _0x32dfd9 = Math.max(0, _0x369a04.leadingInsetLeft ?? 0),
    _0x218ee0 = Math.max(
      0,
      _0x369a04.overflowWidthThreshold ?? _0x369a04.viewportWidth,
    ),
    _0xa5cad2 = Math.max(0, _0x369a04.trailingInsetRight ?? 0),
    _0x2fba9a = _0x32dfd9 + _0x369a04.contentWidth + _0xa5cad2;
  if (
    _0x369a04.contentWidth <= _0x218ee0 ||
    _0x2fba9a <= _0x369a04.viewportWidth ||
    _0x369a04.viewportWidth <= 0
  )
    return null;
  let _0x1a19e9 = _0x369a04.zoom || 1,
    _0x3a53e6 = _0x369a04.appearance ?? "idle",
    _0x4d0d2e = 10 / _0x1a19e9,
    _0x19d02d = (_0x3a53e6 === "idle" ? 6 : 8) / _0x1a19e9,
    _0x3ccc75 = Math.max(0, _0x2fba9a - _0x369a04.viewportWidth),
    _0x2b1ad3 = _0x369a04.viewportLeft ?? _0x369a04.tableRect["x"],
    _0xe551b0 = {
      height: _0x4d0d2e,
      width: _0x369a04.viewportWidth,
      x: _0x2b1ad3,
      y:
        _0x369a04.tableRect["y"] +
        _0x369a04.tableRect["height"] +
        4 / _0x1a19e9,
    },
    _0x1c3612 = Math.max(
      32 / _0x1a19e9,
      _0xe551b0.width * (_0x369a04.viewportWidth / _0x2fba9a),
    ),
    _0x193684 = Math.max(0, _0xe551b0.width - _0x1c3612),
    _0x12ef86 =
      _0x3ccc75 > 0
        ? Math.min(_0x3ccc75, Math.max(0, _0x369a04.scrollLeft)) / _0x3ccc75
        : 0,
    _0x4ceeec = _0xe551b0.x + _0x193684 * _0x12ef86;
  return {
    appearance: _0x3a53e6,
    contentWidth: _0x369a04.contentWidth,
    leadingInsetLeft: _0x32dfd9,
    maxScrollLeft: _0x3ccc75,
    thumb: {
      height: _0x19d02d,
      width: _0x1c3612,
      x: _0x4ceeec,
      y: _0xe551b0.y + (_0xe551b0.height - _0x19d02d) / 2,
    },
    track: _0xe551b0,
    viewportLeft: _0x2b1ad3,
    viewportWidth: _0x369a04.viewportWidth,
  };
}
function jn(_0x5ad58c, _0x4de782, _0x5bbae9) {
  return Pn(_0x5ad58c.thumb, _0x4de782, _0x5bbae9)
    ? "thumb"
    : Pn(_0x5ad58c.track, _0x4de782, _0x5bbae9)
      ? "track"
      : null;
}
function Mn(_0x55b4cb, _0x1a2bbc, _0x44fbed, _0x3aa287) {
  let _0x348f6d = Math.min(_0x1a2bbc, _0x55b4cb.track["y"]);
  return Pn(
    {
      height: _0x55b4cb.track["y"] + _0x55b4cb.track["height"] - _0x348f6d,
      width: _0x55b4cb.track["width"],
      x: _0x55b4cb.track["x"],
      y: _0x348f6d,
    },
    _0x44fbed,
    _0x3aa287,
  );
}
function Nn(_0x56c3ea, _0xeed3f0) {
  (_0x56c3ea.save(),
    (_0x56c3ea.fillStyle =
      _0xeed3f0.appearance === "active"
        ? "rgba(24, 28, 42, 0.40)"
        : _0xeed3f0.appearance === "hover"
          ? "rgba(24, 28, 42, 0.30)"
          : "rgba(24, 28, 42, 0.20)"),
    Fn(
      _0x56c3ea,
      _0xeed3f0.thumb["x"],
      _0xeed3f0.thumb["y"],
      _0xeed3f0.thumb["width"],
      _0xeed3f0.thumb["height"],
      _0xeed3f0.thumb["height"] / 2,
    ),
    _0x56c3ea.fill(),
    _0x56c3ea.restore());
}
function Pn(_0x99c2b3, _0x80944, _0x17f5a1) {
  return (
    _0x80944 >= _0x99c2b3.x &&
    _0x80944 <= _0x99c2b3.x + _0x99c2b3.width &&
    _0x17f5a1 >= _0x99c2b3.y &&
    _0x17f5a1 <= _0x99c2b3.y + _0x99c2b3.height
  );
}
function Fn(_0x372cd8, _0x376710, _0x3ece5b, _0x18f0c7, _0x173687, _0x56b13d) {
  (_0x372cd8.beginPath(),
    _0x372cd8.roundRect
      ? _0x372cd8.roundRect(
          _0x376710,
          _0x3ece5b,
          _0x18f0c7,
          _0x173687,
          _0x56b13d,
        )
      : _0x372cd8.rect(_0x376710, _0x3ece5b, _0x18f0c7, _0x173687));
}
function In(_0xc3c08, _0x4c5ce4 = {}) {
  return _0x4c5ce4.suppressOverlay ||
    _0xc3c08.source === e.DocsTableSelectionSource["Text"] ||
    (_0xc3c08.kind === e.DocsTableSelectionKind["Range"] &&
      _0xc3c08.startRow === _0xc3c08.endRow &&
      _0xc3c08.startColumn === _0xc3c08.endColumn)
    ? false
    : _0xc3c08.kind === e.DocsTableSelectionKind["Cell"] ||
        _0xc3c08.kind === e.DocsTableSelectionKind["Range"] ||
        _0xc3c08.kind === e.DocsTableSelectionKind["Table"] ||
        _0xc3c08.kind === e.DocsTableSelectionKind["Row"] ||
        _0xc3c08.kind === e.DocsTableSelectionKind["Column"];
}
const Ln = new Set(["row-insert-dot", "column-insert-dot"]),
  Rn = new Set([
    "row-header",
    "column-header",
    "row-insert-dot",
    "column-insert-dot",
  ]);
function z(_0x3464a7) {
  let _0x162d24 = _0x3464a7.zoom ?? 1,
    _0x504460 = 6 / _0x162d24,
    _0x16460a = [],
    _0x828c1e = Gn(_0x3464a7),
    _0x122d86 = lr(
      _0x3464a7.columnWidths,
      qn(_0x3464a7, _0x3464a7.tableRect["x"]),
    ),
    _0x5526f1 = lr(_0x3464a7.rowHeights, _0x3464a7.tableRect["y"]);
  return (
    _0x16460a.push(...zn(_0x3464a7, _0x828c1e, _0x5526f1, _0x162d24)),
    _0x16460a.push(...Bn(_0x3464a7, _0x828c1e, _0x122d86, _0x162d24)),
    _0x16460a.push(...Vn(_0x3464a7, _0x828c1e, _0x5526f1, _0x162d24)),
    _0x16460a.push(...Hn(_0x3464a7, _0x828c1e, _0x122d86, _0x162d24)),
    _0x3464a7.rowHeights["forEach"]((_0x3e1e8e, _0x4661e7) => {
      var _0xaf563d;
      let _0x46d4af =
        ((_0xaf563d = _0x3464a7.rowIndices) == null
          ? undefined
          : _0xaf563d[_0x4661e7]) ?? _0x4661e7;
      _0x16460a.push(
        ...Un(
          _0x3464a7,
          _0x46d4af,
          _0x5526f1[_0x4661e7] + _0x3e1e8e - _0x504460 / 2,
          _0x504460,
        ),
      );
    }),
    _0x3464a7.columnWidths["forEach"]((_0x38d3ec, _0x5438fb) => {
      var _0x509205;
      let _0x740c89 =
        ((_0x509205 = _0x3464a7.columnIndices) == null
          ? undefined
          : _0x509205[_0x5438fb]) ?? _0x5438fb;
      _0x16460a.push(
        ...Wn(
          _0x3464a7,
          _0x740c89,
          _0x122d86[_0x5438fb] + _0x38d3ec - _0x504460 / 2,
          _0x504460,
        ),
      );
    }),
    _0x16460a
  );
}
function zn(_0x3ae77d, _0x1114e7, _0x58900b, _0x49fe56) {
  let _0x42647c = 10 / _0x49fe56,
    _0x413dc8 = Kn(_0x3ae77d);
  return _0x3ae77d.rowHeights["map"]((_0x3a3176, _0x25f7f6) => {
    var _0x13df77;
    return {
      kind: "row-header",
      tableId: _0x3ae77d.tableId,
      row:
        ((_0x13df77 = _0x3ae77d.rowIndices) == null
          ? undefined
          : _0x13df77[_0x25f7f6]) ?? _0x25f7f6,
      rect: {
        x: _0x413dc8 - _0x42647c,
        y: _0x58900b[_0x25f7f6],
        width: _0x42647c,
        height: _0x3a3176,
      },
    };
  });
}
function Bn(_0x33cb63, _0x11898b, _0x2b1741, _0x46086d) {
  let _0x49a50a = 10 / _0x46086d;
  return _0x33cb63.columnWidths["flatMap"]((_0x2871db, _0x21093d) => {
    var _0x1e6d95;
    let _0x364e60 = {
      x: _0x2b1741[_0x21093d],
      y: _0x33cb63.tableRect["y"] - _0x49a50a,
      width: _0x2871db,
      height: _0x49a50a,
    };
    return Yn(_0x11898b, _0x364e60)
      ? [
          {
            kind: "column-header",
            tableId: _0x33cb63.tableId,
            column:
              ((_0x1e6d95 = _0x33cb63.columnIndices) == null
                ? undefined
                : _0x1e6d95[_0x21093d]) ?? _0x21093d,
            rect: _0x364e60,
          },
        ]
      : [];
  });
}
function Vn(_0x388229, _0x57867d, _0xadb2b7, _0x4f758b) {
  let _0x1f9680 = 6 / _0x4f758b,
    _0x57a05e = 10 / _0x4f758b,
    _0x1537fe = 4 / _0x4f758b,
    _0x33eaf6 = Kn(_0x388229);
  return (
    _0x388229.rowHeights["length"] === 0
      ? []
      : [
          { position: "above", rowOffset: 0, y: _0xadb2b7[0] },
          ..._0x388229.rowHeights["map"]((_0x1b0f89, _0x3a68ba) => ({
            position: "below",
            rowOffset: _0x3a68ba,
            y: _0xadb2b7[_0x3a68ba] + _0x1b0f89,
          })),
        ]
  ).map(({ position: _0x46b338, rowOffset: _0xe39305, y: _0x117d39 }) => {
    var _0x38cdd4;
    return {
      kind: "row-insert-dot",
      tableId: _0x388229.tableId,
      row:
        ((_0x38cdd4 = _0x388229.rowIndices) == null
          ? undefined
          : _0x38cdd4[_0xe39305]) ?? _0xe39305,
      position: _0x46b338,
      rect: {
        x: _0x33eaf6 - _0x57a05e - _0x1f9680 / 2 - _0x1537fe,
        y: _0x117d39 - _0x1f9680 / 2,
        width: _0x1f9680,
        height: _0x1f9680,
      },
    };
  });
}
function Hn(_0x744b52, _0x33ecdf, _0x54d758, _0x4724f1) {
  let _0x188cb0 = 6 / _0x4724f1,
    _0x2c6dcf = 16 / _0x4724f1,
    _0x516984 = 4 / _0x4724f1;
  return (
    _0x744b52.columnWidths["length"] === 0
      ? []
      : [
          { columnOffset: 0, position: "left", x: _0x54d758[0] },
          ..._0x744b52.columnWidths["map"]((_0x41c890, _0xd24be2) => ({
            columnOffset: _0xd24be2,
            position: "right",
            x: _0x54d758[_0xd24be2] + _0x41c890,
          })),
        ]
  ).flatMap(
    ({ columnOffset: _0x2e61af, position: _0x5c5584, x: _0x475918 }) => {
      var _0x2ea523;
      let _0x4c7fe4 = Yn(_0x33ecdf, {
        x: _0x475918 - _0x188cb0 / 2,
        y: _0x744b52.tableRect["y"] - _0x2c6dcf - _0x516984,
        width: _0x188cb0,
        height: _0x188cb0,
      });
      return _0x4c7fe4
        ? [
            {
              kind: "column-insert-dot",
              tableId: _0x744b52.tableId,
              column:
                ((_0x2ea523 = _0x744b52.columnIndices) == null
                  ? undefined
                  : _0x2ea523[_0x2e61af]) ?? _0x2e61af,
              position: _0x5c5584,
              rect: _0x4c7fe4,
            },
          ]
        : [];
    },
  );
}
function Un(_0x507c05, _0x6a9352, _0xb4be8c, _0x4acf1a) {
  let _0x40703a = Gn(_0x507c05),
    _0x2410ed = Zn(_0x507c05, _0x6a9352)
      .map((_0x4a6a7e) =>
        $n(_0x507c05, _0x4a6a7e.startColumn, _0x4a6a7e.endColumn),
      )
      .filter((_0x2e55e7) => !!_0x2e55e7)
      .sort((_0x3e094c, _0x324657) => _0x3e094c[0] - _0x324657[0]);
  return tr([_0x40703a.x, _0x40703a.x + _0x40703a.width], _0x2410ed).map(
    ([_0x491127, _0x4568dc]) => ({
      kind: "resize-row",
      tableId: _0x507c05.tableId,
      row: _0x6a9352,
      rect: {
        x: _0x491127,
        y: _0xb4be8c,
        width: _0x4568dc - _0x491127,
        height: _0x4acf1a,
      },
    }),
  );
}
function Wn(_0x1692df, _0x5e4b66, _0xcef075, _0x564408) {
  if (!Jn(Gn(_0x1692df), _0xcef075, _0xcef075 + _0x564408)) return [];
  let _0x4dbb9c = Qn(_0x1692df, _0x5e4b66)
    .map((_0xd10e8f) => er(_0x1692df, _0xd10e8f.startRow, _0xd10e8f.endRow))
    .filter((_0x214e02) => !!_0x214e02)
    .sort((_0x63a480, _0x2f8f87) => _0x63a480[0] - _0x2f8f87[0]);
  return tr(
    [
      _0x1692df.tableRect["y"],
      _0x1692df.tableRect["y"] + _0x1692df.tableRect["height"],
    ],
    _0x4dbb9c,
  ).map(([_0x5b0179, _0x422bb2]) => ({
    kind: "resize-column",
    tableId: _0x1692df.tableId,
    column: _0x5e4b66,
    rect: {
      x: _0xcef075,
      y: _0x5b0179,
      width: _0x564408,
      height: _0x422bb2 - _0x5b0179,
    },
  }));
}
function Gn(_0x2d52e2) {
  var _0xb48e11, _0x36c34a;
  return {
    ..._0x2d52e2.tableRect,
    x:
      ((_0xb48e11 = _0x2d52e2.viewport) == null
        ? undefined
        : _0xb48e11.viewportLeft) ?? _0x2d52e2.tableRect["x"],
    width:
      ((_0x36c34a = _0x2d52e2.viewport) == null
        ? undefined
        : _0x36c34a.viewportWidth) ?? _0x2d52e2.tableRect["width"],
  };
}
function Kn(_0x1deefd) {
  return _0x1deefd.viewport
    ? qn(_0x1deefd, _0x1deefd.tableRect["x"])
    : _0x1deefd.tableRect["x"];
}
function qn(_0x552c17, _0x3a9e08) {
  var _0xb3d2e1;
  return (
    _0x3a9e08 -
    (((_0xb3d2e1 = _0x552c17.viewport) == null
      ? undefined
      : _0xb3d2e1.scrollLeft) ?? 0)
  );
}
function Jn(_0x50568d, _0x57aa30, _0x1f0530) {
  return _0x1f0530 >= _0x50568d.x && _0x57aa30 <= _0x50568d.x + _0x50568d.width;
}
function Yn(_0x1fcbf3, _0x2f48d9) {
  let _0x3932c4 = Math.max(_0x2f48d9.x, _0x1fcbf3.x),
    _0x35dd96 = Math.min(
      _0x2f48d9.x + _0x2f48d9.width,
      _0x1fcbf3.x + _0x1fcbf3.width,
    );
  return _0x35dd96 <= _0x3932c4
    ? null
    : { ..._0x2f48d9, x: _0x3932c4, width: _0x35dd96 - _0x3932c4 };
}
function Xn(_0x593388) {
  return Ln.has(_0x593388);
}
function Zn(_0x2967e9, _0x40b329) {
  var _0x5c47ba;
  return (
    ((_0x5c47ba = _0x2967e9.mergedCells) == null
      ? undefined
      : _0x5c47ba.filter(
          (_0x1334e3) =>
            _0x40b329 >= _0x1334e3.startRow && _0x40b329 < _0x1334e3.endRow,
        )) ?? []
  );
}
function Qn(_0x374a4c, _0x4638f4) {
  var _0x1b7544;
  return (
    ((_0x1b7544 = _0x374a4c.mergedCells) == null
      ? undefined
      : _0x1b7544.filter(
          (_0x1ce4c2) =>
            _0x4638f4 >= _0x1ce4c2.startColumn &&
            _0x4638f4 < _0x1ce4c2.endColumn,
        )) ?? []
  );
}
function $n(_0x156cdc, _0x2ab0a8, _0x268a95) {
  let _0x3ddbf2 = ar(_0x156cdc.columnIndices, _0x2ab0a8),
    _0x19b7f0 = ar(_0x156cdc.columnIndices, _0x268a95);
  if (_0x3ddbf2 < 0 || _0x19b7f0 < 0) return null;
  let _0x5c76dc = Math.min(_0x3ddbf2, _0x19b7f0),
    _0x38e838 = Math.max(_0x3ddbf2, _0x19b7f0);
  return [
    qn(
      _0x156cdc,
      _0x156cdc.tableRect["x"] +
        or(_0x156cdc.columnWidths["slice"](0, _0x5c76dc)),
    ),
    qn(
      _0x156cdc,
      _0x156cdc.tableRect["x"] +
        or(_0x156cdc.columnWidths["slice"](0, _0x38e838 + 1)),
    ),
  ];
}
function er(_0x2eb6fa, _0x336aa0, _0x57e3c2) {
  let _0x363e32 = ar(_0x2eb6fa.rowIndices, _0x336aa0),
    _0x194adf = ar(_0x2eb6fa.rowIndices, _0x57e3c2);
  if (_0x363e32 < 0 || _0x194adf < 0) return null;
  let _0x183630 = Math.min(_0x363e32, _0x194adf),
    _0x26d1a2 = Math.max(_0x363e32, _0x194adf);
  return [
    _0x2eb6fa.tableRect["y"] + or(_0x2eb6fa.rowHeights["slice"](0, _0x183630)),
    _0x2eb6fa.tableRect["y"] +
      or(_0x2eb6fa.rowHeights["slice"](0, _0x26d1a2 + 1)),
  ];
}
function tr(_0x4dca67, _0x3e8007) {
  let _0x37dfb7 = [_0x4dca67];
  return (
    _0x3e8007.forEach(([_0xfc86ae, _0x1165c6]) => {
      _0x37dfb7 = _0x37dfb7.flatMap(([_0x44c27a, _0x286ae6]) => {
        let _0x328587 = Math.max(_0x44c27a, Math.min(_0x286ae6, _0xfc86ae)),
          _0x35cd13 = Math.max(_0x44c27a, Math.min(_0x286ae6, _0x1165c6));
        return _0x35cd13 <= _0x44c27a ||
          _0x328587 >= _0x286ae6 ||
          _0x328587 >= _0x35cd13
          ? [[_0x44c27a, _0x286ae6]]
          : [
              [_0x44c27a, _0x328587],
              [_0x35cd13, _0x286ae6],
            ].filter(([_0x149a2c, _0x2734d8]) => _0x2734d8 > _0x149a2c);
      });
    }),
    _0x37dfb7
  );
}
function nr(_0x249cc4, _0x4ead3d, _0x454e2a) {
  return (
    [..._0x249cc4]
      .sort((_0x5cf641, _0x4cea50) => B(_0x4cea50) - B(_0x5cf641))
      .find((_0x40630a) => ur(_0x40630a.rect, _0x4ead3d, _0x454e2a)) ?? null
  );
}
function rr(_0x111006, _0x46d45a, _0x58b97a) {
  return (
    [..._0x111006]
      .filter((_0x232b5d) => cr(_0x232b5d.kind))
      .sort((_0x48ce8c, _0x218d4b) => B(_0x218d4b) - B(_0x48ce8c))
      .find((_0x218327) => dr(_0x218327.rect, _0x46d45a, _0x58b97a, 6)) ?? null
  );
}
function ir(_0x24df69, _0x2439c2, _0x2439ea) {
  return (
    [..._0x24df69]
      .filter((_0x33588c) => Xn(_0x33588c.kind))
      .sort((_0x3ddb42, _0x2154e0) => B(_0x2154e0) - B(_0x3ddb42))
      .find((_0x4a8fe9) => dr(_0x4a8fe9.rect, _0x2439c2, _0x2439ea, 6)) ?? null
  );
}
function ar(_0x469642, _0x5ae2d1) {
  return (
    (_0x469642 == null
      ? undefined
      : _0x469642.findIndex((_0x36b852) => _0x36b852 === _0x5ae2d1)) ??
    _0x5ae2d1
  );
}
function or(_0x1cd529) {
  return _0x1cd529.reduce((_0x56904c, _0x268057) => _0x56904c + _0x268057, 0);
}
function sr(_0x104060, _0x826651, _0x500e28) {
  return rr(_0x104060, _0x826651, _0x500e28) != null;
}
function cr(_0x52d343) {
  return Rn.has(_0x52d343);
}
function B(_0x276032) {
  return _0x276032.kind === "row-insert-dot" ||
    _0x276032.kind === "column-insert-dot"
    ? 3
    : _0x276032.kind === "resize-column" || _0x276032.kind === "resize-row"
      ? 2
      : 0;
}
function lr(_0xfdb27a, _0x22b781) {
  let _0x573ff4 = [],
    _0x55a68b = _0x22b781;
  return (
    _0xfdb27a.forEach((_0x4ad9b7) => {
      (_0x573ff4.push(_0x55a68b), (_0x55a68b += _0x4ad9b7));
    }),
    _0x573ff4
  );
}
function ur(_0x4d420f, _0x2d4049, _0x3ae7b4) {
  return (
    _0x2d4049 >= _0x4d420f.x &&
    _0x2d4049 <= _0x4d420f.x + _0x4d420f.width &&
    _0x3ae7b4 >= _0x4d420f.y &&
    _0x3ae7b4 <= _0x4d420f.y + _0x4d420f.height
  );
}
function dr(_0x1c0d67, _0x2f380b, _0x39c93a, _0x23b87d) {
  return (
    _0x2f380b >= _0x1c0d67.x - _0x23b87d &&
    _0x2f380b <= _0x1c0d67.x + _0x1c0d67.width + _0x23b87d &&
    _0x39c93a >= _0x1c0d67.y - _0x23b87d &&
    _0x39c93a <= _0x1c0d67.y + _0x1c0d67.height + _0x23b87d
  );
}
const fr = "viewMain",
  pr = "#1a73e8",
  mr = -10000,
  hr = "#dadce0",
  gr = "#3c4043",
  _r = "#f1f3f4",
  vr = "#b8bec6",
  V = new Map();
function yr(_0x575d4d, _0x317b82) {
  let _0x581ee9 = V.get(_0x575d4d);
  if (_0x581ee9 != null && _0x581ee9.length)
    for (let _0x4e0d6e = _0x581ee9.length - 1; _0x4e0d6e >= 0; --_0x4e0d6e) {
      let _0xdc5cd4 = _0x581ee9[_0x4e0d6e](_0x575d4d, _0x317b82);
      if (_0xdc5cd4) return _0xdc5cd4;
    }
}
function br(_0x16880b, _0x5cd0ba) {
  let _0x34b2b7 = V.get(_0x16880b) ?? [];
  return (
    _0x34b2b7.push(_0x5cd0ba),
    V.set(_0x16880b, _0x34b2b7),
    V.size === 1 &&
      _0x34b2b7.length === 1 &&
      (0, u.setDocsTableRenderViewportProvider)(yr),
    {
      dispose: () => {
        let _0x432f63 = V.get(_0x16880b);
        if (!_0x432f63) return;
        let _0x1476dd = _0x432f63.indexOf(_0x5cd0ba);
        (_0x1476dd >= 0 && _0x432f63.splice(_0x1476dd, 1),
          _0x432f63.length === 0 && V.delete(_0x16880b),
          V.size === 0 && (0, u.setDocsTableRenderViewportProvider)(null));
      },
    }
  );
}
let xr = class extends r.Disposable {
  constructor(
    _0x41cc10,
    _0x31b226,
    _0x18fa4f,
    _0x1fce63,
    _0x334bef,
    _0x593898,
    _0xa712da,
    _0x342844,
    _0x1c4412,
    _0x11a8cd,
    _0x17d57b,
    _0x3197e3,
    _0x3a8ceb,
    _0x443cb6,
    _0x57ef67,
    _0x1e125a,
    _0x149c25,
  ) {
    (super(),
      (this._context = _0x41cc10),
      (this._docSkeletonManagerService = _0x31b226),
      (this._docSelectionManagerService = _0x18fa4f),
      (this._docEventManagerService = _0x1fce63),
      (this._docParagraphMenuService = _0x334bef),
      (this._docCanvasPopManagerService = _0x593898),
      (this._docFloatMenuService = _0xa712da),
      (this._docSelectionRenderService = _0x342844),
      (this._selectionService = _0x1c4412),
      (this._floatingMenuService = _0x11a8cd),
      (this._viewportService = _0x17d57b),
      (this._localeService = _0x3197e3),
      (this._themeService = _0x3a8ceb),
      (this._contextMenuService = _0x443cb6),
      (this._commandService = _0x57ef67),
      (this._passiveWheelService = _0x1e125a),
      (this._permissionService = _0x149c25),
      N(this, "_activeTable", null),
      N(this, "_hoveredTrigger", null),
      N(this, "_dragState", null),
      N(this, "_dragSourceTableId", null),
      N(this, "_dragPreview", null),
      N(this, "_moveDragState", null),
      N(this, "_moveDragSourceTableId", null),
      N(this, "_moveDragPreview", null),
      N(this, "_moveDropTarget", null),
      N(this, "_pendingHandleSelection", null),
      N(this, "_rowColumnMoveState", null),
      N(this, "_rowColumnMoveTarget", null),
      N(this, "_scrollbarDragState", null),
      N(this, "_selectionDragState", null),
      N(this, "_headerSelectionDragState", null),
      N(this, "_selection", null),
      N(this, "_selectionAutoScrollTimer", null),
      N(this, "_hoverCell", null),
      N(this, "_hoverColumn", null),
      N(this, "_hoverRow", null),
      N(this, "_borderPopover", null),
      N(this, "_borderPopoverDisposable", null),
      N(this, "_sortPopover", null),
      N(this, "_tooltip", null),
      N(this, "_lastPointerPoint", null),
      N(this, "_activeTableRefreshTimer", null),
      N(this, "_floatingMenuPopup", null),
      N(this, "_floatingMenuPopupAnchorKey", null),
      N(this, "_cursorBeforeTableInteraction", null),
      N(this, "_knownTableIds", new Set()),
      this._initTableState(),
      this._initTableLayoutRefresh(),
      this._initSelectionState(),
      this._initFloatingMenuState(),
      this._initZoomStateReset(),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          this._canEditDocument() ||
            (this._floatingMenuService["hide"](),
            this._hideTransientTableControls());
        }),
      ),
      this._initPointerEvents(),
      this._initCanvasRender());
    let _0xa8b395 = br(this._context["unitId"], (_0x4cc1e7, _0x1b7acd) =>
        this._getOrCreateViewportState(_0x4cc1e7, _0x1b7acd),
      ),
      _0x3df381 = this._passiveWheelService["register"]({
        handleWheel: (_0x59f962) => this._handleEmbedPassiveWheel(_0x59f962),
        order: 100,
      });
    this.disposeWithMe({
      dispose: () => {
        (_0xa8b395.dispose(),
          _0x3df381 == null || _0x3df381.dispose(),
          this._activeTableRefreshTimer != null &&
            (clearTimeout(this._activeTableRefreshTimer),
            (this._activeTableRefreshTimer = null)));
        for (let _0x1b2de4 of this._knownTableIds)
          this._viewportService["clear"](this._context["unitId"], _0x1b2de4);
        (this._knownTableIds["clear"](),
          this._docFloatMenuService["setSuppressed"](false),
          this._hideFloatingMenuPopup());
      },
    });
  }
  _initTableState() {
    this.disposeWithMe(
      this._docEventManagerService["hoverTableRealTime$"].subscribe(
        (_0x3611cd) => {
          if (!(
            !_0x3611cd &&
            (this._dragState ||
              this._moveDragState ||
              this._rowColumnMoveState ||
              this._scrollbarDragState ||
              this._selectionDragState ||
              this._headerSelectionDragState)
          )) {
            if (_0x3611cd && this._shouldKeepActiveTableForSelection()) {
              var _0x5a470a;
              if (
                (0, u.getTableIdAndSliceIndex)(_0x3611cd.tableId).tableId !==
                ((_0x5a470a = this._selection) == null
                  ? undefined
                  : _0x5a470a.tableId)
              ) {
                this._makeDirty();
                return;
              }
            }
            if (!_0x3611cd && this._shouldKeepActiveTableForSelection()) {
              this._makeDirty();
              return;
            }
            (!_0x3611cd && this._shouldKeepActiveTableForControls()) ||
              ((this._activeTable = this._lastPointerPoint
                ? this._buildActiveTableAtPoint(
                    this._lastPointerPoint["x"],
                    this._lastPointerPoint["y"],
                  )
                : _0x3611cd
                  ? this._buildActiveTable(_0x3611cd)
                  : null),
              this._activeTable || (this._hoveredTrigger = null),
              this._makeDirty());
          }
        },
      ),
    );
  }
  _initTableLayoutRefresh() {
    let _0x2c7cd7 = () => this._refreshTableLayoutState();
    (this.disposeWithMe(
      this._docSkeletonManagerService["currentSkeleton$"].subscribe(_0x2c7cd7),
    ),
      this.disposeWithMe(
        this._docSkeletonManagerService["currentSkeleton$"]
          .pipe(
            (0, o.switchMap)(
              (_0x23b4d7) =>
                (_0x23b4d7 == null ? undefined : _0x23b4d7.dirty$) ?? o.EMPTY,
            ),
          )
          .subscribe(_0x2c7cd7),
      ));
  }
  _refreshTableLayoutState() {
    var _0x272736, _0x5254e8, _0x929eb4;
    let _0x5e8224 =
      (_0x272736 = this._activeTable) == null
        ? undefined
        : _0x272736.sourceTableId;
    (this._syncViewportStatesFromSkeleton(),
      this._selectionService["emitCurrentSelection"](),
      this._refreshActiveTableForLayoutChange());
    let _0x50b379 = this._docParagraphMenuService["activeTarget"],
      _0x209469 =
        (_0x50b379 == null ? undefined : _0x50b379.kind) ===
        r.DocumentBlockType["TABLE"]
          ? (_0x5254e8 = _0x50b379.table) == null
            ? undefined
            : _0x5254e8.tableId
          : undefined;
    (_0x209469 &&
      ((_0x929eb4 = this._context["unit"].getSnapshot().tableSource) == null
        ? undefined
        : _0x929eb4[_0x209469]) == null &&
      this._docParagraphMenuService["hideParagraphMenu"](true),
      _0x5e8224 && !this._activeTable && this._hideTransientTableControls());
  }
  _initSelectionState() {
    this.disposeWithMe(
      this._selectionService["selectionChange$"].subscribe((_0x40c987) => {
        if (
          ((this._selection = _0x40c987),
          _0x40c987 != null && _0x40c987.tableId)
        ) {
          (this._refreshActiveTableFromSkeleton(_0x40c987.tableId),
            this._syncFloatingMenuFromSelection(),
            this._syncParagraphTableMenuFromActiveTable());
          return;
        }
        (this._syncFloatingMenuFromSelection(), this._makeDirty());
      }),
    );
  }
  _initFloatingMenuState() {
    this.disposeWithMe(
      this._floatingMenuService["state$"].subscribe((_0x3117c0) => {
        (this._docFloatMenuService["setSuppressed"](
          _0x3117c0.visible && _0x3117c0.unitId === this._context["unitId"],
        ),
          !(
            !_0x3117c0.tableId ||
            (!_0x3117c0.visible && !_0x3117c0.hoverActive)
          ) &&
            ((!this._activeTable ||
              this._activeTable["sourceTableId"] !== _0x3117c0.tableId) &&
              this._refreshActiveTableFromSkeleton(_0x3117c0.tableId),
            this._syncParagraphTableMenuFromActiveTable()));
      }),
    );
  }
  _initZoomStateReset() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x44b71c) => {
        var _0x2242a8;
        if (_0x44b71c.id !== t.SetDocZoomRatioOperation["id"]) return;
        let _0xff56c1 =
          (_0x2242a8 = _0x44b71c.params) == null ? undefined : _0x2242a8.unitId;
        (_0xff56c1 && _0xff56c1 !== this._context["unitId"]) ||
          this._hideTransientTableControls();
      }),
    );
  }
  _initPointerEvents() {
    let _0x475d87 = Er(this._context);
    (this.disposeWithMe(
      yn(({ event: _0x1eb28d }) => {
        this._handleWindowPointerMove(_0x1eb28d);
      }),
    ),
      this.disposeWithMe(
        vn(({ event: _0x2f733d, type: _0x3088e2 }) => {
          let _0x4a8f35 =
            this._getDocumentPointFromWindowEvent(_0x2f733d) ??
            this._lastPointerPoint;
          this._releasePointerInteraction(_0x4a8f35, undefined, {
            commit: _0x3088e2 === "pointerup" || _0x3088e2 === "mouseup",
            selectCollapsedRange:
              _0x3088e2 === "pointerup" || _0x3088e2 === "mouseup",
          });
        }),
      ),
      this.disposeWithMe(
        _0x475d87.onPointerMove$["subscribeEvent"]({
          next: ([_0x323e44, _0x5cd157]) => {
            let _0x2a9f8d = this._getDocumentPointFromPointerEvent(_0x323e44);
            if (
              ((this._lastPointerPoint = _0x2a9f8d),
              this._selectionDragState &&
                !kr(_0x323e44) &&
                ((this._selectionDragState = null),
                this._stopSelectionDragAutoScroll()),
              (this._activeTable ||= this._buildActiveTableAtPoint(
                _0x2a9f8d.x,
                _0x2a9f8d.y,
              )),
              this._moveDragState)
            ) {
              let _0x3e9dd8 = Math.hypot(
                _0x2a9f8d.x - this._moveDragState["startX"],
                _0x2a9f8d.y - this._moveDragState["startY"],
              );
              ((this._moveDragPreview =
                _0x3e9dd8 >= 4
                  ? gn(this._moveDragState, _0x2a9f8d.x, _0x2a9f8d.y)
                  : null),
                (this._moveDropTarget = this._moveDragPreview
                  ? this._getTableDropTargetAtPoint(_0x2a9f8d.x, _0x2a9f8d.y)
                  : null),
                this._setTableCursor(u.CURSOR_TYPE["MOVE"]),
                _0x5cd157.stopPropagation(),
                (_0x5cd157.skipNextObservers = true),
                _0x323e44.preventDefault(),
                this._makeDirty());
              return;
            }
            if (this._scrollbarDragState) {
              (this._updateScrollbarDrag(_0x2a9f8d.x),
                this._setTableCursor(u.CURSOR_TYPE["POINTER"]),
                _0x5cd157.stopPropagation(),
                (_0x5cd157.skipNextObservers = true),
                _0x323e44.preventDefault(),
                this._makeDirty());
              return;
            }
            if (this._pendingHandleSelection) {
              mn(
                {
                  x: this._pendingHandleSelection["startX"],
                  y: this._pendingHandleSelection["startY"],
                },
                _0x2a9f8d,
                4,
              ) ||
                ((this._rowColumnMoveState = this._createRowColumnMoveState(
                  this._pendingHandleSelection,
                )),
                (this._rowColumnMoveTarget =
                  this._getRowColumnMoveTarget(_0x2a9f8d)),
                (this._pendingHandleSelection = null),
                this._setTableCursor(u.CURSOR_TYPE["MOVE"]),
                _0x5cd157.stopPropagation(),
                (_0x5cd157.skipNextObservers = true),
                _0x323e44.preventDefault(),
                this._makeDirty());
              return;
            }
            if (this._dragState) {
              ((this._dragPreview = Sn(
                this._dragState,
                _0x2a9f8d.x,
                _0x2a9f8d.y,
              )),
                this._setResizeCursor(this._dragState["trigger"]),
                _0x5cd157.stopPropagation(),
                (_0x5cd157.skipNextObservers = true),
                _0x323e44.preventDefault(),
                this._makeDirty());
              return;
            }
            if (this._selectionDragState) {
              if (this._updateSelectionDrag(_0x2a9f8d)) {
                (_0x5cd157.stopPropagation(),
                  (_0x5cd157.skipNextObservers = true),
                  _0x323e44.preventDefault());
                return;
              }
              this._updateSelectionDragAutoScroll(_0x2a9f8d);
            }
            this._headerSelectionDragState &&
              (kr(_0x323e44)
                ? this._updateHeaderSelectionDrag(_0x2a9f8d)
                : ((this._headerSelectionDragState = null),
                  this._selectionService["setNativeSelectionSuppressed"](
                    false,
                  )));
            let _0x54e157 = this._hitBorderPreset(_0x2a9f8d.x, _0x2a9f8d.y);
            if (_0x54e157) {
              (this._setTooltip({
                label: this._getBorderPresetLabel(_0x54e157.preset),
                x: _0x2a9f8d.x,
                y: _0x2a9f8d.y,
              }),
                this._setTableCursor(u.CURSOR_TYPE["POINTER"]),
                _0x5cd157.stopPropagation(),
                (_0x5cd157.skipNextObservers = true),
                this._makeDirty());
              return;
            }
            if (this._hitSortOption(_0x2a9f8d.x, _0x2a9f8d.y)) {
              (this._setTooltip(null),
                this._setTableCursor(u.CURSOR_TYPE["POINTER"]),
                _0x5cd157.stopPropagation(),
                (_0x5cd157.skipNextObservers = true),
                this._makeDirty());
              return;
            }
            if (this._hitScrollbar(_0x2a9f8d.x, _0x2a9f8d.y)) {
              (this._setTableCursor(u.CURSOR_TYPE["POINTER"]),
                _0x5cd157.stopPropagation(),
                (_0x5cd157.skipNextObservers = true),
                this._makeDirty());
              return;
            }
            let _0x4a8303 = this._hitTestHoverTrigger(_0x2a9f8d.x, _0x2a9f8d.y),
              _0x2f1b56 = this._shouldPreserveFloatingHover(
                _0x2a9f8d.x,
                _0x2a9f8d.y,
              );
            if (
              (_0x2f1b56 || this._updateHoverTarget(_0x2a9f8d.x, _0x2a9f8d.y),
              !_0x4a8303 && _0x2f1b56)
            ) {
              (_0x5cd157.stopPropagation(),
                (_0x5cd157.skipNextObservers = true));
              return;
            }
            if (
              (this._setHoveredTrigger(_0x4a8303),
              this._setTooltip(this._buildTriggerTooltip(_0x4a8303)),
              !_0x4a8303)
            ) {
              this._restoreTableCursor();
              return;
            }
            (_0x5cd157.stopPropagation(),
              (_0x5cd157.skipNextObservers = true),
              _0x4a8303.kind === "resize-column" ||
              _0x4a8303.kind === "resize-row"
                ? this._setResizeCursor(_0x4a8303)
                : this._setTableCursor(u.CURSOR_TYPE["POINTER"]));
          },
          priority: mr,
        }),
      ),
      this.disposeWithMe(
        _0x475d87.onPointerDown$["subscribeEvent"]({
          next: ([_0x2dce98, _0x49b61d]) => {
            var _0x22faa6;
            if (_0x2dce98.button === 2) {
              this._handleTableContextMenuPointerDown(_0x2dce98, _0x49b61d);
              return;
            }
            let _0x4342c3 = this._getDocumentPointFromPointerEvent(_0x2dce98);
            ((this._lastPointerPoint = _0x4342c3),
              (this._activeTable ||= this._buildActiveTableAtPoint(
                _0x4342c3.x,
                _0x4342c3.y,
              )));
            let _0x12ee8b = this._hitScrollbar(_0x4342c3.x, _0x4342c3.y);
            if (_0x12ee8b && this._activeTable) {
              (_0x49b61d.stopPropagation(),
                (_0x49b61d.skipNextObservers = true),
                _0x2dce98.stopPropagation(),
                _0x2dce98.preventDefault(),
                this._selectionService["setNativeSelectionSuppressed"](true),
                this._startOrJumpScrollbar(_0x12ee8b, _0x4342c3.x));
              return;
            }
            let _0x22383a = this._hitBorderPreset(_0x4342c3.x, _0x4342c3.y);
            if (_0x22383a && this._borderPopover) {
              (_0x49b61d.stopPropagation(),
                (_0x49b61d.skipNextObservers = true),
                _0x2dce98.stopPropagation(),
                _0x2dce98.preventDefault(),
                this._applyBorderPreset(_0x22383a.preset));
              return;
            }
            let _0x592972 = this._hitSortOption(_0x4342c3.x, _0x4342c3.y);
            if (_0x592972 && this._sortPopover) {
              (_0x49b61d.stopPropagation(),
                (_0x49b61d.skipNextObservers = true),
                _0x2dce98.stopPropagation(),
                _0x2dce98.preventDefault(),
                this._selectColumn(
                  this._sortPopover["tableId"],
                  this._sortPopover["column"],
                ),
                this._commandService["executeCommand"](
                  e.DocsTableSortTableCommand["id"],
                  {
                    column: this._sortPopover["column"],
                    direction: _0x592972.direction,
                    tableId: this._sortPopover["tableId"],
                  },
                ),
                (this._sortPopover = null),
                this._makeDirty());
              return;
            }
            let _0x19857a =
                this._hitTest(_0x4342c3.x, _0x4342c3.y) ?? this._hoveredTrigger,
              _0x290200 =
                ((_0x22faa6 = this._activeTable) == null
                  ? undefined
                  : _0x22faa6.sourceTableId) ??
                (_0x19857a == null ? undefined : _0x19857a.tableId);
            if (!_0x19857a) {
              let _0xafe79d = this._buildTableMoveHitAtPoint(
                _0x4342c3.x,
                _0x4342c3.y,
              );
              _0xafe79d &&
                ((this._activeTable = _0xafe79d.activeTable),
                (_0x19857a = _0xafe79d.trigger),
                (_0x290200 = _0xafe79d.activeTable["sourceTableId"]));
            }
            if (!_0x19857a || !_0x290200) {
              let _0x35c392 = this._getCellAtPoint(_0x4342c3.x, _0x4342c3.y);
              _0x35c392
                ? ((this._selectionDragState = {
                    anchorColumn: _0x35c392.column,
                    anchorRow: _0x35c392.row,
                    ...(_0x35c392.segmentId
                      ? { segmentId: _0x35c392.segmentId }
                      : {}),
                    startX: _0x4342c3.x,
                    startY: _0x4342c3.y,
                    structural: false,
                    tableId: _0x35c392.tableId,
                  }),
                  this._selectionService["clearStructuralSelection"]({
                    clearNativeSelection: false,
                  }))
                : ((this._selectionDragState = null),
                  this._stopSelectionDragAutoScroll(),
                  this._selectionService["clearStructuralSelection"]({
                    clearNativeSelection: false,
                  }));
              return;
            }
            if (
              ((this._selectionDragState = null),
              this._stopSelectionDragAutoScroll(),
              _0x49b61d.stopPropagation(),
              (_0x49b61d.skipNextObservers = true),
              _0x2dce98.stopPropagation(),
              _0x2dce98.preventDefault(),
              _0x19857a.kind === "resize-column" ||
                _0x19857a.kind === "resize-row")
            ) {
              let _0xfd923 = this._getTriggerInitialSize(_0x19857a);
              if (_0xfd923 == null) return;
              (this._selectionService["setNativeSelectionSuppressed"](true),
                (this._pendingHandleSelection = null),
                this._selectionService["clearStructuralSelection"](),
                (this._dragState = xn(
                  _0x19857a,
                  _0x4342c3.x,
                  _0x4342c3.y,
                  _0xfd923,
                )),
                (this._dragSourceTableId = _0x290200),
                (this._dragPreview = Sn(
                  this._dragState,
                  _0x4342c3.x,
                  _0x4342c3.y,
                )),
                this._setResizeCursor(_0x19857a),
                this._makeDirty());
              return;
            }
            if (_0x19857a.kind === "table-select") {
              if (!this._activeTable) return;
              (this._selectionService["setNativeSelectionSuppressed"](true),
                (this._moveDragState = hn(
                  _0x19857a,
                  _0x4342c3.x,
                  _0x4342c3.y,
                  this._activeTable["input"].tableRect,
                )),
                (this._moveDragSourceTableId = _0x290200),
                (this._moveDragPreview = null),
                (this._moveDropTarget = null),
                this._closeBorderPopover(),
                (this._sortPopover = null),
                this._setTableCursor(u.CURSOR_TYPE["MOVE"]),
                this._makeDirty());
              return;
            }
            this._handleStructuralTriggerPointerDown(
              _0x19857a,
              _0x4342c3,
              _0x290200,
            );
          },
          priority: mr,
        }),
      ),
      this.disposeWithMe(
        _0x475d87.onPointerUp$["subscribeEvent"]({
          next: ([_0x2a3356, _0x31d2b4]) => {
            let _0x50104c = this._getDocumentPointFromPointerEvent(_0x2a3356);
            ((this._lastPointerPoint = _0x50104c),
              this._releasePointerInteraction(_0x50104c, _0x31d2b4, {
                commit: true,
                selectCollapsedRange: true,
              }));
          },
          priority: mr,
        }),
      ),
      this.disposeWithMe(
        this._context["scene"].onMouseWheel$["subscribeEvent"]({
          next: ([_0x5920e5, _0x2897c9]) => {
            let _0x163f2a = this._getDocumentPointFromPointerEvent(_0x5920e5),
              _0x297e20 =
                this._activeTable ??
                this._buildActiveTableAtPoint(_0x163f2a.x, _0x163f2a.y);
            !_0x297e20 ||
              !Z(W(_0x297e20.input), _0x163f2a.x, _0x163f2a.y) ||
              (this._viewportService["applyWheel"](
                this._context["unitId"],
                _0x297e20.sourceTableId,
                {
                  ctrlKey: !!_0x5920e5.ctrlKey,
                  deltaX: _0x5920e5.deltaX,
                  deltaY: _0x5920e5.deltaY,
                  metaKey: !!_0x5920e5.metaKey,
                  shiftKey: !!_0x5920e5.shiftKey,
                  zoom: this._getCurrentZoom(),
                },
              ) &&
                ((this._activeTable =
                  this._refreshActiveTableViewport(_0x297e20)),
                this._refreshNativeSelection(),
                _0x2897c9.stopPropagation(),
                (_0x2897c9.skipNextObservers = true),
                _0x5920e5.preventDefault(),
                this._makeDirty()));
          },
          priority: mr,
        }),
      ),
      this.disposeWithMe(
        _0x475d87.onPointerLeave$["subscribeEvent"]({
          next: () => {
            this._dragState ||
              this._moveDragState ||
              this._rowColumnMoveState ||
              this._headerSelectionDragState ||
              (this._setHoveredTrigger(null),
              this._setTooltip(null),
              this._shouldKeepActiveTableOnPointerLeave() ||
                (this._activeTable = null),
              this._resetTableCursor(),
              this._makeDirty());
          },
          priority: mr,
        }),
      ));
  }
  _handleEmbedPassiveWheel(_0x13dc56) {
    if (
      _0x13dc56.source === "host-scroll-sync" ||
      _0x13dc56.childUnitId !== this._context["unitId"]
    )
      return false;
    let _0x3538d7 = this._getDocumentPointFromWindowEvent(_0x13dc56.event);
    if (!_0x3538d7) return false;
    let _0xd42787 =
      this._buildActiveTableAtPoint(_0x3538d7.x, _0x3538d7.y) ??
      this._activeTable;
    if (!_0xd42787 || !Z(W(_0xd42787.input), _0x3538d7.x, _0x3538d7.y))
      return false;
    let _0x247ad1 = _0x13dc56.event;
    return this._viewportService["applyWheel"](
      this._context["unitId"],
      _0xd42787.sourceTableId,
      {
        ctrlKey: !!_0x247ad1.ctrlKey,
        deltaX: _0x247ad1.deltaX,
        deltaY: _0x247ad1.deltaY,
        metaKey: !!_0x247ad1.metaKey,
        shiftKey: !!_0x247ad1.shiftKey,
        zoom: this._getCurrentZoom(),
      },
    )
      ? ((this._activeTable = this._refreshActiveTableViewport(_0xd42787)),
        this._refreshNativeSelection(),
        this._makeDirty(),
        true)
      : false;
  }
  _handleWindowPointerMove(_0x48f47f) {
    if (
      !this._dragState &&
      !this._moveDragState &&
      !this._rowColumnMoveState &&
      !this._pendingHandleSelection &&
      !this._scrollbarDragState &&
      !this._selectionDragState &&
      !this._headerSelectionDragState
    )
      return;
    let _0x185f77 = this._getDocumentPointFromWindowEvent(_0x48f47f);
    if (
      _0x185f77 &&
      ((this._lastPointerPoint = _0x185f77),
      !(
        this._selectionDragState &&
        (kr(_0x48f47f)
          ? this._updateSelectionDrag(_0x185f77) ||
            this._updateSelectionDragAutoScroll(_0x185f77)
          : ((this._selectionDragState = null),
            this._stopSelectionDragAutoScroll()),
        !this._dragState &&
          !this._moveDragState &&
          !this._rowColumnMoveState &&
          !this._pendingHandleSelection &&
          !this._scrollbarDragState)
      ) &&
        !(
          this._headerSelectionDragState &&
          (kr(_0x48f47f)
            ? this._updateHeaderSelectionDrag(_0x185f77)
            : ((this._headerSelectionDragState = null),
              this._selectionService["setNativeSelectionSuppressed"](false)),
          !this._dragState &&
            !this._moveDragState &&
            !this._rowColumnMoveState &&
            !this._pendingHandleSelection &&
            !this._scrollbarDragState)
        ))
    ) {
      if (this._scrollbarDragState) {
        (this._updateScrollbarDrag(_0x185f77.x), this._makeDirty());
        return;
      }
      if (this._pendingHandleSelection) {
        mn(
          {
            x: this._pendingHandleSelection["startX"],
            y: this._pendingHandleSelection["startY"],
          },
          _0x185f77,
          4,
        ) ||
          ((this._rowColumnMoveState = this._createRowColumnMoveState(
            this._pendingHandleSelection,
          )),
          (this._rowColumnMoveTarget = this._getRowColumnMoveTarget(_0x185f77)),
          (this._pendingHandleSelection = null),
          this._setTableCursor(u.CURSOR_TYPE["MOVE"]),
          this._makeDirty());
        return;
      }
      if (this._rowColumnMoveState) {
        (kr(_0x48f47f)
          ? ((this._rowColumnMoveTarget =
              this._getRowColumnMoveTarget(_0x185f77)),
            this._setTableCursor(u.CURSOR_TYPE["MOVE"]))
          : ((this._rowColumnMoveState = null),
            (this._rowColumnMoveTarget = null),
            this._restoreTableCursor()),
          this._makeDirty());
        return;
      }
      if (this._moveDragState) {
        let _0x232a1e = Math.hypot(
          _0x185f77.x - this._moveDragState["startX"],
          _0x185f77.y - this._moveDragState["startY"],
        );
        ((this._moveDragPreview =
          _0x232a1e >= 4
            ? gn(this._moveDragState, _0x185f77.x, _0x185f77.y)
            : null),
          (this._moveDropTarget = this._moveDragPreview
            ? this._getTableDropTargetAtPoint(_0x185f77.x, _0x185f77.y)
            : null),
          this._setTableCursor(u.CURSOR_TYPE["MOVE"]),
          this._makeDirty());
        return;
      }
      this._dragState &&
        ((this._dragPreview = Sn(this._dragState, _0x185f77.x, _0x185f77.y)),
        this._setResizeCursor(this._dragState["trigger"]),
        this._makeDirty());
    }
  }
  _getDocumentPointFromWindowEvent(_0x6a5332) {
    var _0x15abd5, _0x5db296, _0x35e0f9;
    if (!Pr(_0x6a5332)) return null;
    let _0x426b8f =
        (_0x15abd5 = this._context["engine"]) == null ||
        (_0x5db296 = _0x15abd5.getCanvasElement) == null
          ? undefined
          : _0x5db296.call(_0x15abd5),
      _0x3c4f94 =
        _0x426b8f == null ||
        (_0x35e0f9 = _0x426b8f.getBoundingClientRect) == null
          ? undefined
          : _0x35e0f9.call(_0x426b8f);
    return _0x3c4f94
      ? Dr(
          _0x6a5332.clientX - _0x3c4f94.left,
          _0x6a5332.clientY - _0x3c4f94.top,
          this._context["scene"],
        )
      : null;
  }
  _getDocumentPointFromPointerEvent(_0x1a73e0) {
    return (
      this._getDocumentPointFromWindowEvent(_0x1a73e0) ??
      Dr(_0x1a73e0.offsetX, _0x1a73e0.offsetY, this._context["scene"])
    );
  }
  _releasePointerInteraction(_0xf15ecd, _0x1f188f, _0x5a36fe) {
    var _0x2fb47d;
    let _0x313d8e = !!(
      (_0x2fb47d = this._selectionDragState) != null && _0x2fb47d.structural
    );
    this._selectionDragState = null;
    let _0x3b44d8 = !!this._headerSelectionDragState;
    return (
      (this._headerSelectionDragState = null),
      this._stopSelectionDragAutoScroll(),
      _0x313d8e
        ? (this._consumePointerEvent(_0x1f188f), this._makeDirty(), true)
        : _0x3b44d8
          ? (this._consumePointerEvent(_0x1f188f),
            this._selectionService["setNativeSelectionSuppressed"](false),
            this._makeDirty(),
            true)
          : this._scrollbarDragState
            ? (this._consumePointerEvent(_0x1f188f),
              (this._scrollbarDragState = null),
              this._selectionService["setNativeSelectionSuppressed"](false),
              this._restoreTableCursor(),
              this._makeDirty(),
              true)
            : this._rowColumnMoveState || this._rowColumnMoveTarget
              ? (this._consumePointerEvent(_0x1f188f),
                this._releaseRowColumnMove(_0xf15ecd, _0x5a36fe.commit),
                true)
              : this._moveDragState ||
                  this._moveDragSourceTableId ||
                  this._moveDragPreview ||
                  this._moveDropTarget
                ? (this._consumePointerEvent(_0x1f188f),
                  this._releaseMoveDrag(_0xf15ecd, _0x5a36fe.commit),
                  true)
                : this._pendingHandleSelection
                  ? (this._consumePointerEvent(_0x1f188f),
                    this._releaseHandleSelection(_0xf15ecd, _0x5a36fe.commit),
                    true)
                  : this._dragState ||
                      this._dragSourceTableId ||
                      this._dragPreview
                    ? (this._consumePointerEvent(_0x1f188f),
                      this._releaseResizeDrag(_0xf15ecd, _0x5a36fe.commit),
                      true)
                    : false
    );
  }
  _releaseMoveDrag(_0x5e66e2, _0x1e7406) {
    if (_0x1e7406 && this._moveDragState && this._moveDragSourceTableId) {
      let _0x2d8800 = _0x5e66e2
          ? Math.hypot(
              _0x5e66e2.x - this._moveDragState["startX"],
              _0x5e66e2.y - this._moveDragState["startY"],
            )
          : 0,
        _0x7459dc =
          this._moveDragPreview ??
          (_0x5e66e2 && _0x2d8800 >= 4
            ? gn(this._moveDragState, _0x5e66e2.x, _0x5e66e2.y)
            : null),
        _0x1a80af =
          this._moveDropTarget ??
          (_0x5e66e2 && _0x7459dc
            ? this._getTableDropTargetAtPoint(_0x5e66e2.x, _0x5e66e2.y)
            : null);
      _0x1a80af
        ? this._commandService["executeCommand"](
            e.DocsTableMoveTableCommand["id"],
            {
              tableId: this._moveDragSourceTableId,
              targetOffset: _0x1a80af.targetOffset,
            },
          )
        : !_0x7459dc &&
          mn(
            {
              x: this._moveDragState["startX"],
              y: this._moveDragState["startY"],
            },
            _0x5e66e2 ?? null,
            4,
          ) &&
          this._selectTable(this._moveDragSourceTableId);
    }
    ((this._moveDragState = null),
      (this._moveDragSourceTableId = null),
      (this._moveDragPreview = null),
      (this._moveDropTarget = null),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._restoreTableCursor(),
      this._makeDirty());
  }
  _hideTransientTableControls() {
    var _0x23ea7b, _0x179722;
    let _0x18550c = !!(
      this._activeTable ||
      this._hoveredTrigger ||
      this._dragState ||
      this._dragPreview ||
      this._moveDragState ||
      this._moveDragPreview ||
      this._moveDropTarget ||
      this._pendingHandleSelection ||
      this._rowColumnMoveState ||
      this._rowColumnMoveTarget ||
      this._scrollbarDragState ||
      this._selectionDragState ||
      this._headerSelectionDragState ||
      this._hoverCell ||
      this._hoverColumn != null ||
      this._hoverRow != null ||
      this._borderPopover ||
      this._sortPopover ||
      this._tooltip ||
      this._contextMenuService["visible"]
    );
    ((this._activeTable = null),
      (this._hoveredTrigger = null),
      (this._dragState = null),
      (this._dragSourceTableId = null),
      (this._dragPreview = null),
      (this._moveDragState = null),
      (this._moveDragSourceTableId = null),
      (this._moveDragPreview = null),
      (this._moveDropTarget = null),
      (this._pendingHandleSelection = null),
      (this._rowColumnMoveState = null),
      (this._rowColumnMoveTarget = null),
      (this._scrollbarDragState = null),
      (this._selectionDragState = null),
      (this._headerSelectionDragState = null),
      (this._hoverCell = null),
      (this._hoverColumn = null),
      (this._hoverRow = null),
      (this._sortPopover = null),
      (this._tooltip = null),
      (this._lastPointerPoint = null),
      this._stopSelectionDragAutoScroll(),
      (_0x23ea7b = this._borderPopoverDisposable) == null ||
        _0x23ea7b.dispose(),
      (this._borderPopoverDisposable = null),
      (this._borderPopover = null),
      this._contextMenuService["hideContextMenu"](),
      this._floatingMenuService["hide"](),
      this._hideFloatingMenuPopup(),
      ((_0x179722 = this._docParagraphMenuService["activeTarget"]) == null
        ? undefined
        : _0x179722.kind) === r.DocumentBlockType["TABLE"] &&
        this._docParagraphMenuService["hideParagraphMenu"](true),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._restoreTableCursor(),
      _0x18550c && this._makeDirty());
  }
  _releaseHandleSelection(_0xa930ff, _0x134aaf) {
    let _0x13a046 = this._pendingHandleSelection;
    (_0x134aaf &&
      _0x13a046 &&
      mn({ x: _0x13a046.startX, y: _0x13a046.startY }, _0xa930ff ?? null, 4) &&
      (_0x13a046.type === "row" && _0x13a046.row != null
        ? this._selectRow(_0x13a046.tableId, _0x13a046.row)
        : _0x13a046.type === "column" &&
          _0x13a046.column != null &&
          this._selectColumn(_0x13a046.tableId, _0x13a046.column)),
      (this._pendingHandleSelection = null),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._makeDirty());
  }
  _releaseRowColumnMove(_0x349322, _0x18a528) {
    let _0x190e13 = this._rowColumnMoveState,
      _0x397ada =
        this._rowColumnMoveTarget ??
        (_0x349322 ? this._getRowColumnMoveTarget(_0x349322) : null);
    (_0x18a528 &&
      _0x190e13 &&
      _0x397ada &&
      _0x397ada.index !== _0x190e13.sourceIndex &&
      (_0x190e13.type === "row"
        ? this._commandService["executeCommand"](
            e.DocsTableMoveRowsCommand["id"],
            {
              count: 1,
              fromRow: _0x190e13.sourceIndex,
              position: _0x397ada.position === "above" ? "above" : "below",
              tableId: _0x190e13.tableId,
              toRow: _0x397ada.index,
            },
          ).then((_0x5f3191) => {
            _0x5f3191 && this._scheduleActiveTableRefresh(_0x190e13.tableId);
          })
        : this._commandService["executeCommand"](
            e.DocsTableMoveColumnsCommand["id"],
            {
              count: 1,
              fromColumn: _0x190e13.sourceIndex,
              position: _0x397ada.position === "left" ? "left" : "right",
              tableId: _0x190e13.tableId,
              toColumn: _0x397ada.index,
            },
          ).then((_0x1cfb49) => {
            _0x1cfb49 && this._scheduleActiveTableRefresh(_0x190e13.tableId);
          })),
      (this._rowColumnMoveState = null),
      (this._rowColumnMoveTarget = null),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._restoreTableCursor(),
      this._makeDirty());
  }
  _releaseResizeDrag(_0x42e874, _0x183b11) {
    let _0x58555b = this._dragState
        ? Cn(this._dragState, this._dragPreview ?? null, _0x42e874 ?? null)
        : this._dragPreview,
      _0x5db880 = this._dragSourceTableId;
    (_0x183b11 &&
      _0x58555b &&
      _0x5db880 &&
      (_0x58555b.column != null && _0x58555b.width != null
        ? this._executeCommandAndRefreshActiveTable(
            e.DocsTableResizeColumnCommand["id"],
            {
              column: _0x58555b.column,
              tableId: _0x5db880,
              width: _0x58555b.width,
            },
            _0x5db880,
          )
        : _0x58555b.row != null &&
          _0x58555b.height != null &&
          this._executeCommandAndRefreshActiveTable(
            e.DocsTableResizeRowCommand["id"],
            {
              height: _0x58555b.height,
              row: _0x58555b.row,
              tableId: _0x5db880,
            },
            _0x5db880,
          )),
      (this._dragState = null),
      (this._dragSourceTableId = null),
      (this._dragPreview = null),
      this._setHoveredTrigger(null),
      this._setTooltip(null),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._restoreTableCursor(),
      this._makeDirty());
  }
  _openBorderPopover(_0x197f1b) {
    (this._closeBorderPopover(), (this._borderPopover = _0x197f1b));
    let _0x4919f0 = Wr().map(({ preset: _0x447fb0 }) => ({
      label: this._getBorderPresetLabel(_0x447fb0),
      preset: _0x447fb0,
    }));
    ((this._borderPopoverDisposable = this._docCanvasPopManagerService[
      "attachPopupToRect"
    ](
      {
        bottom: _0x197f1b.y,
        left: _0x197f1b.x,
        right: _0x197f1b.x,
        top: _0x197f1b.y,
      },
      {
        componentKey: et,
        direction: "bottom-left",
        extraProps: {
          onSelect: (_0xfe626a) => this._applyBorderPreset(_0xfe626a),
          presets: _0x4919f0,
        },
        onClickOutside: () => this._closeBorderPopover(),
        onContextMenu: () => this._closeBorderPopover(),
      },
      this._context["unitId"],
    )),
      this._makeDirty());
  }
  _closeBorderPopover() {
    var _0x3384ff;
    ((_0x3384ff = this._borderPopoverDisposable) == null || _0x3384ff.dispose(),
      (this._borderPopoverDisposable = null),
      (this._borderPopover = null),
      this._setTooltip(null),
      this._makeDirty());
  }
  _ensureFloatingMenuPopup(_0x1b6b18) {
    let _0x191a30 = Br(
      _0x1b6b18 ?? this._floatingMenuService["getState"]().anchorRect ?? null,
    );
    (this._floatingMenuPopup &&
      this._floatingMenuPopupAnchorKey === _0x191a30) ||
      (this._floatingMenuPopup && this._hideFloatingMenuPopup(),
      (this._floatingMenuPopup = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        () =>
          this._floatingMenuService["getState"]().anchorRect ?? {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          },
        {
          componentKey: Yt,
          direction: "top-center",
          offset: [0, 8],
          onClickOutside: () => {
            (this._floatingMenuService["hide"](),
              this._hideFloatingMenuPopup());
          },
        },
        this._context["unitId"],
      )),
      (this._floatingMenuPopupAnchorKey = _0x191a30));
  }
  _hideFloatingMenuPopup() {
    var _0xb04d64;
    ((_0xb04d64 = this._floatingMenuPopup) == null || _0xb04d64.dispose(),
      (this._floatingMenuPopup = null),
      (this._floatingMenuPopupAnchorKey = null));
  }
  _applyBorderPreset(_0x43c7a8) {
    let _0x2d6ccf = this._borderPopover;
    _0x2d6ccf &&
      (this._selectionService["setStructuralSelection"]({
        kind:
          _0x2d6ccf.startRow === _0x2d6ccf.endRow &&
          _0x2d6ccf.startColumn === _0x2d6ccf.endColumn
            ? e.DocsTableSelectionKind["Cell"]
            : e.DocsTableSelectionKind["Range"],
        segmentId: _0x2d6ccf.segmentId,
        tableId: _0x2d6ccf.tableId,
        startRow: _0x2d6ccf.startRow,
        endRow: _0x2d6ccf.endRow,
        startColumn: _0x2d6ccf.startColumn,
        endColumn: _0x2d6ccf.endColumn,
      }),
      this._commandService["executeCommand"](
        e.DocsTableSetTableBorderCommand["id"],
        {
          endColumn: _0x2d6ccf.endColumn,
          endRow: _0x2d6ccf.endRow,
          preset: _0x43c7a8,
          startColumn: _0x2d6ccf.startColumn,
          startRow: _0x2d6ccf.startRow,
          tableId: _0x2d6ccf.tableId,
        },
      ),
      this._closeBorderPopover());
  }
  _consumePointerEvent(_0x19cacc) {
    _0x19cacc &&
      (_0x19cacc.stopPropagation(), (_0x19cacc.skipNextObservers = true));
  }
  _handleTableContextMenuPointerDown(_0x596ef3, _0x2b219b) {
    var _0x32cd57;
    if (_0x596ef3.button !== 2) return false;
    let _0x5aa728 = this._getDocumentPointFromPointerEvent(_0x596ef3);
    ((this._lastPointerPoint = _0x5aa728),
      (this._activeTable =
        this._buildActiveTableAtPoint(_0x5aa728.x, _0x5aa728.y) ??
        this._activeTable));
    let _0x24bf20 = this._hitTest(_0x5aa728.x, _0x5aa728.y),
      _0x3f95f3 =
        (_0x24bf20 == null ? undefined : _0x24bf20.tableId) ??
        ((_0x32cd57 = this._activeTable) == null
          ? undefined
          : _0x32cd57.sourceTableId),
      _0x4d3158 = this._selectionService["getCurrentSelection"](),
      _0x6a7f48 = Lr(_0x24bf20);
    if (_0x3f95f3 && _0x6a7f48) {
      if (!Rr(_0x4d3158, _0x3f95f3, _0x6a7f48.axis, _0x6a7f48.index)) {
        var _0x507b3b;
        this._selectionService["setStructuralHeaderSelection"](
          _0x3f95f3,
          _0x6a7f48.axis,
          _0x6a7f48.index,
          _0x6a7f48.index,
          {
            clearNativeSelection: true,
            ...((_0x507b3b = this._activeTable) != null && _0x507b3b.segmentId
              ? { segmentId: this._activeTable["segmentId"] }
              : {}),
          },
        );
      }
      return (this._openTableContextMenu(_0x596ef3, _0x2b219b), true);
    }
    let _0x4f6bf2 = this._getCellAtPoint(_0x5aa728.x, _0x5aa728.y);
    return !_0x4f6bf2 || !Ir(_0x4d3158, _0x4f6bf2)
      ? false
      : (this._openTableContextMenu(_0x596ef3, _0x2b219b), true);
  }
  _openTableContextMenu(_0x3718c3, _0x533489) {
    (this._consumePointerEvent(_0x533489),
      _0x3718c3.preventDefault(),
      this._contextMenuService["triggerContextMenu"](
        _0x3718c3,
        n.ContextMenuPosition["MAIN_AREA"],
        { unitId: this._context["unitId"] },
      ));
  }
  _executeCommandAndRefreshActiveTable(_0x42f318, _0xb16679, _0x5c8b68) {
    this._commandService["executeCommand"](_0x42f318, _0xb16679).then(
      (_0xdf00a9) => {
        _0xdf00a9 && this._scheduleActiveTableRefresh(_0x5c8b68);
      },
    );
  }
  _handleStructuralTriggerPointerDown(_0x360a0f, _0x3f8732, _0x3b0a49) {
    if (
      _0x360a0f.kind === "row-insert-dot" ||
      _0x360a0f.kind === "column-insert-dot"
    )
      return (this._handleStructuralInsertTrigger(_0x360a0f, _0x3b0a49), true);
    if (
      (_0x360a0f.kind !== "row-header" || _0x360a0f.row == null) &&
      (_0x360a0f.kind !== "column-header" || _0x360a0f.column == null)
    )
      return false;
    if (
      (this._selectionService["setNativeSelectionSuppressed"](true),
      _0x360a0f.kind === "row-header" && _0x360a0f.row != null)
    ) {
      var _0x541152, _0x425692;
      return this._isRowHeaderInsertSeamHit(_0x360a0f, _0x3f8732)
        ? (this._handleStructuralInsertTrigger(
            { ..._0x360a0f, kind: "row-insert-dot" },
            _0x3b0a49,
          ),
          true)
        : this._canStartHeaderReorder(_0x360a0f)
          ? ((this._pendingHandleSelection = {
              row: _0x360a0f.row,
              startX: _0x3f8732.x,
              startY: _0x3f8732.y,
              tableId: _0x3b0a49,
              type: "row",
            }),
            true)
          : ((this._headerSelectionDragState = {
              anchorIndex: _0x360a0f.row,
              currentIndex: _0x360a0f.row,
              ...((_0x541152 = this._activeTable) != null && _0x541152.segmentId
                ? { segmentId: this._activeTable["segmentId"] }
                : {}),
              tableId: _0x3b0a49,
              type: "row",
            }),
            this._selectionService["setStructuralHeaderSelection"](
              _0x3b0a49,
              "row",
              _0x360a0f.row,
              _0x360a0f.row,
              {
                clearNativeSelection: true,
                ...((_0x425692 = this._activeTable) != null &&
                _0x425692.segmentId
                  ? { segmentId: this._activeTable["segmentId"] }
                  : {}),
              },
            ),
            true);
    }
    if (_0x360a0f.kind === "column-header" && _0x360a0f.column != null) {
      var _0x3ca31e, _0x3801dc;
      return this._canStartHeaderReorder(_0x360a0f)
        ? ((this._pendingHandleSelection = {
            column: _0x360a0f.column,
            startX: _0x3f8732.x,
            startY: _0x3f8732.y,
            tableId: _0x3b0a49,
            type: "column",
          }),
          true)
        : ((this._headerSelectionDragState = {
            anchorIndex: _0x360a0f.column,
            currentIndex: _0x360a0f.column,
            ...((_0x3ca31e = this._activeTable) != null && _0x3ca31e.segmentId
              ? { segmentId: this._activeTable["segmentId"] }
              : {}),
            tableId: _0x3b0a49,
            type: "column",
          }),
          this._selectionService["setStructuralHeaderSelection"](
            _0x3b0a49,
            "column",
            _0x360a0f.column,
            _0x360a0f.column,
            {
              clearNativeSelection: true,
              ...((_0x3801dc = this._activeTable) != null && _0x3801dc.segmentId
                ? { segmentId: this._activeTable["segmentId"] }
                : {}),
            },
          ),
          true);
    }
    return false;
  }
  _updateHeaderSelectionDrag(_0x5236ab) {
    let _0x17bf47 = this._headerSelectionDragState;
    if (!_0x17bf47) return;
    let _0x1b63f6 =
      _0x17bf47.type === "row"
        ? this._getRowAtY(_0x5236ab.y)
        : this._getColumnAtX(_0x5236ab.x);
    _0x1b63f6 != null &&
      _0x1b63f6 !== _0x17bf47.currentIndex &&
      ((_0x17bf47.currentIndex = _0x1b63f6),
      this._selectionService["setStructuralHeaderSelection"](
        _0x17bf47.tableId,
        _0x17bf47.type,
        _0x17bf47.anchorIndex,
        _0x1b63f6,
        {
          clearNativeSelection: true,
          ...(_0x17bf47.segmentId ? { segmentId: _0x17bf47.segmentId } : {}),
        },
      ),
      this._makeDirty());
  }
  _handleStructuralInsertTrigger(_0x2e1ba9, _0xd777b4) {
    if (_0x2e1ba9.kind === "row-insert-dot" && _0x2e1ba9.row != null) {
      this._executeCommandAndRefreshActiveTable(
        e.DocsTableInsertRowsCommand["id"],
        {
          count: 1,
          position: _0x2e1ba9.position === "above" ? "above" : "below",
          row: _0x2e1ba9.row,
          tableId: _0xd777b4,
        },
        _0xd777b4,
      );
      return;
    }
    _0x2e1ba9.kind === "column-insert-dot" &&
      _0x2e1ba9.column != null &&
      this._executeCommandAndRefreshActiveTable(
        e.DocsTableInsertColumnsCommand["id"],
        {
          column: _0x2e1ba9.column,
          count: 1,
          position: _0x2e1ba9.position === "left" ? "left" : "right",
          tableId: _0xd777b4,
        },
        _0xd777b4,
      );
  }
  _isRowHeaderInsertSeamHit(_0x5ee36e, _0x2ed8fe) {
    if (_0x5ee36e.kind !== "row-header") return false;
    let _0x64e0a6 = Math.min(
      _0x5ee36e.rect["height"],
      Math.max(6 / this._getCurrentZoom(), 4 / this._getCurrentZoom()),
    );
    return (
      _0x2ed8fe.y >=
        _0x5ee36e.rect["y"] + _0x5ee36e.rect["height"] - _0x64e0a6 &&
      _0x2ed8fe.y <= _0x5ee36e.rect["y"] + _0x5ee36e.rect["height"]
    );
  }
  _canStartHeaderReorder(_0x47252a) {
    let _0x30da86 = this._selection;
    return !_0x30da86 ||
      !_0x47252a.tableId ||
      _0x30da86.tableId !== _0x47252a.tableId
      ? false
      : _0x47252a.kind === "row-header" && _0x47252a.row != null
        ? _0x30da86.kind === e.DocsTableSelectionKind["Row"] &&
          _0x30da86.startRow === _0x30da86.endRow &&
          _0x47252a.row === _0x30da86.startRow
        : _0x47252a.kind === "column-header" &&
          _0x47252a.column != null &&
          _0x30da86.kind === e.DocsTableSelectionKind["Column"] &&
          _0x30da86.startColumn === _0x30da86.endColumn &&
          _0x47252a.column === _0x30da86.startColumn;
  }
  _initCanvasRender() {
    this.disposeWithMe(
      this._context["scene"].afterRender$["subscribe"]((_0x13ea32) => {
        var _0x3cf435;
        if (
          !_0x13ea32 ||
          (this._syncViewportStatesFromSkeleton() && this._makeDirty(),
          (_0x3cf435 = this._selection) != null &&
            _0x3cf435.tableId &&
            this._syncFloatingMenuFromSelection(),
          !this._activeTable)
        )
          return;
        let _0x3ca014 = _0x13ea32.getContext();
        _0x3ca014 && this._draw(_0x3ca014);
      }),
    );
  }
  _buildActiveTable(_0x595e34) {
    let _0x3f9685 = this._findSkeletonTable(
      _0x595e34.pageIndex,
      _0x595e34.tableId,
      _0x595e34.segmentId,
    );
    if (!_0x3f9685) return null;
    let { page: _0x3928e5, table: _0xda94b8 } = _0x3f9685,
      _0x16c280 = (0, u.getTableIdAndSliceIndex)(_0x595e34.tableId).tableId,
      _0x4b818d = Sr(_0xda94b8),
      _0x49da10 = _0xda94b8.rows["map"]((_0x399226) => _0x399226.height),
      _0x2d048f = J(_0x4b818d),
      _0x5b2156 = this._syncViewportState(
        _0x595e34,
        _0x16c280,
        _0x3928e5,
        _0xda94b8,
        _0x2d048f,
      );
    return {
      pageIndex: _0x595e34.pageIndex,
      segmentId: _0x595e34.segmentId ?? _0x3f9685.segmentId,
      sourceTableId: _0x16c280,
      tableSliceId: _0x595e34.tableId,
      input: {
        columnIndices: _0x4b818d.map((_0xeafea1, _0x12902d) => _0x12902d),
        columnWidths: _0x4b818d,
        mergedCells: Cr(_0xda94b8),
        rowHeights: _0x49da10,
        rowIndices: _0xda94b8.rows["map"]((_0x30ed22) => _0x30ed22.index),
        tableId: _0x16c280,
        tableRect: {
          height: _0x595e34.rect["bottom"] - _0x595e34.rect["top"],
          width: _0x2d048f || _0x595e34.rect["right"] - _0x595e34.rect["left"],
          x: _0x595e34.rect["left"],
          y: _0x595e34.rect["top"],
        },
        viewport: _0x5b2156,
        zoom: this._getCurrentZoom(),
      },
    };
  }
  _findSkeletonTable(_0x5a68ec, _0x5e860b, _0x2d9f46) {
    return (
      this._collectSkeletonTables().find(
        (_0x181796) =>
          _0x181796.pageIndex === _0x5a68ec &&
          _0x181796.tableId === _0x5e860b &&
          (_0x2d9f46 == null || _0x181796.segmentId === _0x2d9f46),
      ) ?? null
    );
  }
  _collectSkeletonTables() {
    let _0x1684c0 =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x22a5cf = (_0x1684c0 == null ? undefined : _0x1684c0.pages) ?? [],
      _0x46b543 = wr(this._context["mainComponent"]);
    return (0, f.documentSkeletonTableIterator)(_0x22a5cf, {
      docsLeft: _0x46b543.docsLeft,
      docsTop: _0x46b543.docsTop,
      pageMarginTop: _0x46b543.pageMarginTop,
      resolveViewport: false,
      skeFooters: _0x1684c0 == null ? undefined : _0x1684c0.skeFooters,
      skeHeaders: _0x1684c0 == null ? undefined : _0x1684c0.skeHeaders,
      unitId: this._context["unitId"],
    }).map((_0x43d1f3) => ({
      page: _0x43d1f3.page,
      pageIndex: _0x43d1f3.pageIndex,
      rect: _0x43d1f3.tableRect,
      segmentId: _0x43d1f3.page["segmentId"] ?? "",
      table: _0x43d1f3.table,
      tableId: _0x43d1f3.tableId,
    }));
  }
  _refreshActiveTableViewport(_0x29b71a) {
    return {
      ..._0x29b71a,
      input: {
        ..._0x29b71a.input,
        viewport: this._getOrCreateViewportState(
          this._context["unitId"],
          _0x29b71a.sourceTableId,
        ),
        zoom: this._getCurrentZoom(),
      },
    };
  }
  _getOrCreateViewportState(_0x491c74, _0x28e318) {
    let _0x1da63f = this._viewportService["getState"](_0x491c74, _0x28e318);
    return _0x491c74 !== this._context["unitId"] || _0x1da63f
      ? _0x1da63f
      : this._syncViewportStateForSourceTable(_0x28e318);
  }
  _syncViewportStatesFromSkeleton() {
    let _0x1c0c11 = false,
      _0x13565d = new Set();
    for (let _0x4d791e of this._collectSkeletonTables()) {
      let _0x3e9795 = (0, u.getTableIdAndSliceIndex)(_0x4d791e.tableId).tableId;
      _0x13565d.add(_0x3e9795);
      let _0x44a2be = J(Sr(_0x4d791e.table)),
        _0x1b7bcc = this._viewportService["getState"](
          this._context["unitId"],
          _0x3e9795,
        ),
        _0x55e0d1 = this._syncViewportState(
          {
            pageIndex: _0x4d791e.pageIndex,
            rect: _0x4d791e.rect,
            tableId: _0x4d791e.tableId,
          },
          _0x3e9795,
          _0x4d791e.page,
          _0x4d791e.table,
          _0x44a2be,
        ),
        _0x3c8569 = this._activeTable;
      (_0x3c8569 &&
        _0x3c8569.sourceTableId === _0x3e9795 &&
        _0x3c8569.tableSliceId === _0x4d791e.tableId &&
        _0x3c8569.segmentId === _0x4d791e.segmentId &&
        (this._activeTable = {
          ..._0x3c8569,
          input: {
            ..._0x3c8569.input,
            viewport: _0x55e0d1,
            zoom: this._getCurrentZoom(),
          },
        }),
        (_0x1c0c11 ||= Nr(_0x1b7bcc, _0x55e0d1)));
    }
    for (let _0x4dba79 of this._knownTableIds)
      _0x13565d.has(_0x4dba79) ||
        (this._viewportService["clear"](this._context["unitId"], _0x4dba79),
        (_0x1c0c11 = true));
    return ((this._knownTableIds = _0x13565d), _0x1c0c11);
  }
  _syncViewportStateForSourceTable(_0x5371db) {
    let _0x27ccb7 = this._findTableSliceForSource(_0x5371db);
    if (!_0x27ccb7) return;
    let _0x3ceb19 = this._findSkeletonTable(
      _0x27ccb7.pageIndex,
      _0x27ccb7.tableId,
      _0x27ccb7.segmentId,
    );
    if (_0x3ceb19)
      return this._syncViewportState(
        _0x27ccb7,
        _0x5371db,
        _0x3ceb19.page,
        _0x3ceb19.table,
        J(Sr(_0x3ceb19.table)),
      );
  }
  _syncViewportState(_0x14f287, _0x4df498, _0x4d6984, _0x17f8d0, _0x3680e0) {
    return this._viewportService["setViewport"](
      this._context["unitId"],
      _0x4df498,
      this._buildViewportState(
        _0x14f287,
        _0x4d6984,
        _0x17f8d0,
        _0x3680e0,
        this._getCurrentZoom(),
      ),
    );
  }
  _scheduleActiveTableRefresh(_0xe7ef15) {
    (this._activeTableRefreshTimer != null &&
      clearTimeout(this._activeTableRefreshTimer),
      this._refreshActiveTableFromSkeleton(_0xe7ef15),
      (this._activeTableRefreshTimer = setTimeout(() => {
        ((this._activeTableRefreshTimer = null),
          this._refreshActiveTableFromSkeleton(_0xe7ef15));
      }, 32)));
  }
  _refreshActiveTableForLayoutChange() {
    let _0x140eeb = this._activeTable;
    if (_0x140eeb) {
      if (this._lastPointerPoint) {
        let _0x371a54 = this._buildActiveTableAtPoint(
          this._lastPointerPoint["x"],
          this._lastPointerPoint["y"],
        );
        if (_0x371a54) {
          ((this._activeTable = _0x371a54), this._makeDirty());
          return;
        }
      }
      this._refreshActiveTableFromSkeleton(_0x140eeb.sourceTableId);
    }
  }
  _refreshActiveTableFromSkeleton(_0x3d88e9) {
    let _0x1d44ff = this._findTableSliceForSource(_0x3d88e9);
    if (!_0x1d44ff) {
      var _0x6f8e62;
      ((_0x6f8e62 = this._activeTable) == null
        ? undefined
        : _0x6f8e62.sourceTableId) === _0x3d88e9 &&
        ((this._activeTable = null), this._makeDirty());
      return;
    }
    ((this._activeTable = this._buildActiveTable(_0x1d44ff)),
      this._makeDirty());
  }
  _findTableSliceForSource(_0x233484) {
    let _0x68463a = [];
    for (let _0x224861 of this._collectSkeletonTables())
      (0, u.getTableIdAndSliceIndex)(_0x224861.tableId).tableId === _0x233484 &&
        _0x68463a.push({
          pageIndex: _0x224861.pageIndex,
          rect: _0x224861.rect,
          segmentId: _0x224861.segmentId,
          tableId: _0x224861.tableId,
        });
    return (
      _0x68463a.find((_0x293d23) => {
        var _0x1c12ed;
        return (
          _0x293d23.tableId ===
          ((_0x1c12ed = this._activeTable) == null
            ? undefined
            : _0x1c12ed.tableSliceId)
        );
      }) ??
      (this._lastPointerPoint
        ? _0x68463a.find((_0xae311c) =>
            this._isPointInTableControlRect(
              _0xae311c,
              this._lastPointerPoint["x"],
              this._lastPointerPoint["y"],
            ),
          )
        : null) ??
      _0x68463a[0] ??
      null
    );
  }
  _isSourceTableSplitAcrossPages(_0x28a053) {
    let _0x2d8275 = 0;
    for (let _0x1b87be of this._collectSkeletonTables())
      if (
        (0, u.getTableIdAndSliceIndex)(_0x1b87be.tableId).tableId ===
          _0x28a053 &&
        (_0x2d8275++, _0x2d8275 > 1)
      )
        return true;
    return false;
  }
  _isPointInTableControlRect(_0x40c669, _0x493038, _0x5f9752) {
    let _0x20edcd = this._findSkeletonTable(
      _0x40c669.pageIndex,
      _0x40c669.tableId,
      _0x40c669.segmentId,
    );
    if (!_0x20edcd) return false;
    let _0x3f1a7a = this._getCurrentZoom(),
      _0x17b46b = Sr(_0x20edcd.table).reduce(
        (_0x3e9fb5, _0x37241a) => _0x3e9fb5 + _0x37241a,
        0,
      ),
      _0x1bb5cc = this._buildViewportState(
        _0x40c669,
        _0x20edcd.page,
        _0x20edcd.table,
        _0x17b46b,
        _0x3f1a7a,
      ),
      _0x7941e3 = {
        bottom: _0x40c669.rect["bottom"],
        left: _0x1bb5cc.viewportLeft - 16 / _0x3f1a7a,
        right: _0x1bb5cc.viewportLeft + _0x1bb5cc.viewportWidth,
        top: _0x40c669.rect["top"] - 22 / _0x3f1a7a,
      };
    if (
      _0x493038 >= _0x7941e3.left &&
      _0x493038 <= _0x7941e3.right &&
      _0x5f9752 >= _0x7941e3.top &&
      _0x5f9752 <= _0x7941e3.bottom
    )
      return true;
    let _0x3bd625 = An({
      contentWidth: _0x17b46b,
      leadingInsetLeft: _0x1bb5cc.leadingInsetLeft,
      overflowWidthThreshold: _0x1bb5cc.overflowWidthThreshold,
      scrollLeft: 0,
      tableRect: {
        height: _0x40c669.rect["bottom"] - _0x40c669.rect["top"],
        width: _0x40c669.rect["right"] - _0x40c669.rect["left"],
        x: _0x40c669.rect["left"],
        y: _0x40c669.rect["top"],
      },
      trailingInsetRight: _0x1bb5cc.trailingInsetRight,
      viewportLeft: _0x1bb5cc.viewportLeft,
      viewportWidth: _0x1bb5cc.viewportWidth,
      zoom: _0x3f1a7a,
    });
    return (
      !!_0x3bd625 &&
      Mn(_0x3bd625, _0x40c669.rect["bottom"], _0x493038, _0x5f9752)
    );
  }
  _buildActiveTableAtPoint(_0x1dc472, _0x51d76d) {
    for (let _0x6f1f36 of this._collectSkeletonTables())
      if (
        this._isPointInTableControlRect(
          {
            pageIndex: _0x6f1f36.pageIndex,
            rect: _0x6f1f36.rect,
            segmentId: _0x6f1f36.segmentId,
            tableId: _0x6f1f36.tableId,
          },
          _0x1dc472,
          _0x51d76d,
        )
      )
        return this._buildActiveTable({
          pageIndex: _0x6f1f36.pageIndex,
          rect: _0x6f1f36.rect,
          segmentId: _0x6f1f36.segmentId,
          tableId: _0x6f1f36.tableId,
        });
    return null;
  }
  _buildTableMoveHitAtPoint(_0x501cc7, _0x28ebef) {
    return null;
  }
  _hitTest(_0x2c1300, _0x194042) {
    if (!this._canEditDocument() || !this._activeTable) return null;
    let _0x2523b3 = z(this._getTriggerInput()),
      _0x297682 = nr(_0x2523b3, _0x2c1300, _0x194042);
    return (_0x297682 == null ? undefined : _0x297682.kind) ===
      "resize-column" ||
      (_0x297682 == null ? undefined : _0x297682.kind) === "resize-row"
      ? _0x297682
      : (ir(_0x2523b3, _0x2c1300, _0x194042) ?? _0x297682);
  }
  _hitTestHoverTrigger(_0xebed9d, _0x1344e6) {
    if (!this._canEditDocument() || !this._activeTable) return null;
    let _0x1f5262 = z(this._getTriggerInput()),
      _0x483815 = nr(_0x1f5262, _0xebed9d, _0x1344e6);
    return (_0x483815 == null ? undefined : _0x483815.kind) ===
      "resize-column" ||
      (_0x483815 == null ? undefined : _0x483815.kind) === "resize-row"
      ? _0x483815
      : (rr(_0x1f5262, _0xebed9d, _0x1344e6) ?? _0x483815);
  }
  _hitScrollbar(_0x15a265, _0xa350f4) {
    let _0x531e86 = this._getScrollbarGeometry();
    return _0x531e86 ? jn(_0x531e86, _0x15a265, _0xa350f4) : null;
  }
  _getScrollbarGeometry() {
    return this._buildScrollbarGeometry(this._getScrollbarAppearance());
  }
  _buildScrollbarGeometry(_0x40558f) {
    if (!this._activeTable) return null;
    let _0x3983df = this._viewportService["getState"](
      this._context["unitId"],
      this._activeTable["sourceTableId"],
    );
    return _0x3983df
      ? An({
          appearance: _0x40558f,
          contentWidth: _0x3983df.contentWidth,
          leadingInsetLeft: _0x3983df.leadingInsetLeft,
          overflowWidthThreshold: _0x3983df.overflowWidthThreshold,
          scrollLeft: _0x3983df.scrollLeft,
          tableRect: W(this._activeTable["input"]),
          trailingInsetRight: _0x3983df.trailingInsetRight,
          viewportLeft: _0x3983df.viewportLeft,
          viewportWidth: _0x3983df.viewportWidth,
          zoom: this._getCurrentZoom(),
        })
      : null;
  }
  _getScrollbarAppearance() {
    if (this._scrollbarDragState) return "active";
    if (!this._lastPointerPoint) return "idle";
    let _0x35b1fd = this._buildScrollbarGeometry("idle");
    return _0x35b1fd &&
      jn(_0x35b1fd, this._lastPointerPoint["x"], this._lastPointerPoint["y"])
      ? "hover"
      : "idle";
  }
  _startOrJumpScrollbar(_0x3343f7, _0x3c2f15) {
    if (!this._activeTable) return;
    let _0x486ecb = this._getScrollbarGeometry();
    if (!_0x486ecb) return;
    let _0x39315a = this._activeTable["sourceTableId"],
      _0x2df41c = this._viewportService["getState"](
        this._context["unitId"],
        _0x39315a,
      );
    if (!_0x2df41c) return;
    if (_0x3343f7 === "thumb") {
      ((this._scrollbarDragState = {
        startScrollLeft: _0x2df41c.scrollLeft,
        startX: _0x3c2f15,
        tableId: _0x39315a,
        thumbTravel: Math.max(
          0,
          _0x486ecb.track["width"] - _0x486ecb.thumb["width"],
        ),
      }),
        this._setTableCursor(u.CURSOR_TYPE["POINTER"]),
        this._makeDirty());
      return;
    }
    let _0x49b02d = _0x3c2f15 < _0x486ecb.thumb["x"] ? -1 : 1,
      _0x4ed7ba = _0x2df41c.scrollLeft,
      _0x58c63f = this._viewportService["setScrollLeft"](
        this._context["unitId"],
        _0x39315a,
        _0x2df41c.scrollLeft + _0x49b02d * _0x2df41c.viewportWidth,
      );
    ((this._activeTable = this._refreshActiveTableViewport(this._activeTable)),
      _0x58c63f !== _0x4ed7ba &&
        (this._refreshNativeSelection(), this._makeDirty()));
  }
  _updateScrollbarDrag(_0x80780) {
    var _0x369df9, _0x3ba028, _0x512fb5;
    let _0x198fdd = this._scrollbarDragState;
    if (!_0x198fdd) return;
    let _0x264ccc =
      ((_0x369df9 = this._viewportService["getState"](
        this._context["unitId"],
        _0x198fdd.tableId,
      )) == null
        ? undefined
        : _0x369df9.scrollLeft) ?? 0;
    (this._viewportService["setScrollLeft"](
      this._context["unitId"],
      _0x198fdd.tableId,
      _0x198fdd.startScrollLeft,
    ),
      this._viewportService["scrollByScrollbarTravel"](
        this._context["unitId"],
        _0x198fdd.tableId,
        _0x80780 - _0x198fdd.startX,
        _0x198fdd.thumbTravel,
      ),
      ((_0x3ba028 = this._activeTable) == null
        ? undefined
        : _0x3ba028.sourceTableId) === _0x198fdd.tableId &&
        (this._activeTable = this._refreshActiveTableViewport(
          this._activeTable,
        )),
      (((_0x512fb5 = this._viewportService["getState"](
        this._context["unitId"],
        _0x198fdd.tableId,
      )) == null
        ? undefined
        : _0x512fb5.scrollLeft) ?? 0) !== _0x264ccc &&
        this._refreshNativeSelection());
  }
  _updateSelectionDrag(_0x4cf474) {
    let _0x3495a7 = this._selectionDragState;
    if (
      !_0x3495a7 ||
      (!_0x3495a7.structural &&
        Math.hypot(
          _0x4cf474.x - _0x3495a7.startX,
          _0x4cf474.y - _0x3495a7.startY,
        ) < 4)
    )
      return false;
    let _0x3be940 = this._getCellAtPoint(_0x4cf474.x, _0x4cf474.y);
    if (
      !_0x3be940 ||
      _0x3be940.tableId !== _0x3495a7.tableId ||
      (!_0x3495a7.structural &&
        _0x3be940.row === _0x3495a7.anchorRow &&
        _0x3be940.column === _0x3495a7.anchorColumn)
    )
      return false;
    let _0x36d7ac = Math.min(_0x3495a7.anchorRow, _0x3be940.row),
      _0x500aed = Math.max(_0x3495a7.anchorRow, _0x3be940.row),
      _0x26d9ee = Math.min(_0x3495a7.anchorColumn, _0x3be940.column),
      _0x27b45b = Math.max(_0x3495a7.anchorColumn, _0x3be940.column),
      _0xbf3e = !_0x3495a7.structural;
    return (
      (_0x3495a7.structural = true),
      _0xbf3e && this._docSelectionRenderService["cancelPointerSelection"](),
      this._selectionService["setNativeSelectionSuppressed"](true),
      this._selectionService["setStructuralSelection"](
        {
          kind:
            _0x36d7ac === _0x500aed && _0x26d9ee === _0x27b45b
              ? e.DocsTableSelectionKind["Cell"]
              : e.DocsTableSelectionKind["Range"],
          segmentId: _0x3495a7.segmentId,
          tableId: _0x3495a7.tableId,
          startRow: _0x36d7ac,
          endRow: _0x500aed,
          startColumn: _0x26d9ee,
          endColumn: _0x27b45b,
        },
        { clearNativeSelection: true, preserveOnTextSelection: true },
      ),
      this._makeDirty(),
      true
    );
  }
  _updateSelectionDragAutoScroll(_0x3c2df6) {
    let _0x18c4cb = this._selectionDragState;
    if (
      !_0x18c4cb ||
      ((!this._activeTable ||
        this._activeTable["sourceTableId"] !== _0x18c4cb.tableId) &&
        (this._activeTable =
          this._buildActiveTableAtPoint(_0x3c2df6.x, _0x3c2df6.y) ??
          this._activeTable),
      !this._activeTable ||
        this._activeTable["sourceTableId"] !== _0x18c4cb.tableId)
    )
      return false;
    let _0x37b788 = W(this._activeTable["input"]);
    return _0x3c2df6.y < _0x37b788.y ||
      _0x3c2df6.y > _0x37b788.y + _0x37b788.height ||
      !this._viewportService["scrollByDragEdge"](
        this._context["unitId"],
        _0x18c4cb.tableId,
        _0x3c2df6.x - _0x37b788.x,
        32 / this._getCurrentZoom(),
        24 / this._getCurrentZoom(),
      )
      ? false
      : ((this._activeTable = this._refreshActiveTableViewport(
          this._activeTable,
        )),
        this._refreshNativeSelection(),
        this._makeDirty(),
        this._scheduleSelectionDragAutoScroll(),
        true);
  }
  _scheduleSelectionDragAutoScroll() {
    this._selectionAutoScrollTimer ??= setTimeout(() => {
      ((this._selectionAutoScrollTimer = null),
        !(!this._selectionDragState || !this._lastPointerPoint) &&
          this._updateSelectionDragAutoScroll(this._lastPointerPoint));
    }, 16);
  }
  _stopSelectionDragAutoScroll() {
    this._selectionAutoScrollTimer != null &&
      (clearTimeout(this._selectionAutoScrollTimer),
      (this._selectionAutoScrollTimer = null));
  }
  _refreshNativeSelection() {
    this._docSelectionManagerService["refreshSelection"]();
  }
  _syncFloatingMenuFromSelection() {
    let _0x901351 = this._selection;
    if (
      !(_0x901351 != null && _0x901351.tableId) ||
      !this._canEditDocument(_0x901351.tableId) ||
      !Fr(_0x901351)
    ) {
      (this._floatingMenuService["hide"](), this._hideFloatingMenuPopup());
      return;
    }
    let _0x21006a = zr(_0x901351)
        ? this._getStructuralFloatingMenuAnchorRect(_0x901351)
        : this._getFloatingMenuAnchorRect(_0x901351),
      _0x192f3c = this._getFloatingMenuAnchorRect(_0x901351);
    if (!_0x21006a || !_0x192f3c) {
      (this._floatingMenuService["hide"](), this._hideFloatingMenuPopup());
      return;
    }
    let _0x5b5ba9 =
        _0x901351.kind === e.DocsTableSelectionKind["Row"]
          ? "row"
          : _0x901351.kind === e.DocsTableSelectionKind["Column"]
            ? "column"
            : null,
      _0x11614b = this._resolveFloatingMenuTextStyle(_0x901351),
      _0x790dcd = this._resolveFloatingMenuVerticalAlign(_0x901351);
    (this._floatingMenuService["setState"]({
      anchorRect: _0x21006a,
      selection: {
        endColumn: _0x901351.endColumn,
        endRow: _0x901351.endRow,
        startColumn: _0x901351.startColumn,
        startRow: _0x901351.startRow,
        tableId: _0x901351.tableId,
      },
      mergeAction: this._resolveFloatingMenuMergeAction(_0x901351),
      selectionKind: _0x901351.kind,
      selectionRect: _0x192f3c,
      showDeleteAction: _0x5b5ba9 != null,
      tableId: _0x901351.tableId,
      topLeftCell: {
        column: Math.min(_0x901351.startColumn, _0x901351.endColumn),
        row: Math.min(_0x901351.startRow, _0x901351.endRow),
      },
      verticalAlign: _0x790dcd,
      typeIcon: _0x11614b.icon,
      typeValue: _0x11614b.value,
      unitId: this._context["unitId"],
      visible: true,
      deleteTarget: _0x5b5ba9,
    }),
      this._ensureFloatingMenuPopup(_0x21006a));
  }
  _canEditDocument(
    _0x1045ca = (() => {
      var _0x3d1c56;
      return (_0x3d1c56 = this._activeTable) == null
        ? undefined
        : _0x3d1c56.sourceTableId;
    })(),
  ) {
    return (0, l.canEditDocumentTargets)(
      this._permissionService,
      this._context["unitId"],
      _0x1045ca
        ? [
            ...(0, l.getDocumentEntityParentPermissionObjectIds)(
              this._context["unit"],
              "",
              "table",
              _0x1045ca,
            ),
            (0, l.getDocumentEntityPermissionObjectId)("", "table", _0x1045ca),
          ]
        : [],
    );
  }
  _syncParagraphTableMenuFromActiveTable() {
    let _0x5e7799 = this._activeTable;
    if (!_0x5e7799) return;
    let _0x9add72 = W(_0x5e7799.input);
    this._docParagraphMenuService["showTableMenu"]({
      pageIndex: _0x5e7799.pageIndex,
      rect: {
        bottom: _0x9add72.y + _0x9add72.height,
        left: _0x9add72.x,
        right: _0x9add72.x + _0x9add72.width,
        top: _0x9add72.y,
      },
      tableId: _0x5e7799.sourceTableId,
    });
  }
  _setHoveredTrigger(_0x4e3a30) {
    this._isSameTrigger(this._hoveredTrigger, _0x4e3a30) ||
      ((this._hoveredTrigger = _0x4e3a30), this._makeDirty());
  }
  _setTooltip(_0x4d095a) {
    var _0x26ce6b, _0x1fb7bb, _0x82fce2;
    (((_0x26ce6b = this._tooltip) == null ? undefined : _0x26ce6b.label) !==
      (_0x4d095a == null ? undefined : _0x4d095a.label) ||
      ((_0x1fb7bb = this._tooltip) == null ? undefined : _0x1fb7bb.x) !==
        (_0x4d095a == null ? undefined : _0x4d095a.x) ||
      ((_0x82fce2 = this._tooltip) == null ? undefined : _0x82fce2.y) !==
        (_0x4d095a == null ? undefined : _0x4d095a.y)) &&
      ((this._tooltip = _0x4d095a), this._makeDirty());
  }
  _shouldKeepActiveTableForControls() {
    return this._shouldKeepActiveTableForFloatingMenu()
      ? true
      : !this._activeTable || !this._lastPointerPoint
        ? false
        : this._isPointWithinStructuralControlZone(
            this._lastPointerPoint["x"],
            this._lastPointerPoint["y"],
          );
  }
  _isPointInActiveControlZone(_0x487bc4, _0x476630) {
    return this._isPointWithinStructuralControlZone(_0x487bc4, _0x476630);
  }
  _isPointWithinStructuralControlZone(_0x2cc0ba, _0x2401dd) {
    var _0x3d6ca8, _0x3c6aef;
    if (!this._activeTable) return false;
    let _0x4fbc7a = this._activeTable["input"],
      _0x45ccbe =
        ((_0x3d6ca8 = this._context) == null ||
        (_0x3d6ca8 = _0x3d6ca8.scene) == null ||
        (_0x3c6aef = _0x3d6ca8.getAncestorScale) == null
          ? undefined
          : _0x3c6aef.call(_0x3d6ca8).scaleX) ||
        _0x4fbc7a.zoom ||
        1,
      _0x5c28c5 = W(_0x4fbc7a),
      _0x2575cc = jr(_0x4fbc7a),
      _0xf289dc = G(_0x4fbc7a);
    if (
      Z(
        {
          x: _0x2575cc - 16 / _0x45ccbe,
          y: _0x5c28c5.y - 16 / _0x45ccbe,
          width: Math.max(0, _0xf289dc - _0x2575cc) + 16 / _0x45ccbe,
          height: _0x5c28c5.height + 16 / _0x45ccbe,
        },
        _0x2cc0ba,
        _0x2401dd,
      )
    )
      return true;
    let _0x4f1d6b = this._getScrollbarGeometry();
    return (
      !!_0x4f1d6b &&
      Mn(_0x4f1d6b, _0x5c28c5.y + _0x5c28c5.height, _0x2cc0ba, _0x2401dd)
    );
  }
  _shouldKeepActiveTableForSelection() {
    let _0x16dc12 = this._selection;
    return (
      !!this._activeTable &&
      !!(_0x16dc12 != null && _0x16dc12.tableId) &&
      _0x16dc12.tableId === this._activeTable["sourceTableId"] &&
      (_0x16dc12.kind === e.DocsTableSelectionKind["Row"] ||
        _0x16dc12.kind === e.DocsTableSelectionKind["Column"] ||
        _0x16dc12.kind === e.DocsTableSelectionKind["Table"] ||
        Fr(_0x16dc12))
    );
  }
  _shouldKeepActiveTableForFloatingMenu() {
    if (!this._activeTable) return false;
    let _0x2e80e2 = this._floatingMenuService["getState"]();
    return (
      (!!(_0x2e80e2 != null && _0x2e80e2.visible) ||
        !!(_0x2e80e2 != null && _0x2e80e2.hoverActive)) &&
      !!_0x2e80e2.tableId &&
      _0x2e80e2.tableId === this._activeTable["sourceTableId"]
    );
  }
  _shouldKeepActiveTableOnPointerLeave() {
    return (
      this._shouldKeepActiveTableForSelection() ||
      this._shouldKeepActiveTableForControls()
    );
  }
  _isSameTrigger(_0xac514e, _0x329645) {
    return (
      (_0xac514e == null ? undefined : _0xac514e.kind) ===
        (_0x329645 == null ? undefined : _0x329645.kind) &&
      (_0xac514e == null ? undefined : _0xac514e.tableId) ===
        (_0x329645 == null ? undefined : _0x329645.tableId) &&
      (_0xac514e == null ? undefined : _0xac514e.row) ===
        (_0x329645 == null ? undefined : _0x329645.row) &&
      (_0xac514e == null ? undefined : _0xac514e.column) ===
        (_0x329645 == null ? undefined : _0x329645.column) &&
      (_0xac514e == null ? undefined : _0xac514e.position) ===
        (_0x329645 == null ? undefined : _0x329645.position)
    );
  }
  _getTriggerInitialSize(_0x497869) {
    var _0x595209;
    if (!this._activeTable) return null;
    let { input: _0x17426b } = this._activeTable;
    if (_0x497869.kind === "resize-column") {
      var _0x23fb11;
      let _0x10d563 =
        ((_0x23fb11 = _0x17426b.columnIndices) == null
          ? undefined
          : _0x23fb11.findIndex(
              (_0x5244d2) => _0x5244d2 === _0x497869.column,
            )) ?? _0x497869.column;
      return _0x10d563 == null ? null : _0x17426b.columnWidths[_0x10d563];
    }
    let _0xc272a =
      ((_0x595209 = _0x17426b.rowIndices) == null
        ? undefined
        : _0x595209.findIndex((_0x27b903) => _0x27b903 === _0x497869.row)) ??
      _0x497869.row;
    return _0xc272a == null ? null : _0x17426b.rowHeights[_0xc272a];
  }
  _selectTable(_0x436de6) {
    var _0x3a2a87, _0x2eda79, _0x159314, _0x8fa4fa;
    if (!this._activeTable) return;
    let { input: _0x4fbbe6 } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: e.DocsTableSelectionKind["Table"],
      segmentId: this._activeTable["segmentId"],
      tableId: _0x436de6,
      startRow:
        ((_0x3a2a87 = _0x4fbbe6.rowIndices) == null
          ? undefined
          : _0x3a2a87[0]) ?? 0,
      endRow:
        ((_0x2eda79 = _0x4fbbe6.rowIndices) == null
          ? undefined
          : _0x2eda79[_0x4fbbe6.rowIndices["length"] - 1]) ??
        _0x4fbbe6.rowHeights["length"] - 1,
      startColumn:
        ((_0x159314 = _0x4fbbe6.columnIndices) == null
          ? undefined
          : _0x159314[0]) ?? 0,
      endColumn:
        ((_0x8fa4fa = _0x4fbbe6.columnIndices) == null
          ? undefined
          : _0x8fa4fa[_0x4fbbe6.columnIndices["length"] - 1]) ??
        _0x4fbbe6.columnWidths["length"] - 1,
    });
  }
  _selectRow(_0x2fccc3, _0x560af1) {
    var _0x563eb4, _0x14b20f;
    if (!this._activeTable) return;
    let { input: _0x23d58c } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: e.DocsTableSelectionKind["Row"],
      segmentId: this._activeTable["segmentId"],
      tableId: _0x2fccc3,
      startRow: _0x560af1,
      endRow: _0x560af1,
      startColumn:
        ((_0x563eb4 = _0x23d58c.columnIndices) == null
          ? undefined
          : _0x563eb4[0]) ?? 0,
      endColumn:
        ((_0x14b20f = _0x23d58c.columnIndices) == null
          ? undefined
          : _0x14b20f[_0x23d58c.columnIndices["length"] - 1]) ??
        _0x23d58c.columnWidths["length"] - 1,
    });
  }
  _selectColumn(_0x3edded, _0x1a22ad) {
    var _0x30b070, _0x1b192c;
    if (!this._activeTable) return;
    let { input: _0x55673a } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: e.DocsTableSelectionKind["Column"],
      segmentId: this._activeTable["segmentId"],
      tableId: _0x3edded,
      startRow:
        ((_0x30b070 = _0x55673a.rowIndices) == null
          ? undefined
          : _0x30b070[0]) ?? 0,
      endRow:
        ((_0x1b192c = _0x55673a.rowIndices) == null
          ? undefined
          : _0x1b192c[_0x55673a.rowIndices["length"] - 1]) ??
        _0x55673a.rowHeights["length"] - 1,
      startColumn: _0x1a22ad,
      endColumn: _0x1a22ad,
    });
  }
  _setResizeCursor(_0x3f4a31) {
    this._setTableCursor(
      _0x3f4a31.kind === "resize-column" ? "ew-resize" : "ns-resize",
    );
  }
  _getTriggerInput() {
    return {
      ...this._getActiveInputWithCurrentZoom(),
      hoverCell: this._hoverCell ?? null,
      hoverColumn: this._hoverColumn ?? null,
      hoverRow: this._hoverRow ?? null,
      zoom: this._getCurrentZoom(),
    };
  }
  _getActiveInputWithCurrentZoom() {
    return { ...this._activeTable["input"], zoom: this._getCurrentZoom() };
  }
  _getCurrentZoom() {
    return this._context["scene"].getAncestorScale().scaleX || 1;
  }
  _setTableCursor(_0x4bb4e2) {
    ((this._cursorBeforeTableInteraction ??=
      this._context["scene"].getCursor()),
      this._context["scene"].setCursor(_0x4bb4e2));
  }
  _restoreTableCursor() {
    this._cursorBeforeTableInteraction != null &&
      (this._context["scene"].setCursor(this._cursorBeforeTableInteraction),
      (this._cursorBeforeTableInteraction = null));
  }
  _resetTableCursor() {
    ((this._cursorBeforeTableInteraction = null),
      this._context["scene"].resetCursor());
  }
  _shouldPreserveFloatingHover(_0x429617, _0x24ae97) {
    return this._activeTable
      ? sr(z(this._getTriggerInput()), _0x429617, _0x24ae97) ||
        this._isPointWithinFloatingMenuHoverBridge(_0x429617, _0x24ae97) ||
        (this._borderPopover &&
          Z(Vr(this._borderPopover), _0x429617, _0x24ae97))
        ? true
        : this._sortPopover != null &&
          Z(Hr(this._sortPopover), _0x429617, _0x24ae97)
      : false;
  }
  _isPointWithinFloatingMenuHoverBridge(_0x25ea6f, _0x4a6ccc) {
    if (!this._activeTable) return false;
    let _0x1f256a = this._floatingMenuService["getState"]();
    if (
      !(_0x1f256a != null && _0x1f256a.visible) ||
      !_0x1f256a.anchorRect ||
      _0x1f256a.tableId !== this._activeTable["sourceTableId"]
    )
      return false;
    let _0x41afb5 = this._getCurrentZoom(),
      _0x5b8bf1 = 16 / _0x41afb5,
      _0x5a4ffb = W(this._activeTable["input"]),
      _0x4cdb89 = jr(this._activeTable["input"]),
      _0xf79542 = G(this._activeTable["input"]),
      _0x14ef5f = Math.min(_0x1f256a.anchorRect["left"], _0x4cdb89) - _0x5b8bf1,
      _0x4f2084 =
        Math.max(_0x1f256a.anchorRect["right"], _0xf79542) + _0x5b8bf1,
      _0x34221c =
        Math.min(_0x1f256a.anchorRect["top"], _0x5a4ffb.y - 16 / _0x41afb5) -
        _0x5b8bf1,
      _0x205014 = _0x5a4ffb.y;
    return (
      _0x25ea6f >= _0x14ef5f &&
      _0x25ea6f <= _0x4f2084 &&
      _0x4a6ccc >= _0x34221c &&
      _0x4a6ccc <= _0x205014
    );
  }
  _getTableDropTargetAtPoint(_0x677781, _0x48c825) {
    return pn(
      Array.from(
        this._docEventManagerService["paragraphBounds"].values(),
      ).flatMap((_0x275437) => {
        var _0x2b3934;
        return (
          (_0x2b3934 = _0x275437.rects) != null && _0x2b3934.length
            ? _0x275437.rects
            : [_0x275437.rect]
        ).map((_0x34c53f) => ({
          paragraphEnd: _0x275437.paragraphEnd,
          paragraphStart: _0x275437.paragraphStart,
          rect: _0x34c53f,
        }));
      }),
      { x: _0x677781, y: _0x48c825 },
    );
  }
  _draw(_0x31a5f8) {
    var _0x1c47d7;
    if (!this._activeTable) return;
    if (!this._canEditDocument()) {
      (_0x31a5f8.save(),
        this._drawSelection(_0x31a5f8),
        this._drawScrollbar(_0x31a5f8),
        _0x31a5f8.restore());
      return;
    }
    let _0x25947d = z(this._getTriggerInput());
    (_0x31a5f8.save(), this._drawStructuralHeaderBands(_0x31a5f8));
    for (let _0x2bb323 of _0x25947d)
      Xn(_0x2bb323.kind)
        ? this._drawInsertTrigger(_0x31a5f8, _0x2bb323)
        : _0x2bb323.kind === "row-header" || _0x2bb323.kind === "column-header"
          ? this._drawStructuralHeaderTrigger(_0x31a5f8, _0x2bb323)
          : _0x2bb323.kind === "table-select" &&
            this._drawTableSelectTrigger(_0x31a5f8, _0x2bb323);
    (this._drawSelection(_0x31a5f8),
      this._drawMovePreview(_0x31a5f8),
      this._drawSortPopover(_0x31a5f8),
      this._drawTooltip(_0x31a5f8));
    let _0x1c18a7 =
      ((_0x1c47d7 = this._dragState) == null ? undefined : _0x1c47d7.trigger) ??
      this._hoveredTrigger;
    (((_0x1c18a7 == null ? undefined : _0x1c18a7.kind) === "resize-column" ||
      (_0x1c18a7 == null ? undefined : _0x1c18a7.kind) === "resize-row") &&
      this._drawResizeGuide(_0x31a5f8, _0x1c18a7, this._dragState ? 0.9 : 0),
      this._drawScrollbar(_0x31a5f8),
      _0x31a5f8.restore());
  }
  _drawStructuralHeaderBands(_0x2f8e53) {
    if (!this._activeTable) return;
    let _0x4a2856 = this._getTriggerInput(),
      _0x1dac1d = 10 / (_0x4a2856.zoom ?? 1),
      _0x53eee1 = W(_0x4a2856),
      _0x17f330 = jr(_0x4a2856),
      _0x16d02e = G(_0x4a2856),
      _0x2512c7 = U(
        {
          x: _0x17f330,
          y: _0x4a2856.tableRect["y"] - _0x1dac1d,
          width: Math.max(0, _0x16d02e - _0x17f330),
          height: _0x1dac1d,
        },
        this._context["scene"],
      ),
      _0x4698f8 = U(
        {
          x: _0x17f330 - _0x1dac1d,
          y: _0x4a2856.tableRect["y"],
          width: _0x1dac1d,
          height: _0x53eee1.height,
        },
        this._context["scene"],
      );
    (_0x2f8e53.save(),
      (_0x2f8e53.fillStyle = "#f5f6f7"),
      _0x2f8e53.fillRect(
        _0x2512c7.x,
        _0x2512c7.y,
        _0x2512c7.width,
        _0x2512c7.height,
      ),
      _0x2f8e53.fillRect(
        _0x4698f8.x,
        _0x4698f8.y,
        _0x4698f8.width,
        _0x4698f8.height,
      ),
      _0x2f8e53.restore());
  }
  _drawStructuralHeaderTrigger(_0x17084e, _0x1bf582) {
    let _0x3b89e9 = U(_0x1bf582.rect, this._context["scene"]),
      _0xdb2d1e = this._isSameTrigger(this._hoveredTrigger, _0x1bf582),
      _0x71e646 = this._isStructuralHeaderSelected(_0x1bf582),
      _0x412e80 = this._isStructuralHeaderDeleteDangerActive(_0x1bf582);
    (_0x17084e.save(),
      (_0x17084e.fillStyle = _0x412e80
        ? "rgba(217, 48, 37, 0.16)"
        : _0x71e646
          ? "rgba(47, 102, 255, 0.18)"
          : _0xdb2d1e
            ? "#d7dbe0"
            : "#eceff1"),
      _0x17084e.fillRect(
        _0x3b89e9.x,
        _0x3b89e9.y,
        _0x3b89e9.width,
        _0x3b89e9.height,
      ),
      _0x17084e.restore());
  }
  _drawSelection(_0x43fe90) {
    if (
      !this._activeTable ||
      !this._selection ||
      this._selection["tableId"] !== this._activeTable["sourceTableId"] ||
      !In(this._selection, {
        suppressOverlay: this._hasActivePointerInteraction(),
      })
    )
      return;
    let _0x20cb79 = this._getSelectionRect(this._selection);
    if (!_0x20cb79) return;
    let _0x1af564 = this._clipRectToViewport(_0x20cb79);
    if (!_0x1af564) return;
    let _0x2078e8 = U(_0x1af564, this._context["scene"]),
      _0x812fe3 = this._getTableAccentColor();
    (_0x43fe90.save(),
      (_0x43fe90.fillStyle = new r.ColorKit(_0x812fe3)
        .setAlpha(0.07)
        .toRgbString()),
      _0x43fe90.fillRect(
        _0x2078e8.x,
        _0x2078e8.y,
        _0x2078e8.width,
        _0x2078e8.height,
      ),
      (_0x43fe90.strokeStyle = _0x812fe3),
      (_0x43fe90.lineWidth = 1),
      _0x43fe90.strokeRect(
        _0x2078e8.x,
        _0x2078e8.y,
        _0x2078e8.width,
        _0x2078e8.height,
      ),
      _0x43fe90.restore());
  }
  _hasActivePointerInteraction() {
    return (
      this._dragState != null ||
      this._moveDragState != null ||
      this._rowColumnMoveState != null ||
      this._pendingHandleSelection != null
    );
  }
  _drawMovePreview(_0x2d3d38) {
    if (this._rowColumnMoveTarget) {
      let _0x4148f8 = this._rowColumnMoveTarget["rect"],
        _0x418c0f = H(_0x4148f8.x, _0x4148f8.y, this._context["scene"]),
        _0x10f181 = H(
          _0x4148f8.x + _0x4148f8.width,
          _0x4148f8.y + _0x4148f8.height,
          this._context["scene"],
        );
      (_0x2d3d38.save(),
        (_0x2d3d38.strokeStyle = pr),
        (_0x2d3d38.lineWidth = 2),
        _0x2d3d38.beginPath(),
        _0x2d3d38.moveTo(_0x418c0f.x, _0x418c0f.y),
        _0x2d3d38.lineTo(_0x10f181.x, _0x10f181.y),
        _0x2d3d38.stroke(),
        _0x2d3d38.restore());
      return;
    }
    if (this._moveDropTarget) {
      let _0x383510 = H(
          this._moveDropTarget["x"],
          this._moveDropTarget["y"],
          this._context["scene"],
        ),
        _0x1e11fd = H(
          this._moveDropTarget["x"] + this._moveDropTarget["width"],
          this._moveDropTarget["y"],
          this._context["scene"],
        );
      (_0x2d3d38.save(),
        (_0x2d3d38.strokeStyle = pr),
        (_0x2d3d38.lineWidth = 2),
        _0x2d3d38.beginPath(),
        _0x2d3d38.moveTo(_0x383510.x, _0x383510.y),
        _0x2d3d38.lineTo(_0x1e11fd.x, _0x1e11fd.y),
        _0x2d3d38.stroke(),
        (_0x2d3d38.fillStyle = pr),
        _0x2d3d38.beginPath(),
        _0x2d3d38.arc(_0x383510.x, _0x383510.y, 3, 0, Math.PI * 2),
        _0x2d3d38.fill(),
        _0x2d3d38.beginPath(),
        _0x2d3d38.arc(_0x1e11fd.x, _0x1e11fd.y, 3, 0, Math.PI * 2),
        _0x2d3d38.fill(),
        _0x2d3d38.restore());
      return;
    }
    if (!this._moveDragPreview) return;
    let _0x324b5b = U(this._moveDragPreview["rect"], this._context["scene"]);
    (_0x2d3d38.save(),
      (_0x2d3d38.fillStyle = this._getTableAccentColor()),
      (_0x2d3d38.globalAlpha = 0.08),
      _0x2d3d38.fillRect(
        _0x324b5b.x,
        _0x324b5b.y,
        _0x324b5b.width,
        _0x324b5b.height,
      ),
      (_0x2d3d38.globalAlpha = 1),
      (_0x2d3d38.strokeStyle = this._getTableAccentColor()),
      (_0x2d3d38.lineWidth = 2),
      _0x2d3d38.setLineDash([6, 4]),
      _0x2d3d38.strokeRect(
        _0x324b5b.x,
        _0x324b5b.y,
        _0x324b5b.width,
        _0x324b5b.height,
      ),
      _0x2d3d38.restore());
  }
  _drawSortPopover(_0xd0f2b4) {
    if (!this._sortPopover) return;
    let _0x3c1c7f = Ur(),
      _0x3b49e7 = U(Hr(this._sortPopover), this._context["scene"]),
      _0x3ad828 = _0x3b49e7.height / _0x3c1c7f.length;
    (_0xd0f2b4.save(),
      (_0xd0f2b4.fillStyle = "#fff"),
      (_0xd0f2b4.strokeStyle = hr),
      (_0xd0f2b4.lineWidth = 1),
      (_0xd0f2b4.shadowColor = "rgba(60, 64, 67, 0.18)"),
      (_0xd0f2b4.shadowBlur = 12),
      q(
        _0xd0f2b4,
        _0x3b49e7.x,
        _0x3b49e7.y,
        _0x3b49e7.width,
        _0x3b49e7.height,
        8,
      ),
      _0xd0f2b4.fill(),
      (_0xd0f2b4.shadowBlur = 0),
      _0xd0f2b4.stroke(),
      (_0xd0f2b4.font = "12px Arial, sans-serif"),
      (_0xd0f2b4.fillStyle = gr),
      _0x3c1c7f.forEach((_0x46b844, _0x4445e5) => {
        let _0x909f9 = _0x3b49e7.y + _0x4445e5 * _0x3ad828;
        (this._drawSortOptionIcon(
          _0xd0f2b4,
          _0x46b844.direction,
          _0x3b49e7.x + 12,
          _0x909f9 + _0x3ad828 / 2 - 7,
        ),
          _0xd0f2b4.fillText(
            this._localeService["t"](_0x46b844.labelKey),
            _0x3b49e7.x + 36,
            _0x909f9 + _0x3ad828 / 2 + 4,
          ));
      }),
      _0xd0f2b4.restore());
  }
  _drawSortOptionIcon(_0x21c208, _0x35a0c4, _0x54d785, _0x45d8fe) {
    (_0x21c208.save(),
      (_0x21c208.strokeStyle = gr),
      (_0x21c208.lineWidth = 1.5),
      _0x21c208.beginPath(),
      _0x21c208.moveTo(_0x54d785 + 6, _0x45d8fe),
      _0x21c208.lineTo(_0x54d785 + 6, _0x45d8fe + 14),
      _0x21c208.moveTo(
        _0x54d785 + 2,
        _0x35a0c4 === "asc" ? _0x45d8fe + 4 : _0x45d8fe + 10,
      ),
      _0x21c208.lineTo(
        _0x54d785 + 6,
        _0x35a0c4 === "asc" ? _0x45d8fe : _0x45d8fe + 14,
      ),
      _0x21c208.lineTo(
        _0x54d785 + 10,
        _0x35a0c4 === "asc" ? _0x45d8fe + 4 : _0x45d8fe + 10,
      ),
      _0x21c208.stroke(),
      _0x21c208.restore());
  }
  _drawInsertTrigger(_0x3c5aaf, _0xa91c2d) {
    let _0x48457f = U(_0xa91c2d.rect, this._context["scene"]),
      _0x517a6c = this._isSameTrigger(this._hoveredTrigger, _0xa91c2d),
      _0x297670 = this._getInsertTriggerDocumentCenter(_0xa91c2d),
      _0x5d540c = _0x297670
        ? H(_0x297670.x, _0x297670.y, this._context["scene"])
        : {
            x: _0x48457f.x + _0x48457f.width / 2,
            y: _0x48457f.y + _0x48457f.height / 2,
          },
      _0x31c299 = _0x517a6c ? 12 : 4,
      _0x4406f4 = _0x31c299 / 2;
    (_0x3c5aaf.save(),
      _0x517a6c && this._drawInsertTriggerGuide(_0x3c5aaf, _0xa91c2d),
      (_0x3c5aaf.fillStyle = _0x517a6c ? "#fff" : vr),
      (_0x3c5aaf.strokeStyle = _0x517a6c ? this._getTableAccentColor() : vr),
      (_0x3c5aaf.lineWidth = _0x517a6c ? 1.5 : 1),
      _0x3c5aaf.beginPath(),
      _0x3c5aaf.arc(_0x5d540c.x, _0x5d540c.y, _0x4406f4, 0, Math.PI * 2),
      _0x3c5aaf.fill(),
      _0x517a6c && _0x3c5aaf.stroke(),
      _0x517a6c &&
        this._drawInsertTriggerPlus(
          _0x3c5aaf,
          _0x5d540c.x,
          _0x5d540c.y,
          _0x31c299,
        ),
      _0x3c5aaf.restore());
  }
  _drawInsertTriggerPlus(_0x326a93, _0x23feb6, _0x165aaa, _0x5d9c39) {
    let _0x3915c0 = Math.round(_0x23feb6),
      _0x5f0e81 = Math.round(_0x165aaa),
      _0x488771 = Math.max(Math.floor(_0x5d9c39 / 3), 3),
      _0x344b23 = Math.max(Math.round(_0x5d9c39 / 6), 2);
    (_0x326a93.save(),
      (_0x326a93.fillStyle = this._getTableAccentColor()),
      _0x326a93.fillRect(
        _0x3915c0 - _0x488771,
        _0x5f0e81 - Math.floor(_0x344b23 / 2),
        _0x488771 * 2,
        _0x344b23,
      ),
      _0x326a93.fillRect(
        _0x3915c0 - Math.floor(_0x344b23 / 2),
        _0x5f0e81 - _0x488771,
        _0x344b23,
        _0x488771 * 2,
      ),
      _0x326a93.restore());
  }
  _drawInsertTriggerGuide(_0x3117fe, _0x206d0b) {
    if (!this._activeTable) return;
    let { input: _0x208b74 } = this._activeTable,
      _0x528e0f = U(W(_0x208b74), this._context["scene"]),
      _0x66207c = H(
        Ar(_0x208b74),
        _0x208b74.tableRect["y"],
        this._context["scene"],
      ).x,
      _0x47bdf0 = H(
        G(_0x208b74),
        _0x208b74.tableRect["y"],
        this._context["scene"],
      ).x,
      _0x4723d3 = this._getInsertTriggerDocumentCenter(_0x206d0b),
      _0x37cbc8 = _0x4723d3
        ? H(_0x4723d3.x, _0x4723d3.y, this._context["scene"])
        : H(
            _0x206d0b.rect["x"] + _0x206d0b.rect["width"] / 2,
            _0x206d0b.rect["y"] + _0x206d0b.rect["height"] / 2,
            this._context["scene"],
          );
    if (
      (_0x3117fe.save(),
      (_0x3117fe.strokeStyle = this._getTableAccentColor()),
      (_0x3117fe.lineWidth = 2),
      _0x3117fe.beginPath(),
      _0x206d0b.kind === "row-insert-dot")
    ) {
      let _0x57f5bd = _0x37cbc8.y;
      (_0x3117fe.moveTo(_0x66207c, _0x57f5bd),
        _0x3117fe.lineTo(_0x47bdf0, _0x57f5bd));
    } else {
      if (_0x206d0b.kind === "column-insert-dot") {
        let _0x3898a8 = _0x37cbc8.x;
        (_0x3117fe.moveTo(_0x3898a8, _0x528e0f.y),
          _0x3117fe.lineTo(_0x3898a8, _0x528e0f.y + _0x528e0f.height));
      }
    }
    (_0x3117fe.stroke(), _0x3117fe.restore());
  }
  _getTableAccentColor() {
    var _0x64dbc7;
    return (
      ((_0x64dbc7 = this._themeService) == null
        ? undefined
        : _0x64dbc7.getColorFromTheme("primary.600")) ?? pr
    );
  }
  _getInsertTriggerDocumentCenter(_0x95742c) {
    if (!this._activeTable) return null;
    let { input: _0x4a7570 } = this._activeTable;
    if (_0x95742c.kind === "column-insert-dot" && _0x95742c.column != null) {
      let _0x207833 = Y(_0x4a7570.columnIndices, _0x95742c.column);
      return _0x207833 < 0
        ? null
        : {
            x: K(
              _0x4a7570,
              J(
                _0x4a7570.columnWidths["slice"](
                  0,
                  _0x95742c.position === "left" ? _0x207833 : _0x207833 + 1,
                ),
              ),
            ),
            y: _0x95742c.rect["y"] + _0x95742c.rect["height"] / 2,
          };
    }
    if (_0x95742c.kind === "row-insert-dot" && _0x95742c.row != null) {
      let _0x24a348 = Y(_0x4a7570.rowIndices, _0x95742c.row);
      return _0x24a348 < 0
        ? null
        : {
            x: _0x95742c.rect["x"] + _0x95742c.rect["width"] / 2,
            y:
              _0x4a7570.tableRect["y"] +
              J(
                _0x4a7570.rowHeights["slice"](
                  0,
                  _0x95742c.position === "above" ? _0x24a348 : _0x24a348 + 1,
                ),
              ),
          };
    }
    return {
      x: _0x95742c.rect["x"] + _0x95742c.rect["width"] / 2,
      y: _0x95742c.rect["y"] + _0x95742c.rect["height"] / 2,
    };
  }
  _getInsertTriggerIconRect(_0x2a88a5, _0x5f4f5b) {
    let _0x24a1e9 = this._getInsertTriggerDocumentCenter(_0x2a88a5),
      _0x45f38c = U(_0x2a88a5.rect, this._context["scene"]);
    if (!_0x24a1e9) return _0x45f38c;
    let _0x345cc7 = H(_0x24a1e9.x, _0x24a1e9.y, this._context["scene"]),
      _0x16f5e2 =
        _0x5f4f5b ??
        Math.max(_0x2a88a5.rect["width"], _0x2a88a5.rect["height"]);
    if (_0x5f4f5b != null) {
      if (_0x2a88a5.kind === "column-insert-dot")
        return {
          x: _0x345cc7.x - _0x16f5e2 / 2,
          y: _0x45f38c.y,
          width: _0x16f5e2,
          height: _0x16f5e2,
        };
      if (_0x2a88a5.kind === "row-insert-dot")
        return {
          x: _0x45f38c.x,
          y: _0x345cc7.y - _0x16f5e2 / 2,
          width: _0x16f5e2,
          height: _0x16f5e2,
        };
    }
    return U(
      {
        x: _0x24a1e9.x - _0x16f5e2 / 2,
        y: _0x24a1e9.y - _0x16f5e2 / 2,
        width: _0x16f5e2,
        height: _0x16f5e2,
      },
      this._context["scene"],
    );
  }
  _drawTableSelectTrigger(_0x1a08fe, _0x594ea5) {
    let _0xef589d = U(_0x594ea5.rect, this._context["scene"]);
    (_0x1a08fe.save(),
      (_0x1a08fe.fillStyle = "#fff"),
      (_0x1a08fe.strokeStyle = hr),
      (_0x1a08fe.lineWidth = 1),
      q(
        _0x1a08fe,
        _0xef589d.x,
        _0xef589d.y,
        _0xef589d.width,
        _0xef589d.height,
        5,
      ),
      _0x1a08fe.fill(),
      _0x1a08fe.stroke(),
      this._drawSixDotDragHandle(_0x1a08fe, _0xef589d),
      _0x1a08fe.restore());
  }
  _isStructuralHeaderSelected(_0x28f519) {
    return !this._selection ||
      !_0x28f519.tableId ||
      this._selection["tableId"] !== _0x28f519.tableId
      ? false
      : _0x28f519.kind === "row-header" && _0x28f519.row != null
        ? this._selection["kind"] === e.DocsTableSelectionKind["Row"] &&
          _0x28f519.row >= this._selection["startRow"] &&
          _0x28f519.row <= this._selection["endRow"]
        : _0x28f519.kind === "column-header" &&
          _0x28f519.column != null &&
          this._selection["kind"] === e.DocsTableSelectionKind["Column"] &&
          _0x28f519.column >= this._selection["startColumn"] &&
          _0x28f519.column <= this._selection["endColumn"];
  }
  _isStructuralHeaderDeleteDangerActive(_0x44c7bc) {
    return (
      !!this._floatingMenuService["getState"]().deleteHoverActive &&
      this._isStructuralHeaderSelected(_0x44c7bc)
    );
  }
  _drawSixDotDragHandle(_0x5ab37b, _0x4ee230) {
    let _0x3d1d99 = 4.6,
      _0x370830 = _0x4ee230.x + _0x4ee230.width / 2 - 5 / 2,
      _0x40a79a = _0x4ee230.y + _0x4ee230.height / 2 - _0x3d1d99;
    (_0x5ab37b.save(), (_0x5ab37b.fillStyle = vr));
    for (let _0x4b0eeb = 0; _0x4b0eeb < 2; _0x4b0eeb++)
      for (let _0x564002 = 0; _0x564002 < 3; _0x564002++)
        (_0x5ab37b.beginPath(),
          _0x5ab37b.arc(
            _0x370830 + _0x4b0eeb * 5,
            _0x40a79a + _0x564002 * _0x3d1d99,
            1.1,
            0,
            Math.PI * 2,
          ),
          _0x5ab37b.fill());
    _0x5ab37b.restore();
  }
  _drawIconHoverBg(_0x4d80ba, _0x302242, _0x184fb4) {
    this._isSameTrigger(this._hoveredTrigger, _0x184fb4) &&
      ((_0x4d80ba.fillStyle = _r),
      q(
        _0x4d80ba,
        _0x302242.x - 2,
        _0x302242.y - 2,
        _0x302242.width + 4,
        _0x302242.height + 4,
        5,
      ),
      _0x4d80ba.fill());
  }
  _drawScrollbar(_0x52677e) {
    let _0x5e55bf = this._getScrollbarGeometry();
    _0x5e55bf && Nn(_0x52677e, Or(_0x5e55bf, this._context["scene"]));
  }
  _drawResizeGuide(_0x5f0bdc, _0x42fdbc, _0x3be10e) {
    let _0x1b0db8 = this._getResizeGuideRect(_0x42fdbc);
    if (!_0x1b0db8) return;
    let _0x4fac02 = U(_0x1b0db8, this._context["scene"]);
    (_0x5f0bdc.save(),
      (_0x5f0bdc.fillStyle = pr),
      (_0x5f0bdc.globalAlpha = _0x3be10e),
      _0x5f0bdc.fillRect(
        _0x4fac02.x,
        _0x4fac02.y,
        _0x4fac02.width,
        _0x4fac02.height,
      ),
      _0x5f0bdc.restore());
  }
  _drawBorderPopover(_0x5161da) {
    if (!this._borderPopover) return;
    let _0x527339 = Wr(),
      _0x3e5315 = U(Vr(this._borderPopover), this._context["scene"]),
      _0x48118b = _0x3e5315.width / 5,
      _0xbbe2c6 = _0x3e5315.height / 2;
    (_0x5161da.save(),
      (_0x5161da.fillStyle = "#fff"),
      (_0x5161da.strokeStyle = hr),
      (_0x5161da.lineWidth = 1),
      (_0x5161da.shadowColor = "rgba(60,\x2064,\x2067,\x200.18)"),
      (_0x5161da.shadowBlur = 12),
      q(
        _0x5161da,
        _0x3e5315.x,
        _0x3e5315.y,
        _0x3e5315.width,
        _0x3e5315.height,
        8,
      ),
      _0x5161da.fill(),
      (_0x5161da.shadowBlur = 0),
      _0x5161da.stroke(),
      _0x527339.forEach((_0x22a735, _0x361807) => {
        let _0x45476d = _0x361807 % 5,
          _0x2a9ea2 = Math.floor(_0x361807 / 5),
          _0x2c99d1 = _0x3e5315.x + _0x45476d * _0x48118b,
          _0x4bf380 = _0x3e5315.y + _0x2a9ea2 * _0xbbe2c6;
        this._drawBorderPresetIcon(
          _0x5161da,
          _0x22a735.preset,
          _0x22a735.iconName,
          _0x2c99d1,
          _0x4bf380,
          _0x48118b,
          _0xbbe2c6,
        );
      }),
      _0x5161da.restore());
  }
  _drawBorderPresetIcon(
    _0x358c5d,
    _0x455685,
    _0x5a9966,
    _0xd1b888,
    _0x430871,
    _0x3dcf4c,
    _0x56654c,
  ) {
    let _0x36020f = this._lastPointerPoint
        ? this._hitBorderPreset(
            this._lastPointerPoint["x"],
            this._lastPointerPoint["y"],
          )
        : null,
      _0x1bf91c =
        (_0x36020f == null ? undefined : _0x36020f.preset) === _0x455685,
      _0x9fdbed = _0xd1b888 + (_0x3dcf4c - 16) / 2,
      _0x3e213c = _0x9fdbed + 16,
      _0x8cfd18 = _0x430871 + (_0x56654c - 16) / 2,
      _0x1bd17d = _0x8cfd18 + 16,
      _0x1806a4 = (_0x9fdbed + _0x3e213c) / 2,
      _0x339ab2 = (_0x8cfd18 + _0x1bd17d) / 2;
    (_0x358c5d.save(),
      _0x1bf91c &&
        ((_0x358c5d.fillStyle = _r),
        q(
          _0x358c5d,
          _0xd1b888 + 3,
          _0x430871 + 3,
          _0x3dcf4c - 6,
          _0x56654c - 6,
          6,
        ),
        _0x358c5d.fill()),
      (_0x358c5d.strokeStyle = _0x455685 === "none" ? "#5f6368" : "#2f66ff"),
      (_0x358c5d.lineWidth = 1.35),
      (_0x358c5d.lineCap = "round"),
      (_0x358c5d.lineJoin = "round"),
      _0x358c5d.setLineDash(_0x5a9966 === "NoBorderIcon" ? [2, 3] : []),
      _0x358c5d.beginPath(),
      (_0x5a9966 === "AllBorderIcon" ||
        _0x5a9966 === "OuterBorderDoubleIcon" ||
        _0x5a9966 === "UpBorderDoubleIcon") &&
        (_0x358c5d.moveTo(_0x9fdbed, _0x8cfd18),
        _0x358c5d.lineTo(_0x3e213c, _0x8cfd18)),
      (_0x5a9966 === "AllBorderIcon" ||
        _0x5a9966 === "OuterBorderDoubleIcon" ||
        _0x5a9966 === "DownBorderDoubleIcon") &&
        (_0x358c5d.moveTo(_0x9fdbed, _0x1bd17d),
        _0x358c5d.lineTo(_0x3e213c, _0x1bd17d)),
      (_0x5a9966 === "AllBorderIcon" ||
        _0x5a9966 === "OuterBorderDoubleIcon" ||
        _0x5a9966 === "LeftBorderDoubleIcon") &&
        (_0x358c5d.moveTo(_0x9fdbed, _0x8cfd18),
        _0x358c5d.lineTo(_0x9fdbed, _0x1bd17d)),
      (_0x5a9966 === "AllBorderIcon" ||
        _0x5a9966 === "OuterBorderDoubleIcon" ||
        _0x5a9966 === "RightBorderDoubleIcon") &&
        (_0x358c5d.moveTo(_0x3e213c, _0x8cfd18),
        _0x358c5d.lineTo(_0x3e213c, _0x1bd17d)),
      (_0x5a9966 === "AllBorderIcon" ||
        _0x5a9966 === "InnerBorderDoubleIcon" ||
        _0x5a9966 === "VerticalBorderDoubleIcon") &&
        (_0x358c5d.moveTo(_0x1806a4, _0x8cfd18),
        _0x358c5d.lineTo(_0x1806a4, _0x1bd17d)),
      (_0x5a9966 === "AllBorderIcon" ||
        _0x5a9966 === "InnerBorderDoubleIcon" ||
        _0x5a9966 === "HorizontalBorderDoubleIcon") &&
        (_0x358c5d.moveTo(_0x9fdbed, _0x339ab2),
        _0x358c5d.lineTo(_0x3e213c, _0x339ab2)),
      _0x5a9966 === "NoBorderIcon" &&
        _0x358c5d.rect(
          _0x9fdbed,
          _0x8cfd18,
          _0x3e213c - _0x9fdbed,
          _0x1bd17d - _0x8cfd18,
        ),
      _0x358c5d.stroke(),
      _0x358c5d.restore());
  }
  _drawTooltip(_0x21346f) {
    if (!this._tooltip) return;
    let _0x46782f = this._tooltip["label"],
      _0x61df65 = H(
        this._tooltip["x"],
        this._tooltip["y"],
        this._context["scene"],
      );
    (_0x21346f.save(), (_0x21346f.font = "12px Arial, sans-serif"));
    let _0x37e8a3 = _0x21346f.measureText(_0x46782f).width + 16,
      _0x4f32fe = _0x61df65.x - _0x37e8a3 / 2,
      _0x1dc0ec = _0x61df65.y - 28 - 12;
    ((_0x21346f.fillStyle = "rgba(32, 33, 36, 0.94)"),
      q(_0x21346f, _0x4f32fe, _0x1dc0ec, _0x37e8a3, 28, 6),
      _0x21346f.fill(),
      (_0x21346f.fillStyle = "#fff"),
      _0x21346f.fillText(_0x46782f, _0x4f32fe + 8, _0x1dc0ec + 18),
      _0x21346f.restore());
  }
  _getCellAtPoint(_0x3b916c, _0xb9b989) {
    var _0x3262e1, _0x2fad31, _0x49ef53;
    if (
      !this._activeTable ||
      !Z(W(this._activeTable["input"]), _0x3b916c, _0xb9b989)
    )
      return null;
    let {
        input: _0x14910b,
        segmentId: _0xaf2812,
        sourceTableId: _0x206cc0,
      } = this._activeTable,
      _0x382989 = X(_0x14910b.rowHeights, _0xb9b989 - _0x14910b.tableRect["y"]),
      _0x559343 = Mr(_0x14910b, _0x3b916c);
    if (_0x559343 == null) return null;
    let _0x369437 = X(_0x14910b.columnWidths, _0x559343);
    if (_0x382989 < 0 || _0x369437 < 0) return null;
    let _0x1529ad =
        ((_0x3262e1 = _0x14910b.rowIndices) == null
          ? undefined
          : _0x3262e1[_0x382989]) ?? _0x382989,
      _0x14e88d =
        ((_0x2fad31 = _0x14910b.columnIndices) == null
          ? undefined
          : _0x2fad31[_0x369437]) ?? _0x369437,
      _0x129791 =
        (_0x49ef53 = _0x14910b.mergedCells) == null
          ? undefined
          : _0x49ef53.find(
              (_0xcdea4d) =>
                _0x1529ad >= _0xcdea4d.startRow &&
                _0x1529ad <= _0xcdea4d.endRow &&
                _0x14e88d >= _0xcdea4d.startColumn &&
                _0x14e88d <= _0xcdea4d.endColumn,
            );
    return {
      column:
        (_0x129791 == null ? undefined : _0x129791.startColumn) ?? _0x14e88d,
      row: (_0x129791 == null ? undefined : _0x129791.startRow) ?? _0x1529ad,
      ...(_0xaf2812 ? { segmentId: _0xaf2812 } : {}),
      tableId: _0x206cc0,
    };
  }
  _updateHoverTarget(_0xda0844, _0x5182d8) {
    if (!this._activeTable) {
      ((this._hoverCell = null),
        (this._hoverColumn = null),
        (this._hoverRow = null));
      return;
    }
    let _0x38d8d0 = this._getTriggerInput(),
      _0x1775b0 = this._getCellAtPoint(_0xda0844, _0x5182d8),
      _0x4e2ee1 = W(_0x38d8d0),
      _0x8c375d = jr(_0x38d8d0),
      _0x5b73b4 = G(_0x38d8d0),
      _0x4b7b2e = {
        x: _0x8c375d,
        y: _0x38d8d0.tableRect["y"] - 16 / (_0x38d8d0.zoom ?? 1),
        width: Math.max(0, _0x5b73b4 - _0x8c375d),
        height: 16 / (_0x38d8d0.zoom ?? 1),
      },
      _0x45452c = {
        x: _0x8c375d - 16 / (_0x38d8d0.zoom ?? 1),
        y: _0x38d8d0.tableRect["y"],
        width: 16 / (_0x38d8d0.zoom ?? 1),
        height: _0x4e2ee1.height,
      };
    ((this._hoverCell = _0x1775b0
      ? { row: _0x1775b0.row, column: _0x1775b0.column }
      : null),
      (this._hoverColumn = Z(_0x4b7b2e, _0xda0844, _0x5182d8)
        ? this._getColumnAtX(_0xda0844)
        : null),
      (this._hoverRow = Z(_0x45452c, _0xda0844, _0x5182d8)
        ? this._getRowAtY(_0x5182d8)
        : null),
      !_0x1775b0 &&
        !this._hoverColumn &&
        !this._hoverRow &&
        !this._borderPopover &&
        (this._hoveredTrigger = null));
  }
  _getColumnAtX(_0x3e47c5) {
    var _0x466adc;
    if (!this._activeTable) return null;
    let { input: _0x29c8f5 } = this._activeTable,
      _0x266018 = W(_0x29c8f5);
    if (_0x3e47c5 < _0x266018.x || _0x3e47c5 > _0x266018.x + _0x266018.width)
      return null;
    let _0xe27af7 = Mr(_0x29c8f5, _0x3e47c5);
    if (_0xe27af7 == null) return null;
    let _0x34f39b = X(_0x29c8f5.columnWidths, _0xe27af7);
    return (
      ((_0x466adc = _0x29c8f5.columnIndices) == null
        ? undefined
        : _0x466adc[_0x34f39b]) ?? _0x34f39b
    );
  }
  _createRowColumnMoveState(_0x34ce3b) {
    let _0x2c6cd2 = _0x34ce3b.type === "row" ? _0x34ce3b.row : _0x34ce3b.column;
    return _0x2c6cd2 == null
      ? null
      : {
          sourceIndex: _0x2c6cd2,
          startX: _0x34ce3b.startX,
          startY: _0x34ce3b.startY,
          tableId: _0x34ce3b.tableId,
          type: _0x34ce3b.type,
        };
  }
  _getRowColumnMoveTarget(_0x2281d8) {
    let _0x537900 = this._rowColumnMoveState;
    return !_0x537900 ||
      !this._activeTable ||
      this._activeTable["sourceTableId"] !== _0x537900.tableId
      ? null
      : _0x537900.type === "row"
        ? this._getRowMoveTargetAtY(_0x2281d8.y)
        : this._getColumnMoveTargetAtX(_0x2281d8.x);
  }
  _getRowMoveTargetAtY(_0x27496c) {
    var _0x2bcfd4;
    if (!this._activeTable) return null;
    let { input: _0x30952f } = this._activeTable;
    if (
      _0x27496c < _0x30952f.tableRect["y"] ||
      _0x27496c > _0x30952f.tableRect["y"] + _0x30952f.tableRect["height"]
    )
      return null;
    let _0x121fbf = X(
      _0x30952f.rowHeights,
      _0x27496c - _0x30952f.tableRect["y"],
    );
    if (_0x121fbf < 0) return null;
    let _0x59005b =
        _0x30952f.tableRect["y"] +
        J(_0x30952f.rowHeights["slice"](0, _0x121fbf)),
      _0x328b5f = _0x30952f.rowHeights[_0x121fbf],
      _0xdbf3f4 = _0x27496c < _0x59005b + _0x328b5f / 2 ? "above" : "below",
      _0x4fc8f0 = _0xdbf3f4 === "above" ? _0x59005b : _0x59005b + _0x328b5f,
      _0x3df5b8 = W(_0x30952f);
    return {
      index:
        ((_0x2bcfd4 = _0x30952f.rowIndices) == null
          ? undefined
          : _0x2bcfd4[_0x121fbf]) ?? _0x121fbf,
      position: _0xdbf3f4,
      rect: { x: _0x3df5b8.x, y: _0x4fc8f0, width: _0x3df5b8.width, height: 0 },
    };
  }
  _getColumnMoveTargetAtX(_0x3f2c73) {
    var _0x5e072a;
    if (!this._activeTable) return null;
    let { input: _0x561ea0 } = this._activeTable,
      _0x40555e = W(_0x561ea0);
    if (_0x3f2c73 < _0x40555e.x || _0x3f2c73 > _0x40555e.x + _0x40555e.width)
      return null;
    let _0x4f8d4e = Mr(_0x561ea0, _0x3f2c73);
    if (_0x4f8d4e == null) return null;
    let _0x2df749 = X(_0x561ea0.columnWidths, _0x4f8d4e);
    if (_0x2df749 < 0) return null;
    let _0x42c17e = K(
        _0x561ea0,
        J(_0x561ea0.columnWidths["slice"](0, _0x2df749)),
      ),
      _0x2aea9f = _0x561ea0.columnWidths[_0x2df749],
      _0x1b150c = _0x3f2c73 < _0x42c17e + _0x2aea9f / 2 ? "left" : "right",
      _0x425516 = _0x1b150c === "left" ? _0x42c17e : _0x42c17e + _0x2aea9f;
    return {
      index:
        ((_0x5e072a = _0x561ea0.columnIndices) == null
          ? undefined
          : _0x5e072a[_0x2df749]) ?? _0x2df749,
      position: _0x1b150c,
      rect: {
        x: _0x425516,
        y: _0x561ea0.tableRect["y"],
        width: 0,
        height: _0x561ea0.tableRect["height"],
      },
    };
  }
  _getRowAtY(_0x67dcdf) {
    var _0x1babdb;
    if (!this._activeTable) return null;
    let { input: _0x1dc0a0 } = this._activeTable;
    if (
      _0x67dcdf < _0x1dc0a0.tableRect["y"] ||
      _0x67dcdf > _0x1dc0a0.tableRect["y"] + _0x1dc0a0.tableRect["height"]
    )
      return null;
    let _0xd92275 = X(
      _0x1dc0a0.rowHeights,
      _0x67dcdf - _0x1dc0a0.tableRect["y"],
    );
    return (
      ((_0x1babdb = _0x1dc0a0.rowIndices) == null
        ? undefined
        : _0x1babdb[_0xd92275]) ?? _0xd92275
    );
  }
  _hitBorderPreset(_0x4323c4, _0x3cc77f) {
    if (!this._borderPopover) return null;
    let _0x1bb86f = Vr(this._borderPopover);
    if (!Z(_0x1bb86f, _0x4323c4, _0x3cc77f)) return null;
    let _0x2dd243 = Math.floor(
        (_0x4323c4 - _0x1bb86f.x) / (_0x1bb86f.width / 5),
      ),
      _0x5aadc7 = Math.floor(
        (_0x3cc77f - _0x1bb86f.y) / (_0x1bb86f.height / 2),
      ),
      _0x37f742 = Wr()[_0x5aadc7 * 5 + _0x2dd243];
    return _0x37f742 ? { preset: _0x37f742.preset } : null;
  }
  _hitSortOption(_0x763bc7, _0x1e04ac) {
    if (!this._sortPopover) return null;
    let _0x2bb357 = Hr(this._sortPopover);
    if (!Z(_0x2bb357, _0x763bc7, _0x1e04ac)) return null;
    let _0x1e9083 = Ur(),
      _0x50ddb8 =
        _0x1e9083[
          Math.floor(
            (_0x1e04ac - _0x2bb357.y) / (_0x2bb357.height / _0x1e9083.length),
          )
        ];
    return _0x50ddb8 ? { direction: _0x50ddb8.direction } : null;
  }
  _buildTriggerTooltip(_0x4b7a6a) {
    if (!_0x4b7a6a) return null;
    let _0x57ad84 = Gr(_0x4b7a6a.kind);
    return _0x57ad84
      ? {
          label: this._localeService["t"](_0x57ad84),
          x: _0x4b7a6a.rect["x"] + _0x4b7a6a.rect["width"] / 2,
          y: _0x4b7a6a.rect["y"],
        }
      : null;
  }
  _getBorderPresetLabel(_0x5eed4f) {
    let _0x12be01 = Kr(_0x5eed4f);
    return this._localeService["t"](_0x12be01);
  }
  _resolveFloatingMenuMergeAction(_0x205e4e) {
    let _0x1f3b6e = this._context["unit"].getSnapshot();
    return (0, e.canUnmergeCells)(_0x1f3b6e, _0x205e4e.tableId, _0x205e4e)
      ? "unmerge"
      : (0, e.canMergeCells)(_0x1f3b6e, _0x205e4e.tableId, _0x205e4e)
        ? "merge"
        : null;
  }
  _resolveFloatingMenuTextStyle(_0x4800e4) {
    return dt(this._context["unit"].getSnapshot(), _0x4800e4);
  }
  _resolveFloatingMenuVerticalAlign(_0x40970e) {
    var _0x13dfc7;
    let _0x48f13b = this._context["unit"].getSnapshot(),
      _0x3916a5 = Math.min(_0x40970e.startRow, _0x40970e.endRow),
      _0x382a5e = Math.min(_0x40970e.startColumn, _0x40970e.endColumn);
    return (
      ((_0x13dfc7 = _0x48f13b.tableSource) == null ||
      (_0x13dfc7 = _0x13dfc7[_0x40970e.tableId]) == null ||
      (_0x13dfc7 = _0x13dfc7.tableRows) == null ||
      (_0x13dfc7 = _0x13dfc7[_0x3916a5]) == null ||
      (_0x13dfc7 = _0x13dfc7.tableCells) == null ||
      (_0x13dfc7 = _0x13dfc7[_0x382a5e]) == null
        ? undefined
        : _0x13dfc7.vAlign) ?? r.VerticalAlignmentType["TOP"]
    );
  }
  _getFloatingMenuAnchorRect(_0x1ca978) {
    let _0x442a17 = this._getSelectionRect(_0x1ca978),
      _0x1e9e2e = _0x442a17 ? this._clipRectToViewport(_0x442a17) : null;
    if (!_0x1e9e2e) return null;
    let _0x283bc2 = this._getFloatingMenuExtraTopGap();
    return {
      bottom: _0x1e9e2e.y + _0x1e9e2e.height - _0x283bc2,
      left: _0x1e9e2e.x,
      right: _0x1e9e2e.x + _0x1e9e2e.width,
      top: _0x1e9e2e.y - _0x283bc2,
    };
  }
  _getStructuralFloatingMenuAnchorRect(_0x20c83e) {
    let _0x261eae = this._getFloatingMenuAnchorRect(_0x20c83e);
    if (!_0x261eae) return null;
    let _0x45969b =
      this._getViewportTableRect().y - this._getFloatingMenuExtraTopGap();
    return {
      bottom: _0x45969b,
      left: _0x261eae.left,
      right: _0x261eae.right,
      top: _0x45969b,
    };
  }
  _getFloatingMenuExtraTopGap() {
    return 20 / this._getCurrentZoom();
  }
  _getSelectionRect(_0x40102b) {
    if (!this._activeTable) return null;
    let { input: _0x124807 } = this._activeTable,
      _0x3b920a = Y(_0x124807.rowIndices, _0x40102b.startRow),
      _0x4e5751 = Y(_0x124807.rowIndices, _0x40102b.endRow),
      _0x435361 = Y(_0x124807.columnIndices, _0x40102b.startColumn),
      _0x8375a9 = Y(_0x124807.columnIndices, _0x40102b.endColumn);
    if (_0x3b920a < 0 || _0x4e5751 < 0 || _0x435361 < 0 || _0x8375a9 < 0)
      return null;
    let _0x4f1a27 = Math.min(_0x435361, _0x8375a9),
      _0x4b2794 = Math.max(_0x435361, _0x8375a9),
      _0x307d50 = Math.min(_0x3b920a, _0x4e5751),
      _0x1ca89f = Math.max(_0x3b920a, _0x4e5751);
    return {
      x: K(_0x124807, J(_0x124807.columnWidths["slice"](0, _0x4f1a27))),
      y:
        _0x124807.tableRect["y"] +
        J(_0x124807.rowHeights["slice"](0, _0x307d50)),
      width: J(_0x124807.columnWidths["slice"](_0x4f1a27, _0x4b2794 + 1)),
      height: J(_0x124807.rowHeights["slice"](_0x307d50, _0x1ca89f + 1)),
    };
  }
  _getResizeGuideRect(_0x219732) {
    return this._activeTable
      ? wn(this._activeTable["input"], _0x219732, this._dragPreview ?? null)
      : null;
  }
  _clipRectToViewport(_0x86baeb) {
    if (!this._activeTable) return null;
    let _0x5bfeb3 = this._getViewportTableRect(),
      _0x33d79c = Math.max(_0x86baeb.x, _0x5bfeb3.x),
      _0x51c729 = Math.min(
        _0x86baeb.x + _0x86baeb.width,
        _0x5bfeb3.x + _0x5bfeb3.width,
      ),
      _0x503fdc = Math.max(_0x86baeb.y, _0x5bfeb3.y),
      _0x28c719 = Math.min(
        _0x86baeb.y + _0x86baeb.height,
        _0x5bfeb3.y + _0x5bfeb3.height,
      );
    return _0x51c729 <= _0x33d79c || _0x28c719 <= _0x503fdc
      ? null
      : {
          height: _0x28c719 - _0x503fdc,
          width: _0x51c729 - _0x33d79c,
          x: _0x33d79c,
          y: _0x503fdc,
        };
  }
  _getViewportTableRect() {
    return W(this._activeTable["input"]);
  }
  _buildViewportState(_0x5e9fe0, _0x104ab2, _0x2a40a3, _0x402c42, _0x4730c5) {
    let _0xdda0ca =
        _0x402c42 || _0x5e9fe0.rect["right"] - _0x5e9fe0.rect["left"],
      _0x499f75 = Number.isFinite(_0x104ab2.pageWidth)
        ? Math.max(
            0,
            _0x104ab2.pageWidth - _0x104ab2.marginLeft - _0x104ab2.marginRight,
          )
        : _0xdda0ca,
      _0x5f2411 = Number.isFinite(_0x104ab2.pageWidth)
        ? Math.max(0, _0x499f75 - _0x2a40a3.left)
        : _0xdda0ca,
      _0x32beb2 = Math.min(_0xdda0ca, _0x5f2411 || _0xdda0ca);
    if (
      this._getDocumentFlavor() !== r.DocumentFlavor["MODERN"] ||
      !Number.isFinite(_0x104ab2.pageWidth) ||
      _0x104ab2.type === u.DocumentSkeletonPageType["CELL"]
    )
      return {
        contentWidth: _0x402c42,
        leadingInsetLeft: 0,
        overflowWidthThreshold: _0x499f75 || _0xdda0ca,
        trailingInsetRight: 0,
        viewportLeft: _0x5e9fe0.rect["left"],
        viewportWidth: _0x32beb2,
      };
    let { docsLeft: _0x237c6e } = wr(this._context["mainComponent"]),
      _0x4158b4 = 20 / (_0x4730c5 || 1),
      _0x3f832b = Tr(this._context),
      _0x5c9ee6 = _0x237c6e + _0x4158b4,
      _0x4fa6c4 = Math.max(0, _0x104ab2.pageWidth - _0x4158b4 * 2),
      _0x588cf3 = _0x3f832b ? _0x3f832b.left + _0x4158b4 : _0x5c9ee6,
      _0x549e9f = _0x3f832b
        ? Math.max(0, _0x3f832b.width - _0x4158b4 * 2)
        : _0x4fa6c4,
      _0x201a22 = _0x237c6e + _0x104ab2.marginLeft;
    return {
      contentWidth: _0x402c42,
      leadingInsetLeft: Math.max(0, _0x201a22 - _0x588cf3),
      overflowWidthThreshold: _0x499f75 || _0xdda0ca,
      trailingInsetRight: Math.max(0, _0x549e9f - _0x402c42),
      viewportLeft: _0x588cf3,
      viewportWidth: _0x549e9f,
    };
  }
  _getDocumentFlavor() {
    var _0x39325b, _0xfee727;
    return (_0x39325b = this._context["unit"]) == null ||
      (_0xfee727 = _0x39325b.getSnapshot) == null ||
      (_0xfee727 = _0xfee727.call(_0x39325b)) == null ||
      (_0xfee727 = _0xfee727.documentStyle) == null
      ? undefined
      : _0xfee727.documentFlavor;
  }
  _makeDirty() {
    var _0x2401cd;
    ((_0x2401cd = this._context["mainComponent"]) == null ||
      _0x2401cd.makeDirty(true),
      this._context["scene"].makeDirty());
  }
};
xr = L(
  [
    I(1, (0, r.Inject)(l.DocSkeletonManagerService)),
    I(2, (0, r.Inject)(l.DocSelectionManagerService)),
    I(3, (0, r.Inject)(t.DocEventManagerService)),
    I(4, (0, r.Inject)(t.DocParagraphMenuService)),
    I(5, (0, r.Inject)(t.DocCanvasPopManagerService)),
    I(6, (0, r.Inject)(t.DocFloatMenuService)),
    I(7, (0, r.Inject)(t.DocSelectionRenderService)),
    I(8, (0, r.Inject)(e.DocsTableSelectionService)),
    I(9, (0, r.Inject)(Pt)),
    I(10, (0, r.Inject)(un)),
    I(11, (0, r.Inject)(r.LocaleService)),
    I(12, (0, r.Inject)(r.ThemeService)),
    I(13, n.IContextMenuService),
    I(14, r.ICommandService),
    I(15, (0, r.Inject)(ln)),
    I(16, r.IPermissionService),
  ],
  xr,
);
function Sr(_0x2c44cd) {
  let _0x16b243 = _0x2c44cd.tableSource["tableColumns"] ?? [];
  if (_0x16b243.length > 0)
    return _0x16b243.map((_0x3d925c) => _0x3d925c.size["width"].v);
  let _0x39f73b = _0x2c44cd.rows["reduce"](
    (_0x539e66, _0x38f109) =>
      _0x38f109.cells["length"] > _0x539e66.cells["length"]
        ? _0x38f109
        : _0x539e66,
    _0x2c44cd.rows[0],
  );
  return (
    (_0x39f73b == null
      ? undefined
      : _0x39f73b.cells["map"]((_0x348edd) => _0x348edd.pageWidth)) ?? []
  );
}
function Cr(_0x47e00d) {
  var _0x326dd1;
  let _0x3783ff =
      ((_0x326dd1 = _0x47e00d.tableSource) == null
        ? undefined
        : _0x326dd1.tableRows) ?? [],
    _0x2da22d = [];
  return (
    _0x3783ff.forEach((_0xe69402, _0x30ed74) => {
      _0xe69402.tableCells["forEach"]((_0x490d4c, _0x39daad) => {
        let _0x15a198 = _0x490d4c.rowSpan ?? 1,
          _0x40c4f7 = _0x490d4c.columnSpan ?? 1;
        (_0x15a198 > 1 || _0x40c4f7 > 1) &&
          _0x2da22d.push({
            startRow: _0x30ed74,
            endRow: _0x30ed74 + _0x15a198 - 1,
            startColumn: _0x39daad,
            endColumn: _0x39daad + _0x40c4f7 - 1,
          });
      });
    }),
    _0x2da22d
  );
}
function wr(_0xe79576) {
  var _0x111421;
  let _0x347383 =
    _0xe79576 == null || (_0x111421 = _0xe79576.getOffsetConfig) == null
      ? undefined
      : _0x111421.call(_0xe79576);
  return {
    docsLeft: (_0x347383 == null ? undefined : _0x347383.docsLeft) ?? 0,
    docsTop: (_0x347383 == null ? undefined : _0x347383.docsTop) ?? 0,
    pageMarginTop:
      (_0x347383 == null ? undefined : _0x347383.pageMarginTop) ?? 0,
  };
}
function Tr(_0x2d839e) {
  var _0x56e1dd, _0x27838b, _0x45526d, _0x5a1035, _0x3adfea;
  let _0x43d9e2 = _0x2d839e.scene["getAncestorScale"]().scaleX || 1,
    _0x2f4250 =
      ((_0x56e1dd = _0x2d839e.scene["getViewport"](fr)) == null
        ? undefined
        : _0x56e1dd.viewportScrollX) ?? 0,
    _0x500a5d =
      (_0x27838b = _0x2d839e.engine) == null ||
      (_0x45526d = _0x27838b.getCanvasElement) == null ||
      (_0x45526d = _0x45526d.call(_0x27838b)) == null ||
      (_0x5a1035 = _0x45526d.getBoundingClientRect) == null ||
      (_0x5a1035 = _0x5a1035.call(_0x45526d)) == null
        ? undefined
        : _0x5a1035.width,
    _0x56ecfa =
      ((_0x3adfea = _0x2d839e.mainComponent) == null
        ? undefined
        : _0x3adfea.width) ?? _0x2d839e.scene["width"],
    _0x4d2812 = (_0x500a5d ?? _0x56ecfa ?? 0) / _0x43d9e2;
  return !_0x4d2812 || !Number.isFinite(_0x4d2812) || _0x4d2812 <= 0
    ? null
    : { left: _0x2f4250, width: _0x4d2812 };
}
function Er(_0x1136b3) {
  return _0x1136b3.mainComponent ?? _0x1136b3.scene;
}
function Dr(_0x45d373, _0x144b48, _0x1b21b7) {
  let _0x5b07e3 = _0x1b21b7.getViewport(fr);
  if (!_0x5b07e3) return { x: _0x45d373, y: _0x144b48 };
  let _0x9f8e0f = _0x5b07e3.transformVector2SceneCoord(
    u.Vector2["FromArray"]([_0x45d373, _0x144b48]),
  );
  return { x: _0x9f8e0f.x, y: _0x9f8e0f.y };
}
function H(_0x2eb86, _0x1836d7, _0x1a898e) {
  let { scaleX: _0x46d4c2, scaleY: _0x4a22ca } = _0x1a898e.getAncestorScale(),
    _0x3216f8 = _0x1a898e.getViewport(fr);
  return _0x3216f8
    ? {
        x: (_0x2eb86 - _0x3216f8.viewportScrollX) * _0x46d4c2,
        y: (_0x1836d7 - _0x3216f8.viewportScrollY) * _0x4a22ca,
      }
    : { x: _0x2eb86, y: _0x1836d7 };
}
function U(_0x2f879e, _0x332960) {
  let _0x1712ff = H(_0x2f879e.x, _0x2f879e.y, _0x332960),
    _0x28be63 = H(
      _0x2f879e.x + _0x2f879e.width,
      _0x2f879e.y + _0x2f879e.height,
      _0x332960,
    );
  return {
    height: _0x28be63.y - _0x1712ff.y,
    width: _0x28be63.x - _0x1712ff.x,
    x: _0x1712ff.x,
    y: _0x1712ff.y,
  };
}
function Or(_0x1669e5, _0x533003) {
  return {
    ..._0x1669e5,
    thumb: U(_0x1669e5.thumb, _0x533003),
    track: U(_0x1669e5.track, _0x533003),
  };
}
function kr(_0xbf56cd) {
  let _0xbf8f6b = _0xbf56cd.buttons;
  return typeof _0xbf8f6b != "number" || (_0xbf8f6b & 1) == 1;
}
function W(_0x41e005) {
  var _0x46b076, _0x518638;
  return {
    ..._0x41e005.tableRect,
    x:
      ((_0x46b076 = _0x41e005.viewport) == null
        ? undefined
        : _0x46b076.viewportLeft) ?? _0x41e005.tableRect["x"],
    width:
      ((_0x518638 = _0x41e005.viewport) == null
        ? undefined
        : _0x518638.viewportWidth) ?? _0x41e005.tableRect["width"],
  };
}
function Ar(_0x1c947e) {
  if (!_0x1c947e.viewport) return _0x1c947e.tableRect["x"];
  let _0x5d14fc =
    _0x1c947e.viewport["viewportLeft"] ?? _0x1c947e.tableRect["x"];
  return Math.max(_0x5d14fc, K(_0x1c947e, 0));
}
function jr(_0x47b1da) {
  return _0x47b1da.viewport ? K(_0x47b1da, 0) : _0x47b1da.tableRect["x"];
}
function G(_0x5a6027) {
  if (!_0x5a6027.viewport)
    return _0x5a6027.tableRect["x"] + _0x5a6027.tableRect["width"];
  let _0x3c29bf =
      (_0x5a6027.viewport["viewportLeft"] ?? _0x5a6027.tableRect["x"]) +
      _0x5a6027.viewport["viewportWidth"],
    _0x314121 = K(_0x5a6027, J(_0x5a6027.columnWidths));
  return Math.min(_0x3c29bf, _0x314121);
}
function Mr(_0xad160, _0x307e21) {
  var _0x5a3691;
  let _0x49d111 =
      _0x307e21 -
      _0xad160.tableRect["x"] +
      (((_0x5a3691 = _0xad160.viewport) == null
        ? undefined
        : _0x5a3691.scrollLeft) ?? 0),
    _0x235e0c = J(_0xad160.columnWidths);
  return _0x49d111 < 0 || _0x49d111 > _0x235e0c ? null : _0x49d111;
}
function K(_0x193434, _0x297b7e) {
  var _0x2c7320;
  return (
    _0x193434.tableRect["x"] +
    _0x297b7e -
    (((_0x2c7320 = _0x193434.viewport) == null
      ? undefined
      : _0x2c7320.scrollLeft) ?? 0)
  );
}
function q(_0x24d9cb, _0x54e988, _0x1e2c4c, _0x51c900, _0x1531ff, _0x388926) {
  if (_0x24d9cb.roundRect) {
    (_0x24d9cb.beginPath(),
      _0x24d9cb.roundRect(
        _0x54e988,
        _0x1e2c4c,
        _0x51c900,
        _0x1531ff,
        _0x388926,
      ));
    return;
  }
  (_0x24d9cb.beginPath(),
    _0x24d9cb.rect(_0x54e988, _0x1e2c4c, _0x51c900, _0x1531ff));
}
function J(_0x5342cf) {
  return _0x5342cf.reduce((_0x572b38, _0x548e3b) => _0x572b38 + _0x548e3b, 0);
}
function Nr(_0x4ad2ad, _0x5a7347) {
  return (
    !_0x4ad2ad ||
    _0x4ad2ad.contentWidth !== _0x5a7347.contentWidth ||
    _0x4ad2ad.leadingInsetLeft !== _0x5a7347.leadingInsetLeft ||
    _0x4ad2ad.overflowWidthThreshold !== _0x5a7347.overflowWidthThreshold ||
    _0x4ad2ad.scrollLeft !== _0x5a7347.scrollLeft ||
    _0x4ad2ad.trailingInsetRight !== _0x5a7347.trailingInsetRight ||
    _0x4ad2ad.viewportLeft !== _0x5a7347.viewportLeft ||
    _0x4ad2ad.viewportWidth !== _0x5a7347.viewportWidth
  );
}
function Y(_0x3fd170, _0x1a83c9) {
  return _0x3fd170
    ? _0x3fd170.findIndex((_0x436db3) => _0x436db3 === _0x1a83c9)
    : _0x1a83c9;
}
function X(_0xe72450, _0x4992c2) {
  let _0x5530cb = 0;
  for (let _0x3841aa = 0; _0x3841aa < _0xe72450.length; _0x3841aa++)
    if (((_0x5530cb += _0xe72450[_0x3841aa]), _0x4992c2 <= _0x5530cb))
      return _0x3841aa;
  return _0xe72450.length - 1;
}
function Z(_0x59cae5, _0x505ca3, _0x51915e) {
  return (
    _0x505ca3 >= _0x59cae5.x &&
    _0x505ca3 <= _0x59cae5.x + _0x59cae5.width &&
    _0x51915e >= _0x59cae5.y &&
    _0x51915e <= _0x59cae5.y + _0x59cae5.height
  );
}
function Pr(_0x5d2b34) {
  return (
    typeof _0x5d2b34.clientX == "number" && typeof _0x5d2b34.clientY == "number"
  );
}
function Fr(_0x2cd469) {
  return _0x2cd469.source === e.DocsTableSelectionSource["Text"] ||
    _0x2cd469.kind === e.DocsTableSelectionKind["Text"] ||
    _0x2cd469.kind === e.DocsTableSelectionKind["None"]
    ? false
    : _0x2cd469.startRow >= 0 &&
        _0x2cd469.endRow >= 0 &&
        _0x2cd469.startColumn >= 0 &&
        _0x2cd469.endColumn >= 0;
}
function Ir(_0xa1c27f, _0x4a54b6) {
  return (
    !!(_0xa1c27f != null && _0xa1c27f.tableId) &&
    _0xa1c27f.source !== e.DocsTableSelectionSource["Text"] &&
    _0xa1c27f.tableId === _0x4a54b6.tableId &&
    _0x4a54b6.row >= _0xa1c27f.startRow &&
    _0x4a54b6.row <= _0xa1c27f.endRow &&
    _0x4a54b6.column >= _0xa1c27f.startColumn &&
    _0x4a54b6.column <= _0xa1c27f.endColumn
  );
}
function Lr(_0x59ff71) {
  return (_0x59ff71 == null ? undefined : _0x59ff71.kind) === "row-header" &&
    _0x59ff71.row != null
    ? { axis: "row", index: _0x59ff71.row }
    : (_0x59ff71 == null ? undefined : _0x59ff71.kind) === "column-header" &&
        _0x59ff71.column != null
      ? { axis: "column", index: _0x59ff71.column }
      : null;
}
function Rr(_0x1da5e9, _0x2cc2dc, _0x520802, _0x9f2604) {
  return !_0x1da5e9 || _0x1da5e9.tableId !== _0x2cc2dc
    ? false
    : _0x520802 === "row"
      ? (_0x1da5e9.kind === e.DocsTableSelectionKind["Row"] ||
          _0x1da5e9.kind === e.DocsTableSelectionKind["Table"]) &&
        _0x9f2604 >= _0x1da5e9.startRow &&
        _0x9f2604 <= _0x1da5e9.endRow
      : (_0x1da5e9.kind === e.DocsTableSelectionKind["Column"] ||
          _0x1da5e9.kind === e.DocsTableSelectionKind["Table"]) &&
        _0x9f2604 >= _0x1da5e9.startColumn &&
        _0x9f2604 <= _0x1da5e9.endColumn;
}
function zr(_0x1f8957) {
  return (
    _0x1f8957.kind === e.DocsTableSelectionKind["Row"] ||
    _0x1f8957.kind === e.DocsTableSelectionKind["Column"] ||
    _0x1f8957.kind === e.DocsTableSelectionKind["Table"]
  );
}
function Br(_0x84d18d) {
  return _0x84d18d
    ? [_0x84d18d.left, _0x84d18d.top, _0x84d18d.right, _0x84d18d.bottom].join(
        ":",
      )
    : "";
}
function Vr(_0x26f381) {
  return { x: _0x26f381.x, y: _0x26f381.y, width: 180, height: 72 };
}
function Hr(_0x3613a2) {
  return { x: _0x3613a2.x, y: _0x3613a2.y, width: 148, height: 72 };
}
function Ur() {
  return [
    {
      direction: e.DocsTableSortDirection["Asc"],
      labelKey: "docs-table-ui.sortAscending",
    },
    {
      direction: e.DocsTableSortDirection["Desc"],
      labelKey: "docs-table-ui.sortDescending",
    },
  ];
}
function Wr() {
  return [
    e.DocsTableBorderPreset["All"],
    e.DocsTableBorderPreset["Inner"],
    e.DocsTableBorderPreset["Outer"],
    e.DocsTableBorderPreset["Top"],
    e.DocsTableBorderPreset["Bottom"],
    e.DocsTableBorderPreset["Left"],
    e.DocsTableBorderPreset["Right"],
    e.DocsTableBorderPreset["None"],
    e.DocsTableBorderPreset["InnerHorizontal"],
    e.DocsTableBorderPreset["InnerVertical"],
  ].map((_0x1033cd) => ({ iconName: fn(_0x1033cd), preset: _0x1033cd }));
}
function Gr(_0xe8f8a1) {
  return (
    {
      "column-header": "docs-table-ui.selectColumn",
      "column-insert-dot": "docs-table-ui.insertColumn",
      "row-header": "docs-table-ui.selectRow",
      "row-insert-dot": "docs-table-ui.insertRow",
      "table-select": "docs-table-ui.selectTable",
    }[_0xe8f8a1] ?? null
  );
}
function Kr(_0x47eb30) {
  return {
    all: "docs-table-ui.borderAll",
    bottom: "docs-table-ui.borderBottom",
    inner: "docs-table-ui.borderInner",
    innerHorizontal: "docs-table-ui.borderInnerHorizontal",
    innerVertical: "docs-table-ui.borderInnerVertical",
    left: "docs-table-ui.borderLeft",
    none: "docs-table-ui.borderNone",
    outer: "docs-table-ui.borderOuter",
    right: "docs-table-ui.borderRight",
    top: "docs-table-ui.borderTop",
  }[_0x47eb30];
}
let qr = class extends r.Disposable {
  constructor(_0x46008d) {
    (super(),
      (this._commandService = _0x46008d),
      this.disposeWithMe(this._commandService["registerCommand"](_)));
  }
};
qr = L([I(0, r.ICommandService)], qr);
let Jr = class extends r.Disposable {
  constructor(_0x3419b6) {
    (super(),
      (this._commandService = _0x3419b6),
      [yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot].forEach((_0x7cee3a) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x7cee3a)),
      ));
  }
};
Jr = L([I(0, r.ICommandService)], Jr);
let Q = null;
const Yr = {
    id: "docs-table-ui.command.select-all",
    type: r.CommandType["COMMAND"],
    handler: async (_0x4ac756) => {
      var _0x1ba31d, _0x254def;
      let _0x34753d = _0x4ac756.get(r.ICommandService),
        _0x27c229 = _0x4ac756.get(r.IUniverInstanceService),
        _0x193517 = _0x4ac756.get(l.DocSelectionManagerService),
        _0x178f8a = _0x4ac756.get(e.DocsTableSelectionService),
        _0x57e8d9 =
          (_0x1ba31d = _0x27c229.getCurrentUnitOfType) == null
            ? undefined
            : _0x1ba31d.call(_0x27c229, r.UniverInstanceType["UNIVER_DOC"]),
        _0x3a1c2d = _0x57e8d9 == null ? undefined : _0x57e8d9.getSnapshot(),
        _0xb8966 = _0x57e8d9 == null ? undefined : _0x57e8d9.getUnitId();
      if (!_0x3a1c2d || !_0xb8966) return ((Q = null), Zr(_0x34753d));
      $r(_0x193517, _0x178f8a, _0x3a1c2d);
      let _0x51f78c = _0x178f8a.getCurrentSelection();
      if (!(_0x51f78c != null && _0x51f78c.tableId))
        return ((Q = null), Zr(_0x34753d));
      let _0x958842 = (0, e.getTableRangeById)(_0x3a1c2d, _0x51f78c.tableId);
      if (!_0x958842) return ((Q = null), Zr(_0x34753d));
      if (_0x51f78c.source === e.DocsTableSelectionSource["Structural"])
        return (Q == null ? undefined : Q.phase) === "table" &&
          ci(_0xb8966, _0x51f78c)
          ? ((Q = null),
            _0x178f8a.clearStructuralSelection({ clearNativeSelection: false }),
            _0x178f8a.setNativeSelectionSuppressed(false),
            _0x34753d.executeCommand(t.DocSelectAllCommand["id"], {
              segmentId: _0x51f78c.segmentId,
              wholeDocument: true,
            }))
          : (oi(_0x178f8a, _0x958842, _0x51f78c.segmentId),
            (Q = {
              phase: "table",
              rangeKey: si({
                startRow: 0,
                endRow: Math.max(_0x958842.rowCount - 1, 0),
                startColumn: 0,
                endColumn: Math.max(_0x958842.columnCount - 1, 0),
              }),
              tableId: _0x958842.tableId,
              unitId: _0xb8966,
            }),
            true);
      let _0x121462 =
        (_0x254def = _0x958842.rows[_0x51f78c.startRow]) == null
          ? undefined
          : _0x254def.cells[_0x51f78c.startColumn];
      if (!_0x121462) return Zr(_0x34753d);
      let _0x2ec99d = Qr(_0x193517);
      if (!_0x2ec99d)
        return (
          ai(
            _0x178f8a,
            _0x51f78c.tableId,
            _0x121462,
            _0x51f78c.segmentId,
            _0xb8966,
          ),
          true
        );
      let _0x364897 = ei(_0x121462, _0x51f78c.segmentId);
      if (ri(_0x2ec99d, _0x364897))
        return (
          ai(
            _0x178f8a,
            _0x51f78c.tableId,
            _0x121462,
            _0x51f78c.segmentId,
            _0xb8966,
          ),
          true
        );
      let _0x33fc35 = ti(_0x3a1c2d, _0x121462, _0x51f78c.segmentId),
        _0x2ba263 = ni(
          _0x33fc35,
          _0x2ec99d.startOffset ?? _0x364897.startOffset,
        );
      return _0x2ba263
        ? ri(_0x2ec99d, _0x2ba263)
          ? (_0x33fc35.length <= 1
              ? ai(
                  _0x178f8a,
                  _0x51f78c.tableId,
                  _0x121462,
                  _0x51f78c.segmentId,
                  _0xb8966,
                )
              : ((Q = null), ii(_0x193517, [_0x364897], _0xb8966)),
            true)
          : ((Q = null), ii(_0x193517, [_0x2ba263], _0xb8966), true)
        : (ii(_0x193517, [_0x364897], _0xb8966), true);
    },
  },
  Xr = {
    id: Yr.id,
    binding: n.KeyCode["A"] | n.MetaKeys["CTRL_COMMAND"],
    priority: 100,
    preconditions: (_0x312bf1) =>
      _0x312bf1.getContextValue(r.FOCUSING_UNIVER_EDITOR) &&
      (_0x312bf1.getContextValue(r.FOCUSING_DOC) ||
        _0x312bf1.getContextValue(r.EDITOR_ACTIVATED)),
  };
function Zr(_0x353fe5) {
  return _0x353fe5.executeCommand(t.DocSelectAllCommand["id"]);
}
function Qr(_0x1e26be) {
  var _0x1d269c, _0x31ac3d;
  let _0xefbd87 =
    (_0x1d269c = _0x1e26be.getDocRanges) == null
      ? undefined
      : _0x1d269c.call(_0x1e26be);
  return (
    (_0xefbd87 == null
      ? undefined
      : _0xefbd87.find((_0x520d74) => _0x520d74.isActive)) ??
    ((_0x31ac3d = _0x1e26be.getActiveTextRange) == null
      ? undefined
      : _0x31ac3d.call(_0x1e26be)) ??
    (_0xefbd87 == null ? undefined : _0xefbd87[0]) ??
    null
  );
}
function $r(_0x960254, _0x15b879, _0x279765) {
  var _0x28b478;
  let _0x11158b = _0x15b879.getStructuralSelection();
  if (!(_0x11158b != null && _0x11158b.tableId)) return;
  let _0x251e1b = Qr(_0x960254),
    _0x32f477 = _0x251e1b == null ? undefined : _0x251e1b.startOffset;
  _0x32f477 != null &&
    (((_0x28b478 = _0x279765.body) == null ||
    (_0x28b478 = _0x28b478.tables) == null
      ? undefined
      : _0x28b478.some(
          (_0xe39179) =>
            _0x32f477 > _0xe39179.startIndex && _0x32f477 < _0xe39179.endIndex,
        )) ??
      false) &&
    ((Q = null),
    _0x15b879.setNativeSelectionSuppressed(false),
    _0x15b879.clearStructuralSelection({ clearNativeSelection: false }));
}
function ei(_0x221f72, _0xb9764c) {
  let _0x18e13b = _0x221f72.startOffset + 1,
    _0x870234 = Math.max(_0x18e13b, _0x221f72.endOffset - 1);
  return {
    collapsed: _0x18e13b === _0x870234,
    endOffset: _0x870234,
    rangeType: r.DOC_RANGE_TYPE["TEXT"],
    segmentId: _0xb9764c,
    startOffset: _0x18e13b,
  };
}
function ti(_0x3718c0, _0x5e49ec, _0x1ddfcb) {
  var _0x418c3a;
  let _0x1c5b0e =
      ((_0x418c3a = _0x3718c0.body) == null
        ? undefined
        : _0x418c3a.dataStream) ?? "",
    _0x1eb91c = _0x5e49ec.startOffset + 1,
    _0xbe21f2 = Math.max(_0x1eb91c, _0x5e49ec.endOffset - 1),
    _0x104f60 = [],
    _0x1fcf72 = _0x1eb91c;
  for (let _0x548a3c = _0x1eb91c; _0x548a3c <= _0xbe21f2; _0x548a3c++)
    _0x1c5b0e[_0x548a3c] === "\x0d" &&
      (_0x104f60.push({
        collapsed: _0x1fcf72 === _0x548a3c,
        endOffset: _0x548a3c,
        rangeType: r.DOC_RANGE_TYPE["TEXT"],
        segmentId: _0x1ddfcb,
        startOffset: _0x1fcf72,
      }),
      (_0x1fcf72 = _0x548a3c + 1),
      _0x1c5b0e[_0x1fcf72] === "\x0a" && (_0x1fcf72 += 1));
  return (
    _0x104f60.length || _0x104f60.push(ei(_0x5e49ec, _0x1ddfcb)),
    _0x104f60
  );
}
function ni(_0x1739df, _0x42b6be) {
  return (
    _0x1739df.find((_0x39f031) =>
      _0x39f031.startOffset == null || _0x39f031.endOffset == null
        ? false
        : _0x42b6be >= _0x39f031.startOffset &&
          _0x42b6be <= _0x39f031.endOffset,
    ) ??
    _0x1739df[0] ??
    null
  );
}
function ri(_0x8df264, _0x5e37fb) {
  return (
    _0x8df264.startOffset === _0x5e37fb.startOffset &&
    _0x8df264.endOffset === _0x5e37fb.endOffset
  );
}
function ii(_0x3f01cd, _0x553b14, _0x5339fb) {
  var _0x5ef4fe;
  (_0x5ef4fe = _0x3f01cd.replaceDocRanges) == null ||
    _0x5ef4fe.call(
      _0x3f01cd,
      _0x553b14,
      { subUnitId: _0x5339fb, unitId: _0x5339fb },
      false,
    );
}
function ai(_0x42af9c, _0x22d634, _0x4bd9d6, _0x3c711f, _0x13fe77) {
  (_0x42af9c.setNativeSelectionSuppressed(true),
    _0x42af9c.setStructuralSelection({
      kind: e.DocsTableSelectionKind["Cell"],
      tableId: _0x22d634,
      segmentId: _0x3c711f,
      startOffset: _0x4bd9d6.startOffset,
      endOffset: _0x4bd9d6.endOffset,
      startRow: _0x4bd9d6.row,
      endRow: _0x4bd9d6.row,
      startColumn: _0x4bd9d6.column,
      endColumn: _0x4bd9d6.column,
    }),
    (Q = {
      phase: "cell",
      rangeKey: si({
        startRow: _0x4bd9d6.row,
        endRow: _0x4bd9d6.row,
        startColumn: _0x4bd9d6.column,
        endColumn: _0x4bd9d6.column,
      }),
      tableId: _0x22d634,
      unitId: _0x13fe77,
    }));
}
function oi(_0x2473af, _0x3a5ae3, _0x1e96df) {
  (_0x2473af.setNativeSelectionSuppressed(true),
    _0x2473af.setStructuralSelection({
      kind: e.DocsTableSelectionKind["Table"],
      tableId: _0x3a5ae3.tableId,
      segmentId: _0x1e96df,
      startRow: 0,
      endRow: Math.max(_0x3a5ae3.rowCount - 1, 0),
      startColumn: 0,
      endColumn: Math.max(_0x3a5ae3.columnCount - 1, 0),
    }));
}
function si(_0x1827b1) {
  return [
    Math.min(_0x1827b1.startRow, _0x1827b1.endRow),
    Math.max(_0x1827b1.startRow, _0x1827b1.endRow),
    Math.min(_0x1827b1.startColumn, _0x1827b1.endColumn),
    Math.max(_0x1827b1.startColumn, _0x1827b1.endColumn),
  ].join(":");
}
function ci(_0x21170f, _0x742c44) {
  return (
    (Q == null ? undefined : Q.unitId) === _0x21170f &&
    Q.tableId === _0x742c44.tableId &&
    Q.rangeKey === si(_0x742c44)
  );
}
let li = class extends r.Disposable {
  constructor(_0xadf694, _0x1de51f) {
    (super(),
      (this._commandService = _0xadf694),
      (this._shortcutService = _0x1de51f),
      this.disposeWithMe(this._commandService["registerCommand"](Yr)),
      this.disposeWithMe(this._shortcutService["registerShortcut"](Xr)));
  }
};
li = L([I(0, r.ICommandService), I(1, n.IShortcutService)], li);
let ui = class extends r.Disposable {
  constructor(_0x406d37, _0x15ad1d) {
    (super(),
      (this._menuManagerService = _0x406d37),
      (this._selectionService = _0x15ad1d),
      this._menuManagerService["mergeMenu"](Xe),
      this._menuManagerService["appendRootMenu"](Ye),
      this.disposeWithMe(
        this._selectionService["selectionChange$"].subscribe((_0x2fef67) => {
          (_0x2fef67 != null &&
            _0x2fef67.tableId &&
            this._menuManagerService["mergeMenu"](Xe),
            this._menuManagerService["appendRootMenu"]({}));
        }),
      ));
  }
};
ui = L(
  [
    I(0, n.IMenuManagerService),
    I(1, (0, r.Inject)(e.DocsTableSelectionService)),
  ],
  ui,
);
var di = class extends r.Disposable {
  constructor(..._0x47250d) {
    (super(..._0x47250d),
      N(this, "_triggers", []),
      N(this, "_triggerChange$", new o.Subject()),
      N(this, "triggerChange$", this._triggerChange$["asObservable"]()));
  }
  updateTriggers(_0x7627e) {
    ((this._triggers = _0x7627e ? z(_0x7627e) : []),
      this._triggerChange$["next"](this._triggers));
  }
  getTriggers() {
    return this._triggers;
  }
  hitTest(_0x575afa, _0x422c6a) {
    return nr(this._triggers, _0x575afa, _0x422c6a);
  }
  dispose() {
    (super.dispose(), this._triggerChange$["complete"]());
  }
};
let $ = class extends r.Plugin {
  constructor(_0x2ef946 = $e, _0x4edeb4, _0xccd2d1, _0x5ec498) {
    (super(),
      (this._config = _0x2ef946),
      (this._injector = _0x4edeb4),
      (this._renderManagerService = _0xccd2d1),
      (this._configService = _0x5ec498));
    let { menu: _0x516404, ..._0x5e7477 } = (0, r.merge)({}, $e, this._config);
    (_0x516404 &&
      this._configService["setConfig"]("menu", _0x516404, { merge: true }),
      this._configService["setConfig"]("docs-table-ui.config", _0x5e7477));
  }
  onStarting() {
    (this._injector["add"]([cn]),
      this._injector["get"](cn),
      this._injector["add"]([Pt]),
      this._injector["add"]([ln]),
      this._injector["add"]([Jr]),
      this._injector["add"]([li]),
      this._injector["add"]([un]),
      this._injector["add"]([ui]),
      this._injector["add"]([qr]),
      this._injector["add"]([di]),
      this._injector["get"](qr),
      this._injector["get"](Jr),
      this._injector["get"](li),
      this._injector["get"](di));
  }
  onRendered() {
    (this._injector["get"](ui),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          r.UniverInstanceType["UNIVER_DOC"],
          [xr],
        ),
      ));
  }
};
(N($, "pluginName", e.DOCS_TABLE_PLUGIN + "_UI_PLUGIN"),
  N($, "packageName", Ze),
  N($, "version", Qe),
  N($, "type", r.UniverInstanceType["UNIVER_DOC"]),
  ($ = L(
    [
      (0, r.DependentOn)(
        c.UniverLicensePlugin,
        l.UniverDocsPlugin,
        u.UniverRenderEnginePlugin,
        t.UniverDocsUIPlugin,
        e.UniverDocsTablePlugin,
      ),
      I(1, (0, r.Inject)(r.Injector)),
      I(2, u.IRenderManagerService),
      I(3, r.IConfigService),
    ],
    $,
  )),
  (exports.DocsTablePassiveWheelService = ln),
  (exports.DocsTableUIMenuSchema = Xe),
  Object.defineProperty(exports, "UniverDocsTableUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
