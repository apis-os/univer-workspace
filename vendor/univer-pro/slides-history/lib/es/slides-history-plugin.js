import { HistoryMutationService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { AddSlideElementMutation, AddSlidePageMutation, InsertDrawingObjectMutation, RemoveSlideElementMutation, RemoveSlidePageMutation, SetActiveSlideCommand, UniverSlidesPlugin } from "@univerjs-pro/slides";
import { DependentOn, Disposable, IAuthzIoService, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { U } from "./slides-history-diff.js";
import { Y } from "./slides-history-slides-unit-comparison-adapter.js";
const A = {};
let N = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) {
    super(), this._authzIoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.register({
      type: UniverInstanceType.UNIVER_SLIDE,
      canView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => this._hasPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, UnitAction.ViewHistory),
      canRevert: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => !!this._getSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) && this._hasPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, UnitAction.RecoverHistory),
      captureLocation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = ox31fcaa,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464;
        return {
          slideId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463(174)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463(162)][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463(205)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463(129)]()
        };
      },
      restoreLocation: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) => this._restoreLocation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 : undefined)
    }));
  }
  async _restoreLocation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = ox59e17e,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641;
    !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(167)]) || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(174)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638)) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(162)][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(181)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.slideId)) || (await this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(157)].executeCommand(SetActiveSlideCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(167)]
    }));
  }
  _getSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) {
    return this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, UniverInstanceType.UNIVER_SLIDE) ?? null;
  }
  async _hasPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) {
    return (await this._authzIoService["allowed"]({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648,
      objectID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648,
      objectType: UnitObject.Slide,
      actions: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649]
    })).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.action === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.allowed);
  }
};
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 && (!("slideId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.slideId == "string");
}
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689
    } = merge({}, A, this._config);
    this._configService["setConfig"]("slides-history.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689);
  }
  onStarting() {
    registerDependencies(this._injector, [[U], [N], [Y]]), this.disposeWithMe(this._injector["get"](UnitComparisonAdapterRegistryService).register(this._injector["get"](Y))), this._injector["get"](N);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 as UniverSlidesHistoryPlugin };
export { N };
