import { ApplyBaseJson1Mutation, BaseJson1OpApplier, BaseJson1OpFactory, IBaseProjectionService, IBaseViewRegistryService, UniverBasesPlugin, UniverRemoteBasesPlugin, canEditBaseTargets, getBaseDashboardPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, matchesBaseCondition, normalizeBaseDateSerial, resolveBaseDateFieldConfig } from "@univerjs-pro/bases";
import { BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseViewType, CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Optional, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { BehaviorSubject, filter, map } from "rxjs";
import { ChartModel, ChartTypeBits, StaticChartSource, UniverChartPlugin, generateChartContext, reconcileChartContext } from "@univerjs-pro/engine-chart";
import { DataFieldManager, PivotTable, PivotTableFiledAreaEnum, PivotView, isErrorValue, isPrefixValue } from "@univerjs-pro/engine-pivot";
import { IShapeHostAdapterRegistry, UniverShapePlugin, canApplyShapeFormulaLastValue } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverShapeEditorPlugin, createFormulaShapeData } from "@univerjs-pro/shape-editor";
import { DataSyncPrimaryController } from "@univerjs/rpc";
import { A } from "./bases-dashboard-dashboard-resource.js";
import { I } from "./bases-dashboard-remove-dashboard-widget.js";
import { P } from "./internal-glue.js";
import { F } from "./bases-dashboard-dashboard-command.js";
const z = {
    id: "base-dashboard.command.update-pivot-view",
    type: CommandType.COMMAND,
    handler: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46610, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611) => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46612;
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46613 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46610.get(IUniverInstanceService).getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.unitId, UniverInstanceType.UNIVER_BASE),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46614 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46613 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46612 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46613.getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.tableId]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46612.views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.viewId];
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46613 || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46614 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46614.type) !== BaseViewType.Pivot) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46615 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46613.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46616 = new BaseJson1OpFactory().updateViewConfig(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46615, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.tableId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.viewId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.patch),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46617 = new BaseJson1OpApplier().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46615, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46616),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.unitId,
          op: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46616
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.unitId,
          op: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46617
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46610.get(ICommandService).syncExecuteCommand(ApplyBaseJson1Mutation.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46610.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46611.unitId,
        redoMutations: [{
          id: ApplyBaseJson1Mutation.id,
          params: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16
        }],
        undoMutations: [{
          id: ApplyBaseJson1Mutation.id,
          params: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17
        }]
      }), true) : false;
    }
  },
  B = {
    id: "base-dashboard.command.upsert-widget",
    type: CommandType.COMMAND,
    handler: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46626, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46626.get(A).getDashboard(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.dashboardId),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46629 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46626.get(IUniverInstanceService).getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.unitId, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46629 || !tt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46629, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget)) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628.widgetOrder["indexOf"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["id"]),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46631 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628.widgets[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["id"]],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46632 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628.widgetOrder["filter"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46155 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46155 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["id"]),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46633 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630 >= 0 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46632.length;
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.index !== undefined && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46633 = Math.max(0, Math.min(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.index, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46632.length))), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46632.splice(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46633, 0, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["id"]);
      let var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.index !== undefined && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46633 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630,
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = [{
          id: I.id,
          params: {
            unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.unitId,
            dashboardId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.dashboardId,
            historyAction: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630 >= 0 ? "update-widget" : "create-widget",
            historyWidgetType: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["type"],
            patch: {
              widgets: {
                [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["id"]]: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget
              },
              ...(var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? {
                widgetOrder: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46632
              } : null)
            }
          }
        }],
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = [{
          id: I.id,
          params: {
            unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.unitId,
            dashboardId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.dashboardId,
            historyAction: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630 >= 0 ? "update-widget" : "remove-widget",
            historyWidgetType: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46631 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46631.type) ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["type"],
            patch: {
              widgets: {
                [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["id"]]: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628.widgets[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.widget["id"]] ?? null
              },
              ...(var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? {
                widgetOrder: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628.widgetOrder
              } : null)
            }
          }
        }];
      return P(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46626, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46627.unitId, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25);
    }
  };
function tt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46642, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643) {
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.type === F.Text || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.type === F.Image) return true;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46644 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46642.getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.tableId];
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46644) return false;
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.type === F.PivotChart) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46645;
    return ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46645 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46644.views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.pivotViewId]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46645.type) === BaseViewType.Pivot;
  }
  return true;
}
export { z as UpdateBasePivotViewCommand, B as UpsertBaseDashboardWidgetCommand };
