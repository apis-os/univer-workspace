Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
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
    handler: (var_core_value_sigF39A, var_core_value_sigF79C) => m(var_core_value_sigF39A, (var_core_value_sigF79C == null ? undefined : var_core_value_sigF79C.value) === t.DimensionOutlineAxis["ROW"] || (var_core_value_sigF79C == null ? undefined : var_core_value_sigF79C.value) === t.DimensionOutlineAxis["COLUMN"] ? var_core_value_sigF79C.value : undefined)
  },
  f = {
    id: "sheet.command.outline-selected-rows",
    type: n.CommandType["COMMAND"],
    handler: var_core_value_sig2E54 => m(var_core_value_sig2E54, t.DimensionOutlineAxis["ROW"])
  },
  p = {
    id: "sheet.command.outline-selected-columns",
    type: n.CommandType["COMMAND"],
    handler: var_core_value_sig7658 => m(var_core_value_sig7658, t.DimensionOutlineAxis["COLUMN"])
  };
function m(var_core_value_sigDCF5, var_core_value_sigC786) {
  let var_core_value_sigC0D9 = h(var_core_value_sigDCF5.get(r.SheetsSelectionsService), var_core_value_sigC786);
  if (!var_core_value_sigC0D9) return false;
  let var_core_value_sigF051 = (0, r.getSheetCommandTarget)(var_core_value_sigDCF5.get(n.IUniverInstanceService));
  return var_core_value_sigF051 ? var_core_value_sigDCF5.get(n.ICommandService).executeCommand(t.AddDimensionOutlineCommand["id"], {
    unitId: var_core_value_sigF051.unitId,
    subUnitId: var_core_value_sigF051.subUnitId,
    axis: var_core_value_sigC0D9.axis,
    start: var_core_value_sigC0D9.start,
    end: var_core_value_sigC0D9.end
  }) : false;
}
function h(var_core_value_sig5825, var_core_value_sig4EB7) {
  let var_core_value_sig73AF = var_core_value_sig5825.getCurrentSelections();
  if (!var_core_value_sig73AF || var_core_value_sig73AF.length !== 1) return null;
  let var_core_value_sig548A = var_core_value_sig73AF[0].range;
  return var_core_value_sig4EB7 === t.DimensionOutlineAxis["ROW"] ? {
    axis: var_core_value_sig4EB7,
    start: var_core_value_sig548A.startRow,
    end: var_core_value_sig548A.endRow
  } : var_core_value_sig4EB7 === t.DimensionOutlineAxis["COLUMN"] ? {
    axis: var_core_value_sig4EB7,
    start: var_core_value_sig548A.startColumn,
    end: var_core_value_sig548A.endColumn
  } : var_core_value_sig548A.rangeType === n.RANGE_TYPE["ROW"] ? {
    axis: t.DimensionOutlineAxis["ROW"],
    start: var_core_value_sig548A.startRow,
    end: var_core_value_sig548A.endRow
  } : var_core_value_sig548A.rangeType === n.RANGE_TYPE["COLUMN"] ? {
    axis: t.DimensionOutlineAxis["COLUMN"],
    start: var_core_value_sig548A.startColumn,
    end: var_core_value_sig548A.endColumn
  } : null;
}
const g = {
    id: "sheet.command.clear-selected-dimension-outlines",
    type: n.CommandType["COMMAND"],
    handler: (var_core_value_sigE026, var_core_value_sig339E) => y(var_core_value_sigE026, (var_core_value_sig339E == null ? undefined : var_core_value_sig339E.value) === t.DimensionOutlineAxis["ROW"] || (var_core_value_sig339E == null ? undefined : var_core_value_sig339E.value) === t.DimensionOutlineAxis["COLUMN"] ? var_core_value_sig339E.value : undefined)
  },
  _ = {
    id: "sheet.command.clear-selected-rows-outlines",
    type: n.CommandType["COMMAND"],
    handler: var_core_value_sig7550 => y(var_core_value_sig7550, t.DimensionOutlineAxis["ROW"])
  },
  v = {
    id: "sheet.command.clear-selected-columns-outlines",
    type: n.CommandType["COMMAND"],
    handler: var_core_value_sig2983 => y(var_core_value_sig2983, t.DimensionOutlineAxis["COLUMN"])
  };
function y(var_core_value_sigE1B0, var_core_value_sigD4FF) {
  let var_core_value_sig1E5B = h(var_core_value_sigE1B0.get(r.SheetsSelectionsService), var_core_value_sigD4FF);
  if (!var_core_value_sig1E5B) return false;
  let var_core_value_sigB680 = (0, r.getSheetCommandTarget)(var_core_value_sigE1B0.get(n.IUniverInstanceService));
  return var_core_value_sigB680 ? var_core_value_sigE1B0.get(n.ICommandService).executeCommand(t.ClearDimensionOutlinesCommand["id"], {
    unitId: var_core_value_sigB680.unitId,
    subUnitId: var_core_value_sigB680.subUnitId,
    axis: var_core_value_sig1E5B.axis,
    start: var_core_value_sig1E5B.start,
    end: var_core_value_sig1E5B.end
  }) : false;
}
const b = "sheet-outline-action-dialog";
function ee(var_core_value_sig1F64) {
  let {
      rowLabel: var_core_value_sigDD1C,
      columnLabel: var_core_value_sig2C39,
      onSelect: var_core_value_sigB7D1,
      onCancel: var_core_value_sig64F0
    } = var_core_value_sig1F64,
    var_core_value_sig85B1 = (0, e.useDependency)(n.LocaleService);
  return (0, o.jsxs)("div", {
    className: "univer-grid univer-gap-4",
    children: [(0, o.jsxs)("div", {
      className: "univer-grid univer-gap-2",
      children: [(0, o.jsx)(a.Button, {
        onClick: () => var_core_value_sigB7D1(t.DimensionOutlineAxis["ROW"]),
        children: var_core_value_sigDD1C
      }), (0, o.jsx)(a.Button, {
        onClick: () => var_core_value_sigB7D1(t.DimensionOutlineAxis["COLUMN"]),
        children: var_core_value_sig2C39
      })]
    }), (0, o.jsx)("footer", {
      className: "univer-flex univer-justify-end",
      children: (0, o.jsx)(a.Button, {
        onClick: var_core_value_sig64F0,
        children: var_core_value_sig85B1.t("sheets-outline-ui.cancel")
      })
    })]
  });
}
const x = {
    id: "sheet.command.outline-selected-dimension-shortcut",
    type: n.CommandType["COMMAND"],
    handler: var_core_value_sig3141 => re(var_core_value_sig3141, "group")
  },
  S = {
    id: "sheet.command.clear-selected-dimension-outlines-shortcut",
    type: n.CommandType["COMMAND"],
    handler: var_core_value_sig2162 => re(var_core_value_sig2162, "ungroup")
  },
  te = {
    group: {
      [t.DimensionOutlineAxis["ROW"]]: f.id,
      [t.DimensionOutlineAxis["COLUMN"]]: p.id
    },
    ungroup: {
      [t.DimensionOutlineAxis["ROW"]]: _.id,
      [t.DimensionOutlineAxis["COLUMN"]]: v.id
    }
  },
  ne = {
    group: {
      [t.DimensionOutlineAxis["ROW"]]: "sheets-outline-ui.groupRows",
      [t.DimensionOutlineAxis["COLUMN"]]: "sheets-outline-ui.groupColumns"
    },
    ungroup: {
      [t.DimensionOutlineAxis["ROW"]]: "sheets-outline-ui.ungroupRows",
      [t.DimensionOutlineAxis["COLUMN"]]: "sheets-outline-ui.ungroupColumns"
    }
  };
function re(var_core_value_sig2EAD, var_core_value_sig6774) {
  let var_core_value_sig340D = var_core_value_sig2EAD.get(r.SheetsSelectionsService).getCurrentSelections();
  if (!var_core_value_sig340D || var_core_value_sig340D.length !== 1) return false;
  let var_core_value_sig82D4 = (0, r.getSheetCommandTarget)(var_core_value_sig2EAD.get(n.IUniverInstanceService));
  if (!var_core_value_sig82D4 || !(0, t.hasDimensionOutlineViewPermission)(var_core_value_sig2EAD, var_core_value_sig82D4.unitId, var_core_value_sig82D4.subUnitId)) return false;
  let var_core_value_sigBDE4 = var_core_value_sig340D[0].range;
  return var_core_value_sigBDE4.rangeType === n.RANGE_TYPE["ROW"] ? C(var_core_value_sig2EAD, var_core_value_sig6774, t.DimensionOutlineAxis["ROW"]) : var_core_value_sigBDE4.rangeType === n.RANGE_TYPE["COLUMN"] ? C(var_core_value_sig2EAD, var_core_value_sig6774, t.DimensionOutlineAxis["COLUMN"]) : ie(var_core_value_sig2EAD, var_core_value_sig6774);
}
async function ie(var_core_value_sig7DF1, var_core_value_sigDC86) {
  let var_core_value_sig0B0C = await ae(var_core_value_sig7DF1, var_core_value_sigDC86);
  return var_core_value_sig0B0C ? C(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C) : false;
}
function C(var_core_value_sigA39E, var_core_value_sigBBEE, var_core_value_sig011D) {
  return !!var_core_value_sigA39E.get(n.ICommandService).executeCommand(te[var_core_value_sigBBEE][var_core_value_sig011D], {
    value: var_core_value_sig011D
  });
}
function ae(var_core_value_sig6167, var_core_value_sig65A1) {
  let var_core_value_sig7F19 = var_core_value_sig6167.get(e.IDialogService),
    var_core_value_sig7827 = var_core_value_sig6167.has(e.ILayoutService) ? var_core_value_sig6167.get(e.ILayoutService) : null,
    var_core_value_sig652C = var_core_value_sig6167.get(n.LocaleService),
    var_core_value_sig7E32 = var_core_value_sig6167.get(r.SheetsSelectionsService),
    var_core_value_sig4C07 = h(var_core_value_sig7E32, t.DimensionOutlineAxis["ROW"]),
    var_core_value_sig79AB = h(var_core_value_sig7E32, t.DimensionOutlineAxis["COLUMN"]);
  return !var_core_value_sig4C07 || !var_core_value_sig79AB ? Promise.resolve(null) : new Promise(var_core_value_sig9C9F => {
    let var_core_value_sigFDEA = false,
      var_core_value_sig86D0 = null,
      var_core_value_sig4CD2 = var_core_value_sig429F => {
        var_core_value_sigFDEA || (var_core_value_sigFDEA = true, var_core_value_sig86D0 == null || var_core_value_sig86D0.dispose(), oe(var_core_value_sig7827), var_core_value_sig9C9F(var_core_value_sig429F));
      };
    var_core_value_sig86D0 = var_core_value_sig7F19.open({
      id: b,
      title: {
        title: var_core_value_sig652C.t(var_core_value_sig65A1 === "group" ? "sheets-outline-ui.group" : "sheets-outline-ui.ungroup")
      },
      width: 360,
      children: {
        label: {
          name: b,
          props: {
            rowLabel: w(var_core_value_sig652C, var_core_value_sig65A1, t.DimensionOutlineAxis["ROW"], var_core_value_sig4C07.start, var_core_value_sig4C07.end),
            columnLabel: w(var_core_value_sig652C, var_core_value_sig65A1, t.DimensionOutlineAxis["COLUMN"], var_core_value_sig79AB.start, var_core_value_sig79AB.end),
            onSelect: var_core_value_sigF62A => var_core_value_sig4CD2(var_core_value_sigF62A),
            onCancel: () => var_core_value_sig4CD2(null)
          }
        }
      },
      onClose: () => var_core_value_sig4CD2(null)
    }), var_core_value_sigFDEA && var_core_value_sig86D0.dispose();
  });
}
function oe(var_core_value_sig8E74) {
  var_core_value_sig8E74 && (queueMicrotask(() => var_core_value_sig8E74.focus()), setTimeout(() => var_core_value_sig8E74.focus(), 0));
}
function w(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5, var_core_value_sigACC6) {
  let var_core_value_sig1614 = ne[var_core_value_sig841D][var_core_value_sig90CB];
  return var_core_value_sig90CB === t.DimensionOutlineAxis["ROW"] ? var_core_value_sig104C.t(var_core_value_sig1614, "" + (var_core_value_sigBDF5 + 1), "" + (var_core_value_sigACC6 + 1)) : var_core_value_sig104C.t(var_core_value_sig1614, n.Tools["chatAtABC"](var_core_value_sigBDF5), n.Tools["chatAtABC"](var_core_value_sigACC6));
}
const T = "sheet.toolbar.dimension-outline.group";
function se(var_core_value_sig85C3) {
  return {
    id: T,
    type: e.MenuItemType["SELECTOR"],
    icon: "GroupingDoubleIcon",
    tooltip: "sheets-outline-ui.group",
    selections: ce(var_core_value_sig85C3),
    hidden$: pe(var_core_value_sig85C3),
    disabled$: me(var_core_value_sig85C3)
  };
}
function ce(var_core_value_sigB996) {
  return O(var_core_value_sigB996).pipe((0, i.map)(() => ve(var_core_value_sigB996)));
}
const E = "sheet.contextMenu.dimension-outline";
function le(var_core_value_sig4BBA) {
  return de(var_core_value_sig4BBA, t.DimensionOutlineAxis["ROW"]);
}
function ue(var_core_value_sig6201) {
  return de(var_core_value_sig6201, t.DimensionOutlineAxis["COLUMN"]);
}
function de(var_core_value_sig5151, var_core_value_sigB542) {
  return {
    id: E,
    type: e.MenuItemType["SELECTOR"],
    icon: "GroupingDoubleIcon",
    title: "sheets-outline-ui.group",
    tooltip: "sheets-outline-ui.group",
    selections: fe(var_core_value_sig5151, var_core_value_sigB542),
    hidden$: pe(var_core_value_sig5151),
    disabled$: me(var_core_value_sig5151)
  };
}
function fe(var_core_value_sigBB6C, var_core_value_sigE2BF) {
  return O(var_core_value_sigBB6C).pipe((0, i.map)(() => ye(var_core_value_sigBB6C, [var_core_value_sigE2BF])));
}
function pe(var_core_value_sigB8C7) {
  return (0, i.combineLatest)([(0, e.getMenuHiddenObservable)(var_core_value_sigB8C7, n.UniverInstanceType["UNIVER_SHEET"]), O(var_core_value_sigB8C7)]).pipe((0, i.map)(([var_core_value_sig48CA]) => var_core_value_sig48CA || !he(var_core_value_sigB8C7)));
}
function me(var_core_value_sigA56E) {
  return O(var_core_value_sigA56E).pipe((0, i.switchMap)(() => {
    let var_core_value_sig50AF = (0, r.getSheetCommandTarget)(var_core_value_sigA56E.get(n.IUniverInstanceService));
    return var_core_value_sig50AF ? (0, t.getDimensionOutlineViewPermission$)(var_core_value_sigA56E, var_core_value_sig50AF.unitId, var_core_value_sig50AF.subUnitId).pipe((0, i.map)(var_core_value_sig8178 => !var_core_value_sig8178)) : (0, i.of)(true);
  }));
}
function he(var_core_value_sig1998) {
  return D(var_core_value_sig1998) != null;
}
function D(var_core_value_sigFF19) {
  let var_core_value_sig43B8 = var_core_value_sigFF19.get(r.SheetsSelectionsService).getCurrentSelections();
  return (var_core_value_sig43B8 == null ? undefined : var_core_value_sig43B8.length) === 1 ? var_core_value_sig43B8[0].range : null;
}
function O(var_core_value_sigD98F) {
  let var_core_value_sig66C0 = var_core_value_sigD98F.get(r.SheetsSelectionsService),
    var_core_value_sig9D15 = var_core_value_sigD98F.get(t.SheetsOutlineModel);
  return var_core_value_sigD98F.get(n.IUniverInstanceService).getCurrentTypeOfUnit$(n.UniverInstanceType["UNIVER_SHEET"]).pipe((0, i.switchMap)(var_core_value_sigA942 => var_core_value_sigA942 ? (0, i.merge)(var_core_value_sigA942.activeSheet$, var_core_value_sig66C0.selectionChanged$, var_core_value_sig9D15.change$).pipe((0, i.startWith)(null)) : (0, i.of)(null)));
}
const ge = {
    [t.DimensionOutlineAxis["ROW"]]: f.id,
    [t.DimensionOutlineAxis["COLUMN"]]: p.id
  },
  _e = {
    [t.DimensionOutlineAxis["ROW"]]: _.id,
    [t.DimensionOutlineAxis["COLUMN"]]: v.id
  };
function ve(var_core_value_sigB785) {
  return he(var_core_value_sigB785) ? [{
    id: x.id,
    commandId: x.id,
    value: "group",
    label: var_core_value_sigB785.get(n.LocaleService).t("sheets-outline-ui.group"),
    disabled: Te(var_core_value_sigB785)
  }, {
    id: S.id,
    commandId: S.id,
    value: "ungroup",
    label: var_core_value_sigB785.get(n.LocaleService).t("sheets-outline-ui.ungroup"),
    disabled: Ee(var_core_value_sigB785)
  }] : [];
}
function ye(var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7) {
  let var_core_value_sig866F = var_core_value_sigC0E3.map(var_core_value_sigA621 => k(ge[var_core_value_sigA621], var_core_value_sigA621, Se(var_core_value_sig130F, var_core_value_sigA621), j(var_core_value_sig130F, var_core_value_sigA621))),
    var_core_value_sigDE3D = var_core_value_sigC0E3.map(var_core_value_sigBBFF => k(_e[var_core_value_sigBBFF], var_core_value_sigBBFF, Ce(var_core_value_sig130F, var_core_value_sigBBFF), M(var_core_value_sig130F, var_core_value_sigBBFF)));
  return var_core_value_sig52F7 === "group" ? var_core_value_sig866F : var_core_value_sig52F7 === "ungroup" ? var_core_value_sigDE3D : [...var_core_value_sig866F, ...var_core_value_sigDE3D];
}
function k(var_core_value_sigF175, var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0) {
  return {
    id: var_core_value_sigF175,
    commandId: var_core_value_sigF175,
    value: var_core_value_sig6A18,
    disabled: var_core_value_sig49B0,
    label: var_core_value_sig4E3D
  };
}
const be = {
    [t.DimensionOutlineAxis["ROW"]]: "sheets-outline-ui.groupRows",
    [t.DimensionOutlineAxis["COLUMN"]]: "sheets-outline-ui.groupColumns"
  },
  xe = {
    [t.DimensionOutlineAxis["ROW"]]: "sheets-outline-ui.ungroupRows",
    [t.DimensionOutlineAxis["COLUMN"]]: "sheets-outline-ui.ungroupColumns"
  };
function Se(var_core_value_sig2547, var_core_value_sigBCA9) {
  return A(var_core_value_sig2547, be, var_core_value_sigBCA9);
}
function Ce(var_core_value_sig4CDF, var_core_value_sig3F79) {
  return A(var_core_value_sig4CDF, xe, var_core_value_sig3F79);
}
function A(var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B) {
  let var_core_value_sig780B = h(var_core_value_sig880E.get(r.SheetsSelectionsService), var_core_value_sigB57B);
  return var_core_value_sig780B ? var_core_value_sig880E.get(n.LocaleService).t(var_core_value_sigC9ED[var_core_value_sig780B.axis], ...we(var_core_value_sig780B)) : "";
}
function we(var_core_value_sig7D1B) {
  return var_core_value_sig7D1B.axis === t.DimensionOutlineAxis["ROW"] ? ["" + (var_core_value_sig7D1B.start + 1), "" + (var_core_value_sig7D1B.end + 1)] : [n.Tools["chatAtABC"](var_core_value_sig7D1B.start), n.Tools["chatAtABC"](var_core_value_sig7D1B.end)];
}
function j(var_core_value_sig7BE0, var_core_value_sig7D40) {
  let var_core_value_sig6C7E = h(var_core_value_sig7BE0.get(r.SheetsSelectionsService), var_core_value_sig7D40),
    var_core_value_sig68BE = (0, r.getSheetCommandTarget)(var_core_value_sig7BE0.get(n.IUniverInstanceService));
  return !var_core_value_sig6C7E || !var_core_value_sig68BE || !(0, t.hasDimensionOutlineViewPermission)(var_core_value_sig7BE0, var_core_value_sig68BE.unitId, var_core_value_sig68BE.subUnitId) || !(0, t.canAddDimensionOutline)(var_core_value_sig7BE0.get(t.SheetsOutlineModel).getOutlines(var_core_value_sig68BE.unitId, var_core_value_sig68BE.subUnitId), {
    id: "__menu_check__",
    unitId: var_core_value_sig68BE.unitId,
    subUnitId: var_core_value_sig68BE.subUnitId,
    axis: var_core_value_sig6C7E.axis,
    start: var_core_value_sig6C7E.start,
    end: var_core_value_sig6C7E.end,
    collapsed: false
  }).valid;
}
function M(var_core_value_sig04C6, var_core_value_sigCA05) {
  let var_core_value_sig2F2B = h(var_core_value_sig04C6.get(r.SheetsSelectionsService), var_core_value_sigCA05),
    var_core_value_sig70AF = (0, r.getSheetCommandTarget)(var_core_value_sig04C6.get(n.IUniverInstanceService));
  return !var_core_value_sig2F2B || !var_core_value_sig70AF || !(0, t.hasDimensionOutlineViewPermission)(var_core_value_sig04C6, var_core_value_sig70AF.unitId, var_core_value_sig70AF.subUnitId) || !var_core_value_sig04C6.get(t.SheetsOutlineModel).getOutlines(var_core_value_sig70AF.unitId, var_core_value_sig70AF.subUnitId).some(var_core_value_sig8889 => var_core_value_sig8889.axis === var_core_value_sig2F2B.axis && var_core_value_sig8889.start >= var_core_value_sig2F2B.start && var_core_value_sig8889.end <= var_core_value_sig2F2B.end);
}
function Te(var_core_value_sigD04E) {
  let var_core_value_sigB99B = D(var_core_value_sigD04E);
  return var_core_value_sigB99B ? var_core_value_sigB99B.rangeType === n.RANGE_TYPE["ROW"] ? j(var_core_value_sigD04E, t.DimensionOutlineAxis["ROW"]) : (var_core_value_sigB99B.rangeType === n.RANGE_TYPE["COLUMN"] || j(var_core_value_sigD04E, t.DimensionOutlineAxis["ROW"])) && j(var_core_value_sigD04E, t.DimensionOutlineAxis["COLUMN"]) : true;
}
function Ee(var_core_value_sig5A75) {
  let var_core_value_sig7BAF = D(var_core_value_sig5A75);
  return var_core_value_sig7BAF ? var_core_value_sig7BAF.rangeType === n.RANGE_TYPE["ROW"] ? M(var_core_value_sig5A75, t.DimensionOutlineAxis["ROW"]) : (var_core_value_sig7BAF.rangeType === n.RANGE_TYPE["COLUMN"] || M(var_core_value_sig5A75, t.DimensionOutlineAxis["ROW"])) && M(var_core_value_sig5A75, t.DimensionOutlineAxis["COLUMN"]) : true;
}
const N = {
  [e.RibbonDataGroup["ORGANIZATION"]]: {
    [T]: {
      order: 20,
      gridLayout: {
        row: 2,
        column: 3
      },
      menuItemFactory: se
    }
  },
  [e.ContextMenuPosition["ROW_HEADER"]]: {
    [e.ContextMenuGroup["LAYOUT"]]: {
      [E]: {
        order: 8,
        menuItemFactory: le
      }
    }
  },
  [e.ContextMenuPosition["COL_HEADER"]]: {
    [e.ContextMenuGroup["LAYOUT"]]: {
      [E]: {
        order: 8,
        menuItemFactory: ue
      }
    }
  }
};
var De = "@univerjs-pro/sheets-outline-ui",
  Oe = "1.0.0-insiders.20260907-70fc579";
const P = {};
function F(var_core_value_sig8F69, var_core_value_sig6884) {
  return function (var_core_value_sig32F8, var_core_value_sig5B67) {
    var_core_value_sig6884(var_core_value_sig32F8, var_core_value_sig5B67, var_core_value_sig8F69);
  };
}
function I(var_core_value_sig066E, var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sigC56D) {
  var var_core_value_sig3A17 = arguments.length,
    var_core_value_sig938F = var_core_value_sig3A17 < 3 ? var_core_value_sig9B0D : var_core_value_sigC56D === null ? var_core_value_sigC56D = Object.getOwnPropertyDescriptor(var_core_value_sig9B0D, var_core_value_sig3D2C) : var_core_value_sigC56D,
    var_core_value_sigD948;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig938F = Reflect.decorate(var_core_value_sig066E, var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sigC56D);else {
    for (var var_core_value_sigBE5E = var_core_value_sig066E.length - 1; var_core_value_sigBE5E >= 0; var_core_value_sigBE5E--) (var_core_value_sigD948 = var_core_value_sig066E[var_core_value_sigBE5E]) && (var_core_value_sig938F = (var_core_value_sig3A17 < 3 ? var_core_value_sigD948(var_core_value_sig938F) : var_core_value_sig3A17 > 3 ? var_core_value_sigD948(var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sig938F) : var_core_value_sigD948(var_core_value_sig9B0D, var_core_value_sig3D2C)) || var_core_value_sig938F);
  }
  return var_core_value_sig3A17 > 3 && var_core_value_sig938F && Object.defineProperty(var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sig938F), var_core_value_sig938F;
}
let L = class extends n.Disposable {
  constructor(var_core_value_sig1758, var_core_value_sig4805) {
    super(), this._componentManager = var_core_value_sig1758, this._iconManager = var_core_value_sig4805, this._registerComponents(), this._registerIcons();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](b, ee));
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      GroupingDoubleIcon: u.GroupingDoubleIcon
    }));
  }
};
L = I([F(0, (0, n.Inject)(e.ComponentManager)), F(1, (0, n.Inject)(e.IconManager))], L);
const ke = new Set([t.AddDimensionOutlineCommand["id"], t.ClearDimensionOutlinesCommand["id"], t.RemoveDimensionOutlineCommand["id"], t.SetDimensionOutlineCollapsedCommand["id"]]);
let R = class extends n.Disposable {
  constructor(var_core_value_sigE67E, var_core_value_sig2902, var_core_value_sig9989, var_core_value_sig698E) {
    super(), this._commandService = var_core_value_sigE67E, this._localeService = var_core_value_sig2902, this._sheetPermissionCheckController = var_core_value_sig9989, this._univerInstanceService = var_core_value_sig698E, this._initPermission();
  }
  _initPermission() {
    this.disposeWithMe(this._commandService["beforeCommandExecuted"](var_core_value_sigE9ED => {
      if (!ke.has(var_core_value_sigE9ED.id)) return;
      let var_core_value_sigB577 = (0, r.getSheetCommandTarget)(this._univerInstanceService, var_core_value_sigE9ED.params);
      var_core_value_sigB577 && (this._sheetPermissionCheckController["permissionCheckWithoutRange"]({
        workbookTypes: [r.WorkbookViewPermission],
        worksheetTypes: [r.WorksheetViewPermission]
      }, var_core_value_sigB577.unitId, var_core_value_sigB577.subUnitId) || this._sheetPermissionCheckController["blockExecuteWithoutPermission"](this._localeService["t"]("sheets-outline-ui.error.permission")));
    }));
  }
};
R = I([F(0, (0, n.Inject)(n.ICommandService)), F(1, (0, n.Inject)(n.LocaleService)), F(2, (0, n.Inject)(r.SheetPermissionCheckController)), F(3, n.IUniverInstanceService)], R);
const Ae = {
    id: x.id,
    preconditions: var_core_value_sig0281 => (0, l.whenSheetEditorFocused)(var_core_value_sig0281),
    binding: e.KeyCode["ARROW_RIGHT"] | e.MetaKeys["ALT"] | e.MetaKeys["SHIFT"],
    mac: e.KeyCode["K"] | e.MetaKeys["CTRL_COMMAND"] | e.MetaKeys["SHIFT"]
  },
  je = {
    id: S.id,
    preconditions: var_core_value_sigED71 => (0, l.whenSheetEditorFocused)(var_core_value_sigED71),
    binding: e.KeyCode["ARROW_LEFT"] | e.MetaKeys["ALT"] | e.MetaKeys["SHIFT"],
    mac: e.KeyCode["J"] | e.MetaKeys["CTRL_COMMAND"] | e.MetaKeys["SHIFT"]
  },
  Me = {
    [t.DimensionOutlineErrorReason["INVALID_RANGE"]]: "sheets-outline-ui.error.invalidRange",
    [t.DimensionOutlineErrorReason["OUT_OF_BOUNDS"]]: "sheets-outline-ui.error.outOfBounds",
    [t.DimensionOutlineErrorReason["CROSSING"]]: "sheets-outline-ui.error.crossing",
    [t.DimensionOutlineErrorReason["MAX_DEPTH"]]: "sheets-outline-ui.error.maxDepth",
    [t.DimensionOutlineErrorReason["MOVE_SPLITS_OUTLINE"]]: "sheets-outline-ui.error.moveSplitsOutline",
    [t.DimensionOutlineErrorReason["CLEAR_RANGE_NOT_CONTAIN_OUTLINE"]]: "sheets-outline-ui.error.clearRangeNotContainOutline",
    [t.DimensionOutlineErrorReason["UNKNOWN"]]: "sheets-outline-ui.error.unknown"
  };
let z = class extends n.Disposable {
  constructor(var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig877E) {
    super(), this._sheetsOutlineErrorService = var_core_value_sig2809, this._messageService = var_core_value_sig2DAB, this._localeService = var_core_value_sig877E, this._initErrorListener();
  }
  _initErrorListener() {
    this.disposeWithMe(this._sheetsOutlineErrorService["error$"].subscribe(var_core_value_sig9572 => {
      this._showError(var_core_value_sig9572);
    }));
  }
  _showError(var_core_value_sig20C8) {
    this._messageService["show"]({
      type: a.MessageType["Error"],
      content: this._localeService["t"](Me[var_core_value_sig20C8.reason])
    });
  }
};
z = I([F(0, (0, n.Inject)(t.SheetsOutlineErrorService)), F(1, e.IMessageService), F(2, (0, n.Inject)(n.LocaleService))], z);
let B = class extends n.Disposable {
  constructor(var_core_value_sigE9A7) {
    super(), this._menuManagerService = var_core_value_sigE9A7, this._menuManagerService["mergeMenu"](N);
  }
};
B = I([F(0, e.IMenuManagerService)], B);
function V(var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sig585D, var_core_value_sigE722 = {}) {
  return Le((0, t.buildDimensionOutlineTree)(var_core_value_sig281C).filter(var_core_value_sigBECE => var_core_value_sigBECE.unitId === var_core_value_sig3C92 && var_core_value_sigBECE.subUnitId === var_core_value_sigB16B && var_core_value_sigBECE.axis === var_core_value_sig585D), var_core_value_sigE722);
}
function H(var_core_value_sig062A, var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683 = {}) {
  return V(var_core_value_sig062A, var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683).reduce((var_core_value_sig1B22, var_core_value_sig7F72) => Math.max(var_core_value_sig1B22, var_core_value_sig7F72.depth), 0);
}
function U(var_core_value_sig26EC, var_core_value_sigEEDB = {}) {
  return var_core_value_sig26EC <= 0 ? 0 : (var_core_value_sigEEDB.includeLevelButtons ? Ne(var_core_value_sig26EC) : var_core_value_sig26EC) * 20;
}
function Ne(var_core_value_sig36E7) {
  return Math.max(0, var_core_value_sig36E7);
}
function Pe(var_core_value_sig6A78, var_core_value_sigF7EF, var_core_value_sig27F9) {
  return var_core_value_sig27F9.depth < var_core_value_sigF7EF ? false : !var_core_value_sig6A78.some(var_core_value_sig7B2A => var_core_value_sig7B2A.collapsed);
}
function Fe(var_core_value_sig393E, var_core_value_sigB609, var_core_value_sig390D) {
  for (let var_core_value_sig06CD = var_core_value_sig393E.length - 1; var_core_value_sig06CD >= 0; var_core_value_sig06CD--) {
    let var_core_value_sigD873 = var_core_value_sig393E[var_core_value_sig06CD];
    if (var_core_value_sigB609 >= var_core_value_sigD873.left && var_core_value_sigB609 <= var_core_value_sigD873.left + var_core_value_sigD873.width && var_core_value_sig390D >= var_core_value_sigD873.top && var_core_value_sig390D <= var_core_value_sigD873.top + var_core_value_sigD873.height) return var_core_value_sigD873;
  }
  return null;
}
function Ie(var_core_value_sigC928, var_core_value_sig39B7, var_core_value_sig18E0) {
  for (let var_core_value_sigA5F1 = var_core_value_sigC928.length - 1; var_core_value_sigA5F1 >= 0; var_core_value_sigA5F1--) {
    let var_core_value_sigA12B = var_core_value_sigC928[var_core_value_sigA5F1];
    if (var_core_value_sig39B7 >= var_core_value_sigA12B.left && var_core_value_sig39B7 <= var_core_value_sigA12B.left + var_core_value_sigA12B.width && var_core_value_sig18E0 >= var_core_value_sigA12B.top && var_core_value_sig18E0 <= var_core_value_sigA12B.top + var_core_value_sigA12B.height) return var_core_value_sigA12B;
  }
  return null;
}
function Le(var_core_value_sigE161, var_core_value_sigBDEE) {
  let var_core_value_sig1F40 = [];
  for (let var_core_value_sig97A2 of var_core_value_sigE161) {
    var_core_value_sig1F40.push(var_core_value_sig97A2);
    let var_core_value_sigF230 = var_core_value_sigBDEE.includeHiddenGroups || !var_core_value_sig97A2.collapsed ? var_core_value_sig97A2.children : var_core_value_sig97A2.children["filter"](var_core_value_sig7524 => Re(var_core_value_sig97A2, var_core_value_sig7524));
    var_core_value_sigF230.length > 0 && var_core_value_sig1F40.push(...Le(var_core_value_sigF230, var_core_value_sigBDEE));
  }
  return var_core_value_sig1F40;
}
function Re(var_core_value_sig3FC7, var_core_value_sig1E1B) {
  return var_core_value_sig3FC7.unitId === var_core_value_sig1E1B.unitId && var_core_value_sig3FC7.subUnitId === var_core_value_sig1E1B.subUnitId && var_core_value_sig3FC7.axis === var_core_value_sig1E1B.axis && var_core_value_sig3FC7.start === var_core_value_sig1E1B.start && var_core_value_sig3FC7.end === var_core_value_sig1E1B.end;
}
function W(var_core_value_sig3B10) {
  "@babel/helpers - typeof";

  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig07E9) {
    return typeof var_core_value_sig07E9;
  } : function (var_core_value_sig4F59) {
    return var_core_value_sig4F59 && typeof Symbol == "function" && var_core_value_sig4F59.constructor === Symbol && var_core_value_sig4F59 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig4F59;
  }, W(var_core_value_sig3B10);
}
function ze(var_core_value_sig89E6, var_core_value_sig4743) {
  if (W(var_core_value_sig89E6) != "object" || !var_core_value_sig89E6) return var_core_value_sig89E6;
  var var_core_value_sigEB6A = var_core_value_sig89E6[Symbol.toPrimitive];
  if (var_core_value_sigEB6A !== undefined) {
    var var_core_value_sig3D46 = var_core_value_sigEB6A.call(var_core_value_sig89E6, var_core_value_sig4743 || "default");
    if (W(var_core_value_sig3D46) != "object") return var_core_value_sig3D46;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig4743 === "string" ? String : Number)(var_core_value_sig89E6);
}
function Be(var_core_value_sigCC93) {
  var var_core_value_sig5964 = ze(var_core_value_sigCC93, "string");
  return W(var_core_value_sig5964) == "symbol" ? var_core_value_sig5964 : var_core_value_sig5964 + "";
}
function G(var_core_value_sig808B, var_core_value_sig2A26, var_core_value_sig1179) {
  return (var_core_value_sig2A26 = Be(var_core_value_sig2A26)) in var_core_value_sig808B ? Object.defineProperty(var_core_value_sig808B, var_core_value_sig2A26, {
    value: var_core_value_sig1179,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig808B[var_core_value_sig2A26] = var_core_value_sig1179, var_core_value_sig808B;
}
const K = 0.5;
var Ve = class extends c.Shape {
  constructor(var_core_value_sigF564, var_core_value_sig8CFA, var_core_value_sig2E11, var_core_value_sig5B69, var_core_value_sigB098) {
    super(var_core_value_sigF564, {
      evented: true,
      fill: "rgba(0,\x200,\x200,\x200)",
      zIndex: 100
    }), this._axis = var_core_value_sig8CFA, this._sheetsOutlineModel = var_core_value_sig2E11, this._themeService = var_core_value_sig5B69, this._getSkeleton = var_core_value_sigB098, G(this, "_buttons", []), G(this, "_levelButtons", []), G(this, "_lines", []), G(this, "_hoveredOutlineId", null), G(this, "_hoveredLevel", null);
  }
  refreshBounds() {
    let var_core_value_sigCE71 = this._getSkeleton();
    if (!var_core_value_sigCE71) {
      this.hide();
      return;
    }
    let var_core_value_sig21D8 = var_core_value_sigCE71.worksheet,
      var_core_value_sig2B65 = var_core_value_sig21D8.getUnitId(),
      var_core_value_sigD7EA = var_core_value_sig21D8.getSheetId(),
      var_core_value_sigB33B = U(H(this._sheetsOutlineModel["getOutlines"](var_core_value_sig2B65, var_core_value_sigD7EA), var_core_value_sig2B65, var_core_value_sigD7EA, this._axis, {
        includeHiddenGroups: true
      }), {
        includeLevelButtons: true
      });
    if (var_core_value_sigB33B <= 0) {
      this.hide();
      return;
    }
    this.show(), this._axis === t.DimensionOutlineAxis["ROW"] ? this.transformByState({
      left: 0,
      top: 0,
      width: var_core_value_sigB33B,
      height: var_core_value_sigCE71.columnHeaderHeightAndMarginTop + var_core_value_sigCE71.rowTotalHeight
    }) : this.transformByState({
      left: 0,
      top: 0,
      width: var_core_value_sigCE71.rowHeaderWidthAndMarginLeft + var_core_value_sigCE71.columnTotalWidth,
      height: var_core_value_sigB33B
    });
  }
  setHoveredOutline(var_core_value_sig24B9) {
    this._hoveredOutlineId !== var_core_value_sig24B9 && (this._hoveredOutlineId = var_core_value_sig24B9, this.makeDirty(true));
  }
  setHoveredLevel(var_core_value_sigE627) {
    this._hoveredLevel !== var_core_value_sigE627 && (this._hoveredLevel = var_core_value_sigE627, this.makeDirty(true));
  }
  hitTestButton(var_core_value_sigEF3E, var_core_value_sig273D) {
    return Fe(this._buttons, var_core_value_sigEF3E, var_core_value_sig273D);
  }
  hitTestLevelButton(var_core_value_sig9A0D, var_core_value_sigA319) {
    return Ie(this._levelButtons, var_core_value_sig9A0D, var_core_value_sigA319);
  }
  hitTestOutline(var_core_value_sig2D58, var_core_value_sig223F) {
    let var_core_value_sigD749 = this.hitTestButton(var_core_value_sig2D58, var_core_value_sig223F);
    return var_core_value_sigD749 ? var_core_value_sigD749.id : this.hitTestLine(var_core_value_sig2D58, var_core_value_sig223F);
  }
  hitTestLine(var_core_value_sigCFFA, var_core_value_sig58C1) {
    for (let var_core_value_sig09B8 = this._lines["length"] - 1; var_core_value_sig09B8 >= 0; var_core_value_sig09B8--) {
      let var_core_value_sig2AD8 = this._lines[var_core_value_sig09B8];
      if (var_core_value_sigCFFA >= var_core_value_sig2AD8.left && var_core_value_sigCFFA <= var_core_value_sig2AD8.left + var_core_value_sig2AD8.width && var_core_value_sig58C1 >= var_core_value_sig2AD8.top && var_core_value_sig58C1 <= var_core_value_sig2AD8.top + var_core_value_sig2AD8.height) return var_core_value_sig2AD8.id;
    }
    return null;
  }
  _draw(var_core_value_sig5090) {
    this._buttons = [], this._levelButtons = [], this._lines = [];
    let var_core_value_sigC368 = this._getSkeleton();
    if (!var_core_value_sigC368) return;
    let var_core_value_sigAD56 = var_core_value_sigC368.worksheet,
      var_core_value_sigDB4A = var_core_value_sigAD56.getUnitId(),
      var_core_value_sig6418 = var_core_value_sigAD56.getSheetId(),
      var_core_value_sig1896 = this._sheetsOutlineModel["getOutlines"](var_core_value_sigDB4A, var_core_value_sig6418),
      var_core_value_sig0285 = V(var_core_value_sig1896, var_core_value_sigDB4A, var_core_value_sig6418, this._axis),
      var_core_value_sig777D = V(var_core_value_sig1896, var_core_value_sigDB4A, var_core_value_sig6418, this._axis, {
        includeHiddenGroups: true
      });
    if (var_core_value_sig777D.length === 0) return;
    let var_core_value_sig3F4C = var_core_value_sig777D.reduce((var_core_value_sig6F91, var_core_value_sigF9C7) => Math.max(var_core_value_sig6F91, var_core_value_sigF9C7.depth), 0),
      var_core_value_sigD65A = U(var_core_value_sig3F4C, {
        includeLevelButtons: true
      }),
      var_core_value_sig5A13 = We(this._axis, var_core_value_sig777D, var_core_value_sig3F4C, var_core_value_sigD65A, var_core_value_sigC368);
    var_core_value_sig5090.save(), var_core_value_sig5090.textAlign = "center", var_core_value_sig5090.textBaseline = "middle", var_core_value_sig5090.font = "12px\x20" + c.DEFAULT_FONTFACE_PLANE, var_core_value_sig5090.setLineWidthByPrecision(2), this._axis === t.DimensionOutlineAxis["ROW"] ? this._drawRows(var_core_value_sig5090, var_core_value_sig0285, var_core_value_sig5A13, var_core_value_sigD65A, var_core_value_sigC368) : this._drawColumns(var_core_value_sig5090, var_core_value_sig0285, var_core_value_sig5A13, var_core_value_sigD65A, var_core_value_sigC368), var_core_value_sig5090.restore();
  }
  _drawRows(var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig34C8) {
    let {
        rowHeightAccumulation: var_core_value_sigB744,
        rowTotalHeight: var_core_value_sigEAE2,
        columnHeaderHeightAndMarginTop: var_core_value_sigE68A
      } = var_core_value_sig34C8,
      var_core_value_sig3E68 = q(this._themeService);
    var_core_value_sigF593.save(), var_core_value_sigF593.fillStyle = var_core_value_sig3E68.gutterBackground, var_core_value_sigF593.fillRectByPrecision(0, 0, var_core_value_sigF2E6, var_core_value_sigE68A + var_core_value_sigEAE2), var_core_value_sigF593.strokeStyle = var_core_value_sig3E68.gutterBorder, var_core_value_sigF593.setLineWidthByPrecision(1), var_core_value_sigF593.beginPath(), var_core_value_sigF593.moveToByPrecision(var_core_value_sigF2E6 - K, 0), var_core_value_sigF593.lineToByPrecision(var_core_value_sigF2E6 - K, var_core_value_sigE68A + var_core_value_sigEAE2), var_core_value_sigF593.stroke(), var_core_value_sigF593.restore(), this._drawLevelButtons(var_core_value_sigF593, var_core_value_sigB512), var_core_value_sigF593.setLineWidthByPrecision(2);
    for (let var_core_value_sig8895 of var_core_value_sig3607) {
      let var_core_value_sig2AD0 = Math.min(var_core_value_sigF2E6 - 14 - 3, (var_core_value_sig8895.depth - 1) * 20 + 3),
        var_core_value_sig3EEE = var_core_value_sig2AD0 + 14 / 2,
        var_core_value_sigBC46 = J(var_core_value_sigB744, var_core_value_sig8895.start),
        var_core_value_sig3D7D = X(var_core_value_sigB744, var_core_value_sig8895.end, var_core_value_sigEAE2),
        var_core_value_sig27E5 = Ge(var_core_value_sigB744, var_core_value_sig8895.end, var_core_value_sigEAE2, 14),
        var_core_value_sig8061 = this._hoveredOutlineId === var_core_value_sig8895.id,
        var_core_value_sig4D4C = this._getHoverColor(),
        var_core_value_sigC9E0 = Math.max(0, var_core_value_sigBC46),
        var_core_value_sig76BA = Math.max(var_core_value_sigBC46, Math.min(var_core_value_sigEAE2, var_core_value_sig3D7D)),
        var_core_value_sigFBFA = Y(var_core_value_sigB744, var_core_value_sig8895.start, var_core_value_sig8895.end, var_core_value_sigEAE2);
      var_core_value_sigF593.strokeStyle = var_core_value_sig8061 ? var_core_value_sig4D4C : var_core_value_sig3E68.line, var_core_value_sigF593.beginPath(), var_core_value_sigF593.moveToByPrecision(var_core_value_sig3EEE, var_core_value_sigE68A + var_core_value_sigC9E0), var_core_value_sigF593.lineToByPrecision(var_core_value_sig3EEE, var_core_value_sigE68A + var_core_value_sig76BA), var_core_value_sigF593.moveToByPrecision(var_core_value_sig3EEE, var_core_value_sigE68A + var_core_value_sigFBFA), var_core_value_sigF593.lineToByPrecision(Math.min(var_core_value_sigF2E6, var_core_value_sig3EEE + 8), var_core_value_sigE68A + var_core_value_sigFBFA), var_core_value_sigF593.stroke(), this._lines["push"]({
        id: var_core_value_sig8895.id,
        axis: var_core_value_sig8895.axis,
        left: var_core_value_sig3EEE - 6 / 2,
        top: var_core_value_sigC9E0,
        width: 6,
        height: Math.max(14, var_core_value_sig76BA - var_core_value_sigC9E0)
      }), this._drawButton(var_core_value_sigF593, var_core_value_sig2AD0, var_core_value_sig27E5, var_core_value_sig8895, var_core_value_sig8061, 0, var_core_value_sigE68A);
    }
  }
  _drawColumns(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigA6F6) {
    let {
        columnWidthAccumulation: var_core_value_sigCDDA,
        columnTotalWidth: var_core_value_sigE243,
        rowHeaderWidthAndMarginLeft: var_core_value_sig74A8
      } = var_core_value_sigA6F6,
      var_core_value_sig21B2 = q(this._themeService);
    var_core_value_sigF4C5.save(), var_core_value_sigF4C5.fillStyle = var_core_value_sig21B2.gutterBackground, var_core_value_sigF4C5.fillRectByPrecision(0, 0, var_core_value_sig74A8 + var_core_value_sigE243, var_core_value_sig8EA0), var_core_value_sigF4C5.strokeStyle = var_core_value_sig21B2.gutterBorder, var_core_value_sigF4C5.setLineWidthByPrecision(1), var_core_value_sigF4C5.beginPath(), var_core_value_sigF4C5.moveToByPrecision(0, var_core_value_sig8EA0 - K), var_core_value_sigF4C5.lineToByPrecision(var_core_value_sig74A8 + var_core_value_sigE243, var_core_value_sig8EA0 - K), var_core_value_sigF4C5.stroke(), var_core_value_sigF4C5.restore(), this._drawLevelButtons(var_core_value_sigF4C5, var_core_value_sig492F), var_core_value_sigF4C5.setLineWidthByPrecision(2);
    for (let var_core_value_sigC80B of var_core_value_sig5410) {
      let var_core_value_sigF602 = Math.min(var_core_value_sig8EA0 - 14 - 3, (var_core_value_sigC80B.depth - 1) * 20 + 3),
        var_core_value_sig1BBD = var_core_value_sigF602 + 14 / 2,
        var_core_value_sigF704 = J(var_core_value_sigCDDA, var_core_value_sigC80B.start),
        var_core_value_sig2BCF = X(var_core_value_sigCDDA, var_core_value_sigC80B.end, var_core_value_sigE243),
        var_core_value_sig0D69 = Ge(var_core_value_sigCDDA, var_core_value_sigC80B.end, var_core_value_sigE243, 14),
        var_core_value_sig480E = this._hoveredOutlineId === var_core_value_sigC80B.id,
        var_core_value_sig26DB = this._getHoverColor(),
        var_core_value_sigF0F9 = Math.max(0, var_core_value_sigF704),
        var_core_value_sig1A0F = Math.max(var_core_value_sigF704, Math.min(var_core_value_sigE243, var_core_value_sig2BCF)),
        var_core_value_sigFBA4 = Y(var_core_value_sigCDDA, var_core_value_sigC80B.start, var_core_value_sigC80B.end, var_core_value_sigE243);
      var_core_value_sigF4C5.strokeStyle = var_core_value_sig480E ? var_core_value_sig26DB : var_core_value_sig21B2.line, var_core_value_sigF4C5.beginPath(), var_core_value_sigF4C5.moveToByPrecision(var_core_value_sig74A8 + var_core_value_sigF0F9, var_core_value_sig1BBD), var_core_value_sigF4C5.lineToByPrecision(var_core_value_sig74A8 + var_core_value_sig1A0F, var_core_value_sig1BBD), var_core_value_sigF4C5.moveToByPrecision(var_core_value_sig74A8 + var_core_value_sigFBA4, var_core_value_sig1BBD), var_core_value_sigF4C5.lineToByPrecision(var_core_value_sig74A8 + var_core_value_sigFBA4, Math.min(var_core_value_sig8EA0, var_core_value_sig1BBD + 8)), var_core_value_sigF4C5.stroke(), this._lines["push"]({
        id: var_core_value_sigC80B.id,
        axis: var_core_value_sigC80B.axis,
        left: var_core_value_sigF0F9,
        top: var_core_value_sig1BBD - 6 / 2,
        width: Math.max(14, var_core_value_sig1A0F - var_core_value_sigF0F9),
        height: 6
      }), this._drawButton(var_core_value_sigF4C5, var_core_value_sig0D69, var_core_value_sigF602, var_core_value_sigC80B, var_core_value_sig480E, var_core_value_sig74A8);
    }
  }
  _drawLevelButtons(var_core_value_sigDE08, var_core_value_sigACCB) {
    let var_core_value_sig7F33 = q(this._themeService);
    for (let var_core_value_sig284F of var_core_value_sigACCB) {
      let var_core_value_sig4383 = this._hoveredLevel === var_core_value_sig284F.level;
      var_core_value_sigDE08.save(), var_core_value_sigDE08.translateWithPrecision(var_core_value_sig284F.left, var_core_value_sig284F.top), c.Rect["drawWith"](var_core_value_sigDE08, {
        width: 14,
        height: 14,
        radius: 3,
        fill: var_core_value_sig4383 ? this._getHoverBackgroundColor() : var_core_value_sig7F33.buttonFill,
        stroke: var_core_value_sig4383 ? this._getHoverColor() : var_core_value_sig7F33.buttonStroke
      }), var_core_value_sigDE08.fillStyle = var_core_value_sig4383 ? this._getHoverColor() : var_core_value_sig7F33.buttonText, var_core_value_sigDE08.fillText(String(var_core_value_sig284F.level), 14 / 2, 7.5), var_core_value_sigDE08.restore(), this._levelButtons["push"](var_core_value_sig284F);
    }
  }
  _drawButton(var_core_value_sig0C53, var_core_value_sigEA04, var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565, var_core_value_sigD4FB = 0, var_core_value_sig3E71 = 0) {
    var_core_value_sig0C53.save(), var_core_value_sig0C53.translateWithPrecision(var_core_value_sigEA04 + var_core_value_sigD4FB, var_core_value_sig7A62 + var_core_value_sig3E71);
    let var_core_value_sig01B3 = He(var_core_value_sig8109.collapsed, var_core_value_sig7565, this._themeService);
    c.Rect["drawWith"](var_core_value_sig0C53, {
      width: 14,
      height: 14,
      radius: 3,
      fill: var_core_value_sig01B3.fill,
      stroke: var_core_value_sig01B3.stroke
    }), Ue(var_core_value_sig0C53, var_core_value_sig8109.collapsed, var_core_value_sig01B3.text), var_core_value_sig0C53.restore(), this._buttons["push"]({
      id: var_core_value_sig8109.id,
      axis: var_core_value_sig8109.axis,
      collapsed: var_core_value_sig8109.collapsed,
      left: var_core_value_sigEA04,
      top: var_core_value_sig7A62,
      width: 14,
      height: 14
    });
  }
  _getHoverColor() {
    return this._themeService["getColorFromTheme"]("primary.600");
  }
  _getHoverBackgroundColor() {
    return this._themeService["getColorFromTheme"]("primary.50");
  }
};
function He(var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5) {
  let var_core_value_sig7100 = q(var_core_value_sig1AE5);
  if (var_core_value_sigEA92) {
    let var_core_value_sig7442 = var_core_value_sig8FD9 ? var_core_value_sig1AE5.getColorFromTheme("primary.700") : var_core_value_sig1AE5.getColorFromTheme("primary.600");
    return {
      fill: var_core_value_sig7442,
      stroke: var_core_value_sig7442,
      text: var_core_value_sig7100.activeButtonText
    };
  }
  return {
    fill: var_core_value_sig8FD9 ? var_core_value_sig1AE5.getColorFromTheme("primary.50") : var_core_value_sig7100.buttonFill,
    stroke: var_core_value_sig8FD9 ? var_core_value_sig1AE5.getColorFromTheme("primary.600") : var_core_value_sig7100.buttonStroke,
    text: var_core_value_sig8FD9 ? var_core_value_sig1AE5.getColorFromTheme("primary.600") : var_core_value_sig7100.buttonText
  };
}
function q(var_core_value_sigA19A) {
  return {
    gutterBackground: var_core_value_sigA19A.getColorFromTheme("gray.50"),
    gutterBorder: var_core_value_sigA19A.getColorFromTheme("gray.200"),
    line: var_core_value_sigA19A.getColorFromTheme("gray.300"),
    buttonFill: var_core_value_sigA19A.getColorFromTheme("gray.0"),
    buttonStroke: var_core_value_sigA19A.getColorFromTheme("gray.300"),
    buttonText: var_core_value_sigA19A.getColorFromTheme("gray.500"),
    activeButtonText: var_core_value_sigA19A.getColorFromTheme("gray.0")
  };
}
function Ue(var_core_value_sigD3F5, var_core_value_sig3082, var_core_value_sigF5D1) {
  var_core_value_sigD3F5.strokeStyle = var_core_value_sigF5D1, var_core_value_sigD3F5.setLineWidthByPrecision(1.5), var_core_value_sigD3F5.beginPath(), var_core_value_sigD3F5.moveToByPrecision(4, 7), var_core_value_sigD3F5.lineToByPrecision(10, 7), var_core_value_sig3082 && (var_core_value_sigD3F5.moveToByPrecision(7, 4), var_core_value_sigD3F5.lineToByPrecision(7, 10)), var_core_value_sigD3F5.stroke();
}
function We(var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig90C0, var_core_value_sigF1B2) {
  let var_core_value_sigC2BB = Ne(var_core_value_sig13D7);
  return Array.from({
    length: var_core_value_sigC2BB
  }, (var_core_value_sigDF87, var_core_value_sig9EE0) => ({
    axis: var_core_value_sig8775,
    level: var_core_value_sig9EE0 + 1,
    active: false,
    left: var_core_value_sig8775 === t.DimensionOutlineAxis["ROW"] ? var_core_value_sig9EE0 * 20 + 3 : Math.max(3, var_core_value_sigF1B2.rowHeaderWidthAndMarginLeft - 14 - 3),
    top: var_core_value_sig8775 === t.DimensionOutlineAxis["ROW"] ? Math.max(3, var_core_value_sigF1B2.columnHeaderHeightAndMarginTop - 14 - 3) : Math.min(var_core_value_sig90C0 - 14 - 3, var_core_value_sig9EE0 * 20 + 3),
    width: 14,
    height: 14
  }));
}
function J(var_core_value_sigD9DB, var_core_value_sigA363) {
  return var_core_value_sigA363 <= 0 ? 0 : var_core_value_sigD9DB[var_core_value_sigA363 - 1] ?? var_core_value_sigD9DB[var_core_value_sigD9DB.length - 1] ?? 0;
}
function Ge(var_core_value_sigFBA5, var_core_value_sigAC47, var_core_value_sigA06F, var_core_value_sig770E) {
  let var_core_value_sig4654 = X(var_core_value_sigFBA5, var_core_value_sigAC47, var_core_value_sigA06F) - var_core_value_sig770E / 2;
  return Math.max(3, Math.min(Math.max(var_core_value_sigA06F - var_core_value_sig770E - 3, 3), var_core_value_sig4654));
}
function Y(var_core_value_sigB26B, var_core_value_sig019B, var_core_value_sigC6BC, var_core_value_sig8EC2) {
  return Math.max(0, Math.min(var_core_value_sig8EC2, J(var_core_value_sigB26B, var_core_value_sig019B)));
}
function X(var_core_value_sigA8C3, var_core_value_sig5276, var_core_value_sig031B) {
  let var_core_value_sig9DC0 = var_core_value_sig5276 + 1;
  return var_core_value_sig9DC0 >= 0 && var_core_value_sig9DC0 < var_core_value_sigA8C3.length ? ((var_core_value_sig9DC0 <= 0 ? 0 : var_core_value_sigA8C3[var_core_value_sig9DC0 - 1] ?? 0) + (var_core_value_sigA8C3[var_core_value_sig9DC0] ?? var_core_value_sig031B)) / 2 : var_core_value_sig031B;
}
const Ke = new Set(["sheet.mutation.add-dimension-outline", "sheet.mutation.remove-dimension-outline", "sheet.mutation.set-dimension-outline-collapsed", "sheet.mutation.clear-dimension-outlines", "sheet.mutation.transform-dimension-outlines", r.SetRowHiddenMutation["id"], r.SetRowVisibleMutation["id"], r.SetColHiddenMutation["id"], r.SetColVisibleMutation["id"]]);
let Z = class extends n.Disposable {
  constructor(var_core_value_sigF0511, var_core_value_sig0B45, var_core_value_sig36F8, var_core_value_sig03E1, var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799) {
    super(), this._context = var_core_value_sigF0511, this._sheetsOutlineModel = var_core_value_sig0B45, this._sheetSkeletonManagerService = var_core_value_sig36F8, this._renderManagerService = var_core_value_sig03E1, this._commandService = var_core_value_sigBB57, this._themeService = var_core_value_sig7C4A, this._headerUnhideRangeService = var_core_value_sigE799, G(this, "_rowOutlineShape", undefined), G(this, "_columnOutlineShape", undefined), G(this, "_headerBaseSize", new Map()), G(this, "_syncingHeaderSize", false), this._rowOutlineShape = new Ve("SheetsDimensionOutlineRowOutlineShape", t.DimensionOutlineAxis["ROW"], this._sheetsOutlineModel, this._themeService, () => this._sheetSkeletonManagerService["getCurrentSkeleton"]() || null), this._columnOutlineShape = new Ve("SheetsDimensionOutlineColumnOutlineShape", t.DimensionOutlineAxis["COLUMN"], this._sheetsOutlineModel, this._themeService, () => this._sheetSkeletonManagerService["getCurrentSkeleton"]() || null), this._initHeaderUnhideRangeRules(), this._initOutlineShapes(), this._initRefresh(), this._refreshCurrentSheet();
  }
  _initHeaderUnhideRangeRules() {
    this.disposeWithMe(this._headerUnhideRangeService["registerRangeVisibleHandler"]((var_core_value_sigE154, var_core_value_sig4632) => var_core_value_sigE154 && Je(this._sheetsOutlineModel["getOutlines"](var_core_value_sig4632.workbook["getUnitId"](), var_core_value_sig4632.worksheet["getSheetId"]()), Xe(var_core_value_sig4632.axis), var_core_value_sig4632.range)));
  }
  _initOutlineShapes() {
    this._context["scene"].addObjects([this._rowOutlineShape, this._columnOutlineShape], 11), this.disposeWithMe((0, n.toDisposable)(() => {
      this._context["scene"].removeObjects([this._rowOutlineShape, this._columnOutlineShape]);
    })), this.disposeWithMe(this._rowOutlineShape["onPointerMove$"].subscribeEvent((var_core_value_sig12F2, var_core_value_sig2259) => {
      this._handleOutlinePointerMove(var_core_value_sig12F2, var_core_value_sig2259, this._rowOutlineShape, t.DimensionOutlineAxis["ROW"]);
    })), this.disposeWithMe(this._rowOutlineShape["onPointerLeave$"].subscribeEvent((var_core_value_sig9E2F, var_core_value_sigD082) => {
      this._handleOutlinePointerLeave(var_core_value_sig9E2F, var_core_value_sigD082, this._rowOutlineShape);
    })), this.disposeWithMe(this._rowOutlineShape["onPointerDown$"].subscribeEvent((var_core_value_sigDBB7, var_core_value_sigD0A8) => {
      this._handleOutlinePointerDown(var_core_value_sigDBB7, var_core_value_sigD0A8, this._rowOutlineShape, t.DimensionOutlineAxis["ROW"]);
    })), this.disposeWithMe(this._columnOutlineShape["onPointerMove$"].subscribeEvent((var_core_value_sigF4B9, var_core_value_sig5CEE) => {
      this._handleOutlinePointerMove(var_core_value_sigF4B9, var_core_value_sig5CEE, this._columnOutlineShape, t.DimensionOutlineAxis["COLUMN"]);
    })), this.disposeWithMe(this._columnOutlineShape["onPointerLeave$"].subscribeEvent((var_core_value_sigE92A, var_core_value_sig362B) => {
      this._handleOutlinePointerLeave(var_core_value_sigE92A, var_core_value_sig362B, this._columnOutlineShape);
    })), this.disposeWithMe(this._columnOutlineShape["onPointerDown$"].subscribeEvent((var_core_value_sig5CA5, var_core_value_sigE90F) => {
      this._handleOutlinePointerDown(var_core_value_sig5CA5, var_core_value_sigE90F, this._columnOutlineShape, t.DimensionOutlineAxis["COLUMN"]);
    }));
  }
  _initRefresh() {
    var var_core_value_sigB601;
    let var_core_value_sig8B71 = (var_core_value_sigB601 = this._context["unit"]) == null ? undefined : var_core_value_sigB601.activeSheet$,
      var_core_value_sigAEFB = (0, n.fromCallback)(this._commandService["onCommandExecuted"].bind(this._commandService)).pipe((0, i.filter)(([var_core_value_sigEFD4]) => var_core_value_sigEFD4.type === n.CommandType["MUTATION"] && Ke.has(var_core_value_sigEFD4.id)));
    this.disposeWithMe((0, i.merge)(this._sheetsOutlineModel["change$"], var_core_value_sigAEFB, this._themeService["currentTheme$"], this._sheetSkeletonManagerService["currentSkeleton$"].pipe((0, i.filter)(var_core_value_sig861B => var_core_value_sig861B != null && !this._syncingHeaderSize)), ...(var_core_value_sig8B71 ? [var_core_value_sig8B71] : [])).subscribe(() => this._refreshCurrentSheet()));
  }
  _refreshCurrentSheet() {
    var var_core_value_sig826B, var_core_value_sigCF89, var_core_value_sig00CB;
    this._sheetSkeletonManagerService["reCalculate"](), this._syncOutlineHeaderSize(), this._rowOutlineShape["refreshBounds"](), this._columnOutlineShape["refreshBounds"](), (var_core_value_sig826B = this._context["mainComponent"]) == null || var_core_value_sig826B.makeDirty(), (var_core_value_sigCF89 = this._context["components"].get(l.SHEET_VIEW_KEY["ROW"])) == null || var_core_value_sigCF89.makeDirty(true), (var_core_value_sig00CB = this._context["components"].get(l.SHEET_VIEW_KEY["COLUMN"])) == null || var_core_value_sig00CB.makeDirty(true), this._rowOutlineShape["makeDirty"](true), this._columnOutlineShape["makeDirty"](true), this._context["scene"].makeDirty();
  }
  _syncOutlineHeaderSize() {
    if (this._syncingHeaderSize) return;
    let var_core_value_sig77EE = this._context["unit"].getActiveSheet();
    if (!var_core_value_sig77EE) return;
    let var_core_value_sig9F76 = this._context["unit"].getUnitId(),
      var_core_value_sigB008 = var_core_value_sig77EE.getSheetId(),
      var_core_value_sig8721 = this._sheetsOutlineModel["getOutlines"](var_core_value_sig9F76, var_core_value_sigB008),
      var_core_value_sig08BA = H(var_core_value_sig8721, var_core_value_sig9F76, var_core_value_sigB008, t.DimensionOutlineAxis["ROW"], {
        includeHiddenGroups: true
      }),
      var_core_value_sigDBB5 = H(var_core_value_sig8721, var_core_value_sig9F76, var_core_value_sigB008, t.DimensionOutlineAxis["COLUMN"], {
        includeHiddenGroups: true
      }),
      var_core_value_sigCFAC = U(var_core_value_sig08BA, {
        includeLevelButtons: true
      }),
      var_core_value_sig237B = U(var_core_value_sigDBB5, {
        includeLevelButtons: true
      }),
      var_core_value_sigFEAB = this._getHeaderBaseSize(var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig08BA, var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig237B),
      var_core_value_sigE347 = var_core_value_sigFEAB.rowHeaderWidth + var_core_value_sigCFAC,
      var_core_value_sig3C5B = var_core_value_sigFEAB.columnHeaderHeight + var_core_value_sig237B,
      var_core_value_sig200B = this._renderManagerService["getRenderUnitById"](var_core_value_sig9F76),
      var_core_value_sig3863 = this._sheetSkeletonManagerService["getSkeleton"](var_core_value_sigB008);
    if (!(!var_core_value_sig3863 || !var_core_value_sig200B)) {
      this._syncingHeaderSize = true;
      try {
        let var_core_value_sig186C = var_core_value_sig3863.rowHeaderWidth !== var_core_value_sigFEAB.rowHeaderWidth || var_core_value_sig3863.rowHeaderWidthAndMarginLeft !== var_core_value_sigE347,
          var_core_value_sigD955 = var_core_value_sig3863.columnHeaderHeight !== var_core_value_sigFEAB.columnHeaderHeight || var_core_value_sig3863.columnHeaderHeightAndMarginTop !== var_core_value_sig3C5B;
        (var_core_value_sig186C || var_core_value_sigD955) && (var_core_value_sig3863.rowHeaderWidth = var_core_value_sigFEAB.rowHeaderWidth, var_core_value_sig3863.columnHeaderHeight = var_core_value_sigFEAB.columnHeaderHeight, var_core_value_sig3863.setMarginLeft(var_core_value_sigCFAC), var_core_value_sig3863.setMarginTop(var_core_value_sig237B)), (var_core_value_sig186C || var_core_value_sigD955) && this._sheetSkeletonManagerService["setCurrent"]({
          sheetId: var_core_value_sigB008
        });
      } finally {
        this._syncingHeaderSize = false;
      }
    }
  }
  _getHeaderBaseSize(var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937, var_core_value_sigCAD5) {
    var var_core_value_sigE503, var_core_value_sig48DD, var_core_value_sig5E6A;
    let var_core_value_sigB7FC = var_core_value_sigC97C + ":" + var_core_value_sigC4B1,
      var_core_value_sig9CD9 = this._headerBaseSize["get"](var_core_value_sigB7FC),
      var_core_value_sigFD0C = (var_core_value_sigE503 = this._context["unit"].getSheetBySheetId(var_core_value_sigC4B1)) == null ? undefined : var_core_value_sigE503.getConfig(),
      var_core_value_sig849B = {
        rowHeaderWidth: qe(var_core_value_sigFD0C == null || (var_core_value_sig48DD = var_core_value_sigFD0C.rowHeader) == null ? undefined : var_core_value_sig48DD.width, 46, 240, var_core_value_sig1BD9, var_core_value_sigA937, var_core_value_sig9CD9 == null ? undefined : var_core_value_sig9CD9.rowHeaderWidth),
        columnHeaderHeight: qe(var_core_value_sigFD0C == null || (var_core_value_sig5E6A = var_core_value_sigFD0C.columnHeader) == null ? undefined : var_core_value_sig5E6A.height, 20, 160, var_core_value_sigE43E, var_core_value_sigCAD5, var_core_value_sig9CD9 == null ? undefined : var_core_value_sig9CD9.columnHeaderHeight)
      };
    return this._headerBaseSize["set"](var_core_value_sigB7FC, var_core_value_sig849B), var_core_value_sig849B;
  }
  _handleOutlinePointerMove(var_core_value_sig5F1A, var_core_value_sigB455, var_core_value_sig5241, var_core_value_sigC6E5) {
    let var_core_value_sigCEFB = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!var_core_value_sigCEFB) return;
    var_core_value_sigB455.stopPropagation();
    let var_core_value_sig1537 = this._getOutlineLevelLocalPoint(var_core_value_sig5F1A),
      var_core_value_sigE4C6 = var_core_value_sig5241.hitTestLevelButton(var_core_value_sig1537.x, var_core_value_sig1537.y),
      var_core_value_sig4313 = this._getOutlineLocalPoint(var_core_value_sig5F1A, var_core_value_sigCEFB, var_core_value_sigC6E5),
      var_core_value_sigFC87 = var_core_value_sigE4C6 ? null : var_core_value_sig5241.hitTestOutline(var_core_value_sig4313.x, var_core_value_sig4313.y);
    var_core_value_sig5241.setHoveredLevel((var_core_value_sigE4C6 == null ? undefined : var_core_value_sigE4C6.level) ?? null), var_core_value_sig5241.setHoveredOutline(var_core_value_sigFC87), var_core_value_sigE4C6 || var_core_value_sigFC87 ? this._context["scene"].setCursor(c.CURSOR_TYPE["POINTER"]) : this._context["scene"].resetCursor();
  }
  _handleOutlinePointerLeave(var_core_value_sig156F, var_core_value_sigDD51, var_core_value_sigF057) {
    var_core_value_sigDD51.stopPropagation(), var_core_value_sigF057.setHoveredOutline(null), var_core_value_sigF057.setHoveredLevel(null), this._context["scene"].resetCursor();
  }
  _handleOutlinePointerDown(var_core_value_sig72F6, var_core_value_sig9FBA, var_core_value_sigFE01, var_core_value_sigA2CE) {
    let var_core_value_sig1975 = this._sheetSkeletonManagerService["getCurrentSkeleton"](),
      var_core_value_sig6EA1 = this._context["unit"].getActiveSheet();
    if (!var_core_value_sig1975 || !var_core_value_sig6EA1) return;
    var_core_value_sig9FBA.stopPropagation(), var_core_value_sig72F6.stopPropagation(), var_core_value_sig72F6.preventDefault();
    let var_core_value_sig029F = this._getOutlineLevelLocalPoint(var_core_value_sig72F6),
      var_core_value_sig3767 = var_core_value_sigFE01.hitTestLevelButton(var_core_value_sig029F.x, var_core_value_sig029F.y);
    if (var_core_value_sig3767) {
      this._handleOutlineLevelButtonDown(var_core_value_sig3767, var_core_value_sigA2CE, var_core_value_sig6EA1.getSheetId());
      return;
    }
    let var_core_value_sig670B = this._getOutlineLocalPoint(var_core_value_sig72F6, var_core_value_sig1975, var_core_value_sigA2CE),
      var_core_value_sig6912 = var_core_value_sigFE01.hitTestButton(var_core_value_sig670B.x, var_core_value_sig670B.y);
    if (var_core_value_sig6912) {
      this._commandService["syncExecuteCommand"](t.SetDimensionOutlineCollapsedCommand["id"], {
        unitId: this._context["unit"].getUnitId(),
        subUnitId: var_core_value_sig6EA1.getSheetId(),
        outlineId: var_core_value_sig6912.id,
        collapsed: !var_core_value_sig6912.collapsed
      });
      return;
    }
    let var_core_value_sigE235 = var_core_value_sigFE01.hitTestLine(var_core_value_sig670B.x, var_core_value_sig670B.y);
    var_core_value_sigE235 && this._handleOutlineLineDown(var_core_value_sigE235, var_core_value_sigA2CE, var_core_value_sig6EA1);
  }
  _handleOutlineLineDown(var_core_value_sig7664, var_core_value_sig2281, var_core_value_sig5E86) {
    let var_core_value_sig6998 = this._context["unit"].getUnitId(),
      var_core_value_sigF639 = var_core_value_sig5E86.getSheetId(),
      var_core_value_sigEAE5 = V(this._sheetsOutlineModel["getOutlines"](var_core_value_sig6998, var_core_value_sigF639), var_core_value_sig6998, var_core_value_sigF639, var_core_value_sig2281, {
        includeHiddenGroups: true
      }).find(var_core_value_sig5237 => var_core_value_sig5237.id === var_core_value_sig7664);
    var_core_value_sigEAE5 && this._commandService["syncExecuteCommand"](r.SetSelectionsOperation["id"], Ye(var_core_value_sig6998, var_core_value_sigF639, var_core_value_sigEAE5, var_core_value_sig5E86.getRowCount(), var_core_value_sig5E86.getColumnCount()));
  }
  _handleOutlineLevelButtonDown(var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82) {
    let var_core_value_sigCF4E = this._context["unit"].getUnitId(),
      var_core_value_sig6CAD = V(this._sheetsOutlineModel["getOutlines"](var_core_value_sigCF4E, var_core_value_sigCB82), var_core_value_sigCF4E, var_core_value_sigCB82, var_core_value_sig6D47, {
        includeHiddenGroups: true
      });
    for (let var_core_value_sigBB00 of var_core_value_sig6CAD) {
      let var_core_value_sig48BD = Pe(var_core_value_sig6CAD, var_core_value_sigE94C.level, var_core_value_sigBB00);
      var_core_value_sigBB00.collapsed !== var_core_value_sig48BD && this._commandService["syncExecuteCommand"](t.SetDimensionOutlineCollapsedCommand["id"], {
        unitId: var_core_value_sigCF4E,
        subUnitId: var_core_value_sigCB82,
        outlineId: var_core_value_sigBB00.id,
        collapsed: var_core_value_sig48BD
      });
    }
  }
  _getOutlineLocalPoint(var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sigB2CE) {
    let {
        scaleX: var_core_value_sig443C,
        scaleY: var_core_value_sig39B1
      } = this._context["scene"].getAncestorScale(),
      var_core_value_sig210D = (0, l.getTransformCoord)(var_core_value_sig8CF5.offsetX, var_core_value_sig8CF5.offsetY, this._context["scene"], var_core_value_sigDDD7);
    return var_core_value_sigB2CE === t.DimensionOutlineAxis["ROW"] ? {
      x: var_core_value_sig8CF5.offsetX / var_core_value_sig443C,
      y: var_core_value_sig210D.y - var_core_value_sigDDD7.columnHeaderHeightAndMarginTop
    } : {
      x: var_core_value_sig210D.x - var_core_value_sigDDD7.rowHeaderWidthAndMarginLeft,
      y: var_core_value_sig8CF5.offsetY / var_core_value_sig39B1
    };
  }
  _getOutlineLevelLocalPoint(var_core_value_sigB4B4) {
    let {
      scaleX: var_core_value_sigD407,
      scaleY: var_core_value_sig63F3
    } = this._context["scene"].getAncestorScale();
    return {
      x: var_core_value_sigB4B4.offsetX / var_core_value_sigD407,
      y: var_core_value_sigB4B4.offsetY / var_core_value_sig63F3
    };
  }
};
Z = I([F(1, (0, n.Inject)(t.SheetsOutlineModel)), F(2, (0, n.Inject)(l.SheetSkeletonManagerService)), F(3, c.IRenderManagerService), F(4, n.ICommandService), F(5, (0, n.Inject)(n.ThemeService)), F(6, (0, n.Inject)(l.HeaderUnhideRangeService))], Z);
function qe(var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigE718, var_core_value_sigAEC8, var_core_value_sigB977, var_core_value_sig2949) {
  let var_core_value_sig308A = var_core_value_sig2949 ?? var_core_value_sig9CCB;
  if (typeof var_core_value_sig95F0 != "number" || var_core_value_sig95F0 <= 0 || var_core_value_sigAEC8 > 0 && var_core_value_sig95F0 > var_core_value_sigE718) return var_core_value_sig308A;
  if (var_core_value_sigAEC8 > 0 && var_core_value_sigB977 > 0) {
    if (var_core_value_sig2949 != null && var_core_value_sig95F0 === var_core_value_sig2949 + var_core_value_sigB977) return var_core_value_sig2949;
    if (var_core_value_sig95F0 === var_core_value_sig9CCB + var_core_value_sigB977) return var_core_value_sig9CCB;
  }
  return var_core_value_sig95F0;
}
function Je(var_core_value_sig528D, var_core_value_sigA309, var_core_value_sig9E20) {
  return !var_core_value_sig528D.some(var_core_value_sig6A71 => var_core_value_sig6A71.axis !== var_core_value_sigA309 || !var_core_value_sig6A71.collapsed ? false : var_core_value_sigA309 === t.DimensionOutlineAxis["ROW"] ? var_core_value_sig9E20.startRow === var_core_value_sig6A71.start && var_core_value_sig9E20.endRow === var_core_value_sig6A71.end : var_core_value_sig9E20.startColumn === var_core_value_sig6A71.start && var_core_value_sig9E20.endColumn === var_core_value_sig6A71.end);
}
function Ye(var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A, var_core_value_sig14CB, var_core_value_sigFDEE) {
  if (var_core_value_sig218A.axis === t.DimensionOutlineAxis["ROW"]) {
    let var_core_value_sig3BF6 = Q(var_core_value_sig218A.start, var_core_value_sig14CB),
      var_core_value_sig38CE = Q(var_core_value_sig218A.end, var_core_value_sig14CB),
      var_core_value_sig62B7 = Math.max(0, var_core_value_sigFDEE - 1);
    return {
      unitId: var_core_value_sig26BB,
      subUnitId: var_core_value_sig19B4,
      selections: [{
        range: {
          startRow: var_core_value_sig3BF6,
          endRow: var_core_value_sig38CE,
          startColumn: 0,
          endColumn: var_core_value_sig62B7,
          rangeType: n.RANGE_TYPE["ROW"]
        },
        primary: {
          startRow: var_core_value_sig3BF6,
          endRow: var_core_value_sig38CE,
          startColumn: 0,
          endColumn: var_core_value_sig62B7,
          actualRow: var_core_value_sig3BF6,
          actualColumn: 0,
          isMerged: false,
          isMergedMainCell: false
        },
        style: null
      }]
    };
  }
  let var_core_value_sigA676 = Q(var_core_value_sig218A.start, var_core_value_sigFDEE),
    var_core_value_sigC27E = Q(var_core_value_sig218A.end, var_core_value_sigFDEE),
    var_core_value_sigA70D = Math.max(0, var_core_value_sig14CB - 1);
  return {
    unitId: var_core_value_sig26BB,
    subUnitId: var_core_value_sig19B4,
    selections: [{
      range: {
        startRow: 0,
        endRow: var_core_value_sigA70D,
        startColumn: var_core_value_sigA676,
        endColumn: var_core_value_sigC27E,
        rangeType: n.RANGE_TYPE["COLUMN"]
      },
      primary: {
        startRow: 0,
        endRow: var_core_value_sigA70D,
        startColumn: var_core_value_sigA676,
        endColumn: var_core_value_sigC27E,
        actualRow: 0,
        actualColumn: var_core_value_sigA676,
        isMerged: false,
        isMergedMainCell: false
      },
      style: null
    }]
  };
}
function Q(var_core_value_sigCE10, var_core_value_sigA386) {
  return Math.max(0, Math.min(Math.max(0, var_core_value_sigA386 - 1), var_core_value_sigCE10));
}
function Xe(var_core_value_sigCD82) {
  return var_core_value_sigCD82 === l.HeaderUnhideRangeAxis["ROW"] ? t.DimensionOutlineAxis["ROW"] : t.DimensionOutlineAxis["COLUMN"];
}
let $ = class extends n.Plugin {
  constructor(var_core_value_sig37A8 = P, var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04) {
    super(), this._config = var_core_value_sig37A8, this._injector = var_core_value_sigA90D, this._commandService = var_core_value_sig7A3C, this._renderManagerService = var_core_value_sig0511, this._shortcutService = var_core_value_sig1F44, this._configService = var_core_value_sigCB04;
    let {
      menu: var_core_value_sig947E,
      ...var_core_value_sig4545
    } = (0, n.merge)({}, P, this._config);
    var_core_value_sig947E && this._configService["setConfig"]("menu", var_core_value_sig947E, {
      merge: true
    }), this._configService["setConfig"]("sheets-outline-ui.config", var_core_value_sig4545);
  }
  onStarting() {
    this._injector["add"]([L]), this._injector["get"](L), [[R], [z], [B]].forEach(var_core_value_sig7E54 => this._injector["add"](var_core_value_sig7E54)), this._initRegisterCommand(), this._initRegisterShortcut(), this._injector["get"](R), this._injector["get"](z), this._injector["get"](B);
  }
  onReady() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](n.UniverInstanceType["UNIVER_SHEET"], [Z]));
  }
  _initRegisterCommand() {
    [d, f, p, g, _, v, x, S].forEach(var_core_value_sig9A8D => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig9A8D)));
  }
  _initRegisterShortcut() {
    [Ae, je].forEach(var_core_value_sigC259 => this.disposeWithMe(this._shortcutService["registerShortcut"](var_core_value_sigC259)));
  }
};
G($, "pluginName", t.SHEET_OUTLINE_PLUGIN + "_UI_PLUGIN"), G($, "packageName", De), G($, "version", Oe), G($, "type", n.UniverInstanceType["UNIVER_SHEET"]), $ = I([(0, n.DependentOn)(s.UniverLicensePlugin, c.UniverRenderEnginePlugin, r.UniverSheetsPlugin, t.UniverSheetsOutlinePlugin, l.UniverSheetsUIPlugin), F(1, (0, n.Inject)(n.Injector)), F(2, n.ICommandService), F(3, c.IRenderManagerService), F(4, e.IShortcutService), F(5, n.IConfigService)], $), exports.SheetsOutlineUIMenuSchema = N, Object.defineProperty(exports, "UniverSheetsOutlineUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
