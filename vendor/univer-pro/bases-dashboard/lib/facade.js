import { CreateBaseViewCommand as var_core_value_sig2DAB, DeleteBaseViewCommand as var_core_value_sig877E, RenameBaseViewCommand as var_core_value_sig20C8, getBaseDashboardPermissionObjectId as var_core_value_sigE9A7, getBaseTablePermissionObjectId as var_core_value_sigBECE, getBaseViewPermissionObjectId as var_core_value_sig1B22 } from "@univerjs-pro/bases";
import { BaseDashboardAPIContextService as var_core_value_sig7F72, BaseDashboardWidgetType as var_core_value_sig7B2A, CalculateBasePivotCommand as var_core_value_sig06CD, CreateBaseDashboardCommand as var_core_value_sigA5F1, DeleteBaseDashboardCommand as var_core_value_sig97A2, RemoveBaseDashboardWidgetCommand as var_core_value_sig07E9, UpdateBaseDashboardCommand as var_core_value_sig4F59, UpdateBasePivotViewCommand as var_core_value_sigF564, UpsertBaseDashboardWidgetCommand as var_core_value_sig8CFA, createBasePivotTable as var_core_value_sig2E11, createDefaultBasePivotViewConfig as var_core_value_sig5B69 } from "@univerjs-pro/bases-dashboard";
import { FBase as var_core_value_sigB098, FBaseObjectPermission as var_core_value_sigCE71 } from "@univerjs-pro/bases/facade";
import { BASE_RECORD_ID_FIELD_ID as var_core_value_sig21D8, BaseViewType as var_core_value_sig2B65, Tools as var_core_value_sigD7EA, UniverInstanceType as var_core_value_sigB33B, generateRandomId as var_core_value_sig24B9 } from "@univerjs/core";
var w = class {
  constructor(var_core_value_sigBC46, var_core_value_sig3D7D, var_core_value_sig27E5) {
    this._unitId = var_core_value_sigBC46, this._dashboardId = var_core_value_sig3D7D, this._context = var_core_value_sig27E5;
  }
  getId() {
    return this._dashboardId;
  }
  getPermission() {
    return new var_core_value_sigCE71(this._unitId, var_core_value_sigE9A7(this._dashboardId), [], this._context["commandService"], this._context["permissionService"]);
  }
  getSnapshot() {
    let var_core_value_sig8061 = this._context["resourceService"].getDashboard(this._unitId, this._dashboardId);
    if (!var_core_value_sig8061) throw Error("Dashboard not found: " + this._dashboardId);
    return var_core_value_sig8061;
  }
  getName() {
    return this.getSnapshot().name;
  }
  getWidgets() {
    let var_core_value_sig4D4C = this.getSnapshot();
    return var_core_value_sig4D4C.widgetOrder["flatMap"](var_core_value_sig7524 => var_core_value_sig4D4C.widgets[var_core_value_sig7524] ? [var_core_value_sig4D4C.widgets[var_core_value_sig7524]] : []);
  }
  getWidgetById(var_core_value_sigC9E0) {
    return this.getSnapshot().widgets[var_core_value_sigC9E0] ?? null;
  }
  setName(var_core_value_sig76BA) {
    return this._context["commandService"].syncExecuteCommand(var_core_value_sig4F59.id, {
      unitId: this._unitId,
      dashboard: {
        ...this.getSnapshot(),
        name: var_core_value_sig76BA
      }
    });
  }
  upsertWidget(var_core_value_sigFBFA, var_core_value_sigF602) {
    return this._context["commandService"].syncExecuteCommand(var_core_value_sig8CFA.id, {
      unitId: this._unitId,
      dashboardId: this._dashboardId,
      widget: var_core_value_sigD7EA.deepClone(var_core_value_sigFBFA),
      index: var_core_value_sigF602
    });
  }
  addPivotChart(var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF) {
    let var_core_value_sig0D69 = {
      id: var_core_value_sig2BCF.id ?? "pivot-chart-" + var_core_value_sig24B9(8),
      type: var_core_value_sig7B2A.PivotChart,
      tableId: var_core_value_sig1BBD,
      pivotViewId: var_core_value_sigF704,
      layout: var_core_value_sigD7EA.deepClone(var_core_value_sig2BCF.layout),
      ...(var_core_value_sig2BCF.title === undefined ? null : {
        title: var_core_value_sig2BCF.title
      }),
      ...(var_core_value_sig2BCF.chart === undefined ? null : {
        chart: var_core_value_sigD7EA.deepClone(var_core_value_sig2BCF.chart)
      })
    };
    return this._addWidget(var_core_value_sig0D69, var_core_value_sig2BCF.index);
  }
  addTableFilter(var_core_value_sig480E, var_core_value_sig26DB) {
    let var_core_value_sigF0F9 = {
      id: var_core_value_sig26DB.id ?? "table-filter-" + var_core_value_sig24B9(8),
      type: var_core_value_sig7B2A.TableFilter,
      tableId: var_core_value_sig480E,
      filter: var_core_value_sigD7EA.deepClone(var_core_value_sig26DB.filter ?? null),
      layout: var_core_value_sigD7EA.deepClone(var_core_value_sig26DB.layout),
      ...(var_core_value_sig26DB.title === undefined ? null : {
        title: var_core_value_sig26DB.title
      })
    };
    return this._addWidget(var_core_value_sigF0F9, var_core_value_sig26DB.index);
  }
  addText(var_core_value_sig1A0F) {
    let var_core_value_sigFBA4 = {
      id: var_core_value_sig1A0F.id ?? "text-" + var_core_value_sig24B9(8),
      type: var_core_value_sig7B2A.Text,
      document: var_core_value_sigD7EA.deepClone(var_core_value_sig1A0F.document),
      layout: var_core_value_sigD7EA.deepClone(var_core_value_sig1A0F.layout),
      ...(var_core_value_sig1A0F.title === undefined ? null : {
        title: var_core_value_sig1A0F.title
      }),
      ...(var_core_value_sig1A0F.appearance === undefined ? null : {
        appearance: var_core_value_sigD7EA.deepClone(var_core_value_sig1A0F.appearance)
      })
    };
    return this._addWidget(var_core_value_sigFBA4, var_core_value_sig1A0F.index);
  }
  addImage(var_core_value_sig4383) {
    let var_core_value_sig186C = {
      id: var_core_value_sig4383.id ?? "image-" + var_core_value_sig24B9(8),
      type: var_core_value_sig7B2A.Image,
      source: var_core_value_sig4383.source,
      sourceType: var_core_value_sig4383.sourceType,
      displayMode: var_core_value_sig4383.displayMode ?? "cover",
      layout: var_core_value_sigD7EA.deepClone(var_core_value_sig4383.layout),
      ...(var_core_value_sig4383.title === undefined ? null : {
        title: var_core_value_sig4383.title
      }),
      ...(var_core_value_sig4383.alt === undefined ? null : {
        alt: var_core_value_sig4383.alt
      })
    };
    return this._addWidget(var_core_value_sig186C, var_core_value_sig4383.index);
  }
  addFormulaShape(var_core_value_sigD955, var_core_value_sig48BD) {
    let var_core_value_sig429F = {
      id: var_core_value_sig48BD.id ?? "formula-shape-" + var_core_value_sig24B9(8),
      type: var_core_value_sig7B2A.FormulaShape,
      tableId: var_core_value_sigD955,
      shapeType: var_core_value_sig48BD.shapeType,
      shapeData: var_core_value_sigD7EA.deepClone(var_core_value_sig48BD.shapeData),
      layout: var_core_value_sigD7EA.deepClone(var_core_value_sig48BD.layout),
      ...(var_core_value_sig48BD.title === undefined ? null : {
        title: var_core_value_sig48BD.title
      }),
      ...(var_core_value_sig48BD.description === undefined ? null : {
        description: var_core_value_sig48BD.description
      }),
      ...(var_core_value_sig48BD.appearance === undefined ? null : {
        appearance: var_core_value_sigD7EA.deepClone(var_core_value_sig48BD.appearance)
      })
    };
    return this._addWidget(var_core_value_sig429F, var_core_value_sig48BD.index);
  }
  moveWidget(var_core_value_sigF62A, var_core_value_sig8178) {
    let var_core_value_sigE9ED = this.getWidgetById(var_core_value_sigF62A);
    return var_core_value_sigE9ED ? this._context["commandService"].syncExecuteCommand(var_core_value_sig8CFA.id, {
      unitId: this._unitId,
      dashboardId: this._dashboardId,
      widget: var_core_value_sigE9ED,
      index: var_core_value_sig8178
    }) : false;
  }
  removeWidget(var_core_value_sigB577) {
    return this._context["commandService"].syncExecuteCommand(var_core_value_sig07E9.id, {
      unitId: this._unitId,
      dashboardId: this._dashboardId,
      widgetId: var_core_value_sigB577
    });
  }
  delete() {
    return this._context["commandService"].syncExecuteCommand(var_core_value_sig97A2.id, {
      unitId: this._unitId,
      dashboardId: this._dashboardId
    });
  }
  _addWidget(var_core_value_sig9572, var_core_value_sigD873) {
    if (!this._context["commandService"].syncExecuteCommand(var_core_value_sig8CFA.id, {
      unitId: this._unitId,
      dashboardId: this._dashboardId,
      widget: var_core_value_sigD7EA.deepClone(var_core_value_sig9572),
      index: var_core_value_sigD873
    })) throw Error("Failed to add Dashboard " + var_core_value_sig9572.type + ' widget "' + var_core_value_sig9572.id + '". Verify that the Dashboard and referenced Base tables or Pivot Views exist.');
    return var_core_value_sigD7EA.deepClone(var_core_value_sig9572);
  }
};
function T(var_core_value_sig1758, var_core_value_sig4805, var_core_value_sigE67E, var_core_value_sig2902) {
  let var_core_value_sig9989 = (var_core_value_sig2902 == null ? undefined : var_core_value_sig2902.id) ?? "dashboard-" + var_core_value_sig24B9(8),
    var_core_value_sig698E = {
      unitId: var_core_value_sig4805,
      dashboard: {
        id: var_core_value_sig9989,
        name: var_core_value_sigE67E,
        widgetOrder: [],
        widgets: {}
      },
      index: var_core_value_sig2902 == null ? undefined : var_core_value_sig2902.index
    };
  if (!var_core_value_sig1758.commandService["syncExecuteCommand"](var_core_value_sigA5F1.id, var_core_value_sig698E)) throw Error("Failed to create dashboard: " + var_core_value_sigE67E);
  return new w(var_core_value_sig4805, var_core_value_sig9989, var_core_value_sig1758);
}
var E = class {
  constructor(var_core_value_sigA12B, var_core_value_sigF230, var_core_value_sig09B8, var_core_value_sig6F91, var_core_value_sigF9C7, var_core_value_sig8895) {
    this._unitId = var_core_value_sigA12B, this._tableId = var_core_value_sigF230, this._viewId = var_core_value_sig09B8, this._instanceService = var_core_value_sig6F91, this._commandService = var_core_value_sigF9C7, this._permissionService = var_core_value_sig8895;
  }
  getId() {
    return this._viewId;
  }
  getPermission() {
    return new var_core_value_sigCE71(this._unitId, var_core_value_sig1B22(this._tableId, this._viewId), [var_core_value_sigBECE(this._tableId)], this._commandService, this._permissionService);
  }
  getTableId() {
    return this._tableId;
  }
  getName() {
    return this._getView().name;
  }
  setName(var_core_value_sigC80B) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig20C8.id, {
      unitId: this._unitId,
      tableId: this._tableId,
      viewId: this._viewId,
      name: var_core_value_sigC80B
    });
  }
  getSnapshot() {
    return var_core_value_sigD7EA.deepClone(this._getView());
  }
  getConfig() {
    return var_core_value_sigD7EA.deepClone(this._getView().config);
  }
  getPivotTable() {
    return var_core_value_sig2E11(this._getTable(), this._getView().config["pivot"]);
  }
  updateConfig(var_core_value_sig284F) {
    return this._commandService["syncExecuteCommand"](var_core_value_sigF564.id, {
      unitId: this._unitId,
      tableId: this._tableId,
      viewId: this._viewId,
      patch: var_core_value_sigD7EA.deepClone(var_core_value_sig284F)
    });
  }
  calculate(var_core_value_sigE154 = []) {
    return this._commandService["executeCommand"](var_core_value_sig06CD.id, {
      unitId: this._unitId,
      tableId: this._tableId,
      viewId: this._viewId,
      filters: var_core_value_sigE154
    });
  }
  delete() {
    return this._commandService["syncExecuteCommand"](var_core_value_sig877E.id, {
      unitId: this._unitId,
      tableId: this._tableId,
      viewId: this._viewId
    });
  }
  _getBase() {
    let var_core_value_sig4632 = this._instanceService["getUnit"](this._unitId, var_core_value_sigB33B.UNIVER_BASE);
    if (!var_core_value_sig4632) throw Error("Base\x20not\x20found:\x20" + this._unitId);
    return var_core_value_sig4632;
  }
  _getTable() {
    let var_core_value_sig12F2 = this._getBase().getSnapshot().tables[this._tableId];
    if (!var_core_value_sig12F2) throw Error("Table not found: " + this._tableId);
    return var_core_value_sig12F2;
  }
  _getView() {
    let var_core_value_sig2259 = this._getTable().views[this._viewId];
    if (!D(var_core_value_sig2259)) throw Error("Pivot\x20View\x20not\x20found:\x20" + this._viewId);
    return var_core_value_sig2259;
  }
};
function D(var_core_value_sig2809) {
  return (var_core_value_sig2809 == null ? undefined : var_core_value_sig2809.type) === var_core_value_sig2B65.Pivot && typeof var_core_value_sig2809.config == "object" && var_core_value_sig2809.config !== null && "pivot" in var_core_value_sig2809.config && "chart" in var_core_value_sig2809.config;
}
const O = new WeakMap();
var k = class extends var_core_value_sigB098 {
  getDashboards() {
    let var_core_value_sig9E2F = this._getDashboardFacadeContext(),
      var_core_value_sigD082 = this.getId(),
      var_core_value_sigDBB7 = var_core_value_sig9E2F.resourceService["getResource"](var_core_value_sigD082);
    return var_core_value_sigDBB7.dashboardOrder["flatMap"](var_core_value_sig2AD8 => var_core_value_sigDBB7.dashboards[var_core_value_sig2AD8] ? [new w(var_core_value_sigD082, var_core_value_sig2AD8, var_core_value_sig9E2F)] : []);
  }
  getDashboardById(var_core_value_sigD0A8) {
    let var_core_value_sigF4B9 = this._getDashboardFacadeContext(),
      var_core_value_sig5CEE = this.getId();
    return var_core_value_sigF4B9.resourceService["getDashboard"](var_core_value_sig5CEE, var_core_value_sigD0A8) ? new w(var_core_value_sig5CEE, var_core_value_sigD0A8, var_core_value_sigF4B9) : null;
  }
  createDashboard(var_core_value_sigE92A, var_core_value_sig362B) {
    return T(this._getDashboardFacadeContext(), this.getId(), var_core_value_sigE92A, var_core_value_sig362B);
  }
  getPivotViews(var_core_value_sig5CA5) {
    let var_core_value_sigE90F = this._getDashboardFacadeContext(),
      var_core_value_sigEFD4 = this.getBase().getSnapshot().tables[var_core_value_sig5CA5];
    return var_core_value_sigEFD4 ? var_core_value_sigEFD4.viewOrder["flatMap"](var_core_value_sig2AD0 => {
      var var_core_value_sig3EEE;
      return ((var_core_value_sig3EEE = var_core_value_sigEFD4.views[var_core_value_sig2AD0]) == null ? undefined : var_core_value_sig3EEE.type) === var_core_value_sig2B65.Pivot ? [new E(this.getId(), var_core_value_sig5CA5, var_core_value_sig2AD0, var_core_value_sigE90F.instanceService, var_core_value_sigE90F.commandService, var_core_value_sigE90F.permissionService)] : [];
    }) : [];
  }
  getPivotView(var_core_value_sig861B, var_core_value_sig5237) {
    var var_core_value_sigBB00;
    let var_core_value_sig7E54 = this._getDashboardFacadeContext(),
      var_core_value_sig9A8D = (var_core_value_sigBB00 = this.getBase().getSnapshot().tables[var_core_value_sig861B]) == null ? undefined : var_core_value_sigBB00.views[var_core_value_sig5237];
    return (var_core_value_sig9A8D == null ? undefined : var_core_value_sig9A8D.type) === var_core_value_sig2B65.Pivot ? new E(this.getId(), var_core_value_sig861B, var_core_value_sig5237, var_core_value_sig7E54.instanceService, var_core_value_sig7E54.commandService, var_core_value_sig7E54.permissionService) : null;
  }
  createPivotView(var_core_value_sigC259, var_core_value_sig9C9F, var_core_value_sigFDEA) {
    var var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA;
    let var_core_value_sig50AF = this._getDashboardFacadeContext(),
      var_core_value_sigA942 = this.getBase().getSnapshot().tables[var_core_value_sig9C9F];
    if (!var_core_value_sigA942) throw Error('Cannot create Pivot View "' + var_core_value_sigC259 + "\x22:\x20table\x20not\x20found:\x20" + var_core_value_sig9C9F);
    let var_core_value_sigA621 = var_core_value_sig5B69(var_core_value_sigA942),
      var_core_value_sigBBFF = {
        pivot: (var_core_value_sigFDEA == null || (var_core_value_sig86D0 = var_core_value_sigFDEA.config) == null ? undefined : var_core_value_sig86D0.pivot) ?? var_core_value_sigA621.pivot,
        chart: {
          ...var_core_value_sigA621.chart,
          ...(var_core_value_sigFDEA == null || (var_core_value_sig4CD2 = var_core_value_sigFDEA.config) == null ? undefined : var_core_value_sig4CD2.chart)
        },
        displayMode: (var_core_value_sigFDEA == null || (var_core_value_sig48CA = var_core_value_sigFDEA.config) == null ? undefined : var_core_value_sig48CA.displayMode) ?? var_core_value_sigA621.displayMode
      },
      var_core_value_sig8889 = (var_core_value_sigFDEA == null ? undefined : var_core_value_sigFDEA.id) ?? "pivot-" + var_core_value_sig24B9(8),
      var_core_value_sig32F8 = {
        id: var_core_value_sig8889,
        tableId: var_core_value_sig9C9F,
        name: var_core_value_sigC259,
        type: var_core_value_sig2B65.Pivot,
        config: var_core_value_sigBBFF,
        fieldOrder: [...var_core_value_sigA942.fieldOrder],
        fieldSettings: {
          [var_core_value_sig21D8]: {
            hidden: true
          }
        }
      };
    if (!var_core_value_sig50AF.commandService["syncExecuteCommand"](var_core_value_sig2DAB.id, {
      unitId: this.getId(),
      tableId: var_core_value_sig9C9F,
      view: var_core_value_sig32F8,
      index: var_core_value_sigFDEA == null ? undefined : var_core_value_sigFDEA.index
    })) throw Error('Failed to create Pivot View "' + var_core_value_sigC259 + '" in table: ' + var_core_value_sig9C9F);
    return new E(this.getId(), var_core_value_sig9C9F, var_core_value_sig8889, var_core_value_sig50AF.instanceService, var_core_value_sig50AF.commandService, var_core_value_sig50AF.permissionService);
  }
  _getDashboardFacadeContext() {
    let var_core_value_sig5B67 = O.get(this);
    return var_core_value_sig5B67 || (var_core_value_sig5B67 = this._injector["get"](var_core_value_sig7F72), O.set(this, var_core_value_sig5B67)), var_core_value_sig5B67;
  }
};
var_core_value_sigB098.extend(k);
export { w as FBaseDashboard, E as FBasePivotView };
