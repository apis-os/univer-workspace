import { ApplyBaseJson1Mutation, BaseJson1OpApplier, BaseJson1OpFactory, IBaseProjectionService, IBaseViewRegistryService, UniverBasesPlugin, UniverRemoteBasesPlugin, canEditBaseTargets, getBaseDashboardPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, matchesBaseCondition, normalizeBaseDateSerial, resolveBaseDateFieldConfig } from "@univerjs-pro/bases";
import { BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseViewType, CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Optional, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { BehaviorSubject, filter, map } from "rxjs";
import { ChartModel, ChartTypeBits, StaticChartSource, UniverChartPlugin, generateChartContext, reconcileChartContext } from "@univerjs-pro/engine-chart";
import { DataFieldManager, PivotTable, PivotTableFiledAreaEnum, PivotView, isErrorValue, isPrefixValue } from "@univerjs-pro/engine-pivot";
import { IShapeHostAdapterRegistry, UniverShapePlugin, canApplyShapeFormulaLastValue } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverShapeEditorPlugin, createFormulaShapeData } from "@univerjs-pro/shape-editor";
import { DataSyncPrimaryController } from "@univerjs/rpc";
import { ct, st } from "./internal-glue.js";
function at(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46662) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46663 = lt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46662.table, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46662.filters ?? []),
    {
      collection: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46664
    } = st(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46662.table, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46663),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46665 = new PivotTable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46664);
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46665.fromJSON(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46662.pivot), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46665.query().toJSON();
}
function lt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46688, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46689) {
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46689.filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46178 => !!(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46178 != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46178.conditions["length"]));
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.length === 0 ? ct(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46688) : ct(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46688).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46179 => var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.every(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => ut(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46688, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620)));
}
function ut(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46692, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46693, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46694) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46695 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46694.conditions["map"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46180 => {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46692.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46180.fieldId];
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46181 ? matchesBaseCondition(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46693.values[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46180.fieldId], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46180.operator, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46180.operand, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46181) : false;
  });
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46694.conjunction === BaseFilterConjunction.OR ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46695.some(Boolean) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46695.every(Boolean);
}
export { at as calculateBasePivot };
