import { ComponentManager as var_core_value_sig44DD, ContextMenuGroup as var_core_value_sig96FA, ContextMenuPosition as var_core_value_sigAB68, IDialogService as var_core_value_sig040A, ILayoutService as var_core_value_sig2AE0, IMenuManagerService as var_core_value_sigC349, IMessageService as var_core_value_sig9D96, IShortcutService as var_core_value_sig2776, IconManager as var_core_value_sig6FB2, KeyCode as var_core_value_sigEB43, MenuItemType as var_core_value_sig4186, MetaKeys as var_core_value_sigF963, RibbonDataGroup as var_core_value_sigB608, getMenuHiddenObservable as var_core_value_sigF866, useDependency as var_core_value_sig5EFB } from "@univerjs/ui";
import { AddDimensionOutlineCommand as var_core_value_sig3A85, ClearDimensionOutlinesCommand as var_core_value_sig2682, DimensionOutlineAxis as var_core_value_sig4BB5, DimensionOutlineErrorReason as var_core_value_sig6709, RemoveDimensionOutlineCommand as var_core_value_sig52CA, SHEET_OUTLINE_PLUGIN as var_core_value_sigC030, SetDimensionOutlineCollapsedCommand as var_core_value_sig88F6, SheetsOutlineErrorService as var_core_value_sig37DB, SheetsOutlineModel as var_core_value_sig5542, UniverSheetsOutlinePlugin as var_core_value_sigE0A9, buildDimensionOutlineTree as var_core_value_sigA73E, canAddDimensionOutline as var_core_value_sig7620, getDimensionOutlineViewPermission$ as var_core_value_sigB9FC, hasDimensionOutlineViewPermission as var_core_value_sig5055 } from "@univerjs-pro/sheets-outline";
import { CommandType as var_core_value_sig3801, DependentOn as var_core_value_sig45F0, Disposable as var_core_value_sigBC91, ICommandService as var_core_value_sigCB88, IConfigService as var_core_value_sig8D65, IUniverInstanceService as var_core_value_sig8122, Inject as var_core_value_sigEDC6, Injector as var_core_value_sig611A, LocaleService as var_core_value_sig6BD9, Plugin as var_core_value_sig7E56, RANGE_TYPE as var_core_value_sig4161, ThemeService as var_core_value_sig7580, Tools as var_core_value_sig1F18, UniverInstanceType as var_core_value_sigD5A0, fromCallback as var_core_value_sig81B2, merge as var_core_value_sigA0A5, toDisposable as var_core_value_sig10AA } from "@univerjs/core";
import { SetColHiddenMutation as var_core_value_sigE6D0, SetColVisibleMutation as var_core_value_sig8E91, SetRowHiddenMutation as var_core_value_sig00BE, SetRowVisibleMutation as var_core_value_sig7BB5, SetSelectionsOperation as var_core_value_sig6AAD, SheetPermissionCheckController as var_core_value_sig1157, SheetsSelectionsService as var_core_value_sigA694, UniverSheetsPlugin as var_core_value_sig18E0, WorkbookViewPermission as var_core_value_sig0428, WorksheetViewPermission as var_core_value_sigBE07, getSheetCommandTarget as var_core_value_sig555F } from "@univerjs/sheets";
import { combineLatest as var_core_value_sig3D6F, filter as var_core_value_sig336C, map as var_core_value_sig6E68, merge as var_core_value_sig8DFE, of as var_core_value_sig48EA, startWith as var_core_value_sig5E16, switchMap as var_core_value_sig09F3 } from "rxjs";
import { Button as var_core_value_sig4592, MessageType as var_core_value_sigC5C4 } from "@univerjs/design";
import { jsx as var_core_value_sig1617, jsxs as var_core_value_sig4169 } from "react/jsx-runtime";
import { UniverLicensePlugin as var_core_value_sig6D19 } from "@univerjs-pro/license";
import { CURSOR_TYPE as var_core_value_sig279C, DEFAULT_FONTFACE_PLANE as var_core_value_sigAC51, IRenderManagerService as var_core_value_sig8986, Rect as var_core_value_sigCAF7, Shape as var_core_value_sigED1C, UniverRenderEnginePlugin as var_core_value_sig726E } from "@univerjs/engine-render";
import { HeaderUnhideRangeAxis as var_core_value_sig2CD3, HeaderUnhideRangeService as var_core_value_sig038E, SHEET_VIEW_KEY as var_core_value_sigAA1E, SheetSkeletonManagerService as var_core_value_sigC9F5, UniverSheetsUIPlugin as var_core_value_sig7EEA, getTransformCoord as var_core_value_sig59CE, whenSheetEditorFocused as var_core_value_sig33C8 } from "@univerjs/sheets-ui";
import { GroupingDoubleIcon as var_core_value_sig957F } from "@univerjs/icons";
const Ze = {
    id: "sheet.command.outline-selected-dimension",
    type: var_core_value_sig3801.COMMAND,
    handler: (var_core_value_sigF39A, var_core_value_sigF79C) => et(var_core_value_sigF39A, (var_core_value_sigF79C == null ? undefined : var_core_value_sigF79C.value) === var_core_value_sig4BB5.ROW || (var_core_value_sigF79C == null ? undefined : var_core_value_sigF79C.value) === var_core_value_sig4BB5.COLUMN ? var_core_value_sigF79C.value : undefined)
  },
  Qe = {
    id: "sheet.command.outline-selected-rows",
    type: var_core_value_sig3801.COMMAND,
    handler: var_core_value_sig2E54 => et(var_core_value_sig2E54, var_core_value_sig4BB5.ROW)
  },
  $e = {
    id: "sheet.command.outline-selected-columns",
    type: var_core_value_sig3801.COMMAND,
    handler: var_core_value_sig7658 => et(var_core_value_sig7658, var_core_value_sig4BB5.COLUMN)
  };
function et(var_core_value_sigDCF5, var_core_value_sigC786) {
  let var_core_value_sigC0D9 = M(var_core_value_sigDCF5.get(var_core_value_sigA694), var_core_value_sigC786);
  if (!var_core_value_sigC0D9) return false;
  let var_core_value_sigF051 = var_core_value_sig555F(var_core_value_sigDCF5.get(var_core_value_sig8122));
  return var_core_value_sigF051 ? var_core_value_sigDCF5.get(var_core_value_sigCB88).executeCommand(var_core_value_sig3A85.id, {
    unitId: var_core_value_sigF051.unitId,
    subUnitId: var_core_value_sigF051.subUnitId,
    axis: var_core_value_sigC0D9.axis,
    start: var_core_value_sigC0D9.start,
    end: var_core_value_sigC0D9.end
  }) : false;
}
function M(var_core_value_sig5825, var_core_value_sig4EB7) {
  let var_core_value_sig73AF = var_core_value_sig5825.getCurrentSelections();
  if (!var_core_value_sig73AF || var_core_value_sig73AF.length !== 1) return null;
  let var_core_value_sig548A = var_core_value_sig73AF[0].range;
  return var_core_value_sig4EB7 === var_core_value_sig4BB5.ROW ? {
    axis: var_core_value_sig4EB7,
    start: var_core_value_sig548A.startRow,
    end: var_core_value_sig548A.endRow
  } : var_core_value_sig4EB7 === var_core_value_sig4BB5.COLUMN ? {
    axis: var_core_value_sig4EB7,
    start: var_core_value_sig548A.startColumn,
    end: var_core_value_sig548A.endColumn
  } : var_core_value_sig548A.rangeType === var_core_value_sig4161.ROW ? {
    axis: var_core_value_sig4BB5.ROW,
    start: var_core_value_sig548A.startRow,
    end: var_core_value_sig548A.endRow
  } : var_core_value_sig548A.rangeType === var_core_value_sig4161.COLUMN ? {
    axis: var_core_value_sig4BB5.COLUMN,
    start: var_core_value_sig548A.startColumn,
    end: var_core_value_sig548A.endColumn
  } : null;
}
const tt = {
    id: "sheet.command.clear-selected-dimension-outlines",
    type: var_core_value_sig3801.COMMAND,
    handler: (var_core_value_sigE026, var_core_value_sig339E) => it(var_core_value_sigE026, (var_core_value_sig339E == null ? undefined : var_core_value_sig339E.value) === var_core_value_sig4BB5.ROW || (var_core_value_sig339E == null ? undefined : var_core_value_sig339E.value) === var_core_value_sig4BB5.COLUMN ? var_core_value_sig339E.value : undefined)
  },
  nt = {
    id: "sheet.command.clear-selected-rows-outlines",
    type: var_core_value_sig3801.COMMAND,
    handler: var_core_value_sig7550 => it(var_core_value_sig7550, var_core_value_sig4BB5.ROW)
  },
  rt = {
    id: "sheet.command.clear-selected-columns-outlines",
    type: var_core_value_sig3801.COMMAND,
    handler: var_core_value_sig2983 => it(var_core_value_sig2983, var_core_value_sig4BB5.COLUMN)
  };
function it(var_core_value_sigE1B0, var_core_value_sigD4FF) {
  let var_core_value_sig1E5B = M(var_core_value_sigE1B0.get(var_core_value_sigA694), var_core_value_sigD4FF);
  if (!var_core_value_sig1E5B) return false;
  let var_core_value_sigB680 = var_core_value_sig555F(var_core_value_sigE1B0.get(var_core_value_sig8122));
  return var_core_value_sigB680 ? var_core_value_sigE1B0.get(var_core_value_sigCB88).executeCommand(var_core_value_sig2682.id, {
    unitId: var_core_value_sigB680.unitId,
    subUnitId: var_core_value_sigB680.subUnitId,
    axis: var_core_value_sig1E5B.axis,
    start: var_core_value_sig1E5B.start,
    end: var_core_value_sig1E5B.end
  }) : false;
}
const at = "sheet-outline-action-dialog";
function ot(var_core_value_sig1F64) {
  let {
      rowLabel: var_core_value_sigDD1C,
      columnLabel: var_core_value_sig2C39,
      onSelect: var_core_value_sigB7D1,
      onCancel: var_core_value_sig64F0
    } = var_core_value_sig1F64,
    var_core_value_sig85B1 = var_core_value_sig5EFB(var_core_value_sig6BD9);
  return var_core_value_sig4169("div", {
    className: "univer-grid univer-gap-4",
    children: [var_core_value_sig4169("div", {
      className: "univer-grid univer-gap-2",
      children: [var_core_value_sig1617(var_core_value_sig4592, {
        onClick: () => var_core_value_sigB7D1(var_core_value_sig4BB5.ROW),
        children: var_core_value_sigDD1C
      }), var_core_value_sig1617(var_core_value_sig4592, {
        onClick: () => var_core_value_sigB7D1(var_core_value_sig4BB5.COLUMN),
        children: var_core_value_sig2C39
      })]
    }), var_core_value_sig1617("footer", {
      className: "univer-flex univer-justify-end",
      children: var_core_value_sig1617(var_core_value_sig4592, {
        onClick: var_core_value_sig64F0,
        children: var_core_value_sig85B1.t("sheets-outline-ui.cancel")
      })
    })]
  });
}
const N = {
    id: "sheet.command.outline-selected-dimension-shortcut",
    type: var_core_value_sig3801.COMMAND,
    handler: var_core_value_sig3141 => lt(var_core_value_sig3141, "group")
  },
  P = {
    id: "sheet.command.clear-selected-dimension-outlines-shortcut",
    type: var_core_value_sig3801.COMMAND,
    handler: var_core_value_sig2162 => lt(var_core_value_sig2162, "ungroup")
  },
  st = {
    group: {
      [var_core_value_sig4BB5.ROW]: Qe.id,
      [var_core_value_sig4BB5.COLUMN]: $e.id
    },
    ungroup: {
      [var_core_value_sig4BB5.ROW]: nt.id,
      [var_core_value_sig4BB5.COLUMN]: rt.id
    }
  },
  ct = {
    group: {
      [var_core_value_sig4BB5.ROW]: "sheets-outline-ui.groupRows",
      [var_core_value_sig4BB5.COLUMN]: "sheets-outline-ui.groupColumns"
    },
    ungroup: {
      [var_core_value_sig4BB5.ROW]: "sheets-outline-ui.ungroupRows",
      [var_core_value_sig4BB5.COLUMN]: "sheets-outline-ui.ungroupColumns"
    }
  };
function lt(var_core_value_sig2EAD, var_core_value_sig6774) {
  let var_core_value_sig340D = var_core_value_sig2EAD.get(var_core_value_sigA694).getCurrentSelections();
  if (!var_core_value_sig340D || var_core_value_sig340D.length !== 1) return false;
  let var_core_value_sig82D4 = var_core_value_sig555F(var_core_value_sig2EAD.get(var_core_value_sig8122));
  if (!var_core_value_sig82D4 || !var_core_value_sig5055(var_core_value_sig2EAD, var_core_value_sig82D4.unitId, var_core_value_sig82D4.subUnitId)) return false;
  let var_core_value_sigBDE4 = var_core_value_sig340D[0].range;
  return var_core_value_sigBDE4.rangeType === var_core_value_sig4161.ROW ? dt(var_core_value_sig2EAD, var_core_value_sig6774, var_core_value_sig4BB5.ROW) : var_core_value_sigBDE4.rangeType === var_core_value_sig4161.COLUMN ? dt(var_core_value_sig2EAD, var_core_value_sig6774, var_core_value_sig4BB5.COLUMN) : ut(var_core_value_sig2EAD, var_core_value_sig6774);
}
async function ut(var_core_value_sig7DF1, var_core_value_sigDC86) {
  let var_core_value_sig0B0C = await ft(var_core_value_sig7DF1, var_core_value_sigDC86);
  return var_core_value_sig0B0C ? dt(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C) : false;
}
function dt(var_core_value_sigA39E, var_core_value_sigBBEE, var_core_value_sig011D) {
  return !!var_core_value_sigA39E.get(var_core_value_sigCB88).executeCommand(st[var_core_value_sigBBEE][var_core_value_sig011D], {
    value: var_core_value_sig011D
  });
}
function ft(var_core_value_sig6167, var_core_value_sig65A1) {
  let var_core_value_sig7F19 = var_core_value_sig6167.get(var_core_value_sig040A),
    var_core_value_sig7827 = var_core_value_sig6167.has(var_core_value_sig2AE0) ? var_core_value_sig6167.get(var_core_value_sig2AE0) : null,
    var_core_value_sig652C = var_core_value_sig6167.get(var_core_value_sig6BD9),
    var_core_value_sig7E32 = var_core_value_sig6167.get(var_core_value_sigA694),
    var_core_value_sig4C07 = M(var_core_value_sig7E32, var_core_value_sig4BB5.ROW),
    var_core_value_sig79AB = M(var_core_value_sig7E32, var_core_value_sig4BB5.COLUMN);
  return !var_core_value_sig4C07 || !var_core_value_sig79AB ? Promise.resolve(null) : new Promise(var_core_value_sig9C9F => {
    let var_core_value_sigFDEA = false,
      var_core_value_sig86D0 = null,
      var_core_value_sig4CD2 = var_core_value_sig429F => {
        var_core_value_sigFDEA || (var_core_value_sigFDEA = true, var_core_value_sig86D0 == null || var_core_value_sig86D0.dispose(), pt(var_core_value_sig7827), var_core_value_sig9C9F(var_core_value_sig429F));
      };
    var_core_value_sig86D0 = var_core_value_sig7F19.open({
      id: at,
      title: {
        title: var_core_value_sig652C.t(var_core_value_sig65A1 === "group" ? "sheets-outline-ui.group" : "sheets-outline-ui.ungroup")
      },
      width: 360,
      children: {
        label: {
          name: at,
          props: {
            rowLabel: mt(var_core_value_sig652C, var_core_value_sig65A1, var_core_value_sig4BB5.ROW, var_core_value_sig4C07.start, var_core_value_sig4C07.end),
            columnLabel: mt(var_core_value_sig652C, var_core_value_sig65A1, var_core_value_sig4BB5.COLUMN, var_core_value_sig79AB.start, var_core_value_sig79AB.end),
            onSelect: var_core_value_sigF62A => var_core_value_sig4CD2(var_core_value_sigF62A),
            onCancel: () => var_core_value_sig4CD2(null)
          }
        }
      },
      onClose: () => var_core_value_sig4CD2(null)
    }), var_core_value_sigFDEA && var_core_value_sig86D0.dispose();
  });
}
function pt(var_core_value_sig8E74) {
  var_core_value_sig8E74 && (queueMicrotask(() => var_core_value_sig8E74.focus()), setTimeout(() => var_core_value_sig8E74.focus(), 0));
}
function mt(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5, var_core_value_sigACC6) {
  let var_core_value_sig1614 = ct[var_core_value_sig841D][var_core_value_sig90CB];
  return var_core_value_sig90CB === var_core_value_sig4BB5.ROW ? var_core_value_sig104C.t(var_core_value_sig1614, "" + (var_core_value_sigBDF5 + 1), "" + (var_core_value_sigACC6 + 1)) : var_core_value_sig104C.t(var_core_value_sig1614, var_core_value_sig1F18.chatAtABC(var_core_value_sigBDF5), var_core_value_sig1F18.chatAtABC(var_core_value_sigACC6));
}
const ht = "sheet.toolbar.dimension-outline.group";
function gt(var_core_value_sig85C3) {
  return {
    id: ht,
    type: var_core_value_sig4186.SELECTOR,
    icon: "GroupingDoubleIcon",
    tooltip: "sheets-outline-ui.group",
    selections: _t(var_core_value_sig85C3),
    hidden$: Ct(var_core_value_sig85C3),
    disabled$: wt(var_core_value_sig85C3)
  };
}
function _t(var_core_value_sigB996) {
  return F(var_core_value_sigB996).pipe(var_core_value_sig6E68(() => kt(var_core_value_sigB996)));
}
const vt = "sheet.contextMenu.dimension-outline";
function yt(var_core_value_sig4BBA) {
  return xt(var_core_value_sig4BBA, var_core_value_sig4BB5.ROW);
}
function bt(var_core_value_sig6201) {
  return xt(var_core_value_sig6201, var_core_value_sig4BB5.COLUMN);
}
function xt(var_core_value_sig5151, var_core_value_sigB542) {
  return {
    id: vt,
    type: var_core_value_sig4186.SELECTOR,
    icon: "GroupingDoubleIcon",
    title: "sheets-outline-ui.group",
    tooltip: "sheets-outline-ui.group",
    selections: St(var_core_value_sig5151, var_core_value_sigB542),
    hidden$: Ct(var_core_value_sig5151),
    disabled$: wt(var_core_value_sig5151)
  };
}
function St(var_core_value_sigBB6C, var_core_value_sigE2BF) {
  return F(var_core_value_sigBB6C).pipe(var_core_value_sig6E68(() => At(var_core_value_sigBB6C, [var_core_value_sigE2BF])));
}
function Ct(var_core_value_sigB8C7) {
  return var_core_value_sig3D6F([var_core_value_sigF866(var_core_value_sigB8C7, var_core_value_sigD5A0.UNIVER_SHEET), F(var_core_value_sigB8C7)]).pipe(var_core_value_sig6E68(([var_core_value_sig48CA]) => var_core_value_sig48CA || !Tt(var_core_value_sigB8C7)));
}
function wt(var_core_value_sigA56E) {
  return F(var_core_value_sigA56E).pipe(var_core_value_sig09F3(() => {
    let var_core_value_sig50AF = var_core_value_sig555F(var_core_value_sigA56E.get(var_core_value_sig8122));
    return var_core_value_sig50AF ? var_core_value_sigB9FC(var_core_value_sigA56E, var_core_value_sig50AF.unitId, var_core_value_sig50AF.subUnitId).pipe(var_core_value_sig6E68(var_core_value_sig8178 => !var_core_value_sig8178)) : var_core_value_sig48EA(true);
  }));
}
function Tt(var_core_value_sig1998) {
  return Et(var_core_value_sig1998) != null;
}
function Et(var_core_value_sigFF19) {
  let var_core_value_sig43B8 = var_core_value_sigFF19.get(var_core_value_sigA694).getCurrentSelections();
  return (var_core_value_sig43B8 == null ? undefined : var_core_value_sig43B8.length) === 1 ? var_core_value_sig43B8[0].range : null;
}
function F(var_core_value_sigD98F) {
  let var_core_value_sig66C0 = var_core_value_sigD98F.get(var_core_value_sigA694),
    var_core_value_sig9D15 = var_core_value_sigD98F.get(var_core_value_sig5542);
  return var_core_value_sigD98F.get(var_core_value_sig8122).getCurrentTypeOfUnit$(var_core_value_sigD5A0.UNIVER_SHEET).pipe(var_core_value_sig09F3(var_core_value_sigA942 => var_core_value_sigA942 ? var_core_value_sig8DFE(var_core_value_sigA942.activeSheet$, var_core_value_sig66C0.selectionChanged$, var_core_value_sig9D15.change$).pipe(var_core_value_sig5E16(null)) : var_core_value_sig48EA(null)));
}
const Dt = {
    [var_core_value_sig4BB5.ROW]: Qe.id,
    [var_core_value_sig4BB5.COLUMN]: $e.id
  },
  Ot = {
    [var_core_value_sig4BB5.ROW]: nt.id,
    [var_core_value_sig4BB5.COLUMN]: rt.id
  };
function kt(var_core_value_sigB785) {
  return Tt(var_core_value_sigB785) ? [{
    id: N.id,
    commandId: N.id,
    value: "group",
    label: var_core_value_sigB785.get(var_core_value_sig6BD9).t("sheets-outline-ui.group"),
    disabled: Rt(var_core_value_sigB785)
  }, {
    id: P.id,
    commandId: P.id,
    value: "ungroup",
    label: var_core_value_sigB785.get(var_core_value_sig6BD9).t("sheets-outline-ui.ungroup"),
    disabled: zt(var_core_value_sigB785)
  }] : [];
}
function At(var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7) {
  let var_core_value_sig866F = var_core_value_sigC0E3.map(var_core_value_sigA621 => jt(Dt[var_core_value_sigA621], var_core_value_sigA621, Pt(var_core_value_sig130F, var_core_value_sigA621), I(var_core_value_sig130F, var_core_value_sigA621))),
    var_core_value_sigDE3D = var_core_value_sigC0E3.map(var_core_value_sigBBFF => jt(Ot[var_core_value_sigBBFF], var_core_value_sigBBFF, Ft(var_core_value_sig130F, var_core_value_sigBBFF), L(var_core_value_sig130F, var_core_value_sigBBFF)));
  return var_core_value_sig52F7 === "group" ? var_core_value_sig866F : var_core_value_sig52F7 === "ungroup" ? var_core_value_sigDE3D : [...var_core_value_sig866F, ...var_core_value_sigDE3D];
}
function jt(var_core_value_sigF175, var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0) {
  return {
    id: var_core_value_sigF175,
    commandId: var_core_value_sigF175,
    value: var_core_value_sig6A18,
    disabled: var_core_value_sig49B0,
    label: var_core_value_sig4E3D
  };
}
const Mt = {
    [var_core_value_sig4BB5.ROW]: "sheets-outline-ui.groupRows",
    [var_core_value_sig4BB5.COLUMN]: "sheets-outline-ui.groupColumns"
  },
  Nt = {
    [var_core_value_sig4BB5.ROW]: "sheets-outline-ui.ungroupRows",
    [var_core_value_sig4BB5.COLUMN]: "sheets-outline-ui.ungroupColumns"
  };
function Pt(var_core_value_sig2547, var_core_value_sigBCA9) {
  return It(var_core_value_sig2547, Mt, var_core_value_sigBCA9);
}
function Ft(var_core_value_sig4CDF, var_core_value_sig3F79) {
  return It(var_core_value_sig4CDF, Nt, var_core_value_sig3F79);
}
function It(var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B) {
  let var_core_value_sig780B = M(var_core_value_sig880E.get(var_core_value_sigA694), var_core_value_sigB57B);
  return var_core_value_sig780B ? var_core_value_sig880E.get(var_core_value_sig6BD9).t(var_core_value_sigC9ED[var_core_value_sig780B.axis], ...Lt(var_core_value_sig780B)) : "";
}
function Lt(var_core_value_sig7D1B) {
  return var_core_value_sig7D1B.axis === var_core_value_sig4BB5.ROW ? ["" + (var_core_value_sig7D1B.start + 1), "" + (var_core_value_sig7D1B.end + 1)] : [var_core_value_sig1F18.chatAtABC(var_core_value_sig7D1B.start), var_core_value_sig1F18.chatAtABC(var_core_value_sig7D1B.end)];
}
function I(var_core_value_sig7BE0, var_core_value_sig7D40) {
  let var_core_value_sig6C7E = M(var_core_value_sig7BE0.get(var_core_value_sigA694), var_core_value_sig7D40),
    var_core_value_sig68BE = var_core_value_sig555F(var_core_value_sig7BE0.get(var_core_value_sig8122));
  return !var_core_value_sig6C7E || !var_core_value_sig68BE || !var_core_value_sig5055(var_core_value_sig7BE0, var_core_value_sig68BE.unitId, var_core_value_sig68BE.subUnitId) || !var_core_value_sig7620(var_core_value_sig7BE0.get(var_core_value_sig5542).getOutlines(var_core_value_sig68BE.unitId, var_core_value_sig68BE.subUnitId), {
    id: "__menu_check__",
    unitId: var_core_value_sig68BE.unitId,
    subUnitId: var_core_value_sig68BE.subUnitId,
    axis: var_core_value_sig6C7E.axis,
    start: var_core_value_sig6C7E.start,
    end: var_core_value_sig6C7E.end,
    collapsed: false
  }).valid;
}
function L(var_core_value_sig04C6, var_core_value_sigCA05) {
  let var_core_value_sig2F2B = M(var_core_value_sig04C6.get(var_core_value_sigA694), var_core_value_sigCA05),
    var_core_value_sig70AF = var_core_value_sig555F(var_core_value_sig04C6.get(var_core_value_sig8122));
  return !var_core_value_sig2F2B || !var_core_value_sig70AF || !var_core_value_sig5055(var_core_value_sig04C6, var_core_value_sig70AF.unitId, var_core_value_sig70AF.subUnitId) || !var_core_value_sig04C6.get(var_core_value_sig5542).getOutlines(var_core_value_sig70AF.unitId, var_core_value_sig70AF.subUnitId).some(var_core_value_sig8889 => var_core_value_sig8889.axis === var_core_value_sig2F2B.axis && var_core_value_sig8889.start >= var_core_value_sig2F2B.start && var_core_value_sig8889.end <= var_core_value_sig2F2B.end);
}
function Rt(var_core_value_sigD04E) {
  let var_core_value_sigB99B = Et(var_core_value_sigD04E);
  return var_core_value_sigB99B ? var_core_value_sigB99B.rangeType === var_core_value_sig4161.ROW ? I(var_core_value_sigD04E, var_core_value_sig4BB5.ROW) : (var_core_value_sigB99B.rangeType === var_core_value_sig4161.COLUMN || I(var_core_value_sigD04E, var_core_value_sig4BB5.ROW)) && I(var_core_value_sigD04E, var_core_value_sig4BB5.COLUMN) : true;
}
function zt(var_core_value_sig5A75) {
  let var_core_value_sig7BAF = Et(var_core_value_sig5A75);
  return var_core_value_sig7BAF ? var_core_value_sig7BAF.rangeType === var_core_value_sig4161.ROW ? L(var_core_value_sig5A75, var_core_value_sig4BB5.ROW) : (var_core_value_sig7BAF.rangeType === var_core_value_sig4161.COLUMN || L(var_core_value_sig5A75, var_core_value_sig4BB5.ROW)) && L(var_core_value_sig5A75, var_core_value_sig4BB5.COLUMN) : true;
}
const Bt = {
  [var_core_value_sigB608.ORGANIZATION]: {
    [ht]: {
      order: 20,
      gridLayout: {
        row: 2,
        column: 3
      },
      menuItemFactory: gt
    }
  },
  [var_core_value_sigAB68.ROW_HEADER]: {
    [var_core_value_sig96FA.LAYOUT]: {
      [vt]: {
        order: 8,
        menuItemFactory: yt
      }
    }
  },
  [var_core_value_sigAB68.COL_HEADER]: {
    [var_core_value_sig96FA.LAYOUT]: {
      [vt]: {
        order: 8,
        menuItemFactory: bt
      }
    }
  }
};
var Vt = "@univerjs-pro/sheets-outline-ui",
  Ht = "1.0.0-insiders.20260907-70fc579";
const Ut = {};
function R(var_core_value_sig8F69, var_core_value_sig6884) {
  return function (var_core_value_sig32F8, var_core_value_sig5B67) {
    var_core_value_sig6884(var_core_value_sig32F8, var_core_value_sig5B67, var_core_value_sig8F69);
  };
}
function z(var_core_value_sig066E, var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sigC56D) {
  var var_core_value_sig3A17 = arguments.length,
    var_core_value_sig938F = var_core_value_sig3A17 < 3 ? var_core_value_sig9B0D : var_core_value_sigC56D === null ? var_core_value_sigC56D = Object.getOwnPropertyDescriptor(var_core_value_sig9B0D, var_core_value_sig3D2C) : var_core_value_sigC56D,
    var_core_value_sigD948;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig938F = Reflect.decorate(var_core_value_sig066E, var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sigC56D);else {
    for (var var_core_value_sigBE5E = var_core_value_sig066E.length - 1; var_core_value_sigBE5E >= 0; var_core_value_sigBE5E--) (var_core_value_sigD948 = var_core_value_sig066E[var_core_value_sigBE5E]) && (var_core_value_sig938F = (var_core_value_sig3A17 < 3 ? var_core_value_sigD948(var_core_value_sig938F) : var_core_value_sig3A17 > 3 ? var_core_value_sigD948(var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sig938F) : var_core_value_sigD948(var_core_value_sig9B0D, var_core_value_sig3D2C)) || var_core_value_sig938F);
  }
  return var_core_value_sig3A17 > 3 && var_core_value_sig938F && Object.defineProperty(var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sig938F), var_core_value_sig938F;
}
let B = class extends var_core_value_sigBC91 {
  constructor(var_core_value_sig1758, var_core_value_sig4805) {
    super(), this._componentManager = var_core_value_sig1758, this._iconManager = var_core_value_sig4805, this._registerComponents(), this._registerIcons();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](at, ot));
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      GroupingDoubleIcon: var_core_value_sig957F
    }));
  }
};
B = z([R(0, var_core_value_sigEDC6(var_core_value_sig44DD)), R(1, var_core_value_sigEDC6(var_core_value_sig6FB2))], B);
const Wt = new Set([var_core_value_sig3A85.id, var_core_value_sig2682.id, var_core_value_sig52CA.id, var_core_value_sig88F6.id]);
let V = class extends var_core_value_sigBC91 {
  constructor(var_core_value_sigE67E, var_core_value_sig2902, var_core_value_sig9989, var_core_value_sig698E) {
    super(), this._commandService = var_core_value_sigE67E, this._localeService = var_core_value_sig2902, this._sheetPermissionCheckController = var_core_value_sig9989, this._univerInstanceService = var_core_value_sig698E, this._initPermission();
  }
  _initPermission() {
    this.disposeWithMe(this._commandService["beforeCommandExecuted"](var_core_value_sigE9ED => {
      if (!Wt.has(var_core_value_sigE9ED.id)) return;
      let var_core_value_sigB577 = var_core_value_sig555F(this._univerInstanceService, var_core_value_sigE9ED.params);
      var_core_value_sigB577 && (this._sheetPermissionCheckController["permissionCheckWithoutRange"]({
        workbookTypes: [var_core_value_sig0428],
        worksheetTypes: [var_core_value_sigBE07]
      }, var_core_value_sigB577.unitId, var_core_value_sigB577.subUnitId) || this._sheetPermissionCheckController["blockExecuteWithoutPermission"](this._localeService["t"]("sheets-outline-ui.error.permission")));
    }));
  }
};
V = z([R(0, var_core_value_sigEDC6(var_core_value_sigCB88)), R(1, var_core_value_sigEDC6(var_core_value_sig6BD9)), R(2, var_core_value_sigEDC6(var_core_value_sig1157)), R(3, var_core_value_sig8122)], V);
const Gt = {
    id: N.id,
    preconditions: var_core_value_sig0281 => var_core_value_sig33C8(var_core_value_sig0281),
    binding: var_core_value_sigEB43.ARROW_RIGHT | var_core_value_sigF963.ALT | var_core_value_sigF963.SHIFT,
    mac: var_core_value_sigEB43.K | var_core_value_sigF963.CTRL_COMMAND | var_core_value_sigF963.SHIFT
  },
  Kt = {
    id: P.id,
    preconditions: var_core_value_sigED71 => var_core_value_sig33C8(var_core_value_sigED71),
    binding: var_core_value_sigEB43.ARROW_LEFT | var_core_value_sigF963.ALT | var_core_value_sigF963.SHIFT,
    mac: var_core_value_sigEB43.J | var_core_value_sigF963.CTRL_COMMAND | var_core_value_sigF963.SHIFT
  },
  qt = {
    [var_core_value_sig6709.INVALID_RANGE]: "sheets-outline-ui.error.invalidRange",
    [var_core_value_sig6709.OUT_OF_BOUNDS]: "sheets-outline-ui.error.outOfBounds",
    [var_core_value_sig6709.CROSSING]: "sheets-outline-ui.error.crossing",
    [var_core_value_sig6709.MAX_DEPTH]: "sheets-outline-ui.error.maxDepth",
    [var_core_value_sig6709.MOVE_SPLITS_OUTLINE]: "sheets-outline-ui.error.moveSplitsOutline",
    [var_core_value_sig6709.CLEAR_RANGE_NOT_CONTAIN_OUTLINE]: "sheets-outline-ui.error.clearRangeNotContainOutline",
    [var_core_value_sig6709.UNKNOWN]: "sheets-outline-ui.error.unknown"
  };
let H = class extends var_core_value_sigBC91 {
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
      type: var_core_value_sigC5C4.Error,
      content: this._localeService["t"](qt[var_core_value_sig20C8.reason])
    });
  }
};
H = z([R(0, var_core_value_sigEDC6(var_core_value_sig37DB)), R(1, var_core_value_sig9D96), R(2, var_core_value_sigEDC6(var_core_value_sig6BD9))], H);
let U = class extends var_core_value_sigBC91 {
  constructor(var_core_value_sigE9A7) {
    super(), this._menuManagerService = var_core_value_sigE9A7, this._menuManagerService["mergeMenu"](Bt);
  }
};
U = z([R(0, var_core_value_sigC349)], U);
function W(var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sig585D, var_core_value_sigE722 = {}) {
  return $t(var_core_value_sigA73E(var_core_value_sig281C).filter(var_core_value_sigBECE => var_core_value_sigBECE.unitId === var_core_value_sig3C92 && var_core_value_sigBECE.subUnitId === var_core_value_sigB16B && var_core_value_sigBECE.axis === var_core_value_sig585D), var_core_value_sigE722);
}
function Jt(var_core_value_sig062A, var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683 = {}) {
  return W(var_core_value_sig062A, var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683).reduce((var_core_value_sig1B22, var_core_value_sig7F72) => Math.max(var_core_value_sig1B22, var_core_value_sig7F72.depth), 0);
}
function G(var_core_value_sig26EC, var_core_value_sigEEDB = {}) {
  return var_core_value_sig26EC <= 0 ? 0 : (var_core_value_sigEEDB.includeLevelButtons ? Yt(var_core_value_sig26EC) : var_core_value_sig26EC) * 20;
}
function Yt(var_core_value_sig36E7) {
  return Math.max(0, var_core_value_sig36E7);
}
function Xt(var_core_value_sig6A78, var_core_value_sigF7EF, var_core_value_sig27F9) {
  return var_core_value_sig27F9.depth < var_core_value_sigF7EF ? false : !var_core_value_sig6A78.some(var_core_value_sig7B2A => var_core_value_sig7B2A.collapsed);
}
function Zt(var_core_value_sig393E, var_core_value_sigB609, var_core_value_sig390D) {
  for (let var_core_value_sig06CD = var_core_value_sig393E.length - 1; var_core_value_sig06CD >= 0; var_core_value_sig06CD--) {
    let var_core_value_sigD873 = var_core_value_sig393E[var_core_value_sig06CD];
    if (var_core_value_sigB609 >= var_core_value_sigD873.left && var_core_value_sigB609 <= var_core_value_sigD873.left + var_core_value_sigD873.width && var_core_value_sig390D >= var_core_value_sigD873.top && var_core_value_sig390D <= var_core_value_sigD873.top + var_core_value_sigD873.height) return var_core_value_sigD873;
  }
  return null;
}
function Qt(var_core_value_sigC928, var_core_value_sig39B7, var_core_value_sig18E01) {
  for (let var_core_value_sigA5F1 = var_core_value_sigC928.length - 1; var_core_value_sigA5F1 >= 0; var_core_value_sigA5F1--) {
    let var_core_value_sigA12B = var_core_value_sigC928[var_core_value_sigA5F1];
    if (var_core_value_sig39B7 >= var_core_value_sigA12B.left && var_core_value_sig39B7 <= var_core_value_sigA12B.left + var_core_value_sigA12B.width && var_core_value_sig18E01 >= var_core_value_sigA12B.top && var_core_value_sig18E01 <= var_core_value_sigA12B.top + var_core_value_sigA12B.height) return var_core_value_sigA12B;
  }
  return null;
}
function $t(var_core_value_sigE161, var_core_value_sigBDEE) {
  let var_core_value_sig1F40 = [];
  for (let var_core_value_sig97A2 of var_core_value_sigE161) {
    var_core_value_sig1F40.push(var_core_value_sig97A2);
    let var_core_value_sigF230 = var_core_value_sigBDEE.includeHiddenGroups || !var_core_value_sig97A2.collapsed ? var_core_value_sig97A2.children : var_core_value_sig97A2.children["filter"](var_core_value_sig7524 => en(var_core_value_sig97A2, var_core_value_sig7524));
    var_core_value_sigF230.length > 0 && var_core_value_sig1F40.push(...$t(var_core_value_sigF230, var_core_value_sigBDEE));
  }
  return var_core_value_sig1F40;
}
function en(var_core_value_sig3FC7, var_core_value_sig1E1B) {
  return var_core_value_sig3FC7.unitId === var_core_value_sig1E1B.unitId && var_core_value_sig3FC7.subUnitId === var_core_value_sig1E1B.subUnitId && var_core_value_sig3FC7.axis === var_core_value_sig1E1B.axis && var_core_value_sig3FC7.start === var_core_value_sig1E1B.start && var_core_value_sig3FC7.end === var_core_value_sig1E1B.end;
}
function K(var_core_value_sig3B10) {
  "@babel/helpers - typeof";

  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig07E9) {
    return typeof var_core_value_sig07E9;
  } : function (var_core_value_sig4F59) {
    return var_core_value_sig4F59 && typeof Symbol == "function" && var_core_value_sig4F59.constructor === Symbol && var_core_value_sig4F59 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig4F59;
  }, K(var_core_value_sig3B10);
}
function tn(var_core_value_sig89E6, var_core_value_sig4743) {
  if (K(var_core_value_sig89E6) != "object" || !var_core_value_sig89E6) return var_core_value_sig89E6;
  var var_core_value_sigEB6A = var_core_value_sig89E6[Symbol.toPrimitive];
  if (var_core_value_sigEB6A !== undefined) {
    var var_core_value_sig3D46 = var_core_value_sigEB6A.call(var_core_value_sig89E6, var_core_value_sig4743 || "default");
    if (K(var_core_value_sig3D46) != "object") return var_core_value_sig3D46;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig4743 === "string" ? String : Number)(var_core_value_sig89E6);
}
function nn(var_core_value_sigCC93) {
  var var_core_value_sig5964 = tn(var_core_value_sigCC93, "string");
  return K(var_core_value_sig5964) == "symbol" ? var_core_value_sig5964 : var_core_value_sig5964 + "";
}
function q(var_core_value_sig808B, var_core_value_sig2A26, var_core_value_sig1179) {
  return (var_core_value_sig2A26 = nn(var_core_value_sig2A26)) in var_core_value_sig808B ? Object.defineProperty(var_core_value_sig808B, var_core_value_sig2A26, {
    value: var_core_value_sig1179,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig808B[var_core_value_sig2A26] = var_core_value_sig1179, var_core_value_sig808B;
}
const J = 0.5;
var rn = class extends var_core_value_sigED1C {
  constructor(var_core_value_sigF564, var_core_value_sig8CFA, var_core_value_sig2E11, var_core_value_sig5B69, var_core_value_sigB098) {
    super(var_core_value_sigF564, {
      evented: true,
      fill: "rgba(0, 0, 0, 0)",
      zIndex: 100
    }), this._axis = var_core_value_sig8CFA, this._sheetsOutlineModel = var_core_value_sig2E11, this._themeService = var_core_value_sig5B69, this._getSkeleton = var_core_value_sigB098, q(this, "_buttons", []), q(this, "_levelButtons", []), q(this, "_lines", []), q(this, "_hoveredOutlineId", null), q(this, "_hoveredLevel", null);
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
      var_core_value_sigB33B = G(Jt(this._sheetsOutlineModel["getOutlines"](var_core_value_sig2B65, var_core_value_sigD7EA), var_core_value_sig2B65, var_core_value_sigD7EA, this._axis, {
        includeHiddenGroups: true
      }), {
        includeLevelButtons: true
      });
    if (var_core_value_sigB33B <= 0) {
      this.hide();
      return;
    }
    this.show(), this._axis === var_core_value_sig4BB5.ROW ? this.transformByState({
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
    return Zt(this._buttons, var_core_value_sigEF3E, var_core_value_sig273D);
  }
  hitTestLevelButton(var_core_value_sig9A0D, var_core_value_sigA319) {
    return Qt(this._levelButtons, var_core_value_sig9A0D, var_core_value_sigA319);
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
      var_core_value_sig0285 = W(var_core_value_sig1896, var_core_value_sigDB4A, var_core_value_sig6418, this._axis),
      var_core_value_sig777D = W(var_core_value_sig1896, var_core_value_sigDB4A, var_core_value_sig6418, this._axis, {
        includeHiddenGroups: true
      });
    if (var_core_value_sig777D.length === 0) return;
    let var_core_value_sig3F4C = var_core_value_sig777D.reduce((var_core_value_sig6F91, var_core_value_sigF9C7) => Math.max(var_core_value_sig6F91, var_core_value_sigF9C7.depth), 0),
      var_core_value_sigD65A = G(var_core_value_sig3F4C, {
        includeLevelButtons: true
      }),
      var_core_value_sig5A13 = sn(this._axis, var_core_value_sig777D, var_core_value_sig3F4C, var_core_value_sigD65A, var_core_value_sigC368);
    var_core_value_sig5090.save(), var_core_value_sig5090.textAlign = "center", var_core_value_sig5090.textBaseline = "middle", var_core_value_sig5090.font = "12px\x20" + var_core_value_sigAC51, var_core_value_sig5090.setLineWidthByPrecision(2), this._axis === var_core_value_sig4BB5.ROW ? this._drawRows(var_core_value_sig5090, var_core_value_sig0285, var_core_value_sig5A13, var_core_value_sigD65A, var_core_value_sigC368) : this._drawColumns(var_core_value_sig5090, var_core_value_sig0285, var_core_value_sig5A13, var_core_value_sigD65A, var_core_value_sigC368), var_core_value_sig5090.restore();
  }
  _drawRows(var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig34C8) {
    let {
        rowHeightAccumulation: var_core_value_sigB744,
        rowTotalHeight: var_core_value_sigEAE2,
        columnHeaderHeightAndMarginTop: var_core_value_sigE68A
      } = var_core_value_sig34C8,
      var_core_value_sig3E68 = Y(this._themeService);
    var_core_value_sigF593.save(), var_core_value_sigF593.fillStyle = var_core_value_sig3E68.gutterBackground, var_core_value_sigF593.fillRectByPrecision(0, 0, var_core_value_sigF2E6, var_core_value_sigE68A + var_core_value_sigEAE2), var_core_value_sigF593.strokeStyle = var_core_value_sig3E68.gutterBorder, var_core_value_sigF593.setLineWidthByPrecision(1), var_core_value_sigF593.beginPath(), var_core_value_sigF593.moveToByPrecision(var_core_value_sigF2E6 - J, 0), var_core_value_sigF593.lineToByPrecision(var_core_value_sigF2E6 - J, var_core_value_sigE68A + var_core_value_sigEAE2), var_core_value_sigF593.stroke(), var_core_value_sigF593.restore(), this._drawLevelButtons(var_core_value_sigF593, var_core_value_sigB512), var_core_value_sigF593.setLineWidthByPrecision(2);
    for (let var_core_value_sig8895 of var_core_value_sig3607) {
      let var_core_value_sig2AD0 = Math.min(var_core_value_sigF2E6 - 14 - 3, (var_core_value_sig8895.depth - 1) * 20 + 3),
        var_core_value_sig3EEE = var_core_value_sig2AD0 + 14 / 2,
        var_core_value_sigBC46 = cn(var_core_value_sigB744, var_core_value_sig8895.start),
        var_core_value_sig3D7D = X(var_core_value_sigB744, var_core_value_sig8895.end, var_core_value_sigEAE2),
        var_core_value_sig27E5 = ln(var_core_value_sigB744, var_core_value_sig8895.end, var_core_value_sigEAE2, 14),
        var_core_value_sig8061 = this._hoveredOutlineId === var_core_value_sig8895.id,
        var_core_value_sig4D4C = this._getHoverColor(),
        var_core_value_sigC9E0 = Math.max(0, var_core_value_sigBC46),
        var_core_value_sig76BA = Math.max(var_core_value_sigBC46, Math.min(var_core_value_sigEAE2, var_core_value_sig3D7D)),
        var_core_value_sigFBFA = un(var_core_value_sigB744, var_core_value_sig8895.start, var_core_value_sig8895.end, var_core_value_sigEAE2);
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
      var_core_value_sig21B2 = Y(this._themeService);
    var_core_value_sigF4C5.save(), var_core_value_sigF4C5.fillStyle = var_core_value_sig21B2.gutterBackground, var_core_value_sigF4C5.fillRectByPrecision(0, 0, var_core_value_sig74A8 + var_core_value_sigE243, var_core_value_sig8EA0), var_core_value_sigF4C5.strokeStyle = var_core_value_sig21B2.gutterBorder, var_core_value_sigF4C5.setLineWidthByPrecision(1), var_core_value_sigF4C5.beginPath(), var_core_value_sigF4C5.moveToByPrecision(0, var_core_value_sig8EA0 - J), var_core_value_sigF4C5.lineToByPrecision(var_core_value_sig74A8 + var_core_value_sigE243, var_core_value_sig8EA0 - J), var_core_value_sigF4C5.stroke(), var_core_value_sigF4C5.restore(), this._drawLevelButtons(var_core_value_sigF4C5, var_core_value_sig492F), var_core_value_sigF4C5.setLineWidthByPrecision(2);
    for (let var_core_value_sigC80B of var_core_value_sig5410) {
      let var_core_value_sigF602 = Math.min(var_core_value_sig8EA0 - 14 - 3, (var_core_value_sigC80B.depth - 1) * 20 + 3),
        var_core_value_sig1BBD = var_core_value_sigF602 + 14 / 2,
        var_core_value_sigF704 = cn(var_core_value_sigCDDA, var_core_value_sigC80B.start),
        var_core_value_sig2BCF = X(var_core_value_sigCDDA, var_core_value_sigC80B.end, var_core_value_sigE243),
        var_core_value_sig0D69 = ln(var_core_value_sigCDDA, var_core_value_sigC80B.end, var_core_value_sigE243, 14),
        var_core_value_sig480E = this._hoveredOutlineId === var_core_value_sigC80B.id,
        var_core_value_sig26DB = this._getHoverColor(),
        var_core_value_sigF0F9 = Math.max(0, var_core_value_sigF704),
        var_core_value_sig1A0F = Math.max(var_core_value_sigF704, Math.min(var_core_value_sigE243, var_core_value_sig2BCF)),
        var_core_value_sigFBA4 = un(var_core_value_sigCDDA, var_core_value_sigC80B.start, var_core_value_sigC80B.end, var_core_value_sigE243);
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
    let var_core_value_sig7F33 = Y(this._themeService);
    for (let var_core_value_sig284F of var_core_value_sigACCB) {
      let var_core_value_sig4383 = this._hoveredLevel === var_core_value_sig284F.level;
      var_core_value_sigDE08.save(), var_core_value_sigDE08.translateWithPrecision(var_core_value_sig284F.left, var_core_value_sig284F.top), var_core_value_sigCAF7.drawWith(var_core_value_sigDE08, {
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
    let var_core_value_sig01B3 = an(var_core_value_sig8109.collapsed, var_core_value_sig7565, this._themeService);
    var_core_value_sigCAF7.drawWith(var_core_value_sig0C53, {
      width: 14,
      height: 14,
      radius: 3,
      fill: var_core_value_sig01B3.fill,
      stroke: var_core_value_sig01B3.stroke
    }), on(var_core_value_sig0C53, var_core_value_sig8109.collapsed, var_core_value_sig01B3.text), var_core_value_sig0C53.restore(), this._buttons["push"]({
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
function an(var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5) {
  let var_core_value_sig7100 = Y(var_core_value_sig1AE5);
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
function Y(var_core_value_sigA19A) {
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
function on(var_core_value_sigD3F5, var_core_value_sig3082, var_core_value_sigF5D1) {
  var_core_value_sigD3F5.strokeStyle = var_core_value_sigF5D1, var_core_value_sigD3F5.setLineWidthByPrecision(1.5), var_core_value_sigD3F5.beginPath(), var_core_value_sigD3F5.moveToByPrecision(4, 7), var_core_value_sigD3F5.lineToByPrecision(10, 7), var_core_value_sig3082 && (var_core_value_sigD3F5.moveToByPrecision(7, 4), var_core_value_sigD3F5.lineToByPrecision(7, 10)), var_core_value_sigD3F5.stroke();
}
function sn(var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig90C0, var_core_value_sigF1B2) {
  let var_core_value_sigC2BB = Yt(var_core_value_sig13D7);
  return Array.from({
    length: var_core_value_sigC2BB
  }, (var_core_value_sigDF87, var_core_value_sig9EE0) => ({
    axis: var_core_value_sig8775,
    level: var_core_value_sig9EE0 + 1,
    active: false,
    left: var_core_value_sig8775 === var_core_value_sig4BB5.ROW ? var_core_value_sig9EE0 * 20 + 3 : Math.max(3, var_core_value_sigF1B2.rowHeaderWidthAndMarginLeft - 14 - 3),
    top: var_core_value_sig8775 === var_core_value_sig4BB5.ROW ? Math.max(3, var_core_value_sigF1B2.columnHeaderHeightAndMarginTop - 14 - 3) : Math.min(var_core_value_sig90C0 - 14 - 3, var_core_value_sig9EE0 * 20 + 3),
    width: 14,
    height: 14
  }));
}
function cn(var_core_value_sigD9DB, var_core_value_sigA363) {
  return var_core_value_sigA363 <= 0 ? 0 : var_core_value_sigD9DB[var_core_value_sigA363 - 1] ?? var_core_value_sigD9DB[var_core_value_sigD9DB.length - 1] ?? 0;
}
function ln(var_core_value_sigFBA5, var_core_value_sigAC47, var_core_value_sigA06F, var_core_value_sig770E) {
  let var_core_value_sig4654 = X(var_core_value_sigFBA5, var_core_value_sigAC47, var_core_value_sigA06F) - var_core_value_sig770E / 2;
  return Math.max(3, Math.min(Math.max(var_core_value_sigA06F - var_core_value_sig770E - 3, 3), var_core_value_sig4654));
}
function un(var_core_value_sigB26B, var_core_value_sig019B, var_core_value_sigC6BC, var_core_value_sig8EC2) {
  return Math.max(0, Math.min(var_core_value_sig8EC2, cn(var_core_value_sigB26B, var_core_value_sig019B)));
}
function X(var_core_value_sigA8C3, var_core_value_sig5276, var_core_value_sig031B) {
  let var_core_value_sig9DC0 = var_core_value_sig5276 + 1;
  return var_core_value_sig9DC0 >= 0 && var_core_value_sig9DC0 < var_core_value_sigA8C3.length ? ((var_core_value_sig9DC0 <= 0 ? 0 : var_core_value_sigA8C3[var_core_value_sig9DC0 - 1] ?? 0) + (var_core_value_sigA8C3[var_core_value_sig9DC0] ?? var_core_value_sig031B)) / 2 : var_core_value_sig031B;
}
const dn = new Set(["sheet.mutation.add-dimension-outline", "sheet.mutation.remove-dimension-outline", "sheet.mutation.set-dimension-outline-collapsed", "sheet.mutation.clear-dimension-outlines", "sheet.mutation.transform-dimension-outlines", var_core_value_sig00BE.id, var_core_value_sig7BB5.id, var_core_value_sigE6D0.id, var_core_value_sig8E91.id]);
let Z = class extends var_core_value_sigBC91 {
  constructor(var_core_value_sigF0511, var_core_value_sig0B45, var_core_value_sig36F8, var_core_value_sig03E1, var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799) {
    super(), this._context = var_core_value_sigF0511, this._sheetsOutlineModel = var_core_value_sig0B45, this._sheetSkeletonManagerService = var_core_value_sig36F8, this._renderManagerService = var_core_value_sig03E1, this._commandService = var_core_value_sigBB57, this._themeService = var_core_value_sig7C4A, this._headerUnhideRangeService = var_core_value_sigE799, q(this, "_rowOutlineShape", undefined), q(this, "_columnOutlineShape", undefined), q(this, "_headerBaseSize", new Map()), q(this, "_syncingHeaderSize", false), this._rowOutlineShape = new rn("SheetsDimensionOutlineRowOutlineShape", var_core_value_sig4BB5.ROW, this._sheetsOutlineModel, this._themeService, () => this._sheetSkeletonManagerService["getCurrentSkeleton"]() || null), this._columnOutlineShape = new rn("SheetsDimensionOutlineColumnOutlineShape", var_core_value_sig4BB5.COLUMN, this._sheetsOutlineModel, this._themeService, () => this._sheetSkeletonManagerService["getCurrentSkeleton"]() || null), this._initHeaderUnhideRangeRules(), this._initOutlineShapes(), this._initRefresh(), this._refreshCurrentSheet();
  }
  _initHeaderUnhideRangeRules() {
    this.disposeWithMe(this._headerUnhideRangeService["registerRangeVisibleHandler"]((var_core_value_sigE154, var_core_value_sig4632) => var_core_value_sigE154 && pn(this._sheetsOutlineModel["getOutlines"](var_core_value_sig4632.workbook["getUnitId"](), var_core_value_sig4632.worksheet["getSheetId"]()), hn(var_core_value_sig4632.axis), var_core_value_sig4632.range)));
  }
  _initOutlineShapes() {
    this._context["scene"].addObjects([this._rowOutlineShape, this._columnOutlineShape], 11), this.disposeWithMe(var_core_value_sig10AA(() => {
      this._context["scene"].removeObjects([this._rowOutlineShape, this._columnOutlineShape]);
    })), this.disposeWithMe(this._rowOutlineShape["onPointerMove$"].subscribeEvent((var_core_value_sig12F2, var_core_value_sig2259) => {
      this._handleOutlinePointerMove(var_core_value_sig12F2, var_core_value_sig2259, this._rowOutlineShape, var_core_value_sig4BB5.ROW);
    })), this.disposeWithMe(this._rowOutlineShape["onPointerLeave$"].subscribeEvent((var_core_value_sig9E2F, var_core_value_sigD082) => {
      this._handleOutlinePointerLeave(var_core_value_sig9E2F, var_core_value_sigD082, this._rowOutlineShape);
    })), this.disposeWithMe(this._rowOutlineShape["onPointerDown$"].subscribeEvent((var_core_value_sigDBB7, var_core_value_sigD0A8) => {
      this._handleOutlinePointerDown(var_core_value_sigDBB7, var_core_value_sigD0A8, this._rowOutlineShape, var_core_value_sig4BB5.ROW);
    })), this.disposeWithMe(this._columnOutlineShape["onPointerMove$"].subscribeEvent((var_core_value_sigF4B9, var_core_value_sig5CEE) => {
      this._handleOutlinePointerMove(var_core_value_sigF4B9, var_core_value_sig5CEE, this._columnOutlineShape, var_core_value_sig4BB5.COLUMN);
    })), this.disposeWithMe(this._columnOutlineShape["onPointerLeave$"].subscribeEvent((var_core_value_sigE92A, var_core_value_sig362B) => {
      this._handleOutlinePointerLeave(var_core_value_sigE92A, var_core_value_sig362B, this._columnOutlineShape);
    })), this.disposeWithMe(this._columnOutlineShape["onPointerDown$"].subscribeEvent((var_core_value_sig5CA5, var_core_value_sigE90F) => {
      this._handleOutlinePointerDown(var_core_value_sig5CA5, var_core_value_sigE90F, this._columnOutlineShape, var_core_value_sig4BB5.COLUMN);
    }));
  }
  _initRefresh() {
    var var_core_value_sigB601;
    let var_core_value_sig8B71 = (var_core_value_sigB601 = this._context["unit"]) == null ? undefined : var_core_value_sigB601.activeSheet$,
      var_core_value_sigAEFB = var_core_value_sig81B2(this._commandService["onCommandExecuted"].bind(this._commandService)).pipe(var_core_value_sig336C(([var_core_value_sigEFD4]) => var_core_value_sigEFD4.type === var_core_value_sig3801.MUTATION && dn.has(var_core_value_sigEFD4.id)));
    this.disposeWithMe(var_core_value_sig8DFE(this._sheetsOutlineModel["change$"], var_core_value_sigAEFB, this._themeService["currentTheme$"], this._sheetSkeletonManagerService["currentSkeleton$"].pipe(var_core_value_sig336C(var_core_value_sig861B => var_core_value_sig861B != null && !this._syncingHeaderSize)), ...(var_core_value_sig8B71 ? [var_core_value_sig8B71] : [])).subscribe(() => this._refreshCurrentSheet()));
  }
  _refreshCurrentSheet() {
    var var_core_value_sig826B, var_core_value_sigCF89, var_core_value_sig00CB;
    this._sheetSkeletonManagerService["reCalculate"](), this._syncOutlineHeaderSize(), this._rowOutlineShape["refreshBounds"](), this._columnOutlineShape["refreshBounds"](), (var_core_value_sig826B = this._context["mainComponent"]) == null || var_core_value_sig826B.makeDirty(), (var_core_value_sigCF89 = this._context["components"].get(var_core_value_sigAA1E.ROW)) == null || var_core_value_sigCF89.makeDirty(true), (var_core_value_sig00CB = this._context["components"].get(var_core_value_sigAA1E.COLUMN)) == null || var_core_value_sig00CB.makeDirty(true), this._rowOutlineShape["makeDirty"](true), this._columnOutlineShape["makeDirty"](true), this._context["scene"].makeDirty();
  }
  _syncOutlineHeaderSize() {
    if (this._syncingHeaderSize) return;
    let var_core_value_sig77EE = this._context["unit"].getActiveSheet();
    if (!var_core_value_sig77EE) return;
    let var_core_value_sig9F76 = this._context["unit"].getUnitId(),
      var_core_value_sigB008 = var_core_value_sig77EE.getSheetId(),
      var_core_value_sig8721 = this._sheetsOutlineModel["getOutlines"](var_core_value_sig9F76, var_core_value_sigB008),
      var_core_value_sig08BA = Jt(var_core_value_sig8721, var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig4BB5.ROW, {
        includeHiddenGroups: true
      }),
      var_core_value_sigDBB5 = Jt(var_core_value_sig8721, var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig4BB5.COLUMN, {
        includeHiddenGroups: true
      }),
      var_core_value_sigCFAC = G(var_core_value_sig08BA, {
        includeLevelButtons: true
      }),
      var_core_value_sig237B = G(var_core_value_sigDBB5, {
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
        rowHeaderWidth: fn(var_core_value_sigFD0C == null || (var_core_value_sig48DD = var_core_value_sigFD0C.rowHeader) == null ? undefined : var_core_value_sig48DD.width, 46, 240, var_core_value_sig1BD9, var_core_value_sigA937, var_core_value_sig9CD9 == null ? undefined : var_core_value_sig9CD9.rowHeaderWidth),
        columnHeaderHeight: fn(var_core_value_sigFD0C == null || (var_core_value_sig5E6A = var_core_value_sigFD0C.columnHeader) == null ? undefined : var_core_value_sig5E6A.height, 20, 160, var_core_value_sigE43E, var_core_value_sigCAD5, var_core_value_sig9CD9 == null ? undefined : var_core_value_sig9CD9.columnHeaderHeight)
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
    var_core_value_sig5241.setHoveredLevel((var_core_value_sigE4C6 == null ? undefined : var_core_value_sigE4C6.level) ?? null), var_core_value_sig5241.setHoveredOutline(var_core_value_sigFC87), var_core_value_sigE4C6 || var_core_value_sigFC87 ? this._context["scene"].setCursor(var_core_value_sig279C.POINTER) : this._context["scene"].resetCursor();
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
      this._commandService["syncExecuteCommand"](var_core_value_sig88F6.id, {
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
      var_core_value_sigEAE5 = W(this._sheetsOutlineModel["getOutlines"](var_core_value_sig6998, var_core_value_sigF639), var_core_value_sig6998, var_core_value_sigF639, var_core_value_sig2281, {
        includeHiddenGroups: true
      }).find(var_core_value_sig5237 => var_core_value_sig5237.id === var_core_value_sig7664);
    var_core_value_sigEAE5 && this._commandService["syncExecuteCommand"](var_core_value_sig6AAD.id, mn(var_core_value_sig6998, var_core_value_sigF639, var_core_value_sigEAE5, var_core_value_sig5E86.getRowCount(), var_core_value_sig5E86.getColumnCount()));
  }
  _handleOutlineLevelButtonDown(var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82) {
    let var_core_value_sigCF4E = this._context["unit"].getUnitId(),
      var_core_value_sig6CAD = W(this._sheetsOutlineModel["getOutlines"](var_core_value_sigCF4E, var_core_value_sigCB82), var_core_value_sigCF4E, var_core_value_sigCB82, var_core_value_sig6D47, {
        includeHiddenGroups: true
      });
    for (let var_core_value_sigBB00 of var_core_value_sig6CAD) {
      let var_core_value_sig48BD = Xt(var_core_value_sig6CAD, var_core_value_sigE94C.level, var_core_value_sigBB00);
      var_core_value_sigBB00.collapsed !== var_core_value_sig48BD && this._commandService["syncExecuteCommand"](var_core_value_sig88F6.id, {
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
      var_core_value_sig210D = var_core_value_sig59CE(var_core_value_sig8CF5.offsetX, var_core_value_sig8CF5.offsetY, this._context["scene"], var_core_value_sigDDD7);
    return var_core_value_sigB2CE === var_core_value_sig4BB5.ROW ? {
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
Z = z([R(1, var_core_value_sigEDC6(var_core_value_sig5542)), R(2, var_core_value_sigEDC6(var_core_value_sigC9F5)), R(3, var_core_value_sig8986), R(4, var_core_value_sigCB88), R(5, var_core_value_sigEDC6(var_core_value_sig7580)), R(6, var_core_value_sigEDC6(var_core_value_sig038E))], Z);
function fn(var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigE718, var_core_value_sigAEC8, var_core_value_sigB977, var_core_value_sig2949) {
  let var_core_value_sig308A = var_core_value_sig2949 ?? var_core_value_sig9CCB;
  if (typeof var_core_value_sig95F0 != "number" || var_core_value_sig95F0 <= 0 || var_core_value_sigAEC8 > 0 && var_core_value_sig95F0 > var_core_value_sigE718) return var_core_value_sig308A;
  if (var_core_value_sigAEC8 > 0 && var_core_value_sigB977 > 0) {
    if (var_core_value_sig2949 != null && var_core_value_sig95F0 === var_core_value_sig2949 + var_core_value_sigB977) return var_core_value_sig2949;
    if (var_core_value_sig95F0 === var_core_value_sig9CCB + var_core_value_sigB977) return var_core_value_sig9CCB;
  }
  return var_core_value_sig95F0;
}
function pn(var_core_value_sig528D, var_core_value_sigA309, var_core_value_sig9E20) {
  return !var_core_value_sig528D.some(var_core_value_sig6A71 => var_core_value_sig6A71.axis !== var_core_value_sigA309 || !var_core_value_sig6A71.collapsed ? false : var_core_value_sigA309 === var_core_value_sig4BB5.ROW ? var_core_value_sig9E20.startRow === var_core_value_sig6A71.start && var_core_value_sig9E20.endRow === var_core_value_sig6A71.end : var_core_value_sig9E20.startColumn === var_core_value_sig6A71.start && var_core_value_sig9E20.endColumn === var_core_value_sig6A71.end);
}
function mn(var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A, var_core_value_sig14CB, var_core_value_sigFDEE) {
  if (var_core_value_sig218A.axis === var_core_value_sig4BB5.ROW) {
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
          rangeType: var_core_value_sig4161.ROW
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
        rangeType: var_core_value_sig4161.COLUMN
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
function hn(var_core_value_sigCD82) {
  return var_core_value_sigCD82 === var_core_value_sig2CD3.ROW ? var_core_value_sig4BB5.ROW : var_core_value_sig4BB5.COLUMN;
}
let $ = class extends var_core_value_sig7E56 {
  constructor(var_core_value_sig37A8 = Ut, var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04) {
    super(), this._config = var_core_value_sig37A8, this._injector = var_core_value_sigA90D, this._commandService = var_core_value_sig7A3C, this._renderManagerService = var_core_value_sig0511, this._shortcutService = var_core_value_sig1F44, this._configService = var_core_value_sigCB04;
    let {
      menu: var_core_value_sig947E,
      ...var_core_value_sig4545
    } = var_core_value_sigA0A5({}, Ut, this._config);
    var_core_value_sig947E && this._configService["setConfig"]("menu", var_core_value_sig947E, {
      merge: true
    }), this._configService["setConfig"]("sheets-outline-ui.config", var_core_value_sig4545);
  }
  onStarting() {
    this._injector["add"]([B]), this._injector["get"](B), [[V], [H], [U]].forEach(var_core_value_sig7E54 => this._injector["add"](var_core_value_sig7E54)), this._initRegisterCommand(), this._initRegisterShortcut(), this._injector["get"](V), this._injector["get"](H), this._injector["get"](U);
  }
  onReady() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](var_core_value_sigD5A0.UNIVER_SHEET, [Z]));
  }
  _initRegisterCommand() {
    [Ze, Qe, $e, tt, nt, rt, N, P].forEach(var_core_value_sig9A8D => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig9A8D)));
  }
  _initRegisterShortcut() {
    [Gt, Kt].forEach(var_core_value_sigC259 => this.disposeWithMe(this._shortcutService["registerShortcut"](var_core_value_sigC259)));
  }
};
q($, "pluginName", var_core_value_sigC030 + "_UI_PLUGIN"), q($, "packageName", Vt), q($, "version", Ht), q($, "type", var_core_value_sigD5A0.UNIVER_SHEET), $ = z([var_core_value_sig45F0(var_core_value_sig6D19, var_core_value_sig726E, var_core_value_sig18E0, var_core_value_sigE0A9, var_core_value_sig7EEA), R(1, var_core_value_sigEDC6(var_core_value_sig611A)), R(2, var_core_value_sigCB88), R(3, var_core_value_sig8986), R(4, var_core_value_sig2776), R(5, var_core_value_sig8D65)], $);
export { Bt as SheetsOutlineUIMenuSchema, $ as UniverSheetsOutlineUIPlugin };
