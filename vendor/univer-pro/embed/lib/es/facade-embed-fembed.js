import { CreateEmbedCommand, EMBED_CHILD_CREATE_OPTIONS, EmbedError, EmbedErrorCode, EmbedHostAdapterRegistryService, EmbedHostEntryEnum, EmbedModelService, EmbedReferencedUnitApiResolverRegistryService, EmbedReferencedUnitMaterializeService, IReferencedUnitManagerService, RemoveEmbedCommand, SetEmbedBoundsCommand, SetEmbedDisplayTargetCommand, SetEmbedSheetPlacementCommand, normalizeResourceRefLocator } from "@univerjs-pro/embed";
import { FBase, FEnum, FUniver } from "@univerjs/core/facade";
import { ICommandService, Inject, Injector, UniverInstanceType, generateRandomId } from "@univerjs/core";
let D = class extends FBase {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) {
    super(), this._descriptor = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, this._univerAPI = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, this._materializeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, this._apiResolverRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, this._modelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, this._hostAdapterRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612;
  }
  getId() {
    return this._descriptor["embedId"];
  }
  getHostUnitId() {
    return this._descriptor["hostUnitId"];
  }
  getHostAnchorId() {
    return this._descriptor["hostAnchorId"];
  }
  getChildUnitId() {
    return this._descriptor["childUnitId"];
  }
  getHostType() {
    return this._descriptor["hostType"];
  }
  getChildType() {
    return this._descriptor["childType"];
  }
  getEntry() {
    return this._descriptor["entry"];
  }
  getDescriptor() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = this._modelService["getDescriptor"](this._descriptor["hostUnitId"], this._descriptor["embedId"]) ?? this._descriptor;
    return this._descriptor = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
      source: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.source
      },
      displayTarget: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.displayTarget ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.displayTarget
      } : undefined,
      context: this._hostAdapterRegistry["readContext"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621)
    };
  }
  getBounds() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = this.getDescriptor().context;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.resolved && "bounds" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.bounds
    } : null;
  }
  setBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) {
    if (!O(this._descriptor["entry"])) throw new EmbedError(EmbedErrorCode.CapabilityNotSupported, {
      entry: this._descriptor["entry"],
      capability: "bounds"
    });
    return this._commandService["syncExecuteCommand"](SetEmbedBoundsCommand.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625
    });
  }
  getPlacement() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = this.getDescriptor().context;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.resolved && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.entry === EmbedHostEntryEnum.SheetsFloatingObject ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.placement : null;
  }
  setPlacement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) {
    if (this._descriptor["entry"] !== EmbedHostEntryEnum.SheetsFloatingObject) throw new EmbedError(EmbedErrorCode.CapabilityNotSupported, {
      entry: this._descriptor["entry"],
      capability: "sheet-placement"
    });
    return this._commandService["syncExecuteCommand"](SetEmbedSheetPlacementCommand.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629
    });
  }
  getDisplayTarget() {
    return this._descriptor["displayTarget"] ? {
      ...this._descriptor["displayTarget"]
    } : undefined;
  }
  setDisplayTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = this._commandService["syncExecuteCommand"](SetEmbedDisplayTargetCommand.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      displayTarget: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631
    });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 && (this._descriptor = {
      ...this._descriptor,
      displayTarget: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631
      } : undefined
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632;
  }
  async loadAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = {}) {
    let {
        signal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = await this._materializeService["materializeDescriptor"]({
        descriptor: this._descriptor,
        signal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
        createOptions: {
          ...EMBED_CHILD_CREATE_OPTIONS,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637
        }
      });
    if (this._descriptor = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.childType == null) throw new EmbedError(EmbedErrorCode.MaterializedChildUnitRequired, {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.embedId
    });
    return this._apiResolverRegistry["resolve"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.childUnitId,
      unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.childType,
      injector: this._injector,
      api: this._univerAPI
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](RemoveEmbedCommand.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"]
    });
  }
};
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 === EmbedHostEntryEnum.SheetsFloatingObject || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 === EmbedHostEntryEnum.SlidesFloatingObject || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 === EmbedHostEntryEnum.BoardsFloatingObject;
}
export { D as FEmbed };
