Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/bases"),
  t = require("@univerjs/core"),
  n = require("rxjs"),
  r = require("@univerjs-pro/engine-chart"),
  i = require("@univerjs-pro/engine-pivot"),
  a = require("@univerjs-pro/engine-shape"),
  o = require("@univerjs-pro/license"),
  s = require("@univerjs-pro/shape-editor"),
  c = require("@univerjs/rpc");
function l(var_core_value_sig0B0C, var_core_value_sigA39E, var_core_value_sigBBEE) {
  return (0, e.canEditBaseTargets)(var_core_value_sig0B0C, var_core_value_sigA39E, [(0, e.getBaseDashboardPermissionObjectId)(var_core_value_sigBBEE)]);
}
function u(var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig7F19) {
  return (0, e.canEditBaseTargets)(var_core_value_sig011D, var_core_value_sig6167, [(0, e.getBaseTablePermissionObjectId)(var_core_value_sig65A1), (0, e.getBaseViewPermissionObjectId)(var_core_value_sig65A1, var_core_value_sig7F19)]);
}
const d = {
    id: "base-dashboard.mutation.request-pivot-calculation",
    type: t.CommandType["MUTATION"],
    handler: () => true
  },
  f = {
    id: "base-dashboard.mutation.respond-pivot-calculation",
    type: t.CommandType["MUTATION"],
    handler: () => true
  };
function p(var_core_value_sig7827) {
  "@babel/helpers - typeof";

  return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig86D0) {
    return typeof var_core_value_sig86D0;
  } : function (var_core_value_sig4CD2) {
    return var_core_value_sig4CD2 && typeof Symbol == "function" && var_core_value_sig4CD2.constructor === Symbol && var_core_value_sig4CD2 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig4CD2;
  }, p(var_core_value_sig7827);
}
function ee(var_core_value_sig652C, var_core_value_sig7E32) {
  if (p(var_core_value_sig652C) != "object" || !var_core_value_sig652C) return var_core_value_sig652C;
  var var_core_value_sig4C07 = var_core_value_sig652C[Symbol.toPrimitive];
  if (var_core_value_sig4C07 !== undefined) {
    var var_core_value_sig79AB = var_core_value_sig4C07.call(var_core_value_sig652C, var_core_value_sig7E32 || "default");
    if (p(var_core_value_sig79AB) != "object") return var_core_value_sig79AB;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig7E32 === "string" ? String : Number)(var_core_value_sig652C);
}
function te(var_core_value_sig8E74) {
  var var_core_value_sig104C = ee(var_core_value_sig8E74, "string");
  return p(var_core_value_sig104C) == "symbol" ? var_core_value_sig104C : var_core_value_sig104C + "";
}
function m(var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5) {
  return (var_core_value_sig90CB = te(var_core_value_sig90CB)) in var_core_value_sig841D ? Object.defineProperty(var_core_value_sig841D, var_core_value_sig90CB, {
    value: var_core_value_sigBDF5,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig841D[var_core_value_sig90CB] = var_core_value_sigBDF5, var_core_value_sig841D;
}
function h(var_core_value_sigACC6, var_core_value_sig1614) {
  return function (var_core_value_sig48CA, var_core_value_sig50AF) {
    var_core_value_sig1614(var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigACC6);
  };
}
function g(var_core_value_sig85C3, var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig6201) {
  var var_core_value_sig5151 = arguments.length,
    var_core_value_sigB542 = var_core_value_sig5151 < 3 ? var_core_value_sigB996 : var_core_value_sig6201 === null ? var_core_value_sig6201 = Object.getOwnPropertyDescriptor(var_core_value_sigB996, var_core_value_sig4BBA) : var_core_value_sig6201,
    var_core_value_sigBB6C;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigB542 = Reflect.decorate(var_core_value_sig85C3, var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig6201);else {
    for (var var_core_value_sigE2BF = var_core_value_sig85C3.length - 1; var_core_value_sigE2BF >= 0; var_core_value_sigE2BF--) (var_core_value_sigBB6C = var_core_value_sig85C3[var_core_value_sigE2BF]) && (var_core_value_sigB542 = (var_core_value_sig5151 < 3 ? var_core_value_sigBB6C(var_core_value_sigB542) : var_core_value_sig5151 > 3 ? var_core_value_sigBB6C(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sigB542) : var_core_value_sigBB6C(var_core_value_sigB996, var_core_value_sig4BBA)) || var_core_value_sigB542);
  }
  return var_core_value_sig5151 > 3 && var_core_value_sigB542 && Object.defineProperty(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sigB542), var_core_value_sigB542;
}
let _ = class extends t.Disposable {
  constructor(var_core_value_sigA942) {
    super(), this._commandService = var_core_value_sigA942, m(this, "_pending", new Map());
  }
  calculate(var_core_value_sigA621) {
    let var_core_value_sigBBFF = (0, t.generateRandomId)();
    return new Promise((var_core_value_sigC9E0, var_core_value_sig76BA) => {
      let var_core_value_sigFBFA = setTimeout(() => {
        this._pending["delete"](var_core_value_sigBBFF), var_core_value_sig76BA(Error("Base pivot calculation timed out: " + var_core_value_sigA621.viewId));
      }, 30000);
      this._pending["set"](var_core_value_sigBBFF, {
        resolve: var_core_value_sigC9E0,
        reject: var_core_value_sig76BA,
        timeout: var_core_value_sigFBFA
      }), this._commandService["executeCommand"](d.id, {
        ...var_core_value_sigA621,
        requestId: var_core_value_sigBBFF
      }, {
        onlyLocal: true
      }).then(var_core_value_sig2AD0 => {
        var_core_value_sig2AD0 || this._reject(var_core_value_sigBBFF, Error("Unable to request Base pivot calculation: " + var_core_value_sigA621.viewId));
      }).catch(var_core_value_sig3EEE => {
        this._reject(var_core_value_sigBBFF, var_core_value_sig3EEE instanceof Error ? var_core_value_sig3EEE : Error(String(var_core_value_sig3EEE)));
      });
    });
  }
  handleResponse(var_core_value_sig8889) {
    let var_core_value_sig32F8 = this._pending["get"](var_core_value_sig8889.requestId);
    var_core_value_sig32F8 && (clearTimeout(var_core_value_sig32F8.timeout), this._pending["delete"](var_core_value_sig8889.requestId), var_core_value_sig32F8.resolve(var_core_value_sig8889));
  }
  dispose() {
    for (let var_core_value_sigF602 of this._pending["values"]()) clearTimeout(var_core_value_sigF602.timeout), var_core_value_sigF602.reject(Error("Base pivot calculation service disposed."));
    this._pending["clear"](), super.dispose();
  }
  _reject(var_core_value_sig5B67, var_core_value_sig1758) {
    let var_core_value_sig4805 = this._pending["get"](var_core_value_sig5B67);
    var_core_value_sig4805 && (clearTimeout(var_core_value_sig4805.timeout), this._pending["delete"](var_core_value_sig5B67), var_core_value_sig4805.reject(var_core_value_sig1758));
  }
};
_ = g([h(0, (0, t.Inject)(t.ICommandService))], _);
const ne = {
  id: "base-dashboard.command.calculate-pivot",
  type: t.CommandType["COMMAND"],
  handler: (var_core_value_sigB8C7, var_core_value_sigA56E) => {
    var var_core_value_sig1998;
    if (!var_core_value_sigA56E) throw Error("Pivot calculation parameters are required.");
    let var_core_value_sigFF19 = var_core_value_sigB8C7.get(t.IUniverInstanceService).getUnit(var_core_value_sigA56E.unitId, t.UniverInstanceType["UNIVER_BASE"]),
      var_core_value_sig43B8 = var_core_value_sigFF19 == null || (var_core_value_sig1998 = var_core_value_sigFF19.getSnapshot().tables[var_core_value_sigA56E.tableId]) == null ? undefined : var_core_value_sig1998.views[var_core_value_sigA56E.viewId];
    if (!re(var_core_value_sig43B8)) throw Error("Pivot view not found: " + var_core_value_sigA56E.viewId);
    return var_core_value_sigB8C7.get(_).calculate({
      unitId: var_core_value_sigA56E.unitId,
      tableId: var_core_value_sigA56E.tableId,
      viewId: var_core_value_sigA56E.viewId,
      pivot: var_core_value_sig43B8.config["pivot"],
      filters: [var_core_value_sig43B8.filter ?? null, ...(var_core_value_sigA56E.filters ?? [])]
    });
  }
};
function re(var_core_value_sigD98F) {
  return (var_core_value_sigD98F == null ? undefined : var_core_value_sigD98F.type) === t.BaseViewType["Pivot"] && typeof var_core_value_sigD98F.config == "object" && var_core_value_sigD98F.config !== null && "pivot" in var_core_value_sigD98F.config && "chart" in var_core_value_sigD98F.config;
}
const v = "BASE_DASHBOARD_PLUGIN";
var y = class extends t.Disposable {
  constructor(...var_core_value_sigE67E) {
    super(...var_core_value_sigE67E), m(this, "_resources", new Map()), m(this, "_change$", new n["BehaviorSubject"](null)), m(this, "change$", this._change$["asObservable"]());
  }
  getResource(var_core_value_sig2902) {
    let var_core_value_sig9989 = this._resources["get"](var_core_value_sig2902);
    return var_core_value_sig9989 || (var_core_value_sig9989 = b(), this._resources["set"](var_core_value_sig2902, var_core_value_sig9989)), t.Tools["deepClone"](var_core_value_sig9989);
  }
  getDashboard(var_core_value_sig698E, var_core_value_sig2809) {
    var var_core_value_sig2DAB;
    let var_core_value_sig877E = (var_core_value_sig2DAB = this._resources["get"](var_core_value_sig698E)) == null ? undefined : var_core_value_sig2DAB.dashboards[var_core_value_sig2809];
    return var_core_value_sig877E ? t.Tools["deepClone"](var_core_value_sig877E) : undefined;
  }
  setDashboard(var_core_value_sig20C8, var_core_value_sigE9A7, var_core_value_sigBECE) {
    let var_core_value_sig1B22 = this._getMutableResource(var_core_value_sig20C8),
      var_core_value_sig7F72 = !!var_core_value_sig1B22.dashboards[var_core_value_sigE9A7.id];
    if (var_core_value_sig1B22.dashboards[var_core_value_sigE9A7.id] = t.Tools["deepClone"](var_core_value_sigE9A7), !var_core_value_sig7F72) {
      let var_core_value_sig1BBD = var_core_value_sigBECE === undefined ? var_core_value_sig1B22.dashboardOrder["length"] : Math.max(0, Math.min(var_core_value_sigBECE, var_core_value_sig1B22.dashboardOrder["length"]));
      var_core_value_sig1B22.dashboardOrder["splice"](var_core_value_sig1BBD, 0, var_core_value_sigE9A7.id);
    }
    this._change$["next"]({
      unitId: var_core_value_sig20C8,
      dashboardId: var_core_value_sigE9A7.id
    });
  }
  removeDashboard(var_core_value_sig7B2A, var_core_value_sig06CD) {
    let var_core_value_sigA5F1 = this._getMutableResource(var_core_value_sig7B2A);
    if (!var_core_value_sigA5F1.dashboards[var_core_value_sig06CD]) return false;
    delete var_core_value_sigA5F1.dashboards[var_core_value_sig06CD];
    let var_core_value_sig97A2 = var_core_value_sigA5F1.dashboardOrder["indexOf"](var_core_value_sig06CD);
    return var_core_value_sig97A2 >= 0 && var_core_value_sigA5F1.dashboardOrder["splice"](var_core_value_sig97A2, 1), this._change$["next"]({
      unitId: var_core_value_sig7B2A,
      dashboardId: var_core_value_sig06CD
    }), true;
  }
  loadUnit(var_core_value_sig07E9, var_core_value_sig4F59) {
    this._resources["set"](var_core_value_sig07E9, t.Tools["deepClone"](var_core_value_sig4F59)), this._change$["next"]({
      unitId: var_core_value_sig07E9
    });
  }
  unloadUnit(var_core_value_sigF564) {
    this._resources["delete"](var_core_value_sigF564), this._change$["next"]({
      unitId: var_core_value_sigF564
    });
  }
  serializeUnit(var_core_value_sig8CFA) {
    return JSON.stringify(this._getMutableResource(var_core_value_sig8CFA));
  }
  dispose() {
    this._resources["clear"](), this._change$["complete"](), super.dispose();
  }
  _getMutableResource(var_core_value_sig2E11) {
    let var_core_value_sig5B69 = this._resources["get"](var_core_value_sig2E11);
    return var_core_value_sig5B69 || (var_core_value_sig5B69 = b(), this._resources["set"](var_core_value_sig2E11, var_core_value_sig5B69)), var_core_value_sig5B69;
  }
};
function b() {
  return {
    version: 1,
    dashboardOrder: [],
    dashboards: {}
  };
}
const x = {
    id: "base-dashboard.mutation.remove-dashboard",
    type: t.CommandType["MUTATION"],
    handler: (var_core_value_sig66C0, var_core_value_sig9D15) => !!(var_core_value_sig9D15 && var_core_value_sig66C0.get(y).removeDashboard(var_core_value_sig9D15.unitId, var_core_value_sig9D15.dashboardId))
  },
  S = {
    id: "base-dashboard.mutation.set-dashboard",
    type: t.CommandType["MUTATION"],
    handler: (var_core_value_sigB785, var_core_value_sig130F) => var_core_value_sig130F ? (var_core_value_sigB785.get(y).setDashboard(var_core_value_sig130F.unitId, var_core_value_sig130F.dashboard, var_core_value_sig130F.index), true) : false
  };
function C(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F, var_core_value_sigDE3D) {
  return (0, t.sequenceExecute)(var_core_value_sig866F, var_core_value_sigC0E3.get(t.ICommandService)).result ? (var_core_value_sigC0E3.get(t.IUndoRedoService).pushUndoRedo({
    unitID: var_core_value_sig52F7,
    redoMutations: var_core_value_sig866F,
    undoMutations: var_core_value_sigDE3D
  }), true) : false;
}
const w = {
  id: "base-dashboard.command.create-dashboard",
  type: t.CommandType["COMMAND"],
  handler: (var_core_value_sigF175, var_core_value_sig6A18) => {
    if (!var_core_value_sig6A18 || !ie(var_core_value_sigF175.get(t.IUniverInstanceService), var_core_value_sig6A18.unitId) || var_core_value_sigF175.get(y).getDashboard(var_core_value_sig6A18.unitId, var_core_value_sig6A18.dashboard["id"])) return false;
    let var_core_value_sig4E3D = [{
        id: S.id,
        params: {
          unitId: var_core_value_sig6A18.unitId,
          dashboard: var_core_value_sig6A18.dashboard,
          index: var_core_value_sig6A18.index
        }
      }],
      var_core_value_sig49B0 = [{
        id: x.id,
        params: {
          unitId: var_core_value_sig6A18.unitId,
          dashboardId: var_core_value_sig6A18.dashboard["id"]
        }
      }];
    return C(var_core_value_sigF175, var_core_value_sig6A18.unitId, var_core_value_sig4E3D, var_core_value_sig49B0);
  }
};
function ie(var_core_value_sig2547, var_core_value_sigBCA9) {
  return !!var_core_value_sig2547.getUnit(var_core_value_sigBCA9, t.UniverInstanceType["UNIVER_BASE"]);
}
const T = {
    id: "base-dashboard.command.delete-dashboard",
    type: t.CommandType["COMMAND"],
    handler: (var_core_value_sig4CDF, var_core_value_sig3F79) => {
      if (!var_core_value_sig3F79) return false;
      let var_core_value_sig880E = var_core_value_sig4CDF.get(y).getResource(var_core_value_sig3F79.unitId),
        var_core_value_sigC9ED = var_core_value_sig880E.dashboards[var_core_value_sig3F79.dashboardId],
        var_core_value_sigB57B = var_core_value_sig880E.dashboardOrder["indexOf"](var_core_value_sig3F79.dashboardId);
      if (!var_core_value_sigC9ED || var_core_value_sigB57B < 0) return false;
      let var_core_value_sig780B = [{
          id: x.id,
          params: {
            unitId: var_core_value_sig3F79.unitId,
            dashboardId: var_core_value_sig3F79.dashboardId
          }
        }],
        var_core_value_sig7D1B = [{
          id: S.id,
          params: {
            unitId: var_core_value_sig3F79.unitId,
            dashboard: var_core_value_sigC9ED,
            index: var_core_value_sigB57B
          }
        }];
      return C(var_core_value_sig4CDF, var_core_value_sig3F79.unitId, var_core_value_sig780B, var_core_value_sig7D1B);
    }
  },
  E = {
    PivotChart: "pivot-chart",
    TableFilter: "table-filter",
    Text: "text",
    Image: "image",
    FormulaShape: "formula-shape"
  };
let ae = function (var_core_value_sig7BE0) {
  return var_core_value_sig7BE0.CreateWidget = "create-widget", var_core_value_sig7BE0.RenameDashboard = "rename-dashboard", var_core_value_sig7BE0.ReorderWidgets = "reorder-widgets", var_core_value_sig7BE0.UpdateWidget = "update-widget", var_core_value_sig7BE0.RemoveWidget = "remove-widget", var_core_value_sig7BE0;
}({});
const D = {
    id: "base-dashboard.mutation.patch-dashboard",
    type: t.CommandType["MUTATION"],
    handler: (var_core_value_sig7D40, var_core_value_sig6C7E) => {
      if (!var_core_value_sig6C7E) return false;
      let var_core_value_sig68BE = var_core_value_sig7D40.get(y),
        var_core_value_sig04C6 = var_core_value_sig68BE.getDashboard(var_core_value_sig6C7E.unitId, var_core_value_sig6C7E.dashboardId);
      if (!var_core_value_sig04C6) return false;
      let var_core_value_sigCA05 = {
          ...var_core_value_sig04C6.widgets
        },
        var_core_value_sig2F2B = [...var_core_value_sig04C6.widgetOrder];
      if (Object.entries(var_core_value_sig6C7E.patch["widgets"] ?? {}).forEach(([var_core_value_sigB098, var_core_value_sigCE71]) => {
        var_core_value_sigCE71 === null ? (delete var_core_value_sigCA05[var_core_value_sigB098], var_core_value_sig2F2B = var_core_value_sig2F2B.filter(var_core_value_sigF704 => var_core_value_sigF704 !== var_core_value_sigB098)) : (var_core_value_sigCA05[var_core_value_sigB098] = var_core_value_sigCE71, var_core_value_sig2F2B.includes(var_core_value_sigB098) || var_core_value_sig2F2B.push(var_core_value_sigB098));
      }), var_core_value_sig6C7E.patch["widgetOrder"]) {
        let var_core_value_sig21D8 = var_core_value_sig6C7E.patch["widgetOrder"].filter(var_core_value_sig2BCF => var_core_value_sigCA05[var_core_value_sig2BCF]),
          var_core_value_sig2B65 = new Set(var_core_value_sig21D8);
        var_core_value_sig2F2B = [...var_core_value_sig21D8, ...var_core_value_sig2F2B.filter(var_core_value_sig0D69 => var_core_value_sigCA05[var_core_value_sig0D69] && !var_core_value_sig2B65.has(var_core_value_sig0D69))];
      }
      return var_core_value_sig68BE.setDashboard(var_core_value_sig6C7E.unitId, {
        ...var_core_value_sig04C6,
        ...(var_core_value_sig6C7E.patch["name"] === undefined ? null : {
          name: var_core_value_sig6C7E.patch["name"]
        }),
        widgetOrder: var_core_value_sig2F2B,
        widgets: var_core_value_sigCA05
      }), true;
    }
  },
  O = {
    id: "base-dashboard.command.remove-widget",
    type: t.CommandType["COMMAND"],
    handler: (var_core_value_sig70AF, var_core_value_sigD04E) => {
      if (!var_core_value_sigD04E) return false;
      let var_core_value_sigB99B = var_core_value_sig70AF.get(y).getDashboard(var_core_value_sigD04E.unitId, var_core_value_sigD04E.dashboardId),
        var_core_value_sig5A75 = var_core_value_sigB99B == null ? undefined : var_core_value_sigB99B.widgets[var_core_value_sigD04E.widgetId];
      if (!var_core_value_sigB99B || !var_core_value_sig5A75) return false;
      let var_core_value_sig7BAF = [{
          id: D.id,
          params: {
            unitId: var_core_value_sigD04E.unitId,
            dashboardId: var_core_value_sigD04E.dashboardId,
            historyAction: "remove-widget",
            historyWidgetType: var_core_value_sig5A75.type,
            patch: {
              widgets: {
                [var_core_value_sigD04E.widgetId]: null
              }
            }
          }
        }],
        var_core_value_sig8F69 = [{
          id: D.id,
          params: {
            unitId: var_core_value_sigD04E.unitId,
            dashboardId: var_core_value_sigD04E.dashboardId,
            historyAction: "create-widget",
            historyWidgetType: var_core_value_sig5A75.type,
            patch: {
              widgetOrder: var_core_value_sigB99B.widgetOrder,
              widgets: {
                [var_core_value_sigD04E.widgetId]: var_core_value_sigB99B.widgets[var_core_value_sigD04E.widgetId]
              }
            }
          }
        }];
      return C(var_core_value_sig70AF, var_core_value_sigD04E.unitId, var_core_value_sig7BAF, var_core_value_sig8F69);
    }
  },
  k = {
    id: "base-dashboard.command.update-dashboard",
    type: t.CommandType["COMMAND"],
    handler: (var_core_value_sig6884, var_core_value_sig066E) => {
      if (!var_core_value_sig066E) return false;
      let var_core_value_sig9B0D = var_core_value_sig6884.get(y).getDashboard(var_core_value_sig066E.unitId, var_core_value_sig066E.dashboard["id"]);
      if (!var_core_value_sig9B0D) return false;
      let var_core_value_sig3D2C = oe(var_core_value_sig9B0D, var_core_value_sig066E.dashboard),
        var_core_value_sigC56D = oe(var_core_value_sig066E.dashboard, var_core_value_sig9B0D);
      if (!var_core_value_sig3D2C) return false;
      let var_core_value_sig3A17 = ce(var_core_value_sig9B0D, var_core_value_sig066E.dashboard),
        var_core_value_sig938F = se(var_core_value_sig9B0D, var_core_value_sig066E.dashboard, var_core_value_sig3A17),
        var_core_value_sigD948 = [{
          id: D.id,
          params: {
            unitId: var_core_value_sig066E.unitId,
            dashboardId: var_core_value_sig066E.dashboard["id"],
            historyActions: var_core_value_sig938F,
            historyWidgetTypes: var_core_value_sig3A17,
            patch: var_core_value_sig3D2C
          }
        }],
        var_core_value_sigBE5E = [{
          id: D.id,
          params: {
            unitId: var_core_value_sig066E.unitId,
            dashboardId: var_core_value_sig066E.dashboard["id"],
            historyActions: var_core_value_sig938F,
            historyWidgetTypes: var_core_value_sig3A17,
            patch: var_core_value_sigC56D
          }
        }];
      return C(var_core_value_sig6884, var_core_value_sig066E.unitId, var_core_value_sigD948, var_core_value_sigBE5E);
    }
  };
function oe(var_core_value_sig0281, var_core_value_sigED71) {
  let var_core_value_sig281C = {};
  var_core_value_sig0281.name !== var_core_value_sigED71.name && (var_core_value_sig281C.name = var_core_value_sigED71.name), JSON.stringify(var_core_value_sig0281.widgetOrder) !== JSON.stringify(var_core_value_sigED71.widgetOrder) && (var_core_value_sig281C.widgetOrder = var_core_value_sigED71.widgetOrder);
  let var_core_value_sig3C92 = {};
  return new Set([...Object.keys(var_core_value_sig0281.widgets), ...Object.keys(var_core_value_sigED71.widgets)]).forEach(var_core_value_sigD7EA => {
    let var_core_value_sigB33B = var_core_value_sig0281.widgets[var_core_value_sigD7EA],
      var_core_value_sig24B9 = var_core_value_sigED71.widgets[var_core_value_sigD7EA];
    JSON.stringify(var_core_value_sigB33B) !== JSON.stringify(var_core_value_sig24B9) && (var_core_value_sig3C92[var_core_value_sigD7EA] = var_core_value_sig24B9 ?? null);
  }), Object.keys(var_core_value_sig3C92).length > 0 && (var_core_value_sig281C.widgets = var_core_value_sig3C92), Object.keys(var_core_value_sig281C).length > 0 ? var_core_value_sig281C : null;
}
function se(var_core_value_sigB16B, var_core_value_sig585D, var_core_value_sigE722) {
  let var_core_value_sig062A = [];
  return var_core_value_sigB16B.name !== var_core_value_sig585D.name && var_core_value_sig062A.push("rename-dashboard"), JSON.stringify(var_core_value_sigB16B.widgetOrder) !== JSON.stringify(var_core_value_sig585D.widgetOrder) && var_core_value_sig062A.push("reorder-widgets"), var_core_value_sigE722.length > 0 && var_core_value_sig062A.push("update-widget"), var_core_value_sig062A;
}
function ce(var_core_value_sig050A, var_core_value_sig8B32) {
  let var_core_value_sig870F = new Set();
  return new Set([...Object.keys(var_core_value_sig050A.widgets), ...Object.keys(var_core_value_sig8B32.widgets)]).forEach(var_core_value_sigE627 => {
    let var_core_value_sigEF3E = var_core_value_sig050A.widgets[var_core_value_sigE627],
      var_core_value_sig273D = var_core_value_sig8B32.widgets[var_core_value_sigE627];
    JSON.stringify(var_core_value_sigEF3E) !== JSON.stringify(var_core_value_sig273D) && (var_core_value_sigEF3E && var_core_value_sig870F.add(var_core_value_sigEF3E.type), var_core_value_sig273D && var_core_value_sig870F.add(var_core_value_sig273D.type));
  }), [...var_core_value_sig870F];
}
const A = {
    id: "base-dashboard.command.update-pivot-view",
    type: t.CommandType["COMMAND"],
    handler: (var_core_value_sigB683, var_core_value_sig26EC) => {
      var var_core_value_sigEEDB;
      if (!var_core_value_sig26EC) return false;
      let var_core_value_sig36E7 = var_core_value_sigB683.get(t.IUniverInstanceService).getUnit(var_core_value_sig26EC.unitId, t.UniverInstanceType["UNIVER_BASE"]),
        var_core_value_sig6A78 = var_core_value_sig36E7 == null || (var_core_value_sigEEDB = var_core_value_sig36E7.getSnapshot().tables[var_core_value_sig26EC.tableId]) == null ? undefined : var_core_value_sigEEDB.views[var_core_value_sig26EC.viewId];
      if (!var_core_value_sig36E7 || (var_core_value_sig6A78 == null ? undefined : var_core_value_sig6A78.type) !== t.BaseViewType["Pivot"]) return false;
      let var_core_value_sigF7EF = var_core_value_sig36E7.getSnapshot(),
        var_core_value_sig27F9 = new e.BaseJson1OpFactory().updateViewConfig(var_core_value_sigF7EF, var_core_value_sig26EC.tableId, var_core_value_sig26EC.viewId, var_core_value_sig26EC.patch),
        var_core_value_sig393E = new e["BaseJson1OpApplier"]().invertOp(var_core_value_sigF7EF, var_core_value_sig27F9),
        var_core_value_sigB609 = {
          unitId: var_core_value_sig26EC.unitId,
          op: var_core_value_sig27F9
        },
        var_core_value_sig390D = {
          unitId: var_core_value_sig26EC.unitId,
          op: var_core_value_sig393E
        };
      return var_core_value_sigB683.get(t.ICommandService).syncExecuteCommand(e.ApplyBaseJson1Mutation["id"], var_core_value_sigB609) ? (var_core_value_sigB683.get(t.IUndoRedoService).pushUndoRedo({
        unitID: var_core_value_sig26EC.unitId,
        redoMutations: [{
          id: e.ApplyBaseJson1Mutation["id"],
          params: var_core_value_sigB609
        }],
        undoMutations: [{
          id: e.ApplyBaseJson1Mutation["id"],
          params: var_core_value_sig390D
        }]
      }), true) : false;
    }
  },
  j = {
    id: "base-dashboard.command.upsert-widget",
    type: t.CommandType["COMMAND"],
    handler: (var_core_value_sigC928, var_core_value_sig39B7) => {
      if (!var_core_value_sig39B7) return false;
      let var_core_value_sig18E0 = var_core_value_sigC928.get(y).getDashboard(var_core_value_sig39B7.unitId, var_core_value_sig39B7.dashboardId),
        var_core_value_sigE161 = var_core_value_sigC928.get(t.IUniverInstanceService).getUnit(var_core_value_sig39B7.unitId, t.UniverInstanceType["UNIVER_BASE"]);
      if (!var_core_value_sig18E0 || !var_core_value_sigE161 || !le(var_core_value_sigE161, var_core_value_sig39B7.widget)) return false;
      let var_core_value_sigBDEE = var_core_value_sig18E0.widgetOrder["indexOf"](var_core_value_sig39B7.widget["id"]),
        var_core_value_sig1F40 = var_core_value_sig18E0.widgets[var_core_value_sig39B7.widget["id"]],
        var_core_value_sig3FC7 = var_core_value_sig18E0.widgetOrder["filter"](var_core_value_sig9A0D => var_core_value_sig9A0D !== var_core_value_sig39B7.widget["id"]),
        var_core_value_sig1E1B = var_core_value_sigBDEE >= 0 ? var_core_value_sigBDEE : var_core_value_sig3FC7.length;
      var_core_value_sig39B7.index !== undefined && (var_core_value_sig1E1B = Math.max(0, Math.min(var_core_value_sig39B7.index, var_core_value_sig3FC7.length))), var_core_value_sig3FC7.splice(var_core_value_sig1E1B, 0, var_core_value_sig39B7.widget["id"]);
      let var_core_value_sig3B10 = var_core_value_sig39B7.index !== undefined && var_core_value_sig1E1B !== var_core_value_sigBDEE,
        var_core_value_sig89E6 = [{
          id: D.id,
          params: {
            unitId: var_core_value_sig39B7.unitId,
            dashboardId: var_core_value_sig39B7.dashboardId,
            historyAction: var_core_value_sigBDEE >= 0 ? "update-widget" : "create-widget",
            historyWidgetType: var_core_value_sig39B7.widget["type"],
            patch: {
              widgets: {
                [var_core_value_sig39B7.widget["id"]]: var_core_value_sig39B7.widget
              },
              ...(var_core_value_sig3B10 ? {
                widgetOrder: var_core_value_sig3FC7
              } : null)
            }
          }
        }],
        var_core_value_sig4743 = [{
          id: D.id,
          params: {
            unitId: var_core_value_sig39B7.unitId,
            dashboardId: var_core_value_sig39B7.dashboardId,
            historyAction: var_core_value_sigBDEE >= 0 ? "update-widget" : "remove-widget",
            historyWidgetType: (var_core_value_sig1F40 == null ? undefined : var_core_value_sig1F40.type) ?? var_core_value_sig39B7.widget["type"],
            patch: {
              widgets: {
                [var_core_value_sig39B7.widget["id"]]: var_core_value_sig18E0.widgets[var_core_value_sig39B7.widget["id"]] ?? null
              },
              ...(var_core_value_sig3B10 ? {
                widgetOrder: var_core_value_sig18E0.widgetOrder
              } : null)
            }
          }
        }];
      return C(var_core_value_sigC928, var_core_value_sig39B7.unitId, var_core_value_sig89E6, var_core_value_sig4743);
    }
  };
function le(var_core_value_sigEB6A, var_core_value_sig3D46) {
  if (var_core_value_sig3D46.type === E.Text || var_core_value_sig3D46.type === E.Image) return true;
  let var_core_value_sigCC93 = var_core_value_sigEB6A.getSnapshot().tables[var_core_value_sig3D46.tableId];
  if (!var_core_value_sigCC93) return false;
  if (var_core_value_sig3D46.type === E.PivotChart) {
    var var_core_value_sig5964;
    return ((var_core_value_sig5964 = var_core_value_sigCC93.views[var_core_value_sig3D46.pivotViewId]) == null ? undefined : var_core_value_sig5964.type) === t.BaseViewType["Pivot"];
  }
  return true;
}
var ue = class extends i.DataFieldManager {
  constructor(var_core_value_sigA319, var_core_value_sig2D58, var_core_value_sig223F) {
    super(), this._fieldIds = var_core_value_sigA319, this._headers = var_core_value_sig2D58, this._data = var_core_value_sig223F, m(this, "_fieldIndex", 0);
  }
  createDataFieldId() {
    let var_core_value_sigD749 = this._fieldIds[this._fieldIndex];
    return this._fieldIndex += 1, var_core_value_sigD749 ?? super.createDataFieldId();
  }
  getRangeData() {
    return {
      header: this._headers,
      data: this._data
    };
  }
};
function de(var_core_value_sig808B) {
  let {
      collection: var_core_value_sig2A26
    } = P(var_core_value_sig808B),
    var_core_value_sig1179 = new i["PivotTable"](var_core_value_sig2A26),
    var_core_value_sigEA92 = var_core_value_sig808B.fieldOrder["find"](var_core_value_sigCFFA => _e(var_core_value_sig808B, var_core_value_sigCFFA)),
    var_core_value_sig8FD9 = var_core_value_sig808B.fieldOrder["find"](var_core_value_sig58C1 => ve(var_core_value_sig808B, var_core_value_sig58C1));
  return var_core_value_sigEA92 && var_core_value_sig1179.addFieldWithSourceId(var_core_value_sigEA92, i.PivotTableFiledAreaEnum["Row"], undefined, "row-" + var_core_value_sigEA92), var_core_value_sig8FD9 && var_core_value_sig1179.addFieldWithSourceId(var_core_value_sig8FD9, i.PivotTableFiledAreaEnum["Value"], undefined, "value-" + var_core_value_sig8FD9), var_core_value_sig1179.toJSON();
}
function M(var_core_value_sig1AE5) {
  return {
    pivot: de(var_core_value_sig1AE5),
    chart: {
      type: r.ChartTypeBits["Column"],
      orient: "column"
    },
    displayMode: "chart-and-table"
  };
}
function N(var_core_value_sig7100) {
  let var_core_value_sigA19A = pe(var_core_value_sig7100.table, var_core_value_sig7100.filters ?? []),
    {
      collection: var_core_value_sigD3F5
    } = P(var_core_value_sig7100.table, var_core_value_sigA19A),
    var_core_value_sig3082 = new i["PivotTable"](var_core_value_sigD3F5);
  return var_core_value_sig3082.fromJSON(var_core_value_sig7100.pivot), var_core_value_sig3082.query().toJSON();
}
function fe(var_core_value_sigF5D1, var_core_value_sig8775) {
  let {
      collection: var_core_value_sig481B
    } = P(var_core_value_sigF5D1),
    var_core_value_sig13D7 = new i.PivotTable(var_core_value_sig481B);
  return var_core_value_sig8775 && var_core_value_sig13D7.fromJSON(var_core_value_sig8775), var_core_value_sig13D7;
}
function P(var_core_value_sig90C0, var_core_value_sigF1B2 = F(var_core_value_sig90C0)) {
  let var_core_value_sigC2BB = var_core_value_sig90C0.fieldOrder["flatMap"](var_core_value_sig5090 => {
      let var_core_value_sigC368 = var_core_value_sig90C0.fields[var_core_value_sig5090];
      return var_core_value_sigC368 ? [var_core_value_sigC368] : [];
    }),
    var_core_value_sigD9DB = new ue(var_core_value_sigC2BB.map(var_core_value_sigAD56 => var_core_value_sigAD56.id), var_core_value_sigC2BB.map(var_core_value_sigDB4A => var_core_value_sigDB4A.name), var_core_value_sigF1B2.map(var_core_value_sig6418 => var_core_value_sigC2BB.map(var_core_value_sig480E => he(var_core_value_sig6418.values[var_core_value_sig480E.id], var_core_value_sig480E))));
  return {
    manager: var_core_value_sigD9DB,
    collection: var_core_value_sigD9DB.createCollection(var_core_value_sig90C0.id, {
      tableId: var_core_value_sig90C0.id
    })
  };
}
function F(var_core_value_sigA363) {
  return (var_core_value_sigA363.recordOrder ?? Object.values(var_core_value_sigA363.records).sort((var_core_value_sig1896, var_core_value_sig0285) => var_core_value_sig1896.orderKey["localeCompare"](var_core_value_sig0285.orderKey)).map(var_core_value_sig777D => var_core_value_sig777D.id)).map(var_core_value_sig3F4C => var_core_value_sigA363.records[var_core_value_sig3F4C]).filter(var_core_value_sigD65A => var_core_value_sigD65A !== undefined);
}
function pe(var_core_value_sigFBA5, var_core_value_sigAC47) {
  let var_core_value_sigA06F = var_core_value_sigAC47.filter(var_core_value_sig5A13 => !!(var_core_value_sig5A13 != null && var_core_value_sig5A13.conditions["length"]));
  return var_core_value_sigA06F.length === 0 ? F(var_core_value_sigFBA5) : F(var_core_value_sigFBA5).filter(var_core_value_sigF593 => var_core_value_sigA06F.every(var_core_value_sig26DB => me(var_core_value_sigFBA5, var_core_value_sigF593, var_core_value_sig26DB)));
}
function me(var_core_value_sig770E, var_core_value_sig4654, var_core_value_sigB26B) {
  let var_core_value_sig019B = var_core_value_sigB26B.conditions["map"](var_core_value_sig3607 => {
    let var_core_value_sigB512 = var_core_value_sig770E.fields[var_core_value_sig3607.fieldId];
    return var_core_value_sigB512 ? (0, e.matchesBaseCondition)(var_core_value_sig4654.values[var_core_value_sig3607.fieldId], var_core_value_sig3607.operator, var_core_value_sig3607.operand, var_core_value_sigB512) : false;
  });
  return var_core_value_sigB26B.conjunction === t.BaseFilterConjunction["OR"] ? var_core_value_sig019B.some(Boolean) : var_core_value_sig019B.every(Boolean);
}
function he(var_core_value_sigC6BC, var_core_value_sig8EC2) {
  if (ge(var_core_value_sig8EC2)) {
    let var_core_value_sigF2E6 = (0, e.normalizeBaseDateSerial)(var_core_value_sigC6BC);
    if (var_core_value_sigF2E6 === null) return null;
    let var_core_value_sig34C8 = (0, e.resolveBaseDateFieldConfig)(var_core_value_sig8EC2.config),
      var_core_value_sigB744 = var_core_value_sig34C8.hourCycle === "h12" ? " h:mm AM/PM" : " hh:mm";
    return {
      v: var_core_value_sigF2E6,
      f: "" + var_core_value_sig34C8.pattern + (var_core_value_sig34C8.includeTime ? var_core_value_sigB744 : "")
    };
  }
  return var_core_value_sigC6BC == null || typeof var_core_value_sigC6BC == "string" || typeof var_core_value_sigC6BC == "number" || typeof var_core_value_sigC6BC == "boolean" ? var_core_value_sigC6BC : Array.isArray(var_core_value_sigC6BC) ? var_core_value_sigC6BC.map(I).join(",\x20") : I(var_core_value_sigC6BC);
}
function ge(var_core_value_sigA8C3) {
  return var_core_value_sigA8C3.type === t.BaseFieldType["Date"] || var_core_value_sigA8C3.type === t.BaseFieldType["CreatedAt"] || var_core_value_sigA8C3.type === t.BaseFieldType["UpdatedAt"];
}
function I(var_core_value_sig5276) {
  if (var_core_value_sig5276 == null) return "";
  if (typeof var_core_value_sig5276 == "string" || typeof var_core_value_sig5276 == "number" || typeof var_core_value_sig5276 == "boolean") return String(var_core_value_sig5276);
  if (Array.isArray(var_core_value_sig5276)) return var_core_value_sig5276.map(I).join(",\x20");
  if (typeof var_core_value_sig5276 == "object") {
    let var_core_value_sigEAE2 = Reflect.get(var_core_value_sig5276, "label");
    if (typeof var_core_value_sigEAE2 == "string") return var_core_value_sigEAE2;
    let var_core_value_sigE68A = Reflect.get(var_core_value_sig5276, "name");
    if (typeof var_core_value_sigE68A == "string") return var_core_value_sigE68A;
  }
  return String(var_core_value_sig5276);
}
function _e(var_core_value_sig031B, var_core_value_sig9DC0) {
  let var_core_value_sig95F0 = var_core_value_sig031B.fields[var_core_value_sig9DC0];
  return !!(var_core_value_sig95F0 && var_core_value_sig95F0.system !== true && var_core_value_sig95F0.type !== t.BaseFieldType["RecordId"] && var_core_value_sig95F0.type !== t.BaseFieldType["Attachment"] && var_core_value_sig95F0.type !== t.BaseFieldType["Formula"]);
}
function ve(var_core_value_sig9CCB, var_core_value_sigE718) {
  var var_core_value_sigAEC8;
  let var_core_value_sigB977 = (var_core_value_sigAEC8 = var_core_value_sig9CCB.fields[var_core_value_sigE718]) == null ? undefined : var_core_value_sigAEC8.type;
  return var_core_value_sigB977 === t.BaseFieldType["Number"] || var_core_value_sigB977 === t.BaseFieldType["Currency"] || var_core_value_sigB977 === t.BaseFieldType["Progress"] || var_core_value_sigB977 === t.BaseFieldType["Rating"];
}
function L(var_core_value_sig2949) {
  return var_core_value_sig2949 !== "row";
}
function R(var_core_value_sig308A, var_core_value_sig528D = {}) {
  let var_core_value_sigA309 = new i["PivotView"]();
  var_core_value_sigA309.formJSON(var_core_value_sig308A);
  let var_core_value_sig9E20 = z(var_core_value_sigA309.rowView["info"], var_core_value_sigA309.dataView["getRowCount"]()),
    var_core_value_sig26BB = z(var_core_value_sigA309.colView["info"], var_core_value_sigA309.dataView["getColCount"]()),
    var_core_value_sig19B4 = var_core_value_sig9E20.reduce((var_core_value_sig3E68, var_core_value_sigF4C5) => {
      var var_core_value_sig5410;
      return Math.max(var_core_value_sig3E68, ((var_core_value_sig5410 = var_core_value_sigA309.rowView["info"][var_core_value_sigF4C5]) == null ? undefined : var_core_value_sig5410.paths["length"]) ?? 0);
    }, 0),
    var_core_value_sig218A = Math.max(var_core_value_sig19B4, 1),
    var_core_value_sig14CB = Array.from({
      length: var_core_value_sig218A
    }, (var_core_value_sig492F, var_core_value_sig8EA0) => {
      var var_core_value_sigA6F6;
      return ((var_core_value_sigA6F6 = var_core_value_sig528D.rowDimensionNames) == null ? undefined : var_core_value_sigA6F6[var_core_value_sig8EA0]) ?? "Category " + (var_core_value_sig8EA0 + 1);
    }),
    var_core_value_sigFDEE = [],
    var_core_value_sigA676 = [];
  for (let var_core_value_sigCDDA of var_core_value_sig26BB) {
    let var_core_value_sigF0F9 = var_core_value_sigA309.colView["info"][var_core_value_sigCDDA],
      var_core_value_sig1A0F = (var_core_value_sigF0F9 == null ? undefined : var_core_value_sigF0F9.paths["filter"](Boolean).join(" / ")) || "Value " + (var_core_value_sigCDDA + 1);
    var_core_value_sig14CB.push(var_core_value_sig1A0F);
  }
  for (let var_core_value_sigE243 of var_core_value_sig9E20) {
    var var_core_value_sigC27E;
    let var_core_value_sigFBA4 = ((var_core_value_sigC27E = var_core_value_sigA309.rowView["info"][var_core_value_sigE243]) == null ? undefined : var_core_value_sigC27E.paths) ?? [],
      var_core_value_sig4383 = [],
      var_core_value_sig186C = [];
    for (let var_core_value_sigBC46 = 0; var_core_value_sigBC46 < var_core_value_sig218A; var_core_value_sigBC46++) {
      let var_core_value_sig7524 = var_core_value_sigFBA4[var_core_value_sigBC46] ?? (var_core_value_sigBC46 === 0 ? var_core_value_sig528D.emptyCategoryLabel ?? "" : "");
      var_core_value_sig4383.push(var_core_value_sig7524), var_core_value_sig186C.push(var_core_value_sig7524);
    }
    for (let var_core_value_sig3D7D of var_core_value_sig26BB) {
      let var_core_value_sig2AD8 = ye(var_core_value_sigA309.dataView["getValue"](var_core_value_sigE243, var_core_value_sig3D7D));
      var_core_value_sig4383.push(var_core_value_sig2AD8), var_core_value_sig186C.push(var_core_value_sig2AD8 == null ? "" : String(var_core_value_sig2AD8));
    }
    var_core_value_sigFDEE.push(var_core_value_sig4383), var_core_value_sigA676.push(var_core_value_sig186C);
  }
  return {
    dimensions: var_core_value_sig14CB,
    source: var_core_value_sigFDEE,
    sourceLabels: var_core_value_sigA676
  };
}
function z(var_core_value_sigA70D, var_core_value_sigCE10) {
  let var_core_value_sigA386 = [];
  for (let var_core_value_sig74A8 = 0; var_core_value_sig74A8 < var_core_value_sigCE10; var_core_value_sig74A8++) {
    let var_core_value_sigD955 = var_core_value_sigA70D[var_core_value_sig74A8];
    !(var_core_value_sigD955 != null && var_core_value_sigD955.isBottomTotal) && !(var_core_value_sigD955 != null && var_core_value_sigD955.isTopTotal) && !(var_core_value_sigD955 != null && var_core_value_sigD955.isSubtotal) && var_core_value_sigA386.push(var_core_value_sig74A8);
  }
  return var_core_value_sigA386.length > 0 ? var_core_value_sigA386 : Array.from({
    length: var_core_value_sigCE10
  }, (var_core_value_sig21B2, var_core_value_sigDE08) => var_core_value_sigDE08);
}
function ye(var_core_value_sigCD82) {
  return (0, i.isPrefixValue)(var_core_value_sigCD82) ? var_core_value_sigCD82.value : (0, i.isErrorValue)(var_core_value_sigCD82) ? null : var_core_value_sigCD82 ?? null;
}
var B = "@univerjs-pro/bases-dashboard",
  be = "1.0.0-insiders.20260907-70fc579";
const xe = {
  id: "base-dashboard.mutation.update-formula-last-value",
  type: t.CommandType["MUTATION"],
  handler: (var_core_value_sig44DD, var_core_value_sig96FA) => {
    var var_core_value_sigAB68;
    if (!var_core_value_sig96FA) return false;
    let var_core_value_sig040A = var_core_value_sig44DD.get(y),
      var_core_value_sig2AE0 = var_core_value_sig040A.getDashboard(var_core_value_sig96FA.unitId, var_core_value_sig96FA.dashboardId),
      var_core_value_sigC349 = var_core_value_sig2AE0 == null ? undefined : var_core_value_sig2AE0.widgets[var_core_value_sig96FA.widgetId];
    if (!var_core_value_sig2AE0 || (var_core_value_sigC349 == null ? undefined : var_core_value_sigC349.type) !== E.FormulaShape || !(0, a.canApplyShapeFormulaLastValue)(var_core_value_sig44DD, {
      hostType: t.UniverInstanceType["UNIVER_BASE"],
      unitId: var_core_value_sig96FA.unitId,
      subUnitId: var_core_value_sig96FA.dashboardId,
      shapeId: var_core_value_sig96FA.widgetId
    }, (var_core_value_sigAB68 = var_core_value_sigC349.shapeData["formulaBinding"]) == null ? undefined : var_core_value_sigAB68.formula, var_core_value_sig96FA.guard)) return false;
    let var_core_value_sig9D96 = var_core_value_sigC349.shapeData["formulaBinding"];
    return var_core_value_sig9D96 ? (var_core_value_sig040A.setDashboard(var_core_value_sig96FA.unitId, {
      ...var_core_value_sig2AE0,
      widgets: {
        ...var_core_value_sig2AE0.widgets,
        [var_core_value_sigC349.id]: {
          ...var_core_value_sigC349,
          shapeData: {
            ...var_core_value_sigC349.shapeData,
            formulaBinding: {
              ...var_core_value_sig9D96,
              lastValue: t.Tools["deepClone"](var_core_value_sig96FA.lastValue)
            }
          }
        }
      }
    }), true) : false;
  }
};
let V = class extends t.Disposable {
  constructor(var_core_value_sigACCB, var_core_value_sig7F33, var_core_value_sig0C53, var_core_value_sigEA04) {
    super(), this._commandService = var_core_value_sigACCB, this._instanceService = var_core_value_sig0C53, this._resourceService = var_core_value_sigEA04, m(this, "hostType", t.UniverInstanceType["UNIVER_BASE"]), m(this, "shapeChanged$", undefined), this.shapeChanged$ = this._resourceService["change$"].pipe((0, n.filter)(var_core_value_sig48BD => var_core_value_sig48BD !== null), (0, n.map)(var_core_value_sig429F => ({
      unitId: var_core_value_sig429F.unitId
    }))), this.disposeWithMe(var_core_value_sig7F33.register(this));
  }
  getShape(var_core_value_sig7A62) {
    let var_core_value_sig8109 = this._getWidget(var_core_value_sig7A62);
    return var_core_value_sig8109 ? this._toSnapshot(var_core_value_sig7A62, var_core_value_sig8109) : null;
  }
  listShapes(var_core_value_sig7565) {
    let var_core_value_sigD4FB = this._resourceService["getDashboard"](var_core_value_sig7565.unitId, var_core_value_sig7565.subUnitId);
    return (var_core_value_sigD4FB == null ? undefined : var_core_value_sigD4FB.widgetOrder["map"](var_core_value_sigF62A => var_core_value_sigD4FB.widgets[var_core_value_sigF62A]).filter(var_core_value_sig8178 => (var_core_value_sig8178 == null ? undefined : var_core_value_sig8178.type) === E.FormulaShape).map(var_core_value_sigE9ED => this._toSnapshot({
      ...var_core_value_sig7565,
      shapeId: var_core_value_sigE9ED.id
    }, var_core_value_sigE9ED))) ?? [];
  }
  listShapesInUnit(var_core_value_sig3E71) {
    return this._resourceService["getResource"](var_core_value_sig3E71).dashboardOrder["flatMap"](var_core_value_sigB577 => this.listShapes({
      hostType: this.hostType,
      unitId: var_core_value_sig3E71,
      subUnitId: var_core_value_sigB577
    }));
  }
  createShape(var_core_value_sig01B3, var_core_value_sig7442) {
    let var_core_value_sigDF87 = this._instanceService["getUnit"](var_core_value_sig01B3.unitId, t.UniverInstanceType["UNIVER_BASE"]),
      var_core_value_sig9EE0 = var_core_value_sigDF87 == null ? undefined : var_core_value_sigDF87.getSnapshot().tableOrder[0];
    if (!var_core_value_sig9EE0 || !this._resourceService["getDashboard"](var_core_value_sig01B3.unitId, var_core_value_sig01B3.subUnitId)) return null;
    let var_core_value_sigF051 = Se(var_core_value_sig7442.transform),
      var_core_value_sig0B45 = {
        id: "formula-shape-" + (0, t.generateRandomId)(8),
        type: E.FormulaShape,
        tableId: var_core_value_sig9EE0,
        layout: Ce(var_core_value_sigF051),
        shapeType: var_core_value_sig7442.shapeType,
        shapeData: t.Tools["deepClone"](var_core_value_sig7442.shapeData ?? (0, s.createFormulaShapeData)()),
        ...(var_core_value_sig7442.name ? {
          title: var_core_value_sig7442.name
        } : null)
      };
    return this._commandService["syncExecuteCommand"](j.id, {
      unitId: var_core_value_sig01B3.unitId,
      dashboardId: var_core_value_sig01B3.subUnitId,
      widget: var_core_value_sig0B45
    }) ? this._toSnapshot({
      ...var_core_value_sig01B3,
      shapeId: var_core_value_sig0B45.id
    }, var_core_value_sig0B45) : null;
  }
  updateShape(var_core_value_sig36F8, var_core_value_sig03E1) {
    let var_core_value_sigBB57 = this._getWidget(var_core_value_sig36F8);
    if (!var_core_value_sigBB57) return false;
    let var_core_value_sig7C4A = {
        ...this._toSnapshot(var_core_value_sig36F8, var_core_value_sigBB57).transform,
        ...var_core_value_sig03E1.transform
      },
      var_core_value_sigE799 = {
        ...var_core_value_sigBB57,
        ...(var_core_value_sig03E1.name === undefined ? null : {
          title: var_core_value_sig03E1.name
        }),
        layout: Ce(var_core_value_sig7C4A),
        shapeType: var_core_value_sig03E1.shapeType ?? var_core_value_sigBB57.shapeType,
        shapeData: t.Tools["deepClone"](var_core_value_sig03E1.shapeData ?? var_core_value_sigBB57.shapeData)
      };
    return this._commandService["syncExecuteCommand"](j.id, {
      unitId: var_core_value_sig36F8.unitId,
      dashboardId: var_core_value_sig36F8.subUnitId,
      widget: var_core_value_sigE799
    });
  }
  createFormulaLastValueMutation(var_core_value_sigB601, var_core_value_sig8B71, var_core_value_sigAEFB) {
    return this._getWidget(var_core_value_sigB601) ? {
      id: xe.id,
      params: {
        unitId: var_core_value_sigB601.unitId,
        dashboardId: var_core_value_sigB601.subUnitId,
        widgetId: var_core_value_sigB601.shapeId,
        guard: var_core_value_sig8B71,
        lastValue: var_core_value_sigAEFB
      }
    } : null;
  }
  removeShape(var_core_value_sig826B) {
    return this._commandService["syncExecuteCommand"](O.id, {
      unitId: var_core_value_sig826B.unitId,
      dashboardId: var_core_value_sig826B.subUnitId,
      widgetId: var_core_value_sig826B.shapeId
    });
  }
  bringToFront(var_core_value_sigCF89) {
    let var_core_value_sig00CB = this._resourceService["getDashboard"](var_core_value_sigCF89.unitId, var_core_value_sigCF89.subUnitId);
    return var_core_value_sig00CB ? this.setZOrder(var_core_value_sigCF89, var_core_value_sig00CB.widgetOrder["length"] - 1) : false;
  }
  bringForward(var_core_value_sig77EE) {
    return this._move(var_core_value_sig77EE, 1);
  }
  sendBackward(var_core_value_sig9F76) {
    return this._move(var_core_value_sig9F76, -1);
  }
  sendToBack(var_core_value_sigB008) {
    return this.setZOrder(var_core_value_sigB008, 0);
  }
  setZOrder(var_core_value_sig8721, var_core_value_sig08BA) {
    let var_core_value_sigDBB5 = this._resourceService["getDashboard"](var_core_value_sig8721.unitId, var_core_value_sig8721.subUnitId);
    if (!(var_core_value_sigDBB5 != null && var_core_value_sigDBB5.widgets[var_core_value_sig8721.shapeId])) return false;
    let var_core_value_sigCFAC = var_core_value_sigDBB5.widgetOrder["filter"](var_core_value_sig9572 => var_core_value_sig9572 !== var_core_value_sig8721.shapeId);
    return var_core_value_sigCFAC.splice(Math.max(0, Math.min(var_core_value_sig08BA, var_core_value_sigCFAC.length)), 0, var_core_value_sig8721.shapeId), this._commandService["syncExecuteCommand"](k.id, {
      unitId: var_core_value_sig8721.unitId,
      dashboard: {
        ...var_core_value_sigDBB5,
        widgetOrder: var_core_value_sigCFAC
      }
    });
  }
  _move(var_core_value_sig237B, var_core_value_sigFEAB) {
    let var_core_value_sigE347 = this._resourceService["getDashboard"](var_core_value_sig237B.unitId, var_core_value_sig237B.subUnitId),
      var_core_value_sig3C5B = (var_core_value_sigE347 == null ? undefined : var_core_value_sigE347.widgetOrder["indexOf"](var_core_value_sig237B.shapeId)) ?? -1;
    return var_core_value_sig3C5B < 0 ? false : this.setZOrder(var_core_value_sig237B, var_core_value_sig3C5B + var_core_value_sigFEAB);
  }
  _getWidget(var_core_value_sig200B) {
    var var_core_value_sig3863;
    let var_core_value_sigC97C = (var_core_value_sig3863 = this._resourceService["getDashboard"](var_core_value_sig200B.unitId, var_core_value_sig200B.subUnitId)) == null ? undefined : var_core_value_sig3863.widgets[var_core_value_sig200B.shapeId];
    return (var_core_value_sigC97C == null ? undefined : var_core_value_sigC97C.type) === E.FormulaShape ? var_core_value_sigC97C : null;
  }
  _toSnapshot(var_core_value_sigC4B1, var_core_value_sig1BD9) {
    return {
      ...var_core_value_sigC4B1,
      shapeType: var_core_value_sig1BD9.shapeType,
      shapeData: t.Tools["deepClone"](var_core_value_sig1BD9.shapeData),
      name: var_core_value_sig1BD9.title,
      transform: we(var_core_value_sig1BD9),
      visible: true,
      selectable: true
    };
  }
};
V = g([h(0, t.ICommandService), h(1, a.IShapeHostAdapterRegistry), h(2, t.IUniverInstanceService), h(3, (0, t.Inject)(y))], V);
function Se(var_core_value_sig2776) {
  return {
    left: (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.left) ?? 0,
    top: (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.top) ?? 0,
    width: (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.width) ?? 4,
    height: (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.height) ?? 3,
    rotation: (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.rotation) ?? 0,
    flipX: (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.flipX) ?? false,
    flipY: (var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.flipY) ?? false
  };
}
function Ce(var_core_value_sig6FB2) {
  let var_core_value_sigEB43 = Math.max(0, Math.min(11, Math.round(var_core_value_sig6FB2.left)));
  return {
    column: var_core_value_sigEB43,
    row: Math.max(0, Math.round(var_core_value_sig6FB2.top)),
    columnSpan: Math.max(1, Math.min(12 - var_core_value_sigEB43, Math.round(var_core_value_sig6FB2.width))),
    rowSpan: Math.max(1, Math.round(var_core_value_sig6FB2.height))
  };
}
function we(var_core_value_sig4186) {
  return {
    left: var_core_value_sig4186.layout["column"],
    top: var_core_value_sig4186.layout["row"],
    width: var_core_value_sig4186.layout["columnSpan"],
    height: var_core_value_sig4186.layout["rowSpan"],
    rotation: 0,
    flipX: false,
    flipY: false
  };
}
const Te = {},
  Ee = new Set([w.id, T.id, O.id, k.id, A.id, j.id, D.id, x.id, S.id]);
let H = class extends t.Disposable {
  constructor(var_core_value_sigE43E, var_core_value_sigA937, var_core_value_sigCAD5) {
    super(), this._permissionService = var_core_value_sigA937, this._instanceService = var_core_value_sigCAD5, this.disposeWithMe(var_core_value_sigE43E.beforeCommandExecuted((var_core_value_sigD873, var_core_value_sigA12B) => this._check(var_core_value_sigD873, var_core_value_sigA12B)));
  }
  _check(var_core_value_sigE503, var_core_value_sig48DD) {
    if (var_core_value_sig48DD != null && var_core_value_sig48DD.fromCollab || var_core_value_sig48DD != null && var_core_value_sig48DD.fromChangeset || !Ee.has(var_core_value_sigE503.id)) return;
    let var_core_value_sig5E6A = ke(var_core_value_sigE503.params) ? var_core_value_sigE503.params : undefined;
    if (!var_core_value_sig5E6A) return;
    let var_core_value_sigB7FC = typeof (var_core_value_sig5E6A == null ? undefined : var_core_value_sig5E6A.unitId) == "string" ? var_core_value_sig5E6A.unitId : undefined;
    if (!var_core_value_sigB7FC || this._instanceService["getUnitType"](var_core_value_sigB7FC) !== t.UniverInstanceType["UNIVER_BASE"]) return;
    let var_core_value_sig9CD9 = var_core_value_sigE503.id === A.id ? De(var_core_value_sig5E6A) : Oe(var_core_value_sig5E6A);
    if (!(0, e.canEditBaseTargets)(this._permissionService, var_core_value_sigB7FC, var_core_value_sig9CD9)) throw new t["CustomCommandExecutionError"]("Base\x20dashboard\x20edit\x20permission\x20denied.");
  }
};
H = g([h(0, t.ICommandService), h(1, t.IPermissionService), h(2, t.IUniverInstanceService)], H);
function De(var_core_value_sigF963) {
  let var_core_value_sigB608 = typeof var_core_value_sigF963.tableId == "string" ? var_core_value_sigF963.tableId : undefined,
    var_core_value_sigF866 = typeof var_core_value_sigF963.viewId == "string" ? var_core_value_sigF963.viewId : undefined;
  return var_core_value_sigB608 && var_core_value_sigF866 ? [(0, e.getBaseTablePermissionObjectId)(var_core_value_sigB608), (0, e.getBaseViewPermissionObjectId)(var_core_value_sigB608, var_core_value_sigF866)] : [];
}
function Oe(var_core_value_sig5EFB) {
  let var_core_value_sig3A85 = typeof var_core_value_sig5EFB.dashboardId == "string" ? var_core_value_sig5EFB.dashboardId : ke(var_core_value_sig5EFB.dashboard) && typeof var_core_value_sig5EFB.dashboard["id"] == "string" ? var_core_value_sig5EFB.dashboard["id"] : undefined;
  return var_core_value_sig3A85 ? [(0, e.getBaseDashboardPermissionObjectId)(var_core_value_sig3A85)] : [];
}
function ke(var_core_value_sig2682) {
  return typeof var_core_value_sig2682 == "object" && !!var_core_value_sig2682 && !Array.isArray(var_core_value_sig2682);
}
let U = class extends t.Disposable {
  constructor(var_core_value_sigFD0C, var_core_value_sig849B) {
    super(), this._resourceManagerService = var_core_value_sigFD0C, this._resourceService = var_core_value_sig849B, this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: v,
      businesses: [t.UniverInstanceType["UNIVER_BASE"]],
      toJson: var_core_value_sigF230 => this._resourceService["serializeUnit"](var_core_value_sigF230),
      parseJson: Ae,
      onLoad: (var_core_value_sig09B8, var_core_value_sig6F91) => this._resourceService["loadUnit"](var_core_value_sig09B8, var_core_value_sig6F91),
      onUnLoad: var_core_value_sigF9C7 => this._resourceService["unloadUnit"](var_core_value_sigF9C7)
    }));
  }
};
U = g([h(0, t.IResourceManagerService), h(1, (0, t.Inject)(y))], U);
function Ae(var_core_value_sig4BB5) {
  let var_core_value_sig6709;
  try {
    var_core_value_sig6709 = JSON.parse(var_core_value_sig4BB5);
  } catch {
    return b();
  }
  if (!W(var_core_value_sig6709) || !Array.isArray(var_core_value_sig6709.dashboardOrder) || !W(var_core_value_sig6709.dashboards)) return b();
  let var_core_value_sig52CA = b(),
    var_core_value_sigC030 = new Set();
  for (let var_core_value_sig5F1A of var_core_value_sig6709.dashboardOrder) {
    if (typeof var_core_value_sig5F1A != "string" || var_core_value_sigC030.has(var_core_value_sig5F1A)) continue;
    let var_core_value_sig8895 = var_core_value_sig6709.dashboards[var_core_value_sig5F1A];
    if (!W(var_core_value_sig8895) || var_core_value_sig8895.id !== var_core_value_sig5F1A || typeof var_core_value_sig8895.name != "string" || !Array.isArray(var_core_value_sig8895.widgetOrder) || !W(var_core_value_sig8895.widgets)) continue;
    let var_core_value_sigC80B = Object.fromEntries(Object.entries(var_core_value_sig8895.widgets).filter(var_core_value_sig27E5 => je(var_core_value_sig27E5[1]) && var_core_value_sig27E5[0] === var_core_value_sig27E5[1].id)),
      var_core_value_sig284F = new Set(Object.keys(var_core_value_sigC80B)),
      var_core_value_sigE154 = new Set(),
      var_core_value_sig4632 = var_core_value_sig8895.widgetOrder["filter"](var_core_value_sig8061 => typeof var_core_value_sig8061 != "string" || !var_core_value_sig284F.has(var_core_value_sig8061) || var_core_value_sigE154.has(var_core_value_sig8061) ? false : (var_core_value_sigE154.add(var_core_value_sig8061), true));
    for (let var_core_value_sig4D4C of var_core_value_sig284F) var_core_value_sigE154.has(var_core_value_sig4D4C) || var_core_value_sig4632.push(var_core_value_sig4D4C);
    var_core_value_sigC030.add(var_core_value_sig5F1A), var_core_value_sig52CA.dashboardOrder["push"](var_core_value_sig5F1A), var_core_value_sig52CA.dashboards[var_core_value_sig5F1A] = {
      id: var_core_value_sig5F1A,
      name: var_core_value_sig8895.name,
      widgetOrder: var_core_value_sig4632,
      widgets: var_core_value_sigC80B
    };
  }
  return var_core_value_sig52CA;
}
function W(var_core_value_sig88F6) {
  return typeof var_core_value_sig88F6 == "object" && !!var_core_value_sig88F6 && !Array.isArray(var_core_value_sig88F6);
}
function je(var_core_value_sig37DB) {
  if (!W(var_core_value_sig37DB) || typeof var_core_value_sig37DB.id != "string" || !Ne(var_core_value_sig37DB.layout)) return false;
  switch (var_core_value_sig37DB.type) {
    case E.PivotChart:
      return typeof var_core_value_sig37DB.tableId == "string" && typeof var_core_value_sig37DB.pivotViewId == "string";
    case E.TableFilter:
      return typeof var_core_value_sig37DB.tableId == "string" && (var_core_value_sig37DB.filter === null || Me(var_core_value_sig37DB.filter));
    case E.Text:
      return W(var_core_value_sig37DB.document);
    case E.Image:
      return typeof var_core_value_sig37DB.source == "string" && Object.values(t.ImageSourceType).some(var_core_value_sig12F2 => var_core_value_sig12F2 === var_core_value_sig37DB.sourceType);
    case E.FormulaShape:
      return typeof var_core_value_sig37DB.tableId == "string" && typeof var_core_value_sig37DB.shapeType == "string" && W(var_core_value_sig37DB.shapeData) && W(var_core_value_sig37DB.shapeData["formulaBinding"]) && typeof var_core_value_sig37DB.shapeData["formulaBinding"].formula == "string";
    default:
      return false;
  }
}
function Me(var_core_value_sig5542) {
  if (!W(var_core_value_sig5542) || var_core_value_sig5542.conjunction !== t.BaseFilterConjunction["AND"] && var_core_value_sig5542.conjunction !== t.BaseFilterConjunction["OR"] || !Array.isArray(var_core_value_sig5542.conditions)) return false;
  let var_core_value_sigE0A9 = Object.values(t.BaseFilterOperator);
  return var_core_value_sig5542.conditions["every"](var_core_value_sigB455 => W(var_core_value_sigB455) && typeof var_core_value_sigB455.fieldId == "string" && var_core_value_sigE0A9.some(var_core_value_sig2259 => var_core_value_sig2259 === var_core_value_sigB455.operator));
}
function Ne(var_core_value_sigA73E) {
  return W(var_core_value_sigA73E) && typeof var_core_value_sigA73E.column == "number" && typeof var_core_value_sigA73E.row == "number" && typeof var_core_value_sigA73E.columnSpan == "number" && typeof var_core_value_sigA73E.rowSpan == "number";
}
let G = class extends t.Disposable {
  constructor(var_core_value_sig5241, var_core_value_sigC6E5) {
    super(), this._commandService = var_core_value_sig5241, this._instanceService = var_core_value_sigC6E5, this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig9E2F => {
      if (!Pe(var_core_value_sig9E2F, d)) return;
      let var_core_value_sigD082 = var_core_value_sig9E2F.params,
        var_core_value_sigDBB7 = this._instanceService["getUnit"](var_core_value_sigD082.unitId, t.UniverInstanceType["UNIVER_BASE"]),
        var_core_value_sigD0A8 = var_core_value_sigDBB7 == null ? undefined : var_core_value_sigDBB7.getSnapshot().tables[var_core_value_sigD082.tableId];
      if (!var_core_value_sigD0A8) return;
      let var_core_value_sigF4B9 = N({
        table: var_core_value_sigD0A8,
        pivot: var_core_value_sigD082.pivot,
        filters: var_core_value_sigD082.filters
      });
      return this._commandService["executeCommand"](f.id, {
        requestId: var_core_value_sigD082.requestId,
        unitId: var_core_value_sigD082.unitId,
        tableId: var_core_value_sigD082.tableId,
        viewId: var_core_value_sigD082.viewId,
        view: var_core_value_sigF4B9
      }, {
        onlyLocal: true
      }).then(() => undefined, () => undefined);
    }));
  }
};
G = g([h(0, (0, t.Inject)(t.ICommandService)), h(1, (0, t.Inject)(t.IUniverInstanceService))], G);
function Pe(var_core_value_sig7620, var_core_value_sigB9FC) {
  return var_core_value_sig7620.id === var_core_value_sigB9FC.id && var_core_value_sig7620.params !== undefined;
}
let K = class extends t.Disposable {
  constructor(var_core_value_sigCEFB, var_core_value_sig1537) {
    super(), this.disposeWithMe(var_core_value_sigCEFB.onCommandExecuted(var_core_value_sig5CEE => {
      Fe(var_core_value_sig5CEE, f) && var_core_value_sig1537.handleResponse(var_core_value_sig5CEE.params);
    }));
  }
};
K = g([h(0, (0, t.Inject)(t.ICommandService)), h(1, (0, t.Inject)(_))], K);
function Fe(var_core_value_sig5055, var_core_value_sig3801) {
  return var_core_value_sig5055.id === var_core_value_sig3801.id && var_core_value_sig5055.params !== undefined;
}
let q = class extends t.Disposable {
  constructor(var_core_value_sigE4C6, var_core_value_sig4313) {
    super();
    let var_core_value_sigFC87 = Ie();
    this.disposeWithMe(var_core_value_sigE4C6.register(var_core_value_sigFC87)), this.disposeWithMe(var_core_value_sig4313.registerView(var_core_value_sigFC87));
  }
};
q = g([h(0, (0, t.Inject)(e.IBaseViewRegistryService)), h(1, (0, t.Inject)(e.IBaseProjectionService))], q);
function Ie() {
  return {
    type: t.BaseViewType["Pivot"],
    i18nKey: "bases-dashboard.pivotView.name",
    createDefaultConfig: M,
    validateConfig: (var_core_value_sig156F, var_core_value_sigDD51) => Le(var_core_value_sigDD51.config),
    buildProjection: () => ({
      type: "custom",
      viewType: t.BaseViewType["Pivot"]
    }),
    repairConfig: (var_core_value_sigF057, var_core_value_sig72F6) => Le(var_core_value_sig72F6.config).valid ? {
      repaired: false,
      view: var_core_value_sig72F6
    } : {
      repaired: true,
      view: {
        ...var_core_value_sig72F6,
        config: M(var_core_value_sigF057)
      }
    }
  };
}
function Le(var_core_value_sig45F0) {
  return !var_core_value_sig45F0.pivot || !var_core_value_sig45F0.chart || !["chart-and-table", "chart", "table"].includes(var_core_value_sig45F0.displayMode) ? {
    valid: false,
    reason: "invalidPivotConfig"
  } : {
    valid: true
  };
}
const J = {
  Loading: "loading",
  Ready: "ready",
  Error: "error"
};
var Re = class extends r.StaticChartSource {
  constructor(var_core_value_sig9FBA, var_core_value_sigFE01, var_core_value_sigA2CE, var_core_value_sig1975) {
    super(), this._rpcService = var_core_value_sigA2CE, this._instanceService = var_core_value_sig1975, m(this, "_scope$", undefined), m(this, "_state$", new n["BehaviorSubject"]({
      status: J.Loading
    })), m(this, "_result$", new n["BehaviorSubject"](null)), m(this, "_requestGeneration", 0), m(this, "_isDisposed", false), m(this, "scope$", undefined), m(this, "state$", this._state$["asObservable"]()), m(this, "result$", this._result$["asObservable"]()), this._scope$ = new n["BehaviorSubject"](var_core_value_sig9FBA), this.scope$ = this._scope$["asObservable"](), this.updateIsRowDirection(var_core_value_sigFE01);
  }
  get scope() {
    return this._scope$["getValue"]();
  }
  get state() {
    return this._state$["getValue"]();
  }
  get result() {
    return this._result$["getValue"]();
  }
  setScope(var_core_value_sig6EA1) {
    this._isDisposed || this._scope$["next"](var_core_value_sig6EA1);
  }
  setRowDirection(var_core_value_sig029F) {
    this._isDisposed || this.updateIsRowDirection(var_core_value_sig029F);
  }
  async refresh() {
    let var_core_value_sig3767 = ++this._requestGeneration,
      var_core_value_sig670B = this.scope;
    this._state$["next"]({
      status: J.Loading
    });
    let var_core_value_sig6912 = this._getPivotView(var_core_value_sig670B);
    if (!var_core_value_sig6912) {
      let var_core_value_sigE92A = Error("Base pivot view not found. " + var_core_value_sig670B.viewId);
      throw this._publishError(var_core_value_sig3767, var_core_value_sigE92A), var_core_value_sigE92A;
    }
    let var_core_value_sigE235;
    try {
      var_core_value_sigE235 = await this._rpcService["calculate"]({
        unitId: var_core_value_sig670B.unitId,
        tableId: var_core_value_sig670B.tableId,
        viewId: var_core_value_sig670B.viewId,
        pivot: var_core_value_sig6912.config["pivot"],
        filters: var_core_value_sig670B.filters
      });
    } catch (var_core_value_sig362B) {
      throw this._publishError(var_core_value_sig3767, var_core_value_sig362B), var_core_value_sig362B;
    }
    this._isCurrentRequest(var_core_value_sig3767) && (this.initData(R(var_core_value_sigE235.view, {
      rowDimensionNames: var_core_value_sig6912.config["pivot"].rowFields["map"](var_core_value_sig5CA5 => {
        var var_core_value_sigE90F;
        return ((var_core_value_sigE90F = var_core_value_sig6912.config["pivot"].dimension[var_core_value_sig5CA5]) == null ? undefined : var_core_value_sigE90F.displayName) ?? var_core_value_sig5CA5;
      })
    }), this.isRowDirection), this._result$["next"](var_core_value_sigE235), this._state$["next"]({
      status: J.Ready
    }));
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, this._requestGeneration++, this._result$["next"](null), this._scope$["complete"](), this._state$["complete"](), this._result$["complete"](), super.dispose());
  }
  _getPivotView(var_core_value_sig7664) {
    var var_core_value_sig2281;
    let var_core_value_sig5E86 = this._instanceService["getUnit"](var_core_value_sig7664.unitId, t.UniverInstanceType["UNIVER_BASE"]);
    return ze(var_core_value_sig5E86 == null || (var_core_value_sig2281 = var_core_value_sig5E86.getSnapshot().tables[var_core_value_sig7664.tableId]) == null ? undefined : var_core_value_sig2281.views[var_core_value_sig7664.viewId]);
  }
  _publishError(var_core_value_sig6998, var_core_value_sigF639) {
    this._isCurrentRequest(var_core_value_sig6998) && this._state$["next"]({
      status: J.Error,
      error: var_core_value_sigF639
    });
  }
  _isCurrentRequest(var_core_value_sigEAE5) {
    return !this._isDisposed && this._requestGeneration === var_core_value_sigEAE5;
  }
};
function ze(var_core_value_sigBC91) {
  return (var_core_value_sigBC91 == null ? undefined : var_core_value_sigBC91.type) === t.BaseViewType["Pivot"] && typeof var_core_value_sigBC91.config == "object" && var_core_value_sigBC91.config !== null && "pivot" in var_core_value_sigBC91.config && "chart" in var_core_value_sigBC91.config ? var_core_value_sigBC91 : undefined;
}
let Y = class extends t.Disposable {
  constructor(var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82) {
    super(), this._injector = var_core_value_sigE94C, this._rpcService = var_core_value_sig6D47, this._instanceService = var_core_value_sigCB82, m(this, "_records", new Map()), this.disposeWithMe(this._instanceService["unitDisposed$"].subscribe(var_core_value_sigEFD4 => {
      this.removeUnit(var_core_value_sigEFD4.getUnitId());
    }));
  }
  acquireChartRuntime(var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5) {
    var var_core_value_sigDDD7;
    let var_core_value_sigB2CE = var_core_value_sig8CF5 ?? ((var_core_value_sigDDD7 = this._getPivotView(var_core_value_sig6CAD)) == null ? undefined : var_core_value_sigDDD7.config["chart"]);
    if (!var_core_value_sigB2CE) return;
    let var_core_value_sig443C = this._getRecord(var_core_value_sig6CAD.unitId, var_core_value_sigCF4E);
    if (var_core_value_sig443C) return var_core_value_sig443C.consumerCount++, this._updateRecord(var_core_value_sig443C, var_core_value_sig6CAD, var_core_value_sigB2CE), var_core_value_sig443C.runtime;
    let var_core_value_sig39B1 = new Re(var_core_value_sig6CAD, L(var_core_value_sigB2CE.orient), this._rpcService, this._instanceService),
      var_core_value_sig210D = new r.ChartModel(var_core_value_sigCF4E, {
        dataSource: var_core_value_sig39B1,
        chartType: var_core_value_sigB2CE.type,
        style: var_core_value_sigB2CE.style,
        dataAggregation: var_core_value_sigB2CE.dataAggregation
      }, this._injector);
    var_core_value_sig210D.init();
    let var_core_value_sigB4B4 = {
        unitId: var_core_value_sig6CAD.unitId,
        chartId: var_core_value_sigCF4E,
        dataSourceId: var_core_value_sigCF4E,
        model: var_core_value_sig210D
      },
      var_core_value_sigD407 = {
        runtime: var_core_value_sigB4B4,
        source: var_core_value_sig39B1,
        consumerCount: 1,
        refreshRevision: 0,
        authoredContext: var_core_value_sigB2CE.context
      };
    return this._getOrCreateUnitRecords(var_core_value_sig6CAD.unitId).set(var_core_value_sigCF4E, var_core_value_sigD407), this._replaceGeneratedContext(var_core_value_sigD407, var_core_value_sigB2CE.context), var_core_value_sigB4B4;
  }
  getChartRuntime(var_core_value_sig63F3, var_core_value_sig6A71) {
    var var_core_value_sig3BF6;
    return (var_core_value_sig3BF6 = this._getRecord(var_core_value_sig63F3, var_core_value_sig6A71)) == null ? undefined : var_core_value_sig3BF6.runtime;
  }
  async refreshChartRuntime(var_core_value_sig38CE, var_core_value_sig62B7, var_core_value_sig37A8, var_core_value_sigA90D) {
    var var_core_value_sig7A3C;
    let var_core_value_sig0511 = this._getRecord(var_core_value_sig38CE, var_core_value_sig62B7),
      var_core_value_sig1F44 = var_core_value_sigA90D ?? ((var_core_value_sig7A3C = this._getPivotView(var_core_value_sig37A8)) == null ? undefined : var_core_value_sig7A3C.config["chart"]);
    if (!var_core_value_sig0511 || !var_core_value_sig1F44) throw Error("Base chart runtime not found. " + var_core_value_sig62B7);
    this._updateRecord(var_core_value_sig0511, var_core_value_sig37A8, var_core_value_sig1F44);
    let var_core_value_sigCB04 = ++var_core_value_sig0511.refreshRevision;
    return await var_core_value_sig0511.source["refresh"](), this._getRecord(var_core_value_sig38CE, var_core_value_sig62B7) === var_core_value_sig0511 && var_core_value_sig0511.refreshRevision === var_core_value_sigCB04 && this._replaceGeneratedContext(var_core_value_sig0511, var_core_value_sig0511.authoredContext), var_core_value_sig0511.source["result"] ?? undefined;
  }
  releaseChartRuntime(var_core_value_sig947E, var_core_value_sig4545) {
    let var_core_value_sigF39A = this._getRecord(var_core_value_sig947E, var_core_value_sig4545);
    return !var_core_value_sigF39A || (var_core_value_sigF39A.consumerCount--, var_core_value_sigF39A.consumerCount > 0) ? false : (this._removeRecord(var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A), true);
  }
  removeUnit(var_core_value_sigF79C) {
    let var_core_value_sig2E54 = this._records["get"](var_core_value_sigF79C);
    var_core_value_sig2E54 && Array.from(var_core_value_sig2E54.entries()).forEach(([var_core_value_sig861B, var_core_value_sig5237]) => {
      this._removeRecord(var_core_value_sigF79C, var_core_value_sig861B, var_core_value_sig5237);
    });
  }
  dispose() {
    Array.from(this._records["keys"]()).forEach(var_core_value_sigBB00 => this.removeUnit(var_core_value_sigBB00)), super.dispose();
  }
  _updateRecord(var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigC786) {
    var_core_value_sig7658.authoredContext = var_core_value_sigC786.context, var_core_value_sig7658.source["setScope"](var_core_value_sigDCF5), var_core_value_sig7658.source["setRowDirection"](L(var_core_value_sigC786.orient)), var_core_value_sig7658.runtime["model"].setChartType(var_core_value_sigC786.type), var_core_value_sig7658.runtime["model"].setStyle(var_core_value_sigC786.style ?? {}), var_core_value_sig7658.runtime["model"].setDataAggregation(var_core_value_sigC786.dataAggregation ?? {}), this._replaceGeneratedContext(var_core_value_sig7658, var_core_value_sigC786.context);
  }
  _replaceGeneratedContext(var_core_value_sigC0D9, var_core_value_sigF0511) {
    var_core_value_sigC0D9.runtime["model"].setChartContext(var_core_value_sigF0511 === undefined ? (0, r.reconcileChartContext)(var_core_value_sigC0D9.source["getDataSet"](), var_core_value_sigC0D9.runtime["model"].context, var_core_value_sigC0D9.runtime["model"].chartType) : (0, r.generateChartContext)(var_core_value_sigC0D9.source["getDataSet"](), var_core_value_sigF0511, false));
  }
  _getPivotView(var_core_value_sig5825) {
    var var_core_value_sig4EB7;
    let var_core_value_sig73AF = this._instanceService["getUnit"](var_core_value_sig5825.unitId, t.UniverInstanceType["UNIVER_BASE"]);
    return Be(var_core_value_sig73AF == null || (var_core_value_sig4EB7 = var_core_value_sig73AF.getSnapshot().tables[var_core_value_sig5825.tableId]) == null ? undefined : var_core_value_sig4EB7.views[var_core_value_sig5825.viewId]);
  }
  _getRecord(var_core_value_sig548A, var_core_value_sigE026) {
    var var_core_value_sig339E;
    return (var_core_value_sig339E = this._records["get"](var_core_value_sig548A)) == null ? undefined : var_core_value_sig339E.get(var_core_value_sigE026);
  }
  _getOrCreateUnitRecords(var_core_value_sig7550) {
    let var_core_value_sig2983 = this._records["get"](var_core_value_sig7550);
    return var_core_value_sig2983 || (var_core_value_sig2983 = new Map(), this._records["set"](var_core_value_sig7550, var_core_value_sig2983)), var_core_value_sig2983;
  }
  _removeRecord(var_core_value_sigE1B0, var_core_value_sigD4FF, var_core_value_sig1E5B) {
    let var_core_value_sigB680 = this._records["get"](var_core_value_sigE1B0);
    !var_core_value_sigB680 || var_core_value_sigB680.get(var_core_value_sigD4FF) !== var_core_value_sig1E5B || (var_core_value_sigB680.delete(var_core_value_sigD4FF), var_core_value_sigB680.size === 0 && this._records["delete"](var_core_value_sigE1B0), var_core_value_sig1E5B.runtime["model"].dispose(), var_core_value_sig1E5B.source["dispose"]());
  }
};
Y = g([h(0, (0, t.Inject)(t.Injector)), h(1, (0, t.Inject)(_)), h(2, t.IUniverInstanceService)], Y);
function Be(var_core_value_sigCB88) {
  return (var_core_value_sigCB88 == null ? undefined : var_core_value_sigCB88.type) === t.BaseViewType["Pivot"] && typeof var_core_value_sigCB88.config == "object" && var_core_value_sigCB88.config !== null && "pivot" in var_core_value_sigCB88.config && "chart" in var_core_value_sigCB88.config ? var_core_value_sigCB88 : undefined;
}
let X = class {
  constructor(var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig2C39, var_core_value_sigB7D1) {
    this.resourceService = var_core_value_sig1F64, this.commandService = var_core_value_sigDD1C, this.permissionService = var_core_value_sig2C39, this.instanceService = var_core_value_sigB7D1;
  }
};
X = g([h(0, (0, t.Inject)(y)), h(1, t.ICommandService), h(2, t.IPermissionService), h(3, t.IUniverInstanceService)], X);
const Z = [d, f],
  Ve = [S, D, x, xe],
  He = [...Z, ...Ve];
let Q = class extends t.Plugin {
  constructor(var_core_value_sig64F0 = Te, var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD) {
    super(), this._config = var_core_value_sig64F0, this._injector = var_core_value_sig85B1, this._commandService = var_core_value_sig3141, this._configService = var_core_value_sig2162, this._dataSyncPrimaryController = var_core_value_sig2EAD;
    let {
      ...var_core_value_sig6774
    } = (0, t.merge)({}, Te, this._config);
    this._configService["setConfig"]("bases-dashboard.config", var_core_value_sig6774), this._registerCommands();
  }
  onStarting() {
    let var_core_value_sig340D = this._config["notExecuteCalculation"],
      var_core_value_sig82D4;
    var_core_value_sig82D4 = var_core_value_sig340D === true ? [[y], [U], [H], [q], [_], [Y], [K], [V], [X]] : var_core_value_sig340D === false ? [[G]] : [[y], [U], [H], [q], [_], [Y], [K], [V], [X], [G]], var_core_value_sig82D4.forEach(var_core_value_sig7E54 => this._injector["add"](var_core_value_sig7E54)), var_core_value_sig340D !== false && (0, t.touchDependencies)(this._injector, [[y], [U], [H], [q], [_], [Y], [K], [V], [X]]), var_core_value_sig340D !== true && (0, t.touchDependencies)(this._injector, [[G]]);
  }
  _registerCommands() {
    [ne, w, k, T, j, O, A, ...He].forEach(var_core_value_sig9A8D => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig9A8D))), Z.forEach(var_core_value_sigC259 => {
      var var_core_value_sig9C9F;
      return (var_core_value_sig9C9F = this._dataSyncPrimaryController) == null ? undefined : var_core_value_sig9C9F.registerSyncingMutations(var_core_value_sigC259);
    });
  }
};
m(Q, "type", t.UniverInstanceType["UNIVER_BASE"]), m(Q, "pluginName", v), m(Q, "packageName", B), m(Q, "version", be), Q = g([(0, t.DependentOn)(e.UniverBasesPlugin, r.UniverChartPlugin, o.UniverLicensePlugin, s.UniverShapeEditorPlugin, a.UniverShapePlugin), h(1, (0, t.Inject)(t.Injector)), h(2, (0, t.Inject)(t.ICommandService)), h(3, t.IConfigService), h(4, (0, t.Optional)(c.DataSyncPrimaryController))], Q);
let $ = class extends t.Plugin {
  constructor(var_core_value_sigBDE4 = {}, var_core_value_sig7DF1, var_core_value_sigDC86) {
    super(), this._injector = var_core_value_sig7DF1, Z.forEach(var_core_value_sigFDEA => {
      this.disposeWithMe(var_core_value_sigDC86.registerCommand(var_core_value_sigFDEA));
    });
  }
  onStarting() {
    this._injector["add"]([G]), (0, t.touchDependencies)(this._injector, [[G]]);
  }
};
m($, "type", t.UniverInstanceType["UNIVER_BASE"]), m($, "pluginName", "REMOTE_BASES_DASHBOARD_PLUGIN"), m($, "packageName", B), m($, "version", be), $ = g([(0, t.DependentOn)(e.UniverRemoteBasesPlugin), h(1, (0, t.Inject)(t.Injector)), h(2, (0, t.Inject)(t.ICommandService))], $), exports.BASES_DASHBOARD_DEFAULT_ROW_HEIGHT = 32, exports.BASES_DASHBOARD_GRID_COLUMNS = 12, exports.BASES_DASHBOARD_PLUGIN = v, exports.BASES_DASHBOARD_RESOURCE_VERSION = 1, Object.defineProperty(exports, "BaseChartRuntimeService", {
  enumerable: true,
  get: function () {
    return Y;
  }
}), Object.defineProperty(exports, "BaseDashboardAPIContextService", {
  enumerable: true,
  get: function () {
    return X;
  }
}), exports.BaseDashboardHistoryAction = ae, exports.BaseDashboardResourceService = y, exports.BaseDashboardWidgetType = E, Object.defineProperty(exports, "BasePivotRPCService", {
  enumerable: true,
  get: function () {
    return _;
  }
}), exports.CalculateBasePivotCommand = ne, exports.CreateBaseDashboardCommand = w, exports.DeleteBaseDashboardCommand = T, exports.RemoveBaseDashboardWidgetCommand = O, Object.defineProperty(exports, "UniverBaseDashboardPlugin", {
  enumerable: true,
  get: function () {
    return Q;
  }
}), Object.defineProperty(exports, "UniverRemoteBaseDashboardPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.UpdateBaseDashboardCommand = k, exports.UpdateBasePivotViewCommand = A, exports.UpsertBaseDashboardWidgetCommand = j, exports.adaptPivotViewToChartDataSet = R, exports.calculateBasePivot = N, exports.canEditBaseDashboard = l, exports.canEditBasePivotView = u, exports.createBasePivotTable = fe, exports.createDefaultBasePivotSnapshot = de, exports.createDefaultBasePivotViewConfig = M, exports.resolveBasePivotChartRowDirection = L;
