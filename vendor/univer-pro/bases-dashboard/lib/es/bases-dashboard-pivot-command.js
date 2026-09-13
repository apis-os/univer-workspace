import { ApplyBaseJson1Mutation, BaseJson1OpApplier, BaseJson1OpFactory, IBaseProjectionService, IBaseViewRegistryService, UniverBasesPlugin, UniverRemoteBasesPlugin, canEditBaseTargets, getBaseDashboardPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, matchesBaseCondition, normalizeBaseDateSerial, resolveBaseDateFieldConfig } from "@univerjs-pro/bases";
import { BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseViewType, CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Optional, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { BehaviorSubject, filter, map } from "rxjs";
import { ChartModel, ChartTypeBits, StaticChartSource, UniverChartPlugin, generateChartContext, reconcileChartContext } from "@univerjs-pro/engine-chart";
import { DataFieldManager, PivotTable, PivotTableFiledAreaEnum, PivotView, isErrorValue, isPrefixValue } from "@univerjs-pro/engine-pivot";
import { IShapeHostAdapterRegistry, UniverShapePlugin, canApplyShapeFormulaLastValue } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverShapeEditorPlugin, createFormulaShapeData } from "@univerjs-pro/shape-editor";
import { DataSyncPrimaryController } from "@univerjs/rpc";
import { k } from "./bases-dashboard-pivot-rpcservice.js";
const He = {
  id: "base-dashboard.command.calculate-pivot",
  type: CommandType.COMMAND,
  handler: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46522, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523) => {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46524;
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523) throw Error("Pivot\x20calculation\x20parameters\x20are\x20required.");
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46525 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46522.get(IUniverInstanceService).getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523.unitId, UniverInstanceType.UNIVER_BASE),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46526 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46525 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46524 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46525.getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523.tableId]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46524.views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523.viewId];
    if (!Ue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46526)) throw Error("Pivot view not found: " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523.viewId);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46522.get(k).calculate({
      unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523.unitId,
      tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523.tableId,
      viewId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523.viewId,
      pivot: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46526.config["pivot"],
      filters: [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46526.filter ?? null, ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46523.filters ?? [])]
    });
  }
};
function Ue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532) {
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532.type) === BaseViewType.Pivot && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532.config == "object" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532.config !== null && "pivot" in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532.config && "chart" in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532.config;
}
export { He as CalculateBasePivotCommand };
