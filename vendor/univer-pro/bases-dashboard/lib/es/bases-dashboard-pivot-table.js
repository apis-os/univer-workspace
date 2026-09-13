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
function ot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46670, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46671) {
  let {
      collection: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46672
    } = st(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46670),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46673 = new PivotTable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46672);
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46671 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46673.fromJSON(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46671), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46673;
}
export { ot as createBasePivotTable };
