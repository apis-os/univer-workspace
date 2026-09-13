Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/bases-history"),
  t = require("@univerjs-pro/bases-ui"),
  n = require("@univerjs-pro/collaboration-client"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs/core"),
  a = require("@univerjs-pro/edit-history"),
  o = require("@univerjs/protocol"),
  s = require("@univerjs/ui"),
  c = require("@univerjs-pro/bases"),
  l = require("@univerjs-pro/bases-dashboard"),
  u = require("@univerjs-pro/bases-dashboard-ui"),
  d = require("@univerjs-pro/collaboration"),
  ee = require("@univerjs-pro/engine-formula"),
  f = require("@univerjs/engine-render"),
  te = require("@univerjs/network"),
  p = require("rxjs"),
  m = require("@univerjs-pro/edit-history-ui"),
  h = require("@univerjs/design"),
  g = require("react/jsx-runtime"),
  _ = require("@univerjs/icons");
const v = "bases-history-ui.config",
  y = {
    historyServerUrl: "/universer-api/history"
  };
var b = "@univerjs-pro/bases-history-ui",
  x = "1.0.0-insiders.20260907-70fc579";
function S(var_core_value_sig37A8, var_core_value_sigA90D) {
  return function (var_core_value_sig5CA5, var_core_value_sigE90F) {
    var_core_value_sigA90D(var_core_value_sig5CA5, var_core_value_sigE90F, var_core_value_sig37A8);
  };
}
function C(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04) {
  var var_core_value_sig947E = arguments.length,
    var_core_value_sig4545 = var_core_value_sig947E < 3 ? var_core_value_sig0511 : var_core_value_sigCB04 === null ? var_core_value_sigCB04 = Object.getOwnPropertyDescriptor(var_core_value_sig0511, var_core_value_sig1F44) : var_core_value_sigCB04,
    var_core_value_sigF39A;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig4545 = Reflect.decorate(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04);else {
    for (var var_core_value_sigF79C = var_core_value_sig7A3C.length - 1; var_core_value_sigF79C >= 0; var_core_value_sigF79C--) (var_core_value_sigF39A = var_core_value_sig7A3C[var_core_value_sigF79C]) && (var_core_value_sig4545 = (var_core_value_sig947E < 3 ? var_core_value_sigF39A(var_core_value_sig4545) : var_core_value_sig947E > 3 ? var_core_value_sigF39A(var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sig4545) : var_core_value_sigF39A(var_core_value_sig0511, var_core_value_sig1F44)) || var_core_value_sig4545);
  }
  return var_core_value_sig947E > 3 && var_core_value_sig4545 && Object.defineProperty(var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sig4545), var_core_value_sig4545;
}
let w = class extends i.Disposable {
  constructor(var_core_value_sigEFD4, var_core_value_sig861B, var_core_value_sig5237, var_core_value_sigBB00) {
    super(), this._authzIoService = var_core_value_sig861B, this._stateService = var_core_value_sig5237, this._univerInstanceService = var_core_value_sigBB00, this.disposeWithMe(var_core_value_sigEFD4.register({
      type: i.UniverInstanceType["UNIVER_BASE"],
      canView: var_core_value_sig8061 => this._hasPermission(var_core_value_sig8061, o.UnitAction["ViewHistory"]),
      canRevert: var_core_value_sig4D4C => !!this._getBase(var_core_value_sig4D4C) && this._hasPermission(var_core_value_sig4D4C, o.UnitAction["RecoverHistory"]),
      captureLocation: () => this._captureLocation(),
      restoreLocation: (var_core_value_sigC9E0, var_core_value_sig76BA) => this._restoreLocation(var_core_value_sigC9E0, ne(var_core_value_sig76BA) ? var_core_value_sig76BA : undefined)
    }));
  }
  _captureLocation() {
    let var_core_value_sig7E54 = this._stateService["getState"]();
    return {
      tableId: var_core_value_sig7E54.activeTableId,
      viewId: var_core_value_sig7E54.activeViewId,
      selection: var_core_value_sig7E54.selection
    };
  }
  _restoreLocation(var_core_value_sig9A8D, var_core_value_sigC259) {
    let var_core_value_sig9C9F = this._getBase(var_core_value_sig9A8D),
      var_core_value_sigFDEA = var_core_value_sigC259 != null && var_core_value_sigC259.tableId && var_core_value_sig9C9F != null && var_core_value_sig9C9F.getSnapshot().tables[var_core_value_sigC259.tableId] ? var_core_value_sigC259.tableId : var_core_value_sig9C9F == null ? undefined : var_core_value_sig9C9F.getSnapshot().tableOrder[0];
    if (!var_core_value_sigFDEA) return;
    let var_core_value_sig86D0 = var_core_value_sig9C9F == null ? undefined : var_core_value_sig9C9F.getSnapshot().tables[var_core_value_sigFDEA],
      var_core_value_sig4CD2 = var_core_value_sigC259 != null && var_core_value_sigC259.viewId && var_core_value_sig86D0 != null && var_core_value_sig86D0.views[var_core_value_sigC259.viewId] ? var_core_value_sigC259.viewId : var_core_value_sig86D0 == null ? undefined : var_core_value_sig86D0.viewOrder[0];
    this._stateService["activateTable"](var_core_value_sigFDEA), var_core_value_sig4CD2 && this._stateService["activateView"](var_core_value_sig4CD2), this._stateService["setSelection"]((var_core_value_sigC259 == null ? undefined : var_core_value_sigC259.selection) ?? null), this._univerInstanceService["focusUnit"](var_core_value_sig9A8D);
  }
  _getBase(var_core_value_sig48CA) {
    return this._univerInstanceService["getUnit"](var_core_value_sig48CA, i.UniverInstanceType["UNIVER_BASE"]) ?? null;
  }
  async _hasPermission(var_core_value_sig50AF, var_core_value_sigA942) {
    return (await this._authzIoService["allowed"]({
      unitID: var_core_value_sig50AF,
      objectID: var_core_value_sig50AF,
      objectType: o.UnitObject["Base"],
      actions: [var_core_value_sigA942]
    })).some(var_core_value_sigFBFA => var_core_value_sigFBFA.action === var_core_value_sigA942 && var_core_value_sigFBFA.allowed);
  }
};
w = C([S(0, (0, i.Inject)(a.HistoryUnitAdapterRegistryService)), S(1, i.IAuthzIoService), S(2, t.IBaseUIStateService), S(3, i.IUniverInstanceService)], w);
function ne(var_core_value_sig2E54) {
  return typeof var_core_value_sig2E54 == "object" && !!var_core_value_sig2E54;
}
const T = "BASE_HISTORY_DELETION_BADGE";
function re({
  popup: var_core_value_sig7658
}) {
  let {
    count: var_core_value_sigDCF5,
    labels: var_core_value_sigC786
  } = var_core_value_sig7658.extraProps;
  return (0, g.jsx)(h.Tooltip, {
    placement: "right",
    title: (0, g.jsxs)("div", {
      className: "univer-flex univer-max-w-80 univer-flex-col univer-gap-1",
      children: [var_core_value_sigC786.slice(0, 10).map(var_core_value_sigA621 => (0, g.jsx)("div", {
        className: "univer-truncate",
        children: var_core_value_sigA621
      }, var_core_value_sigA621)), var_core_value_sigC786.length > 10 && (0, g.jsx)("div", {
        children: "+" + (var_core_value_sigC786.length - 10)
      })]
    }),
    children: (0, g.jsx)("div", {
      "aria-label": var_core_value_sigC786.join(",\x20"),
      children: (0, g.jsx)(h.Badge, {
        className: "!univer-border-red-800 !univer-bg-red-50 !univer-px-1.5 !univer-py-0.5 !univer-text-red-800 dark:!univer-border-red-400 dark:!univer-bg-red-950 dark:!univer-text-red-300",
        children: "−" + var_core_value_sigDCF5
      })
    })
  });
}
let E = class extends i.Disposable {
  constructor(var_core_value_sigBBFF) {
    super(), this.disposeWithMe(var_core_value_sigBBFF.register(T, re));
  }
};
E = C([S(0, (0, i.Inject)(s.ComponentManager))], E);
const D = new Map([[i.BaseViewType["Grid"], {
    create: "bases-history-ui.action.createGridView",
    delete: "bases-history-ui.action.deleteGridView"
  }], [i.BaseViewType["Kanban"], {
    create: "bases-history-ui.action.createKanbanView",
    delete: "bases-history-ui.action.deleteKanbanView"
  }], [i.BaseViewType["Calendar"], {
    create: "bases-history-ui.action.createCalendarView",
    delete: "bases-history-ui.action.deleteCalendarView"
  }], [i.BaseViewType["Gantt"], {
    create: "bases-history-ui.action.createGanttView",
    delete: "bases-history-ui.action.deleteGanttView"
  }], [i.BaseViewType["Gallery"], {
    create: "bases-history-ui.action.createGalleryView",
    delete: "bases-history-ui.action.deleteGalleryView"
  }], [i.BaseViewType["Pivot"], {
    create: "bases-history-ui.action.createPivotView",
    delete: "bases-history-ui.action.deletePivotView"
  }]]),
  O = new Map([[l.BaseDashboardWidgetType["PivotChart"], {
    create: "bases-history-ui.action.createDashboardPivotChartWidget",
    update: "bases-history-ui.action.updateDashboardPivotChartWidget",
    remove: "bases-history-ui.action.removeDashboardPivotChartWidget"
  }], [l.BaseDashboardWidgetType["TableFilter"], {
    create: "bases-history-ui.action.createDashboardTableFilterWidget",
    update: "bases-history-ui.action.updateDashboardTableFilterWidget",
    remove: "bases-history-ui.action.removeDashboardTableFilterWidget"
  }], [l.BaseDashboardWidgetType["Text"], {
    create: "bases-history-ui.action.createDashboardTextWidget",
    update: "bases-history-ui.action.updateDashboardTextWidget",
    remove: "bases-history-ui.action.removeDashboardTextWidget"
  }], [l.BaseDashboardWidgetType["Image"], {
    create: "bases-history-ui.action.createDashboardImageWidget",
    update: "bases-history-ui.action.updateDashboardImageWidget",
    remove: "bases-history-ui.action.removeDashboardImageWidget"
  }], [l.BaseDashboardWidgetType["FormulaShape"], {
    create: "bases-history-ui.action.createDashboardFormulaShapeWidget",
    update: "bases-history-ui.action.updateDashboardFormulaShapeWidget",
    remove: "bases-history-ui.action.removeDashboardFormulaShapeWidget"
  }]]),
  ie = new Map([[c.SetBaseNameCommand["id"], "bases-history-ui.action.renameBase"], [c.CreateBaseTableCommand["id"], "bases-history-ui.action.createTable"], [c.DeleteBaseTableCommand["id"], "bases-history-ui.action.deleteTable"], [c.RenameBaseTableCommand["id"], "bases-history-ui.action.renameTable"], [c.CreateBaseViewCommand["id"], "bases-history-ui.action.createView"], [c.DeleteBaseViewCommand["id"], "bases-history-ui.action.deleteView"], [c.RenameBaseViewCommand["id"], "bases-history-ui.action.renameView"], [c.MoveBaseViewCommand["id"], "bases-history-ui.action.moveView"], [c.CreateBaseRecordCommand["id"], "bases-history-ui.action.createRecord"], [c.CreateBaseChildRecordCommand["id"], "bases-history-ui.action.createRecord"], [c.BatchCreateBaseRecordsCommand["id"], "bases-history-ui.action.createRecord"], [c.DeleteBaseRecordCommand["id"], "bases-history-ui.action.deleteRecord"], [c.BatchDeleteBaseRecordsCommand["id"], "bases-history-ui.action.deleteRecord"], [c.DuplicateBaseRecordCommand["id"], "bases-history-ui.action.duplicateRecord"], [c.MoveBaseHierarchyRecordCommand["id"], "bases-history-ui.action.moveRecord"], [c.UpdateBaseRecordOrderCommand["id"], "bases-history-ui.action.moveRecord"], [c.UpdateBaseCellCommand["id"], "bases-history-ui.action.updateValues"], [c.SetBaseRecordValuesCommand["id"], "bases-history-ui.action.updateValues"], [c.SetBaseRangeValuesCommand["id"], "bases-history-ui.action.updateValues"], [c.CreateBaseFieldCommand["id"], "bases-history-ui.action.createField"], [c.DeleteBaseFieldCommand["id"], "bases-history-ui.action.deleteField"], [c.DuplicateBaseFieldCommand["id"], "bases-history-ui.action.duplicateField"], [c.MoveBaseFieldCommand["id"], "bases-history-ui.action.moveField"], [c.ChangeBaseFieldTypeCommand["id"], "bases-history-ui.action.changeFieldType"], [c.UpdateBaseFieldCommand["id"], "bases-history-ui.action.updateField"], [c.UpdateBaseFieldDescriptionCommand["id"], "bases-history-ui.action.updateFieldDescription"], [c.SetBaseViewFieldOrderCommand["id"], "bases-history-ui.action.reorderFields"], [c.SetBaseViewFieldVisibleCommand["id"], "bases-history-ui.action.updateFieldVisibility"], [c.SetBaseViewFieldWidthCommand["id"], "bases-history-ui.action.resizeFields"], [c.SetBaseViewFilterCommand["id"], "bases-history-ui.action.updateFilter"], [c.SetBaseViewGroupCommand["id"], "bases-history-ui.action.updateGroup"], [c.SetBaseViewSortCommand["id"], "bases-history-ui.action.updateSort"], [c.UpdateBaseViewConditionalColorRulesCommand["id"], "bases-history-ui.action.updateConditionalColoring"], [c.UpdateBaseViewConfigCommand["id"], "bases-history-ui.action.configureView"], [c.EnsureBaseTemporalViewDateFieldsCommand["id"], "bases-history-ui.action.configureView"], [c.SetBaseKanbanGroupFieldCommand["id"], "bases-history-ui.action.configureKanban"], [c.UpdateBaseKanbanConfigCommand["id"], "bases-history-ui.action.configureKanban"], [c.SetBaseTableHierarchyFieldCommand["id"], "bases-history-ui.action.configureHierarchy"], [l.UpdateBasePivotViewCommand["id"], "bases-history-ui.action.updatePivotView"], [l.CreateBaseDashboardCommand["id"], "bases-history-ui.action.createDashboard"], [l.DeleteBaseDashboardCommand["id"], "bases-history-ui.action.deleteDashboard"], [l.UpdateBaseDashboardCommand["id"], "bases-history-ui.action.updateDashboard"], [l.UpsertBaseDashboardWidgetCommand["id"], "bases-history-ui.action.updateDashboardWidget"], [l.RemoveBaseDashboardWidgetCommand["id"], "bases-history-ui.action.removeDashboardWidget"]]);
let k = class extends i.Disposable {
  constructor(var_core_value_sig8889, var_core_value_sig32F8) {
    super(), this._localeService = var_core_value_sig32F8, this.disposeWithMe(var_core_value_sig8889.register(i.UniverInstanceType["UNIVER_BASE"], this));
  }
  resolve(var_core_value_sig5B67) {
    let var_core_value_sig1758 = oe(var_core_value_sig5B67),
      var_core_value_sig4805 = ae(var_core_value_sig5B67),
      var_core_value_sigE67E = [...var_core_value_sig1758.map(var_core_value_sigF602 => this._localeService["t"](var_core_value_sigF602)), ...var_core_value_sig4805.map(var_core_value_sig1BBD => this._localeService["t"](var_core_value_sig1BBD)), ...[...var_core_value_sig5B67.commandIds].flatMap(var_core_value_sigF704 => {
        if (var_core_value_sig1758.length > 0 && (var_core_value_sigF704 === c.CreateBaseViewCommand["id"] || var_core_value_sigF704 === c.DeleteBaseViewCommand["id"]) || var_core_value_sig4805.length > 0 && (var_core_value_sigF704 === l.UpsertBaseDashboardWidgetCommand["id"] || var_core_value_sigF704 === l.RemoveBaseDashboardWidgetCommand["id"] || var_core_value_sigF704 === l.UpdateBaseDashboardCommand["id"])) return [];
        let var_core_value_sig2BCF = ie.get(var_core_value_sigF704);
        return var_core_value_sig2BCF ? [this._localeService["t"](var_core_value_sig2BCF)] : [];
      })],
      var_core_value_sig2902 = [...new Set(var_core_value_sigE67E)];
    return var_core_value_sig2902.length > 0 ? var_core_value_sig2902 : var_core_value_sig5B67.commandIds["has"](c.ApplyBaseJson1Mutation["id"]) ? [this._localeService["t"]("bases-history-ui.action.updateBase")] : [];
  }
};
k = C([S(0, (0, i.Inject)(m.HistoryActionSummaryService)), S(1, (0, i.Inject)(i.LocaleService))], k);
function ae(var_core_value_sigC0D9) {
  let var_core_value_sigF051 = var_core_value_sigC0D9.mutations["flatMap"](var_core_value_sig9989 => {
    if (!M(var_core_value_sig9989.params)) return [];
    let var_core_value_sig698E = Array.isArray(var_core_value_sig9989.params["historyActions"]) ? var_core_value_sig9989.params["historyActions"].filter(A) : [],
      var_core_value_sig2809 = [];
    var_core_value_sig698E.includes(l.BaseDashboardHistoryAction["RenameDashboard"]) && var_core_value_sig2809.push("bases-history-ui.action.renameDashboard"), var_core_value_sig698E.includes(l.BaseDashboardHistoryAction["ReorderWidgets"]) && var_core_value_sig2809.push("bases-history-ui.action.reorderDashboardWidgets");
    let var_core_value_sig2DAB = Array.isArray(var_core_value_sig9989.params["historyWidgetTypes"]) ? var_core_value_sig9989.params["historyWidgetTypes"].filter(j) : [];
    if ((var_core_value_sig9989.params["historyAction"] === l.BaseDashboardHistoryAction["UpdateWidget"] || var_core_value_sig698E.includes(l.BaseDashboardHistoryAction["UpdateWidget"])) && var_core_value_sig2DAB.length > 0) return var_core_value_sig2809.push(...var_core_value_sig2DAB.flatMap(var_core_value_sig0D69 => {
      var var_core_value_sig480E;
      let var_core_value_sig26DB = (var_core_value_sig480E = O.get(var_core_value_sig0D69)) == null ? undefined : var_core_value_sig480E.update;
      return var_core_value_sig26DB ? [var_core_value_sig26DB] : [];
    })), var_core_value_sig2809;
    let var_core_value_sig877E = j(var_core_value_sig9989.params["historyWidgetType"]) ? O.get(var_core_value_sig9989.params["historyWidgetType"]) : undefined;
    switch (var_core_value_sig9989.params["historyAction"]) {
      case l.BaseDashboardHistoryAction["CreateWidget"]:
        return var_core_value_sig2809.push((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.create) ?? "bases-history-ui.action.createDashboardWidget"), var_core_value_sig2809;
      case l.BaseDashboardHistoryAction["UpdateWidget"]:
        return var_core_value_sig2809.push((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.update) ?? "bases-history-ui.action.updateDashboardWidget"), var_core_value_sig2809;
      case l.BaseDashboardHistoryAction["RemoveWidget"]:
        return var_core_value_sig2809.push((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.remove) ?? "bases-history-ui.action.removeDashboardWidget"), var_core_value_sig2809;
      default:
        return var_core_value_sig2809;
    }
  });
  return [...new Set(var_core_value_sigF051)];
}
function A(var_core_value_sig5825) {
  return var_core_value_sig5825 === l.BaseDashboardHistoryAction["CreateWidget"] || var_core_value_sig5825 === l.BaseDashboardHistoryAction["RenameDashboard"] || var_core_value_sig5825 === l.BaseDashboardHistoryAction["ReorderWidgets"] || var_core_value_sig5825 === l.BaseDashboardHistoryAction["UpdateWidget"] || var_core_value_sig5825 === l.BaseDashboardHistoryAction["RemoveWidget"];
}
function j(var_core_value_sig4EB7) {
  return var_core_value_sig4EB7 === l.BaseDashboardWidgetType["PivotChart"] || var_core_value_sig4EB7 === l.BaseDashboardWidgetType["TableFilter"] || var_core_value_sig4EB7 === l.BaseDashboardWidgetType["Text"] || var_core_value_sig4EB7 === l.BaseDashboardWidgetType["Image"] || var_core_value_sig4EB7 === l.BaseDashboardWidgetType["FormulaShape"];
}
function oe(var_core_value_sig73AF) {
  let var_core_value_sig548A = [],
    var_core_value_sigE026 = new Set();
  return var_core_value_sig73AF.mutations["forEach"](var_core_value_sig20C8 => {
    if (var_core_value_sig20C8.id !== c.ApplyBaseJson1Mutation["id"] || !M(var_core_value_sig20C8.params)) return;
    let {
      historyAction: var_core_value_sigE9A7,
      viewType: var_core_value_sigBECE
    } = var_core_value_sig20C8.params;
    if (!se(var_core_value_sigBECE)) return;
    let var_core_value_sig1B22 = D.get(var_core_value_sigBECE);
    if (var_core_value_sig1B22) {
      if (var_core_value_sigE9A7 === c.BaseHistoryAction["CreateView"]) {
        var_core_value_sig548A.push(var_core_value_sig1B22.create);
        return;
      }
      if (var_core_value_sigE9A7 === c.BaseHistoryAction["DeleteView"]) {
        var_core_value_sig548A.push(var_core_value_sig1B22.delete);
        return;
      }
      var_core_value_sigE026.add(var_core_value_sigBECE);
    }
  }), var_core_value_sig548A.length > 0 || var_core_value_sigE026.forEach(var_core_value_sig7F72 => {
    let var_core_value_sig7B2A = D.get(var_core_value_sig7F72);
    var_core_value_sig7B2A && (var_core_value_sig73AF.commandIds["has"](c.CreateBaseViewCommand["id"]) && var_core_value_sig548A.push(var_core_value_sig7B2A.create), var_core_value_sig73AF.commandIds["has"](c.DeleteBaseViewCommand["id"]) && var_core_value_sig548A.push(var_core_value_sig7B2A.delete));
  }), [...new Set(var_core_value_sig548A)];
}
function M(var_core_value_sig339E) {
  return typeof var_core_value_sig339E == "object" && !!var_core_value_sig339E;
}
function se(var_core_value_sig7550) {
  return var_core_value_sig7550 === i.BaseViewType["Grid"] || var_core_value_sig7550 === i.BaseViewType["Kanban"] || var_core_value_sig7550 === i.BaseViewType["Calendar"] || var_core_value_sig7550 === i.BaseViewType["Gantt"] || var_core_value_sig7550 === i.BaseViewType["Gallery"] || var_core_value_sig7550 === i.BaseViewType["Pivot"];
}
function N(var_core_value_sig2983) {
  "@babel/helpers - typeof";

  return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig06CD) {
    return typeof var_core_value_sig06CD;
  } : function (var_core_value_sigA5F1) {
    return var_core_value_sigA5F1 && typeof Symbol == "function" && var_core_value_sigA5F1.constructor === Symbol && var_core_value_sigA5F1 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigA5F1;
  }, N(var_core_value_sig2983);
}
function ce(var_core_value_sigE1B0, var_core_value_sigD4FF) {
  if (N(var_core_value_sigE1B0) != "object" || !var_core_value_sigE1B0) return var_core_value_sigE1B0;
  var var_core_value_sig1E5B = var_core_value_sigE1B0[Symbol.toPrimitive];
  if (var_core_value_sig1E5B !== undefined) {
    var var_core_value_sigB680 = var_core_value_sig1E5B.call(var_core_value_sigE1B0, var_core_value_sigD4FF || "default");
    if (N(var_core_value_sigB680) != "object") return var_core_value_sigB680;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigD4FF === "string" ? String : Number)(var_core_value_sigE1B0);
}
function le(var_core_value_sig1F64) {
  var var_core_value_sigDD1C = ce(var_core_value_sig1F64, "string");
  return N(var_core_value_sigDD1C) == "symbol" ? var_core_value_sigDD1C : var_core_value_sigDD1C + "";
}
function P(var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0) {
  return (var_core_value_sigB7D1 = le(var_core_value_sigB7D1)) in var_core_value_sig2C39 ? Object.defineProperty(var_core_value_sig2C39, var_core_value_sigB7D1, {
    value: var_core_value_sig64F0,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig2C39[var_core_value_sigB7D1] = var_core_value_sig64F0, var_core_value_sig2C39;
}
let F = class extends i.Disposable {
  constructor(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59, var_core_value_sigF564) {
    super(), this._renderManagerService = var_core_value_sig97A2, this._highlightService = var_core_value_sig07E9, this._canvasRootResolverService = var_core_value_sig4F59, this._canvasPopupService = var_core_value_sigF564, P(this, "_generations", new Map()), P(this, "_badgeDisposables", new Map());
  }
  async show(var_core_value_sig8CFA, var_core_value_sig2E11) {
    let var_core_value_sig5B69 = (this._generations["get"](var_core_value_sig8CFA) ?? 0) + 1;
    this._generations["set"](var_core_value_sig8CFA, var_core_value_sig5B69), this._clearDeletionBadges(var_core_value_sig8CFA);
    let var_core_value_sigB098 = await this._getCanvasComponent(var_core_value_sig8CFA);
    if (this._generations["get"](var_core_value_sig8CFA) !== var_core_value_sig5B69) return;
    if (!var_core_value_sigB098) {
      await this._highlightService["show"](var_core_value_sig8CFA, []);
      return;
    }
    let var_core_value_sigCE71 = var_core_value_sigB098.getController().getHitRegions(),
      var_core_value_sig21D8 = var_core_value_sigB098.getRealBound(),
      var_core_value_sig2B65 = [],
      var_core_value_sigD7EA = new Map(),
      var_core_value_sigB33B = ue(var_core_value_sig2E11);
    var_core_value_sigB33B.filter(var_core_value_sigF0F9 => ve(var_core_value_sigCE71, var_core_value_sigF0F9)).forEach(var_core_value_sig1A0F => {
      let var_core_value_sigFBA4 = K(var_core_value_sigCE71.filter(({
        result: var_core_value_sig7524
      }) => _e(var_core_value_sig7524, var_core_value_sig1A0F)).map(({
        rect: var_core_value_sig2AD8
      }) => var_core_value_sig2AD8));
      if (var_core_value_sigFBA4) {
        var_core_value_sig2B65.push({
          id: var_core_value_sig1A0F.id,
          kind: var_core_value_sig1A0F.kind,
          bounds: {
            left: var_core_value_sig21D8.left + var_core_value_sigFBA4.left,
            top: var_core_value_sig21D8.top + var_core_value_sigFBA4.top,
            width: var_core_value_sigFBA4.width,
            height: var_core_value_sigFBA4.height
          },
          outlineOnly: var_core_value_sig1A0F.kind === "delete"
        });
        return;
      }
      if (!var_core_value_sig1A0F.recordId && !var_core_value_sig1A0F.fieldId) {
        let var_core_value_sig2AD0 = B(var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sig1A0F);
        var_core_value_sig2B65.push({
          id: "base-scope-" + I(var_core_value_sig1A0F),
          kind: var_core_value_sig1A0F.kind,
          bounds: {
            left: var_core_value_sig21D8.left + var_core_value_sig2AD0.left,
            top: var_core_value_sig21D8.top + var_core_value_sig2AD0.top,
            width: var_core_value_sig2AD0.width,
            height: var_core_value_sig2AD0.height
          },
          outlineOnly: true
        });
        return;
      }
      V(var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sigB33B, var_core_value_sig1A0F);
    }), await this._highlightService["show"](var_core_value_sig8CFA, var_core_value_sig2B65), this._generations["get"](var_core_value_sig8CFA) === var_core_value_sig5B69 && this._showDeletionBadges(var_core_value_sig8CFA, Array.from(var_core_value_sigD7EA.values()));
  }
  clear(var_core_value_sig24B9) {
    this._generations["set"](var_core_value_sig24B9, (this._generations["get"](var_core_value_sig24B9) ?? 0) + 1), this._clearDeletionBadges(var_core_value_sig24B9), this._highlightService["clear"](var_core_value_sig24B9);
  }
  dispose() {
    Array.from(this._generations["keys"]()).forEach(var_core_value_sig4383 => this.clear(var_core_value_sig4383)), super.dispose();
  }
  async _getCanvasComponent(var_core_value_sigE627) {
    for (let var_core_value_sig186C = 0; var_core_value_sig186C <= 120; var_core_value_sig186C++) {
      let var_core_value_sig3EEE = this._renderManagerService["getRenderUnitById"](var_core_value_sigE627),
        var_core_value_sigBC46 = var_core_value_sig3EEE == null ? undefined : var_core_value_sig3EEE.scene["getObject"](t.BASE_CANVAS_COMPONENT_KEY),
        var_core_value_sig3D7D = var_core_value_sigBC46 instanceof t.BaseCanvasRenderComponent ? var_core_value_sigBC46 : var_core_value_sig3EEE == null ? undefined : var_core_value_sig3EEE.components["get"](t.BASE_CANVAS_COMPONENT_KEY);
      if (var_core_value_sig3D7D instanceof t.BaseCanvasRenderComponent && var_core_value_sig3D7D.getController().getHitRegions().length > 0) return var_core_value_sig3D7D;
      await ye();
    }
    return null;
  }
  _showDeletionBadges(var_core_value_sigEF3E, var_core_value_sig273D) {
    if (var_core_value_sig273D.length === 0) return;
    let var_core_value_sig9A0D = this._renderManagerService["getRenderUnitById"](var_core_value_sigEF3E),
      var_core_value_sigA319 = this._canvasRootResolverService["getCanvasRoot"](var_core_value_sigEF3E);
    if (!var_core_value_sig9A0D || !var_core_value_sigA319) return;
    let var_core_value_sig2D58 = var_core_value_sig9A0D.engine["getCanvasElement"](),
      var_core_value_sig223F = new i.DisposableCollection();
    var_core_value_sig273D.forEach(var_core_value_sigD955 => {
      let var_core_value_sig48BD = me(var_core_value_sigA319, var_core_value_sigD955.bounds),
        var_core_value_sig429F = new p.BehaviorSubject(var_core_value_sig48BD),
        var_core_value_sigF62A = {
          count: var_core_value_sigD955.changes["length"],
          labels: fe(var_core_value_sigD955.changes)
        },
        var_core_value_sig8178 = this._canvasPopupService["addPopup"]({
          unitId: var_core_value_sigEF3E,
          subUnitId: var_core_value_sigEF3E,
          componentKey: T,
          direction: "top-left",
          anchorRect: var_core_value_sig48BD,
          anchorRect$: var_core_value_sig429F,
          canvasElement: var_core_value_sig2D58,
          constrainToCanvas: true,
          hideOnInvisible: true,
          extraProps: var_core_value_sigF62A
        });
      var_core_value_sig223F.add({
        dispose: () => {
          this._canvasPopupService["removePopup"](var_core_value_sig8178), var_core_value_sig429F.complete();
        }
      });
    }), this._badgeDisposables["set"](var_core_value_sigEF3E, var_core_value_sig223F);
  }
  _clearDeletionBadges(var_core_value_sigD749) {
    var var_core_value_sigCFFA;
    (var_core_value_sigCFFA = this._badgeDisposables["get"](var_core_value_sigD749)) == null || var_core_value_sigCFFA.dispose(), this._badgeDisposables["delete"](var_core_value_sigD749);
  }
};
F = C([S(0, f.IRenderManagerService), S(1, (0, i.Inject)(m.HistoryCanvasHighlightService)), S(2, t.IBaseCanvasRootResolverService), S(3, (0, i.Inject)(s.ICanvasPopupService))], F);
function ue(var_core_value_sig85B1) {
  let var_core_value_sig3141 = new Set(var_core_value_sig85B1.filter(var_core_value_sig58C1 => var_core_value_sig58C1.recordId && !var_core_value_sig58C1.fieldId).map(var_core_value_sig5090 => L(var_core_value_sig5090))),
    var_core_value_sig2162 = new Set(var_core_value_sig85B1.filter(var_core_value_sigC368 => var_core_value_sigC368.fieldId && !var_core_value_sigC368.recordId).map(var_core_value_sigAD56 => R(var_core_value_sigAD56))),
    var_core_value_sig2EAD = new Map();
  return var_core_value_sig85B1.forEach(var_core_value_sigDB4A => {
    if (var_core_value_sigDB4A.recordId && var_core_value_sigDB4A.fieldId && (var_core_value_sig3141.has(L(var_core_value_sigDB4A)) || var_core_value_sig2162.has(R(var_core_value_sigDB4A)))) return;
    let var_core_value_sig6418 = I(var_core_value_sigDB4A),
      var_core_value_sig1896 = var_core_value_sig2EAD.get(var_core_value_sig6418);
    var_core_value_sig2EAD.set(var_core_value_sig6418, var_core_value_sig1896 ? {
      ...var_core_value_sig1896,
      kind: de(var_core_value_sig1896.kind, var_core_value_sigDB4A.kind)
    } : var_core_value_sigDB4A);
  }), Array.from(var_core_value_sig2EAD.values());
}
function de(var_core_value_sig6774, var_core_value_sig340D) {
  return var_core_value_sig6774 === var_core_value_sig340D ? var_core_value_sig6774 : var_core_value_sig6774 === "update" ? var_core_value_sig340D : var_core_value_sig340D === "update" ? var_core_value_sig6774 : "update";
}
function I(var_core_value_sig82D4) {
  return [var_core_value_sig82D4.tableId, var_core_value_sig82D4.viewId, var_core_value_sig82D4.recordId, var_core_value_sig82D4.fieldId].map(var_core_value_sig0285 => var_core_value_sig0285 ?? "").join(":");
}
function L(var_core_value_sigBDE4) {
  return [var_core_value_sigBDE4.tableId, var_core_value_sigBDE4.viewId, var_core_value_sigBDE4.recordId].map(var_core_value_sig777D => var_core_value_sig777D ?? "").join(":");
}
function R(var_core_value_sig7DF1) {
  return [var_core_value_sig7DF1.tableId, var_core_value_sig7DF1.viewId, var_core_value_sig7DF1.fieldId].map(var_core_value_sig3F4C => var_core_value_sig3F4C ?? "").join(":");
}
function z(var_core_value_sigDC86) {
  return [var_core_value_sigDC86.tableId, var_core_value_sigDC86.viewId].map(var_core_value_sigD65A => var_core_value_sigD65A ?? "").join(":");
}
function B(var_core_value_sig0B0C, var_core_value_sigA39E, var_core_value_sigBBEE) {
  return K(var_core_value_sig0B0C.filter(({
    result: var_core_value_sig5A13
  }) => G(var_core_value_sig5A13, var_core_value_sigBBEE)).map(({
    rect: var_core_value_sigF593
  }) => var_core_value_sigF593)) ?? {
    left: 0,
    top: 0,
    width: var_core_value_sigA39E.width,
    height: var_core_value_sigA39E.height
  };
}
function V(var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig7827, var_core_value_sig652C) {
  let var_core_value_sig7E32 = ge(var_core_value_sig7827, var_core_value_sig652C),
    var_core_value_sig4C07 = he(var_core_value_sig65A1, var_core_value_sig652C, var_core_value_sig7E32);
  if (var_core_value_sig4C07) {
    let var_core_value_sig3607 = var_core_value_sig652C.recordId ? "record" : "field",
      var_core_value_sigB512 = z(var_core_value_sig652C) + ":" + var_core_value_sig3607 + ":" + var_core_value_sig7E32,
      var_core_value_sigF2E6 = var_core_value_sig6167.get(var_core_value_sigB512);
    if (var_core_value_sigF2E6) {
      var_core_value_sigF2E6.changes["push"](var_core_value_sig652C);
      return;
    }
    let var_core_value_sig34C8 = H(var_core_value_sig7F19, var_core_value_sig4C07),
      var_core_value_sigB744 = {
        id: "base-deletion-" + var_core_value_sigB512,
        bounds: var_core_value_sig34C8,
        changes: [var_core_value_sig652C]
      };
    var_core_value_sig6167.set(var_core_value_sigB512, var_core_value_sigB744), var_core_value_sig011D.push({
      id: var_core_value_sigB744.id,
      kind: var_core_value_sig652C.kind,
      bounds: var_core_value_sig34C8
    });
    return;
  }
  let var_core_value_sig79AB = B(var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig652C);
  var_core_value_sig011D.push({
    id: "base-missing-scope-" + var_core_value_sig652C.kind + "-" + z(var_core_value_sig652C),
    kind: var_core_value_sig652C.kind,
    bounds: H(var_core_value_sig7F19, var_core_value_sig79AB),
    outlineOnly: true
  });
}
function fe(var_core_value_sig8E74) {
  return Array.from(new Set(var_core_value_sig8E74.map(var_core_value_sigEAE2 => pe(var_core_value_sigEAE2))));
}
function pe(var_core_value_sig104C) {
  if (var_core_value_sig104C.removedRecord) {
    let var_core_value_sigE68A = Object.values(var_core_value_sig104C.removedRecord["values"]).find(var_core_value_sigE9ED => ["string", "number", "boolean"].includes(typeof var_core_value_sigE9ED));
    if (var_core_value_sigE68A != null) return String(var_core_value_sigE68A);
  }
  return var_core_value_sig104C.recordId ?? var_core_value_sig104C.fieldId ?? var_core_value_sig104C.label;
}
function me(var_core_value_sig841D, var_core_value_sig90CB) {
  let var_core_value_sigBDF5 = var_core_value_sig841D.getBoundingClientRect(),
    var_core_value_sigACC6 = var_core_value_sigBDF5.width > 0 && var_core_value_sig841D.clientWidth > 0 ? var_core_value_sigBDF5.width / var_core_value_sig841D.clientWidth : 1,
    var_core_value_sig1614 = var_core_value_sigBDF5.height > 0 && var_core_value_sig841D.clientHeight > 0 ? var_core_value_sigBDF5.height / var_core_value_sig841D.clientHeight : 1,
    var_core_value_sig85C3 = var_core_value_sigBDF5.left + var_core_value_sig90CB.left * var_core_value_sigACC6,
    var_core_value_sigB996 = var_core_value_sigBDF5.top + var_core_value_sig90CB.top * var_core_value_sig1614;
  return {
    left: var_core_value_sig85C3,
    right: var_core_value_sig85C3 + var_core_value_sig90CB.width * var_core_value_sigACC6,
    top: var_core_value_sigB996,
    bottom: var_core_value_sigB996 + var_core_value_sig90CB.height * var_core_value_sig1614
  };
}
function H(var_core_value_sig4BBA, var_core_value_sig6201) {
  return {
    left: var_core_value_sig4BBA.left + var_core_value_sig6201.left,
    top: var_core_value_sig4BBA.top + var_core_value_sig6201.top,
    width: var_core_value_sig6201.width,
    height: var_core_value_sig6201.height
  };
}
function he(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C) {
  if (var_core_value_sigB542.kind !== "delete" || var_core_value_sigBB6C === null) return null;
  let var_core_value_sigE2BF = var_core_value_sig5151.filter(({
    result: var_core_value_sig3E68
  }) => G(var_core_value_sig3E68, var_core_value_sigB542));
  if (var_core_value_sigB542.recordId) {
    let var_core_value_sigF4C5 = U(var_core_value_sigE2BF, "recordId").sort((var_core_value_sigB577, var_core_value_sig9572) => var_core_value_sigB577.top - var_core_value_sig9572.top),
      var_core_value_sig5410 = W(var_core_value_sigF4C5);
    if (!var_core_value_sig5410) return null;
    let var_core_value_sig492F = var_core_value_sigBB6C < var_core_value_sigF4C5.length ? var_core_value_sigF4C5[var_core_value_sigBB6C].top : var_core_value_sigF4C5[var_core_value_sigF4C5.length - 1].top + var_core_value_sigF4C5[var_core_value_sigF4C5.length - 1].height;
    return {
      left: var_core_value_sig5410.left,
      top: var_core_value_sig492F - 4 / 2,
      width: var_core_value_sig5410.width,
      height: 4
    };
  }
  if (var_core_value_sigB542.fieldId) {
    let var_core_value_sig8EA0 = U(var_core_value_sigE2BF, "fieldId").sort((var_core_value_sigD873, var_core_value_sigA12B) => var_core_value_sigD873.left - var_core_value_sigA12B.left),
      var_core_value_sigA6F6 = W(var_core_value_sig8EA0);
    return var_core_value_sigA6F6 ? {
      left: (var_core_value_sigBB6C < var_core_value_sig8EA0.length ? var_core_value_sig8EA0[var_core_value_sigBB6C].left : var_core_value_sig8EA0[var_core_value_sig8EA0.length - 1].left + var_core_value_sig8EA0[var_core_value_sig8EA0.length - 1].width) - 4 / 2,
      top: var_core_value_sigA6F6.top,
      width: 4,
      height: var_core_value_sigA6F6.height
    } : null;
  }
  return null;
}
function ge(var_core_value_sigB8C7, var_core_value_sigA56E) {
  let var_core_value_sig1998;
  if (var_core_value_sigA56E.recordId ? var_core_value_sig1998 = var_core_value_sigA56E.recordIndex : var_core_value_sigA56E.fieldId && (var_core_value_sig1998 = var_core_value_sigA56E.fieldIndex), var_core_value_sigA56E.kind !== "delete" || var_core_value_sig1998 === undefined) return null;
  let var_core_value_sigFF19 = new Set(var_core_value_sigB8C7.flatMap(var_core_value_sigCDDA => {
    if (var_core_value_sigCDDA.kind !== "delete" || var_core_value_sigCDDA.tableId !== var_core_value_sigA56E.tableId || var_core_value_sigCDDA.viewId !== var_core_value_sigA56E.viewId) return [];
    let var_core_value_sigE243 = var_core_value_sigA56E.recordId ? var_core_value_sigCDDA.recordIndex : var_core_value_sigCDDA.fieldIndex;
    return var_core_value_sigE243 !== undefined && var_core_value_sigE243 < var_core_value_sig1998 ? [var_core_value_sigE243] : [];
  }));
  return Math.max(0, var_core_value_sig1998 - var_core_value_sigFF19.size);
}
function U(var_core_value_sig43B8, var_core_value_sigD98F) {
  let var_core_value_sig66C0 = new Map();
  return var_core_value_sig43B8.forEach(({
    rect: var_core_value_sig74A8,
    result: var_core_value_sig21B2
  }) => {
    let var_core_value_sigDE08;
    if (var_core_value_sigD98F === "recordId" && "recordId" in var_core_value_sig21B2 ? var_core_value_sigDE08 = var_core_value_sig21B2.recordId : var_core_value_sigD98F === "fieldId" && "fieldId" in var_core_value_sig21B2 && (var_core_value_sigDE08 = var_core_value_sig21B2.fieldId), typeof var_core_value_sigDE08 != "string") return;
    let var_core_value_sigACCB = var_core_value_sig66C0.get(var_core_value_sigDE08) ?? [];
    var_core_value_sigACCB.push(var_core_value_sig74A8), var_core_value_sig66C0.set(var_core_value_sigDE08, var_core_value_sigACCB);
  }), Array.from(var_core_value_sig66C0.values()).flatMap(var_core_value_sig7F33 => {
    let var_core_value_sig0C53 = K(var_core_value_sig7F33);
    return var_core_value_sig0C53 ? [var_core_value_sig0C53] : [];
  });
}
function W(var_core_value_sig9D15) {
  return K(var_core_value_sig9D15.map(var_core_value_sigEA04 => ({
    x: var_core_value_sigEA04.left,
    y: var_core_value_sigEA04.top,
    width: var_core_value_sigEA04.width,
    height: var_core_value_sigEA04.height
  })));
}
function _e(var_core_value_sigB785, var_core_value_sig130F) {
  return !G(var_core_value_sigB785, var_core_value_sig130F) || var_core_value_sig130F.recordId && (!("recordId" in var_core_value_sigB785) || var_core_value_sigB785.recordId !== var_core_value_sig130F.recordId) || !var_core_value_sig130F.recordId && "recordId" in var_core_value_sigB785 || var_core_value_sig130F.fieldId && (!("fieldId" in var_core_value_sigB785) || var_core_value_sigB785.fieldId !== var_core_value_sig130F.fieldId) ? false : var_core_value_sig130F.fieldId ? var_core_value_sig130F.recordId !== undefined || var_core_value_sigB785.type["includes"]("header") : var_core_value_sig130F.recordId !== undefined;
}
function G(var_core_value_sigC0E3, var_core_value_sig52F7) {
  return !(var_core_value_sig52F7.tableId && (!("tableId" in var_core_value_sigC0E3) || var_core_value_sigC0E3.tableId !== var_core_value_sig52F7.tableId) || var_core_value_sig52F7.viewId && (!("viewId" in var_core_value_sigC0E3) || var_core_value_sigC0E3.viewId !== var_core_value_sig52F7.viewId));
}
function ve(var_core_value_sig866F, var_core_value_sigDE3D) {
  return var_core_value_sig866F.some(({
    result: var_core_value_sig7A62
  }) => G(var_core_value_sig7A62, var_core_value_sigDE3D));
}
function K(var_core_value_sigF175) {
  if (var_core_value_sigF175.length === 0) return null;
  let var_core_value_sig6A18 = Math.min(...var_core_value_sigF175.map(var_core_value_sig8109 => var_core_value_sig8109.x)),
    var_core_value_sig4E3D = Math.min(...var_core_value_sigF175.map(var_core_value_sig7565 => var_core_value_sig7565.y)),
    var_core_value_sig49B0 = Math.max(...var_core_value_sigF175.map(var_core_value_sigD4FB => var_core_value_sigD4FB.x + var_core_value_sigD4FB.width)),
    var_core_value_sig2547 = Math.max(...var_core_value_sigF175.map(var_core_value_sig3E71 => var_core_value_sig3E71.y + var_core_value_sig3E71.height));
  return {
    left: var_core_value_sig6A18,
    top: var_core_value_sig4E3D,
    width: var_core_value_sig49B0 - var_core_value_sig6A18,
    height: var_core_value_sig2547 - var_core_value_sig4E3D
  };
}
function ye() {
  return new Promise(var_core_value_sig01B3 => globalThis.setTimeout(var_core_value_sig01B3, 16));
}
let q = class extends i.Disposable {
  constructor(var_core_value_sig7442, var_core_value_sigDF87, var_core_value_sig9EE0, var_core_value_sigF0511, var_core_value_sig0B45, var_core_value_sig36F8, var_core_value_sig03E1, var_core_value_sigBB57) {
    super(), this._diffService = var_core_value_sig7442, this._snapshotService = var_core_value_sig9EE0, this._commandService = var_core_value_sigF0511, this._univerInstanceService = var_core_value_sig0B45, this._baseUIStateService = var_core_value_sig36F8, this._logService = var_core_value_sig03E1, this._highlightService = var_core_value_sigBB57, P(this, "type", i.UniverInstanceType["UNIVER_BASE"]), P(this, "_changesGeneration", 0), P(this, "_loadGeneration", 0), P(this, "_loadQueue", Promise.resolve()), P(this, "_unitId", ""), P(this, "_changes", []), this.disposeWithMe(var_core_value_sigDF87.register(this)), this.disposeWithMe((0, i.toDisposable)(this._baseUIStateService["state$"].pipe((0, p.map)(var_core_value_sigF230 => ({
      tableId: var_core_value_sigF230.activeTableId,
      viewId: var_core_value_sigF230.activeViewId
    })), (0, p.distinctUntilChanged)((var_core_value_sig09B8, var_core_value_sig6F91) => var_core_value_sig09B8.tableId === var_core_value_sig6F91.tableId && var_core_value_sig09B8.viewId === var_core_value_sig6F91.viewId)).subscribe(() => {
      this._unitId && this._highlightService["show"](this._unitId, this._changes).catch(var_core_value_sig27E5 => {
        this._logService["error"]("[BasesHistoryRenderAdapterService]: Failed to render Base history highlights.", var_core_value_sig27E5);
      });
    })));
  }
  loadRevision(var_core_value_sig7C4A, var_core_value_sigE799) {
    let var_core_value_sigB601 = ++this._loadGeneration,
      var_core_value_sig8B71 = this._loadQueue["catch"](() => undefined).then(async () => {
        if (var_core_value_sigB601 !== this._loadGeneration) return;
        this._getBase(var_core_value_sig7C4A) && this._univerInstanceService["disposeUnit"](var_core_value_sig7C4A);
        let var_core_value_sigF9C7 = await this._snapshotService["loadBase"](var_core_value_sig7C4A, var_core_value_sigE799.endRevision);
        if (var_core_value_sigB601 !== this._loadGeneration) {
          this._getBase(var_core_value_sig7C4A) === var_core_value_sigF9C7 && this._univerInstanceService["disposeUnit"](var_core_value_sig7C4A);
          return;
        }
        await this._activateRevisionLocation(var_core_value_sigF9C7), this._univerInstanceService["focusUnit"](var_core_value_sig7C4A);
      });
    return this._loadQueue = var_core_value_sig8B71, var_core_value_sig8B71;
  }
  async loadChanges(var_core_value_sigAEFB, var_core_value_sig826B) {
    this._unitId = var_core_value_sigAEFB;
    let var_core_value_sigCF89 = ++this._changesGeneration,
      var_core_value_sig00CB = await this._diffService["compare"](var_core_value_sigAEFB, var_core_value_sig826B);
    var_core_value_sigCF89 === this._changesGeneration && (this._changes = var_core_value_sig00CB, await this._highlightService["show"](var_core_value_sigAEFB, var_core_value_sig00CB));
  }
  close() {
    ++this._changesGeneration, ++this._loadGeneration, this._changes = [], this._unitId &&= (this._highlightService["clear"](this._unitId), "");
  }
  _getBase(var_core_value_sig77EE) {
    return this._univerInstanceService["getUnit"](var_core_value_sig77EE, i.UniverInstanceType["UNIVER_BASE"]) ?? null;
  }
  async _activateRevisionLocation(var_core_value_sig9F76) {
    let var_core_value_sigB008 = var_core_value_sig9F76.getSnapshot(),
      var_core_value_sig8721 = this._baseUIStateService["getState"](),
      var_core_value_sig08BA = var_core_value_sig8721.activeTableId && var_core_value_sigB008.tables[var_core_value_sig8721.activeTableId] ? var_core_value_sig8721.activeTableId : var_core_value_sigB008.tableOrder["find"](var_core_value_sig8895 => var_core_value_sigB008.tables[var_core_value_sig8895]);
    if (!var_core_value_sig08BA) return;
    await this._commandService["executeCommand"](t.ActivateBaseTableOperation["id"], {
      unitId: var_core_value_sig9F76.getUnitId(),
      tableId: var_core_value_sig08BA
    });
    let var_core_value_sigDBB5 = var_core_value_sigB008.tables[var_core_value_sig08BA],
      var_core_value_sigCFAC = var_core_value_sig8721.activeViewId && var_core_value_sigDBB5.views[var_core_value_sig8721.activeViewId] ? var_core_value_sig8721.activeViewId : var_core_value_sigDBB5.viewOrder["find"](var_core_value_sigC80B => var_core_value_sigDBB5.views[var_core_value_sigC80B]);
    var_core_value_sigCFAC && (await this._commandService["executeCommand"](t.ActivateBaseViewOperation["id"], {
      unitId: var_core_value_sig9F76.getUnitId(),
      tableId: var_core_value_sig08BA,
      viewId: var_core_value_sigCFAC
    }));
  }
};
q = C([S(0, (0, i.Inject)(e.BasesHistoryDiffService)), S(1, (0, i.Inject)(m.HistoryRenderAdapterRegistryService)), S(2, (0, i.Inject)(d.SnapshotService)), S(3, i.ICommandService), S(4, i.IUniverInstanceService), S(5, t.IBaseUIStateService), S(6, i.ILogService), S(7, (0, i.Inject)(F))], q);
let J = class extends m.UniverEditHistoryUIPlugin {
  constructor(var_core_value_sig237B, var_core_value_sigFEAB, var_core_value_sigE347, var_core_value_sig3C5B) {
    let {
      collaborationClientConfig: var_core_value_sig200B,
      ...var_core_value_sig3863
    } = var_core_value_sig237B;
    super(var_core_value_sig3863, var_core_value_sigFEAB, var_core_value_sigE347, var_core_value_sig3C5B), this._injector = var_core_value_sigFEAB, var_core_value_sigE347.setConfig(n.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, var_core_value_sig200B);
  }
  onStarting() {
    super.onStarting(), (0, i.registerDependencies)(this._injector, [[d.ISnapshotServerService, {
      useClass: n.SnapshotServerOverHTTPService
    }], [E], [k], [F], [q]]), this._injector["get"](E), this._injector["get"](k), this._injector["get"](q);
  }
};
P(J, "pluginName", "UNIVER_BASES_HISTORY_VIEWER_PLUGIN"), P(J, "packageName", b), P(J, "version", x), P(J, "type", i.UniverInstanceType["UNIVER_UNKNOWN"]), J = C([(0, i.DependentOn)(r.UniverLicensePlugin, e.UniverBasesHistoryPlugin, t.UniverBasesUIPlugin), S(1, (0, i.Inject)(i.Injector)), S(2, i.IConfigService), S(3, i.ILogService)], J);
let Y = class extends i.Disposable {
  constructor(var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD) {
    super(), this._configService = var_core_value_sigC97C, this._restoreService = var_core_value_sigC4B1, this._adapterRegistry = var_core_value_sig1BD9, this._localeService = var_core_value_sigE43E, this._themeService = var_core_value_sigA937, this._collaborationController = var_core_value_sigCAD5, this._dataLoaderService = var_core_value_sigE503, this._univerInstanceService = var_core_value_sig48DD, P(this, "_historyUniver", null), P(this, "_opening", null), P(this, "_openGeneration", 0), P(this, "_sessionDisposables", new i["DisposableCollection"]()), P(this, "_container", null), P(this, "_unitId", ""), P(this, "_location", undefined);
  }
  open(var_core_value_sig5E6A) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let var_core_value_sigB7FC = ++this._openGeneration,
      var_core_value_sig9CD9 = this._open(var_core_value_sig5E6A, var_core_value_sigB7FC).finally(() => {
        this._opening === var_core_value_sig9CD9 && (this._opening = null);
      });
    return this._opening = var_core_value_sig9CD9, var_core_value_sig9CD9;
  }
  async _open(var_core_value_sigFD0C, var_core_value_sig849B) {
    let var_core_value_sig5F1A = this._adapterRegistry["get"](i.UniverInstanceType["UNIVER_BASE"]);
    if (!var_core_value_sig5F1A) throw Error("[BasesHistoryLoaderService]: Base history adapter is not registered.");
    let var_core_value_sigB455 = await Promise.all([var_core_value_sig5F1A.canView(var_core_value_sigFD0C), var_core_value_sig5F1A.canRevert(var_core_value_sigFD0C)]).catch(var_core_value_sig284F => {
      if (var_core_value_sig849B === this._openGeneration) throw var_core_value_sig284F;
      return null;
    });
    if (!var_core_value_sigB455 || var_core_value_sig849B !== this._openGeneration) return;
    let [var_core_value_sig5241, var_core_value_sigC6E5] = var_core_value_sigB455;
    if (!var_core_value_sig5241) throw Error("[BasesHistoryLoaderService]: The current user cannot view history for this Base.");
    this._unitId = var_core_value_sigFD0C, this._location = var_core_value_sig5F1A.captureLocation(var_core_value_sigFD0C);
    let var_core_value_sigCEFB = this._ensureContainer();
    var_core_value_sigCEFB.style["display"] = "block";
    let var_core_value_sig1537 = this._localeService["getCurrentLocale"](),
      var_core_value_sigE4C6 = this._localeService["getLocales"](),
      var_core_value_sig4313 = new i.Univer({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: var_core_value_sig1537,
        locales: var_core_value_sigE4C6 ? {
          [var_core_value_sig1537]: var_core_value_sigE4C6
        } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[i.IAuthzIoService, {
          useClass: n.AuthzIoHttpService
        }]]
      });
    this._historyUniver = var_core_value_sig4313, this._syncViewerServices(var_core_value_sig4313, var_core_value_sigCEFB);
    try {
      this._registerChildPlugins(var_core_value_sig4313, var_core_value_sigC6E5, var_core_value_sigCEFB), this._createPlaceholder(var_core_value_sig4313);
    } catch (var_core_value_sigE154) {
      throw var_core_value_sig849B === this._openGeneration ? this.close() : var_core_value_sig4313.dispose(), var_core_value_sigE154;
    }
  }
  close() {
    ++this._openGeneration, this._opening = null, this._sessionDisposables["dispose"]();
    let var_core_value_sigFC87 = this._historyUniver;
    this._historyUniver = null, var_core_value_sigFC87 == null || var_core_value_sigFC87.dispose(), this._unitId = "", this._location = undefined, this._container && (this._container["style"].display = "none");
  }
  _syncViewerServices(var_core_value_sig156F, var_core_value_sigDD51) {
    let var_core_value_sigF057 = var_core_value_sig156F.__getInjector(),
      var_core_value_sig72F6 = var_core_value_sigF057.get(i.LocaleService),
      var_core_value_sig9FBA = var_core_value_sigF057.get(i.ThemeService);
    this._sessionDisposables["add"](this._themeService["darkMode$"].subscribe(var_core_value_sig4632 => {
      var_core_value_sig9FBA.setDarkMode(var_core_value_sig4632);
    })), this._sessionDisposables["add"](this._themeService["currentTheme$"].subscribe(var_core_value_sig12F2 => {
      var_core_value_sig9FBA.setTheme(var_core_value_sig12F2);
    })), this._sessionDisposables["add"](this._localeService["currentLocale$"].subscribe(var_core_value_sig2259 => {
      let var_core_value_sig9E2F = this._localeService["getLocales"]();
      var_core_value_sig9E2F && var_core_value_sig72F6.load({
        [var_core_value_sig2259]: var_core_value_sig9E2F
      }), var_core_value_sig72F6.setLocale(var_core_value_sig2259);
    })), this._sessionDisposables["add"](this._localeService["direction$"].subscribe(var_core_value_sigD082 => {
      var_core_value_sig72F6.setDirection(var_core_value_sigD082), var_core_value_sigDD51.dir = var_core_value_sigD082, var_core_value_sigDD51.style["direction"] = var_core_value_sigD082;
    }));
  }
  async restore(var_core_value_sigFE01) {
    var var_core_value_sigA2CE;
    let var_core_value_sig1975 = this._unitId,
      var_core_value_sig6EA1 = this._location,
      var_core_value_sig029F = this._collaborationController["getCollabEntity"](var_core_value_sig1975);
    if (!var_core_value_sig029F) throw Error("[BasesHistoryLoaderService]: Collaboration is not ready for this Base.");
    let var_core_value_sig3767 = new p.Subject(),
      var_core_value_sig670B = (0, p.firstValueFrom)(var_core_value_sig029F.session["event$"].pipe((0, p.filter)(var_core_value_sigDBB7 => var_core_value_sigDBB7.eventID === d.CollaborationEvent["CHANGESET_ACK"]), (0, p.filter)(var_core_value_sigD0A8 => (0, a.isHistoryRestoreAcknowledgement)(var_core_value_sigD0A8, var_core_value_sigFE01)), (0, p.takeUntil)(var_core_value_sig3767), (0, p.timeout)(10000)));
    try {
      if (!(await this._restoreService["restore"](var_core_value_sig1975, i.UniverInstanceType["UNIVER_BASE"], var_core_value_sigFE01))) throw Error("[BasesHistoryLoaderService]: The restore command was not accepted.");
      await var_core_value_sig670B;
    } catch (var_core_value_sigF4B9) {
      throw var_core_value_sig3767.next(), await var_core_value_sig670B.catch(() => undefined), var_core_value_sigF4B9;
    } finally {
      var_core_value_sig3767.complete();
    }
    this.close(), this._univerInstanceService["disposeUnit"](var_core_value_sig1975), await this._dataLoaderService["loadUnit"](var_core_value_sig1975, i.UniverInstanceType["UNIVER_BASE"]), await ((var_core_value_sigA2CE = this._adapterRegistry["get"](i.UniverInstanceType["UNIVER_BASE"])) == null ? undefined : var_core_value_sigA2CE.restoreLocation(var_core_value_sig1975, var_core_value_sig6EA1));
  }
  _ensureContainer() {
    var var_core_value_sig6912;
    if (this._container) return this._container;
    let var_core_value_sigE235 = this._configService["getConfig"](v),
      var_core_value_sig7664 = (var_core_value_sig6912 = this._configService["getConfig"](s.UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_core_value_sig6912.container,
      var_core_value_sig2281 = (var_core_value_sigE235 == null ? undefined : var_core_value_sigE235.univerContainerId) ?? var_core_value_sig7664,
      var_core_value_sig5E86 = typeof var_core_value_sig2281 == "string" ? document.getElementById(var_core_value_sig2281) : var_core_value_sig2281;
    if (!var_core_value_sig5E86) throw Error("[BasesHistoryLoaderService]: Configure a valid Univer container before opening history.");
    let var_core_value_sig6998 = document.createElement("div");
    return var_core_value_sig6998.style["position"] = "absolute", var_core_value_sig6998.style["inset"] = "0", var_core_value_sig6998.style["zIndex"] = "49", var_core_value_sig6998.style["display"] = "none", var_core_value_sig5E86.appendChild(var_core_value_sig6998), this._container = var_core_value_sig6998, var_core_value_sig6998;
  }
  _registerChildPlugins(var_core_value_sigF639, var_core_value_sigEAE5, var_core_value_sigE94C) {
    let var_core_value_sig6D47 = this._configService["getConfig"](r.LS_CONFIG_KEY),
      var_core_value_sigCB82 = this._configService["getConfig"](v),
      var_core_value_sigCF4E = [[r.UniverLicensePlugin, {
        license: var_core_value_sig6D47 == null ? undefined : var_core_value_sig6D47.ls
      }], [f.UniverRenderEnginePlugin], [s.UniverUIPlugin, {
        container: var_core_value_sigE94C,
        header: true,
        toolbar: false,
        footer: true,
        contextMenu: false
      }], [te.UniverNetworkPlugin], [ee.UniverProFormulaEnginePlugin, {
        notExecuteFormula: true
      }], [c.UniverBasesPlugin], [l.UniverBaseDashboardPlugin], [t.UniverBasesUIPlugin, {
        disableEdit: true,
        initialState: this._getInitialState(),
        override: [[t.IBaseCanvasRootResolverService, {
          useValue: (0, t.createScopedBaseCanvasRootResolverService)(var_core_value_sigE94C)
        }]]
      }], [u.UniverBaseDashboardUIPlugin], [d.UniverCollaborationPlugin], [a.UniverEditHistoryPlugin, {
        historyServerUrl: var_core_value_sigCB82 == null ? undefined : var_core_value_sigCB82.historyServerUrl
      }], [e.UniverBasesHistoryPlugin]],
      var_core_value_sig6CAD = new Set();
    [...var_core_value_sigCF4E, ...((var_core_value_sigCB82 == null ? undefined : var_core_value_sigCB82.viewerPlugins) ?? [])].forEach(([var_core_value_sig5CEE, var_core_value_sigE92A]) => {
      if (var_core_value_sig6CAD.has(var_core_value_sig5CEE.pluginName)) throw Error("[BasesHistoryLoaderService]: Plugin " + var_core_value_sig5CEE.pluginName + " has already been registered.");
      var_core_value_sig6CAD.add(var_core_value_sig5CEE.pluginName), var_core_value_sigF639.registerPlugin(var_core_value_sig5CEE, var_core_value_sigE92A);
    }), var_core_value_sigF639.registerPlugin(J, {
      viewerMode: true,
      descriptor: {
        unitId: this._unitId,
        type: i.UniverInstanceType["UNIVER_BASE"]
      },
      canRestore: var_core_value_sigEAE5,
      onClose: () => this.close(),
      onRestore: var_core_value_sig362B => this.restore(var_core_value_sig362B),
      collaborationClientConfig: this._configService["getConfig"](n.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY)
    });
  }
  _createPlaceholder(var_core_value_sig8CF5) {
    let var_core_value_sigDDD7 = Date.now();
    var_core_value_sig8CF5.createUnit(i.UniverInstanceType["UNIVER_BASE"], {
      id: this._unitId,
      name: "",
      schemaVersion: 1,
      tables: {},
      tableOrder: [],
      createdAt: var_core_value_sigDDD7,
      updatedAt: var_core_value_sigDDD7
    });
  }
  _getInitialState() {
    if (!X(this._location)) return;
    let {
      tableId: var_core_value_sigB2CE,
      viewId: var_core_value_sig443C
    } = this._location;
    return var_core_value_sigB2CE || var_core_value_sig443C ? {
      tableId: var_core_value_sigB2CE,
      viewId: var_core_value_sig443C
    } : undefined;
  }
  dispose() {
    var var_core_value_sig39B1;
    this.close(), (var_core_value_sig39B1 = this._container) == null || var_core_value_sig39B1.remove(), this._container = null, super.dispose();
  }
};
Y = C([S(0, i.IConfigService), S(1, (0, i.Inject)(a.HistoryRestoreService)), S(2, (0, i.Inject)(a.HistoryUnitAdapterRegistryService)), S(3, (0, i.Inject)(i.LocaleService)), S(4, (0, i.Inject)(i.ThemeService)), S(5, (0, i.Inject)(n.CollaborationController)), S(6, (0, i.Inject)(n.DataLoaderService)), S(7, i.IUniverInstanceService)], Y);
function X(var_core_value_sigBCA9) {
  return typeof var_core_value_sigBCA9 == "object" && !!var_core_value_sigBCA9;
}
const Z = {
  id: "bases-history-ui.operation.open",
  type: i.CommandType["OPERATION"],
  handler: var_core_value_sig4CDF => {
    let var_core_value_sig3F79 = var_core_value_sig4CDF.get(i.IUniverInstanceService).getCurrentUnitOfType(i.UniverInstanceType["UNIVER_BASE"]);
    return var_core_value_sig3F79 ? (var_core_value_sig4CDF.get(Y).open(var_core_value_sig3F79.getUnitId()).catch(var_core_value_sig210D => {
      var_core_value_sig4CDF.get(i.ILogService).error("[OpenBasesHistoryOperation]: Failed to open Base history.", var_core_value_sig210D);
    }), true) : false;
  }
};
function be() {
  var var_core_value_sig880E;
  let var_core_value_sigC9ED = (0, s.useDependency)(i.ICommandService),
    var_core_value_sigB57B = (0, s.useDependency)(i.IConfigService),
    var_core_value_sig780B = (0, s.useDependency)(i.LocaleService).t("bases-history-ui.menu.history");
  return (var_core_value_sig880E = var_core_value_sigB57B.getConfig("menu")) != null && (var_core_value_sig880E = var_core_value_sig880E[Z.id]) != null && var_core_value_sig880E.hidden ? null : (0, g.jsx)(h.Tooltip, {
    title: var_core_value_sig780B,
    placement: "top",
    children: (0, g.jsx)(h.Button, {
      type: "button",
      variant: "text",
      className: "univer-h-8 univer-w-8 univer-p-0",
      "aria-label": var_core_value_sig780B,
      onClick: async () => {
        await var_core_value_sigC9ED.executeCommand(Z.id);
      },
      children: (0, g.jsx)(_.HistoryIcon, {})
    })
  });
}
let Q = class extends i.Disposable {
  constructor(var_core_value_sigB4B4, var_core_value_sigD407, var_core_value_sig63F3) {
    super(), this.disposeWithMe(var_core_value_sigB4B4.registerCommand(Z)), this.disposeWithMe(var_core_value_sig63F3.registerComponent(t.BASE_TOOLBAR_EXTRA_ACTIONS, () => (0, s.connectInjector)(be, var_core_value_sigD407)));
  }
};
Q = C([S(0, i.ICommandService), S(1, (0, i.Inject)(i.Injector)), S(2, s.IUIPartsService)], Q);
let $ = class extends i.Plugin {
  constructor(var_core_value_sig6A71 = y, var_core_value_sig3BF6, var_core_value_sig38CE) {
    super(), this._config = var_core_value_sig6A71, this._injector = var_core_value_sig3BF6, this._configService = var_core_value_sig38CE;
    let {
      ...var_core_value_sig62B7
    } = (0, i.merge)({}, y, this._config);
    this._configService["setConfig"](v, var_core_value_sig62B7);
  }
  onStarting() {
    (0, i.registerDependencies)(this._injector, [[w], [Y], [Q]]), this._injector["get"](w), this._injector["get"](Q);
  }
};
P($, "pluginName", "UNIVER_BASES_HISTORY_UI_PLUGIN"), P($, "packageName", b), P($, "version", x), P($, "type", i.UniverInstanceType["UNIVER_BASE"]), $ = C([(0, i.DependentOn)(r.UniverLicensePlugin, n.UniverCollaborationClientPlugin, e.UniverBasesHistoryPlugin, t.UniverBasesUIPlugin), S(1, (0, i.Inject)(i.Injector)), S(2, i.IConfigService)], $), exports.BASES_HISTORY_UI_PLUGIN_CONFIG_KEY = v, Object.defineProperty(exports, "UniverBasesHistoryUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
