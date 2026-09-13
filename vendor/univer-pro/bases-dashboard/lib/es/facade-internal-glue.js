import { CreateBaseViewCommand, DeleteBaseViewCommand, RenameBaseViewCommand, getBaseDashboardPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId } from "@univerjs-pro/bases";
import { BaseDashboardAPIContextService, BaseDashboardWidgetType, CalculateBasePivotCommand, CreateBaseDashboardCommand, DeleteBaseDashboardCommand, RemoveBaseDashboardWidgetCommand, UpdateBaseDashboardCommand, UpdateBasePivotViewCommand, UpsertBaseDashboardWidgetCommand, createBasePivotTable, createDefaultBasePivotViewConfig } from "@univerjs-pro/bases-dashboard";
import { FBase, FBaseObjectPermission } from "@univerjs-pro/bases/facade";
import { BASE_RECORD_ID_FIELD_ID, BaseViewType, Tools, UniverInstanceType, generateRandomId } from "@univerjs/core";
import { w } from "./facade-bases-dashboard-fbase-dashboard.js";
import { E } from "./facade-bases-dashboard-fbase-pivot-view.js";
function T(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133) {
  let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133.id) ?? "dashboard-" + generateRandomId(8),
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = {
      unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131,
      dashboard: {
        id: var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2,
        name: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132,
        widgetOrder: [],
        widgets: {}
      },
      index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133.index
    };
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46130.commandService["syncExecuteCommand"](CreateBaseDashboardCommand.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14)) throw Error("Failed to create dashboard: " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132);
  return new w(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46130);
}
const O = new WeakMap();
var k = class extends FBase {
  getDashboards() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = this._getDashboardFacadeContext(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = this.getId(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678.resourceService["getResource"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4679);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4680.dashboardOrder["flatMap"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4680.dashboards[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461] ? [new w(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4678)] : []);
  }
  getDashboardById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = this._getDashboardFacadeContext(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = this.getId();
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4685.resourceService["getDashboard"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684) ? new w(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4685) : null;
  }
  createDashboard(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4691) {
    return T(this._getDashboardFacadeContext(), this.getId(), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4691);
  }
  getPivotViews(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4694) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = this._getDashboardFacadeContext(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = this.getBase().getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4694];
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4696 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4696.viewOrder["flatMap"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463;
      return ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4696.views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463.type) === BaseViewType.Pivot ? [new E(this.getId(), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4694, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4695.instanceService, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4695.commandService, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4695.permissionService)] : [];
    }) : [];
  }
  getPivotView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46100, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46101) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46102;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = this._getDashboardFacadeContext(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = this.getBase().getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46100]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46102.views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46101];
    return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46104 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46104.type) === BaseViewType.Pivot ? new E(this.getId(), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46100, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46103.instanceService, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46103.commandService, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46103.permissionService) : null;
  }
  createPivotView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = this._getDashboardFacadeContext(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = this.getBase().getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111];
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117) throw Error('Cannot create Pivot View "' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46110 + "\x22:\x20table\x20not\x20found:\x20" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111);
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = createDefaultBasePivotViewConfig(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117),
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
        pivot: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112.config) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113.pivot) ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118.pivot,
        chart: {
          ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118.chart,
          ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112.config) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114.chart)
        },
        displayMode: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112.config) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115.displayMode) ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118.displayMode
      },
      var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112.id) ?? "pivot-" + generateRandomId(8),
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = {
        id: var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
        tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111,
        name: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46110,
        type: BaseViewType.Pivot,
        config: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10,
        fieldOrder: [...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117.fieldOrder],
        fieldSettings: {
          [BASE_RECORD_ID_FIELD_ID]: {
            hidden: true
          }
        }
      };
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116.commandService["syncExecuteCommand"](CreateBaseViewCommand.id, {
      unitId: this.getId(),
      tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111,
      view: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11,
      index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112.index
    })) throw Error('Failed to create Pivot View "' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46110 + '" in table: ' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111);
    return new E(this.getId(), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116.instanceService, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116.commandService, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116.permissionService);
  }
  _getDashboardFacadeContext() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = O.get(this);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46128 || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = this._injector["get"](BaseDashboardAPIContextService), O.set(this, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46128)), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46128;
  }
};
FBase.extend(k);
