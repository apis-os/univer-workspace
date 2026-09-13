import { ApplyBaseJson1Mutation, BaseJson1OpApplier, BaseJson1OpFactory, IBaseProjectionService, IBaseViewRegistryService, UniverBasesPlugin, UniverRemoteBasesPlugin, canEditBaseTargets, getBaseDashboardPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, matchesBaseCondition, normalizeBaseDateSerial, resolveBaseDateFieldConfig } from "@univerjs-pro/bases";
import { BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseViewType, CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Optional, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { BehaviorSubject, filter, map } from "rxjs";
import { ChartModel, ChartTypeBits, StaticChartSource, UniverChartPlugin, generateChartContext, reconcileChartContext } from "@univerjs-pro/engine-chart";
import { DataFieldManager, PivotTable, PivotTableFiledAreaEnum, PivotView, isErrorValue, isPrefixValue } from "@univerjs-pro/engine-pivot";
import { IShapeHostAdapterRegistry, UniverShapePlugin, canApplyShapeFormulaLastValue } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverShapeEditorPlugin, createFormulaShapeData } from "@univerjs-pro/shape-editor";
import { DataSyncPrimaryController } from "@univerjs/rpc";
import { st } from "./internal-glue.js";
function rt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46650) {
  let {
      collection: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46651
    } = st(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46650),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46652 = new PivotTable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46651),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46653 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46650.fieldOrder["find"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46164 => mt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46650, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46164)),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46654 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46650.fieldOrder["find"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46165 => ht(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46650, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46165));
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46653 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46652.addFieldWithSourceId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46653, PivotTableFiledAreaEnum.Row, undefined, "row-" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46653), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46654 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46652.addFieldWithSourceId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46654, PivotTableFiledAreaEnum.Value, undefined, "value-" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46654), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46652.toJSON();
}
function mt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46708, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46709) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46710 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46708.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46709];
  return !!(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46710 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46710.system !== true && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46710.type !== BaseFieldType.RecordId && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46710.type !== BaseFieldType.Attachment && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46710.type !== BaseFieldType.Formula);
}
function ht(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46714, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46715) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46716;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46717 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46716 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46714.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46715]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46716.type;
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46717 === BaseFieldType.Number || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46717 === BaseFieldType.Currency || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46717 === BaseFieldType.Progress || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46717 === BaseFieldType.Rating;
}
export { rt as createDefaultBasePivotSnapshot };
