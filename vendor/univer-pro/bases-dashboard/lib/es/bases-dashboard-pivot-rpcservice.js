import { ApplyBaseJson1Mutation, BaseJson1OpApplier, BaseJson1OpFactory, IBaseProjectionService, IBaseViewRegistryService, UniverBasesPlugin, UniverRemoteBasesPlugin, canEditBaseTargets, getBaseDashboardPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, matchesBaseCondition, normalizeBaseDateSerial, resolveBaseDateFieldConfig } from "@univerjs-pro/bases";
import { BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseViewType, CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Optional, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { BehaviorSubject, filter, map } from "rxjs";
import { ChartModel, ChartTypeBits, StaticChartSource, UniverChartPlugin, generateChartContext, reconcileChartContext } from "@univerjs-pro/engine-chart";
import { DataFieldManager, PivotTable, PivotTableFiledAreaEnum, PivotView, isErrorValue, isPrefixValue } from "@univerjs-pro/engine-pivot";
import { IShapeHostAdapterRegistry, UniverShapePlugin, canApplyShapeFormulaLastValue } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverShapeEditorPlugin, createFormulaShapeData } from "@univerjs-pro/shape-editor";
import { DataSyncPrimaryController } from "@univerjs/rpc";
import { C, E } from "./internal-glue.js";
let k = class extends Disposable {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4681) {
    super(), this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4681, E(this, "_pending", new Map());
  }
  calculate(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4683) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = generateRandomId();
    return new Promise((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4610) => {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = setTimeout(() => {
        this._pending["delete"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4610(Error("Base pivot calculation timed out: " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4683.viewId));
      }, 30000);
      this._pending["set"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684, {
        resolve: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D469,
        reject: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4610,
        timeout: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4611
      }), this._commandService["executeCommand"](C.id, {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4683,
        requestId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684
      }, {
        onlyLocal: true
      }).then(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461 => {
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461 || this._reject(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684, Error("Unable to request Base pivot calculation: " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4683.viewId));
      }).catch(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463 => {
        this._reject(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463 instanceof Error ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463 : Error(String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463)));
      });
    });
  }
  handleResponse(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4687) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = this._pending["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4687.requestId);
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4688 && (clearTimeout(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4688.timeout), this._pending["delete"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4687.requestId), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4688.resolve(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4687));
  }
  dispose() {
    for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4615 of this._pending["values"]()) clearTimeout(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4615.timeout), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4615.reject(Error("Base\x20pivot\x20calculation\x20service\x20disposed."));
    this._pending["clear"](), super.dispose();
  }
  _reject(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4692) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = this._pending["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4691);
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4693 && (clearTimeout(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4693.timeout), this._pending["delete"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4691), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4693.reject(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4692));
  }
};
export { k as BasePivotRPCService };
