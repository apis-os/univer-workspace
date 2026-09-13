import { AddBoardElementMutation, RemoveBoardElementMutation, RemoveBoardElementOnlyMutation, UniverBoardsPlugin } from "@univerjs-pro/boards";
import { HistoryMutationService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, IAuthzIoService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { H } from "./boards-history-diff.js";
import { Y } from "./boards-history-boards-unit-comparison-adapter.js";
const A = {};
let N = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630) {
    super(), this._authzIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.register({
      type: UniverInstanceType.UNIVER_BOARD,
      canView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => this._hasPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, UnitAction.ViewHistory),
      canRevert: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => !!this._getBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) && this._hasPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, UnitAction.RecoverHistory),
      captureLocation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = ox5728d8,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464;
        return {
          pageId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463(355)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463(363)]()
        };
      },
      restoreLocation: () => undefined
    }));
  }
  _getBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) {
    return this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, UniverInstanceType.UNIVER_BOARD) ?? null;
  }
  async _hasPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637) {
    return (await this._authzIoService["allowed"]({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
      objectID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
      objectType: UnitObject.Board,
      actions: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637]
    })).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.action === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.allowed);
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681
    } = merge({}, A, this._config);
    this._configService["setConfig"]("boards-history.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681);
  }
  onStarting() {
    registerDependencies(this._injector, [[H], [N], [Y]]), this.disposeWithMe(this._injector["get"](UnitComparisonAdapterRegistryService).register(this._injector["get"](Y))), this._injector["get"](N);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 as UniverBoardsHistoryPlugin };
export { N };
