Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
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
function p(var_core_value_sig86D7, var_core_value_sig431B) {
  return var_core_value_sig86D7 + ":" + var_core_value_sig431B;
}
function m(var_core_value_sig5C7C) {
  if (!var_core_value_sig5C7C) return null;
  let var_core_value_sig87E2 = Number(var_core_value_sig5C7C.rowCount),
    var_core_value_sig2E04 = Number(var_core_value_sig5C7C.colCount);
  if (g(var_core_value_sig87E2, var_core_value_sig2E04)) return {
    colCount: var_core_value_sig2E04,
    rowCount: var_core_value_sig87E2
  };
  if (var_core_value_sig5C7C.value == null) return null;
  let [var_core_value_sig2EDD, var_core_value_sig27D2] = String(var_core_value_sig5C7C.value).split(":").map(var_core_value_sigACCB => Number(var_core_value_sigACCB));
  return g(var_core_value_sig2EDD, var_core_value_sig27D2) ? {
    colCount: var_core_value_sig27D2,
    rowCount: var_core_value_sig2EDD
  } : null;
}
function h(var_core_value_sig355D) {
  let var_core_value_sig8B21 = Number(var_core_value_sig355D);
  return Number.isFinite(var_core_value_sig8B21) ? Math.min(20, Math.max(1, Math.trunc(var_core_value_sig8B21))) : 1;
}
function g(var_core_value_sigEB36, var_core_value_sig5C27) {
  let var_core_value_sigD494 = Number(var_core_value_sigEB36),
    var_core_value_sigBF6D = Number(var_core_value_sig5C27);
  return Number.isInteger(var_core_value_sigD494) && Number.isInteger(var_core_value_sigBF6D) && var_core_value_sigD494 >= 1 && var_core_value_sigD494 <= 20 && var_core_value_sigBF6D >= 1 && var_core_value_sigBF6D <= 20;
}
const _ = {
    id: "docs-table-ui.operation.create-table",
    type: r.CommandType["COMMAND"],
    handler: async (var_core_value_sigD051, var_core_value_sig16D9) => {
      let var_core_value_sigF378 = var_core_value_sigD051.get(r.ICommandService),
        var_core_value_sig5F6C = m(var_core_value_sig16D9);
      return var_core_value_sig5F6C ? var_core_value_sigF378.executeCommand(e.DocsTableInsertTableCommand["id"], {
        rows: var_core_value_sig5F6C.rowCount,
        columns: var_core_value_sig5F6C.colCount,
        position: e.DocsTableInsertTablePosition["Selection"]
      }) : false;
    }
  },
  v = "doc.menu.table",
  y = "docs-table-ui.insert-table-picker",
  b = {
    rowCount: 3,
    colCount: 5
  };
function x(var_core_value_sig7E85) {
  return {
    id: v,
    commandId: _.id,
    selectionsCommandId: _.id,
    params: b,
    type: n.MenuItemType["SUBITEMS"],
    icon: "TableIcon",
    tooltip: "docs-table-ui.table.main",
    slot: true,
    hidden$: C(var_core_value_sig7E85),
    selections: [{
      label: {
        name: y,
        hoverable: false,
        selectable: false
      }
    }]
  };
}
function ee(var_core_value_sigF204) {
  return {
    id: _.id,
    commandId: _.id,
    selectionsCommandId: _.id,
    params: b,
    type: n.MenuItemType["BUTTON_SELECTOR"],
    icon: "TableIcon",
    title: "docs-table-ui.insertTable",
    hidden$: C(var_core_value_sigF204),
    selections: [{
      label: {
        name: y,
        hoverable: false,
        selectable: false
      }
    }]
  };
}
function S(var_core_value_sig7A15) {
  return {
    id: _.id,
    commandId: _.id,
    selectionsCommandId: _.id,
    params: b,
    type: n.MenuItemType["BUTTON_SELECTOR"],
    icon: "TableIcon",
    title: "docs-table-ui.insertTable",
    hidden$: C(var_core_value_sig7A15),
    selections: [{
      label: {
        name: y,
        hoverable: false,
        selectable: false
      }
    }]
  };
}
function C(var_core_value_sigEEA6) {
  let var_core_value_sigEAE1 = (0, n.getMenuHiddenObservable)(var_core_value_sigEEA6, r.UniverInstanceType["UNIVER_DOC"], undefined),
    var_core_value_sigC69F = te(var_core_value_sigEEA6);
  return var_core_value_sigC69F ? (0, o.combineLatest)([var_core_value_sigEAE1, var_core_value_sigC69F.selectionChange$["pipe"]((0, o.startWith)(var_core_value_sigC69F.getCurrentSelection()), (0, o.map)(var_core_value_sig7F33 => !!(var_core_value_sig7F33 != null && var_core_value_sig7F33.tableId)))]).pipe((0, o.map)(([var_core_value_sig0C53, var_core_value_sigEA04]) => var_core_value_sig0C53 || var_core_value_sigEA04)) : var_core_value_sigEAE1;
}
function te(var_core_value_sig0442) {
  try {
    let var_core_value_sig7A62 = var_core_value_sig0442.get(e.DocsTableSelectionService);
    if (var_core_value_sig7A62 && typeof var_core_value_sig7A62.getCurrentSelection == "function" && var_core_value_sig7A62.selectionChange$) return var_core_value_sig7A62;
  } catch {
    return null;
  }
  return null;
}
function ne(var_core_value_sig697A) {
  let var_core_value_sigDB65 = (0, n.useDependency)(r.LocaleService),
    var_core_value_sig045E = (0, n.useObservable)(var_core_value_sigDB65.direction$, "ltr"),
    [var_core_value_sig4524, var_core_value_sig64D5] = (0, a.useState)({
      colCount: 5,
      rowCount: 3
    }),
    [var_core_value_sig9678, var_core_value_sig5E74] = (0, a.useState)(3),
    [var_core_value_sig75FC, var_core_value_sig639A] = (0, a.useState)(5),
    var_core_value_sig567C = var_core_value_sig8109 => {
      var var_core_value_sig7565;
      (var_core_value_sig7565 = var_core_value_sig697A.onChange) == null || var_core_value_sig7565.call(var_core_value_sig697A, p(var_core_value_sig8109.rowCount, var_core_value_sig8109.colCount));
    };
  return (0, s.jsxs)("section", {
    className: "univer-box-border univer-w-[300px] univer-rounded-lg univer-bg-gray-0 univer-p-2 univer-text-gray-900 dark:!univer-bg-gray-800 dark:!univer-text-gray-0",
    "data-u-comp": y,
    dir: var_core_value_sig045E,
    onClick: var_core_value_sigD4FB => var_core_value_sigD4FB.stopPropagation(),
    onMouseDown: var_core_value_sig3E71 => var_core_value_sig3E71.stopPropagation(),
    children: [(0, s.jsx)("div", {
      className: "univer-grid univer-grid-cols-[repeat(14,minmax(0,1fr))] univer-gap-0.5",
      children: Array.from({
        length: 10
      }).map((var_core_value_sig01B3, var_core_value_sig7442) => Array.from({
        length: 14
      }).map((var_core_value_sig186C, var_core_value_sigD955) => {
        let var_core_value_sig48BD = var_core_value_sig7442 + 1,
          var_core_value_sig429F = var_core_value_sigD955 + 1,
          var_core_value_sigF62A = var_core_value_sig48BD <= var_core_value_sig4524.rowCount && var_core_value_sig429F <= var_core_value_sig4524.colCount;
        return (0, s.jsx)("button", {
          type: "button",
          "aria-label": var_core_value_sigDB65.t("docs-table-ui.insertTableSize") + "\x20" + var_core_value_sig429F + " x " + var_core_value_sig48BD,
          className: (0, i.clsx)("univer-size-4 univer-cursor-pointer univer-rounded-sm univer-border univer-border-solid univer-p-0 univer-transition-colors", var_core_value_sigF62A ? "univer-border-primary-500 univer-bg-primary-100 hover:univer-bg-primary-200" : "univer-border-gray-200 univer-bg-gray-50 hover:univer-border-primary-300 hover:univer-bg-primary-50"),
          onClick: () => var_core_value_sig567C({
            colCount: var_core_value_sig429F,
            rowCount: var_core_value_sig48BD
          }),
          onMouseEnter: () => var_core_value_sig64D5({
            colCount: var_core_value_sig429F,
            rowCount: var_core_value_sig48BD
          })
        }, var_core_value_sig48BD + ":" + var_core_value_sig429F);
      }))
    }), (0, s.jsxs)("div", {
      dir: "ltr",
      className: "univer-mt-2 univer-text-center univer-text-sm univer-font-medium",
      children: [var_core_value_sig4524.colCount, " × ", var_core_value_sig4524.rowCount]
    }), (0, s.jsxs)("div", {
      className: "univer-mt-2 univer-border-0 univer-border-t univer-border-solid univer-border-gray-200 univer-pt-3",
      children: [(0, s.jsx)("div", {
        className: "univer-mb-2\x20univer-text-xs\x20univer-text-gray-500",
        children: var_core_value_sigDB65.t("docs-table-ui.customTableSize")
      }), (0, s.jsxs)("div", {
        className: "univer-grid univer-grid-cols-2 univer-gap-2",
        children: [(0, s.jsxs)("label", {
          className: "univer-grid univer-gap-1 univer-text-xs univer-text-gray-500",
          children: [(0, s.jsx)("span", {
            children: var_core_value_sigDB65.t("docs-table-ui.tableRows")
          }), (0, s.jsx)(i.InputNumber, {
            className: "univer-w-full",
            min: 1,
            max: 20,
            precision: 0,
            value: var_core_value_sig9678,
            onChange: var_core_value_sigDF87 => var_core_value_sig5E74(h(var_core_value_sigDF87))
          })]
        }), (0, s.jsxs)("label", {
          className: "univer-grid univer-gap-1 univer-text-xs univer-text-gray-500",
          children: [(0, s.jsx)("span", {
            children: var_core_value_sigDB65.t("docs-table-ui.tableColumns")
          }), (0, s.jsx)(i.InputNumber, {
            className: "univer-w-full",
            min: 1,
            max: 20,
            precision: 0,
            value: var_core_value_sig75FC,
            onChange: var_core_value_sig9EE0 => var_core_value_sig639A(h(var_core_value_sig9EE0))
          })]
        }), (0, s.jsx)(i.Button, {
          className: "univer-col-span-2 univer-w-full",
          variant: "primary",
          onClick: () => var_core_value_sig567C({
            colCount: var_core_value_sig75FC,
            rowCount: var_core_value_sig9678
          }),
          children: var_core_value_sigDB65.t("docs-table-ui.insert")
        })]
      })]
    })]
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
    top: "UpBorderDoubleIcon"
  };
function ce() {
  return {
    id: re,
    type: n.MenuItemType["SUBITEMS"],
    title: "docs-table-ui.insert"
  };
}
function le(var_core_value_sig825F) {
  return {
    id: w,
    type: n.MenuItemType["SUBITEMS"],
    title: "docs-table-ui.delete",
    hidden$: var_core_value_sig825F ? j(var_core_value_sig825F) : undefined
  };
}
function ue(var_core_value_sig546D) {
  return {
    id: T,
    type: n.MenuItemType["SUBITEMS"],
    title: "docs-table-ui.borders",
    icon: E.all,
    hidden$: var_core_value_sig546D ? j(var_core_value_sig546D) : undefined
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
function D(var_core_value_sig8078) {
  return {
    ...k(t.DeleteLeftCommand["id"], "docs-table-ui.clearContent", undefined, var_core_value_sig8078),
    id: t.DeleteLeftCommand["id"],
    icon: "ClearFormatDoubleIcon"
  };
}
function O(var_core_value_sigDCED) {
  return {
    ...k(e.DocsTableInsertRowsCommand["id"], "docs-table-ui.insertRowAbove", {
      position: "above"
    }, var_core_value_sigDCED),
    icon: "InsertRowAboveDoubleIcon"
  };
}
function he(var_core_value_sig2829) {
  return {
    ...k(e.DocsTableInsertRowsCommand["id"], "docs-table-ui.insertRowBelow", {
      position: "below"
    }, var_core_value_sig2829),
    icon: "InsertRowBelowDoubleIcon"
  };
}
function ge(var_core_value_sig6EE2) {
  return {
    ...k(e.DocsTableInsertColumnsCommand["id"], "docs-table-ui.insertColumnLeft", {
      position: "left"
    }, var_core_value_sig6EE2),
    icon: "LeftInsertColumnDoubleIcon"
  };
}
function _e(var_core_value_sig4CCC) {
  return {
    ...k(e.DocsTableInsertColumnsCommand["id"], "docs-table-ui.insertColumnRight", {
      position: "right"
    }, var_core_value_sig4CCC),
    icon: "RightInsertColumnDoubleIcon"
  };
}
function ve(var_core_value_sig6E47) {
  return k(e.DocsTableDeleteRowsCommand["id"], "docs-table-ui.deleteRow", ze(var_core_value_sig6E47), var_core_value_sig6E47);
}
function ye(var_core_value_sigB64D) {
  return k(e.DocsTableDeleteColumnsCommand["id"], "docs-table-ui.deleteColumn", ze(var_core_value_sigB64D), var_core_value_sigB64D);
}
function be(var_core_value_sig2407) {
  return k(e.DocsTableDeleteTableCommand["id"], "docs-table-ui.deleteTable", ze(var_core_value_sig2407), var_core_value_sig2407);
}
function xe(var_core_value_sigE4D0) {
  return k(e.DocsTableMergeCellsCommand["id"], "docs-table-ui.mergeCells", undefined, var_core_value_sigE4D0, var_core_value_sigE4D0 ? Ge(var_core_value_sigE4D0) : undefined);
}
function Se(var_core_value_sigD5F1) {
  return k(e.DocsTableUnmergeCellsCommand["id"], "docs-table-ui.unmergeCells", undefined, var_core_value_sigD5F1, var_core_value_sigD5F1 ? Ke(var_core_value_sigD5F1) : undefined);
}
function Ce(var_core_value_sigBC19) {
  return k(e.DocsTableInsertTitleRowCommand["id"], "docs-table-ui.insertTitleRow", undefined, var_core_value_sigBC19, undefined, var_core_value_sigBC19 ? Ue(var_core_value_sigBC19) : undefined);
}
function we(var_core_value_sig4F3C) {
  return k(e.DocsTableSetHeaderRowCountCommand["id"], "docs-table-ui.pinHeaderRows", undefined, var_core_value_sig4F3C, undefined, var_core_value_sig4F3C ? Ue(var_core_value_sig4F3C) : undefined);
}
function Te(var_core_value_sig8D44) {
  return A("docs-table-ui.borderAll", e.DocsTableBorderPreset["All"], var_core_value_sig8D44);
}
function Ee(var_core_value_sig1660) {
  return A("docs-table-ui.borderBottom", e.DocsTableBorderPreset["Bottom"], var_core_value_sig1660);
}
function De(var_core_value_sigEE7B) {
  return A("docs-table-ui.borderInner", e.DocsTableBorderPreset["Inner"], var_core_value_sigEE7B);
}
function Oe(var_core_value_sig44DF) {
  return A("docs-table-ui.borderInnerHorizontal", e.DocsTableBorderPreset["InnerHorizontal"], var_core_value_sig44DF);
}
function ke(var_core_value_sig7E48) {
  return A("docs-table-ui.borderInnerVertical", e.DocsTableBorderPreset["InnerVertical"], var_core_value_sig7E48);
}
function Ae(var_core_value_sig7B9E) {
  return A("docs-table-ui.borderLeft", e.DocsTableBorderPreset["Left"], var_core_value_sig7B9E);
}
function je(var_core_value_sig5C3B) {
  return A("docs-table-ui.borderOuter", e.DocsTableBorderPreset["Outer"], var_core_value_sig5C3B);
}
function Me(var_core_value_sig4002) {
  return A("docs-table-ui.borderNone", e.DocsTableBorderPreset["None"], var_core_value_sig4002);
}
function Ne(var_core_value_sig4153) {
  return A("docs-table-ui.borderRight", e.DocsTableBorderPreset["Right"], var_core_value_sig4153);
}
function Pe(var_core_value_sig2825) {
  return A("docs-table-ui.borderTop", e.DocsTableBorderPreset["Top"], var_core_value_sig2825);
}
function Fe(var_core_value_sig5FD0) {
  return Be({
    accessor: var_core_value_sig5FD0,
    commandId: e.DocsTableSetTableBackgroundCommand["id"],
    defaultColor: r.DEFAULT_STYLES["bg"].rgb,
    icon: "PaintBucketDoubleIcon",
    tooltip: "docs-table-ui.tableBackgroundColor"
  });
}
function Ie(var_core_value_sigA7E3) {
  return Be({
    accessor: var_core_value_sigA7E3,
    commandId: e.DocsTableSetTableBorderColorCommand["id"],
    defaultColor: "#1f1f1f",
    icon: "PaintBucketDoubleIcon",
    tooltip: "docs-table-ui.borderColor"
  });
}
function Le(var_core_value_sigA784) {
  return {
    id: e.DocsTableSetTableBorderWidthCommand["id"],
    type: n.MenuItemType["SELECTOR"],
    icon: "TableBorderWidthIcon",
    tooltip: "docs-table-ui.borderWidth",
    selections: [0, 0.5, 0.75, 1, 1.5, 2.25, 3, 4.5, 6].map(var_core_value_sigF051 => ({
      value: var_core_value_sigF051,
      label: var_core_value_sigF051 + "pt"
    })),
    value$: (0, o.of)(1),
    hidden$: var_core_value_sigA784 ? j(var_core_value_sigA784) : undefined
  };
}
function Re(var_core_value_sig4406) {
  return {
    id: e.DocsTableSetTableBorderStyleCommand["id"],
    type: n.MenuItemType["SELECTOR"],
    icon: "TableBorderStyleIcon",
    tooltip: "docs-table-ui.borderStyle",
    selections: [{
      value: "solid",
      label: "docs-table-ui.borderStyleSolid",
      icon: "TableBorderStyleSolidIcon"
    }, {
      value: "dot",
      label: "docs-table-ui.borderStyleDotted",
      icon: "TableBorderStyleDottedIcon"
    }, {
      value: "dash",
      label: "docs-table-ui.borderStyleDashed",
      icon: "TableBorderStyleDashedIcon"
    }],
    value$: (0, o.of)("solid"),
    hidden$: var_core_value_sig4406 ? j(var_core_value_sig4406) : undefined
  };
}
function k(var_core_value_sig6806, var_core_value_sigD4AA, var_core_value_sigDC41, var_core_value_sigFB47, var_core_value_sig9B3D, var_core_value_sigC1CF) {
  return {
    id: var_core_value_sig6806 + "." + var_core_value_sigD4AA.split(".").pop(),
    commandId: var_core_value_sig6806,
    type: n.MenuItemType["BUTTON"],
    title: var_core_value_sigD4AA,
    params: var_core_value_sigDC41,
    hidden$: var_core_value_sigC1CF ?? (var_core_value_sigFB47 ? j(var_core_value_sigFB47) : undefined),
    disabled$: var_core_value_sig9B3D
  };
}
function ze(var_core_value_sigEE12) {
  if (!var_core_value_sigEE12) return;
  let var_core_value_sigD70C = var_core_value_sigEE12.get(e.DocsTableSelectionService);
  return () => {
    let var_core_value_sig0B45 = var_core_value_sigD70C.getCurrentSelection();
    return var_core_value_sig0B45 ? {
      ...var_core_value_sig0B45
    } : undefined;
  };
}
function A(var_core_value_sigF047, var_core_value_sigC2F9, var_core_value_sig1F51) {
  return {
    ...k(e.DocsTableSetTableBorderCommand["id"], var_core_value_sigF047, {
      preset: var_core_value_sigC2F9
    }, var_core_value_sig1F51),
    icon: E[var_core_value_sigC2F9]
  };
}
function Be(var_core_value_sig29F5) {
  let var_core_value_sig5A51 = var_core_value_sig29F5.defaultColor || "#1f1f1f";
  return {
    id: var_core_value_sig29F5.commandId,
    tooltip: var_core_value_sig29F5.tooltip,
    type: n.MenuItemType["BUTTON_SELECTOR"],
    icon: var_core_value_sig29F5.icon,
    selections: [{
      label: {
        name: n.COLOR_PICKER_COMPONENT,
        hoverable: false,
        selectable: false
      },
      value$: (0, o.of)(var_core_value_sig5A51)
    }],
    value$: var_core_value_sig29F5.accessor ? new o.Observable(var_core_value_sig36F8 => {
      let var_core_value_sig03E1 = var_core_value_sig29F5.accessor["get"](r.IUniverInstanceService).focused$["subscribe"](() => var_core_value_sig36F8.next(var_core_value_sig5A51));
      return var_core_value_sig36F8.next(var_core_value_sig5A51), () => var_core_value_sig03E1.unsubscribe();
    }) : (0, o.of)(var_core_value_sig5A51),
    hidden$: var_core_value_sig29F5.accessor ? j(var_core_value_sig29F5.accessor) : undefined
  };
}
function Ve(var_core_value_sigF1D1, var_core_value_sig370E) {
  return {
    id: var_core_value_sigF1D1,
    type: n.MenuItemType["SUBITEMS"],
    title: var_core_value_sig370E,
    hidden$: (0, o.of)(true)
  };
}
function He(var_core_value_sigDE14, var_core_value_sig02CB) {
  return {
    id: var_core_value_sigDE14,
    commandId: var_core_value_sigDE14,
    type: n.MenuItemType["BUTTON"],
    title: var_core_value_sig02CB,
    hidden$: (0, o.of)(true)
  };
}
function j(var_core_value_sig6CBB) {
  let var_core_value_sig68DA = qe(var_core_value_sig6CBB);
  return (0, o.combineLatest)([(0, n.getMenuHiddenObservable)(var_core_value_sig6CBB, r.UniverInstanceType["UNIVER_DOC"]), var_core_value_sig68DA.pipe((0, o.map)(var_core_value_sigBB57 => !(var_core_value_sigBB57 != null && var_core_value_sigBB57.tableId)))]).pipe((0, o.map)(([var_core_value_sig7C4A, var_core_value_sigE799]) => var_core_value_sig7C4A || var_core_value_sigE799));
}
function Ue(var_core_value_sig64D8) {
  return (0, o.combineLatest)([j(var_core_value_sig64D8), We(var_core_value_sig64D8)]).pipe((0, o.map)(([var_core_value_sigB601, var_core_value_sig8B71]) => var_core_value_sigB601 || var_core_value_sig8B71));
}
function We(var_core_value_sigD755) {
  let var_core_value_sigF897 = var_core_value_sigD755.get(r.IUniverInstanceService);
  return new o["Observable"](var_core_value_sigAEFB => {
    let var_core_value_sig826B = var_core_value_sig8178 => {
        var var_core_value_sigE9ED;
        let var_core_value_sigB577 = var_core_value_sig8178 ? var_core_value_sigF897.getUnit(var_core_value_sig8178, r.UniverInstanceType["UNIVER_DOC"]) : var_core_value_sigF897.getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"]),
          var_core_value_sig9572 = var_core_value_sigB577 == null || (var_core_value_sigE9ED = var_core_value_sigB577.getSnapshot()) == null || (var_core_value_sigE9ED = var_core_value_sigE9ED.documentStyle) == null ? undefined : var_core_value_sigE9ED.documentFlavor;
        var_core_value_sigAEFB.next(var_core_value_sig9572 !== r.DocumentFlavor["TRADITIONAL"]);
      },
      var_core_value_sigCF89 = var_core_value_sigF897.focused$["subscribe"](var_core_value_sigD873 => var_core_value_sig826B(var_core_value_sigD873 ?? null));
    return var_core_value_sig826B(), () => var_core_value_sigCF89.unsubscribe();
  });
}
function Ge(var_core_value_sigA578) {
  let var_core_value_sig0260 = var_core_value_sigA578.get(r.IUniverInstanceService),
    var_core_value_sig034D = var_core_value_sigA578.get(e.DocsTableSelectionService);
  return qe(var_core_value_sigA578).pipe((0, o.map)(var_core_value_sig00CB => {
    let var_core_value_sig77EE = var_core_value_sig0260.getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"]),
      var_core_value_sig9F76 = var_core_value_sig00CB != null && var_core_value_sig00CB.tableId ? var_core_value_sig00CB : var_core_value_sig034D.getStableTableSelection();
    return !var_core_value_sig77EE || !(var_core_value_sig9F76 != null && var_core_value_sig9F76.tableId) || !(0, e.canMergeCells)(var_core_value_sig77EE.getSnapshot(), var_core_value_sig9F76.tableId, var_core_value_sig9F76);
  }));
}
function Ke(var_core_value_sig89EC) {
  let var_core_value_sig9975 = var_core_value_sig89EC.get(r.IUniverInstanceService),
    var_core_value_sigD6D9 = var_core_value_sig89EC.get(e.DocsTableSelectionService);
  return qe(var_core_value_sig89EC).pipe((0, o.map)(var_core_value_sigB008 => {
    let var_core_value_sig8721 = var_core_value_sig9975.getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"]),
      var_core_value_sig08BA = var_core_value_sigB008 != null && var_core_value_sigB008.tableId ? var_core_value_sigB008 : var_core_value_sigD6D9.getStableTableSelection();
    return !var_core_value_sig8721 || !(var_core_value_sig08BA != null && var_core_value_sig08BA.tableId) || !(0, e.canUnmergeCells)(var_core_value_sig8721.getSnapshot(), var_core_value_sig08BA.tableId, var_core_value_sig08BA);
  }));
}
function qe(var_core_value_sig2637) {
  let var_core_value_sigAF1D = var_core_value_sig2637.get(e.DocsTableSelectionService);
  return var_core_value_sigAF1D.selectionChange$["pipe"]((0, o.startWith)(var_core_value_sigAF1D.getCurrentSelection()));
}
const Je = {
    [n.RibbonInsertGroup["MEDIA"]]: {
      [v]: {
        order: 2,
        menuItemFactory: x
      }
    }
  },
  Ye = {
    [n.MenuManagerPosition["RIBBON"]]: {
      [n.RibbonPosition["INSERT"]]: Je,
      [n.RibbonPosition["START"]]: {
        "ribbon.start.docs-table-style": {
          order: 20,
          [e.DocsTableSetTableBackgroundCommand["id"]]: {
            order: 0,
            menuItemFactory: Fe
          },
          [e.DocsTableSetTableBorderColorCommand["id"]]: {
            order: 1,
            menuItemFactory: Ie
          },
          [e.DocsTableSetTableBorderWidthCommand["id"]]: {
            order: 2,
            menuItemFactory: Le
          },
          [e.DocsTableSetTableBorderStyleCommand["id"]]: {
            order: 3,
            menuItemFactory: Re
          }
        }
      }
    }
  },
  Xe = {
    ...Je,
    [n.ContextMenuPosition["PARAGRAPH"]]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [t.INSERT_BELLOW_MENU_ID]: {
          [t.DocCreateTableOperation["id"]]: {
            order: 4,
            menuItemFactory: ee
          }
        }
      },
      [t.EMPTY_PARAGRAPH_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [t.DocCreateTableOperation["id"]]: {
            order: 4,
            menuItemFactory: ee
          }
        }
      },
      [t.DOC_CONTENT_INSERT_MENU_ID]: {
        "docs-table-ui.menu.cell-style-context-group": {
          order: -1,
          tiny: true,
          [e.DocsTableSetTableBackgroundCommand["id"]]: {
            order: 0,
            menuItemFactory: Fe
          },
          [e.DocsTableSetTableBorderColorCommand["id"]]: {
            order: 1,
            menuItemFactory: Ie
          },
          [e.DocsTableSetTableBorderWidthCommand["id"]]: {
            order: 2,
            menuItemFactory: Le
          },
          [e.DocsTableSetTableBorderStyleCommand["id"]]: {
            order: 3,
            menuItemFactory: Re
          }
        },
        [n.ContextMenuGroup["LAYOUT"]]: {
          [t.DocCreateTableOperation["id"]]: {
            order: 4,
            menuItemFactory: ee
          },
          [T]: {
            order: 8,
            menuItemFactory: ue,
            "docs-table-ui.menu.border-all": {
              order: 0,
              menuItemFactory: Te
            },
            "docs-table-ui.menu.border-inner": {
              order: 1,
              menuItemFactory: De
            },
            "docs-table-ui.menu.border-outer": {
              order: 2,
              menuItemFactory: je
            },
            "docs-table-ui.menu.border-top": {
              order: 3,
              menuItemFactory: Pe
            },
            "docs-table-ui.menu.border-bottom": {
              order: 4,
              menuItemFactory: Ee
            },
            "docs-table-ui.menu.border-left": {
              order: 5,
              menuItemFactory: Ae
            },
            "docs-table-ui.menu.border-right": {
              order: 6,
              menuItemFactory: Ne
            },
            "docs-table-ui.menu.border-inner-horizontal": {
              order: 7,
              menuItemFactory: Oe
            },
            "docs-table-ui.menu.border-inner-vertical": {
              order: 8,
              menuItemFactory: ke
            },
            "docs-table-ui.menu.border-none": {
              order: 9,
              menuItemFactory: Me
            }
          }
        }
      },
      [t.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        insert: {
          [t.DocCreateTableOperation["id"]]: {
            order: 0,
            menuItemFactory: S
          }
        }
      },
      [t.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        insert: {
          [t.DocCreateTableOperation["id"] + ".below"]: {
            order: 0,
            menuItemFactory: ee
          }
        }
      },
      [t.DOC_TABLE_BLOCK_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [t.INSERT_BELLOW_MENU_ID]: {
            order: 0,
            menuItemFactory: t.ParagraphMenuInsertBelowSubmenuItemFactory
          }
        }
      }
    },
    [n.ContextMenuPosition["MAIN_AREA"]]: {
      [n.ContextMenuGroup["DATA"]]: {
        [oe]: {
          order: 0,
          menuItemFactory: pe
        },
        [se]: {
          order: 1,
          menuItemFactory: me
        }
      },
      [n.ContextMenuGroup["FORMAT"]]: {
        [t.DeleteLeftCommand["id"]]: {
          order: 0,
          menuItemFactory: D
        }
      },
      [n.ContextMenuGroup["LAYOUT"]]: {
        [ie]: {
          order: 1,
          menuItemFactory: de
        },
        [ae]: {
          order: 2,
          menuItemFactory: fe
        },
        [re]: {
          order: 20,
          menuItemFactory: ce,
          "docs-table-ui.menu.insert-row-above": {
            order: 0,
            menuItemFactory: O
          },
          "docs-table-ui.menu.insert-row-below": {
            order: 1,
            menuItemFactory: he
          },
          "docs-table-ui.menu.insert-column-left": {
            order: 2,
            menuItemFactory: ge
          },
          "docs-table-ui.menu.insert-column-right": {
            order: 3,
            menuItemFactory: _e
          }
        },
        [w]: {
          order: 30,
          menuItemFactory: le,
          "docs-table-ui.menu.delete-rows": {
            order: 0,
            menuItemFactory: ve
          },
          "docs-table-ui.menu.delete-columns": {
            order: 1,
            menuItemFactory: ye
          },
          "docs-table-ui.menu.delete-table": {
            order: 2,
            menuItemFactory: be
          }
        },
        "docs-table-ui.menu.merge-cells": {
          order: 40,
          menuItemFactory: xe
        },
        "docs-table-ui.menu.unmerge-cells": {
          order: 41,
          menuItemFactory: Se
        }
      },
      [n.ContextMenuGroup["OTHERS"]]: {
        "docs-table-ui.menu.insert-title-row": {
          order: 0,
          menuItemFactory: Ce
        },
        "docs-table-ui.menu.pin-header": {
          order: 1,
          menuItemFactory: we
        }
      }
    }
  };
var Ze = "@univerjs-pro/docs-table-ui",
  Qe = "1.0.0-insiders.20260907-70fc579";
const $e = {},
  et = "docs-table-ui.border-panel",
  tt = {
    colorChannel1: "#9ca3af"
  },
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
    top: d.UpBorderDoubleIcon
  },
  rt = [{
    label: "docs-table-ui.borderAll",
    preset: e.DocsTableBorderPreset["All"]
  }, {
    label: "docs-table-ui.borderInner",
    preset: e.DocsTableBorderPreset["Inner"]
  }, {
    label: "docs-table-ui.borderOuter",
    preset: e.DocsTableBorderPreset["Outer"]
  }, {
    label: "docs-table-ui.borderNone",
    preset: e.DocsTableBorderPreset["None"]
  }];
function it(var_core_value_sigC92D) {
  var var_core_value_sigEA3D;
  let var_core_value_sig2841 = (var_core_value_sigEA3D = var_core_value_sigC92D.popup) == null ? undefined : var_core_value_sigEA3D.extraProps,
    var_core_value_sig9FE1 = (var_core_value_sig2841 == null ? undefined : var_core_value_sig2841.presets) ?? rt,
    var_core_value_sig9DAA = var_core_value_sig2841 == null ? undefined : var_core_value_sig2841.onSelect,
    var_core_value_sig1F8A = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsx)("section", {
    className: "univer-box-border\x20univer-grid\x20univer-grid-cols-5\x20univer-gap-1\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-2\x20univer-text-primary-600\x20univer-shadow-lg",
    "data-u-comp": et,
    children: var_core_value_sig9FE1.map(({
      label: var_core_value_sigDBB5,
      preset: var_core_value_sigCFAC
    }) => {
      let var_core_value_sig237B = nt[var_core_value_sigCFAC],
        var_core_value_sigFEAB = var_core_value_sig1F8A.t(var_core_value_sigDBB5);
      return (0, s.jsx)(i.Button, {
        size: "icon",
        variant: "ghost",
        type: "button",
        "aria-label": var_core_value_sigFEAB,
        title: var_core_value_sigFEAB,
        onClick: var_core_value_sigA12B => {
          var_core_value_sigA12B.preventDefault(), var_core_value_sig9DAA == null || var_core_value_sig9DAA(var_core_value_sigCFAC);
        },
        children: (0, s.jsx)(var_core_value_sig237B, {
          className: "univer-size-4 univer-text-base univer-text-current",
          extend: tt
        })
      }, var_core_value_sigCFAC);
    })
  });
}
const at = "docs-table-ui.column-type-panel",
  ot = ["docs-table-ui.columnTypeText", "docs-table-ui.columnTypeNumber", "docs-table-ui.columnTypeDate", "docs-table-ui.columnTypeCheckbox", "docs-table-ui.columnTypeDropdown"];
function st() {
  let var_core_value_sigEBB4 = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsx)("section", {
    "data-u-comp": at,
    children: ot.map(var_core_value_sigE347 => (0, s.jsx)(i.Button, {
      type: "button",
      "aria-label": var_core_value_sigEBB4.t(var_core_value_sigE347),
      children: var_core_value_sigEBB4.t(var_core_value_sigE347)
    }, var_core_value_sigE347))
  });
}
const ct = {
    icon: "TextTypeIcon",
    value: r.NamedStyleType["NORMAL_TEXT"]
  },
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
    [r.PresetListType["CHECK_LIST_CHECKED"]]: "TodoListDoubleIcon"
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
    [r.NamedStyleType["NAMED_STYLE_TYPE_UNSPECIFIED"]]: "TextTypeIcon"
  };
function dt(var_core_value_sig2B74, var_core_value_sig0483) {
  var var_core_value_sig4A48;
  let var_core_value_sigD170 = mt(var_core_value_sig2B74, var_core_value_sig0483);
  if (!var_core_value_sigD170) return ct;
  let var_core_value_sig90E5 = _t(var_core_value_sigD170);
  return {
    icon: vt(var_core_value_sig90E5, (var_core_value_sig4A48 = var_core_value_sigD170.paragraphStyle) == null ? undefined : var_core_value_sig4A48.namedStyleType),
    value: var_core_value_sig90E5
  };
}
function ft(var_core_value_sig7000, var_core_value_sigD7C5) {
  if (!var_core_value_sig7000 || !(var_core_value_sigD7C5 != null && var_core_value_sigD7C5.tableId)) return [];
  let var_core_value_sig3633 = (0, e.getTableRangeById)(var_core_value_sig7000, var_core_value_sigD7C5.tableId);
  if (!var_core_value_sig3633) return [];
  let var_core_value_sig1DF5 = Math.min(var_core_value_sigD7C5.startRow, var_core_value_sigD7C5.endRow),
    var_core_value_sig90A3 = Math.max(var_core_value_sigD7C5.startRow, var_core_value_sigD7C5.endRow),
    var_core_value_sig28BE = Math.min(var_core_value_sigD7C5.startColumn, var_core_value_sigD7C5.endColumn),
    var_core_value_sig0224 = Math.max(var_core_value_sigD7C5.startColumn, var_core_value_sigD7C5.endColumn),
    var_core_value_sig854B = new Set(),
    var_core_value_sig1FF6 = [];
  for (let var_core_value_sig3C5B = var_core_value_sig1DF5; var_core_value_sig3C5B <= var_core_value_sig90A3; var_core_value_sig3C5B++) for (let var_core_value_sigF230 = var_core_value_sig28BE; var_core_value_sigF230 <= var_core_value_sig0224; var_core_value_sigF230++) {
    var var_core_value_sig4B27;
    let var_core_value_sig7524 = (var_core_value_sig4B27 = var_core_value_sig3633.rows[var_core_value_sig3C5B]) == null ? undefined : var_core_value_sig4B27.cells[var_core_value_sigF230];
    if (!var_core_value_sig7524) continue;
    let var_core_value_sig2AD8 = var_core_value_sig7524.startOffset + 1,
      var_core_value_sig2AD0 = Math.max(var_core_value_sig2AD8, var_core_value_sig7524.endOffset - 1),
      var_core_value_sig3EEE = var_core_value_sig2AD8 + ":" + var_core_value_sig2AD0;
    var_core_value_sig854B.has(var_core_value_sig3EEE) || (var_core_value_sig854B.add(var_core_value_sig3EEE), var_core_value_sig1FF6.push({
      collapsed: var_core_value_sig2AD8 === var_core_value_sig2AD0,
      endOffset: var_core_value_sig2AD0,
      segmentId: var_core_value_sigD7C5.segmentId ?? "",
      startOffset: var_core_value_sig2AD8
    }));
  }
  return var_core_value_sig1FF6.sort((var_core_value_sig200B, var_core_value_sig3863) => var_core_value_sig200B.startOffset - var_core_value_sig3863.startOffset || var_core_value_sig200B.endOffset - var_core_value_sig3863.endOffset);
}
function pt(var_core_value_sig3A41, var_core_value_sig269A) {
  let var_core_value_sigBF53 = gt(var_core_value_sig3A41, var_core_value_sig269A);
  if (!var_core_value_sigBF53) return [];
  let var_core_value_sigD9BB = var_core_value_sigBF53.startOffset + 1,
    var_core_value_sigF549 = Math.max(var_core_value_sigD9BB, var_core_value_sigBF53.endOffset - 1);
  return [{
    collapsed: var_core_value_sigD9BB === var_core_value_sigF549,
    endOffset: var_core_value_sigF549,
    segmentId: (var_core_value_sig269A == null ? undefined : var_core_value_sig269A.segmentId) ?? "",
    startOffset: var_core_value_sigD9BB
  }];
}
function mt(var_core_value_sigC125, var_core_value_sigB63D) {
  var var_core_value_sig8255;
  if (!var_core_value_sigC125 || !(var_core_value_sigB63D != null && var_core_value_sigB63D.tableId)) return null;
  let var_core_value_sigBFC7 = (var_core_value_sig8255 = var_core_value_sigC125.body) == null ? undefined : var_core_value_sig8255.paragraphs,
    var_core_value_sig933F = gt(var_core_value_sigC125, var_core_value_sigB63D);
  return !var_core_value_sig933F || !(var_core_value_sigBFC7 != null && var_core_value_sigBFC7.length) ? null : ht(var_core_value_sigBFC7, var_core_value_sig933F.startOffset + 1);
}
function ht(var_core_value_sig29DE, var_core_value_sig4AFB) {
  let var_core_value_sigC7EA = -1;
  for (let var_core_value_sigC97C of var_core_value_sig29DE) {
    if (var_core_value_sig4AFB > var_core_value_sigC7EA && var_core_value_sig4AFB <= var_core_value_sigC97C.startIndex) return var_core_value_sigC97C;
    var_core_value_sigC7EA = var_core_value_sigC97C.startIndex;
  }
  return null;
}
function gt(var_core_value_sigDAB9, var_core_value_sig9CF7) {
  var var_core_value_sigCCE5;
  if (!var_core_value_sigDAB9 || !(var_core_value_sig9CF7 != null && var_core_value_sig9CF7.tableId)) return null;
  let var_core_value_sig5933 = (0, e.getTableRangeById)(var_core_value_sigDAB9, var_core_value_sig9CF7.tableId),
    var_core_value_sig884B = Math.min(var_core_value_sig9CF7.startRow, var_core_value_sig9CF7.endRow),
    var_core_value_sig4E30 = Math.min(var_core_value_sig9CF7.startColumn, var_core_value_sig9CF7.endColumn);
  return (var_core_value_sig5933 == null || (var_core_value_sigCCE5 = var_core_value_sig5933.rows[var_core_value_sig884B]) == null ? undefined : var_core_value_sigCCE5.cells[var_core_value_sig4E30]) ?? null;
}
function _t(var_core_value_sig9730) {
  var var_core_value_sig8E4A, var_core_value_sig300B;
  let var_core_value_sig8457 = (var_core_value_sig8E4A = var_core_value_sig9730.bullet) == null ? undefined : var_core_value_sig8E4A.listType;
  return var_core_value_sig8457 != null && var_core_value_sig8457.startsWith(r.PresetListType["ORDER_LIST"]) ? r.PresetListType["ORDER_LIST"] : var_core_value_sig8457 != null && var_core_value_sig8457.startsWith(r.PresetListType["BULLET_LIST"]) ? r.PresetListType["BULLET_LIST"] : var_core_value_sig8457 === r.PresetListType["CHECK_LIST"] || var_core_value_sig8457 === r.PresetListType["CHECK_LIST_CHECKED"] ? r.PresetListType["CHECK_LIST"] : ((var_core_value_sig300B = var_core_value_sig9730.paragraphStyle) == null ? undefined : var_core_value_sig300B.namedStyleType) ?? r.NamedStyleType["NORMAL_TEXT"];
}
function vt(var_core_value_sigB30D, var_core_value_sigDB33) {
  return typeof var_core_value_sigB30D == "string" ? lt[var_core_value_sigB30D] ?? ct.icon : ut[var_core_value_sigB30D] ?? ut[var_core_value_sigDB33 ?? r.NamedStyleType["NORMAL_TEXT"]] ?? ct.icon;
}
function M(var_core_value_sig6C8C) {
  return {
    id: var_core_value_sig6C8C.id,
    type: r.CommandType["COMMAND"],
    handler: async (var_core_value_sigC4B1, var_core_value_sig1BD9) => {
      let var_core_value_sigE43E = var_core_value_sig6C8C.mapParams ? var_core_value_sig6C8C.mapParams(var_core_value_sig1BD9) : var_core_value_sig1BD9;
      return kt(var_core_value_sigC4B1, var_core_value_sig6C8C.targetCommandId, var_core_value_sigE43E);
    }
  };
}
const yt = {
    id: "docs-table-ui.command.floating-text-style",
    type: r.CommandType["COMMAND"],
    handler: async (var_core_value_sig7A5E, var_core_value_sig838E) => {
      if (!var_core_value_sig838E) return false;
      let {
        value: var_core_value_sig9A5B
      } = var_core_value_sig838E;
      if (typeof var_core_value_sig9A5B == "number") return kt(var_core_value_sig7A5E, t.SetParagraphNamedStyleCommand["id"], {
        value: var_core_value_sig9A5B
      }, "top-left");
      switch (var_core_value_sig9A5B) {
        case r.PresetListType["ORDER_LIST"]:
          return kt(var_core_value_sig7A5E, t.OrderListCommand["id"], {
            value: var_core_value_sig9A5B
          }, "top-left");
        case r.PresetListType["BULLET_LIST"]:
          return kt(var_core_value_sig7A5E, t.BulletListCommand["id"], {
            value: var_core_value_sig9A5B
          }, "top-left");
        case r.PresetListType["CHECK_LIST"]:
          return kt(var_core_value_sig7A5E, t.CheckListCommand["id"], {
            value: var_core_value_sig9A5B
          }, "top-left");
        default:
          return false;
      }
    }
  },
  bt = M({
    id: "docs-table-ui.command.floating-bold",
    targetCommandId: t.SetInlineFormatBoldCommand["id"]
  }),
  xt = M({
    id: "docs-table-ui.command.floating-italic",
    targetCommandId: t.SetInlineFormatItalicCommand["id"]
  }),
  St = M({
    id: "docs-table-ui.command.floating-underline",
    targetCommandId: t.SetInlineFormatUnderlineCommand["id"]
  }),
  Ct = M({
    id: "docs-table-ui.command.floating-strike-through",
    targetCommandId: t.SetInlineFormatStrikethroughCommand["id"]
  }),
  wt = M({
    id: "docs-table-ui.command.floating-font-family",
    targetCommandId: t.SetInlineFormatFontFamilyCommand["id"]
  }),
  Tt = M({
    id: "docs-table-ui.command.floating-font-size",
    targetCommandId: t.SetInlineFormatFontSizeCommand["id"]
  }),
  Et = M({
    id: "docs-table-ui.command.floating-align",
    targetCommandId: t.AlignOperationCommand["id"],
    mapParams: var_core_value_sigC860 => ({
      alignType: var_core_value_sigC860 == null ? undefined : var_core_value_sigC860.value
    })
  }),
  Dt = M({
    id: "docs-table-ui.command.floating-text-color",
    targetCommandId: t.SetInlineFormatTextColorCommand["id"]
  }),
  Ot = M({
    id: "docs-table-ui.command.floating-text-background-color",
    targetCommandId: t.SetInlineFormatTextBackgroundColorCommand["id"]
  });
async function kt(var_core_value_sigE64C, var_core_value_sigF39B, var_core_value_sig9B88, var_core_value_sig992A = "selection") {
  var var_core_value_sig6281;
  let var_core_value_sig9B01 = var_core_value_sigE64C.get(r.ICommandService),
    var_core_value_sigA724 = var_core_value_sigE64C.get(e.DocsTableSelectionService),
    var_core_value_sig385E = var_core_value_sigE64C.get(r.IUniverInstanceService),
    var_core_value_sig10D3 = var_core_value_sigE64C.get(l.DocSelectionManagerService),
    var_core_value_sig41F2 = var_core_value_sig385E.getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"]),
    var_core_value_sig32DD = var_core_value_sigA724.getStableTableSelection();
  if (!var_core_value_sig41F2 || !(var_core_value_sig32DD != null && var_core_value_sig32DD.tableId)) return var_core_value_sig9B01.executeCommand(var_core_value_sigF39B, var_core_value_sig9B88);
  let var_core_value_sig7A88 = var_core_value_sig41F2.getSnapshot(),
    var_core_value_sig6CFC = var_core_value_sig992A === "top-left" ? pt(var_core_value_sig7A88, var_core_value_sig32DD) : ft(var_core_value_sig7A88, var_core_value_sig32DD);
  if (!var_core_value_sig6CFC.length) return false;
  let var_core_value_sig3EC0 = var_core_value_sig41F2.getUnitId(),
    var_core_value_sigEA69 = [...(var_core_value_sig10D3.getDocRanges() ?? [])];
  (var_core_value_sig6281 = var_core_value_sig10D3.replaceDocRanges) == null || var_core_value_sig6281.call(var_core_value_sig10D3, var_core_value_sig6CFC, {
    unitId: var_core_value_sig3EC0,
    subUnitId: var_core_value_sig3EC0
  }, false);
  try {
    return await var_core_value_sig9B01.executeCommand(var_core_value_sigF39B, var_core_value_sig9B88);
  } finally {
    var var_core_value_sigF42A;
    (var_core_value_sigF42A = var_core_value_sig10D3.replaceDocRanges) == null || var_core_value_sigF42A.call(var_core_value_sig10D3, var_core_value_sigEA69, {
      unitId: var_core_value_sig3EC0,
      subUnitId: var_core_value_sig3EC0
    }, false);
  }
}
function At(var_core_value_sig898E) {
  "@babel/helpers - typeof";

  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigA937) {
    return typeof var_core_value_sigA937;
  } : function (var_core_value_sigCAD5) {
    return var_core_value_sigCAD5 && typeof Symbol == "function" && var_core_value_sigCAD5.constructor === Symbol && var_core_value_sigCAD5 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigCAD5;
  }, At(var_core_value_sig898E);
}
function jt(var_core_value_sigC481, var_core_value_sig27B7) {
  if (At(var_core_value_sigC481) != "object" || !var_core_value_sigC481) return var_core_value_sigC481;
  var var_core_value_sig2DAD = var_core_value_sigC481[Symbol.toPrimitive];
  if (var_core_value_sig2DAD !== undefined) {
    var var_core_value_sig00DE = var_core_value_sig2DAD.call(var_core_value_sigC481, var_core_value_sig27B7 || "default");
    if (At(var_core_value_sig00DE) != "object") return var_core_value_sig00DE;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig27B7 === "string" ? String : Number)(var_core_value_sigC481);
}
function Mt(var_core_value_sigEF7C) {
  var var_core_value_sig07E7 = jt(var_core_value_sigEF7C, "string");
  return At(var_core_value_sig07E7) == "symbol" ? var_core_value_sig07E7 : var_core_value_sig07E7 + "";
}
function N(var_core_value_sig6005, var_core_value_sig25A4, var_core_value_sigB591) {
  return (var_core_value_sig25A4 = Mt(var_core_value_sig25A4)) in var_core_value_sig6005 ? Object.defineProperty(var_core_value_sig6005, var_core_value_sig25A4, {
    value: var_core_value_sigB591,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig6005[var_core_value_sig25A4] = var_core_value_sigB591, var_core_value_sig6005;
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
  typeValue: undefined
};
var Pt = class extends r.Disposable {
  constructor(...var_core_value_sigE503) {
    super(...var_core_value_sigE503), N(this, "_state", Nt), N(this, "state$", new o["BehaviorSubject"](Nt));
  }
  getState() {
    return this._state;
  }
  setState(var_core_value_sig48DD) {
    this._updateState(var_core_value_sig48DD);
  }
  show(var_core_value_sig5E6A = {}) {
    this._updateState({
      visible: true,
      ...var_core_value_sig5E6A
    });
  }
  hide() {
    this._updateState({
      ...Nt,
      visible: false
    });
  }
  reset() {
    this._state = Nt, this.state$["next"](this._state);
  }
  setDeleteHoverActive(var_core_value_sigB7FC) {
    this._updateState({
      deleteHoverActive: var_core_value_sigB7FC
    });
  }
  setDeleteHover(var_core_value_sig9CD9) {
    this.setDeleteHoverActive(var_core_value_sig9CD9);
  }
  setHoverActive(var_core_value_sigFD0C) {
    this._updateState({
      hoverActive: var_core_value_sigFD0C
    });
  }
  dispose() {
    this.state$["complete"](), super.dispose();
  }
  _updateState(var_core_value_sig849B) {
    this._state = {
      ...this._state,
      ...var_core_value_sig849B
    }, this.state$["next"](this._state);
  }
};
function Ft({
  items: var_core_value_sigB272
}) {
  return (0, s.jsx)("div", {
    className: "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: var_core_value_sigB272.map(var_core_value_sig5F1A => (0, s.jsx)(n.ToolbarItem, {
      ...var_core_value_sig5F1A
    }, var_core_value_sig5F1A.id))
  });
}
function It({
  items: var_core_value_sig6F52,
  children: var_core_value_sig09C4
}) {
  return (0, s.jsxs)("div", {
    className: "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: [var_core_value_sig6F52 == null ? undefined : var_core_value_sig6F52.map(var_core_value_sigB455 => (0, s.jsx)(n.ToolbarItem, {
      ...var_core_value_sigB455
    }, var_core_value_sigB455.id)), var_core_value_sig09C4]
  });
}
const Lt = [0, 0.5, 0.75, 1, 1.5, 2.25, 3, 4.5, 6],
  Rt = [{
    value: "solid",
    label: "docs-table-ui.borderStyleSolid",
    icon: d.TableBorderStyleSolidIcon
  }, {
    value: "dot",
    label: "docs-table-ui.borderStyleDotted",
    icon: d.TableBorderStyleDottedIcon
  }, {
    value: "dash",
    label: "docs-table-ui.borderStyleDashed",
    icon: d.TableBorderStyleDashedIcon
  }],
  zt = [{
    label: "docs-table-ui.borderAll",
    preset: e.DocsTableBorderPreset["All"]
  }, {
    label: "docs-table-ui.borderInner",
    preset: e.DocsTableBorderPreset["Inner"]
  }, {
    label: "docs-table-ui.borderOuter",
    preset: e.DocsTableBorderPreset["Outer"]
  }, {
    label: "docs-table-ui.borderTop",
    preset: e.DocsTableBorderPreset["Top"]
  }, {
    label: "docs-table-ui.borderBottom",
    preset: e.DocsTableBorderPreset["Bottom"]
  }, {
    label: "docs-table-ui.borderLeft",
    preset: e.DocsTableBorderPreset["Left"]
  }, {
    label: "docs-table-ui.borderRight",
    preset: e.DocsTableBorderPreset["Right"]
  }, {
    label: "docs-table-ui.borderInnerHorizontal",
    preset: e.DocsTableBorderPreset["InnerHorizontal"]
  }, {
    label: "docs-table-ui.borderInnerVertical",
    preset: e.DocsTableBorderPreset["InnerVertical"]
  }, {
    label: "docs-table-ui.borderNone",
    preset: e.DocsTableBorderPreset["None"]
  }];
function Bt(var_core_value_sig8E3E) {
  let {
    children: var_core_value_sigC3D3,
    disabled: var_core_value_sig1451,
    itemId: var_core_value_sigAD57,
    open: var_core_value_sig58A8,
    title: var_core_value_sigEC1A
  } = var_core_value_sig8E3E;
  return (0, s.jsx)(i.Tooltip, {
    title: var_core_value_sigEC1A,
    placement: "bottom",
    children: (0, s.jsx)("span", {
      children: (0, s.jsx)(i.Button, {
        size: "small",
        variant: "ghost",
        type: "button",
        "data-toolbar-item": var_core_value_sigAD57,
        "aria-label": var_core_value_sigEC1A,
        disabled: var_core_value_sig1451,
        className: (0, i.clsx)({
          "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300": var_core_value_sig58A8
        }),
        children: var_core_value_sigC3D3
      })
    })
  });
}
function Vt(var_core_value_sigBDED) {
  let {
      itemId: var_core_value_sig4BFF,
      onClick: var_core_value_sig40E7
    } = var_core_value_sigBDED,
    var_core_value_sigEDBA = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsxs)(i.Button, {
    size: "large",
    variant: "ghost",
    type: "button",
    "data-toolbar-item": var_core_value_sig4BFF,
    "aria-label": var_core_value_sigEDBA.t("docs-table-ui.toolbar.resetColor"),
    className: "univer-w-full univer-justify-start",
    onClick: var_core_value_sig5241 => {
      var_core_value_sig5241.preventDefault(), var_core_value_sig5241.stopPropagation(), var_core_value_sig40E7();
    },
    children: [(0, s.jsx)(d.NoColorDoubleIcon, {
      className: "univer-size-5",
      extend: {
        colorChannel1: "var(--univer-primary-600)"
      }
    }), (0, s.jsx)("span", {
      children: var_core_value_sigEDBA.t("docs-table-ui.toolbar.resetColor")
    })]
  });
}
function Ht(var_core_value_sigE863) {
  let {
    color: var_core_value_sig04B4,
    onChange: var_core_value_sig1C07,
    onReset: var_core_value_sig93D6,
    resetItemId: var_core_value_sigDD05
  } = var_core_value_sigE863;
  return (0, s.jsxs)("div", {
    className: "univer-overflow-hidden univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900",
    onMouseDown: var_core_value_sigC6E5 => var_core_value_sigC6E5.stopPropagation(),
    children: [(0, s.jsx)("div", {
      className: "univer-p-4",
      children: (0, s.jsx)(i.ColorPicker, {
        value: var_core_value_sig04B4,
        onChange: var_core_value_sig1C07
      })
    }), (0, s.jsx)(i.Separator, {}), (0, s.jsx)(Vt, {
      itemId: var_core_value_sigDD05,
      onClick: var_core_value_sig93D6
    })]
  });
}
function Ut(var_core_value_sig3932) {
  let {
    active: var_core_value_sig48B2,
    children: var_core_value_sig57DF,
    disabled: var_core_value_sigC985,
    itemId: var_core_value_sig8DA6,
    label: var_core_value_sigCA69,
    onClick: var_core_value_sigB77C
  } = var_core_value_sig3932;
  return (0, s.jsx)(i.Tooltip, {
    title: var_core_value_sigCA69,
    placement: "bottom",
    children: (0, s.jsx)(i.Button, {
      size: "small",
      variant: "ghost",
      type: "button",
      "data-toolbar-item": var_core_value_sig8DA6,
      "aria-label": var_core_value_sigCA69,
      disabled: var_core_value_sigC985,
      className: (0, i.clsx)({
        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_core_value_sig48B2
      }),
      onClick: var_core_value_sigCEFB => {
        var_core_value_sigCEFB.preventDefault(), var_core_value_sigB77C();
      },
      children: var_core_value_sig57DF
    })
  });
}
function Wt(var_core_value_sig9AFF) {
  let {
    commandId: var_core_value_sig3545,
    disabled: var_core_value_sig5EE4,
    icon: var_core_value_sig7EAB,
    item: var_core_value_sig56B9,
    itemId: var_core_value_sig90CF,
    label: var_core_value_sigA386,
    onExecute: var_core_value_sigCD6E
  } = var_core_value_sig9AFF;
  return (0, s.jsx)(Ut, {
    active: (0, n.useObservable)(() => var_core_value_sig56B9.activated$ ?? (0, o.of)(false), false, false, [var_core_value_sig56B9]),
    disabled: var_core_value_sig5EE4,
    itemId: var_core_value_sig90CF,
    label: var_core_value_sigA386,
    onClick: () => var_core_value_sigCD6E(var_core_value_sig3545),
    children: var_core_value_sig7EAB
  });
}
function Gt(var_core_value_sigFD9D) {
  let {
      alignItem: var_core_value_sigA2A4,
      disabled: var_core_value_sigA1AC,
      formatItems: var_core_value_sig6180,
      onExecuteInlineCommand: var_core_value_sigB93D,
      onHorizontalAlign: var_core_value_sigB17C,
      onVerticalAlign: var_core_value_sig69B6,
      verticalAlign: var_core_value_sig708D
    } = var_core_value_sigFD9D,
    var_core_value_sig1ED2 = (0, n.useDependency)(r.LocaleService),
    [var_core_value_sig94C1, var_core_value_sigABAC] = (0, a.useState)(false),
    var_core_value_sigFAE6 = (0, n.useObservable)(() => var_core_value_sigA2A4.value$ ?? (0, o.of)(r.HorizontalAlign["LEFT"]), r.HorizontalAlign["LEFT"], false, [var_core_value_sigA2A4]),
    var_core_value_sig06AC = [{
      icon: d.LeftJustifyingIcon,
      itemId: "text-align-left",
      label: "docs-table-ui.toolbar.alignLeft",
      value: r.HorizontalAlign["LEFT"]
    }, {
      icon: d.HorizontallyIcon,
      itemId: "text-align-center",
      label: "docs-table-ui.toolbar.alignCenter",
      value: r.HorizontalAlign["CENTER"]
    }, {
      icon: d.RightJustifyingIcon,
      itemId: "text-align-right",
      label: "docs-table-ui.toolbar.alignRight",
      value: r.HorizontalAlign["RIGHT"]
    }, {
      icon: d.AlignTextBothIcon,
      itemId: "text-align-justify",
      label: "docs-table-ui.toolbar.alignJustify",
      value: r.HorizontalAlign["JUSTIFIED"]
    }],
    var_core_value_sig57E2 = [{
      icon: d.AlignTopIcon,
      itemId: "vertical-align-top",
      label: "docs-table-ui.verticalAlignTop",
      value: r.VerticalAlignmentType["TOP"]
    }, {
      icon: d.VerticalCenterIcon,
      itemId: "vertical-align-middle",
      label: "docs-table-ui.verticalAlignMiddle",
      value: r.VerticalAlignmentType["CENTER"]
    }, {
      icon: d.AlignBottomIcon,
      itemId: "vertical-align-bottom",
      label: "docs-table-ui.verticalAlignBottom",
      value: r.VerticalAlignmentType["BOTTOM"]
    }];
  return (0, s.jsx)(i.Dropdown, {
    disabled: var_core_value_sigA1AC,
    open: var_core_value_sig94C1,
    onOpenChange: var_core_value_sigABAC,
    overlay: (0, s.jsxs)("section", {
      className: (0, i.clsx)("univer-box-border\x20univer-grid\x20univer-gap-2\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-2\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900", i.borderClassName),
      onMouseDown: var_core_value_sig1537 => var_core_value_sig1537.stopPropagation(),
      children: [(0, s.jsxs)("div", {
        className: "univer-flex\x20univer-items-center\x20univer-gap-1",
        children: [(0, s.jsx)(Wt, {
          commandId: bt.id,
          disabled: var_core_value_sigA1AC,
          icon: (0, s.jsx)(d.BoldIcon, {}),
          item: var_core_value_sig6180.bold,
          itemId: "floating-text-bold",
          label: var_core_value_sig1ED2.t("docs-table-ui.toolbar.bold"),
          onExecute: var_core_value_sigB93D
        }), (0, s.jsx)(Wt, {
          commandId: xt.id,
          disabled: var_core_value_sigA1AC,
          icon: (0, s.jsx)(d.ItalicIcon, {}),
          item: var_core_value_sig6180.italic,
          itemId: "floating-text-italic",
          label: var_core_value_sig1ED2.t("docs-table-ui.toolbar.italic"),
          onExecute: var_core_value_sigB93D
        }), (0, s.jsx)(Wt, {
          commandId: St.id,
          disabled: var_core_value_sigA1AC,
          icon: (0, s.jsx)(d.UnderlineIcon, {}),
          item: var_core_value_sig6180.underline,
          itemId: "floating-text-underline",
          label: var_core_value_sig1ED2.t("docs-table-ui.toolbar.underline"),
          onExecute: var_core_value_sigB93D
        }), (0, s.jsx)(Wt, {
          commandId: Ct.id,
          disabled: var_core_value_sigA1AC,
          icon: (0, s.jsx)(d.StrikethroughIcon, {}),
          item: var_core_value_sig6180.strike,
          itemId: "floating-text-strike",
          label: var_core_value_sig1ED2.t("docs-table-ui.toolbar.strikethrough"),
          onExecute: var_core_value_sigB93D
        })]
      }), (0, s.jsx)(i.Separator, {}), (0, s.jsx)("div", {
        className: "univer-flex\x20univer-items-center\x20univer-gap-1",
        children: var_core_value_sig06AC.map(({
          icon: var_core_value_sigE4C6,
          itemId: var_core_value_sig4313,
          label: var_core_value_sigFC87,
          value: var_core_value_sig156F
        }) => (0, s.jsx)(Ut, {
          active: var_core_value_sigFAE6 === var_core_value_sig156F,
          disabled: var_core_value_sigA1AC,
          itemId: var_core_value_sig4313,
          label: var_core_value_sig1ED2.t(var_core_value_sigFC87),
          onClick: () => var_core_value_sigB17C(var_core_value_sig156F),
          children: (0, s.jsx)(var_core_value_sigE4C6, {})
        }, var_core_value_sig4313))
      }), (0, s.jsx)(i.Separator, {}), (0, s.jsx)("div", {
        className: "univer-flex univer-items-center univer-gap-1",
        children: var_core_value_sig57E2.map(({
          icon: var_core_value_sigDD51,
          itemId: var_core_value_sigF057,
          label: var_core_value_sig72F6,
          value: var_core_value_sig9FBA
        }) => (0, s.jsx)(Ut, {
          active: var_core_value_sig708D === var_core_value_sig9FBA,
          disabled: var_core_value_sigA1AC,
          itemId: var_core_value_sigF057,
          label: var_core_value_sig1ED2.t(var_core_value_sig72F6),
          onClick: () => var_core_value_sig69B6(var_core_value_sig9FBA),
          children: (0, s.jsx)(var_core_value_sigDD51, {})
        }, var_core_value_sigF057))
      })]
    }),
    children: (0, s.jsx)("span", {
      children: (0, s.jsxs)(Bt, {
        title: var_core_value_sig1ED2.t("docs-table-ui.textFormat"),
        itemId: "floating-text-format-panel",
        open: var_core_value_sig94C1,
        disabled: var_core_value_sigA1AC,
        children: [(0, s.jsx)(d.TextIcon, {}), (0, s.jsx)(d.MoreDownIcon, {
          className: "univer-text-xs"
        })]
      })
    })
  });
}
function Kt(var_core_value_sig01FC) {
  let {
      color: var_core_value_sig10FC,
      disabled: var_core_value_sig5374,
      onChange: var_core_value_sigB66D,
      onReset: var_core_value_sigD0F0
    } = var_core_value_sig01FC,
    var_core_value_sig8E31 = (0, n.useDependency)(r.LocaleService),
    [var_core_value_sig8339, var_core_value_sigA01E] = (0, a.useState)(false);
  return (0, s.jsx)(i.Dropdown, {
    disabled: var_core_value_sig5374,
    open: var_core_value_sig8339,
    onOpenChange: var_core_value_sigA01E,
    overlay: (0, s.jsx)(Ht, {
      color: var_core_value_sig10FC,
      resetItemId: "cell-background-reset",
      onChange: var_core_value_sigB66D,
      onReset: () => {
        var_core_value_sigD0F0(), var_core_value_sigA01E(false);
      }
    }),
    children: (0, s.jsx)("span", {
      children: (0, s.jsxs)(Bt, {
        title: var_core_value_sig8E31.t("docs-table-ui.tableBackgroundColor"),
        itemId: "cell-background",
        open: var_core_value_sig8339,
        disabled: var_core_value_sig5374,
        children: [(0, s.jsx)(d.PaintBucketDoubleIcon, {
          className: "univer-fill-primary-600",
          extend: {
            colorChannel1: var_core_value_sig10FC
          }
        }), (0, s.jsx)(d.MoreDownIcon, {
          className: "univer-text-xs"
        })]
      })
    })
  });
}
function qt(var_core_value_sigA41E) {
  var var_core_value_sig939C;
  let {
      color: var_core_value_sigA49E,
      disabled: var_core_value_sig6DEB,
      onChangeColor: var_core_value_sig2F0D,
      onChangeStyle: var_core_value_sig5141,
      onChangeWidth: var_core_value_sigA9E0,
      onResetColor: var_core_value_sig751D,
      onSelectPreset: var_core_value_sig2E9A,
      style: var_core_value_sigE105,
      width: var_core_value_sig0BD6
    } = var_core_value_sigA41E,
    var_core_value_sig3070 = (0, n.useDependency)(r.LocaleService),
    [var_core_value_sigC66D, var_core_value_sig8EC5] = (0, a.useState)(false),
    var_core_value_sig1056 = (0, n.useObservable)(var_core_value_sig3070.direction$, var_core_value_sig3070.getDirection()),
    var_core_value_sig6EE5 = ((var_core_value_sig939C = Rt.find(var_core_value_sigFE01 => var_core_value_sigFE01.value === var_core_value_sigE105)) == null ? undefined : var_core_value_sig939C.icon) ?? d.TableBorderStyleSolidIcon;
  return (0, s.jsx)(i.Dropdown, {
    disabled: var_core_value_sig6DEB,
    open: var_core_value_sigC66D,
    onOpenChange: var_core_value_sig8EC5,
    overlay: (0, s.jsxs)("section", {
      className: (0, i.clsx)("univer-box-border univer-grid univer-gap-2 univer-rounded-lg univer-bg-gray-0 univer-p-2 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900", i.borderClassName),
      dir: var_core_value_sig1056,
      onMouseDown: var_core_value_sigA2CE => var_core_value_sigA2CE.stopPropagation(),
      children: [(0, s.jsx)("div", {
        className: "univer-grid\x20univer-grid-cols-5\x20univer-gap-1",
        children: zt.map(({
          label: var_core_value_sig1975,
          preset: var_core_value_sig6EA1
        }) => {
          let var_core_value_sig029F = nt[var_core_value_sig6EA1],
            var_core_value_sig3767 = var_core_value_sig3070.t(var_core_value_sig1975);
          return (0, s.jsx)(i.Tooltip, {
            title: var_core_value_sig3767,
            placement: "bottom",
            children: (0, s.jsx)(i.Button, {
              size: "icon",
              variant: "ghost",
              type: "button",
              "aria-label": var_core_value_sig3767,
              onClick: () => {
                var_core_value_sig2E9A(var_core_value_sig6EA1), var_core_value_sig8EC5(false);
              },
              children: (0, s.jsx)(var_core_value_sig029F, {
                className: "univer-size-4 univer-text-current",
                extend: tt
              })
            })
          }, var_core_value_sig6EA1);
        })
      }), (0, s.jsx)(i.Separator, {}), (0, s.jsxs)("div", {
        className: "univer-flex\x20univer-items-center\x20univer-gap-2",
        children: [(0, s.jsx)(i.Dropdown, {
          overlay: (0, s.jsx)(Ht, {
            color: var_core_value_sigA49E,
            resetItemId: "border-color-reset",
            onChange: var_core_value_sig670B => {
              var_core_value_sig2F0D(var_core_value_sig670B);
            },
            onReset: var_core_value_sig751D
          }),
          children: (0, s.jsxs)(i.Button, {
            size: "small",
            variant: "ghost",
            type: "button",
            "aria-label": var_core_value_sig3070.t("docs-table-ui.borderColor"),
            children: [(0, s.jsx)(d.PaintBucketDoubleIcon, {
              className: "univer-fill-primary-600",
              extend: {
                colorChannel1: var_core_value_sigA49E
              }
            }), (0, s.jsx)(d.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        }), (0, s.jsx)(i.Dropdown, {
          overlay: (0, s.jsx)("div", {
            className: "univer-grid univer-gap-1 univer-rounded-lg univer-bg-gray-0 univer-p-1.5 univer-shadow-lg dark:!univer-bg-gray-900",
            children: Lt.map(var_core_value_sig6912 => (0, s.jsxs)(i.Button, {
              size: "middle",
              variant: "ghost",
              type: "button",
              className: (0, i.clsx)("univer-min-w-16", {
                "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_core_value_sig6912 === var_core_value_sig0BD6
              }),
              onClick: () => {
                var_core_value_sigA9E0(var_core_value_sig6912);
              },
              children: [var_core_value_sig6912, "pt"]
            }, var_core_value_sig6912))
          }),
          children: (0, s.jsxs)(i.Button, {
            size: "small",
            variant: "ghost",
            type: "button",
            "aria-label": var_core_value_sig3070.t("docs-table-ui.borderWidth"),
            children: [(0, s.jsx)(d.TableBorderWidthIcon, {
              className: "univer-text-base"
            }), (0, s.jsxs)("span", {
              className: "univer-text-xs",
              children: [var_core_value_sig0BD6, "pt"]
            }), (0, s.jsx)(d.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        }), (0, s.jsx)(i.Dropdown, {
          overlay: (0, s.jsx)("div", {
            className: "univer-grid univer-gap-1 univer-rounded-lg univer-bg-gray-0 univer-p-1.5 univer-shadow-lg dark:!univer-bg-gray-900",
            children: Rt.map(({
              icon: var_core_value_sigE235,
              label: var_core_value_sig7664,
              value: var_core_value_sig2281
            }) => (0, s.jsx)(i.Tooltip, {
              title: var_core_value_sig3070.t(var_core_value_sig7664),
              placement: "right",
              children: (0, s.jsx)(i.Button, {
                size: "middle",
                variant: "ghost",
                type: "button",
                className: (0, i.clsx)("univer-min-w-12", {
                  "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_core_value_sig2281 === var_core_value_sigE105
                }),
                onClick: () => {
                  var_core_value_sig5141(var_core_value_sig2281);
                },
                children: (0, s.jsx)(var_core_value_sigE235, {
                  className: "univer-text-base"
                })
              })
            }, var_core_value_sig2281))
          }),
          children: (0, s.jsxs)(i.Button, {
            size: "small",
            variant: "ghost",
            type: "button",
            "aria-label": var_core_value_sig3070.t("docs-table-ui.borderStyle"),
            children: [(0, s.jsx)(var_core_value_sig6EE5, {
              className: "univer-text-base"
            }), (0, s.jsx)(d.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })]
      })]
    }),
    children: (0, s.jsx)("span", {
      children: (0, s.jsxs)(Bt, {
        title: var_core_value_sig3070.t("docs-table-ui.borders"),
        itemId: "cell-border",
        open: var_core_value_sigC66D,
        disabled: var_core_value_sig6DEB,
        children: [(0, s.jsx)(d.OuterBorderDoubleIcon, {}), (0, s.jsx)(d.MoreDownIcon, {
          className: "univer-text-xs"
        })]
      })
    })
  });
}
function Jt(var_core_value_sig9DD9) {
  let {
      color: var_core_value_sig09AC,
      commandId: var_core_value_sig1613,
      disabled: var_core_value_sigADC6,
      icon: var_core_value_sig4620,
      itemId: var_core_value_sig07FB,
      onChange: var_core_value_sig617E,
      resetItemId: var_core_value_sigC85E,
      title: var_core_value_sig8293
    } = var_core_value_sig9DD9,
    [var_core_value_sig050D, var_core_value_sig37AE] = (0, a.useState)(false);
  return (0, s.jsx)(i.Dropdown, {
    disabled: var_core_value_sigADC6,
    open: var_core_value_sig050D,
    onOpenChange: var_core_value_sig37AE,
    overlay: (0, s.jsx)(Ht, {
      color: var_core_value_sig09AC,
      resetItemId: var_core_value_sigC85E,
      onChange: var_core_value_sig5E86 => {
        var_core_value_sig617E(var_core_value_sig1613, var_core_value_sig5E86);
      },
      onReset: () => {
        var_core_value_sig617E(var_core_value_sig1613, null), var_core_value_sig37AE(false);
      }
    }),
    children: (0, s.jsx)("span", {
      children: (0, s.jsxs)(Bt, {
        title: var_core_value_sig8293,
        itemId: var_core_value_sig07FB,
        open: var_core_value_sig050D,
        disabled: var_core_value_sigADC6,
        children: [var_core_value_sig4620 === "font" ? (0, s.jsx)(d.FontColorDoubleIcon, {
          className: "univer-fill-primary-600",
          extend: {
            colorChannel1: var_core_value_sig09AC
          }
        }) : (0, s.jsx)(d.PaintBucketDoubleIcon, {
          className: "univer-fill-primary-600",
          extend: {
            colorChannel1: var_core_value_sig09AC
          }
        }), (0, s.jsx)(d.MoreDownIcon, {
          className: "univer-text-xs"
        })]
      })
    })
  });
}
const Yt = "docs-table-ui.floating-toolbar";
function Xt(var_core_value_sig5B51, var_core_value_sig64FF) {
  var var_core_value_sig86F4, var_core_value_sig9E0F;
  if (!var_core_value_sig5B51 || !(var_core_value_sig64FF != null && var_core_value_sig64FF.tableId)) return null;
  let var_core_value_sig3A42 = (var_core_value_sig86F4 = (0, e.getTableRangeById)(var_core_value_sig5B51, var_core_value_sig64FF.tableId)) == null ? undefined : var_core_value_sig86F4.tableSource;
  return (var_core_value_sig3A42 == null || (var_core_value_sig9E0F = var_core_value_sig3A42.tableRows[var_core_value_sig64FF.startRow]) == null ? undefined : var_core_value_sig9E0F.tableCells[var_core_value_sig64FF.startColumn]) ?? null;
}
function Zt(var_core_value_sig8802) {
  return var_core_value_sig8802 ? [var_core_value_sig8802.borderTop, var_core_value_sig8802.borderRight, var_core_value_sig8802.borderBottom, var_core_value_sig8802.borderLeft].find(var_core_value_sig6998 => {
    var var_core_value_sigF639, var_core_value_sigEAE5;
    return !!var_core_value_sig6998 && ((((var_core_value_sigF639 = var_core_value_sig6998.width) == null ? undefined : var_core_value_sigF639.v) ?? 0) > 0 || !!((var_core_value_sigEAE5 = var_core_value_sig6998.color) != null && var_core_value_sigEAE5.rgb) || var_core_value_sig6998.dashStyle != null);
  }) ?? null : null;
}
function Qt(var_core_value_sig95D5) {
  return var_core_value_sig95D5 === r.DashStyleType["DOT"] ? "dot" : var_core_value_sig95D5 === r.DashStyleType["DASH"] ? "dash" : "solid";
}
function P(var_core_value_sigE027, var_core_value_sigE537, var_core_value_sig5D84) {
  return {
    ...var_core_value_sigE537(var_core_value_sigE027),
    ...var_core_value_sig5D84
  };
}
function F(var_core_value_sigD120, var_core_value_sigAA05, var_core_value_sigC04C) {
  return {
    ...var_core_value_sigD120,
    commandId: var_core_value_sigAA05,
    disabled$: var_core_value_sigC04C
  };
}
const $t = {
  [r.NamedStyleType["NORMAL_TEXT"]]: "docs-table-ui.toolbar.textStyle.normal",
  [r.NamedStyleType["HEADING_1"]]: "docs-table-ui.toolbar.textStyle.heading1",
  [r.NamedStyleType["HEADING_2"]]: "docs-table-ui.toolbar.textStyle.heading2",
  [r.NamedStyleType["HEADING_3"]]: "docs-table-ui.toolbar.textStyle.heading3",
  [r.NamedStyleType["HEADING_4"]]: "docs-table-ui.toolbar.textStyle.heading4",
  [r.NamedStyleType["HEADING_5"]]: "docs-table-ui.toolbar.textStyle.heading5",
  [r.PresetListType["ORDER_LIST"]]: "docs-table-ui.toolbar.textStyle.orderedList",
  [r.PresetListType["BULLET_LIST"]]: "docs-table-ui.toolbar.textStyle.unorderedList",
  [r.PresetListType["CHECK_LIST"]]: "docs-table-ui.toolbar.textStyle.checklist"
};
function en(var_core_value_sig2069) {
  let {
      label: var_core_value_sig5176,
      tooltip: var_core_value_sig71A1,
      ...var_core_value_sig72AD
    } = var_core_value_sig2069,
    var_core_value_sig9ABE = $t[String(var_core_value_sig2069.value)],
    var_core_value_sig8EF0 = var_core_value_sig2069.id === t.OrderListCommand["id"] || var_core_value_sig2069.id === t.BulletListCommand["id"] || var_core_value_sig2069.id === t.CheckListCommand["id"] ? yt.id : var_core_value_sig2069.id;
  return {
    ...var_core_value_sig72AD,
    id: var_core_value_sig8EF0,
    label: var_core_value_sig9ABE,
    ...(var_core_value_sig71A1 ? {
      tooltip: var_core_value_sig9ABE
    } : {})
  };
}
function tn(var_core_value_sig234B) {
  return var_core_value_sig234B && (Array.isArray(var_core_value_sig234B) ? var_core_value_sig234B.map(en) : var_core_value_sig234B.pipe((0, o.map)(var_core_value_sigE94C => var_core_value_sigE94C.map(en))));
}
function nn() {
  var var_core_value_sig8169, var_core_value_sigC5FB, var_core_value_sig5453, var_core_value_sig8725, var_core_value_sig513B, var_core_value_sig5501, var_core_value_sig7784;
  let var_core_value_sigB706 = (0, n.useDependency)(r.ICommandService),
    var_core_value_sig5FD01 = (0, n.useDependency)(r.LocaleService),
    var_core_value_sig77E3 = (0, n.useDependency)(r.Injector),
    var_core_value_sigB071 = (0, n.useDependency)(r.IUniverInstanceService),
    var_core_value_sig15FE = (0, n.useDependency)(Pt),
    var_core_value_sigCF47 = (0, n.useObservable)(() => var_core_value_sig15FE.state$, var_core_value_sig15FE.getState(), false, [var_core_value_sig15FE]),
    var_core_value_sigB0F9 = !!var_core_value_sigCF47.selection && var_core_value_sigCF47.selection["startRow"] >= 0 && var_core_value_sigCF47.selection["endRow"] >= 0 && var_core_value_sigCF47.selection["startColumn"] >= 0 && var_core_value_sigCF47.selection["endColumn"] >= 0,
    var_core_value_sigAF12 = var_core_value_sig77E3,
    var_core_value_sigC60C = (0, a.useMemo)(() => var_core_value_sig15FE.state$["pipe"]((0, o.map)(var_core_value_sig09B8 => !var_core_value_sig09B8.selection)), [var_core_value_sig15FE]),
    var_core_value_sig1C3C = (0, a.useMemo)(() => var_core_value_sig15FE.state$["pipe"]((0, o.map)(var_core_value_sig6F91 => var_core_value_sig6F91.typeValue ?? r.NamedStyleType["NORMAL_TEXT"])), [var_core_value_sig15FE]),
    var_core_value_sig71CF = (0, a.useMemo)(() => {
      let var_core_value_sig6D47 = P(var_core_value_sigAF12, t.FloatTextStyleMenuItemFactory);
      return {
        ...var_core_value_sig6D47,
        commandId: yt.id,
        disabled$: var_core_value_sigC60C,
        icon: var_core_value_sigCF47.typeIcon ?? "TextTypeIcon",
        selections: tn(var_core_value_sig6D47.selections),
        tooltip: "docs-table-ui.toolbar.textStyle.tooltip",
        value$: var_core_value_sig1C3C
      };
    }, [var_core_value_sigAF12, var_core_value_sigC60C, var_core_value_sig1C3C, var_core_value_sigCF47.typeIcon]),
    var_core_value_sigC341 = (0, a.useMemo)(() => [F(P(var_core_value_sigAF12, t.FontFamilySelectorMenuItemFactory), wt.id, var_core_value_sigC60C), F(P(var_core_value_sigAF12, t.FontSizeSelectorMenuItemFactory), Tt.id, var_core_value_sigC60C)], [var_core_value_sigAF12, var_core_value_sigC60C]),
    var_core_value_sigBA47 = (0, a.useMemo)(() => ({
      align: F(P(var_core_value_sigAF12, t.AlignMenuItemFactory), Et.id, var_core_value_sigC60C),
      bold: F(P(var_core_value_sigAF12, t.BoldMenuItemFactory), bt.id, var_core_value_sigC60C),
      italic: F(P(var_core_value_sigAF12, t.ItalicMenuItemFactory), xt.id, var_core_value_sigC60C),
      strike: F(P(var_core_value_sigAF12, t.StrikeThroughMenuItemFactory), Ct.id, var_core_value_sigC60C),
      underline: F(P(var_core_value_sigAF12, t.UnderlineMenuItemFactory), St.id, var_core_value_sigC60C)
    }), [var_core_value_sigAF12, var_core_value_sigC60C]),
    var_core_value_sig3DF7 = (0, a.useMemo)(() => [F(P(var_core_value_sigAF12, t.TextColorSelectorMenuItemFactory), Dt.id, var_core_value_sigC60C), F(P(var_core_value_sigAF12, t.BackgroundColorSelectorMenuItemFactory), Ot.id, var_core_value_sigC60C)], [var_core_value_sigAF12, var_core_value_sigC60C]),
    var_core_value_sigD49F = (0, n.useObservable)(() => {
      var var_core_value_sigCB82;
      return ((var_core_value_sigCB82 = var_core_value_sig3DF7[0]) == null ? undefined : var_core_value_sigCB82.value$) ?? (0, o.of)(r.DEFAULT_STYLES["cl"].rgb);
    }, r.DEFAULT_STYLES["cl"].rgb, false, [var_core_value_sig3DF7]),
    var_core_value_sigCECC = (0, n.useObservable)(() => {
      var var_core_value_sigCF4E;
      return ((var_core_value_sigCF4E = var_core_value_sig3DF7[1]) == null ? undefined : var_core_value_sigCF4E.value$) ?? (0, o.of)(r.DEFAULT_STYLES["bg"].rgb);
    }, r.DEFAULT_STYLES["bg"].rgb, false, [var_core_value_sig3DF7]),
    var_core_value_sig0F47 = (0, a.useMemo)(() => {
      var var_core_value_sig6CAD;
      return Xt((var_core_value_sig6CAD = var_core_value_sigB071.getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"])) == null ? undefined : var_core_value_sig6CAD.getSnapshot(), var_core_value_sigCF47.selection);
    }, [var_core_value_sigCF47.selection, var_core_value_sigB071]),
    var_core_value_sig6B29 = (var_core_value_sig0F47 == null || (var_core_value_sig8169 = var_core_value_sig0F47.backgroundColor) == null ? undefined : var_core_value_sig8169.rgb) ?? r.DEFAULT_STYLES["bg"].rgb,
    var_core_value_sig28E2 = Zt(var_core_value_sig0F47),
    var_core_value_sig1578 = (var_core_value_sig28E2 == null || (var_core_value_sigC5FB = var_core_value_sig28E2.color) == null ? undefined : var_core_value_sigC5FB.rgb) ?? "#1f1f1f",
    var_core_value_sig52ED = (var_core_value_sig28E2 == null || (var_core_value_sig5453 = var_core_value_sig28E2.width) == null ? undefined : var_core_value_sig5453.v) ?? 1,
    var_core_value_sig135F = Qt(var_core_value_sig28E2 == null ? undefined : var_core_value_sig28E2.dashStyle),
    var_core_value_sig416D = [(var_core_value_sig8725 = var_core_value_sigCF47.selection) == null ? undefined : var_core_value_sig8725.startRow, (var_core_value_sig513B = var_core_value_sigCF47.selection) == null ? undefined : var_core_value_sig513B.endRow, (var_core_value_sig5501 = var_core_value_sigCF47.selection) == null ? undefined : var_core_value_sig5501.startColumn, (var_core_value_sig7784 = var_core_value_sigCF47.selection) == null ? undefined : var_core_value_sig7784.endColumn, var_core_value_sig6B29, var_core_value_sig1578, var_core_value_sig52ED, var_core_value_sig135F].join("|"),
    var_core_value_sigAD5D = {
      backgroundColor: var_core_value_sig6B29,
      borderColor: var_core_value_sig1578,
      borderStyle: var_core_value_sig135F,
      borderWidth: var_core_value_sig52ED,
      key: var_core_value_sig416D
    },
    [var_core_value_sig1B8A, var_core_value_sigFB18] = (0, a.useState)(var_core_value_sigAD5D),
    var_core_value_sig703C = var_core_value_sig1B8A.key === var_core_value_sig416D ? var_core_value_sig1B8A : var_core_value_sigAD5D,
    var_core_value_sig96CF = var_core_value_sig8CF5 => {
      var_core_value_sigFB18({
        ...var_core_value_sig703C,
        ...var_core_value_sig8CF5,
        key: var_core_value_sig416D
      });
    };
  if (!var_core_value_sigCF47.visible || !var_core_value_sigB0F9) return null;
  let var_core_value_sig49F1 = var_core_value_sigCF47.mergeAction === "unmerge" ? var_core_value_sig5FD01.t("docs-table-ui.unmergeCells") : var_core_value_sigCF47.mergeAction === "merge" ? var_core_value_sig5FD01.t("docs-table-ui.mergeCells") : null,
    var_core_value_sig2F7B = var_core_value_sigCF47.deleteTarget === "row" ? var_core_value_sig5FD01.t("docs-table-ui.deleteRow") : var_core_value_sigCF47.deleteTarget === "column" ? var_core_value_sig5FD01.t("docs-table-ui.deleteColumn") : null,
    var_core_value_sigB0DF = () => {
      !var_core_value_sigCF47.selection || !var_core_value_sigCF47.mergeAction || var_core_value_sigB706.executeCommand(var_core_value_sigCF47.mergeAction === "unmerge" ? e.DocsTableUnmergeCellsCommand["id"] : e.DocsTableMergeCellsCommand["id"], var_core_value_sigCF47.selection);
    },
    var_core_value_sig2E44 = () => {
      !var_core_value_sigCF47.selection || !var_core_value_sigCF47.deleteTarget || var_core_value_sigB706.executeCommand(var_core_value_sigCF47.deleteTarget === "row" ? e.DocsTableDeleteRowsCommand["id"] : e.DocsTableDeleteColumnsCommand["id"], var_core_value_sigCF47.selection);
    },
    var_core_value_sig8560 = var_core_value_sigDDD7 => {
      var_core_value_sigCF47.selection && var_core_value_sigB706.executeCommand(e.DocsTableSetTableVerticalAlignCommand["id"], {
        value: var_core_value_sigDDD7
      });
    },
    var_core_value_sig138D = var_core_value_sigB2CE => {
      var_core_value_sigCF47.selection && var_core_value_sigB706.executeCommand(var_core_value_sigB2CE);
    },
    var_core_value_sig1E26 = var_core_value_sig443C => {
      var_core_value_sigCF47.selection && var_core_value_sigB706.executeCommand(Et.id, {
        value: var_core_value_sig443C
      });
    },
    var_core_value_sig5C6C = var_core_value_sig39B1 => (var_core_value_sig96CF({
      backgroundColor: var_core_value_sig39B1
    }), var_core_value_sigB706.executeCommand(e.DocsTableSetTableBackgroundCommand["id"], {
      value: var_core_value_sig39B1
    })),
    var_core_value_sigBE85 = () => (var_core_value_sig96CF({
      backgroundColor: var_core_value_sig6B29
    }), var_core_value_sigB706.executeCommand(e.DocsTableSetTableBackgroundCommand["id"], {
      value: null
    })),
    var_core_value_sig56DE = (var_core_value_sig210D, var_core_value_sigB4B4) => {
      if (var_core_value_sigCF47.selection) return var_core_value_sigB706.executeCommand(var_core_value_sig210D, {
        value: var_core_value_sigB4B4
      });
    };
  return (0, s.jsxs)("div", {
    "data-u-comp": Yt,
    role: "toolbar",
    onMouseEnter: () => var_core_value_sig15FE.setHoverActive(true),
    onMouseLeave: () => var_core_value_sig15FE.setHoverActive(false),
    onMouseDown: var_core_value_sigD407 => {
      var_core_value_sigD407.stopPropagation(), var_core_value_sigD407.preventDefault();
    },
    className: (0, i.clsx)("univer-box-border univer-flex univer-items-center univer-rounded univer-bg-gray-0 univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900", i.borderClassName),
    children: [(0, s.jsx)(It, {
      items: [var_core_value_sig71CF],
      children: var_core_value_sig49F1 ? (0, s.jsx)(i.Tooltip, {
        title: var_core_value_sig49F1,
        placement: "bottom",
        children: (0, s.jsx)("span", {
          children: (0, s.jsx)(n.ToolbarButton, {
            "data-toolbar-item": "merge-cells",
            "aria-label": var_core_value_sig49F1,
            onClick: var_core_value_sigB0DF,
            children: var_core_value_sigCF47.mergeAction === "unmerge" ? (0, s.jsx)(d.CancelMergeIcon, {}) : (0, s.jsx)(d.MergeAllIcon, {})
          })
        })
      }) : null
    }), (0, s.jsx)(i.Separator, {
      orientation: "vertical"
    }), (0, s.jsxs)(It, {
      children: [(0, s.jsx)(Kt, {
        color: var_core_value_sig703C.backgroundColor,
        disabled: !var_core_value_sigCF47.selection,
        onChange: var_core_value_sig5C6C,
        onReset: var_core_value_sigBE85
      }), (0, s.jsx)(qt, {
        color: var_core_value_sig703C.borderColor,
        width: var_core_value_sig703C.borderWidth,
        style: var_core_value_sig703C.borderStyle,
        disabled: !var_core_value_sigCF47.selection,
        onSelectPreset: var_core_value_sig63F3 => var_core_value_sigB706.executeCommand(e.DocsTableSetTableBorderCommand["id"], {
          preset: var_core_value_sig63F3
        }),
        onChangeColor: var_core_value_sig6A71 => (var_core_value_sig96CF({
          borderColor: var_core_value_sig6A71
        }), var_core_value_sigB706.executeCommand(e.DocsTableSetTableBorderColorCommand["id"], {
          value: var_core_value_sig6A71
        })),
        onResetColor: () => (var_core_value_sig96CF({
          borderColor: var_core_value_sig1578
        }), var_core_value_sigB706.executeCommand(e.DocsTableSetTableBorderColorCommand["id"], {
          value: null
        })),
        onChangeWidth: var_core_value_sig3BF6 => (var_core_value_sig96CF({
          borderWidth: var_core_value_sig3BF6
        }), var_core_value_sigB706.executeCommand(e.DocsTableSetTableBorderWidthCommand["id"], {
          value: var_core_value_sig3BF6
        })),
        onChangeStyle: var_core_value_sig38CE => (var_core_value_sig96CF({
          borderStyle: var_core_value_sig38CE
        }), var_core_value_sigB706.executeCommand(e.DocsTableSetTableBorderStyleCommand["id"], {
          value: var_core_value_sig38CE
        }))
      })]
    }), (0, s.jsx)(i.Separator, {
      orientation: "vertical"
    }), (0, s.jsx)(Ft, {
      items: var_core_value_sigC341
    }), (0, s.jsx)(i.Separator, {
      orientation: "vertical"
    }), (0, s.jsx)(It, {
      children: (0, s.jsx)(Gt, {
        alignItem: var_core_value_sigBA47.align,
        disabled: !var_core_value_sigCF47.selection,
        formatItems: {
          bold: var_core_value_sigBA47.bold,
          italic: var_core_value_sigBA47.italic,
          strike: var_core_value_sigBA47.strike,
          underline: var_core_value_sigBA47.underline
        },
        verticalAlign: var_core_value_sigCF47.verticalAlign,
        onExecuteInlineCommand: var_core_value_sig138D,
        onHorizontalAlign: var_core_value_sig1E26,
        onVerticalAlign: var_core_value_sig8560
      })
    }), (0, s.jsx)(i.Separator, {
      orientation: "vertical"
    }), (0, s.jsxs)(It, {
      children: [(0, s.jsx)(Jt, {
        color: var_core_value_sigD49F,
        commandId: Dt.id,
        disabled: !var_core_value_sigCF47.selection,
        icon: "font",
        itemId: "text-color",
        resetItemId: "text-color-reset",
        title: var_core_value_sig5FD01.t("docs-table-ui.toolbar.textColor.main"),
        onChange: var_core_value_sig56DE
      }), (0, s.jsx)(Jt, {
        color: var_core_value_sigCECC,
        commandId: Ot.id,
        disabled: !var_core_value_sigCF47.selection,
        icon: "bucket",
        itemId: "text-background",
        resetItemId: "text-background-reset",
        title: var_core_value_sig5FD01.t("docs-table-ui.toolbar.fillColor.main"),
        onChange: var_core_value_sig56DE
      })]
    }), var_core_value_sigCF47.showDeleteAction && var_core_value_sig2F7B ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(i.Separator, {
        orientation: "vertical"
      }), (0, s.jsx)("div", {
        className: "univer-flex univer-h-7 univer-items-center univer-px-1",
        onMouseEnter: () => var_core_value_sig15FE.setDeleteHoverActive(true),
        onMouseLeave: () => var_core_value_sig15FE.setDeleteHoverActive(false),
        children: (0, s.jsx)(i.Tooltip, {
          title: var_core_value_sig2F7B,
          placement: "bottom",
          children: (0, s.jsx)("span", {
            children: (0, s.jsx)(n.ToolbarButton, {
              "data-toolbar-item": "delete-selection",
              "aria-label": var_core_value_sig2F7B,
              className: (0, i.clsx)("hover:!univer-bg-red-50 hover:!univer-text-red-500", "dark:hover:!univer-bg-red-950/40 dark:hover:!univer-text-red-400"),
              onClick: var_core_value_sig2E44,
              children: var_core_value_sigCF47.deleteTarget === "row" ? (0, s.jsx)(d.DeleteRowDoubleIcon, {
                extend: {
                  colorChannel1: "currentColor"
                }
              }) : (0, s.jsx)(d.DeleteColumnDoubleIcon, {
                extend: {
                  colorChannel1: "currentColor"
                }
              })
            })
          })
        })
      })]
    }) : null]
  });
}
const rn = "docs-table-ui.options-panel";
function an() {
  let var_core_value_sig0278 = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsx)("section", {
    "data-u-comp": rn,
    children: (0, s.jsxs)("label", {
      children: [(0, s.jsx)("span", {
        children: var_core_value_sig0278.t("docs-table-ui.tableOptions")
      }), (0, s.jsx)(i.InputNumber, {
        min: 0,
        "aria-label": var_core_value_sig0278.t("docs-table-ui.pinHeaderRows")
      })]
    })
  });
}
const on = "docs-table-ui.toolbar";
function sn() {
  let var_core_value_sig08A6 = (0, n.useDependency)(r.LocaleService);
  return (0, s.jsxs)("div", {
    "data-u-comp": on,
    children: [(0, s.jsx)(i.Button, {
      size: "icon",
      type: "button",
      "aria-label": var_core_value_sig08A6.t("docs-table-ui.insertRowBelow"),
      children: "+"
    }), (0, s.jsx)(i.Button, {
      size: "icon",
      type: "button",
      "aria-label": var_core_value_sig08A6.t("docs-table-ui.insertColumnRight"),
      children: "+"
    }), (0, s.jsx)(i.Button, {
      size: "icon",
      type: "button",
      "aria-label": var_core_value_sig08A6.t("docs-table-ui.sortAscending"),
      children: "A"
    })]
  });
}
function I(var_core_value_sig04E1, var_core_value_sigC504) {
  return function (var_core_value_sig62B7, var_core_value_sig37A8) {
    var_core_value_sigC504(var_core_value_sig62B7, var_core_value_sig37A8, var_core_value_sig04E1);
  };
}
function L(var_core_value_sig0515, var_core_value_sig9F34, var_core_value_sig0247, var_core_value_sig6030) {
  var var_core_value_sig0137 = arguments.length,
    var_core_value_sig14F3 = var_core_value_sig0137 < 3 ? var_core_value_sig9F34 : var_core_value_sig6030 === null ? var_core_value_sig6030 = Object.getOwnPropertyDescriptor(var_core_value_sig9F34, var_core_value_sig0247) : var_core_value_sig6030,
    var_core_value_sig34E8;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig14F3 = Reflect.decorate(var_core_value_sig0515, var_core_value_sig9F34, var_core_value_sig0247, var_core_value_sig6030);else {
    for (var var_core_value_sigCFE7 = var_core_value_sig0515.length - 1; var_core_value_sigCFE7 >= 0; var_core_value_sigCFE7--) (var_core_value_sig34E8 = var_core_value_sig0515[var_core_value_sigCFE7]) && (var_core_value_sig14F3 = (var_core_value_sig0137 < 3 ? var_core_value_sig34E8(var_core_value_sig14F3) : var_core_value_sig0137 > 3 ? var_core_value_sig34E8(var_core_value_sig9F34, var_core_value_sig0247, var_core_value_sig14F3) : var_core_value_sig34E8(var_core_value_sig9F34, var_core_value_sig0247)) || var_core_value_sig14F3);
  }
  return var_core_value_sig0137 > 3 && var_core_value_sig14F3 && Object.defineProperty(var_core_value_sig9F34, var_core_value_sig0247, var_core_value_sig14F3), var_core_value_sig14F3;
}
let cn = class extends r.Disposable {
  constructor(var_core_value_sigA90D, var_core_value_sig7A3C) {
    super(), this._componentManager = var_core_value_sigA90D, this._iconManager = var_core_value_sig7A3C, this._registerComponents(), this._registerIcons();
  }
  _registerComponents() {
    [[et, it], [at, st], [Yt, nn], [rn, an], [on, sn]].forEach(([var_core_value_sigF9C7, var_core_value_sig8895]) => {
      this.disposeWithMe(this._componentManager["register"](var_core_value_sigF9C7, var_core_value_sig8895));
    }), this.disposeWithMe(this._componentManager["register"](y, ne));
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      TableIcon: d.TableIcon,
      TableBorderWidthIcon: d.TableBorderWidthIcon,
      TableBorderStyleIcon: d.TableBorderStyleIcon,
      TableBorderStyleSolidIcon: d.TableBorderStyleSolidIcon,
      TableBorderStyleDottedIcon: d.TableBorderStyleDottedIcon,
      TableBorderStyleDashedIcon: d.TableBorderStyleDashedIcon,
      CalendarIcon: d.CalendarIcon,
      NumberIcon: d.NumberIcon
    }));
  }
};
cn = L([I(0, (0, r.Inject)(n.ComponentManager)), I(1, (0, r.Inject)(n.IconManager))], cn);
var ln = class {
    constructor() {
      N(this, "_handlers", []);
    }
    register(var_core_value_sig0511) {
      return this._handlers["push"](var_core_value_sig0511), this._sortHandlers(), (0, r.toDisposable)(() => {
        let var_core_value_sigC80B = this._handlers["indexOf"](var_core_value_sig0511);
        var_core_value_sigC80B >= 0 && this._handlers["splice"](var_core_value_sigC80B, 1);
      });
    }
    handleWheel(var_core_value_sig1F44) {
      return this._handlers["some"](var_core_value_sig284F => var_core_value_sig284F.handleWheel(var_core_value_sig1F44));
    }
    _sortHandlers() {
      this._handlers["sort"]((var_core_value_sigE154, var_core_value_sig4632) => (var_core_value_sig4632.order ?? 0) - (var_core_value_sigE154.order ?? 0));
    }
  },
  un = class extends r.Disposable {
    constructor(...var_core_value_sigCB04) {
      super(...var_core_value_sigCB04), N(this, "_states", new Map());
    }
    getState(var_core_value_sig947E, var_core_value_sig4545) {
      return this._states["get"](this._key(var_core_value_sig947E, var_core_value_sig4545));
    }
    setViewport(var_core_value_sigF39A, var_core_value_sigF79C, var_core_value_sig2E54) {
      let var_core_value_sig7658 = this._key(var_core_value_sigF39A, var_core_value_sigF79C),
        var_core_value_sigDCF5 = this._states["get"](var_core_value_sig7658),
        var_core_value_sigC786 = {
          contentWidth: Math.max(0, var_core_value_sig2E54.contentWidth),
          isDraggingScrollbar: (var_core_value_sigDCF5 == null ? undefined : var_core_value_sigDCF5.isDraggingScrollbar) ?? false,
          leadingInsetLeft: Math.max(0, var_core_value_sig2E54.leadingInsetLeft ?? 0),
          overflowWidthThreshold: Math.max(0, var_core_value_sig2E54.overflowWidthThreshold ?? var_core_value_sig2E54.viewportWidth),
          scrollLeft: (var_core_value_sigDCF5 == null ? undefined : var_core_value_sigDCF5.scrollLeft) ?? 0,
          trailingInsetRight: Math.max(0, var_core_value_sig2E54.trailingInsetRight ?? 0),
          viewportLeft: var_core_value_sig2E54.viewportLeft ?? 0,
          viewportWidth: Math.max(0, var_core_value_sig2E54.viewportWidth)
        };
      return var_core_value_sigC786.scrollLeft = this._clamp(var_core_value_sigC786.scrollLeft, var_core_value_sigC786), this._states["set"](var_core_value_sig7658, var_core_value_sigC786), var_core_value_sigC786;
    }
    setScrollLeft(var_core_value_sigC0D9, var_core_value_sigF0511, var_core_value_sig5825) {
      let var_core_value_sig4EB7 = this.getState(var_core_value_sigC0D9, var_core_value_sigF0511);
      return var_core_value_sig4EB7 ? (var_core_value_sig4EB7.scrollLeft = this._clamp(var_core_value_sig5825, var_core_value_sig4EB7), var_core_value_sig4EB7.scrollLeft) : 0;
    }
    toContentX(var_core_value_sig73AF, var_core_value_sig548A, var_core_value_sigE026) {
      let var_core_value_sig339E = this.getState(var_core_value_sig73AF, var_core_value_sig548A);
      return var_core_value_sigE026 - ((var_core_value_sig339E == null ? undefined : var_core_value_sig339E.leadingInsetLeft) ?? 0) + ((var_core_value_sig339E == null ? undefined : var_core_value_sig339E.scrollLeft) ?? 0);
    }
    toViewportX(var_core_value_sig7550, var_core_value_sig2983, var_core_value_sigE1B0) {
      let var_core_value_sigD4FF = this.getState(var_core_value_sig7550, var_core_value_sig2983);
      return var_core_value_sigE1B0 + ((var_core_value_sigD4FF == null ? undefined : var_core_value_sigD4FF.leadingInsetLeft) ?? 0) - ((var_core_value_sigD4FF == null ? undefined : var_core_value_sigD4FF.scrollLeft) ?? 0);
    }
    ensureContentRangeVisible(var_core_value_sig1E5B, var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sigDD1C) {
      let var_core_value_sig2C39 = this.getState(var_core_value_sig1E5B, var_core_value_sigB680);
      if (!var_core_value_sig2C39) return 0;
      let var_core_value_sigB7D1 = var_core_value_sig2C39.scrollLeft - var_core_value_sig2C39.leadingInsetLeft,
        var_core_value_sig64F0 = var_core_value_sigB7D1 + var_core_value_sig2C39.viewportWidth;
      return var_core_value_sig1F64 < var_core_value_sigB7D1 ? this.setScrollLeft(var_core_value_sig1E5B, var_core_value_sigB680, var_core_value_sig1F64 + var_core_value_sig2C39.leadingInsetLeft) : var_core_value_sigDD1C > var_core_value_sig64F0 ? this.setScrollLeft(var_core_value_sig1E5B, var_core_value_sigB680, var_core_value_sigDD1C + var_core_value_sig2C39.leadingInsetLeft - var_core_value_sig2C39.viewportWidth) : var_core_value_sig2C39.scrollLeft;
    }
    ensureColumnRangeVisible(var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD) {
      return this.ensureContentRangeVisible(var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD);
    }
    applyWheel(var_core_value_sig6774, var_core_value_sig340D, var_core_value_sig82D4) {
      if (var_core_value_sig82D4.ctrlKey || var_core_value_sig82D4.metaKey) return false;
      let var_core_value_sigBDE4 = var_core_value_sig82D4.zoom && var_core_value_sig82D4.zoom > 0 ? var_core_value_sig82D4.zoom : 1,
        var_core_value_sig7DF1 = (var_core_value_sig82D4.shiftKey ? var_core_value_sig82D4.deltaX || var_core_value_sig82D4.deltaY : Math.abs(var_core_value_sig82D4.deltaX) > Math.abs(var_core_value_sig82D4.deltaY) ? var_core_value_sig82D4.deltaX : 0) / var_core_value_sigBDE4;
      if (!var_core_value_sig7DF1) return false;
      let var_core_value_sigDC86 = this.getState(var_core_value_sig6774, var_core_value_sig340D);
      if (!var_core_value_sigDC86 || !this._canScrollHorizontally(var_core_value_sigDC86)) return false;
      let var_core_value_sig0B0C = var_core_value_sigDC86.scrollLeft;
      return this.setScrollLeft(var_core_value_sig6774, var_core_value_sig340D, var_core_value_sig0B0C + var_core_value_sig7DF1), var_core_value_sigDC86.scrollLeft !== var_core_value_sig0B0C;
    }
    scrollByScrollbarTravel(var_core_value_sigA39E, var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167) {
      let var_core_value_sig65A1 = this.getState(var_core_value_sigA39E, var_core_value_sigBBEE);
      if (!var_core_value_sig65A1 || var_core_value_sig6167 <= 0) return (var_core_value_sig65A1 == null ? undefined : var_core_value_sig65A1.scrollLeft) ?? 0;
      let var_core_value_sig7F19 = this._getMaxScrollLeft(var_core_value_sig65A1);
      return this.setScrollLeft(var_core_value_sigA39E, var_core_value_sigBBEE, var_core_value_sig65A1.scrollLeft + var_core_value_sig7F19 / var_core_value_sig6167 * var_core_value_sig011D);
    }
    scrollByDragEdge(var_core_value_sig7827, var_core_value_sig652C, var_core_value_sig7E32, var_core_value_sig4C07, var_core_value_sig79AB) {
      let var_core_value_sig8E74 = this.getState(var_core_value_sig7827, var_core_value_sig652C);
      if (!var_core_value_sig8E74 || !this._canScrollHorizontally(var_core_value_sig8E74) || var_core_value_sig4C07 <= 0 || var_core_value_sig79AB <= 0) return false;
      let var_core_value_sig104C = var_core_value_sig7E32,
        var_core_value_sig841D = var_core_value_sig8E74.viewportWidth - var_core_value_sig7E32,
        var_core_value_sig90CB = 0,
        var_core_value_sigBDF5 = 0;
      if (var_core_value_sig104C < var_core_value_sig4C07 ? (var_core_value_sig90CB = -1, var_core_value_sigBDF5 = var_core_value_sig104C) : var_core_value_sig841D < var_core_value_sig4C07 && (var_core_value_sig90CB = 1, var_core_value_sigBDF5 = var_core_value_sig841D), !var_core_value_sig90CB) return false;
      let var_core_value_sigACC6 = Math.min(1, Math.max(0, (var_core_value_sig4C07 - var_core_value_sigBDF5) / var_core_value_sig4C07)),
        var_core_value_sig1614 = Math.max(1, Math.ceil(var_core_value_sigACC6 * var_core_value_sig79AB)),
        var_core_value_sig85C3 = var_core_value_sig8E74.scrollLeft;
      return this.setScrollLeft(var_core_value_sig7827, var_core_value_sig652C, var_core_value_sig85C3 + var_core_value_sig90CB * var_core_value_sig1614), var_core_value_sig8E74.scrollLeft !== var_core_value_sig85C3;
    }
    clear(var_core_value_sigB996, var_core_value_sig4BBA) {
      this._states["delete"](this._key(var_core_value_sigB996, var_core_value_sig4BBA));
    }
    _clamp(var_core_value_sig6201, var_core_value_sig5151) {
      return Math.min(Math.max(0, var_core_value_sig6201), this._getMaxScrollLeft(var_core_value_sig5151));
    }
    _getVirtualContentWidth(var_core_value_sigB542) {
      return var_core_value_sigB542.leadingInsetLeft + var_core_value_sigB542.contentWidth + var_core_value_sigB542.trailingInsetRight;
    }
    _getMaxScrollLeft(var_core_value_sigBB6C) {
      return this._canScrollHorizontally(var_core_value_sigBB6C) ? Math.max(0, this._getVirtualContentWidth(var_core_value_sigBB6C) - var_core_value_sigBB6C.viewportWidth) : 0;
    }
    _canScrollHorizontally(var_core_value_sigE2BF) {
      return var_core_value_sigE2BF.contentWidth > var_core_value_sigE2BF.overflowWidthThreshold && this._getVirtualContentWidth(var_core_value_sigE2BF) > var_core_value_sigE2BF.viewportWidth;
    }
    _key(var_core_value_sigB8C7, var_core_value_sigA56E) {
      return var_core_value_sigB8C7 + "::" + var_core_value_sigA56E;
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
  [e.DocsTableBorderPreset["Top"]]: "UpBorderDoubleIcon"
};
function fn(var_core_value_sigECBC) {
  return dn[var_core_value_sigECBC];
}
function pn(var_core_value_sig65D2, var_core_value_sig4306) {
  if (var_core_value_sig65D2.length === 0) return null;
  let var_core_value_sigFCD3 = [...var_core_value_sig65D2].sort((var_core_value_sig1998, var_core_value_sigFF19) => var_core_value_sig1998.rect["top"] - var_core_value_sigFF19.rect["top"] || var_core_value_sig1998.paragraphStart - var_core_value_sigFF19.paragraphStart),
    var_core_value_sig147A = var_core_value_sigFCD3.find(var_core_value_sig43B8 => var_core_value_sig4306.y <= (var_core_value_sig43B8.rect["top"] + var_core_value_sig43B8.rect["bottom"]) / 2);
  if (var_core_value_sig147A) return {
    targetOffset: var_core_value_sig147A.paragraphStart,
    width: var_core_value_sig147A.rect["right"] - var_core_value_sig147A.rect["left"],
    x: var_core_value_sig147A.rect["left"],
    y: var_core_value_sig147A.rect["top"]
  };
  let var_core_value_sig829F = var_core_value_sigFCD3[var_core_value_sigFCD3.length - 1];
  return {
    targetOffset: var_core_value_sig829F.paragraphEnd + 1,
    width: var_core_value_sig829F.rect["right"] - var_core_value_sig829F.rect["left"],
    x: var_core_value_sig829F.rect["left"],
    y: var_core_value_sig829F.rect["bottom"]
  };
}
function mn(var_core_value_sig534C, var_core_value_sigABB7, var_core_value_sig9071) {
  return var_core_value_sigABB7 ? Math.hypot(var_core_value_sigABB7.x - var_core_value_sig534C.x, var_core_value_sigABB7.y - var_core_value_sig534C.y) < var_core_value_sig9071 : false;
}
function hn(var_core_value_sig01A9, var_core_value_sig9477, var_core_value_sig917C, var_core_value_sig27E2) {
  return {
    trigger: var_core_value_sig01A9,
    startX: var_core_value_sig9477,
    startY: var_core_value_sig917C,
    tableRect: var_core_value_sig27E2
  };
}
function gn(var_core_value_sig10D7, var_core_value_sig5A1A, var_core_value_sig77D2) {
  let var_core_value_sig625E = var_core_value_sig5A1A - var_core_value_sig10D7.startX,
    var_core_value_sig6F04 = var_core_value_sig77D2 - var_core_value_sig10D7.startY;
  return {
    deltaX: var_core_value_sig625E,
    deltaY: var_core_value_sig6F04,
    rect: {
      ...var_core_value_sig10D7.tableRect,
      x: var_core_value_sig10D7.tableRect["x"] + var_core_value_sig625E,
      y: var_core_value_sig10D7.tableRect["y"] + var_core_value_sig6F04
    }
  };
}
const _n = ["pointerup", "pointercancel", "mouseup", "blur"];
function vn(var_core_value_sig48DA, var_core_value_sigD327 = bn()) {
  if (!var_core_value_sigD327) return {
    dispose: () => undefined
  };
  let var_core_value_sig6694 = _n.map(var_core_value_sigD98F => {
    let var_core_value_sig66C0 = var_core_value_sig12F2 => var_core_value_sig48DA({
      event: var_core_value_sig12F2,
      type: var_core_value_sigD98F
    });
    return var_core_value_sigD327.addEventListener(var_core_value_sigD98F, var_core_value_sig66C0, false), {
      listener: var_core_value_sig66C0,
      type: var_core_value_sigD98F
    };
  });
  return {
    dispose: () => {
      var_core_value_sig6694.forEach(({
        listener: var_core_value_sig2259,
        type: var_core_value_sig9E2F
      }) => var_core_value_sigD327.removeEventListener(var_core_value_sig9E2F, var_core_value_sig2259, false));
    }
  };
}
function yn(var_core_value_sig2A21, var_core_value_sig0836 = bn()) {
  if (!var_core_value_sig0836) return {
    dispose: () => undefined
  };
  let var_core_value_sigD95C = var_core_value_sig9D15 => var_core_value_sig2A21({
    event: var_core_value_sig9D15,
    type: "pointermove"
  });
  return var_core_value_sig0836.addEventListener("pointermove", var_core_value_sigD95C, false), {
    dispose: () => var_core_value_sig0836.removeEventListener("pointermove", var_core_value_sigD95C, false)
  };
}
function bn() {
  return globalThis.window === undefined ? null : globalThis.window;
}
function xn(var_core_value_sig692E, var_core_value_sig3FAF, var_core_value_sig378B, var_core_value_sigDE50, var_core_value_sig3094 = 1) {
  return {
    trigger: var_core_value_sig692E,
    startX: var_core_value_sig3FAF,
    startY: var_core_value_sig378B,
    initialSize: var_core_value_sigDE50,
    minSize: var_core_value_sig3094
  };
}
function Sn(var_core_value_sig86CC, var_core_value_sig7868, var_core_value_sig9921) {
  return var_core_value_sig86CC.trigger["kind"] === "resize-column" ? {
    column: var_core_value_sig86CC.trigger["column"],
    width: Math.max(var_core_value_sig86CC.minSize, var_core_value_sig86CC.initialSize + var_core_value_sig7868 - var_core_value_sig86CC.startX)
  } : {
    height: Math.max(var_core_value_sig86CC.minSize, var_core_value_sig86CC.initialSize + var_core_value_sig9921 - var_core_value_sig86CC.startY),
    row: var_core_value_sig86CC.trigger["row"]
  };
}
function Cn(var_core_value_sig59BF, var_core_value_sigF001, var_core_value_sigE511) {
  return var_core_value_sigE511 ? Sn(var_core_value_sig59BF, var_core_value_sigE511.x, var_core_value_sigE511.y) : var_core_value_sigF001;
}
function wn(var_core_value_sig1C81, var_core_value_sig2C6A, var_core_value_sig7207) {
  if (var_core_value_sig2C6A.kind === "resize-column") {
    var var_core_value_sig297F;
    let var_core_value_sigB785 = Tn(var_core_value_sig1C81.columnIndices, var_core_value_sig2C6A.column);
    if (var_core_value_sigB785 == null || var_core_value_sigB785 < 0) return null;
    let var_core_value_sig130F = var_core_value_sig7207 != null && var_core_value_sig7207.column === var_core_value_sig2C6A.column && var_core_value_sig7207.width != null ? var_core_value_sig7207.width : var_core_value_sig1C81.columnWidths[var_core_value_sigB785],
      var_core_value_sigC0E3 = Dn(var_core_value_sig1C81),
      var_core_value_sig52F7 = var_core_value_sig1C81.tableRect["x"] + R(var_core_value_sig1C81.columnWidths["slice"](0, var_core_value_sigB785)) + var_core_value_sig130F - 1 - (((var_core_value_sig297F = var_core_value_sig1C81.viewport) == null ? undefined : var_core_value_sig297F.scrollLeft) ?? 0);
    return var_core_value_sig52F7 < var_core_value_sigC0E3.x || var_core_value_sig52F7 > var_core_value_sigC0E3.x + var_core_value_sigC0E3.width ? null : {
      height: En(var_core_value_sig2C6A.rect["height"], var_core_value_sig1C81.tableRect["height"], R(var_core_value_sig1C81.rowHeights)),
      width: 2,
      x: var_core_value_sig52F7,
      y: Math.max(var_core_value_sig1C81.tableRect["y"], var_core_value_sig2C6A.rect["y"])
    };
  }
  if (var_core_value_sig2C6A.kind === "resize-row") {
    let var_core_value_sig866F = Tn(var_core_value_sig1C81.rowIndices, var_core_value_sig2C6A.row);
    if (var_core_value_sig866F == null || var_core_value_sig866F < 0) return null;
    let var_core_value_sigDE3D = var_core_value_sig7207 != null && var_core_value_sig7207.row === var_core_value_sig2C6A.row && var_core_value_sig7207.height != null ? var_core_value_sig7207.height : var_core_value_sig1C81.rowHeights[var_core_value_sig866F],
      var_core_value_sigF175 = On(var_core_value_sig1C81),
      var_core_value_sig6A18 = Math.max(var_core_value_sigF175.x, var_core_value_sig2C6A.rect["x"]),
      var_core_value_sig4E3D = Math.min(var_core_value_sigF175.x + var_core_value_sigF175.width, var_core_value_sig2C6A.rect["x"] + var_core_value_sig2C6A.rect["width"]);
    return var_core_value_sig4E3D <= var_core_value_sig6A18 ? null : {
      height: 2,
      width: var_core_value_sig4E3D - var_core_value_sig6A18,
      x: var_core_value_sig6A18,
      y: var_core_value_sig1C81.tableRect["y"] + R(var_core_value_sig1C81.rowHeights["slice"](0, var_core_value_sig866F)) + var_core_value_sigDE3D - 1
    };
  }
  return null;
}
function Tn(var_core_value_sigA95A, var_core_value_sig94D6) {
  return var_core_value_sig94D6 == null ? -1 : var_core_value_sigA95A ? var_core_value_sigA95A.findIndex(var_core_value_sig49B0 => var_core_value_sig49B0 === var_core_value_sig94D6) : var_core_value_sig94D6;
}
function R(var_core_value_sigC22E) {
  return var_core_value_sigC22E.reduce((var_core_value_sig2547, var_core_value_sigBCA9) => var_core_value_sig2547 + var_core_value_sigBCA9, 0);
}
function En(...var_core_value_sig2321) {
  return Math.max(0, Math.min(...var_core_value_sig2321.filter(var_core_value_sig4CDF => var_core_value_sig4CDF > 0)));
}
function Dn(var_core_value_sigFF33) {
  var var_core_value_sig16E0, var_core_value_sig213C;
  return {
    ...var_core_value_sigFF33.tableRect,
    x: ((var_core_value_sig16E0 = var_core_value_sigFF33.viewport) == null ? undefined : var_core_value_sig16E0.viewportLeft) ?? var_core_value_sigFF33.tableRect["x"],
    width: ((var_core_value_sig213C = var_core_value_sigFF33.viewport) == null ? undefined : var_core_value_sig213C.viewportWidth) ?? var_core_value_sigFF33.tableRect["width"]
  };
}
function On(var_core_value_sig31F8) {
  let var_core_value_sig6905 = Dn(var_core_value_sig31F8),
    var_core_value_sigC3C0 = var_core_value_sig31F8.viewport ? Math.max(var_core_value_sig6905.x, kn(var_core_value_sig31F8, 0)) : var_core_value_sig31F8.tableRect["x"],
    var_core_value_sig1F39 = var_core_value_sig31F8.viewport ? Math.min(var_core_value_sig6905.x + var_core_value_sig6905.width, kn(var_core_value_sig31F8, R(var_core_value_sig31F8.columnWidths))) : var_core_value_sig31F8.tableRect["x"] + R(var_core_value_sig31F8.columnWidths);
  return {
    ...var_core_value_sig6905,
    x: var_core_value_sigC3C0,
    width: Math.max(0, var_core_value_sig1F39 - var_core_value_sigC3C0)
  };
}
function kn(var_core_value_sig9256, var_core_value_sig98A0) {
  var var_core_value_sig3EBD;
  return var_core_value_sig9256.tableRect["x"] + var_core_value_sig98A0 - (((var_core_value_sig3EBD = var_core_value_sig9256.viewport) == null ? undefined : var_core_value_sig3EBD.scrollLeft) ?? 0);
}
function An(var_core_value_sig1AC3) {
  let var_core_value_sig66B8 = Math.max(0, var_core_value_sig1AC3.leadingInsetLeft ?? 0),
    var_core_value_sig4C7F = Math.max(0, var_core_value_sig1AC3.overflowWidthThreshold ?? var_core_value_sig1AC3.viewportWidth),
    var_core_value_sig2543 = Math.max(0, var_core_value_sig1AC3.trailingInsetRight ?? 0),
    var_core_value_sigB230 = var_core_value_sig66B8 + var_core_value_sig1AC3.contentWidth + var_core_value_sig2543;
  if (var_core_value_sig1AC3.contentWidth <= var_core_value_sig4C7F || var_core_value_sigB230 <= var_core_value_sig1AC3.viewportWidth || var_core_value_sig1AC3.viewportWidth <= 0) return null;
  let var_core_value_sig407E = var_core_value_sig1AC3.zoom || 1,
    var_core_value_sig88CB = var_core_value_sig1AC3.appearance ?? "idle",
    var_core_value_sigD615 = 10 / var_core_value_sig407E,
    var_core_value_sigB708 = (var_core_value_sig88CB === "idle" ? 6 : 8) / var_core_value_sig407E,
    var_core_value_sig60EF = Math.max(0, var_core_value_sigB230 - var_core_value_sig1AC3.viewportWidth),
    var_core_value_sigA6FB = var_core_value_sig1AC3.viewportLeft ?? var_core_value_sig1AC3.tableRect["x"],
    var_core_value_sigD6EA = {
      height: var_core_value_sigD615,
      width: var_core_value_sig1AC3.viewportWidth,
      x: var_core_value_sigA6FB,
      y: var_core_value_sig1AC3.tableRect["y"] + var_core_value_sig1AC3.tableRect["height"] + 4 / var_core_value_sig407E
    },
    var_core_value_sigA2D3 = Math.max(32 / var_core_value_sig407E, var_core_value_sigD6EA.width * (var_core_value_sig1AC3.viewportWidth / var_core_value_sigB230)),
    var_core_value_sig727A = Math.max(0, var_core_value_sigD6EA.width - var_core_value_sigA2D3),
    var_core_value_sig6AF1 = var_core_value_sig60EF > 0 ? Math.min(var_core_value_sig60EF, Math.max(0, var_core_value_sig1AC3.scrollLeft)) / var_core_value_sig60EF : 0,
    var_core_value_sig3F6A = var_core_value_sigD6EA.x + var_core_value_sig727A * var_core_value_sig6AF1;
  return {
    appearance: var_core_value_sig88CB,
    contentWidth: var_core_value_sig1AC3.contentWidth,
    leadingInsetLeft: var_core_value_sig66B8,
    maxScrollLeft: var_core_value_sig60EF,
    thumb: {
      height: var_core_value_sigB708,
      width: var_core_value_sigA2D3,
      x: var_core_value_sig3F6A,
      y: var_core_value_sigD6EA.y + (var_core_value_sigD6EA.height - var_core_value_sigB708) / 2
    },
    track: var_core_value_sigD6EA,
    viewportLeft: var_core_value_sigA6FB,
    viewportWidth: var_core_value_sig1AC3.viewportWidth
  };
}
function jn(var_core_value_sig23B4, var_core_value_sig350C, var_core_value_sig2335) {
  return Pn(var_core_value_sig23B4.thumb, var_core_value_sig350C, var_core_value_sig2335) ? "thumb" : Pn(var_core_value_sig23B4.track, var_core_value_sig350C, var_core_value_sig2335) ? "track" : null;
}
function Mn(var_core_value_sig6233, var_core_value_sig4230, var_core_value_sig6136, var_core_value_sigD25E) {
  let var_core_value_sigE1BC = Math.min(var_core_value_sig4230, var_core_value_sig6233.track["y"]);
  return Pn({
    height: var_core_value_sig6233.track["y"] + var_core_value_sig6233.track["height"] - var_core_value_sigE1BC,
    width: var_core_value_sig6233.track["width"],
    x: var_core_value_sig6233.track["x"],
    y: var_core_value_sigE1BC
  }, var_core_value_sig6136, var_core_value_sigD25E);
}
function Nn(var_core_value_sigCF44, var_core_value_sig3C97) {
  var_core_value_sigCF44.save(), var_core_value_sigCF44.fillStyle = var_core_value_sig3C97.appearance === "active" ? "rgba(24, 28, 42, 0.40)" : var_core_value_sig3C97.appearance === "hover" ? "rgba(24, 28, 42, 0.30)" : "rgba(24, 28, 42, 0.20)", Fn(var_core_value_sigCF44, var_core_value_sig3C97.thumb["x"], var_core_value_sig3C97.thumb["y"], var_core_value_sig3C97.thumb["width"], var_core_value_sig3C97.thumb["height"], var_core_value_sig3C97.thumb["height"] / 2), var_core_value_sigCF44.fill(), var_core_value_sigCF44.restore();
}
function Pn(var_core_value_sigA920, var_core_value_sigAD56, var_core_value_sig0454) {
  return var_core_value_sigAD56 >= var_core_value_sigA920.x && var_core_value_sigAD56 <= var_core_value_sigA920.x + var_core_value_sigA920.width && var_core_value_sig0454 >= var_core_value_sigA920.y && var_core_value_sig0454 <= var_core_value_sigA920.y + var_core_value_sigA920.height;
}
function Fn(var_core_value_sigEE1A, var_core_value_sig4107, var_core_value_sigF35C, var_core_value_sigEF8D, var_core_value_sigE025, var_core_value_sigD549) {
  var_core_value_sigEE1A.beginPath(), var_core_value_sigEE1A.roundRect ? var_core_value_sigEE1A.roundRect(var_core_value_sig4107, var_core_value_sigF35C, var_core_value_sigEF8D, var_core_value_sigE025, var_core_value_sigD549) : var_core_value_sigEE1A.rect(var_core_value_sig4107, var_core_value_sigF35C, var_core_value_sigEF8D, var_core_value_sigE025);
}
function In(var_core_value_sigC79E, var_core_value_sig9221 = {}) {
  return var_core_value_sig9221.suppressOverlay || var_core_value_sigC79E.source === e.DocsTableSelectionSource["Text"] || var_core_value_sigC79E.kind === e.DocsTableSelectionKind["Range"] && var_core_value_sigC79E.startRow === var_core_value_sigC79E.endRow && var_core_value_sigC79E.startColumn === var_core_value_sigC79E.endColumn ? false : var_core_value_sigC79E.kind === e.DocsTableSelectionKind["Cell"] || var_core_value_sigC79E.kind === e.DocsTableSelectionKind["Range"] || var_core_value_sigC79E.kind === e.DocsTableSelectionKind["Table"] || var_core_value_sigC79E.kind === e.DocsTableSelectionKind["Row"] || var_core_value_sigC79E.kind === e.DocsTableSelectionKind["Column"];
}
const Ln = new Set(["row-insert-dot", "column-insert-dot"]),
  Rn = new Set(["row-header", "column-header", "row-insert-dot", "column-insert-dot"]);
function z(var_core_value_sig0351) {
  let var_core_value_sig4686 = var_core_value_sig0351.zoom ?? 1,
    var_core_value_sig8E1C = 6 / var_core_value_sig4686,
    var_core_value_sigD719 = [],
    var_core_value_sig323C = Gn(var_core_value_sig0351),
    var_core_value_sig015D = lr(var_core_value_sig0351.columnWidths, qn(var_core_value_sig0351, var_core_value_sig0351.tableRect["x"])),
    var_core_value_sigBF8B = lr(var_core_value_sig0351.rowHeights, var_core_value_sig0351.tableRect["y"]);
  return var_core_value_sigD719.push(...zn(var_core_value_sig0351, var_core_value_sig323C, var_core_value_sigBF8B, var_core_value_sig4686)), var_core_value_sigD719.push(...Bn(var_core_value_sig0351, var_core_value_sig323C, var_core_value_sig015D, var_core_value_sig4686)), var_core_value_sigD719.push(...Vn(var_core_value_sig0351, var_core_value_sig323C, var_core_value_sigBF8B, var_core_value_sig4686)), var_core_value_sigD719.push(...Hn(var_core_value_sig0351, var_core_value_sig323C, var_core_value_sig015D, var_core_value_sig4686)), var_core_value_sig0351.rowHeights["forEach"]((var_core_value_sig3F79, var_core_value_sig880E) => {
    var var_core_value_sigC9ED;
    let var_core_value_sigB57B = ((var_core_value_sigC9ED = var_core_value_sig0351.rowIndices) == null ? undefined : var_core_value_sigC9ED[var_core_value_sig880E]) ?? var_core_value_sig880E;
    var_core_value_sigD719.push(...Un(var_core_value_sig0351, var_core_value_sigB57B, var_core_value_sigBF8B[var_core_value_sig880E] + var_core_value_sig3F79 - var_core_value_sig8E1C / 2, var_core_value_sig8E1C));
  }), var_core_value_sig0351.columnWidths["forEach"]((var_core_value_sig780B, var_core_value_sig7D1B) => {
    var var_core_value_sig7BE0;
    let var_core_value_sig7D40 = ((var_core_value_sig7BE0 = var_core_value_sig0351.columnIndices) == null ? undefined : var_core_value_sig7BE0[var_core_value_sig7D1B]) ?? var_core_value_sig7D1B;
    var_core_value_sigD719.push(...Wn(var_core_value_sig0351, var_core_value_sig7D40, var_core_value_sig015D[var_core_value_sig7D1B] + var_core_value_sig780B - var_core_value_sig8E1C / 2, var_core_value_sig8E1C));
  }), var_core_value_sigD719;
}
function zn(var_core_value_sigF7CE, var_core_value_sig7CF1, var_core_value_sigA552, var_core_value_sigAE32) {
  let var_core_value_sig9B4D = 10 / var_core_value_sigAE32,
    var_core_value_sig2704 = Kn(var_core_value_sigF7CE);
  return var_core_value_sigF7CE.rowHeights["map"]((var_core_value_sig6C7E, var_core_value_sig68BE) => {
    var var_core_value_sig04C6;
    return {
      kind: "row-header",
      tableId: var_core_value_sigF7CE.tableId,
      row: ((var_core_value_sig04C6 = var_core_value_sigF7CE.rowIndices) == null ? undefined : var_core_value_sig04C6[var_core_value_sig68BE]) ?? var_core_value_sig68BE,
      rect: {
        x: var_core_value_sig2704 - var_core_value_sig9B4D,
        y: var_core_value_sigA552[var_core_value_sig68BE],
        width: var_core_value_sig9B4D,
        height: var_core_value_sig6C7E
      }
    };
  });
}
function Bn(var_core_value_sigD0CC, var_core_value_sigF347, var_core_value_sig80C6, var_core_value_sigEBFB) {
  let var_core_value_sigF3BF = 10 / var_core_value_sigEBFB;
  return var_core_value_sigD0CC.columnWidths["flatMap"]((var_core_value_sigCA05, var_core_value_sig2F2B) => {
    var var_core_value_sig70AF;
    let var_core_value_sigD04E = {
      x: var_core_value_sig80C6[var_core_value_sig2F2B],
      y: var_core_value_sigD0CC.tableRect["y"] - var_core_value_sigF3BF,
      width: var_core_value_sigCA05,
      height: var_core_value_sigF3BF
    };
    return Yn(var_core_value_sigF347, var_core_value_sigD04E) ? [{
      kind: "column-header",
      tableId: var_core_value_sigD0CC.tableId,
      column: ((var_core_value_sig70AF = var_core_value_sigD0CC.columnIndices) == null ? undefined : var_core_value_sig70AF[var_core_value_sig2F2B]) ?? var_core_value_sig2F2B,
      rect: var_core_value_sigD04E
    }] : [];
  });
}
function Vn(var_core_value_sigAE58, var_core_value_sig8E13, var_core_value_sig3AAF, var_core_value_sig134E) {
  let var_core_value_sigA3C0 = 6 / var_core_value_sig134E,
    var_core_value_sig723F = 10 / var_core_value_sig134E,
    var_core_value_sigD044 = 4 / var_core_value_sig134E,
    var_core_value_sig9797 = Kn(var_core_value_sigAE58);
  return (var_core_value_sigAE58.rowHeights["length"] === 0 ? [] : [{
    position: "above",
    rowOffset: 0,
    y: var_core_value_sig3AAF[0]
  }, ...var_core_value_sigAE58.rowHeights["map"]((var_core_value_sigB99B, var_core_value_sig5A75) => ({
    position: "below",
    rowOffset: var_core_value_sig5A75,
    y: var_core_value_sig3AAF[var_core_value_sig5A75] + var_core_value_sigB99B
  }))]).map(({
    position: var_core_value_sig7BAF,
    rowOffset: var_core_value_sig8F69,
    y: var_core_value_sig6884
  }) => {
    var var_core_value_sig066E;
    return {
      kind: "row-insert-dot",
      tableId: var_core_value_sigAE58.tableId,
      row: ((var_core_value_sig066E = var_core_value_sigAE58.rowIndices) == null ? undefined : var_core_value_sig066E[var_core_value_sig8F69]) ?? var_core_value_sig8F69,
      position: var_core_value_sig7BAF,
      rect: {
        x: var_core_value_sig9797 - var_core_value_sig723F - var_core_value_sigA3C0 / 2 - var_core_value_sigD044,
        y: var_core_value_sig6884 - var_core_value_sigA3C0 / 2,
        width: var_core_value_sigA3C0,
        height: var_core_value_sigA3C0
      }
    };
  });
}
function Hn(var_core_value_sig8533, var_core_value_sig57C5, var_core_value_sig0DE9, var_core_value_sigB00D) {
  let var_core_value_sig57C8 = 6 / var_core_value_sigB00D,
    var_core_value_sigC27D = 16 / var_core_value_sigB00D,
    var_core_value_sig7B95 = 4 / var_core_value_sigB00D;
  return (var_core_value_sig8533.columnWidths["length"] === 0 ? [] : [{
    columnOffset: 0,
    position: "left",
    x: var_core_value_sig0DE9[0]
  }, ...var_core_value_sig8533.columnWidths["map"]((var_core_value_sig9B0D, var_core_value_sig3D2C) => ({
    columnOffset: var_core_value_sig3D2C,
    position: "right",
    x: var_core_value_sig0DE9[var_core_value_sig3D2C] + var_core_value_sig9B0D
  }))]).flatMap(({
    columnOffset: var_core_value_sigC56D,
    position: var_core_value_sig3A17,
    x: var_core_value_sig938F
  }) => {
    var var_core_value_sigD948;
    let var_core_value_sigBE5E = Yn(var_core_value_sig57C5, {
      x: var_core_value_sig938F - var_core_value_sig57C8 / 2,
      y: var_core_value_sig8533.tableRect["y"] - var_core_value_sigC27D - var_core_value_sig7B95,
      width: var_core_value_sig57C8,
      height: var_core_value_sig57C8
    });
    return var_core_value_sigBE5E ? [{
      kind: "column-insert-dot",
      tableId: var_core_value_sig8533.tableId,
      column: ((var_core_value_sigD948 = var_core_value_sig8533.columnIndices) == null ? undefined : var_core_value_sigD948[var_core_value_sigC56D]) ?? var_core_value_sigC56D,
      position: var_core_value_sig3A17,
      rect: var_core_value_sigBE5E
    }] : [];
  });
}
function Un(var_core_value_sig7D59, var_core_value_sig5863, var_core_value_sig5BE7, var_core_value_sigC74A) {
  let var_core_value_sig8F6A = Gn(var_core_value_sig7D59),
    var_core_value_sig46EA = Zn(var_core_value_sig7D59, var_core_value_sig5863).map(var_core_value_sig0281 => $n(var_core_value_sig7D59, var_core_value_sig0281.startColumn, var_core_value_sig0281.endColumn)).filter(var_core_value_sigED71 => !!var_core_value_sigED71).sort((var_core_value_sig281C, var_core_value_sig3C92) => var_core_value_sig281C[0] - var_core_value_sig3C92[0]);
  return tr([var_core_value_sig8F6A.x, var_core_value_sig8F6A.x + var_core_value_sig8F6A.width], var_core_value_sig46EA).map(([var_core_value_sigB16B, var_core_value_sig585D]) => ({
    kind: "resize-row",
    tableId: var_core_value_sig7D59.tableId,
    row: var_core_value_sig5863,
    rect: {
      x: var_core_value_sigB16B,
      y: var_core_value_sig5BE7,
      width: var_core_value_sig585D - var_core_value_sigB16B,
      height: var_core_value_sigC74A
    }
  }));
}
function Wn(var_core_value_sig626C, var_core_value_sig9077, var_core_value_sigC76C, var_core_value_sigB23A) {
  if (!Jn(Gn(var_core_value_sig626C), var_core_value_sigC76C, var_core_value_sigC76C + var_core_value_sigB23A)) return [];
  let var_core_value_sigBA66 = Qn(var_core_value_sig626C, var_core_value_sig9077).map(var_core_value_sigE722 => er(var_core_value_sig626C, var_core_value_sigE722.startRow, var_core_value_sigE722.endRow)).filter(var_core_value_sig062A => !!var_core_value_sig062A).sort((var_core_value_sig050A, var_core_value_sig8B32) => var_core_value_sig050A[0] - var_core_value_sig8B32[0]);
  return tr([var_core_value_sig626C.tableRect["y"], var_core_value_sig626C.tableRect["y"] + var_core_value_sig626C.tableRect["height"]], var_core_value_sigBA66).map(([var_core_value_sig870F, var_core_value_sigB683]) => ({
    kind: "resize-column",
    tableId: var_core_value_sig626C.tableId,
    column: var_core_value_sig9077,
    rect: {
      x: var_core_value_sigC76C,
      y: var_core_value_sig870F,
      width: var_core_value_sigB23A,
      height: var_core_value_sigB683 - var_core_value_sig870F
    }
  }));
}
function Gn(var_core_value_sig3DF0) {
  var var_core_value_sig0512, var_core_value_sig4B2B;
  return {
    ...var_core_value_sig3DF0.tableRect,
    x: ((var_core_value_sig0512 = var_core_value_sig3DF0.viewport) == null ? undefined : var_core_value_sig0512.viewportLeft) ?? var_core_value_sig3DF0.tableRect["x"],
    width: ((var_core_value_sig4B2B = var_core_value_sig3DF0.viewport) == null ? undefined : var_core_value_sig4B2B.viewportWidth) ?? var_core_value_sig3DF0.tableRect["width"]
  };
}
function Kn(var_core_value_sigDF88) {
  return var_core_value_sigDF88.viewport ? qn(var_core_value_sigDF88, var_core_value_sigDF88.tableRect["x"]) : var_core_value_sigDF88.tableRect["x"];
}
function qn(var_core_value_sigDB93, var_core_value_sig67CF) {
  var var_core_value_sigCA96;
  return var_core_value_sig67CF - (((var_core_value_sigCA96 = var_core_value_sigDB93.viewport) == null ? undefined : var_core_value_sigCA96.scrollLeft) ?? 0);
}
function Jn(var_core_value_sig6C5E, var_core_value_sig4997, var_core_value_sig7290) {
  return var_core_value_sig7290 >= var_core_value_sig6C5E.x && var_core_value_sig4997 <= var_core_value_sig6C5E.x + var_core_value_sig6C5E.width;
}
function Yn(var_core_value_sigE835, var_core_value_sig4644) {
  let var_core_value_sig9DED = Math.max(var_core_value_sig4644.x, var_core_value_sigE835.x),
    var_core_value_sig7DE6 = Math.min(var_core_value_sig4644.x + var_core_value_sig4644.width, var_core_value_sigE835.x + var_core_value_sigE835.width);
  return var_core_value_sig7DE6 <= var_core_value_sig9DED ? null : {
    ...var_core_value_sig4644,
    x: var_core_value_sig9DED,
    width: var_core_value_sig7DE6 - var_core_value_sig9DED
  };
}
function Xn(var_core_value_sig120E) {
  return Ln.has(var_core_value_sig120E);
}
function Zn(var_core_value_sigD79B, var_core_value_sig92A3) {
  var var_core_value_sig8911;
  return ((var_core_value_sig8911 = var_core_value_sigD79B.mergedCells) == null ? undefined : var_core_value_sig8911.filter(var_core_value_sig26EC => var_core_value_sig92A3 >= var_core_value_sig26EC.startRow && var_core_value_sig92A3 < var_core_value_sig26EC.endRow)) ?? [];
}
function Qn(var_core_value_sig8D1B, var_core_value_sigA915) {
  var var_core_value_sigE1F7;
  return ((var_core_value_sigE1F7 = var_core_value_sig8D1B.mergedCells) == null ? undefined : var_core_value_sigE1F7.filter(var_core_value_sigEEDB => var_core_value_sigA915 >= var_core_value_sigEEDB.startColumn && var_core_value_sigA915 < var_core_value_sigEEDB.endColumn)) ?? [];
}
function $n(var_core_value_sig4BE7, var_core_value_sigF9FF, var_core_value_sigE0E3) {
  let var_core_value_sig3AB3 = ar(var_core_value_sig4BE7.columnIndices, var_core_value_sigF9FF),
    var_core_value_sig816E = ar(var_core_value_sig4BE7.columnIndices, var_core_value_sigE0E3);
  if (var_core_value_sig3AB3 < 0 || var_core_value_sig816E < 0) return null;
  let var_core_value_sigE6F3 = Math.min(var_core_value_sig3AB3, var_core_value_sig816E),
    var_core_value_sig3EE1 = Math.max(var_core_value_sig3AB3, var_core_value_sig816E);
  return [qn(var_core_value_sig4BE7, var_core_value_sig4BE7.tableRect["x"] + or(var_core_value_sig4BE7.columnWidths["slice"](0, var_core_value_sigE6F3))), qn(var_core_value_sig4BE7, var_core_value_sig4BE7.tableRect["x"] + or(var_core_value_sig4BE7.columnWidths["slice"](0, var_core_value_sig3EE1 + 1)))];
}
function er(var_core_value_sig9673, var_core_value_sig4917, var_core_value_sig3BE6) {
  let var_core_value_sigA1C9 = ar(var_core_value_sig9673.rowIndices, var_core_value_sig4917),
    var_core_value_sig77D6 = ar(var_core_value_sig9673.rowIndices, var_core_value_sig3BE6);
  if (var_core_value_sigA1C9 < 0 || var_core_value_sig77D6 < 0) return null;
  let var_core_value_sigE3CE = Math.min(var_core_value_sigA1C9, var_core_value_sig77D6),
    var_core_value_sig219B = Math.max(var_core_value_sigA1C9, var_core_value_sig77D6);
  return [var_core_value_sig9673.tableRect["y"] + or(var_core_value_sig9673.rowHeights["slice"](0, var_core_value_sigE3CE)), var_core_value_sig9673.tableRect["y"] + or(var_core_value_sig9673.rowHeights["slice"](0, var_core_value_sig219B + 1))];
}
function tr(var_core_value_sig4493, var_core_value_sig8B9C) {
  let var_core_value_sigA35B = [var_core_value_sig4493];
  return var_core_value_sig8B9C.forEach(([var_core_value_sig36E7, var_core_value_sig6A78]) => {
    var_core_value_sigA35B = var_core_value_sigA35B.flatMap(([var_core_value_sigD082, var_core_value_sigDBB7]) => {
      let var_core_value_sigD0A8 = Math.max(var_core_value_sigD082, Math.min(var_core_value_sigDBB7, var_core_value_sig36E7)),
        var_core_value_sigF4B9 = Math.max(var_core_value_sigD082, Math.min(var_core_value_sigDBB7, var_core_value_sig6A78));
      return var_core_value_sigF4B9 <= var_core_value_sigD082 || var_core_value_sigD0A8 >= var_core_value_sigDBB7 || var_core_value_sigD0A8 >= var_core_value_sigF4B9 ? [[var_core_value_sigD082, var_core_value_sigDBB7]] : [[var_core_value_sigD082, var_core_value_sigD0A8], [var_core_value_sigF4B9, var_core_value_sigDBB7]].filter(([var_core_value_sigBC46, var_core_value_sig3D7D]) => var_core_value_sig3D7D > var_core_value_sigBC46);
    });
  }), var_core_value_sigA35B;
}
function nr(var_core_value_sig82DD, var_core_value_sigAAC7, var_core_value_sig1999) {
  return [...var_core_value_sig82DD].sort((var_core_value_sigF7EF, var_core_value_sig27F9) => B(var_core_value_sig27F9) - B(var_core_value_sigF7EF)).find(var_core_value_sig393E => ur(var_core_value_sig393E.rect, var_core_value_sigAAC7, var_core_value_sig1999)) ?? null;
}
function rr(var_core_value_sigFB45, var_core_value_sigB86C, var_core_value_sigD892) {
  return [...var_core_value_sigFB45].filter(var_core_value_sigB609 => cr(var_core_value_sigB609.kind)).sort((var_core_value_sig390D, var_core_value_sigC928) => B(var_core_value_sigC928) - B(var_core_value_sig390D)).find(var_core_value_sig39B7 => dr(var_core_value_sig39B7.rect, var_core_value_sigB86C, var_core_value_sigD892, 6)) ?? null;
}
function ir(var_core_value_sig6086, var_core_value_sigAED2, var_core_value_sig3516) {
  return [...var_core_value_sig6086].filter(var_core_value_sig18E0 => Xn(var_core_value_sig18E0.kind)).sort((var_core_value_sigE161, var_core_value_sigBDEE) => B(var_core_value_sigBDEE) - B(var_core_value_sigE161)).find(var_core_value_sig1F40 => dr(var_core_value_sig1F40.rect, var_core_value_sigAED2, var_core_value_sig3516, 6)) ?? null;
}
function ar(var_core_value_sigCDCD, var_core_value_sig206A) {
  return (var_core_value_sigCDCD == null ? undefined : var_core_value_sigCDCD.findIndex(var_core_value_sig3FC7 => var_core_value_sig3FC7 === var_core_value_sig206A)) ?? var_core_value_sig206A;
}
function or(var_core_value_sig1EFE) {
  return var_core_value_sig1EFE.reduce((var_core_value_sig1E1B, var_core_value_sig3B10) => var_core_value_sig1E1B + var_core_value_sig3B10, 0);
}
function sr(var_core_value_sig9904, var_core_value_sig39C7, var_core_value_sigA022) {
  return rr(var_core_value_sig9904, var_core_value_sig39C7, var_core_value_sigA022) != null;
}
function cr(var_core_value_sig913A) {
  return Rn.has(var_core_value_sig913A);
}
function B(var_core_value_sig991D) {
  return var_core_value_sig991D.kind === "row-insert-dot" || var_core_value_sig991D.kind === "column-insert-dot" ? 3 : var_core_value_sig991D.kind === "resize-column" || var_core_value_sig991D.kind === "resize-row" ? 2 : 0;
}
function lr(var_core_value_sig3E9C, var_core_value_sig7835) {
  let var_core_value_sig1257 = [],
    var_core_value_sig97E2 = var_core_value_sig7835;
  return var_core_value_sig3E9C.forEach(var_core_value_sig89E6 => {
    var_core_value_sig1257.push(var_core_value_sig97E2), var_core_value_sig97E2 += var_core_value_sig89E6;
  }), var_core_value_sig1257;
}
function ur(var_core_value_sigBFA3, var_core_value_sig6663, var_core_value_sigB250) {
  return var_core_value_sig6663 >= var_core_value_sigBFA3.x && var_core_value_sig6663 <= var_core_value_sigBFA3.x + var_core_value_sigBFA3.width && var_core_value_sigB250 >= var_core_value_sigBFA3.y && var_core_value_sigB250 <= var_core_value_sigBFA3.y + var_core_value_sigBFA3.height;
}
function dr(var_core_value_sig4EAB, var_core_value_sig2FD0, var_core_value_sig035C, var_core_value_sigA7F0) {
  return var_core_value_sig2FD0 >= var_core_value_sig4EAB.x - var_core_value_sigA7F0 && var_core_value_sig2FD0 <= var_core_value_sig4EAB.x + var_core_value_sig4EAB.width + var_core_value_sigA7F0 && var_core_value_sig035C >= var_core_value_sig4EAB.y - var_core_value_sigA7F0 && var_core_value_sig035C <= var_core_value_sig4EAB.y + var_core_value_sig4EAB.height + var_core_value_sigA7F0;
}
const fr = "viewMain",
  pr = "#1a73e8",
  mr = -10000,
  hr = "#dadce0",
  gr = "#3c4043",
  _r = "#f1f3f4",
  vr = "#b8bec6",
  V = new Map();
function yr(var_core_value_sig6AE2, var_core_value_sigFD17) {
  let var_core_value_sigA5E0 = V.get(var_core_value_sig6AE2);
  if (var_core_value_sigA5E0 != null && var_core_value_sigA5E0.length) for (let var_core_value_sig4743 = var_core_value_sigA5E0.length - 1; var_core_value_sig4743 >= 0; --var_core_value_sig4743) {
    let var_core_value_sig5CEE = var_core_value_sigA5E0[var_core_value_sig4743](var_core_value_sig6AE2, var_core_value_sigFD17);
    if (var_core_value_sig5CEE) return var_core_value_sig5CEE;
  }
}
function br(var_core_value_sigC38F, var_core_value_sigFAFE) {
  let var_core_value_sig2B86 = V.get(var_core_value_sigC38F) ?? [];
  return var_core_value_sig2B86.push(var_core_value_sigFAFE), V.set(var_core_value_sigC38F, var_core_value_sig2B86), V.size === 1 && var_core_value_sig2B86.length === 1 && (0, u.setDocsTableRenderViewportProvider)(yr), {
    dispose: () => {
      let var_core_value_sigEB6A = V.get(var_core_value_sigC38F);
      if (!var_core_value_sigEB6A) return;
      let var_core_value_sig3D46 = var_core_value_sigEB6A.indexOf(var_core_value_sigFAFE);
      var_core_value_sig3D46 >= 0 && var_core_value_sigEB6A.splice(var_core_value_sig3D46, 1), var_core_value_sigEB6A.length === 0 && V.delete(var_core_value_sigC38F), V.size === 0 && (0, u.setDocsTableRenderViewportProvider)(null);
    }
  };
}
let xr = class extends r.Disposable {
  constructor(var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig808B, var_core_value_sig2A26, var_core_value_sig1179, var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5, var_core_value_sig7100, var_core_value_sigA19A, var_core_value_sigD3F5, var_core_value_sig3082, var_core_value_sigF5D1, var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig90C0) {
    super(), this._context = var_core_value_sigCC93, this._docSkeletonManagerService = var_core_value_sig5964, this._docSelectionManagerService = var_core_value_sig808B, this._docEventManagerService = var_core_value_sig2A26, this._docParagraphMenuService = var_core_value_sig1179, this._docCanvasPopManagerService = var_core_value_sigEA92, this._docFloatMenuService = var_core_value_sig8FD9, this._docSelectionRenderService = var_core_value_sig1AE5, this._selectionService = var_core_value_sig7100, this._floatingMenuService = var_core_value_sigA19A, this._viewportService = var_core_value_sigD3F5, this._localeService = var_core_value_sig3082, this._themeService = var_core_value_sigF5D1, this._contextMenuService = var_core_value_sig8775, this._commandService = var_core_value_sig481B, this._passiveWheelService = var_core_value_sig13D7, this._permissionService = var_core_value_sig90C0, N(this, "_activeTable", null), N(this, "_hoveredTrigger", null), N(this, "_dragState", null), N(this, "_dragSourceTableId", null), N(this, "_dragPreview", null), N(this, "_moveDragState", null), N(this, "_moveDragSourceTableId", null), N(this, "_moveDragPreview", null), N(this, "_moveDropTarget", null), N(this, "_pendingHandleSelection", null), N(this, "_rowColumnMoveState", null), N(this, "_rowColumnMoveTarget", null), N(this, "_scrollbarDragState", null), N(this, "_selectionDragState", null), N(this, "_headerSelectionDragState", null), N(this, "_selection", null), N(this, "_selectionAutoScrollTimer", null), N(this, "_hoverCell", null), N(this, "_hoverColumn", null), N(this, "_hoverRow", null), N(this, "_borderPopover", null), N(this, "_borderPopoverDisposable", null), N(this, "_sortPopover", null), N(this, "_tooltip", null), N(this, "_lastPointerPoint", null), N(this, "_activeTableRefreshTimer", null), N(this, "_floatingMenuPopup", null), N(this, "_floatingMenuPopupAnchorKey", null), N(this, "_cursorBeforeTableInteraction", null), N(this, "_knownTableIds", new Set()), this._initTableState(), this._initTableLayoutRefresh(), this._initSelectionState(), this._initFloatingMenuState(), this._initZoomStateReset(), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      this._canEditDocument() || (this._floatingMenuService["hide"](), this._hideTransientTableControls());
    })), this._initPointerEvents(), this._initCanvasRender();
    let var_core_value_sigF1B2 = br(this._context["unitId"], (var_core_value_sigE92A, var_core_value_sig362B) => this._getOrCreateViewportState(var_core_value_sigE92A, var_core_value_sig362B)),
      var_core_value_sigC2BB = this._passiveWheelService["register"]({
        handleWheel: var_core_value_sig5CA5 => this._handleEmbedPassiveWheel(var_core_value_sig5CA5),
        order: 100
      });
    this.disposeWithMe({
      dispose: () => {
        var_core_value_sigF1B2.dispose(), var_core_value_sigC2BB == null || var_core_value_sigC2BB.dispose(), this._activeTableRefreshTimer != null && (clearTimeout(this._activeTableRefreshTimer), this._activeTableRefreshTimer = null);
        for (let var_core_value_sig27E5 of this._knownTableIds) this._viewportService["clear"](this._context["unitId"], var_core_value_sig27E5);
        this._knownTableIds["clear"](), this._docFloatMenuService["setSuppressed"](false), this._hideFloatingMenuPopup();
      }
    });
  }
  _initTableState() {
    this.disposeWithMe(this._docEventManagerService["hoverTableRealTime$"].subscribe(var_core_value_sigE90F => {
      if (!(!var_core_value_sigE90F && (this._dragState || this._moveDragState || this._rowColumnMoveState || this._scrollbarDragState || this._selectionDragState || this._headerSelectionDragState))) {
        if (var_core_value_sigE90F && this._shouldKeepActiveTableForSelection()) {
          var var_core_value_sigEFD4;
          if ((0, u.getTableIdAndSliceIndex)(var_core_value_sigE90F.tableId).tableId !== ((var_core_value_sigEFD4 = this._selection) == null ? undefined : var_core_value_sigEFD4.tableId)) {
            this._makeDirty();
            return;
          }
        }
        if (!var_core_value_sigE90F && this._shouldKeepActiveTableForSelection()) {
          this._makeDirty();
          return;
        }
        !var_core_value_sigE90F && this._shouldKeepActiveTableForControls() || (this._activeTable = this._lastPointerPoint ? this._buildActiveTableAtPoint(this._lastPointerPoint["x"], this._lastPointerPoint["y"]) : var_core_value_sigE90F ? this._buildActiveTable(var_core_value_sigE90F) : null, this._activeTable || (this._hoveredTrigger = null), this._makeDirty());
      }
    }));
  }
  _initTableLayoutRefresh() {
    let var_core_value_sigD9DB = () => this._refreshTableLayoutState();
    this.disposeWithMe(this._docSkeletonManagerService["currentSkeleton$"].subscribe(var_core_value_sigD9DB)), this.disposeWithMe(this._docSkeletonManagerService["currentSkeleton$"].pipe((0, o.switchMap)(var_core_value_sig861B => (var_core_value_sig861B == null ? undefined : var_core_value_sig861B.dirty$) ?? o.EMPTY)).subscribe(var_core_value_sigD9DB));
  }
  _refreshTableLayoutState() {
    var var_core_value_sigA363, var_core_value_sigFBA5, var_core_value_sigAC47;
    let var_core_value_sigA06F = (var_core_value_sigA363 = this._activeTable) == null ? undefined : var_core_value_sigA363.sourceTableId;
    this._syncViewportStatesFromSkeleton(), this._selectionService["emitCurrentSelection"](), this._refreshActiveTableForLayoutChange();
    let var_core_value_sig770E = this._docParagraphMenuService["activeTarget"],
      var_core_value_sig4654 = (var_core_value_sig770E == null ? undefined : var_core_value_sig770E.kind) === r.DocumentBlockType["TABLE"] ? (var_core_value_sigFBA5 = var_core_value_sig770E.table) == null ? undefined : var_core_value_sigFBA5.tableId : undefined;
    var_core_value_sig4654 && ((var_core_value_sigAC47 = this._context["unit"].getSnapshot().tableSource) == null ? undefined : var_core_value_sigAC47[var_core_value_sig4654]) == null && this._docParagraphMenuService["hideParagraphMenu"](true), var_core_value_sigA06F && !this._activeTable && this._hideTransientTableControls();
  }
  _initSelectionState() {
    this.disposeWithMe(this._selectionService["selectionChange$"].subscribe(var_core_value_sig5237 => {
      if (this._selection = var_core_value_sig5237, var_core_value_sig5237 != null && var_core_value_sig5237.tableId) {
        this._refreshActiveTableFromSkeleton(var_core_value_sig5237.tableId), this._syncFloatingMenuFromSelection(), this._syncParagraphTableMenuFromActiveTable();
        return;
      }
      this._syncFloatingMenuFromSelection(), this._makeDirty();
    }));
  }
  _initFloatingMenuState() {
    this.disposeWithMe(this._floatingMenuService["state$"].subscribe(var_core_value_sigBB00 => {
      this._docFloatMenuService["setSuppressed"](var_core_value_sigBB00.visible && var_core_value_sigBB00.unitId === this._context["unitId"]), !(!var_core_value_sigBB00.tableId || !var_core_value_sigBB00.visible && !var_core_value_sigBB00.hoverActive) && ((!this._activeTable || this._activeTable["sourceTableId"] !== var_core_value_sigBB00.tableId) && this._refreshActiveTableFromSkeleton(var_core_value_sigBB00.tableId), this._syncParagraphTableMenuFromActiveTable());
    }));
  }
  _initZoomStateReset() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig7E54 => {
      var var_core_value_sig9A8D;
      if (var_core_value_sig7E54.id !== t.SetDocZoomRatioOperation["id"]) return;
      let var_core_value_sigC259 = (var_core_value_sig9A8D = var_core_value_sig7E54.params) == null ? undefined : var_core_value_sig9A8D.unitId;
      var_core_value_sigC259 && var_core_value_sigC259 !== this._context["unitId"] || this._hideTransientTableControls();
    }));
  }
  _initPointerEvents() {
    let var_core_value_sigB26B = Er(this._context);
    this.disposeWithMe(yn(({
      event: var_core_value_sig9C9F
    }) => {
      this._handleWindowPointerMove(var_core_value_sig9C9F);
    })), this.disposeWithMe(vn(({
      event: var_core_value_sigFDEA,
      type: var_core_value_sig86D0
    }) => {
      let var_core_value_sig4CD2 = this._getDocumentPointFromWindowEvent(var_core_value_sigFDEA) ?? this._lastPointerPoint;
      this._releasePointerInteraction(var_core_value_sig4CD2, undefined, {
        commit: var_core_value_sig86D0 === "pointerup" || var_core_value_sig86D0 === "mouseup",
        selectCollapsedRange: var_core_value_sig86D0 === "pointerup" || var_core_value_sig86D0 === "mouseup"
      });
    })), this.disposeWithMe(var_core_value_sigB26B.onPointerMove$["subscribeEvent"]({
      next: ([var_core_value_sig48CA, var_core_value_sig50AF]) => {
        let var_core_value_sigA942 = this._getDocumentPointFromPointerEvent(var_core_value_sig48CA);
        if (this._lastPointerPoint = var_core_value_sigA942, this._selectionDragState && !kr(var_core_value_sig48CA) && (this._selectionDragState = null, this._stopSelectionDragAutoScroll()), this._activeTable ||= this._buildActiveTableAtPoint(var_core_value_sigA942.x, var_core_value_sigA942.y), this._moveDragState) {
          let var_core_value_sig8061 = Math.hypot(var_core_value_sigA942.x - this._moveDragState["startX"], var_core_value_sigA942.y - this._moveDragState["startY"]);
          this._moveDragPreview = var_core_value_sig8061 >= 4 ? gn(this._moveDragState, var_core_value_sigA942.x, var_core_value_sigA942.y) : null, this._moveDropTarget = this._moveDragPreview ? this._getTableDropTargetAtPoint(var_core_value_sigA942.x, var_core_value_sigA942.y) : null, this._setTableCursor(u.CURSOR_TYPE["MOVE"]), var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, var_core_value_sig48CA.preventDefault(), this._makeDirty();
          return;
        }
        if (this._scrollbarDragState) {
          this._updateScrollbarDrag(var_core_value_sigA942.x), this._setTableCursor(u.CURSOR_TYPE["POINTER"]), var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, var_core_value_sig48CA.preventDefault(), this._makeDirty();
          return;
        }
        if (this._pendingHandleSelection) {
          mn({
            x: this._pendingHandleSelection["startX"],
            y: this._pendingHandleSelection["startY"]
          }, var_core_value_sigA942, 4) || (this._rowColumnMoveState = this._createRowColumnMoveState(this._pendingHandleSelection), this._rowColumnMoveTarget = this._getRowColumnMoveTarget(var_core_value_sigA942), this._pendingHandleSelection = null, this._setTableCursor(u.CURSOR_TYPE["MOVE"]), var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, var_core_value_sig48CA.preventDefault(), this._makeDirty());
          return;
        }
        if (this._dragState) {
          this._dragPreview = Sn(this._dragState, var_core_value_sigA942.x, var_core_value_sigA942.y), this._setResizeCursor(this._dragState["trigger"]), var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, var_core_value_sig48CA.preventDefault(), this._makeDirty();
          return;
        }
        if (this._selectionDragState) {
          if (this._updateSelectionDrag(var_core_value_sigA942)) {
            var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, var_core_value_sig48CA.preventDefault();
            return;
          }
          this._updateSelectionDragAutoScroll(var_core_value_sigA942);
        }
        this._headerSelectionDragState && (kr(var_core_value_sig48CA) ? this._updateHeaderSelectionDrag(var_core_value_sigA942) : (this._headerSelectionDragState = null, this._selectionService["setNativeSelectionSuppressed"](false)));
        let var_core_value_sigA621 = this._hitBorderPreset(var_core_value_sigA942.x, var_core_value_sigA942.y);
        if (var_core_value_sigA621) {
          this._setTooltip({
            label: this._getBorderPresetLabel(var_core_value_sigA621.preset),
            x: var_core_value_sigA942.x,
            y: var_core_value_sigA942.y
          }), this._setTableCursor(u.CURSOR_TYPE["POINTER"]), var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, this._makeDirty();
          return;
        }
        if (this._hitSortOption(var_core_value_sigA942.x, var_core_value_sigA942.y)) {
          this._setTooltip(null), this._setTableCursor(u.CURSOR_TYPE["POINTER"]), var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, this._makeDirty();
          return;
        }
        if (this._hitScrollbar(var_core_value_sigA942.x, var_core_value_sigA942.y)) {
          this._setTableCursor(u.CURSOR_TYPE["POINTER"]), var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, this._makeDirty();
          return;
        }
        let var_core_value_sigBBFF = this._hitTestHoverTrigger(var_core_value_sigA942.x, var_core_value_sigA942.y),
          var_core_value_sig8889 = this._shouldPreserveFloatingHover(var_core_value_sigA942.x, var_core_value_sigA942.y);
        if (var_core_value_sig8889 || this._updateHoverTarget(var_core_value_sigA942.x, var_core_value_sigA942.y), !var_core_value_sigBBFF && var_core_value_sig8889) {
          var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true;
          return;
        }
        if (this._setHoveredTrigger(var_core_value_sigBBFF), this._setTooltip(this._buildTriggerTooltip(var_core_value_sigBBFF)), !var_core_value_sigBBFF) {
          this._restoreTableCursor();
          return;
        }
        var_core_value_sig50AF.stopPropagation(), var_core_value_sig50AF.skipNextObservers = true, var_core_value_sigBBFF.kind === "resize-column" || var_core_value_sigBBFF.kind === "resize-row" ? this._setResizeCursor(var_core_value_sigBBFF) : this._setTableCursor(u.CURSOR_TYPE["POINTER"]);
      },
      priority: mr
    })), this.disposeWithMe(var_core_value_sigB26B.onPointerDown$["subscribeEvent"]({
      next: ([var_core_value_sig32F8, var_core_value_sig5B67]) => {
        var var_core_value_sig1758;
        if (var_core_value_sig32F8.button === 2) {
          this._handleTableContextMenuPointerDown(var_core_value_sig32F8, var_core_value_sig5B67);
          return;
        }
        let var_core_value_sig4805 = this._getDocumentPointFromPointerEvent(var_core_value_sig32F8);
        this._lastPointerPoint = var_core_value_sig4805, this._activeTable ||= this._buildActiveTableAtPoint(var_core_value_sig4805.x, var_core_value_sig4805.y);
        let var_core_value_sigE67E = this._hitScrollbar(var_core_value_sig4805.x, var_core_value_sig4805.y);
        if (var_core_value_sigE67E && this._activeTable) {
          var_core_value_sig5B67.stopPropagation(), var_core_value_sig5B67.skipNextObservers = true, var_core_value_sig32F8.stopPropagation(), var_core_value_sig32F8.preventDefault(), this._selectionService["setNativeSelectionSuppressed"](true), this._startOrJumpScrollbar(var_core_value_sigE67E, var_core_value_sig4805.x);
          return;
        }
        let var_core_value_sig2902 = this._hitBorderPreset(var_core_value_sig4805.x, var_core_value_sig4805.y);
        if (var_core_value_sig2902 && this._borderPopover) {
          var_core_value_sig5B67.stopPropagation(), var_core_value_sig5B67.skipNextObservers = true, var_core_value_sig32F8.stopPropagation(), var_core_value_sig32F8.preventDefault(), this._applyBorderPreset(var_core_value_sig2902.preset);
          return;
        }
        let var_core_value_sig9989 = this._hitSortOption(var_core_value_sig4805.x, var_core_value_sig4805.y);
        if (var_core_value_sig9989 && this._sortPopover) {
          var_core_value_sig5B67.stopPropagation(), var_core_value_sig5B67.skipNextObservers = true, var_core_value_sig32F8.stopPropagation(), var_core_value_sig32F8.preventDefault(), this._selectColumn(this._sortPopover["tableId"], this._sortPopover["column"]), this._commandService["executeCommand"](e.DocsTableSortTableCommand["id"], {
            column: this._sortPopover["column"],
            direction: var_core_value_sig9989.direction,
            tableId: this._sortPopover["tableId"]
          }), this._sortPopover = null, this._makeDirty();
          return;
        }
        let var_core_value_sig698E = this._hitTest(var_core_value_sig4805.x, var_core_value_sig4805.y) ?? this._hoveredTrigger,
          var_core_value_sig2809 = ((var_core_value_sig1758 = this._activeTable) == null ? undefined : var_core_value_sig1758.sourceTableId) ?? (var_core_value_sig698E == null ? undefined : var_core_value_sig698E.tableId);
        if (!var_core_value_sig698E) {
          let var_core_value_sig4D4C = this._buildTableMoveHitAtPoint(var_core_value_sig4805.x, var_core_value_sig4805.y);
          var_core_value_sig4D4C && (this._activeTable = var_core_value_sig4D4C.activeTable, var_core_value_sig698E = var_core_value_sig4D4C.trigger, var_core_value_sig2809 = var_core_value_sig4D4C.activeTable["sourceTableId"]);
        }
        if (!var_core_value_sig698E || !var_core_value_sig2809) {
          let var_core_value_sigC9E0 = this._getCellAtPoint(var_core_value_sig4805.x, var_core_value_sig4805.y);
          var_core_value_sigC9E0 ? (this._selectionDragState = {
            anchorColumn: var_core_value_sigC9E0.column,
            anchorRow: var_core_value_sigC9E0.row,
            ...(var_core_value_sigC9E0.segmentId ? {
              segmentId: var_core_value_sigC9E0.segmentId
            } : {}),
            startX: var_core_value_sig4805.x,
            startY: var_core_value_sig4805.y,
            structural: false,
            tableId: var_core_value_sigC9E0.tableId
          }, this._selectionService["clearStructuralSelection"]({
            clearNativeSelection: false
          })) : (this._selectionDragState = null, this._stopSelectionDragAutoScroll(), this._selectionService["clearStructuralSelection"]({
            clearNativeSelection: false
          }));
          return;
        }
        if (this._selectionDragState = null, this._stopSelectionDragAutoScroll(), var_core_value_sig5B67.stopPropagation(), var_core_value_sig5B67.skipNextObservers = true, var_core_value_sig32F8.stopPropagation(), var_core_value_sig32F8.preventDefault(), var_core_value_sig698E.kind === "resize-column" || var_core_value_sig698E.kind === "resize-row") {
          let var_core_value_sig76BA = this._getTriggerInitialSize(var_core_value_sig698E);
          if (var_core_value_sig76BA == null) return;
          this._selectionService["setNativeSelectionSuppressed"](true), this._pendingHandleSelection = null, this._selectionService["clearStructuralSelection"](), this._dragState = xn(var_core_value_sig698E, var_core_value_sig4805.x, var_core_value_sig4805.y, var_core_value_sig76BA), this._dragSourceTableId = var_core_value_sig2809, this._dragPreview = Sn(this._dragState, var_core_value_sig4805.x, var_core_value_sig4805.y), this._setResizeCursor(var_core_value_sig698E), this._makeDirty();
          return;
        }
        if (var_core_value_sig698E.kind === "table-select") {
          if (!this._activeTable) return;
          this._selectionService["setNativeSelectionSuppressed"](true), this._moveDragState = hn(var_core_value_sig698E, var_core_value_sig4805.x, var_core_value_sig4805.y, this._activeTable["input"].tableRect), this._moveDragSourceTableId = var_core_value_sig2809, this._moveDragPreview = null, this._moveDropTarget = null, this._closeBorderPopover(), this._sortPopover = null, this._setTableCursor(u.CURSOR_TYPE["MOVE"]), this._makeDirty();
          return;
        }
        this._handleStructuralTriggerPointerDown(var_core_value_sig698E, var_core_value_sig4805, var_core_value_sig2809);
      },
      priority: mr
    })), this.disposeWithMe(var_core_value_sigB26B.onPointerUp$["subscribeEvent"]({
      next: ([var_core_value_sig2DAB, var_core_value_sig877E]) => {
        let var_core_value_sig20C8 = this._getDocumentPointFromPointerEvent(var_core_value_sig2DAB);
        this._lastPointerPoint = var_core_value_sig20C8, this._releasePointerInteraction(var_core_value_sig20C8, var_core_value_sig877E, {
          commit: true,
          selectCollapsedRange: true
        });
      },
      priority: mr
    })), this.disposeWithMe(this._context["scene"].onMouseWheel$["subscribeEvent"]({
      next: ([var_core_value_sigE9A7, var_core_value_sigBECE]) => {
        let var_core_value_sig1B22 = this._getDocumentPointFromPointerEvent(var_core_value_sigE9A7),
          var_core_value_sig7F72 = this._activeTable ?? this._buildActiveTableAtPoint(var_core_value_sig1B22.x, var_core_value_sig1B22.y);
        !var_core_value_sig7F72 || !Z(W(var_core_value_sig7F72.input), var_core_value_sig1B22.x, var_core_value_sig1B22.y) || this._viewportService["applyWheel"](this._context["unitId"], var_core_value_sig7F72.sourceTableId, {
          ctrlKey: !!var_core_value_sigE9A7.ctrlKey,
          deltaX: var_core_value_sigE9A7.deltaX,
          deltaY: var_core_value_sigE9A7.deltaY,
          metaKey: !!var_core_value_sigE9A7.metaKey,
          shiftKey: !!var_core_value_sigE9A7.shiftKey,
          zoom: this._getCurrentZoom()
        }) && (this._activeTable = this._refreshActiveTableViewport(var_core_value_sig7F72), this._refreshNativeSelection(), var_core_value_sigBECE.stopPropagation(), var_core_value_sigBECE.skipNextObservers = true, var_core_value_sigE9A7.preventDefault(), this._makeDirty());
      },
      priority: mr
    })), this.disposeWithMe(var_core_value_sigB26B.onPointerLeave$["subscribeEvent"]({
      next: () => {
        this._dragState || this._moveDragState || this._rowColumnMoveState || this._headerSelectionDragState || (this._setHoveredTrigger(null), this._setTooltip(null), this._shouldKeepActiveTableOnPointerLeave() || (this._activeTable = null), this._resetTableCursor(), this._makeDirty());
      },
      priority: mr
    }));
  }
  _handleEmbedPassiveWheel(var_core_value_sig019B) {
    if (var_core_value_sig019B.source === "host-scroll-sync" || var_core_value_sig019B.childUnitId !== this._context["unitId"]) return false;
    let var_core_value_sigC6BC = this._getDocumentPointFromWindowEvent(var_core_value_sig019B.event);
    if (!var_core_value_sigC6BC) return false;
    let var_core_value_sig8EC2 = this._buildActiveTableAtPoint(var_core_value_sigC6BC.x, var_core_value_sigC6BC.y) ?? this._activeTable;
    if (!var_core_value_sig8EC2 || !Z(W(var_core_value_sig8EC2.input), var_core_value_sigC6BC.x, var_core_value_sigC6BC.y)) return false;
    let var_core_value_sigA8C3 = var_core_value_sig019B.event;
    return this._viewportService["applyWheel"](this._context["unitId"], var_core_value_sig8EC2.sourceTableId, {
      ctrlKey: !!var_core_value_sigA8C3.ctrlKey,
      deltaX: var_core_value_sigA8C3.deltaX,
      deltaY: var_core_value_sigA8C3.deltaY,
      metaKey: !!var_core_value_sigA8C3.metaKey,
      shiftKey: !!var_core_value_sigA8C3.shiftKey,
      zoom: this._getCurrentZoom()
    }) ? (this._activeTable = this._refreshActiveTableViewport(var_core_value_sig8EC2), this._refreshNativeSelection(), this._makeDirty(), true) : false;
  }
  _handleWindowPointerMove(var_core_value_sig5276) {
    if (!this._dragState && !this._moveDragState && !this._rowColumnMoveState && !this._pendingHandleSelection && !this._scrollbarDragState && !this._selectionDragState && !this._headerSelectionDragState) return;
    let var_core_value_sig031B = this._getDocumentPointFromWindowEvent(var_core_value_sig5276);
    if (var_core_value_sig031B && (this._lastPointerPoint = var_core_value_sig031B, !(this._selectionDragState && (kr(var_core_value_sig5276) ? this._updateSelectionDrag(var_core_value_sig031B) || this._updateSelectionDragAutoScroll(var_core_value_sig031B) : (this._selectionDragState = null, this._stopSelectionDragAutoScroll()), !this._dragState && !this._moveDragState && !this._rowColumnMoveState && !this._pendingHandleSelection && !this._scrollbarDragState)) && !(this._headerSelectionDragState && (kr(var_core_value_sig5276) ? this._updateHeaderSelectionDrag(var_core_value_sig031B) : (this._headerSelectionDragState = null, this._selectionService["setNativeSelectionSuppressed"](false)), !this._dragState && !this._moveDragState && !this._rowColumnMoveState && !this._pendingHandleSelection && !this._scrollbarDragState)))) {
      if (this._scrollbarDragState) {
        this._updateScrollbarDrag(var_core_value_sig031B.x), this._makeDirty();
        return;
      }
      if (this._pendingHandleSelection) {
        mn({
          x: this._pendingHandleSelection["startX"],
          y: this._pendingHandleSelection["startY"]
        }, var_core_value_sig031B, 4) || (this._rowColumnMoveState = this._createRowColumnMoveState(this._pendingHandleSelection), this._rowColumnMoveTarget = this._getRowColumnMoveTarget(var_core_value_sig031B), this._pendingHandleSelection = null, this._setTableCursor(u.CURSOR_TYPE["MOVE"]), this._makeDirty());
        return;
      }
      if (this._rowColumnMoveState) {
        kr(var_core_value_sig5276) ? (this._rowColumnMoveTarget = this._getRowColumnMoveTarget(var_core_value_sig031B), this._setTableCursor(u.CURSOR_TYPE["MOVE"])) : (this._rowColumnMoveState = null, this._rowColumnMoveTarget = null, this._restoreTableCursor()), this._makeDirty();
        return;
      }
      if (this._moveDragState) {
        let var_core_value_sigFBFA = Math.hypot(var_core_value_sig031B.x - this._moveDragState["startX"], var_core_value_sig031B.y - this._moveDragState["startY"]);
        this._moveDragPreview = var_core_value_sigFBFA >= 4 ? gn(this._moveDragState, var_core_value_sig031B.x, var_core_value_sig031B.y) : null, this._moveDropTarget = this._moveDragPreview ? this._getTableDropTargetAtPoint(var_core_value_sig031B.x, var_core_value_sig031B.y) : null, this._setTableCursor(u.CURSOR_TYPE["MOVE"]), this._makeDirty();
        return;
      }
      this._dragState && (this._dragPreview = Sn(this._dragState, var_core_value_sig031B.x, var_core_value_sig031B.y), this._setResizeCursor(this._dragState["trigger"]), this._makeDirty());
    }
  }
  _getDocumentPointFromWindowEvent(var_core_value_sig9DC0) {
    var var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigE718;
    if (!Pr(var_core_value_sig9DC0)) return null;
    let var_core_value_sigAEC8 = (var_core_value_sig95F0 = this._context["engine"]) == null || (var_core_value_sig9CCB = var_core_value_sig95F0.getCanvasElement) == null ? undefined : var_core_value_sig9CCB.call(var_core_value_sig95F0),
      var_core_value_sigB977 = var_core_value_sigAEC8 == null || (var_core_value_sigE718 = var_core_value_sigAEC8.getBoundingClientRect) == null ? undefined : var_core_value_sigE718.call(var_core_value_sigAEC8);
    return var_core_value_sigB977 ? Dr(var_core_value_sig9DC0.clientX - var_core_value_sigB977.left, var_core_value_sig9DC0.clientY - var_core_value_sigB977.top, this._context["scene"]) : null;
  }
  _getDocumentPointFromPointerEvent(var_core_value_sig2949) {
    return this._getDocumentPointFromWindowEvent(var_core_value_sig2949) ?? Dr(var_core_value_sig2949.offsetX, var_core_value_sig2949.offsetY, this._context["scene"]);
  }
  _releasePointerInteraction(var_core_value_sig308A, var_core_value_sig528D, var_core_value_sigA309) {
    var var_core_value_sig9E20;
    let var_core_value_sig26BB = !!((var_core_value_sig9E20 = this._selectionDragState) != null && var_core_value_sig9E20.structural);
    this._selectionDragState = null;
    let var_core_value_sig19B4 = !!this._headerSelectionDragState;
    return this._headerSelectionDragState = null, this._stopSelectionDragAutoScroll(), var_core_value_sig26BB ? (this._consumePointerEvent(var_core_value_sig528D), this._makeDirty(), true) : var_core_value_sig19B4 ? (this._consumePointerEvent(var_core_value_sig528D), this._selectionService["setNativeSelectionSuppressed"](false), this._makeDirty(), true) : this._scrollbarDragState ? (this._consumePointerEvent(var_core_value_sig528D), this._scrollbarDragState = null, this._selectionService["setNativeSelectionSuppressed"](false), this._restoreTableCursor(), this._makeDirty(), true) : this._rowColumnMoveState || this._rowColumnMoveTarget ? (this._consumePointerEvent(var_core_value_sig528D), this._releaseRowColumnMove(var_core_value_sig308A, var_core_value_sigA309.commit), true) : this._moveDragState || this._moveDragSourceTableId || this._moveDragPreview || this._moveDropTarget ? (this._consumePointerEvent(var_core_value_sig528D), this._releaseMoveDrag(var_core_value_sig308A, var_core_value_sigA309.commit), true) : this._pendingHandleSelection ? (this._consumePointerEvent(var_core_value_sig528D), this._releaseHandleSelection(var_core_value_sig308A, var_core_value_sigA309.commit), true) : this._dragState || this._dragSourceTableId || this._dragPreview ? (this._consumePointerEvent(var_core_value_sig528D), this._releaseResizeDrag(var_core_value_sig308A, var_core_value_sigA309.commit), true) : false;
  }
  _releaseMoveDrag(var_core_value_sig218A, var_core_value_sig14CB) {
    if (var_core_value_sig14CB && this._moveDragState && this._moveDragSourceTableId) {
      let var_core_value_sig7B2A = var_core_value_sig218A ? Math.hypot(var_core_value_sig218A.x - this._moveDragState["startX"], var_core_value_sig218A.y - this._moveDragState["startY"]) : 0,
        var_core_value_sig06CD = this._moveDragPreview ?? (var_core_value_sig218A && var_core_value_sig7B2A >= 4 ? gn(this._moveDragState, var_core_value_sig218A.x, var_core_value_sig218A.y) : null),
        var_core_value_sigA5F1 = this._moveDropTarget ?? (var_core_value_sig218A && var_core_value_sig06CD ? this._getTableDropTargetAtPoint(var_core_value_sig218A.x, var_core_value_sig218A.y) : null);
      var_core_value_sigA5F1 ? this._commandService["executeCommand"](e.DocsTableMoveTableCommand["id"], {
        tableId: this._moveDragSourceTableId,
        targetOffset: var_core_value_sigA5F1.targetOffset
      }) : !var_core_value_sig06CD && mn({
        x: this._moveDragState["startX"],
        y: this._moveDragState["startY"]
      }, var_core_value_sig218A ?? null, 4) && this._selectTable(this._moveDragSourceTableId);
    }
    this._moveDragState = null, this._moveDragSourceTableId = null, this._moveDragPreview = null, this._moveDropTarget = null, this._selectionService["setNativeSelectionSuppressed"](false), this._restoreTableCursor(), this._makeDirty();
  }
  _hideTransientTableControls() {
    var var_core_value_sigFDEE, var_core_value_sigA676;
    let var_core_value_sigC27E = !!(this._activeTable || this._hoveredTrigger || this._dragState || this._dragPreview || this._moveDragState || this._moveDragPreview || this._moveDropTarget || this._pendingHandleSelection || this._rowColumnMoveState || this._rowColumnMoveTarget || this._scrollbarDragState || this._selectionDragState || this._headerSelectionDragState || this._hoverCell || this._hoverColumn != null || this._hoverRow != null || this._borderPopover || this._sortPopover || this._tooltip || this._contextMenuService["visible"]);
    this._activeTable = null, this._hoveredTrigger = null, this._dragState = null, this._dragSourceTableId = null, this._dragPreview = null, this._moveDragState = null, this._moveDragSourceTableId = null, this._moveDragPreview = null, this._moveDropTarget = null, this._pendingHandleSelection = null, this._rowColumnMoveState = null, this._rowColumnMoveTarget = null, this._scrollbarDragState = null, this._selectionDragState = null, this._headerSelectionDragState = null, this._hoverCell = null, this._hoverColumn = null, this._hoverRow = null, this._sortPopover = null, this._tooltip = null, this._lastPointerPoint = null, this._stopSelectionDragAutoScroll(), (var_core_value_sigFDEE = this._borderPopoverDisposable) == null || var_core_value_sigFDEE.dispose(), this._borderPopoverDisposable = null, this._borderPopover = null, this._contextMenuService["hideContextMenu"](), this._floatingMenuService["hide"](), this._hideFloatingMenuPopup(), ((var_core_value_sigA676 = this._docParagraphMenuService["activeTarget"]) == null ? undefined : var_core_value_sigA676.kind) === r.DocumentBlockType["TABLE"] && this._docParagraphMenuService["hideParagraphMenu"](true), this._selectionService["setNativeSelectionSuppressed"](false), this._restoreTableCursor(), var_core_value_sigC27E && this._makeDirty();
  }
  _releaseHandleSelection(var_core_value_sigA70D, var_core_value_sigCE10) {
    let var_core_value_sigA3861 = this._pendingHandleSelection;
    var_core_value_sigCE10 && var_core_value_sigA3861 && mn({
      x: var_core_value_sigA3861.startX,
      y: var_core_value_sigA3861.startY
    }, var_core_value_sigA70D ?? null, 4) && (var_core_value_sigA3861.type === "row" && var_core_value_sigA3861.row != null ? this._selectRow(var_core_value_sigA3861.tableId, var_core_value_sigA3861.row) : var_core_value_sigA3861.type === "column" && var_core_value_sigA3861.column != null && this._selectColumn(var_core_value_sigA3861.tableId, var_core_value_sigA3861.column)), this._pendingHandleSelection = null, this._selectionService["setNativeSelectionSuppressed"](false), this._makeDirty();
  }
  _releaseRowColumnMove(var_core_value_sigCD82, var_core_value_sig44DD) {
    let var_core_value_sig96FA = this._rowColumnMoveState,
      var_core_value_sigAB68 = this._rowColumnMoveTarget ?? (var_core_value_sigCD82 ? this._getRowColumnMoveTarget(var_core_value_sigCD82) : null);
    var_core_value_sig44DD && var_core_value_sig96FA && var_core_value_sigAB68 && var_core_value_sigAB68.index !== var_core_value_sig96FA.sourceIndex && (var_core_value_sig96FA.type === "row" ? this._commandService["executeCommand"](e.DocsTableMoveRowsCommand["id"], {
      count: 1,
      fromRow: var_core_value_sig96FA.sourceIndex,
      position: var_core_value_sigAB68.position === "above" ? "above" : "below",
      tableId: var_core_value_sig96FA.tableId,
      toRow: var_core_value_sigAB68.index
    }).then(var_core_value_sig97A2 => {
      var_core_value_sig97A2 && this._scheduleActiveTableRefresh(var_core_value_sig96FA.tableId);
    }) : this._commandService["executeCommand"](e.DocsTableMoveColumnsCommand["id"], {
      count: 1,
      fromColumn: var_core_value_sig96FA.sourceIndex,
      position: var_core_value_sigAB68.position === "left" ? "left" : "right",
      tableId: var_core_value_sig96FA.tableId,
      toColumn: var_core_value_sigAB68.index
    }).then(var_core_value_sig07E9 => {
      var_core_value_sig07E9 && this._scheduleActiveTableRefresh(var_core_value_sig96FA.tableId);
    })), this._rowColumnMoveState = null, this._rowColumnMoveTarget = null, this._selectionService["setNativeSelectionSuppressed"](false), this._restoreTableCursor(), this._makeDirty();
  }
  _releaseResizeDrag(var_core_value_sig040A, var_core_value_sig2AE0) {
    let var_core_value_sigC349 = this._dragState ? Cn(this._dragState, this._dragPreview ?? null, var_core_value_sig040A ?? null) : this._dragPreview,
      var_core_value_sig9D96 = this._dragSourceTableId;
    var_core_value_sig2AE0 && var_core_value_sigC349 && var_core_value_sig9D96 && (var_core_value_sigC349.column != null && var_core_value_sigC349.width != null ? this._executeCommandAndRefreshActiveTable(e.DocsTableResizeColumnCommand["id"], {
      column: var_core_value_sigC349.column,
      tableId: var_core_value_sig9D96,
      width: var_core_value_sigC349.width
    }, var_core_value_sig9D96) : var_core_value_sigC349.row != null && var_core_value_sigC349.height != null && this._executeCommandAndRefreshActiveTable(e.DocsTableResizeRowCommand["id"], {
      height: var_core_value_sigC349.height,
      row: var_core_value_sigC349.row,
      tableId: var_core_value_sig9D96
    }, var_core_value_sig9D96)), this._dragState = null, this._dragSourceTableId = null, this._dragPreview = null, this._setHoveredTrigger(null), this._setTooltip(null), this._selectionService["setNativeSelectionSuppressed"](false), this._restoreTableCursor(), this._makeDirty();
  }
  _openBorderPopover(var_core_value_sig2776) {
    this._closeBorderPopover(), this._borderPopover = var_core_value_sig2776;
    let var_core_value_sig6FB2 = Wr().map(({
      preset: var_core_value_sig4F59
    }) => ({
      label: this._getBorderPresetLabel(var_core_value_sig4F59),
      preset: var_core_value_sig4F59
    }));
    this._borderPopoverDisposable = this._docCanvasPopManagerService["attachPopupToRect"]({
      bottom: var_core_value_sig2776.y,
      left: var_core_value_sig2776.x,
      right: var_core_value_sig2776.x,
      top: var_core_value_sig2776.y
    }, {
      componentKey: et,
      direction: "bottom-left",
      extraProps: {
        onSelect: var_core_value_sigF564 => this._applyBorderPreset(var_core_value_sigF564),
        presets: var_core_value_sig6FB2
      },
      onClickOutside: () => this._closeBorderPopover(),
      onContextMenu: () => this._closeBorderPopover()
    }, this._context["unitId"]), this._makeDirty();
  }
  _closeBorderPopover() {
    var var_core_value_sigEB43;
    (var_core_value_sigEB43 = this._borderPopoverDisposable) == null || var_core_value_sigEB43.dispose(), this._borderPopoverDisposable = null, this._borderPopover = null, this._setTooltip(null), this._makeDirty();
  }
  _ensureFloatingMenuPopup(var_core_value_sig4186) {
    let var_core_value_sigF963 = Br(var_core_value_sig4186 ?? this._floatingMenuService["getState"]().anchorRect ?? null);
    this._floatingMenuPopup && this._floatingMenuPopupAnchorKey === var_core_value_sigF963 || (this._floatingMenuPopup && this._hideFloatingMenuPopup(), this._floatingMenuPopup = this._docCanvasPopManagerService["attachPopupToRect"](() => this._floatingMenuService["getState"]().anchorRect ?? {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0
    }, {
      componentKey: Yt,
      direction: "top-center",
      offset: [0, 8],
      onClickOutside: () => {
        this._floatingMenuService["hide"](), this._hideFloatingMenuPopup();
      }
    }, this._context["unitId"]), this._floatingMenuPopupAnchorKey = var_core_value_sigF963);
  }
  _hideFloatingMenuPopup() {
    var var_core_value_sigB608;
    (var_core_value_sigB608 = this._floatingMenuPopup) == null || var_core_value_sigB608.dispose(), this._floatingMenuPopup = null, this._floatingMenuPopupAnchorKey = null;
  }
  _applyBorderPreset(var_core_value_sigF866) {
    let var_core_value_sig5EFB = this._borderPopover;
    var_core_value_sig5EFB && (this._selectionService["setStructuralSelection"]({
      kind: var_core_value_sig5EFB.startRow === var_core_value_sig5EFB.endRow && var_core_value_sig5EFB.startColumn === var_core_value_sig5EFB.endColumn ? e.DocsTableSelectionKind["Cell"] : e.DocsTableSelectionKind["Range"],
      segmentId: var_core_value_sig5EFB.segmentId,
      tableId: var_core_value_sig5EFB.tableId,
      startRow: var_core_value_sig5EFB.startRow,
      endRow: var_core_value_sig5EFB.endRow,
      startColumn: var_core_value_sig5EFB.startColumn,
      endColumn: var_core_value_sig5EFB.endColumn
    }), this._commandService["executeCommand"](e.DocsTableSetTableBorderCommand["id"], {
      endColumn: var_core_value_sig5EFB.endColumn,
      endRow: var_core_value_sig5EFB.endRow,
      preset: var_core_value_sigF866,
      startColumn: var_core_value_sig5EFB.startColumn,
      startRow: var_core_value_sig5EFB.startRow,
      tableId: var_core_value_sig5EFB.tableId
    }), this._closeBorderPopover());
  }
  _consumePointerEvent(var_core_value_sig3A85) {
    var_core_value_sig3A85 && (var_core_value_sig3A85.stopPropagation(), var_core_value_sig3A85.skipNextObservers = true);
  }
  _handleTableContextMenuPointerDown(var_core_value_sig2682, var_core_value_sig4BB5) {
    var var_core_value_sig6709;
    if (var_core_value_sig2682.button !== 2) return false;
    let var_core_value_sig52CA = this._getDocumentPointFromPointerEvent(var_core_value_sig2682);
    this._lastPointerPoint = var_core_value_sig52CA, this._activeTable = this._buildActiveTableAtPoint(var_core_value_sig52CA.x, var_core_value_sig52CA.y) ?? this._activeTable;
    let var_core_value_sigC030 = this._hitTest(var_core_value_sig52CA.x, var_core_value_sig52CA.y),
      var_core_value_sig88F6 = (var_core_value_sigC030 == null ? undefined : var_core_value_sigC030.tableId) ?? ((var_core_value_sig6709 = this._activeTable) == null ? undefined : var_core_value_sig6709.sourceTableId),
      var_core_value_sig37DB = this._selectionService["getCurrentSelection"](),
      var_core_value_sig5542 = Lr(var_core_value_sigC030);
    if (var_core_value_sig88F6 && var_core_value_sig5542) {
      if (!Rr(var_core_value_sig37DB, var_core_value_sig88F6, var_core_value_sig5542.axis, var_core_value_sig5542.index)) {
        var var_core_value_sigE0A9;
        this._selectionService["setStructuralHeaderSelection"](var_core_value_sig88F6, var_core_value_sig5542.axis, var_core_value_sig5542.index, var_core_value_sig5542.index, {
          clearNativeSelection: true,
          ...((var_core_value_sigE0A9 = this._activeTable) != null && var_core_value_sigE0A9.segmentId ? {
            segmentId: this._activeTable["segmentId"]
          } : {})
        });
      }
      return this._openTableContextMenu(var_core_value_sig2682, var_core_value_sig4BB5), true;
    }
    let var_core_value_sigA73E = this._getCellAtPoint(var_core_value_sig52CA.x, var_core_value_sig52CA.y);
    return !var_core_value_sigA73E || !Ir(var_core_value_sig37DB, var_core_value_sigA73E) ? false : (this._openTableContextMenu(var_core_value_sig2682, var_core_value_sig4BB5), true);
  }
  _openTableContextMenu(var_core_value_sig7620, var_core_value_sigB9FC) {
    this._consumePointerEvent(var_core_value_sigB9FC), var_core_value_sig7620.preventDefault(), this._contextMenuService["triggerContextMenu"](var_core_value_sig7620, n.ContextMenuPosition["MAIN_AREA"], {
      unitId: this._context["unitId"]
    });
  }
  _executeCommandAndRefreshActiveTable(var_core_value_sig5055, var_core_value_sig3801, var_core_value_sig45F0) {
    this._commandService["executeCommand"](var_core_value_sig5055, var_core_value_sig3801).then(var_core_value_sig8CFA => {
      var_core_value_sig8CFA && this._scheduleActiveTableRefresh(var_core_value_sig45F0);
    });
  }
  _handleStructuralTriggerPointerDown(var_core_value_sigBC91, var_core_value_sigCB88, var_core_value_sig8D65) {
    if (var_core_value_sigBC91.kind === "row-insert-dot" || var_core_value_sigBC91.kind === "column-insert-dot") return this._handleStructuralInsertTrigger(var_core_value_sigBC91, var_core_value_sig8D65), true;
    if ((var_core_value_sigBC91.kind !== "row-header" || var_core_value_sigBC91.row == null) && (var_core_value_sigBC91.kind !== "column-header" || var_core_value_sigBC91.column == null)) return false;
    if (this._selectionService["setNativeSelectionSuppressed"](true), var_core_value_sigBC91.kind === "row-header" && var_core_value_sigBC91.row != null) {
      var var_core_value_sig8122, var_core_value_sigEDC6;
      return this._isRowHeaderInsertSeamHit(var_core_value_sigBC91, var_core_value_sigCB88) ? (this._handleStructuralInsertTrigger({
        ...var_core_value_sigBC91,
        kind: "row-insert-dot"
      }, var_core_value_sig8D65), true) : this._canStartHeaderReorder(var_core_value_sigBC91) ? (this._pendingHandleSelection = {
        row: var_core_value_sigBC91.row,
        startX: var_core_value_sigCB88.x,
        startY: var_core_value_sigCB88.y,
        tableId: var_core_value_sig8D65,
        type: "row"
      }, true) : (this._headerSelectionDragState = {
        anchorIndex: var_core_value_sigBC91.row,
        currentIndex: var_core_value_sigBC91.row,
        ...((var_core_value_sig8122 = this._activeTable) != null && var_core_value_sig8122.segmentId ? {
          segmentId: this._activeTable["segmentId"]
        } : {}),
        tableId: var_core_value_sig8D65,
        type: "row"
      }, this._selectionService["setStructuralHeaderSelection"](var_core_value_sig8D65, "row", var_core_value_sigBC91.row, var_core_value_sigBC91.row, {
        clearNativeSelection: true,
        ...((var_core_value_sigEDC6 = this._activeTable) != null && var_core_value_sigEDC6.segmentId ? {
          segmentId: this._activeTable["segmentId"]
        } : {})
      }), true);
    }
    if (var_core_value_sigBC91.kind === "column-header" && var_core_value_sigBC91.column != null) {
      var var_core_value_sig611A, var_core_value_sig6BD9;
      return this._canStartHeaderReorder(var_core_value_sigBC91) ? (this._pendingHandleSelection = {
        column: var_core_value_sigBC91.column,
        startX: var_core_value_sigCB88.x,
        startY: var_core_value_sigCB88.y,
        tableId: var_core_value_sig8D65,
        type: "column"
      }, true) : (this._headerSelectionDragState = {
        anchorIndex: var_core_value_sigBC91.column,
        currentIndex: var_core_value_sigBC91.column,
        ...((var_core_value_sig611A = this._activeTable) != null && var_core_value_sig611A.segmentId ? {
          segmentId: this._activeTable["segmentId"]
        } : {}),
        tableId: var_core_value_sig8D65,
        type: "column"
      }, this._selectionService["setStructuralHeaderSelection"](var_core_value_sig8D65, "column", var_core_value_sigBC91.column, var_core_value_sigBC91.column, {
        clearNativeSelection: true,
        ...((var_core_value_sig6BD9 = this._activeTable) != null && var_core_value_sig6BD9.segmentId ? {
          segmentId: this._activeTable["segmentId"]
        } : {})
      }), true);
    }
    return false;
  }
  _updateHeaderSelectionDrag(var_core_value_sig7E56) {
    let var_core_value_sig4161 = this._headerSelectionDragState;
    if (!var_core_value_sig4161) return;
    let var_core_value_sig7580 = var_core_value_sig4161.type === "row" ? this._getRowAtY(var_core_value_sig7E56.y) : this._getColumnAtX(var_core_value_sig7E56.x);
    var_core_value_sig7580 != null && var_core_value_sig7580 !== var_core_value_sig4161.currentIndex && (var_core_value_sig4161.currentIndex = var_core_value_sig7580, this._selectionService["setStructuralHeaderSelection"](var_core_value_sig4161.tableId, var_core_value_sig4161.type, var_core_value_sig4161.anchorIndex, var_core_value_sig7580, {
      clearNativeSelection: true,
      ...(var_core_value_sig4161.segmentId ? {
        segmentId: var_core_value_sig4161.segmentId
      } : {})
    }), this._makeDirty());
  }
  _handleStructuralInsertTrigger(var_core_value_sig1F18, var_core_value_sigD5A0) {
    if (var_core_value_sig1F18.kind === "row-insert-dot" && var_core_value_sig1F18.row != null) {
      this._executeCommandAndRefreshActiveTable(e.DocsTableInsertRowsCommand["id"], {
        count: 1,
        position: var_core_value_sig1F18.position === "above" ? "above" : "below",
        row: var_core_value_sig1F18.row,
        tableId: var_core_value_sigD5A0
      }, var_core_value_sigD5A0);
      return;
    }
    var_core_value_sig1F18.kind === "column-insert-dot" && var_core_value_sig1F18.column != null && this._executeCommandAndRefreshActiveTable(e.DocsTableInsertColumnsCommand["id"], {
      column: var_core_value_sig1F18.column,
      count: 1,
      position: var_core_value_sig1F18.position === "left" ? "left" : "right",
      tableId: var_core_value_sigD5A0
    }, var_core_value_sigD5A0);
  }
  _isRowHeaderInsertSeamHit(var_core_value_sig81B2, var_core_value_sigA0A5) {
    if (var_core_value_sig81B2.kind !== "row-header") return false;
    let var_core_value_sig10AA = Math.min(var_core_value_sig81B2.rect["height"], Math.max(6 / this._getCurrentZoom(), 4 / this._getCurrentZoom()));
    return var_core_value_sigA0A5.y >= var_core_value_sig81B2.rect["y"] + var_core_value_sig81B2.rect["height"] - var_core_value_sig10AA && var_core_value_sigA0A5.y <= var_core_value_sig81B2.rect["y"] + var_core_value_sig81B2.rect["height"];
  }
  _canStartHeaderReorder(var_core_value_sigE6D0) {
    let var_core_value_sig8E91 = this._selection;
    return !var_core_value_sig8E91 || !var_core_value_sigE6D0.tableId || var_core_value_sig8E91.tableId !== var_core_value_sigE6D0.tableId ? false : var_core_value_sigE6D0.kind === "row-header" && var_core_value_sigE6D0.row != null ? var_core_value_sig8E91.kind === e.DocsTableSelectionKind["Row"] && var_core_value_sig8E91.startRow === var_core_value_sig8E91.endRow && var_core_value_sigE6D0.row === var_core_value_sig8E91.startRow : var_core_value_sigE6D0.kind === "column-header" && var_core_value_sigE6D0.column != null && var_core_value_sig8E91.kind === e.DocsTableSelectionKind["Column"] && var_core_value_sig8E91.startColumn === var_core_value_sig8E91.endColumn && var_core_value_sigE6D0.column === var_core_value_sig8E91.startColumn;
  }
  _initCanvasRender() {
    this.disposeWithMe(this._context["scene"].afterRender$["subscribe"](var_core_value_sig2E11 => {
      var var_core_value_sig5B69;
      if (!var_core_value_sig2E11 || (this._syncViewportStatesFromSkeleton() && this._makeDirty(), (var_core_value_sig5B69 = this._selection) != null && var_core_value_sig5B69.tableId && this._syncFloatingMenuFromSelection(), !this._activeTable)) return;
      let var_core_value_sigB098 = var_core_value_sig2E11.getContext();
      var_core_value_sigB098 && this._draw(var_core_value_sigB098);
    }));
  }
  _buildActiveTable(var_core_value_sig00BE) {
    let var_core_value_sig7BB5 = this._findSkeletonTable(var_core_value_sig00BE.pageIndex, var_core_value_sig00BE.tableId, var_core_value_sig00BE.segmentId);
    if (!var_core_value_sig7BB5) return null;
    let {
        page: var_core_value_sig6AAD,
        table: var_core_value_sig1157
      } = var_core_value_sig7BB5,
      var_core_value_sigA694 = (0, u.getTableIdAndSliceIndex)(var_core_value_sig00BE.tableId).tableId,
      var_core_value_sig18E01 = Sr(var_core_value_sig1157),
      var_core_value_sig0428 = var_core_value_sig1157.rows["map"](var_core_value_sigCE71 => var_core_value_sigCE71.height),
      var_core_value_sigBE07 = J(var_core_value_sig18E01),
      var_core_value_sig555F = this._syncViewportState(var_core_value_sig00BE, var_core_value_sigA694, var_core_value_sig6AAD, var_core_value_sig1157, var_core_value_sigBE07);
    return {
      pageIndex: var_core_value_sig00BE.pageIndex,
      segmentId: var_core_value_sig00BE.segmentId ?? var_core_value_sig7BB5.segmentId,
      sourceTableId: var_core_value_sigA694,
      tableSliceId: var_core_value_sig00BE.tableId,
      input: {
        columnIndices: var_core_value_sig18E01.map((var_core_value_sig21D8, var_core_value_sig2B65) => var_core_value_sig2B65),
        columnWidths: var_core_value_sig18E01,
        mergedCells: Cr(var_core_value_sig1157),
        rowHeights: var_core_value_sig0428,
        rowIndices: var_core_value_sig1157.rows["map"](var_core_value_sigD7EA => var_core_value_sigD7EA.index),
        tableId: var_core_value_sigA694,
        tableRect: {
          height: var_core_value_sig00BE.rect["bottom"] - var_core_value_sig00BE.rect["top"],
          width: var_core_value_sigBE07 || var_core_value_sig00BE.rect["right"] - var_core_value_sig00BE.rect["left"],
          x: var_core_value_sig00BE.rect["left"],
          y: var_core_value_sig00BE.rect["top"]
        },
        viewport: var_core_value_sig555F,
        zoom: this._getCurrentZoom()
      }
    };
  }
  _findSkeletonTable(var_core_value_sig3D6F, var_core_value_sig336C, var_core_value_sig6E68) {
    return this._collectSkeletonTables().find(var_core_value_sigB33B => var_core_value_sigB33B.pageIndex === var_core_value_sig3D6F && var_core_value_sigB33B.tableId === var_core_value_sig336C && (var_core_value_sig6E68 == null || var_core_value_sigB33B.segmentId === var_core_value_sig6E68)) ?? null;
  }
  _collectSkeletonTables() {
    let var_core_value_sig8DFE = this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      var_core_value_sig48EA = (var_core_value_sig8DFE == null ? undefined : var_core_value_sig8DFE.pages) ?? [],
      var_core_value_sig5E16 = wr(this._context["mainComponent"]);
    return (0, f.documentSkeletonTableIterator)(var_core_value_sig48EA, {
      docsLeft: var_core_value_sig5E16.docsLeft,
      docsTop: var_core_value_sig5E16.docsTop,
      pageMarginTop: var_core_value_sig5E16.pageMarginTop,
      resolveViewport: false,
      skeFooters: var_core_value_sig8DFE == null ? undefined : var_core_value_sig8DFE.skeFooters,
      skeHeaders: var_core_value_sig8DFE == null ? undefined : var_core_value_sig8DFE.skeHeaders,
      unitId: this._context["unitId"]
    }).map(var_core_value_sig24B9 => ({
      page: var_core_value_sig24B9.page,
      pageIndex: var_core_value_sig24B9.pageIndex,
      rect: var_core_value_sig24B9.tableRect,
      segmentId: var_core_value_sig24B9.page["segmentId"] ?? "",
      table: var_core_value_sig24B9.table,
      tableId: var_core_value_sig24B9.tableId
    }));
  }
  _refreshActiveTableViewport(var_core_value_sig09F3) {
    return {
      ...var_core_value_sig09F3,
      input: {
        ...var_core_value_sig09F3.input,
        viewport: this._getOrCreateViewportState(this._context["unitId"], var_core_value_sig09F3.sourceTableId),
        zoom: this._getCurrentZoom()
      }
    };
  }
  _getOrCreateViewportState(var_core_value_sig4592, var_core_value_sigC5C4) {
    let var_core_value_sig1617 = this._viewportService["getState"](var_core_value_sig4592, var_core_value_sigC5C4);
    return var_core_value_sig4592 !== this._context["unitId"] || var_core_value_sig1617 ? var_core_value_sig1617 : this._syncViewportStateForSourceTable(var_core_value_sigC5C4);
  }
  _syncViewportStatesFromSkeleton() {
    let var_core_value_sig4169 = false,
      var_core_value_sig6D19 = new Set();
    for (let var_core_value_sigE627 of this._collectSkeletonTables()) {
      let var_core_value_sigF602 = (0, u.getTableIdAndSliceIndex)(var_core_value_sigE627.tableId).tableId;
      var_core_value_sig6D19.add(var_core_value_sigF602);
      let var_core_value_sig1BBD = J(Sr(var_core_value_sigE627.table)),
        var_core_value_sigF704 = this._viewportService["getState"](this._context["unitId"], var_core_value_sigF602),
        var_core_value_sig2BCF = this._syncViewportState({
          pageIndex: var_core_value_sigE627.pageIndex,
          rect: var_core_value_sigE627.rect,
          tableId: var_core_value_sigE627.tableId
        }, var_core_value_sigF602, var_core_value_sigE627.page, var_core_value_sigE627.table, var_core_value_sig1BBD),
        var_core_value_sig0D69 = this._activeTable;
      var_core_value_sig0D69 && var_core_value_sig0D69.sourceTableId === var_core_value_sigF602 && var_core_value_sig0D69.tableSliceId === var_core_value_sigE627.tableId && var_core_value_sig0D69.segmentId === var_core_value_sigE627.segmentId && (this._activeTable = {
        ...var_core_value_sig0D69,
        input: {
          ...var_core_value_sig0D69.input,
          viewport: var_core_value_sig2BCF,
          zoom: this._getCurrentZoom()
        }
      }), var_core_value_sig4169 ||= Nr(var_core_value_sigF704, var_core_value_sig2BCF);
    }
    for (let var_core_value_sigEF3E of this._knownTableIds) var_core_value_sig6D19.has(var_core_value_sigEF3E) || (this._viewportService["clear"](this._context["unitId"], var_core_value_sigEF3E), var_core_value_sig4169 = true);
    return this._knownTableIds = var_core_value_sig6D19, var_core_value_sig4169;
  }
  _syncViewportStateForSourceTable(var_core_value_sig279C) {
    let var_core_value_sigAC51 = this._findTableSliceForSource(var_core_value_sig279C);
    if (!var_core_value_sigAC51) return;
    let var_core_value_sig8986 = this._findSkeletonTable(var_core_value_sigAC51.pageIndex, var_core_value_sigAC51.tableId, var_core_value_sigAC51.segmentId);
    if (var_core_value_sig8986) return this._syncViewportState(var_core_value_sigAC51, var_core_value_sig279C, var_core_value_sig8986.page, var_core_value_sig8986.table, J(Sr(var_core_value_sig8986.table)));
  }
  _syncViewportState(var_core_value_sigCAF7, var_core_value_sigED1C, var_core_value_sig726E, var_core_value_sig2CD3, var_core_value_sig038E) {
    return this._viewportService["setViewport"](this._context["unitId"], var_core_value_sigED1C, this._buildViewportState(var_core_value_sigCAF7, var_core_value_sig726E, var_core_value_sig2CD3, var_core_value_sig038E, this._getCurrentZoom()));
  }
  _scheduleActiveTableRefresh(var_core_value_sigAA1E) {
    this._activeTableRefreshTimer != null && clearTimeout(this._activeTableRefreshTimer), this._refreshActiveTableFromSkeleton(var_core_value_sigAA1E), this._activeTableRefreshTimer = setTimeout(() => {
      this._activeTableRefreshTimer = null, this._refreshActiveTableFromSkeleton(var_core_value_sigAA1E);
    }, 32);
  }
  _refreshActiveTableForLayoutChange() {
    let var_core_value_sigC9F5 = this._activeTable;
    if (var_core_value_sigC9F5) {
      if (this._lastPointerPoint) {
        let var_core_value_sig480E = this._buildActiveTableAtPoint(this._lastPointerPoint["x"], this._lastPointerPoint["y"]);
        if (var_core_value_sig480E) {
          this._activeTable = var_core_value_sig480E, this._makeDirty();
          return;
        }
      }
      this._refreshActiveTableFromSkeleton(var_core_value_sigC9F5.sourceTableId);
    }
  }
  _refreshActiveTableFromSkeleton(var_core_value_sig7EEA) {
    let var_core_value_sig59CE = this._findTableSliceForSource(var_core_value_sig7EEA);
    if (!var_core_value_sig59CE) {
      var var_core_value_sig33C8;
      ((var_core_value_sig33C8 = this._activeTable) == null ? undefined : var_core_value_sig33C8.sourceTableId) === var_core_value_sig7EEA && (this._activeTable = null, this._makeDirty());
      return;
    }
    this._activeTable = this._buildActiveTable(var_core_value_sig59CE), this._makeDirty();
  }
  _findTableSliceForSource(var_core_value_sig957F) {
    let var_core_value_sig803B = [];
    for (let var_core_value_sig273D of this._collectSkeletonTables()) (0, u.getTableIdAndSliceIndex)(var_core_value_sig273D.tableId).tableId === var_core_value_sig957F && var_core_value_sig803B.push({
      pageIndex: var_core_value_sig273D.pageIndex,
      rect: var_core_value_sig273D.rect,
      segmentId: var_core_value_sig273D.segmentId,
      tableId: var_core_value_sig273D.tableId
    });
    return var_core_value_sig803B.find(var_core_value_sig9A0D => {
      var var_core_value_sigA319;
      return var_core_value_sig9A0D.tableId === ((var_core_value_sigA319 = this._activeTable) == null ? undefined : var_core_value_sigA319.tableSliceId);
    }) ?? (this._lastPointerPoint ? var_core_value_sig803B.find(var_core_value_sig2D58 => this._isPointInTableControlRect(var_core_value_sig2D58, this._lastPointerPoint["x"], this._lastPointerPoint["y"])) : null) ?? var_core_value_sig803B[0] ?? null;
  }
  _isSourceTableSplitAcrossPages(var_core_value_sig5830) {
    let var_core_value_sig4A7C = 0;
    for (let var_core_value_sig223F of this._collectSkeletonTables()) if ((0, u.getTableIdAndSliceIndex)(var_core_value_sig223F.tableId).tableId === var_core_value_sig5830 && (var_core_value_sig4A7C++, var_core_value_sig4A7C > 1)) return true;
    return false;
  }
  _isPointInTableControlRect(var_core_value_sigF975, var_core_value_sigCDAF, var_core_value_sigA298) {
    let var_core_value_sig0B40 = this._findSkeletonTable(var_core_value_sigF975.pageIndex, var_core_value_sigF975.tableId, var_core_value_sigF975.segmentId);
    if (!var_core_value_sig0B40) return false;
    let var_core_value_sig330B = this._getCurrentZoom(),
      var_core_value_sig3625 = Sr(var_core_value_sig0B40.table).reduce((var_core_value_sigD749, var_core_value_sigCFFA) => var_core_value_sigD749 + var_core_value_sigCFFA, 0),
      var_core_value_sig0B4E = this._buildViewportState(var_core_value_sigF975, var_core_value_sig0B40.page, var_core_value_sig0B40.table, var_core_value_sig3625, var_core_value_sig330B),
      var_core_value_sig0E9F = {
        bottom: var_core_value_sigF975.rect["bottom"],
        left: var_core_value_sig0B4E.viewportLeft - 16 / var_core_value_sig330B,
        right: var_core_value_sig0B4E.viewportLeft + var_core_value_sig0B4E.viewportWidth,
        top: var_core_value_sigF975.rect["top"] - 22 / var_core_value_sig330B
      };
    if (var_core_value_sigCDAF >= var_core_value_sig0E9F.left && var_core_value_sigCDAF <= var_core_value_sig0E9F.right && var_core_value_sigA298 >= var_core_value_sig0E9F.top && var_core_value_sigA298 <= var_core_value_sig0E9F.bottom) return true;
    let var_core_value_sigE5BA = An({
      contentWidth: var_core_value_sig3625,
      leadingInsetLeft: var_core_value_sig0B4E.leadingInsetLeft,
      overflowWidthThreshold: var_core_value_sig0B4E.overflowWidthThreshold,
      scrollLeft: 0,
      tableRect: {
        height: var_core_value_sigF975.rect["bottom"] - var_core_value_sigF975.rect["top"],
        width: var_core_value_sigF975.rect["right"] - var_core_value_sigF975.rect["left"],
        x: var_core_value_sigF975.rect["left"],
        y: var_core_value_sigF975.rect["top"]
      },
      trailingInsetRight: var_core_value_sig0B4E.trailingInsetRight,
      viewportLeft: var_core_value_sig0B4E.viewportLeft,
      viewportWidth: var_core_value_sig0B4E.viewportWidth,
      zoom: var_core_value_sig330B
    });
    return !!var_core_value_sigE5BA && Mn(var_core_value_sigE5BA, var_core_value_sigF975.rect["bottom"], var_core_value_sigCDAF, var_core_value_sigA298);
  }
  _buildActiveTableAtPoint(var_core_value_sig4A83, var_core_value_sig58AA) {
    for (let var_core_value_sig58C1 of this._collectSkeletonTables()) if (this._isPointInTableControlRect({
      pageIndex: var_core_value_sig58C1.pageIndex,
      rect: var_core_value_sig58C1.rect,
      segmentId: var_core_value_sig58C1.segmentId,
      tableId: var_core_value_sig58C1.tableId
    }, var_core_value_sig4A83, var_core_value_sig58AA)) return this._buildActiveTable({
      pageIndex: var_core_value_sig58C1.pageIndex,
      rect: var_core_value_sig58C1.rect,
      segmentId: var_core_value_sig58C1.segmentId,
      tableId: var_core_value_sig58C1.tableId
    });
    return null;
  }
  _buildTableMoveHitAtPoint(var_core_value_sig84C4, var_core_value_sigB6F7) {
    return null;
  }
  _hitTest(var_core_value_sigB495, var_core_value_sig70D0) {
    if (!this._canEditDocument() || !this._activeTable) return null;
    let var_core_value_sig2A8A = z(this._getTriggerInput()),
      var_core_value_sig3782 = nr(var_core_value_sig2A8A, var_core_value_sigB495, var_core_value_sig70D0);
    return (var_core_value_sig3782 == null ? undefined : var_core_value_sig3782.kind) === "resize-column" || (var_core_value_sig3782 == null ? undefined : var_core_value_sig3782.kind) === "resize-row" ? var_core_value_sig3782 : ir(var_core_value_sig2A8A, var_core_value_sigB495, var_core_value_sig70D0) ?? var_core_value_sig3782;
  }
  _hitTestHoverTrigger(var_core_value_sigD22E, var_core_value_sig3455) {
    if (!this._canEditDocument() || !this._activeTable) return null;
    let var_core_value_sig5CEF = z(this._getTriggerInput()),
      var_core_value_sig43D5 = nr(var_core_value_sig5CEF, var_core_value_sigD22E, var_core_value_sig3455);
    return (var_core_value_sig43D5 == null ? undefined : var_core_value_sig43D5.kind) === "resize-column" || (var_core_value_sig43D5 == null ? undefined : var_core_value_sig43D5.kind) === "resize-row" ? var_core_value_sig43D5 : rr(var_core_value_sig5CEF, var_core_value_sigD22E, var_core_value_sig3455) ?? var_core_value_sig43D5;
  }
  _hitScrollbar(var_core_value_sig1395, var_core_value_sig9FA0) {
    let var_core_value_sig055E = this._getScrollbarGeometry();
    return var_core_value_sig055E ? jn(var_core_value_sig055E, var_core_value_sig1395, var_core_value_sig9FA0) : null;
  }
  _getScrollbarGeometry() {
    return this._buildScrollbarGeometry(this._getScrollbarAppearance());
  }
  _buildScrollbarGeometry(var_core_value_sig7C77) {
    if (!this._activeTable) return null;
    let var_core_value_sig9578 = this._viewportService["getState"](this._context["unitId"], this._activeTable["sourceTableId"]);
    return var_core_value_sig9578 ? An({
      appearance: var_core_value_sig7C77,
      contentWidth: var_core_value_sig9578.contentWidth,
      leadingInsetLeft: var_core_value_sig9578.leadingInsetLeft,
      overflowWidthThreshold: var_core_value_sig9578.overflowWidthThreshold,
      scrollLeft: var_core_value_sig9578.scrollLeft,
      tableRect: W(this._activeTable["input"]),
      trailingInsetRight: var_core_value_sig9578.trailingInsetRight,
      viewportLeft: var_core_value_sig9578.viewportLeft,
      viewportWidth: var_core_value_sig9578.viewportWidth,
      zoom: this._getCurrentZoom()
    }) : null;
  }
  _getScrollbarAppearance() {
    if (this._scrollbarDragState) return "active";
    if (!this._lastPointerPoint) return "idle";
    let var_core_value_sigA2D31 = this._buildScrollbarGeometry("idle");
    return var_core_value_sigA2D31 && jn(var_core_value_sigA2D31, this._lastPointerPoint["x"], this._lastPointerPoint["y"]) ? "hover" : "idle";
  }
  _startOrJumpScrollbar(var_core_value_sigC218, var_core_value_sigADEC) {
    if (!this._activeTable) return;
    let var_core_value_sig3D8E = this._getScrollbarGeometry();
    if (!var_core_value_sig3D8E) return;
    let var_core_value_sig37E5 = this._activeTable["sourceTableId"],
      var_core_value_sigF079 = this._viewportService["getState"](this._context["unitId"], var_core_value_sig37E5);
    if (!var_core_value_sigF079) return;
    if (var_core_value_sigC218 === "thumb") {
      this._scrollbarDragState = {
        startScrollLeft: var_core_value_sigF079.scrollLeft,
        startX: var_core_value_sigADEC,
        tableId: var_core_value_sig37E5,
        thumbTravel: Math.max(0, var_core_value_sig3D8E.track["width"] - var_core_value_sig3D8E.thumb["width"])
      }, this._setTableCursor(u.CURSOR_TYPE["POINTER"]), this._makeDirty();
      return;
    }
    let var_core_value_sigFCA0 = var_core_value_sigADEC < var_core_value_sig3D8E.thumb["x"] ? -1 : 1,
      var_core_value_sigC84D = var_core_value_sigF079.scrollLeft,
      var_core_value_sigF2BC = this._viewportService["setScrollLeft"](this._context["unitId"], var_core_value_sig37E5, var_core_value_sigF079.scrollLeft + var_core_value_sigFCA0 * var_core_value_sigF079.viewportWidth);
    this._activeTable = this._refreshActiveTableViewport(this._activeTable), var_core_value_sigF2BC !== var_core_value_sigC84D && (this._refreshNativeSelection(), this._makeDirty());
  }
  _updateScrollbarDrag(var_core_value_sigD37B) {
    var var_core_value_sigFA28, var_core_value_sig93BE, var_core_value_sigABEC;
    let var_core_value_sig2712 = this._scrollbarDragState;
    if (!var_core_value_sig2712) return;
    let var_core_value_sig0B9E = ((var_core_value_sigFA28 = this._viewportService["getState"](this._context["unitId"], var_core_value_sig2712.tableId)) == null ? undefined : var_core_value_sigFA28.scrollLeft) ?? 0;
    this._viewportService["setScrollLeft"](this._context["unitId"], var_core_value_sig2712.tableId, var_core_value_sig2712.startScrollLeft), this._viewportService["scrollByScrollbarTravel"](this._context["unitId"], var_core_value_sig2712.tableId, var_core_value_sigD37B - var_core_value_sig2712.startX, var_core_value_sig2712.thumbTravel), ((var_core_value_sig93BE = this._activeTable) == null ? undefined : var_core_value_sig93BE.sourceTableId) === var_core_value_sig2712.tableId && (this._activeTable = this._refreshActiveTableViewport(this._activeTable)), (((var_core_value_sigABEC = this._viewportService["getState"](this._context["unitId"], var_core_value_sig2712.tableId)) == null ? undefined : var_core_value_sigABEC.scrollLeft) ?? 0) !== var_core_value_sig0B9E && this._refreshNativeSelection();
  }
  _updateSelectionDrag(var_core_value_sigC545) {
    let var_core_value_sig12A7 = this._selectionDragState;
    if (!var_core_value_sig12A7 || !var_core_value_sig12A7.structural && Math.hypot(var_core_value_sigC545.x - var_core_value_sig12A7.startX, var_core_value_sigC545.y - var_core_value_sig12A7.startY) < 4) return false;
    let var_core_value_sig6F4E = this._getCellAtPoint(var_core_value_sigC545.x, var_core_value_sigC545.y);
    if (!var_core_value_sig6F4E || var_core_value_sig6F4E.tableId !== var_core_value_sig12A7.tableId || !var_core_value_sig12A7.structural && var_core_value_sig6F4E.row === var_core_value_sig12A7.anchorRow && var_core_value_sig6F4E.column === var_core_value_sig12A7.anchorColumn) return false;
    let var_core_value_sigA021 = Math.min(var_core_value_sig12A7.anchorRow, var_core_value_sig6F4E.row),
      var_core_value_sig49D9 = Math.max(var_core_value_sig12A7.anchorRow, var_core_value_sig6F4E.row),
      var_core_value_sig320C = Math.min(var_core_value_sig12A7.anchorColumn, var_core_value_sig6F4E.column),
      var_core_value_sigE7F0 = Math.max(var_core_value_sig12A7.anchorColumn, var_core_value_sig6F4E.column),
      var_core_value_sigE837 = !var_core_value_sig12A7.structural;
    return var_core_value_sig12A7.structural = true, var_core_value_sigE837 && this._docSelectionRenderService["cancelPointerSelection"](), this._selectionService["setNativeSelectionSuppressed"](true), this._selectionService["setStructuralSelection"]({
      kind: var_core_value_sigA021 === var_core_value_sig49D9 && var_core_value_sig320C === var_core_value_sigE7F0 ? e.DocsTableSelectionKind["Cell"] : e.DocsTableSelectionKind["Range"],
      segmentId: var_core_value_sig12A7.segmentId,
      tableId: var_core_value_sig12A7.tableId,
      startRow: var_core_value_sigA021,
      endRow: var_core_value_sig49D9,
      startColumn: var_core_value_sig320C,
      endColumn: var_core_value_sigE7F0
    }, {
      clearNativeSelection: true,
      preserveOnTextSelection: true
    }), this._makeDirty(), true;
  }
  _updateSelectionDragAutoScroll(var_core_value_sig34F4) {
    let var_core_value_sigA45D = this._selectionDragState;
    if (!var_core_value_sigA45D || ((!this._activeTable || this._activeTable["sourceTableId"] !== var_core_value_sigA45D.tableId) && (this._activeTable = this._buildActiveTableAtPoint(var_core_value_sig34F4.x, var_core_value_sig34F4.y) ?? this._activeTable), !this._activeTable || this._activeTable["sourceTableId"] !== var_core_value_sigA45D.tableId)) return false;
    let var_core_value_sig1BC7 = W(this._activeTable["input"]);
    return var_core_value_sig34F4.y < var_core_value_sig1BC7.y || var_core_value_sig34F4.y > var_core_value_sig1BC7.y + var_core_value_sig1BC7.height || !this._viewportService["scrollByDragEdge"](this._context["unitId"], var_core_value_sigA45D.tableId, var_core_value_sig34F4.x - var_core_value_sig1BC7.x, 32 / this._getCurrentZoom(), 24 / this._getCurrentZoom()) ? false : (this._activeTable = this._refreshActiveTableViewport(this._activeTable), this._refreshNativeSelection(), this._makeDirty(), this._scheduleSelectionDragAutoScroll(), true);
  }
  _scheduleSelectionDragAutoScroll() {
    this._selectionAutoScrollTimer ??= setTimeout(() => {
      this._selectionAutoScrollTimer = null, !(!this._selectionDragState || !this._lastPointerPoint) && this._updateSelectionDragAutoScroll(this._lastPointerPoint);
    }, 16);
  }
  _stopSelectionDragAutoScroll() {
    this._selectionAutoScrollTimer != null && (clearTimeout(this._selectionAutoScrollTimer), this._selectionAutoScrollTimer = null);
  }
  _refreshNativeSelection() {
    this._docSelectionManagerService["refreshSelection"]();
  }
  _syncFloatingMenuFromSelection() {
    let var_core_value_sig4956 = this._selection;
    if (!(var_core_value_sig4956 != null && var_core_value_sig4956.tableId) || !this._canEditDocument(var_core_value_sig4956.tableId) || !Fr(var_core_value_sig4956)) {
      this._floatingMenuService["hide"](), this._hideFloatingMenuPopup();
      return;
    }
    let var_core_value_sigCC9E = zr(var_core_value_sig4956) ? this._getStructuralFloatingMenuAnchorRect(var_core_value_sig4956) : this._getFloatingMenuAnchorRect(var_core_value_sig4956),
      var_core_value_sig444C = this._getFloatingMenuAnchorRect(var_core_value_sig4956);
    if (!var_core_value_sigCC9E || !var_core_value_sig444C) {
      this._floatingMenuService["hide"](), this._hideFloatingMenuPopup();
      return;
    }
    let var_core_value_sigE42E = var_core_value_sig4956.kind === e.DocsTableSelectionKind["Row"] ? "row" : var_core_value_sig4956.kind === e.DocsTableSelectionKind["Column"] ? "column" : null,
      var_core_value_sigF039 = this._resolveFloatingMenuTextStyle(var_core_value_sig4956),
      var_core_value_sigA321 = this._resolveFloatingMenuVerticalAlign(var_core_value_sig4956);
    this._floatingMenuService["setState"]({
      anchorRect: var_core_value_sigCC9E,
      selection: {
        endColumn: var_core_value_sig4956.endColumn,
        endRow: var_core_value_sig4956.endRow,
        startColumn: var_core_value_sig4956.startColumn,
        startRow: var_core_value_sig4956.startRow,
        tableId: var_core_value_sig4956.tableId
      },
      mergeAction: this._resolveFloatingMenuMergeAction(var_core_value_sig4956),
      selectionKind: var_core_value_sig4956.kind,
      selectionRect: var_core_value_sig444C,
      showDeleteAction: var_core_value_sigE42E != null,
      tableId: var_core_value_sig4956.tableId,
      topLeftCell: {
        column: Math.min(var_core_value_sig4956.startColumn, var_core_value_sig4956.endColumn),
        row: Math.min(var_core_value_sig4956.startRow, var_core_value_sig4956.endRow)
      },
      verticalAlign: var_core_value_sigA321,
      typeIcon: var_core_value_sigF039.icon,
      typeValue: var_core_value_sigF039.value,
      unitId: this._context["unitId"],
      visible: true,
      deleteTarget: var_core_value_sigE42E
    }), this._ensureFloatingMenuPopup(var_core_value_sigCC9E);
  }
  _canEditDocument(var_core_value_sigBF4C = (() => {
    var var_core_value_sig26DB;
    return (var_core_value_sig26DB = this._activeTable) == null ? undefined : var_core_value_sig26DB.sourceTableId;
  })()) {
    return (0, l.canEditDocumentTargets)(this._permissionService, this._context["unitId"], var_core_value_sigBF4C ? [...(0, l.getDocumentEntityParentPermissionObjectIds)(this._context["unit"], "", "table", var_core_value_sigBF4C), (0, l.getDocumentEntityPermissionObjectId)("", "table", var_core_value_sigBF4C)] : []);
  }
  _syncParagraphTableMenuFromActiveTable() {
    let var_core_value_sig3457 = this._activeTable;
    if (!var_core_value_sig3457) return;
    let var_core_value_sig4A08 = W(var_core_value_sig3457.input);
    this._docParagraphMenuService["showTableMenu"]({
      pageIndex: var_core_value_sig3457.pageIndex,
      rect: {
        bottom: var_core_value_sig4A08.y + var_core_value_sig4A08.height,
        left: var_core_value_sig4A08.x,
        right: var_core_value_sig4A08.x + var_core_value_sig4A08.width,
        top: var_core_value_sig4A08.y
      },
      tableId: var_core_value_sig3457.sourceTableId
    });
  }
  _setHoveredTrigger(var_core_value_sig1BC4) {
    this._isSameTrigger(this._hoveredTrigger, var_core_value_sig1BC4) || (this._hoveredTrigger = var_core_value_sig1BC4, this._makeDirty());
  }
  _setTooltip(var_core_value_sig9EAB) {
    var var_core_value_sigA5C3, var_core_value_sig3A1E, var_core_value_sigDC92;
    (((var_core_value_sigA5C3 = this._tooltip) == null ? undefined : var_core_value_sigA5C3.label) !== (var_core_value_sig9EAB == null ? undefined : var_core_value_sig9EAB.label) || ((var_core_value_sig3A1E = this._tooltip) == null ? undefined : var_core_value_sig3A1E.x) !== (var_core_value_sig9EAB == null ? undefined : var_core_value_sig9EAB.x) || ((var_core_value_sigDC92 = this._tooltip) == null ? undefined : var_core_value_sigDC92.y) !== (var_core_value_sig9EAB == null ? undefined : var_core_value_sig9EAB.y)) && (this._tooltip = var_core_value_sig9EAB, this._makeDirty());
  }
  _shouldKeepActiveTableForControls() {
    return this._shouldKeepActiveTableForFloatingMenu() ? true : !this._activeTable || !this._lastPointerPoint ? false : this._isPointWithinStructuralControlZone(this._lastPointerPoint["x"], this._lastPointerPoint["y"]);
  }
  _isPointInActiveControlZone(var_core_value_sig3515, var_core_value_sigC2A0) {
    return this._isPointWithinStructuralControlZone(var_core_value_sig3515, var_core_value_sigC2A0);
  }
  _isPointWithinStructuralControlZone(var_core_value_sig7C65, var_core_value_sig7F05) {
    var var_core_value_sig41F3, var_core_value_sigF455;
    if (!this._activeTable) return false;
    let var_core_value_sig6E78 = this._activeTable["input"],
      var_core_value_sigB3EE = ((var_core_value_sig41F3 = this._context) == null || (var_core_value_sig41F3 = var_core_value_sig41F3.scene) == null || (var_core_value_sigF455 = var_core_value_sig41F3.getAncestorScale) == null ? undefined : var_core_value_sigF455.call(var_core_value_sig41F3).scaleX) || var_core_value_sig6E78.zoom || 1,
      var_core_value_sigC50A = W(var_core_value_sig6E78),
      var_core_value_sig11D0 = jr(var_core_value_sig6E78),
      var_core_value_sigB8ED = G(var_core_value_sig6E78);
    if (Z({
      x: var_core_value_sig11D0 - 16 / var_core_value_sigB3EE,
      y: var_core_value_sigC50A.y - 16 / var_core_value_sigB3EE,
      width: Math.max(0, var_core_value_sigB8ED - var_core_value_sig11D0) + 16 / var_core_value_sigB3EE,
      height: var_core_value_sigC50A.height + 16 / var_core_value_sigB3EE
    }, var_core_value_sig7C65, var_core_value_sig7F05)) return true;
    let var_core_value_sig8EAE = this._getScrollbarGeometry();
    return !!var_core_value_sig8EAE && Mn(var_core_value_sig8EAE, var_core_value_sigC50A.y + var_core_value_sigC50A.height, var_core_value_sig7C65, var_core_value_sig7F05);
  }
  _shouldKeepActiveTableForSelection() {
    let var_core_value_sig1CDD = this._selection;
    return !!this._activeTable && !!(var_core_value_sig1CDD != null && var_core_value_sig1CDD.tableId) && var_core_value_sig1CDD.tableId === this._activeTable["sourceTableId"] && (var_core_value_sig1CDD.kind === e.DocsTableSelectionKind["Row"] || var_core_value_sig1CDD.kind === e.DocsTableSelectionKind["Column"] || var_core_value_sig1CDD.kind === e.DocsTableSelectionKind["Table"] || Fr(var_core_value_sig1CDD));
  }
  _shouldKeepActiveTableForFloatingMenu() {
    if (!this._activeTable) return false;
    let var_core_value_sig0DB1 = this._floatingMenuService["getState"]();
    return (!!(var_core_value_sig0DB1 != null && var_core_value_sig0DB1.visible) || !!(var_core_value_sig0DB1 != null && var_core_value_sig0DB1.hoverActive)) && !!var_core_value_sig0DB1.tableId && var_core_value_sig0DB1.tableId === this._activeTable["sourceTableId"];
  }
  _shouldKeepActiveTableOnPointerLeave() {
    return this._shouldKeepActiveTableForSelection() || this._shouldKeepActiveTableForControls();
  }
  _isSameTrigger(var_core_value_sig68A2, var_core_value_sigCC17) {
    return (var_core_value_sig68A2 == null ? undefined : var_core_value_sig68A2.kind) === (var_core_value_sigCC17 == null ? undefined : var_core_value_sigCC17.kind) && (var_core_value_sig68A2 == null ? undefined : var_core_value_sig68A2.tableId) === (var_core_value_sigCC17 == null ? undefined : var_core_value_sigCC17.tableId) && (var_core_value_sig68A2 == null ? undefined : var_core_value_sig68A2.row) === (var_core_value_sigCC17 == null ? undefined : var_core_value_sigCC17.row) && (var_core_value_sig68A2 == null ? undefined : var_core_value_sig68A2.column) === (var_core_value_sigCC17 == null ? undefined : var_core_value_sigCC17.column) && (var_core_value_sig68A2 == null ? undefined : var_core_value_sig68A2.position) === (var_core_value_sigCC17 == null ? undefined : var_core_value_sigCC17.position);
  }
  _getTriggerInitialSize(var_core_value_sig32AE) {
    var var_core_value_sigC753;
    if (!this._activeTable) return null;
    let {
      input: var_core_value_sigFFD1
    } = this._activeTable;
    if (var_core_value_sig32AE.kind === "resize-column") {
      var var_core_value_sig81AE;
      let var_core_value_sig5090 = ((var_core_value_sig81AE = var_core_value_sigFFD1.columnIndices) == null ? undefined : var_core_value_sig81AE.findIndex(var_core_value_sigF0F9 => var_core_value_sigF0F9 === var_core_value_sig32AE.column)) ?? var_core_value_sig32AE.column;
      return var_core_value_sig5090 == null ? null : var_core_value_sigFFD1.columnWidths[var_core_value_sig5090];
    }
    let var_core_value_sigF79F = ((var_core_value_sigC753 = var_core_value_sigFFD1.rowIndices) == null ? undefined : var_core_value_sigC753.findIndex(var_core_value_sigC368 => var_core_value_sigC368 === var_core_value_sig32AE.row)) ?? var_core_value_sig32AE.row;
    return var_core_value_sigF79F == null ? null : var_core_value_sigFFD1.rowHeights[var_core_value_sigF79F];
  }
  _selectTable(var_core_value_sig0E54) {
    var var_core_value_sig3B17, var_core_value_sig6C4A, var_core_value_sig73D9, var_core_value_sigEAF8;
    if (!this._activeTable) return;
    let {
      input: var_core_value_sig0455
    } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: e.DocsTableSelectionKind["Table"],
      segmentId: this._activeTable["segmentId"],
      tableId: var_core_value_sig0E54,
      startRow: ((var_core_value_sig3B17 = var_core_value_sig0455.rowIndices) == null ? undefined : var_core_value_sig3B17[0]) ?? 0,
      endRow: ((var_core_value_sig6C4A = var_core_value_sig0455.rowIndices) == null ? undefined : var_core_value_sig6C4A[var_core_value_sig0455.rowIndices["length"] - 1]) ?? var_core_value_sig0455.rowHeights["length"] - 1,
      startColumn: ((var_core_value_sig73D9 = var_core_value_sig0455.columnIndices) == null ? undefined : var_core_value_sig73D9[0]) ?? 0,
      endColumn: ((var_core_value_sigEAF8 = var_core_value_sig0455.columnIndices) == null ? undefined : var_core_value_sigEAF8[var_core_value_sig0455.columnIndices["length"] - 1]) ?? var_core_value_sig0455.columnWidths["length"] - 1
    });
  }
  _selectRow(var_core_value_sig737C, var_core_value_sig5AF5) {
    var var_core_value_sig9DE4, var_core_value_sig77FA;
    if (!this._activeTable) return;
    let {
      input: var_core_value_sigA4A7
    } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: e.DocsTableSelectionKind["Row"],
      segmentId: this._activeTable["segmentId"],
      tableId: var_core_value_sig737C,
      startRow: var_core_value_sig5AF5,
      endRow: var_core_value_sig5AF5,
      startColumn: ((var_core_value_sig9DE4 = var_core_value_sigA4A7.columnIndices) == null ? undefined : var_core_value_sig9DE4[0]) ?? 0,
      endColumn: ((var_core_value_sig77FA = var_core_value_sigA4A7.columnIndices) == null ? undefined : var_core_value_sig77FA[var_core_value_sigA4A7.columnIndices["length"] - 1]) ?? var_core_value_sigA4A7.columnWidths["length"] - 1
    });
  }
  _selectColumn(var_core_value_sigA4DF, var_core_value_sigCC9D) {
    var var_core_value_sig90F5, var_core_value_sigD2BA;
    if (!this._activeTable) return;
    let {
      input: var_core_value_sigCD3A
    } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: e.DocsTableSelectionKind["Column"],
      segmentId: this._activeTable["segmentId"],
      tableId: var_core_value_sigA4DF,
      startRow: ((var_core_value_sig90F5 = var_core_value_sigCD3A.rowIndices) == null ? undefined : var_core_value_sig90F5[0]) ?? 0,
      endRow: ((var_core_value_sigD2BA = var_core_value_sigCD3A.rowIndices) == null ? undefined : var_core_value_sigD2BA[var_core_value_sigCD3A.rowIndices["length"] - 1]) ?? var_core_value_sigCD3A.rowHeights["length"] - 1,
      startColumn: var_core_value_sigCC9D,
      endColumn: var_core_value_sigCC9D
    });
  }
  _setResizeCursor(var_core_value_sig519D) {
    this._setTableCursor(var_core_value_sig519D.kind === "resize-column" ? "ew-resize" : "ns-resize");
  }
  _getTriggerInput() {
    return {
      ...this._getActiveInputWithCurrentZoom(),
      hoverCell: this._hoverCell ?? null,
      hoverColumn: this._hoverColumn ?? null,
      hoverRow: this._hoverRow ?? null,
      zoom: this._getCurrentZoom()
    };
  }
  _getActiveInputWithCurrentZoom() {
    return {
      ...this._activeTable["input"],
      zoom: this._getCurrentZoom()
    };
  }
  _getCurrentZoom() {
    return this._context["scene"].getAncestorScale().scaleX || 1;
  }
  _setTableCursor(var_core_value_sigC7E7) {
    this._cursorBeforeTableInteraction ??= this._context["scene"].getCursor(), this._context["scene"].setCursor(var_core_value_sigC7E7);
  }
  _restoreTableCursor() {
    this._cursorBeforeTableInteraction != null && (this._context["scene"].setCursor(this._cursorBeforeTableInteraction), this._cursorBeforeTableInteraction = null);
  }
  _resetTableCursor() {
    this._cursorBeforeTableInteraction = null, this._context["scene"].resetCursor();
  }
  _shouldPreserveFloatingHover(var_core_value_sig6E1C, var_core_value_sigFABC) {
    return this._activeTable ? sr(z(this._getTriggerInput()), var_core_value_sig6E1C, var_core_value_sigFABC) || this._isPointWithinFloatingMenuHoverBridge(var_core_value_sig6E1C, var_core_value_sigFABC) || this._borderPopover && Z(Vr(this._borderPopover), var_core_value_sig6E1C, var_core_value_sigFABC) ? true : this._sortPopover != null && Z(Hr(this._sortPopover), var_core_value_sig6E1C, var_core_value_sigFABC) : false;
  }
  _isPointWithinFloatingMenuHoverBridge(var_core_value_sig413D, var_core_value_sig5BCE) {
    if (!this._activeTable) return false;
    let var_core_value_sig8EF01 = this._floatingMenuService["getState"]();
    if (!(var_core_value_sig8EF01 != null && var_core_value_sig8EF01.visible) || !var_core_value_sig8EF01.anchorRect || var_core_value_sig8EF01.tableId !== this._activeTable["sourceTableId"]) return false;
    let var_core_value_sig78AC = this._getCurrentZoom(),
      var_core_value_sig4CEF = 16 / var_core_value_sig78AC,
      var_core_value_sigD57D = W(this._activeTable["input"]),
      var_core_value_sig2CC7 = jr(this._activeTable["input"]),
      var_core_value_sig4784 = G(this._activeTable["input"]),
      var_core_value_sigC39E = Math.min(var_core_value_sig8EF01.anchorRect["left"], var_core_value_sig2CC7) - var_core_value_sig4CEF,
      var_core_value_sig16C7 = Math.max(var_core_value_sig8EF01.anchorRect["right"], var_core_value_sig4784) + var_core_value_sig4CEF,
      var_core_value_sig7481 = Math.min(var_core_value_sig8EF01.anchorRect["top"], var_core_value_sigD57D.y - 16 / var_core_value_sig78AC) - var_core_value_sig4CEF,
      var_core_value_sig08A3 = var_core_value_sigD57D.y;
    return var_core_value_sig413D >= var_core_value_sigC39E && var_core_value_sig413D <= var_core_value_sig16C7 && var_core_value_sig5BCE >= var_core_value_sig7481 && var_core_value_sig5BCE <= var_core_value_sig08A3;
  }
  _getTableDropTargetAtPoint(var_core_value_sig77D8, var_core_value_sig78A3) {
    return pn(Array.from(this._docEventManagerService["paragraphBounds"].values()).flatMap(var_core_value_sigAD561 => {
      var var_core_value_sigDB4A;
      return ((var_core_value_sigDB4A = var_core_value_sigAD561.rects) != null && var_core_value_sigDB4A.length ? var_core_value_sigAD561.rects : [var_core_value_sigAD561.rect]).map(var_core_value_sig1A0F => ({
        paragraphEnd: var_core_value_sigAD561.paragraphEnd,
        paragraphStart: var_core_value_sigAD561.paragraphStart,
        rect: var_core_value_sig1A0F
      }));
    }), {
      x: var_core_value_sig77D8,
      y: var_core_value_sig78A3
    });
  }
  _draw(var_core_value_sig649B) {
    var var_core_value_sig6256;
    if (!this._activeTable) return;
    if (!this._canEditDocument()) {
      var_core_value_sig649B.save(), this._drawSelection(var_core_value_sig649B), this._drawScrollbar(var_core_value_sig649B), var_core_value_sig649B.restore();
      return;
    }
    let var_core_value_sigE7A6 = z(this._getTriggerInput());
    var_core_value_sig649B.save(), this._drawStructuralHeaderBands(var_core_value_sig649B);
    for (let var_core_value_sig6418 of var_core_value_sigE7A6) Xn(var_core_value_sig6418.kind) ? this._drawInsertTrigger(var_core_value_sig649B, var_core_value_sig6418) : var_core_value_sig6418.kind === "row-header" || var_core_value_sig6418.kind === "column-header" ? this._drawStructuralHeaderTrigger(var_core_value_sig649B, var_core_value_sig6418) : var_core_value_sig6418.kind === "table-select" && this._drawTableSelectTrigger(var_core_value_sig649B, var_core_value_sig6418);
    this._drawSelection(var_core_value_sig649B), this._drawMovePreview(var_core_value_sig649B), this._drawSortPopover(var_core_value_sig649B), this._drawTooltip(var_core_value_sig649B);
    let var_core_value_sigB505 = ((var_core_value_sig6256 = this._dragState) == null ? undefined : var_core_value_sig6256.trigger) ?? this._hoveredTrigger;
    ((var_core_value_sigB505 == null ? undefined : var_core_value_sigB505.kind) === "resize-column" || (var_core_value_sigB505 == null ? undefined : var_core_value_sigB505.kind) === "resize-row") && this._drawResizeGuide(var_core_value_sig649B, var_core_value_sigB505, this._dragState ? 0.9 : 0), this._drawScrollbar(var_core_value_sig649B), var_core_value_sig649B.restore();
  }
  _drawStructuralHeaderBands(var_core_value_sig7428) {
    if (!this._activeTable) return;
    let var_core_value_sig1DCE = this._getTriggerInput(),
      var_core_value_sig0567 = 10 / (var_core_value_sig1DCE.zoom ?? 1),
      var_core_value_sigA7F3 = W(var_core_value_sig1DCE),
      var_core_value_sigEACD = jr(var_core_value_sig1DCE),
      var_core_value_sig901E = G(var_core_value_sig1DCE),
      var_core_value_sigF7BB = U({
        x: var_core_value_sigEACD,
        y: var_core_value_sig1DCE.tableRect["y"] - var_core_value_sig0567,
        width: Math.max(0, var_core_value_sig901E - var_core_value_sigEACD),
        height: var_core_value_sig0567
      }, this._context["scene"]),
      var_core_value_sigFA38 = U({
        x: var_core_value_sigEACD - var_core_value_sig0567,
        y: var_core_value_sig1DCE.tableRect["y"],
        width: var_core_value_sig0567,
        height: var_core_value_sigA7F3.height
      }, this._context["scene"]);
    var_core_value_sig7428.save(), var_core_value_sig7428.fillStyle = "#f5f6f7", var_core_value_sig7428.fillRect(var_core_value_sigF7BB.x, var_core_value_sigF7BB.y, var_core_value_sigF7BB.width, var_core_value_sigF7BB.height), var_core_value_sig7428.fillRect(var_core_value_sigFA38.x, var_core_value_sigFA38.y, var_core_value_sigFA38.width, var_core_value_sigFA38.height), var_core_value_sig7428.restore();
  }
  _drawStructuralHeaderTrigger(var_core_value_sig102B, var_core_value_sigA7DB) {
    let var_core_value_sig5EEE = U(var_core_value_sigA7DB.rect, this._context["scene"]),
      var_core_value_sig65B4 = this._isSameTrigger(this._hoveredTrigger, var_core_value_sigA7DB),
      var_core_value_sigF98E = this._isStructuralHeaderSelected(var_core_value_sigA7DB),
      var_core_value_sigA470 = this._isStructuralHeaderDeleteDangerActive(var_core_value_sigA7DB);
    var_core_value_sig102B.save(), var_core_value_sig102B.fillStyle = var_core_value_sigA470 ? "rgba(217, 48, 37, 0.16)" : var_core_value_sigF98E ? "rgba(47, 102, 255, 0.18)" : var_core_value_sig65B4 ? "#d7dbe0" : "#eceff1", var_core_value_sig102B.fillRect(var_core_value_sig5EEE.x, var_core_value_sig5EEE.y, var_core_value_sig5EEE.width, var_core_value_sig5EEE.height), var_core_value_sig102B.restore();
  }
  _drawSelection(var_core_value_sig19A1) {
    if (!this._activeTable || !this._selection || this._selection["tableId"] !== this._activeTable["sourceTableId"] || !In(this._selection, {
      suppressOverlay: this._hasActivePointerInteraction()
    })) return;
    let var_core_value_sig81F7 = this._getSelectionRect(this._selection);
    if (!var_core_value_sig81F7) return;
    let var_core_value_sigBE51 = this._clipRectToViewport(var_core_value_sig81F7);
    if (!var_core_value_sigBE51) return;
    let var_core_value_sigAAD1 = U(var_core_value_sigBE51, this._context["scene"]),
      var_core_value_sigBC1A = this._getTableAccentColor();
    var_core_value_sig19A1.save(), var_core_value_sig19A1.fillStyle = new r.ColorKit(var_core_value_sigBC1A).setAlpha(0.07).toRgbString(), var_core_value_sig19A1.fillRect(var_core_value_sigAAD1.x, var_core_value_sigAAD1.y, var_core_value_sigAAD1.width, var_core_value_sigAAD1.height), var_core_value_sig19A1.strokeStyle = var_core_value_sigBC1A, var_core_value_sig19A1.lineWidth = 1, var_core_value_sig19A1.strokeRect(var_core_value_sigAAD1.x, var_core_value_sigAAD1.y, var_core_value_sigAAD1.width, var_core_value_sigAAD1.height), var_core_value_sig19A1.restore();
  }
  _hasActivePointerInteraction() {
    return this._dragState != null || this._moveDragState != null || this._rowColumnMoveState != null || this._pendingHandleSelection != null;
  }
  _drawMovePreview(var_core_value_sig3F3A) {
    if (this._rowColumnMoveTarget) {
      let var_core_value_sig1896 = this._rowColumnMoveTarget["rect"],
        var_core_value_sig0285 = H(var_core_value_sig1896.x, var_core_value_sig1896.y, this._context["scene"]),
        var_core_value_sig777D = H(var_core_value_sig1896.x + var_core_value_sig1896.width, var_core_value_sig1896.y + var_core_value_sig1896.height, this._context["scene"]);
      var_core_value_sig3F3A.save(), var_core_value_sig3F3A.strokeStyle = pr, var_core_value_sig3F3A.lineWidth = 2, var_core_value_sig3F3A.beginPath(), var_core_value_sig3F3A.moveTo(var_core_value_sig0285.x, var_core_value_sig0285.y), var_core_value_sig3F3A.lineTo(var_core_value_sig777D.x, var_core_value_sig777D.y), var_core_value_sig3F3A.stroke(), var_core_value_sig3F3A.restore();
      return;
    }
    if (this._moveDropTarget) {
      let var_core_value_sig3F4C = H(this._moveDropTarget["x"], this._moveDropTarget["y"], this._context["scene"]),
        var_core_value_sigD65A = H(this._moveDropTarget["x"] + this._moveDropTarget["width"], this._moveDropTarget["y"], this._context["scene"]);
      var_core_value_sig3F3A.save(), var_core_value_sig3F3A.strokeStyle = pr, var_core_value_sig3F3A.lineWidth = 2, var_core_value_sig3F3A.beginPath(), var_core_value_sig3F3A.moveTo(var_core_value_sig3F4C.x, var_core_value_sig3F4C.y), var_core_value_sig3F3A.lineTo(var_core_value_sigD65A.x, var_core_value_sigD65A.y), var_core_value_sig3F3A.stroke(), var_core_value_sig3F3A.fillStyle = pr, var_core_value_sig3F3A.beginPath(), var_core_value_sig3F3A.arc(var_core_value_sig3F4C.x, var_core_value_sig3F4C.y, 3, 0, Math.PI * 2), var_core_value_sig3F3A.fill(), var_core_value_sig3F3A.beginPath(), var_core_value_sig3F3A.arc(var_core_value_sigD65A.x, var_core_value_sigD65A.y, 3, 0, Math.PI * 2), var_core_value_sig3F3A.fill(), var_core_value_sig3F3A.restore();
      return;
    }
    if (!this._moveDragPreview) return;
    let var_core_value_sigA984 = U(this._moveDragPreview["rect"], this._context["scene"]);
    var_core_value_sig3F3A.save(), var_core_value_sig3F3A.fillStyle = this._getTableAccentColor(), var_core_value_sig3F3A.globalAlpha = 0.08, var_core_value_sig3F3A.fillRect(var_core_value_sigA984.x, var_core_value_sigA984.y, var_core_value_sigA984.width, var_core_value_sigA984.height), var_core_value_sig3F3A.globalAlpha = 1, var_core_value_sig3F3A.strokeStyle = this._getTableAccentColor(), var_core_value_sig3F3A.lineWidth = 2, var_core_value_sig3F3A.setLineDash([6, 4]), var_core_value_sig3F3A.strokeRect(var_core_value_sigA984.x, var_core_value_sigA984.y, var_core_value_sigA984.width, var_core_value_sigA984.height), var_core_value_sig3F3A.restore();
  }
  _drawSortPopover(var_core_value_sigA504) {
    if (!this._sortPopover) return;
    let var_core_value_sig05FF = Ur(),
      var_core_value_sigFBF0 = U(Hr(this._sortPopover), this._context["scene"]),
      var_core_value_sig2F95 = var_core_value_sigFBF0.height / var_core_value_sig05FF.length;
    var_core_value_sigA504.save(), var_core_value_sigA504.fillStyle = "#fff", var_core_value_sigA504.strokeStyle = hr, var_core_value_sigA504.lineWidth = 1, var_core_value_sigA504.shadowColor = "rgba(60, 64, 67, 0.18)", var_core_value_sigA504.shadowBlur = 12, q(var_core_value_sigA504, var_core_value_sigFBF0.x, var_core_value_sigFBF0.y, var_core_value_sigFBF0.width, var_core_value_sigFBF0.height, 8), var_core_value_sigA504.fill(), var_core_value_sigA504.shadowBlur = 0, var_core_value_sigA504.stroke(), var_core_value_sigA504.font = "12px Arial, sans-serif", var_core_value_sigA504.fillStyle = gr, var_core_value_sig05FF.forEach((var_core_value_sig5A13, var_core_value_sigF593) => {
      let var_core_value_sig3607 = var_core_value_sigFBF0.y + var_core_value_sigF593 * var_core_value_sig2F95;
      this._drawSortOptionIcon(var_core_value_sigA504, var_core_value_sig5A13.direction, var_core_value_sigFBF0.x + 12, var_core_value_sig3607 + var_core_value_sig2F95 / 2 - 7), var_core_value_sigA504.fillText(this._localeService["t"](var_core_value_sig5A13.labelKey), var_core_value_sigFBF0.x + 36, var_core_value_sig3607 + var_core_value_sig2F95 / 2 + 4);
    }), var_core_value_sigA504.restore();
  }
  _drawSortOptionIcon(var_core_value_sigF0E1, var_core_value_sig2D8D, var_core_value_sigE5A6, var_core_value_sigF449) {
    var_core_value_sigF0E1.save(), var_core_value_sigF0E1.strokeStyle = gr, var_core_value_sigF0E1.lineWidth = 1.5, var_core_value_sigF0E1.beginPath(), var_core_value_sigF0E1.moveTo(var_core_value_sigE5A6 + 6, var_core_value_sigF449), var_core_value_sigF0E1.lineTo(var_core_value_sigE5A6 + 6, var_core_value_sigF449 + 14), var_core_value_sigF0E1.moveTo(var_core_value_sigE5A6 + 2, var_core_value_sig2D8D === "asc" ? var_core_value_sigF449 + 4 : var_core_value_sigF449 + 10), var_core_value_sigF0E1.lineTo(var_core_value_sigE5A6 + 6, var_core_value_sig2D8D === "asc" ? var_core_value_sigF449 : var_core_value_sigF449 + 14), var_core_value_sigF0E1.lineTo(var_core_value_sigE5A6 + 10, var_core_value_sig2D8D === "asc" ? var_core_value_sigF449 + 4 : var_core_value_sigF449 + 10), var_core_value_sigF0E1.stroke(), var_core_value_sigF0E1.restore();
  }
  _drawInsertTrigger(var_core_value_sig38C5, var_core_value_sigC87D) {
    let var_core_value_sigCCDC = U(var_core_value_sigC87D.rect, this._context["scene"]),
      var_core_value_sigC310 = this._isSameTrigger(this._hoveredTrigger, var_core_value_sigC87D),
      var_core_value_sigA4E8 = this._getInsertTriggerDocumentCenter(var_core_value_sigC87D),
      var_core_value_sigDC07 = var_core_value_sigA4E8 ? H(var_core_value_sigA4E8.x, var_core_value_sigA4E8.y, this._context["scene"]) : {
        x: var_core_value_sigCCDC.x + var_core_value_sigCCDC.width / 2,
        y: var_core_value_sigCCDC.y + var_core_value_sigCCDC.height / 2
      },
      var_core_value_sig3474 = var_core_value_sigC310 ? 12 : 4,
      var_core_value_sig4E80 = var_core_value_sig3474 / 2;
    var_core_value_sig38C5.save(), var_core_value_sigC310 && this._drawInsertTriggerGuide(var_core_value_sig38C5, var_core_value_sigC87D), var_core_value_sig38C5.fillStyle = var_core_value_sigC310 ? "#fff" : vr, var_core_value_sig38C5.strokeStyle = var_core_value_sigC310 ? this._getTableAccentColor() : vr, var_core_value_sig38C5.lineWidth = var_core_value_sigC310 ? 1.5 : 1, var_core_value_sig38C5.beginPath(), var_core_value_sig38C5.arc(var_core_value_sigDC07.x, var_core_value_sigDC07.y, var_core_value_sig4E80, 0, Math.PI * 2), var_core_value_sig38C5.fill(), var_core_value_sigC310 && var_core_value_sig38C5.stroke(), var_core_value_sigC310 && this._drawInsertTriggerPlus(var_core_value_sig38C5, var_core_value_sigDC07.x, var_core_value_sigDC07.y, var_core_value_sig3474), var_core_value_sig38C5.restore();
  }
  _drawInsertTriggerPlus(var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C, var_core_value_sig7D42) {
    let var_core_value_sig8FDE = Math.round(var_core_value_sig2B2A),
      var_core_value_sig78E6 = Math.round(var_core_value_sig0B5C),
      var_core_value_sig541F = Math.max(Math.floor(var_core_value_sig7D42 / 3), 3),
      var_core_value_sig417B = Math.max(Math.round(var_core_value_sig7D42 / 6), 2);
    var_core_value_sigD23B.save(), var_core_value_sigD23B.fillStyle = this._getTableAccentColor(), var_core_value_sigD23B.fillRect(var_core_value_sig8FDE - var_core_value_sig541F, var_core_value_sig78E6 - Math.floor(var_core_value_sig417B / 2), var_core_value_sig541F * 2, var_core_value_sig417B), var_core_value_sigD23B.fillRect(var_core_value_sig8FDE - Math.floor(var_core_value_sig417B / 2), var_core_value_sig78E6 - var_core_value_sig541F, var_core_value_sig417B, var_core_value_sig541F * 2), var_core_value_sigD23B.restore();
  }
  _drawInsertTriggerGuide(var_core_value_sigAA90, var_core_value_sigE92D) {
    if (!this._activeTable) return;
    let {
        input: var_core_value_sig9940
      } = this._activeTable,
      var_core_value_sig682D = U(W(var_core_value_sig9940), this._context["scene"]),
      var_core_value_sig1435 = H(Ar(var_core_value_sig9940), var_core_value_sig9940.tableRect["y"], this._context["scene"]).x,
      var_core_value_sig4082 = H(G(var_core_value_sig9940), var_core_value_sig9940.tableRect["y"], this._context["scene"]).x,
      var_core_value_sigC049 = this._getInsertTriggerDocumentCenter(var_core_value_sigE92D),
      var_core_value_sigE5C3 = var_core_value_sigC049 ? H(var_core_value_sigC049.x, var_core_value_sigC049.y, this._context["scene"]) : H(var_core_value_sigE92D.rect["x"] + var_core_value_sigE92D.rect["width"] / 2, var_core_value_sigE92D.rect["y"] + var_core_value_sigE92D.rect["height"] / 2, this._context["scene"]);
    if (var_core_value_sigAA90.save(), var_core_value_sigAA90.strokeStyle = this._getTableAccentColor(), var_core_value_sigAA90.lineWidth = 2, var_core_value_sigAA90.beginPath(), var_core_value_sigE92D.kind === "row-insert-dot") {
      let var_core_value_sigB512 = var_core_value_sigE5C3.y;
      var_core_value_sigAA90.moveTo(var_core_value_sig1435, var_core_value_sigB512), var_core_value_sigAA90.lineTo(var_core_value_sig4082, var_core_value_sigB512);
    } else {
      if (var_core_value_sigE92D.kind === "column-insert-dot") {
        let var_core_value_sigFBA4 = var_core_value_sigE5C3.x;
        var_core_value_sigAA90.moveTo(var_core_value_sigFBA4, var_core_value_sig682D.y), var_core_value_sigAA90.lineTo(var_core_value_sigFBA4, var_core_value_sig682D.y + var_core_value_sig682D.height);
      }
    }
    var_core_value_sigAA90.stroke(), var_core_value_sigAA90.restore();
  }
  _getTableAccentColor() {
    var var_core_value_sigCCAA;
    return ((var_core_value_sigCCAA = this._themeService) == null ? undefined : var_core_value_sigCCAA.getColorFromTheme("primary.600")) ?? pr;
  }
  _getInsertTriggerDocumentCenter(var_core_value_sigF32D) {
    if (!this._activeTable) return null;
    let {
      input: var_core_value_sig9427
    } = this._activeTable;
    if (var_core_value_sigF32D.kind === "column-insert-dot" && var_core_value_sigF32D.column != null) {
      let var_core_value_sigF2E6 = Y(var_core_value_sig9427.columnIndices, var_core_value_sigF32D.column);
      return var_core_value_sigF2E6 < 0 ? null : {
        x: K(var_core_value_sig9427, J(var_core_value_sig9427.columnWidths["slice"](0, var_core_value_sigF32D.position === "left" ? var_core_value_sigF2E6 : var_core_value_sigF2E6 + 1))),
        y: var_core_value_sigF32D.rect["y"] + var_core_value_sigF32D.rect["height"] / 2
      };
    }
    if (var_core_value_sigF32D.kind === "row-insert-dot" && var_core_value_sigF32D.row != null) {
      let var_core_value_sig34C8 = Y(var_core_value_sig9427.rowIndices, var_core_value_sigF32D.row);
      return var_core_value_sig34C8 < 0 ? null : {
        x: var_core_value_sigF32D.rect["x"] + var_core_value_sigF32D.rect["width"] / 2,
        y: var_core_value_sig9427.tableRect["y"] + J(var_core_value_sig9427.rowHeights["slice"](0, var_core_value_sigF32D.position === "above" ? var_core_value_sig34C8 : var_core_value_sig34C8 + 1))
      };
    }
    return {
      x: var_core_value_sigF32D.rect["x"] + var_core_value_sigF32D.rect["width"] / 2,
      y: var_core_value_sigF32D.rect["y"] + var_core_value_sigF32D.rect["height"] / 2
    };
  }
  _getInsertTriggerIconRect(var_core_value_sig21F4, var_core_value_sigA345) {
    let var_core_value_sigA468 = this._getInsertTriggerDocumentCenter(var_core_value_sig21F4),
      var_core_value_sig1561 = U(var_core_value_sig21F4.rect, this._context["scene"]);
    if (!var_core_value_sigA468) return var_core_value_sig1561;
    let var_core_value_sigDF14 = H(var_core_value_sigA468.x, var_core_value_sigA468.y, this._context["scene"]),
      var_core_value_sig842F = var_core_value_sigA345 ?? Math.max(var_core_value_sig21F4.rect["width"], var_core_value_sig21F4.rect["height"]);
    if (var_core_value_sigA345 != null) {
      if (var_core_value_sig21F4.kind === "column-insert-dot") return {
        x: var_core_value_sigDF14.x - var_core_value_sig842F / 2,
        y: var_core_value_sig1561.y,
        width: var_core_value_sig842F,
        height: var_core_value_sig842F
      };
      if (var_core_value_sig21F4.kind === "row-insert-dot") return {
        x: var_core_value_sig1561.x,
        y: var_core_value_sigDF14.y - var_core_value_sig842F / 2,
        width: var_core_value_sig842F,
        height: var_core_value_sig842F
      };
    }
    return U({
      x: var_core_value_sigA468.x - var_core_value_sig842F / 2,
      y: var_core_value_sigA468.y - var_core_value_sig842F / 2,
      width: var_core_value_sig842F,
      height: var_core_value_sig842F
    }, this._context["scene"]);
  }
  _drawTableSelectTrigger(var_core_value_sigC4C0, var_core_value_sig214A) {
    let var_core_value_sigCCC3 = U(var_core_value_sig214A.rect, this._context["scene"]);
    var_core_value_sigC4C0.save(), var_core_value_sigC4C0.fillStyle = "#fff", var_core_value_sigC4C0.strokeStyle = hr, var_core_value_sigC4C0.lineWidth = 1, q(var_core_value_sigC4C0, var_core_value_sigCCC3.x, var_core_value_sigCCC3.y, var_core_value_sigCCC3.width, var_core_value_sigCCC3.height, 5), var_core_value_sigC4C0.fill(), var_core_value_sigC4C0.stroke(), this._drawSixDotDragHandle(var_core_value_sigC4C0, var_core_value_sigCCC3), var_core_value_sigC4C0.restore();
  }
  _isStructuralHeaderSelected(var_core_value_sig986E) {
    return !this._selection || !var_core_value_sig986E.tableId || this._selection["tableId"] !== var_core_value_sig986E.tableId ? false : var_core_value_sig986E.kind === "row-header" && var_core_value_sig986E.row != null ? this._selection["kind"] === e.DocsTableSelectionKind["Row"] && var_core_value_sig986E.row >= this._selection["startRow"] && var_core_value_sig986E.row <= this._selection["endRow"] : var_core_value_sig986E.kind === "column-header" && var_core_value_sig986E.column != null && this._selection["kind"] === e.DocsTableSelectionKind["Column"] && var_core_value_sig986E.column >= this._selection["startColumn"] && var_core_value_sig986E.column <= this._selection["endColumn"];
  }
  _isStructuralHeaderDeleteDangerActive(var_core_value_sig537C) {
    return !!this._floatingMenuService["getState"]().deleteHoverActive && this._isStructuralHeaderSelected(var_core_value_sig537C);
  }
  _drawSixDotDragHandle(var_core_value_sigBBBC, var_core_value_sig5440) {
    let var_core_value_sigE28B = 4.6,
      var_core_value_sig0FD9 = var_core_value_sig5440.x + var_core_value_sig5440.width / 2 - 5 / 2,
      var_core_value_sig5649 = var_core_value_sig5440.y + var_core_value_sig5440.height / 2 - var_core_value_sigE28B;
    var_core_value_sigBBBC.save(), var_core_value_sigBBBC.fillStyle = vr;
    for (let var_core_value_sigB744 = 0; var_core_value_sigB744 < 2; var_core_value_sigB744++) for (let var_core_value_sig4383 = 0; var_core_value_sig4383 < 3; var_core_value_sig4383++) var_core_value_sigBBBC.beginPath(), var_core_value_sigBBBC.arc(var_core_value_sig0FD9 + var_core_value_sigB744 * 5, var_core_value_sig5649 + var_core_value_sig4383 * var_core_value_sigE28B, 1.1, 0, Math.PI * 2), var_core_value_sigBBBC.fill();
    var_core_value_sigBBBC.restore();
  }
  _drawIconHoverBg(var_core_value_sigAF82, var_core_value_sig21A2, var_core_value_sig5C1D) {
    this._isSameTrigger(this._hoveredTrigger, var_core_value_sig5C1D) && (var_core_value_sigAF82.fillStyle = _r, q(var_core_value_sigAF82, var_core_value_sig21A2.x - 2, var_core_value_sig21A2.y - 2, var_core_value_sig21A2.width + 4, var_core_value_sig21A2.height + 4, 5), var_core_value_sigAF82.fill());
  }
  _drawScrollbar(var_core_value_sig4CBA) {
    let var_core_value_sig8E65 = this._getScrollbarGeometry();
    var_core_value_sig8E65 && Nn(var_core_value_sig4CBA, Or(var_core_value_sig8E65, this._context["scene"]));
  }
  _drawResizeGuide(var_core_value_sig772C, var_core_value_sigF309, var_core_value_sig44F9) {
    let var_core_value_sigE532 = this._getResizeGuideRect(var_core_value_sigF309);
    if (!var_core_value_sigE532) return;
    let var_core_value_sigF381 = U(var_core_value_sigE532, this._context["scene"]);
    var_core_value_sig772C.save(), var_core_value_sig772C.fillStyle = pr, var_core_value_sig772C.globalAlpha = var_core_value_sig44F9, var_core_value_sig772C.fillRect(var_core_value_sigF381.x, var_core_value_sigF381.y, var_core_value_sigF381.width, var_core_value_sigF381.height), var_core_value_sig772C.restore();
  }
  _drawBorderPopover(var_core_value_sigCB92) {
    if (!this._borderPopover) return;
    let var_core_value_sigC844 = Wr(),
      var_core_value_sig2ED4 = U(Vr(this._borderPopover), this._context["scene"]),
      var_core_value_sig0477 = var_core_value_sig2ED4.width / 5,
      var_core_value_sig6FDF = var_core_value_sig2ED4.height / 2;
    var_core_value_sigCB92.save(), var_core_value_sigCB92.fillStyle = "#fff", var_core_value_sigCB92.strokeStyle = hr, var_core_value_sigCB92.lineWidth = 1, var_core_value_sigCB92.shadowColor = "rgba(60,\x2064,\x2067,\x200.18)", var_core_value_sigCB92.shadowBlur = 12, q(var_core_value_sigCB92, var_core_value_sig2ED4.x, var_core_value_sig2ED4.y, var_core_value_sig2ED4.width, var_core_value_sig2ED4.height, 8), var_core_value_sigCB92.fill(), var_core_value_sigCB92.shadowBlur = 0, var_core_value_sigCB92.stroke(), var_core_value_sigC844.forEach((var_core_value_sigEAE2, var_core_value_sigE68A) => {
      let var_core_value_sig3E68 = var_core_value_sigE68A % 5,
        var_core_value_sigF4C5 = Math.floor(var_core_value_sigE68A / 5),
        var_core_value_sig5410 = var_core_value_sig2ED4.x + var_core_value_sig3E68 * var_core_value_sig0477,
        var_core_value_sig492F = var_core_value_sig2ED4.y + var_core_value_sigF4C5 * var_core_value_sig6FDF;
      this._drawBorderPresetIcon(var_core_value_sigCB92, var_core_value_sigEAE2.preset, var_core_value_sigEAE2.iconName, var_core_value_sig5410, var_core_value_sig492F, var_core_value_sig0477, var_core_value_sig6FDF);
    }), var_core_value_sigCB92.restore();
  }
  _drawBorderPresetIcon(var_core_value_sig27C4, var_core_value_sig3E1A, var_core_value_sig7FB0, var_core_value_sig5215, var_core_value_sig5204, var_core_value_sig5E11, var_core_value_sig4D58) {
    let var_core_value_sig2DBD = this._lastPointerPoint ? this._hitBorderPreset(this._lastPointerPoint["x"], this._lastPointerPoint["y"]) : null,
      var_core_value_sig424E = (var_core_value_sig2DBD == null ? undefined : var_core_value_sig2DBD.preset) === var_core_value_sig3E1A,
      var_core_value_sigF481 = var_core_value_sig5215 + (var_core_value_sig5E11 - 16) / 2,
      var_core_value_sigD7F2 = var_core_value_sigF481 + 16,
      var_core_value_sig7CF3 = var_core_value_sig5204 + (var_core_value_sig4D58 - 16) / 2,
      var_core_value_sig9DC6 = var_core_value_sig7CF3 + 16,
      var_core_value_sig6643 = (var_core_value_sigF481 + var_core_value_sigD7F2) / 2,
      var_core_value_sig4124 = (var_core_value_sig7CF3 + var_core_value_sig9DC6) / 2;
    var_core_value_sig27C4.save(), var_core_value_sig424E && (var_core_value_sig27C4.fillStyle = _r, q(var_core_value_sig27C4, var_core_value_sig5215 + 3, var_core_value_sig5204 + 3, var_core_value_sig5E11 - 6, var_core_value_sig4D58 - 6, 6), var_core_value_sig27C4.fill()), var_core_value_sig27C4.strokeStyle = var_core_value_sig3E1A === "none" ? "#5f6368" : "#2f66ff", var_core_value_sig27C4.lineWidth = 1.35, var_core_value_sig27C4.lineCap = "round", var_core_value_sig27C4.lineJoin = "round", var_core_value_sig27C4.setLineDash(var_core_value_sig7FB0 === "NoBorderIcon" ? [2, 3] : []), var_core_value_sig27C4.beginPath(), (var_core_value_sig7FB0 === "AllBorderIcon" || var_core_value_sig7FB0 === "OuterBorderDoubleIcon" || var_core_value_sig7FB0 === "UpBorderDoubleIcon") && (var_core_value_sig27C4.moveTo(var_core_value_sigF481, var_core_value_sig7CF3), var_core_value_sig27C4.lineTo(var_core_value_sigD7F2, var_core_value_sig7CF3)), (var_core_value_sig7FB0 === "AllBorderIcon" || var_core_value_sig7FB0 === "OuterBorderDoubleIcon" || var_core_value_sig7FB0 === "DownBorderDoubleIcon") && (var_core_value_sig27C4.moveTo(var_core_value_sigF481, var_core_value_sig9DC6), var_core_value_sig27C4.lineTo(var_core_value_sigD7F2, var_core_value_sig9DC6)), (var_core_value_sig7FB0 === "AllBorderIcon" || var_core_value_sig7FB0 === "OuterBorderDoubleIcon" || var_core_value_sig7FB0 === "LeftBorderDoubleIcon") && (var_core_value_sig27C4.moveTo(var_core_value_sigF481, var_core_value_sig7CF3), var_core_value_sig27C4.lineTo(var_core_value_sigF481, var_core_value_sig9DC6)), (var_core_value_sig7FB0 === "AllBorderIcon" || var_core_value_sig7FB0 === "OuterBorderDoubleIcon" || var_core_value_sig7FB0 === "RightBorderDoubleIcon") && (var_core_value_sig27C4.moveTo(var_core_value_sigD7F2, var_core_value_sig7CF3), var_core_value_sig27C4.lineTo(var_core_value_sigD7F2, var_core_value_sig9DC6)), (var_core_value_sig7FB0 === "AllBorderIcon" || var_core_value_sig7FB0 === "InnerBorderDoubleIcon" || var_core_value_sig7FB0 === "VerticalBorderDoubleIcon") && (var_core_value_sig27C4.moveTo(var_core_value_sig6643, var_core_value_sig7CF3), var_core_value_sig27C4.lineTo(var_core_value_sig6643, var_core_value_sig9DC6)), (var_core_value_sig7FB0 === "AllBorderIcon" || var_core_value_sig7FB0 === "InnerBorderDoubleIcon" || var_core_value_sig7FB0 === "HorizontalBorderDoubleIcon") && (var_core_value_sig27C4.moveTo(var_core_value_sigF481, var_core_value_sig4124), var_core_value_sig27C4.lineTo(var_core_value_sigD7F2, var_core_value_sig4124)), var_core_value_sig7FB0 === "NoBorderIcon" && var_core_value_sig27C4.rect(var_core_value_sigF481, var_core_value_sig7CF3, var_core_value_sigD7F2 - var_core_value_sigF481, var_core_value_sig9DC6 - var_core_value_sig7CF3), var_core_value_sig27C4.stroke(), var_core_value_sig27C4.restore();
  }
  _drawTooltip(var_core_value_sigBF1C) {
    if (!this._tooltip) return;
    let var_core_value_sigEEEF = this._tooltip["label"],
      var_core_value_sig9A01 = H(this._tooltip["x"], this._tooltip["y"], this._context["scene"]);
    var_core_value_sigBF1C.save(), var_core_value_sigBF1C.font = "12px Arial, sans-serif";
    let var_core_value_sig674F = var_core_value_sigBF1C.measureText(var_core_value_sigEEEF).width + 16,
      var_core_value_sigC8F6 = var_core_value_sig9A01.x - var_core_value_sig674F / 2,
      var_core_value_sig8A26 = var_core_value_sig9A01.y - 28 - 12;
    var_core_value_sigBF1C.fillStyle = "rgba(32, 33, 36, 0.94)", q(var_core_value_sigBF1C, var_core_value_sigC8F6, var_core_value_sig8A26, var_core_value_sig674F, 28, 6), var_core_value_sigBF1C.fill(), var_core_value_sigBF1C.fillStyle = "#fff", var_core_value_sigBF1C.fillText(var_core_value_sigEEEF, var_core_value_sigC8F6 + 8, var_core_value_sig8A26 + 18), var_core_value_sigBF1C.restore();
  }
  _getCellAtPoint(var_core_value_sigD073, var_core_value_sigF631) {
    var var_core_value_sig2278, var_core_value_sig7053, var_core_value_sig52F1;
    if (!this._activeTable || !Z(W(this._activeTable["input"]), var_core_value_sigD073, var_core_value_sigF631)) return null;
    let {
        input: var_core_value_sig1E74,
        segmentId: var_core_value_sig1E84,
        sourceTableId: var_core_value_sig133B
      } = this._activeTable,
      var_core_value_sig69B8 = X(var_core_value_sig1E74.rowHeights, var_core_value_sigF631 - var_core_value_sig1E74.tableRect["y"]),
      var_core_value_sig983D = Mr(var_core_value_sig1E74, var_core_value_sigD073);
    if (var_core_value_sig983D == null) return null;
    let var_core_value_sig9A03 = X(var_core_value_sig1E74.columnWidths, var_core_value_sig983D);
    if (var_core_value_sig69B8 < 0 || var_core_value_sig9A03 < 0) return null;
    let var_core_value_sig3363 = ((var_core_value_sig2278 = var_core_value_sig1E74.rowIndices) == null ? undefined : var_core_value_sig2278[var_core_value_sig69B8]) ?? var_core_value_sig69B8,
      var_core_value_sigF64A = ((var_core_value_sig7053 = var_core_value_sig1E74.columnIndices) == null ? undefined : var_core_value_sig7053[var_core_value_sig9A03]) ?? var_core_value_sig9A03,
      var_core_value_sig25EC = (var_core_value_sig52F1 = var_core_value_sig1E74.mergedCells) == null ? undefined : var_core_value_sig52F1.find(var_core_value_sig8EA0 => var_core_value_sig3363 >= var_core_value_sig8EA0.startRow && var_core_value_sig3363 <= var_core_value_sig8EA0.endRow && var_core_value_sigF64A >= var_core_value_sig8EA0.startColumn && var_core_value_sigF64A <= var_core_value_sig8EA0.endColumn);
    return {
      column: (var_core_value_sig25EC == null ? undefined : var_core_value_sig25EC.startColumn) ?? var_core_value_sigF64A,
      row: (var_core_value_sig25EC == null ? undefined : var_core_value_sig25EC.startRow) ?? var_core_value_sig3363,
      ...(var_core_value_sig1E84 ? {
        segmentId: var_core_value_sig1E84
      } : {}),
      tableId: var_core_value_sig133B
    };
  }
  _updateHoverTarget(var_core_value_sigA790, var_core_value_sig9A5E) {
    if (!this._activeTable) {
      this._hoverCell = null, this._hoverColumn = null, this._hoverRow = null;
      return;
    }
    let var_core_value_sig01B9 = this._getTriggerInput(),
      var_core_value_sigD6A9 = this._getCellAtPoint(var_core_value_sigA790, var_core_value_sig9A5E),
      var_core_value_sig0FCF = W(var_core_value_sig01B9),
      var_core_value_sigCF96 = jr(var_core_value_sig01B9),
      var_core_value_sigC4E9 = G(var_core_value_sig01B9),
      var_core_value_sigF612 = {
        x: var_core_value_sigCF96,
        y: var_core_value_sig01B9.tableRect["y"] - 16 / (var_core_value_sig01B9.zoom ?? 1),
        width: Math.max(0, var_core_value_sigC4E9 - var_core_value_sigCF96),
        height: 16 / (var_core_value_sig01B9.zoom ?? 1)
      },
      var_core_value_sigAA6C = {
        x: var_core_value_sigCF96 - 16 / (var_core_value_sig01B9.zoom ?? 1),
        y: var_core_value_sig01B9.tableRect["y"],
        width: 16 / (var_core_value_sig01B9.zoom ?? 1),
        height: var_core_value_sig0FCF.height
      };
    this._hoverCell = var_core_value_sigD6A9 ? {
      row: var_core_value_sigD6A9.row,
      column: var_core_value_sigD6A9.column
    } : null, this._hoverColumn = Z(var_core_value_sigF612, var_core_value_sigA790, var_core_value_sig9A5E) ? this._getColumnAtX(var_core_value_sigA790) : null, this._hoverRow = Z(var_core_value_sigAA6C, var_core_value_sigA790, var_core_value_sig9A5E) ? this._getRowAtY(var_core_value_sig9A5E) : null, !var_core_value_sigD6A9 && !this._hoverColumn && !this._hoverRow && !this._borderPopover && (this._hoveredTrigger = null);
  }
  _getColumnAtX(var_core_value_sig8BFA) {
    var var_core_value_sig236B;
    if (!this._activeTable) return null;
    let {
        input: var_core_value_sig1951
      } = this._activeTable,
      var_core_value_sigFEA0 = W(var_core_value_sig1951);
    if (var_core_value_sig8BFA < var_core_value_sigFEA0.x || var_core_value_sig8BFA > var_core_value_sigFEA0.x + var_core_value_sigFEA0.width) return null;
    let var_core_value_sig931A = Mr(var_core_value_sig1951, var_core_value_sig8BFA);
    if (var_core_value_sig931A == null) return null;
    let var_core_value_sigEE7D = X(var_core_value_sig1951.columnWidths, var_core_value_sig931A);
    return ((var_core_value_sig236B = var_core_value_sig1951.columnIndices) == null ? undefined : var_core_value_sig236B[var_core_value_sigEE7D]) ?? var_core_value_sigEE7D;
  }
  _createRowColumnMoveState(var_core_value_sig3585) {
    let var_core_value_sig31A8 = var_core_value_sig3585.type === "row" ? var_core_value_sig3585.row : var_core_value_sig3585.column;
    return var_core_value_sig31A8 == null ? null : {
      sourceIndex: var_core_value_sig31A8,
      startX: var_core_value_sig3585.startX,
      startY: var_core_value_sig3585.startY,
      tableId: var_core_value_sig3585.tableId,
      type: var_core_value_sig3585.type
    };
  }
  _getRowColumnMoveTarget(var_core_value_sigA4DA) {
    let var_core_value_sig6FC0 = this._rowColumnMoveState;
    return !var_core_value_sig6FC0 || !this._activeTable || this._activeTable["sourceTableId"] !== var_core_value_sig6FC0.tableId ? null : var_core_value_sig6FC0.type === "row" ? this._getRowMoveTargetAtY(var_core_value_sigA4DA.y) : this._getColumnMoveTargetAtX(var_core_value_sigA4DA.x);
  }
  _getRowMoveTargetAtY(var_core_value_sig6217) {
    var var_core_value_sigB805;
    if (!this._activeTable) return null;
    let {
      input: var_core_value_sig4FAE
    } = this._activeTable;
    if (var_core_value_sig6217 < var_core_value_sig4FAE.tableRect["y"] || var_core_value_sig6217 > var_core_value_sig4FAE.tableRect["y"] + var_core_value_sig4FAE.tableRect["height"]) return null;
    let var_core_value_sig1FCC = X(var_core_value_sig4FAE.rowHeights, var_core_value_sig6217 - var_core_value_sig4FAE.tableRect["y"]);
    if (var_core_value_sig1FCC < 0) return null;
    let var_core_value_sigB7F9 = var_core_value_sig4FAE.tableRect["y"] + J(var_core_value_sig4FAE.rowHeights["slice"](0, var_core_value_sig1FCC)),
      var_core_value_sigB1A2 = var_core_value_sig4FAE.rowHeights[var_core_value_sig1FCC],
      var_core_value_sig526D = var_core_value_sig6217 < var_core_value_sigB7F9 + var_core_value_sigB1A2 / 2 ? "above" : "below",
      var_core_value_sigBDB5 = var_core_value_sig526D === "above" ? var_core_value_sigB7F9 : var_core_value_sigB7F9 + var_core_value_sigB1A2,
      var_core_value_sig59CE1 = W(var_core_value_sig4FAE);
    return {
      index: ((var_core_value_sigB805 = var_core_value_sig4FAE.rowIndices) == null ? undefined : var_core_value_sigB805[var_core_value_sig1FCC]) ?? var_core_value_sig1FCC,
      position: var_core_value_sig526D,
      rect: {
        x: var_core_value_sig59CE1.x,
        y: var_core_value_sigBDB5,
        width: var_core_value_sig59CE1.width,
        height: 0
      }
    };
  }
  _getColumnMoveTargetAtX(var_core_value_sig3AD7) {
    var var_core_value_sig04E4;
    if (!this._activeTable) return null;
    let {
        input: var_core_value_sigD8F0
      } = this._activeTable,
      var_core_value_sig1475 = W(var_core_value_sigD8F0);
    if (var_core_value_sig3AD7 < var_core_value_sig1475.x || var_core_value_sig3AD7 > var_core_value_sig1475.x + var_core_value_sig1475.width) return null;
    let var_core_value_sig08B7 = Mr(var_core_value_sigD8F0, var_core_value_sig3AD7);
    if (var_core_value_sig08B7 == null) return null;
    let var_core_value_sig2008 = X(var_core_value_sigD8F0.columnWidths, var_core_value_sig08B7);
    if (var_core_value_sig2008 < 0) return null;
    let var_core_value_sig496B = K(var_core_value_sigD8F0, J(var_core_value_sigD8F0.columnWidths["slice"](0, var_core_value_sig2008))),
      var_core_value_sig7161 = var_core_value_sigD8F0.columnWidths[var_core_value_sig2008],
      var_core_value_sig2AB8 = var_core_value_sig3AD7 < var_core_value_sig496B + var_core_value_sig7161 / 2 ? "left" : "right",
      var_core_value_sig3FCF = var_core_value_sig2AB8 === "left" ? var_core_value_sig496B : var_core_value_sig496B + var_core_value_sig7161;
    return {
      index: ((var_core_value_sig04E4 = var_core_value_sigD8F0.columnIndices) == null ? undefined : var_core_value_sig04E4[var_core_value_sig2008]) ?? var_core_value_sig2008,
      position: var_core_value_sig2AB8,
      rect: {
        x: var_core_value_sig3FCF,
        y: var_core_value_sigD8F0.tableRect["y"],
        width: 0,
        height: var_core_value_sigD8F0.tableRect["height"]
      }
    };
  }
  _getRowAtY(var_core_value_sig675A) {
    var var_core_value_sig837F;
    if (!this._activeTable) return null;
    let {
      input: var_core_value_sig9D6E
    } = this._activeTable;
    if (var_core_value_sig675A < var_core_value_sig9D6E.tableRect["y"] || var_core_value_sig675A > var_core_value_sig9D6E.tableRect["y"] + var_core_value_sig9D6E.tableRect["height"]) return null;
    let var_core_value_sigB205 = X(var_core_value_sig9D6E.rowHeights, var_core_value_sig675A - var_core_value_sig9D6E.tableRect["y"]);
    return ((var_core_value_sig837F = var_core_value_sig9D6E.rowIndices) == null ? undefined : var_core_value_sig837F[var_core_value_sigB205]) ?? var_core_value_sigB205;
  }
  _hitBorderPreset(var_core_value_sigBF78, var_core_value_sig8AF3) {
    if (!this._borderPopover) return null;
    let var_core_value_sigA0CC = Vr(this._borderPopover);
    if (!Z(var_core_value_sigA0CC, var_core_value_sigBF78, var_core_value_sig8AF3)) return null;
    let var_core_value_sigB3A1 = Math.floor((var_core_value_sigBF78 - var_core_value_sigA0CC.x) / (var_core_value_sigA0CC.width / 5)),
      var_core_value_sig1FB9 = Math.floor((var_core_value_sig8AF3 - var_core_value_sigA0CC.y) / (var_core_value_sigA0CC.height / 2)),
      var_core_value_sig53A9 = Wr()[var_core_value_sig1FB9 * 5 + var_core_value_sigB3A1];
    return var_core_value_sig53A9 ? {
      preset: var_core_value_sig53A9.preset
    } : null;
  }
  _hitSortOption(var_core_value_sigDACD, var_core_value_sig691E) {
    if (!this._sortPopover) return null;
    let var_core_value_sigD6D6 = Hr(this._sortPopover);
    if (!Z(var_core_value_sigD6D6, var_core_value_sigDACD, var_core_value_sig691E)) return null;
    let var_core_value_sig0347 = Ur(),
      var_core_value_sig52A3 = var_core_value_sig0347[Math.floor((var_core_value_sig691E - var_core_value_sigD6D6.y) / (var_core_value_sigD6D6.height / var_core_value_sig0347.length))];
    return var_core_value_sig52A3 ? {
      direction: var_core_value_sig52A3.direction
    } : null;
  }
  _buildTriggerTooltip(var_core_value_sigAD91) {
    if (!var_core_value_sigAD91) return null;
    let var_core_value_sigF64E = Gr(var_core_value_sigAD91.kind);
    return var_core_value_sigF64E ? {
      label: this._localeService["t"](var_core_value_sigF64E),
      x: var_core_value_sigAD91.rect["x"] + var_core_value_sigAD91.rect["width"] / 2,
      y: var_core_value_sigAD91.rect["y"]
    } : null;
  }
  _getBorderPresetLabel(var_core_value_sig9B3D1) {
    let var_core_value_sigB217 = Kr(var_core_value_sig9B3D1);
    return this._localeService["t"](var_core_value_sigB217);
  }
  _resolveFloatingMenuMergeAction(var_core_value_sig1FE6) {
    let var_core_value_sig2471 = this._context["unit"].getSnapshot();
    return (0, e.canUnmergeCells)(var_core_value_sig2471, var_core_value_sig1FE6.tableId, var_core_value_sig1FE6) ? "unmerge" : (0, e.canMergeCells)(var_core_value_sig2471, var_core_value_sig1FE6.tableId, var_core_value_sig1FE6) ? "merge" : null;
  }
  _resolveFloatingMenuTextStyle(var_core_value_sigD1FC) {
    return dt(this._context["unit"].getSnapshot(), var_core_value_sigD1FC);
  }
  _resolveFloatingMenuVerticalAlign(var_core_value_sigE2F9) {
    var var_core_value_sigD689;
    let var_core_value_sig7AE3 = this._context["unit"].getSnapshot(),
      var_core_value_sig1EB3 = Math.min(var_core_value_sigE2F9.startRow, var_core_value_sigE2F9.endRow),
      var_core_value_sigE120 = Math.min(var_core_value_sigE2F9.startColumn, var_core_value_sigE2F9.endColumn);
    return ((var_core_value_sigD689 = var_core_value_sig7AE3.tableSource) == null || (var_core_value_sigD689 = var_core_value_sigD689[var_core_value_sigE2F9.tableId]) == null || (var_core_value_sigD689 = var_core_value_sigD689.tableRows) == null || (var_core_value_sigD689 = var_core_value_sigD689[var_core_value_sig1EB3]) == null || (var_core_value_sigD689 = var_core_value_sigD689.tableCells) == null || (var_core_value_sigD689 = var_core_value_sigD689[var_core_value_sigE120]) == null ? undefined : var_core_value_sigD689.vAlign) ?? r.VerticalAlignmentType["TOP"];
  }
  _getFloatingMenuAnchorRect(var_core_value_sigD6E7) {
    let var_core_value_sig3669 = this._getSelectionRect(var_core_value_sigD6E7),
      var_core_value_sig5CBC = var_core_value_sig3669 ? this._clipRectToViewport(var_core_value_sig3669) : null;
    if (!var_core_value_sig5CBC) return null;
    let var_core_value_sig20BE = this._getFloatingMenuExtraTopGap();
    return {
      bottom: var_core_value_sig5CBC.y + var_core_value_sig5CBC.height - var_core_value_sig20BE,
      left: var_core_value_sig5CBC.x,
      right: var_core_value_sig5CBC.x + var_core_value_sig5CBC.width,
      top: var_core_value_sig5CBC.y - var_core_value_sig20BE
    };
  }
  _getStructuralFloatingMenuAnchorRect(var_core_value_sig6BD0) {
    let var_core_value_sig8C15 = this._getFloatingMenuAnchorRect(var_core_value_sig6BD0);
    if (!var_core_value_sig8C15) return null;
    let var_core_value_sig6DF7 = this._getViewportTableRect().y - this._getFloatingMenuExtraTopGap();
    return {
      bottom: var_core_value_sig6DF7,
      left: var_core_value_sig8C15.left,
      right: var_core_value_sig8C15.right,
      top: var_core_value_sig6DF7
    };
  }
  _getFloatingMenuExtraTopGap() {
    return 20 / this._getCurrentZoom();
  }
  _getSelectionRect(var_core_value_sigB411) {
    if (!this._activeTable) return null;
    let {
        input: var_core_value_sigA81B
      } = this._activeTable,
      var_core_value_sigFE8D = Y(var_core_value_sigA81B.rowIndices, var_core_value_sigB411.startRow),
      var_core_value_sig8595 = Y(var_core_value_sigA81B.rowIndices, var_core_value_sigB411.endRow),
      var_core_value_sigF8DE = Y(var_core_value_sigA81B.columnIndices, var_core_value_sigB411.startColumn),
      var_core_value_sigFE76 = Y(var_core_value_sigA81B.columnIndices, var_core_value_sigB411.endColumn);
    if (var_core_value_sigFE8D < 0 || var_core_value_sig8595 < 0 || var_core_value_sigF8DE < 0 || var_core_value_sigFE76 < 0) return null;
    let var_core_value_sig84C8 = Math.min(var_core_value_sigF8DE, var_core_value_sigFE76),
      var_core_value_sig80C0 = Math.max(var_core_value_sigF8DE, var_core_value_sigFE76),
      var_core_value_sig22B4 = Math.min(var_core_value_sigFE8D, var_core_value_sig8595),
      var_core_value_sigBB37 = Math.max(var_core_value_sigFE8D, var_core_value_sig8595);
    return {
      x: K(var_core_value_sigA81B, J(var_core_value_sigA81B.columnWidths["slice"](0, var_core_value_sig84C8))),
      y: var_core_value_sigA81B.tableRect["y"] + J(var_core_value_sigA81B.rowHeights["slice"](0, var_core_value_sig22B4)),
      width: J(var_core_value_sigA81B.columnWidths["slice"](var_core_value_sig84C8, var_core_value_sig80C0 + 1)),
      height: J(var_core_value_sigA81B.rowHeights["slice"](var_core_value_sig22B4, var_core_value_sigBB37 + 1))
    };
  }
  _getResizeGuideRect(var_core_value_sig0C51) {
    return this._activeTable ? wn(this._activeTable["input"], var_core_value_sig0C51, this._dragPreview ?? null) : null;
  }
  _clipRectToViewport(var_core_value_sigADA4) {
    if (!this._activeTable) return null;
    let var_core_value_sig0E48 = this._getViewportTableRect(),
      var_core_value_sig495B = Math.max(var_core_value_sigADA4.x, var_core_value_sig0E48.x),
      var_core_value_sig310C = Math.min(var_core_value_sigADA4.x + var_core_value_sigADA4.width, var_core_value_sig0E48.x + var_core_value_sig0E48.width),
      var_core_value_sig759E = Math.max(var_core_value_sigADA4.y, var_core_value_sig0E48.y),
      var_core_value_sig6C80 = Math.min(var_core_value_sigADA4.y + var_core_value_sigADA4.height, var_core_value_sig0E48.y + var_core_value_sig0E48.height);
    return var_core_value_sig310C <= var_core_value_sig495B || var_core_value_sig6C80 <= var_core_value_sig759E ? null : {
      height: var_core_value_sig6C80 - var_core_value_sig759E,
      width: var_core_value_sig310C - var_core_value_sig495B,
      x: var_core_value_sig495B,
      y: var_core_value_sig759E
    };
  }
  _getViewportTableRect() {
    return W(this._activeTable["input"]);
  }
  _buildViewportState(var_core_value_sig6B99, var_core_value_sig6ADC, var_core_value_sig41AD, var_core_value_sigDBC2, var_core_value_sig7739) {
    let var_core_value_sig4040 = var_core_value_sigDBC2 || var_core_value_sig6B99.rect["right"] - var_core_value_sig6B99.rect["left"],
      var_core_value_sig1AAA = Number.isFinite(var_core_value_sig6ADC.pageWidth) ? Math.max(0, var_core_value_sig6ADC.pageWidth - var_core_value_sig6ADC.marginLeft - var_core_value_sig6ADC.marginRight) : var_core_value_sig4040,
      var_core_value_sig58DB = Number.isFinite(var_core_value_sig6ADC.pageWidth) ? Math.max(0, var_core_value_sig1AAA - var_core_value_sig41AD.left) : var_core_value_sig4040,
      var_core_value_sig4840 = Math.min(var_core_value_sig4040, var_core_value_sig58DB || var_core_value_sig4040);
    if (this._getDocumentFlavor() !== r.DocumentFlavor["MODERN"] || !Number.isFinite(var_core_value_sig6ADC.pageWidth) || var_core_value_sig6ADC.type === u.DocumentSkeletonPageType["CELL"]) return {
      contentWidth: var_core_value_sigDBC2,
      leadingInsetLeft: 0,
      overflowWidthThreshold: var_core_value_sig1AAA || var_core_value_sig4040,
      trailingInsetRight: 0,
      viewportLeft: var_core_value_sig6B99.rect["left"],
      viewportWidth: var_core_value_sig4840
    };
    let {
        docsLeft: var_core_value_sigB76D
      } = wr(this._context["mainComponent"]),
      var_core_value_sig1015 = 20 / (var_core_value_sig7739 || 1),
      var_core_value_sig6223 = Tr(this._context),
      var_core_value_sigC6B6 = var_core_value_sigB76D + var_core_value_sig1015,
      var_core_value_sig498A = Math.max(0, var_core_value_sig6ADC.pageWidth - var_core_value_sig1015 * 2),
      var_core_value_sigEF45 = var_core_value_sig6223 ? var_core_value_sig6223.left + var_core_value_sig1015 : var_core_value_sigC6B6,
      var_core_value_sig36FE = var_core_value_sig6223 ? Math.max(0, var_core_value_sig6223.width - var_core_value_sig1015 * 2) : var_core_value_sig498A,
      var_core_value_sig3AF5 = var_core_value_sigB76D + var_core_value_sig6ADC.marginLeft;
    return {
      contentWidth: var_core_value_sigDBC2,
      leadingInsetLeft: Math.max(0, var_core_value_sig3AF5 - var_core_value_sigEF45),
      overflowWidthThreshold: var_core_value_sig1AAA || var_core_value_sig4040,
      trailingInsetRight: Math.max(0, var_core_value_sig36FE - var_core_value_sigDBC2),
      viewportLeft: var_core_value_sigEF45,
      viewportWidth: var_core_value_sig36FE
    };
  }
  _getDocumentFlavor() {
    var var_core_value_sig14E6, var_core_value_sig8690;
    return (var_core_value_sig14E6 = this._context["unit"]) == null || (var_core_value_sig8690 = var_core_value_sig14E6.getSnapshot) == null || (var_core_value_sig8690 = var_core_value_sig8690.call(var_core_value_sig14E6)) == null || (var_core_value_sig8690 = var_core_value_sig8690.documentStyle) == null ? undefined : var_core_value_sig8690.documentFlavor;
  }
  _makeDirty() {
    var var_core_value_sigDF29;
    (var_core_value_sigDF29 = this._context["mainComponent"]) == null || var_core_value_sigDF29.makeDirty(true), this._context["scene"].makeDirty();
  }
};
xr = L([I(1, (0, r.Inject)(l.DocSkeletonManagerService)), I(2, (0, r.Inject)(l.DocSelectionManagerService)), I(3, (0, r.Inject)(t.DocEventManagerService)), I(4, (0, r.Inject)(t.DocParagraphMenuService)), I(5, (0, r.Inject)(t.DocCanvasPopManagerService)), I(6, (0, r.Inject)(t.DocFloatMenuService)), I(7, (0, r.Inject)(t.DocSelectionRenderService)), I(8, (0, r.Inject)(e.DocsTableSelectionService)), I(9, (0, r.Inject)(Pt)), I(10, (0, r.Inject)(un)), I(11, (0, r.Inject)(r.LocaleService)), I(12, (0, r.Inject)(r.ThemeService)), I(13, n.IContextMenuService), I(14, r.ICommandService), I(15, (0, r.Inject)(ln)), I(16, r.IPermissionService)], xr);
function Sr(var_core_value_sig8873) {
  let var_core_value_sigB9C5 = var_core_value_sig8873.tableSource["tableColumns"] ?? [];
  if (var_core_value_sigB9C5.length > 0) return var_core_value_sigB9C5.map(var_core_value_sigC0F8 => var_core_value_sigC0F8.size["width"].v);
  let var_core_value_sig511D = var_core_value_sig8873.rows["reduce"]((var_core_value_sig3C75, var_core_value_sig992D) => var_core_value_sig992D.cells["length"] > var_core_value_sig3C75.cells["length"] ? var_core_value_sig992D : var_core_value_sig3C75, var_core_value_sig8873.rows[0]);
  return (var_core_value_sig511D == null ? undefined : var_core_value_sig511D.cells["map"](var_core_value_sigE4E4 => var_core_value_sigE4E4.pageWidth)) ?? [];
}
function Cr(var_core_value_sig1610) {
  var var_core_value_sig23AB;
  let var_core_value_sigA15D = ((var_core_value_sig23AB = var_core_value_sig1610.tableSource) == null ? undefined : var_core_value_sig23AB.tableRows) ?? [],
    var_core_value_sig7E90 = [];
  return var_core_value_sigA15D.forEach((var_core_value_sigA4B0, var_core_value_sig5F50) => {
    var_core_value_sigA4B0.tableCells["forEach"]((var_core_value_sigA6F6, var_core_value_sigCDDA) => {
      let var_core_value_sigE243 = var_core_value_sigA6F6.rowSpan ?? 1,
        var_core_value_sig74A8 = var_core_value_sigA6F6.columnSpan ?? 1;
      (var_core_value_sigE243 > 1 || var_core_value_sig74A8 > 1) && var_core_value_sig7E90.push({
        startRow: var_core_value_sig5F50,
        endRow: var_core_value_sig5F50 + var_core_value_sigE243 - 1,
        startColumn: var_core_value_sigCDDA,
        endColumn: var_core_value_sigCDDA + var_core_value_sig74A8 - 1
      });
    });
  }), var_core_value_sig7E90;
}
function wr(var_core_value_sig03F7) {
  var var_core_value_sig756F;
  let var_core_value_sig0DB11 = var_core_value_sig03F7 == null || (var_core_value_sig756F = var_core_value_sig03F7.getOffsetConfig) == null ? undefined : var_core_value_sig756F.call(var_core_value_sig03F7);
  return {
    docsLeft: (var_core_value_sig0DB11 == null ? undefined : var_core_value_sig0DB11.docsLeft) ?? 0,
    docsTop: (var_core_value_sig0DB11 == null ? undefined : var_core_value_sig0DB11.docsTop) ?? 0,
    pageMarginTop: (var_core_value_sig0DB11 == null ? undefined : var_core_value_sig0DB11.pageMarginTop) ?? 0
  };
}
function Tr(var_core_value_sig4950) {
  var var_core_value_sig4424, var_core_value_sig57E8, var_core_value_sig76B6, var_core_value_sig89BC, var_core_value_sig2191;
  let var_core_value_sig3B2E = var_core_value_sig4950.scene["getAncestorScale"]().scaleX || 1,
    var_core_value_sig5A9A = ((var_core_value_sig4424 = var_core_value_sig4950.scene["getViewport"](fr)) == null ? undefined : var_core_value_sig4424.viewportScrollX) ?? 0,
    var_core_value_sigB524 = (var_core_value_sig57E8 = var_core_value_sig4950.engine) == null || (var_core_value_sig76B6 = var_core_value_sig57E8.getCanvasElement) == null || (var_core_value_sig76B6 = var_core_value_sig76B6.call(var_core_value_sig57E8)) == null || (var_core_value_sig89BC = var_core_value_sig76B6.getBoundingClientRect) == null || (var_core_value_sig89BC = var_core_value_sig89BC.call(var_core_value_sig76B6)) == null ? undefined : var_core_value_sig89BC.width,
    var_core_value_sig8CFB = ((var_core_value_sig2191 = var_core_value_sig4950.mainComponent) == null ? undefined : var_core_value_sig2191.width) ?? var_core_value_sig4950.scene["width"],
    var_core_value_sigB52C = (var_core_value_sigB524 ?? var_core_value_sig8CFB ?? 0) / var_core_value_sig3B2E;
  return !var_core_value_sigB52C || !Number.isFinite(var_core_value_sigB52C) || var_core_value_sigB52C <= 0 ? null : {
    left: var_core_value_sig5A9A,
    width: var_core_value_sigB52C
  };
}
function Er(var_core_value_sigA4B8) {
  return var_core_value_sigA4B8.mainComponent ?? var_core_value_sigA4B8.scene;
}
function Dr(var_core_value_sigFF9C, var_core_value_sig278D, var_core_value_sigC0FE) {
  let var_core_value_sigDD22 = var_core_value_sigC0FE.getViewport(fr);
  if (!var_core_value_sigDD22) return {
    x: var_core_value_sigFF9C,
    y: var_core_value_sig278D
  };
  let var_core_value_sig2D35 = var_core_value_sigDD22.transformVector2SceneCoord(u.Vector2["FromArray"]([var_core_value_sigFF9C, var_core_value_sig278D]));
  return {
    x: var_core_value_sig2D35.x,
    y: var_core_value_sig2D35.y
  };
}
function H(var_core_value_sig7A4B, var_core_value_sigE50A, var_core_value_sigC8AC) {
  let {
      scaleX: var_core_value_sig8E63,
      scaleY: var_core_value_sig300D
    } = var_core_value_sigC8AC.getAncestorScale(),
    var_core_value_sig520B = var_core_value_sigC8AC.getViewport(fr);
  return var_core_value_sig520B ? {
    x: (var_core_value_sig7A4B - var_core_value_sig520B.viewportScrollX) * var_core_value_sig8E63,
    y: (var_core_value_sigE50A - var_core_value_sig520B.viewportScrollY) * var_core_value_sig300D
  } : {
    x: var_core_value_sig7A4B,
    y: var_core_value_sigE50A
  };
}
function U(var_core_value_sigFE26, var_core_value_sig1019) {
  let var_core_value_sig32AB = H(var_core_value_sigFE26.x, var_core_value_sigFE26.y, var_core_value_sig1019),
    var_core_value_sig72BE = H(var_core_value_sigFE26.x + var_core_value_sigFE26.width, var_core_value_sigFE26.y + var_core_value_sigFE26.height, var_core_value_sig1019);
  return {
    height: var_core_value_sig72BE.y - var_core_value_sig32AB.y,
    width: var_core_value_sig72BE.x - var_core_value_sig32AB.x,
    x: var_core_value_sig32AB.x,
    y: var_core_value_sig32AB.y
  };
}
function Or(var_core_value_sig3E4A, var_core_value_sig3171) {
  return {
    ...var_core_value_sig3E4A,
    thumb: U(var_core_value_sig3E4A.thumb, var_core_value_sig3171),
    track: U(var_core_value_sig3E4A.track, var_core_value_sig3171)
  };
}
function kr(var_core_value_sigEBC4) {
  let var_core_value_sig788B = var_core_value_sigEBC4.buttons;
  return typeof var_core_value_sig788B != "number" || (var_core_value_sig788B & 1) == 1;
}
function W(var_core_value_sig9A80) {
  var var_core_value_sig7C69, var_core_value_sig01EF;
  return {
    ...var_core_value_sig9A80.tableRect,
    x: ((var_core_value_sig7C69 = var_core_value_sig9A80.viewport) == null ? undefined : var_core_value_sig7C69.viewportLeft) ?? var_core_value_sig9A80.tableRect["x"],
    width: ((var_core_value_sig01EF = var_core_value_sig9A80.viewport) == null ? undefined : var_core_value_sig01EF.viewportWidth) ?? var_core_value_sig9A80.tableRect["width"]
  };
}
function Ar(var_core_value_sig3603) {
  if (!var_core_value_sig3603.viewport) return var_core_value_sig3603.tableRect["x"];
  let var_core_value_sigC163 = var_core_value_sig3603.viewport["viewportLeft"] ?? var_core_value_sig3603.tableRect["x"];
  return Math.max(var_core_value_sigC163, K(var_core_value_sig3603, 0));
}
function jr(var_core_value_sigF5F3) {
  return var_core_value_sigF5F3.viewport ? K(var_core_value_sigF5F3, 0) : var_core_value_sigF5F3.tableRect["x"];
}
function G(var_core_value_sig5E69) {
  if (!var_core_value_sig5E69.viewport) return var_core_value_sig5E69.tableRect["x"] + var_core_value_sig5E69.tableRect["width"];
  let var_core_value_sig7B39 = (var_core_value_sig5E69.viewport["viewportLeft"] ?? var_core_value_sig5E69.tableRect["x"]) + var_core_value_sig5E69.viewport["viewportWidth"],
    var_core_value_sigDCAB = K(var_core_value_sig5E69, J(var_core_value_sig5E69.columnWidths));
  return Math.min(var_core_value_sig7B39, var_core_value_sigDCAB);
}
function Mr(var_core_value_sigF569, var_core_value_sig2A9F) {
  var var_core_value_sigB14A;
  let var_core_value_sig4401 = var_core_value_sig2A9F - var_core_value_sigF569.tableRect["x"] + (((var_core_value_sigB14A = var_core_value_sigF569.viewport) == null ? undefined : var_core_value_sigB14A.scrollLeft) ?? 0),
    var_core_value_sig4D6A = J(var_core_value_sigF569.columnWidths);
  return var_core_value_sig4401 < 0 || var_core_value_sig4401 > var_core_value_sig4D6A ? null : var_core_value_sig4401;
}
function K(var_core_value_sigEF80, var_core_value_sig526D1) {
  var var_core_value_sigD78B;
  return var_core_value_sigEF80.tableRect["x"] + var_core_value_sig526D1 - (((var_core_value_sigD78B = var_core_value_sigEF80.viewport) == null ? undefined : var_core_value_sigD78B.scrollLeft) ?? 0);
}
function q(var_core_value_sigCB8C, var_core_value_sigD217, var_core_value_sigEB0F, var_core_value_sigDC44, var_core_value_sigDEFC, var_core_value_sigE842) {
  if (var_core_value_sigCB8C.roundRect) {
    var_core_value_sigCB8C.beginPath(), var_core_value_sigCB8C.roundRect(var_core_value_sigD217, var_core_value_sigEB0F, var_core_value_sigDC44, var_core_value_sigDEFC, var_core_value_sigE842);
    return;
  }
  var_core_value_sigCB8C.beginPath(), var_core_value_sigCB8C.rect(var_core_value_sigD217, var_core_value_sigEB0F, var_core_value_sigDC44, var_core_value_sigDEFC);
}
function J(var_core_value_sigA77A) {
  return var_core_value_sigA77A.reduce((var_core_value_sig4494, var_core_value_sigFFAF) => var_core_value_sig4494 + var_core_value_sigFFAF, 0);
}
function Nr(var_core_value_sig0701, var_core_value_sig5DCA) {
  return !var_core_value_sig0701 || var_core_value_sig0701.contentWidth !== var_core_value_sig5DCA.contentWidth || var_core_value_sig0701.leadingInsetLeft !== var_core_value_sig5DCA.leadingInsetLeft || var_core_value_sig0701.overflowWidthThreshold !== var_core_value_sig5DCA.overflowWidthThreshold || var_core_value_sig0701.scrollLeft !== var_core_value_sig5DCA.scrollLeft || var_core_value_sig0701.trailingInsetRight !== var_core_value_sig5DCA.trailingInsetRight || var_core_value_sig0701.viewportLeft !== var_core_value_sig5DCA.viewportLeft || var_core_value_sig0701.viewportWidth !== var_core_value_sig5DCA.viewportWidth;
}
function Y(var_core_value_sigF1AB, var_core_value_sig902F) {
  return var_core_value_sigF1AB ? var_core_value_sigF1AB.findIndex(var_core_value_sig478B => var_core_value_sig478B === var_core_value_sig902F) : var_core_value_sig902F;
}
function X(var_core_value_sig6BD7, var_core_value_sig63E0) {
  let var_core_value_sig1B87 = 0;
  for (let var_core_value_sig1E21 = 0; var_core_value_sig1E21 < var_core_value_sig6BD7.length; var_core_value_sig1E21++) if (var_core_value_sig1B87 += var_core_value_sig6BD7[var_core_value_sig1E21], var_core_value_sig63E0 <= var_core_value_sig1B87) return var_core_value_sig1E21;
  return var_core_value_sig6BD7.length - 1;
}
function Z(var_core_value_sig580B, var_core_value_sig4836, var_core_value_sig4C06) {
  return var_core_value_sig4836 >= var_core_value_sig580B.x && var_core_value_sig4836 <= var_core_value_sig580B.x + var_core_value_sig580B.width && var_core_value_sig4C06 >= var_core_value_sig580B.y && var_core_value_sig4C06 <= var_core_value_sig580B.y + var_core_value_sig580B.height;
}
function Pr(var_core_value_sig4D56) {
  return typeof var_core_value_sig4D56.clientX == "number" && typeof var_core_value_sig4D56.clientY == "number";
}
function Fr(var_core_value_sig7C26) {
  return var_core_value_sig7C26.source === e.DocsTableSelectionSource["Text"] || var_core_value_sig7C26.kind === e.DocsTableSelectionKind["Text"] || var_core_value_sig7C26.kind === e.DocsTableSelectionKind["None"] ? false : var_core_value_sig7C26.startRow >= 0 && var_core_value_sig7C26.endRow >= 0 && var_core_value_sig7C26.startColumn >= 0 && var_core_value_sig7C26.endColumn >= 0;
}
function Ir(var_core_value_sigBC59, var_core_value_sig544E) {
  return !!(var_core_value_sigBC59 != null && var_core_value_sigBC59.tableId) && var_core_value_sigBC59.source !== e.DocsTableSelectionSource["Text"] && var_core_value_sigBC59.tableId === var_core_value_sig544E.tableId && var_core_value_sig544E.row >= var_core_value_sigBC59.startRow && var_core_value_sig544E.row <= var_core_value_sigBC59.endRow && var_core_value_sig544E.column >= var_core_value_sigBC59.startColumn && var_core_value_sig544E.column <= var_core_value_sigBC59.endColumn;
}
function Lr(var_core_value_sigCE8A) {
  return (var_core_value_sigCE8A == null ? undefined : var_core_value_sigCE8A.kind) === "row-header" && var_core_value_sigCE8A.row != null ? {
    axis: "row",
    index: var_core_value_sigCE8A.row
  } : (var_core_value_sigCE8A == null ? undefined : var_core_value_sigCE8A.kind) === "column-header" && var_core_value_sigCE8A.column != null ? {
    axis: "column",
    index: var_core_value_sigCE8A.column
  } : null;
}
function Rr(var_core_value_sig0718, var_core_value_sig1B221, var_core_value_sig8854, var_core_value_sig5275) {
  return !var_core_value_sig0718 || var_core_value_sig0718.tableId !== var_core_value_sig1B221 ? false : var_core_value_sig8854 === "row" ? (var_core_value_sig0718.kind === e.DocsTableSelectionKind["Row"] || var_core_value_sig0718.kind === e.DocsTableSelectionKind["Table"]) && var_core_value_sig5275 >= var_core_value_sig0718.startRow && var_core_value_sig5275 <= var_core_value_sig0718.endRow : (var_core_value_sig0718.kind === e.DocsTableSelectionKind["Column"] || var_core_value_sig0718.kind === e.DocsTableSelectionKind["Table"]) && var_core_value_sig5275 >= var_core_value_sig0718.startColumn && var_core_value_sig5275 <= var_core_value_sig0718.endColumn;
}
function zr(var_core_value_sig4F9D) {
  return var_core_value_sig4F9D.kind === e.DocsTableSelectionKind["Row"] || var_core_value_sig4F9D.kind === e.DocsTableSelectionKind["Column"] || var_core_value_sig4F9D.kind === e.DocsTableSelectionKind["Table"];
}
function Br(var_core_value_sig278E) {
  return var_core_value_sig278E ? [var_core_value_sig278E.left, var_core_value_sig278E.top, var_core_value_sig278E.right, var_core_value_sig278E.bottom].join(":") : "";
}
function Vr(var_core_value_sig2921) {
  return {
    x: var_core_value_sig2921.x,
    y: var_core_value_sig2921.y,
    width: 180,
    height: 72
  };
}
function Hr(var_core_value_sig3959) {
  return {
    x: var_core_value_sig3959.x,
    y: var_core_value_sig3959.y,
    width: 148,
    height: 72
  };
}
function Ur() {
  return [{
    direction: e.DocsTableSortDirection["Asc"],
    labelKey: "docs-table-ui.sortAscending"
  }, {
    direction: e.DocsTableSortDirection["Desc"],
    labelKey: "docs-table-ui.sortDescending"
  }];
}
function Wr() {
  return [e.DocsTableBorderPreset["All"], e.DocsTableBorderPreset["Inner"], e.DocsTableBorderPreset["Outer"], e.DocsTableBorderPreset["Top"], e.DocsTableBorderPreset["Bottom"], e.DocsTableBorderPreset["Left"], e.DocsTableBorderPreset["Right"], e.DocsTableBorderPreset["None"], e.DocsTableBorderPreset["InnerHorizontal"], e.DocsTableBorderPreset["InnerVertical"]].map(var_core_value_sig9DBF => ({
    iconName: fn(var_core_value_sig9DBF),
    preset: var_core_value_sig9DBF
  }));
}
function Gr(var_core_value_sig926F) {
  return {
    "column-header": "docs-table-ui.selectColumn",
    "column-insert-dot": "docs-table-ui.insertColumn",
    "row-header": "docs-table-ui.selectRow",
    "row-insert-dot": "docs-table-ui.insertRow",
    "table-select": "docs-table-ui.selectTable"
  }[var_core_value_sig926F] ?? null;
}
function Kr(var_core_value_sig9414) {
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
    top: "docs-table-ui.borderTop"
  }[var_core_value_sig9414];
}
let qr = class extends r.Disposable {
  constructor(var_core_value_sig36CC) {
    super(), this._commandService = var_core_value_sig36CC, this.disposeWithMe(this._commandService["registerCommand"](_));
  }
};
qr = L([I(0, r.ICommandService)], qr);
let Jr = class extends r.Disposable {
  constructor(var_core_value_sigA568) {
    super(), this._commandService = var_core_value_sigA568, [yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot].forEach(var_core_value_sig21B2 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig21B2)));
  }
};
Jr = L([I(0, r.ICommandService)], Jr);
let Q = null;
const Yr = {
    id: "docs-table-ui.command.select-all",
    type: r.CommandType["COMMAND"],
    handler: async var_core_value_sig32E7 => {
      var var_core_value_sigD8C3, var_core_value_sig3A44;
      let var_core_value_sig0642 = var_core_value_sig32E7.get(r.ICommandService),
        var_core_value_sig786E = var_core_value_sig32E7.get(r.IUniverInstanceService),
        var_core_value_sigFC47 = var_core_value_sig32E7.get(l.DocSelectionManagerService),
        var_core_value_sig48E2 = var_core_value_sig32E7.get(e.DocsTableSelectionService),
        var_core_value_sig2FCA = (var_core_value_sigD8C3 = var_core_value_sig786E.getCurrentUnitOfType) == null ? undefined : var_core_value_sigD8C3.call(var_core_value_sig786E, r.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig04F2 = var_core_value_sig2FCA == null ? undefined : var_core_value_sig2FCA.getSnapshot(),
        var_core_value_sig2CFC = var_core_value_sig2FCA == null ? undefined : var_core_value_sig2FCA.getUnitId();
      if (!var_core_value_sig04F2 || !var_core_value_sig2CFC) return Q = null, Zr(var_core_value_sig0642);
      $r(var_core_value_sigFC47, var_core_value_sig48E2, var_core_value_sig04F2);
      let var_core_value_sig5CEB = var_core_value_sig48E2.getCurrentSelection();
      if (!(var_core_value_sig5CEB != null && var_core_value_sig5CEB.tableId)) return Q = null, Zr(var_core_value_sig0642);
      let var_core_value_sig4935 = (0, e.getTableRangeById)(var_core_value_sig04F2, var_core_value_sig5CEB.tableId);
      if (!var_core_value_sig4935) return Q = null, Zr(var_core_value_sig0642);
      if (var_core_value_sig5CEB.source === e.DocsTableSelectionSource["Structural"]) return (Q == null ? undefined : Q.phase) === "table" && ci(var_core_value_sig2CFC, var_core_value_sig5CEB) ? (Q = null, var_core_value_sig48E2.clearStructuralSelection({
        clearNativeSelection: false
      }), var_core_value_sig48E2.setNativeSelectionSuppressed(false), var_core_value_sig0642.executeCommand(t.DocSelectAllCommand["id"], {
        segmentId: var_core_value_sig5CEB.segmentId,
        wholeDocument: true
      })) : (oi(var_core_value_sig48E2, var_core_value_sig4935, var_core_value_sig5CEB.segmentId), Q = {
        phase: "table",
        rangeKey: si({
          startRow: 0,
          endRow: Math.max(var_core_value_sig4935.rowCount - 1, 0),
          startColumn: 0,
          endColumn: Math.max(var_core_value_sig4935.columnCount - 1, 0)
        }),
        tableId: var_core_value_sig4935.tableId,
        unitId: var_core_value_sig2CFC
      }, true);
      let var_core_value_sig1832 = (var_core_value_sig3A44 = var_core_value_sig4935.rows[var_core_value_sig5CEB.startRow]) == null ? undefined : var_core_value_sig3A44.cells[var_core_value_sig5CEB.startColumn];
      if (!var_core_value_sig1832) return Zr(var_core_value_sig0642);
      let var_core_value_sig79D7 = Qr(var_core_value_sigFC47);
      if (!var_core_value_sig79D7) return ai(var_core_value_sig48E2, var_core_value_sig5CEB.tableId, var_core_value_sig1832, var_core_value_sig5CEB.segmentId, var_core_value_sig2CFC), true;
      let var_core_value_sig5E01 = ei(var_core_value_sig1832, var_core_value_sig5CEB.segmentId);
      if (ri(var_core_value_sig79D7, var_core_value_sig5E01)) return ai(var_core_value_sig48E2, var_core_value_sig5CEB.tableId, var_core_value_sig1832, var_core_value_sig5CEB.segmentId, var_core_value_sig2CFC), true;
      let var_core_value_sigBBE4 = ti(var_core_value_sig04F2, var_core_value_sig1832, var_core_value_sig5CEB.segmentId),
        var_core_value_sig96B3 = ni(var_core_value_sigBBE4, var_core_value_sig79D7.startOffset ?? var_core_value_sig5E01.startOffset);
      return var_core_value_sig96B3 ? ri(var_core_value_sig79D7, var_core_value_sig96B3) ? (var_core_value_sigBBE4.length <= 1 ? ai(var_core_value_sig48E2, var_core_value_sig5CEB.tableId, var_core_value_sig1832, var_core_value_sig5CEB.segmentId, var_core_value_sig2CFC) : (Q = null, ii(var_core_value_sigFC47, [var_core_value_sig5E01], var_core_value_sig2CFC)), true) : (Q = null, ii(var_core_value_sigFC47, [var_core_value_sig96B3], var_core_value_sig2CFC), true) : (ii(var_core_value_sigFC47, [var_core_value_sig5E01], var_core_value_sig2CFC), true);
    }
  },
  Xr = {
    id: Yr.id,
    binding: n.KeyCode["A"] | n.MetaKeys["CTRL_COMMAND"],
    priority: 100,
    preconditions: var_core_value_sig9CF2 => var_core_value_sig9CF2.getContextValue(r.FOCUSING_UNIVER_EDITOR) && (var_core_value_sig9CF2.getContextValue(r.FOCUSING_DOC) || var_core_value_sig9CF2.getContextValue(r.EDITOR_ACTIVATED))
  };
function Zr(var_core_value_sig666D) {
  return var_core_value_sig666D.executeCommand(t.DocSelectAllCommand["id"]);
}
function Qr(var_core_value_sigBD53) {
  var var_core_value_sigD11F, var_core_value_sig62231;
  let var_core_value_sig7653 = (var_core_value_sigD11F = var_core_value_sigBD53.getDocRanges) == null ? undefined : var_core_value_sigD11F.call(var_core_value_sigBD53);
  return (var_core_value_sig7653 == null ? undefined : var_core_value_sig7653.find(var_core_value_sigD22D => var_core_value_sigD22D.isActive)) ?? ((var_core_value_sig62231 = var_core_value_sigBD53.getActiveTextRange) == null ? undefined : var_core_value_sig62231.call(var_core_value_sigBD53)) ?? (var_core_value_sig7653 == null ? undefined : var_core_value_sig7653[0]) ?? null;
}
function $r(var_core_value_sigF65B, var_core_value_sig4A94, var_core_value_sigEB59) {
  var var_core_value_sigD9B0;
  let var_core_value_sigB7D6 = var_core_value_sig4A94.getStructuralSelection();
  if (!(var_core_value_sigB7D6 != null && var_core_value_sigB7D6.tableId)) return;
  let var_core_value_sigCF1F = Qr(var_core_value_sigF65B),
    var_core_value_sig4DD1 = var_core_value_sigCF1F == null ? undefined : var_core_value_sigCF1F.startOffset;
  var_core_value_sig4DD1 != null && (((var_core_value_sigD9B0 = var_core_value_sigEB59.body) == null || (var_core_value_sigD9B0 = var_core_value_sigD9B0.tables) == null ? undefined : var_core_value_sigD9B0.some(var_core_value_sig85D5 => var_core_value_sig4DD1 > var_core_value_sig85D5.startIndex && var_core_value_sig4DD1 < var_core_value_sig85D5.endIndex)) ?? false) && (Q = null, var_core_value_sig4A94.setNativeSelectionSuppressed(false), var_core_value_sig4A94.clearStructuralSelection({
    clearNativeSelection: false
  }));
}
function ei(var_core_value_sig1293, var_core_value_sigC999) {
  let var_core_value_sig9D8F = var_core_value_sig1293.startOffset + 1,
    var_core_value_sig8270 = Math.max(var_core_value_sig9D8F, var_core_value_sig1293.endOffset - 1);
  return {
    collapsed: var_core_value_sig9D8F === var_core_value_sig8270,
    endOffset: var_core_value_sig8270,
    rangeType: r.DOC_RANGE_TYPE["TEXT"],
    segmentId: var_core_value_sigC999,
    startOffset: var_core_value_sig9D8F
  };
}
function ti(var_core_value_sig95D9, var_core_value_sig0E92, var_core_value_sig45CD) {
  var var_core_value_sigAD84;
  let var_core_value_sigD513 = ((var_core_value_sigAD84 = var_core_value_sig95D9.body) == null ? undefined : var_core_value_sigAD84.dataStream) ?? "",
    var_core_value_sig36BD = var_core_value_sig0E92.startOffset + 1,
    var_core_value_sig0413 = Math.max(var_core_value_sig36BD, var_core_value_sig0E92.endOffset - 1),
    var_core_value_sig15B6 = [],
    var_core_value_sigFEBF = var_core_value_sig36BD;
  for (let var_core_value_sig5D2E = var_core_value_sig36BD; var_core_value_sig5D2E <= var_core_value_sig0413; var_core_value_sig5D2E++) var_core_value_sigD513[var_core_value_sig5D2E] === "\x0d" && (var_core_value_sig15B6.push({
    collapsed: var_core_value_sigFEBF === var_core_value_sig5D2E,
    endOffset: var_core_value_sig5D2E,
    rangeType: r.DOC_RANGE_TYPE["TEXT"],
    segmentId: var_core_value_sig45CD,
    startOffset: var_core_value_sigFEBF
  }), var_core_value_sigFEBF = var_core_value_sig5D2E + 1, var_core_value_sigD513[var_core_value_sigFEBF] === "\x0a" && (var_core_value_sigFEBF += 1));
  return var_core_value_sig15B6.length || var_core_value_sig15B6.push(ei(var_core_value_sig0E92, var_core_value_sig45CD)), var_core_value_sig15B6;
}
function ni(var_core_value_sigBBA2, var_core_value_sigC9A1) {
  return var_core_value_sigBBA2.find(var_core_value_sig7221 => var_core_value_sig7221.startOffset == null || var_core_value_sig7221.endOffset == null ? false : var_core_value_sigC9A1 >= var_core_value_sig7221.startOffset && var_core_value_sigC9A1 <= var_core_value_sig7221.endOffset) ?? var_core_value_sigBBA2[0] ?? null;
}
function ri(var_core_value_sigE469, var_core_value_sigA499) {
  return var_core_value_sigE469.startOffset === var_core_value_sigA499.startOffset && var_core_value_sigE469.endOffset === var_core_value_sigA499.endOffset;
}
function ii(var_core_value_sig4CC3, var_core_value_sig70B3, var_core_value_sig422B) {
  var var_core_value_sig1038;
  (var_core_value_sig1038 = var_core_value_sig4CC3.replaceDocRanges) == null || var_core_value_sig1038.call(var_core_value_sig4CC3, var_core_value_sig70B3, {
    subUnitId: var_core_value_sig422B,
    unitId: var_core_value_sig422B
  }, false);
}
function ai(var_core_value_sigC3E6, var_core_value_sig3710, var_core_value_sig9726, var_core_value_sigFC9B, var_core_value_sig943E) {
  var_core_value_sigC3E6.setNativeSelectionSuppressed(true), var_core_value_sigC3E6.setStructuralSelection({
    kind: e.DocsTableSelectionKind["Cell"],
    tableId: var_core_value_sig3710,
    segmentId: var_core_value_sigFC9B,
    startOffset: var_core_value_sig9726.startOffset,
    endOffset: var_core_value_sig9726.endOffset,
    startRow: var_core_value_sig9726.row,
    endRow: var_core_value_sig9726.row,
    startColumn: var_core_value_sig9726.column,
    endColumn: var_core_value_sig9726.column
  }), Q = {
    phase: "cell",
    rangeKey: si({
      startRow: var_core_value_sig9726.row,
      endRow: var_core_value_sig9726.row,
      startColumn: var_core_value_sig9726.column,
      endColumn: var_core_value_sig9726.column
    }),
    tableId: var_core_value_sig3710,
    unitId: var_core_value_sig943E
  };
}
function oi(var_core_value_sigEF36, var_core_value_sigD4B1, var_core_value_sigE5D8) {
  var_core_value_sigEF36.setNativeSelectionSuppressed(true), var_core_value_sigEF36.setStructuralSelection({
    kind: e.DocsTableSelectionKind["Table"],
    tableId: var_core_value_sigD4B1.tableId,
    segmentId: var_core_value_sigE5D8,
    startRow: 0,
    endRow: Math.max(var_core_value_sigD4B1.rowCount - 1, 0),
    startColumn: 0,
    endColumn: Math.max(var_core_value_sigD4B1.columnCount - 1, 0)
  });
}
function si(var_core_value_sig74AF) {
  return [Math.min(var_core_value_sig74AF.startRow, var_core_value_sig74AF.endRow), Math.max(var_core_value_sig74AF.startRow, var_core_value_sig74AF.endRow), Math.min(var_core_value_sig74AF.startColumn, var_core_value_sig74AF.endColumn), Math.max(var_core_value_sig74AF.startColumn, var_core_value_sig74AF.endColumn)].join(":");
}
function ci(var_core_value_sigBABA, var_core_value_sigA723) {
  return (Q == null ? undefined : Q.unitId) === var_core_value_sigBABA && Q.tableId === var_core_value_sigA723.tableId && Q.rangeKey === si(var_core_value_sigA723);
}
let li = class extends r.Disposable {
  constructor(var_core_value_sig0A5A, var_core_value_sigE6D6) {
    super(), this._commandService = var_core_value_sig0A5A, this._shortcutService = var_core_value_sigE6D6, this.disposeWithMe(this._commandService["registerCommand"](Yr)), this.disposeWithMe(this._shortcutService["registerShortcut"](Xr));
  }
};
li = L([I(0, r.ICommandService), I(1, n.IShortcutService)], li);
let ui = class extends r.Disposable {
  constructor(var_core_value_sig8507, var_core_value_sig8A7F) {
    super(), this._menuManagerService = var_core_value_sig8507, this._selectionService = var_core_value_sig8A7F, this._menuManagerService["mergeMenu"](Xe), this._menuManagerService["appendRootMenu"](Ye), this.disposeWithMe(this._selectionService["selectionChange$"].subscribe(var_core_value_sigDE08 => {
      var_core_value_sigDE08 != null && var_core_value_sigDE08.tableId && this._menuManagerService["mergeMenu"](Xe), this._menuManagerService["appendRootMenu"]({});
    }));
  }
};
ui = L([I(0, n.IMenuManagerService), I(1, (0, r.Inject)(e.DocsTableSelectionService))], ui);
var di = class extends r.Disposable {
  constructor(...var_core_value_sig9E81) {
    super(...var_core_value_sig9E81), N(this, "_triggers", []), N(this, "_triggerChange$", new o.Subject()), N(this, "triggerChange$", this._triggerChange$["asObservable"]());
  }
  updateTriggers(var_core_value_sig8295) {
    this._triggers = var_core_value_sig8295 ? z(var_core_value_sig8295) : [], this._triggerChange$["next"](this._triggers);
  }
  getTriggers() {
    return this._triggers;
  }
  hitTest(var_core_value_sigA975, var_core_value_sig1263) {
    return nr(this._triggers, var_core_value_sigA975, var_core_value_sig1263);
  }
  dispose() {
    super.dispose(), this._triggerChange$["complete"]();
  }
};
let $ = class extends r.Plugin {
  constructor(var_core_value_sig457C = $e, var_core_value_sigA4E6, var_core_value_sig934F, var_core_value_sig74A7) {
    super(), this._config = var_core_value_sig457C, this._injector = var_core_value_sigA4E6, this._renderManagerService = var_core_value_sig934F, this._configService = var_core_value_sig74A7;
    let {
      menu: var_core_value_sig3685,
      ...var_core_value_sigC621
    } = (0, r.merge)({}, $e, this._config);
    var_core_value_sig3685 && this._configService["setConfig"]("menu", var_core_value_sig3685, {
      merge: true
    }), this._configService["setConfig"]("docs-table-ui.config", var_core_value_sigC621);
  }
  onStarting() {
    this._injector["add"]([cn]), this._injector["get"](cn), this._injector["add"]([Pt]), this._injector["add"]([ln]), this._injector["add"]([Jr]), this._injector["add"]([li]), this._injector["add"]([un]), this._injector["add"]([ui]), this._injector["add"]([qr]), this._injector["add"]([di]), this._injector["get"](qr), this._injector["get"](Jr), this._injector["get"](li), this._injector["get"](di);
  }
  onRendered() {
    this._injector["get"](ui), this.disposeWithMe(this._renderManagerService["registerRenderModule"](r.UniverInstanceType["UNIVER_DOC"], [xr]));
  }
};
N($, "pluginName", e.DOCS_TABLE_PLUGIN + "_UI_PLUGIN"), N($, "packageName", Ze), N($, "version", Qe), N($, "type", r.UniverInstanceType["UNIVER_DOC"]), $ = L([(0, r.DependentOn)(c.UniverLicensePlugin, l.UniverDocsPlugin, u.UniverRenderEnginePlugin, t.UniverDocsUIPlugin, e.UniverDocsTablePlugin), I(1, (0, r.Inject)(r.Injector)), I(2, u.IRenderManagerService), I(3, r.IConfigService)], $), exports.DocsTablePassiveWheelService = ln, exports.DocsTableUIMenuSchema = Xe, Object.defineProperty(exports, "UniverDocsTableUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
